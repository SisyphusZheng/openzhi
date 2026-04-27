var Nn=Object.defineProperty;var Ir=e=>{throw TypeError(e)};var xn=(e,t,s)=>t in e?Nn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var y=(e,t,s)=>xn(e,typeof t!="symbol"?t+"":t,s),Fs=(e,t,s)=>t.has(e)||Ir("Cannot "+s);var b=(e,t,s)=>(Fs(e,t,"read from private field"),s?s.call(e):t.get(e)),N=(e,t,s)=>t.has(e)?Ir("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),v=(e,t,s,r)=>(Fs(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),w=(e,t,s)=>(Fs(e,t,"access private method"),s);var Cr=(e,t,s,r)=>({set _(i){v(e,t,i,s)},get _(){return b(e,t,r)}});var Nr=(e,t,s)=>(r,i)=>{let n=-1;return u(0);async function u(h){if(h<=n)throw new Error("next() called multiple times");n=h;let l,m=!1,g;if(e[h]?(g=e[h][0][0],r.req.routeIndex=h):g=h===e.length&&i||void 0,g)try{l=await g(r,()=>u(h+1))}catch(E){if(E instanceof Error&&t)r.error=E,l=await t(E,r),m=!0;else throw E}else r.finalized===!1&&s&&(l=await s(r));return l&&(r.finalized===!1||m)&&(r.res=l),r}},Rn=Symbol(),Dn=async(e,t=Object.create(null))=>{const{all:s=!1,dot:r=!1}=t,n=(e instanceof ki?e.raw.headers:e.headers).get("Content-Type");return n!=null&&n.startsWith("multipart/form-data")||n!=null&&n.startsWith("application/x-www-form-urlencoded")?Ln(e,{all:s,dot:r}):{}};async function Ln(e,t){const s=await e.formData();return s?On(s,t):{}}function On(e,t){const s=Object.create(null);return e.forEach((r,i)=>{t.all||i.endsWith("[]")?wn(s,i,r):s[i]=r}),t.dot&&Object.entries(s).forEach(([r,i])=>{r.includes(".")&&(Pn(s,r,i),delete s[r])}),s}var wn=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},Pn=(e,t,s)=>{if(/(?:^|\.)__proto__\./.test(t))return;let r=e;const i=t.split(".");i.forEach((n,u)=>{u===i.length-1?r[n]=s:((!r[n]||typeof r[n]!="object"||Array.isArray(r[n])||r[n]instanceof File)&&(r[n]=Object.create(null)),r=r[n])})},Ei=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Mn=e=>{const{groups:t,path:s}=Hn(e),r=Ei(s);return Bn(r,t)},Hn=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,r)=>{const i=`@${r}`;return t.push([i,s]),i}),{groups:t,path:e}},Bn=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[r]=t[s];for(let i=e.length-1;i>=0;i--)if(e[i].includes(r)){e[i]=e[i].replace(r,t[s][1]);break}}return e},is={},Fn=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const r=`${e}#${t}`;return is[r]||(s[2]?is[r]=t&&t[0]!==":"&&t[0]!=="*"?[r,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:is[r]=[e,s[1],!0]),is[r]}return null},Ua=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},Un=e=>Ua(e,decodeURI),Ti=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let r=s;for(;r<t.length;r++){const i=t.charCodeAt(r);if(i===37){const n=t.indexOf("?",r),u=t.indexOf("#",r),h=n===-1?u===-1?void 0:u:u===-1?n:Math.min(n,u),l=t.slice(s,h);return Un(l.includes("%25")?l.replace(/%25/g,"%2525"):l)}else if(i===63||i===35)break}return t.slice(s,r)},$n=e=>{const t=Ti(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},ut=(e,t,...s)=>(s.length&&(t=ut(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Si=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let r="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))r+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){s.length===0&&r===""?s.push("/"):s.push(r);const n=i.replace("?","");r+="/"+n,s.push(r)}else r+="/"+i}),s.filter((i,n,u)=>u.indexOf(i)===n)},Us=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Ua(e,Ai):e):e,_i=(e,t,s)=>{let r;if(!s&&t&&!/[%+]/.test(t)){let u=e.indexOf("?",8);if(u===-1)return;for(e.startsWith(t,u+1)||(u=e.indexOf(`&${t}`,u+1));u!==-1;){const h=e.charCodeAt(u+t.length+1);if(h===61){const l=u+t.length+2,m=e.indexOf("&",l);return Us(e.slice(l,m===-1?void 0:m))}else if(h==38||isNaN(h))return"";u=e.indexOf(`&${t}`,u+1)}if(r=/[%+]/.test(e),!r)return}const i={};r??(r=/[%+]/.test(e));let n=e.indexOf("?",8);for(;n!==-1;){const u=e.indexOf("&",n+1);let h=e.indexOf("=",n);h>u&&u!==-1&&(h=-1);let l=e.slice(n+1,h===-1?u===-1?void 0:u:h);if(r&&(l=Us(l)),n=u,l==="")continue;let m;h===-1?m="":(m=e.slice(h+1,u===-1?void 0:u),r&&(m=Us(m))),s?(i[l]&&Array.isArray(i[l])||(i[l]=[]),i[l].push(m)):i[l]??(i[l]=m)}return t?i[t]:i},zn=_i,jn=(e,t)=>_i(e,t,!0),Ai=decodeURIComponent,xr=e=>Ua(e,Ai),ht,le,xe,vi,yi,Xs,Oe,li,ki=(li=class{constructor(e,t="/",s=[[]]){N(this,xe);y(this,"raw");N(this,ht);N(this,le);y(this,"routeIndex",0);y(this,"path");y(this,"bodyCache",{});N(this,Oe,e=>{const{bodyCache:t,raw:s}=this,r=t[e];if(r)return r;const i=Object.keys(t)[0];return i?t[i].then(n=>(i==="json"&&(n=JSON.stringify(n)),new Response(n)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,v(this,le,s),v(this,ht,{})}param(e){return e?w(this,xe,vi).call(this,e):w(this,xe,yi).call(this)}query(e){return zn(this.url,e)}queries(e){return jn(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,r)=>{t[r]=s}),t}async parseBody(e){return Dn(this,e)}json(){return b(this,Oe).call(this,"text").then(e=>JSON.parse(e))}text(){return b(this,Oe).call(this,"text")}arrayBuffer(){return b(this,Oe).call(this,"arrayBuffer")}blob(){return b(this,Oe).call(this,"blob")}formData(){return b(this,Oe).call(this,"formData")}addValidatedData(e,t){b(this,ht)[e]=t}valid(e){return b(this,ht)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Rn](){return b(this,le)}get matchedRoutes(){return b(this,le)[0].map(([[,e]])=>e)}get routePath(){return b(this,le)[0].map(([[,e]])=>e)[this.routeIndex].path}},ht=new WeakMap,le=new WeakMap,xe=new WeakSet,vi=function(e){const t=b(this,le)[0][this.routeIndex][1][e],s=w(this,xe,Xs).call(this,t);return s&&/\%/.test(s)?xr(s):s},yi=function(){const e={},t=Object.keys(b(this,le)[0][this.routeIndex][1]);for(const s of t){const r=w(this,xe,Xs).call(this,b(this,le)[0][this.routeIndex][1][s]);r!==void 0&&(e[s]=/\%/.test(r)?xr(r):r)}return e},Xs=function(e){return b(this,le)[1]?b(this,le)[1][e]:e},Oe=new WeakMap,li),Yn={Stringify:1},Ii=async(e,t,s,r,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const n=e.callbacks;return n!=null&&n.length?(i?i[0]+=e:i=[e],Promise.all(n.map(h=>h({phase:t,buffer:i,context:r}))).then(h=>Promise.all(h.filter(Boolean).map(l=>Ii(l,t,!1,r,i))).then(()=>i[0]))):Promise.resolve(e)},Kn="text/plain; charset=UTF-8",$s=(e,t)=>({"Content-Type":e,...t}),At=(e,t)=>new Response(e,t),Gt,Vt,ke,pt,ve,ae,Qt,mt,ft,Ve,Xt,Jt,we,ct,hi,Wn=(hi=class{constructor(e,t){N(this,we);N(this,Gt);N(this,Vt);y(this,"env",{});N(this,ke);y(this,"finalized",!1);y(this,"error");N(this,pt);N(this,ve);N(this,ae);N(this,Qt);N(this,mt);N(this,ft);N(this,Ve);N(this,Xt);N(this,Jt);y(this,"render",(...e)=>(b(this,mt)??v(this,mt,t=>this.html(t)),b(this,mt).call(this,...e)));y(this,"setLayout",e=>v(this,Qt,e));y(this,"getLayout",()=>b(this,Qt));y(this,"setRenderer",e=>{v(this,mt,e)});y(this,"header",(e,t,s)=>{this.finalized&&v(this,ae,At(b(this,ae).body,b(this,ae)));const r=b(this,ae)?b(this,ae).headers:b(this,Ve)??v(this,Ve,new Headers);t===void 0?r.delete(e):s!=null&&s.append?r.append(e,t):r.set(e,t)});y(this,"status",e=>{v(this,pt,e)});y(this,"set",(e,t)=>{b(this,ke)??v(this,ke,new Map),b(this,ke).set(e,t)});y(this,"get",e=>b(this,ke)?b(this,ke).get(e):void 0);y(this,"newResponse",(...e)=>w(this,we,ct).call(this,...e));y(this,"body",(e,t,s)=>w(this,we,ct).call(this,e,t,s));y(this,"text",(e,t,s)=>!b(this,Ve)&&!b(this,pt)&&!t&&!s&&!this.finalized?new Response(e):w(this,we,ct).call(this,e,t,$s(Kn,s)));y(this,"json",(e,t,s)=>w(this,we,ct).call(this,JSON.stringify(e),t,$s("application/json",s)));y(this,"html",(e,t,s)=>{const r=i=>w(this,we,ct).call(this,i,t,$s("text/html; charset=UTF-8",s));return typeof e=="object"?Ii(e,Yn.Stringify,!1,{}).then(r):r(e)});y(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});y(this,"notFound",()=>(b(this,ft)??v(this,ft,()=>At()),b(this,ft).call(this,this)));v(this,Gt,e),t&&(v(this,ve,t.executionCtx),this.env=t.env,v(this,ft,t.notFoundHandler),v(this,Jt,t.path),v(this,Xt,t.matchResult))}get req(){return b(this,Vt)??v(this,Vt,new ki(b(this,Gt),b(this,Jt),b(this,Xt))),b(this,Vt)}get event(){if(b(this,ve)&&"respondWith"in b(this,ve))return b(this,ve);throw Error("This context has no FetchEvent")}get executionCtx(){if(b(this,ve))return b(this,ve);throw Error("This context has no ExecutionContext")}get res(){return b(this,ae)||v(this,ae,At(null,{headers:b(this,Ve)??v(this,Ve,new Headers)}))}set res(e){if(b(this,ae)&&e){e=At(e.body,e);for(const[t,s]of b(this,ae).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const r=b(this,ae).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of r)e.headers.append("set-cookie",i)}else e.headers.set(t,s)}v(this,ae,e),this.finalized=!0}get var(){return b(this,ke)?Object.fromEntries(b(this,ke)):{}}},Gt=new WeakMap,Vt=new WeakMap,ke=new WeakMap,pt=new WeakMap,ve=new WeakMap,ae=new WeakMap,Qt=new WeakMap,mt=new WeakMap,ft=new WeakMap,Ve=new WeakMap,Xt=new WeakMap,Jt=new WeakMap,we=new WeakSet,ct=function(e,t,s){const r=b(this,ae)?new Headers(b(this,ae).headers):b(this,Ve)??new Headers;if(typeof t=="object"&&"headers"in t){const n=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[u,h]of n)u.toLowerCase()==="set-cookie"?r.append(u,h):r.set(u,h)}if(s)for(const[n,u]of Object.entries(s))if(typeof u=="string")r.set(n,u);else{r.delete(n);for(const h of u)r.append(n,h)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??b(this,pt);return At(e,{status:i,headers:r})},hi),W="ALL",qn="all",Gn=["get","post","put","delete","options","patch"],Ci="Can not add a route since the matcher is already built.",Ni=class extends Error{},Vn="__COMPOSED_HANDLER",Qn=e=>e.text("404 Not Found",404),Rr=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},me,q,xi,fe,Ye,hs,ps,bt,Xn=(bt=class{constructor(t={}){N(this,q);y(this,"get");y(this,"post");y(this,"put");y(this,"delete");y(this,"options");y(this,"patch");y(this,"all");y(this,"on");y(this,"use");y(this,"router");y(this,"getPath");y(this,"_basePath","/");N(this,me,"/");y(this,"routes",[]);N(this,fe,Qn);y(this,"errorHandler",Rr);y(this,"onError",t=>(this.errorHandler=t,this));y(this,"notFound",t=>(v(this,fe,t),this));y(this,"fetch",(t,...s)=>w(this,q,ps).call(this,t,s[1],s[0],t.method));y(this,"request",(t,s,r,i)=>t instanceof Request?this.fetch(s?new Request(t,s):t,r,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${ut("/",t)}`,s),r,i)));y(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(w(this,q,ps).call(this,t.request,t,void 0,t.request.method))})});[...Gn,qn].forEach(n=>{this[n]=(u,...h)=>(typeof u=="string"?v(this,me,u):w(this,q,Ye).call(this,n,b(this,me),u),h.forEach(l=>{w(this,q,Ye).call(this,n,b(this,me),l)}),this)}),this.on=(n,u,...h)=>{for(const l of[u].flat()){v(this,me,l);for(const m of[n].flat())h.map(g=>{w(this,q,Ye).call(this,m.toUpperCase(),b(this,me),g)})}return this},this.use=(n,...u)=>(typeof n=="string"?v(this,me,n):(v(this,me,"*"),u.unshift(n)),u.forEach(h=>{w(this,q,Ye).call(this,W,b(this,me),h)}),this);const{strict:r,...i}=t;Object.assign(this,i),this.getPath=r??!0?t.getPath??Ti:$n}route(t,s){const r=this.basePath(t);return s.routes.map(i=>{var u;let n;s.errorHandler===Rr?n=i.handler:(n=async(h,l)=>(await Nr([],s.errorHandler)(h,()=>i.handler(h,l))).res,n[Vn]=i.handler),w(u=r,q,Ye).call(u,i.method,i.path,n)}),this}basePath(t){const s=w(this,q,xi).call(this);return s._basePath=ut(this._basePath,t),s}mount(t,s,r){let i,n;r&&(typeof r=="function"?n=r:(n=r.optionHandler,r.replaceRequest===!1?i=l=>l:i=r.replaceRequest));const u=n?l=>{const m=n(l);return Array.isArray(m)?m:[m]}:l=>{let m;try{m=l.executionCtx}catch{}return[l.env,m]};i||(i=(()=>{const l=ut(this._basePath,t),m=l==="/"?0:l.length;return g=>{const E=new URL(g.url);return E.pathname=E.pathname.slice(m)||"/",new Request(E,g)}})());const h=async(l,m)=>{const g=await s(i(l.req.raw),...u(l));if(g)return g;await m()};return w(this,q,Ye).call(this,W,ut(t,"*"),h),this}},me=new WeakMap,q=new WeakSet,xi=function(){const t=new bt({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,v(t,fe,b(this,fe)),t.routes=this.routes,t},fe=new WeakMap,Ye=function(t,s,r){t=t.toUpperCase(),s=ut(this._basePath,s);const i={basePath:this._basePath,path:s,method:t,handler:r};this.router.add(t,s,[r,i]),this.routes.push(i)},hs=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},ps=function(t,s,r,i){if(i==="HEAD")return(async()=>new Response(null,await w(this,q,ps).call(this,t,s,r,"GET")))();const n=this.getPath(t,{env:r}),u=this.router.match(i,n),h=new Wn(t,{path:n,matchResult:u,env:r,executionCtx:s,notFoundHandler:b(this,fe)});if(u[0].length===1){let m;try{m=u[0][0][0][0](h,async()=>{h.res=await b(this,fe).call(this,h)})}catch(g){return w(this,q,hs).call(this,g,h)}return m instanceof Promise?m.then(g=>g||(h.finalized?h.res:b(this,fe).call(this,h))).catch(g=>w(this,q,hs).call(this,g,h)):m??b(this,fe).call(this,h)}const l=Nr(u[0],this.errorHandler,b(this,fe));return(async()=>{try{const m=await l(h);if(!m.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return m.res}catch(m){return w(this,q,hs).call(this,m,h)}})()},bt),Ri=[];function Jn(e,t){const s=this.buildAllMatchers(),r=((i,n)=>{const u=s[i]||s[W],h=u[2][n];if(h)return h;const l=n.match(u[0]);if(!l)return[[],Ri];const m=l.indexOf("",1);return[u[1][m],l]});return this.match=r,r(e,t)}var gs="[^/]+",Lt=".*",Ot="(?:|/.*)",dt=Symbol(),Zn=new Set(".\\+*[^]$()");function eo(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Lt||e===Ot?1:t===Lt||t===Ot?-1:e===gs?1:t===gs?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Qe,Xe,be,st,to=(st=class{constructor(){N(this,Qe);N(this,Xe);N(this,be,Object.create(null))}insert(t,s,r,i,n){if(t.length===0){if(b(this,Qe)!==void 0)throw dt;if(n)return;v(this,Qe,s);return}const[u,...h]=t,l=u==="*"?h.length===0?["","",Lt]:["","",gs]:u==="/*"?["","",Ot]:u.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let m;if(l){const g=l[1];let E=l[2]||gs;if(g&&l[2]&&(E===".*"||(E=E.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(E))))throw dt;if(m=b(this,be)[E],!m){if(Object.keys(b(this,be)).some(_=>_!==Lt&&_!==Ot))throw dt;if(n)return;m=b(this,be)[E]=new st,g!==""&&v(m,Xe,i.varIndex++)}!n&&g!==""&&r.push([g,b(m,Xe)])}else if(m=b(this,be)[u],!m){if(Object.keys(b(this,be)).some(g=>g.length>1&&g!==Lt&&g!==Ot))throw dt;if(n)return;m=b(this,be)[u]=new st}m.insert(h,s,r,i,n)}buildRegExpStr(){const s=Object.keys(b(this,be)).sort(eo).map(r=>{const i=b(this,be)[r];return(typeof b(i,Xe)=="number"?`(${r})@${b(i,Xe)}`:Zn.has(r)?`\\${r}`:r)+i.buildRegExpStr()});return typeof b(this,Qe)=="number"&&s.unshift(`#${b(this,Qe)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},Qe=new WeakMap,Xe=new WeakMap,be=new WeakMap,st),Is,Zt,pi,so=(pi=class{constructor(){N(this,Is,{varIndex:0});N(this,Zt,new to)}insert(e,t,s){const r=[],i=[];for(let u=0;;){let h=!1;if(e=e.replace(/\{[^}]+\}/g,l=>{const m=`@\\${u}`;return i[u]=[m,l],u++,h=!0,m}),!h)break}const n=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let u=i.length-1;u>=0;u--){const[h]=i[u];for(let l=n.length-1;l>=0;l--)if(n[l].indexOf(h)!==-1){n[l]=n[l].replace(h,i[u][1]);break}}return b(this,Zt).insert(n,t,r,b(this,Is),s),r}buildRegExp(){let e=b(this,Zt).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,n,u)=>n!==void 0?(s[++t]=Number(n),"$()"):(u!==void 0&&(r[Number(u)]=++t),"")),[new RegExp(`^${e}`),s,r]}},Is=new WeakMap,Zt=new WeakMap,pi),ao=[/^$/,[],Object.create(null)],ms=Object.create(null);function Di(e){return ms[e]??(ms[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function ro(){ms=Object.create(null)}function io(e){var m;const t=new so,s=[];if(e.length===0)return ao;const r=e.map(g=>[!/\*|\/:/.test(g[0]),...g]).sort(([g,E],[_,k])=>g?1:_?-1:E.length-k.length),i=Object.create(null);for(let g=0,E=-1,_=r.length;g<_;g++){const[k,I,A]=r[g];k?i[I]=[A.map(([R])=>[R,Object.create(null)]),Ri]:E++;let H;try{H=t.insert(I,E,k)}catch(R){throw R===dt?new Ni(I):R}k||(s[E]=A.map(([R,O])=>{const K=Object.create(null);for(O-=1;O>=0;O--){const[te,St]=H[O];K[te]=St}return[R,K]}))}const[n,u,h]=t.buildRegExp();for(let g=0,E=s.length;g<E;g++)for(let _=0,k=s[g].length;_<k;_++){const I=(m=s[g][_])==null?void 0:m[1];if(!I)continue;const A=Object.keys(I);for(let H=0,R=A.length;H<R;H++)I[A[H]]=h[I[A[H]]]}const l=[];for(const g in u)l[g]=s[u[g]];return[n,l,i]}function nt(e,t){if(e){for(const s of Object.keys(e).sort((r,i)=>i.length-r.length))if(Di(s).test(t))return[...e[s]]}}var Pe,Me,Cs,Li,mi,no=(mi=class{constructor(){N(this,Cs);y(this,"name","RegExpRouter");N(this,Pe);N(this,Me);y(this,"match",Jn);v(this,Pe,{[W]:Object.create(null)}),v(this,Me,{[W]:Object.create(null)})}add(e,t,s){var h;const r=b(this,Pe),i=b(this,Me);if(!r||!i)throw new Error(Ci);r[e]||[r,i].forEach(l=>{l[e]=Object.create(null),Object.keys(l[W]).forEach(m=>{l[e][m]=[...l[W][m]]})}),t==="/*"&&(t="*");const n=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const l=Di(t);e===W?Object.keys(r).forEach(m=>{var g;(g=r[m])[t]||(g[t]=nt(r[m],t)||nt(r[W],t)||[])}):(h=r[e])[t]||(h[t]=nt(r[e],t)||nt(r[W],t)||[]),Object.keys(r).forEach(m=>{(e===W||e===m)&&Object.keys(r[m]).forEach(g=>{l.test(g)&&r[m][g].push([s,n])})}),Object.keys(i).forEach(m=>{(e===W||e===m)&&Object.keys(i[m]).forEach(g=>l.test(g)&&i[m][g].push([s,n]))});return}const u=Si(t)||[t];for(let l=0,m=u.length;l<m;l++){const g=u[l];Object.keys(i).forEach(E=>{var _;(e===W||e===E)&&((_=i[E])[g]||(_[g]=[...nt(r[E],g)||nt(r[W],g)||[]]),i[E][g].push([s,n-m+l+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(b(this,Me)).concat(Object.keys(b(this,Pe))).forEach(t=>{e[t]||(e[t]=w(this,Cs,Li).call(this,t))}),v(this,Pe,v(this,Me,void 0)),ro(),e}},Pe=new WeakMap,Me=new WeakMap,Cs=new WeakSet,Li=function(e){const t=[];let s=e===W;return[b(this,Pe),b(this,Me)].forEach(r=>{const i=r[e]?Object.keys(r[e]).map(n=>[n,r[e][n]]):[];i.length!==0?(s||(s=!0),t.push(...i)):e!==W&&t.push(...Object.keys(r[W]).map(n=>[n,r[W][n]]))}),s?io(t):null},mi),He,ye,fi,oo=(fi=class{constructor(e){y(this,"name","SmartRouter");N(this,He,[]);N(this,ye,[]);v(this,He,e.routers)}add(e,t,s){if(!b(this,ye))throw new Error(Ci);b(this,ye).push([e,t,s])}match(e,t){if(!b(this,ye))throw new Error("Fatal error");const s=b(this,He),r=b(this,ye),i=s.length;let n=0,u;for(;n<i;n++){const h=s[n];try{for(let l=0,m=r.length;l<m;l++)h.add(...r[l]);u=h.match(e,t)}catch(l){if(l instanceof Ni)continue;throw l}this.match=h.match.bind(h),v(this,He,[h]),v(this,ye,void 0);break}if(n===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,u}get activeRouter(){if(b(this,ye)||b(this,He).length!==1)throw new Error("No active router has been determined yet.");return b(this,He)[0]}},He=new WeakMap,ye=new WeakMap,fi),kt=Object.create(null),uo=e=>{for(const t in e)return!0;return!1},Be,Z,Je,gt,J,Ie,Ke,Et,co=(Et=class{constructor(t,s,r){N(this,Ie);N(this,Be);N(this,Z);N(this,Je);N(this,gt,0);N(this,J,kt);if(v(this,Z,r||Object.create(null)),v(this,Be,[]),t&&s){const i=Object.create(null);i[t]={handler:s,possibleKeys:[],score:0},v(this,Be,[i])}v(this,Je,[])}insert(t,s,r){v(this,gt,++Cr(this,gt)._);let i=this;const n=Mn(s),u=[];for(let h=0,l=n.length;h<l;h++){const m=n[h],g=n[h+1],E=Fn(m,g),_=Array.isArray(E)?E[0]:m;if(_ in b(i,Z)){i=b(i,Z)[_],E&&u.push(E[1]);continue}b(i,Z)[_]=new Et,E&&(b(i,Je).push(E),u.push(E[1])),i=b(i,Z)[_]}return b(i,Be).push({[t]:{handler:r,possibleKeys:u.filter((h,l,m)=>m.indexOf(h)===l),score:b(this,gt)}}),i}search(t,s){var g;const r=[];v(this,J,kt);let n=[this];const u=Ei(s),h=[],l=u.length;let m=null;for(let E=0;E<l;E++){const _=u[E],k=E===l-1,I=[];for(let H=0,R=n.length;H<R;H++){const O=n[H],K=b(O,Z)[_];K&&(v(K,J,b(O,J)),k?(b(K,Z)["*"]&&w(this,Ie,Ke).call(this,r,b(K,Z)["*"],t,b(O,J)),w(this,Ie,Ke).call(this,r,K,t,b(O,J))):I.push(K));for(let te=0,St=b(O,Je).length;te<St;te++){const G=b(O,Je)[te],Y=b(O,J)===kt?{}:{...b(O,J)};if(G==="*"){const Re=b(O,Z)["*"];Re&&(w(this,Ie,Ke).call(this,r,Re,t,b(O,J)),v(Re,J,Y),I.push(Re));continue}const[pe,ue,Te]=G;if(!_&&!(Te instanceof RegExp))continue;const se=b(O,Z)[pe];if(Te instanceof RegExp){if(m===null){m=new Array(l);let ce=s[0]==="/"?1:0;for(let $e=0;$e<l;$e++)m[$e]=ce,ce+=u[$e].length+1}const Re=s.substring(m[E]),_t=Te.exec(Re);if(_t){if(Y[ue]=_t[0],w(this,Ie,Ke).call(this,r,se,t,b(O,J),Y),uo(b(se,Z))){v(se,J,Y);const ce=((g=_t[0].match(/\//))==null?void 0:g.length)??0;(h[ce]||(h[ce]=[])).push(se)}continue}}(Te===!0||Te.test(_))&&(Y[ue]=_,k?(w(this,Ie,Ke).call(this,r,se,t,Y,b(O,J)),b(se,Z)["*"]&&w(this,Ie,Ke).call(this,r,b(se,Z)["*"],t,Y,b(O,J))):(v(se,J,Y),I.push(se)))}}const A=h.shift();n=A?I.concat(A):I}return r.length>1&&r.sort((E,_)=>E.score-_.score),[r.map(({handler:E,params:_})=>[E,_])]}},Be=new WeakMap,Z=new WeakMap,Je=new WeakMap,gt=new WeakMap,J=new WeakMap,Ie=new WeakSet,Ke=function(t,s,r,i,n){for(let u=0,h=b(s,Be).length;u<h;u++){const l=b(s,Be)[u],m=l[r]||l[W],g={};if(m!==void 0&&(m.params=Object.create(null),t.push(m),i!==kt||n&&n!==kt))for(let E=0,_=m.possibleKeys.length;E<_;E++){const k=m.possibleKeys[E],I=g[m.score];m.params[k]=n!=null&&n[k]&&!I?n[k]:i[k]??(n==null?void 0:n[k]),g[m.score]=!0}}},Et),Ze,bi,lo=(bi=class{constructor(){y(this,"name","TrieRouter");N(this,Ze);v(this,Ze,new co)}add(e,t,s){const r=Si(t);if(r){for(let i=0,n=r.length;i<n;i++)b(this,Ze).insert(e,r[i],s);return}b(this,Ze).insert(e,t,s)}match(e,t){return b(this,Ze).search(e,t)}},Ze=new WeakMap,bi),ho=class extends Xn{constructor(e={}){super(e),this.router=e.router??new oo({routers:[new no,new lo]})}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},es=e=>e.replace(/[&<>"']/g,t=>po[t]);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mo=({elementRenderers:e},t,s=customElements.get(t),r=new Map)=>{if(s===void 0)return console.warn(`Custom element ${t} was not registered.`),new Dr(t);for(const i of e)if(i.matchesClass(s,t,r))return new i(t);return new Dr(t)};class Oi{static matchesClass(t,s,r){return!1}constructor(t){this.tagName=t}connectedCallback(){}attributeChangedCallback(t,s,r){}setProperty(t,s){this.element!==void 0&&(this.element[t]=s)}setAttribute(t,s){if(t=t.toLowerCase(),this.element!==void 0){const r=this.element.getAttribute(t);this.element.setAttribute(t,s),this.attributeChangedCallback(t,r,s)}}get shadowRootOptions(){return{mode:"open"}}renderShadow(t){}renderLight(t){}*renderAttributes(){if(this.element!==void 0){const{attributes:t}=this.element;for(let s=0,r,i;s<t.length&&({name:r,value:i}=t[s]);s++)i===""||i===void 0||i===null?yield` ${r}`:yield` ${r}="${es(i)}"`}}}class Dr extends Oi{constructor(){super(...arguments),this._attributes={}}setAttribute(t,s){this._attributes[t.toLowerCase()]=s}*renderAttributes(){for(const[t,s]of Object.entries(this._attributes))s===""||s===void 0||s===null?yield` ${t}`:yield` ${t}="${es(s)}"`}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs=globalThis,$a=fs.ShadowRoot&&(fs.ShadyCSS===void 0||fs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,za=Symbol(),Lr=new WeakMap;let wi=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==za)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if($a&&t===void 0){const r=s!==void 0&&s.length===1;r&&(t=Lr.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Lr.set(s,t))}return t}toString(){return this.cssText}};const fo=e=>new wi(typeof e=="string"?e:e+"",void 0,za),D=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((r,i,n)=>r+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new wi(s,e,za)},bo=(e,t)=>{if($a)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const r=document.createElement("style"),i=fs.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},Or=$a?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const r of t.cssRules)s+=r.cssText;return fo(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:go,defineProperty:Eo,getOwnPropertyDescriptor:To,getOwnPropertyNames:So,getOwnPropertySymbols:_o,getPrototypeOf:Ao}=Object,Ue=globalThis,wr=Ue.trustedTypes,ko=wr?wr.emptyScript:"",zs=Ue.reactiveElementPolyfillSupport,wt=(e,t)=>e,Js={toAttribute(e,t){switch(t){case Boolean:e=e?ko:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Pi=(e,t)=>!go(e,t),Pr={attribute:!0,type:String,converter:Js,reflect:!1,useDefault:!1,hasChanged:Pi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ue.litPropertyMetadata??(Ue.litPropertyMetadata=new WeakMap);let We=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Pr){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,s);i!==void 0&&Eo(this.prototype,t,i)}}static getPropertyDescriptor(t,s,r){const{get:i,set:n}=To(this.prototype,t)??{get(){return this[s]},set(u){this[s]=u}};return{get:i,set(u){const h=i==null?void 0:i.call(this);n==null||n.call(this,u),this.requestUpdate(t,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pr}static _$Ei(){if(this.hasOwnProperty(wt("elementProperties")))return;const t=Ao(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(wt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(wt("properties"))){const s=this.properties,r=[...So(s),..._o(s)];for(const i of r)this.createProperty(i,s[i])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)s.unshift(Or(i))}else t!==void 0&&s.push(Or(t));return s}static _$Eu(t,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bo(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostDisconnected)==null?void 0:r.call(s)})}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$ET(t,s){var n;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const u=(((n=r.converter)==null?void 0:n.toAttribute)!==void 0?r.converter:Js).toAttribute(s,r.type);this._$Em=t,u==null?this.removeAttribute(i):this.setAttribute(i,u),this._$Em=null}}_$AK(t,s){var n,u;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const h=r.getPropertyOptions(i),l=typeof h.converter=="function"?{fromAttribute:h.converter}:((n=h.converter)==null?void 0:n.fromAttribute)!==void 0?h.converter:Js;this._$Em=i;const m=l.fromAttribute(s,h.type);this[i]=m??((u=this._$Ej)==null?void 0:u.get(i))??m,this._$Em=null}}requestUpdate(t,s,r,i=!1,n){var u;if(t!==void 0){const h=this.constructor;if(i===!1&&(n=this[t]),r??(r=h.getPropertyOptions(t)),!((r.hasChanged??Pi)(n,s)||r.useDefault&&r.reflect&&n===((u=this._$Ej)==null?void 0:u.get(t))&&!this.hasAttribute(h._$Eu(t,r))))return;this.C(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:r,reflect:i,wrapped:n},u){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,u??s??this[t]),n!==!0||u!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(s=void 0),this._$AL.set(t,s)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,u]of this._$Ep)this[n]=u;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,u]of i){const{wrapped:h}=u,l=this[n];h!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,u,l)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(s)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(t){}firstUpdated(t){}};We.elementStyles=[],We.shadowRootOptions={mode:"open"},We[wt("elementProperties")]=new Map,We[wt("finalized")]=new Map,zs==null||zs({ReactiveElement:We}),(Ue.reactiveElementVersions??(Ue.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=globalThis,Mr=e=>e,Es=Pt.trustedTypes,Hr=Es?Es.createPolicy("lit-html",{createHTML:e=>e}):void 0,ja="$lit$",Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,Ya="?"+Ce,vo=`<${Ya}>`,at=document,jt=()=>at.createComment(""),Yt=e=>e===null||typeof e!="object"&&typeof e!="function",Ka=Array.isArray,Mi=e=>Ka(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",js=`[ 	
\f\r]`,vt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Br=/-->/g,Fr=/>/g,ze=RegExp(`>|${js}(?:([^\\s"'>=/]+)(${js}*=${js}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ur=/'/g,$r=/"/g,Hi=/^(?:script|style|textarea|title)$/i,yo=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),C=yo(1),ge=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),zr=new WeakMap,Ge=at.createTreeWalker(at,129);function Bi(e,t){if(!Ka(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Hr!==void 0?Hr.createHTML(t):t}const Fi=(e,t)=>{const s=e.length-1,r=[];let i,n=t===2?"<svg>":t===3?"<math>":"",u=vt;for(let h=0;h<s;h++){const l=e[h];let m,g,E=-1,_=0;for(;_<l.length&&(u.lastIndex=_,g=u.exec(l),g!==null);)_=u.lastIndex,u===vt?g[1]==="!--"?u=Br:g[1]!==void 0?u=Fr:g[2]!==void 0?(Hi.test(g[2])&&(i=RegExp("</"+g[2],"g")),u=ze):g[3]!==void 0&&(u=ze):u===ze?g[0]===">"?(u=i??vt,E=-1):g[1]===void 0?E=-2:(E=u.lastIndex-g[2].length,m=g[1],u=g[3]===void 0?ze:g[3]==='"'?$r:Ur):u===$r||u===Ur?u=ze:u===Br||u===Fr?u=vt:(u=ze,i=void 0);const k=u===ze&&e[h+1].startsWith("/>")?" ":"";n+=u===vt?l+vo:E>=0?(r.push(m),l.slice(0,E)+ja+l.slice(E)+Ce+k):l+Ce+(E===-2?h:k)}return[Bi(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Kt{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let n=0,u=0;const h=t.length-1,l=this.parts,[m,g]=Fi(t,s);if(this.el=Kt.createElement(m,r),Ge.currentNode=this.el.content,s===2||s===3){const E=this.el.content.firstChild;E.replaceWith(...E.childNodes)}for(;(i=Ge.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const E of i.getAttributeNames())if(E.endsWith(ja)){const _=g[u++],k=i.getAttribute(E).split(Ce),I=/([.?@])?(.*)/.exec(_);l.push({type:1,index:n,name:I[2],strings:k,ctor:I[1]==="."?Ui:I[1]==="?"?$i:I[1]==="@"?zi:ss}),i.removeAttribute(E)}else E.startsWith(Ce)&&(l.push({type:6,index:n}),i.removeAttribute(E));if(Hi.test(i.tagName)){const E=i.textContent.split(Ce),_=E.length-1;if(_>0){i.textContent=Es?Es.emptyScript:"";for(let k=0;k<_;k++)i.append(E[k],jt()),Ge.nextNode(),l.push({type:2,index:++n});i.append(E[_],jt())}}}else if(i.nodeType===8)if(i.data===Ya)l.push({type:2,index:n});else{let E=-1;for(;(E=i.data.indexOf(Ce,E+1))!==-1;)l.push({type:7,index:n}),E+=Ce.length-1}n++}}static createElement(t,s){const r=at.createElement("template");return r.innerHTML=t,r}}function rt(e,t,s=e,r){var u,h;if(t===ge)return t;let i=r!==void 0?(u=s._$Co)==null?void 0:u[r]:s._$Cl;const n=Yt(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((h=i==null?void 0:i._$AO)==null||h.call(i,!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,s,r)),r!==void 0?(s._$Co??(s._$Co=[]))[r]=i:s._$Cl=i),i!==void 0&&(t=rt(e,i._$AS(e,t.values),i,r)),t}class Io{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??at).importNode(s,!0);Ge.currentNode=i;let n=Ge.nextNode(),u=0,h=0,l=r[0];for(;l!==void 0;){if(u===l.index){let m;l.type===2?m=new ts(n,n.nextSibling,this,t):l.type===1?m=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(m=new Co(n,this,t)),this._$AV.push(m),l=r[++h]}u!==(l==null?void 0:l.index)&&(n=Ge.nextNode(),u++)}return Ge.currentNode=at,i}p(t){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,s),s+=r.strings.length-2):r._$AI(t[s])),s++}}class ts{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=rt(this,t,s),Yt(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==ge&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mi(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==z&&Yt(this._$AH)?this._$AA.nextSibling.data=t:this.T(at.createTextNode(t)),this._$AH=t}$(t){var n;const{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Kt.createElement(Bi(r.h,r.h[0]),this.options)),r);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(s);else{const u=new Io(i,this),h=u.u(this.options);u.p(s),this.T(h),this._$AH=u}}_$AC(t){let s=zr.get(t.strings);return s===void 0&&zr.set(t.strings,s=new Kt(t)),s}k(t){Ka(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,i=0;for(const n of t)i===s.length?s.push(r=new ts(this.O(jt()),this.O(jt()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,s);t!==this._$AB;){const i=Mr(t).nextSibling;Mr(t).remove(),t=i}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class ss{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,i,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=z}_$AI(t,s=this,r,i){const n=this.strings;let u=!1;if(n===void 0)t=rt(this,t,s,0),u=!Yt(t)||t!==this._$AH&&t!==ge,u&&(this._$AH=t);else{const h=t;let l,m;for(t=n[0],l=0;l<n.length-1;l++)m=rt(this,h[r+l],s,l),m===ge&&(m=this._$AH[l]),u||(u=!Yt(m)||m!==this._$AH[l]),m===z?t=z:t!==z&&(t+=(m??"")+n[l+1]),this._$AH[l]=m}u&&!i&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ui extends ss{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}class $i extends ss{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}}class zi extends ss{constructor(t,s,r,i,n){super(t,s,r,i,n),this.type=5}_$AI(t,s=this){if((t=rt(this,t,s,0)??z)===ge)return;const r=this._$AH,i=t===z&&r!==z||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==z&&(r===z||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class Co{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}}const Se={M:ja,P:Ce,A:Ya,L:Fi,D:Mi,V:rt,H:ss,N:$i,U:zi,B:Ui},Ys=Pt.litHtmlPolyfillSupport;Ys==null||Ys(Kt,ts),(Pt.litHtmlVersions??(Pt.litHtmlVersions=[])).push("3.3.2");const No=(e,t,s)=>{const r=(s==null?void 0:s.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const n=(s==null?void 0:s.renderBefore)??null;r._$litPart$=i=new ts(t.insertBefore(jt(),n),n,void 0,s??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=globalThis;let x=class extends We{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=No(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ge}};var gi;x._$litElement$=!0,x.finalized=!0,(gi=et.litElementHydrateSupport)==null||gi.call(et,{LitElement:x});const Ks=et.litElementPolyfillSupport;Ks==null||Ks({LitElement:x});const jr={_$AK:(e,t,s)=>{e._$AK(t,s)},_$AL:e=>e._$AL};(et.litElementVersions??(et.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xo={attributeToProperty:jr._$AK,changedProperties:jr._$AL};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ro={ariaAtomic:"aria-atomic",ariaAutoComplete:"aria-autocomplete",ariaBrailleLabel:"aria-braillelabel",ariaBrailleRoleDescription:"aria-brailleroledescription",ariaBusy:"aria-busy",ariaChecked:"aria-checked",ariaColCount:"aria-colcount",ariaColIndex:"aria-colindex",ariaColIndexText:"aria-colindextext",ariaColSpan:"aria-colspan",ariaCurrent:"aria-current",ariaDescription:"aria-description",ariaDisabled:"aria-disabled",ariaExpanded:"aria-expanded",ariaHasPopup:"aria-haspopup",ariaHidden:"aria-hidden",ariaInvalid:"aria-invalid",ariaKeyShortcuts:"aria-keyshortcuts",ariaLabel:"aria-label",ariaLevel:"aria-level",ariaLive:"aria-live",ariaModal:"aria-modal",ariaMultiLine:"aria-multiline",ariaMultiSelectable:"aria-multiselectable",ariaOrientation:"aria-orientation",ariaPlaceholder:"aria-placeholder",ariaPosInSet:"aria-posinset",ariaPressed:"aria-pressed",ariaReadOnly:"aria-readonly",ariaRelevant:"aria-relevant",ariaRequired:"aria-required",ariaRoleDescription:"aria-roledescription",ariaRowCount:"aria-rowcount",ariaRowIndex:"aria-rowindex",ariaRowIndexText:"aria-rowindextext",ariaRowSpan:"aria-rowspan",ariaSelected:"aria-selected",ariaSetSize:"aria-setsize",ariaSort:"aria-sort",ariaValueMax:"aria-valuemax",ariaValueMin:"aria-valuemin",ariaValueNow:"aria-valuenow",ariaValueText:"aria-valuetext",role:"role"},Do=class{get shadowRoot(){return this.__host.__shadowRoot}constructor(t){this.ariaActiveDescendantElement=null,this.ariaAtomic="",this.ariaAutoComplete="",this.ariaBrailleLabel="",this.ariaBrailleRoleDescription="",this.ariaBusy="",this.ariaChecked="",this.ariaColCount="",this.ariaColIndex="",this.ariaColIndexText="",this.ariaColSpan="",this.ariaControlsElements=null,this.ariaCurrent="",this.ariaDescribedByElements=null,this.ariaDescription="",this.ariaDetailsElements=null,this.ariaDisabled="",this.ariaErrorMessageElements=null,this.ariaExpanded="",this.ariaFlowToElements=null,this.ariaHasPopup="",this.ariaHidden="",this.ariaInvalid="",this.ariaKeyShortcuts="",this.ariaLabel="",this.ariaLabelledByElements=null,this.ariaLevel="",this.ariaLive="",this.ariaModal="",this.ariaMultiLine="",this.ariaMultiSelectable="",this.ariaOrientation="",this.ariaOwnsElements=null,this.ariaPlaceholder="",this.ariaPosInSet="",this.ariaPressed="",this.ariaReadOnly="",this.ariaRelevant="",this.ariaRequired="",this.ariaRoleDescription="",this.ariaRowCount="",this.ariaRowIndex="",this.ariaRowIndexText="",this.ariaRowSpan="",this.ariaSelected="",this.ariaSetSize="",this.ariaSort="",this.ariaValueMax="",this.ariaValueMin="",this.ariaValueNow="",this.ariaValueText="",this.role="",this.form=null,this.labels=[],this.states=new Set,this.validationMessage="",this.validity={},this.willValidate=!0,this.__host=t}checkValidity(){return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."),!0}reportValidity(){return!0}setFormValue(){}setValidity(){}},Lo="hydrate-internals-";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _e=function(e,t,s,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(e,s):i?i.value=s:t.set(e,s),s},X=function(e,t,s,r){if(s==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return s==="m"?r:s==="a"?r.call(e):r?r.value:t.get(e)},ot,ns,os,yt,Ws,It,us,je,Ct,De,cs,Yr;const Kr=e=>typeof e=="boolean"?e:(e==null?void 0:e.capture)??!1,Ts=0,Zs=1,Ss=2,ea=3;class Oo{constructor(){this.__eventListeners=new Map,this.__captureEventListeners=new Map}addEventListener(t,s,r){var h;if(s==null)return;const i=Kr(r)?this.__captureEventListeners:this.__eventListeners;let n=i.get(t);if(n===void 0)n=new Map,i.set(t,n);else if(n.has(s))return;const u=typeof r=="object"&&r?r:{};(h=u.signal)==null||h.addEventListener("abort",()=>this.removeEventListener(t,s,r)),n.set(s,u??{})}removeEventListener(t,s,r){if(s==null)return;const i=Kr(r)?this.__captureEventListeners:this.__eventListeners,n=i.get(t);n!==void 0&&(n.delete(s),n.size||i.delete(t))}dispatchEvent(t){const s=[this];let r=this.__eventTargetParent;if(t.composed)for(;r;)s.push(r),r=r.__eventTargetParent;else for(;r&&r!==this.__host;)s.push(r),r=r.__eventTargetParent;let i=!1,n=!1,u=Ts,h=null,l=null,m=null;const g=t.stopPropagation,E=t.stopImmediatePropagation;Object.defineProperties(t,{target:{get(){return h??l},...M},srcElement:{get(){return t.target},...M},currentTarget:{get(){return m},...M},eventPhase:{get(){return u},...M},composedPath:{value:()=>s,...M},stopPropagation:{value:()=>{i=!0,g.call(t)},...M},stopImmediatePropagation:{value:()=>{n=!0,E.call(t)},...M}});const _=(R,O,K)=>{typeof R=="function"?R(t):typeof(R==null?void 0:R.handleEvent)=="function"&&R.handleEvent(t),O.once&&K.delete(R)},k=()=>(m=null,u=Ts,!t.defaultPrevented),I=s.slice().reverse();h=!this.__host||!t.composed?this:null;const A=R=>{for(l=this;l.__host&&R.includes(l.__host);)l=l.__host};for(const R of I){!h&&(!l||l===R.__host)&&A(I.slice(I.indexOf(R))),m=R,u=R===t.target?Ss:Zs;const O=R.__captureEventListeners.get(t.type);if(O){for(const[K,te]of O)if(_(K,te,O),n)return k()}if(i)return k()}const H=t.bubbles?s:[this];l=null;for(const R of H){!h&&(!l||R===l.__host)&&A(H.slice(0,H.indexOf(R)+1)),m=R,u=R===t.target?Ss:ea;const O=R.__eventListeners.get(t.type);if(O){for(const[K,te]of O)if(_(K,te,O),n)return k()}if(i)return k()}return k()}}const wo=Oo,M={__proto__:null};M.enumerable=!0;Object.freeze(M);const Wa=(De=class{constructor(t,s={}){if(ot.set(this,!1),ns.set(this,!1),os.set(this,!1),yt.set(this,!1),Ws.set(this,Date.now()),It.set(this,!1),us.set(this,void 0),je.set(this,void 0),Ct.set(this,void 0),this.NONE=Ts,this.CAPTURING_PHASE=Zs,this.AT_TARGET=Ss,this.BUBBLING_PHASE=ea,arguments.length===0)throw new Error("The type argument must be specified");if(typeof s!="object"||!s)throw new Error('The "options" argument must be an object');const{bubbles:r,cancelable:i,composed:n}=s;_e(this,ot,!!i,"f"),_e(this,ns,!!r,"f"),_e(this,os,!!n,"f"),_e(this,us,`${t}`,"f"),_e(this,je,null,"f"),_e(this,Ct,!1,"f")}initEvent(t,s,r){throw new Error("Method not implemented.")}stopImmediatePropagation(){this.stopPropagation()}preventDefault(){_e(this,yt,!0,"f")}get target(){return X(this,je,"f")}get currentTarget(){return X(this,je,"f")}get srcElement(){return X(this,je,"f")}get type(){return X(this,us,"f")}get cancelable(){return X(this,ot,"f")}get defaultPrevented(){return X(this,ot,"f")&&X(this,yt,"f")}get timeStamp(){return X(this,Ws,"f")}composedPath(){return X(this,Ct,"f")?[X(this,je,"f")]:[]}get returnValue(){return!X(this,ot,"f")||!X(this,yt,"f")}get bubbles(){return X(this,ns,"f")}get composed(){return X(this,os,"f")}get eventPhase(){return X(this,Ct,"f")?De.AT_TARGET:De.NONE}get cancelBubble(){return X(this,It,"f")}set cancelBubble(t){t&&_e(this,It,!0,"f")}stopPropagation(){_e(this,It,!0,"f")}get isTrusted(){return!1}},ot=new WeakMap,ns=new WeakMap,os=new WeakMap,yt=new WeakMap,Ws=new WeakMap,It=new WeakMap,us=new WeakMap,je=new WeakMap,Ct=new WeakMap,De.NONE=Ts,De.CAPTURING_PHASE=Zs,De.AT_TARGET=Ss,De.BUBBLING_PHASE=ea,De);Object.defineProperties(Wa.prototype,{initEvent:M,stopImmediatePropagation:M,preventDefault:M,target:M,currentTarget:M,srcElement:M,type:M,cancelable:M,defaultPrevented:M,timeStamp:M,composedPath:M,returnValue:M,bubbles:M,composed:M,eventPhase:M,cancelBubble:M,stopPropagation:M,isTrusted:M});const ji=(Yr=class extends Wa{constructor(t,s={}){super(t,s),cs.set(this,void 0),_e(this,cs,(s==null?void 0:s.detail)??null,"f")}initCustomEvent(t,s,r,i){throw new Error("Method not implemented.")}get detail(){return X(this,cs,"f")}},cs=new WeakMap,Yr);Object.defineProperties(ji.prototype,{detail:M});const Po=Wa,Mo=ji;/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re;re=class{constructor(){this.STYLE_RULE=1,this.CHARSET_RULE=2,this.IMPORT_RULE=3,this.MEDIA_RULE=4,this.FONT_FACE_RULE=5,this.PAGE_RULE=6,this.NAMESPACE_RULE=10,this.KEYFRAMES_RULE=7,this.KEYFRAME_RULE=8,this.SUPPORTS_RULE=12,this.COUNTER_STYLE_RULE=11,this.FONT_FEATURE_VALUES_RULE=14,this.__parentStyleSheet=null,this.cssText=""}get parentRule(){return null}get parentStyleSheet(){return this.__parentStyleSheet}get type(){return 0}},re.STYLE_RULE=1,re.CHARSET_RULE=2,re.IMPORT_RULE=3,re.MEDIA_RULE=4,re.FONT_FACE_RULE=5,re.PAGE_RULE=6,re.NAMESPACE_RULE=10,re.KEYFRAMES_RULE=7,re.KEYFRAME_RULE=8,re.SUPPORTS_RULE=12,re.COUNTER_STYLE_RULE=11,re.FONT_FEATURE_VALUES_RULE=14;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */globalThis.Event??(globalThis.Event=Po);globalThis.CustomEvent??(globalThis.CustomEvent=Mo);const Wr=new WeakMap,Nt=e=>{let t=Wr.get(e);return t===void 0&&Wr.set(e,t=new Map),t},Ho=class extends wo{constructor(){super(...arguments),this.__shadowRootMode=null,this.__shadowRoot=null,this.__internals=null}get attributes(){return Array.from(Nt(this)).map(([t,s])=>({name:t,value:s}))}get shadowRoot(){return this.__shadowRootMode==="closed"?null:this.__shadowRoot}get localName(){return this.constructor.__localName}get tagName(){var t;return(t=this.localName)==null?void 0:t.toUpperCase()}setAttribute(t,s){Nt(this).set(t,String(s))}removeAttribute(t){Nt(this).delete(t)}toggleAttribute(t,s){if(this.hasAttribute(t)){if(s===void 0||!s)return this.removeAttribute(t),!1}else return s===void 0||s?(this.setAttribute(t,""),!0):!1;return!0}hasAttribute(t){return Nt(this).has(t)}attachShadow(t){const s={host:this};return this.__shadowRootMode=t.mode,t&&t.mode==="open"&&(this.__shadowRoot=s),s}attachInternals(){if(this.__internals!==null)throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");const t=new Do(this);return this.__internals=t,t}getAttribute(t){return Nt(this).get(t)??null}},Bo=class extends Ho{},Yi=Bo;globalThis.litServerRoot??(globalThis.litServerRoot=Object.defineProperty(new Yi,"localName",{get(){return"lit-server-root"}}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5},Fo=e=>(...t)=>({_$litDirective$:e,values:t});let Ki=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,r){this._$Ct=t,this._$AM=s,this._$Ci=r}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uo=e=>e===null||typeof e!="object"&&typeof e!="function",$o={HTML:1},qa=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,zo=e=>{var t;return((t=e==null?void 0:e._$litType$)==null?void 0:t.h)!=null},Wi=e=>e==null?void 0:e._$litDirective$;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let qs=null;const jo={boundAttributeSuffix:Se.M,marker:Se.P,markerMatch:Se.A,getTemplateHtml:Se.L,patchDirectiveResolve:(e,t)=>{if(e.prototype._$AS.name!==t.name){qs??(qs=e.prototype._$AS.name);for(let s=e.prototype;s!==Object.prototype;s=Object.getPrototypeOf(s))if(s.hasOwnProperty(qs))return void(s[qs]=t);throw Error("Internal error: It is possible that both dev mode and production mode Lit was mixed together during SSR. Please comment on the issue: https://github.com/lit/lit/issues/4527")}},getAttributePartCommittedValue:(e,t,s)=>{let r=ge;return e.j=i=>r=i,e._$AI(t,e,s),r},connectedDisconnectable:e=>({...e,_$AU:!0}),resolveDirective:Se.V,AttributePart:Se.H,PropertyPart:Se.B,BooleanAttributePart:Se.N,EventPart:Se.U,isIterable:Se.D};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr=new WeakMap,Yo=e=>{let t=qr.get(e.strings);if(t!==void 0)return t;const s=new Uint32Array(2).fill(5381);for(const i of e.strings)for(let n=0;n<i.length;n++)s[n%2]=33*s[n%2]^i.charCodeAt(n);const r=String.fromCharCode(...new Uint8Array(s.buffer));return t=btoa(r),qr.set(e.strings,t),t},Ko=new Set([65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),$="�";var o;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(o||(o={}));const ie={DASH_DASH:"--",CDATA_START:"[CDATA[",DOCTYPE:"doctype",SCRIPT:"script",PUBLIC:"public",SYSTEM:"system"};function qi(e){return e>=55296&&e<=57343}function Wo(e){return e>=56320&&e<=57343}function qo(e,t){return(e-55296)*1024+9216+t}function Gi(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159}function Vi(e){return e>=64976&&e<=65007||Ko.has(e)}var f;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(f||(f={}));const Go=65536;class Vo{constructor(t){this.handler=t,this.html="",this.pos=-1,this.lastGapPos=-2,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=Go,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.line=1,this.lastErrOffset=-1}get col(){return this.pos-this.lineStartPos+ +(this.lastGapPos!==this.pos)}get offset(){return this.droppedBufferSize+this.pos}getError(t,s){const{line:r,col:i,offset:n}=this,u=i+s,h=n+s;return{code:t,startLine:r,endLine:r,startCol:u,endCol:u,startOffset:h,endOffset:h}}_err(t){this.handler.onParseError&&this.lastErrOffset!==this.offset&&(this.lastErrOffset=this.offset,this.handler.onParseError(this.getError(t,0)))}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(t){if(this.pos!==this.html.length-1){const s=this.html.charCodeAt(this.pos+1);if(Wo(s))return this.pos++,this._addGap(),qo(t,s)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,o.EOF;return this._err(f.surrogateInInputStream),t}willDropParsedChunk(){return this.pos>this.bufferWaterline}dropParsedChunk(){this.willDropParsedChunk()&&(this.html=this.html.substring(this.pos),this.lineStartPos-=this.pos,this.droppedBufferSize+=this.pos,this.pos=0,this.lastGapPos=-2,this.gapStack.length=0)}write(t,s){this.html.length>0?this.html+=t:this.html=t,this.endOfChunkHit=!1,this.lastChunkWritten=s}insertHtmlAtCurrentPos(t){this.html=this.html.substring(0,this.pos+1)+t+this.html.substring(this.pos+1),this.endOfChunkHit=!1}startsWith(t,s){if(this.pos+t.length>this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,!1;if(s)return this.html.startsWith(t,this.pos);for(let r=0;r<t.length;r++)if((this.html.charCodeAt(this.pos+r)|32)!==t.charCodeAt(r))return!1;return!0}peek(t){const s=this.pos+t;if(s>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,o.EOF;const r=this.html.charCodeAt(s);return r===o.CARRIAGE_RETURN?o.LINE_FEED:r}advance(){if(this.pos++,this.isEol&&(this.isEol=!1,this.line++,this.lineStartPos=this.pos),this.pos>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,o.EOF;let t=this.html.charCodeAt(this.pos);return t===o.CARRIAGE_RETURN?(this.isEol=!0,this.skipNextNewLine=!0,o.LINE_FEED):t===o.LINE_FEED&&(this.isEol=!0,this.skipNextNewLine)?(this.line--,this.skipNextNewLine=!1,this._addGap(),this.advance()):(this.skipNextNewLine=!1,qi(t)&&(t=this._processSurrogate(t)),this.handler.onParseError===null||t>31&&t<127||t===o.LINE_FEED||t===o.CARRIAGE_RETURN||t>159&&t<64976||this._checkForProblematicCharacters(t),t)}_checkForProblematicCharacters(t){Gi(t)?this._err(f.controlCharacterInInputStream):Vi(t)&&this._err(f.noncharacterInInputStream)}retreat(t){for(this.pos-=t;this.pos<this.lastGapPos;)this.lastGapPos=this.gapStack.pop(),this.pos--;this.isEol=!1}}var L;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(L||(L={}));function Qi(e,t){for(let s=e.attrs.length-1;s>=0;s--)if(e.attrs[s].name===t)return e.attrs[s].value;return null}const Qo=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),Xo=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function Jo(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=Xo.get(e))!==null&&t!==void 0?t:e}var Q;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Q||(Q={}));const Zo=32;var Fe;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Fe||(Fe={}));function ta(e){return e>=Q.ZERO&&e<=Q.NINE}function eu(e){return e>=Q.UPPER_A&&e<=Q.UPPER_F||e>=Q.LOWER_A&&e<=Q.LOWER_F}function tu(e){return e>=Q.UPPER_A&&e<=Q.UPPER_Z||e>=Q.LOWER_A&&e<=Q.LOWER_Z||ta(e)}function su(e){return e===Q.EQUALS||tu(e)}var V;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(V||(V={}));var Ne;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Ne||(Ne={}));class au{constructor(t,s,r){this.decodeTree=t,this.emitCodePoint=s,this.errors=r,this.state=V.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Ne.Strict}startEntity(t){this.decodeMode=t,this.state=V.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,s){switch(this.state){case V.EntityStart:return t.charCodeAt(s)===Q.NUM?(this.state=V.NumericStart,this.consumed+=1,this.stateNumericStart(t,s+1)):(this.state=V.NamedEntity,this.stateNamedEntity(t,s));case V.NumericStart:return this.stateNumericStart(t,s);case V.NumericDecimal:return this.stateNumericDecimal(t,s);case V.NumericHex:return this.stateNumericHex(t,s);case V.NamedEntity:return this.stateNamedEntity(t,s)}}stateNumericStart(t,s){return s>=t.length?-1:(t.charCodeAt(s)|Zo)===Q.LOWER_X?(this.state=V.NumericHex,this.consumed+=1,this.stateNumericHex(t,s+1)):(this.state=V.NumericDecimal,this.stateNumericDecimal(t,s))}addToNumericResult(t,s,r,i){if(s!==r){const n=r-s;this.result=this.result*Math.pow(i,n)+Number.parseInt(t.substr(s,n),i),this.consumed+=n}}stateNumericHex(t,s){const r=s;for(;s<t.length;){const i=t.charCodeAt(s);if(ta(i)||eu(i))s+=1;else return this.addToNumericResult(t,r,s,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(t,r,s,16),-1}stateNumericDecimal(t,s){const r=s;for(;s<t.length;){const i=t.charCodeAt(s);if(ta(i))s+=1;else return this.addToNumericResult(t,r,s,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(t,r,s,10),-1}emitNumericEntity(t,s){var r;if(this.consumed<=s)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===Q.SEMI)this.consumed+=1;else if(this.decodeMode===Ne.Strict)return 0;return this.emitCodePoint(Jo(this.result),this.consumed),this.errors&&(t!==Q.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,s){const{decodeTree:r}=this;let i=r[this.treeIndex],n=(i&Fe.VALUE_LENGTH)>>14;for(;s<t.length;s++,this.excess++){const u=t.charCodeAt(s);if(this.treeIndex=ru(r,i,this.treeIndex+Math.max(1,n),u),this.treeIndex<0)return this.result===0||this.decodeMode===Ne.Attribute&&(n===0||su(u))?0:this.emitNotTerminatedNamedEntity();if(i=r[this.treeIndex],n=(i&Fe.VALUE_LENGTH)>>14,n!==0){if(u===Q.SEMI)return this.emitNamedEntityData(this.treeIndex,n,this.consumed+this.excess);this.decodeMode!==Ne.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:s,decodeTree:r}=this,i=(r[s]&Fe.VALUE_LENGTH)>>14;return this.emitNamedEntityData(s,i,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,s,r){const{decodeTree:i}=this;return this.emitCodePoint(s===1?i[t]&~Fe.VALUE_LENGTH:i[t+1],r),s===3&&this.emitCodePoint(i[t+2],r),r}end(){var t;switch(this.state){case V.NamedEntity:return this.result!==0&&(this.decodeMode!==Ne.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case V.NumericDecimal:return this.emitNumericEntity(0,2);case V.NumericHex:return this.emitNumericEntity(0,3);case V.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case V.EntityStart:return 0}}}function ru(e,t,s,r){const i=(t&Fe.BRANCH_LENGTH)>>7,n=t&Fe.JUMP_TABLE;if(i===0)return n!==0&&r===n?s:-1;if(n){const l=r-n;return l<0||l>=i?-1:e[s+l]-1}let u=s,h=u+i-1;for(;u<=h;){const l=u+h>>>1,m=e[l];if(m<r)u=l+1;else if(m>r)h=l-1;else return e[l+i]}return-1}var T;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(T||(T={}));var tt;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(tt||(tt={}));var he;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(he||(he={}));var p;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(p||(p={}));var a;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(a||(a={}));const iu=new Map([[p.A,a.A],[p.ADDRESS,a.ADDRESS],[p.ANNOTATION_XML,a.ANNOTATION_XML],[p.APPLET,a.APPLET],[p.AREA,a.AREA],[p.ARTICLE,a.ARTICLE],[p.ASIDE,a.ASIDE],[p.B,a.B],[p.BASE,a.BASE],[p.BASEFONT,a.BASEFONT],[p.BGSOUND,a.BGSOUND],[p.BIG,a.BIG],[p.BLOCKQUOTE,a.BLOCKQUOTE],[p.BODY,a.BODY],[p.BR,a.BR],[p.BUTTON,a.BUTTON],[p.CAPTION,a.CAPTION],[p.CENTER,a.CENTER],[p.CODE,a.CODE],[p.COL,a.COL],[p.COLGROUP,a.COLGROUP],[p.DD,a.DD],[p.DESC,a.DESC],[p.DETAILS,a.DETAILS],[p.DIALOG,a.DIALOG],[p.DIR,a.DIR],[p.DIV,a.DIV],[p.DL,a.DL],[p.DT,a.DT],[p.EM,a.EM],[p.EMBED,a.EMBED],[p.FIELDSET,a.FIELDSET],[p.FIGCAPTION,a.FIGCAPTION],[p.FIGURE,a.FIGURE],[p.FONT,a.FONT],[p.FOOTER,a.FOOTER],[p.FOREIGN_OBJECT,a.FOREIGN_OBJECT],[p.FORM,a.FORM],[p.FRAME,a.FRAME],[p.FRAMESET,a.FRAMESET],[p.H1,a.H1],[p.H2,a.H2],[p.H3,a.H3],[p.H4,a.H4],[p.H5,a.H5],[p.H6,a.H6],[p.HEAD,a.HEAD],[p.HEADER,a.HEADER],[p.HGROUP,a.HGROUP],[p.HR,a.HR],[p.HTML,a.HTML],[p.I,a.I],[p.IMG,a.IMG],[p.IMAGE,a.IMAGE],[p.INPUT,a.INPUT],[p.IFRAME,a.IFRAME],[p.KEYGEN,a.KEYGEN],[p.LABEL,a.LABEL],[p.LI,a.LI],[p.LINK,a.LINK],[p.LISTING,a.LISTING],[p.MAIN,a.MAIN],[p.MALIGNMARK,a.MALIGNMARK],[p.MARQUEE,a.MARQUEE],[p.MATH,a.MATH],[p.MENU,a.MENU],[p.META,a.META],[p.MGLYPH,a.MGLYPH],[p.MI,a.MI],[p.MO,a.MO],[p.MN,a.MN],[p.MS,a.MS],[p.MTEXT,a.MTEXT],[p.NAV,a.NAV],[p.NOBR,a.NOBR],[p.NOFRAMES,a.NOFRAMES],[p.NOEMBED,a.NOEMBED],[p.NOSCRIPT,a.NOSCRIPT],[p.OBJECT,a.OBJECT],[p.OL,a.OL],[p.OPTGROUP,a.OPTGROUP],[p.OPTION,a.OPTION],[p.P,a.P],[p.PARAM,a.PARAM],[p.PLAINTEXT,a.PLAINTEXT],[p.PRE,a.PRE],[p.RB,a.RB],[p.RP,a.RP],[p.RT,a.RT],[p.RTC,a.RTC],[p.RUBY,a.RUBY],[p.S,a.S],[p.SCRIPT,a.SCRIPT],[p.SEARCH,a.SEARCH],[p.SECTION,a.SECTION],[p.SELECT,a.SELECT],[p.SOURCE,a.SOURCE],[p.SMALL,a.SMALL],[p.SPAN,a.SPAN],[p.STRIKE,a.STRIKE],[p.STRONG,a.STRONG],[p.STYLE,a.STYLE],[p.SUB,a.SUB],[p.SUMMARY,a.SUMMARY],[p.SUP,a.SUP],[p.TABLE,a.TABLE],[p.TBODY,a.TBODY],[p.TEMPLATE,a.TEMPLATE],[p.TEXTAREA,a.TEXTAREA],[p.TFOOT,a.TFOOT],[p.TD,a.TD],[p.TH,a.TH],[p.THEAD,a.THEAD],[p.TITLE,a.TITLE],[p.TR,a.TR],[p.TRACK,a.TRACK],[p.TT,a.TT],[p.U,a.U],[p.UL,a.UL],[p.SVG,a.SVG],[p.VAR,a.VAR],[p.WBR,a.WBR],[p.XMP,a.XMP]]);function ws(e){var t;return(t=iu.get(e))!==null&&t!==void 0?t:a.UNKNOWN}const S=a,nu={[T.HTML]:new Set([S.ADDRESS,S.APPLET,S.AREA,S.ARTICLE,S.ASIDE,S.BASE,S.BASEFONT,S.BGSOUND,S.BLOCKQUOTE,S.BODY,S.BR,S.BUTTON,S.CAPTION,S.CENTER,S.COL,S.COLGROUP,S.DD,S.DETAILS,S.DIR,S.DIV,S.DL,S.DT,S.EMBED,S.FIELDSET,S.FIGCAPTION,S.FIGURE,S.FOOTER,S.FORM,S.FRAME,S.FRAMESET,S.H1,S.H2,S.H3,S.H4,S.H5,S.H6,S.HEAD,S.HEADER,S.HGROUP,S.HR,S.HTML,S.IFRAME,S.IMG,S.INPUT,S.LI,S.LINK,S.LISTING,S.MAIN,S.MARQUEE,S.MENU,S.META,S.NAV,S.NOEMBED,S.NOFRAMES,S.NOSCRIPT,S.OBJECT,S.OL,S.P,S.PARAM,S.PLAINTEXT,S.PRE,S.SCRIPT,S.SECTION,S.SELECT,S.SOURCE,S.STYLE,S.SUMMARY,S.TABLE,S.TBODY,S.TD,S.TEMPLATE,S.TEXTAREA,S.TFOOT,S.TH,S.THEAD,S.TITLE,S.TR,S.TRACK,S.UL,S.WBR,S.XMP]),[T.MATHML]:new Set([S.MI,S.MO,S.MN,S.MS,S.MTEXT,S.ANNOTATION_XML]),[T.SVG]:new Set([S.TITLE,S.FOREIGN_OBJECT,S.DESC]),[T.XLINK]:new Set,[T.XML]:new Set,[T.XMLNS]:new Set},sa=new Set([S.H1,S.H2,S.H3,S.H4,S.H5,S.H6]);p.STYLE,p.SCRIPT,p.XMP,p.IFRAME,p.NOEMBED,p.NOFRAMES,p.PLAINTEXT;var c;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(c||(c={}));const ne={DATA:c.DATA,RCDATA:c.RCDATA,RAWTEXT:c.RAWTEXT,SCRIPT_DATA:c.SCRIPT_DATA,PLAINTEXT:c.PLAINTEXT,CDATA_SECTION:c.CDATA_SECTION};function ou(e){return e>=o.DIGIT_0&&e<=o.DIGIT_9}function Dt(e){return e>=o.LATIN_CAPITAL_A&&e<=o.LATIN_CAPITAL_Z}function uu(e){return e>=o.LATIN_SMALL_A&&e<=o.LATIN_SMALL_Z}function Le(e){return uu(e)||Dt(e)}function Gr(e){return Le(e)||ou(e)}function ds(e){return e+32}function Xi(e){return e===o.SPACE||e===o.LINE_FEED||e===o.TABULATION||e===o.FORM_FEED}function Vr(e){return Xi(e)||e===o.SOLIDUS||e===o.GREATER_THAN_SIGN}function cu(e){return e===o.NULL?f.nullCharacterReference:e>1114111?f.characterReferenceOutsideUnicodeRange:qi(e)?f.surrogateCharacterReference:Vi(e)?f.noncharacterCharacterReference:Gi(e)||e===o.CARRIAGE_RETURN?f.controlCharacterReference:null}class du{constructor(t,s){this.options=t,this.handler=s,this.paused=!1,this.inLoop=!1,this.inForeignNode=!1,this.lastStartTagName="",this.active=!1,this.state=c.DATA,this.returnState=c.DATA,this.entityStartPos=0,this.consumedAfterSnapshot=-1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr={name:"",value:""},this.preprocessor=new Vo(s),this.currentLocation=this.getCurrentLocation(-1),this.entityDecoder=new au(Qo,(r,i)=>{this.preprocessor.pos=this.entityStartPos+i-1,this._flushCodePointConsumedAsCharacterReference(r)},s.onParseError?{missingSemicolonAfterCharacterReference:()=>{this._err(f.missingSemicolonAfterCharacterReference,1)},absenceOfDigitsInNumericCharacterReference:r=>{this._err(f.absenceOfDigitsInNumericCharacterReference,this.entityStartPos-this.preprocessor.pos+r)},validateNumericCharacterReference:r=>{const i=cu(r);i&&this._err(i,1)}}:void 0)}_err(t,s=0){var r,i;(i=(r=this.handler).onParseError)===null||i===void 0||i.call(r,this.preprocessor.getError(t,s))}getCurrentLocation(t){return this.options.sourceCodeLocationInfo?{startLine:this.preprocessor.line,startCol:this.preprocessor.col-t,startOffset:this.preprocessor.offset-t,endLine:-1,endCol:-1,endOffset:-1}:null}_runParsingLoop(){if(!this.inLoop){for(this.inLoop=!0;this.active&&!this.paused;){this.consumedAfterSnapshot=0;const t=this._consume();this._ensureHibernation()||this._callState(t)}this.inLoop=!1}}pause(){this.paused=!0}resume(t){if(!this.paused)throw new Error("Parser was already resumed");this.paused=!1,!this.inLoop&&(this._runParsingLoop(),this.paused||t==null||t())}write(t,s,r){this.active=!0,this.preprocessor.write(t,s),this._runParsingLoop(),this.paused||r==null||r()}insertHtmlAtCurrentPos(t){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(t),this._runParsingLoop()}_ensureHibernation(){return this.preprocessor.endOfChunkHit?(this.preprocessor.retreat(this.consumedAfterSnapshot),this.consumedAfterSnapshot=0,this.active=!1,!0):!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_advanceBy(t){this.consumedAfterSnapshot+=t;for(let s=0;s<t;s++)this.preprocessor.advance()}_consumeSequenceIfMatch(t,s){return this.preprocessor.startsWith(t,s)?(this._advanceBy(t.length-1),!0):!1}_createStartTagToken(){this.currentToken={type:L.START_TAG,tagName:"",tagID:a.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(1)}}_createEndTagToken(){this.currentToken={type:L.END_TAG,tagName:"",tagID:a.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(2)}}_createCommentToken(t){this.currentToken={type:L.COMMENT,data:"",location:this.getCurrentLocation(t)}}_createDoctypeToken(t){this.currentToken={type:L.DOCTYPE,name:t,forceQuirks:!1,publicId:null,systemId:null,location:this.currentLocation}}_createCharacterToken(t,s){this.currentCharacterToken={type:t,chars:s,location:this.currentLocation}}_createAttr(t){this.currentAttr={name:t,value:""},this.currentLocation=this.getCurrentLocation(0)}_leaveAttrName(){var t,s;const r=this.currentToken;if(Qi(r,this.currentAttr.name)===null){if(r.attrs.push(this.currentAttr),r.location&&this.currentLocation){const i=(t=(s=r.location).attrs)!==null&&t!==void 0?t:s.attrs=Object.create(null);i[this.currentAttr.name]=this.currentLocation,this._leaveAttrValue()}}else this._err(f.duplicateAttribute)}_leaveAttrValue(){this.currentLocation&&(this.currentLocation.endLine=this.preprocessor.line,this.currentLocation.endCol=this.preprocessor.col,this.currentLocation.endOffset=this.preprocessor.offset)}prepareToken(t){this._emitCurrentCharacterToken(t.location),this.currentToken=null,t.location&&(t.location.endLine=this.preprocessor.line,t.location.endCol=this.preprocessor.col+1,t.location.endOffset=this.preprocessor.offset+1),this.currentLocation=this.getCurrentLocation(-1)}emitCurrentTagToken(){const t=this.currentToken;this.prepareToken(t),t.tagID=ws(t.tagName),t.type===L.START_TAG?(this.lastStartTagName=t.tagName,this.handler.onStartTag(t)):(t.attrs.length>0&&this._err(f.endTagWithAttributes),t.selfClosing&&this._err(f.endTagWithTrailingSolidus),this.handler.onEndTag(t)),this.preprocessor.dropParsedChunk()}emitCurrentComment(t){this.prepareToken(t),this.handler.onComment(t),this.preprocessor.dropParsedChunk()}emitCurrentDoctype(t){this.prepareToken(t),this.handler.onDoctype(t),this.preprocessor.dropParsedChunk()}_emitCurrentCharacterToken(t){if(this.currentCharacterToken){switch(t&&this.currentCharacterToken.location&&(this.currentCharacterToken.location.endLine=t.startLine,this.currentCharacterToken.location.endCol=t.startCol,this.currentCharacterToken.location.endOffset=t.startOffset),this.currentCharacterToken.type){case L.CHARACTER:{this.handler.onCharacter(this.currentCharacterToken);break}case L.NULL_CHARACTER:{this.handler.onNullCharacter(this.currentCharacterToken);break}case L.WHITESPACE_CHARACTER:{this.handler.onWhitespaceCharacter(this.currentCharacterToken);break}}this.currentCharacterToken=null}}_emitEOFToken(){const t=this.getCurrentLocation(0);t&&(t.endLine=t.startLine,t.endCol=t.startCol,t.endOffset=t.startOffset),this._emitCurrentCharacterToken(t),this.handler.onEof({type:L.EOF,location:t}),this.active=!1}_appendCharToCurrentCharacterToken(t,s){if(this.currentCharacterToken)if(this.currentCharacterToken.type===t){this.currentCharacterToken.chars+=s;return}else this.currentLocation=this.getCurrentLocation(0),this._emitCurrentCharacterToken(this.currentLocation),this.preprocessor.dropParsedChunk();this._createCharacterToken(t,s)}_emitCodePoint(t){const s=Xi(t)?L.WHITESPACE_CHARACTER:t===o.NULL?L.NULL_CHARACTER:L.CHARACTER;this._appendCharToCurrentCharacterToken(s,String.fromCodePoint(t))}_emitChars(t){this._appendCharToCurrentCharacterToken(L.CHARACTER,t)}_startCharacterReference(){this.returnState=this.state,this.state=c.CHARACTER_REFERENCE,this.entityStartPos=this.preprocessor.pos,this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute()?Ne.Attribute:Ne.Legacy)}_isCharacterReferenceInAttribute(){return this.returnState===c.ATTRIBUTE_VALUE_DOUBLE_QUOTED||this.returnState===c.ATTRIBUTE_VALUE_SINGLE_QUOTED||this.returnState===c.ATTRIBUTE_VALUE_UNQUOTED}_flushCodePointConsumedAsCharacterReference(t){this._isCharacterReferenceInAttribute()?this.currentAttr.value+=String.fromCodePoint(t):this._emitCodePoint(t)}_callState(t){switch(this.state){case c.DATA:{this._stateData(t);break}case c.RCDATA:{this._stateRcdata(t);break}case c.RAWTEXT:{this._stateRawtext(t);break}case c.SCRIPT_DATA:{this._stateScriptData(t);break}case c.PLAINTEXT:{this._statePlaintext(t);break}case c.TAG_OPEN:{this._stateTagOpen(t);break}case c.END_TAG_OPEN:{this._stateEndTagOpen(t);break}case c.TAG_NAME:{this._stateTagName(t);break}case c.RCDATA_LESS_THAN_SIGN:{this._stateRcdataLessThanSign(t);break}case c.RCDATA_END_TAG_OPEN:{this._stateRcdataEndTagOpen(t);break}case c.RCDATA_END_TAG_NAME:{this._stateRcdataEndTagName(t);break}case c.RAWTEXT_LESS_THAN_SIGN:{this._stateRawtextLessThanSign(t);break}case c.RAWTEXT_END_TAG_OPEN:{this._stateRawtextEndTagOpen(t);break}case c.RAWTEXT_END_TAG_NAME:{this._stateRawtextEndTagName(t);break}case c.SCRIPT_DATA_LESS_THAN_SIGN:{this._stateScriptDataLessThanSign(t);break}case c.SCRIPT_DATA_END_TAG_OPEN:{this._stateScriptDataEndTagOpen(t);break}case c.SCRIPT_DATA_END_TAG_NAME:{this._stateScriptDataEndTagName(t);break}case c.SCRIPT_DATA_ESCAPE_START:{this._stateScriptDataEscapeStart(t);break}case c.SCRIPT_DATA_ESCAPE_START_DASH:{this._stateScriptDataEscapeStartDash(t);break}case c.SCRIPT_DATA_ESCAPED:{this._stateScriptDataEscaped(t);break}case c.SCRIPT_DATA_ESCAPED_DASH:{this._stateScriptDataEscapedDash(t);break}case c.SCRIPT_DATA_ESCAPED_DASH_DASH:{this._stateScriptDataEscapedDashDash(t);break}case c.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataEscapedLessThanSign(t);break}case c.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:{this._stateScriptDataEscapedEndTagOpen(t);break}case c.SCRIPT_DATA_ESCAPED_END_TAG_NAME:{this._stateScriptDataEscapedEndTagName(t);break}case c.SCRIPT_DATA_DOUBLE_ESCAPE_START:{this._stateScriptDataDoubleEscapeStart(t);break}case c.SCRIPT_DATA_DOUBLE_ESCAPED:{this._stateScriptDataDoubleEscaped(t);break}case c.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:{this._stateScriptDataDoubleEscapedDash(t);break}case c.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:{this._stateScriptDataDoubleEscapedDashDash(t);break}case c.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataDoubleEscapedLessThanSign(t);break}case c.SCRIPT_DATA_DOUBLE_ESCAPE_END:{this._stateScriptDataDoubleEscapeEnd(t);break}case c.BEFORE_ATTRIBUTE_NAME:{this._stateBeforeAttributeName(t);break}case c.ATTRIBUTE_NAME:{this._stateAttributeName(t);break}case c.AFTER_ATTRIBUTE_NAME:{this._stateAfterAttributeName(t);break}case c.BEFORE_ATTRIBUTE_VALUE:{this._stateBeforeAttributeValue(t);break}case c.ATTRIBUTE_VALUE_DOUBLE_QUOTED:{this._stateAttributeValueDoubleQuoted(t);break}case c.ATTRIBUTE_VALUE_SINGLE_QUOTED:{this._stateAttributeValueSingleQuoted(t);break}case c.ATTRIBUTE_VALUE_UNQUOTED:{this._stateAttributeValueUnquoted(t);break}case c.AFTER_ATTRIBUTE_VALUE_QUOTED:{this._stateAfterAttributeValueQuoted(t);break}case c.SELF_CLOSING_START_TAG:{this._stateSelfClosingStartTag(t);break}case c.BOGUS_COMMENT:{this._stateBogusComment(t);break}case c.MARKUP_DECLARATION_OPEN:{this._stateMarkupDeclarationOpen(t);break}case c.COMMENT_START:{this._stateCommentStart(t);break}case c.COMMENT_START_DASH:{this._stateCommentStartDash(t);break}case c.COMMENT:{this._stateComment(t);break}case c.COMMENT_LESS_THAN_SIGN:{this._stateCommentLessThanSign(t);break}case c.COMMENT_LESS_THAN_SIGN_BANG:{this._stateCommentLessThanSignBang(t);break}case c.COMMENT_LESS_THAN_SIGN_BANG_DASH:{this._stateCommentLessThanSignBangDash(t);break}case c.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:{this._stateCommentLessThanSignBangDashDash(t);break}case c.COMMENT_END_DASH:{this._stateCommentEndDash(t);break}case c.COMMENT_END:{this._stateCommentEnd(t);break}case c.COMMENT_END_BANG:{this._stateCommentEndBang(t);break}case c.DOCTYPE:{this._stateDoctype(t);break}case c.BEFORE_DOCTYPE_NAME:{this._stateBeforeDoctypeName(t);break}case c.DOCTYPE_NAME:{this._stateDoctypeName(t);break}case c.AFTER_DOCTYPE_NAME:{this._stateAfterDoctypeName(t);break}case c.AFTER_DOCTYPE_PUBLIC_KEYWORD:{this._stateAfterDoctypePublicKeyword(t);break}case c.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateBeforeDoctypePublicIdentifier(t);break}case c.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypePublicIdentifierDoubleQuoted(t);break}case c.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypePublicIdentifierSingleQuoted(t);break}case c.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateAfterDoctypePublicIdentifier(t);break}case c.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:{this._stateBetweenDoctypePublicAndSystemIdentifiers(t);break}case c.AFTER_DOCTYPE_SYSTEM_KEYWORD:{this._stateAfterDoctypeSystemKeyword(t);break}case c.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateBeforeDoctypeSystemIdentifier(t);break}case c.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypeSystemIdentifierDoubleQuoted(t);break}case c.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypeSystemIdentifierSingleQuoted(t);break}case c.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateAfterDoctypeSystemIdentifier(t);break}case c.BOGUS_DOCTYPE:{this._stateBogusDoctype(t);break}case c.CDATA_SECTION:{this._stateCdataSection(t);break}case c.CDATA_SECTION_BRACKET:{this._stateCdataSectionBracket(t);break}case c.CDATA_SECTION_END:{this._stateCdataSectionEnd(t);break}case c.CHARACTER_REFERENCE:{this._stateCharacterReference();break}case c.AMBIGUOUS_AMPERSAND:{this._stateAmbiguousAmpersand(t);break}default:throw new Error("Unknown state")}}_stateData(t){switch(t){case o.LESS_THAN_SIGN:{this.state=c.TAG_OPEN;break}case o.AMPERSAND:{this._startCharacterReference();break}case o.NULL:{this._err(f.unexpectedNullCharacter),this._emitCodePoint(t);break}case o.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRcdata(t){switch(t){case o.AMPERSAND:{this._startCharacterReference();break}case o.LESS_THAN_SIGN:{this.state=c.RCDATA_LESS_THAN_SIGN;break}case o.NULL:{this._err(f.unexpectedNullCharacter),this._emitChars($);break}case o.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRawtext(t){switch(t){case o.LESS_THAN_SIGN:{this.state=c.RAWTEXT_LESS_THAN_SIGN;break}case o.NULL:{this._err(f.unexpectedNullCharacter),this._emitChars($);break}case o.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptData(t){switch(t){case o.LESS_THAN_SIGN:{this.state=c.SCRIPT_DATA_LESS_THAN_SIGN;break}case o.NULL:{this._err(f.unexpectedNullCharacter),this._emitChars($);break}case o.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_statePlaintext(t){switch(t){case o.NULL:{this._err(f.unexpectedNullCharacter),this._emitChars($);break}case o.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateTagOpen(t){if(Le(t))this._createStartTagToken(),this.state=c.TAG_NAME,this._stateTagName(t);else switch(t){case o.EXCLAMATION_MARK:{this.state=c.MARKUP_DECLARATION_OPEN;break}case o.SOLIDUS:{this.state=c.END_TAG_OPEN;break}case o.QUESTION_MARK:{this._err(f.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(1),this.state=c.BOGUS_COMMENT,this._stateBogusComment(t);break}case o.EOF:{this._err(f.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken();break}default:this._err(f.invalidFirstCharacterOfTagName),this._emitChars("<"),this.state=c.DATA,this._stateData(t)}}_stateEndTagOpen(t){if(Le(t))this._createEndTagToken(),this.state=c.TAG_NAME,this._stateTagName(t);else switch(t){case o.GREATER_THAN_SIGN:{this._err(f.missingEndTagName),this.state=c.DATA;break}case o.EOF:{this._err(f.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken();break}default:this._err(f.invalidFirstCharacterOfTagName),this._createCommentToken(2),this.state=c.BOGUS_COMMENT,this._stateBogusComment(t)}}_stateTagName(t){const s=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=c.BEFORE_ATTRIBUTE_NAME;break}case o.SOLIDUS:{this.state=c.SELF_CLOSING_START_TAG;break}case o.GREATER_THAN_SIGN:{this.state=c.DATA,this.emitCurrentTagToken();break}case o.NULL:{this._err(f.unexpectedNullCharacter),s.tagName+=$;break}case o.EOF:{this._err(f.eofInTag),this._emitEOFToken();break}default:s.tagName+=String.fromCodePoint(Dt(t)?ds(t):t)}}_stateRcdataLessThanSign(t){t===o.SOLIDUS?this.state=c.RCDATA_END_TAG_OPEN:(this._emitChars("<"),this.state=c.RCDATA,this._stateRcdata(t))}_stateRcdataEndTagOpen(t){Le(t)?(this.state=c.RCDATA_END_TAG_NAME,this._stateRcdataEndTagName(t)):(this._emitChars("</"),this.state=c.RCDATA,this._stateRcdata(t))}handleSpecialEndTag(t){if(!this.preprocessor.startsWith(this.lastStartTagName,!1))return!this._ensureHibernation();this._createEndTagToken();const s=this.currentToken;switch(s.tagName=this.lastStartTagName,this.preprocessor.peek(this.lastStartTagName.length)){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:return this._advanceBy(this.lastStartTagName.length),this.state=c.BEFORE_ATTRIBUTE_NAME,!1;case o.SOLIDUS:return this._advanceBy(this.lastStartTagName.length),this.state=c.SELF_CLOSING_START_TAG,!1;case o.GREATER_THAN_SIGN:return this._advanceBy(this.lastStartTagName.length),this.emitCurrentTagToken(),this.state=c.DATA,!1;default:return!this._ensureHibernation()}}_stateRcdataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=c.RCDATA,this._stateRcdata(t))}_stateRawtextLessThanSign(t){t===o.SOLIDUS?this.state=c.RAWTEXT_END_TAG_OPEN:(this._emitChars("<"),this.state=c.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagOpen(t){Le(t)?(this.state=c.RAWTEXT_END_TAG_NAME,this._stateRawtextEndTagName(t)):(this._emitChars("</"),this.state=c.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=c.RAWTEXT,this._stateRawtext(t))}_stateScriptDataLessThanSign(t){switch(t){case o.SOLIDUS:{this.state=c.SCRIPT_DATA_END_TAG_OPEN;break}case o.EXCLAMATION_MARK:{this.state=c.SCRIPT_DATA_ESCAPE_START,this._emitChars("<!");break}default:this._emitChars("<"),this.state=c.SCRIPT_DATA,this._stateScriptData(t)}}_stateScriptDataEndTagOpen(t){Le(t)?(this.state=c.SCRIPT_DATA_END_TAG_NAME,this._stateScriptDataEndTagName(t)):(this._emitChars("</"),this.state=c.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=c.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStart(t){t===o.HYPHEN_MINUS?(this.state=c.SCRIPT_DATA_ESCAPE_START_DASH,this._emitChars("-")):(this.state=c.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStartDash(t){t===o.HYPHEN_MINUS?(this.state=c.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-")):(this.state=c.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscaped(t){switch(t){case o.HYPHEN_MINUS:{this.state=c.SCRIPT_DATA_ESCAPED_DASH,this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=c.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case o.NULL:{this._err(f.unexpectedNullCharacter),this._emitChars($);break}case o.EOF:{this._err(f.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataEscapedDash(t){switch(t){case o.HYPHEN_MINUS:{this.state=c.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=c.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case o.NULL:{this._err(f.unexpectedNullCharacter),this.state=c.SCRIPT_DATA_ESCAPED,this._emitChars($);break}case o.EOF:{this._err(f.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=c.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedDashDash(t){switch(t){case o.HYPHEN_MINUS:{this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=c.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case o.GREATER_THAN_SIGN:{this.state=c.SCRIPT_DATA,this._emitChars(">");break}case o.NULL:{this._err(f.unexpectedNullCharacter),this.state=c.SCRIPT_DATA_ESCAPED,this._emitChars($);break}case o.EOF:{this._err(f.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=c.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedLessThanSign(t){t===o.SOLIDUS?this.state=c.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:Le(t)?(this._emitChars("<"),this.state=c.SCRIPT_DATA_DOUBLE_ESCAPE_START,this._stateScriptDataDoubleEscapeStart(t)):(this._emitChars("<"),this.state=c.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagOpen(t){Le(t)?(this.state=c.SCRIPT_DATA_ESCAPED_END_TAG_NAME,this._stateScriptDataEscapedEndTagName(t)):(this._emitChars("</"),this.state=c.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=c.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscapeStart(t){if(this.preprocessor.startsWith(ie.SCRIPT,!1)&&Vr(this.preprocessor.peek(ie.SCRIPT.length))){this._emitCodePoint(t);for(let s=0;s<ie.SCRIPT.length;s++)this._emitCodePoint(this._consume());this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED}else this._ensureHibernation()||(this.state=c.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscaped(t){switch(t){case o.HYPHEN_MINUS:{this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case o.NULL:{this._err(f.unexpectedNullCharacter),this._emitChars($);break}case o.EOF:{this._err(f.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDash(t){switch(t){case o.HYPHEN_MINUS:{this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case o.NULL:{this._err(f.unexpectedNullCharacter),this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars($);break}case o.EOF:{this._err(f.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDashDash(t){switch(t){case o.HYPHEN_MINUS:{this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case o.GREATER_THAN_SIGN:{this.state=c.SCRIPT_DATA,this._emitChars(">");break}case o.NULL:{this._err(f.unexpectedNullCharacter),this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars($);break}case o.EOF:{this._err(f.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedLessThanSign(t){t===o.SOLIDUS?(this.state=c.SCRIPT_DATA_DOUBLE_ESCAPE_END,this._emitChars("/")):(this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateScriptDataDoubleEscapeEnd(t){if(this.preprocessor.startsWith(ie.SCRIPT,!1)&&Vr(this.preprocessor.peek(ie.SCRIPT.length))){this._emitCodePoint(t);for(let s=0;s<ie.SCRIPT.length;s++)this._emitCodePoint(this._consume());this.state=c.SCRIPT_DATA_ESCAPED}else this._ensureHibernation()||(this.state=c.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateBeforeAttributeName(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.SOLIDUS:case o.GREATER_THAN_SIGN:case o.EOF:{this.state=c.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case o.EQUALS_SIGN:{this._err(f.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=c.ATTRIBUTE_NAME;break}default:this._createAttr(""),this.state=c.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateAttributeName(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:case o.SOLIDUS:case o.GREATER_THAN_SIGN:case o.EOF:{this._leaveAttrName(),this.state=c.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case o.EQUALS_SIGN:{this._leaveAttrName(),this.state=c.BEFORE_ATTRIBUTE_VALUE;break}case o.QUOTATION_MARK:case o.APOSTROPHE:case o.LESS_THAN_SIGN:{this._err(f.unexpectedCharacterInAttributeName),this.currentAttr.name+=String.fromCodePoint(t);break}case o.NULL:{this._err(f.unexpectedNullCharacter),this.currentAttr.name+=$;break}default:this.currentAttr.name+=String.fromCodePoint(Dt(t)?ds(t):t)}}_stateAfterAttributeName(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.SOLIDUS:{this.state=c.SELF_CLOSING_START_TAG;break}case o.EQUALS_SIGN:{this.state=c.BEFORE_ATTRIBUTE_VALUE;break}case o.GREATER_THAN_SIGN:{this.state=c.DATA,this.emitCurrentTagToken();break}case o.EOF:{this._err(f.eofInTag),this._emitEOFToken();break}default:this._createAttr(""),this.state=c.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateBeforeAttributeValue(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.QUOTATION_MARK:{this.state=c.ATTRIBUTE_VALUE_DOUBLE_QUOTED;break}case o.APOSTROPHE:{this.state=c.ATTRIBUTE_VALUE_SINGLE_QUOTED;break}case o.GREATER_THAN_SIGN:{this._err(f.missingAttributeValue),this.state=c.DATA,this.emitCurrentTagToken();break}default:this.state=c.ATTRIBUTE_VALUE_UNQUOTED,this._stateAttributeValueUnquoted(t)}}_stateAttributeValueDoubleQuoted(t){switch(t){case o.QUOTATION_MARK:{this.state=c.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case o.AMPERSAND:{this._startCharacterReference();break}case o.NULL:{this._err(f.unexpectedNullCharacter),this.currentAttr.value+=$;break}case o.EOF:{this._err(f.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueSingleQuoted(t){switch(t){case o.APOSTROPHE:{this.state=c.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case o.AMPERSAND:{this._startCharacterReference();break}case o.NULL:{this._err(f.unexpectedNullCharacter),this.currentAttr.value+=$;break}case o.EOF:{this._err(f.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueUnquoted(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this._leaveAttrValue(),this.state=c.BEFORE_ATTRIBUTE_NAME;break}case o.AMPERSAND:{this._startCharacterReference();break}case o.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=c.DATA,this.emitCurrentTagToken();break}case o.NULL:{this._err(f.unexpectedNullCharacter),this.currentAttr.value+=$;break}case o.QUOTATION_MARK:case o.APOSTROPHE:case o.LESS_THAN_SIGN:case o.EQUALS_SIGN:case o.GRAVE_ACCENT:{this._err(f.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=String.fromCodePoint(t);break}case o.EOF:{this._err(f.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAfterAttributeValueQuoted(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this._leaveAttrValue(),this.state=c.BEFORE_ATTRIBUTE_NAME;break}case o.SOLIDUS:{this._leaveAttrValue(),this.state=c.SELF_CLOSING_START_TAG;break}case o.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=c.DATA,this.emitCurrentTagToken();break}case o.EOF:{this._err(f.eofInTag),this._emitEOFToken();break}default:this._err(f.missingWhitespaceBetweenAttributes),this.state=c.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateSelfClosingStartTag(t){switch(t){case o.GREATER_THAN_SIGN:{const s=this.currentToken;s.selfClosing=!0,this.state=c.DATA,this.emitCurrentTagToken();break}case o.EOF:{this._err(f.eofInTag),this._emitEOFToken();break}default:this._err(f.unexpectedSolidusInTag),this.state=c.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateBogusComment(t){const s=this.currentToken;switch(t){case o.GREATER_THAN_SIGN:{this.state=c.DATA,this.emitCurrentComment(s);break}case o.EOF:{this.emitCurrentComment(s),this._emitEOFToken();break}case o.NULL:{this._err(f.unexpectedNullCharacter),s.data+=$;break}default:s.data+=String.fromCodePoint(t)}}_stateMarkupDeclarationOpen(t){this._consumeSequenceIfMatch(ie.DASH_DASH,!0)?(this._createCommentToken(ie.DASH_DASH.length+1),this.state=c.COMMENT_START):this._consumeSequenceIfMatch(ie.DOCTYPE,!1)?(this.currentLocation=this.getCurrentLocation(ie.DOCTYPE.length+1),this.state=c.DOCTYPE):this._consumeSequenceIfMatch(ie.CDATA_START,!0)?this.inForeignNode?this.state=c.CDATA_SECTION:(this._err(f.cdataInHtmlContent),this._createCommentToken(ie.CDATA_START.length+1),this.currentToken.data="[CDATA[",this.state=c.BOGUS_COMMENT):this._ensureHibernation()||(this._err(f.incorrectlyOpenedComment),this._createCommentToken(2),this.state=c.BOGUS_COMMENT,this._stateBogusComment(t))}_stateCommentStart(t){switch(t){case o.HYPHEN_MINUS:{this.state=c.COMMENT_START_DASH;break}case o.GREATER_THAN_SIGN:{this._err(f.abruptClosingOfEmptyComment),this.state=c.DATA;const s=this.currentToken;this.emitCurrentComment(s);break}default:this.state=c.COMMENT,this._stateComment(t)}}_stateCommentStartDash(t){const s=this.currentToken;switch(t){case o.HYPHEN_MINUS:{this.state=c.COMMENT_END;break}case o.GREATER_THAN_SIGN:{this._err(f.abruptClosingOfEmptyComment),this.state=c.DATA,this.emitCurrentComment(s);break}case o.EOF:{this._err(f.eofInComment),this.emitCurrentComment(s),this._emitEOFToken();break}default:s.data+="-",this.state=c.COMMENT,this._stateComment(t)}}_stateComment(t){const s=this.currentToken;switch(t){case o.HYPHEN_MINUS:{this.state=c.COMMENT_END_DASH;break}case o.LESS_THAN_SIGN:{s.data+="<",this.state=c.COMMENT_LESS_THAN_SIGN;break}case o.NULL:{this._err(f.unexpectedNullCharacter),s.data+=$;break}case o.EOF:{this._err(f.eofInComment),this.emitCurrentComment(s),this._emitEOFToken();break}default:s.data+=String.fromCodePoint(t)}}_stateCommentLessThanSign(t){const s=this.currentToken;switch(t){case o.EXCLAMATION_MARK:{s.data+="!",this.state=c.COMMENT_LESS_THAN_SIGN_BANG;break}case o.LESS_THAN_SIGN:{s.data+="<";break}default:this.state=c.COMMENT,this._stateComment(t)}}_stateCommentLessThanSignBang(t){t===o.HYPHEN_MINUS?this.state=c.COMMENT_LESS_THAN_SIGN_BANG_DASH:(this.state=c.COMMENT,this._stateComment(t))}_stateCommentLessThanSignBangDash(t){t===o.HYPHEN_MINUS?this.state=c.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:(this.state=c.COMMENT_END_DASH,this._stateCommentEndDash(t))}_stateCommentLessThanSignBangDashDash(t){t!==o.GREATER_THAN_SIGN&&t!==o.EOF&&this._err(f.nestedComment),this.state=c.COMMENT_END,this._stateCommentEnd(t)}_stateCommentEndDash(t){const s=this.currentToken;switch(t){case o.HYPHEN_MINUS:{this.state=c.COMMENT_END;break}case o.EOF:{this._err(f.eofInComment),this.emitCurrentComment(s),this._emitEOFToken();break}default:s.data+="-",this.state=c.COMMENT,this._stateComment(t)}}_stateCommentEnd(t){const s=this.currentToken;switch(t){case o.GREATER_THAN_SIGN:{this.state=c.DATA,this.emitCurrentComment(s);break}case o.EXCLAMATION_MARK:{this.state=c.COMMENT_END_BANG;break}case o.HYPHEN_MINUS:{s.data+="-";break}case o.EOF:{this._err(f.eofInComment),this.emitCurrentComment(s),this._emitEOFToken();break}default:s.data+="--",this.state=c.COMMENT,this._stateComment(t)}}_stateCommentEndBang(t){const s=this.currentToken;switch(t){case o.HYPHEN_MINUS:{s.data+="--!",this.state=c.COMMENT_END_DASH;break}case o.GREATER_THAN_SIGN:{this._err(f.incorrectlyClosedComment),this.state=c.DATA,this.emitCurrentComment(s);break}case o.EOF:{this._err(f.eofInComment),this.emitCurrentComment(s),this._emitEOFToken();break}default:s.data+="--!",this.state=c.COMMENT,this._stateComment(t)}}_stateDoctype(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=c.BEFORE_DOCTYPE_NAME;break}case o.GREATER_THAN_SIGN:{this.state=c.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t);break}case o.EOF:{this._err(f.eofInDoctype),this._createDoctypeToken(null);const s=this.currentToken;s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:this._err(f.missingWhitespaceBeforeDoctypeName),this.state=c.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t)}}_stateBeforeDoctypeName(t){if(Dt(t))this._createDoctypeToken(String.fromCharCode(ds(t))),this.state=c.DOCTYPE_NAME;else switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.NULL:{this._err(f.unexpectedNullCharacter),this._createDoctypeToken($),this.state=c.DOCTYPE_NAME;break}case o.GREATER_THAN_SIGN:{this._err(f.missingDoctypeName),this._createDoctypeToken(null);const s=this.currentToken;s.forceQuirks=!0,this.emitCurrentDoctype(s),this.state=c.DATA;break}case o.EOF:{this._err(f.eofInDoctype),this._createDoctypeToken(null);const s=this.currentToken;s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:this._createDoctypeToken(String.fromCodePoint(t)),this.state=c.DOCTYPE_NAME}}_stateDoctypeName(t){const s=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=c.AFTER_DOCTYPE_NAME;break}case o.GREATER_THAN_SIGN:{this.state=c.DATA,this.emitCurrentDoctype(s);break}case o.NULL:{this._err(f.unexpectedNullCharacter),s.name+=$;break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:s.name+=String.fromCodePoint(Dt(t)?ds(t):t)}}_stateAfterDoctypeName(t){const s=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.GREATER_THAN_SIGN:{this.state=c.DATA,this.emitCurrentDoctype(s);break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:this._consumeSequenceIfMatch(ie.PUBLIC,!1)?this.state=c.AFTER_DOCTYPE_PUBLIC_KEYWORD:this._consumeSequenceIfMatch(ie.SYSTEM,!1)?this.state=c.AFTER_DOCTYPE_SYSTEM_KEYWORD:this._ensureHibernation()||(this._err(f.invalidCharacterSequenceAfterDoctypeName),s.forceQuirks=!0,this.state=c.BOGUS_DOCTYPE,this._stateBogusDoctype(t))}}_stateAfterDoctypePublicKeyword(t){const s=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=c.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;break}case o.QUOTATION_MARK:{this._err(f.missingWhitespaceAfterDoctypePublicKeyword),s.publicId="",this.state=c.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{this._err(f.missingWhitespaceAfterDoctypePublicKeyword),s.publicId="",this.state=c.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case o.GREATER_THAN_SIGN:{this._err(f.missingDoctypePublicIdentifier),s.forceQuirks=!0,this.state=c.DATA,this.emitCurrentDoctype(s);break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:this._err(f.missingQuoteBeforeDoctypePublicIdentifier),s.forceQuirks=!0,this.state=c.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypePublicIdentifier(t){const s=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.QUOTATION_MARK:{s.publicId="",this.state=c.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{s.publicId="",this.state=c.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case o.GREATER_THAN_SIGN:{this._err(f.missingDoctypePublicIdentifier),s.forceQuirks=!0,this.state=c.DATA,this.emitCurrentDoctype(s);break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:this._err(f.missingQuoteBeforeDoctypePublicIdentifier),s.forceQuirks=!0,this.state=c.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypePublicIdentifierDoubleQuoted(t){const s=this.currentToken;switch(t){case o.QUOTATION_MARK:{this.state=c.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case o.NULL:{this._err(f.unexpectedNullCharacter),s.publicId+=$;break}case o.GREATER_THAN_SIGN:{this._err(f.abruptDoctypePublicIdentifier),s.forceQuirks=!0,this.emitCurrentDoctype(s),this.state=c.DATA;break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:s.publicId+=String.fromCodePoint(t)}}_stateDoctypePublicIdentifierSingleQuoted(t){const s=this.currentToken;switch(t){case o.APOSTROPHE:{this.state=c.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case o.NULL:{this._err(f.unexpectedNullCharacter),s.publicId+=$;break}case o.GREATER_THAN_SIGN:{this._err(f.abruptDoctypePublicIdentifier),s.forceQuirks=!0,this.emitCurrentDoctype(s),this.state=c.DATA;break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:s.publicId+=String.fromCodePoint(t)}}_stateAfterDoctypePublicIdentifier(t){const s=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=c.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;break}case o.GREATER_THAN_SIGN:{this.state=c.DATA,this.emitCurrentDoctype(s);break}case o.QUOTATION_MARK:{this._err(f.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),s.systemId="",this.state=c.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{this._err(f.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),s.systemId="",this.state=c.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),s.forceQuirks=!0,this.state=c.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBetweenDoctypePublicAndSystemIdentifiers(t){const s=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.GREATER_THAN_SIGN:{this.emitCurrentDoctype(s),this.state=c.DATA;break}case o.QUOTATION_MARK:{s.systemId="",this.state=c.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{s.systemId="",this.state=c.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),s.forceQuirks=!0,this.state=c.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateAfterDoctypeSystemKeyword(t){const s=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=c.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;break}case o.QUOTATION_MARK:{this._err(f.missingWhitespaceAfterDoctypeSystemKeyword),s.systemId="",this.state=c.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{this._err(f.missingWhitespaceAfterDoctypeSystemKeyword),s.systemId="",this.state=c.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case o.GREATER_THAN_SIGN:{this._err(f.missingDoctypeSystemIdentifier),s.forceQuirks=!0,this.state=c.DATA,this.emitCurrentDoctype(s);break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),s.forceQuirks=!0,this.state=c.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypeSystemIdentifier(t){const s=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.QUOTATION_MARK:{s.systemId="",this.state=c.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{s.systemId="",this.state=c.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case o.GREATER_THAN_SIGN:{this._err(f.missingDoctypeSystemIdentifier),s.forceQuirks=!0,this.state=c.DATA,this.emitCurrentDoctype(s);break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),s.forceQuirks=!0,this.state=c.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypeSystemIdentifierDoubleQuoted(t){const s=this.currentToken;switch(t){case o.QUOTATION_MARK:{this.state=c.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case o.NULL:{this._err(f.unexpectedNullCharacter),s.systemId+=$;break}case o.GREATER_THAN_SIGN:{this._err(f.abruptDoctypeSystemIdentifier),s.forceQuirks=!0,this.emitCurrentDoctype(s),this.state=c.DATA;break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:s.systemId+=String.fromCodePoint(t)}}_stateDoctypeSystemIdentifierSingleQuoted(t){const s=this.currentToken;switch(t){case o.APOSTROPHE:{this.state=c.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case o.NULL:{this._err(f.unexpectedNullCharacter),s.systemId+=$;break}case o.GREATER_THAN_SIGN:{this._err(f.abruptDoctypeSystemIdentifier),s.forceQuirks=!0,this.emitCurrentDoctype(s),this.state=c.DATA;break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:s.systemId+=String.fromCodePoint(t)}}_stateAfterDoctypeSystemIdentifier(t){const s=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.GREATER_THAN_SIGN:{this.emitCurrentDoctype(s),this.state=c.DATA;break}case o.EOF:{this._err(f.eofInDoctype),s.forceQuirks=!0,this.emitCurrentDoctype(s),this._emitEOFToken();break}default:this._err(f.unexpectedCharacterAfterDoctypeSystemIdentifier),this.state=c.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBogusDoctype(t){const s=this.currentToken;switch(t){case o.GREATER_THAN_SIGN:{this.emitCurrentDoctype(s),this.state=c.DATA;break}case o.NULL:{this._err(f.unexpectedNullCharacter);break}case o.EOF:{this.emitCurrentDoctype(s),this._emitEOFToken();break}}}_stateCdataSection(t){switch(t){case o.RIGHT_SQUARE_BRACKET:{this.state=c.CDATA_SECTION_BRACKET;break}case o.EOF:{this._err(f.eofInCdata),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateCdataSectionBracket(t){t===o.RIGHT_SQUARE_BRACKET?this.state=c.CDATA_SECTION_END:(this._emitChars("]"),this.state=c.CDATA_SECTION,this._stateCdataSection(t))}_stateCdataSectionEnd(t){switch(t){case o.GREATER_THAN_SIGN:{this.state=c.DATA;break}case o.RIGHT_SQUARE_BRACKET:{this._emitChars("]");break}default:this._emitChars("]]"),this.state=c.CDATA_SECTION,this._stateCdataSection(t)}}_stateCharacterReference(){let t=this.entityDecoder.write(this.preprocessor.html,this.preprocessor.pos);if(t<0)if(this.preprocessor.lastChunkWritten)t=this.entityDecoder.end();else{this.active=!1,this.preprocessor.pos=this.preprocessor.html.length-1,this.consumedAfterSnapshot=0,this.preprocessor.endOfChunkHit=!0;return}t===0?(this.preprocessor.pos=this.entityStartPos,this._flushCodePointConsumedAsCharacterReference(o.AMPERSAND),this.state=!this._isCharacterReferenceInAttribute()&&Gr(this.preprocessor.peek(1))?c.AMBIGUOUS_AMPERSAND:this.returnState):this.state=this.returnState}_stateAmbiguousAmpersand(t){Gr(t)?this._flushCodePointConsumedAsCharacterReference(t):(t===o.SEMICOLON&&this._err(f.unknownNamedCharacterReference),this.state=this.returnState,this._callState(t))}}const Ji=new Set([a.DD,a.DT,a.LI,a.OPTGROUP,a.OPTION,a.P,a.RB,a.RP,a.RT,a.RTC]),Qr=new Set([...Ji,a.CAPTION,a.COLGROUP,a.TBODY,a.TD,a.TFOOT,a.TH,a.THEAD,a.TR]),_s=new Set([a.APPLET,a.CAPTION,a.HTML,a.MARQUEE,a.OBJECT,a.TABLE,a.TD,a.TEMPLATE,a.TH]),lu=new Set([..._s,a.OL,a.UL]),hu=new Set([..._s,a.BUTTON]),Xr=new Set([a.ANNOTATION_XML,a.MI,a.MN,a.MO,a.MS,a.MTEXT]),Jr=new Set([a.DESC,a.FOREIGN_OBJECT,a.TITLE]),pu=new Set([a.TR,a.TEMPLATE,a.HTML]),mu=new Set([a.TBODY,a.TFOOT,a.THEAD,a.TEMPLATE,a.HTML]),fu=new Set([a.TABLE,a.TEMPLATE,a.HTML]),bu=new Set([a.TD,a.TH]);class gu{get currentTmplContentOrNode(){return this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):this.current}constructor(t,s,r){this.treeAdapter=s,this.handler=r,this.items=[],this.tagIDs=[],this.stackTop=-1,this.tmplCount=0,this.currentTagId=a.UNKNOWN,this.current=t}_indexOf(t){return this.items.lastIndexOf(t,this.stackTop)}_isInTemplate(){return this.currentTagId===a.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===T.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagId=this.tagIDs[this.stackTop]}push(t,s){this.stackTop++,this.items[this.stackTop]=t,this.current=t,this.tagIDs[this.stackTop]=s,this.currentTagId=s,this._isInTemplate()&&this.tmplCount++,this.handler.onItemPush(t,s,!0)}pop(){const t=this.current;this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!0)}replace(t,s){const r=this._indexOf(t);this.items[r]=s,r===this.stackTop&&(this.current=s)}insertAfter(t,s,r){const i=this._indexOf(t)+1;this.items.splice(i,0,s),this.tagIDs.splice(i,0,r),this.stackTop++,i===this.stackTop&&this._updateCurrentElement(),this.current&&this.currentTagId!==void 0&&this.handler.onItemPush(this.current,this.currentTagId,i===this.stackTop)}popUntilTagNamePopped(t){let s=this.stackTop+1;do s=this.tagIDs.lastIndexOf(t,s-1);while(s>0&&this.treeAdapter.getNamespaceURI(this.items[s])!==T.HTML);this.shortenToLength(Math.max(s,0))}shortenToLength(t){for(;this.stackTop>=t;){const s=this.current;this.tmplCount>0&&this._isInTemplate()&&(this.tmplCount-=1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(s,this.stackTop<t)}}popUntilElementPopped(t){const s=this._indexOf(t);this.shortenToLength(Math.max(s,0))}popUntilPopped(t,s){const r=this._indexOfTagNames(t,s);this.shortenToLength(Math.max(r,0))}popUntilNumberedHeaderPopped(){this.popUntilPopped(sa,T.HTML)}popUntilTableCellPopped(){this.popUntilPopped(bu,T.HTML)}popAllUpToHtmlElement(){this.tmplCount=0,this.shortenToLength(1)}_indexOfTagNames(t,s){for(let r=this.stackTop;r>=0;r--)if(t.has(this.tagIDs[r])&&this.treeAdapter.getNamespaceURI(this.items[r])===s)return r;return-1}clearBackTo(t,s){const r=this._indexOfTagNames(t,s);this.shortenToLength(r+1)}clearBackToTableContext(){this.clearBackTo(fu,T.HTML)}clearBackToTableBodyContext(){this.clearBackTo(mu,T.HTML)}clearBackToTableRowContext(){this.clearBackTo(pu,T.HTML)}remove(t){const s=this._indexOf(t);s>=0&&(s===this.stackTop?this.pop():(this.items.splice(s,1),this.tagIDs.splice(s,1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!1)))}tryPeekProperlyNestedBodyElement(){return this.stackTop>=1&&this.tagIDs[1]===a.BODY?this.items[1]:null}contains(t){return this._indexOf(t)>-1}getCommonAncestor(t){const s=this._indexOf(t)-1;return s>=0?this.items[s]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.tagIDs[0]===a.HTML}hasInDynamicScope(t,s){for(let r=this.stackTop;r>=0;r--){const i=this.tagIDs[r];switch(this.treeAdapter.getNamespaceURI(this.items[r])){case T.HTML:{if(i===t)return!0;if(s.has(i))return!1;break}case T.SVG:{if(Jr.has(i))return!1;break}case T.MATHML:{if(Xr.has(i))return!1;break}}}return!0}hasInScope(t){return this.hasInDynamicScope(t,_s)}hasInListItemScope(t){return this.hasInDynamicScope(t,lu)}hasInButtonScope(t){return this.hasInDynamicScope(t,hu)}hasNumberedHeaderInScope(){for(let t=this.stackTop;t>=0;t--){const s=this.tagIDs[t];switch(this.treeAdapter.getNamespaceURI(this.items[t])){case T.HTML:{if(sa.has(s))return!0;if(_s.has(s))return!1;break}case T.SVG:{if(Jr.has(s))return!1;break}case T.MATHML:{if(Xr.has(s))return!1;break}}}return!0}hasInTableScope(t){for(let s=this.stackTop;s>=0;s--)if(this.treeAdapter.getNamespaceURI(this.items[s])===T.HTML)switch(this.tagIDs[s]){case t:return!0;case a.TABLE:case a.HTML:return!1}return!0}hasTableBodyContextInTableScope(){for(let t=this.stackTop;t>=0;t--)if(this.treeAdapter.getNamespaceURI(this.items[t])===T.HTML)switch(this.tagIDs[t]){case a.TBODY:case a.THEAD:case a.TFOOT:return!0;case a.TABLE:case a.HTML:return!1}return!0}hasInSelectScope(t){for(let s=this.stackTop;s>=0;s--)if(this.treeAdapter.getNamespaceURI(this.items[s])===T.HTML)switch(this.tagIDs[s]){case t:return!0;case a.OPTION:case a.OPTGROUP:break;default:return!1}return!0}generateImpliedEndTags(){for(;this.currentTagId!==void 0&&Ji.has(this.currentTagId);)this.pop()}generateImpliedEndTagsThoroughly(){for(;this.currentTagId!==void 0&&Qr.has(this.currentTagId);)this.pop()}generateImpliedEndTagsWithExclusion(t){for(;this.currentTagId!==void 0&&this.currentTagId!==t&&Qr.has(this.currentTagId);)this.pop()}}const Gs=3;var Ae;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(Ae||(Ae={}));const Zr={type:Ae.Marker};class Eu{constructor(t){this.treeAdapter=t,this.entries=[],this.bookmark=null}_getNoahArkConditionCandidates(t,s){const r=[],i=s.length,n=this.treeAdapter.getTagName(t),u=this.treeAdapter.getNamespaceURI(t);for(let h=0;h<this.entries.length;h++){const l=this.entries[h];if(l.type===Ae.Marker)break;const{element:m}=l;if(this.treeAdapter.getTagName(m)===n&&this.treeAdapter.getNamespaceURI(m)===u){const g=this.treeAdapter.getAttrList(m);g.length===i&&r.push({idx:h,attrs:g})}}return r}_ensureNoahArkCondition(t){if(this.entries.length<Gs)return;const s=this.treeAdapter.getAttrList(t),r=this._getNoahArkConditionCandidates(t,s);if(r.length<Gs)return;const i=new Map(s.map(u=>[u.name,u.value]));let n=0;for(let u=0;u<r.length;u++){const h=r[u];h.attrs.every(l=>i.get(l.name)===l.value)&&(n+=1,n>=Gs&&this.entries.splice(h.idx,1))}}insertMarker(){this.entries.unshift(Zr)}pushElement(t,s){this._ensureNoahArkCondition(t),this.entries.unshift({type:Ae.Element,element:t,token:s})}insertElementAfterBookmark(t,s){const r=this.entries.indexOf(this.bookmark);this.entries.splice(r,0,{type:Ae.Element,element:t,token:s})}removeEntry(t){const s=this.entries.indexOf(t);s!==-1&&this.entries.splice(s,1)}clearToLastMarker(){const t=this.entries.indexOf(Zr);t===-1?this.entries.length=0:this.entries.splice(0,t+1)}getElementEntryInScopeWithTagName(t){const s=this.entries.find(r=>r.type===Ae.Marker||this.treeAdapter.getTagName(r.element)===t);return s&&s.type===Ae.Element?s:null}getElementEntry(t){return this.entries.find(s=>s.type===Ae.Element&&s.element===t)}}const oe={createDocument(){return{nodeName:"#document",mode:he.NO_QUIRKS,childNodes:[]}},createDocumentFragment(){return{nodeName:"#document-fragment",childNodes:[]}},createElement(e,t,s){return{nodeName:e,tagName:e,attrs:s,namespaceURI:t,childNodes:[],parentNode:null}},createCommentNode(e){return{nodeName:"#comment",data:e,parentNode:null}},createTextNode(e){return{nodeName:"#text",value:e,parentNode:null}},appendChild(e,t){e.childNodes.push(t),t.parentNode=e},insertBefore(e,t,s){const r=e.childNodes.indexOf(s);e.childNodes.splice(r,0,t),t.parentNode=e},setTemplateContent(e,t){e.content=t},getTemplateContent(e){return e.content},setDocumentType(e,t,s,r){const i=e.childNodes.find(n=>n.nodeName==="#documentType");if(i)i.name=t,i.publicId=s,i.systemId=r;else{const n={nodeName:"#documentType",name:t,publicId:s,systemId:r,parentNode:null};oe.appendChild(e,n)}},setDocumentMode(e,t){e.mode=t},getDocumentMode(e){return e.mode},detachNode(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null}},insertText(e,t){if(e.childNodes.length>0){const s=e.childNodes[e.childNodes.length-1];if(oe.isTextNode(s)){s.value+=t;return}}oe.appendChild(e,oe.createTextNode(t))},insertTextBefore(e,t,s){const r=e.childNodes[e.childNodes.indexOf(s)-1];r&&oe.isTextNode(r)?r.value+=t:oe.insertBefore(e,oe.createTextNode(t),s)},adoptAttributes(e,t){const s=new Set(e.attrs.map(r=>r.name));for(let r=0;r<t.length;r++)s.has(t[r].name)||e.attrs.push(t[r])},getFirstChild(e){return e.childNodes[0]},getChildNodes(e){return e.childNodes},getParentNode(e){return e.parentNode},getAttrList(e){return e.attrs},getTagName(e){return e.tagName},getNamespaceURI(e){return e.namespaceURI},getTextNodeContent(e){return e.value},getCommentNodeContent(e){return e.data},getDocumentTypeNodeName(e){return e.name},getDocumentTypeNodePublicId(e){return e.publicId},getDocumentTypeNodeSystemId(e){return e.systemId},isTextNode(e){return e.nodeName==="#text"},isCommentNode(e){return e.nodeName==="#comment"},isDocumentTypeNode(e){return e.nodeName==="#documentType"},isElementNode(e){return Object.prototype.hasOwnProperty.call(e,"tagName")},setNodeSourceCodeLocation(e,t){e.sourceCodeLocation=t},getNodeSourceCodeLocation(e){return e.sourceCodeLocation},updateNodeSourceCodeLocation(e,t){e.sourceCodeLocation={...e.sourceCodeLocation,...t}}},Zi="html",Tu="about:legacy-compat",Su="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",en=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],_u=[...en,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"],Au=new Set(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),tn=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],ku=[...tn,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"];function ei(e,t){return t.some(s=>e.startsWith(s))}function vu(e){return e.name===Zi&&e.publicId===null&&(e.systemId===null||e.systemId===Tu)}function yu(e){if(e.name!==Zi)return he.QUIRKS;const{systemId:t}=e;if(t&&t.toLowerCase()===Su)return he.QUIRKS;let{publicId:s}=e;if(s!==null){if(s=s.toLowerCase(),Au.has(s))return he.QUIRKS;let r=t===null?_u:en;if(ei(s,r))return he.QUIRKS;if(r=t===null?tn:ku,ei(s,r))return he.LIMITED_QUIRKS}return he.NO_QUIRKS}const ti={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},Iu="definitionurl",Cu="definitionURL",Nu=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e])),xu=new Map([["xlink:actuate",{prefix:"xlink",name:"actuate",namespace:T.XLINK}],["xlink:arcrole",{prefix:"xlink",name:"arcrole",namespace:T.XLINK}],["xlink:href",{prefix:"xlink",name:"href",namespace:T.XLINK}],["xlink:role",{prefix:"xlink",name:"role",namespace:T.XLINK}],["xlink:show",{prefix:"xlink",name:"show",namespace:T.XLINK}],["xlink:title",{prefix:"xlink",name:"title",namespace:T.XLINK}],["xlink:type",{prefix:"xlink",name:"type",namespace:T.XLINK}],["xml:lang",{prefix:"xml",name:"lang",namespace:T.XML}],["xml:space",{prefix:"xml",name:"space",namespace:T.XML}],["xmlns",{prefix:"",name:"xmlns",namespace:T.XMLNS}],["xmlns:xlink",{prefix:"xmlns",name:"xlink",namespace:T.XMLNS}]]),Ru=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),Du=new Set([a.B,a.BIG,a.BLOCKQUOTE,a.BODY,a.BR,a.CENTER,a.CODE,a.DD,a.DIV,a.DL,a.DT,a.EM,a.EMBED,a.H1,a.H2,a.H3,a.H4,a.H5,a.H6,a.HEAD,a.HR,a.I,a.IMG,a.LI,a.LISTING,a.MENU,a.META,a.NOBR,a.OL,a.P,a.PRE,a.RUBY,a.S,a.SMALL,a.SPAN,a.STRONG,a.STRIKE,a.SUB,a.SUP,a.TABLE,a.TT,a.U,a.UL,a.VAR]);function Lu(e){const t=e.tagID;return t===a.FONT&&e.attrs.some(({name:r})=>r===tt.COLOR||r===tt.SIZE||r===tt.FACE)||Du.has(t)}function sn(e){for(let t=0;t<e.attrs.length;t++)if(e.attrs[t].name===Iu){e.attrs[t].name=Cu;break}}function an(e){for(let t=0;t<e.attrs.length;t++){const s=Nu.get(e.attrs[t].name);s!=null&&(e.attrs[t].name=s)}}function Ga(e){for(let t=0;t<e.attrs.length;t++){const s=xu.get(e.attrs[t].name);s&&(e.attrs[t].prefix=s.prefix,e.attrs[t].name=s.name,e.attrs[t].namespace=s.namespace)}}function Ou(e){const t=Ru.get(e.tagName);t!=null&&(e.tagName=t,e.tagID=ws(e.tagName))}function wu(e,t){return t===T.MATHML&&(e===a.MI||e===a.MO||e===a.MN||e===a.MS||e===a.MTEXT)}function Pu(e,t,s){if(t===T.MATHML&&e===a.ANNOTATION_XML){for(let r=0;r<s.length;r++)if(s[r].name===tt.ENCODING){const i=s[r].value.toLowerCase();return i===ti.TEXT_HTML||i===ti.APPLICATION_XML}}return t===T.SVG&&(e===a.FOREIGN_OBJECT||e===a.DESC||e===a.TITLE)}function Mu(e,t,s,r){return(!r||r===T.HTML)&&Pu(e,t,s)||(!r||r===T.MATHML)&&wu(e,t)}const Hu="hidden",Bu=8,Fu=3;var d;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(d||(d={}));const Uu={startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1},rn=new Set([a.TABLE,a.TBODY,a.TFOOT,a.THEAD,a.TR]),si={scriptingEnabled:!0,sourceCodeLocationInfo:!1,treeAdapter:oe,onParseError:null};class nn{constructor(t,s,r=null,i=null){this.fragmentContext=r,this.scriptHandler=i,this.currentToken=null,this.stopped=!1,this.insertionMode=d.INITIAL,this.originalInsertionMode=d.INITIAL,this.headElement=null,this.formElement=null,this.currentNotInHTML=!1,this.tmplInsertionModeStack=[],this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1,this.options={...si,...t},this.treeAdapter=this.options.treeAdapter,this.onParseError=this.options.onParseError,this.onParseError&&(this.options.sourceCodeLocationInfo=!0),this.document=s??this.treeAdapter.createDocument(),this.tokenizer=new du(this.options,this),this.activeFormattingElements=new Eu(this.treeAdapter),this.fragmentContextID=r?ws(this.treeAdapter.getTagName(r)):a.UNKNOWN,this._setContextModes(r??this.document,this.fragmentContextID),this.openElements=new gu(this.document,this.treeAdapter,this)}static parse(t,s){const r=new this(s);return r.tokenizer.write(t,!0),r.document}static getFragmentParser(t,s){const r={...si,...s};t??(t=r.treeAdapter.createElement(p.TEMPLATE,T.HTML,[]));const i=r.treeAdapter.createElement("documentmock",T.HTML,[]),n=new this(r,i,t);return n.fragmentContextID===a.TEMPLATE&&n.tmplInsertionModeStack.unshift(d.IN_TEMPLATE),n._initTokenizerForFragmentParsing(),n._insertFakeRootElement(),n._resetInsertionMode(),n._findFormInFragmentContext(),n}getFragment(){const t=this.treeAdapter.getFirstChild(this.document),s=this.treeAdapter.createDocumentFragment();return this._adoptNodes(t,s),s}_err(t,s,r){var i;if(!this.onParseError)return;const n=(i=t.location)!==null&&i!==void 0?i:Uu,u={code:s,startLine:n.startLine,startCol:n.startCol,startOffset:n.startOffset,endLine:r?n.startLine:n.endLine,endCol:r?n.startCol:n.endCol,endOffset:r?n.startOffset:n.endOffset};this.onParseError(u)}onItemPush(t,s,r){var i,n;(n=(i=this.treeAdapter).onItemPush)===null||n===void 0||n.call(i,t),r&&this.openElements.stackTop>0&&this._setContextModes(t,s)}onItemPop(t,s){var r,i;if(this.options.sourceCodeLocationInfo&&this._setEndLocation(t,this.currentToken),(i=(r=this.treeAdapter).onItemPop)===null||i===void 0||i.call(r,t,this.openElements.current),s){let n,u;this.openElements.stackTop===0&&this.fragmentContext?(n=this.fragmentContext,u=this.fragmentContextID):{current:n,currentTagId:u}=this.openElements,this._setContextModes(n,u)}}_setContextModes(t,s){const r=t===this.document||t&&this.treeAdapter.getNamespaceURI(t)===T.HTML;this.currentNotInHTML=!r,this.tokenizer.inForeignNode=!r&&t!==void 0&&s!==void 0&&!this._isIntegrationPoint(s,t)}_switchToTextParsing(t,s){this._insertElement(t,T.HTML),this.tokenizer.state=s,this.originalInsertionMode=this.insertionMode,this.insertionMode=d.TEXT}switchToPlaintextParsing(){this.insertionMode=d.TEXT,this.originalInsertionMode=d.IN_BODY,this.tokenizer.state=ne.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let t=this.fragmentContext;for(;t;){if(this.treeAdapter.getTagName(t)===p.FORM){this.formElement=t;break}t=this.treeAdapter.getParentNode(t)}}_initTokenizerForFragmentParsing(){if(!(!this.fragmentContext||this.treeAdapter.getNamespaceURI(this.fragmentContext)!==T.HTML))switch(this.fragmentContextID){case a.TITLE:case a.TEXTAREA:{this.tokenizer.state=ne.RCDATA;break}case a.STYLE:case a.XMP:case a.IFRAME:case a.NOEMBED:case a.NOFRAMES:case a.NOSCRIPT:{this.tokenizer.state=ne.RAWTEXT;break}case a.SCRIPT:{this.tokenizer.state=ne.SCRIPT_DATA;break}case a.PLAINTEXT:{this.tokenizer.state=ne.PLAINTEXT;break}}}_setDocumentType(t){const s=t.name||"",r=t.publicId||"",i=t.systemId||"";if(this.treeAdapter.setDocumentType(this.document,s,r,i),t.location){const u=this.treeAdapter.getChildNodes(this.document).find(h=>this.treeAdapter.isDocumentTypeNode(h));u&&this.treeAdapter.setNodeSourceCodeLocation(u,t.location)}}_attachElementToTree(t,s){if(this.options.sourceCodeLocationInfo){const r=s&&{...s,startTag:s};this.treeAdapter.setNodeSourceCodeLocation(t,r)}if(this._shouldFosterParentOnInsertion())this._fosterParentElement(t);else{const r=this.openElements.currentTmplContentOrNode;this.treeAdapter.appendChild(r??this.document,t)}}_appendElement(t,s){const r=this.treeAdapter.createElement(t.tagName,s,t.attrs);this._attachElementToTree(r,t.location)}_insertElement(t,s){const r=this.treeAdapter.createElement(t.tagName,s,t.attrs);this._attachElementToTree(r,t.location),this.openElements.push(r,t.tagID)}_insertFakeElement(t,s){const r=this.treeAdapter.createElement(t,T.HTML,[]);this._attachElementToTree(r,null),this.openElements.push(r,s)}_insertTemplate(t){const s=this.treeAdapter.createElement(t.tagName,T.HTML,t.attrs),r=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(s,r),this._attachElementToTree(s,t.location),this.openElements.push(s,t.tagID),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(r,null)}_insertFakeRootElement(){const t=this.treeAdapter.createElement(p.HTML,T.HTML,[]);this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(t,null),this.treeAdapter.appendChild(this.openElements.current,t),this.openElements.push(t,a.HTML)}_appendCommentNode(t,s){const r=this.treeAdapter.createCommentNode(t.data);this.treeAdapter.appendChild(s,r),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(r,t.location)}_insertCharacters(t){let s,r;if(this._shouldFosterParentOnInsertion()?({parent:s,beforeElement:r}=this._findFosterParentingLocation(),r?this.treeAdapter.insertTextBefore(s,t.chars,r):this.treeAdapter.insertText(s,t.chars)):(s=this.openElements.currentTmplContentOrNode,this.treeAdapter.insertText(s,t.chars)),!t.location)return;const i=this.treeAdapter.getChildNodes(s),n=r?i.lastIndexOf(r):i.length,u=i[n-1];if(this.treeAdapter.getNodeSourceCodeLocation(u)){const{endLine:l,endCol:m,endOffset:g}=t.location;this.treeAdapter.updateNodeSourceCodeLocation(u,{endLine:l,endCol:m,endOffset:g})}else this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(u,t.location)}_adoptNodes(t,s){for(let r=this.treeAdapter.getFirstChild(t);r;r=this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(r),this.treeAdapter.appendChild(s,r)}_setEndLocation(t,s){if(this.treeAdapter.getNodeSourceCodeLocation(t)&&s.location){const r=s.location,i=this.treeAdapter.getTagName(t),n=s.type===L.END_TAG&&i===s.tagName?{endTag:{...r},endLine:r.endLine,endCol:r.endCol,endOffset:r.endOffset}:{endLine:r.startLine,endCol:r.startCol,endOffset:r.startOffset};this.treeAdapter.updateNodeSourceCodeLocation(t,n)}}shouldProcessStartTagTokenInForeignContent(t){if(!this.currentNotInHTML)return!1;let s,r;return this.openElements.stackTop===0&&this.fragmentContext?(s=this.fragmentContext,r=this.fragmentContextID):{current:s,currentTagId:r}=this.openElements,t.tagID===a.SVG&&this.treeAdapter.getTagName(s)===p.ANNOTATION_XML&&this.treeAdapter.getNamespaceURI(s)===T.MATHML?!1:this.tokenizer.inForeignNode||(t.tagID===a.MGLYPH||t.tagID===a.MALIGNMARK)&&r!==void 0&&!this._isIntegrationPoint(r,s,T.HTML)}_processToken(t){switch(t.type){case L.CHARACTER:{this.onCharacter(t);break}case L.NULL_CHARACTER:{this.onNullCharacter(t);break}case L.COMMENT:{this.onComment(t);break}case L.DOCTYPE:{this.onDoctype(t);break}case L.START_TAG:{this._processStartTag(t);break}case L.END_TAG:{this.onEndTag(t);break}case L.EOF:{this.onEof(t);break}case L.WHITESPACE_CHARACTER:{this.onWhitespaceCharacter(t);break}}}_isIntegrationPoint(t,s,r){const i=this.treeAdapter.getNamespaceURI(s),n=this.treeAdapter.getAttrList(s);return Mu(t,i,n,r)}_reconstructActiveFormattingElements(){const t=this.activeFormattingElements.entries.length;if(t){const s=this.activeFormattingElements.entries.findIndex(i=>i.type===Ae.Marker||this.openElements.contains(i.element)),r=s===-1?t-1:s-1;for(let i=r;i>=0;i--){const n=this.activeFormattingElements.entries[i];this._insertElement(n.token,this.treeAdapter.getNamespaceURI(n.element)),n.element=this.openElements.current}}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=d.IN_ROW}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(a.P),this.openElements.popUntilTagNamePopped(a.P)}_resetInsertionMode(){for(let t=this.openElements.stackTop;t>=0;t--)switch(t===0&&this.fragmentContext?this.fragmentContextID:this.openElements.tagIDs[t]){case a.TR:{this.insertionMode=d.IN_ROW;return}case a.TBODY:case a.THEAD:case a.TFOOT:{this.insertionMode=d.IN_TABLE_BODY;return}case a.CAPTION:{this.insertionMode=d.IN_CAPTION;return}case a.COLGROUP:{this.insertionMode=d.IN_COLUMN_GROUP;return}case a.TABLE:{this.insertionMode=d.IN_TABLE;return}case a.BODY:{this.insertionMode=d.IN_BODY;return}case a.FRAMESET:{this.insertionMode=d.IN_FRAMESET;return}case a.SELECT:{this._resetInsertionModeForSelect(t);return}case a.TEMPLATE:{this.insertionMode=this.tmplInsertionModeStack[0];return}case a.HTML:{this.insertionMode=this.headElement?d.AFTER_HEAD:d.BEFORE_HEAD;return}case a.TD:case a.TH:{if(t>0){this.insertionMode=d.IN_CELL;return}break}case a.HEAD:{if(t>0){this.insertionMode=d.IN_HEAD;return}break}}this.insertionMode=d.IN_BODY}_resetInsertionModeForSelect(t){if(t>0)for(let s=t-1;s>0;s--){const r=this.openElements.tagIDs[s];if(r===a.TEMPLATE)break;if(r===a.TABLE){this.insertionMode=d.IN_SELECT_IN_TABLE;return}}this.insertionMode=d.IN_SELECT}_isElementCausesFosterParenting(t){return rn.has(t)}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this.openElements.currentTagId!==void 0&&this._isElementCausesFosterParenting(this.openElements.currentTagId)}_findFosterParentingLocation(){for(let t=this.openElements.stackTop;t>=0;t--){const s=this.openElements.items[t];switch(this.openElements.tagIDs[t]){case a.TEMPLATE:{if(this.treeAdapter.getNamespaceURI(s)===T.HTML)return{parent:this.treeAdapter.getTemplateContent(s),beforeElement:null};break}case a.TABLE:{const r=this.treeAdapter.getParentNode(s);return r?{parent:r,beforeElement:s}:{parent:this.openElements.items[t-1],beforeElement:null}}}}return{parent:this.openElements.items[0],beforeElement:null}}_fosterParentElement(t){const s=this._findFosterParentingLocation();s.beforeElement?this.treeAdapter.insertBefore(s.parent,t,s.beforeElement):this.treeAdapter.appendChild(s.parent,t)}_isSpecialElement(t,s){const r=this.treeAdapter.getNamespaceURI(t);return nu[r].has(s)}onCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){bd(this,t);return}switch(this.insertionMode){case d.INITIAL:{xt(this,t);break}case d.BEFORE_HTML:{Ht(this,t);break}case d.BEFORE_HEAD:{Bt(this,t);break}case d.IN_HEAD:{Ft(this,t);break}case d.IN_HEAD_NO_SCRIPT:{Ut(this,t);break}case d.AFTER_HEAD:{$t(this,t);break}case d.IN_BODY:case d.IN_CAPTION:case d.IN_CELL:case d.IN_TEMPLATE:{un(this,t);break}case d.TEXT:case d.IN_SELECT:case d.IN_SELECT_IN_TABLE:{this._insertCharacters(t);break}case d.IN_TABLE:case d.IN_TABLE_BODY:case d.IN_ROW:{Vs(this,t);break}case d.IN_TABLE_TEXT:{mn(this,t);break}case d.IN_COLUMN_GROUP:{As(this,t);break}case d.AFTER_BODY:{ks(this,t);break}case d.AFTER_AFTER_BODY:{bs(this,t);break}}}onNullCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){fd(this,t);return}switch(this.insertionMode){case d.INITIAL:{xt(this,t);break}case d.BEFORE_HTML:{Ht(this,t);break}case d.BEFORE_HEAD:{Bt(this,t);break}case d.IN_HEAD:{Ft(this,t);break}case d.IN_HEAD_NO_SCRIPT:{Ut(this,t);break}case d.AFTER_HEAD:{$t(this,t);break}case d.TEXT:{this._insertCharacters(t);break}case d.IN_TABLE:case d.IN_TABLE_BODY:case d.IN_ROW:{Vs(this,t);break}case d.IN_COLUMN_GROUP:{As(this,t);break}case d.AFTER_BODY:{ks(this,t);break}case d.AFTER_AFTER_BODY:{bs(this,t);break}}}onComment(t){if(this.skipNextNewLine=!1,this.currentNotInHTML){aa(this,t);return}switch(this.insertionMode){case d.INITIAL:case d.BEFORE_HTML:case d.BEFORE_HEAD:case d.IN_HEAD:case d.IN_HEAD_NO_SCRIPT:case d.AFTER_HEAD:case d.IN_BODY:case d.IN_TABLE:case d.IN_CAPTION:case d.IN_COLUMN_GROUP:case d.IN_TABLE_BODY:case d.IN_ROW:case d.IN_CELL:case d.IN_SELECT:case d.IN_SELECT_IN_TABLE:case d.IN_TEMPLATE:case d.IN_FRAMESET:case d.AFTER_FRAMESET:{aa(this,t);break}case d.IN_TABLE_TEXT:{Rt(this,t);break}case d.AFTER_BODY:{qu(this,t);break}case d.AFTER_AFTER_BODY:case d.AFTER_AFTER_FRAMESET:{Gu(this,t);break}}}onDoctype(t){switch(this.skipNextNewLine=!1,this.insertionMode){case d.INITIAL:{Vu(this,t);break}case d.BEFORE_HEAD:case d.IN_HEAD:case d.IN_HEAD_NO_SCRIPT:case d.AFTER_HEAD:{this._err(t,f.misplacedDoctype);break}case d.IN_TABLE_TEXT:{Rt(this,t);break}}}onStartTag(t){this.skipNextNewLine=!1,this.currentToken=t,this._processStartTag(t),t.selfClosing&&!t.ackSelfClosing&&this._err(t,f.nonVoidHtmlElementStartTagWithTrailingSolidus)}_processStartTag(t){this.shouldProcessStartTagTokenInForeignContent(t)?gd(this,t):this._startTagOutsideForeignContent(t)}_startTagOutsideForeignContent(t){switch(this.insertionMode){case d.INITIAL:{xt(this,t);break}case d.BEFORE_HTML:{Qu(this,t);break}case d.BEFORE_HEAD:{Ju(this,t);break}case d.IN_HEAD:{Ee(this,t);break}case d.IN_HEAD_NO_SCRIPT:{tc(this,t);break}case d.AFTER_HEAD:{ac(this,t);break}case d.IN_BODY:{ee(this,t);break}case d.IN_TABLE:{Tt(this,t);break}case d.IN_TABLE_TEXT:{Rt(this,t);break}case d.IN_CAPTION:{Zc(this,t);break}case d.IN_COLUMN_GROUP:{Xa(this,t);break}case d.IN_TABLE_BODY:{Hs(this,t);break}case d.IN_ROW:{Bs(this,t);break}case d.IN_CELL:{sd(this,t);break}case d.IN_SELECT:{gn(this,t);break}case d.IN_SELECT_IN_TABLE:{rd(this,t);break}case d.IN_TEMPLATE:{nd(this,t);break}case d.AFTER_BODY:{ud(this,t);break}case d.IN_FRAMESET:{cd(this,t);break}case d.AFTER_FRAMESET:{ld(this,t);break}case d.AFTER_AFTER_BODY:{pd(this,t);break}case d.AFTER_AFTER_FRAMESET:{md(this,t);break}}}onEndTag(t){this.skipNextNewLine=!1,this.currentToken=t,this.currentNotInHTML?Ed(this,t):this._endTagOutsideForeignContent(t)}_endTagOutsideForeignContent(t){switch(this.insertionMode){case d.INITIAL:{xt(this,t);break}case d.BEFORE_HTML:{Xu(this,t);break}case d.BEFORE_HEAD:{Zu(this,t);break}case d.IN_HEAD:{ec(this,t);break}case d.IN_HEAD_NO_SCRIPT:{sc(this,t);break}case d.AFTER_HEAD:{rc(this,t);break}case d.IN_BODY:{Ms(this,t);break}case d.TEXT:{jc(this,t);break}case d.IN_TABLE:{Wt(this,t);break}case d.IN_TABLE_TEXT:{Rt(this,t);break}case d.IN_CAPTION:{ed(this,t);break}case d.IN_COLUMN_GROUP:{td(this,t);break}case d.IN_TABLE_BODY:{ra(this,t);break}case d.IN_ROW:{bn(this,t);break}case d.IN_CELL:{ad(this,t);break}case d.IN_SELECT:{En(this,t);break}case d.IN_SELECT_IN_TABLE:{id(this,t);break}case d.IN_TEMPLATE:{od(this,t);break}case d.AFTER_BODY:{Sn(this,t);break}case d.IN_FRAMESET:{dd(this,t);break}case d.AFTER_FRAMESET:{hd(this,t);break}case d.AFTER_AFTER_BODY:{bs(this,t);break}}}onEof(t){switch(this.insertionMode){case d.INITIAL:{xt(this,t);break}case d.BEFORE_HTML:{Ht(this,t);break}case d.BEFORE_HEAD:{Bt(this,t);break}case d.IN_HEAD:{Ft(this,t);break}case d.IN_HEAD_NO_SCRIPT:{Ut(this,t);break}case d.AFTER_HEAD:{$t(this,t);break}case d.IN_BODY:case d.IN_TABLE:case d.IN_CAPTION:case d.IN_COLUMN_GROUP:case d.IN_TABLE_BODY:case d.IN_ROW:case d.IN_CELL:case d.IN_SELECT:case d.IN_SELECT_IN_TABLE:{hn(this,t);break}case d.TEXT:{Yc(this,t);break}case d.IN_TABLE_TEXT:{Rt(this,t);break}case d.IN_TEMPLATE:{Tn(this,t);break}case d.AFTER_BODY:case d.IN_FRAMESET:case d.AFTER_FRAMESET:case d.AFTER_AFTER_BODY:case d.AFTER_AFTER_FRAMESET:{Qa(this,t);break}}}onWhitespaceCharacter(t){if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.chars.charCodeAt(0)===o.LINE_FEED)){if(t.chars.length===1)return;t.chars=t.chars.substr(1)}if(this.tokenizer.inForeignNode){this._insertCharacters(t);return}switch(this.insertionMode){case d.IN_HEAD:case d.IN_HEAD_NO_SCRIPT:case d.AFTER_HEAD:case d.TEXT:case d.IN_COLUMN_GROUP:case d.IN_SELECT:case d.IN_SELECT_IN_TABLE:case d.IN_FRAMESET:case d.AFTER_FRAMESET:{this._insertCharacters(t);break}case d.IN_BODY:case d.IN_CAPTION:case d.IN_CELL:case d.IN_TEMPLATE:case d.AFTER_BODY:case d.AFTER_AFTER_BODY:case d.AFTER_AFTER_FRAMESET:{on(this,t);break}case d.IN_TABLE:case d.IN_TABLE_BODY:case d.IN_ROW:{Vs(this,t);break}case d.IN_TABLE_TEXT:{pn(this,t);break}}}}function $u(e,t){let s=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return s?e.openElements.contains(s.element)?e.openElements.hasInScope(t.tagID)||(s=null):(e.activeFormattingElements.removeEntry(s),s=null):ln(e,t),s}function zu(e,t){let s=null,r=e.openElements.stackTop;for(;r>=0;r--){const i=e.openElements.items[r];if(i===t.element)break;e._isSpecialElement(i,e.openElements.tagIDs[r])&&(s=i)}return s||(e.openElements.shortenToLength(Math.max(r,0)),e.activeFormattingElements.removeEntry(t)),s}function ju(e,t,s){let r=t,i=e.openElements.getCommonAncestor(t);for(let n=0,u=i;u!==s;n++,u=i){i=e.openElements.getCommonAncestor(u);const h=e.activeFormattingElements.getElementEntry(u),l=h&&n>=Fu;!h||l?(l&&e.activeFormattingElements.removeEntry(h),e.openElements.remove(u)):(u=Yu(e,h),r===t&&(e.activeFormattingElements.bookmark=h),e.treeAdapter.detachNode(r),e.treeAdapter.appendChild(u,r),r=u)}return r}function Yu(e,t){const s=e.treeAdapter.getNamespaceURI(t.element),r=e.treeAdapter.createElement(t.token.tagName,s,t.token.attrs);return e.openElements.replace(t.element,r),t.element=r,r}function Ku(e,t,s){const r=e.treeAdapter.getTagName(t),i=ws(r);if(e._isElementCausesFosterParenting(i))e._fosterParentElement(s);else{const n=e.treeAdapter.getNamespaceURI(t);i===a.TEMPLATE&&n===T.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,s)}}function Wu(e,t,s){const r=e.treeAdapter.getNamespaceURI(s.element),{token:i}=s,n=e.treeAdapter.createElement(i.tagName,r,i.attrs);e._adoptNodes(t,n),e.treeAdapter.appendChild(t,n),e.activeFormattingElements.insertElementAfterBookmark(n,i),e.activeFormattingElements.removeEntry(s),e.openElements.remove(s.element),e.openElements.insertAfter(t,n,i.tagID)}function Va(e,t){for(let s=0;s<Bu;s++){const r=$u(e,t);if(!r)break;const i=zu(e,r);if(!i)break;e.activeFormattingElements.bookmark=r;const n=ju(e,i,r.element),u=e.openElements.getCommonAncestor(r.element);e.treeAdapter.detachNode(n),u&&Ku(e,u,n),Wu(e,i,r)}}function aa(e,t){e._appendCommentNode(t,e.openElements.currentTmplContentOrNode)}function qu(e,t){e._appendCommentNode(t,e.openElements.items[0])}function Gu(e,t){e._appendCommentNode(t,e.document)}function Qa(e,t){if(e.stopped=!0,t.location){const s=e.fragmentContext?0:2;for(let r=e.openElements.stackTop;r>=s;r--)e._setEndLocation(e.openElements.items[r],t);if(!e.fragmentContext&&e.openElements.stackTop>=0){const r=e.openElements.items[0],i=e.treeAdapter.getNodeSourceCodeLocation(r);if(i&&!i.endTag&&(e._setEndLocation(r,t),e.openElements.stackTop>=1)){const n=e.openElements.items[1],u=e.treeAdapter.getNodeSourceCodeLocation(n);u&&!u.endTag&&e._setEndLocation(n,t)}}}}function Vu(e,t){e._setDocumentType(t);const s=t.forceQuirks?he.QUIRKS:yu(t);vu(t)||e._err(t,f.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,s),e.insertionMode=d.BEFORE_HTML}function xt(e,t){e._err(t,f.missingDoctype,!0),e.treeAdapter.setDocumentMode(e.document,he.QUIRKS),e.insertionMode=d.BEFORE_HTML,e._processToken(t)}function Qu(e,t){t.tagID===a.HTML?(e._insertElement(t,T.HTML),e.insertionMode=d.BEFORE_HEAD):Ht(e,t)}function Xu(e,t){const s=t.tagID;(s===a.HTML||s===a.HEAD||s===a.BODY||s===a.BR)&&Ht(e,t)}function Ht(e,t){e._insertFakeRootElement(),e.insertionMode=d.BEFORE_HEAD,e._processToken(t)}function Ju(e,t){switch(t.tagID){case a.HTML:{ee(e,t);break}case a.HEAD:{e._insertElement(t,T.HTML),e.headElement=e.openElements.current,e.insertionMode=d.IN_HEAD;break}default:Bt(e,t)}}function Zu(e,t){const s=t.tagID;s===a.HEAD||s===a.BODY||s===a.HTML||s===a.BR?Bt(e,t):e._err(t,f.endTagWithoutMatchingOpenElement)}function Bt(e,t){e._insertFakeElement(p.HEAD,a.HEAD),e.headElement=e.openElements.current,e.insertionMode=d.IN_HEAD,e._processToken(t)}function Ee(e,t){switch(t.tagID){case a.HTML:{ee(e,t);break}case a.BASE:case a.BASEFONT:case a.BGSOUND:case a.LINK:case a.META:{e._appendElement(t,T.HTML),t.ackSelfClosing=!0;break}case a.TITLE:{e._switchToTextParsing(t,ne.RCDATA);break}case a.NOSCRIPT:{e.options.scriptingEnabled?e._switchToTextParsing(t,ne.RAWTEXT):(e._insertElement(t,T.HTML),e.insertionMode=d.IN_HEAD_NO_SCRIPT);break}case a.NOFRAMES:case a.STYLE:{e._switchToTextParsing(t,ne.RAWTEXT);break}case a.SCRIPT:{e._switchToTextParsing(t,ne.SCRIPT_DATA);break}case a.TEMPLATE:{e._insertTemplate(t),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=d.IN_TEMPLATE,e.tmplInsertionModeStack.unshift(d.IN_TEMPLATE);break}case a.HEAD:{e._err(t,f.misplacedStartTagForHeadElement);break}default:Ft(e,t)}}function ec(e,t){switch(t.tagID){case a.HEAD:{e.openElements.pop(),e.insertionMode=d.AFTER_HEAD;break}case a.BODY:case a.BR:case a.HTML:{Ft(e,t);break}case a.TEMPLATE:{it(e,t);break}default:e._err(t,f.endTagWithoutMatchingOpenElement)}}function it(e,t){e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagId!==a.TEMPLATE&&e._err(t,f.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(a.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode()):e._err(t,f.endTagWithoutMatchingOpenElement)}function Ft(e,t){e.openElements.pop(),e.insertionMode=d.AFTER_HEAD,e._processToken(t)}function tc(e,t){switch(t.tagID){case a.HTML:{ee(e,t);break}case a.BASEFONT:case a.BGSOUND:case a.HEAD:case a.LINK:case a.META:case a.NOFRAMES:case a.STYLE:{Ee(e,t);break}case a.NOSCRIPT:{e._err(t,f.nestedNoscriptInHead);break}default:Ut(e,t)}}function sc(e,t){switch(t.tagID){case a.NOSCRIPT:{e.openElements.pop(),e.insertionMode=d.IN_HEAD;break}case a.BR:{Ut(e,t);break}default:e._err(t,f.endTagWithoutMatchingOpenElement)}}function Ut(e,t){const s=t.type===L.EOF?f.openElementsLeftAfterEof:f.disallowedContentInNoscriptInHead;e._err(t,s),e.openElements.pop(),e.insertionMode=d.IN_HEAD,e._processToken(t)}function ac(e,t){switch(t.tagID){case a.HTML:{ee(e,t);break}case a.BODY:{e._insertElement(t,T.HTML),e.framesetOk=!1,e.insertionMode=d.IN_BODY;break}case a.FRAMESET:{e._insertElement(t,T.HTML),e.insertionMode=d.IN_FRAMESET;break}case a.BASE:case a.BASEFONT:case a.BGSOUND:case a.LINK:case a.META:case a.NOFRAMES:case a.SCRIPT:case a.STYLE:case a.TEMPLATE:case a.TITLE:{e._err(t,f.abandonedHeadElementChild),e.openElements.push(e.headElement,a.HEAD),Ee(e,t),e.openElements.remove(e.headElement);break}case a.HEAD:{e._err(t,f.misplacedStartTagForHeadElement);break}default:$t(e,t)}}function rc(e,t){switch(t.tagID){case a.BODY:case a.HTML:case a.BR:{$t(e,t);break}case a.TEMPLATE:{it(e,t);break}default:e._err(t,f.endTagWithoutMatchingOpenElement)}}function $t(e,t){e._insertFakeElement(p.BODY,a.BODY),e.insertionMode=d.IN_BODY,Ps(e,t)}function Ps(e,t){switch(t.type){case L.CHARACTER:{un(e,t);break}case L.WHITESPACE_CHARACTER:{on(e,t);break}case L.COMMENT:{aa(e,t);break}case L.START_TAG:{ee(e,t);break}case L.END_TAG:{Ms(e,t);break}case L.EOF:{hn(e,t);break}}}function on(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t)}function un(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1}function ic(e,t){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)}function nc(e,t){const s=e.openElements.tryPeekProperlyNestedBodyElement();s&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(s,t.attrs))}function oc(e,t){const s=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&s&&(e.treeAdapter.detachNode(s),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,T.HTML),e.insertionMode=d.IN_FRAMESET)}function uc(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,T.HTML)}function cc(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e.openElements.currentTagId!==void 0&&sa.has(e.openElements.currentTagId)&&e.openElements.pop(),e._insertElement(t,T.HTML)}function dc(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,T.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function lc(e,t){const s=e.openElements.tmplCount>0;(!e.formElement||s)&&(e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,T.HTML),s||(e.formElement=e.openElements.current))}function hc(e,t){e.framesetOk=!1;const s=t.tagID;for(let r=e.openElements.stackTop;r>=0;r--){const i=e.openElements.tagIDs[r];if(s===a.LI&&i===a.LI||(s===a.DD||s===a.DT)&&(i===a.DD||i===a.DT)){e.openElements.generateImpliedEndTagsWithExclusion(i),e.openElements.popUntilTagNamePopped(i);break}if(i!==a.ADDRESS&&i!==a.DIV&&i!==a.P&&e._isSpecialElement(e.openElements.items[r],i))break}e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,T.HTML)}function pc(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,T.HTML),e.tokenizer.state=ne.PLAINTEXT}function mc(e,t){e.openElements.hasInScope(a.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(a.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,T.HTML),e.framesetOk=!1}function fc(e,t){const s=e.activeFormattingElements.getElementEntryInScopeWithTagName(p.A);s&&(Va(e,t),e.openElements.remove(s.element),e.activeFormattingElements.removeEntry(s)),e._reconstructActiveFormattingElements(),e._insertElement(t,T.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function bc(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,T.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function gc(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(a.NOBR)&&(Va(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,T.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function Ec(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,T.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function Tc(e,t){e.treeAdapter.getDocumentMode(e.document)!==he.QUIRKS&&e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,T.HTML),e.framesetOk=!1,e.insertionMode=d.IN_TABLE}function cn(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,T.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function dn(e){const t=Qi(e,tt.TYPE);return t!=null&&t.toLowerCase()===Hu}function Sc(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,T.HTML),dn(t)||(e.framesetOk=!1),t.ackSelfClosing=!0}function _c(e,t){e._appendElement(t,T.HTML),t.ackSelfClosing=!0}function Ac(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._appendElement(t,T.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function kc(e,t){t.tagName=p.IMG,t.tagID=a.IMG,cn(e,t)}function vc(e,t){e._insertElement(t,T.HTML),e.skipNextNewLine=!0,e.tokenizer.state=ne.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=d.TEXT}function yc(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,ne.RAWTEXT)}function Ic(e,t){e.framesetOk=!1,e._switchToTextParsing(t,ne.RAWTEXT)}function ai(e,t){e._switchToTextParsing(t,ne.RAWTEXT)}function Cc(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,T.HTML),e.framesetOk=!1,e.insertionMode=e.insertionMode===d.IN_TABLE||e.insertionMode===d.IN_CAPTION||e.insertionMode===d.IN_TABLE_BODY||e.insertionMode===d.IN_ROW||e.insertionMode===d.IN_CELL?d.IN_SELECT_IN_TABLE:d.IN_SELECT}function Nc(e,t){e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,T.HTML)}function xc(e,t){e.openElements.hasInScope(a.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,T.HTML)}function Rc(e,t){e.openElements.hasInScope(a.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(a.RTC),e._insertElement(t,T.HTML)}function Dc(e,t){e._reconstructActiveFormattingElements(),sn(t),Ga(t),t.selfClosing?e._appendElement(t,T.MATHML):e._insertElement(t,T.MATHML),t.ackSelfClosing=!0}function Lc(e,t){e._reconstructActiveFormattingElements(),an(t),Ga(t),t.selfClosing?e._appendElement(t,T.SVG):e._insertElement(t,T.SVG),t.ackSelfClosing=!0}function ri(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,T.HTML)}function ee(e,t){switch(t.tagID){case a.I:case a.S:case a.B:case a.U:case a.EM:case a.TT:case a.BIG:case a.CODE:case a.FONT:case a.SMALL:case a.STRIKE:case a.STRONG:{bc(e,t);break}case a.A:{fc(e,t);break}case a.H1:case a.H2:case a.H3:case a.H4:case a.H5:case a.H6:{cc(e,t);break}case a.P:case a.DL:case a.OL:case a.UL:case a.DIV:case a.DIR:case a.NAV:case a.MAIN:case a.MENU:case a.ASIDE:case a.CENTER:case a.FIGURE:case a.FOOTER:case a.HEADER:case a.HGROUP:case a.DIALOG:case a.DETAILS:case a.ADDRESS:case a.ARTICLE:case a.SEARCH:case a.SECTION:case a.SUMMARY:case a.FIELDSET:case a.BLOCKQUOTE:case a.FIGCAPTION:{uc(e,t);break}case a.LI:case a.DD:case a.DT:{hc(e,t);break}case a.BR:case a.IMG:case a.WBR:case a.AREA:case a.EMBED:case a.KEYGEN:{cn(e,t);break}case a.HR:{Ac(e,t);break}case a.RB:case a.RTC:{xc(e,t);break}case a.RT:case a.RP:{Rc(e,t);break}case a.PRE:case a.LISTING:{dc(e,t);break}case a.XMP:{yc(e,t);break}case a.SVG:{Lc(e,t);break}case a.HTML:{ic(e,t);break}case a.BASE:case a.LINK:case a.META:case a.STYLE:case a.TITLE:case a.SCRIPT:case a.BGSOUND:case a.BASEFONT:case a.TEMPLATE:{Ee(e,t);break}case a.BODY:{nc(e,t);break}case a.FORM:{lc(e,t);break}case a.NOBR:{gc(e,t);break}case a.MATH:{Dc(e,t);break}case a.TABLE:{Tc(e,t);break}case a.INPUT:{Sc(e,t);break}case a.PARAM:case a.TRACK:case a.SOURCE:{_c(e,t);break}case a.IMAGE:{kc(e,t);break}case a.BUTTON:{mc(e,t);break}case a.APPLET:case a.OBJECT:case a.MARQUEE:{Ec(e,t);break}case a.IFRAME:{Ic(e,t);break}case a.SELECT:{Cc(e,t);break}case a.OPTION:case a.OPTGROUP:{Nc(e,t);break}case a.NOEMBED:case a.NOFRAMES:{ai(e,t);break}case a.FRAMESET:{oc(e,t);break}case a.TEXTAREA:{vc(e,t);break}case a.NOSCRIPT:{e.options.scriptingEnabled?ai(e,t):ri(e,t);break}case a.PLAINTEXT:{pc(e,t);break}case a.COL:case a.TH:case a.TD:case a.TR:case a.HEAD:case a.FRAME:case a.TBODY:case a.TFOOT:case a.THEAD:case a.CAPTION:case a.COLGROUP:break;default:ri(e,t)}}function Oc(e,t){if(e.openElements.hasInScope(a.BODY)&&(e.insertionMode=d.AFTER_BODY,e.options.sourceCodeLocationInfo)){const s=e.openElements.tryPeekProperlyNestedBodyElement();s&&e._setEndLocation(s,t)}}function wc(e,t){e.openElements.hasInScope(a.BODY)&&(e.insertionMode=d.AFTER_BODY,Sn(e,t))}function Pc(e,t){const s=t.tagID;e.openElements.hasInScope(s)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(s))}function Mc(e){const t=e.openElements.tmplCount>0,{formElement:s}=e;t||(e.formElement=null),(s||t)&&e.openElements.hasInScope(a.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(a.FORM):s&&e.openElements.remove(s))}function Hc(e){e.openElements.hasInButtonScope(a.P)||e._insertFakeElement(p.P,a.P),e._closePElement()}function Bc(e){e.openElements.hasInListItemScope(a.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(a.LI),e.openElements.popUntilTagNamePopped(a.LI))}function Fc(e,t){const s=t.tagID;e.openElements.hasInScope(s)&&(e.openElements.generateImpliedEndTagsWithExclusion(s),e.openElements.popUntilTagNamePopped(s))}function Uc(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function $c(e,t){const s=t.tagID;e.openElements.hasInScope(s)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(s),e.activeFormattingElements.clearToLastMarker())}function zc(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(p.BR,a.BR),e.openElements.pop(),e.framesetOk=!1}function ln(e,t){const s=t.tagName,r=t.tagID;for(let i=e.openElements.stackTop;i>0;i--){const n=e.openElements.items[i],u=e.openElements.tagIDs[i];if(r===u&&(r!==a.UNKNOWN||e.treeAdapter.getTagName(n)===s)){e.openElements.generateImpliedEndTagsWithExclusion(r),e.openElements.stackTop>=i&&e.openElements.shortenToLength(i);break}if(e._isSpecialElement(n,u))break}}function Ms(e,t){switch(t.tagID){case a.A:case a.B:case a.I:case a.S:case a.U:case a.EM:case a.TT:case a.BIG:case a.CODE:case a.FONT:case a.NOBR:case a.SMALL:case a.STRIKE:case a.STRONG:{Va(e,t);break}case a.P:{Hc(e);break}case a.DL:case a.UL:case a.OL:case a.DIR:case a.DIV:case a.NAV:case a.PRE:case a.MAIN:case a.MENU:case a.ASIDE:case a.BUTTON:case a.CENTER:case a.FIGURE:case a.FOOTER:case a.HEADER:case a.HGROUP:case a.DIALOG:case a.ADDRESS:case a.ARTICLE:case a.DETAILS:case a.SEARCH:case a.SECTION:case a.SUMMARY:case a.LISTING:case a.FIELDSET:case a.BLOCKQUOTE:case a.FIGCAPTION:{Pc(e,t);break}case a.LI:{Bc(e);break}case a.DD:case a.DT:{Fc(e,t);break}case a.H1:case a.H2:case a.H3:case a.H4:case a.H5:case a.H6:{Uc(e);break}case a.BR:{zc(e);break}case a.BODY:{Oc(e,t);break}case a.HTML:{wc(e,t);break}case a.FORM:{Mc(e);break}case a.APPLET:case a.OBJECT:case a.MARQUEE:{$c(e,t);break}case a.TEMPLATE:{it(e,t);break}default:ln(e,t)}}function hn(e,t){e.tmplInsertionModeStack.length>0?Tn(e,t):Qa(e,t)}function jc(e,t){var s;t.tagID===a.SCRIPT&&((s=e.scriptHandler)===null||s===void 0||s.call(e,e.openElements.current)),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function Yc(e,t){e._err(t,f.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e.onEof(t)}function Vs(e,t){if(e.openElements.currentTagId!==void 0&&rn.has(e.openElements.currentTagId))switch(e.pendingCharacterTokens.length=0,e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=d.IN_TABLE_TEXT,t.type){case L.CHARACTER:{mn(e,t);break}case L.WHITESPACE_CHARACTER:{pn(e,t);break}}else as(e,t)}function Kc(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,T.HTML),e.insertionMode=d.IN_CAPTION}function Wc(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,T.HTML),e.insertionMode=d.IN_COLUMN_GROUP}function qc(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(p.COLGROUP,a.COLGROUP),e.insertionMode=d.IN_COLUMN_GROUP,Xa(e,t)}function Gc(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,T.HTML),e.insertionMode=d.IN_TABLE_BODY}function Vc(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(p.TBODY,a.TBODY),e.insertionMode=d.IN_TABLE_BODY,Hs(e,t)}function Qc(e,t){e.openElements.hasInTableScope(a.TABLE)&&(e.openElements.popUntilTagNamePopped(a.TABLE),e._resetInsertionMode(),e._processStartTag(t))}function Xc(e,t){dn(t)?e._appendElement(t,T.HTML):as(e,t),t.ackSelfClosing=!0}function Jc(e,t){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(t,T.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function Tt(e,t){switch(t.tagID){case a.TD:case a.TH:case a.TR:{Vc(e,t);break}case a.STYLE:case a.SCRIPT:case a.TEMPLATE:{Ee(e,t);break}case a.COL:{qc(e,t);break}case a.FORM:{Jc(e,t);break}case a.TABLE:{Qc(e,t);break}case a.TBODY:case a.TFOOT:case a.THEAD:{Gc(e,t);break}case a.INPUT:{Xc(e,t);break}case a.CAPTION:{Kc(e,t);break}case a.COLGROUP:{Wc(e,t);break}default:as(e,t)}}function Wt(e,t){switch(t.tagID){case a.TABLE:{e.openElements.hasInTableScope(a.TABLE)&&(e.openElements.popUntilTagNamePopped(a.TABLE),e._resetInsertionMode());break}case a.TEMPLATE:{it(e,t);break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:case a.TBODY:case a.TD:case a.TFOOT:case a.TH:case a.THEAD:case a.TR:break;default:as(e,t)}}function as(e,t){const s=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,Ps(e,t),e.fosterParentingEnabled=s}function pn(e,t){e.pendingCharacterTokens.push(t)}function mn(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0}function Rt(e,t){let s=0;if(e.hasNonWhitespacePendingCharacterToken)for(;s<e.pendingCharacterTokens.length;s++)as(e,e.pendingCharacterTokens[s]);else for(;s<e.pendingCharacterTokens.length;s++)e._insertCharacters(e.pendingCharacterTokens[s]);e.insertionMode=e.originalInsertionMode,e._processToken(t)}const fn=new Set([a.CAPTION,a.COL,a.COLGROUP,a.TBODY,a.TD,a.TFOOT,a.TH,a.THEAD,a.TR]);function Zc(e,t){const s=t.tagID;fn.has(s)?e.openElements.hasInTableScope(a.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(a.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=d.IN_TABLE,Tt(e,t)):ee(e,t)}function ed(e,t){const s=t.tagID;switch(s){case a.CAPTION:case a.TABLE:{e.openElements.hasInTableScope(a.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(a.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=d.IN_TABLE,s===a.TABLE&&Wt(e,t));break}case a.BODY:case a.COL:case a.COLGROUP:case a.HTML:case a.TBODY:case a.TD:case a.TFOOT:case a.TH:case a.THEAD:case a.TR:break;default:Ms(e,t)}}function Xa(e,t){switch(t.tagID){case a.HTML:{ee(e,t);break}case a.COL:{e._appendElement(t,T.HTML),t.ackSelfClosing=!0;break}case a.TEMPLATE:{Ee(e,t);break}default:As(e,t)}}function td(e,t){switch(t.tagID){case a.COLGROUP:{e.openElements.currentTagId===a.COLGROUP&&(e.openElements.pop(),e.insertionMode=d.IN_TABLE);break}case a.TEMPLATE:{it(e,t);break}case a.COL:break;default:As(e,t)}}function As(e,t){e.openElements.currentTagId===a.COLGROUP&&(e.openElements.pop(),e.insertionMode=d.IN_TABLE,e._processToken(t))}function Hs(e,t){switch(t.tagID){case a.TR:{e.openElements.clearBackToTableBodyContext(),e._insertElement(t,T.HTML),e.insertionMode=d.IN_ROW;break}case a.TH:case a.TD:{e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(p.TR,a.TR),e.insertionMode=d.IN_ROW,Bs(e,t);break}case a.CAPTION:case a.COL:case a.COLGROUP:case a.TBODY:case a.TFOOT:case a.THEAD:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=d.IN_TABLE,Tt(e,t));break}default:Tt(e,t)}}function ra(e,t){const s=t.tagID;switch(t.tagID){case a.TBODY:case a.TFOOT:case a.THEAD:{e.openElements.hasInTableScope(s)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=d.IN_TABLE);break}case a.TABLE:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=d.IN_TABLE,Wt(e,t));break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:case a.TD:case a.TH:case a.TR:break;default:Wt(e,t)}}function Bs(e,t){switch(t.tagID){case a.TH:case a.TD:{e.openElements.clearBackToTableRowContext(),e._insertElement(t,T.HTML),e.insertionMode=d.IN_CELL,e.activeFormattingElements.insertMarker();break}case a.CAPTION:case a.COL:case a.COLGROUP:case a.TBODY:case a.TFOOT:case a.THEAD:case a.TR:{e.openElements.hasInTableScope(a.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=d.IN_TABLE_BODY,Hs(e,t));break}default:Tt(e,t)}}function bn(e,t){switch(t.tagID){case a.TR:{e.openElements.hasInTableScope(a.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=d.IN_TABLE_BODY);break}case a.TABLE:{e.openElements.hasInTableScope(a.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=d.IN_TABLE_BODY,ra(e,t));break}case a.TBODY:case a.TFOOT:case a.THEAD:{(e.openElements.hasInTableScope(t.tagID)||e.openElements.hasInTableScope(a.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=d.IN_TABLE_BODY,ra(e,t));break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:case a.TD:case a.TH:break;default:Wt(e,t)}}function sd(e,t){const s=t.tagID;fn.has(s)?(e.openElements.hasInTableScope(a.TD)||e.openElements.hasInTableScope(a.TH))&&(e._closeTableCell(),Bs(e,t)):ee(e,t)}function ad(e,t){const s=t.tagID;switch(s){case a.TD:case a.TH:{e.openElements.hasInTableScope(s)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(s),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=d.IN_ROW);break}case a.TABLE:case a.TBODY:case a.TFOOT:case a.THEAD:case a.TR:{e.openElements.hasInTableScope(s)&&(e._closeTableCell(),bn(e,t));break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:break;default:Ms(e,t)}}function gn(e,t){switch(t.tagID){case a.HTML:{ee(e,t);break}case a.OPTION:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e._insertElement(t,T.HTML);break}case a.OPTGROUP:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e.openElements.currentTagId===a.OPTGROUP&&e.openElements.pop(),e._insertElement(t,T.HTML);break}case a.HR:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e.openElements.currentTagId===a.OPTGROUP&&e.openElements.pop(),e._appendElement(t,T.HTML),t.ackSelfClosing=!0;break}case a.INPUT:case a.KEYGEN:case a.TEXTAREA:case a.SELECT:{e.openElements.hasInSelectScope(a.SELECT)&&(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode(),t.tagID!==a.SELECT&&e._processStartTag(t));break}case a.SCRIPT:case a.TEMPLATE:{Ee(e,t);break}}}function En(e,t){switch(t.tagID){case a.OPTGROUP:{e.openElements.stackTop>0&&e.openElements.currentTagId===a.OPTION&&e.openElements.tagIDs[e.openElements.stackTop-1]===a.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagId===a.OPTGROUP&&e.openElements.pop();break}case a.OPTION:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop();break}case a.SELECT:{e.openElements.hasInSelectScope(a.SELECT)&&(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode());break}case a.TEMPLATE:{it(e,t);break}}}function rd(e,t){const s=t.tagID;s===a.CAPTION||s===a.TABLE||s===a.TBODY||s===a.TFOOT||s===a.THEAD||s===a.TR||s===a.TD||s===a.TH?(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode(),e._processStartTag(t)):gn(e,t)}function id(e,t){const s=t.tagID;s===a.CAPTION||s===a.TABLE||s===a.TBODY||s===a.TFOOT||s===a.THEAD||s===a.TR||s===a.TD||s===a.TH?e.openElements.hasInTableScope(s)&&(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode(),e.onEndTag(t)):En(e,t)}function nd(e,t){switch(t.tagID){case a.BASE:case a.BASEFONT:case a.BGSOUND:case a.LINK:case a.META:case a.NOFRAMES:case a.SCRIPT:case a.STYLE:case a.TEMPLATE:case a.TITLE:{Ee(e,t);break}case a.CAPTION:case a.COLGROUP:case a.TBODY:case a.TFOOT:case a.THEAD:{e.tmplInsertionModeStack[0]=d.IN_TABLE,e.insertionMode=d.IN_TABLE,Tt(e,t);break}case a.COL:{e.tmplInsertionModeStack[0]=d.IN_COLUMN_GROUP,e.insertionMode=d.IN_COLUMN_GROUP,Xa(e,t);break}case a.TR:{e.tmplInsertionModeStack[0]=d.IN_TABLE_BODY,e.insertionMode=d.IN_TABLE_BODY,Hs(e,t);break}case a.TD:case a.TH:{e.tmplInsertionModeStack[0]=d.IN_ROW,e.insertionMode=d.IN_ROW,Bs(e,t);break}default:e.tmplInsertionModeStack[0]=d.IN_BODY,e.insertionMode=d.IN_BODY,ee(e,t)}}function od(e,t){t.tagID===a.TEMPLATE&&it(e,t)}function Tn(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(a.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode(),e.onEof(t)):Qa(e,t)}function ud(e,t){t.tagID===a.HTML?ee(e,t):ks(e,t)}function Sn(e,t){var s;if(t.tagID===a.HTML){if(e.fragmentContext||(e.insertionMode=d.AFTER_AFTER_BODY),e.options.sourceCodeLocationInfo&&e.openElements.tagIDs[0]===a.HTML){e._setEndLocation(e.openElements.items[0],t);const r=e.openElements.items[1];r&&!(!((s=e.treeAdapter.getNodeSourceCodeLocation(r))===null||s===void 0)&&s.endTag)&&e._setEndLocation(r,t)}}else ks(e,t)}function ks(e,t){e.insertionMode=d.IN_BODY,Ps(e,t)}function cd(e,t){switch(t.tagID){case a.HTML:{ee(e,t);break}case a.FRAMESET:{e._insertElement(t,T.HTML);break}case a.FRAME:{e._appendElement(t,T.HTML),t.ackSelfClosing=!0;break}case a.NOFRAMES:{Ee(e,t);break}}}function dd(e,t){t.tagID===a.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagId!==a.FRAMESET&&(e.insertionMode=d.AFTER_FRAMESET))}function ld(e,t){switch(t.tagID){case a.HTML:{ee(e,t);break}case a.NOFRAMES:{Ee(e,t);break}}}function hd(e,t){t.tagID===a.HTML&&(e.insertionMode=d.AFTER_AFTER_FRAMESET)}function pd(e,t){t.tagID===a.HTML?ee(e,t):bs(e,t)}function bs(e,t){e.insertionMode=d.IN_BODY,Ps(e,t)}function md(e,t){switch(t.tagID){case a.HTML:{ee(e,t);break}case a.NOFRAMES:{Ee(e,t);break}}}function fd(e,t){t.chars=$,e._insertCharacters(t)}function bd(e,t){e._insertCharacters(t),e.framesetOk=!1}function _n(e){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==T.HTML&&e.openElements.currentTagId!==void 0&&!e._isIntegrationPoint(e.openElements.currentTagId,e.openElements.current);)e.openElements.pop()}function gd(e,t){if(Lu(t))_n(e),e._startTagOutsideForeignContent(t);else{const s=e._getAdjustedCurrentElement(),r=e.treeAdapter.getNamespaceURI(s);r===T.MATHML?sn(t):r===T.SVG&&(Ou(t),an(t)),Ga(t),t.selfClosing?e._appendElement(t,r):e._insertElement(t,r),t.ackSelfClosing=!0}}function Ed(e,t){if(t.tagID===a.P||t.tagID===a.BR){_n(e),e._endTagOutsideForeignContent(t);return}for(let s=e.openElements.stackTop;s>0;s--){const r=e.openElements.items[s];if(e.treeAdapter.getNamespaceURI(r)===T.HTML){e._endTagOutsideForeignContent(t);break}const i=e.treeAdapter.getTagName(r);if(i.toLowerCase()===t.tagName){t.tagName=i,e.openElements.shortenToLength(s);break}}}p.AREA,p.BASE,p.BASEFONT,p.BGSOUND,p.BR,p.COL,p.EMBED,p.FRAME,p.HR,p.IMG,p.INPUT,p.KEYGEN,p.LINK,p.META,p.PARAM,p.SOURCE,p.TRACK,p.WBR;function Td(e,t){return nn.parse(e,t)}function Sd(e,t,s){typeof e=="string"&&(s=t,t=e,e=null);const r=nn.getFragmentParser(e,s);return r.tokenizer.write(t,!0),r.getFragment()}T.HTML,T.XML,T.MATHML,T.SVG,T.XLINK,T.XMLNS;function An(e){return e.nodeName==="#document"}function kn(e){return e.nodeName==="#document-fragment"}function Ja(e){return e.nodeName==="template"}const qe=oe.isElementNode,vn=oe.isCommentNode,_d=oe.isDocumentTypeNode,yn=oe.isTextNode;function Ad(e){return An(e)||kn(e)||qe(e)||Ja(e)}oe.appendChild;function ia(e,t,s){if((typeof t["pre:node"]!="function"||t["pre:node"](e,s)!==!1)&&Ad(e))for(const i of e.childNodes)ia(i,t,e);typeof t.node=="function"&&t.node(e,s),typeof t.document=="function"&&An(e)&&t.document(e),typeof t.documentFragment=="function"&&kn(e)&&t.documentFragment(e,s),typeof t.element=="function"&&qe(e)&&t.element(e,s),typeof t.template=="function"&&Ja(e)&&t.template(e,s),typeof t.comment=="function"&&vn(e)&&t.comment(e,s),typeof t.text=="function"&&yn(e)&&t.text(e,s),typeof t.documentType=="function"&&_d(e)&&t.documentType(e,s)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class kd extends Ki{render(){}update(t){const s=t.parentNode;if(typeof s.renderLight=="function")return s.renderLight()}}kd.t=!0;const vd=e=>{var t;return(t=Wi(e))==null?void 0:t.t};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yd=[["accept",["input"]],[["accept-charset","acceptCharset"],["form"]],[["accesskey","accessKey"],["*"]],["action",["form"]],["align",["caption","col","colgroup","hr","iframe","img","table","tbody","td","tfoot","th","thead","tr"]],["allow",["iframe"]],["alt",["area","img","input"]],["async",["script"]],["autocapitalize",["*"]],["autocomplete",["form","input","select","textarea"]],["autofocus",["button","input","keygen","select","textarea"]],["autoplay",["audio","video"]],["background",["body"]],[["bgcolor","bgColor"],["body","marquee","table","td","th","tr"]],["border",["img","object","table"]],["buffered",[]],["capture",[]],["challenge",[]],["charset",["script"]],["checked",["input"]],["cite",["blockquote","del","ins","q"]],[["class","className"],["*"]],["code",[]],["codebase",[]],["color",["font","hr"]],["cols",["textarea"]],[["colspan","colSpan"],["td","th"]],["content",["meta"]],[["contenteditable","contentEditable"],["*"]],[["contextmenu"],[]],["controls",["audio","video"]],["coords",["area"]],[["crossorigin","crossOrigin"],["audio","img","link","script","video"]],["csp",["iframe"]],["data",["object"]],[["datetime","dateTime"],["del","ins","time"]],["decoding",["img"]],["default",["track"]],["defer",["script"]],["dir",["*"]],[["dirname","dirName"],["input","textarea"]],["disabled",["button","fieldset","input","optgroup","option","select","textarea"]],["download",["a","area"]],["draggable",["*"]],["enctype",["form"]],[["enterkeyhint","enterKeyHint"],["textarea","contenteditable"]],["for",[]],["form",[]],[["formaction","formAction"],["input","button"]],[["formenctype","formEnctype"],["button","input"]],[["formmethod","formMethod"],["button","input"]],[["formnovalidate","formNoValidate"],["button","input"]],[["formtarget","formTarget"],["button","input"]],["headers",["td","th"]],["height",["canvas","embed","iframe","img","input","object","video"]],["hidden",["*"]],["high",["meter"]],["href",["a","area","base","link"]],["hreflang",["a","link"]],[["http-equiv","httpEquiv"],["meta"]],["icon",[]],["id",["*"]],["importance",[]],["integrity",["link","script"]],["intrinsicsize",[]],[["inputmode","inputMode"],["textarea","contenteditable"]],[["ismap","isMap"],["img"]],["itemprop",[]],["keytype",[]],["kind",["track"]],["label",["optgroup","option","track"]],["lang",["*"]],["language",[]],["loading",["img","iframe"]],["list",[]],["loop",["audio","marquee","video"]],["low",["meter"]],["manifest",[]],["max",["input","meter","progress"]],[["maxlength","maxLength"],["input","textarea"]],[["minlength","minLength"],["input","textarea"]],["media",["link","source","style"]],["method",["form"]],["min",["input","meter"]],["multiple",["input","select"]],["muted",["audio","video"]],["name",["button","form","fieldset","iframe","input","object","output","select","textarea","map","meta","param"]],[["novalidate","noValidate"],["form"]],["open",["details"]],["optimum",["meter"]],["pattern",["input"]],["ping",["a","area"]],["placeholder",["input","textarea"]],["poster",["video"]],["preload",["audio","video"]],["radiogroup",[]],[["readonly","readOnly"],["input","textarea"]],[["referrerpolicy","referrerPolicy"],["a","area","iframe","img","link","script"]],["rel",["a","area","link"]],["required",["input","select","textarea"]],["reversed",["ol"]],["rows",["textarea"]],[["rowspan","rowSpan"],["td","th"]],["sandbox",["iframe"]],["scope",["th"]],["scoped",[]],["selected",["option"]],["shape",["a","area"]],["size",["input","select"]],["sizes",["link","img","source"]],["slot",["*"]],["span",["col","colgroup"]],["spellcheck",["*"]],["src",["audio","embed","iframe","img","input","script","source","track","video"]],["srcdoc",["iframe"]],["srclang",["track"]],["srcset",["img","source"]],["start",["ol"]],["step",["input"]],["style",["*"]],["summary",["table"]],[["tabindex","tabIndex"],["*"]],["target",["a","area","base","form"]],["title",["*"]],["translate",[]],["type",["button","input","embed","object","script","source","style"]],[["usemap","useMap"],["img","input","object"]],["value",["button","data","input","li","meter","option","progress","param"]],["width",["canvas","embed","iframe","img","input","object","video"]],["wrap",["textarea"]]],zt=new Map,ii=(e,t,s)=>{zt.has(e)?zt.get(e).set(s,t):zt.set(e,new Map([[s,t]]))};for(const[e,t]of yd)for(let s of t)s=s.toUpperCase(),e instanceof Array?ii(s,e[0],e[1]):ii(s,e,e);const Id=(e,t)=>{const s=zt.get(e);return s!==void 0&&s.has(t)?s.get(t):zt.get("*").get(t)};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cd=1,vs=e=>e._$litServerRenderMode!==Cd,{getTemplateHtml:Nd,marker:Qs,markerMatch:xd,boundAttributeSuffix:ni,patchDirectiveResolve:Rd,getAttributePartCommittedValue:Dd,resolveDirective:Ld,AttributePart:Od,PropertyPart:wd,BooleanAttributePart:Pd,EventPart:Md,connectedDisconnectable:In,isIterable:Hd}=jo;function Bd(e,t){return ys(this.render(...t))}const ys=e=>{const t=Wi(e);return t!==void 0&&Rd(t,Bd),e},Fd=(e,t,s)=>{if(e.strings!==void 0)for(let r=0;r<e.strings.length-1;r++)ys(t[s+r]);else ys(t)},oi=new WeakMap,ls=new WeakMap;class Ud extends Yi{get localName(){return"slot"}}const $d=/^(\s|<!--[^(-->)]*-->)*(<(!doctype|html|head|body))/i,zd=e=>{const t=oi.get(e.strings);if(t!==void 0)return t;const[s,r]=Nd(e.strings,$o.HTML),i=vs(e),n=String(s),h=(!i&&$d.test(n)?Td:Sd)(n,{sourceCodeLocationInfo:!0}),l=[];let m=0,g=0;const E=A=>{if(m===void 0)throw new Error("lastOffset is undefined");if(A<m)throw new Error(`offset must be greater than lastOffset.
        offset: ${A}
        lastOffset: ${m}
      `);m=A},_=A=>{const H=de(l);H!==void 0&&H.type==="text"?H.value+=A:l.push({type:"text",value:A})},k=A=>{if(m===void 0)throw new Error("lastOffset is undefined");const H=m;m=A;const R=String(s).substring(H,A);_(R)};let I=0;return ia(h,{"pre:node"(A,H){var R,O;if(vn(A))A.data===xd&&(k(A.sourceCodeLocation.startOffset),E(A.sourceCodeLocation.endOffset),l.push({type:"child-part",index:I,useCustomElementInstance:H&&qe(H)&&H.isDefinedCustomElement})),I++;else if(qe(A)){let K=0;const te=A.tagName;if(A.parentNode&&qe(A.parentNode)&&A.parentNode.isDefinedCustomElement&&l.push({type:"slotted-element-open",name:(R=A.attrs.find(G=>G.name==="slot"))==null?void 0:R.value}),te.indexOf("-")!==-1){const G=customElements.get(te);G!==void 0&&(A.isDefinedCustomElement=!0,l.push({type:"custom-element-open",tagName:te,ctor:G,staticAttributes:new Map(A.attrs.filter(Y=>!Y.name.endsWith(ni)).map(Y=>[Y.name,Y.value]))}))}else te==="slot"&&l.push({type:"slot-element-open",name:(O=A.attrs.find(G=>G.name==="name"))==null?void 0:O.value});const St=A.attrs.map(G=>{const Y=G.name.endsWith(ni),pe=G.name.startsWith(Qs);return(Y||pe)&&(K+=1),[Y,pe,G]});(K>0||A.isDefinedCustomElement)&&(k(A.sourceCodeLocation.startTag.startOffset),l.push({type:"possible-node-marker",boundAttributesCount:K,nodeIndex:I}));for(const[G,Y,pe]of St)if(G||Y){const ue=pe.value.split(Qs),Te=A.sourceCodeLocation.attrs[pe.name],se=Te.startOffset,Re=Te.endOffset;if(k(se),G){const _t=r[g++],[,ce,$e]=/([.?@])?(.*)/.exec(_t);if(!i){if(ce===".")throw new Error("Server-only templates can't bind to properties. Bind to attributes instead, as they can be serialized when the template is rendered and sent to the browser.");if(ce==="@")throw new Error("Server-only templates can't bind to events. There's no way to serialize an event listener when generating HTML and sending it to the browser.")}l.push({type:"attribute-part",index:I,name:$e,ctor:ce==="."?wd:ce==="?"?Pd:ce==="@"?Md:Od,strings:ue,tagName:te.toUpperCase(),useCustomElementInstance:A.isDefinedCustomElement})}else{if(!i)throw new Error(`Server-only templates don't support element parts, as their API does not currently give them any way to render anything on the server. Found in template:
    ${lt(e)}`);l.push({type:"element-part",index:I})}E(Re)}else if(A.isDefinedCustomElement){const ue=A.sourceCodeLocation.attrs[pe.name];k(ue.startOffset),E(ue.endOffset)}if(A.isDefinedCustomElement)k(A.sourceCodeLocation.startTag.endOffset-1),l.push({type:"custom-element-attributes"}),_(">"),E(A.sourceCodeLocation.startTag.endOffset),l.push({type:"custom-element-shadow"});else if(!i&&/^(title|textarea|script|style)$/.test(A.tagName)){const G=Gd(A);for(const Y of A.childNodes){if(!yn(Y))throw new Error(`Internal error: Unexpected child node inside raw text node, a ${A.tagName} should only contain text nodes, but found a ${A.nodeName} (tagname: ${A.tagName})`);const pe=Y.value,ue=Y.sourceCodeLocation.startOffset;k(ue);const Te=new RegExp(Qs.replace(/\$/g,"\\$"),"g");for(const se of pe.matchAll(Te)){if(k(ue+se.index),G)throw new Error(`Found binding inside an executable <script> tag in a server-only template. For security reasons, this is not supported, as it could allow an attacker to execute arbitrary JavaScript. If you do need to create a script element with dynamic contents, you can use the unsafeHTML directive to make one, as that way the code is clearly marked as unsafe and needing careful handling. The template with the dangerous binding is:

    ${lt(e)}`);if(A.tagName==="style")throw new Error(`Found binding inside a <style> tag in a server-only template. For security reasons, this is not supported, as it could allow an attacker to exfiltrate information from the page. If you do need to create a style element with dynamic contents, you can use the unsafeHTML directive to make one, as that way the code is clearly marked as unsafe and needing careful handling. The template with the dangerous binding is:

    ${lt(e)}`);l.push({type:"child-part",index:I,useCustomElementInstance:!1}),E(ue+se.index+se[0].length)}k(ue+pe.length)}}else!i&&Ja(A)&&ia(A.content,this,A);I++}},node(A){qe(A)&&(A.isDefinedCustomElement?l.push({type:"custom-element-close"}):A.tagName==="slot"&&l.push({type:"slot-element-close"}),A.parentNode&&qe(A.parentNode)&&A.parentNode.isDefinedCustomElement&&l.push({type:"slotted-element-close"}))}}),k(),oi.set(e.strings,l),l};function*qt(e,t,s=!0){if(t.customElementHostStack.length===0){const r=t.eventTargetStack[0];r!==litServerRoot&&(t.eventTargetStack.unshift(litServerRoot),r&&(r.__eventTargetParent=r))}if(ys(e),vd(e)){const r=de(t.customElementInstanceStack);if(r!==void 0){const i=r.renderLight(t);i!==void 0&&(yield*i)}e=null}else e=Ld(In({type:Mt.CHILD}),e);if(e!=null&&qa(e))s&&(yield`<!--lit-part ${Yo(e)}-->`),yield*jd(e,t),s&&(yield"<!--/lit-part-->");else{if(s&&(yield"<!--lit-part-->"),!(e==null||e===z||e===ge))if(!Uo(e)&&Hd(e))for(const r of e)yield*qt(r,t,s);else yield es(String(e));s&&(yield"<!--/lit-part-->")}}function*jd(e,t){var n,u,h,l,m;const s=vs(e),r=zd(e);let i=0;for(const g of r)switch(g.type){case"text":yield g.value;break;case"child-part":{const E=e.values[i++];let _=s;if(qa(E)&&(_=vs(E),!_&&s))throw new Error(`A server-only template can't be rendered inside an ordinary, hydratable template. A server-only template can only be rendered at the top level, or within other server-only templates. The outer template was:
    ${lt(e)}

And the inner template was:
    ${lt(E)}
              `);yield*qt(E,t,_);break}case"attribute-part":{const E=g.strings,_=new g.ctor({tagName:g.tagName},g.name,E,In(),{}),k=_.strings===void 0?e.values[i]:e.values;Fd(_,k,i);let I=ge;if(_.type!==Mt.EVENT&&(I=Dd(_,k,i)),I!==ge){const A=g.useCustomElementInstance?de(t.customElementInstanceStack):void 0;_.type===Mt.PROPERTY?yield*Kd(A,g,I):_.type===Mt.BOOLEAN_ATTRIBUTE?yield*Wd(A,g,I):yield*qd(A,g,I)}i+=E.length-1;break}case"element-part":{i++;break}case"custom-element-open":{const E=mo(t,g.tagName,g.ctor,g.staticAttributes);if(E.element){const _=de(t.eventTargetStack),k=de(t.slotStack);E.element.__eventTargetParent=((n=ls.get(_))==null?void 0:n.get(k))??_,E.element.__host=(u=de(t.customElementHostStack))==null?void 0:u.element,t.eventTargetStack.push(E.element)}for(const[_,k]of g.staticAttributes)E.setAttribute(_,k);t.customElementInstanceStack.push(E),(h=t.customElementRendered)==null||h.call(t,g.tagName);break}case"custom-element-attributes":{const E=de(t.customElementInstanceStack);if(E===void 0)throw new Error(`Internal error: ${g.type} outside of custom element context`);E.connectedCallback&&E.connectedCallback(),yield*E.renderAttributes(),(t.deferHydration||t.customElementHostStack.length>0)&&(yield" defer-hydration");break}case"possible-node-marker":{(g.boundAttributesCount>0||t.customElementHostStack.length>0)&&s&&(yield`<!--lit-node ${g.nodeIndex}-->`);break}case"custom-element-shadow":{const E=de(t.customElementInstanceStack);if(E===void 0)throw new Error(`Internal error: ${g.type} outside of custom element context`);t.customElementHostStack.push(E);const _=E.renderShadow(t);if(_!==void 0){const{mode:k="open",delegatesFocus:I}=E.shadowRootOptions??{};yield`<template shadowroot="${k}" shadowrootmode="${k}"${I?" shadowrootdelegatesfocus":""}>`,yield*_,yield"</template>"}t.customElementHostStack.pop();break}case"custom-element-close":t.customElementInstanceStack.pop(),t.eventTargetStack.pop();break;case"slot-element-open":{const E=de(t.customElementHostStack);if(E===void 0)throw new Error(`Internal error: ${g.type} outside of custom element context`);if(E.element){let _=ls.get(E.element);if(_===void 0&&(_=new Map,ls.set(E.element,_)),!_.has(g.name)){const k=new Ud;k.name=g.name??"";const I=de(t.eventTargetStack),A=de(t.slotStack);k.__eventTargetParent=((l=ls.get(I))==null?void 0:l.get(A))??I,k.__host=(m=de(t.customElementHostStack))==null?void 0:m.element,_.set(g.name,k),t.eventTargetStack.push(k)}}break}case"slot-element-close":t.eventTargetStack.pop();break;case"slotted-element-open":t.slotStack.push(g.name);break;case"slotted-element-close":t.slotStack.pop();break;default:throw new Error("internal error")}i!==e.values.length&&Yd(i,e)}function Yd(e,t){const s=`
    Unexpected final partIndex: ${e} !== ${t.values.length} while processing the following template:

    ${lt(t)}

    This could be because you're attempting to render an expression in an invalid location. See
    https://lit.dev/docs/templates/expressions/#invalid-locations for more information about invalid expression
    locations.
  `;throw new Error(s)}function*Kd(e,t,s){s=s===z?void 0:s;const r=Id(t.tagName,t.name);e!==void 0&&e.setProperty(t.name,s),r!==void 0&&(yield`${r}="${es(String(s))}"`)}function*Wd(e,t,s){s&&s!==z&&(e!==void 0?e.setAttribute(t.name,""):yield t.name)}function*qd(e,t,s){s!==z&&(e!==void 0?e.setAttribute(t.name,String(s??"")):yield`${t.name}="${es(String(s??""))}"`)}function lt(e){return zo(e)?e._$litType$.h.join("${...}"):e.strings.join("${...}")}const de=e=>e[e.length-1];function Gd(e){function t(i){return/script/i.test(i.tagName)}if(!t(e))return!1;let s=!1;for(const i of e.attrs)if(i.name==="type")switch(i.value){case null:case void 0:case"":case"module":case"text/javascript":case"application/javascript":case"application/ecmascript":case"application/x-ecmascript":case"application/x-javascript":case"text/ecmascript":case"text/javascript1.0":case"text/javascript1.1":case"text/javascript1.2":case"text/javascript1.3":case"text/javascript1.4":case"text/javascript1.5":case"text/jscript":case"text/livescript":case"text/x-ecmascript":case"text/x-javascript":return!0;default:s=!0}return!s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{attributeToProperty:Vd,changedProperties:Qd}=xo;x.prototype.createRenderRoot=function(){return this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions)};class Xd extends Oi{static matchesClass(t){return t._$litElement$}constructor(t){super(t),this.element=new(customElements.get(this.tagName));const s=this.element.__internals;if(s)for(const[r,i]of Object.entries(Ro)){const n=s[r];n&&!this.element.hasAttribute(i)&&(this.element.setAttribute(i,n),this.element.setAttribute(`${Lo}${i}`,n))}}get shadowRootOptions(){return this.element.constructor.shadowRootOptions??super.shadowRootOptions}connectedCallback(){var s;if(globalThis.litSsrCallConnectedCallback){this.element.enableUpdating=function(){};try{this.element.connectedCallback()}catch(r){const i=this.element.constructor.name;throw console.warn(`Calling ${i}.connectedCallback() resulted in a thrown error. Consider removing \`litSsrCallConnectedCallback\` to prevent calling connectedCallback or add isServer checks to your code to prevent calling browser API during SSR.`),r}}const t=Qd(this.element);(s=this.element)==null||s.willUpdate(t),We.prototype.update.call(this.element,t)}attributeChangedCallback(t,s,r){Vd(this.element,t,r)}*renderShadow(t){const s=this.element.constructor.elementStyles;if(s!==void 0&&s.length>0){yield"<style>";for(const r of s)yield r.cssText;yield"</style>"}yield*qt(this.element.render(),t)}*renderLight(t){var r;const s=(r=this.element)==null?void 0:r.renderLight();s?yield*qt(s,t):yield""}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Jd(e,t){t={...{elementRenderers:[Xd],customElementInstanceStack:[],customElementHostStack:[],eventTargetStack:[],slotStack:[],deferHydration:!1},...t};let r=!0;qa(e)&&(r=vs(e)),yield*qt(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class na extends Ki{constructor(t){if(super(t),this.it=z,t.type!==Mt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||t==null)return this._t=void 0,this.it=t;if(t===ge)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}na.directiveName="unsafeHTML",na.resultType=1;const Zd=Fo(na);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cn=async e=>{let t="";for(const s of e)t+=typeof s=="string"?s:await Cn(await s);return t};var el=({limitLength:e=255,headerName:t="X-Request-Id",generator:s=()=>crypto.randomUUID()}={})=>async function(i,n){let u=t?i.req.header(t):void 0;(!u||u.length>e||/[^\w\-=]/.test(u))&&(u=s(i)),i.set("requestId",u),t&&i.header(t,u),await n()};function tl(){const{process:e,Deno:t}=globalThis;return!(typeof(t==null?void 0:t.noColor)=="boolean"?t.noColor:e!==void 0?"NO_COLOR"in(e==null?void 0:e.env):!1)}async function sl(){const{navigator:e}=globalThis,t="cloudflare:workers";return!(e!==void 0&&e.userAgent==="Cloudflare-Workers"?await(async()=>{try{return"NO_COLOR"in((await import(t)).env??{})}catch{return!1}})():!tl())}var al=e=>{const[t,s]=[",","."];return e.map(i=>i.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+t)).join(s)},rl=e=>{const t=Date.now()-e;return al([t<1e3?t+"ms":Math.round(t/1e3)+"s"])},il=async e=>{if(await sl())switch(e/100|0){case 5:return`\x1B[31m${e}\x1B[0m`;case 4:return`\x1B[33m${e}\x1B[0m`;case 3:return`\x1B[36m${e}\x1B[0m`;case 2:return`\x1B[32m${e}\x1B[0m`}return`${e}`};async function ui(e,t,s,r,i=0,n){const u=t==="<--"?`${t} ${s} ${r}`:`${t} ${s} ${r} ${await il(i)} ${n}`;e(u)}var nl=(e=console.log)=>async function(s,r){const{method:i,url:n}=s.req,u=n.slice(n.indexOf("/",8));await ui(e,"<--",i,u);const h=Date.now();await r(),await ui(e,"-->",i,u,s.res.status,rl(h))},ol=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},r=(n=>typeof n=="string"?n==="*"?s.credentials?u=>u||null:()=>n:u=>n===u?u:null:typeof n=="function"?n:u=>n.includes(u)?u:null)(s.origin),i=(n=>typeof n=="function"?n:Array.isArray(n)?()=>n:()=>[])(s.allowMethods);return async function(u,h){var g;function l(E,_){u.res.headers.set(E,_)}const m=await r(u.req.header("origin")||"",u);if(m&&l("Access-Control-Allow-Origin",m),s.credentials&&l("Access-Control-Allow-Credentials","true"),(g=s.exposeHeaders)!=null&&g.length&&l("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),u.req.method==="OPTIONS"){(s.origin!=="*"||s.credentials)&&l("Vary","Origin"),s.maxAge!=null&&l("Access-Control-Max-Age",s.maxAge.toString());const E=await i(u.req.header("origin")||"",u);E.length&&l("Access-Control-Allow-Methods",E.join(","));let _=s.allowHeaders;if(!(_!=null&&_.length)){const k=u.req.header("Access-Control-Request-Headers");k&&(_=k.split(/\s*,\s*/))}return _!=null&&_.length&&(l("Access-Control-Allow-Headers",_.join(",")),u.res.headers.append("Vary","Access-Control-Request-Headers")),u.res.headers.delete("Content-Length"),u.res.headers.delete("Content-Type"),new Response(null,{headers:u.res.headers,status:204,statusText:"No Content"})}await h(),(s.origin!=="*"||s.credentials)&&u.header("Vary","Origin",{append:!0})}},ul={crossOriginEmbedderPolicy:["Cross-Origin-Embedder-Policy","require-corp"],crossOriginResourcePolicy:["Cross-Origin-Resource-Policy","same-origin"],crossOriginOpenerPolicy:["Cross-Origin-Opener-Policy","same-origin"],originAgentCluster:["Origin-Agent-Cluster","?1"],referrerPolicy:["Referrer-Policy","no-referrer"],strictTransportSecurity:["Strict-Transport-Security","max-age=15552000; includeSubDomains"],xContentTypeOptions:["X-Content-Type-Options","nosniff"],xDnsPrefetchControl:["X-DNS-Prefetch-Control","off"],xDownloadOptions:["X-Download-Options","noopen"],xFrameOptions:["X-Frame-Options","SAMEORIGIN"],xPermittedCrossDomainPolicies:["X-Permitted-Cross-Domain-Policies","none"],xXssProtection:["X-XSS-Protection","0"]},cl={crossOriginEmbedderPolicy:!1,crossOriginResourcePolicy:!0,crossOriginOpenerPolicy:!0,originAgentCluster:!0,referrerPolicy:!0,strictTransportSecurity:!0,xContentTypeOptions:!0,xDnsPrefetchControl:!0,xDownloadOptions:!0,xFrameOptions:!0,xPermittedCrossDomainPolicies:!0,xXssProtection:!0,removePoweredBy:!0,permissionsPolicy:{}},dl=e=>{const t={...cl,...e},s=ll(t),r=[];if(t.contentSecurityPolicy){const[i,n]=ci(t.contentSecurityPolicy);i&&r.push(i),s.push(["Content-Security-Policy",n])}if(t.contentSecurityPolicyReportOnly){const[i,n]=ci(t.contentSecurityPolicyReportOnly);i&&r.push(i),s.push(["Content-Security-Policy-Report-Only",n])}return t.permissionsPolicy&&Object.keys(t.permissionsPolicy).length>0&&s.push(["Permissions-Policy",hl(t.permissionsPolicy)]),t.reportingEndpoints&&s.push(["Reporting-Endpoints",ml(t.reportingEndpoints)]),t.reportTo&&s.push(["Report-To",fl(t.reportTo)]),async function(n,u){const h=r.length===0?s:r.reduce((l,m)=>m(n,l),s);await u(),bl(n,h),t!=null&&t.removePoweredBy&&n.res.headers.delete("X-Powered-By")}};function ll(e){return Object.entries(ul).filter(([t])=>e[t]).map(([t,s])=>{const r=e[t];return typeof r=="string"?[s[0],r]:s})}function ci(e){const t=[],s=[];for(const[r,i]of Object.entries(e)){const n=Array.isArray(i)?i:[i];n.forEach((u,h)=>{if(typeof u=="function"){const l=h*2+2+s.length;t.push((m,g)=>{g[l]=u(m,r)})}}),s.push(r.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(u,h)=>h?"-"+u.toLowerCase():u.toLowerCase()),...n.flatMap(u=>[" ",u]),"; ")}return s.pop(),t.length===0?[void 0,s.join("")]:[(r,i)=>i.map(n=>{if(n[0]==="Content-Security-Policy"||n[0]==="Content-Security-Policy-Report-Only"){const u=n[1].slice();return t.forEach(h=>{h(r,u)}),[n[0],u.join("")]}else return n}),s]}function hl(e){return Object.entries(e).map(([t,s])=>{const r=pl(t);if(typeof s=="boolean")return`${r}=${s?"*":"none"}`;if(Array.isArray(s)){if(s.length===0)return`${r}=()`;if(s.length===1&&(s[0]==="*"||s[0]==="none"))return`${r}=${s[0]}`;const i=s.map(n=>["self","src"].includes(n)?n:`"${n}"`);return`${r}=(${i.join(" ")})`}return""}).filter(Boolean).join(", ")}function pl(e){return e.replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()}function ml(e=[]){return e.map(t=>`${t.name}="${t.url}"`).join(", ")}function fl(e=[]){return e.map(t=>JSON.stringify(t)).join(", ")}function bl(e,t){t.forEach(([s,r])=>{e.res.headers.set(s,r)})}const rs=D`
  :host {
    /* === Spacing (from Open Props) === */
    --kiss-size-1: 0.25rem; /* 4px */
    --kiss-size-2: 0.375rem; /* 6px */
    --kiss-size-3: 0.5rem; /* 8px */
    --kiss-size-4: 0.75rem; /* 12px */
    --kiss-size-5: 1rem; /* 16px */
    --kiss-size-6: 1.25rem; /* 20px */
    --kiss-size-7: 1.5rem; /* 24px */
    --kiss-size-8: 2rem; /* 32px */
    --kiss-size-9: 2.5rem; /* 40px */
    --kiss-size-10: 3rem; /* 48px */

    /* === Border Radius (Swiss: minimal, 2-6px) === */
    --kiss-radius-sm: 2px;
    --kiss-radius-md: 4px;
    --kiss-radius-lg: 6px;

    /* === Typography === */
    --kiss-font-sans:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial,
      sans-serif;
    --kiss-font-mono: "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace;

    --kiss-font-size-xs: 0.6875rem; /* 11px */
    --kiss-font-size-sm: 0.75rem; /* 12px */
    --kiss-font-size-md: 0.875rem; /* 14px */
    --kiss-font-size-lg: 1rem; /* 16px */
    --kiss-font-size-xl: 1.125rem; /* 18px */
    --kiss-font-size-2xl: 1.25rem; /* 20px */
    --kiss-font-size-3xl: 1.5rem; /* 24px */

    --kiss-font-weight-normal: 400;
    --kiss-font-weight-medium: 500;
    --kiss-font-weight-semibold: 600;
    --kiss-font-weight-bold: 700;
    --kiss-font-weight-extrabold: 800;

    --kiss-line-height-tight: 1.2;
    --kiss-line-height-normal: 1.5;
    --kiss-line-height-relaxed: 1.7;

    --kiss-letter-spacing-tight: -0.03em;
    --kiss-letter-spacing-normal: 0;
    --kiss-letter-spacing-wide: 0.02em;
    --kiss-letter-spacing-wider: 0.05em;
    --kiss-letter-spacing-widest: 0.15em;

    /* === Transitions === */
    --kiss-transition-fast: 0.1s ease;
    --kiss-transition-normal: 0.15s ease;
    --kiss-transition-slow: 0.25s ease;

    /* === Shadows (subtle, Swiss restraint) === */
    --kiss-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
    --kiss-shadow-md: 0 2px 8px rgba(0, 0, 0, 0.15);
    --kiss-shadow-lg: 0 4px 24px rgba(0, 0, 0, 0.2);

    /* === Z-Index Scale === */
    --kiss-z-dropdown: 100;
    --kiss-z-sticky: 200;
    --kiss-z-fixed: 300;
    --kiss-z-modal-backdrop: 400;
    --kiss-z-modal: 500;
    --kiss-z-popover: 600;
    --kiss-z-tooltip: 700;
  }

  /* === Theme Colors (Dark by default, Light via data-theme) === */
  :host,
  :host([data-theme="dark"]) {
    --kiss-bg-base: #000;
    --kiss-bg-surface: #0a0a0a;
    --kiss-bg-elevated: #111;
    --kiss-bg-hover: #0e0e0e;
    --kiss-bg-card: #0a0a0a;

    --kiss-border: #1a1a1a;
    --kiss-border-hover: #333;

    --kiss-text-primary: #fff;
    --kiss-text-secondary: #999;
    --kiss-text-tertiary: #666;
    --kiss-text-muted: #444;

    --kiss-accent: #fff;
    --kiss-accent-dim: #ccc;
    --kiss-accent-subtle: rgba(255, 255, 255, 0.05);

    --kiss-code-bg: #111;
    --kiss-code-border: #1a1a1a;

    color-scheme: dark;
  }

  :host([data-theme="light"]) {
    --kiss-bg-base: #fff;
    --kiss-bg-surface: #fafafa;
    --kiss-bg-elevated: #f5f5f5;
    --kiss-bg-hover: #f0f0f0;
    --kiss-bg-card: #fff;

    --kiss-border: #e5e5e5;
    --kiss-border-hover: #ccc;

    --kiss-text-primary: #000;
    --kiss-text-secondary: #555;
    --kiss-text-tertiary: #888;
    --kiss-text-muted: #aaa;

    --kiss-accent: #000;
    --kiss-accent-dim: #333;
    --kiss-accent-subtle: rgba(0, 0, 0, 0.03);

    --kiss-code-bg: #f5f5f5;
    --kiss-code-border: #e5e5e5;

    color-scheme: light;
  }
`,gl="kiss-layout",Ns=class Ns extends x{constructor(){super(...arguments),this.home=!1,this.currentPath=""}_navLink(t,s){const r=this.currentPath===t;return C`
      <a
        href="${t}"
        class="${r?"active":""}"
        aria-current="${r?"page":void 0}"
      >${s}</a>
    `}render(){return C`
      <div class="app-layout" ?home="${this.home}">
        <header class="app-header">
          <div class="header-inner">
            <a class="logo" href="/">KISS<span class="logo-sub">framework</span></a>
            <nav class="header-nav">
              <a href="/guide/getting-started">Docs</a>
              <a href="/ui">UI</a>
              <a href="https://jsr.io/@kissjs/core">JSR</a>
            </nav>
            <div class="header-right">
              ${this.home?"":C`
                  <details class="mobile-menu">
                    <summary class="mobile-menu-btn" aria-label="Toggle navigation">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      >
                        <line x1="3" y1="4.5" x2="15" y2="4.5" />
                        <line x1="3" y1="9" x2="15" y2="9" />
                        <line x1="3" y1="13.5" x2="15" y2="13.5" />
                      </svg>
                    </summary>
                  </details>
                `}
              <kiss-theme-toggle></kiss-theme-toggle>
              <a class="github-link" href="https://github.com/SisyphusZheng/kiss">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
                <span class="github-text">GitHub</span>
              </a>
            </div>
          </div>
        </header>
        <div class="mobile-backdrop"></div>
        <div class="layout-body">
          ${this.home?"":C`
              <nav class="docs-sidebar" aria-label="Documentation navigation">
                <details class="nav-section" open>
                  <summary class="nav-section-title">Introduction</summary>
                  ${this._navLink("/guide/getting-started","Getting Started")} ${this._navLink("/guide/design-philosophy","Design Philosophy")} ${this._navLink("/guide/dia","KISS Architecture")}
                </details>
                <details class="nav-section" open>
                  <summary class="nav-section-title">Core</summary>
                  ${this._navLink("/guide/routing","Routing")} ${this._navLink("/guide/islands","Islands")} ${this._navLink("/guide/api-routes","API Routes")} ${this._navLink("/guide/api-design","API Design")} ${this._navLink("/guide/ssg","SSG")}
                </details>
                <details class="nav-section" open>
                  <summary class="nav-section-title">Guides</summary>
                  ${this._navLink("/guide/configuration","Configuration")} ${this._navLink("/guide/error-handling","Error Handling")} ${this._navLink("/guide/security-middleware","Security & Middleware")} ${this._navLink("/guide/testing","Testing")}
                </details>
                <details class="nav-section" open>
                  <summary class="nav-section-title">Reference</summary>
                  ${this._navLink("/guide/architecture","Architecture")} ${this._navLink("/guide/deployment","Deployment")} ${this._navLink("/styling/kiss-ui","@kissjs/ui")} ${this._navLink("/styling/web-awesome","Web Awesome")}
                </details>
                <details class="nav-section" open>
                  <summary class="nav-section-title">UI</summary>
                  ${this._navLink("/ui","Design System")}
                </details>
                <details class="nav-section" open>
                  <summary class="nav-section-title">Examples</summary>
                  ${this._navLink("/examples","Overview")} ${this._navLink("/examples/hello","Hello World")} ${this._navLink("/examples/minimal-blog","Minimal Blog")} ${this._navLink("/examples/fullstack","Fullstack")}
                </details>
                <details class="nav-section" open>
                  <summary class="nav-section-title">Project</summary>
                  ${this._navLink("/roadmap","Roadmap")} ${this._navLink("/changelog","Changelog")} ${this._navLink("/contributing","Contributing")}
                </details>
              </nav>
            `}
          <main class="layout-main">
            <slot></slot>
          </main>
        </div>
        <div class="app-footer">
          <footer>
            <p>
              Built with <a href="https://github.com/SisyphusZheng/kiss" target="_blank"
              >KISS Framework</a>
              <span class="divider"></span>
              Self-bootstrapped from JSR
              <span class="divider"></span>
              KISS Architecture — K·I·S·S
            </p>
          </footer>
        </div>
      </div>
    `}};Ns.styles=[rs,D`
      :host {
        display: block;
      }

      /* === Layout Shell === */
      .app-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: var(--kiss-bg-base);
        color: var(--kiss-text-primary);
        font-family: var(--kiss-font-sans);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .layout-body {
        display: flex;
        flex: 1;
      }

      .layout-main {
        flex: 1;
        min-width: 0;
      }

      .app-layout[home] .layout-body {
        display: block;
      }

      /* === Header === */
      .app-header {
        position: sticky;
        top: 0;
        z-index: var(--kiss-z-sticky);
        background: var(--kiss-bg-base);
        border-bottom: 1px solid var(--kiss-border);
      }

      .header-inner {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 var(--kiss-size-8);
        display: flex;
        align-items: center;
        height: 56px;
        gap: var(--kiss-size-6);
      }

      /* === Mobile Menu (L0: details/summary) === */
      .mobile-menu {
        display: none;
      }

      .mobile-menu-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: 1px solid var(--kiss-border);
        border-radius: var(--kiss-radius-md);
        background: transparent;
        color: var(--kiss-text-tertiary);
        cursor: pointer;
        padding: 0;
        list-style: none;
        transition:
          color var(--kiss-transition-normal),
          border-color var(--kiss-transition-normal),
          background var(--kiss-transition-normal);
      }

      .mobile-menu-btn::-webkit-details-marker {
        display: none;
      }

      .mobile-menu-btn::marker {
        content: "";
      }

      .mobile-menu-btn:hover,
      .mobile-menu-btn:focus-visible {
        color: var(--kiss-text-primary);
        border-color: var(--kiss-border-hover);
        background: var(--kiss-accent-subtle);
      }

      .mobile-menu[open] .mobile-menu-btn {
        color: var(--kiss-text-primary);
        background: var(--kiss-accent-subtle);
        border-color: var(--kiss-border-hover);
      }

      /* === Logo === */
      .logo {
        font-size: var(--kiss-font-size-sm);
        font-weight: var(--kiss-font-weight-extrabold);
        color: var(--kiss-text-primary);
        text-decoration: none;
        letter-spacing: var(--kiss-letter-spacing-widest);
        text-transform: uppercase;
        transition: opacity var(--kiss-transition-normal);
        white-space: nowrap;
      }

      .logo:hover {
        opacity: 0.6;
      }

      .logo-sub {
        font-size: var(--kiss-font-size-xs);
        font-weight: var(--kiss-font-weight-normal);
        color: var(--kiss-text-muted);
        margin-left: var(--kiss-size-2);
        letter-spacing: var(--kiss-letter-spacing-wide);
        text-transform: none;
      }

      /* === Header Nav === */
      .header-nav {
        display: flex;
        gap: 0.125rem;
        flex: 1;
      }

      .header-nav a {
        color: var(--kiss-text-tertiary);
        text-decoration: none;
        font-size: var(--kiss-font-size-sm);
        font-weight: var(--kiss-font-weight-medium);
        padding: var(--kiss-size-2) var(--kiss-size-3);
        letter-spacing: var(--kiss-letter-spacing-wide);
        transition: color var(--kiss-transition-normal);
        border-radius: var(--kiss-radius-md);
      }

      .header-nav a:hover {
        color: var(--kiss-text-primary);
      }

      /* === Header Right === */
      .header-right {
        display: flex;
        align-items: center;
        gap: var(--kiss-size-2);
        margin-left: auto;
      }

      /* === GitHub Link === */
      .github-link {
        display: inline-flex;
        align-items: center;
        gap: var(--kiss-size-2);
        color: var(--kiss-text-muted);
        text-decoration: none;
        font-size: var(--kiss-font-size-xs);
        font-weight: var(--kiss-font-weight-medium);
        letter-spacing: var(--kiss-letter-spacing-wide);
        padding: var(--kiss-size-2) var(--kiss-size-3);
        border: 1px solid var(--kiss-border);
        border-radius: var(--kiss-radius-md);
        transition: color var(--kiss-transition-normal), border-color var(--kiss-transition-normal);
      }

      .github-link:hover {
        color: var(--kiss-text-secondary);
        border-color: var(--kiss-border-hover);
      }

      .github-link svg {
        flex-shrink: 0;
      }

      /* === Sidebar (Desktop) === */
      .docs-sidebar {
        width: 240px;
        flex-shrink: 0;
        border-right: 1px solid var(--kiss-border);
        padding: var(--kiss-size-6) 0;
        overflow-y: auto;
        height: calc(100vh - 56px);
        position: sticky;
        top: 56px;
        scrollbar-width: thin;
      }

      .nav-section {
        margin-bottom: var(--kiss-size-5);
      }

      .nav-section summary {
        font-size: var(--kiss-font-size-xs);
        font-weight: var(--kiss-font-weight-bold);
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: var(--kiss-text-muted);
        padding: 0 var(--kiss-size-5);
        margin-bottom: var(--kiss-size-2);
        cursor: pointer;
        list-style: none;
        display: flex;
        align-items: center;
        gap: var(--kiss-size-2);
        user-select: none;
      }

      .nav-section summary::-webkit-details-marker {
        display: none;
      }

      .nav-section summary::marker {
        content: "";
      }

      .nav-section summary::before {
        content: "▾";
        font-size: 0.5rem;
        transition: transform var(--kiss-transition-normal);
        display: inline-block;
      }

      .nav-section[open] summary::before {
        transform: rotate(0deg);
      }

      .nav-section:not([open]) summary::before {
        transform: rotate(-90deg);
      }

      .nav-section summary:hover {
        color: var(--kiss-text-tertiary);
      }

      .docs-sidebar a {
        display: block;
        color: var(--kiss-text-tertiary);
        text-decoration: none;
        font-size: var(--kiss-font-size-sm);
        padding: 0.3rem var(--kiss-size-5);
        transition: color var(--kiss-transition-normal), background var(--kiss-transition-normal);
        border-left: 2px solid transparent;
      }

      .docs-sidebar a:hover {
        color: var(--kiss-text-primary);
        background: var(--kiss-accent-subtle);
      }

      .docs-sidebar a.active,
      .docs-sidebar a[aria-current="page"] {
        color: var(--kiss-text-primary);
        border-left-color: var(--kiss-text-primary);
        background: var(--kiss-accent-subtle);
        font-weight: var(--kiss-font-weight-medium);
      }

      /* === Mobile Backdrop === */
      .mobile-backdrop {
        position: fixed;
        inset: 0;
        top: 56px;
        background: rgba(0, 0, 0, 0.4);
        z-index: 80;
        opacity: 0;
        pointer-events: none;
        transition: opacity var(--kiss-transition-slow);
        backdrop-filter: blur(2px);
      }

      /* === Mobile Responsive === */
      @media (max-width: 900px) {
        .mobile-menu {
          display: block;
        }

        .header-inner {
          padding: 0 var(--kiss-size-4);
          gap: var(--kiss-size-3);
        }

        .header-nav {
          display: none;
        }

        .github-text {
          display: none;
        }

        .header-right {
          gap: var(--kiss-size-2);
        }

        .docs-sidebar {
          position: fixed;
          top: 56px;
          left: 0;
          width: min(300px, 80vw);
          height: calc(100vh - 56px);
          z-index: 90;
          background: var(--kiss-bg-base);
          border-right: 1px solid var(--kiss-border);
          border-bottom: none;
          padding: var(--kiss-size-4) 0;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          transform: translateX(-101%);
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
          box-shadow: none;
        }

        .app-layout:has(.mobile-menu[open]) .docs-sidebar {
          transform: translateX(0);
          box-shadow: 4px 0 24px rgba(0, 0, 0, 0.3);
        }

        .app-layout:has(.mobile-menu[open]) .mobile-backdrop {
          opacity: 1;
          pointer-events: auto;
        }

        .nav-section {
          margin-bottom: var(--kiss-size-2);
        }

        .nav-section summary {
          padding: var(--kiss-size-2) var(--kiss-size-4);
          font-size: var(--kiss-font-size-xs);
        }

        .docs-sidebar a {
          padding: var(--kiss-size-2) var(--kiss-size-4) var(--kiss-size-2) var(--kiss-size-7);
          font-size: var(--kiss-font-size-sm);
        }

        .layout-main {
          width: 100%;
        }

        .app-footer footer {
          padding: var(--kiss-size-6) var(--kiss-size-4);
        }

        .app-footer .divider {
          display: none;
        }

        .app-footer p {
          line-height: 1.8;
        }
      }

      @media (max-width: 480px) {
        .logo-sub {
          display: none;
        }

        .github-link {
          padding: var(--kiss-size-2);
          border: none;
        }

        .header-inner {
          padding: 0 var(--kiss-size-3);
        }
      }

      /* === Footer === */
      .app-footer footer {
        padding: var(--kiss-size-8);
        border-top: 1px solid var(--kiss-border);
        text-align: center;
        color: var(--kiss-text-muted);
        font-size: var(--kiss-font-size-xs);
        letter-spacing: var(--kiss-letter-spacing-wide);
        background: var(--kiss-bg-base);
      }

      .app-footer p {
        margin: 0.25rem 0;
      }

      .app-footer a {
        color: var(--kiss-text-tertiary);
        text-decoration: none;
        transition: color var(--kiss-transition-normal);
      }

      .app-footer a:hover {
        color: var(--kiss-text-primary);
      }

      .app-footer .divider {
        display: inline-block;
        width: 1px;
        height: 8px;
        background: var(--kiss-border-hover);
        vertical-align: middle;
        margin: 0 var(--kiss-size-3);
      }
    `],Ns.properties={home:{type:Boolean,reflect:!0},currentPath:{type:String,attribute:"current-path"}};let oa=Ns;customElements.define(gl,oa);const Za=class Za extends x{render(){return C`
      <kiss-layout home>
        <div class="hero">
          <div class="overline">Web Standards Framework</div>
          <h1>KISS</h1>
          <p class="tagline">
            Keep It Simple, Stupid. A minimal full-stack framework built entirely on Web Standards.
          </p>
          <div class="equation">
            <span class="eq-item"><span class="eq-label">HTTP =</span> <span class="eq-val"
              >Fetch API</span></span>
            <span class="eq-item"><span class="eq-label">UI =</span> <span class="eq-val"
              >Web Components</span></span>
            <span class="eq-item"><span class="eq-label">Build =</span> <span class="eq-val"
              >ESM</span></span>
            </div>
            <div class="cta">
              <a class="cta-primary" href="/guide/getting-started">Get Started</a>
              <a class="cta-secondary" href="https://github.com/SisyphusZheng/kiss">GitHub</a>
            </div>
          </div>

          <div class="standards">
            <div class="section-label">Web Standards Coverage</div>
            <div class="pill-row">
              <span class="pill"><span class="check">&#10003;</span> Fetch API</span>
              <span class="pill"><span class="check">&#10003;</span> Web Components</span>
              <span class="pill"><span class="check">&#10003;</span> ESM</span>
              <span class="pill"><span class="check">&#10003;</span> Declarative Shadow DOM</span>
              <span class="pill"><span class="check">&#10003;</span> Islands</span>
            </div>
          </div>

          <div class="features">
            <div class="section-label">Why KISS</div>
            <div class="features-list">
              <div class="feature-item">
                <h2>Web Standards First</h2>
                <p>No new abstractions. If you know the web platform, you know KISS.</p>
              </div>
              <div class="feature-item">
                <h2>Islands Architecture</h2>
                <p>Only interactive components load JS. Default homepage: 0 KB.</p>
              </div>
              <div class="feature-item">
                <h2>Type-Safe RPC</h2>
                <p>End-to-end type safety with Hono RPC. No codegen needed.</p>
              </div>
              <div class="feature-item">
                <h2>Multi-Runtime</h2>
                <p>Same code on Deno, Node, Bun, Cloudflare Workers.</p>
              </div>
              <div class="feature-item">
                <h2>SSG Built-In</h2>
                <p>Pre-render to static HTML at build time. Zero config.</p>
              </div>
              <div class="feature-item">
                <h2>Zero Lock-In</h2>
                <p>Your code works without KISS. Hono, Lit, Vite are all standard.</p>
              </div>
            </div>
          </div>

          <div class="comparison">
            <div class="section-label">Full-Chain Web Standards</div>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>KISS</th>
                  <th>Astro</th>
                  <th>Next.js</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fetch API</td>
                  <td>Fetch API</td>
                  <td>Custom API</td>
                </tr>
                <tr>
                  <td>Web Components</td>
                  <td>Islands (custom)</td>
                  <td>React only</td>
                </tr>
                <tr>
                  <td>ESM</td>
                  <td>ESM</td>
                  <td>ESM + Custom</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="jsr">
            <div class="section-label">Install from JSR</div>
            <div class="badge-row">
              <a class="jsr-badge" href="https://jsr.io/@kissjs/core">@kissjs/core</a>
              <a class="jsr-badge" href="https://jsr.io/@kissjs/ui">@kissjs/ui</a>
              <a class="jsr-badge" href="https://jsr.io/@kissjs/rpc">@kissjs/rpc</a>
            </div>
          </div>
        </kiss-layout>
      `}};Za.styles=D`
    :host {
      display: block;
    }

    /* ─── Hero ─── */
    .hero {
      max-width: 800px;
      margin: 0 auto;
      padding: 12rem 2rem 6rem;
      text-align: left;
    }

    .hero .overline {
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.24em;
      color: var(--kiss-text-muted);
      margin-bottom: 1.75rem;
      display: block;
    }

    .hero h1 {
      font-size: 5.5rem;
      font-weight: 900;
      letter-spacing: -0.06em;
      margin: 0;
      color: var(--kiss-text-primary);
      line-height: 0.9;
    }

    .hero .tagline {
      font-size: 1.0625rem;
      color: var(--kiss-text-secondary);
      margin-top: 2.25rem;
      line-height: 1.8;
      font-weight: 400;
      max-width: 480px;
    }

    .hero .equation {
      margin-top: 3rem;
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .eq-item {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.625rem 1rem;
      background: var(--kiss-bg-surface);
      border: 1px solid var(--kiss-border);
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--kiss-text-tertiary);
      transition: border-color 0.2s ease, background 0.2s ease;
    }

    .eq-item:hover {
      border-color: var(--kiss-border-hover);
      background: var(--kiss-bg-elevated);
    }

    .eq-label {
      color: var(--kiss-text-muted);
      font-weight: 400;
    }

    .eq-val {
      color: var(--kiss-text-primary);
      font-family: "SF Mono", "Fira Code", "Consolas", monospace;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .cta {
      margin-top: 3rem;
      display: flex;
      gap: 0.75rem;
    }

    .cta a {
      display: inline-flex;
      align-items: center;
      padding: 0.75rem 1.75rem;
      font-size: 0.8125rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      text-decoration: none;
      border-radius: 6px;
      transition: all 0.2s ease;
    }

    .cta-primary {
      background: var(--kiss-text-primary);
      color: var(--kiss-bg-base);
    }

    .cta-primary:hover {
      opacity: 0.85;
      transform: translateY(-1px);
    }

    .cta-secondary {
      background: transparent;
      color: var(--kiss-text-secondary);
      border: 1px solid var(--kiss-border);
    }

    .cta-secondary:hover {
      color: var(--kiss-text-primary);
      border-color: var(--kiss-border-hover);
      transform: translateY(-1px);
    }

    /* ─── Standards ─── */
    .standards {
      max-width: 800px;
      margin: 0 auto;
      padding: 4rem 2rem;
      border-top: 1px solid var(--kiss-border);
    }

    .section-label {
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--kiss-text-muted);
      margin-bottom: 1.5rem;
    }

    .pill-row {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.875rem;
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 500;
      background: var(--kiss-bg-surface);
      color: var(--kiss-text-secondary);
      border: 1px solid var(--kiss-border);
      transition: border-color 0.2s, color 0.2s, background 0.2s;
    }

    .pill:hover {
      border-color: var(--kiss-border-hover);
      color: var(--kiss-text-primary);
      background: var(--kiss-bg-elevated);
    }

    .pill .check {
      color: var(--kiss-accent);
      font-size: 0.625rem;
      font-weight: 700;
    }

    /* ─── Features ─── */
    .features {
      max-width: 800px;
      margin: 0 auto;
      padding: 4rem 2rem;
      border-top: 1px solid var(--kiss-border);
    }

    .features-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }

    .feature-item {
      padding: 2rem 1.75rem;
      border-bottom: 1px solid var(--kiss-border);
      transition: background 0.2s ease;
    }

    .feature-item:nth-child(odd) {
      border-right: 1px solid var(--kiss-border);
    }

    .feature-item:nth-last-child(-n+2) {
      border-bottom: none;
    }

    .feature-item:hover {
      background: var(--kiss-bg-surface);
    }

    .feature-item h2 {
      font-size: 0.875rem;
      font-weight: 600;
      margin: 0 0 0.5rem;
      color: var(--kiss-text-primary);
      letter-spacing: -0.01em;
    }

    .feature-item p {
      font-size: 0.8125rem;
      color: var(--kiss-text-tertiary);
      margin: 0;
      line-height: 1.65;
    }

    /* ─── Comparison ─── */
    .comparison {
      max-width: 800px;
      margin: 0 auto;
      padding: 4rem 2rem;
      border-top: 1px solid var(--kiss-border);
    }

    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.8125rem;
    }

    .comparison-table th,
    .comparison-table td {
      padding: 0.875rem 1.125rem;
      text-align: left;
      border-bottom: 1px solid var(--kiss-border);
    }

    .comparison-table th {
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--kiss-text-muted);
    }

    .comparison-table th:first-child {
      color: var(--kiss-text-primary);
    }

    .comparison-table td {
      color: var(--kiss-text-tertiary);
    }

    .comparison-table td:first-child {
      color: var(--kiss-text-primary);
      font-weight: 500;
    }

    .comparison-table tr:hover td {
      background: var(--kiss-bg-surface);
    }

    /* ─── JSR ─── */
    .jsr {
      max-width: 800px;
      margin: 0 auto;
      padding: 3rem 2rem 6rem;
      border-top: 1px solid var(--kiss-border);
    }

    .badge-row {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .jsr-badge {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 1rem;
      background: var(--kiss-bg-surface);
      border: 1px solid var(--kiss-border);
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--kiss-text-secondary);
      text-decoration: none;
      font-family: "SF Mono", "Fira Code", "Consolas", monospace;
      transition: all 0.2s ease;
    }

    .jsr-badge:hover {
      background: var(--kiss-bg-elevated);
      color: var(--kiss-text-primary);
      border-color: var(--kiss-border-hover);
      transform: translateY(-1px);
    }

    /* ─── Responsive ─── */
    @media (max-width: 768px) {
      .hero {
        padding: 5rem 1.5rem 3rem;
      }

      .hero h1 {
        font-size: 3rem;
      }

      .features-list {
        grid-template-columns: 1fr;
      }

      .feature-item:nth-child(odd) {
        border-right: none;
      }
    }

    @media (max-width: 480px) {
      .hero h1 {
        font-size: 2.5rem;
      }

      .hero .equation {
        flex-direction: column;
      }
    }
  `;let ua=Za;customElements.define("docs-home",ua);const El="docs-home",j=D`
  :host {
    display: block;
  }

  .container {
    max-width: 720px;
    margin: 0 auto;
    padding: 2rem 1.5rem 3rem;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    margin: 0 0 0.5rem;
    color: var(--kiss-text-primary);
    line-height: 1.2;
  }

  .subtitle {
    color: var(--kiss-text-tertiary);
    margin-bottom: 3rem;
    font-size: 0.9375rem;
    line-height: 1.7;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 1.5rem 0 0.75rem;
    color: var(--kiss-text-primary);
  }

  h3 {
    font-size: 0.9375rem;
    font-weight: 600;
    margin: 1.5rem 0 0.5rem;
    color: var(--kiss-accent-dim);
  }

  p {
    line-height: 1.7;
    margin: 0.5rem 0;
    color: var(--kiss-text-secondary);
    font-size: 0.9375rem;
  }

  strong {
    color: var(--kiss-text-primary);
    font-weight: 600;
  }

  em {
    color: var(--kiss-accent-dim);
    font-style: italic;
  }

  a {
    color: var(--kiss-text-primary);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: var(--kiss-border-hover);
    text-decoration-thickness: 1px;
    transition: text-decoration-color 0.15s;
  }

  a:hover {
    text-decoration-color: var(--kiss-text-primary);
  }

  /* Code blocks */
  pre {
    background: var(--kiss-code-bg);
    color: var(--kiss-text-secondary);
    padding: 1rem 1.25rem;
    border-radius: 3px;
    overflow-x: auto;
    font-size: 0.8125rem;
    line-height: 1.6;
    margin: 0.75rem 0;
  }

  code {
    font-family: "SF Mono", "Fira Code", "Consolas", monospace;
  }

  .inline-code {
    background: var(--kiss-code-bg);
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
    font-size: 0.875em;
  }

  p code, li code {
    background: var(--kiss-code-bg);
    padding: 0.125rem 0.375rem;
    border-radius: 3px;
    font-size: 0.8125rem;
    color: var(--kiss-accent-dim);
    border: 1px solid var(--kiss-code-border);
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.75rem 0 1.5rem;
    font-size: 0.875rem;
  }

  th, td {
    border: 1px solid var(--kiss-border);
    padding: 0.5rem 0.75rem;
    text-align: left;
  }

  th {
    background: var(--kiss-code-bg);
    font-weight: 600;
    color: var(--kiss-accent-dim);
  }

  td {
    color: var(--kiss-text-secondary);
  }

  /* Callout blocks */
  .pillar {
    padding: 1.25rem 1.5rem;
    margin: 1rem 0;
    border-left: 3px solid var(--kiss-border-hover);
    background: var(--kiss-bg-surface);
    border-radius: 0 3px 3px 0;
  }

  .pillar .num {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--kiss-text-muted);
    margin-bottom: 0.25rem;
  }

  .pillar h3 {
    margin: 0 0 0.5rem;
    font-size: 1rem;
    color: var(--kiss-text-primary);
  }

  .hard-constraint {
    display: inline-block;
    background: var(--kiss-code-bg);
    border: 1px solid var(--kiss-border-hover);
    padding: 0.25rem 0.625rem;
    border-radius: 4px;
    font-size: 0.8125rem;
    margin: 0.125rem 0;
  }

  .callout {
    padding: 1rem 1.25rem;
    margin: 1rem 0;
    border-left: 3px solid var(--kiss-border-hover);
    background: var(--kiss-bg-surface);
    border-radius: 0 3px 3px 0;
  }

  .callout.warn {
    border-left-color: var(--kiss-text-tertiary);
  }

  /* Lists */
  ul, ol {
    padding-left: 1.25rem;
    color: var(--kiss-text-secondary);
    line-height: 1.7;
  }

  li {
    margin: 0.375rem 0;
  }

  /* Page nav */
  .nav-row {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
  }

  .nav-link {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--kiss-text-secondary);
    text-decoration: none;
    border: 1px solid var(--kiss-border);
    border-radius: 4px;
    transition: color 0.15s, border-color 0.15s, background 0.15s;
    letter-spacing: 0.01em;
  }

  .nav-link:hover {
    color: var(--kiss-text-primary);
    border-color: var(--kiss-border-hover);
    background: var(--kiss-accent-subtle);
  }

  /* === Responsive === */
  @media (max-width: 900px) {
    .container {
      padding: 2rem 1.25rem 3rem;
    }

    h1 {
      font-size: 1.625rem;
    }

    .subtitle {
      margin-bottom: 2rem;
    }

    h2 {
      margin: 1.5rem 0 0.5rem;
    }

    pre {
      padding: 0.875rem 1rem;
      font-size: 0.75rem;
      border-radius: 4px;
    }

    table {
      font-size: 0.75rem;
    }

    th, td {
      padding: 0.5rem 0.625rem;
    }

    .pillar, .callout {
      padding: 1rem;
    }

    .nav-row {
      flex-direction: column;
      gap: 0.75rem;
    }

    .nav-link {
      text-align: center;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 1.5rem 1rem 2.5rem;
    }

    h1 {
      font-size: 1.375rem;
    }

    .subtitle {
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.875rem;
    }

    pre {
      padding: 0.75rem;
      font-size: 0.6875rem;
      margin: 0.5rem 0;
    }

    code {
      font-size: 0.75rem;
    }

    ul, ol {
      padding-left: 1rem;
    }

    .hard-constraint {
      font-size: 0.6875rem;
      padding: 0.125rem 0.5rem;
    }
  }
`,er=class er extends x{render(){return C`
      <kiss-layout currentPath="/changelog">
        <div class="container">
          <h1>Changelog</h1>
          <p class="subtitle">
            All notable changes to KISS are documented here.
          </p>

          <p>
            The format is based on
            <a href="https://keepachangelog.com/en/1.0.0/" target="_blank">Keep a Changelog</a>, and this
            project adheres to
            <a href="https://semver.org/spec/v2.0.0.html" target="_blank">Semantic Versioning</a>.
          </p>

          <div class="version-section">
            <div class="version-header">
              <span class="version-number">0.2.0</span>
              <span class="version-date">2026-04-27</span>
            </div>

            <div class="change-category added">
              <h4>Added</h4>
              <ul class="change-list">
                <li>
                  <strong>Package Islands Auto-Detection</strong>: Automatically detect and register
                  Islands from npm/JSR packages
                </li>
                <li>
                  <code>packageIslands</code> configuration option to specify which packages to scan
                </li>
                <li>
                  <code>scanPackageIslands()</code> function to dynamically import packages and read
                  <code>islands</code> export
                </li>
                <li>
                  <code>kiss-theme-toggle</code> Island for theme switching (Dark/Light)
                </li>
                <li>
                  Package Island metadata type: <code>PackageIslandMeta</code>
                </li>
              </ul>
            </div>

            <div class="change-category changed">
              <h4>Changed</h4>
              <ul class="change-list">
                <li>
                  <strong>BREAKING</strong>: <code>kiss-layout</code> theme toggle logic removed — use
                  <code>kiss-theme-toggle</code> Island instead
                </li>
                <li>
                  <code>kiss-layout</code> simplified to static component (no client-side state)
                </li>
                <li>
                  L2 theme toggle script removed (replaced by Island hydration)
                </li>
                <li>
                  Client build now auto-generates import and registration code for package Islands
                </li>
              </ul>
            </div>

            <div class="change-category fixed">
              <h4>Fixed</h4>
              <ul class="change-list">
                <li>Theme toggle now uses proper Island hydration (DSD + client-side state)</li>
              </ul>
            </div>
          </div>

          <div class="version-section">
            <div class="version-header">
              <span class="version-number">0.1.7</span>
              <span class="version-date">2026-04-27</span>
            </div>

            <div class="change-category added">
              <h4>Added</h4>
              <ul class="change-list">
                <li>Logger module with <code>KISS_LOG_LEVEL</code> environment variable support</li>
                <li>
                  @kissjs/ui component library with kiss-button, kiss-card, kiss-input, kiss-code-block,
                  kiss-layout
                </li>
                <li>design-tokens CSS custom properties for Swiss International Style</li>
                <li>examples/hello minimal example demonstrating KISS basics</li>
                <li>Documentation site dogfooding: /ui page uses real KISS UI components</li>
                <li>SSR Compatibility documentation in /guide/ssg</li>
              </ul>
            </div>

            <div class="change-category changed">
              <h4>Changed</h4>
              <ul class="change-list">
                <li>@kissjs/ui version bumped to 0.1.4</li>
                <li>Documentation site now imports @kissjs/ui components</li>
                <li>Migrated all examples to static properties + customElements.define() pattern</li>
                <li>Removed experimentalDecorators config from packages/kiss-ui/deno.json</li>
              </ul>
            </div>
          </div>

          <div class="version-section">
            <div class="version-header">
              <span class="version-number">0.1.6</span>
              <span class="version-date">2026-04-26</span>
            </div>

            <div class="change-category added">
              <h4>Added</h4>
              <ul class="change-list">
                <li>Pure black & white design system with theme toggle</li>
                <li>/ui design system showcase page</li>
                <li>Mobile-responsive sidebar with hamburger menu</li>
                <li>CSS :has() selector for sidebar toggle (zero JS)</li>
              </ul>
            </div>

            <div class="change-category changed">
              <h4>Changed</h4>
              <ul class="change-list">
                <li>Consolidated page styles (pageStyles) — eliminated 840 lines of duplicate CSS</li>
                <li>Removed all !important hacks from page styles</li>
                <li>Sidebar now uses slide-in animation with backdrop blur</li>
              </ul>
            </div>

            <div class="change-category fixed">
              <h4>Fixed</h4>
              <ul class="change-list">
                <li>Backdrop click now closes sidebar (L2 script)</li>
                <li>Mobile responsive layout improvements</li>
              </ul>
            </div>
          </div>

          <div class="version-section">
            <div class="version-header">
              <span class="version-number">0.1.5</span>
              <span class="version-date">2026-04-20</span>
            </div>

            <div class="change-category added">
              <h4>Added</h4>
              <ul class="change-list">
                <li>KISS Architecture documentation (K·I·S·S four constraints)</li>
                <li>DSD (Declarative Shadow DOM) output support</li>
                <li>Jamstack alignment documentation</li>
              </ul>
            </div>

            <div class="change-category changed">
              <h4>Changed</h4>
              <ul class="change-list">
                <li>Rebranded from DIA to KISS Architecture</li>
                <li>Updated README with dual meaning (Philosophy + Architecture)</li>
              </ul>
            </div>
          </div>

          <div class="version-section">
            <div class="version-header">
              <span class="version-number">0.1.4</span>
              <span class="version-date">2026-04-15</span>
            </div>

            <div class="change-category added">
              <h4>Added</h4>
              <ul class="change-list">
                <li>inject option for custom stylesheets/scripts injection</li>
                <li>API Routes deployment documentation</li>
              </ul>
            </div>

            <div class="change-category changed">
              <h4>Changed</h4>
              <ul class="change-list">
                <li>Marked ui option as deprecated (use inject instead)</li>
              </ul>
            </div>

            <div class="change-category fixed">
              <h4>Fixed</h4>
              <ul class="change-list">
                <li>RPC call() now throws RpcError instead of returning null</li>
              </ul>
            </div>
          </div>

          <h2>Version History</h2>
          <table class="version-table">
            <thead>
              <tr>
                <th>Version</th>
                <th>Date</th>
                <th>Highlights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.2.0</td>
                <td>2026-04-27</td>
                <td>Package Islands auto-detection + kiss-theme-toggle Island</td>
              </tr>
              <tr>
                <td>0.1.7</td>
                <td>2026-04-27</td>
                <td>Architecture audit + dogfooding + docs self-hosting</td>
              </tr>
              <tr>
                <td>0.1.6</td>
                <td>2026-04-26</td>
                <td>Design system + mobile responsive</td>
              </tr>
              <tr>
                <td>0.1.5</td>
                <td>2026-04-20</td>
                <td>KISS Architecture branding</td>
              </tr>
              <tr>
                <td>0.1.4</td>
                <td>2026-04-15</td>
                <td>inject option + API Routes docs</td>
              </tr>
              <tr>
                <td>0.1.3</td>
                <td>2026-04-10</td>
                <td>@kissjs/rpc + @kissjs/ui</td>
              </tr>
              <tr>
                <td>0.1.2</td>
                <td>2026-04-05</td>
                <td>Island AST transform</td>
              </tr>
              <tr>
                <td>0.1.1</td>
                <td>2026-04-01</td>
                <td>Initial JSR release</td>
              </tr>
            </tbody>
          </table>

          <div class="nav-row">
            <a href="/roadmap" class="nav-link">&larr; Roadmap</a>
            <a href="/guide/getting-started" class="nav-link">Getting Started &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};er.styles=[j,D`
      .version-section {
        margin: 2rem 0;
        padding: 1.5rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
      }
      .version-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      .version-number {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--kiss-text-primary);
      }
      .version-date {
        font-size: 0.75rem;
        color: var(--kiss-text-muted);
        padding: 0.25rem 0.5rem;
        background: var(--kiss-bg-elevated);
        border-radius: 3px;
      }
      .change-category {
        margin: 1rem 0;
      }
      .change-category h4 {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--kiss-text-muted);
        margin-bottom: 0.5rem;
      }
      .change-category.added h4 {
        color: var(--kiss-accent);
      }
      .change-category.changed h4 {
        color: var(--kiss-accent-dim);
      }
      .change-category.fixed h4 {
        color: var(--kiss-text-secondary);
      }
      .change-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .change-list li {
        padding: 0.375rem 0;
        padding-left: 1.25rem;
        position: relative;
        color: var(--kiss-text-secondary);
        font-size: 0.875rem;
      }
      .change-list li::before {
        content: "•";
        position: absolute;
        left: 0;
        color: var(--kiss-text-muted);
      }
      .version-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
        font-size: 0.875rem;
      }
      .version-table th,
      .version-table td {
        padding: 0.75rem 1rem;
        text-align: left;
        border-bottom: 1px solid var(--kiss-border);
      }
      .version-table th {
        font-size: 0.6875rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--kiss-text-muted);
      }
      .version-table td:first-child {
        font-weight: 600;
        color: var(--kiss-text-primary);
      }
    `];let ca=er;customElements.define("page-changelog",ca);const Tl="page-changelog",Sl="code-block",tr=class tr extends x{constructor(){super(...arguments),this._copyState="idle"}render(){return C`
      <slot></slot>
      <button
        class="copy-btn ${this._copyState==="copied"?"copied":""}"
        @click="${this._copy}"
        ?hidden="${this._copyState==="copied"}"
      >
        ${this._copyState==="copied"?"Copied!":this._copyState==="failed"?"Failed":"Copy"}
      </button>
    `}async _copy(){try{const t=this.textContent||"";await navigator.clipboard.writeText(t),this._copyState="copied",this.requestUpdate(),setTimeout(()=>{this._copyState="idle",this.requestUpdate()},2e3)}catch{this._copyState="failed",this.requestUpdate(),setTimeout(()=>{this._copyState="idle",this.requestUpdate()},2e3)}}};tr.styles=D`
    :host {
      display: block;
      position: relative;
    }

    ::slotted(pre) {
      margin: 0;
      padding: 1.25rem;
      background: var(--kiss-code-bg);
      border: 1px solid var(--kiss-code-border);
      border-radius: 2px;
      overflow-x: auto;
      font-family: "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace;
      font-size: 0.8125rem;
      line-height: 1.6;
      color: var(--kiss-text-secondary);
      scrollbar-width: thin;
      scrollbar-color: var(--kiss-scrollbar-thumb) transparent;
    }

    .copy-btn {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: var(--kiss-bg-elevated);
      color: var(--kiss-text-tertiary);
      border: 1px solid var(--kiss-border);
      padding: 0.25rem 0.625rem;
      font-size: 0.6875rem;
      font-family: inherit;
      cursor: pointer;
      border-radius: 2px;
      transition: color 0.15s, border-color 0.15s;
      z-index: 1;
    }

    .copy-btn:hover {
      color: var(--kiss-text-secondary);
      border-color: var(--kiss-border-hover);
    }

    .copy-btn.copied {
      color: var(--kiss-text-primary);
      border-color: var(--kiss-border-hover);
    }
  `;let da=tr;customElements.define(Sl,da);const sr=class sr extends x{render(){return C`
      <kiss-layout currentPath="/contributing">
        <div class="container">
          <h1>Contributing to KISS</h1>
          <p class="subtitle">感谢你对 KISS 框架的兴趣！</p>

          <h2>开发环境设置</h2>
          <code-block
          ><pre><code># 克隆仓库
            git clone https://github.com/SisyphusZheng/kiss.git
            cd kiss

            # 安装依赖
            deno install

            # 运行测试
            deno task test

            # 启动文档站开发服务器
            deno task docs:dev</code></pre></code-block>

            <h2>项目结构</h2>
            <code-block
            ><pre><code>kiss/
              ├── packages/
              │   ├── kiss-core/    # 核心 Vite 插件
              │   ├── kiss-rpc/     # RPC 客户端控制器
              │   └── kiss-ui/      # UI 插件
              ├── docs/             # 文档站（自举）
              └── scripts/          # 工具脚本</code></pre></code-block>

              <h2>开发规范</h2>

              <h3>代码风格</h3>
              <ul>
                <li>使用 Deno 内置格式化：<code>deno fmt</code></li>
                <li>使用 Deno 内置 lint：<code>deno lint</code></li>
                <li>遵循 KISS Architecture 四约束（K·I·S·S）</li>
              </ul>

              <h3>提交规范</h3>
              <p>使用 Conventional Commits：</p>
              <div class="commit-types">
                <div class="commit-type"><code>feat:</code> 新功能</div>
                <div class="commit-type"><code>fix:</code> 修复 bug</div>
                <div class="commit-type"><code>docs:</code> 文档更新</div>
                <div class="commit-type"><code>refactor:</code> 重构</div>
                <div class="commit-type"><code>test:</code> 测试相关</div>
                <div class="commit-type"><code>chore:</code> 杂项</div>
              </div>

              <h3>分层原则</h3>
              <p>在添加新功能前，检查是否可以用更低层级解决：</p>
              <div class="layer-diagram">
                L0 HTML5 语义 — 结构、内容、导航 L1 CSS 表现 — 视觉、布局、动画 L2 浏览器平台 API — Clipboard,
                IntersectionObserver L3 Hono/Vite/Lit — 路由、构建、组件封装 L4 自研代码 — Island
                水合、RPC、插件逻辑 跳过任何一层 = 违反 KISS 架构约束
              </div>

              <h3>测试</h3>
              <code-block
              ><pre><code># 运行所有测试
                deno task test

                # 监听模式
                deno task test:watch

                # 类型检查
                deno task typecheck</code></pre></code-block>

                <h2>发布流程</h2>
                <ol>
                  <li>更新版本号（packages/*/package.json）</li>
                  <li>更新 CHANGELOG.md</li>
                  <li>运行测试：<code>deno task test</code></li>
                  <li>发布到 JSR：<code>deno task publish</code></li>
                  <li>创建 GitHub Release</li>
                </ol>

                <h2>架构决策记录（ADR）</h2>
                <p>重大架构变更需要创建 ADR 文档：</p>
                <code-block
                ><pre><code># ADR-XXX: 标题

                ## 状态
                提议 / 已接受 / 已废弃

                ## 背景
                为什么需要这个决策

                ## 决策
                我们决定做什么

                ## 后果
                这个决策的影响</code></pre></code-block>

                <h2>问题反馈</h2>
                <ul>
                  <li>
                    GitHub Issues: <a href="https://github.com/SisyphusZheng/kiss/issues" target="_blank"
                    >https://github.com/SisyphusZheng/kiss/issues</a>
                  </li>
                  <li>提交前请搜索已有 issue</li>
                </ul>

                <div class="nav-row">
                  <a href="/guide/architecture" class="nav-link">&larr; Architecture</a>
                  <a href="/roadmap" class="nav-link">Roadmap &rarr;</a>
                </div>
              </div>
            </kiss-layout>
          `}};sr.styles=[j,D`
      .layer-diagram {
        padding: 1.25rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
        margin: 1.5rem 0;
        font-size: 0.8125rem;
        line-height: 1.8;
        font-family: "SF Mono", "Fira Code", monospace;
        white-space: pre;
        overflow-x: auto;
        color: var(--kiss-text-secondary);
      }
      .commit-types {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.75rem;
        margin: 1rem 0;
      }
      .commit-type {
        padding: 0.75rem 1rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 4px;
        font-size: 0.875rem;
      }
      .commit-type code {
        color: var(--kiss-accent);
        font-weight: 600;
      }
    `];let la=sr;customElements.define("page-contributing",la);const _l="page-contributing",Al="kiss-card",xs=class xs extends x{constructor(){super(...arguments),this.variant="default"}render(){return C`
      <div class="card card--${this.variant}">
        <slot name="header"></slot>
        <div class="card-body">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </div>
    `}};xs.styles=[rs,D`
      :host {
        display: block;
      }

      .card {
        background: var(--kiss-bg-card);
        border: 1px solid var(--kiss-border);
        border-radius: var(--kiss-radius-lg);
        overflow: hidden;
      }

      .card--elevated {
        box-shadow: var(--kiss-shadow-md);
        border-color: transparent;
      }

      .card--borderless {
        border-color: transparent;
      }

      ::slotted([slot="header"]) {
        padding: var(--kiss-size-4) var(--kiss-size-5);
        border-bottom: 1px solid var(--kiss-border);
        font-size: var(--kiss-font-size-lg);
        font-weight: var(--kiss-font-weight-semibold);
        color: var(--kiss-text-primary);
        margin: 0;
      }

      .card-body {
        padding: var(--kiss-size-5);
      }

      ::slotted([slot="footer"]) {
        padding: var(--kiss-size-3) var(--kiss-size-5);
        border-top: 1px solid var(--kiss-border);
        font-size: var(--kiss-font-size-sm);
        color: var(--kiss-text-muted);
        margin: 0;
      }
    `],xs.properties={variant:{type:String}};let ha=xs;customElements.define(Al,ha);const kl="kiss-button",Rs=class Rs extends x{constructor(){super(...arguments),this.variant="default",this.size="md",this.disabled=!1}render(){const t=`btn btn--${this.variant} btn--${this.size}`;return this.href?C`
        <a
          class="${t}"
          href="${this.href}"
          target="${this.target}"
          ?disabled="${this.disabled}"
        >
          <slot></slot>
        </a>
      `:C`
      <button class="${t}" ?disabled="${this.disabled}">
        <slot></slot>
      </button>
    `}};Rs.styles=[rs,D`
      :host {
        display: inline-block;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--kiss-size-2);
        font-family: var(--kiss-font-sans);
        font-weight: var(--kiss-font-weight-medium);
        text-decoration: none;
        cursor: pointer;
        border: 1px solid var(--kiss-border);
        background: transparent;
        color: var(--kiss-text-primary);
        border-radius: var(--kiss-radius-md);
        transition:
          color var(--kiss-transition-normal),
          border-color var(--kiss-transition-normal),
          background var(--kiss-transition-normal);
        white-space: nowrap;
        letter-spacing: var(--kiss-letter-spacing-wide);
      }

      /* Sizes */
      .btn--sm {
        padding: var(--kiss-size-1) var(--kiss-size-3);
        font-size: var(--kiss-font-size-sm);
        height: 28px;
      }

      .btn--md {
        padding: var(--kiss-size-2) var(--kiss-size-4);
        font-size: var(--kiss-font-size-md);
        height: 36px;
      }

      .btn--lg {
        padding: var(--kiss-size-3) var(--kiss-size-5);
        font-size: var(--kiss-font-size-lg);
        height: 44px;
      }

      /* Variants */
      .btn--default:hover {
        color: var(--kiss-text-primary);
        border-color: var(--kiss-border-hover);
        background: var(--kiss-accent-subtle);
      }

      .btn--primary {
        background: var(--kiss-accent);
        color: var(--kiss-bg-base);
        border-color: var(--kiss-accent);
      }

      .btn--primary:hover {
        background: var(--kiss-accent-dim);
        border-color: var(--kiss-accent-dim);
      }

      .btn--ghost {
        border-color: transparent;
      }

      .btn--ghost:hover {
        background: var(--kiss-accent-subtle);
        border-color: transparent;
      }

      /* States */
      .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }

      .btn:focus-visible {
        outline: 2px solid var(--kiss-accent);
        outline-offset: 2px;
      }
    `],Rs.properties={variant:{type:String},size:{type:String},disabled:{type:Boolean,reflect:!0},href:{type:String},target:{type:String}};let pa=Rs;customElements.define(kl,pa);const ar=class ar extends x{render(){return C`
      <kiss-layout currentPath="/examples">
        <div class="container">
          <h1>Examples</h1>
          <p class="subtitle">
            KISS Architecture 实战 — 三范式继承 + 四约束验证
          </p>

          <h2>KISS Architecture = Jamstack</h2>
          <p>
            KISS 架构是唯一全链路 Web Standards 的 Jamstack 实现：
          </p>

          <div class="architecture-diagram">
            <div class="arch-row">
              <span class="arch-label">Jamstack</span>
              <span class="arch-value">Static-first deployment model — SSG + CDN</span>
            </div>
            <div class="arch-row">
              <span class="arch-label">Islands</span>
              <span class="arch-value">Isolated interactive components in Shadow DOM</span>
            </div>
            <div class="arch-row">
              <span class="arch-label">Progressive</span>
              <span class="arch-value">Content first, enhancement second — no JS baseline</span>
            </div>
            <hr class="arch-divider" />
            <div class="kiss-row">
              <span class="kiss-letter">K</span><span class="kiss-desc">Knowledge — SSG + DSD</span>
            </div>
            <div class="kiss-row">
              <span class="kiss-letter">I</span><span class="kiss-desc"
              >Isolated — Islands + Shadow DOM</span>
            </div>
            <div class="kiss-row">
              <span class="kiss-letter">S</span><span class="kiss-desc">Semantic — No-JS baseline</span>
            </div>
            <div class="kiss-row">
              <span class="kiss-letter">S</span><span class="kiss-desc">Static — CDN + Serverless</span>
            </div>
          </div>

          <h2>示例项目</h2>
          <div class="example-grid">
            <div class="example-card">
              <h3>
                Hello World
                <span class="tag k">K</span>
                <span class="tag s1">S</span>
              </h3>
              <div class="constraint-badges">
                <span class="constraint-badge">SSG + DSD</span>
                <span class="constraint-badge">零运行时</span>
              </div>
              <p>
                最小化 KISS 应用。展示 SSG + DSD 输出，内容在 JS 加载前可见。 使用 @kissjs/ui 组件。
              </p>
              <code-block
              ><pre><code>deno run -A npm:vite build
                # 输出: dist/index.html (含 DSD)</code></pre></code-block>
              <div class="nav-links">
                <kiss-button size="sm" href="/examples/hello">查看 Demo</kiss-button>
                <kiss-button
                  size="sm"
                  variant="ghost"
                  href="https://github.com/SisyphusZheng/kiss/tree/main/docs/app/routes/examples/hello"
                >源码</kiss-button>
              </div>
            </div>

            <div class="example-card">
              <h3>
                Minimal Blog
                <span class="tag k">K</span>
                <span class="tag i">I</span>
                <span class="tag s1">S</span>
              </h3>
              <div class="constraint-badges">
                <span class="constraint-badge">SSG</span>
                <span class="constraint-badge">Theme Island</span>
                <span class="constraint-badge">aria-current</span>
              </div>
              <p>
                静态博客示例。主题切换是唯一 Island，使用 localStorage 持久化。 导航高亮用 aria-current +
                CSS（L0+L1），零 JS。
              </p>
              <div class="nav-links">
                <kiss-button size="sm" href="/examples/minimal-blog">查看 Demo</kiss-button>
                <kiss-button
                  size="sm"
                  variant="ghost"
                  href="https://github.com/SisyphusZheng/kiss/tree/main/docs/app/routes/examples/minimal-blog"
                >源码</kiss-button>
              </div>
            </div>

            <div class="example-card">
              <h3>
                Fullstack
                <span class="tag k">K</span>
                <span class="tag i">I</span>
                <span class="tag s1">S</span>
                <span class="tag s2">S</span>
              </h3>
              <div class="constraint-badges">
                <span class="constraint-badge">SSG + DSD</span>
                <span class="constraint-badge">API Routes</span>
                <span class="constraint-badge">Counter Island</span>
                <span class="constraint-badge">Serverless</span>
              </div>
              <p>
                全栈示例。静态前端 + Serverless API Routes。 展示 KISS 架构的完整四约束：静态文件部署到
                CDN，API 部署到 Serverless。
              </p>
              <code-block
              ><pre><code># 部署架构
                dist/           → CDN / GitHub Pages
                api/            → Deno Deploy / CF Workers</code></pre></code-block>
              <div class="nav-links">
                <kiss-button size="sm" href="/examples/fullstack">查看 Demo</kiss-button>
                <kiss-button
                  size="sm"
                  variant="ghost"
                  href="https://github.com/SisyphusZheng/kiss/tree/main/docs/app/routes/examples/fullstack"
                >源码</kiss-button>
              </div>
            </div>
          </div>

          <h2>四约束验证清单</h2>
          <p>每个示例必须通过 K·I·S·S 四约束审查：</p>
          <code-block
          ><pre><code>K — 内容需要运行时获取？  → 应在构建时预渲染 (SSG + DSD)
            I — 新增了全局 JS？       → 必须封装为 Island (Shadow DOM)
            S — Island 禁用 JS 可用？ → 必须有语义 HTML 基线
            S — 引入了服务端进程？     → 只允许静态文件 + Serverless API</code></pre></code-block>

            <div class="nav-row">
              <a href="/styling/kiss-ui" class="nav-link">&larr; @kissjs/ui</a>
              <a href="/guide/deployment" class="nav-link">Deployment &rarr;</a>
            </div>
          </div>
        </kiss-layout>
      `}};ar.styles=[j,D`
      .example-grid {
        display: grid;
        gap: 1.5rem;
        margin: 1.5rem 0;
      }
      .example-card {
        padding: 1.5rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
        transition: border-color 0.2s ease;
      }
      .example-card:hover {
        border-color: var(--kiss-border-hover);
      }
      .example-card h3 {
        margin: 0 0 0.5rem;
        font-size: 1.125rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .example-card .tag {
        font-size: 0.6875rem;
        padding: 0.125rem 0.375rem;
        background: var(--kiss-code-bg);
        border-radius: 3px;
        font-weight: 500;
      }
      .example-card .tag.k {
        color: var(--kiss-accent);
      }
      .example-card .tag.i {
        color: var(--kiss-accent-dim);
      }
      .example-card .tag.s1 {
        color: var(--kiss-text-secondary);
      }
      .example-card .tag.s2 {
        color: var(--kiss-text-tertiary);
      }
      .example-card p {
        margin: 0.5rem 0 1rem;
        color: var(--kiss-text-secondary);
        font-size: 0.9375rem;
      }
      .constraint-badges {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }
      .constraint-badge {
        padding: 0.25rem 0.5rem;
        background: var(--kiss-bg-base);
        border: 1px solid var(--kiss-border);
        border-radius: 4px;
        font-size: 0.75rem;
        font-family: "SF Mono", "Fira Code", monospace;
      }
      .architecture-diagram {
        padding: 1.5rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
        margin: 1.5rem 0;
      }
      .arch-row {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      .arch-row:last-child {
        margin-bottom: 0;
      }
      .arch-label {
        font-size: 0.6875rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--kiss-text-muted);
        min-width: 120px;
      }
      .arch-value {
        font-size: 0.8125rem;
        color: var(--kiss-text-secondary);
      }
      .arch-divider {
        border: none;
        border-top: 1px solid var(--kiss-border);
        margin: 1rem 0;
      }
      .kiss-row {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin: 0.75rem 0;
      }
      .kiss-letter {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: 1px solid var(--kiss-border-hover);
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 800;
        color: var(--kiss-text-primary);
        background: var(--kiss-bg-base);
      }
      .kiss-desc {
        font-size: 0.8125rem;
        color: var(--kiss-text-secondary);
        margin-left: 0.25rem;
        line-height: 28px;
      }
      .nav-links {
        display: flex;
        gap: 0.75rem;
        margin-top: 1rem;
      }
    `];let ma=ar;customElements.define("page-examples",ma);const vl="page-examples",yl="counter-island",Ds=class Ds extends x{constructor(){super(),this.count=0}increment(){this.count++}decrement(){this.count--}render(){return C`
      <div class="counter">
        <button @click="${this.decrement}">−</button>
        <span class="count">${this.count}</span>
        <button @click="${this.increment}">+</button>
      </div>
    `}};Ds.styles=D`
    :host {
      display: block;
    }
    .counter {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .count {
      font-size: 2rem;
      font-weight: 700;
      min-width: 3rem;
      text-align: center;
      color: var(--text-primary, inherit);
    }
    button {
      background: var(--kiss-accent, #fff);
      color: var(--kiss-bg-base, #000);
      border: 1px solid var(--kiss-border, transparent);
      border-radius: 6px;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.15s ease, opacity 0.15s ease;
    }
    button:hover {
      opacity: 0.85;
      transform: scale(1.05);
    }
    button:active {
      transform: scale(0.95);
    }
  `,Ds.properties={count:{type:Number}};let fa=Ds;customElements.define(yl,fa);const rr=class rr extends x{render(){return C`
      <kiss-layout currentPath="/examples/fullstack">
        <div class="container">
          <h1>Fullstack Demo</h1>
          <p class="subtitle">
            K + I + S + S 四约束：静态前端 + Serverless API
          </p>

          <h2>Live Demo</h2>
          <div class="demo-container">
            <h1>KISS Fullstack</h1>
            <p style="color: var(--kiss-text-tertiary); margin-bottom: 1.5rem;">
              SSG + API Routes + Islands — A complete fullstack example.
            </p>

            <div class="counter-demo">
              <h3>Interactive Island Demo</h3>
              <counter-island></counter-island>
            </div>

            <div class="api-demo">
              <h3>API Routes Demo</h3>
              <div class="api-response">
                GET /api/hello → { "message": "Hello from KISS API!" } GET /api/time → { "time":
                "2026-04-26T...", "timestamp": 1745678... } GET /api/echo/:text → { "echo": "your-text" }
              </div>
            </div>
          </div>

          <h2>部署架构</h2>
          <div class="deployment-diagram">
            ┌─────────────────────────────────────────────────────────────────┐ │ Full-Stack Deployment │
            │ │ │ ┌──────────────────┐ ┌──────────────────┐ │ │ │ Static dist/ │ │ API Routes │ │ │ │ │ │
            │ │ │ │ index.html │ │ /api/hello │ │ │ │ + DSD │ │ /api/time │ │ │ │ + Island JS │ │
            /api/echo │ │ │ │ │ │ │ │ │ └──────────────────┘ └──────────────────┘ │ │ │ │ │ │ ▼ ▼ │ │
            ┌──────────────────┐ ┌──────────────────┐ │ │ │ CDN / │ │ Serverless │ │ │ │ GitHub Pages │ │
            Deno Deploy │ │ │ │ Cloudflare │ │ CF Workers │ │ │ │ Pages │ │ Vercel Edge │ │ │
            └──────────────────┘ └──────────────────┘ │ │ │ │ S Constraint: 静态文件 + Serverless API │
            └─────────────────────────────────────────────────────────────────┘
          </div>

          <h2>约束验证</h2>
          <table>
            <thead>
              <tr>
                <th>约束</th>
                <th>验证</th>
                <th>实现</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>K</strong> — Knowledge</td>
                <td>✓ 内容在构建时已知</td>
                <td>SSG + DSD 输出</td>
              </tr>
              <tr>
                <td><strong>I</strong> — Isolated</td>
                <td>✓ Counter Island</td>
                <td>Shadow DOM + 懒水合</td>
              </tr>
              <tr>
                <td><strong>S</strong> — Semantic</td>
                <td>✓ DSD 内容可达</td>
                <td>禁用 JS 时内容可见</td>
              </tr>
              <tr>
                <td><strong>S</strong> — Static</td>
                <td>✓ CDN + Serverless</td>
                <td>静态前端 + API Routes</td>
              </tr>
            </tbody>
          </table>

          <h2>API Routes 代码</h2>
          <code-block
          ><pre><code>// app/routes/api/index.ts
            import { Hono } from 'hono'

            const app = new Hono()

            app.get('/hello', (c) => c.json({ message: 'Hello from KISS API!' }))
            app.get('/time', (c) => c.json({ time: new Date().toISOString() }))
            app.get('/echo/:text', (c) => c.json({ echo: c.req.param('text') }))

            export default app</code></pre></code-block>

            <div class="nav-row">
              <a href="/examples/minimal-blog" class="nav-link">&larr; Minimal Blog</a>
              <a href="/guide/deployment" class="nav-link">Deployment &rarr;</a>
            </div>
          </div>
        </kiss-layout>
      `}};rr.styles=[j,D`
      .demo-container {
        padding: 2rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 8px;
        margin: 1.5rem 0;
        color: var(--kiss-text-primary);
      }
      .demo-container h1 {
        font-size: 2rem;
        margin: 0 0 1rem;
      }
      .api-demo {
        margin-top: 1.5rem;
        padding: 1rem;
        background: var(--kiss-bg-elevated);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
      }
      .api-demo h3 {
        margin: 0 0 0.75rem;
        font-size: 0.9375rem;
        color: var(--kiss-accent);
      }
      .api-response {
        font-family: "SF Mono", "Fira Code", monospace;
        font-size: 0.8125rem;
        color: var(--kiss-text-secondary);
        background: var(--kiss-code-bg);
        padding: 0.75rem;
        border-radius: 4px;
      }
      .counter-demo {
        margin-top: 1.5rem;
        padding: 1rem;
        background: var(--kiss-bg-elevated);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
      }
      .counter-demo h3 {
        margin: 0 0 1rem;
        font-size: 0.9375rem;
        color: var(--kiss-accent);
      }
      .deployment-diagram {
        padding: 1.25rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
        margin: 1.5rem 0;
        font-size: 0.8125rem;
        line-height: 1.8;
        font-family: "SF Mono", "Fira Code", monospace;
        white-space: pre-wrap;
        color: var(--kiss-text-secondary);
      }
    `];let ba=rr;customElements.define("page-fullstack-demo",ba);const Il="page-fullstack-demo",ir=class ir extends x{render(){return C`
      <kiss-layout currentPath="/examples/hello">
        <div class="container">
          <h1>Hello World Demo</h1>
          <p class="subtitle">
            K + S 约束：SSG + DSD 输出，内容在 JS 加载前可见
          </p>

          <h2>Live Demo</h2>
          <div class="demo-container">
            <h1>Hello, KISS!</h1>
            <p class="subtitle">Minimal full-stack framework built entirely on Web Standards.</p>
            <div class="actions">
              <kiss-button variant="primary" href="https://jsr.io/@kissjs/core">Get Started</kiss-button>
              <kiss-button href="https://github.com/SisyphusZheng/kiss">GitHub</kiss-button>
            </div>
            <div class="cards">
              <kiss-card>
                <h3 slot="header">SSG + DSD</h3>
                <p>
                  Static Site Generation with Declarative Shadow DOM. Content visible before JavaScript
                  loads.
                </p>
              </kiss-card>
              <kiss-card>
                <h3 slot="header">Islands Architecture</h3>
                <p>
                  Interactive components hydrate on demand. Zero-JS by default, progressive enhancement.
                </p>
              </kiss-card>
              <kiss-card>
                <h3 slot="header">API Routes</h3>
                <p>Serverless endpoints with Hono RPC. Type-safe from server to client.</p>
              </kiss-card>
            </div>
          </div>

          <h2>约束验证</h2>
          <table>
            <thead>
              <tr>
                <th>约束</th>
                <th>验证</th>
                <th>实现</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>K</strong> — Knowledge</td>
                <td>✓ 内容在构建时已知</td>
                <td>SSG + DSD 输出</td>
              </tr>
              <tr>
                <td><strong>I</strong> — Isolated</td>
                <td>✓ 无交互 Island</td>
                <td>纯静态页面</td>
              </tr>
              <tr>
                <td><strong>S</strong> — Semantic</td>
                <td>✓ DSD 内容可达</td>
                <td>Shadow DOM 声明式渲染</td>
              </tr>
              <tr>
                <td><strong>S</strong> — Static</td>
                <td>✓ 纯静态文件</td>
                <td>dist/index.html</td>
              </tr>
            </tbody>
          </table>

          <div class="nav-row">
            <a href="/examples" class="nav-link">&larr; Examples</a>
            <a href="/examples/minimal-blog" class="nav-link">Minimal Blog &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};ir.styles=[j,D`
      .demo-container {
        padding: 2rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 8px;
        margin: 1.5rem 0;
      }
      .demo-container h1 {
        font-size: 2.5rem;
        font-weight: 800;
        margin: 0 0 1rem;
        color: var(--kiss-text-primary);
      }
      .demo-container .subtitle {
        color: var(--kiss-text-tertiary);
        font-size: 1rem;
        margin-bottom: 1.5rem;
      }
      .demo-container .cards {
        display: grid;
        gap: 1rem;
      }
      kiss-card {
        --kiss-bg-card: var(--kiss-bg-elevated);
      }
      .actions {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
      }
    `];let ga=ir;customElements.define("page-hello-demo",ga);const Cl="page-hello-demo",Nl="theme-toggle",Ls=class Ls extends x{constructor(){super(),this.theme="dark"}connectedCallback(){super.connectedCallback();const t=localStorage.getItem("kiss-theme");t&&(this.theme=t,this.applyTheme())}toggleTheme(){this.theme=this.theme==="dark"?"light":"dark",localStorage.setItem("kiss-theme",this.theme),this.applyTheme()}applyTheme(){document.documentElement.setAttribute("data-theme",this.theme)}render(){return C`
      <button @click="${this.toggleTheme}">
        ${this.theme==="dark"?"☀️ Light":"🌙 Dark"}
      </button>
    `}};Ls.styles=D`
    :host {
      display: inline-block;
    }
    button {
      background: none;
      border: 1px solid var(--kiss-border, #333);
      border-radius: 6px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 0.875rem;
      color: var(--text-primary, inherit);
      transition: background 0.2s ease, border-color 0.2s ease;
    }
    button:hover {
      background: var(--kiss-accent-subtle, rgba(255, 255, 255, 0.05));
      border-color: var(--kiss-border-hover, #555);
    }
  `,Ls.properties={theme:{type:String}};let Ea=Ls;customElements.define(Nl,Ea);const nr=class nr extends x{render(){return C`
      <kiss-layout currentPath="/examples/minimal-blog">
        <div class="container">
          <h1>Minimal Blog Demo</h1>
          <p class="subtitle">
            K + I + S 约束：SSG + Theme Island + aria-current 导航
          </p>

          <h2>Live Demo</h2>
          <div class="demo-container">
            <div class="demo-header">
              <h1>My Blog</h1>
              <theme-toggle></theme-toggle>
            </div>
            <div class="nav-highlight-demo">
              <a class="nav-link-demo active" aria-current="page">Home</a>
              <a class="nav-link-demo">About</a>
              <a class="nav-link-demo">Archive</a>
            </div>
            <div class="post-list">
              <div class="post-item">
                <h3>Understanding KISS Architecture</h3>
                <p>How K·I·S·S constraints enforce Jamstack principles...</p>
              </div>
              <div class="post-item">
                <h3>DSD: The Missing Bridge</h3>
                <p>Declarative Shadow DOM solves the encapsulation vs reachability dilemma...</p>
              </div>
            </div>
          </div>

          <h2>约束验证</h2>
          <table>
            <thead>
              <tr>
                <th>约束</th>
                <th>验证</th>
                <th>实现</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>K</strong> — Knowledge</td>
                <td>✓ 内容在构建时已知</td>
                <td>SSG + DSD 输出</td>
              </tr>
              <tr>
                <td><strong>I</strong> — Isolated</td>
                <td>✓ Theme Island</td>
                <td>Shadow DOM + localStorage</td>
              </tr>
              <tr>
                <td><strong>S</strong> — Semantic</td>
                <td>✓ aria-current 导航</td>
                <td>L0 HTML + L1 CSS（非 Island）</td>
              </tr>
              <tr>
                <td><strong>S</strong> — Static</td>
                <td>✓ 纯静态文件</td>
                <td>dist/ 部署到 CDN</td>
              </tr>
            </tbody>
          </table>

          <h2>分层原则验证</h2>
          <code-block
          ><pre><code>导航高亮 → aria-current + CSS (L0+L1, 非 Island)
            主题切换 → Island + localStorage (L4, 合法 Island)

            为什么主题切换是 Island？
            - 需要 localStorage API（L2）
            - 需要跨 Shadow DOM 通信（L4）
            - 无法用纯 CSS 实现</code></pre></code-block>

            <div class="nav-row">
              <a href="/examples/hello" class="nav-link">&larr; Hello World</a>
              <a href="/examples/fullstack" class="nav-link">Fullstack &rarr;</a>
            </div>
          </div>
        </kiss-layout>
      `}};nr.styles=[j,D`
      .demo-container {
        padding: 2rem;
        background: var(--kiss-bg-base);
        border-radius: 8px;
        margin: 1.5rem 0;
      }
      .demo-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
      }
      .demo-header h1 {
        font-size: 1.5rem;
        margin: 0;
      }
      .post-list {
        display: grid;
        gap: 1rem;
      }
      .post-item {
        padding: 1rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
      }
      .post-item h3 {
        margin: 0 0 0.5rem;
        font-size: 1rem;
      }
      .post-item p {
        margin: 0;
        color: var(--kiss-text-muted);
        font-size: 0.875rem;
      }
      .nav-highlight-demo {
        display: flex;
        gap: 0.5rem;
        margin: 1rem 0;
      }
      .nav-link-demo {
        padding: 0.5rem 1rem;
        border-radius: 4px;
        color: var(--kiss-text-secondary);
      }
      .nav-link-demo.active {
        background: var(--kiss-bg-surface);
        color: var(--kiss-text-primary);
        font-weight: 600;
      }
    `];let Ta=nr;customElements.define("page-minimal-blog-demo",Ta);const xl="page-minimal-blog-demo",or=class or extends x{render(){return C`
      <kiss-layout currentPath="/guide/api-design">
        <div class="container">
          <h1>API Design</h1>
          <p class="subtitle">Hono routing, type-safe RPC, validation, and error response patterns.</p>

          <h2>Design Principles</h2>
          <div class="principle">
            <strong>Web Standards First</strong> — Route handlers return standard <span class="inline-code">Response</span>, input uses <span class="inline-code">Request</span>/<span class="inline-code">FormData</span><br>
            <strong>Type Safety Throughout</strong> — Zod validation → Hono RPC → client auto-inference, zero codegen<br>
            <strong>Convention over Configuration</strong> — Files in <span class="inline-code">app/routes/api/</span> auto-register as API routes
          </div>

          <h2>Route Conventions</h2>
          <table>
            <thead>
              <tr><th>File</th><th>Route</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><span class="inline-code">api/posts.ts</span></td><td><span class="inline-code">/api/posts</span></td><td>Posts API (Hono sub-app)</td></tr>
              <tr><td><span class="inline-code">api/posts/[id].ts</span></td><td><span class="inline-code">/api/posts/:id</span></td><td>Single post API</td></tr>
              <tr><td><span class="inline-code">api/users/index.ts</span></td><td><span class="inline-code">/api/users</span></td><td>Users list API</td></tr>
            </tbody>
          </table>

          <h2>Type-Safe RPC</h2>
          <p>KISS leverages Hono RPC for end-to-end type safety. No code generation needed:</p>
          <code-block><pre><code>// Server: app/routes/api/posts.ts
import { Hono } from 'hono'

const app = new Hono()
  .get('/', (c) => c.json([{ id: 1, title: 'Hello' }]))
  .post('/', async (c) => {
    const body = await c.req.json()
    return c.json({ ok: true }, 201)
  })

export default app
export type AppType = typeof app</code></pre></code-block>

          <code-block><pre><code>// Client: app/islands/post-list.ts
import { hc } from 'hono/client'
import type { AppType } from '../routes/api/posts.ts'

const client = hc&lt;AppType&gt;('/api/posts')
const res = await client.index.$get()
const posts = await res.json()  // Fully typed!</code></pre></code-block>

          <h2>Validation (User Choice)</h2>
          <p>Zod and <span class="inline-code">@hono/zod-validator</span> are NOT framework dependencies — they're your project-level choice:</p>
          <code-block><pre><code>import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

const schema = z.object({ title: z.string(), body: z.string() })

app.post('/', zValidator('json', schema), async (c) => {
  const data = c.req.valid('json')  // Typed!
  return c.json({ ok: true, data }, 201)
})</code></pre></code-block>

          <h2>Error Response Format</h2>
          <p>All KISS errors produce consistent JSON responses:</p>
          <code-block><pre><code>{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Title is required",
    "status": 400
  }
}</code></pre></code-block>

          <div class="nav-row">
            <a href="/guide/api-routes" class="nav-link">&larr; API Routes</a>
            <a href="/guide/ssg" class="nav-link">SSG &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};or.styles=[j,D`

    .principle { padding: 1rem; background: var(--kiss-bg-surface);  border-left: 3px solid var(--kiss-border-hover); border-radius: 0 3px 3px; margin: 0.75rem 0; font-size: 0.875rem; }

`];let Sa=or;customElements.define("page-api-design",Sa);const Rl="page-api-design",ur=class ur extends x{render(){return C`
      <kiss-layout currentPath="/guide/api-routes">
        <div class="container">
          <h1>API Routes</h1>
          <p class="subtitle">Create backend endpoints using Hono — the HTTP layer of KISS.</p>

          <h2>Create an API Route</h2>
          <code-block
          ><pre><code>// app/routes/api/posts.ts
            import { Hono } from 'hono'

            const app = new Hono()

            app.get('/', (c) => {
              return c.json([
                { id: 1, title: 'Hello KISS' }
              ])
            })

            app.post('/', async (c) => {
              const body = await c.req.json()
              return c.json({ id: 2, ...body }, 201)
            })

            export default app</code></pre></code-block>

            <h2>With Validation</h2>
            <code-block
            ><pre><code>// app/routes/api/posts.ts
              import { Hono } from 'hono'
              import { zValidator } from '@hono/zod-validator'
              import { z } from 'zod'

              const app = new Hono()

              const schema = z.object({
                title: z.string().min(1),
                body: z.string(),
              })

              app.post('/', zValidator('json', schema), (c) => {
                const data = c.req.valid('json')
                return c.json({ id: 1, ...data }, 201)
              })

              export default app</code></pre></code-block>

              <h2>Type-Safe RPC</h2>
              <p>Use <span class="inline-code">@kissjs/rpc</span> for end-to-end type safety:</p>
              <code-block
              ><pre><code>// Server: export the type
                export type AppType = typeof app

                // Client: in an Island
                import { RpcController } from '@kissjs/rpc'
                import { hc } from 'hono/client'
                import type { AppType } from '../routes/api/posts'

                class MyIsland extends LitElement {
                  private rpc = new RpcController(this)
                  private client = hc&lt;AppType&gt;('/')

                  async loadPosts() {
                    const res = await this.rpc.call(() =>
                      this.client.api.posts.$get()
                    )
                  }
                }</code></pre></code-block>

                <div class="nav-row">
                  <a href="/guide/islands" class="nav-link">&larr; Islands</a>
                  <a href="/guide/api-design" class="nav-link">API Design &rarr;</a>
                </div>
              </div>
            </kiss-layout>
          `}};ur.styles=[j,D`
    `];let _a=ur;customElements.define("page-api-routes",_a);const Dl="page-api-routes",cr=class cr extends x{render(){return C`
      <kiss-layout currentPath="/guide/architecture">
        <div class="container">
          <h1>Architecture</h1>
          <p class="subtitle">
            How KISS Framework implements the K·I·S·S Architecture constraints —
            connecting Hono, Lit, and Vite into one plugin.
          </p>

          <h2>User Perspective</h2>
          <code-block
            ><pre><code>// vite.config.ts — your only config
import { kiss } from '@kissjs/core'
export default defineConfig({
  plugins: [kiss()]
})</code></pre></code-block
          >

          <h2>KISS Architecture = Jamstack, Web Standards Native</h2>
          <p>
            The K·I·S·S constraints align 1:1 with Jamstack's three pillars,
            implemented entirely through Web Standards:
          </p>
          <table>
            <thead>
              <tr>
                <th>Jamstack</th>
                <th>KISS Constraint</th>
                <th>Implementation</th>
                <th>Web Standard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>M</strong>arkup</td>
                <td>K + S (Knowledge + Semantic)</td>
                <td>SSG + DSD — zero-JS static HTML</td>
                <td>Declarative Shadow DOM</td>
              </tr>
              <tr>
                <td><strong>A</strong>PIs</td>
                <td>S (Static — Serverless extension)</td>
                <td>API Routes — Hono handlers + RPC</td>
                <td>Fetch API</td>
              </tr>
              <tr>
                <td><strong>J</strong>avaScript</td>
                <td>I (Isolated)</td>
                <td>Islands — Shadow DOM + lazy hydration</td>
                <td>Web Components</td>
              </tr>
            </tbody>
          </table>
          <p>
            No other framework covers all three Jamstack dimensions with native
            Web Standards.
          </p>

          <h2>Plugin Composition</h2>
          <p>
            The <span class="inline-code">kiss()</span> function returns an
            array of Vite plugins, each enforcing a specific KISS constraint:
          </p>
          <table>
            <thead>
              <tr>
                <th>Plugin</th>
                <th>Hook</th>
                <th>Role</th>
                <th>Constraint</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>kiss:core</td>
                <td>configResolved + buildStart</td>
                <td>Route scanning + virtual module generation</td>
                <td>K (Knowledge)</td>
              </tr>
              <tr>
                <td>kiss:virtual-entry</td>
                <td>resolveId + load</td>
                <td>Provide virtual:kiss-hono-entry</td>
                <td>—</td>
              </tr>
              <tr>
                <td>@hono/vite-dev-server</td>
                <td>configureServer</td>
                <td>Dev mode Hono middleware</td>
                <td>—</td>
              </tr>
              <tr>
                <td>island-transform</td>
                <td>transform</td>
                <td>AST marking (__island, __tagName)</td>
                <td>I (Isolated)</td>
              </tr>
              <tr>
                <td>island-extractor</td>
                <td>build</td>
                <td>Build-time island dependency analysis</td>
                <td>I (Isolated)</td>
              </tr>
              <tr>
                <td>html-template</td>
                <td>transformIndexHtml</td>
                <td>Preload, meta, hydration injection</td>
                <td>I (Isolated)</td>
              </tr>
              <tr>
                <td>kiss:ssg</td>
                <td>closeBundle</td>
                <td>Static site generation with DSD</td>
                <td>K + S (Knowledge + Static)</td>
              </tr>
              <tr>
                <td>kiss:build</td>
                <td>build</td>
                <td>Island client JS bundles</td>
                <td>I (Isolated)</td>
              </tr>
            </tbody>
          </table>

          <h2>Request Lifecycle (Dev)</h2>
          <code-block
            ><pre><code>Request → Vite Dev Server → Hono middleware → Route match
  → Vite SSR (ssrLoadModule) → @lit-labs/ssr renders Lit
  → HTML + Declarative Shadow DOM → Inject Island hydration → Response</code></pre></code-block
          >

          <h2>Build Lifecycle (SSG)</h2>
          <code-block
            ><pre><code>vite build → closeBundle hook:
  1. Scan routes                             ← K: all routes known at build time
  2. Generate SSG entry with DOM shim
  3. Create Vite SSR server (configFile: false)
  4. Load entry → Hono app → toSSG()
  5. @lit-labs/ssr renders each page with DSD ← K: content encoded in HTML
  6. Island components → separate JS chunks    ← I: isolated JS bundles
  7. Non-Island components → zero client JS    ← I: no JS where not needed
  8. Write dist/ as static HTML                ← S: static output only</code></pre></code-block
          >

          <h2>Full-Stack Deployment</h2>
          <p>
            KISS Architecture's S constraint (Static) means you deploy two
            things independently:
          </p>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Content</th>
                <th>Constraint</th>
                <th>Deploy To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>dist/</strong> (static)</td>
                <td>HTML + DSD + Island JS</td>
                <td>K + I + S</td>
                <td>CDN / GitHub Pages / S3</td>
              </tr>
              <tr>
                <td><strong>API Routes</strong> (dynamic)</td>
                <td>Hono handlers</td>
                <td>S (Serverless)</td>
                <td>Serverless (Deno Deploy / CF Workers)</td>
              </tr>
            </tbody>
          </table>
          <p>
            Static files go to CDN for global performance. API Routes deploy as
            Serverless functions. Zero coupling between the two. This is the
            Jamstack model enforced by the S constraint.
          </p>

          <h2>DSD Output</h2>
          <p>
            Every Lit component rendered by
            <span class="inline-code">@lit-labs/ssr</span> outputs
            <strong>Declarative Shadow DOM</strong>. This satisfies the K
            constraint (content knowledge at build time) and the S constraint
            (semantic baseline without JS):
          </p>
          <code-block
            ><pre><code>&lt;!-- SSG output for a Lit component --&gt;
&lt;app-layout&gt;
  &lt;template shadowrootmode="open"&gt;
    &lt;style&gt;/* scoped styles */&lt;/style&gt;
    &lt;header&gt;...&lt;/header&gt;
    &lt;main&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/main&gt;
    &lt;footer&gt;...&lt;/footer&gt;
  &lt;/template&gt;
  &lt;!-- slotted page content --&gt;
&lt;/app-layout&gt;</code></pre></code-block
          >
          <p>
            Browsers with DSD support render the Shadow DOM content immediately.
            When Lit hydrates, it reuses the existing DOM — no flash, no
            duplication.
          </p>

          <h2>Island Hydration</h2>
          <p>
            At build time, <span class="inline-code">island-transform</span>
            marks island modules. <span class="inline-code">island-extractor</span
            > builds a dependency map. The HTML template plugin injects a
            hydration script that lazy-loads only the island JS bundles the page
            needs. This enforces the I constraint — only Islands get JS.
          </p>

          <div class="nav-row">
            <a href="/guide/testing" class="nav-link">&larr; Testing</a>
            <a href="/guide/deployment" class="nav-link"
              >Deployment &rarr;</a
            >
          </div>
        </div>
      </kiss-layout>
    `}};cr.styles=[j,D`

`];let Aa=cr;customElements.define("page-architecture",Aa);const Ll="page-architecture",dr=class dr extends x{render(){return C`
      <kiss-layout currentPath="/guide/configuration">
        <div class="container">
          <h1>Configuration</h1>
          <p class="subtitle">kiss() options and Vite config reference.</p>

          <h2>kiss() Options</h2>
          <table>
            <thead>
              <tr>
                <th>Option</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="inline-code">routesDir</span></td>
                <td><span class="inline-code">'app/routes'</span></td>
                <td>Directory for page and API routes</td>
              </tr>
              <tr>
                <td><span class="inline-code">islandsDir</span></td>
                <td><span class="inline-code">'app/islands'</span></td>
                <td>Directory for interactive island components</td>
              </tr>
              <tr>
                <td><span class="inline-code">componentsDir</span></td>
                <td><span class="inline-code">'app/components'</span></td>
                <td>Directory for shared components</td>
              </tr>
              <tr>
                <td><span class="inline-code">middleware</span></td>
                <td><span class="inline-code">undefined</span></td>
                <td>Path to Hono middleware module</td>
              </tr>
              <tr>
                <td><span class="inline-code">inject</span> <span class="new-badge">new</span></td>
                <td><span class="inline-code">undefined</span></td>
                <td>Head injection for stylesheets, scripts, fragments</td>
              </tr>
              <tr>
                <td><span class="inline-code">packageIslands</span> <span class="new-badge">new</span></td>
                <td><span class="inline-code">[]</span></td>
                <td>Package names to scan for Islands (auto-detection)</td>
              </tr>
              <tr>
                <td><span class="inline-code">ui</span> <span class="deprecated">deprecated</span></td>
                <td><span class="inline-code">undefined</span></td>
                <td>Use <span class="inline-code">inject</span> instead</td>
              </tr>
            </tbody>
          </table>

          <h2>inject Option <span class="new-badge">new</span></h2>
          <p>
            Generic head injection — replaces the <span class="inline-code">ui</span> option. Works with
            any CDN or local asset:
          </p>
          <code-block
          ><pre><code>kiss({
            inject: {
              stylesheets: [
                'https://cdn.example.com/style.css',
              ],
              scripts: [
                'https://cdn.example.com/ui.js',
              ],
              headFragments: [
                '&lt;meta name="theme-color" content="#0a0a0a"&gt;',
              ],
            },
          })</code></pre></code-block>

          <h2>packageIslands Option <span class="new-badge">new</span></h2>
          <p>
            Auto-detect Islands from npm/JSR packages. The framework scans the package's
            <code>islands</code> export and registers them automatically:
          </p>
          <code-block><pre><code>kiss({
  packageIslands: ['@kissjs/ui'], // Scan @kissjs/ui for Islands
})</code></pre></code-block>
          <p>
            The package must export an <code>islands</code> array with Island metadata. See
            <a href="/guide/islands">Islands Architecture</a> for details.
          </p>

          <h2>Full Config Example</h2>
          <code-block
          ><pre><code>// vite.config.ts
            import { kiss } from '@kissjs/core'
            import { defineConfig } from 'vite'

            export default defineConfig({
              base: '/',         // set '/repo/' for GitHub Pages
              plugins: [
                kiss({
                  routesDir: 'app/routes',
                  islandsDir: 'app/islands',
                  componentsDir: 'app/components',
                  middleware: 'app/middleware.ts',

                  // Auto-detect Islands from packages
                  packageIslands: ['@kissjs/ui'],

                  // Generic head injection (preferred)
                  inject: {
                    stylesheets: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/styles.css'],
                    scripts: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/webawesome.loader.js'],
                  },

                  // Old WebAwesome CDN shortcut (deprecated, use inject instead)
                  // ui: { cdn: true, version: '3.5.0' },
                }),
              ],
            })</code></pre></code-block>

            <h2>Project Structure Convention</h2>
            <code-block
            ><pre><code>my-app/
              app/
                routes/        # File-based routing
                  index.ts     # /
                  about.ts     # /about
                  api/
                    posts.ts   # /api/posts (Hono)
                  islands/       # Interactive components (auto-detected)
                    counter.ts
                  components/    # Shared Lit components
                    header.ts
                  deno.json
                  vite.config.ts</code></pre></code-block>

                  <div class="nav-row">
                    <a href="/guide/ssg" class="nav-link">&larr; SSG</a>
                    <a href="/guide/error-handling" class="nav-link">Error Handling &rarr;</a>
                  </div>
                </div>
              </kiss-layout>
            `}};dr.styles=[j,D`
      .deprecated {
        color: var(--kiss-text-tertiary);
        text-decoration: line-through;
      }
      .new-badge {
        display: inline-block;
        background: var(--kiss-accent-subtle);
        color: var(--kiss-accent);
        padding: 0.125rem 0.375rem;
        border-radius: 3px;
        font-size: 0.6875rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        vertical-align: middle;
      }
    `];let ka=dr;customElements.define("page-configuration",ka);const Ol="page-configuration",lr=class lr extends x{render(){return C`
      <kiss-layout currentPath="/guide/deployment">
        <div class="container">
          <h1>Deployment</h1>
          <p class="subtitle">
            Build once, deploy anywhere. KISS Architecture (S: Static) — static frontend + Serverless
            APIs.
          </p>

          <h2>Build</h2>
          <code-block
          ><pre><code>deno run -A npm:vite build
            # Output: dist/ directory with static HTML + island JS chunks</code></pre></code-block>

            <h2>Full-Stack Architecture</h2>
            <p>KISS Architecture's S constraint means two independent deployment targets:</p>
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Content</th>
                  <th>Deploy To</th>
                  <th>Scaling</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Static Frontend</strong></td>
                  <td>dist/ (HTML + DSD + Island JS)</td>
                  <td>CDN / GitHub Pages / S3</td>
                  <td>Global edge cache</td>
                </tr>
                <tr>
                  <td><strong>API Routes</strong></td>
                  <td>Hono handlers</td>
                  <td>Serverless functions</td>
                  <td>Auto-scale on demand</td>
                </tr>
              </tbody>
            </table>
            <p>
              Static files and API functions are decoupled. Frontend deploys to the cheapest possible
              hosting; APIs deploy to Serverless platforms and scale independently.
            </p>

            <h2>Static Frontend Deployment</h2>
            <p>
              KISS Architecture produces only static files. The <span class="inline-code">dist/</span>
              directory contains HTML (with DSD) and island JS bundles. Deploy to any static host.
            </p>

            <div class="platform-grid">
              <div class="platform-card">
                <h3>GitHub Pages</h3>
                <p>Set base to /repo-name/ in vite.config.ts</p>
              </div>
              <div class="platform-card">
                <h3>Cloudflare Pages</h3>
                <p>Point to dist/ directory</p>
              </div>
              <div class="platform-card">
                <h3>Vercel</h3>
                <p>Framework: Other, output: dist/</p>
              </div>
              <div class="platform-card">
                <h3>Netlify</h3>
                <p>Publish directory: dist/</p>
              </div>
              <div class="platform-card">
                <h3>S3 + CloudFront</h3>
                <p>Upload dist/ to S3 bucket</p>
              </div>
              <div class="platform-card">
                <h3>Any static host</h3>
                <p>Just upload dist/</p>
              </div>
            </div>

            <h2>API Routes Deployment</h2>
            <p>
              Hono API routes can be deployed as Serverless functions to any platform that supports
              JavaScript:
            </p>
            <div class="platform-grid">
              <div class="platform-card">
                <h3>Deno Deploy</h3>
                <p>Native Hono support, zero config</p>
              </div>
              <div class="platform-card">
                <h3>Cloudflare Workers</h3>
                <p>Hono adapter built-in</p>
              </div>
              <div class="platform-card">
                <h3>Vercel Edge Functions</h3>
                <p>Hono adapter available</p>
              </div>
              <div class="platform-card">
                <h3>AWS Lambda</h3>
                <p>Via @hono/aws-lambda adapter</p>
              </div>
            </div>

            <h3>API Route Example</h3>
            <code-block
            ><pre><code>// app/routes/api/posts.ts
              import { Hono } from '@kissjs/core'

              const app = new Hono()
              app.get('/', (c) => c.json({ posts: [] }))

              export default app
              export type AppType = typeof app</code></pre></code-block>

              <h2>GitHub Pages Setup</h2>
              <code-block
              ><pre><code>// vite.config.ts
                export default defineConfig({
                  base: '/my-repo/',
                  plugins: [kiss()],
                })</code></pre></code-block>

                <p>
                  Add a GitHub Actions workflow to build and deploy on push to main. See the <span
                    class="inline-code"
                  >.github/workflows/deploy.yml</span> in this repo for a working example.
                </p>

                <h2>Why No Server Mode?</h2>
                <p>
                  KISS Architecture's S constraint (Static) — <strong>构建产物仅为纯静态文件</strong> — means
                  build output is the final product. There is no SSR runtime in production. This is not a
                  limitation; it's a discipline that guarantees:
                </p>
                <ul>
                  <li>Zero server maintenance cost</li>
                  <li>CDN-grade performance globally</li>
                  <li>Content available without JavaScript (DSD)</li>
                  <li>Deployable to the cheapest possible hosting</li>
                  <li>Static and dynamic scale independently</li>
                </ul>
                <p>
                  Dynamic data belongs in API Routes, not in a monolithic server. This is the Jamstack way — and
                  KISS Architecture enforces it as the S constraint, not convention.
                </p>

                <div class="nav-row">
                  <a href="/guide/architecture" class="nav-link">&larr; Architecture</a>
                  <a href="/styling/kiss-ui" class="nav-link">@kissjs/ui &rarr;</a>
                </div>
              </div>
            </kiss-layout>
          `}};lr.styles=[j,D`
      .platform-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin: 1rem 0 1.5rem;
      }
      .platform-card {
        padding: 1rem 1.25rem;
        border: 1px solid var(--kiss-border);
        border-radius: 3px;
      }
      .platform-card h3 {
        margin: 0 0 0.5rem;
        font-size: 0.9375rem;
        color: var(--kiss-text-primary);
      }
      .platform-card p {
        margin: 0;
        font-size: 0.8125rem;
        color: var(--kiss-text-secondary);
      }
    `];let va=lr;customElements.define("page-deployment",va);const wl="page-deployment",hr=class hr extends x{render(){return C`
      <kiss-layout currentPath="/guide/design-philosophy">
        <div class="container">
          <h1>Design Philosophy</h1>
          <p class="subtitle">
            KISS = Keep It Simple, Stupid. Not a slogan — a filter for every decision.
          </p>

          <h2>Five Pillars</h2>

          <div class="pillar">
            <div class="num">Pillar 1</div>
            <h3>Web Standards First</h3>
            <p>
              Most frameworks "support" web standards. KISS
              <em>is</em> web standards.
            </p>
            <p>
              Your code doesn't depend on KISS abstractions. Swap it out, and your Hono/Lit/Vite code
              still works.
            </p>
            <p>
              <span class="hard-constraint">Pure ESM, zero CJS</span>
              <span class="hard-constraint">Vite-only, no second build tool</span>
              <span class="hard-constraint">No patch scripts on output</span>
            </p>
          </div>

          <div class="pillar">
            <div class="num">Pillar 2</div>
            <h3>Minimal Augmentation</h3>
            <p>
              KISS doesn't invent things. It connects existing standard tools with minimum overhead.
            </p>
            <p>
              Framework = 1 Vite plugin (a connector, not a new abstraction).
            </p>
            <p>
              Zero-interaction page: <strong>0 KB</strong> KISS runtime. Single Island: ~6 KB (Lit
              itself).
            </p>
            <p>
              <span class="hard-constraint">Reuse Hono/Vite/Lit ecosystem</span>
              <span class="hard-constraint">New dependencies need ADR</span>
            </p>
          </div>

          <div class="pillar">
            <div class="num">Pillar 3</div>
            <h3>No Framework Binding</h3>
            <p>
              KISS recommends Lit, but you can use something else. You can use @kissjs/core for SSR
              without Lit. You can use Lit without KISS.
            </p>
            <p>
              Package Islands are auto-detected — no manual registration needed. Just export an
              <code>islands</code> array from your package, and KISS finds it.
            </p>
            <p>
              <span class="hard-constraint">Lit is not a forced peerDependency</span>
              <span class="hard-constraint">No mandatory validation scheme</span>
              <span class="hard-constraint">Zero-config Island discovery</span>
            </p>
          </div>

          <div class="pillar">
            <div class="num">Pillar 4</div>
            <h3>No Runtime Binding</h3>
            <p>
              Pure ESM output runs on any runtime that supports ESM: Deno, Node, Bun, Cloudflare Workers.
            </p>
            <p>
              <span class="hard-constraint">No platform-specific hardcoded code</span>
              <span class="hard-constraint">deno.json is dev tooling, not runtime dependency</span>
            </p>
          </div>

          <div class="pillar">
            <div class="num">Pillar 5</div>
            <h3>Progressive Enhancement</h3>
            <p>
              KISS defaults to zero JS. Opt in per component. No SPA — this is architecture, not
              oversight.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Content</th>
                  <th>JS Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>HTML + DSD (Declarative Shadow DOM)</td>
                  <td><strong>0 KB</strong></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Partial Islands with lazy hydration</td>
                  <td>~6 KB / island</td>
                </tr>
              </tbody>
            </table>
            <p>
              No Level 2 SPA, no Level 3 real-time, no Level 4 CSR. This is not a gap — it's a boundary
              defined by KISS Architecture's S constraint.
            </p>
          </div>

          <h2>Philosophy vs Architecture</h2>
          <p>
            The five philosophy pillars describe <strong>how</strong> KISS makes decisions. The KISS
            Architecture (K·I·S·S) constraints define
            <strong>what</strong> the framework enforces.
          </p>
          <table>
            <thead>
              <tr>
                <th>Philosophy Pillar</th>
                <th>Architecture Constraint</th>
                <th>Relationship</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Web Standards First</td>
                <td>All four (K·I·S·S)</td>
                <td>Standards are the foundation of every constraint</td>
              </tr>
              <tr>
                <td>Minimal Augmentation</td>
                <td>I (Isolated)</td>
                <td>Minimum JS = only Islands get JS</td>
              </tr>
              <tr>
                <td>No Framework Binding</td>
                <td>I (Isolated)</td>
                <td>Web Components = zero framework binding</td>
              </tr>
              <tr>
                <td>No Runtime Binding</td>
                <td>S (Static)</td>
                <td>Pure static files = no runtime dependency</td>
              </tr>
              <tr>
                <td>Progressive Enhancement</td>
                <td>K + S (Knowledge + Semantic)</td>
                <td>Build-time knowledge + semantic baseline</td>
              </tr>
            </tbody>
          </table>

          <h2>Capability Layering</h2>
          <p>
            Every feature must pass through the capability ladder. Lower layers first, always:
          </p>
          <table>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Technology</th>
                <th>Only use when</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>L0</strong></td>
                <td>HTML5 semantics</td>
                <td>Structure, content, navigation</td>
              </tr>
              <tr>
                <td><strong>L1</strong></td>
                <td>CSS</td>
                <td>Visual, layout, animation, responsive</td>
              </tr>
              <tr>
                <td><strong>L2</strong></td>
                <td>Platform APIs</td>
                <td>Clipboard, IntersectionObserver, matchMedia</td>
              </tr>
              <tr>
                <td><strong>L3</strong></td>
                <td>Hono / Vite / Lit</td>
                <td>Routing, build, component encapsulation</td>
              </tr>
              <tr>
                <td><strong>L4</strong></td>
                <td>Custom code</td>
                <td>Island hydration, RPC, plugin logic</td>
              </tr>
            </tbody>
          </table>
          <p>
            Skipping a layer = violating the design philosophy. See
            <a href="/guide/dia">KISS Architecture</a>
            for the full decision tree.
          </p>

          <h2>Review Checklist</h2>
          <code-block
          ><pre><code>Before every commit, ask:
            1. New dependency?     → Does it violate "minimal augmentation"?
            2. Modified build?    → Does it violate "Web Standards first"?
            3. New abstraction?   → Are you reinventing the wheel?
            4. Platform code?     → Does it violate "no runtime binding"?
            5. Forced choice?     → Does it violate "no framework binding"?
            6. Added JS?          → Could a lower layer do this instead?
            7. Broke Shadow DOM?  → Is there a DSD-compatible alternative?</code></pre></code-block>
          <p>
            Any "yes" requires an ADR (Architecture Decision Record).
          </p>

          <h2>Competitive Landscape</h2>
          <table>
            <thead>
              <tr>
                <th>Framework</th>
                <th>HTTP</th>
                <th>UI</th>
                <th>Build</th>
                <th>DSD</th>
                <th>Jamstack</th>
                <th>Full Standards</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Next.js</td>
                <td>Custom</td>
                <td>React</td>
                <td>Webpack</td>
                <td>—</td>
                <td>Partial</td>
                <td>0/3</td>
              </tr>
              <tr>
                <td>Astro</td>
                <td>Custom</td>
                <td>Any</td>
                <td>ESM</td>
                <td>—</td>
                <td>Yes</td>
                <td>1/3</td>
              </tr>
              <tr>
                <td>Fresh</td>
                <td>Custom</td>
                <td>Preact</td>
                <td>ESM</td>
                <td>—</td>
                <td>No</td>
                <td>1/3</td>
              </tr>
              <tr>
                <td><strong>KISS</strong></td>
                <td><strong>Fetch API</strong></td>
                <td><strong>Web Components</strong></td>
                <td><strong>ESM</strong></td>
                <td><strong>✓</strong></td>
                <td><strong>Yes</strong></td>
                <td><strong>3/3</strong></td>
              </tr>
            </tbody>
          </table>

          <div class="nav-row">
            <a href="/guide/getting-started" class="nav-link">&larr; Getting Started</a>
            <a href="/guide/dia" class="nav-link">KISS Architecture &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};hr.styles=[j,D`
      .pillar {
        padding: 1.25rem;
        margin: 1rem 0;
        border-left: 3px solid var(--kiss-border-hover);
        background: var(--kiss-bg-surface);
        border-radius: 0 3px 3px 0;
      }
      .pillar .num {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--kiss-text-muted);
        margin-bottom: 0.25rem;
      }
      .pillar .hard-constraint {
        display: inline-block;
        background: var(--kiss-code-bg);
        border: 1px solid var(--kiss-border-hover);
        padding: 0.25rem 0.625rem;
        border-radius: 4px;
        font-size: 0.8125rem;
        margin: 0.125rem 0;
      }
    `];let ya=hr;customElements.define("page-design-philosophy",ya);const Pl="page-design-philosophy",pr=class pr extends x{render(){return C`
      <kiss-layout currentPath="/guide/dia">
        <div class="container">
          <h1>KISS Architecture</h1>
          <p class="subtitle">
            Knowledge · Isolated · Semantic · Static — 融合 Jamstack
            部署模型与声明式岛屿交互范式的全栈架构风格。
          </p>

          <h2>双重指代</h2>
          <p>
            <strong>KISS</strong> 同时是哲学和架构。两个含义精神一致——约束就是简单。
          </p>
          <table>
            <thead>
              <tr>
                <th>含义</th>
                <th>解释</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>哲学</strong></td>
                <td>
                  Keep It Simple, Stupid — 简单即力量，每个决策都经过"够不够简单"的过滤
                </td>
              </tr>
              <tr>
                <td><strong>架构</strong></td>
                <td>
                  Knowledge · Isolated · Semantic · Static — 四个不可违抗的架构约束
                </td>
              </tr>
            </tbody>
          </table>

          <h2>四约束</h2>
          <p>
            KISS 框架实现的正是 KISS 架构——K·I·S·S 是四个架构约束的缩写：
          </p>

          <div class="constraint">
            <span class="letter">K</span>
            <span class="constraint-name">Knowledge</span>
            <span class="constraint-cn">知识</span>
            <p>
              所有内容在构建时预渲染为语义 HTML 静态文件。页面骨架、正文、导航在 JS 执行前即可见。
            </p>
            <p>
              对应 Jamstack 的 M (Markup)：构建时渲染 =
              内容的完整知识在构建时已确定，运行时不需要重新获取。
            </p>
            <p>
              <span class="hard-constraint">SSG + DSD output</span>
              <span class="hard-constraint">Content visible before JS</span>
            </p>
          </div>

          <div class="constraint">
            <span class="letter">I</span>
            <span class="constraint-name">Isolated</span>
            <span class="constraint-cn">隔离</span>
            <p>
              任何客户端 JS 只能存在于独立 Island 组件的 Shadow DOM 内部。一个 Island
              的失败不影响其他部分。
            </p>
            <p>
              对应 Jamstack 的 J
              (JavaScript)：交互是孤岛，不是汪洋。每个岛屿独立加载、独立运行、独立失败。
            </p>
            <p>
              <span class="hard-constraint">Island = Shadow DOM + lazy hydration</span>
              <span class="hard-constraint">Non-Island = zero client JS</span>
            </p>
          </div>

          <div class="constraint">
            <span class="letter">S</span>
            <span class="constraint-name">Semantic</span>
            <span class="constraint-cn">语义</span>
            <p>
              每个 Island 包裹原生 HTML 元素（<span
                class="inline-code"
              >&lt;form&gt;</span>、<span class="inline-code">&lt;a&gt;</span>、<span
                class="inline-code"
              >&lt;details&gt;</span>），禁用 JS 时提供等价基线功能。
            </p>
            <p>
              对应 Progressive Enhancement 的核心：内容优先，增强在后。但在 KISS
              中，这不是建议——而是可验证的约束。
            </p>
            <p>
              <span class="hard-constraint">DSD makes content declaratively visible</span>
              <span class="hard-constraint">No-JS baseline must be functional</span>
            </p>
          </div>

          <div class="constraint">
            <span class="letter">S</span>
            <span class="constraint-name">Static</span>
            <span class="constraint-cn">静态</span>
            <p>
              构建产物仅为纯静态文件，无持久服务端进程。可部署到任何 CDN 或静态托管，零运行时锁定。
            </p>
            <p>
              对应 Jamstack 的部署模型：静态前端 + Serverless API。动态数据通过 API Routes（Hono +
              RPC）获取，部署为 Serverless 函数。
            </p>
            <p>
              <span class="hard-constraint">No SSR runtime in production</span>
              <span class="hard-constraint">No CSR / SPA</span>
              <span class="hard-constraint">Deploy to CDN + Serverless</span>
            </p>
          </div>

          <h2>三范式继承</h2>
          <p>
            KISS
            架构不发明新的渲染算法或通信协议。它识别出三个范式各自领域中被验证有效的约束，将它们组合成一套严格、可验证、不可关闭的架构规则。
          </p>

          <table>
            <thead>
              <tr>
                <th>范式</th>
                <th>KISS 继承了什么</th>
                <th>KISS 的强化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Jamstack</strong></td>
                <td>静态优先、前后端分离的部署模型</td>
                <td>固化为不可配置的框架规则，而非最佳实践建议</td>
              </tr>
              <tr>
                <td><strong>Islands Architecture</strong></td>
                <td>静态海洋中的独立交互岛屿</td>
                <td>
                  要求所有 Island 必须是 Shadow DOM 内的 Web Component，跨岛通信只能通过声明式机制
                </td>
              </tr>
              <tr>
                <td><strong>Progressive Enhancement</strong></td>
                <td>内容优先，增强在后</td>
                <td>
                  从开发者最佳实践提升为框架层面的可验证约束——Island 内部没有语义降级元素，就不符合 KISS
                  规范
                </td>
              </tr>
            </tbody>
          </table>

          <div class="quote-block">
            KISS 对 Jamstack、Islands 和渐进增强三者关系的处理，类似于 Haskell
            对函数式编程原则的处理：不是发明了纯函数这一概念，而是通过编译器/框架约束，使这一概念不可违抗。
            <div class="attribution">
              — KISS Architecture 的核心定位：Web 前端的"强类型系统"
            </div>
          </div>

          <p>
            框架的 <span class="inline-code">kiss build</span>
            命令就是这套规则的编译验证器——不满足架构约束的输出，不会产生。
          </p>

          <h2>KISS = Jamstack</h2>
          <p>
            KISS 架构与 Jamstack 天然 1:1 对齐。K·I·S·S 四约束覆盖了 Jamstack 的三个维度，但用 Web
            Standards 原生实现：
          </p>

          <div class="jamstack-map">
            <div class="jam-row">
              <span class="jam-letter">J</span>
              <span class="jam-label">JavaScript</span>
              <span class="jam-desc">交互不膨胀，按需加载</span>
              <span class="jam-kiss">→ I: Isolated（~6KB/island）</span>
            </div>
            <div class="jam-row">
              <span class="jam-letter">A</span>
              <span class="jam-label">APIs</span>
              <span class="jam-desc">动态数据，类型安全</span>
              <span class="jam-kiss">→ S: Static 的 Serverless 扩展</span>
            </div>
            <div class="jam-row">
              <span class="jam-letter">M</span>
              <span class="jam-label">Markup</span>
              <span class="jam-desc">预渲染输出，零 JS 可见</span>
              <span class="jam-kiss">→ K+I+S: Knowledge + DSD + Semantic</span>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>维度</th>
                <th>传统 Jamstack</th>
                <th>KISS Architecture</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Markup</td>
                <td>SSG 框架生成</td>
                <td>SSG + DSD（Shadow DOM 内容可达）</td>
              </tr>
              <tr>
                <td>APIs</td>
                <td>第三方 Serverless</td>
                <td>内置 API Routes（Hono，端到端类型安全）</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>SPA 或全量 hydration</td>
                <td>Islands（Shadow DOM 封装 + 懒水合）</td>
              </tr>
              <tr>
                <td>UI 标准</td>
                <td>React/Vue/Svelte</td>
                <td>Web Components（零框架绑定）</td>
              </tr>
              <tr>
                <td>HTTP 标准</td>
                <td>框架自定义</td>
                <td>Fetch API（Hono 原生）</td>
              </tr>
              <tr>
                <td>运行时</td>
                <td>Node.js / Deno 依赖</td>
                <td>零运行时绑定（纯 ESM）</td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>KISS 是唯一全链路 Web Standards 的 Jamstack 架构。</strong>HTTP = Fetch API，UI = Web
            Components，Build = ESM。3/3 标准覆盖。
          </p>

          <h2>DSD：KISS 的桥梁</h2>
          <p>
            Declarative Shadow DOM 是 KISS Architecture 与 Web Components 之间的桥梁。它解决了"封装 vs
            可达"的根本矛盾：
          </p>

          <table>
            <thead>
              <tr>
                <th>需求</th>
                <th>传统 WC</th>
                <th>DSD (KISS)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shadow DOM 封装</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>JS 加载前内容可见</td>
                <td>✗（需要 JS 注册组件）</td>
                <td>✓（浏览器原生渲染 template）</td>
              </tr>
              <tr>
                <td>SEO / 爬虫可达</td>
                <td>✗</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>样式隔离</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>无 JS 降级</td>
                <td>✗</td>
                <td>✓（polyfill 回退）</td>
              </tr>
            </tbody>
          </table>

          <p>
            DSD 让 K 约束（Knowledge）和 S
            约束（Semantic）同时成立：内容在构建时已完整编码（K），且以声明式方式可达（S）。
          </p>

          <h3>SSG 输出示例</h3>
          <div class="dsd-diagram">
            app-layout (Shadow DOM + DSD): ┌─────────────────────────────────────────────┐ │
            &lt;app-layout&gt; │ │ &lt;template shadowrootmode="open"&gt; │ │ &lt;style&gt;/* scoped
            styles */&lt;/style&gt; │ │ &lt;header&gt;...&lt;/header&gt; │ │ &lt;nav&gt;...&lt;/nav&gt; │
            │ &lt;main&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/main&gt; │ │ &lt;footer&gt;...&lt;/footer&gt; │ │
            &lt;/template&gt; │ │ &lt;!-- slotted content --&gt; │ │
            &lt;page-home&gt;...&lt;/page-home&gt; │ │ &lt;/app-layout&gt; │
            └─────────────────────────────────────────────┘ 浏览器行为： DSD 支持：直接渲染 Shadow DOM
            内容（零 JS） ← K 约束 JS 加载后：Lit 组件 hydrate，恢复交互 ← I 约束 旧浏览器：polyfill 展开
            template → 内容可见 ← S 约束 部署：纯静态文件，CDN 即可 ← S 约束
          </div>

          <h2>分层原则：能力下沉，依赖上移</h2>
          <p>每一层只做上一层做不了的事。能用低层能力解决的事情，绝不引入高层依赖。</p>

          <div class="layer-ladder">
            <div class="layer">
              <span class="level">L0</span>
              <span class="name">HTML5 语义</span>
              <span class="desc">结构、内容、导航</span>
              <span class="example">&lt;details&gt;, aria-current</span>
            </div>
            <div class="layer">
              <span class="level">L1</span>
              <span class="name">CSS 表现</span>
              <span class="desc">视觉、布局、动画、响应式</span>
              <span class="example">:focus-within, @media, scroll-snap</span>
            </div>
            <div class="layer">
              <span class="level">L2</span>
              <span class="name">平台 API</span>
              <span class="desc">浏览器原生能力</span>
              <span class="example">Clipboard, IntersectionObserver, matchMedia</span>
            </div>
            <div class="layer">
              <span class="level">L3</span>
              <span class="name">Hono / Vite / Lit</span>
              <span class="desc">路由、构建、组件封装</span>
              <span class="example">LitElement, Hono RPC, Vite plugins</span>
            </div>
            <div class="layer">
              <span class="level">L4</span>
              <span class="name">自研代码</span>
              <span class="desc">Island 水合、RPC、插件逻辑</span>
              <span class="example">kiss:island-transform, RpcController</span>
            </div>
          </div>

          <h3>分层审查清单</h3>
          <code-block
          ><pre><code>每写一行代码，问自己：

          1. HTML5 能做吗？    → 用语义标签 + 属性
          2. CSS 能做吗？      → 用声明式样式
          3. 平台 API 能做吗？  → 用原生浏览器接口
          4. 框架能做吗？      → 用 Hono/Vite/Lit
          5. 都不行？         → 才写自研代码（Island）

          跳过任何一层 = 违反 KISS 架构约束</code></pre></code-block>

          <h2>Island 决策树</h2>
          <p>
            每个交互需求必须通过决策树验证。如果低层能解决，就不能成为 Island——这是 I
            约束（Isolated）的执行工具。
          </p>
          <div class="decision-tree">
            需要交互？ ├─ 只需内容可见？ → L0: DSD 输出（零 JS） ← K 约束 ├─ 只需视觉状态？ → L1:
            CSS（:hover, :focus-within, details[open]） ├─ 只需浏览器能力？ → L2: 平台 API（Clipboard,
            IntersectionObserver） ├─ 需要组件封装？ → L3: Lit 组件 + DSD（构建时渲染） └─ 以上都不行？ →
            L4: Island（Shadow DOM + 懒水合）← I 约束 典型判定： Sidebar 高亮 → aria-current + CSS (L0+L1,
            非 Island) Sidebar 折叠 → &lt;details&gt;/&lt;summary&gt; (L0, 非 Island) 代码复制按钮 →
            Island + Clipboard API (L2+L4, 合法 Island) RPC 数据交互 → Island + RpcController (L4, 合法
            Island) 主题切换 → color-scheme + CSS vars (L1, 非 Island)
          </div>

          <h2>KISS vs 其他架构</h2>
          <table>
            <thead>
              <tr>
                <th>维度</th>
                <th>Astro</th>
                <th>Fresh</th>
                <th>Next.js</th>
                <th>KISS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>预渲染</td>
                <td>✓ SSG</td>
                <td>✓ SSR</td>
                <td>✓ SSG/SSR</td>
                <td>✓ SSG</td>
              </tr>
              <tr>
                <td>Islands</td>
                <td>✓</td>
                <td>✓ Preact</td>
                <td>✗</td>
                <td>✓ WC + DSD</td>
              </tr>
              <tr>
                <td>DSD 内容可达</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>✓ K+S 约束</td>
              </tr>
              <tr>
                <td>Shadow DOM 封装</td>
                <td>✗</td>
                <td>✗</td>
                <td>✗</td>
                <td>✓ I 约束</td>
              </tr>
              <tr>
                <td>Jamstack 原生</td>
                <td>✓</td>
                <td>✗（需 Deno Deploy）</td>
                <td>✗（需 Node）</td>
                <td>✓ S 约束</td>
              </tr>
              <tr>
                <td>语义基线强制</td>
                <td>✗</td>
                <td>✗</td>
                <td>✗</td>
                <td>✓ S 约束</td>
              </tr>
              <tr>
                <td>允许 SPA</td>
                <td>✓ (View Transitions)</td>
                <td>✗</td>
                <td>✓</td>
                <td>✗ S 约束</td>
              </tr>
              <tr>
                <td>运行时绑定</td>
                <td>Deno/Node</td>
                <td>Deno only</td>
                <td>Node only</td>
                <td>零绑定</td>
              </tr>
              <tr>
                <td>UI 标准</td>
                <td>React/Vue/Svelte</td>
                <td>Preact</td>
                <td>React</td>
                <td>Web Components</td>
              </tr>
              <tr>
                <td>HTTP 标准</td>
                <td>Custom</td>
                <td>Custom</td>
                <td>Custom</td>
                <td>Fetch API</td>
              </tr>
              <tr>
                <td>Web Standards 覆盖</td>
                <td>1/3</td>
                <td>1/3</td>
                <td>0/3</td>
                <td>3/3</td>
              </tr>
            </tbody>
          </table>

          <h2>架构合规审查</h2>
          <code-block
          ><pre><code>每次提交前，审查 K·I·S·S 四约束：

          K — 新内容需要运行时获取？  → 应在构建时预渲染
          I — 新增了全局 JS？         → 必须封装为 Island Shadow DOM
          S — Island 禁用 JS 可用吗？  → 必须包裹语义 HTML 基线
          S — 引入了服务端进程？       → 只允许静态文件 + Serverless API</code></pre></code-block>

          <div class="nav-row">
            <a href="/guide/design-philosophy" class="nav-link">&larr; Design Philosophy</a>
            <a href="/guide/routing" class="nav-link">Routing &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};pr.styles=[j,D`
      .constraint {
        padding: 1.25rem 1.5rem;
        margin: 1rem 0;
        border-left: 3px solid var(--kiss-border-hover);
        background: var(--kiss-bg-surface);
        border-radius: 0 3px 3px 0;
      }
      .constraint .letter {
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--kiss-text-primary);
        display: inline-block;
        width: 2rem;
      }
      .constraint .constraint-name {
        font-size: 1.0625rem;
        font-weight: 600;
        color: var(--kiss-text-primary);
      }
      .constraint .constraint-cn {
        font-size: 0.8125rem;
        color: var(--kiss-text-muted);
        margin-left: 0.5rem;
      }
      .constraint .constraint .hard-constraint {
        margin-left: 2.5rem;
      }
      .hard-constraint {
        display: inline-block;
        background: var(--kiss-code-bg);
        border: 1px solid var(--kiss-border-hover);
        padding: 0.25rem 0.625rem;
        border-radius: 4px;
        font-size: 0.8125rem;
        margin: 0.125rem 0;
      }
      .layer-ladder {
        margin: 1rem 0 1.5rem;
      }
      .layer {
        display: flex;
        align-items: center;
        padding: 0.625rem 1rem;
        border: 1px solid var(--kiss-border);
        margin-bottom: -1px;
        font-size: 0.875rem;
      }
      .layer:first-child {
        border-radius: 3px 3px 0 0;
      }
      .layer:last-child {
        border-radius: 0 0 3px 3px;
      }
      .layer .level {
        width: 2.5rem;
        font-weight: 700;
        color: var(--kiss-text-tertiary);
        font-family: "SF Mono", "Fira Code", monospace;
      }
      .layer .name {
        width: 9rem;
        font-weight: 600;
        color: var(--kiss-accent-dim);
      }
      .layer .desc {
        flex: 1;
        color: var(--kiss-text-secondary);
      }
      .layer .example {
        color: var(--kiss-text-tertiary);
        font-family: "SF Mono", "Fira Code", monospace;
        font-size: 0.8125rem;
      }

      .decision-tree {
        padding: 1rem;
        background: var(--kiss-bg-surface);
        border-left: 3px solid var(--kiss-border-hover);
        border-radius: 0 3px 3px;
        margin: 0.75rem 0;
        font-size: 0.8125rem;
        line-height: 1.8;
        color: var(--kiss-text-secondary);
        font-family: "SF Mono", "Fira Code", monospace;
        white-space: pre-wrap;
      }
      .dsd-diagram {
        padding: 1rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 3px;
        margin: 0.75rem 0;
        font-size: 0.8125rem;
        line-height: 1.7;
        color: var(--kiss-text-secondary);
        font-family: "SF Mono", "Fira Code", monospace;
        white-space: pre-wrap;
      }
      .jamstack-map {
        padding: 1.25rem;
        margin: 1rem 0;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 3px;
      }
      .jamstack-map .jam-row {
        display: flex;
        align-items: baseline;
        margin: 0.5rem 0;
        font-size: 0.9375rem;
      }
      .jamstack-map .jam-letter {
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--kiss-text-primary);
        width: 2rem;
        text-align: center;
      }
      .jamstack-map .jam-label {
        font-weight: 600;
        color: var(--kiss-accent-dim);
        width: 8rem;
      }
      .jamstack-map .jam-desc {
        color: var(--kiss-text-secondary);
        flex: 1;
      }
      .jamstack-map .jam-kiss {
        color: var(--kiss-text-secondary);
        font-family: "SF Mono", "Fira Code", monospace;
        font-size: 0.8125rem;
      }
      .quote-block {
        padding: 1.25rem 1.5rem;
        margin: 1.5rem 0;
        border-left: 3px solid var(--kiss-border-hover);
        background: var(--kiss-bg-surface);
        border-radius: 0 3px 3px 0;
        font-style: italic;
        color: var(--kiss-text-muted);
        line-height: 1.7;
      }
      .quote-block .attribution {
        margin-top: 0.5rem;
        font-size: 0.8125rem;
        color: var(--kiss-text-tertiary);
        font-style: normal;
      }
    `];let Ia=pr;customElements.define("page-kiss-architecture",Ia);const Ml="page-kiss-architecture",mr=class mr extends x{render(){return C`
      <kiss-layout currentPath="/guide/error-handling">
        <div class="container">
          <h1>Error Handling</h1>
          <p class="subtitle">
            Type-safe error hierarchy, global handlers, and cross-boundary error mapping.
          </p>

          <h2>Design Philosophy</h2>
          <ul>
            <li>Every error has a type — no bare <span class="inline-code">Error</span></li>
            <li>Global error handler catches everything</li>
            <li>Operational errors → structured response to users</li>
            <li>Programming errors → log + generic 500</li>
            <li>Unified error format across SSR → Browser → API boundaries</li>
          </ul>

          <h2>Error Class Hierarchy</h2>
          <div class="error-hierarchy">
            <strong>KissError</strong> (base: code, statusCode, message)<br>
            ├── <strong>NotFoundError</strong> (404)<br>
            ├── <strong>UnauthorizedError</strong> (401)<br>
            ├── <strong>ForbiddenError</strong> (403)<br>
            ├── <strong>ValidationError</strong> (400)<br>
            ├── <strong>ConflictError</strong> (409)<br>
            ├── <strong>RateLimitError</strong> (429)<br>
            ├── <strong>SsrRenderError</strong> (500)<br>
            └── <strong>HydrationError</strong> (500)
          </div>

          <h2>Using Error Classes</h2>
          <code-block
          ><pre><code>import { NotFoundError, ValidationError } from '@kissjs/core'

          // In an API route handler
          app.get('/api/posts/:id', async (c) => {
            const post = await findPost(c.req.param('id'))
            if (!post) throw new NotFoundError('Post not found')

            const { title } = await c.req.json()
            if (!title) throw new ValidationError('Title is required')

            return c.json(post)
          })</code></pre></code-block>

          <h2>SSR Error Rendering</h2>
          <p>KISS provides <span class="inline-code">renderSsrError()</span> with dev/prod modes:</p>
          <table>
            <thead>
              <tr>
                <th>Mode</th>
                <th>Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dev</td>
                <td>Full error message + stack trace for debugging</td>
              </tr>
              <tr>
                <td>Prod</td>
                <td>Safe generic error page — no internal details exposed</td>
              </tr>
            </tbody>
          </table>

          <h2>Three-Layer Error Strategy</h2>
          <table>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Scope</th>
                <th>Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SSG (Build-time)</td>
                <td>Build → HTML</td>
                <td>renderSsrError() dev/prod modes. Errors during build, not at runtime.</td>
              </tr>
              <tr>
                <td>Hydration</td>
                <td>Browser → Island</td>
                <td>console.warn + graceful fallback</td>
              </tr>
              <tr>
                <td>RPC</td>
                <td>Client → API</td>
                <td>RpcError with typed error mapping</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Note:</strong> "SSR" in KISS means <em>build-time rendering via @lit-labs/ssr</em>,
            not a runtime server. Errors occur during <span class="inline-code">vite build</span>, never
            in production.
          </p>

          <div class="nav-row">
            <a href="/guide/configuration" class="nav-link">&larr; Configuration</a>
            <a href="/guide/security-middleware" class="nav-link">Security &amp; Middleware &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};mr.styles=[j,D`
      .error-hierarchy {
        padding: 1rem;
        background: var(--kiss-bg-surface);
        border-left: 3px solid var(--wa-color-danger-500, #ef4444);
        border-radius: 0 3px 3px;
        margin: 0.75rem 0;
        font-size: 0.8125rem;
        line-height: 1.8;
      }
    `];let Ca=mr;customElements.define("page-error-handling",Ca);const Hl="page-error-handling",fr=class fr extends x{render(){return C`
      <kiss-layout currentPath="/guide/getting-started">
        <div class="container">
          <h1>Getting Started</h1>
          <p class="subtitle">Up and running in under 5 minutes.</p>

          <div class="step">
            <h2>1. Create a project</h2>
            <code-block><pre><code>mkdir my-app && cd my-app</code></pre></code-block>
          </div>

          <div class="step">
            <h2>2. Initialize Deno</h2>
            <code-block><pre><code>deno init</code></pre></code-block>
          </div>

          <div class="step">
            <h2>3. Add dependencies</h2>
            <code-block><pre><code>deno add jsr:@kissjs/core</code></pre></code-block>
          </div>

          <div class="step">
            <h2>4. Configure Vite</h2>
            <code-block><pre><code>// vite.config.ts
import { kiss } from '@kissjs/core'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    kiss({
      routesDir: 'app/routes',
      islandsDir: 'app/islands',
      inject: {
        stylesheets: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/styles.css'],
        scripts: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/webawesome.loader.js'],
      },
    }),
  ]
})</code></pre></code-block>
          </div>

          <div class="step">
            <h2>5. Create your first page</h2>
            <code-block><pre><code>// app/routes/index.ts
import { LitElement, html, css } from '@kissjs/core'

export const tagName = 'home-page'
export default class HomePage extends LitElement {
  static styles = css\`:host { display: block; padding: 2rem; }\`
  render() {
    return html\`&lt;h1&gt;Hello KISS!&lt;/h1&gt;\`
  }
}</code></pre></code-block>
          </div>

          <div class="step">
            <h2>6. Start dev server</h2>
            <code-block><pre><code>deno run -A npm:vite</code></pre></code-block>
            <p>Open <span class="inline-code">localhost:5173</span> to see your page. SSG output includes Declarative Shadow DOM — content is visible even before JavaScript loads.</p>
          </div>

          <div class="nav-row">
            <a href="/guide/design-philosophy" class="nav-link">Design Philosophy &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};fr.styles=[j,D`
    .step { margin-bottom: 1.75rem; }
    .step h2 { font-size: 1rem; margin: 0 0 0.5rem; }
  `];let Na=fr;customElements.define("page-getting-started",Na);const Bl="page-getting-started",br=class br extends x{render(){return C`
      <kiss-layout currentPath="/guide/islands">
        <div class="container">
          <h1>Islands Architecture</h1>
          <p class="subtitle">Add interactivity only where needed. Ship zero JS by default.</p>

          <h2>Why Islands?</h2>
          <div class="comparison">
            <div class="comparison-item spa">
              <h3>Traditional SPA</h3>
              <ul>
                <li>Entire page is JavaScript (100KB+)</li>
                <li>Static content needs JS to render</li>
                <li>Slow initial load, poor SEO</li>
              </ul>
            </div>
            <div class="comparison-item kiss">
              <h3>KISS Islands (KISS Architecture)</h3>
              <ul>
                <li>Only interactive parts load JS</li>
                <li>Static content = HTML + DSD (zero JS)</li>
                <li>Fast initial load, great SEO</li>
                <li>Shadow DOM encapsulation preserved</li>
              </ul>
            </div>
          </div>

          <h2>Progressive Enhancement Levels</h2>
          <p>KISS Architecture only has two levels. No SPA — this is the S constraint (Static).</p>
          <table>
            <thead><tr><th>Level</th><th>Rendering</th><th>JS Size</th><th>Use Case</th></tr></thead>
            <tbody>
              <tr><td><strong>0</strong></td><td>SSG + Declarative Shadow DOM</td><td><strong>0 KB</strong></td><td>Blog, documentation, marketing</td></tr>
              <tr><td><strong>1</strong></td><td>Islands with lazy hydration</td><td>~6 KB / island</td><td>Counter, form, code copy</td></tr>
            </tbody>
          </table>
          <p>Default: <strong>Level 0</strong> (zero JS). Opt in per-component via <span class="inline-code">app/islands/</span>.</p>

          <h2>Island Decision Tree</h2>
          <p>Before creating an Island, verify that no lower layer can solve the problem:</p>
          <div class="decision-tree">Need interactivity?
├─ Content only?        → L0: DSD output (zero JS)
├─ Visual state only?   → L1: CSS (:hover, :focus-within, details[open])
├─ Browser capability?  → L2: Platform API (Clipboard, IntersectionObserver)
├─ Component encapsulation? → L3: Lit component + DSD (build-time render)
└─ None of the above?   → L4: Island (Shadow DOM + lazy hydration)

Example rejections:
  - Active highlight  → aria-current + CSS (L0+L1, not an Island)
  - Sidebar collapse  → &lt;details&gt;/&lt;summary&gt; (L0, not an Island)
  - Code copy button  → Island + Clipboard API (L2+L4, valid Island)
  - Theme toggle      → Island + localStorage (L2+L4, valid Island)</div>

          <h2>How Islands Work</h2>
          <h3>Build Time</h3>
          <p><span class="inline-code">island-transform</span> marks island modules with <span class="inline-code">__island</span> and <span class="inline-code">__tagName</span>. <span class="inline-code">island-extractor</span> builds a dependency map. The SSG output includes island placeholder elements.</p>

          <h3>Runtime</h3>
          <p>A hydration script lazy-loads only the island JS bundles the current page needs. Islands hydrate on demand (visible, idle, or eager — configurable).</p>

          <h2>Creating an Island</h2>
          <p>Create a file in <span class="inline-code">app/islands/</span>:</p>
          <code-block><pre><code>// app/islands/counter.ts
import { LitElement, html, css } from '@kissjs/core'

export const tagName = 'my-counter'
export default class MyCounter extends LitElement {
  static properties = { count: { type: Number } }

  constructor() {
    super()
    this.count = 0
  }

  render() {
    return html\`
      &lt;button @click=\${() => this.count++}&gt;+&lt;/button&gt;
      &lt;span&gt;\${this.count}&lt;/span&gt;
      &lt;button @click=\${() => this.count--}&gt;-&lt;/button&gt;
    \`
  }
}</code></pre></code-block>
          <p>Use it in any route — it gets hydrated on the client automatically.</p>

          <h2>Package Islands</h2>
          <p>
            KISS can automatically detect and register Islands from npm/JSR packages. This enables
            reusable Island components that can be shared across projects.
          </p>

          <h3>Creating a Package Island</h3>
          <p>
            In your package, create an Island and export it via the <code>islands</code> array:
          </p>
          <code-block><pre><code>// packages/my-ui/src/my-counter.ts
import { LitElement, html, css } from 'lit'

export const tagName = 'my-counter'
export default class MyCounter extends LitElement {
  static properties = { count: { type: Number } }
  render() {
    return html\`&lt;button @click=\${() => this.count++}&gt;Count: \${this.count}&lt;/button&gt;\`
  }
}

// packages/my-ui/src/index.ts
import type { PackageIslandMeta } from '@kissjs/core'
import MyCounter, { tagName as counterTag } from './my-counter.js'

// Export islands array for auto-detection
export const islands: PackageIslandMeta[] = [
  { tagName: counterTag, modulePath: 'my-ui/my-counter', strategy: 'eager' }
]

export { MyCounter }</code></pre></code-block>

          <h3>Using Package Islands</h3>
          <p>
            Configure <code>packageIslands</code> in your <code>vite.config.ts</code>:
          </p>
          <code-block><pre><code>// vite.config.ts
import { kiss } from '@kissjs/core'

export default {
  plugins: [
    kiss({
      packageIslands: ['my-ui'], // Auto-detect islands from my-ui package
    })
  ]
}</code></pre></code-block>
          <p>
            The framework will automatically import and register all Islands from the package. No
            manual registration needed.
          </p>

          <h3>Package Island Metadata</h3>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>tagName</code></td>
                <td>string</td>
                <td>Custom element tag name (e.g., 'my-counter')</td>
              </tr>
              <tr>
                <td><code>modulePath</code></td>
                <td>string</td>
                <td>Import path relative to package (e.g., 'my-ui/my-counter')</td>
              </tr>
              <tr>
                <td><code>strategy</code></td>
                <td>string</td>
                <td>Hydration strategy: 'eager' | 'lazy' | 'idle' | 'visible' (default: 'eager')</td>
              </tr>
            </tbody>
          </table>

          <h2>DSD + Islands</h2>
          <p>Non-Island components (in <span class="inline-code">app/components/</span> and <span class="inline-code">app/routes/</span>) are rendered at build time with <strong>Declarative Shadow DOM</strong>. Their content is visible before JS loads:</p>
          <table>
            <thead><tr><th>Component Type</th><th>DSD Output</th><th>Client JS</th></tr></thead>
            <tbody>
              <tr><td>Page component (routes/)</td><td>✓ Full DSD with scoped styles</td><td>Hydration only (framework)</td></tr>
              <tr><td>Layout component (components/)</td><td>✓ Full DSD with scoped styles</td><td>Hydration only (framework)</td></tr>
              <tr><td>Island component (islands/)</td><td>✓ Placeholder DSD</td><td>✓ Lazy-loaded bundle</td></tr>
            </tbody>
          </table>

          <div class="nav-row">
            <a href="/guide/routing" class="nav-link">&larr; Routing</a>
            <a href="/guide/api-routes" class="nav-link">API Routes &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};br.styles=[j,D`

    .comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0 1.5rem; }
    .comparison-item { padding: 1rem 1.25rem; border: 1px solid var(--kiss-border); border-radius: 3px; }
    .comparison-item
    .comparison-item ul { margin: 0; padding-left: 1.25rem; font-size: 0.875rem; color: var(--kiss-text-secondary);  }
    .comparison-item li { margin-bottom: 0.25rem; }
    .comparison-item.spa { border-color: var(--wa-color-danger-200, #fecaca); }
    .comparison-item.kiss { border-color: var(--wa-color-success-200, #bbf7d0); background: var(--wa-color-success-50, #f0fdf4); }

    .decision-tree { padding: 1rem; background: var(--kiss-bg-surface);  border-left: 3px solid var(--kiss-border-hover); border-radius: 0 3px 3px; margin: 0.75rem 0; font-size: 0.8125rem; line-height: 1.8; color: var(--kiss-text-secondary);  font-family: 'SF Mono', 'Fira Code', monospace; white-space: pre-wrap; }

`];let xa=br;customElements.define("page-islands-guide",xa);const Fl="page-islands-guide",gr=class gr extends x{render(){return C`
      <kiss-layout currentPath="/guide/routing">
        <div class="container">
          <h1>Routing</h1>
          <p class="subtitle">File-based routing — create a file, get a route.</p>

          <h2>Basic Routes</h2>
          <p>
            Create a file in <span class="inline-code">app/routes/</span>, and it becomes a route
            automatically.
          </p>
          <table>
            <thead>
              <tr>
                <th>File</th>
                <th>Route</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="inline-code">app/routes/index.ts</span></td>
                <td><span class="inline-code">/</span></td>
              </tr>
              <tr>
                <td><span class="inline-code">app/routes/about.ts</span></td>
                <td><span class="inline-code">/about</span></td>
              </tr>
              <tr>
                <td><span class="inline-code">app/routes/guide/getting-started.ts</span></td>
                <td><span class="inline-code">/guide/getting-started</span></td>
              </tr>
            </tbody>
          </table>

          <h2>Dynamic Routes</h2>
          <p>Use square brackets for dynamic segments:</p>
          <table>
            <thead>
              <tr>
                <th>File</th>
                <th>Route</th>
                <th>Params</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="inline-code">app/routes/posts/[slug].ts</span></td>
                <td><span class="inline-code">/posts/:slug</span></td>
                <td><span class="inline-code">slug</span></td>
              </tr>
              <tr>
                <td><span class="inline-code">app/routes/users/[id]/posts.ts</span></td>
                <td><span class="inline-code">/users/:id/posts</span></td>
                <td><span class="inline-code">id</span></td>
              </tr>
            </tbody>
          </table>

          <h2>Special Files</h2>
          <table>
            <thead>
              <tr>
                <th>File</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="inline-code">_renderer.ts</span></td>
                <td>Custom HTML wrapper for SSR</td>
              </tr>
              <tr>
                <td><span class="inline-code">_middleware.ts</span></td>
                <td>Hono middleware for the route tree</td>
              </tr>
            </tbody>
          </table>

          <h2>Route Module Convention</h2>
          <p>Every route module must export:</p>
          <table>
            <thead>
              <tr>
                <th>Export</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="inline-code">default</span></td>
                <td>LitElement class</td>
                <td>The page component</td>
              </tr>
              <tr>
                <td><span class="inline-code">tagName</span></td>
                <td>string</td>
                <td>Custom element tag name</td>
              </tr>
            </tbody>
          </table>

          <div class="nav-row">
            <a href="/guide/dia" class="nav-link">&larr; KISS Architecture</a>
            <a href="/guide/islands" class="nav-link">Islands &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};gr.styles=[j,D`
    `];let Ra=gr;customElements.define("page-routing-guide",Ra);const Ul="page-routing-guide",Er=class Er extends x{render(){return C`
      <kiss-layout currentPath="/guide/security-middleware">
        <div class="container">
          <h1>Security &amp; Middleware</h1>
          <p class="subtitle">Security headers, CORS, rate limiting, and middleware chain order.</p>

          <h2>Middleware Chain</h2>
          <p>KISS auto-registers middleware in a standard order. Earlier middleware has wider scope:</p>
          <div class="mw-chain">
            Request → RequestID → Logger → CORS → SecurityHeaders<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ RateLimit → BodyParse → Auth → Validation → Handler<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ ErrorHandler → Response
          </div>

          <h2>Default Middleware</h2>
          <table>
            <thead>
              <tr><th>Middleware</th><th>Scope</th><th>Default</th></tr>
            </thead>
            <tbody>
              <tr><td>Request ID</td><td>All routes</td><td>Enabled</td></tr>
              <tr><td>Logger</td><td>All routes</td><td>Enabled</td></tr>
              <tr><td>CORS</td><td>All routes</td><td>localhost allowed in dev</td></tr>
              <tr><td>Security Headers</td><td>All routes</td><td>Enabled (XSS, clickjacking, etc.)</td></tr>
            </tbody>
          </table>

          <h2>Configuring CORS</h2>
          <p>CORS origin is configured via <span class="inline-code">kiss()</span> options — no <span class="inline-code">process.env</span>:</p>
          <code-block><pre><code>// vite.config.ts
import { kiss } from '@kissjs/core'

export default defineConfig({
  plugins: [
    kiss({
      middleware: {
        corsOrigin: 'https://myapp.com',   // string
        // corsOrigin: ['https://a.com', 'https://b.com'],  // array
        // corsOrigin: (origin) => origin,  // function
      },
    }),
  ],
})</code></pre></code-block>

          <h2>Disabling Middleware</h2>
          <code-block><pre><code>kiss({
  middleware: {
    logger: false,          // Disable request logging
    cors: false,            // Disable CORS entirely
    securityHeaders: false, // Disable security headers
  },
})</code></pre></code-block>

          <h2>Security Headers</h2>
          <p>KISS applies these headers via <span class="inline-code">hono/secure-headers</span>:</p>
          <ul>
            <li><span class="inline-code">X-Content-Type-Options: nosniff</span></li>
            <li><span class="inline-code">X-Frame-Options: SAMEORIGIN</span></li>
            <li><span class="inline-code">Referrer-Policy: strict-origin-when-cross-origin</span></li>
            <li><span class="inline-code">Permissions-Policy</span> (restricts browser features)</li>
          </ul>

          <div class="nav-row">
            <a href="/guide/error-handling" class="nav-link">&larr; Error Handling</a>
            <a href="/guide/testing" class="nav-link">Testing &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};Er.styles=[j,D`

    .mw-chain { padding: 1rem; background: var(--kiss-bg-surface);  border-left: 3px solid var(--kiss-border-hover); border-radius: 0 3px 3px; margin: 0.75rem 0; font-size: 0.8125rem; line-height: 1.8; }

`];let Da=Er;customElements.define("page-security-middleware",Da);const $l="page-security-middleware",Tr=class Tr extends x{render(){return C`
      <kiss-layout currentPath="/guide/ssg">
        <div class="container">
          <h1>Static Site Generation</h1>
          <p class="subtitle">Pre-render your routes to static HTML with DSD at build time.</p>

          <h2>Quick Start</h2>
          <p>SSG is built into <span class="inline-code">kiss()</span>. No extra plugin needed:</p>
          <code-block
          ><pre><code>// vite.config.ts
            import { kiss } from '@kissjs/core'
            import { defineConfig } from 'vite'

            export default defineConfig({
              plugins: [
                kiss({
                  routesDir: 'app/routes',
                  inject: {
                    stylesheets: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/styles.css'],
                    scripts: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/webawesome.loader.js'],
                  },
                }),
              ]
            })</code></pre></code-block>

            <h2>How It Works</h2>
            <p>When you run <span class="inline-code">vite build</span>, kiss() automatically:</p>
            <ol>
              <li>Scans <span class="inline-code">app/routes/</span> for page routes</li>
              <li>Creates a temporary Vite SSR server</li>
              <li>
                Loads each route module and renders via <span class="inline-code">@lit-labs/ssr</span>
              </li>
              <li>
                Outputs HTML with <strong>Declarative Shadow DOM</strong> — content visible without JS
              </li>
              <li>Extracts Island components into separate JS bundles</li>
              <li>Writes each page as <span class="inline-code">route/path/index.html</span></li>
            </ol>
            <p>Dynamic routes (with <span class="inline-code">:param</span>) are skipped automatically.</p>

            <h2>SSR Compatibility: Use static properties</h2>
            <p>
              KISS uses Vite's SSR capabilities with esbuild for fast transpilation. Due to
              <strong>esbuild's limited decorator support</strong>, we recommend using
              <span class="inline-code">static properties</span> instead of
              <span class="inline-code">@property</span> decorators:
            </p>
            <code-block
            ><pre><code>// ✅ Recommended: Works in SSR
              class MyComponent extends LitElement {
                static properties = {
                  count: { type: Number },
                  name: { type: String },
                };
                count = 0;
                name = '';
              }

              // ❌ Not recommended: Fails in SSR
              import { property } from 'lit/decorators.js';
              class MyComponent extends LitElement {
                @property({ type: Number }) count = 0;  // "Unsupported decorator location"
              }</code></pre></code-block>

              <p>
                <strong>Why?</strong> Vite SSR uses esbuild for on-the-fly transpilation. esbuild only
                supports the legacy <span class="inline-code">experimentalDecorators</span> proposal (TC39
                Stage 2), which has limited support for field decorators like <span class="inline-code"
                >@property</span>.
              </p>
              <p>
                <span class="inline-code">static properties</span> is Lit's recommended syntax, works
                everywhere, and aligns with KISS's "Web Standards First" philosophy — no decorator polyfills
                needed.
              </p>

              <h2>DSD Output</h2>
              <p>Each rendered page includes Declarative Shadow DOM for all Lit components. This means:</p>
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>DSD Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Shadow DOM styles</td>
                    <td>
                      Scoped inside <span class="inline-code">&lt;template shadowrootmode="open"&gt;</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Content visibility</td>
                    <td>Immediate — no JS required</td>
                  </tr>
                  <tr>
                    <td>SEO / crawling</td>
                    <td>Full content accessible to bots</td>
                  </tr>
                  <tr>
                    <td>Hydration</td>
                    <td>Lit reuses existing DOM on hydration</td>
                  </tr>
                </tbody>
              </table>

              <h2>GitHub Pages</h2>
              <p>Set <span class="inline-code">base</span> to your repo name with trailing slash:</p>
              <code-block
              ><pre><code>// vite.config.ts
                export default defineConfig({
                  base: '/my-repo/',
                  plugins: [kiss({
                    inject: {
                      stylesheets: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/styles.css'],
                      scripts: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/webawesome.loader.js'],
                    },
                  })],
                })</code></pre></code-block>

                <h2>Build &amp; Deploy</h2>
                <code-block
                ><pre><code>deno run -A npm:vite build
                  # Output in dist/ — deploy to any static host</code></pre></code-block>

                  <div class="nav-row">
                    <a href="/guide/api-design" class="nav-link">&larr; API Design</a>
                    <a href="/guide/configuration" class="nav-link">Configuration &rarr;</a>
                  </div>
                </div>
              </kiss-layout>
            `}};Tr.styles=[j,D`
    `];let La=Tr;customElements.define("page-ssg-guide",La);const zl="page-ssg-guide",Sr=class Sr extends x{render(){return C`
      <kiss-layout currentPath="/guide/testing">
        <div class="container">
          <h1>Testing Strategy</h1>
          <p class="subtitle">Test pyramid, framework tests, and user project testing templates.</p>

          <h2>Test Pyramid</h2>
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Ratio</th>
                <th>Speed</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unit</td>
                <td>70%</td>
                <td>&lt;10ms</td>
                <td>Isolated functions / component logic</td>
              </tr>
              <tr>
                <td>Integration</td>
                <td>20%</td>
                <td>&lt;100ms</td>
                <td>Route + SSR + rendering</td>
              </tr>
              <tr>
                <td>E2E</td>
                <td>10%</td>
                <td>Seconds</td>
                <td>Critical user flows</td>
              </tr>
            </tbody>
          </table>

          <h2>Testing Framework</h2>
          <p>KISS uses Deno's built-in test runner — zero extra dependencies:</p>
          <code-block
          ><pre><code>// __tests__/context_test.ts
            import { assertEquals } from 'jsr:@std/assert'
            import { extractParams, parseQuery } from '@kissjs/core'

            Deno.test('extractParams parses dynamic segments', () => {
              const params = extractParams('/users/:id', '/users/42')
              assertEquals(params, { id: '42' })
            })</code></pre></code-block>

            <h2>Testing Your KISS App</h2>
            <code-block
            ><pre><code>// tests/api_test.ts
              import { assertEquals } from 'jsr:@std/assert'

              Deno.test('API returns posts', async () => {
                const res = await fetch('http://localhost:3000/api/posts')
                assertEquals(res.status, 200)
                const data = await res.json()
                assertEquals(Array.isArray(data), true)
              })</code></pre></code-block>

              <h2>CI Integration</h2>
              <code-block
              ><pre><code># .github/workflows/test.yml
                name: Test
                on: [push, pull_request]
                jobs:
                  test:
                    runs-on: ubuntu-latest
                    steps:
                      - uses: actions/checkout@v4
                      - uses: denoland/setup-deno@v2
                      - run: deno test --allow-read --allow-write</code></pre></code-block>

                      <h2>What KISS Tests Internally</h2>
                      <ul>
                        <li>
                          <span class="inline-code">entry-descriptor</span> — EntryDescriptor data model builder
                        </li>
                        <li><span class="inline-code">entry-renderer</span> — Code generation from descriptor</li>
                        <li><span class="inline-code">route-scanner</span> — File-based route discovery</li>
                        <li><span class="inline-code">island-transform</span> — AST marking + hydration detection</li>
                        <li><span class="inline-code">ssr-handler</span> — SSR rendering + error handling</li>
                        <li><span class="inline-code">context</span> — Request context utilities</li>
                        <li><span class="inline-code">errors</span> — Error class hierarchy</li>
                      </ul>

                      <div class="nav-row">
                        <a href="/guide/security-middleware" class="nav-link">&larr; Security &amp; Middleware</a>
                        <a href="/guide/architecture" class="nav-link">Architecture &rarr;</a>
                      </div>
                    </div>
                  </kiss-layout>
                `}};Sr.styles=[j,D`
    `];let Oa=Sr;customElements.define("page-testing",Oa);const jl="page-testing",_r=class _r extends x{render(){return C`
      <kiss-layout currentPath="/roadmap">
        <div class="container">
          <h1>Roadmap</h1>
          <p class="subtitle">
            KISS Architecture: Knowledge · Isolated · Semantic · Static — 从 PoC 到 v1.0
          </p>

          <h2>里程碑概览</h2>
          <table class="phase-table">
            <thead>
              <tr>
                <th>阶段</th>
                <th>名称</th>
                <th>核心目标</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phase 0</td>
                <td>PoC</td>
                <td>技术可行性验证</td>
                <td class="status-done">完成</td>
              </tr>
              <tr>
                <td>Phase 1</td>
                <td>Alpha</td>
                <td>核心插件包可用</td>
                <td class="status-done">完成</td>
              </tr>
              <tr>
                <td>Phase 2</td>
                <td>工程化补齐</td>
                <td>P0/P1 修复 + 架构重构</td>
                <td class="status-done">完成</td>
              </tr>
              <tr>
                <td>Phase 3</td>
                <td>文档整合</td>
                <td>docs-site → docs</td>
                <td class="status-done">完成</td>
              </tr>
              <tr>
                <td>Phase 4</td>
                <td>KISS Architecture 落地</td>
                <td>K·I·S·S 四约束 + Jamstack 对齐</td>
                <td class="status-done">完成</td>
              </tr>
              <tr>
                <td>Phase 5</td>
                <td>UI 革命与生态验证</td>
                <td>@kissjs/ui + 设计系统</td>
                <td class="status-done">完成</td>
              </tr>
              <tr>
                <td>Phase 6</td>
                <td>架构审计与修复</td>
                <td>P0/P1 问题清零 + Dogfooding</td>
                <td class="status-done">完成</td>
              </tr>
              <tr>
                <td>Phase 7</td>
                <td>文档站自举</td>
                <td>docs 站使用自研 kiss-ui 组件</td>
                <td class="status-done">完成</td>
              </tr>
            </tbody>
          </table>

          <h2>Phase 5：UI 革命与生态验证（已完成）</h2>

          <h3>5A: 品牌视觉 + 设计系统页面</h3>
          <ul class="task-list">
            <li>首页风格改造 — 纯黑背景、高对比度</li>
            <li>品牌色统一 — Logo/Nav hover/Sidebar active 全局统一</li>
            <li>UI 设计系统页面 — /ui 路由，展示 Design Tokens</li>
            <li>导航栏添加 UI 标签 — Docs | UI | JSR | GitHub</li>
            <li>自定义域名修复 — base path 从 /kiss/ 改为 /</li>
          </ul>

          <h3>5B: @kissjs/ui 组件库实现</h3>
          <ul class="task-list">
            <li>@kissjs/ui 重构 — 基于 Lit 构建自有 Web Components</li>
            <li>核心组件：kiss-button, kiss-card, kiss-input, kiss-code-block, kiss-layout</li>
            <li>文档站用 @kissjs/ui 重写 — dogfooding</li>
            <li>迁移示例文件 — examples/minimal-blog + examples/hello 迁移到 static properties</li>
            <li>发布 @kissjs/ui@0.1.4 — JSR 发布</li>
          </ul>

          <h2>Phase 6：架构审计与修复（已完成）</h2>

          <h3>6A: P0 Bug 修复</h3>
          <ul class="task-list">
            <li>allNoExternal 未使用 — 修复 Vite SSR 模块解析</li>
            <li>userResolveAlias 类型不匹配 — 支持 Record 和 Alias[] 两种格式</li>
            <li>Island 扫描配置错误 — 移动到正确目录，文件名匹配 tag name</li>
          </ul>

          <h3>6B: P1 问题清理</h3>
          <ul class="task-list">
            <li>code-block Island 主题适配 — CSS 变量替换硬编码颜色</li>
            <li>kiss-layout 导航补全 — 添加 Examples + Project sections</li>
            <li>hydrationStrategy 选项移除 — 删除未实现选项</li>
            <li>测试覆盖扩展 — kiss-rpc + kiss-ui 测试集成</li>
            <li>kiss-docs-kit 空壳删除 — 移除未使用包</li>
            <li>logger.ts 删除 — 移除未使用模块</li>
            <li>README 版本更新 — core 0.1.6, rpc 0.1.3, ui 0.1.4</li>
          </ul>

          <h3>6C: 体验优化</h3>
          <ul class="task-list">
            <li>docs 站 dogfooding — 25 个路由使用 kiss-layout</li>
            <li>组件导入统一 — @kissjs/ui/kiss-layout 替代本地组件</li>
            <li>构建验证通过 — 25 pages, 3 islands detected</li>
            <li>deno fmt/lint 通过 — 代码风格统一</li>
          </ul>

          <h2>Phase 7：文档站自举（已完成）</h2>
          <ul class="task-list">
            <li>docs 站完全使用 @kissjs/ui 组件 — dogfooding 验证</li>
            <li>Island 检测验证 — code-block, counter-island, theme-toggle</li>
            <li>SSG 构建成功 — 所有页面静态生成，交互隔离</li>
            <li>K·I·S·S 四约束落地 — Knowledge/Isolated/Semantic/Static</li>
          </ul>

          <h2>已解决的技术债</h2>
          <table class="tech-debt-table">
            <thead>
              <tr>
                <th>问题</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hono-entry.ts 全字符串拼接</td>
                <td class="status-done">已重构为 EntryDescriptor + renderEntry</td>
              </tr>
              <tr>
                <td>8 插件闭包共享可变状态</td>
                <td class="status-done">已提取 KissBuildContext</td>
              </tr>
              <tr>
                <td>SSR 运行时模式</td>
                <td class="status-done">已移除</td>
              </tr>
              <tr>
                <td>GLOBAL_BUILT 模块级变量</td>
                <td class="status-done">已移除</td>
              </tr>
              <tr>
                <td>Island 正则检测</td>
                <td class="status-done">已改为构建时 map</td>
              </tr>
              <tr>
                <td>DIA → KISS Architecture</td>
                <td class="status-done">已重定义（K·I·S·S 四约束）</td>
              </tr>
            </tbody>
          </table>

          <h2>仍存在的技术债</h2>
          <table class="tech-debt-table">
            <thead>
              <tr>
                <th>问题</th>
                <th>优先级</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>entry-renderer.ts 字符串拼接（非 MagicString）</td>
                <td class="priority-medium">中</td>
              </tr>
              <tr>
                <td>html-template.ts declare module 扩展</td>
                <td class="priority-low">低</td>
              </tr>
              <tr>
                <td>文档站内联样式碎片</td>
                <td class="priority-medium">中</td>
              </tr>
            </tbody>
          </table>

          <h2>架构概览</h2>
          <div class="architecture-diagram">
            用户视角：vite.config.ts ┌─────────────────────────────────────────┐ │ import { kiss } from
            '@kissjs/core' │ │ export default defineConfig({ │ │ plugins: [kiss()] │ │ }) │
            └──────────────┬──────────────────────────┘ │ ┌──────────────▼──────────────────────────┐ │
            @kissjs/core (8 子插件) │ │ │ │ 1. kiss:core — 路由扫描 (K) │ │ 2. kiss:virtual-entry —
            虚拟模块 │ │ 3. @hono/vite-dev-server — dev only │ │ 4. island-transform — AST 标记 (I) │ │ 5.
            island-extractor — 依赖分析 (I) │ │ 6. html-template — HTML 注入 (I) │ │ 7. kiss:ssg — SSG
            产物 (K+S) │ │ 8. kiss:build — Island JS (I) │ └──────────────┬──────────────────────────┘ │
            ┌──────────▼──────────┐ │ 两个独立部署目标 │ │ │ │ dist/ (静态前端) │ ← K+I+S 约束 │ API
            Routes (Serverless) │ ← S 约束 └──────────────────────┘
          </div>

          <div class="nav-row">
            <a href="/examples" class="nav-link">&larr; Examples</a>
            <a href="/changelog" class="nav-link">Changelog &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};_r.styles=[j,D`
      .phase-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
        font-size: 0.875rem;
      }
      .phase-table th,
      .phase-table td {
        padding: 0.75rem 1rem;
        text-align: left;
        border-bottom: 1px solid var(--kiss-border);
      }
      .phase-table th {
        font-size: 0.6875rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--kiss-text-muted);
      }
      .phase-table td:first-child {
        font-weight: 600;
        color: var(--kiss-text-primary);
      }
      .status-done {
        color: var(--kiss-accent);
        font-weight: 500;
      }
      .status-wip {
        color: var(--kiss-text-secondary);
        font-weight: 500;
      }
      .task-list {
        list-style: none;
        padding: 0;
        margin: 1rem 0;
      }
      .task-list li {
        padding: 0.5rem 0;
        padding-left: 1.5rem;
        position: relative;
        color: var(--kiss-text-secondary);
        font-size: 0.875rem;
      }
      .task-list li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--kiss-accent);
        font-weight: 700;
      }
      .tech-debt-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
        font-size: 0.875rem;
      }
      .tech-debt-table th,
      .tech-debt-table td {
        padding: 0.75rem 1rem;
        text-align: left;
        border-bottom: 1px solid var(--kiss-border);
      }
      .tech-debt-table th {
        font-size: 0.6875rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--kiss-text-muted);
      }
      .priority-high {
        color: var(--kiss-accent);
      }
      .priority-medium {
        color: var(--kiss-accent-dim);
      }
      .priority-low {
        color: var(--kiss-text-tertiary);
      }
      .architecture-diagram {
        padding: 1.5rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
        margin: 1.5rem 0;
        font-size: 0.75rem;
        line-height: 1.6;
        font-family: "SF Mono", "Fira Code", monospace;
        white-space: pre;
        overflow-x: auto;
        color: var(--kiss-text-secondary);
      }
    `];let wa=_r;customElements.define("page-roadmap",wa);const Yl="page-roadmap",Ar=class Ar extends x{render(){return C`
      <kiss-layout currentPath="/styling/kiss-ui">
        <div class="container">
          <h1>@kissjs/ui</h1>
          <p class="subtitle">
            KISS Architecture 的 UI 层 — 暗黑瑞士国际主义风格的 Web Components 组件库。
          </p>

          <h2>安装</h2>
          <code-block
            ><pre><code>// deno.json
{
  "imports": {
    "@kissjs/ui": "jsr:@kissjs/ui@^0.1.4"
  }
}</code></pre></code-block
          >

          <h2>可用组件</h2>
          <p>
            <span class="inline-code">@kissjs/ui</span> v0.1.4+ 提供以下 Web Components：
          </p>

          <div class="component-grid">
            <div class="component-card">
              <h4>kiss-button</h4>
              <p>按钮组件，支持 variants (default, primary, ghost) 和 sizes (sm, md, lg)</p>
            </div>
            <div class="component-card">
              <h4>kiss-card</h4>
              <p>卡片组件，支持 header/footer slots 和 variants (default, elevated, borderless)</p>
            </div>
            <div class="component-card">
              <h4>kiss-input</h4>
              <p>输入组件，支持 label、error states 和 validation</p>
            </div>
            <div class="component-card">
              <h4>kiss-code-block</h4>
              <p>代码块组件，带复制按钮和语法高亮</p>
            </div>
            <div class="component-card">
              <h4>kiss-layout</h4>
              <p>布局组件，包含 header、sidebar、footer 和移动端 hamburger 菜单</p>
            </div>
          </div>

          <h2>使用示例</h2>
          <code-block
            ><pre><code>// app/routes/index.ts
import { html, LitElement } from 'lit';
import '@kissjs/ui/kiss-button';
import '@kissjs/ui/kiss-card';

export class MyPage extends LitElement {
  render() {
    return html\`
      &lt;kiss-button variant="primary"&gt;Click me&lt;/kiss-button&gt;
      &lt;kiss-card&gt;
        &lt;h3 slot="header"&gt;Title&lt;/h3&gt;
        &lt;p&gt;Card content&lt;/p&gt;
      &lt;/kiss-card&gt;
    \`;
  }
}</code></pre></code-block
          >

          <h2>设计令牌</h2>
          <p>
            组件使用 CSS 自定义属性作为设计令牌，可通过
            <span class="inline-code">@kissjs/ui/design-tokens</span> 导入：
          </p>
          <code-block
            ><pre><code>import '@kissjs/ui/design-tokens';

// 可用的 CSS 自定义属性：
// --kiss-bg-base, --kiss-text-primary, --kiss-border-base
// --kiss-spacing-sm, --kiss-spacing-md, --kiss-spacing-lg
// --kiss-font-sans, --kiss-font-mono
// --kiss-radius-sm, --kiss-radius-md</code></pre></code-block
          >

          <h2>设计原则</h2>
          <p>@kissjs/ui 遵循 KISS Architecture 四约束：</p>
          <ul>
            <li>
              <strong>Web Standards First</strong> — 组件是标准 Web Components（Lit），非框架私有抽象
            </li>
            <li>
              <strong>Minimal Augmentation</strong> — UI 层是可选的，不用 @kissjs/ui 也能写 KISS 应用
            </li>
            <li><strong>No Framework Binding</strong> — 组件可在任何 Web Components 环境使用</li>
            <li><strong>No Runtime Binding</strong> — 纯 ESM 输出，无平台依赖</li>
            <li><strong>Static (S)</strong> — 所有组件输出 DSD，内容在 JS 加载前可见</li>
          </ul>

          <h2>SSR 兼容性</h2>
          <p>
            所有组件使用 <span class="inline-code">static properties</span> 而非
            <span class="inline-code">@property</span> 装饰器，确保 Vite SSR 兼容。详见
            <a href="/guide/ssg#ssr-compatibility" style="color: var(--kiss-accent);">SSG 文档</a>。
          </p>

          <div class="callout warn">
            <p>
              <strong>历史说明</strong> — v0.1.0-0.1.3 是 WebAwesome CDN loader。v0.1.4+
              是自有 Web Components 组件库。如需 WebAwesome，改用
              <span class="inline-code">inject</span> 选项手动注入 CDN。
            </p>
          </div>

          <div class="nav-row">
            <a href="/guide/deployment" class="nav-link">&larr; Deployment</a>
            <a href="/styling/web-awesome" class="nav-link">Web Awesome &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};Ar.styles=[j,D`
      .callout {
        padding: 1rem 1.25rem;
        margin: 1rem 0;
        border-left: 3px solid var(--kiss-border-hover);
        background: var(--kiss-bg-surface);
        border-radius: 0 3px 3px 0;
      }
      .callout.warn {
        border-left-color: var(--kiss-text-muted);
      }
      .component-grid {
        display: grid;
        gap: 1rem;
        margin: 1rem 0;
      }
      .component-card {
        padding: 1rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
      }
      .component-card h4 {
        margin: 0 0 0.5rem;
        font-size: 1rem;
      }
      .component-card p {
        margin: 0;
        color: var(--kiss-text-muted);
        font-size: 0.875rem;
      }
    `];let Pa=Ar;customElements.define("page-kiss-ui",Pa);const Kl="page-kiss-ui",kr=class kr extends x{render(){return C`
      <kiss-layout currentPath="/styling/web-awesome">
        <div class="container">
          <h1>Web Awesome Components</h1>
          <p class="subtitle">50+ UI components via CDN. Zero imports needed.</p>

          <h2>How It Works</h2>
          <p>
            Set <span class="inline-code">ui: { cdn: true }</span> in your <span class="inline-code"
            >kiss()</span> config to inject Web Awesome's CSS and loader into your <span
              class="inline-code"
            >&lt;head&gt;</span>. All <span class="inline-code">&lt;wa-*&gt;</span>
            custom elements are available globally — no per-component imports.
          </p>

          <div class="demo-box">
            <h3>Buttons</h3>
            <div class="component-row">
              <wa-button variant="brand">Brand</wa-button>
              <wa-button variant="success">Success</wa-button>
              <wa-button variant="danger">Danger</wa-button>
              <wa-button variant="default">Default</wa-button>
            </div>
            <code-block
            ><pre><code>&lt;wa-button variant="brand"&gt;Brand&lt;/wa-button&gt;
              &lt;wa-button variant="danger"&gt;Danger&lt;/wa-button&gt;</code></pre></code-block>
            </div>

            <div class="demo-box">
              <h3>Cards</h3>
              <wa-card>
                <h2 slot="header">Card Title</h2>
                <p>Web Awesome card component with header and footer slots.</p>
                <wa-button slot="footer" variant="brand">Action</wa-button>
              </wa-card>
              <code-block
              ><pre><code>&lt;wa-card&gt;
                &lt;h2 slot="header"&gt;Title&lt;/h2&gt;
                &lt;p&gt;Content&lt;/p&gt;
                &lt;wa-button slot="footer" variant="brand"&gt;Action&lt;/wa-button&gt;
              &lt;/wa-card&gt;</code></pre></code-block>
            </div>

            <div class="demo-box">
              <h3>Badges</h3>
              <div class="component-row">
                <wa-badge variant="primary">Primary</wa-badge>
                <wa-badge variant="success">Success</wa-badge>
                <wa-badge variant="danger">Danger</wa-badge>
                <wa-badge variant="warning">Warning</wa-badge>
              </div>
              <code-block
              ><pre><code>&lt;wa-badge variant="primary"&gt;Primary&lt;/wa-badge&gt;
                &lt;wa-badge variant="danger"&gt;Danger&lt;/wa-badge&gt;</code></pre></code-block>
              </div>

              <h2>Setup</h2>
              <p>Enable WebAwesome via the <span class="inline-code">inject</span> option (recommended):</p>
              <code-block
              ><pre><code>import { kiss } from '@kissjs/core'
                import { defineConfig } from 'vite'

                export default defineConfig({
                  plugins: [
                    kiss({
                      routesDir: 'app/routes',
                      inject: {
                        stylesheets: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/styles.css'],
                        scripts: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/webawesome.loader.js'],
                      },
                    }),
                  ]
                })</code></pre></code-block>

                <h2>Migration from <span class="inline-code">ui</span> option</h2>
                <p>
                  The old <span class="inline-code">ui: { cdn: true }</span> shortcut still works but is
                  deprecated. To migrate:
                </p>
                <code-block
                ><pre><code>// Before (deprecated)
                  kiss({ ui: { cdn: true } })

                  // After (recommended)
                  kiss({
                    inject: {
                      stylesheets: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/styles.css'],
                      scripts: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/webawesome.loader.js'],
                    },
                  })</code></pre></code-block>
                <p>
                  The <span class="inline-code">inject</span> option is more flexible — it works with any CDN,
                  any version, and any external resource.
                </p>

                <div class="nav-row">
                  <a href="/styling/kiss-ui" class="nav-link">&larr; @kissjs/ui</a>
                  <a href="https://webawesome.com/docs" class="nav-link">Web Awesome Docs &rarr;</a>
                </div>
              </div>
            </kiss-layout>
          `}};kr.styles=[j,D`
      .demo-box {
        padding: 1.25rem;
        border: 1px solid var(--kiss-border);
        border-radius: 3px;
        margin: 0.75rem 0 1.5rem;
      }
      .demo-box .demo-box .component-row {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 0.75rem;
      }
    `];let Ma=kr;customElements.define("page-web-awesome",Ma);const Wl="page-web-awesome",ql="kiss-input",Os=class Os extends x{constructor(){super(...arguments),this.type="text",this.disabled=!1,this.required=!1}render(){return C`
      <div class="input-wrapper">
        ${this.label?C`
            <label for="input">${this.label}${this.required?" *":""}</label>
          `:""}
        <input
          id="input"
          class="input ${this.error?"input--error":""}"
          type="${this.type}"
          placeholder="${this.placeholder}"
          value="${this.value}"
          name="${this.name}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @input="${this._handleInput}"
        />
        ${this.error?C`
            <span class="error-message">${this.error}</span>
          `:""}
      </div>
    `}_handleInput(t){const s=t.target;this.value=s.value,this.dispatchEvent(new CustomEvent("kiss-input",{detail:{value:s.value},bubbles:!0,composed:!0}))}};Os.styles=[rs,D`
      :host {
        display: block;
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--kiss-size-2);
      }

      label {
        font-size: var(--kiss-font-size-sm);
        font-weight: var(--kiss-font-weight-medium);
        color: var(--kiss-text-tertiary);
        letter-spacing: var(--kiss-letter-spacing-wide);
      }

      .input {
        width: 100%;
        padding: var(--kiss-size-2) var(--kiss-size-3);
        font-family: var(--kiss-font-sans);
        font-size: var(--kiss-font-size-md);
        color: var(--kiss-text-primary);
        background: var(--kiss-bg-base);
        border: 1px solid var(--kiss-border);
        border-radius: var(--kiss-radius-md);
        transition:
          border-color var(--kiss-transition-normal),
          box-shadow var(--kiss-transition-normal);
        outline: none;
      }

      .input::placeholder {
        color: var(--kiss-text-muted);
      }

      .input:hover {
        border-color: var(--kiss-border-hover);
      }

      .input:focus {
        border-color: var(--kiss-accent);
        box-shadow: 0 0 0 1px var(--kiss-accent);
      }

      .input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: var(--kiss-bg-surface);
      }

      .input--error {
        border-color: var(--kiss-text-tertiary);
      }

      .error-message {
        font-size: var(--kiss-font-size-xs);
        color: var(--kiss-text-tertiary);
      }
    `],Os.properties={type:{type:String},placeholder:{type:String},label:{type:String},value:{type:String},name:{type:String},disabled:{type:Boolean,reflect:!0},required:{type:Boolean},error:{type:String}};let Ha=Os;customElements.define(ql,Ha);const Gl="kiss-code-block",vr=class vr extends x{constructor(){super(...arguments),this._copyState="idle"}render(){return C`
      <slot></slot>
      <button
        class="copy-btn ${this._copyState==="copied"?"copied":""}"
        @click="${this._copy}"
        ?hidden="${this._copyState==="copied"}"
      >
        ${this._copyState==="copied"?"Copied!":this._copyState==="failed"?"Failed":"Copy"}
      </button>
    `}async _copy(){try{const t=this.textContent||"";await navigator.clipboard.writeText(t),this._copyState="copied",this.requestUpdate(),setTimeout(()=>{this._copyState="idle",this.requestUpdate()},2e3)}catch{this._copyState="failed",this.requestUpdate(),setTimeout(()=>{this._copyState="idle",this.requestUpdate()},2e3)}}};vr.styles=[rs,D`
      :host {
        display: block;
        position: relative;
      }

      ::slotted(pre) {
        margin: 0;
        padding: var(--kiss-size-5);
        background: var(--kiss-code-bg);
        border: 1px solid var(--kiss-code-border);
        border-radius: var(--kiss-radius-sm);
        overflow-x: auto;
        font-family: var(--kiss-font-mono);
        font-size: var(--kiss-font-size-sm);
        line-height: var(--kiss-line-height-normal);
        color: var(--kiss-text-secondary);
        scrollbar-width: thin;
        scrollbar-color: var(--kiss-border) transparent;
      }

      .copy-btn {
        position: absolute;
        top: var(--kiss-size-2);
        right: var(--kiss-size-2);
        background: var(--kiss-bg-elevated);
        color: var(--kiss-text-muted);
        border: 1px solid var(--kiss-border);
        padding: var(--kiss-size-1) var(--kiss-size-3);
        font-size: var(--kiss-font-size-xs);
        font-family: var(--kiss-font-sans);
        cursor: pointer;
        border-radius: var(--kiss-radius-sm);
        transition: color var(--kiss-transition-normal), border-color var(--kiss-transition-normal);
        z-index: 1;
      }

      .copy-btn:hover {
        color: var(--kiss-text-secondary);
        border-color: var(--kiss-border-hover);
      }

      .copy-btn.copied {
        color: var(--kiss-text-primary);
        border-color: var(--kiss-border-hover);
      }
    `];let Ba=vr;customElements.define(Gl,Ba);const yr=class yr extends x{render(){return C`
      <kiss-layout current-path="/ui">
        <div class="container">
          <h1>Design System</h1>
          <p class="subtitle">
            <strong>Two palettes. Zero noise.</strong><br>
            Dark and Light. Black and White. Nothing else.
          </p>

          <!-- Palettes -->
          <div class="section">
            <div class="section-title">Palettes</div>
            <div class="palette-row">
              <div class="palette-card palette-dark">
                <div class="palette-name">Dark</div>
                <div class="swatch-grid">
                  <div class="swatch-item">
                    <div class="swatch" style="background:#000"></div>
                    <div class="swatch-label">Base</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#0a0a0a"></div>
                    <div class="swatch-label">Surface</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#fff"></div>
                    <div class="swatch-label">Primary</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#999"></div>
                    <div class="swatch-label">Secondary</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#666"></div>
                    <div class="swatch-label">Tertiary</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#444"></div>
                    <div class="swatch-label">Muted</div>
                  </div>
                </div>
                <p class="palette-desc">
                  <strong>Black</strong> foundation. White for emphasis. Gray for hierarchy.
                </p>
              </div>
              <div class="palette-card palette-light">
                <div class="palette-name">Light</div>
                <div class="swatch-grid">
                  <div class="swatch-item">
                    <div class="swatch" style="background:#fff"></div>
                    <div class="swatch-label">Base</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#fafafa"></div>
                    <div class="swatch-label">Surface</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#000"></div>
                    <div class="swatch-label">Primary</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#555"></div>
                    <div class="swatch-label">Secondary</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#888"></div>
                    <div class="swatch-label">Tertiary</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#aaa"></div>
                    <div class="swatch-label">Muted</div>
                  </div>
                </div>
                <p class="palette-desc">
                  <strong>White</strong> foundation. Black for emphasis. Gray for hierarchy.
                </p>
              </div>
            </div>
          </div>

          <!-- Typography -->
          <div class="section">
            <div class="section-title">Typography</div>
            <div class="type-scale">
              <div class="type-row">
                <span class="type-label">Display</span>
                <span class="type-sample" style="font-size:2.5rem;font-weight:900;letter-spacing:-0.04em"
                >KISS UI</span>
              </div>
              <div class="type-row">
                <span class="type-label">H1</span>
                <span class="type-sample" style="font-size:1.75rem;font-weight:800;letter-spacing:-0.03em"
                >Heading One</span>
              </div>
              <div class="type-row">
                <span class="type-label">H2</span>
                <span class="type-sample" style="font-size:1.125rem;font-weight:600">Heading Two</span>
              </div>
              <div class="type-row">
                <span class="type-label">Body</span>
                <span class="type-sample" style="font-size:0.9375rem;color:var(--kiss-text-secondary)"
                >Body text for paragraphs.</span>
              </div>
              <div class="type-row">
                <span class="type-label">Caption</span>
                <span
                  class="type-sample"
                  style="font-size:0.6875rem;color:var(--kiss-text-tertiary);text-transform:uppercase;letter-spacing:0.08em;font-weight:600"
                >Caption</span>
              </div>
              <div class="type-row">
                <span class="type-label">Mono</span>
                <span
                  class="type-sample"
                  style="font-size:0.8125rem;font-family:'SF Mono','Fira Code','Consolas',monospace;color:var(--kiss-text-primary)"
                >deno add jsr:@kissjs/ui</span>
              </div>
            </div>
          </div>

          <!-- Buttons (Dogfooding kiss-button) -->
          <div class="section">
            <div class="section-title">Button</div>
            <div class="preview-card">
              <div class="preview-header">
                <span class="preview-title">Variants</span>
                <span class="preview-badge">Available</span>
              </div>
              <div class="preview-body">
                <kiss-button variant="primary">Primary</kiss-button>
                <kiss-button>Default</kiss-button>
                <kiss-button variant="ghost">Ghost</kiss-button>
              </div>
              <div class="preview-body" style="border-top:1px solid var(--kiss-border)">
                <kiss-button variant="primary" size="sm">Small</kiss-button>
                <kiss-button variant="primary" size="md">Default</kiss-button>
                <kiss-button variant="primary" size="lg">Large</kiss-button>
              </div>
              <div class="preview-body" style="border-top:1px solid var(--kiss-border)">
                <kiss-button disabled>Disabled</kiss-button>
                <kiss-button href="/" target="_blank">Link Button</kiss-button>
              </div>
            </div>
          </div>

          <!-- Cards (Dogfooding kiss-card) -->
          <div class="section">
            <div class="section-title">Card</div>
            <div class="cards-grid">
              <kiss-card>
                <h3 slot="header">Island</h3>
                <p>Interactive islands with hydration and Shadow DOM.</p>
                <div slot="footer">
                  <kiss-button size="sm">Use</kiss-button>
                </div>
              </kiss-card>
              <kiss-card>
                <h3 slot="header">Static</h3>
                <p>Zero-JS rendered via DSD. Visible before JS loads.</p>
                <div slot="footer">
                  <kiss-button size="sm">Use</kiss-button>
                </div>
              </kiss-card>
              <kiss-card variant="elevated">
                <h3 slot="header">API Route</h3>
                <p>Server logic with Hono RPC. Type-safe end to end.</p>
                <div slot="footer">
                  <kiss-button size="sm">Use</kiss-button>
                </div>
              </kiss-card>
            </div>
          </div>

          <!-- Input (Dogfooding kiss-input) -->
          <div class="section">
            <div class="section-title">Input</div>
            <div class="preview-card">
              <div class="preview-header">
                <span class="preview-title">Text Input</span>
                <span class="preview-badge">Available</span>
              </div>
              <div class="preview-body" style="flex-direction:column;gap:0.75rem">
                <kiss-input placeholder="Enter email..." label="Email"></kiss-input>
                <kiss-input type="password" placeholder="Password" label="Password" required></kiss-input>
                <kiss-input value="hello@kissjs.org" label="Read-only" disabled></kiss-input>
              </div>
            </div>
          </div>

          <!-- Code Block (Dogfooding kiss-code-block) -->
          <div class="section">
            <div class="section-title">Code Block</div>
            <div class="preview-card">
              <div class="preview-header">
                <span class="preview-title">With Copy Button</span>
                <span class="preview-badge">Available</span>
              </div>
              <div class="preview-body">
                <kiss-code-block>
                  <pre><code>import '@kissjs/ui';

                  // Use components
                  &lt;kiss-button variant="primary"&gt;Click me&lt;/kiss-button&gt;
                  &lt;kiss-card&gt;Content&lt;/kiss-card&gt;</code></pre>
                </kiss-code-block>
              </div>
            </div>
          </div>

          <!-- Install -->
          <div class="install-section">
            <h3>Install @kissjs/ui</h3>
            <div class="install-cmd">
              <span class="prompt">$</span> deno add jsr:@kissjs/ui
            </div>
            <p>Deno, Node, Bun. Zero config.</p>
          </div>

          <div class="nav-row">
            <a href="/styling/kiss-ui" class="nav-link">&larr; @kissjs/ui Docs</a>
            <a href="/guide/getting-started" class="nav-link">Getting Started &rarr;</a>
          </div>
        </div>
      </kiss-layout>
    `}};yr.styles=[j,D`
      :host {
        display: block;
      }

      /* ─── Section ─── */
      .section {
        margin-bottom: 3.5rem;
      }

      .section-title {
        font-size: 0.625rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.16em;
        color: var(--kiss-text-muted);
        margin-bottom: 1.5rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid var(--kiss-border);
      }

      /* ─── Palettes ─── */
      .palette-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        background: var(--kiss-border);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
        overflow: hidden;
      }

      .palette-card {
        padding: 1.5rem;
      }

      .palette-dark {
        background: var(--kiss-bg-base);
      }

      .palette-light {
        background: #fff;
      }

      .palette-name {
        font-size: 0.625rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        margin-bottom: 1rem;
      }

      .palette-dark .palette-name {
        color: var(--kiss-text-muted);
      }

      .palette-light .palette-name {
        color: var(--kiss-text-secondary);
      }

      .swatch-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
        margin-bottom: 1.25rem;
      }

      .swatch-item {
        text-align: center;
      }

      .swatch {
        width: 100%;
        aspect-ratio: 1;
        border-radius: 4px;
        margin-bottom: 0.375rem;
      }

      .palette-dark .swatch {
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      .palette-light .swatch {
        border: 1px solid rgba(0, 0, 0, 0.08);
      }

      .swatch-label {
        font-size: 0.5625rem;
        font-weight: 600;
        letter-spacing: 0.04em;
      }

      .palette-dark .swatch-label {
        color: var(--kiss-text-muted);
      }

      .palette-light .swatch-label {
        color: var(--kiss-text-secondary);
      }

      .palette-desc {
        font-size: 0.75rem;
        line-height: 1.6;
      }

      .palette-dark .palette-desc {
        color: var(--kiss-text-tertiary);
      }

      .palette-dark .palette-desc strong {
        color: var(--kiss-text-primary);
      }

      .palette-light .palette-desc {
        color: var(--kiss-text-secondary);
      }

      .palette-light .palette-desc strong {
        color: var(--kiss-text-primary);
      }

      /* ─── Typography ─── */
      .type-scale {
        display: flex;
        flex-direction: column;
      }

      .type-row {
        display: flex;
        align-items: baseline;
        gap: 1.5rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--kiss-border);
      }

      .type-row:last-child {
        border-bottom: none;
      }

      .type-label {
        min-width: 72px;
        font-size: 0.5625rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--kiss-text-muted);
      }

      .type-sample {
        color: var(--kiss-text-primary);
      }

      /* ─── Component Preview ─── */
      .preview-card {
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
        overflow: hidden;
      }

      .preview-header {
        padding: 0.875rem 1.25rem;
        border-bottom: 1px solid var(--kiss-border);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .preview-title {
        font-size: 0.8125rem;
        font-weight: 600;
        color: var(--kiss-text-primary);
      }

      .preview-badge {
        font-size: 0.5625rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        padding: 0.25rem 0.5rem;
        border-radius: 3px;
        background: var(--kiss-accent-subtle);
        color: var(--kiss-text-secondary);
        border: 1px solid var(--kiss-border);
      }

      .preview-body {
        padding: 1.25rem;
        display: flex;
        gap: 0.625rem;
        flex-wrap: wrap;
        align-items: flex-start;
      }

      /* ─── Cards Grid ─── */
      .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
      }

      /* ─── Install ─── */
      .install-section {
        margin-top: 3.5rem;
        padding: 2rem;
        background: var(--kiss-bg-surface);
        border: 1px solid var(--kiss-border);
        border-radius: 6px;
        text-align: center;
      }

      .install-section h3 {
        font-size: 0.9375rem;
        font-weight: 600;
        color: var(--kiss-text-primary);
        margin: 0 0 1rem;
      }

      .install-cmd {
        display: inline-flex;
        align-items: center;
        gap: 0.625rem;
        padding: 0.625rem 1.25rem;
        background: var(--kiss-bg-elevated);
        border: 1px solid var(--kiss-border);
        border-radius: 4px;
        font-family: "SF Mono", "Fira Code", "Consolas", monospace;
        font-size: 0.8125rem;
        color: var(--kiss-text-primary);
      }

      .install-cmd .prompt {
        color: var(--kiss-text-muted);
      }

      .install-section p {
        font-size: 0.8125rem;
        color: var(--kiss-text-tertiary);
        margin: 0.75rem 0 0;
      }

      /* ─── Mobile ─── */
      @media (max-width: 900px) {
        .section {
          margin-bottom: 2.5rem;
        }

        .type-row {
          gap: 1rem;
        }

        .preview-body {
          padding: 1rem;
        }

        .install-section {
          padding: 1.5rem 1rem;
        }
      }

      @media (max-width: 640px) {
        .palette-row {
          grid-template-columns: 1fr;
        }

        .swatch-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .install-cmd {
          font-size: 0.75rem;
          padding: 0.5rem 1rem;
        }
      }
    `];let Fa=yr;customElements.define("ui-showcase",Fa);const Vl="ui-showcase";function B(e){return e.replace(/<!--\/?(?:lit-part|lit-node)[^>]*-->/g,"")}const di={"code-block":"/app/islands/code-block.ts","counter-island":"/app/islands/counter-island.ts","kiss-theme-toggle":"/app/islands/kiss-theme-toggle.ts","theme-toggle":"/app/islands/theme-toggle.ts"};function Ql(){const e=Object.keys(di);return e.length===0?"":`<script type="module" data-kiss-hydrate>
(function() {
  const loaders = {
    `+e.map(s=>{const r=di[s];return"'"+s+"': () => import('"+r+"')"}).join(`,
    `)+`
  };
  async function hydrate(tag, loader) {
    try { const m = await loader(); if (m.default && !customElements.get(tag)) customElements.define(tag, m.default); }
    catch(e) { console.warn("[KISS] Island <"+tag+"> hydration failed:", e); }
  }
  if ("requestIdleCallback" in window) requestIdleCallback(() => { for (const [t,l] of Object.entries(loaders)) hydrate(t,l); });
  else setTimeout(() => { for (const [t,l] of Object.entries(loaders)) hydrate(t,l); }, 200);
})();
<\/script>`}function F(e){const t=Ql();return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KISS</title>
`+`<link rel="stylesheet" href="https://ka-f.webawesome.com/webawesome@3.5.0/styles/webawesome.css" />
  <script type="module" src="https://ka-f.webawesome.com/webawesome@3.5.0/webawesome.loader.js"><\/script>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <script>if(!HTMLTemplateElement.prototype.hasOwnProperty("shadowRoot"))document.write('<script src="https://unpkg.com/@webcomponents/template-shadowroot@0.2.1/template-shadowroot.js"><\\/script>')<\/script>
  <style>:root,[data-theme="dark"]{--kiss-bg-base:#000;--kiss-bg-surface:#0a0a0a;--kiss-bg-elevated:#111;--kiss-bg-hover:#0e0e0e;--kiss-bg-card:#0a0a0a;--kiss-border:#1a1a1a;--kiss-border-hover:#333;--kiss-text-primary:#fff;--kiss-text-secondary:#999;--kiss-text-tertiary:#666;--kiss-text-muted:#444;--kiss-accent:#fff;--kiss-accent-dim:#ccc;--kiss-accent-subtle:rgba(255,255,255,0.05);--kiss-code-bg:#111;--kiss-code-border:#1a1a1a;--kiss-scrollbar-track:transparent;--kiss-scrollbar-thumb:#222;color-scheme:dark}[data-theme="light"]{--kiss-bg-base:#fff;--kiss-bg-surface:#fafafa;--kiss-bg-elevated:#f5f5f5;--kiss-bg-hover:#f0f0f0;--kiss-bg-card:#fff;--kiss-border:#e5e5e5;--kiss-border-hover:#ccc;--kiss-text-primary:#000;--kiss-text-secondary:#555;--kiss-text-tertiary:#888;--kiss-text-muted:#aaa;--kiss-accent:#000;--kiss-accent-dim:#333;--kiss-accent-subtle:rgba(0,0,0,0.03);--kiss-code-bg:#f5f5f5;--kiss-code-border:#e5e5e5;--kiss-scrollbar-track:transparent;--kiss-scrollbar-thumb:#ccc;color-scheme:light}body{margin:0;background:var(--kiss-bg-base);color:var(--kiss-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script>(function(){var s=localStorage.getItem("kiss-theme");var p=window.matchMedia("(prefers-color-scheme:light)").matches;var t=s||(p?"light":"dark");document.documentElement.setAttribute("data-theme",t)})()<\/script>
  <script>document.addEventListener("click",function(e){var p=e.composedPath();for(var i=0;i<p.length;i++){if(p[i].classList&&p[i].classList.contains("mobile-backdrop")){document.querySelectorAll("kiss-layout").forEach(function(el){var sr=el.shadowRoot;if(sr){var d=sr.querySelector("details.mobile-menu");if(d&&d.open)d.removeAttribute("open")}});break}}})<\/script>
  <script>(function(){try{var s=document.createElement("style");s.innerHTML=":has(*){}";document.head.appendChild(s);var w=s.sheet.cssRules.length>0;if(!w){document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("kiss-layout").forEach(function(el){var sr=el.shadowRoot;if(sr){var d=sr.querySelector("details.mobile-menu");if(d){d.addEventListener("toggle",function(){if(this.open)el.classList.add("sidebar-open");else el.classList.remove("sidebar-open")})}}})})}document.head.removeChild(s)}catch(e){console.warn(":has() detection failed:",e)}})()<\/script>`+`
</head>
<body>
`+e+`
`+t+`
</body>
</html>`}async function U(e){const t=C`${Zd(`<${e}></${e}>`)}`,s=Jd(t);return await Cn(s)}const P=new ho;P.use("*",el());P.use("*",nl());P.use("*",ol({origin:e=>(e&&/^http:\/\/localhost(:\d+)?$/.test(e),e),allowMethods:["GET","POST","PUT","DELETE","PATCH"],allowHeaders:["Content-Type","Authorization"],credentials:!0,maxAge:86400}));P.use("*",dl());P.get("/",async e=>{try{const s=await U(El||"index"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/changelog",async e=>{try{const s=await U(Tl||"changelog"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/contributing",async e=>{try{const s=await U(_l||"contributing"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/examples",async e=>{try{const s=await U(vl||"examples/index"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/examples/fullstack",async e=>{try{const s=await U(Il||"examples/fullstack"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/examples/hello",async e=>{try{const s=await U(Cl||"examples/hello"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/examples/minimal-blog",async e=>{try{const s=await U(xl||"examples/minimal-blog"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/api-design",async e=>{try{const s=await U(Rl||"guide/api-design"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/api-routes",async e=>{try{const s=await U(Dl||"guide/api-routes"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/architecture",async e=>{try{const s=await U(Ll||"guide/architecture"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/configuration",async e=>{try{const s=await U(Ol||"guide/configuration"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/deployment",async e=>{try{const s=await U(wl||"guide/deployment"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/design-philosophy",async e=>{try{const s=await U(Pl||"guide/design-philosophy"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/dia",async e=>{try{const s=await U(Ml||"guide/dia"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/error-handling",async e=>{try{const s=await U(Hl||"guide/error-handling"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/getting-started",async e=>{try{const s=await U(Bl||"guide/getting-started"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/islands",async e=>{try{const s=await U(Fl||"guide/islands"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/routing",async e=>{try{const s=await U(Ul||"guide/routing"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/security-middleware",async e=>{try{const s=await U($l||"guide/security-middleware"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/ssg",async e=>{try{const s=await U(zl||"guide/ssg"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/guide/testing",async e=>{try{const s=await U(jl||"guide/testing"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/roadmap",async e=>{try{const s=await U(Yl||"roadmap"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/styling/kiss-ui",async e=>{try{const s=await U(Kl||"styling/kiss-ui"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/styling/web-awesome",async e=>{try{const s=await U(Wl||"styling/web-awesome"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});P.get("/ui",async e=>{try{const s=await U(Vl||"ui"),r=B(s);return e.html(F(r))}catch(t){return e.html("<h1>500</h1><p>"+String(t)+"</p>",500)}});
