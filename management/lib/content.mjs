import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import YAML from 'yaml';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import os from 'node:os';
const exec = promisify(execFile);
export const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const kinds = ['notes','knowledge','events','members'];
const directories = {notes:'_posts',knowledge:'_wiki'};
const dataFiles = {events:'_data/events.json',members:'_data/members.json'};
const error = (message,status=400) => Object.assign(new Error(message),{status});
const idPattern = /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,149}$/;
export function validate(kind,id,data) {
  if(!kinds.includes(kind)||!idPattern.test(id)||id.includes('..')) throw error('内容类型或标识无效');
  if(!data||typeof data!=='object'||Array.isArray(data)) throw error('内容格式无效');
  const text=(v,max=10000)=> typeof v==='string'&&v.length<=max;
  const bilingual=(v,required=false)=> v&&text(v.ja)&&text(v.en)&&(!required||v.ja.trim());
  if(directories[kind]) {
    if(!text(data.meta?.title,300)||!data.meta.title.trim()) throw error('请填写日文标题');
    if(!/^[a-z0-9][a-z0-9-]{0,99}$/.test(data.meta.key||'')) throw error('地址标识仅支持小写字母、数字和连字符');
    if(!text(data.bodyJa,1_000_000)||!text(data.bodyEn,1_000_000)) throw error('正文过长或格式无效');
    if(kind==='notes'&&!/^\d{4}-\d{2}-\d{2}/.test(String(data.meta.date||''))) throw error('请填写发布日期');
    if(kind==='knowledge'&&!['basics','behavior','tools','research','practice','mechanisms','limits','methods','ethics','frontier'].includes(data.meta.category||'')) {
      if(!text(data.meta.category,100)||!data.meta.category) throw error('请选择知识点分类');
    }
  } else {
    if(!bilingual(kind==='members'?data.name:data.title,true)) throw error('请填写日文名称');
    for(const key of kind==='members'?['role','affiliation','bio']:['place','summary']) if(!bilingual(data[key]))throw error('双语字段格式无效');
    if(kind==='events'&&(!/^\d{4}-\d{2}(?:-\d{2})?$/.test(data.date)||!['upcoming','past'].includes(data.status))) throw error('活动日期或状态无效');
    const urls=kind==='members'?[data.profile_url]:(data.links||[]).map(l=>l.url);
    if(urls.some(u=>typeof u!=='string'||u.length>2000||u&& !(/^(https?:\/\/[^\s]+|\/(?!\/)[^\s]*)$/.test(u))))throw error('链接请使用 https:// 或网站内的 / 路径');
    if(kind==='events'&&(!Array.isArray(data.links)||data.links.length>20||data.links.some(l=>!bilingual(l.label,true))))throw error('活动链接格式无效');
    if(kind==='members'&&(!Number.isFinite(data.order)||data.order<0||data.order>9999))throw error('成员排序必须为 0–9999');
  }
}
export class ContentStore {
  constructor(repo,db){this.repo=path.resolve(repo);this.db=db;this.publishing=false;}
  async safeRead(relative){const full=path.resolve(this.repo,relative);if(!full.startsWith(this.repo+path.sep))throw error('路径无效');try{const real=await fs.realpath(full);if(real!==full)throw error('不支持符号链接');return await fs.readFile(full,'utf8');}catch(e){if(e.code==='ENOENT')return null;throw e;}}
  async source(kind,id){
    if(!kinds.includes(kind)||id&&(!idPattern.test(id)||id.includes('..')))throw error('内容标识无效');
    if(directories[kind]){
      const list=(await fs.readdir(path.join(this.repo,directories[kind]))).filter(n=>n.endsWith('.md'));
      const records=[];
      for(const filename of list){const raw=await this.safeRead(`${directories[kind]}/${filename}`);if(!raw?.startsWith('---\n'))continue;const end=raw.indexOf('\n---',4);if(end<0)continue;const meta=YAML.parse(raw.slice(4,end));const body=raw.slice(end+4).replace(/^\r?\n/,'');const marker=body.indexOf('<!--EN-->');records.push({kind,id:filename.slice(0,-3),meta,bodyJa:marker<0?body:body.slice(0,marker),bodyEn:marker<0?'':body.slice(marker+9),sourceHash:hash(raw)});}
      return id?records.find(r=>r.id===id):records;
    }
    const raw=await this.safeRead(dataFiles[kind]);const list=raw?JSON.parse(raw):[];
    const records=list.map(item=>({...item,kind,sourceHash:hash(JSON.stringify(item))}));return id?records.find(r=>r.id===id):records;
  }
  draft(kind,id){return this.db.prepare('SELECT * FROM drafts WHERE kind=? AND id=?').get(kind,id);}
  async get(kind,id){const d=this.draft(kind,id),source=await this.source(kind,id);if(!d&&!source)throw error('内容不存在',404);return d?{...JSON.parse(d.payload),kind,id,deleted:!!d.deleted,draft:true,revision:hash(d.payload+':'+d.updated),updated:d.updated}:{...source,draft:false,revision:source.sourceHash};}
  async list(kind){const base=await this.source(kind);const map=new Map(base.map(v=>[v.id,{...v,draft:false,revision:v.sourceHash}]));for(const d of this.db.prepare('SELECT * FROM drafts WHERE kind=?').all(kind))map.set(d.id,{...JSON.parse(d.payload),kind,id:d.id,draft:true,deleted:!!d.deleted,revision:hash(d.payload+':'+d.updated),updated:d.updated});return [...map.values()];}
  async save(kind,id,data,revision){
    if(this.publishing)throw error('发布进行中，请稍后保存',409);validate(kind,id,data);
    let current;try{current=await this.get(kind,id);}catch(e){if(e.status!==404)throw e;}
    if((current?.revision||null)!==(revision||null))throw error('这条内容已在其他窗口修改，请重新载入后再保存',409);
    if(directories[kind]){const duplicate=(await this.list(kind)).find(x=>x.id!==id&&x.meta.key===data.meta.key&&!x.deleted);if(duplicate)throw error('这个地址标识已被其他内容使用',409);if(current&&current.meta.key!==data.meta.key)throw error('已发表内容的地址标识不可更改，以免原有链接失效');}
    const existing=this.draft(kind,id),source=await this.source(kind,id);const clean={...data,id};for(const key of ['kind','revision','draft','deleted','updated','sourceHash'])delete clean[key];
    const payload=JSON.stringify(directories[kind]?{meta:data.meta,bodyJa:data.bodyJa,bodyEn:data.bodyEn}:clean);
    const updated=new Date().toISOString()+crypto.randomBytes(3).toString('hex');
    this.db.prepare('INSERT INTO drafts(kind,id,payload,base_hash,deleted,updated) VALUES(?,?,?,?,0,?) ON CONFLICT(kind,id) DO UPDATE SET payload=excluded.payload,deleted=0,updated=excluded.updated').run(kind,id,payload,existing?.base_hash??source?.sourceHash??null,updated);
    this.audit('save',kind,id);return this.get(kind,id);
  }
  async remove(kind,id,revision){if(this.publishing)throw error('发布进行中',409);const current=await this.get(kind,id);if(current.revision!==revision)throw error('内容版本已更新，请重新载入',409);if(!current.draft)await this.save(kind,id,current,revision);this.db.prepare('UPDATE drafts SET deleted=1,updated=? WHERE kind=? AND id=?').run(new Date().toISOString(),kind,id);this.audit('archive',kind,id);return this.get(kind,id);}
  discard(kind,id){if(this.publishing)throw error('发布进行中',409);this.db.prepare('DELETE FROM drafts WHERE kind=? AND id=?').run(kind,id);this.audit('discard',kind,id);}
  audit(action,kind='',id='',detail=''){this.db.prepare('INSERT INTO audit(action,kind,item_id,detail,created) VALUES(?,?,?,?,?)').run(action,kind,id,detail,new Date().toISOString());}
  async changes(){
    const changes=new Map(),rows=this.db.prepare('SELECT * FROM drafts ORDER BY kind,id').all();
    for(const d of rows){const source=await this.source(d.kind,d.id);if((source?.sourceHash||null)!==d.base_hash)throw error(`原始内容已变动：${d.id}，请先核对草稿`,409);const data=JSON.parse(d.payload);if(directories[d.kind]){
      const file=`${directories[d.kind]}/${d.id}.md`;const old=await this.safeRead(file);let doc=old?YAML.parseDocument(old.slice(4,old.indexOf('\n---',4))):new YAML.Document();for(const [k,v]of Object.entries(data.meta))doc.set(k,v);const body=data.bodyJa+(data.bodyEn.trim()?'<!--EN-->'+data.bodyEn:'');changes.set(file,d.deleted?null:`---\n${doc.toString()}---\n${body}`);
    }else{
      const file=dataFiles[d.kind];let items=changes.has(file)?JSON.parse(changes.get(file)):JSON.parse(await this.safeRead(file)||'[]');items=items.filter(x=>x.id!==d.id);if(!d.deleted)items.push(data);changes.set(file,JSON.stringify(items,null,2)+'\n');
    }}return changes;
  }
  async publish(message){
    if(this.publishing)throw error('发布正在进行',409);this.publishing=true;let temp;
    try{
      const changes=await this.changes();if(!changes.size)throw error('没有待发布的内容');
      const git=async(args,cwd=this.repo)=>(await exec('git',args,{cwd,timeout:120000,maxBuffer:5_000_000})).stdout.trim();
      if(await git(['status','--porcelain']))throw error('发布副本有未提交的修改。请先提交或清理这些修改；后台草稿不会丢失。',409);
      await git(['fetch','origin','main']);if(await git(['rev-parse','HEAD'])!==await git(['rev-parse','origin/main']))throw error('发布副本尚未同步 main，请先更新副本再发布',409);
      temp=await fs.mkdtemp(path.join(os.tmpdir(),'aiq-publish-'));await git(['worktree','add','--detach',temp,'origin/main']);
      for(const[file,value]of changes){const full=path.join(temp,file);if(value===null)await fs.rm(full,{force:true});else{await fs.mkdir(path.dirname(full),{recursive:true});await fs.writeFile(full,value);}await git(['add','--',file],temp);}
      const media=this.db.prepare('SELECT * FROM media WHERE published=0').all();for(const m of media){const full=path.join(temp,m.path);await fs.mkdir(path.dirname(full),{recursive:true});await fs.copyFile(m.local_path,full);await git(['add','--',m.path],temp);}
      await git(['-c','user.name=AI × Q editor','-c','user.email=editor@users.noreply.github.com','commit','-m',message||'Update site content from the editorial dashboard'],temp);
      const sha=await git(['rev-parse','HEAD'],temp);await git(['push','origin','HEAD:refs/heads/main'],temp);
      this.db.exec('BEGIN');try{this.db.prepare('DELETE FROM drafts').run();for(const m of media)this.db.prepare('UPDATE media SET published=1 WHERE id=?').run(m.id);this.audit('publish','','',sha);this.db.exec('COMMIT');}catch(e){this.db.exec('ROLLBACK');throw e;}
      let syncWarning='';try{await git(['merge','--ff-only',sha]);}catch{syncWarning='发布已成功，但本地副本需要 git pull --ff-only 后再编辑。';}
      return {sha,files:changes.size,warning:syncWarning,url:'https://github.com/xuehaisheng/ai-qualitative-research/actions'};
    }finally{if(temp){await exec('git',['worktree','remove','--force',temp],{cwd:this.repo}).catch(()=>{});await fs.rm(temp,{recursive:true,force:true});}this.publishing=false;}
  }
}
