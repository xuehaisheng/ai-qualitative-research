function doGet(){owner_();return HtmlService.createHtmlOutputFromFile('Index').setTitle('管理后台 · AI × Q').addMetaTag('viewport','width=device-width,initial-scale=1');}
// Only public RPC in the private project. Every call checks the Google identity.
function adminApi(request){
  try{owner_();assert_(request&&typeof request.url==='string'&&request.url.length<300,'请求无效');assert_(JSON.stringify(request).length<=15000000,'请求过大');var method=String(request.method||'GET').toUpperCase(),url=request.url.split('?')[0],input=request.body?JSON.parse(request.body):{},run=function(){return route_(method,url,input,request.url);};return {ok:true,data:method==='GET'?run():locked_(run)};}
  catch(error){return {ok:false,error:String(error.message||'操作未完成。草稿会保留。')};}
}
function session_(){var p=properties_();return {storage:'google',siteUrl:AIQ_SITE,configured:!!p.getProperty('WORKSPACE_FOLDER_ID'),githubConnected:!!p.getProperty('GITHUB_TOKEN'),publishEnabled:!!p.getProperty('GITHUB_TOKEN')&&!!p.getProperty('WORKSPACE_FOLDER_ID'),trackingUrl:p.getProperty('COLLECTOR_URL')||null,folderId:p.getProperty('WORKSPACE_FOLDER_ID')||null,statsSheetId:p.getProperty('STATS_SHEET_ID')||null};}
function preview_(body){assert_(typeof body==='string'&&body.length<2100000,'正文过长');var source=body.replace(/{{\s*'([^']+)'\s*\|\s*relative_url\s*}}/g,function(_,path){return AIQ_SITE.replace(/\/$/,'')+path;}),html=Markdown.render(source);
  if(properties_().getProperty('WORKSPACE_FOLDER_ID'))media_().forEach(function(m){if(m.mimeType.startsWith('image/')){var target=AIQ_SITE+m.appProperties.path;if(html.includes(target))html=html.split(target).join('data:'+m.mimeType+';base64,'+Utilities.base64Encode(driveContent_(m.id)));}});
  // HTML is sanitized with bundled DOMPurify in the owner page before insertion.
  return {html:html,hasTemplates:/{%|{{/.test(source)};
}
function overview_(){var p=properties_();if(!p.getProperty('WORKSPACE_FOLDER_ID'))return {counts:{notes:0,knowledge:0,events:0,members:0},pending:[],audit:[],setupRequired:true};var d=drafts_(),counts={notes:0,knowledge:0,events:0,members:0};
  if(p.getProperty('GITHUB_TOKEN')){var snap=snapshot_();['notes','knowledge'].forEach(function(k){var prefix=k==='notes'?'_posts/':'_wiki/';counts[k]=snap.files.filter(function(f){return f.path.startsWith(prefix)&&f.path.endsWith('.md');}).length;});['events','members'].forEach(function(k){counts[k]=sources_(k,snap).length;});d.forEach(function(r){var prefix=r.kind==='notes'?'_posts/':r.kind==='knowledge'?'_wiki/':null;if(prefix){var exists=snap.files.some(function(f){return f.path===prefix+r.id+'.md';});if(!exists&&!r.deleted)counts[r.kind]++;if(exists&&r.deleted)counts[r.kind]--;}else{var exists=sources_(r.kind,snap).some(function(s){return s.id===r.id;});if(!exists&&!r.deleted)counts[r.kind]++;if(exists&&r.deleted)counts[r.kind]--;}});}
  else d.forEach(function(r){if(!r.deleted)counts[r.kind]++;});
  return {counts:counts,pending:d.map(function(r){return {kind:r.kind,id:r.id,deleted:r.deleted,updated:r.updated};}),audit:audits_(),publishEnabled:session_().publishEnabled};
}
function settings_(input){var p=properties_();if(input.githubToken){assert_(/^github_pat_[\w]+$|^ghp_[\w]+$/.test(input.githubToken),'请使用 GitHub 细粒度仓库令牌');var previous=p.getProperty('GITHUB_TOKEN');p.setProperty('GITHUB_TOKEN',input.githubToken);try{github_('get','');}catch(error){if(previous)p.setProperty('GITHUB_TOKEN',previous);else p.deleteProperty('GITHUB_TOKEN');throw error;}}
  if(input.collectorUrl!==undefined){assert_(!input.collectorUrl||/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(input.collectorUrl),'统计地址应为 Apps Script /exec 部署地址');p.setProperty('COLLECTOR_URL',input.collectorUrl||'');}return session_();}
function csv_(report){var cell=function(v){return '"'+String(v).replace(/"/g,'""').replace(/^[=+@-]/,"'$&")+'"';};return {filename:'reading-statistics.csv',mime:'text/csv;charset=utf-8',text:'\uFEFF'+[['路径','访问量','访客数','有效阅读','平均活跃秒数','平均阅读深度']].concat(report.pages.map(function(r){return [r.path,r.views,r.visitors,r.reads,r.seconds,r.depth];})).map(function(r){return r.map(cell).join(',');}).join('\r\n')};}
function route_(method,url,input,full){
  if(url==='/api/session')return session_();
  if(url==='/api/setup'&&method==='POST')return initialize_();
  if(url==='/api/settings'&&method==='POST')return settings_(input);
  if(url==='/api/logout'&&method==='POST')return {ok:true};
  if(url==='/api/overview')return overview_();
  if(url==='/api/stats'||url==='/api/stats.csv'){var match=full.match(/[?&]days=(\d+)/),report=report_(views_(),match?match[1]:30);return url.endsWith('.csv')?csv_(report):report;}
  if(url==='/api/preview'&&method==='POST')return preview_(input.body);
  if(url==='/api/media'&&method==='POST')return upload_(input);
  if(url==='/api/backup')return {filename:'aiq-drafts.json',mime:'application/json',text:JSON.stringify({format:'aiq-drive-drafts-v1',created:new Date().toISOString(),drafts:drafts_().map(function(d){delete d.fileId;return d;})},null,2)};
  if(url==='/api/publish'&&method==='POST')return publish_(input.message);
  if(url==='/api/publish-status')return properties_().getProperty('GITHUB_TOKEN')?publishStatus_():null;
  if(url==='/api/recover'&&method==='POST'){recoverPublish_();return {ok:true};}
  if(url==='/api/changes'){var drafts=drafts_();if(!drafts.length)return {files:[],media:[]};var plan=plannedFiles_(drafts,snapshot_());return {files:Object.keys(plan.changes).map(function(path){return {file:path,action:plan.changes[path]===null?'删除':'更新',bytes:plan.changes[path]?Utilities.newBlob(plan.changes[path]).getBytes().length:0};}),media:plan.media.map(function(m){return {path:m.appProperties.path};})};}
  var m=url.match(/^\/api\/content\/(notes|knowledge|events|members)(?:\/([a-zA-Z0-9._-]+))?$/);assert_(m,'接口不存在');var kind=m[1],id=m[2];if(id)assert_(!id.includes('..'),'内容标识无效');var snap=snapshot_();
  if(method==='GET')return id?record_(kind,id,snap):records_(kind,snap);
  assert_(id,'缺少内容标识');if(method==='PUT')return save_(kind,id,input,snap);if(method==='DELETE')return archive_(kind,id,input,snap);if(method==='POST')return discard_(kind,id,input.revision);throw new Error('方法不被允许');
}
