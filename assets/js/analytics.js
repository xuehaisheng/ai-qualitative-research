/* First-party reading metrics. Disabled until an endpoint is configured. */
(() => {
  const script=document.currentScript,endpoint=script?.dataset.endpoint;
  if(!endpoint||navigator.doNotTrack==='1'||window.doNotTrack==='1'||navigator.globalPrivacyControl)return;
  if(location.pathname.includes('/admin')||location.hostname==='localhost'||location.hostname==='127.0.0.1')return;
  const uuid=()=>crypto.randomUUID();let visitor,session;
  try{
    const now=Date.now();let v=JSON.parse(localStorage.getItem('aiq-visitor')||'null');
    if(!v||v.expires<now)v={id:uuid(),expires:now+30*86400000};localStorage.setItem('aiq-visitor',JSON.stringify(v));visitor=v.id;
    let s=JSON.parse(sessionStorage.getItem('aiq-session')||'null');if(!s||s.last<now-30*60000)s={id:uuid()};s.last=now;sessionStorage.setItem('aiq-session',JSON.stringify(s));session=s.id;
  }catch{visitor=uuid();session=uuid();}
  const id=uuid(),path=location.pathname,language=document.documentElement.lang||'ja';
  let active=0,started=document.visibilityState==='visible'?performance.now():null,depth=0,viewSent=false;
  const payload=type=>({type,id,visitor,session,path,language,...(type==='view'?{referrer:document.referrer}:{seconds:Math.floor((active+(started===null?0:performance.now()-started))/1000),depth})});
  const send=(type,beacon=false)=>{try{const body=JSON.stringify(payload(type));if(beacon&&navigator.sendBeacon){navigator.sendBeacon(endpoint,new Blob([body],{type:'text/plain;charset=UTF-8'}));return Promise.resolve(true);}return fetch(endpoint,{method:'POST',body,headers:{'Content-Type':'text/plain;charset=UTF-8'},credentials:'omit',keepalive:true}).then(r=>r.ok).catch(()=>false);}catch{return Promise.resolve(false);}};
  const measure=()=>{const article=document.querySelector('.post-body')||document.querySelector('main');if(!article)return;const rect=article.getBoundingClientRect();const visible=Math.max(0,Math.min(rect.height,innerHeight-rect.top));depth=Math.max(depth,Math.min(100,Math.round(visible/Math.max(1,rect.height)*100)));};
  measure();addEventListener('scroll',measure,{passive:true});
  send('view').then(ok=>viewSent=ok);
  const timer=setInterval(()=>{measure();if(viewSent)send('engagement');else send('view').then(ok=>viewSent=ok);try{const s=JSON.parse(sessionStorage.getItem('aiq-session')||'null');if(s&&s.id===session){s.last=Date.now();sessionStorage.setItem('aiq-session',JSON.stringify(s));}}catch{}},15000);
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){if(started!==null){active+=performance.now()-started;started=null;}measure();if(viewSent)send('engagement',true);}else if(started===null)started=performance.now();});
  addEventListener('pagehide',()=>{clearInterval(timer);measure();if(viewSent)send('engagement',true);});
})();
