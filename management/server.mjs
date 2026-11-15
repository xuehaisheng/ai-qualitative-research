import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import MarkdownIt from 'markdown-it';
import sanitize from 'sanitize-html';
import {database,collect,stats} from './lib/database.mjs';
import {ContentStore,hash} from './lib/content.mjs';
export const passwordHash=(password,salt=crypto.randomBytes(24).toString('hex'))=>({salt,hash:crypto.scryptSync(password,salt,64).toString('hex')});
const here=path.dirname(fileURLToPath(import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.gif':'image/gif','.pdf':'application/pdf'};
const fail=(message,status=400)=>Object.assign(new Error(message),{status});
export async function createApp(options={}){
 const repo=options.repo||process.env.REPO_DIR||path.resolve(here,'..'),dataDir=options.dataDir||process.env.ADMIN_DATA_DIR||path.join(here,'.admin-data');await fs.mkdir(dataDir,{recursive:true,mode:0o700});await fs.mkdir(path.join(dataDir,'media'),{recursive:true});
 let account=options.account;const envPassword=options.password||process.env.ADMIN_PASSWORD;
 if(envPassword)account=passwordHash(envPassword);else if(!account){try{account=JSON.parse(await fs.readFile(path.join(dataDir,'account.json'),'utf8'));}catch{throw new Error('请先在 management 目录运行 npm run setup，或设置 ADMIN_PASSWORD 环境变量。');}}
 const db=database(path.join(dataDir,'editor.sqlite'));const content=new ContentStore(repo,db),sessions=options.sessions||new Map(),attempts=new Map(),collectRates=new Map();
 const siteOrigin=options.siteOrigin||process.env.SITE_ORIGIN||'https://xuehaisheng.github.io',siteBase=options.siteBase||'/ai-qualitative-research/';
 const publicUrl=process.env.PUBLIC_URL||'',publishEnabled=options.publishEnabled??process.env.ADMIN_PUBLISH==='git';
 const md=new MarkdownIt({html:true,linkify:true});let lastCleanup=0;
 const json=(res,status,data,extra={})=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',...extra});res.end(JSON.stringify(data));};
 const read=async(req,limit=2_100_000)=>{let size=0,chunks=[];for await(const c of req){size+=c.length;if(size>limit)throw fail('文件或内容超过允许大小',413);chunks.push(c);}try{return JSON.parse(Buffer.concat(chunks).toString());}catch{throw fail('请求格式无效');}};
 const rate=(map,key,limit,window=60000)=>{const now=Date.now();let r=map.get(key);if(!r||r.time<now-window)r={time:now,n:0};r.n++;map.set(key,r);if(map.size>5000)for(const[k,v]of map)if(v.time<now-window)map.delete(k);return r.n<=limit;};
 const handler=async(req,res)=>{
  res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','same-origin');res.setHeader('X-Frame-Options','SAMEORIGIN');res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' https: data:; connect-src 'self'; frame-src 'self'; frame-ancestors 'self'; base-uri 'none'; form-action 'self'");
  try{
   const url=new URL(req.url,'http://admin.local'),route=url.pathname,ip=req.socket.remoteAddress||'unknown';
   const appOrigin=publicUrl?new URL(publicUrl).origin:`http://${req.headers.host}`;
   const mutating=['POST','PUT','PATCH','DELETE'].includes(req.method);
   if(route==='/health'){json(res,200,{ok:true});return;}
   if(route==='/api/collect'){
    if(req.headers.origin!==siteOrigin&&req.headers.origin!==appOrigin)throw fail('来源不被允许',403);
    res.setHeader('Access-Control-Allow-Origin',req.headers.origin);res.setHeader('Vary','Origin');
    if(req.method==='OPTIONS'){res.setHeader('Access-Control-Allow-Methods','POST, OPTIONS');res.setHeader('Access-Control-Allow-Headers','Content-Type');res.writeHead(204);res.end();return;}
    if(req.method!=='POST')throw fail('方法不被允许',405);if(!rate(collectRates,ip,120))throw fail('请求过多',429);
    const accepted=collect(db,await read(req,6000),req.headers['user-agent']||'',siteBase);if(!accepted)throw fail('统计事件无效');
    if(Date.now()-lastCleanup>3600000){db.prepare("DELETE FROM views WHERE created < ?").run(new Date(Date.now()-180*86400000).toISOString());lastCleanup=Date.now();}
    res.writeHead(204);res.end();return;
   }
   if(mutating){if(req.headers.origin!==appOrigin)throw fail('请求来源无效，请刷新后台后重试',403);if(!(req.headers['content-type']||'').startsWith('application/json'))throw fail('仅支持 JSON 请求',415);}
   const cookie=(req.headers.cookie||'').split(';').map(x=>x.trim()).find(x=>x.startsWith('aiq_session='))?.slice(12);
   const session=cookie&&sessions.get(cookie);if(session&&session.expires<Date.now()){sessions.delete(cookie);}
   const authenticated=session&&session.expires>Date.now();
   if(route==='/api/login'&&req.method==='POST'){
    if(!rate(attempts,ip,8,15*60000))throw fail('尝试次数过多，请 15 分钟后重试',429);const data=await read(req,2000);const candidate=passwordHash(String(data.password||''),account.salt);
    if(!crypto.timingSafeEqual(Buffer.from(candidate.hash,'hex'),Buffer.from(account.hash,'hex')))throw fail('密码不正确',401);
    const token=crypto.randomBytes(32).toString('hex'),csrf=crypto.randomBytes(24).toString('hex');sessions.set(token,{csrf,expires:Date.now()+8*3600000});res.setHeader('Set-Cookie',`aiq_session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800${publicUrl.startsWith('https:')?'; Secure':''}`);json(res,200,{csrf});return;
   }
   if(route.startsWith('/api/')||route.startsWith('/media/')){
    if(!authenticated)throw fail('请先登录',401);if(mutating&&req.headers['x-csrf-token']!==session.csrf)throw fail('会话校验失败，请重新登录',403);
   }
   if(route==='/api/session'){json(res,200,{csrf:session.csrf,siteUrl:siteOrigin+siteBase,publishEnabled,trackingUrl:publicUrl?publicUrl.replace(/\/$/,'')+'/api/collect':null});return;}
   if(route==='/api/logout'&&req.method==='POST'){sessions.delete(cookie);res.setHeader('Set-Cookie','aiq_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0');json(res,200,{ok:true});return;}
   if(route==='/api/overview'){
    const counts={};for(const kind of ['notes','knowledge','events','members'])counts[kind]=(await content.list(kind)).filter(x=>!x.deleted).length;
    json(res,200,{counts,pending:db.prepare('SELECT kind,id,deleted,updated FROM drafts ORDER BY updated DESC').all(),audit:db.prepare('SELECT * FROM audit ORDER BY id DESC LIMIT 12').all(),publishing:content.publishing,publishEnabled});return;
   }
   if(route==='/api/stats'){json(res,200,stats(db,url.searchParams.get('days')));return;}
   if(route==='/api/stats.csv'){
    const report=stats(db,url.searchParams.get('days'));const cell=v=>'"'+String(v).replace(/"/g,'""').replace(/^[=+@-]/,"'$&")+'"';const csv='\uFEFF'+[['路径','访问量','访客数','有效阅读','平均活跃秒数','平均阅读深度'],...report.pages.map(r=>[r.path,r.views,r.visitors,r.reads,r.seconds,r.depth])].map(r=>r.map(cell).join(',')).join('\r\n');res.writeHead(200,{'Content-Type':'text/csv; charset=utf-8','Content-Disposition':'attachment; filename="reading-statistics.csv"'});res.end(csv);return;
   }
   if(route==='/api/preview'&&req.method==='POST'){
    const data=await read(req);const source=String(data.body||'').replace(/{{\s*'([^']+)'\s*\|\s*relative_url\s*}}/g,(_,p)=>siteOrigin+siteBase.replace(/\/$/,'')+p);
    const rendered=sanitize(md.render(source),{allowedTags:sanitize.defaults.allowedTags.concat(['img','figure','figcaption','details','summary']),allowedAttributes:{...sanitize.defaults.allowedAttributes,img:['src','alt','width','height','loading'],a:['href','title','target','rel'], '*':['class','id']},allowedSchemes:['https','http','mailto'],transformTags:{a:sanitize.simpleTransform('a',{rel:'noopener noreferrer',target:'_blank'})}});
    json(res,200,{html:rendered,hasTemplates:/{%|{{/.test(source)});return;
   }
   if(route==='/api/media'&&req.method==='POST'){
    const data=await read(req,15_000_000);if(!/^[\w., ()\u3000-\u9fff-]{1,150}$/.test(data.name||''))throw fail('文件名无效');const bytes=Buffer.from(data.base64||'','base64');if(bytes.length>10*1024*1024||!bytes.length)throw fail('文件需小于 10MB');
    const ext=path.extname(data.name).toLowerCase();const valid=ext==='.pdf'?bytes.subarray(0,5).toString()==='%PDF-':['.jpg','.jpeg'].includes(ext)?bytes[0]===255&&bytes[1]===216:ext==='.png'?bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])):ext==='.webp'?bytes.subarray(0,4).toString()==='RIFF'&&bytes.subarray(8,12).toString()==='WEBP':ext==='.gif'?bytes.subarray(0,3).toString()==='GIF':false;if(!valid)throw fail('仅支持有效的 JPG、PNG、WebP、GIF 图片或 PDF');
    const id=hash(bytes).slice(0,24),file=`${id}${ext}`,local=path.join(dataDir,'media',file),target=`assets/uploads/${file}`;await fs.writeFile(local,bytes,{mode:0o600});db.prepare('INSERT OR IGNORE INTO media(id,path,local_path,type) VALUES(?,?,?,?)').run(id,target,local,mime[ext]);content.audit('upload','media',file);json(res,201,{path:'/'+target,preview:'/media/'+id});return;
   }
   if(route.startsWith('/media/')){const file=db.prepare('SELECT * FROM media WHERE id=?').get(route.slice(7));if(!file)throw fail('文件不存在',404);res.writeHead(200,{'Content-Type':file.type,'Cache-Control':'private, max-age=300'});res.end(await fs.readFile(file.local_path));return;}
   if(route==='/api/changes'){const files=await content.changes();json(res,200,{files:[...files].map(([file,value])=>({file,action:value===null?'删除':'更新',bytes:value?Buffer.byteLength(value):0})),media:db.prepare('SELECT id,path FROM media WHERE published=0').all()});return;}
   if(route==='/api/backup'){const payload={format:'aiq-drafts-v1',created:new Date().toISOString(),drafts:db.prepare('SELECT * FROM drafts').all()};json(res,200,payload,{'Content-Disposition':'attachment; filename="aiq-drafts.json"'});return;}
   if(route==='/api/publish'&&req.method==='POST'){if(!publishEnabled)throw fail('发布连接尚未开启，草稿已安全保存。请按部署说明连接 GitHub 发布副本。',503);const data=await read(req,2000);json(res,200,await content.publish(String(data.message||'').slice(0,200)));return;}
   const match=route.match(/^\/api\/content\/(notes|knowledge|events|members)(?:\/([a-zA-Z0-9._-]+))?$/);
   if(match){const[,kind,id]=match;if(req.method==='GET'){json(res,200,id?await content.get(kind,id):await content.list(kind));return;}if(!id)throw fail('缺少内容标识');if(req.method==='PUT'){const data=await read(req);json(res,200,await content.save(kind,id,data.record,data.revision));return;}if(req.method==='DELETE'){const data=await read(req);json(res,200,await content.remove(kind,id,data.revision));return;}if(req.method==='POST'){content.discard(kind,id);json(res,200,{ok:true});return;}}
   if(route.startsWith('/api/'))throw fail('接口不存在',404);
   if(req.method!=='GET'&&req.method!=='HEAD')throw fail('方法不被允许',405);
   const relative=route==='/'?'index.html':route.slice(1);const full=path.resolve(here,'public',relative);if(!full.startsWith(path.join(here,'public')+path.sep))throw fail('路径无效',403);const bytes=await fs.readFile(full);res.writeHead(200,{'Content-Type':mime[path.extname(full)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(req.method==='HEAD'?undefined:bytes);
  }catch(e){const status=e.status||(e.code==='ENOENT'?404:500);if(status>=500)console.error('[admin]',e.message);json(res,status,{error:status===500?'操作未完成，请查看服务日志；草稿会保留。':e.message});}
 };
 return {handler,db,content,close:()=>db.close()};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const app=await createApp();const argument=name=>{const i=process.argv.indexOf(name);return i<0?undefined:process.argv[i+1];};const port=Number(argument('--port')||process.env.PORT||4321),host=argument('--host')||process.env.HOST||process.env.ADMIN_HOST||'127.0.0.1';http.createServer(app.handler).listen(port,host,()=>console.log(`AI × Q management ready at http://${host}:${port}`));
}
