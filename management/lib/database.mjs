import {DatabaseSync} from 'node:sqlite';
export function database(filename){const db=new DatabaseSync(filename);db.exec(`PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON;
CREATE TABLE IF NOT EXISTS drafts(kind TEXT NOT NULL,id TEXT NOT NULL,payload TEXT NOT NULL,base_hash TEXT,deleted INTEGER NOT NULL DEFAULT 0,updated TEXT NOT NULL,PRIMARY KEY(kind,id));
CREATE TABLE IF NOT EXISTS audit(id INTEGER PRIMARY KEY,action TEXT NOT NULL,kind TEXT,item_id TEXT,detail TEXT,created TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS media(id TEXT PRIMARY KEY,path TEXT NOT NULL,local_path TEXT NOT NULL,type TEXT NOT NULL,published INTEGER NOT NULL DEFAULT 0);
CREATE TABLE IF NOT EXISTS views(id TEXT PRIMARY KEY,visitor TEXT NOT NULL,session TEXT NOT NULL,path TEXT NOT NULL,day TEXT NOT NULL,referrer TEXT NOT NULL,device TEXT NOT NULL,language TEXT NOT NULL,seconds INTEGER NOT NULL DEFAULT 0,depth INTEGER NOT NULL DEFAULT 0,qualified INTEGER NOT NULL DEFAULT 0,created TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS views_day ON views(day);CREATE INDEX IF NOT EXISTS views_visitor ON views(visitor,day);`);return db;}
export function day(date=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(date);}
export function collect(db,data,agent='',base='/ai-qualitative-research/'){
 const uuid=/^[a-zA-Z0-9_-]{16,80}$/;
 if(!uuid.test(data.id||'')||!uuid.test(data.visitor||'')||!uuid.test(data.session||''))return false;
 if(typeof data.path!=='string'||!data.path.startsWith(base)||data.path.includes('?')||data.path.includes('#')||data.path.includes('..')||data.path.length>500||/bot|crawler|spider|headless/i.test(agent))return false;
 if(data.type==='view'){
  let referrer='直接访问';try{const url=new URL(data.referrer);if(url.protocol==='https:'||url.protocol==='http:')referrer=url.hostname.slice(0,100);}catch{}
  const device=/ipad|tablet/i.test(agent)?'平板':/mobile|android|iphone/i.test(agent)?'手机':'电脑';const language=['ja','en','zh'].includes(data.language)?data.language:'其他';
  db.prepare('INSERT OR IGNORE INTO views(id,visitor,session,path,day,referrer,device,language,created) VALUES(?,?,?,?,?,?,?,?,?)').run(data.id,data.visitor,data.session,data.path,day(),referrer,device,language,new Date().toISOString());
 }else if(data.type==='engagement'){
  const seconds=Math.max(0,Math.min(3600,Math.floor(Number(data.seconds)||0))),depth=Math.max(0,Math.min(100,Math.floor(Number(data.depth)||0)));
  const article=data.path.includes('/articles/')&&!data.path.endsWith('/articles/');
  db.prepare('UPDATE views SET seconds=max(seconds,?),depth=max(depth,?),qualified=max(qualified,?) WHERE id=? AND visitor=? AND session=? AND path=?').run(seconds,depth,article&&(seconds>=30&&depth>=50)?1:0,data.id,data.visitor,data.session,data.path);
 }else return false;
 return true;
}
export function stats(db,days=30){
 days=[7,30,90].includes(Number(days))?Number(days):30;const end=day(),start=day(new Date(Date.now()-(days-1)*86400000));
 const total=db.prepare('SELECT count(*) views,count(DISTINCT visitor) visitors,count(DISTINCT session) sessions,coalesce(sum(qualified),0) reads,coalesce(round(avg(seconds)),0) averageSeconds FROM views WHERE day BETWEEN ? AND ?').get(start,end);
 const returning=db.prepare('SELECT count(*) n FROM (SELECT visitor FROM views WHERE day BETWEEN ? AND ? GROUP BY visitor HAVING count(DISTINCT session)>1)').get(start,end).n;
 const first=db.prepare('SELECT min(day) day FROM views').get().day;
 const trendMap=new Map(db.prepare('SELECT day,count(*) views,count(DISTINCT visitor) visitors,sum(qualified) reads FROM views WHERE day BETWEEN ? AND ? GROUP BY day').all(start,end).map(x=>[x.day,x]));
 const trend=Array.from({length:days},(_,i)=>{const key=day(new Date(Date.now()-(days-1-i)*86400000));return trendMap.get(key)||{day:key,views:0,visitors:0,reads:0};});
 const group=col=>db.prepare(`SELECT ${col} label,count(*) views FROM views WHERE day BETWEEN ? AND ? GROUP BY ${col} ORDER BY views DESC LIMIT 12`).all(start,end);
 return {days,start,end,first,total:{...total,returning,returnRate:total.visitors?Math.round(returning/total.visitors*100):0},trend,pages:db.prepare('SELECT path,count(*) views,count(DISTINCT visitor) visitors,sum(qualified) reads,round(avg(seconds)) seconds,round(avg(depth)) depth FROM views WHERE day BETWEEN ? AND ? GROUP BY path ORDER BY views DESC LIMIT 20').all(start,end),sources:group('referrer'),devices:group('device'),languages:group('language')};
}
