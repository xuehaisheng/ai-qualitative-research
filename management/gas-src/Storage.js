function properties_(){return PropertiesService.getScriptProperties();}
function owner_(){var p=properties_(),effective=Session.getEffectiveUser().getEmail().toLowerCase(),active=Session.getActiveUser().getEmail().toLowerCase();assert_(effective&&active&&active===effective,'此后台只允许项目所有者访问。请使用部署该项目的 Google 账号，并将访问范围设为“仅自己”。');var saved=p.getProperty('OWNER_EMAIL');assert_(!saved||saved===active,'Google 账号不匹配');return active;}
function locked_(fn){var lock=LockService.getScriptLock();lock.waitLock(30000);try{return fn();}finally{lock.releaseLock();}}
function workspace_(){var id=properties_().getProperty('WORKSPACE_FOLDER_ID');assert_(id,'请先在“连接与设置”初始化工作空间');return id;}
function driveFiles_(query){var files=[],page;do{var result=Drive.Files.list({q:"'"+workspace_()+"' in parents and trashed = false"+(query?' and '+query:''),fields:'nextPageToken,files(id,name,mimeType,appProperties,modifiedTime)',pageSize:1000,pageToken:page});files=files.concat(result.files||[]);page=result.nextPageToken;}while(page);return files;}
function namedFile_(name){assert_(/^[a-zA-Z0-9._-]+$/.test(name),'文件名无效');var list=driveFiles_("name = '"+name+"'");assert_(list.length<=1,'Drive 中存在重名草稿，请先核对：'+name);return list[0]||null;}
function driveContent_(id,optional){assert_(/^[\w-]+$/.test(id),'Drive 文件标识无效');var response=UrlFetchApp.fetch('https://www.googleapis.com/drive/v3/files/'+id+'?alt=media',{headers:{Authorization:'Bearer '+ScriptApp.getOAuthToken()},muteHttpExceptions:true});if(optional&&response.getResponseCode()===404)return null;assert_(response.getResponseCode()===200,'读取 Drive 草稿或附件失败');return response.getBlob().getBytes();}
function driveJson_(id,optional){var bytes=driveContent_(id,optional);return bytes?JSON.parse(Utilities.newBlob(bytes).getDataAsString('UTF-8')):null;}
function updateJson_(id,value){return Drive.Files.update({},id,Utilities.newBlob(JSON.stringify(value),'application/json'),{fields:'id'});}
function writeJson_(name,value){var existing=namedFile_(name);return existing?updateJson_(existing.id,value):Drive.Files.create({name:name,mimeType:'application/json',parents:[workspace_()]},Utilities.newBlob(JSON.stringify(value),'application/json'),{fields:'id'});}
function drafts_(){return driveFiles_("name contains 'draft--'").map(function(file){var d=driveJson_(file.id);d.fileId=file.id;return d;});}
function draft_(kind,id){var file=namedFile_('draft--'+kind+'--'+id+'.json');if(!file)return null;var d=driveJson_(file.id);d.fileId=file.id;return d;}
function audit_(action,kind,id,detail){var sheetId=properties_().getProperty('STATS_SHEET_ID');if(!sheetId)return;SpreadsheetApp.openById(sheetId).getSheetByName('Audit').appendRow([new Date().toISOString(),action,kind||'',id||'',detail||'']);}
function audits_(){var id=properties_().getProperty('STATS_SHEET_ID');if(!id)return [];var s=SpreadsheetApp.openById(id).getSheetByName('Audit'),last=s.getLastRow();return last<2?[]:s.getRange(Math.max(2,last-11),1,Math.min(12,last-1),5).getValues().reverse().map(function(r){return {created:String(r[0]),action:r[1],kind:r[2],item_id:r[3],detail:r[4]};});}
function record_(kind,id,snapshot){var d=draft_(kind,id),s=source_(kind,id,snapshot);assert_(d||s,'内容不存在');return d?Object.assign({},d.record,{kind:kind,id:id,draft:true,deleted:!!d.deleted,revision:d.revision,updated:d.updated}):Object.assign(publicRecord_(s),{draft:false,revision:s.sourceHash});}
function records_(kind,snapshot){var map={};sources_(kind,snapshot).forEach(function(s){map[s.id]=Object.assign(publicRecord_(s),{draft:false,revision:s.sourceHash});});drafts_().filter(function(d){return d.kind===kind;}).forEach(function(d){map[d.id]=Object.assign({},d.record,{kind:kind,id:d.id,draft:true,deleted:!!d.deleted,revision:d.revision,updated:d.updated});});return Object.keys(map).map(function(id){return map[id];});}
function save_(kind,id,input,snapshot){
  var record=input.record;validateRecord_(kind,id,record);var previous=draft_(kind,id),source=source_(kind,id,snapshot),revision=previous?previous.revision:source?source.sourceHash:null;
  assert_((input.revision||null)===revision,'这条内容已在其他窗口修改，请重新载入再保存');
  if((kind==='notes'||kind==='knowledge')&&(previous||source)){assert_((previous?previous.record:source).meta.key===record.meta.key,'地址标识不可修改，以免原有文章链接失效');}
  if(kind==='notes'||kind==='knowledge'){
    if(!previous&&!source)assert_(id===(kind==='notes'?String(record.meta.date).slice(0,10)+'-':'')+record.meta.key,'文章文件名与地址标识不一致');
    assert_(!records_(kind,snapshot).some(function(r){return r.id!==id&&!r.deleted&&r.meta.key===record.meta.key;}),'这个地址标识已被其他内容使用');
  }
  var updated=new Date().toISOString(),d={kind:kind,id:id,record:cleanRecord_(record),baseHash:previous?previous.baseHash:source?source.sourceHash:null,revision:Utilities.getUuid(),updated:updated,deleted:false};
  if(kind!=='notes'&&kind!=='knowledge')d.record.id=id;
  writeJson_('draft--'+kind+'--'+id+'.json',d);audit_('save',kind,id);return Object.assign({},d.record,{kind:kind,id:id,draft:true,revision:d.revision,updated:updated});
}
function archive_(kind,id,input,snapshot){var current=record_(kind,id,snapshot);assert_(current.revision===input.revision,'内容版本已更新，请重新载入');if(!current.draft)save_(kind,id,{record:current,revision:current.revision},snapshot);var d=draft_(kind,id);d.deleted=true;d.revision=Utilities.getUuid();d.updated=new Date().toISOString();updateJson_(d.fileId,d);audit_('archive',kind,id);return record_(kind,id,snapshot);}
function discard_(kind,id,revision){var d=draft_(kind,id);assert_(d,'草稿不存在');assert_(d.revision===revision,'草稿已在其他窗口更新，请重新载入后再撤回');Drive.Files.update({trashed:true},d.fileId);audit_('discard',kind,id);return {ok:true};}
function media_(){return driveFiles_("appProperties has { key='aiqType' and value='media' }");}
function upload_(input){
  assert_(/^[\w., ()\u3000-\u9fff-]{1,150}$/.test(input.name||''),'文件名无效');var bytes=Utilities.base64Decode(input.base64||'');assert_(bytes.length&&bytes.length<=10*1024*1024,'文件需小于 10MB');var positive=bytes.map(function(b){return (b+256)%256;}),ext=input.name.slice(input.name.lastIndexOf('.')).toLowerCase(),type={'.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.gif':'image/gif','.pdf':'application/pdf'}[ext];
  var ascii=function(start,n){return positive.slice(start,start+n).map(function(b){return String.fromCharCode(b);}).join('');};var valid=ext==='.pdf'?ascii(0,5)==='%PDF-':['.jpg','.jpeg'].includes(ext)?positive[0]===255&&positive[1]===216:ext==='.png'?positive.slice(0,8).join(',')==='137,80,78,71,13,10,26,10':ext==='.webp'?ascii(0,4)==='RIFF'&&ascii(8,4)==='WEBP':ext==='.gif'?ascii(0,3)==='GIF':false;assert_(type&&valid,'仅支持有效的 JPG、PNG、WebP、GIF 或 PDF');
  var id=hash_(input.base64).slice(0,24),target='assets/uploads/'+id+ext,existing=media_().find(function(m){return m.appProperties.path===target;});
  if(!existing)Drive.Files.create({name:id+ext,mimeType:type,parents:[workspace_()],appProperties:{aiqType:'media',path:target,published:'false'}},Utilities.newBlob(bytes,type),{fields:'id'});
  audit_('upload','media',id+ext);return {path:'/'+target};
}
function views_(){var id=properties_().getProperty('STATS_SHEET_ID');if(!id)return [];var sheet=SpreadsheetApp.openById(id).getSheetByName('Views'),last=sheet.getLastRow();if(last<2)return [];var values=sheet.getRange(2,1,last-1,AIQ_COLUMNS.length).getValues();return values.map(function(row){var r={};AIQ_COLUMNS.forEach(function(k,i){r[k]=row[i];});return r;});}
function initialize_(){
  var p=properties_();if(p.getProperty('WORKSPACE_FOLDER_ID'))return {ok:true};
  var folder=Drive.Files.create({name:'AI × Q 编辑室',mimeType:'application/vnd.google-apps.folder'},null,{fields:'id'});p.setProperties({WORKSPACE_FOLDER_ID:folder.id,OWNER_EMAIL:owner_()});
  try{var stats=SpreadsheetApp.create('AI × Q · 访问统计与编辑记录'),views=stats.getSheets()[0];views.setName('Views');views.getRange(1,1,1,AIQ_COLUMNS.length).setValues([AIQ_COLUMNS]);views.setFrozenRows(1);views.getRange('A:H').setNumberFormat('@');views.getRange('L:L').setNumberFormat('@');
    var audit=stats.insertSheet('Audit');audit.getRange(1,1,1,5).setValues([['created','action','kind','item_id','detail']]);audit.getRange('A:E').setNumberFormat('@');audit.setFrozenRows(1);p.setProperty('STATS_SHEET_ID',stats.getId());
  }catch(error){p.deleteProperty('WORKSPACE_FOLDER_ID');throw error;}
  audit_('initialize','','');return {ok:true,folderId:folder.id,statsSheetId:p.getProperty('STATS_SHEET_ID')};
}
