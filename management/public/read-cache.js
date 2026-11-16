// Session memory only: never persists article drafts or credentials in the browser.
export class ReadCache {
  constructor({now=()=>Date.now(),limit=100}={}){this.now=now;this.limit=limit;this.values=new Map();this.pending=new Map();this.epochs=new Map();}
  has(key){return this.values.has(key);}
  stale(key,ttl){const item=this.values.get(key);return !item||this.now()-item.time>=ttl;}
  put(key,value){this.values.delete(key);this.values.set(key,{value:structuredClone(value),time:this.now()});while(this.values.size>this.limit)this.values.delete(this.values.keys().next().value);}
  peek(key){return this.has(key)?structuredClone(this.values.get(key).value):undefined;}
  invalidate(match=()=>true){const keys=new Set([...this.values.keys(),...this.pending.keys()]);for(const key of keys)if(match(key)){this.values.delete(key);this.pending.delete(key);this.epochs.set(key,(this.epochs.get(key)||0)+1);}}
  async get(key,load,{fresh=false}={}){
    if(!fresh&&this.has(key))return this.peek(key);
    let task=this.pending.get(key);
    if(!task){const epoch=this.epochs.get(key)||0;task=Promise.resolve().then(load).then(value=>{if((this.epochs.get(key)||0)===epoch)this.put(key,value);return value;});this.pending.set(key,task);task.finally(()=>{if(this.pending.get(key)===task)this.pending.delete(key);}).catch(()=>{});}
    return structuredClone(await task);
  }
}
export function pageReads(page,id,days){const primary=['notes','knowledge','events','members'].includes(page)?(id==='new'?null:'/api/content/'+page+(id?'/'+encodeURIComponent(id):'')):page==='publish'?'/api/changes':page==='settings'?null:'/api/stats?days='+days;return primary?['/api/overview',primary]:[];}
export function canUpdatePage({version,generation,dirty,touched,editing}){return version===generation&&!dirty&&!touched&&!editing;}
