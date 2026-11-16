// Pure functions shared by the owner dashboard and the public collector.
var AIQ_SITE = 'https://xuehaisheng.github.io/ai-qualitative-research/';
var AIQ_BASE = '/ai-qualitative-research/';
var AIQ_RETENTION = 180;
var AIQ_COLUMNS = ['id','visitor','session','path','day','referrer','device','language','seconds','depth','qualified','created'];
function day_(date) { return Utilities.formatDate(date || new Date(), 'Asia/Tokyo', 'yyyy-MM-dd'); }
function hash_(value) { return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(value), Utilities.Charset.UTF_8).map(function(b){return ('0'+((b+256)%256).toString(16)).slice(-2);}).join(''); }
function assert_(condition, message) { if (!condition) throw new Error(message); }
function cleanRecord_(record) { var result=JSON.parse(JSON.stringify(record));['kind','id','revision','draft','deleted','updated','sourceHash','fileSha','raw','sourceChanged'].forEach(function(k){delete result[k];});return result; }
function validateRecord_(kind,id,record) {
  assert_(['notes','knowledge','events','members'].indexOf(kind)>=0 && /^[a-zA-Z0-9][a-zA-Z0-9._-]{0,149}$/.test(id) && id.indexOf('..')<0,'内容标识无效');
  assert_(record && typeof record==='object' && !Array.isArray(record),'内容格式无效');
  function text(v,max){return typeof v==='string'&&v.length<=(max||10000);}
  function bi(v,required){return v&&text(v.ja)&&text(v.en)&&(!required||v.ja.trim());}
  if(kind==='notes'||kind==='knowledge') {
    assert_(text(record.meta&&record.meta.title,300)&&record.meta.title.trim(),'请填写日文标题');
    assert_(/^[a-z0-9][a-z0-9-]{0,99}$/.test(record.meta.key||''),'地址标识仅支持小写字母、数字和连字符');
    assert_(text(record.bodyJa,1000000)&&text(record.bodyEn,1000000),'正文过长或格式无效');
    if(kind==='notes')assert_(/^\d{4}-\d{2}-\d{2}/.test(String(record.meta.date||'')),'请填写日期');
    else assert_(text(record.meta.category,100)&&record.meta.category,'请填写知识点分类');
  } else {
    assert_(bi(kind==='members'?record.name:record.title,true),'请填写日文名称');
    (kind==='members'?['role','affiliation','bio']:['place','summary']).forEach(function(k){assert_(bi(record[k]),'双语字段格式无效');});
    if(kind==='events') {
      assert_(/^\d{4}-\d{2}(?:-\d{2})?$/.test(record.date)&&['upcoming','past'].indexOf(record.status)>=0,'活动日期或状态无效');
      assert_(Array.isArray(record.links)&&record.links.length<=20,'活动链接格式无效');
      record.links.forEach(function(l){assert_(bi(l.label,true),'请填写链接文字');});
    } else assert_(Number.isFinite(record.order)&&record.order>=0&&record.order<=9999,'成员排序必须为 0–9999');
    (kind==='members'?[record.profile_url]:record.links.map(function(l){return l.url;})).forEach(function(u){assert_(text(u,2000)&&(!u||/^(https?:\/\/[^\s]+|\/(?!\/)[^\s]*)$/.test(u)),'链接请使用 https:// 或网站内的 / 路径');});
  }
}
function normalizeEvent_(data) {
  if(!data||!['view','engagement'].includes(data.type))return null;
  var uuid=/^[a-zA-Z0-9][a-zA-Z0-9_-]{15,79}$/;
  if(!uuid.test(data.id||'')||!uuid.test(data.visitor||'')||!uuid.test(data.session||''))return null;
  if(typeof data.path!=='string'||!data.path.startsWith(AIQ_BASE)||data.path.length>500||/[?#]/.test(data.path)||data.path.includes('..')||data.path.includes('/admin'))return null;
  if(data.site!==AIQ_SITE.replace(/\/$/,''))return null;
  var referrer='直接访问';if(typeof data.referrer==='string'){var m=data.referrer.match(/^https?:\/\/([^/:?#]+)(?::\d+)?(?:[/?#]|$)/i);if(m&&/^[a-z0-9][a-z0-9.-]{0,99}$/i.test(m[1]))referrer=m[1].toLowerCase();}
  var seconds=Math.max(0,Math.min(3600,Math.floor(Number(data.seconds)||0))),depth=Math.max(0,Math.min(100,Math.floor(Number(data.depth)||0)));
  return {id:data.id,visitor:data.visitor,session:data.session,path:data.path,day:day_(),referrer:referrer,device:['手机','平板','电脑'].includes(data.device)?data.device:'其他',language:['ja','en','zh'].includes(data.language)?data.language:'其他',seconds:data.type==='view'?0:seconds,depth:data.type==='view'?0:depth,qualified:data.type==='engagement'&&/\/articles\/.+/.test(data.path)&&seconds>=30&&depth>=50?1:0,created:new Date().toISOString(),type:data.type};
}
function report_(rows,days,now) {
  days=[7,30,90].includes(Number(days))?Number(days):30;now=now||new Date();var end=day_(now),start=day_(new Date(now.getTime()-(days-1)*86400000));
  var total={views:0,visitors:0,sessions:0,reads:0,averageSeconds:0,returning:0,returnRate:0},visitors={},sessions={},pages={},sources={},devices={},languages={},trend={},first=null,seconds=0;
  for(var i=0;i<days;i++){var d=day_(new Date(now.getTime()-(days-1-i)*86400000));trend[d]={day:d,views:0,visitors:0,reads:0,_v:{}};}
  rows.forEach(function(r){
    if(!r.id)return;var date=Object.prototype.toString.call(r.day)==='[object Date]'?day_(r.day):String(r.day);if(!first||date<first)first=date;if(date<start||date>end)return;
    total.views++;total.reads+=Number(r.qualified)||0;seconds+=Number(r.seconds)||0;visitors[r.visitor]=visitors[r.visitor]||{};visitors[r.visitor][r.session]=true;sessions[r.session]=true;
    var p=pages[r.path]||(pages[r.path]={path:r.path,views:0,visitors:0,reads:0,seconds:0,depth:0,_v:{}});p.views++;p._v[r.visitor]=true;p.reads+=Number(r.qualified)||0;p.seconds+=Number(r.seconds)||0;p.depth+=Number(r.depth)||0;
    [sources,devices,languages].forEach(function(map,j){var key=[r.referrer,r.device,r.language][j]||'其他';map[key]=(map[key]||0)+1;});
    var t=trend[date];if(t){t.views++;t.reads+=Number(r.qualified)||0;t._v[r.visitor]=true;}
  });
  total.visitors=Object.keys(visitors).length;total.sessions=Object.keys(sessions).length;total.averageSeconds=total.views?Math.round(seconds/total.views):0;
  total.returning=Object.keys(visitors).filter(function(v){return Object.keys(visitors[v]).length>1;}).length;total.returnRate=total.visitors?Math.round(total.returning/total.visitors*100):0;
  var group=function(map){return Object.keys(map).map(function(k){return {label:k,views:map[k]};}).sort(function(a,b){return b.views-a.views;}).slice(0,12);};
  return {days:days,start:start,end:end,first:first,total:total,trend:Object.keys(trend).sort().map(function(k){var t=trend[k];t.visitors=Object.keys(t._v).length;delete t._v;return t;}),pages:Object.keys(pages).map(function(k){var p=pages[k];p.visitors=Object.keys(p._v).length;p.seconds=Math.round(p.seconds/p.views);p.depth=Math.round(p.depth/p.views);delete p._v;return p;}).sort(function(a,b){return b.views-a.views;}).slice(0,20),sources:group(sources),devices:group(devices),languages:group(languages)};
}
