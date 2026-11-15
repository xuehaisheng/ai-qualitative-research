// Separate public project. No GitHub credentials, Drive access or editor RPC.
function doGet() { return ContentService.createTextOutput('AI × Q analytics receiver').setMimeType(ContentService.MimeType.TEXT); }
function doPost(e) {
  var lock=LockService.getScriptLock();
  try {
    assert_(e&&e.postData&&e.postData.contents.length<=6000,'事件无效');
    var event=normalizeEvent_(JSON.parse(e.postData.contents));assert_(event,'事件无效');
    assert_(lock.tryLock(10000),'接收繁忙');
    var props=PropertiesService.getScriptProperties(),id=props.getProperty('STATS_SHEET_ID');assert_(id,'统计表尚未连接');
    var sheet=SpreadsheetApp.openById(id).getSheetByName('Views');assert_(sheet,'统计表结构未初始化');
    if(props.getProperty('PRUNE_DATE')!==day_()){pruneCollector_(sheet);props.setProperty('PRUNE_DATE',day_());}
    var rows=sheet.getLastRow(),found=null;
    if(rows>1)found=sheet.getRange(2,1,rows-1,1).createTextFinder(event.id).matchEntireCell(true).useRegularExpression(false).findNext();
    if(found) {
      var row=found.getRow(),values=sheet.getRange(row,1,1,AIQ_COLUMNS.length).getValues()[0];
      assert_(String(values[1])===event.visitor&&String(values[2])===event.session&&String(values[3])===event.path,'事件不匹配');
      if(event.type==='engagement')sheet.getRange(row,9,1,3).setValues([[Math.max(Number(values[8])||0,event.seconds),Math.max(Number(values[9])||0,event.depth),Math.max(Number(values[10])||0,event.qualified)]]);
    } else {
      // Engagement also creates the page row when a previous beacon arrived late or was lost.
      var count=Number(props.getProperty('DAILY_EVENTS')||0),date=props.getProperty('DAILY_DATE');if(date!==event.day)count=0;
      assert_(count<20000,'今日接收额度已满');
      var visitorKey='v-'+hash_(event.visitor+event.day).slice(0,40),cache=CacheService.getScriptCache(),visitorCount=Number(cache.get(visitorKey)||0);assert_(visitorCount<300,'访问频率过高');cache.put(visitorKey,String(visitorCount+1),21600);
      sheet.appendRow(AIQ_COLUMNS.map(function(k){return event[k];}));props.setProperties({DAILY_EVENTS:String(count+1),DAILY_DATE:event.day});
    }
    return ContentService.createTextOutput('ok');
  } catch(error) { return ContentService.createTextOutput('ignored'); }
  finally { if(lock.hasLock())lock.releaseLock(); }
}
// Run manually in the collector's editor once after pasting STATS_SHEET_ID.
function verifyCollector() {
  var id=PropertiesService.getScriptProperties().getProperty('STATS_SHEET_ID');assert_(id,'请在脚本属性设置 STATS_SHEET_ID');
  var sheet=SpreadsheetApp.openById(id).getSheetByName('Views');assert_(sheet&&sheet.getRange(1,1).getValue()==='id','统计表连接无效');
  console.log('Collector sheet verified. Deploy as USER_DEPLOYING / ANYONE_ANONYMOUS.');
}

function pruneCollector_(sheet){var last=sheet.getLastRow();if(last<2)return;var cutoff=day_(new Date(Date.now()-AIQ_RETENTION*86400000)),dates=sheet.getRange(2,5,last-1,1).getValues(),count=0;while(count<dates.length&&String(dates[count][0])<cutoff)count++;if(count)sheet.deleteRows(2,count);}
