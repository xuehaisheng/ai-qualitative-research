function github_(method,route,data,optional) {
  var token=PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');assert_(token,'请先在“连接与设置”连接 GitHub');
  var repo=PropertiesService.getScriptProperties().getProperty('GITHUB_REPO')||'xuehaisheng/ai-qualitative-research';
  assert_(/^[\w.-]+\/[\w.-]+$/.test(repo),'仓库配置无效');
  var response=UrlFetchApp.fetch('https://api.github.com/repos/'+repo+route,{method:method,contentType:'application/json',headers:{Authorization:'Bearer '+token,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'},payload:data===undefined?undefined:JSON.stringify(data),muteHttpExceptions:true});
  var code=response.getResponseCode();if(optional&&code===404)return null;
  assert_(code>=200&&code<300,'GitHub 请求未完成（'+code+'）。请检查令牌权限、仓库状态或稍后重试。');
  return JSON.parse(response.getContentText()||'{}');
}
function snapshot_() {
  var ref=github_('get','/git/ref/heads/main'),sha=ref.object.sha,cache=CacheService.getScriptCache(),saved=cache.get('tree-'+sha);
  if(saved)return JSON.parse(saved);
  var commit=github_('get','/git/commits/'+sha),tree=github_('get','/git/trees/'+commit.tree.sha+'?recursive=1');assert_(!tree.truncated,'仓库目录过大，请改为分目录读取');
  var result={head:sha,treeSha:commit.tree.sha,files:tree.tree.filter(function(f){return f.type==='blob';})};var json=JSON.stringify(result);if(json.length<80000)cache.put('tree-'+sha,json,21600);return result;
}
function rawFiles_(files) {
  var cache=CacheService.getScriptCache(),result={},missing=[],repo=PropertiesService.getScriptProperties().getProperty('GITHUB_REPO')||'xuehaisheng/ai-qualitative-research',token=PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  files.forEach(function(f){var text=cache.get('blob-'+f.sha);if(text!==null)result[f.path]=text;else missing.push(f);});
  if(missing.length){var responses=UrlFetchApp.fetchAll(missing.map(function(f){return {url:'https://api.github.com/repos/'+repo+'/git/blobs/'+f.sha,headers:{Authorization:'Bearer '+token,Accept:'application/vnd.github+json'},muteHttpExceptions:true};}));
    responses.forEach(function(r,i){assert_(r.getResponseCode()===200,'读取文章失败，请稍后重试');var b=JSON.parse(r.getContentText()),text=Utilities.newBlob(Utilities.base64Decode(b.content.replace(/\s/g,''))).getDataAsString('UTF-8');result[missing[i].path]=text;if(text.length<70000)cache.put('blob-'+missing[i].sha,text,21600);});}
  return result;
}
function sources_(kind,snapshot) {
  var directory={notes:'_posts/',knowledge:'_wiki/'}[kind],files;
  if(directory){files=snapshot.files.filter(function(f){return f.path.startsWith(directory)&&/\.md$/.test(f.path);});var texts=rawFiles_(files);
    return files.map(function(f){var raw=texts[f.path],end=raw.indexOf('\n---',4);assert_(raw.startsWith('---\n')&&end>0,'文章头部格式无效：'+f.path);var meta=Yaml.parse(raw.slice(4,end)),body=raw.slice(end+4).replace(/^\r?\n/,''),marker=body.indexOf('<!--EN-->');return {kind:kind,id:f.path.slice(directory.length,-3),meta:meta,bodyJa:marker<0?body:body.slice(0,marker),bodyEn:marker<0?'':body.slice(marker+9),sourceHash:f.sha,raw:raw,fileSha:f.sha};});
  }
  var file=snapshot.files.find(function(f){return f.path==='_data/'+kind+'.json';});assert_(file,'请先将后台 PR 的活动/成员数据改造合并到 main，再连接正式内容。');
  var list=JSON.parse(rawFiles_([file])[file.path]);return list.map(function(record){return Object.assign({},record,{kind:kind,sourceHash:hash_(JSON.stringify(record)),fileSha:file.sha});});
}
function source_(kind,id,snapshot) {return sources_(kind,snapshot).find(function(r){return r.id===id;})||null;}
function publicRecord_(record) {var copy=Object.assign({},record);delete copy.raw;delete copy.fileSha;return copy;}
function plannedFiles_(drafts,snapshot) {
  var changes={},loaded={},media=media_();
  drafts.forEach(function(d){var kind=d.kind;if(!loaded[kind])loaded[kind]=sources_(kind,snapshot);var source=loaded[kind].find(function(r){return r.id===d.id;})||null;
    assert_((source?source.sourceHash:null)===(d.baseHash||null),'GitHub 原文已更新：'+d.id+'。请先核对草稿，不能覆盖新版本。');
    var record=d.record;
    if(kind==='notes'||kind==='knowledge'){
      var filename=(kind==='notes'?'_posts/':'_wiki/')+d.id+'.md';if(d.deleted){changes[filename]=null;return;}
      var doc=source?Yaml.parseDocument(source.raw.slice(4,source.raw.indexOf('\n---',4))):new Yaml.Document();Object.keys(record.meta).forEach(function(k){doc.set(k,record.meta[k]);});changes[filename]='---\n'+doc.toString()+'---\n'+record.bodyJa+(record.bodyEn.trim()?'<!--EN-->'+record.bodyEn:'');
    }else{
      var path='_data/'+kind+'.json',items=changes[path]?JSON.parse(changes[path]):loaded[kind].map(function(r){var v=cleanRecord_(r);v.id=r.id;return v;});items=items.filter(function(r){return r.id!==d.id;});if(!d.deleted){var value=cleanRecord_(record);value.id=d.id;items.push(value);}changes[path]=JSON.stringify(items,null,2)+'\n';
    }
  });
  return {changes:changes,media:media.filter(function(m){return m.appProperties.published!=='true';})};
}
function publish_(message) {
  recoverPublish_();var drafts=drafts_();assert_(drafts.length,'没有待发布的草稿');var snapshot=snapshot_(),plan=plannedFiles_(drafts,snapshot),paths=Object.keys(plan.changes),entries=[];
  paths.forEach(function(path){var text=plan.changes[path];if(text===null){entries.push({path:path,mode:'100644',type:'blob',sha:null});return;}var blob=github_('post','/git/blobs',{content:text,encoding:'utf-8'});entries.push({path:path,mode:'100644',type:'blob',sha:blob.sha});});
  plan.media.forEach(function(m){var blob=github_('post','/git/blobs',{content:Utilities.base64Encode(driveContent_(m.id)),encoding:'base64'});entries.push({path:m.appProperties.path,mode:'100644',type:'blob',sha:blob.sha});});
  var tree=github_('post','/git/trees',{base_tree:snapshot.treeSha,tree:entries}),commit=github_('post','/git/commits',{message:(message||'Update website content from Apps Script').slice(0,200),tree:tree.sha,parents:[snapshot.head]});
  var receipt={sha:commit.sha,phase:'prepared',created:new Date().toISOString(),drafts:drafts.map(function(d){return {fileId:d.fileId,revision:d.revision};}),media:plan.media.map(function(m){return m.id;}),files:paths.length};
  var file=writeJson_('publish-receipt.json',receipt);PropertiesService.getScriptProperties().setProperty('PUBLISH_RECEIPT_ID',file.id);
  try{github_('patch','/git/refs/heads/main',{sha:commit.sha,force:false});}
  catch(error){if(!isPublished_(commit.sha))throw error;}
  receipt.phase='committed';updateJson_(file.id,receipt);completePublish_(receipt,file.id);return {sha:commit.sha,files:paths.length,url:'https://github.com/'+(PropertiesService.getScriptProperties().getProperty('GITHUB_REPO')||'xuehaisheng/ai-qualitative-research')+'/actions'};
}
function isPublished_(sha){var head=github_('get','/git/ref/heads/main').object.sha;if(head===sha)return true;var compared=github_('get','/compare/'+sha+'...'+head,undefined,true);return compared&&['ahead','identical'].includes(compared.status);}
function completePublish_(receipt,fileId){
  receipt.drafts.forEach(function(d){var existing=driveJson_(d.fileId,true);if(existing&&existing.revision===d.revision)Drive.Files.update({trashed:true},d.fileId);});
  receipt.media.forEach(function(id){Drive.Files.update({appProperties:{published:'true'}},id);});
  receipt.phase='complete';updateJson_(fileId,receipt);PropertiesService.getScriptProperties().setProperty('LAST_PUBLISH_SHA',receipt.sha);audit_('publish','','',receipt.sha);
}
function recoverPublish_(){var id=PropertiesService.getScriptProperties().getProperty('PUBLISH_RECEIPT_ID');if(!id)return;var r=driveJson_(id);if(r.phase==='complete')return;if(isPublished_(r.sha)){completePublish_(r,id);return;}assert_(r.phase==='prepared','发布恢复状态待核对');}
function publishStatus_(){var sha=PropertiesService.getScriptProperties().getProperty('LAST_PUBLISH_SHA');if(!sha)return null;var runs=github_('get','/actions/runs?head_sha='+sha+'&per_page=20').workflow_runs||[],run=runs.find(function(r){return /pages/i.test(r.name);});return {sha:sha,status:run?run.status:'pending',conclusion:run?run.conclusion:null,url:run?run.html_url:'https://github.com/xuehaisheng/ai-qualitative-research/actions'};}
