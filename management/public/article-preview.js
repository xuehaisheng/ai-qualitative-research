const escape=value=>String(value||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function renderArticlePreview(body,{siteUrl,renderMarkdown,media={}}){
 const base=siteUrl.replace(/\/$/,''),origin=base.match(/^https?:\/\/[^/]+/)[0],prefix=base.slice(origin.length);
 const absolute=value=>{if(/^(?:[a-z][\w+.-]*:|\/\/|#)/i.test(value))return value;if(prefix&&value.startsWith(prefix+'/'))return origin+value;return base+'/'+value.replace(/^\//,'');};
 let source=String(body).replace(/{{\s*(['"])(.*?)\1\s*\|\s*(?:relative_url|absolute_url)\s*}}/g,(_,q,path)=>absolute(path)).replace(/{{\s*site\.baseurl\s*}}/g,prefix).replace(/{{\s*site\.url\s*}}/g,origin);
 source=source.replace(/{%[-]?\s*include\s+figure\.html\s+([\s\S]*?)\s*[-]?%}/g,(_,raw)=>{const attrs={};raw.replace(/([\w-]+)\s*=\s*(?:"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)')/g,(_,key,a,b)=>{attrs[key]=(a===undefined?b:a).replace(/\\(["'\\])/g,'$1');return '';});if(!attrs.src)return '<p>配图缺少文件地址。</p>';const url=absolute('/assets/img/figures/'+attrs.src);return '<figure class="slide-fig"><a href="'+escape(url)+'" target="_blank" rel="noopener"><img src="'+escape(url)+'" alt="'+escape(attrs.alt||attrs.cap)+'"></a>'+(attrs.cap?'<figcaption>'+escape(attrs.cap)+'</figcaption>':'')+'</figure>';});
 const hasTemplates=/{%|{{/.test(source);
 let html=renderMarkdown(source).replace(/\b(src|href)=(['"])([^'"]+)\2/g,(_,attr,q,value)=>{const url=absolute(value);return attr+'='+q+escape(media[url]||media[value]||url)+q;});
 return {html,hasTemplates};
}
