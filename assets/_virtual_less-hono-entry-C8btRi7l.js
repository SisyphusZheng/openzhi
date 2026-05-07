var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},n=(e,t,n)=>(r,i)=>{let a=-1;return o(0);async function o(s){if(s<=a)throw Error(`next() called multiple times`);a=s;let c,l=!1,u;if(e[s]?(u=e[s][0][0],r.req.routeIndex=s):u=s===e.length&&i||void 0,u)try{c=await u(r,()=>o(s+1))}catch(e){if(e instanceof Error&&t)r.error=e,c=await t(e,r),l=!0;else throw e}else r.finalized===!1&&n&&(c=await n(r));return c&&(r.finalized===!1||l)&&(r.res=c),r}},r=Symbol(),i=async(e,t=Object.create(null))=>{let{all:n=!1,dot:r=!1}=t,i=(e instanceof ce?e.raw.headers:e.headers).get(`Content-Type`);return i?.startsWith(`multipart/form-data`)||i?.startsWith(`application/x-www-form-urlencoded`)?a(e,{all:n,dot:r}):{}};async function a(e,t){let n=await e.formData();return n?o(n,t):{}}function o(e,t){let n=Object.create(null);return e.forEach((e,r)=>{t.all||r.endsWith(`[]`)?s(n,r,e):n[r]=e}),t.dot&&Object.entries(n).forEach(([e,t])=>{e.includes(`.`)&&(c(n,e,t),delete n[e])}),n}var s=(e,t,n)=>{e[t]===void 0?t.endsWith(`[]`)?e[t]=[n]:e[t]=n:Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]},c=(e,t,n)=>{if(/(?:^|\.)__proto__\./.test(t))return;let r=e,i=t.split(`.`);i.forEach((e,t)=>{t===i.length-1?r[e]=n:((!r[e]||typeof r[e]!=`object`||Array.isArray(r[e])||r[e]instanceof File)&&(r[e]=Object.create(null)),r=r[e])})},l=e=>{let t=e.split(`/`);return t[0]===``&&t.shift(),t},u=e=>{let{groups:t,path:n}=d(e);return f(l(n),t)},d=e=>{let t=[];return e=e.replace(/\{[^}]+\}/g,(e,n)=>{let r=`@${n}`;return t.push([r,e]),r}),{groups:t,path:e}},f=(e,t)=>{for(let n=t.length-1;n>=0;n--){let[r]=t[n];for(let i=e.length-1;i>=0;i--)if(e[i].includes(r)){e[i]=e[i].replace(r,t[n][1]);break}}return e},p={},m=(e,t)=>{if(e===`*`)return`*`;let n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){let r=`${e}#${t}`;return p[r]||(n[2]?p[r]=t&&t[0]!==`:`&&t[0]!==`*`?[r,n[1],RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],RegExp(`^${n[2]}$`)]:p[r]=[e,n[1],!0]),p[r]}return null},h=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,e=>{try{return t(e)}catch{return e}})}},ee=e=>h(e,decodeURI),g=e=>{let t=e.url,n=t.indexOf(`/`,t.indexOf(`:`)+4),r=n;for(;r<t.length;r++){let e=t.charCodeAt(r);if(e===37){let e=t.indexOf(`?`,r),i=t.indexOf(`#`,r),a=e===-1?i===-1?void 0:i:i===-1?e:Math.min(e,i),o=t.slice(n,a);return ee(o.includes(`%25`)?o.replace(/%25/g,`%2525`):o)}else if(e===63||e===35)break}return t.slice(n,r)},_=e=>{let t=g(e);return t.length>1&&t.at(-1)===`/`?t.slice(0,-1):t},v=(e,t,...n)=>(n.length&&(t=v(t,...n)),`${e?.[0]===`/`?``:`/`}${e}${t===`/`?``:`${e?.at(-1)===`/`?``:`/`}${t?.[0]===`/`?t.slice(1):t}`}`),te=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(`:`))return null;let t=e.split(`/`),n=[],r=``;return t.forEach(e=>{if(e!==``&&!/\:/.test(e))r+=`/`+e;else if(/\:/.test(e))if(/\?/.test(e)){n.length===0&&r===``?n.push(`/`):n.push(r);let t=e.replace(`?`,``);r+=`/`+t,n.push(r)}else r+=`/`+e}),n.filter((e,t,n)=>n.indexOf(e)===t)},ne=e=>/[%+]/.test(e)?(e.indexOf(`+`)!==-1&&(e=e.replace(/\+/g,` `)),e.indexOf(`%`)===-1?e:h(e,oe)):e,re=(e,t,n)=>{let r;if(!n&&t&&!/[%+]/.test(t)){let n=e.indexOf(`?`,8);if(n===-1)return;for(e.startsWith(t,n+1)||(n=e.indexOf(`&${t}`,n+1));n!==-1;){let r=e.charCodeAt(n+t.length+1);if(r===61){let r=n+t.length+2,i=e.indexOf(`&`,r);return ne(e.slice(r,i===-1?void 0:i))}else if(r==38||isNaN(r))return``;n=e.indexOf(`&${t}`,n+1)}if(r=/[%+]/.test(e),!r)return}let i={};r??=/[%+]/.test(e);let a=e.indexOf(`?`,8);for(;a!==-1;){let t=e.indexOf(`&`,a+1),o=e.indexOf(`=`,a);o>t&&t!==-1&&(o=-1);let s=e.slice(a+1,o===-1?t===-1?void 0:t:o);if(r&&(s=ne(s)),a=t,s===``)continue;let c;o===-1?c=``:(c=e.slice(o+1,t===-1?void 0:t),r&&(c=ne(c))),n?(i[s]&&Array.isArray(i[s])||(i[s]=[]),i[s].push(c)):i[s]??=c}return t?i[t]:i},ie=re,ae=(e,t)=>re(e,t,!0),oe=decodeURIComponent,se=e=>h(e,oe),ce=class{raw;#e;#t;routeIndex=0;path;bodyCache={};constructor(e,t=`/`,n=[[]]){this.raw=e,this.path=t,this.#t=n,this.#e={}}param(e){return e?this.#n(e):this.#r()}#n(e){let t=this.#t[0][this.routeIndex][1][e],n=this.#i(t);return n&&/\%/.test(n)?se(n):n}#r(){let e={},t=Object.keys(this.#t[0][this.routeIndex][1]);for(let n of t){let t=this.#i(this.#t[0][this.routeIndex][1][n]);t!==void 0&&(e[n]=/\%/.test(t)?se(t):t)}return e}#i(e){return this.#t[1]?this.#t[1][e]:e}query(e){return ie(this.url,e)}queries(e){return ae(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;let t={};return this.raw.headers.forEach((e,n)=>{t[n]=e}),t}async parseBody(e){return i(this,e)}#a=e=>{let{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;let i=Object.keys(t)[0];return i?t[i].then(t=>(i===`json`&&(t=JSON.stringify(t)),new Response(t)[e]())):t[e]=n[e]()};json(){return this.#a(`text`).then(e=>JSON.parse(e))}text(){return this.#a(`text`)}arrayBuffer(){return this.#a(`arrayBuffer`)}blob(){return this.#a(`blob`)}formData(){return this.#a(`formData`)}addValidatedData(e,t){this.#e[e]=t}valid(e){return this.#e[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[r](){return this.#t}get matchedRoutes(){return this.#t[0].map(([[,e]])=>e)}get routePath(){return this.#t[0].map(([[,e]])=>e)[this.routeIndex].path}},le={Stringify:1,BeforeStream:2,Stream:3},ue=(e,t)=>{let n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},de=async(e,t,n,r,i)=>{typeof e==`object`&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));let a=e.callbacks;if(!a?.length)return Promise.resolve(e);i?i[0]+=e:i=[e];let o=Promise.all(a.map(e=>e({phase:t,buffer:i,context:r}))).then(e=>Promise.all(e.filter(Boolean).map(e=>de(e,t,!1,r,i))).then(()=>i[0]));return n?ue(await o,a):o},fe=`text/plain; charset=UTF-8`,pe=(e,t)=>({"Content-Type":e,...t}),y=(e,t)=>new Response(e,t),me=class{#e;#t;env={};#n;finalized=!1;error;#r;#i;#a;#o;#s;#c;#l;#u;#d;constructor(e,t){this.#e=e,t&&(this.#i=t.executionCtx,this.env=t.env,this.#c=t.notFoundHandler,this.#d=t.path,this.#u=t.matchResult)}get req(){return this.#t??=new ce(this.#e,this.#d,this.#u),this.#t}get event(){if(this.#i&&`respondWith`in this.#i)return this.#i;throw Error(`This context has no FetchEvent`)}get executionCtx(){if(this.#i)return this.#i;throw Error(`This context has no ExecutionContext`)}get res(){return this.#a||=y(null,{headers:this.#l??=new Headers})}set res(e){if(this.#a&&e){e=y(e.body,e);for(let[t,n]of this.#a.headers.entries())if(t!==`content-type`)if(t===`set-cookie`){let t=this.#a.headers.getSetCookie();e.headers.delete(`set-cookie`);for(let n of t)e.headers.append(`set-cookie`,n)}else e.headers.set(t,n)}this.#a=e,this.finalized=!0}render=(...e)=>(this.#s??=e=>this.html(e),this.#s(...e));setLayout=e=>this.#o=e;getLayout=()=>this.#o;setRenderer=e=>{this.#s=e};header=(e,t,n)=>{this.finalized&&(this.#a=y(this.#a.body,this.#a));let r=this.#a?this.#a.headers:this.#l??=new Headers;t===void 0?r.delete(e):n?.append?r.append(e,t):r.set(e,t)};status=e=>{this.#r=e};set=(e,t)=>{this.#n??=new Map,this.#n.set(e,t)};get=e=>this.#n?this.#n.get(e):void 0;get var(){return this.#n?Object.fromEntries(this.#n):{}}#f(e,t,n){let r=this.#a?new Headers(this.#a.headers):this.#l??new Headers;if(typeof t==`object`&&`headers`in t){let e=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(let[t,n]of e)t.toLowerCase()===`set-cookie`?r.append(t,n):r.set(t,n)}if(n)for(let[e,t]of Object.entries(n))if(typeof t==`string`)r.set(e,t);else{r.delete(e);for(let n of t)r.append(e,n)}return y(e,{status:typeof t==`number`?t:t?.status??this.#r,headers:r})}newResponse=(...e)=>this.#f(...e);body=(e,t,n)=>this.#f(e,t,n);text=(e,t,n)=>!this.#l&&!this.#r&&!t&&!n&&!this.finalized?new Response(e):this.#f(e,t,pe(fe,n));json=(e,t,n)=>this.#f(JSON.stringify(e),t,pe(`application/json`,n));html=(e,t,n)=>{let r=e=>this.#f(e,t,pe(`text/html; charset=UTF-8`,n));return typeof e==`object`?de(e,le.Stringify,!1,{}).then(r):r(e)};redirect=(e,t)=>{let n=String(e);return this.header(`Location`,/[^\x00-\xFF]/.test(n)?encodeURI(n):n),this.newResponse(null,t??302)};notFound=()=>(this.#c??=()=>y(),this.#c(this))},he=[`get`,`post`,`put`,`delete`,`options`,`patch`],ge=`Can not add a route since the matcher is already built.`,_e=class extends Error{},ve=`__COMPOSED_HANDLER`,ye=e=>e.text(`404 Not Found`,404),be=(e,t)=>{if(`getResponse`in e){let n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text(`Internal Server Error`,500)},xe=class e{get;post;put;delete;options;patch;all;on;use;router;getPath;_basePath=`/`;#e=`/`;routes=[];constructor(e={}){[...he,`all`].forEach(e=>{this[e]=(t,...n)=>(typeof t==`string`?this.#e=t:this.#r(e,this.#e,t),n.forEach(t=>{this.#r(e,this.#e,t)}),this)}),this.on=(e,t,...n)=>{for(let r of[t].flat()){this.#e=r;for(let t of[e].flat())n.map(e=>{this.#r(t.toUpperCase(),this.#e,e)})}return this},this.use=(e,...t)=>(typeof e==`string`?this.#e=e:(this.#e=`*`,t.unshift(e)),t.forEach(e=>{this.#r(`ALL`,this.#e,e)}),this);let{strict:t,...n}=e;Object.assign(this,n),this.getPath=t??!0?e.getPath??g:_}#t(){let t=new e({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,t.#n=this.#n,t.routes=this.routes,t}#n=ye;errorHandler=be;route(e,t){let r=this.basePath(e);return t.routes.map(e=>{let i;t.errorHandler===be?i=e.handler:(i=async(r,i)=>(await n([],t.errorHandler)(r,()=>e.handler(r,i))).res,i[ve]=e.handler),r.#r(e.method,e.path,i)}),this}basePath(e){let t=this.#t();return t._basePath=v(this._basePath,e),t}onError=e=>(this.errorHandler=e,this);notFound=e=>(this.#n=e,this);mount(e,t,n){let r,i;n&&(typeof n==`function`?i=n:(i=n.optionHandler,r=n.replaceRequest===!1?e=>e:n.replaceRequest));let a=i?e=>{let t=i(e);return Array.isArray(t)?t:[t]}:e=>{let t;try{t=e.executionCtx}catch{}return[e.env,t]};return r||=(()=>{let t=v(this._basePath,e),n=t===`/`?0:t.length;return e=>{let t=new URL(e.url);return t.pathname=t.pathname.slice(n)||`/`,new Request(t,e)}})(),this.#r(`ALL`,v(e,`*`),async(e,n)=>{let i=await t(r(e.req.raw),...a(e));if(i)return i;await n()}),this}#r(e,t,n){e=e.toUpperCase(),t=v(this._basePath,t);let r={basePath:this._basePath,path:t,method:e,handler:n};this.router.add(e,t,[n,r]),this.routes.push(r)}#i(e,t){if(e instanceof Error)return this.errorHandler(e,t);throw e}#a(e,t,r,i){if(i===`HEAD`)return(async()=>new Response(null,await this.#a(e,t,r,`GET`)))();let a=this.getPath(e,{env:r}),o=this.router.match(i,a),s=new me(e,{path:a,matchResult:o,env:r,executionCtx:t,notFoundHandler:this.#n});if(o[0].length===1){let e;try{e=o[0][0][0][0](s,async()=>{s.res=await this.#n(s)})}catch(e){return this.#i(e,s)}return e instanceof Promise?e.then(e=>e||(s.finalized?s.res:this.#n(s))).catch(e=>this.#i(e,s)):e??this.#n(s)}let c=n(o[0],this.errorHandler,this.#n);return(async()=>{try{let e=await c(s);if(!e.finalized)throw Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return e.res}catch(e){return this.#i(e,s)}})()}fetch=(e,...t)=>this.#a(e,t[1],t[0],e.method);request=(e,t,n,r)=>e instanceof Request?this.fetch(t?new Request(e,t):e,n,r):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${v(`/`,e)}`,t),n,r));fire=()=>{addEventListener(`fetch`,e=>{e.respondWith(this.#a(e.request,e,void 0,e.request.method))})}},Se=[];function Ce(e,t){let n=this.buildAllMatchers(),r=((e,t)=>{let r=n[e]||n.ALL,i=r[2][t];if(i)return i;let a=t.match(r[0]);if(!a)return[[],Se];let o=a.indexOf(``,1);return[r[1][o],a]});return this.match=r,r(e,t)}var we=`[^/]+`,b=`.*`,x=`(?:|/.*)`,S=Symbol(),Te=new Set(`.\\+*[^]$()`);function Ee(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===b||e===x?1:t===b||t===x?-1:e===we?1:t===we?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var De=class e{#e;#t;#n=Object.create(null);insert(t,n,r,i,a){if(t.length===0){if(this.#e!==void 0)throw S;if(a)return;this.#e=n;return}let[o,...s]=t,c=o===`*`?s.length===0?[``,``,b]:[``,``,we]:o===`/*`?[``,``,x]:o.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/),l;if(c){let t=c[1],n=c[2]||we;if(t&&c[2]&&(n===`.*`||(n=n.replace(/^\((?!\?:)(?=[^)]+\)$)/,`(?:`),/\((?!\?:)/.test(n))))throw S;if(l=this.#n[n],!l){if(Object.keys(this.#n).some(e=>e!==b&&e!==x))throw S;if(a)return;l=this.#n[n]=new e,t!==``&&(l.#t=i.varIndex++)}!a&&t!==``&&r.push([t,l.#t])}else if(l=this.#n[o],!l){if(Object.keys(this.#n).some(e=>e.length>1&&e!==b&&e!==x))throw S;if(a)return;l=this.#n[o]=new e}l.insert(s,n,r,i,a)}buildRegExpStr(){let e=Object.keys(this.#n).sort(Ee).map(e=>{let t=this.#n[e];return(typeof t.#t==`number`?`(${e})@${t.#t}`:Te.has(e)?`\\${e}`:e)+t.buildRegExpStr()});return typeof this.#e==`number`&&e.unshift(`#${this.#e}`),e.length===0?``:e.length===1?e[0]:`(?:`+e.join(`|`)+`)`}},Oe=class{#e={varIndex:0};#t=new De;insert(e,t,n){let r=[],i=[];for(let t=0;;){let n=!1;if(e=e.replace(/\{[^}]+\}/g,e=>{let r=`@\\${t}`;return i[t]=[r,e],t++,n=!0,r}),!n)break}let a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let e=i.length-1;e>=0;e--){let[t]=i[e];for(let n=a.length-1;n>=0;n--)if(a[n].indexOf(t)!==-1){a[n]=a[n].replace(t,i[e][1]);break}}return this.#t.insert(a,t,r,this.#e,n),r}buildRegExp(){let e=this.#t.buildRegExpStr();if(e===``)return[/^$/,[],[]];let t=0,n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(e,i,a)=>i===void 0?(a===void 0||(r[Number(a)]=++t),``):(n[++t]=Number(i),`$()`)),[RegExp(`^${e}`),n,r]}},ke=[/^$/,[],Object.create(null)],Ae=Object.create(null);function je(e){return Ae[e]??=RegExp(e===`*`?``:`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(e,t)=>t?`\\${t}`:`(?:|/.*)`)}$`)}function Me(){Ae=Object.create(null)}function Ne(e){let t=new Oe,n=[];if(e.length===0)return ke;let r=e.map(e=>[!/\*|\/:/.test(e[0]),...e]).sort(([e,t],[n,r])=>e?1:n?-1:t.length-r.length),i=Object.create(null);for(let e=0,a=-1,o=r.length;e<o;e++){let[o,s,c]=r[e];o?i[s]=[c.map(([e])=>[e,Object.create(null)]),Se]:a++;let l;try{l=t.insert(s,a,o)}catch(e){throw e===S?new _e(s):e}o||(n[a]=c.map(([e,t])=>{let n=Object.create(null);for(--t;t>=0;t--){let[e,r]=l[t];n[e]=r}return[e,n]}))}let[a,o,s]=t.buildRegExp();for(let e=0,t=n.length;e<t;e++)for(let t=0,r=n[e].length;t<r;t++){let r=n[e][t]?.[1];if(!r)continue;let i=Object.keys(r);for(let e=0,t=i.length;e<t;e++)r[i[e]]=s[r[i[e]]]}let c=[];for(let e in o)c[e]=n[o[e]];return[a,c,i]}function C(e,t){if(e){for(let n of Object.keys(e).sort((e,t)=>t.length-e.length))if(je(n).test(t))return[...e[n]]}}var Pe=class{name=`RegExpRouter`;#e;#t;constructor(){this.#e={ALL:Object.create(null)},this.#t={ALL:Object.create(null)}}add(e,t,n){let r=this.#e,i=this.#t;if(!r||!i)throw Error(ge);r[e]||[r,i].forEach(t=>{t[e]=Object.create(null),Object.keys(t.ALL).forEach(n=>{t[e][n]=[...t.ALL[n]]})}),t===`/*`&&(t=`*`);let a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){let o=je(t);e===`ALL`?Object.keys(r).forEach(e=>{r[e][t]||=C(r[e],t)||C(r.ALL,t)||[]}):r[e][t]||=C(r[e],t)||C(r.ALL,t)||[],Object.keys(r).forEach(t=>{(e===`ALL`||e===t)&&Object.keys(r[t]).forEach(e=>{o.test(e)&&r[t][e].push([n,a])})}),Object.keys(i).forEach(t=>{(e===`ALL`||e===t)&&Object.keys(i[t]).forEach(e=>o.test(e)&&i[t][e].push([n,a]))});return}let o=te(t)||[t];for(let t=0,s=o.length;t<s;t++){let c=o[t];Object.keys(i).forEach(o=>{(e===`ALL`||e===o)&&(i[o][c]||=[...C(r[o],c)||C(r.ALL,c)||[]],i[o][c].push([n,a-s+t+1]))})}}match=Ce;buildAllMatchers(){let e=Object.create(null);return Object.keys(this.#t).concat(Object.keys(this.#e)).forEach(t=>{e[t]||=this.#n(t)}),this.#e=this.#t=void 0,Me(),e}#n(e){let t=[],n=e===`ALL`;return[this.#e,this.#t].forEach(r=>{let i=r[e]?Object.keys(r[e]).map(t=>[t,r[e][t]]):[];i.length===0?e!==`ALL`&&t.push(...Object.keys(r.ALL).map(e=>[e,r.ALL[e]])):(n||=!0,t.push(...i))}),n?Ne(t):null}},Fe=class{name=`SmartRouter`;#e=[];#t=[];constructor(e){this.#e=e.routers}add(e,t,n){if(!this.#t)throw Error(ge);this.#t.push([e,t,n])}match(e,t){if(!this.#t)throw Error(`Fatal error`);let n=this.#e,r=this.#t,i=n.length,a=0,o;for(;a<i;a++){let i=n[a];try{for(let e=0,t=r.length;e<t;e++)i.add(...r[e]);o=i.match(e,t)}catch(e){if(e instanceof _e)continue;throw e}this.match=i.match.bind(i),this.#e=[i],this.#t=void 0;break}if(a===i)throw Error(`Fatal error`);return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(this.#t||this.#e.length!==1)throw Error(`No active router has been determined yet.`);return this.#e[0]}},w=Object.create(null),Ie=e=>{for(let t in e)return!0;return!1},Le=class e{#e;#t;#n;#r=0;#i=w;constructor(e,t,n){if(this.#t=n||Object.create(null),this.#e=[],e&&t){let n=Object.create(null);n[e]={handler:t,possibleKeys:[],score:0},this.#e=[n]}this.#n=[]}insert(t,n,r){this.#r=++this.#r;let i=this,a=u(n),o=[];for(let t=0,n=a.length;t<n;t++){let n=a[t],r=a[t+1],s=m(n,r),c=Array.isArray(s)?s[0]:n;if(c in i.#t){i=i.#t[c],s&&o.push(s[1]);continue}i.#t[c]=new e,s&&(i.#n.push(s),o.push(s[1])),i=i.#t[c]}return i.#e.push({[t]:{handler:r,possibleKeys:o.filter((e,t,n)=>n.indexOf(e)===t),score:this.#r}}),i}#a(e,t,n,r,i){for(let a=0,o=t.#e.length;a<o;a++){let o=t.#e[a],s=o[n]||o.ALL,c={};if(s!==void 0&&(s.params=Object.create(null),e.push(s),r!==w||i&&i!==w))for(let e=0,t=s.possibleKeys.length;e<t;e++){let t=s.possibleKeys[e],n=c[s.score];s.params[t]=i?.[t]&&!n?i[t]:r[t]??i?.[t],c[s.score]=!0}}}search(e,t){let n=[];this.#i=w;let r=[this],i=l(t),a=[],o=i.length,s=null;for(let c=0;c<o;c++){let l=i[c],u=c===o-1,d=[];for(let f=0,p=r.length;f<p;f++){let p=r[f],m=p.#t[l];m&&(m.#i=p.#i,u?(m.#t[`*`]&&this.#a(n,m.#t[`*`],e,p.#i),this.#a(n,m,e,p.#i)):d.push(m));for(let r=0,f=p.#n.length;r<f;r++){let f=p.#n[r],m=p.#i===w?{}:{...p.#i};if(f===`*`){let t=p.#t[`*`];t&&(this.#a(n,t,e,p.#i),t.#i=m,d.push(t));continue}let[h,ee,g]=f;if(!l&&!(g instanceof RegExp))continue;let _=p.#t[h];if(g instanceof RegExp){if(s===null){s=Array(o);let e=+(t[0]===`/`);for(let t=0;t<o;t++)s[t]=e,e+=i[t].length+1}let r=t.substring(s[c]),l=g.exec(r);if(l){if(m[ee]=l[0],this.#a(n,_,e,p.#i,m),Ie(_.#t)){_.#i=m;let e=l[0].match(/\//)?.length??0;(a[e]||=[]).push(_)}continue}}(g===!0||g.test(l))&&(m[ee]=l,u?(this.#a(n,_,e,m,p.#i),_.#t[`*`]&&this.#a(n,_.#t[`*`],e,m,p.#i)):(_.#i=m,d.push(_)))}}let f=a.shift();r=f?d.concat(f):d}return n.length>1&&n.sort((e,t)=>e.score-t.score),[n.map(({handler:e,params:t})=>[e,t])]}},Re=class{name=`TrieRouter`;#e;constructor(){this.#e=new Le}add(e,t,n){let r=te(t);if(r){for(let t=0,i=r.length;t<i;t++)this.#e.insert(e,r[t],n);return}this.#e.insert(e,t,n)}match(e,t){return this.#e.search(e,t)}},ze=class extends xe{constructor(e={}){super(e),this.router=e.router??new Fe({routers:[new Pe,new Re]})}};function T(e){return typeof e==`string`?e.__safeHtml!==void 0||e.__unsafeHtml!==void 0?e:e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`):``}function Be(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function E(e){return e==null?``:Be(String(e))}var Ve;function He(){return Ve}function Ue(e){let t=[];for(let[n,r]of Object.entries(e))r===!1||r==null||(r===!0?t.push(n):typeof r==`object`?t.push(`${n}="${E(JSON.stringify(r))}"`):t.push(`${n}="${E(r)}"`));return t.length>0?` `+t.join(` `):``}async function We(e,t,n={},r,i){let a=r?`${r.route?` route="${r.route}"`:``}${r.source?` source="${r.source}"`:``}`:``,o;try{o=new t}catch(t){let n=t instanceof Error?t.message:String(t);return console.error(`[LessJS] Failed to instantiate <${e}>:`,n),`<${e}${a}><!-- LessJS ERROR: Failed to instantiate <${e}>: ${T(n)} -->`+(r?.route?`\n<!-- Route: ${T(r.route)} -->`:``)+(r?.source?`\n<!-- Source: ${T(r.source)} -->`:``)+`</${e}>`}for(let[e,t]of Object.entries(n))try{o[e]=t}catch{}let s;try{let t=o.render();if(t==null)s=``;else if(typeof t==`string`)s=t;else{let n=He();if(n?.isTemplate&&n?.render&&n.isTemplate(t))s=await n.render(t,e);else{let n=Ke(t)?`This looks like a Lit TemplateResult — install @lessjs/adapter-lit to handle it.`:`Components must return a string from render(), got ${typeof t}.`;console.error(`[LessJS] <${e}> render() returned ${typeof t} instead of string. ${n}`),s=`<!-- LessJS ERROR: <${e}> render() returned ${typeof t}, expected string. ${n} -->`}}}catch(t){let n=t instanceof Error?t.message:String(t),r=t instanceof Error?t.stack:``;console.error(`[LessJS] <${e}> render() failed:`,n,r?`\n${r}`:``),s=`<!-- LessJS ERROR: <${e}> render() threw: ${T(n)} -->\n`+(r?`<!-- Stack: ${T(r.split(`
`).slice(0,3).join(` | `))} -->\n`:``)+`<!-- Check console for full error details -->`}s=await et(s);let c=``,l=He();if(l?.extractStyles)try{c=l.extractStyles(t)||``}catch{}if((i?.layer||o.layer||`dsd-static`)===`pure-island`)return`<${e}${Ue(n)}${Object.keys(n).length>0?` data-ssr-props="${E(JSON.stringify(n))}"`:``}${a}></${e}>`;let u=Ue(n),d=Object.keys(n).length>0?` data-ssr-props="${E(JSON.stringify(n))}"`:``,f=c?`\n    <style>${c}</style>`:``;return`<${e}${u}${d}${a}>
  <template shadowrootmode="open"${Ge(i)}>${f}
    ${s}
  </template>
</${e}>`}function Ge(e){if(!e)return``;let t=[];return e.delegatesFocus&&t.push(` shadowrootdelegatesfocus`),e.serializable&&t.push(` shadowrootserializable`),e.slotAssignment===`manual`&&t.push(` shadowrootslotassignment="manual"`),e.customElementRegistry&&t.push(` shadowrootcustomelementregistry="${Be(e.customElementRegistry)}"`),t.join(``)}function Ke(e){return typeof e==`object`&&!!e&&`_$litType$`in e}function qe(e){return e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Je(e){let t={},n=/(\w[\w-]*)(?:="((?:[^"\\]|\\.)*)"|='((?:[^'\\]|\\.)*)')?/g,r;for(;(r=n.exec(e))!==null;){let e=r[1],n=r[2]??r[3];n===void 0?t[e]=!0:e.startsWith(`data-`)?t[e]=n:t[qe(e)]=n}return t}function Ye(e,t,n){let r=1,i=RegExp(`<${t}[\\s/>]`,`g`),a=RegExp(`</${t}>`,`g`);i.lastIndex=n,a.lastIndex=n;let o,s;for(o=i.exec(e),s=a.exec(e);r>0;){if(s===null)return-1;if(o===null||o.index>=s.index){if(r--,r===0)return s.index;s=a.exec(e)}else r++,o=i.exec(e)}return-1}function Xe(e){let t=[],n=/<template\s+shadowrootmode\s*=\s*"open"[^>]*>/g,r;for(;(r=n.exec(e))!==null;){let n=r.index+r[0].length,i=1,a=n;for(;i>0&&a<e.length;){let n=e.indexOf(`</template>`,a),o=e.indexOf(`<template`,a);if(n===-1)break;o!==-1&&o<n?(i++,a=o+9):(i--,i===0&&t.push([r.index,n+11]),a=n+11)}}return t}function Ze(e,t){for(let[n,r]of t)if(e>=n&&e<r)return!0;return!1}function Qe(e,t,n){return e.slice(t).match(/^\s*<template\s+shadowrootmode\s*=\s*"open"[^>]*>/)!==null}function $e(e,t){let n={},r=t;return r.delegatesFocus===!0&&(n.delegatesFocus=!0),r.serializable===!0&&(n.serializable=!0),r.slotAssignment===`manual`&&(n.slotAssignment=`manual`),typeof r.customElementRegistry==`string`&&(n.customElementRegistry=r.customElementRegistry),n}async function et(e){if(!globalThis.customElements?.get)return e;let t=e,n=50;for(;n-- >0;){let e=Xe(t),n=/<([a-z][a-z0-9]*-[a-z0-9-]+)([\s\S]*?)>/g,r=null,i;for(;(i=n.exec(t))!==null;){let n=i[1],a=i[2],o=i.index,s=o+i[0].length;if(!globalThis.customElements.get(n)||Ze(o,e))continue;if(a.trimEnd().endsWith(`/`)){(!r||o>r.start)&&(r={tagName:n,attrsStr:a.replace(/\/\s*$/,``),start:o,openEnd:s,selfClosing:!0});continue}let c=Ye(t,n,s);c!==-1&&(Qe(t,s,c)||Ze(c,e)||(!r||o>r.start)&&(r={tagName:n,attrsStr:a,start:o,openEnd:s,selfClosing:!1}))}if(!r)break;let a=r,o=globalThis.customElements.get(a.tagName),s=Je(a.attrsStr),c=$e(a.tagName,o);if(a.selfClosing){let e=await We(a.tagName,o,s,void 0,c);t=t.slice(0,a.start)+e+t.slice(a.openEnd)}else{let e=`</${a.tagName}>`,n=Ye(t,a.tagName,a.openEnd);if(n===-1)break;let r=n+e.length,i=t.slice(a.openEnd,n),l=await We(a.tagName,o,s,void 0,c),u=l.lastIndexOf(`</template>`);if(u===-1)break;let d=i.trim(),f;if(!d)f=l;else{let e=l.slice(0,u+11),t=l.slice(u+11);f=e+`
  `+i+t}t=t.slice(0,a.start)+f+t.slice(r)}}return t}function D(e,t={}){let{title:n=`LessJS`,lang:r=`en`,clientScript:i=``,meta:a,devMode:o=!1,routeModulePath:s,headExtras:c=``,cspNonce:l}=t,u=l?` nonce="${l}"`:``,d=T(n),f=E(r),p=c,m=[];if(a?.description){let e=a.description.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);m.push(`  <meta name="description" content="${e}">`)}return`<!DOCTYPE html>
<html lang="${f}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${d}</title>${m.length>0?`
`+m.join(`
`)+`
`:``}
  ${p}
</head>
<body>
  ${e}
  ${i}${o?`
  <script type="module" src="/@vite/client"${u}><\/script>
  ${s?`<script type="module"${u}>
  // Register route component for client-side custom element definition
  import '${s}';
<\/script>`:``}`:``}
</body>
</html>`}var tt=({limitLength:e=255,headerName:t=`X-Request-Id`,generator:n=()=>crypto.randomUUID()}={})=>async function(r,i){let a=t?r.req.header(t):void 0;(!a||a.length>e||/[^\w\-=]/.test(a))&&(a=n(r)),r.set(`requestId`,a),t&&r.header(t,a),await i()},nt=`modulepreload`,rt=function(e){return`/`+e},it={},at=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=rt(t,n),t in it)return;it[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:nt,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function ot(){let{process:e,Deno:t}=globalThis;return!(typeof t?.noColor==`boolean`?t.noColor:e!==void 0&&`NO_COLOR`in e?.env)}async function st(){let{navigator:e}=globalThis;return!(e!==void 0&&e.userAgent===`Cloudflare-Workers`?await(async()=>{try{return`NO_COLOR`in((await at(async()=>{let{env:e}=await import(`cloudflare:workers`);return{env:e}},[])).env??{})}catch{return!1}})():!ot())}var ct=e=>{let[t,n]=[`,`,`.`];return e.map(e=>e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,`$1`+t)).join(n)},lt=e=>{let t=Date.now()-e;return ct([t<1e3?t+`ms`:Math.round(t/1e3)+`s`])},ut=async e=>{if(await st())switch(e/100|0){case 5:return`\x1B[31m${e}\x1B[0m`;case 4:return`\x1B[33m${e}\x1B[0m`;case 3:return`\x1B[36m${e}\x1B[0m`;case 2:return`\x1B[32m${e}\x1B[0m`}return`${e}`};async function dt(e,t,n,r,i=0,a){e(t===`<--`?`${t} ${n} ${r}`:`${t} ${n} ${r} ${await ut(i)} ${a}`)}var ft=(e=console.log)=>async function(t,n){let{method:r,url:i}=t.req,a=i.slice(i.indexOf(`/`,8));await dt(e,`<--`,r,a);let o=Date.now();await n(),await dt(e,`-->`,r,a,t.res.status,lt(o))},pt=e=>{let t={origin:`*`,allowMethods:[`GET`,`HEAD`,`PUT`,`POST`,`DELETE`,`PATCH`],allowHeaders:[],exposeHeaders:[],...e},n=(e=>typeof e==`string`?e===`*`?t.credentials?e=>e||null:()=>e:t=>e===t?t:null:typeof e==`function`?e:t=>e.includes(t)?t:null)(t.origin),r=(e=>typeof e==`function`?e:Array.isArray(e)?()=>e:()=>[])(t.allowMethods);return async function(e,i){function a(t,n){e.res.headers.set(t,n)}let o=await n(e.req.header(`origin`)||``,e);if(o&&a(`Access-Control-Allow-Origin`,o),t.credentials&&a(`Access-Control-Allow-Credentials`,`true`),t.exposeHeaders?.length&&a(`Access-Control-Expose-Headers`,t.exposeHeaders.join(`,`)),e.req.method===`OPTIONS`){(t.origin!==`*`||t.credentials)&&a(`Vary`,`Origin`),t.maxAge!=null&&a(`Access-Control-Max-Age`,t.maxAge.toString());let n=await r(e.req.header(`origin`)||``,e);n.length&&a(`Access-Control-Allow-Methods`,n.join(`,`));let i=t.allowHeaders;if(!i?.length){let t=e.req.header(`Access-Control-Request-Headers`);t&&(i=t.split(/\s*,\s*/))}return i?.length&&(a(`Access-Control-Allow-Headers`,i.join(`,`)),e.res.headers.append(`Vary`,`Access-Control-Request-Headers`)),e.res.headers.delete(`Content-Length`),e.res.headers.delete(`Content-Type`),new Response(null,{headers:e.res.headers,status:204,statusText:`No Content`})}await i(),(t.origin!==`*`||t.credentials)&&e.header(`Vary`,`Origin`,{append:!0})}},mt={crossOriginEmbedderPolicy:[`Cross-Origin-Embedder-Policy`,`require-corp`],crossOriginResourcePolicy:[`Cross-Origin-Resource-Policy`,`same-origin`],crossOriginOpenerPolicy:[`Cross-Origin-Opener-Policy`,`same-origin`],originAgentCluster:[`Origin-Agent-Cluster`,`?1`],referrerPolicy:[`Referrer-Policy`,`no-referrer`],strictTransportSecurity:[`Strict-Transport-Security`,`max-age=15552000; includeSubDomains`],xContentTypeOptions:[`X-Content-Type-Options`,`nosniff`],xDnsPrefetchControl:[`X-DNS-Prefetch-Control`,`off`],xDownloadOptions:[`X-Download-Options`,`noopen`],xFrameOptions:[`X-Frame-Options`,`SAMEORIGIN`],xPermittedCrossDomainPolicies:[`X-Permitted-Cross-Domain-Policies`,`none`],xXssProtection:[`X-XSS-Protection`,`0`]},ht={crossOriginEmbedderPolicy:!1,crossOriginResourcePolicy:!0,crossOriginOpenerPolicy:!0,originAgentCluster:!0,referrerPolicy:!0,strictTransportSecurity:!0,xContentTypeOptions:!0,xDnsPrefetchControl:!0,xDownloadOptions:!0,xFrameOptions:!0,xPermittedCrossDomainPolicies:!0,xXssProtection:!0,removePoweredBy:!0,permissionsPolicy:{}},gt=e=>{let t={...ht,...e},n=_t(t),r=[];if(t.contentSecurityPolicy){let[e,i]=vt(t.contentSecurityPolicy);e&&r.push(e),n.push([`Content-Security-Policy`,i])}if(t.contentSecurityPolicyReportOnly){let[e,i]=vt(t.contentSecurityPolicyReportOnly);e&&r.push(e),n.push([`Content-Security-Policy-Report-Only`,i])}return t.permissionsPolicy&&Object.keys(t.permissionsPolicy).length>0&&n.push([`Permissions-Policy`,yt(t.permissionsPolicy)]),t.reportingEndpoints&&n.push([`Reporting-Endpoints`,xt(t.reportingEndpoints)]),t.reportTo&&n.push([`Report-To`,St(t.reportTo)]),async function(e,i){let a=r.length===0?n:r.reduce((t,n)=>n(e,t),n);await i(),Ct(e,a),t?.removePoweredBy&&e.res.headers.delete(`X-Powered-By`)}};function _t(e){return Object.entries(mt).filter(([t])=>e[t]).map(([t,n])=>{let r=e[t];return typeof r==`string`?[n[0],r]:n})}function vt(e){let t=[],n=[];for(let[r,i]of Object.entries(e)){let e=Array.isArray(i)?i:[i];e.forEach((e,i)=>{if(typeof e==`function`){let a=i*2+2+n.length;t.push((t,n)=>{n[a]=e(t,r)})}}),n.push(r.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,t)=>t?`-`+e.toLowerCase():e.toLowerCase()),...e.flatMap(e=>[` `,e]),`; `)}return n.pop(),t.length===0?[void 0,n.join(``)]:[(e,n)=>n.map(n=>{if(n[0]===`Content-Security-Policy`||n[0]===`Content-Security-Policy-Report-Only`){let r=n[1].slice();return t.forEach(t=>{t(e,r)}),[n[0],r.join(``)]}else return n}),n]}function yt(e){return Object.entries(e).map(([e,t])=>{let n=bt(e);return typeof t==`boolean`?`${n}=${t?`*`:`none`}`:Array.isArray(t)?t.length===0?`${n}=()`:t.length===1&&(t[0]===`*`||t[0]===`none`)?`${n}=${t[0]}`:`${n}=(${t.map(e=>[`self`,`src`].includes(e)?e:`"${e}"`).join(` `)})`:``}).filter(Boolean).join(`, `)}function bt(e){return e.replace(/([a-z\d])([A-Z])/g,`$1-$2`).toLowerCase()}function xt(e=[]){return e.map(e=>`${e.name}="${e.url}"`).join(`, `)}function St(e=[]){return e.map(e=>JSON.stringify(e)).join(`, `)}function Ct(e,t){t.forEach(([t,n])=>{e.res.headers.set(t,n)})}var O=globalThis,wt=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Tt=Symbol(),Et=new WeakMap,Dt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(wt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Et.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Et.set(t,e))}return e}toString(){return this.cssText}},Ot=e=>new Dt(typeof e==`string`?e:e+``,void 0,Tt),k=(e,...t)=>new Dt(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,Tt),kt=(e,t)=>{if(wt)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=O.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},At=wt?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return Ot(t)})(e):e,{is:jt,defineProperty:Mt,getOwnPropertyDescriptor:Nt,getOwnPropertyNames:Pt,getOwnPropertySymbols:Ft,getPrototypeOf:It}=Object,A=globalThis,Lt=A.trustedTypes,Rt=Lt?Lt.emptyScript:``,zt=A.reactiveElementPolyfillSupport,j=(e,t)=>e,Bt={toAttribute(e,t){switch(t){case Boolean:e=e?Rt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Vt=(e,t)=>!jt(e,t),Ht={attribute:!0,type:String,converter:Bt,reflect:!1,useDefault:!1,hasChanged:Vt};Symbol.metadata??=Symbol(`metadata`),A.litPropertyMetadata??=new WeakMap;var M=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ht){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Mt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Nt(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ht}static _$Ei(){if(this.hasOwnProperty(j(`elementProperties`)))return;let e=It(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(j(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j(`properties`))){let e=this.properties,t=[...Pt(e),...Ft(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(At(e))}else e!==void 0&&t.push(At(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Bt:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Bt:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Vt)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};M.elementStyles=[],M.shadowRootOptions={mode:`open`},M[j(`elementProperties`)]=new Map,M[j(`finalized`)]=new Map,zt?.({ReactiveElement:M}),(A.reactiveElementVersions??=[]).push(`2.1.2`);var Ut=globalThis,Wt=e=>e,N=Ut.trustedTypes,Gt=N?N.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Kt=`$lit$`,P=`lit$${Math.random().toFixed(9).slice(2)}$`,qt=`?`+P,Jt=`<${qt}>`,F=document,I=()=>F.createComment(``),L=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Yt=Array.isArray,Xt=e=>Yt(e)||typeof e?.[Symbol.iterator]==`function`,Zt=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qt=/-->/g,$t=/>/g,z=RegExp(`>|${Zt}(?:([^\\s"'>=/]+)(${Zt}*=${Zt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),en=/'/g,tn=/"/g,nn=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),V=Symbol.for(`lit-noChange`),H=Symbol.for(`lit-nothing`),rn=new WeakMap,U=F.createTreeWalker(F,129);function an(e,t){if(!Yt(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Gt===void 0?t:Gt.createHTML(t)}var on=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=R;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===R?c[1]===`!--`?o=Qt:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=z):(nn.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=z):o=$t:o===z?c[0]===`>`?(o=i??R,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?z:c[3]===`"`?tn:en):o===tn||o===en?o=z:o===Qt||o===$t?o=R:(o=z,i=void 0);let d=o===z&&e[t+1].startsWith(`/>`)?` `:``;a+=o===R?n+Jt:l>=0?(r.push(s),n.slice(0,l)+Kt+n.slice(l)+P+d):n+P+(l===-2?t:d)}return[an(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},sn=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=on(t,n);if(this.el=e.createElement(l,r),U.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=U.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Kt)){let t=u[o++],n=i.getAttribute(e).split(P),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?un:r[1]===`?`?dn:r[1]===`@`?fn:G}),i.removeAttribute(e)}else e.startsWith(P)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(nn.test(i.tagName)){let e=i.textContent.split(P),t=e.length-1;if(t>0){i.textContent=N?N.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],I()),U.nextNode(),c.push({type:2,index:++a});i.append(e[t],I())}}}else if(i.nodeType===8)if(i.data===qt)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(P,e+1))!==-1;)c.push({type:7,index:a}),e+=P.length-1}a++}}static createElement(e,t){let n=F.createElement(`template`);return n.innerHTML=e,n}};function W(e,t,n=e,r){if(t===V)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=L(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=W(e,i._$AS(e,t.values),i,r)),t}var cn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??F).importNode(t,!0);U.currentNode=r;let i=U.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new ln(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new pn(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=U.nextNode(),a++)}return U.currentNode=F,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},ln=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),L(e)?e===H||e==null||e===``?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==V&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Xt(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==H&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=sn.createElement(an(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new cn(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=rn.get(e.strings);return t===void 0&&rn.set(e.strings,t=new sn(e)),t}k(t){Yt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(I()),this.O(I()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Wt(e).nextSibling;Wt(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},G=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=W(this,e,t,0),a=!L(e)||e!==this._$AH&&e!==V,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=W(this,r[n+o],t,o),s===V&&(s=this._$AH[o]),a||=!L(s)||s!==this._$AH[o],s===H?e=H:e!==H&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},un=class extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}},dn=class extends G{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==H)}},fn=class extends G{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=W(this,e,t,0)??H)===V)return;let n=this._$AH,r=e===H&&n!==H||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==H&&(n===H||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},pn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}},mn=Ut.litHtmlPolyfillSupport;mn?.(sn,ln),(Ut.litHtmlVersions??=[]).push(`3.3.2`);var hn=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new ln(t.insertBefore(I(),e),e,void 0,n??{})}return i._$AI(e),i},gn=globalThis,K=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=hn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};K._$litElement$=!0,K.finalized=!0,gn.litElementHydrateSupport?.({LitElement:K});var _n=gn.litElementPolyfillSupport;_n?.({LitElement:K}),(gn.litElementVersions??=[]).push(`4.2.2`);var q=k`
  :host {
    display: block;
  }

  .container {
    max-width: 720px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: -0.02em;
    margin: 0 0 0.5rem;
    color: var(--less-text-primary);
    line-height: 1.2;
  }

  .subtitle {
    color: var(--less-text-tertiary);
    margin-bottom: 3rem;
    font-size: 0.875rem;
    line-height: 1.7;
  }

  h2 {
    font-size: 1rem;
    font-weight: 500;
    margin: 2rem 0 0.75rem;
    color: var(--less-text-primary);
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    margin: 1.5rem 0 0.5rem;
    color: var(--less-text-primary);
  }

  p {
    line-height: 1.7;
    margin: 0.5rem 0;
    color: var(--less-text-secondary);
    font-size: 0.875rem;
  }

  strong {
    color: var(--less-text-primary);
    font-weight: 500;
  }
  em {
    font-style: italic;
  }

  a {
    color: var(--less-text-primary);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: var(--less-border-hover);
    text-decoration-thickness: 0.5px;
    transition: text-decoration-color 0.15s;
  }
  a:hover {
    text-decoration-color: var(--less-text-primary);
  }

  /* Code */
  pre {
    background: var(--less-code-bg);
    color: var(--less-text-secondary);
    padding: 1rem 1.25rem;
    border-radius: 3px;
    overflow-x: auto;
    font-size: 0.8125rem;
    line-height: 1.6;
    margin: 0.75rem 0;
    border: 0.5px solid var(--less-code-border);
  }

  code {
    font-family: "SF Mono", "Fira Code", "Consolas", monospace;
  }

  p code, li code {
    background: var(--less-code-bg);
    padding: 0.125rem 0.375rem;
    border-radius: 3px;
    font-size: 0.75rem;
    color: var(--less-text-secondary);
    border: 0.5px solid var(--less-code-border);
  }

  .inline-code {
    background: var(--less-code-bg);
    padding: 0.125rem 0.375rem;
    border-radius: 3px;
    font-size: 0.875em;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.75rem 0 1.5rem;
    font-size: 0.8125rem;
  }
  th, td {
    border: 0.5px solid var(--less-border);
    padding: 0.5rem 0.75rem;
    text-align: left;
  }
  th {
    font-weight: 500;
    color: var(--less-text-secondary);
  }
  td {
    color: var(--less-text-tertiary);
  }

  /* Callouts */
  .callout {
    padding: 1rem 1.25rem;
    margin: 1rem 0;
    border-left: 2px solid var(--less-border-hover);
    background: var(--less-bg-surface);
    border-radius: 0 3px 3px 0;
  }
  .callout.warn {
    border-left-color: var(--less-text-tertiary);
  }

  .pillar {
    padding: 1.25rem 1.5rem;
    margin: 1rem 0;
    border-left: 2px solid var(--less-border-hover);
    background: var(--less-bg-surface);
    border-radius: 0 3px 3px 0;
  }
  .pillar .num {
    font-size: 0.6875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--less-text-muted);
    margin-bottom: 0.25rem;
  }
  .pillar h3 {
    margin: 0 0 0.5rem;
  }

  .hard-constraint {
    display: inline-block;
    background: var(--less-code-bg);
    border: 0.5px solid var(--less-border-hover);
    padding: 0.25rem 0.625rem;
    border-radius: 3px;
    font-size: 0.75rem;
    margin: 0.125rem 0;
  }

  /* Lists */
  ul, ol {
    padding-left: 1.25rem;
    color: var(--less-text-secondary);
    line-height: 1.7;
  }
  li {
    margin: 0.25rem 0;
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
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--less-text-secondary);
    text-decoration: none;
    border: 0.5px solid var(--less-border);
    border-radius: 3px;
    transition: color 0.15s, border-color 0.15s;
  }
  .nav-link:hover {
    color: var(--less-text-primary);
    border-color: var(--less-border-hover);
  }

  @media (max-width: 900px) {
    .container {
      padding: 2rem 1.25rem 3rem;
    }
    h1 {
      font-size: 1.5rem;
    }
    .subtitle {
      margin-bottom: 2rem;
    }
    pre {
      padding: 0.875rem 1rem;
      font-size: 0.75rem;
    }
    .nav-row {
      flex-direction: column;
      gap: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 1.5rem 1rem 2.5rem;
    }
    h1 {
      font-size: 1.25rem;
    }
    .subtitle {
      font-size: 0.8125rem;
      margin-bottom: 1.5rem;
    }
    h2 {
      font-size: 0.9375rem;
    }
    p {
      font-size: 0.8125rem;
    }
    pre {
      padding: 0.75rem;
      font-size: 0.6875rem;
    }
    ul, ol {
      padding-left: 1rem;
    }
  }
`,vn=k`
  :host {
    /* === Spacing Scale (4px base unit) === */
    --less-size-1: 0.25rem; /* 4px */
    --less-size-2: 0.375rem; /* 6px */
    --less-size-3: 0.5rem; /* 8px */
    --less-size-4: 0.75rem; /* 12px */
    --less-size-5: 1rem; /* 16px */
    --less-size-6: 1.25rem; /* 20px */
    --less-size-7: 1.5rem; /* 24px */
    --less-size-8: 2rem; /* 32px */
    --less-size-9: 2.5rem; /* 40px */
    --less-size-10: 3rem; /* 48px */

    /* === Border Radius (Swiss: minimal) === */
    --less-radius-sm: 2px;
    --less-radius-md: 4px;
    --less-radius-lg: 6px;

    /* === Transitions === */
    --less-transition-fast: 0.1s ease;
    --less-transition-normal: 0.15s ease;
    --less-transition-slow: 0.25s ease;

    /* === Z-Index Scale === */
    --less-z-dropdown: 100;
    --less-z-sticky: 200;
    --less-z-fixed: 300;
    --less-z-modal-backdrop: 400;
    --less-z-modal: 500;
    --less-z-popover: 600;
    --less-z-tooltip: 700;
  }
`,yn=k`
  :host {
    /* === Font Families === */
    --less-font-sans:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial,
      sans-serif;
    --less-font-mono: "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace;

    /* === Font Sizes (modular scale ~1.125) === */
    --less-font-size-xs: 0.6875rem; /* 11px */
    --less-font-size-sm: 0.75rem; /* 12px */
    --less-font-size-md: 0.875rem; /* 14px */
    --less-font-size-lg: 1rem; /* 16px */
    --less-font-size-xl: 1.125rem; /* 18px */
    --less-font-size-2xl: 1.25rem; /* 20px */
    --less-font-size-3xl: 1.5rem; /* 24px */

    /* === Font Weights === */
    --less-font-weight-normal: 400;
    --less-font-weight-medium: 500;
    --less-font-weight-semibold: 600;
    --less-font-weight-bold: 700;
    --less-font-weight-extrabold: 800;

    /* === Line Heights === */
    --less-line-height-tight: 1.2;
    --less-line-height-normal: 1.5;
    --less-line-height-relaxed: 1.7;

    /* === Letter Spacing === */
    --less-letter-spacing-tight: -0.03em;
    --less-letter-spacing-normal: 0;
    --less-letter-spacing-wide: 0.02em;
    --less-letter-spacing-wider: 0.05em;
    --less-letter-spacing-widest: 0.15em;
  }
`,bn={"--less-bg-base":`var(--gray-12)`,"--less-bg-surface":`var(--gray-11)`,"--less-bg-elevated":`var(--gray-10)`,"--less-bg-hover":`var(--gray-11)`,"--less-bg-card":`var(--gray-11)`,"--less-border":`var(--gray-9)`,"--less-border-hover":`var(--gray-8)`,"--less-text-primary":`var(--gray-0)`,"--less-text-secondary":`var(--gray-5)`,"--less-text-tertiary":`var(--gray-7)`,"--less-text-muted":`var(--gray-8)`,"--less-accent":`var(--gray-0)`,"--less-accent-dim":`var(--gray-4)`,"--less-accent-subtle":`var(--gray-11)`,"--less-code-bg":`var(--gray-10)`,"--less-code-border":`var(--gray-9)`,"--less-error":`var(--red-4)`,"--less-scrollbar-track":`transparent`,"--less-scrollbar-thumb":`var(--gray-9)`},xn={"--less-bg-base":`var(--gray-0)`,"--less-bg-surface":`var(--gray-1)`,"--less-bg-elevated":`var(--gray-2)`,"--less-bg-hover":`var(--gray-2)`,"--less-bg-card":`var(--gray-0)`,"--less-border":`var(--gray-3)`,"--less-border-hover":`var(--gray-4)`,"--less-text-primary":`var(--gray-12)`,"--less-text-secondary":`var(--gray-8)`,"--less-text-tertiary":`var(--gray-7)`,"--less-text-muted":`var(--gray-6)`,"--less-accent":`var(--gray-12)`,"--less-accent-dim":`var(--gray-8)`,"--less-accent-subtle":`var(--gray-2)`,"--less-code-bg":`var(--gray-2)`,"--less-code-border":`var(--gray-3)`,"--less-error":`var(--red-7)`,"--less-scrollbar-track":`transparent`,"--less-scrollbar-thumb":`var(--gray-4)`};function Sn(e){return Object.entries(e).map(([e,t])=>`${e}:${t}`).join(`;`)}function Cn(){return`:root,[data-theme="light"]{${Sn(xn)};color-scheme:light}[data-theme="dark"]{${Sn(bn)};color-scheme:dark}`}var wn=k`
  :host {
    /* v0.6: Color tokens inherit from :root via CSS custom property cascade.
      DO NOT redeclare them on :host — that breaks inheritance!
      Setting --less-bg-base: initial would make var(--less-bg-base) invalid
      inside the shadow root, because 'initial' for custom properties means
      "guaranteed-invalid value", NOT "inherit from parent".

      For standalone usage (without LessJS head styles), the page must
      inject lessRootColorCSS into <head> — this is the expected setup.
      If tokens are missing, var() references without fallbacks will simply
      not apply, which is acceptable for standalone mode. */
    color-scheme: light dark;
  }
`;Cn();var J=k`
  ${vn} ${yn} ${wn} ${k`
  :host {
    --less-shadow-sm: var(--shadow-1);
    --less-shadow-md: var(--shadow-3);
    --less-shadow-lg: var(--shadow-5);
  }

  /* Dark mode: override with light-on-dark shadows */
  :host([data-theme="dark"]) {
    --less-shadow-sm: var(--inner-shadow-1);
    --less-shadow-md: var(--inner-shadow-2);
    --less-shadow-lg: var(--inner-shadow-3);
  }
`};
`;function Tn(e){class t extends e{static hydrateEvents;_dsdHydrated=!1;_hydrateAbortController;createRenderRoot(){return this.shadowRoot&&this.shadowRoot.childElementCount>0?(this._dsdHydrated=!0,this.shadowRoot):this.attachShadow({mode:`open`})}connectedCallback(){super.connectedCallback(),this._dsdHydrated&&this._hydrateEvents()}disconnectedCallback(){super.disconnectedCallback(),this._hydrateAbortController&&=(this._hydrateAbortController.abort(),void 0)}_hydrateEvents(){if(!this.shadowRoot)return;let e=this.constructor.hydrateEvents||[];if(e.length===0)return;this._hydrateAbortController=new AbortController;let{signal:t}=this._hydrateAbortController;for(let n of e){let e=this.shadowRoot.querySelectorAll(n.selector);for(let r of e){let e=this[n.method];typeof e==`function`&&r.addEventListener(n.event,e.bind(this),{signal:t})}}}}return t}var En=Tn(K),Dn=`less-theme-toggle`,On=class extends En{static delegatesFocus=!0;static hydrateEvents=[{selector:`button.theme-toggle`,event:`click`,method:`_handleToggle`}];static styles=[J,k`
      :host {
        display: inline-block;
      }

      .theme-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        padding: 0;
        border: 0.5px solid var(--less-border);
        border-radius: var(--less-radius-md);
        background: transparent;
        color: var(--less-text-tertiary);
        cursor: pointer;
        font-size: 0;
        line-height: 1;
        transition:
          color var(--less-transition-normal),
          border-color var(--less-transition-normal),
          background var(--less-transition-normal);
        }

        .theme-toggle:hover {
          color: var(--less-text-primary);
          border-color: var(--less-border-hover);
          background: var(--less-accent-subtle);
        }

        .theme-toggle svg {
          width: 16px;
          height: 16px;
        }

        .theme-toggle .icon-sun {
          display: block;
        }

        .theme-toggle .icon-moon {
          display: none;
        }

        .theme-toggle.is-light .icon-sun {
          display: none;
        }

        .theme-toggle.is-light .icon-moon {
          display: block;
        }
      `];static properties={theme:{type:String,reflect:!0},_isLight:{state:!0}};constructor(){super(),this.theme=void 0,this._isLight=!1}connectedCallback(){if(super.connectedCallback(),this.theme===`light`)this._isLight=!0;else if(this.theme===`dark`)this._isLight=!1;else if(document.documentElement.dataset.theme===`light`)this._isLight=!0;else{let e=!1;try{let t=localStorage.getItem(`less-theme`);t===`light`?(this._isLight=!0,e=!0):t===`dark`&&(this._isLight=!1,e=!0)}catch{}if(!e&&typeof globalThis<`u`&&globalThis.matchMedia){let e=globalThis.matchMedia(`(prefers-color-scheme: light)`);this._isLight=e.matches}}this.setAttribute(`data-theme`,this._isLight?`light`:`dark`)}_handleToggle(){this._isLight=!this._isLight;let e=this._isLight?`light`:`dark`;document.documentElement.setAttribute(`data-theme`,e),document.documentElement.style&&(document.documentElement.style.colorScheme=e);try{localStorage.setItem(`less-theme`,e)}catch{}this.setAttribute(`data-theme`,e),this._updateToggleDOM()}_updateToggleDOM(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector(`button.theme-toggle`);e&&(e.classList.toggle(`is-light`,this._isLight),e.setAttribute(`title`,this._isLight?`Switch to dark theme`:`Switch to light theme`))}render(){return this._dsdHydrated?H:B`
        <button
          class="theme-toggle ${this._isLight?`is-light`:``}"
          title="${this._isLight?`Switch to dark theme`:`Switch to light theme`}"
          aria-label="Toggle theme"
          @click="${()=>this._handleToggle()}"
        >
          <svg
            class="icon-sun"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          >
            <circle cx="8" cy="8" r="3" />
            <line x1="8" y1="1" x2="8" y2="3" />
            <line x1="8" y1="13" x2="8" y2="15" />
            <line x1="1" y1="8" x2="3" y2="8" />
            <line x1="13" y1="8" x2="15" y2="8" />
            <line x1="3.05" y1="3.05" x2="4.46" y2="4.46" />
            <line x1="11.54" y1="11.54" x2="12.95" y2="12.95" />
            <line x1="3.05" y1="12.95" x2="4.46" y2="11.54" />
            <line x1="11.54" y1="4.46" x2="12.95" y2="3.05" />
          </svg>
          <svg
            class="icon-moon"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          >
            <path d="M13.5 9.14A5.5 5.5 0 0 1 6.86 2.5 5.5 5.5 0 1 0 13.5 9.14Z" />
          </svg>
        </button>
      `}};customElements.get(`less-theme-toggle`)||customElements.define(Dn,On);var kn=`less-layout`,An=class e extends En{static hydrateEvents=[{selector:`summary.mobile-menu-btn`,event:`click`,method:`_toggleMenu`}];static styles=[J,k`
      :host {
        display: block;
      }

      /* === Layout Shell === */
      .app-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: var(--less-bg-base);
        color: var(--less-text-primary);
        font-family: var(--less-font-sans);
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
        display: flex;
        flex-direction: column;
      }

      .app-layout[home] .layout-main {
        flex: 1;
      }

      /* === Header === */
      .app-header {
        position: sticky;
        top: 0;
        z-index: var(--less-z-sticky);
        background: var(--less-bg-base);
        border-bottom: 0.5px solid var(--less-border);
      }

      .header-inner {
        max-width: var(--less-layout-max-width, 1400px);
        margin: 0 auto;
        padding: 0 var(--less-size-8);
        display: flex;
        align-items: center;
        height: var(--less-layout-header-height, 56px);
        gap: var(--less-size-6);
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
        border: 0.5px solid var(--less-border);
        border-radius: var(--less-radius-md);
        background: transparent;
        color: var(--less-text-tertiary);
        cursor: pointer;
        padding: 0;
        list-style: none;
        transition:
          color var(--less-transition-normal),
          border-color var(--less-transition-normal),
          background var(--less-transition-normal);
        }

        .mobile-menu-btn::-webkit-details-marker {
          display: none;
        }

        .mobile-menu-btn::marker {
          content: "";
        }

        .mobile-menu-btn:hover,
        .mobile-menu-btn:focus-visible {
          color: var(--less-text-primary);
          border-color: var(--less-border-hover);
          background: var(--less-accent-subtle);
        }

        .mobile-menu[open] .mobile-menu-btn {
          color: var(--less-text-primary);
          background: var(--less-accent-subtle);
          border-color: var(--less-border-hover);
        }

        /* === Logo === */
        .logo {
          font-size: var(--less-font-size-sm);
          font-weight: var(--less-font-weight-extrabold);
          color: var(--less-text-primary);
          text-decoration: none;
          letter-spacing: var(--less-letter-spacing-widest);
          text-transform: uppercase;
          transition: opacity var(--less-transition-normal);
          white-space: nowrap;
        }

        .logo:hover {
          opacity: 0.6;
        }

        .logo-sub {
          font-size: var(--less-font-size-xs);
          font-weight: var(--less-font-weight-normal);
          color: var(--less-text-muted);
          margin-left: var(--less-size-2);
          letter-spacing: var(--less-letter-spacing-wide);
          text-transform: none;
        }

        /* === Header Nav === */
        .header-nav {
          display: flex;
          gap: 0.125rem;
          flex: 1;
        }

        .header-nav a {
          color: var(--less-text-tertiary);
          text-decoration: none;
          font-size: var(--less-font-size-sm);
          font-weight: var(--less-font-weight-medium);
          padding: var(--less-size-2) var(--less-size-3);
          letter-spacing: var(--less-letter-spacing-wide);
          transition: color var(--less-transition-normal);
          border-radius: var(--less-radius-md);
        }

        .header-nav a:hover {
          color: var(--less-text-primary);
          text-decoration: underline;
        }

        /* === Header Right === */
        .header-right {
          display: flex;
          align-items: center;
          gap: var(--less-size-2);
          margin-left: auto;
        }

        /* === GitHub Link === */
        .github-link {
          display: inline-flex;
          align-items: center;
          gap: var(--less-size-2);
          color: var(--less-text-muted);
          text-decoration: none;
          font-size: var(--less-font-size-xs);
          font-weight: var(--less-font-weight-medium);
          letter-spacing: var(--less-letter-spacing-wide);
          padding: var(--less-size-2) var(--less-size-3);
          border: 0.5px solid var(--less-border);
          border-radius: var(--less-radius-md);
          transition: color var(--less-transition-normal), border-color var(--less-transition-normal);
        }

        .github-link:hover {
          color: var(--less-text-secondary);
          border-color: var(--less-border-hover);
        }

        .github-link svg {
          flex-shrink: 0;
        }

        /* === Sidebar: unified desktop/mobile (v0.6) ===
        *
        * v0.6: SINGLE .docs-sidebar for both desktop and mobile.
        * - Desktop: position:sticky, border-right, always visible
        * - Mobile: position:fixed, slides in from left via transform
        * - Home page: hidden via width:0 (not display:none — preserves transform)
        *
        * This replaces the old dual-sidebar approach (.docs-sidebar for desktop
        * + .mobile-sidebar-overlay for mobile) which caused duplicate content
        * and inconsistent styling between breakpoints.
        */
        .docs-sidebar {
          width: clamp(200px, 20vw, 280px);
          flex-shrink: 0;
          border-right: 0.5px solid var(--less-border);
          padding: var(--less-size-6) 0;
          overflow-y: auto;
          height: calc(100vh - var(--less-layout-header-height, 56px));
          position: sticky;
          top: var(--less-layout-header-height, 56px);
          scrollbar-width: thin;
        }

        /* Home page: hide sidebar while keeping box model alive for transitions.
        * NOT display:none — that kills the box model and makes transform unusable. */
        :host([home]) .docs-sidebar {
          width: 0;
          min-width: 0;
          padding: 0;
          overflow: hidden;
          border-right: none;
        }

        .nav-section {
          margin-bottom: var(--less-size-5);
        }

        .nav-section summary {
          font-size: var(--less-font-size-xs);
          font-weight: var(--less-font-weight-bold);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--less-text-muted);
          padding: 0 var(--less-size-5);
          margin-bottom: var(--less-size-2);
          cursor: pointer;
          list-style: none;
          display: flex;
          align-items: center;
          gap: var(--less-size-2);
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
          transition: transform var(--less-transition-normal);
          display: inline-block;
        }

        .nav-section[open] summary::before {
          transform: rotate(0deg);
        }

        .nav-section:not([open]) summary::before {
          transform: rotate(-90deg);
        }

        .nav-section summary:hover {
          color: var(--less-text-tertiary);
        }

        .docs-sidebar a {
          display: block;
          color: var(--less-text-tertiary);
          text-decoration: none;
          font-size: var(--less-font-size-sm);
          padding: 0.3rem var(--less-size-5);
          transition: color var(--less-transition-normal), background var(--less-transition-normal);
          border-left: 1px solid transparent;
        }

        .docs-sidebar a:hover {
          color: var(--less-text-primary);
          background: var(--less-accent-subtle);
        }

        .docs-sidebar a.active,
        .docs-sidebar a[aria-current="page"] {
          color: var(--less-text-primary);
          border-left-color: var(--less-text-primary);
          background: var(--less-accent-subtle);
          font-weight: var(--less-font-weight-medium);
        }

        /* === Mobile Backdrop === */
        .mobile-backdrop {
          position: fixed;
          inset: 0;
          top: var(--less-layout-header-height, 56px);
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(0, 0, 0, 0.35) 40%,
            rgba(0, 0, 0, 0.25) 100%
          );
          z-index: 80;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--less-transition-slow);
        }

        /* === Mobile Responsive ===
        *
        * v0.6: Unified sidebar. On mobile, .docs-sidebar becomes a fixed overlay
        * that slides in from the left via transform. No separate mobile sidebar
        * overlay element — eliminates content duplication and style inconsistency.
        */
        @media (max-width: 900px) {
          .mobile-menu {
            display: block;
          }

          .header-inner {
            padding: 0 var(--less-size-4);
            gap: var(--less-size-3);
          }

          .header-nav {
            display: none;
          }

          .github-text {
            display: none;
          }

          .header-right {
            gap: var(--less-size-2);
          }

          .docs-sidebar {
            position: fixed;
            top: var(--less-layout-header-height, 56px);
            left: 0;
            width: min(300px, 80vw);
            height: calc(100vh - var(--less-layout-header-height, 56px));
            z-index: 90;
            background: var(--less-bg-base);
            border-right: 0.5px solid var(--less-border);
            border-bottom: none;
            padding: var(--less-size-4) 0;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            transform: translateX(-101%);
            transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: transform;
            box-shadow: none;
            /* Desktop sticky properties are overridden by fixed */
          }

          /* Home page on mobile: always hidden via transform + invisible */
          :host([home]) .docs-sidebar {
            width: min(300px, 80vw);
            min-width: auto;
            padding: var(--less-size-4) 0;
            border-right: 0.5px solid var(--less-border);
            transform: translateX(-101%);
            pointer-events: none;
            visibility: hidden;
          }

          :host([menu-open]) .docs-sidebar {
            transform: translateX(0);
            box-shadow: var(--less-shadow-sidebar, 4px 0 24px rgba(0, 0, 0, 0.3));
          }

          :host([home][menu-open]) .docs-sidebar {
            transform: translateX(-101%);
          }

          /* Home page on mobile: hide hamburger menu (no sidebar to show)
            and prevent backdrop from appearing */
          :host([home]) .mobile-menu {
            display: none;
          }

          :host([home]) .mobile-backdrop {
            display: none;
          }

          :host([menu-open]) .mobile-backdrop {
            opacity: 1;
            pointer-events: auto;
          }

          .nav-section {
            margin-bottom: var(--less-size-2);
          }

          .nav-section summary {
            padding: var(--less-size-2) var(--less-size-4);
            font-size: var(--less-font-size-xs);
          }

          .docs-sidebar a {
            padding: var(--less-size-2) var(--less-size-4) var(--less-size-2) var(--less-size-7);
            font-size: var(--less-font-size-sm);
          }

          .layout-main {
            width: 100%;
          }

          .app-footer {
            padding: var(--less-size-6) var(--less-size-4);
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
            padding: var(--less-size-2);
            border: none;
          }

          .header-inner {
            padding: 0 var(--less-size-3);
          }
        }

        /* === Footer === */
        .app-footer {
          padding: var(--less-size-8);
          border-top: 0.5px solid var(--less-border);
          text-align: center;
          color: var(--less-text-muted);
          font-size: var(--less-font-size-xs);
          letter-spacing: var(--less-letter-spacing-wide);
          background: var(--less-bg-base);
        }

        .app-footer p {
          margin: 0.25rem 0;
        }

        .app-footer a {
          color: var(--less-text-tertiary);
          transition: color var(--less-transition-normal);
        }

        .app-footer a:hover {
          color: var(--less-text-primary);
          text-decoration: underline;
        }

        .app-footer .divider {
          display: inline-block;
          width: 1px;
          height: 8px;
          background: var(--less-border-hover);
          vertical-align: middle;
          margin: 0 var(--less-size-3);
        }
      `];static properties={home:{type:Boolean,reflect:!0},currentPath:{type:String,attribute:`current-path`},navItems:{type:Array,attribute:`nav-items`},headerNav:{type:Array,attribute:`header-nav`},logoText:{type:String,attribute:`logo-text`},logoSub:{type:String,attribute:`logo-sub`},githubUrl:{type:String,attribute:`github-url`}};constructor(){super(),this.home=!1,this.currentPath=``,this.navItems=void 0,this.headerNav=void 0,this.logoText=`LessJS`,this.logoSub=``,this.githubUrl=`https://github.com/lessjs-run/LessJS`}render(){return this._dsdHydrated?H:this._renderLayout()}_renderLayout(){return B`
        <div class="app-layout" ?home="${this.home}">
          <header class="app-header">
            <nav class="header-inner" aria-label="Primary navigation">
              <a class="logo" href="/">${this.logoText}<span class="logo-sub">${this.logoSub}</span></a>
              ${this._renderHeaderNav()}
              <div class="header-right">
                <details class="mobile-menu">
                  <summary class="mobile-menu-btn" aria-label="Toggle navigation" @click="${this._toggleMenu}">
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
                <less-theme-toggle></less-theme-toggle>
                <a class="github-link" href="${this.githubUrl}" aria-label="GitHub repository">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                  <span class="github-text">GitHub</span>
                </a>
              </div>
            </nav>
          </header>
          <div class="mobile-backdrop"></div>
          <div class="layout-body">
            ${this.home?H:this._renderSidebarNav()}
            <main class="layout-main">
              <slot></slot>
            </main>
          </div>
          <footer class="app-footer">
            <p>
              Built with <a href="${this.githubUrl}" target="_blank" rel="noopener noreferrer"
              >LessJS Framework</a>
              <span class="divider"></span>
              Self-bootstrapped from JSR
              <span class="divider"></span>
              LESS IS MORE
            </p>
          </footer>
        </div>
      `}connectedCallback(){super.connectedCallback(),this._dsdHydrated&&this._setupDetailsToggle()}_setupDetailsToggle(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector(`details.mobile-menu`);e&&(e.addEventListener(`toggle`,()=>{let t=e.open;this.toggleAttribute(`menu-open`,t),this._syncInert(t)}),this.toggleAttribute(`menu-open`,e.open))}_toggleMenu(e){e.preventDefault();let t=this.shadowRoot?.querySelector(`details.mobile-menu`);if(!t)return;let n=!t.hasAttribute(`open`);t.toggleAttribute(`open`,n),this.toggleAttribute(`menu-open`,n),this._syncInert(n)}_syncInert(e){let t=this.shadowRoot?.querySelector(`.layout-main`);t&&(e?t.setAttribute(`inert`,``):t.removeAttribute(`inert`))}static DEFAULT_NAV=[{section:`Start Here`,items:[{path:`/guide/positioning`,label:`Framework Positioning`},{path:`/guide/getting-started`,label:`Getting Started`},{path:`/guide/design-philosophy`,label:`Design Philosophy`},{path:`/guide/architecture`,label:`Architecture`}]},{section:`Core Model`,items:[{path:`/guide/routing`,label:`Routing`},{path:`/guide/ssg`,label:`Rendering & SSG`},{path:`/guide/islands`,label:`Island Upgrade`},{path:`/guide/api-routes`,label:`API Routes`},{path:`/guide/api-design`,label:`API Design`}]},{section:`Production`,items:[{path:`/guide/configuration`,label:`Configuration`},{path:`/guide/security-middleware`,label:`Security & Middleware`},{path:`/guide/error-handling`,label:`Error Handling`},{path:`/guide/testing`,label:`Testing`},{path:`/guide/deployment`,label:`Deployment`}]},{section:`Packages`,items:[{path:`/ui`,label:`Design System`},{path:`/styling/less-ui`,label:`@lessjs/ui`},{path:`/styling/web-awesome`,label:`Web Awesome`},{path:`/examples`,label:`Examples`}]},{section:`Strategy`,items:[{path:`/roadmap`,label:`Roadmap`},{path:`/guide/less-compiler`,label:`.less Compiler`},{path:`/guide/pwa`,label:`PWA Support`},{path:`/guide/blog-system`,label:`Blog System`},{path:`/decisions`,label:`Architecture Decisions`}]},{section:`Examples`,items:[{path:`/demo`,label:`Live Demo`},{path:`/examples/hello`,label:`Hello World`},{path:`/examples/minimal-blog`,label:`Minimal Blog`},{path:`/examples/fullstack`,label:`Fullstack`}]},{section:`History`,items:[{path:`/blog`,label:`Blog`},{path:`/blog/v0-5-alpha1`,label:`v0.5 Alpha 1`},{path:`/blog/v0-5-0`,label:`v0.5.0`},{path:`/blog/v0-4-0`,label:`v0.4.0`},{path:`/blog/less-compiler`,label:`.less Compiler Note`},{path:`/changelog`,label:`Changelog`},{path:`/contributing`,label:`Contributing`}]}];static DEFAULT_HEADER_NAV=[{href:`/guide/positioning`,label:`Docs`},{href:`/guide/architecture`,label:`Architecture`},{href:`/examples`,label:`Examples`},{href:`/ui`,label:`UI`},{href:`/roadmap`,label:`Roadmap`},{href:`https://jsr.io/@lessjs/core`,label:`JSR`}];_navLink(e,t){let n=e.startsWith(`http`),r=!n&&this.currentPath===e;return B`
        <a
          href="${e}"
          class="${r?`active`:``}"
          aria-current="${r?`page`:void 0}"
          target="${n?`_blank`:H}"
          rel="${n?`noopener noreferrer`:H}"
        >${t}</a>
      `}_renderSidebarNav(){return B`
        <nav class="docs-sidebar" aria-label="Documentation navigation">
          ${this._renderSidebarItems()}
        </nav>
      `}_renderSidebarItems(){return B`
        ${(this.navItems||e.DEFAULT_NAV).map(e=>B`
              <details class="nav-section" open>
                <summary class="nav-section-title">${e.section}</summary>
                ${e.items.map(e=>this._navLink(e.href||e.path||`#`,e.label))}
              </details>
            `)}
      `}_renderHeaderNav(){return B`
        <nav class="header-nav">
          ${(this.headerNav||e.DEFAULT_HEADER_NAV).map(e=>B`
                <a href="${e.href}">${e.label}</a>
              `)}
        </nav>
      `}};customElements.get(`less-layout`)||customElements.define(kn,An);var jn=class extends K{static styles=[q,k`
      .error-code {
        font-size: 5rem;
        font-weight: 800;
        letter-spacing: -0.06em;
        color: var(--less-text-primary);
        margin: 2rem 0 0.5rem;
        line-height: 1;
      }
      .error-message {
        color: var(--less-text-tertiary);
        font-size: 0.9375rem;
        margin-bottom: 2rem;
      }
      .home-link {
        display: inline-block;
        padding: 0.5rem 1.25rem;
        /* 0.5px: reduced to match less-ui spec */
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        color: var(--less-text-primary);
        text-decoration: none;
        font-size: 0.8125rem;
        transition: border-color 0.15s;
      }
      .home-link:hover {
        border-color: var(--less-text-primary);
      }
    `];render(){return B`
      <less-layout>
        <div class="container" style="text-align:center;padding-top:4rem">
          <div class="error-code">404</div>
          <p class="error-message">
            This page does not exist — or has moved to a different route.
          </p>
          <a href="/" class="home-link">&larr; Back to home</a>
        </div>
      </less-layout>
    `}};customElements.define(`page-not-found`,jn);var Mn=class extends K{static styles=[q,k`
      .blog-list {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
      }
      .blog-item {
        padding: 1rem 1.25rem;
        /* 0.5px: reduced to match less-ui spec */
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        margin-bottom: 0.75rem;
        transition: border-color 0.15s;
        display: block;
        text-decoration: none;
        color: inherit;
      }
      .blog-item:hover {
        border-color: var(--less-text-primary);
      }
      .blog-item h2 {
        font-size: 0.9375rem;
        margin: 0 0 0.25rem;
        font-weight: 500;
        color: var(--less-text-primary);
      }
      .blog-item .meta {
        font-size: 0.75rem;
        color: var(--less-text-muted);
        margin: 0;
      }
      .blog-item p {
        font-size: 0.8125rem;
        color: var(--less-text-secondary);
        margin: 0.5rem 0 0;
      }
    `];render(){return B`
      <less-layout currentPath="/blog">
        <div class="container">
          <h1>博客</h1>
          <p class="subtitle">LessJS 框架的设计思考、架构决策和发展路线。</p>

          <div class="blog-list">
            <a href="/blog/v0-5-alpha1" class="blog-item">
              <h2>
                v0.5-alpha1 — 全量架构审计与精准修复 <span
                  style="font-size:0.7rem;color:var(--less-accent)"
                >NEW</span>
              </h2>
              <p class="blog-desc">
                3 agent 扫描 13k 行源码 · CSS 注入修复 · Island 升级修复 · 6 条新设计原则 · 配置精简
              </p>
              <span class="blog-date">2026-05-03</span>
            </a>

            <a href="/blog/v0-5-0" class="blog-item">
              <h2>LessJS v0.5-alpha-0 — 架构精简</h2>
              <p class="blog-desc">零框架运行时 Core · 原生 RPC · OpenProps + Lit · 单 deno.json</p>
              <span class="blog-date">2026-05-02</span>
            </a>

            <a href="/blog/v0-4-0" class="blog-item">
              <h2>LessJS v0.4.0 — Serverless Integration Milestone</h2>
              <p class="meta">2026-04-30 · 版本发布</p>
              <p>
                Serverless API 部署成功、全站统一 0.5px 视觉风格、零 lint 零 type
                errors。从"能跑起来"到"真正能用"的里程碑。
              </p>
            </a>
            <a href="/blog/less-compiler" class="blog-item">
              <h2>.less Compiler — 可选零框架运行时组件</h2>
              <p class="meta">2026-04-30 · 架构决策</p>
              <p>
                一个可选编译器将声明式 .less 文件编译为原生 Custom Elements，让 Lit 从必选路线变成
                adapter。
              </p>
            </a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-blog-index`,Mn);var Nn=class extends K{static styles=[q,k`
      .blog-meta {
        font-size: 0.75rem;
        color: var(--less-text-muted);
        margin-bottom: 1.5rem;
      }
      h2 {
        font-size: 1rem;
        font-weight: 500;
        margin: 1.5rem 0 0.5rem;
        color: var(--less-text-primary);
      }
      p {
        font-size: 0.875rem;
        line-height: 1.7;
        margin: 0 0 0.75rem;
      }
      .code-block {
        background: var(--less-bg-surface);
        /* 0.5px: reduced to match less-ui spec */
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 1rem;
        font-family: "SF Mono", "Fira Code", monospace;
        font-size: 0.75rem;
        line-height: 1.6;
        overflow-x: auto;
        margin: 0.75rem 0 1.25rem;
        color: var(--less-text-secondary);
        white-space: pre;
      }
    `];render(){return B`
      <less-layout currentPath="/blog/less-compiler">
        <div class="container">
          <p class="blog-meta">2026-04-30 · SisyphusZheng</p>
          <h1>.less Compiler — 可选零框架运行时组件</h1>

          <p>
            LessJS 框架从第一天起就选择了 Lit 作为组件基础。这个选择是对的——Lit 是 Web Components 生态中
            最成熟的库，让我们快速验证了 K·I·S·S 架构的可行性。但经过后续架构审查，我们也更清楚地看到：
            core 的长期合同不能绑定到某个组件库。Lit 应该保留为
            adapter，而不是成为用户必须接受的唯一组件模型。
          </p>

          <h2>今天的代价</h2>
          <p>
            依赖 Lit 编写的 island 会携带 Lit 运行时；SSR/style extraction 需要 adapter 维护；旧 Lit SSR
            路线留下的 hydration 术语又容易和现在的 DSD + Custom Element upgrade 模型混淆。Deno fmt
            在处理复杂 Lit 模板字面量时也曾触发上游 panic。结论不是“消灭 Lit”，而是把 Lit 放回正确的位置：
            一个好 adapter，而不是 LessJS 的定义本身。
          </p>

          <h2>.less 文件格式</h2>
          <p>一个组件一个文件。没有 class 声明，没有 decorator，没有 import：</p>
          <div class="code-block">
            &lt;!-- my-counter.less --&gt; &lt;template&gt; &lt;button
            @click="decrement"&gt;−&lt;/button&gt; &lt;span&gt;{count}&lt;/span&gt; &lt;button
            @click="increment"&gt;+&lt;/button&gt; &lt;/template&gt; &lt;script&gt; count = 0 increment()
            { this.count++ } decrement() { this.count-- } &lt;/script&gt; &lt;style&gt; :host { display:
            inline-flex; gap: 0.5rem; align-items: center; } &lt;/style&gt;
          </div>

          <h2>编译器产出</h2>
          <p>零依赖的原生 Custom Element：</p>
          <div class="code-block">
            class MyCounter extends HTMLElement { #count = 0; #root = this.attachShadow({ mode: 'open' });
            get count() { return this.#count; } set count(v) { this.#count = v; this.#update(); }
            connectedCallback() { this.#root.append(tpl.content.cloneNode(true));
            this.#root.querySelector('button:first-child').onclick = () => this.count--;
            this.#root.querySelector('button:last-child').onclick = () => this.count++; } }
          </div>

          <h2>消除清单</h2>
          <p>
            — Lit-authored islands 的框架运行时代价 → 编译产物 0 KB framework runtime<br>
            — adapter-mediated SSR → LessJS DSD renderer / template strings<br>
            — hydration 术语漂移 → 明确的 Custom Element upgrade<br>
            — decorator / tagged template 生态复杂度 → 标准 JS 输出<br>
            — 复杂的类型层次 → 简单的 getter/setter
          </p>

          <h2>路线</h2>
          <p>
            这项工作不应该阻塞 v0.5-v0.9。当前路线是：先修可信度、安全、DSD renderer、Island Upgrade、
            Serverless Fullstack 与 SSG/ISR，再在 v0.10.0 引入 <code>.less</code> compiler alpha。 Lit
            兼容模式在 v0.x 生命周期中保留。
          </p>
          <p>
            详细技术设计见 <code>docs/decisions/0002-kiss-compiler-eliminate-lit.md</code>。
          </p>

          <div class="nav-row" style="margin-top:2rem">
            <a href="/blog" class="nav-link">&larr; 返回博客</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-blog-less-compiler`,Nn);var Pn=class extends K{static styles=[q,k`
      .cmp {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.8125rem;
        border: 0.5px solid var(--less-border);
        margin: 1.5rem 0;
      }
      .cmp th, .cmp td {
        padding: 0.625rem 0.75rem;
        text-align: left;
        border-bottom: 0.5px solid var(--less-border);
      }
      .cmp th {
        background: var(--less-bg-surface);
        color: var(--less-text-muted);
        font-weight: 500;
      }
      .cmp td {
        color: var(--less-text-secondary);
      }
      .cmp td:first-child {
        color: var(--less-text-primary);
        font-weight: 500;
      }
      .cmp td.yes {
        color: #2ecc40;
      }
      .cmp td.no {
        color: var(--less-text-muted);
      }
      h2 {
        margin-top: 2rem;
      }
      .truth {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 1rem 1.25rem;
        margin: 1rem 0;
      }
      .truth strong {
        color: var(--less-text-primary);
      }
      .truth p {
        color: var(--less-text-secondary);
        font-size: 0.875rem;
        margin: 0.5rem 0 0;
      }
    `];render(){return B`
      <less-layout currentPath="/blog">
        <div class="container">
          <h1>LessJS v0.4.0 — Serverless Integration Milestone</h1>
          <p class="meta" style="color:var(--less-text-muted);font-size:0.8125rem;margin-bottom:2rem">
            2026-04-30 · 版本发布
          </p>

          <p>LessJS v0.4.0 只有一个核心主题：<strong>Serverless 集成跑通了</strong>。</p>
          <p>
            从 v0.3.2 开始，LessJS 的架构文档里就写着 "API Routes 可以部署为
            Serverless"，但直到这个版本，它才真正 CI 自动化、真正跑在生产环境上。
          </p>

          <div class="truth">
            <strong>v0.3.2 → v0.4.0：90 commits · 103 files · +3904 / −1810</strong>
          </div>

          <h2>Serverless API 的落地之路</h2>
          <p>
            这 12 个 commit 是从"文档描述"到"真机部署"的全过程：
          </p>

          <table class="cmp">
            <tr>
              <th>阶段</th>
              <th>问题</th>
              <th>解决方案</th>
            </tr>
            <tr>
              <td>部署平台迁移</td>
              <td><code>deployctl</code>（旧平台 Classic）废弃</td>
              <td>迁移到 <code>deno deploy</code>（新平台 v2）</td>
            </tr>
            <tr>
              <td>CORS</td>
              <td><code>hono/cors</code> 中间件在 Deno Deploy 上不兼容</td>
              <td>手动设置 Access-Control-Allow-Origin</td>
            </tr>
            <tr>
              <td>入口路径</td>
              <td>deployctl 和 deno deploy 的入口解析不一致</td>
              <td>用 <code>--entrypoint=serverless.ts</code> 明确指定</td>
            </tr>
            <tr>
              <td>Import Map</td>
              <td>Deno Deploy 读不到 workspace 配置</td>
              <td>从 clean temp dir 部署，自带 deno.json</td>
            </tr>
            <tr>
              <td>CI 触发</td>
              <td>只 push main + demo/** 变更</td>
              <td><code>deploy-api.yml</code> 自动化 + workflow_dispatch</td>
            </tr>
          </table>

          <p>
            最终成果：<code>less-demo-api.sisyphuszheng.deno.net</code> 生产在线，CI 自动部署，前端 <code
            >less-hero-ping</code> 一键 verify。 这是 LessJS Jamstack 承诺的 "J"（Markup）+ "A"（API）+
            "M"（Markup） 全链路闭环。
          </p>

          <h2>从 v0.3.2 到 v0.4.0 完整变更</h2>

          <h3>@lessjs/ui</h3>
          <table class="cmp">
            <tr>
              <th>变更</th>
              <th>说明</th>
              <th>版本</th>
            </tr>
            <tr>
              <td>新组件：less-hero-ping</td>
              <td>可配置 API 的 ping 按钮，🟢/🔴 状态点</td>
              <td>0.3.6 → 0.4.0</td>
            </tr>
            <tr>
              <td>less-layout</td>
              <td>sidebar 240px → clamp(200px, 20vw, 280px)，max-width 变量化</td>
              <td>0.3.5</td>
            </tr>
            <tr>
              <td>全组件边框统一</td>
              <td>less-button/card/input/code-block/layout 全部 0.5px</td>
              <td>0.3.5</td>
            </tr>
            <tr>
              <td>less-input</td>
              <td>修复 undefined string 问题</td>
              <td>0.3.5</td>
            </tr>
            <tr>
              <td>less-button</td>
              <td>修复 nothing 输出</td>
              <td>0.3.5</td>
            </tr>
            <tr>
              <td>less-code-block</td>
              <td>修复 timeout cleanup</td>
              <td>0.3.5</td>
            </tr>
            <tr>
              <td>theme-toggle</td>
              <td>ARIA 修复，动画访问性</td>
              <td>0.3.5</td>
            </tr>
            <tr>
              <td>effects token</td>
              <td>暗色模式阴影修复</td>
              <td>0.3.5</td>
            </tr>
            <tr>
              <td>vite.config.build</td>
              <td>新增 less-hero-ping 构建入口</td>
              <td>0.3.5</td>
            </tr>
            <tr>
              <td>index.ts</td>
              <td>导出 less-hero-ping，islands 数组 +1</td>
              <td>0.3.6</td>
            </tr>
          </table>

          <h3>@lessjs/core</h3>
          <table class="cmp">
            <tr>
              <th>变更</th>
              <th>说明</th>
            </tr>
            <tr>
              <td>Service Worker</td>
              <td>PRECACHE 删除，networkFirst（HTML）+ cacheFirst（assets），动态缓存名</td>
            </tr>
            <tr>
              <td>SSR entry</td>
              <td>修复 Island 组件注册缺失（Lit SSR 渲染空标签问题）</td>
            </tr>
            <tr>
              <td>扫描器</td>
              <td>route-scanner 重构，isDirectory() 方法调用修复</td>
            </tr>
            <tr>
              <td>上下文</td>
              <td>createSsrContext 改进</td>
            </tr>
            <tr>
              <td>构建管线</td>
              <td>build-client + build-ssg 稳定化</td>
            </tr>
            <tr>
              <td>deploy.yml</td>
              <td>加 .version 缓存清除文件</td>
            </tr>
            <tr>
              <td>deno.json/jsr.json</td>
              <td>添加 CLI 导出</td>
            </tr>
            <tr>
              <td>types.ts</td>
              <td>JSDoc 修复</td>
            </tr>
          </table>

          <h3>@lessjs/rpc</h3>
          <table class="cmp">
            <tr>
              <th>变更</th>
              <th>说明</th>
            </tr>
            <tr>
              <td>abort race 修复</td>
              <td>RPC 调用取消竞争条件修复</td>
            </tr>
          </table>

          <h3>文档站</h3>
          <table class="cmp">
            <tr>
              <th>类别</th>
              <th>变更</th>
            </tr>
            <tr>
              <td>首页</td>
              <td>全中文、响应式 clamp()、比较表、Quick start 修正、auto/% 尺寸</td>
            </tr>
            <tr>
              <td>全站边框</td>
              <td>17 个文件、40+ 处 1px → 0.5px 统一</td>
            </tr>
            <tr>
              <td>主题</td>
              <td>所有非 Hero 区域硬编码色 → --less-* CSS 变量</td>
            </tr>
            <tr>
              <td>Hero 可见度</td>
              <td>#555→#999，#444→#777，border-bottom 隔离</td>
            </tr>
            <tr>
              <td>布局统一</td>
              <td>首页 720px 内容宽度对齐 Guide 页面</td>
            </tr>
            <tr>
              <td>博客</td>
              <td>v0.4.0 发布文、kiss-compiler 设计决策</td>
            </tr>
            <tr>
              <td>架构文档</td>
              <td>设计哲学、部署指南等同步更新</td>
            </tr>
            <tr>
              <td>README</td>
              <td>精简 80%，加 JSR badges，诚实 JS 大小</td>
            </tr>
            <tr>
              <td>导航</td>
              <td>侧边栏组织优化</td>
            </tr>
          </table>

          <h3>CI/CD</h3>
          <table class="cmp">
            <tr>
              <th>流水线</th>
              <th>变更</th>
            </tr>
            <tr>
              <td>Lint & Format</td>
              <td>稳定通过（跳过 docs/ 由于 Deno fmt bug）</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>并行化 test-core + test-ui + test-create，移除 coverage 步骤</td>
            </tr>
            <tr>
              <td>Publish</td>
              <td>自动检测 deno.json 版本变更，多包发布</td>
            </tr>
            <tr>
              <td>Deploy</td>
              <td>三步构建完整 CI，缓存清除</td>
            </tr>
          </table>

          <h3>代码质量</h3>
          <table class="cmp">
            <tr>
              <th>指标</th>
              <th>v0.3.2</th>
              <th>v0.4.0</th>
            </tr>
            <tr>
              <td>Lint 错误</td>
              <td>有残留</td>
              <td>0</td>
            </tr>
            <tr>
              <td>TypeScript 类型</td>
              <td>有残留</td>
              <td>0 errors</td>
            </tr>
            <tr>
              <td>UI 测试通过</td>
              <td>部分</td>
              <td>84/84</td>
            </tr>
            <tr>
              <td>全站 1px 残留</td>
              <td>40+ 处</td>
              <td>0</td>
            </tr>
            <tr>
              <td>硬编码色（非 Hero）</td>
              <td>大量</td>
              <td>0（全部 CSS 变量）</td>
            </tr>
          </table>

          <h2>与其他框架的直观对比</h2>

          <table class="cmp">
            <tr>
              <th>维度</th>
              <th>LessJS</th>
              <th>Fresh</th>
              <th>Nuxt</th>
              <th>Next.js</th>
            </tr>
            <tr>
              <td>HTTP 层</td>
              <td>Fetch API</td>
              <td>Fetch API</td>
              <td>Nitro</td>
              <td>定制</td>
            </tr>
            <tr>
              <td>UI 层</td>
              <td>Web Components</td>
              <td>Preact/JSX</td>
              <td>Vue</td>
              <td>React</td>
            </tr>
            <tr>
              <td>静态页面 JS</td>
              <td>~0.4 KB</td>
              <td>~1 KB</td>
              <td>~60 KB</td>
              <td>~70 KB</td>
            </tr>
            <tr>
              <td>单交互组件</td>
              <td>~2-6 KB</td>
              <td>~12 KB</td>
              <td>整包</td>
              <td>整包</td>
            </tr>
            <tr>
              <td>Islands 架构</td>
              <td class="yes">原生</td>
              <td class="yes">原生</td>
              <td class="no">无</td>
              <td class="no">无</td>
            </tr>
            <tr>
              <td>DSD (Declarative Shadow DOM)</td>
              <td class="yes">内置</td>
              <td class="no">—</td>
              <td class="no">—</td>
              <td class="no">—</td>
            </tr>
            <tr>
              <td>SSG 原生</td>
              <td class="yes">是</td>
              <td class="yes">是</td>
              <td class="yes">是</td>
              <td class="yes">是</td>
            </tr>
            <tr>
              <td>多运行时</td>
              <td>Deno/Node/Bun/CF</td>
              <td>Deno</td>
              <td>Node</td>
              <td>Node</td>
            </tr>
            <tr>
              <td>类型安全 RPC</td>
              <td class="yes">Hono RPC</td>
              <td class="no">—</td>
              <td class="no">—</td>
              <td class="no">—</td>
            </tr>
          </table>

          <h2>关于"零 JS"的实话</h2>

          <div class="truth">
            <strong>LessJS 不是零 JS，而是零框架 JS。</strong>
            <p>
              每个页面有约 400 字节的内联基础设施脚本（主题初始化 + Service Worker 注册）。
              这是不可消除的——它们是 L2 层（平台 API），在 I 约束（Isolated）的豁免范围内。
            </p>
            <p>
              但 Lit / Hono / 框架核心代码的确是 0 字节。零交互页面只加载这 ~400 字节。 对比之下 Fresh
              每页 ~1KB，Nuxt ~60KB，Next.js ~70KB。
            </p>
            <p>
              有交互的页面按需加载 Island chunk，每个 ~2-6 KB gzip，懒加载 + 独立 Shadow DOM。
            </p>
          </div>

          <h2>未来规划</h2>

          <h3>Vite 8 支持</h3>
          <p>
            Vite 6 → 8 的升级路径已经调研过。核心依赖（Vite SSR、Rollup 插件 API）在 Vite 7/8 中保持兼容。
            主要工作是更新 Wrangler 适配层和 Deno Deploy 的 shim。预计在 v0.5.0 时完成迁移。 Vite 8 的 RSC
            支持和更快的 HMR 将直接受益于 LessJS 的构建管线。
          </p>

          <h3>.less 编译器</h3>
          <p>
            消灭 Lit 运行时依赖是终极目标。自定义编译器将 .less 文件编译为原生 <code>HTMLElement</code>，
            消除 58KB 的 Lit 运行时。这不仅是大小优化——它意味着 <strong>真正的零依赖</strong>。
            目前编译器已经完成了设计文档（<a href="/blog/less-compiler"
            >详见博文</a>），新的路线图把它后移为 v0.10.0 alpha：先把 DSD、Island、Serverless 与 SSG/ISR
            做稳，再讨论默认组件语法。
          </p>

          <h3>React 19 / Vue Interop</h3>
          <p>
            通过 Custom Elements 的天然互操作性，LessJS Island 可以在任何框架中使用。 React 19
            已经修复了对 Custom Elements 的属性传递支持。Vue 3 原生支持 CE。 这意味着 LessJS
            组件可以作为"框架无关"的交互单元被其他应用引用。
          </p>

          <h3>WASM Islands</h3>
          <p>
            探索将计算密集型 Island 编译为 WebAssembly，在 Shadow DOM 内运行。
            适用于数据重处理、图形渲染等场景。
          </p>

          <h3>自动 API RPC 生成</h3>
          <p>
            从 Hono 路由定义自动生成类型安全的客户端调用代码。 消除手动编写 API 客户端代码的需求。
          </p>
        </div>
      </less-layout>
    `}};customElements.define(`blog-v040`,Pn);var Fn=class extends K{static styles=[q,k`
      h2 {
        margin-top: 2rem;
      }
      .truth {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 1.25rem;
        margin: 1.5rem 0;
      }
      .truth-title {
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--less-text-primary);
      }
      code {
        background: var(--less-code-bg);
        padding: 0.125rem 0.375rem;
        border: 0.5px solid var(--less-border);
        border-radius: 3px;
        font-size: 0.8125rem;
      }
    `];render(){return B`
      <less-layout currentPath="/blog/v0-5-0">
        <div class="container">
          <p class="breadcrumb"><a href="/blog">← Blog</a></p>
          <h1>LessJS v0.5-alpha-0 — 架构精简：砍掉不必要的，留住核心</h1>
          <p class="subtitle">零框架运行时 Core · 原生 RPC · OpenProps + Lit · 单 deno.json</p>
          <p class="date">2026-05-02</p>

          <p>v0.5-alpha-0 不做新功能。它做减法。</p>

          <p>
            从 v0.3.2 到 v0.4.0，我们加了 SSG、Islands、DSD、PWA、Serverless API——90 commits，3904
            行新增。到 v0.5-alpha-0，问题变成了：这些东西能不能不这么复杂？
          </p>

          <h2>删了什么</h2>

          <div class="truth">
            <div class="truth-title">一、KissElement — 废弃</div>
            <p>
              KissElement 是一个"零框架运行时"的 Custom Element base class，用 <code>this.root.innerHTML =
                String(this.render())</code> 更新 DOM。这个设计有四个问题：
              </p>
              <ul>
                <li>状态丢失：input focus、scroll pos、CSS 动画全部重置</li>
                <li>不安全：innerHTML 不转义</li>
                <li>不组合：全量替换破坏子组件 DOM 引用</li>
                <li>性能差：比 lit-html 细粒度 diff 差一个数量级</li>
              </ul>
              <p>
                要解决这些问题需要重写一个 lit-html
                级别的模板引擎——不值得维护。任何想"零框架运行时但又有声明式模板"的方案，最后都会变成重写
                Lit。
              </p>
            </div>

            <div class="truth">
              <div class="truth-title">二、@lessjs/core 的运行时导出 — 归零</div>
              <p>
                之前 core 做了太多事：Vite 插件 + KissElement + LitElement re-export + 路由扫描 + DSD 渲染。
              </p>
              <p>现在 core 只做一件事：构建/SSR 基础设施。不再导出：</p>
              <ul>
                <li>✗ KissElement</li>
                <li>✗ signal / effect（@preact/signals-core）</li>
                <li>✗ LitElement / html / css（交给 @lessjs/ui）</li>
              </ul>
              <p>结果：<code>@lessjs/core</code> 的运行时依赖从两个（lit + signals）变成零。</p>
            </div>

            <div class="truth">
              <div class="truth-title">三、@lessjs/rpc 的 Lit 耦合 — 解除</div>
              <p>
                RPC 控制器本质上是 fetch + AbortController 的包装。它曾经因为用了 Lit 的 ReactiveController
                接口而声明了 peer dep。
              </p>
              <p>
                v0.5-alpha-0 改为 structural typing——RPC 自己声明兼容的接口，任何有 <code
                >addController</code>/<code>requestUpdate</code> 的对象都可以用。Lit、原生
                HTMLElement、或其他框架都行。
              </p>
            </div>

            <div class="truth">
              <div class="truth-title">四、双 deno.json — 合并</div>
              <p>之前根目录和 docs/ 各有一个 deno.json，依赖分散在两处维护。</p>
              <p>
                现在合并到单根 deno.json，加上 <code>vendor: true</code>，<code>deno install</code>
                一站式管理所有依赖。
              </p>
            </div>

            <h2>留了什么</h2>

            <div class="truth">
              <div class="truth-title">Lit 保留在 @lessjs/ui</div>
              <p>
                Lit 是 Web Component 最成熟的工具库。less-ui 的九个组件已经用 Lit 写好、无 bug、正在跑。15KB
                gzip 不可见成本（被所有组件共享）。
              </p>
              <p>
                Lit 现在是 <code>@lessjs/ui</code> 的实现细节。用户写 <code>&lt;less-button
                  variant="primary"&gt;</code> 不需要知道里面有 Lit。需要自定义组件的用户可以自己写 <code
                >class extends HTMLElement</code>，和 less-ui 组件同页面共存。
              </p>
            </div>

            <div class="truth">
              <div class="truth-title">DSD 渲染器 — core / adapter 分层不变</div>
              <p>
                core 负责 DSD-first 渲染与 SSG 管线；Lit 组件通过 <code>@lessjs/adapter-lit</code>
                接入。后续 Trust Release 必须补齐 adapter 测试与插值转义，不能把 adapter 风险伪装成 core
                的能力。
              </p>
            </div>

            <div class="truth">
              <div class="truth-title">OpenProps 设计系统</div>
              <p>
                所有颜色和阴影 token 从硬编码 hex 改为 OpenProps CSS 变量。CSS 自定义属性天然穿透 Shadow
                DOM，零构建步骤。
              </p>
            </div>

            <h2>新架构一览</h2>

            <pre><code>@lessjs/core    — 纯构建/SSR 工具           [零框架运行时]
              @lessjs/rpc     — fetch + AbortController   [零框架运行时]
              @lessjs/ui      — OpenProps + Lit 组件库     [仅 UI 层]
              create-kiss     — 脚手架                    [CLI 工具]</code></pre>

              <p>Vite 8.0.10，Deno 2.6，单根 deno.json。CI 全绿。</p>

              <div class="nav-row">
                <a href="/blog/v0-4-0" class="nav-link">&larr; v0.4.0</a>
                <a href="/roadmap" class="nav-link">路线图 &rarr;</a>
              </div>
            </div>
          </less-layout>
        `}},In=`blog-v0-5-alpha1`,Ln=class extends K{static styles=[q,k`
      h2 {
        margin-top: 2rem;
      }
      h3 {
        margin-top: 1.5rem;
        font-size: 1.1rem;
      }
      .truth {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 1.25rem;
        margin: 1.5rem 0;
      }
      .truth-title {
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--less-text-primary);
      }
      code {
        background: var(--less-code-bg);
        padding: 0.125rem 0.375rem;
        border: 0.5px solid var(--less-border);
        border-radius: 3px;
        font-size: 0.8125rem;
      }
      pre {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 1rem;
        overflow-x: auto;
        font-size: 0.8125rem;
      }
      pre code {
        background: none;
        border: none;
        padding: 0;
        font-size: inherit;
      }
      .bug-card {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 1.25rem;
        margin: 1.25rem 0;
        border-left: 3px solid var(--less-primary);
      }
      .bug-card .bug-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--less-primary);
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
      .principle {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 1.25rem;
        margin: 1rem 0;
      }
      .principle-title {
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: var(--less-text-primary);
      }
      .new-badge {
        display: inline-block;
        background: var(--less-primary);
        color: #fff;
        font-size: 0.625rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 0.125rem 0.375rem;
        border-radius: 3px;
        vertical-align: middle;
        margin-left: 0.5rem;
      }
      .phase {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 1rem 1.25rem;
        margin: 0.75rem 0;
      }
      .phase-version {
        font-weight: 700;
        color: var(--less-primary);
        font-size: 0.9375rem;
      }
      .phase-goal {
        margin-top: 0.25rem;
        color: var(--less-text-secondary);
        font-size: 0.875rem;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        font-size: 0.875rem;
      }
      th, td {
        text-align: left;
        padding: 0.5rem 0.75rem;
        border-bottom: 0.5px solid var(--less-border);
      }
      th {
        font-weight: 600;
        color: var(--less-text-secondary);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .good {
        color: var(--less-success, #22c55e);
        font-weight: 600;
      }
      .bad {
        color: var(--less-danger, #ef4444);
        font-weight: 600;
      }
    `];render(){return B`
      <less-layout currentPath="/blog/v0-5-alpha1">
        <div class="container">
          <p class="breadcrumb"><a href="/blog">← Blog</a></p>
          <h1>v0.5-alpha1：全量架构审计与精准修复</h1>
          <p class="subtitle">今日全栈架构审查揭示了关键 Bug 与技术债务——不是修修补补，是根源修复</p>
          <p class="date">2026-05-02</p>

          <p>
            今天对 LessJS Framework
            进行了一次端到端的全栈架构审查。结果符合预期——也超出预期。符合预期的是，写出好软件的唯一办法就是反复审查；超出预期的是，找到的不是表面
            Bug，而是设计层面的系统性缺口。
          </p>

          <h2>今日修复的三个关键 Bug</h2>

          <div class="bug-card">
            <div class="bug-label">Bug #1</div>
            <h3>CSS 注入失败：SSG 页面无样式</h3>
            <p>
              SSG 生成的页面完全没有 CSS。根因：<code>extractLitStyles()</code> 尝试读取 Lit 3.x
              中不存在的 <code>CSSResult.strings</code> 属性。Lit 3.x 使用 <code>cssText</code> 属性作为
              CSSResult 的序列化接口，但代码仍然用 Lit 2.x 的 API。
            </p>
            <p>
              <strong>修复：</strong>直接使用 <code>cssText</code>，删除 42
              行无效代码和过时的数据结构构造逻辑。没有变通方案，没有兼容层——就是用对的 API。
            </p>
          </div>

          <div class="bug-card">
            <div class="bug-label">Bug #2</div>
            <h3>Island Upgrade 竞态：API Consumer 卡在 "Contacting server..."</h3>
            <p>
              <code>api-consumer</code> 组件永远卡在 "Contacting server..." 状态。根因：<code
              >_fetchStatus()</code> 在 <code>connectedCallback()</code> 中同步调用，而 LitElement 的首次
              update cycle 尚未完成——reactive property 被设置但 DOM 还没渲染。
            </p>
            <p>
              <strong>修复：</strong>将初始化逻辑推迟到 <code>updateComplete.then(() =>
                this._fetchStatus())</code>。这是 Lit 的基本规则：connectedCallback 做
              setup，updateComplete 做首次状态驱动操作。
            </p>
          </div>

          <div class="bug-card">
            <div class="bug-label">Bug #3</div>
            <h3>配置地狱：版本漂移</h3>
            <p>
              多个包同时维护 <code>deno.json</code>、<code>package.json</code>、<code>jsr.json</code>
              三份配置文件，5 个包的版本号互不一致。
            </p>
            <p>
              <strong>决策：</strong>每个包统一为单 <code>deno.json</code>，删除 <code>jsr.json</code>
              和不必要的 <code>package.json</code>。Deno 是第一运行时，不假兼容。
            </p>
          </div>

          <h2>架构审查数据</h2>

          <table>
            <thead>
              <tr>
                <th>Package</th>
                <th>Lines of Code</th>
                <th>Test Lines</th>
                <th>Test Ratio</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>@lessjs/adapter-lit</code></td>
                <td>—</td>
                <td>0</td>
                <td><span class="bad">0%</span></td>
                <td>最危险的缺口（两个 Bug 均出此处）</td>
              </tr>
              <tr>
                <td><code>@lessjs/rpc</code></td>
                <td>—</td>
                <td>—</td>
                <td><span class="good">184%</span></td>
                <td>项目最佳</td>
              </tr>
              <tr>
                <td>全项目</td>
                <td>13,000</td>
                <td>5,500</td>
                <td><span class="good">42%</span></td>
                <td>总体良好，但分布严重不均</td>
              </tr>
            </tbody>
          </table>

          <div class="truth">
            <div class="truth-title">审查发现的关键事实</div>
            <ul>
              <li>
                <strong>@lessjs/adapter-lit: 0 tests。</strong>项目中最危险的覆盖缺口。今天修复的两个
                Bug（CSS 注入、Island upgrade 竞态）都在这个包。如果你不测适配器，适配器就会出
                Bug——这是软件工程的必然。
              </li>
              <li>
                <strong>所有 9 个 Island 都是 eager-loaded。</strong>每个页面加载完整全局 island
                entry。没有页面级 manifest。用户为没有交互的组件支付了全部运行时成本。
              </li>
              <li>
                <strong>旧 Lit SSR client 路线仍有残留风险。</strong>依赖、术语和 client entry
                必须统一清理，避免文档声称移除而运行路径仍保留旧模型。
              </li>
              <li>
                <strong>3 份重复的 <code>escapeHtml</code>
                  实现。</strong>各自用不同编码逻辑——一个用正则、一个用 DOM API、一个手动替换。
                </li>
              </ul>
            </div>

            <h2>新设计原则</h2>
            <p>审查产出了 10 条设计原则。以下是 6 条新增的（已有 4 条保留）：</p>

            <div class="principle">
              <div class="principle-title">Lit Update Safety <span class="new-badge">New</span></div>
              <p>
                <strong>禁止</strong>在 <code>connectedCallback</code> 中同步设置 reactive property。必须在
                <code>updateComplete.then()</code> 之后执行首次状态驱动操作。这条原则直接来自 Bug #2。
              </p>
            </div>

            <div class="principle">
              <div class="principle-title">Adapter Test Coverage <span class="new-badge">New</span></div>
              <p>
                每个 adapter 必须有测试——这不是"nice to have"，而是"上线前提"。如果 adapter-lit 有测试，CSS
                注入 Bug 和 upgrade 竞态在提交前就会被测出来。
              </p>
            </div>

            <div class="principle">
              <div class="principle-title">Error Visibility <span class="new-badge">New</span></div>
              <p>
                构建错误永远不能静默。SSG
                页面生成失败时必须有明确的终端输出和构建退出码。用户不应该在浏览器里看到空白页面才能发现构建已经失败。
              </p>
            </div>

            <div class="principle">
              <div class="principle-title">Island Lazy by Default <span class="new-badge">New</span></div>
              <p>
                所有 Island 默认按需升级。只有标记为 <code>eager</code> 或在首屏的组件才在初始 Bundle
                中包含。全局 island entry 对没有交互的页面来说是不可接受的。
              </p>
            </div>

            <div class="principle">
              <div class="principle-title">CSS Single Source <span class="new-badge">New</span></div>
              <p>
                每个组件的 CSS 只有一个来源。不可以在 UI 库和 SSG 管线中重复定义样式提取逻辑。<code
                >cssText</code> 是 Lit 的序列化接口——用它。
              </p>
            </div>

            <div class="principle">
              <div class="principle-title">
                One Config File per Package <span class="new-badge">New</span>
              </div>
              <p>
                每个包只有一个配置文件：<code>deno.json</code>。不维护 <code>package.json</code> 或 <code
                >jsr.json</code> 的冗余副本。版本号只有一个真实来源。
              </p>
            </div>

            <h2>Road to v1.0</h2>
            <p>基于这次审查，新的路线图被重新排序：先修可信度与安全，再谈更大的语法和生态扩展。</p>

            <div class="phase">
              <div class="phase-version">v0.5.0 — Trust Release</div>
              <div class="phase-goal">修复安全、quickstart、嵌套 island、manifest URL，并补齐关键测试</div>
            </div>

            <div class="phase">
              <div class="phase-version">v0.6.0 — DSD Renderer 2</div>
              <div class="phase-goal">统一 escape/render contract，稳定 DSD 输出与 adapter 边界</div>
            </div>

            <div class="phase">
              <div class="phase-version">v0.7.0 — Island Upgrade</div>
              <div class="phase-goal">页面级 island manifest、真实 eager/idle/visible 策略、性能预算</div>
            </div>

            <div class="phase">
              <div class="phase-version">v0.8.0 — Serverless Fullstack</div>
              <div class="phase-goal">API routes、RPC、serverless adapters 和本地开发闭环</div>
            </div>

            <div class="phase">
              <div class="phase-version">v0.9.0 — SSG + ISR + PWA</div>
              <div class="phase-goal">保住纯静态默认值，再提供可选 ISR 与更稳的 PWA 缓存策略</div>
            </div>

            <div class="phase">
              <div class="phase-version">v0.10.0 — .less Compiler Alpha</div>
              <div class="phase-goal">可选零框架运行时组件编译器，不阻塞 v0.5-v0.9</div>
            </div>

            <h2>.less 编译器愿景（ADR 0002）</h2>

            <div class="truth">
              <div class="truth-title">把 Lit 从必选变成 adapter</div>
              <p>
                Lit 当前需要 58KB gzip 运行时。这个成本在首屏加载时集中出现——即使只有 1
                个组件也需要整个运行时。
              </p>
              <p>
                <strong>.less 编译器</strong>的愿景：将 <code>.less</code> 模板文件编译为原生 Custom
                Element——无框架运行时。Lit 作为可选 fallback 保留，供需要 Lit 生态（context
                protocol、decorators、ReactiveController）的用户选择。
              </p>
              <p>这不是"替代 Lit"——这是让 Lit 从必选变成可选。零框架运行时始终是方向。</p>
            </div>

            <h2>v0.5.0 正式版路线</h2>

            <div class="truth">
              <div class="truth-title">P0 — 阻塞发布</div>
              <ul>
                <li>
                  <strong>A1 adapter-lit 测试</strong> — extractLitStyles + renderLitToString +
                  installLitAdapter
                </li>
                <li>
                  <strong>A2 移除旧 Lit SSR client 路线</strong> — 从依赖、术语和 client bundle 中彻底清除
                </li>
                <li><strong>A3 extractLitStyles 错误可见性</strong> — try/catch → console.warn</li>
                <li><strong>A4 CI 全绿</strong> — lint / fmt / test / typecheck 零错误</li>
                <li>
                  <strong>A5 版本号最终对齐</strong> — core 0.5.0, rpc 0.3.0, ui 0.5.0, adapter-lit 0.2.0,
                  create 0.4.0
                </li>
                <li><strong>A6 Docs 站验证</strong> — SSG 构建 38 页通过，DSD 含 &lt;style&gt;</li>
              </ul>
            </div>

            <div class="truth">
              <div class="truth-title">P1 — 发布附带</div>
              <ul>
                <li>
                  <strong>B1</strong> escapeHtml 统一（3→1） · <strong>B2</strong> escapeAttr 统一（2→1）
                </li>
                <li>
                  <strong>B3-B5</strong> 死代码清理（renderNestedDsd / html-template / @deprecated fns）
                </li>
                <li>
                  <strong>B6</strong> less-hero-ping apiUrl 修复 · <strong>B7</strong> create-kiss 模板更新
                </li>
              </ul>
            </div>

            <div class="truth">
              <div class="truth-title">P2 — v0.5.1+</div>
              <ul>
                <li>
                  <strong>C1</strong> Island 懒加载 (IntersectionObserver) · <strong>C2</strong> OpenProps
                  按需
                </li>
                <li><strong>C3</strong> JS/CSS minification · <strong>C4</strong> E2E 测试 (Playwright)</li>
                <li>
                  <strong>C5</strong> 结构化 inject API · <strong>C6</strong> 无障碍 · <strong>C7</strong>
                  SEO
                </li>
              </ul>
            </div>

            <div class="nav-row">
              <a href="/blog/v0-5-alpha-0" class="nav-link">&larr; v0.5-alpha-0</a>
              <a href="/roadmap" class="nav-link">路线图 &rarr;</a>
            </div>
          </div>
        </less-layout>
      `}};customElements.define(In,Ln);var Rn=class extends K{static styles=[q,k`
      .version-section {
        margin: 2rem 0;
        padding: 1.5rem;
        background: var(--less-bg-surface);
        /* 0.5px: reduced to match less-ui spec */
        border: 0.5px solid var(--less-border);
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
        color: var(--less-text-primary);
      }
      .version-date {
        font-size: 0.75rem;
        color: var(--less-text-muted);
        padding: 0.25rem 0.5rem;
        background: var(--less-bg-elevated);
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
        color: var(--less-text-muted);
        margin-bottom: 0.5rem;
      }
      .change-category.added h4 {
        color: var(--less-accent);
      }
      .change-category.changed h4 {
        color: var(--less-accent-dim);
      }
      .change-category.fixed h4 {
        color: var(--less-text-secondary);
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
        color: var(--less-text-secondary);
        font-size: 0.875rem;
      }
      .change-list li::before {
        content: "•";
        position: absolute;
        left: 0;
        color: var(--less-text-muted);
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
        border-bottom: 0.5px solid var(--less-border);
      }
      .version-table th {
        font-size: 0.6875rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--less-text-muted);
      }
      .version-table td:first-child {
        font-weight: 600;
        color: var(--less-text-primary);
      }
    `];render(){return B`
      <less-layout currentPath="/changelog">
        <div class="container">
          <h1>更新日志</h1>
          <p class="subtitle">
            LessJS 的所有重要变更都记录在这里。
          </p>

          <p>
            格式基于
            <a href="https://keepachangelog.com/zh-CN/1.0.0/" target="_blank"
            >Keep a Changelog</a>，本项目遵循
            <a href="https://semver.org/lang/zh-CN/" target="_blank">语义化版本 2.0.0</a>。
            历史条目保留当时术语；当前文档统一把 LessJS 的客户端模型称为 Island Upgrade，而不是传统
            hydration。
          </p>

          <div class="version-section">
            <div class="version-header">
              <span class="version-number">0.6.0-stabilization</span>
              <span class="version-date">2026-05-07</span>
            </div>
            <div class="change-category fixed">
              <h4>修复</h4>
              <ul class="change-list">
                <li>
                  <strong>DSD Hydration 全组件覆盖</strong>：LessButton、LessThemeToggle、
                  LessCodeBlock、LessCard、LessInput 五个组件全部添加 DSD hydration 逻辑 （<span
                    class="inline-code"
                  >_dsdHydrated</span> +
                  <span class="inline-code">createRenderRoot()</span> 覆写）， 解决按钮旁空白框、Footer
                  内容重复渲染等重复渲染问题。
                </li>
                <li>
                  <strong>Footer CSS 选择器修复</strong>：
                  <span class="inline-code">.app-footer footer</span> →
                  <span class="inline-code">.app-footer</span>。 原选择器匹配不到实际 DOM 结构（<span
                    class="inline-code"
                  >&lt;footer class="app-footer"&gt;</span>）， 导致 Footer 无样式（无
                  padding/border/background）。
                </li>
                <li>
                  <strong>DSD Regex 属性匹配增强</strong>：正则表达式扩展以匹配
                  <span class="inline-code">shadowrootdelegatesfocus</span> 等所有 template 属性。
                </li>
                <li>
                  <strong>CI 类型检查修复</strong>：3 个新增 hydration 组件补齐
                  <span class="inline-code">nothing</span> 导入； less-theme-toggle.ts 缩进通过 deno fmt
                  自动修正。
                </li>
              </ul>
            </div>
          </div>

          <div class="version-section">
            <div class="version-header">
              <span class="version-number">0.6.0-alpha.1</span>
              <span class="version-date">2026-05-06</span>
            </div>
            <div class="change-category added">
              <h4>新增</h4>
              <ul class="change-list">
                <li>
                  <strong>TC39 Signals 二开</strong>：<span class="inline-code">@lessjs/signal</span>
                  基于 signal-polyfill 实现
                  <span class="inline-code">signal()</span>、
                  <span class="inline-code">computed()</span>（自动依赖追踪）、
                  <span class="inline-code">effect()</span>（依赖变化自动重跑）、
                  <span class="inline-code">islandEffect()</span>（Island 生命周期绑定）。 浏览器原生
                  <span class="inline-code">Signal</span> 条件回退。 旧 API <span class="inline-code"
                  >derived()</span> + fire-once
                  <span class="inline-code">effect()</span> 完全删除。
                </li>
                <li>
                  <strong>DSD 规范对齐</strong>：
                  <span class="inline-code">shadowrootdelegatesfocus</span>（less-button, less-input,
                  less-theme-toggle）、
                  <span class="inline-code">shadowrootserializable</span>、
                  <span class="inline-code">shadowrootslotassignment</span>、
                  <span class="inline-code">shadowrootcustomelementregistry</span>。
                  <span class="inline-code">DsdOptions</span> 接口 +
                  <span class="inline-code">inferDsdOptions()</span> 自动推断。
                </li>
                <li>
                  <strong>Form-Associated CE + :state()</strong>：
                  <span class="inline-code">less-button formAssociated</span> +
                  <span class="inline-code">ElementInternals</span>（type="submit" 在 form 中可用）、
                  <span class="inline-code">less-input :state(invalid)</span>、
                  <span class="inline-code">less-button :state(disabled)</span>。
                </li>
                <li>
                  <strong>Navigation API</strong>：
                  <span class="inline-code">navigate()</span>、
                  <span class="inline-code">onNavigate()</span>、
                  <span class="inline-code">matchRoute()</span>。 URLPattern + regex fallback 路由匹配。
                </li>
                <li>
                  <strong>Speculative Loading</strong>：
                  <span class="inline-code">&lt;link rel="modulepreload"&gt;</span> for eager islands；
                  <span class="inline-code">&lt;link rel="prefetch"&gt;</span> for lazy/visible/idle
                  islands。
                </li>
                <li>
                  <strong>less-dialog 组件</strong>：原生
                  <span class="inline-code">&lt;dialog&gt;</span> +
                  <span class="inline-code">::backdrop</span> + popover，
                  <span class="inline-code">:state(open/closed)</span>，
                  <span class="inline-code">inert</span> 属性。
                </li>
                <li>
                  <strong>L2 Nested DSD</strong>：<span class="inline-code">renderDSD()</span>
                  递归渲染嵌套 Custom Element，页面组件模版中的子组件都生成 DSD。
                </li>
                <li>
                  <strong>Sidebar SSR 首次渲染</strong>：less-layout 的 sidebar/header/footer 在 HTML
                  中静态存在，全部 CSS 在 DSD 模版内。
                </li>
              </ul>
            </div>
            <div class="change-category changed">
              <h4>变更</h4>
              <ul class="change-list">
                <li>
                  <strong>@lessjs/core 升至 0.6.0-alpha.1</strong>：包含 L2 Nested DSD、Navigation API、
                  DsdOptions、renderNestedCustomElements 等。 @lessjs/signal 升至
                  0.6.0-alpha.1。@lessjs/ui 升至 0.6.0。 @lessjs/adapter-lit 升至 0.3.0。@lessjs/create
                  升至 0.4.7。 @lessjs/rpc 无变更（0.3.1）。
                </li>
                <li>
                  <strong>Adapter 协议去全局化</strong>：移除 <span class="inline-code"
                  >globalThis.__lessRenderAdapter</span>、
                  <span class="inline-code">globalThis.__lessLitAdapterInstalled</span> 等 globalThis
                  污染。 适配器通过 <span class="inline-code">registerAdapter()</span> 显式注册。
                </li>
                <li>
                  <strong>Island Mixin 替代猴子补丁</strong>：
                  <span class="inline-code">__lessIslandWrapped</span> 防重入。
                  <span class="inline-code">idle</span> 降级改进：rIC → rAF → setTimeout(50)。
                </li>
                <li>
                  <strong>prefers-color-scheme 检测</strong>：
                  <span class="inline-code">matchMedia('(prefers-color-scheme: light)')</span>
                  + <span class="inline-code">document.documentElement.style.colorScheme</span>。
                </li>
                <li>
                  <strong>customElements.define 幂等守卫</strong>：8 个 UI 组件从
                  <span class="inline-code">try/catch</span> 改为
                  <span class="inline-code">customElements.get()</span> 守卫。
                </li>
                <li>
                  <strong>escapeHtml/escapeAttr 统一</strong>：
                  <span class="inline-code">adapter-lit/ssr.ts</span> 从
                  <span class="inline-code">@lessjs/core/render-dsd</span> 导入，消除 3 处重复。
                </li>
                <li>
                  <strong>废弃代码清理</strong>：删除 <span class="inline-code">html-template.ts</span>、
                  <span class="inline-code">less-bind.ts</span>、<span class="inline-code"
                  >vite-ext.d.ts</span>。 合并重复类型（<span class="inline-code"
                  >PackageIslandMeta</span>）， 移除 <span class="inline-code">lessScaffoldColorCSS</span>
                  别名。
                </li>
              </ul>
            </div>
            <div class="change-category fixed">
              <h4>修复</h4>
              <ul class="change-list">
                <li>
                  <strong>Navigation API navigationType bug</strong>：
                  <span class="inline-code">navigationType</span> 未按 WHATWG §7.4 规范返回正确类型。
                </li>
                <li>
                  <strong>首页 content 被 sidebar BFC 裁剪</strong>：改为条件渲染， home 时不渲染 desktop
                  sidebar。
                </li>
                <li>
                  <strong>renderNestedCustomElements 三个关联 bug</strong>： 两阶段替换重叠、Shadow DOM
                  内容被当 Light DOM、alreadyHasDSD 误判。
                </li>
                <li>
                  <strong>SSG Lit TemplateResult 渲染失败</strong>：改用
                  <span class="inline-code">server.ssrLoadModule()</span> 安装 adapter， 与 renderDSD
                  共享同一模块作用域。
                </li>
                <li>
                  <strong>CSS token 数据漂移</strong>：新建
                  <span class="inline-code">color-values.ts</span> 作为零依赖单一数据源。
                </li>
                <li>
                  <strong>仓库迁移</strong>：<span class="inline-code">SisyphusZheng/kiss</span>
                  → <span class="inline-code">lessjs-run/lessjs</span>。
                </li>
              </ul>
            </div>
          </div>

          <div class="version-section">
            <div class="version-header">
              <span class="version-number">0.5.5</span>
              <span class="version-date">2026-05-06</span>
            </div>
            <div class="change-category changed">
              <h4>变更</h4>
              <ul class="change-list">
                <li>
                  <strong>全面品牌重塑 KISS → LessJS 完成</strong>：包名 <span class="inline-code"
                  >@kissjs/*</span>
                  → <span class="inline-code">@lessjs/*</span>，主函数 <span class="inline-code"
                  >kiss()</span>
                  → <span class="inline-code">less()</span>，全部类名、变量名、注释完成迁移。 涉及 105
                  个文件，1171 行新增，905 行删除。
                </li>
                <li>
                  <strong>文档站全站品牌更新</strong>：CSS 变量 <span class="inline-code">--kiss-*</span>
                  → <span class="inline-code">--less-*</span>（69 处），域名 <span class="inline-code"
                  >kiss.js.org</span>
                  → <span class="inline-code">lessjs.com</span>，路由 <span class="inline-code"
                  >/kiss-compiler</span>
                  → <span class="inline-code">/less-compiler</span>，README.en.md 全文重写。
                </li>
                <li>
                  <strong>版本号提升</strong>：core 0.5.4→0.5.5，ui 0.5.4→0.5.5， rpc
                  0.3.0→0.3.1，adapter-lit 0.2.0→0.2.1，create 0.4.5→0.4.6。
                </li>
              </ul>
            </div>
            <div class="change-category fixed">
              <h4>修复</h4>
              <ul class="change-list">
                <li>
                  <strong>移动端 sidebar 无法打开（全浏览器）</strong>：首页 <span class="inline-code"
                  >&lt;less-layout home&gt;</span>
                  因 <span class="inline-code">home=true</span> 使用了 <span class="inline-code"
                  >display:none</span> 隐藏 sidebar， 导致 <span class="inline-code">transform</span>
                  无法作用于无盒模型的元素。 修复为 <span class="inline-code"
                  >width:0 + overflow:hidden</span>，保留盒模型使 transform 生效。
                </li>
                <li>
                  <strong>移动端首页 hamburger 只显示遮罩无 sidebar</strong>：改为始终渲染 sidebar，
                  桌面端折叠（width:0），移动端恢复尺寸，配合 <span class="inline-code"
                  >:host([menu-open])</span> CSS 控制显隐。
                </li>
                <li>
                  <strong>PWA manifest.json favicon 路径错误</strong>：<span class="inline-code"
                  >/favicon.svg</span>
                  → <span class="inline-code">/assets/less-logo.svg</span>，修复浏览器默认 favicon 请求
                  404。
                </li>
                <li>
                  <strong>dnt npm 构建失败</strong>：<span class="inline-code"
                  >packages/rpc/_build_npm.ts</span>
                  的 LICENSE 路径错误（<span class="inline-code">../LICENSE</span> → <span
                    class="inline-code"
                  >../../LICENSE</span>）。
                </li>
                <li>
                  <strong>CI 格式检查修复</strong>：deno fmt 格式化 5 个文件，deno lint 清理未使用
                  imports， publish exclusion 配置修复（<span class="inline-code">!dist</span> 取消
                  gitignore 排除）。
                </li>
                <li>
                  <strong>遗留 KISS 引用清理</strong>：<span class="inline-code">__kissLit*</span>
                  全局变量 → <span class="inline-code">__lessLit*</span>，<span class="inline-code"
                  >.kiss-row</span> CSS 类 → <span class="inline-code"
                  >.less-row</span>，文档中构建路径引用更新。
                </li>
              </ul>
            </div>
          </div>

          <div class="version-section">
            <div class="version-header">
              <span class="version-number">0.5.3</span>
              <span class="version-date">2026-05-05</span>
            </div>
            <div class="change-category changed">
              <h4>变更</h4>
              <ul class="change-list">
                <li>
                  <strong>Trust
                    Release</strong>：消除文档承诺与构建产物之间的信任差距，框架已承诺的每个行为现在都可以验证。
                  </li>
                  <li>
                    <strong>导航重构</strong>：DEFAULT_NAV 从 9 section 精简为 7 section（Start Here / Core
                    Model / Production / Packages / Strategy / Examples / History），与 nav-data.ts
                    完全同步。
                  </li>
                  <li>
                    <strong>declare + constructor 模式</strong>：所有 @lessjs/ui 组件和 docs island 改为
                    <span class="inline-code">declare</span> reactive fields + constructor 初始化，避免
                    class field 覆盖 Lit 生成的属性 accessor。
                  </li>
                  <li>
                    <strong>customElements.get() 守卫</strong>：所有 island 注册改为 <span
                      class="inline-code"
                    >if (!customElements.get(tagName))</span>，防止 HMR 和 SSR + client
                    重叠时的重复定义错误。
                  </li>
                  <li>
                    <strong>文档大修</strong>：14 个 guide 页面重写，新增 /guide/positioning 页面，roadmap
                    从任务表格改为分阶段叙述，首页去掉对比表改为 "Read Next" grid。
                  </li>
                  <li>
                    <strong>版本号</strong>：@lessjs/core 升至 0.5.3，@lessjs/ui 升至 0.5.2。
                  </li>
                </ul>
              </div>
              <div class="change-category fixed">
                <h4>修复</h4>
                <ul class="change-list">
                  <li>
                    <strong>根 middleware scope 修复</strong>：<span class="inline-code"
                    >_middleware.ts</span> 在项目根目录时生成 <span class="inline-code"
                    >app.use('//*', ...)</span>，仅匹配 <span class="inline-code">/</span>
                    而非所有子路由。安全中间件和认证守卫对子路由静默失效。现改为 <span class="inline-code"
                    >app.use('/*', ...)</span>。
                  </li>
                  <li>
                    <strong>islandChunkMap 双前缀修复</strong>：Vite manifest 的 <span class="inline-code"
                    >entry.file</span> 已包含 <span class="inline-code">islands/</span> 前缀，<span
                      class="inline-code"
                    >buildIslandChunkMap</span> 又拼接了一次，导致 SSG HTML 中 island 脚本 URL 404。
                  </li>
                  <li>
                    <strong>island strategy 传递修复</strong>：<span class="inline-code"
                    >PackageIslandMeta.strategy</span>（eager/lazy/idle/visible）在 build-client
                    中被完全丢弃。所有 package island 无论配置如何都使用默认加载行为。
                  </li>
                  <li>
                    <strong>嵌套 island 路径修复</strong>：<span class="inline-code"
                    >app/islands/posts/index.ts</span> 生成的 tagName <span class="inline-code"
                    >posts-index</span> 被反推为 <span class="inline-code"
                    >islands/posts-index.ts</span>（不存在的路径）。新增 <span class="inline-code"
                    >islandFiles</span> 参数传递原始扫描路径。
                  </li>
                  <li>
                    <strong>SSG CSP meta 注入</strong>：SSR 模式有 CSP header，但 SSG 输出的静态 HTML
                    完全没有 CSP。现通过 <span class="inline-code">injectCspMeta()</span> 注入 <span
                      class="inline-code"
                    >&lt;meta http-equiv="Content-Security-Policy"&gt;</span>。
                  </li>
                  <li>
                    <strong>lit html 模板反引号修复</strong>：getting-started.ts 和 error-handling.ts
                    的目录树/错误层级使用反引号字符，在 lit <span class="inline-code">html</span>
                    模板字面量中破坏 Vite/rolldown 解析。
                  </li>
                </ul>
              </div>
              <div class="change-category added">
                <h4>新增</h4>
                <ul class="change-list">
                  <li>
                    <strong>3 个回归测试文件</strong>：entry-descriptor.test.ts（scope + 路径 + islandFiles
                    断言）、entry-generators.test.ts（strategy
                    传递断言）、ssg-postprocess.test.ts（无双前缀断言）。测试从 296 涨至 309。
                  </li>
                  <li>
                    <strong>/guide/positioning 页面</strong>：Framework Positioning，解释 LessJS
                    解决什么问题以及它暂时不解决什么问题。
                  </li>
                  <li>
                    <strong>escapeHtml 交叉引用</strong>：adapter-lit/ssr.ts 中的 escapeHtml 加注释指向
                    @lessjs/core/render-dsd.ts 的 canonical 实现。
                  </li>
                </ul>
              </div>
            </div>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.5.1</span>
                <span class="version-date">2026-05-04</span>
              </div>
              <div class="change-category fixed">
                <h4>修复</h4>
                <ul class="change-list">
                  <li>
                    <strong>Lit Island 响应式修复</strong>：docs demo、@lessjs/ui 交互组件和 create-kiss
                    模板改为 <span class="inline-code">declare</span> reactive fields，并在 constructor
                    中初始化，避免 class field 覆盖 Lit 生成的属性 accessor。
                  </li>
                  <li>
                    <strong>线上 demo 可交互性</strong>：修复
                    <span class="inline-code">/demo</span> 页面中 Refresh、Say Hello 和 counter
                    点击后不触发重渲染的问题。
                  </li>
                  <li>
                    <strong>回归测试</strong>：新增 reactive property shadowing 测试，防止后续组件再次把 Lit
                    accessor 盖掉。
                  </li>
                  <li>
                    <strong>版本号</strong>：@lessjs/ui 升至 0.5.1，@lessjs/create 升至 0.4.5。
                  </li>
                </ul>
              </div>
            </div>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.5.0</span>
                <span class="version-date">2026-05-04</span>
              </div>
              <div class="change-category changed">
                <h4>变更</h4>
                <ul class="change-list">
                  <li>
                    <strong>正式单命令构建</strong>：用户主路径收口为
                    <span class="inline-code">deno task build</span>，内部仍保留 SSR bundle、client island
                    chunks、SSG 三个可观测阶段。
                  </li>
                  <li>
                    <strong>Core/Lit 边界收紧</strong>：docs route components 直接从
                    <span class="inline-code">lit</span> 导入 <span class="inline-code">css</span> /
                    <span class="inline-code">html</span> / <span class="inline-code">LitElement</span>，
                    <span class="inline-code">@lessjs/core</span> 不再通过 docs runtime shim 暴露 Lit。
                  </li>
                  <li>
                    <strong>0.x 公共面收口</strong>：移除未实现的
                    <span class="inline-code">renderNestedDsd()</span> stub，nested DSD 留到 v0.6 的 DSD
                    Renderer 2 正式设计。
                  </li>
                  <li>
                    <strong>Roadmap 刷新</strong>：吸收 2026-05-04 架构审查结论，明确 v0.6 优先 DSD Renderer
                    2，博客/文档/内容站是近期产品化样板，CRM/admin 放到中期。
                  </li>
                  <li>
                    <strong>版本号</strong>：@lessjs/core 升至 0.5.2，@lessjs/ui 升至 0.5.0，@lessjs/rpc
                    升至 0.3.0，@lessjs/adapter-lit 升至 0.2.0，@lessjs/create 升至 0.4.4。
                  </li>
                </ul>
              </div>
              <div class="change-category fixed">
                <h4>修复</h4>
                <ul class="change-list">
                  <li>
                    <strong>adapter-lit 安全插值</strong>：Lit TemplateResult 的动态文本和属性值默认转义，
                    事件绑定和 property 绑定在 SSR HTML 中剥离。
                  </li>
                  <li>
                    <strong>create-kiss 模板</strong>：新项目显式映射
                    <span class="inline-code">lit</span> / <span class="inline-code">@lessjs/core</span> /
                    <span class="inline-code">@lessjs/ui</span>，路由和 island 模板直接导入 Lit。
                  </li>
                  <li>
                    <strong>发布信任测试</strong>：SSG smoke 不再默认全部 ignore；adapter-lit 和 create-kiss
                    增加正式版阻塞测试。
                  </li>
                  <li>
                    <strong>CI 发布补丁</strong>：GitHub Actions 测试任务显式授予
                    <span class="inline-code">--allow-run</span>，create-kiss 模板显式安装 Vite 和 Lit 在
                    SSR 分支需要的 <span class="inline-code">@lit-labs/ssr-dom-shim</span>，并修复 JSR
                    远程运行时的 <span class="inline-code">@lessjs/core/less-runtime</span>、
                    <span class="inline-code">@lessjs/ui</span> package island、Lit adapter 解析路径。
                  </li>
                  <li>
                    <strong>Island 自注册</strong>：脚手架生成的 counter island 现在调用
                    <span class="inline-code">customElements.define()</span>，匹配 client entry 的动态
                    import 副作用注册契约。
                  </li>
                </ul>
              </div>
            </div>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.5.0-alpha.4</span>
                <span class="version-date">2026-05-04</span>
              </div>
              <div class="change-category added">
                <h4>新增</h4>
                <ul class="change-list">
                  <li>
                    <strong>ADR 文档站路由</strong>：docs/decisions/*.md 通过 Vite raw import
                    直接显示在文档站 sidebar 中。
                  </li>
                  <li>
                    <strong>README 重写</strong>：重新定义 LessJS 为 Deno-first、Web Standards-first、DSD +
                    Web Components + Islands 的 fullstack 框架。
                  </li>
                </ul>
              </div>
              <div class="change-category changed">
                <h4>变更</h4>
                <ul class="change-list">
                  <li>
                    <strong>Deno 2.7+ 基线</strong>：主构建、docs 构建和 GitHub Pages workflow 回到
                    Deno-first，不再依赖 npm/npx 主流程。
                  </li>
                  <li>
                    <strong>Roadmap 与架构文档重整</strong>：v0.5 到 v1.0 的 DSD Renderer、Island
                    Upgrade、Serverless、SSG/ISR、.less compiler 路线重新分层。
                  </li>
                  <li>
                    <strong>版本号</strong>：@lessjs/core 升至 0.5.0-alpha.4，@lessjs/ui 升至
                    0.4.6，@lessjs/adapter-lit 升至 0.1.4。
                  </li>
                </ul>
              </div>
              <div class="change-category fixed">
                <h4>修复</h4>
                <ul class="change-list">
                  <li>
                    <strong>Package island default export warning</strong>：SSR entry 不再假设 package
                    island 暴露 default export，@lessjs/ui 副作用注册模式不再触发 Vite/Rolldown warning。
                  </li>
                  <li>
                    <strong>CI package island 解析</strong>：docs Vite config 显式解析 @lessjs/ui 子路径，CI
                    不再依赖本地 node_modules junction。
                  </li>
                  <li>
                    <strong>Docs navigation</strong>：less-layout 默认 sidebar 和 header 补齐 Decisions /
                    ADR 入口，文档站可直接发现架构决策记录。
                  </li>
                  <li>
                    <strong>Phase 2/3 工作目录</strong>：build:client 和 build:ssg 从 docs 目录读取 .less
                    metadata，build:all 不再依赖残留产物。
                  </li>
                </ul>
              </div>
            </div>

            <h2>
              v0.5.0-alpha.1 — 架构审计与精准修复 <span
                style="font-size:0.75rem;color:var(--less-text-muted);font-weight:400"
              >2026-05-02</span>
            </h2>

            <h3>修复</h3>
            <ul>
              <li>
                <strong>CSS 注入修复：</strong> extractLitStyles() 错误假设 Lit 3.x CSSResult 有 strings
                属性，实际只有 cssText。修复为直接使用 cssText，删除 42 行无用代码。<code
                >packages/kiss-adapter-lit/src/ssr.ts</code>
              </li>
              <li>
                <strong>Island upgrade 修复：</strong> api-consumer 在父 DSD shadow DOM
                内升级时，connectedCallback 中同步调用 _fetchStatus() 导致 LitElement
                更新管线竞态卡死。修复为 updateComplete.then()。<code
                >docs/app/islands/api-consumer.ts</code>
              </li>
            </ul>

            <h3>改进</h3>
            <ul>
              <li>
                <strong>全量架构审计：</strong> 3 agent 深度扫描 13,000+ 行代码，发现 P0-5 项、P1-9 项、P2-7
                项
              </li>
              <li>
                <strong>配置精简：</strong> 删除 jsr.json（冗余）+ 不必要 package.json，统一为单一 deno.json
                配置源
              </li>
              <li>
                <strong>10 条设计原则确立：</strong> 新增 Lit Update Safety、Adapter Test Coverage、Error
                Visibility、Island Lazy by Default、CSS Single Source、One Config File
              </li>
              <li><strong>版本号对齐：</strong> 所有 5 个包的 deno.json 版本统一</li>
            </ul>

            <h3>审计发现</h3>
            <ul>
              <li>kiss-adapter-lit：0 测试（两个 Bug 都出在这里）</li>
              <li>escapeHtml 在 3 处重复编写，编码还不同（&#x27; vs &#39;）</li>
              <li>所有 9 个 Island 全 eager 加载 → 每页完整全局 island entry → 需要页面级 manifest</li>
              <li>旧 Lit SSR client 路线仍在依赖/术语中残留（v0.5.0 声称已移除）</li>
              <li>renderNestedDsd() 是空函数 stub</li>
            </ul>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.5.0-alpha.0</span>
                <span class="version-date">2026-05-02</span>
              </div>
              <div class="change-category added">
                <h4>架构精简</h4>
                <ul class="change-list">
                  <li>
                    <strong>@lessjs/core 零框架运行时</strong>：KissElement 废弃，Lit re-export 移除，core
                    成为纯构建/SSR 基础设施
                  </li>
                  <li>
                    <strong>@lessjs/rpc 原生化</strong>：移除 Lit peer dep，纯 fetch + AbortController
                  </li>
                  <li><strong>OpenProps 设计系统</strong>：替换硬编码 hex，CSS 变量穿透 Shadow DOM</li>
                  <li><strong>Vite 8</strong>：从 Vite 6 升级到 Vite 8.0.10</li>
                  <li><strong>单 deno.json</strong>：删除 docs/deno.json，vendor 模式管理依赖</li>
                </ul>
              </div>
            </div>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.4.0</span>
                <span class="version-date">2026-04-30</span>
              </div>

              <div class="change-category added">
                <h4>新增</h4>
                <ul class="change-list">
                  <li>
                    <strong>Serverless API CI 部署</strong>：less-demo-api.sisyphuszheng.deno.net
                    生产在线，deploy-api.yml 自动化（CORS 修复、平台迁移 deployctl→deno deploy）
                  </li>
                  <li>
                    <strong>less-hero-ping 组件</strong>：可配置 API 的 ping Island，🟢/🔴 状态点。提取到
                    @lessjs/ui v0.4.0
                  </li>
                  <li>
                    <strong>首页全中文</strong>：8 段布局、响应式 clamp()/%/rem、四框架比较表、三阶段 Quick
                    start
                  </li>
                  <li><strong>Blog 系统</strong>：v0.4.0 发布文 + kiss-compiler 设计决策</li>
                  <li><strong>路線图</strong>：v0.5.0 → v1.0.0 六阶段规划</li>
                </ul>
              </div>

              <div class="change-category changed">
                <h4>变更</h4>
                <ul class="change-list">
                  <li>
                    <strong>Service Worker 策略重写</strong>：PRECACHE 删除，HTML 用
                    networkFirst（实时更新），动态缓存名，skipWaiting +
                    clients.claim。根因定位：切回首页变旧版是 SW 缓存，不是 CDN
                  </li>
                  <li><strong>全站 1px → 0.5px 统一</strong>：17 文件、40+ 处边框</li>
                  <li>
                    <strong>全站非 Hero 颜色 → CSS
                      变量</strong>：--less-text-primary/secondary/tertiary/muted，--less-border，--less-bg-surface
                    等
                  </li>
                  <li>
                    <strong>less-layout 响应式</strong>：sidebar 240px → clamp(200px, 20vw, 280px)，header
                    max-width CSS 变量化
                  </li>
                  <li>
                    <strong>首页布局对齐 Guide</strong>：内容区 720px，Hero min-height、hero-inner 居中
                  </li>
                  <li>
                    <strong>README 精简 80%</strong>：JSR shields.io badges（显式版本号），诚实 JS
                    大小（~400B 基础设施，零框架 JS）
                  </li>
                </ul>
              </div>

              <div class="change-category fixed">
                <h4>修复</h4>
                <ul class="change-list">
                  <li>
                    <strong>Upgrade race</strong>：嵌套在父 Shadow DOM 内的 Island 双渲染问题 — _renderer.ts
                    剥离 defer-hydration
                  </li>
                  <li><strong>Hero 文字可见度</strong>：#555→#999（hero-desc），#444→#777（hero-tech）</li>
                  <li>
                    <strong>页面组件事件不生效</strong>：docs-home 的 @click 在客户端不工作 — 提取为独立
                    Island
                  </li>
                  <li><strong>less-hero-ping 类型错误</strong>：static override 顺序、catch e:unknow</li>
                  <li>
                    <strong>Quick start 命令错误</strong>：npm create@lessjs/app → deno run -A
                    jsr:@lessjs/create
                  </li>
                  <li><strong>API 版本 0.3.6 → 0.4.0</strong></li>
                </ul>
              </div>
            </div>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.3.4</span>
                <span class="version-date">2026-04-30</span>
              </div>

              <div class="change-category added">
                <h4>新增</h4>
                <ul class="change-list">
                  <li>
                    <strong>scanIslands 递归扫描</strong>：支持 app/islands/posts/index.ts 等子目录结构
                  </li>
                  <li><strong>CI 并行化</strong>：test.yml 拆分为 typecheck + 4 个并行 test job</li>
                  <li><strong>CI 缓存</strong>：所有 job 添加 actions/cache，减少依赖安装时间</li>
                  <li>移动端侧边栏 nav link 点击自动关闭（@lessjs/ui 文档站）</li>
                </ul>
              </div>

              <div class="change-category changed">
                <h4>变更</h4>
                <ul class="change-list">
                  <li>
                    <strong>三阶段构建管线文档化</strong>：架构文档插件表更新为 v0.3.0
                    实际插件列表，构建生命周期从 closeBundle 嵌套 Vite 改为三阶段 CLI 描述
                  </li>
                  <li>
                    <strong>deno-version 锁定</strong>：所有 workflow 从 v2.x 改为 "2"，防止 Deno 3.0
                    意外破坏构建
                  </li>
                  <li>
                    <strong>lessDesignTokens 导出 tokens 子路径</strong>：@lessjs/ui/tokens/colors, effects,
                    spacing, typography 独立导出
                  </li>
                  <li>
                    <strong>kiss-error CSS 变量</strong>：组件错误状态统一使用可配置的 --less-error 变量
                  </li>
                  <li>
                    <strong>less-layout 可配置 header 高度</strong>：56px 硬编码替换为
                    --less-layout-header-height CSS 变量
                  </li>
                  <li>README 包版本号更新至 0.3.2 / 0.2.3</li>
                  <li>README coverage badge 替换为 CI badge</li>
                  <li>@lessjs/ui-plugin 的 cdn:false 配置项 JSDoc 修正：不再误导性地说"使用 npm 替代"</li>
                </ul>
              </div>

              <div class="change-category fixed">
                <h4>修复</h4>
                <ul class="change-list">
                  <li>
                    <strong>主题切换按钮点击无响应（v0.2.x 历史问题）</strong>：less-theme-toggle 在 Shadow
                    DOM 中事件的 composedPath() 未正确穿透，导致点击事件被吞；data-theme
                    未传播到所有嵌套组件的 host 元素。根因：旧 Lit SSR client 路线要求客户端补丁先于
                    customElements.define() 执行，而当时的执行顺序没有保证
                  </li>
                  <li>
                    <strong>Island 计数器重复渲染（v0.2.x 历史问题）</strong>：静态 import 导致
                    customElements.define() 在旧客户端补丁前运行，Lit 对已定义的元素做 DSD
                    接管时先全量渲染再 patch，造成两次渲染。修复：改为动态 import() 保证补丁先执行
                  </li>
                  <li>
                    <strong>Island chunk 404</strong>：build-client.ts 未设置 base='/client/'，Vite 生成的
                    __vite__mapDeps 指向 /islands/*.js 而非 /client/islands/*.js
                  </li>
                  <li>
                    <strong>DSD polyfill 报错</strong>：template-shadowroot document.write() polyfill 在 ESM
                    环境下报 "Cannot use import statement outside module"，移除（现代浏览器已原生支持 DSD）
                  </li>
                  <li>
                    <strong>P0 — less-input 显示 "undefined" 字符串</strong>：.value="&#36;{this.value ??
                    ''}"，避免未设置值时显示文本 "undefined"
                  </li>
                  <li>
                    <strong>P0 — @lessjs/core 缺少 CLI exports</strong>：deno.json 和 jsr.json 未导出
                    cli/build-client 和 cli/build-ssg，导致 create-kiss 脚手架创建的项目无法运行 deno task
                    build:client/build:ssg
                  </li>
                  <li>
                    <strong>P0 — dist/tokens/colors.js 缺失</strong>：deno.json
                    已声明导出但构建产出中不存在（build 重新执行后修复）
                  </li>
                  <li>
                    <strong>P0 — SSG 构建崩溃（globalThis.module 删早）</strong>：CJS polyfill 在
                    ssrLoadModule 被删除，导致 node-domexception 报 ReferenceError
                  </li>
                  <li>
                    <strong>P1 — 暗色模式阴影不可见</strong>：effects.ts 中 rgba(0,0,0,...)
                    阴影在黑色背景上不可见，添加 [data-theme="dark"] 亮色阴影变体
                  </li>
                  <li>
                    <strong>P1 — less-button href/target 渲染 "undefined"</strong>：href=&#36;{hrefAttr} /
                    target=&#36;{this.target} 在未设置时渲染字面量 "undefined"，改用 nothing sentinel
                  </li>
                  <li>
                    <strong>P1 — less-button 每次 render 创建新箭头函数</strong>：disabled 时的 @click
                    内联箭头函数提取为类方法 _preventClick
                  </li>
                  <li>
                    <strong>P1 — less-input 错误状态 ARIA 默认值</strong>：aria-invalid="false" /
                    aria-errormessage="" 始终存在，改用 nothing sentinel
                  </li>
                  <li>
                    <strong>P1 — less-code-block setTimeout 无清理</strong>：添加 _copyTimer +
                    disconnectedCallback 清除超时
                  </li>
                  <li>
                    <strong>P1 — colors.ts 注释颠倒</strong>：lessDarkColors / lessLightColors 的 JSDoc
                    Light/Dark 标签互换
                  </li>
                  <li>
                    <strong>P1 — kiss-rpc 重试延迟不响应 abort</strong>：await new Promise(setTimeout)
                    不监听 signal.aborted，改为 race 模式
                  </li>
                  <li>
                    <strong>P1 — less-theme-toggle 无限递归</strong>：_propagateTheme 无递归深度限制，添加
                    depth 参数 + 最大 10 层
                  </li>
                  <li>
                    <strong>P2 — vite-plugin-dts 隐式依赖</strong>：@lessjs/rpc 的 devDependencies 中包含
                    vite-plugin-dts，但 @lessjs/core 也使用但未声明
                  </li>
                  <li>
                    <strong>P2 — build-ssg.ts 全局污染未清理</strong>：CJS
                    polyfill（globalThis.module/exports）用完未 delete
                  </li>
                  <li>
                    <strong>P2 — ssg-smoke 测试 silent pass</strong>：7 个测试在无构建产出时 return
                    而非跳过，改为 Deno.test({ ignore })
                  </li>
                  <li>
                    <strong>P0/P1 — 8 个 assertEquals(true, true) 僵尸断言</strong>：替换为有意义断言或移除
                  </li>
                  <li>
                    <strong>types.ts JSDoc 错误</strong>：packageIslands 注释说
                    '@lessjs/ui/islands'，实际实现是 import(pkg).islands
                  </li>
                  <li>
                    <strong>context.ts decodeURIComponent 无保护</strong>：遇畸形编码抛 URIError，添加
                    try-catch 回退
                  </li>
                  <li><strong>RpcController.hostConnected() 死代码</strong>：空方法 + 对应测试一并移除</li>
                </ul>
              </div>
            </div>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.3.0</span>
                <span class="version-date">2026-04-29</span>
              </div>

              <div class="change-category added">
                <h4>新增</h4>
                <ul class="change-list">
                  <li>
                    <strong>Package Islands 自动检测</strong>：通过 packageIslands 配置自动扫描并注册来自
                    npm/JSR 包的 Islands
                  </li>
                  <li>
                    <strong>less-theme-toggle Island</strong>：Dark/Light 主题切换组件，从 less-layout
                    中提取为独立 Island（DSD + upgrade）
                  </li>
                  <li>
                    <strong>KissBuildContext 架构重构</strong>：替代闭包共享可变状态，提升构建管道的可测试性
                  </li>
                  <li>
                    <strong>EntryDescriptor + renderEntry 模板化</strong>：替代 hono-entry.ts 的字符串拼接
                  </li>
                  <li>Vite manifest 集成：build.ts 使用 build.manifest:true 生成客户端入口映射</li>
                </ul>
              </div>

              <div class="change-category changed">
                <h4>变更</h4>
                <ul class="change-list">
                  <li>
                    <strong>less-layout 简化为纯静态组件</strong>：移除 _isLight 属性、localStorage
                    读取、_handleThemeToggle 方法
                  </li>
                  <li>L2 全局主题切换脚本已删除：由 less-theme-toggle Island upgrade 替代</li>
                  <li>客户端构建自动化生成包内 Island 导入和注册代码</li>
                  <li>
                    SSG post-processing 使用 insertBeforeBodyClose/insertAfterHead 辅助函数，替代 naive
                    string replace
                  </li>
                </ul>
              </div>

              <div class="change-category fixed">
                <h4>修复</h4>
                <ul class="change-list">
                  <li>Island chunk 检测从 grep JS 文件内容改为读取 Rollup manifest（确定性、无误报）</li>
                  <li>HTML 插入操作增强鲁棒性：处理标签属性、大小写差异、空白变体</li>
                </ul>
              </div>
            </div>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.2.0</span>
                <span class="version-date">2026-04-27</span>
              </div>

              <div class="change-category added">
                <h4>新增</h4>
                <ul class="change-list">
                  <li>
                    <strong>Package Islands 自动检测</strong>：自动检测并注册来自 npm/JSR 包的 Islands
                  </li>
                  <li>
                    <code>packageIslands</code> configuration option to specify which packages to scan
                  </li>
                  <li>
                    <code>scanPackageIslands()</code> function to dynamically import packages and read
                    <code>islands</code> export
                  </li>
                  <li>
                    <code>less-theme-toggle</code> Island for theme switching (Dark/Light)
                  </li>
                  <li>
                    Package Island metadata type: <code>PackageIslandMeta</code>
                  </li>
                </ul>
              </div>

              <div class="change-category changed">
                <h4>变更</h4>
                <ul class="change-list">
                  <li>
                    <strong>破坏性变更</strong>：<code>less-layout</code> 主题切换逻辑已移除 — 请使用
                    <code>less-theme-toggle</code> Island
                  </li>
                  <li>
                    <code>less-layout</code> simplified to static component (no client-side state)
                  </li>
                  <li>
                    L2 theme toggle script removed (replaced by Island upgrade)
                  </li>
                  <li>
                    Client build now auto-generates import and registration code for package Islands
                  </li>
                </ul>
              </div>

              <div class="change-category fixed">
                <h4>修复</h4>
                <ul class="change-list">
                  <li>主题切换现在使用正确的 Island upgrade (DSD + 客户端状态)</li>
                </ul>
              </div>
            </div>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.1.7</span>
                <span class="version-date">2026-04-27</span>
              </div>

              <div class="change-category added">
                <h4>新增</h4>
                <ul class="change-list">
                  <li>Logger 模块支持 <code>LessJS_LOG_LEVEL</code> 环境变量</li>
                  <li>
                    @lessjs/ui 组件库：less-button, less-card, less-input, less-code-block, less-layout
                  </li>
                  <li>design-tokens CSS 自定义属性（瑞士国际主义风格）</li>
                  <li>examples/hello 最小示例：演示 LessJS 基础</li>
                  <li>文档站 dogfooding：/ui 页面使用真实 LessJS UI 组件</li>
                  <li>SSR 兼容性文档（/guide/ssg）</li>
                </ul>
              </div>

              <div class="change-category changed">
                <h4>变更</h4>
                <ul class="change-list">
                  <li>@lessjs/ui 版本升级至 0.1.4</li>
                  <li>文档站现在导入 @lessjs/ui 组件</li>
                  <li>迁移所有示例到 static properties + customElements.define() 模式</li>
                  <li>移除 packages/kiss-ui/deno.json 中的 experimentalDecorators 配置</li>
                </ul>
              </div>
            </div>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.1.6</span>
                <span class="version-date">2026-04-26</span>
              </div>

              <div class="change-category added">
                <h4>新增</h4>
                <ul class="change-list">
                  <li>纯黑白色设计系统 + 主题切换</li>
                  <li>/ui 设计系统展示页面</li>
                  <li>移动端响应式侧边栏 + 汉堡菜单</li>
                  <li>CSS :has() 选择器实现侧边栏切换（零 JS）</li>
                </ul>
              </div>

              <div class="change-category changed">
                <h4>变更</h4>
                <ul class="change-list">
                  <li>合并页面样式（pageStyles）— 消除 840 行重复 CSS</li>
                  <li>移除页面样式中所有 !important hack</li>
                  <li>侧边栏现在使用滑入动画 + 背景模糊</li>
                </ul>
              </div>

              <div class="change-category fixed">
                <h4>修复</h4>
                <ul class="change-list">
                  <li>点击背景现在可以关闭侧边栏（L2 脚本）</li>
                  <li>移动端响应式布局改进</li>
                </ul>
              </div>
            </div>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.1.5</span>
                <span class="version-date">2026-04-20</span>
              </div>

              <div class="change-category added">
                <h4>新增</h4>
                <ul class="change-list">
                  <li>LessJS 架构文档（K·I·S·S 四约束）</li>
                  <li>DSD（声明式 Shadow DOM）输出支持</li>
                  <li>Jamstack 对齐文档</li>
                </ul>
              </div>

              <div class="change-category changed">
                <h4>变更</h4>
                <ul class="change-list">
                  <li>从 DIA 重新品牌为 LessJS Architecture</li>
                  <li>更新 README 包含双重含义（理念 + 架构）</li>
                </ul>
              </div>
            </div>

            <div class="version-section">
              <div class="version-header">
                <span class="version-number">0.1.4</span>
                <span class="version-date">2026-04-15</span>
              </div>

              <div class="change-category added">
                <h4>新增</h4>
                <ul class="change-list">
                  <li>inject 选项：自定义样式表/脚本注入</li>
                  <li>API Routes 部署文档</li>
                </ul>
              </div>

              <div class="change-category changed">
                <h4>变更</h4>
                <ul class="change-list">
                  <li>标记 ui 选项已弃用（请使用 inject）</li>
                </ul>
              </div>

              <div class="change-category fixed">
                <h4>修复</h4>
                <ul class="change-list">
                  <li>RPC call() 现在抛出 RpcError 而不是返回 null</li>
                </ul>
              </div>
            </div>

            <h2>上游依赖 / 兼容性问题</h2>
            <table class="version-table">
              <thead>
                <tr>
                  <th>问题</th>
                  <th>根源</th>
                  <th>影响</th>
                  <th>缓解方案</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Deno fmt dprint-core panic</td>
                  <td>dprint-core 0.67.4 在处理嵌套 Lit 模板字面量（含 HTML 实体 &lt; 等）时 panic</td>
                  <td>docs/ 中 Lit tagged template 无法格式化</td>
                  <td>CI 中 fmt --check 跳过 docs/，仅检查 packages/</td>
                </tr>
                <tr>
                  <td>node-domexception CJS 兼容</td>
                  <td>node-domexception@1.0.0 使用 module.exports (CJS)，Deno 的 ESM 运行时无法直接加载</td>
                  <td>SSG 构建失败：ReferenceError: module is not defined</td>
                  <td>globalThis.module / exports polyfill，用完后 finally 清理</td>
                </tr>
                <tr>
                  <td>parse5 / entities 版本锁</td>
                  <td>entities@6 与 parse5@7 的兼容性要求，需同步升级</td>
                  <td>依赖安装失败</td>
                  <td>升级 entities 到 ^6</td>
                </tr>
                <tr>
                  <td>旧 Lit SSR client 时序</td>
                  <td>
                    当时的 Lit SSR client 补丁必须在 customElements.define()
                    之前执行，否则已注册的元素会全量渲染再 patch（双重渲染）
                  </td>
                  <td>Island 组件双重渲染 / DSD 接管不匹配</td>
                  <td>动态 import() 确保旧客户端补丁先于任何组件注册执行</td>
                </tr>
                <tr>
                  <td>@lessjs/core → lit resolve alias</td>
                  <td>
                    Vite lib mode 构建中将 @lessjs/core 映射为 lit，使编译产物直接依赖 lit 而非 @lessjs/core
                  </td>
                  <td>@lessjs/ui 的 dist 消费者无需安装 @lessjs/core</td>
                  <td>resolve.alias + build.ts serializeAlias 传递到 CLI 构建</td>
                </tr>
                <tr>
                  <td>Window CRLF vs Unix LF</td>
                  <td>Windows Git 自动转换行尾导致 deno fmt CI 失败</td>
                  <td>多平台协作者间格式冲突</td>
                  <td>.gitattributes eol=lf 统一行尾</td>
                </tr>
                <tr>
                  <td>tsup → Vite lib mode</td>
                  <td>tsup 不支持 Deno 的 node: 前缀保留</td>
                  <td>Node 原生模块导入失败</td>
                  <td>迁移至 Vite lib format: 'es'，天然保留 node: 前缀</td>
                </tr>
              </tbody>
            </table>

            <h2>版本历史</h2>
            <table class="version-table">
              <thead>
                <tr>
                  <th>版本</th>
                  <th>日期</th>
                  <th>亮点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.3.4</td>
                  <td>2026-04-30</td>
                  <td>Code audit fixes + upstream compat docs + version bump + release</td>
                </tr>
                <tr>
                  <td>0.3.0</td>
                  <td>2026-04-29</td>
                  <td>
                    Package Islands auto-detection + less-theme-toggle Island + build pipeline refactor
                  </td>
                </tr>
                <tr>
                  <td>0.2.0</td>
                  <td>2026-04-27</td>
                  <td>Package Islands auto-detection + less-theme-toggle Island</td>
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
                  <td>LessJS Architecture branding</td>
                </tr>
                <tr>
                  <td>0.1.4</td>
                  <td>2026-04-15</td>
                  <td>inject option + API Routes docs</td>
                </tr>
                <tr>
                  <td>0.1.3</td>
                  <td>2026-04-10</td>
                  <td>@lessjs/rpc + @lessjs/ui</td>
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
              <a href="/roadmap" class="nav-link">&larr; 开发计划</a>
              <a href="/guide/getting-started" class="nav-link">快速上手 &rarr;</a>
            </div>
          </div>
        </less-layout>
      `}};customElements.define(`page-changelog`,Rn);var zn=t({__island:()=>!0,__tagName:()=>Hn,default:()=>Vn,tagName:()=>Bn}),Bn=`code-block`,Vn=class extends K{static styles=k`
    :host {
      display: block;
      position: relative;
    }

    ::slotted(pre) {
      margin: 0;
      padding: 1.25rem;
      background: var(--less-code-bg);
      border: 0.5px solid var(--less-code-border);
      border-radius: 2px;
      overflow-x: auto;
      font-family: "SF Mono", "Fira Code", "Fira Mono", Menlo, Consolas, monospace;
      font-size: 0.8125rem;
      line-height: 1.6;
      color: var(--less-text-secondary);
      scrollbar-width: thin;
      scrollbar-color: var(--less-scrollbar-thumb) transparent;
    }

    .copy-btn {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: var(--less-bg-elevated);
      color: var(--less-text-tertiary);
      border: 0.5px solid var(--less-border);
      padding: 0.25rem 0.625rem;
      font-size: 0.6875rem;
      font-family: inherit;
      cursor: pointer;
      border-radius: 2px;
      transition: color 0.15s, border-color 0.15s;
      z-index: 1;
    }

    .copy-btn:hover {
      color: var(--less-text-secondary);
      border-color: var(--less-border-hover);
    }

    .copy-btn.copied {
      color: var(--less-text-primary);
      border-color: var(--less-border-hover);
    }

    .copy-btn.failed {
      color: var(--less-error, #e55);
      border-color: var(--less-error, #e55);
    }
  `;static properties={_copyState:{state:!0}};constructor(){super(),this._copyState=`idle`}render(){return B`
      <slot></slot>
      <button
        class="copy-btn ${this._copyState===`copied`?`copied`:``} ${this._copyState===`failed`?`failed`:``}"
        @click="${()=>this._copy()}"
      >
        ${this._copyState===`copied`?`✓ Copied!`:this._copyState===`failed`?`✗ Failed`:`Copy`}
      </button>
    `}async _copy(){try{let e=this.textContent||``;await navigator.clipboard.writeText(e),this._copyState=`copied`,setTimeout(()=>{this._copyState=`idle`},2e3)}catch{this._copyState=`failed`,setTimeout(()=>{this._copyState=`idle`},2e3)}}};try{customElements.define(Bn,Vn)}catch{}var Hn=`code-block`,Un=class extends K{static styles=[q,k`
      .layer-diagram {
        padding: 1.25rem;
        background: var(--less-bg-surface);
        /* 0.5px: reduced to match less-ui spec */
        border: 0.5px solid var(--less-border);
        border-radius: 6px;
        margin: 1.5rem 0;
        font-size: 0.8125rem;
        line-height: 1.8;
        font-family: "SF Mono", "Fira Code", monospace;
        white-space: pre;
        overflow-x: auto;
        color: var(--less-text-secondary);
      }
      .commit-types {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.75rem;
        margin: 1rem 0;
      }
      .commit-type {
        padding: 0.75rem 1rem;
        background: var(--less-bg-surface);
        /* 0.5px: reduced to match less-ui spec */
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        font-size: 0.875rem;
      }
      .commit-type code {
        color: var(--less-accent);
        font-weight: 600;
      }
    `];render(){return B`
      <less-layout currentPath="/contributing">
        <div class="container">
          <h1>Contributing to LessJS</h1>
          <p class="subtitle">感谢你对 LessJS 框架的兴趣！</p>

          <h2>开发环境设置</h2>
          <code-block
          ><pre>
            <code># 克隆仓库
            git clone https://github.com/lessjs-run/LessJS.git
            cd lessjs

            # 安装依赖
            deno install

            # 运行测试
            deno task test

            # 启动文档站开发服务器
            deno task docs:dev</code></pre></code-block>

            <h2>Deno-first 工具链</h2>
            <p>
              LessJS 的 core CLI、SSG、Serverless API、测试、发布和文档站任务都以 Deno 2.7+
              为默认运行环境。Vite 8 通过 <code>deno run -A npm:vite</code> 执行，不需要
              <code>npm</code> / <code>npx</code> 作为仓库主流程。
            </p>
            <p>
              如果遇到 <code>node:util.parseEnv</code> 兼容缺口，优先运行
              <code>deno upgrade</code>。当前验证基线是 Deno 2.7.14。
            </p>

            <h2>项目结构</h2>
            <code-block
            ><pre>
              <code>lessjs/
              ├── packages/
              │   ├── core/       # 核心 Vite 插件
              │   ├── rpc/        # RPC 客户端控制器
              │   ├── ui/         # UI 插件
              │   └── adapter-lit/ # Lit adapter
              ├── docs/           # 文档站（自举）
              └── scripts/        # 工具脚本</code></pre></code-block>

              <h2>开发规范</h2>

              <h3>代码风格</h3>
              <ul>
                <li>使用 Deno 内置格式化：<code>deno fmt</code></li>
                <li>使用 Deno 内置 lint：<code>deno lint</code></li>
                <li>遵循 LessJS Architecture 四约束（K·I·S·S）</li>
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
                IntersectionObserver L3 Hono/Vite/Lit — 路由、构建、组件封装 L4 自研代码 — Island Island
                upgrade、RPC、插件逻辑 跳过任何一层 = 违反 LessJS 架构约束
              </div>

              <h3>测试</h3>
              <code-block
              ><pre>
                <code># 运行所有测试
                deno task test

                # 监听模式
                deno task test:watch

                # 类型检查
                deno task typecheck</code></pre></code-block>

                <h2>发布流程</h2>
                <ol>
                  <li>更新版本号（packages/*/package.json）</li>
                  <li>更新 changelog（docs/app/routes/changelog.ts）</li>
                  <li>运行测试：<code>deno task test</code></li>
                  <li>发布到 JSR：<code>deno task publish</code></li>
                  <li>创建 GitHub Release</li>
                </ol>

                <h2>架构决策记录（ADR）</h2>
                <p>重大架构变更需要创建 ADR 文档：</p>
                <code-block
                ><pre>
                  <code># ADR-XXX: 标题

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
                      GitHub Issues:
                      <a href="https://github.com/lessjs-run/LessJS/issues" target="_blank"
                      >https://github.com/lessjs-run/LessJS/issues</a>
                    </li>
                    <li>提交前请搜索已有 issue</li>
                  </ul>

                  <div class="nav-row">
                    <a href="/guide/architecture" class="nav-link">&larr; Architecture</a>
                    <a href="/roadmap" class="nav-link">Roadmap &rarr;</a>
                  </div>
                </div>
              </less-layout>
            `}};customElements.define(`page-contributing`,Un);var Y=[{id:`0001`,title:`Keep @hono/vite-dev-server`,status:`Kept`,path:`/decisions/0001-keep-hono-vite-dev-server`,summary:`Retain the official Hono x Vite dev integration because it has zero production cost.`,source:`# @hono/vite-dev-server Evaluation

## Status: ✅ **KEPT** — Recommended retention

## What It Is

Official Hono × Vite development integration plugin.
Provides:

- **Middleware Mode**: Vite handles static assets; Hono handles API/SSR routes via Vite's \`server.middlewareMode\`
- **HMR (Hot Module Replacement)**: Instant updates during development without full page reloads
- **Entry Point Injection**: Auto-injects client-side \`<script>\` for module reloading
- **SSR Streaming**: Streams SSR responses through Vite dev server

## Current Usage

\`\`\`
packages/less-core/src/index.ts  →  import honoDevServer from '@hono/vite-dev-server'
                                   →  honoDevServer({ entry: VIRTUAL_ENTRY_ID, injectClientScript: true })
packages/less-core/vite.config.build.ts →  external: ['@hono/vite-dev-server']  (dev-only!)
\`\`\`

## Why It Exists (Not Removed)

### The Alternative: Manual Implementation

To replace \`@hono/vite-dev-server\`, LessJS would need a custom Vite plugin that:

| Feature                        |  Lines of Code | Complexity | Maintenance Risk                         |
| ------------------------------ | -------------: | ---------: | ---------------------------------------- |
| Middleware mode setup          |            ~20 |     Medium | Vite API changes between versions        |
| HMR client injection           |            ~15 |       High | Must track Vite's HMR protocol changes   |
| SSR transform pipeline         |            ~30 |  Very High | Must handle ESM/CJS interop, source maps |
| Request forwarding (Vite→Hono) |            ~25 |     Medium | Edge cases with streaming, headers       |
| Error overlay integration      |            ~10 |        Low | Nice-to-have but expected                |
| **Total**                      | **~100 lines** |   **High** | **Ongoing**                              |

### Cost-Benefit Analysis

| Factor              |        Keep Plugin         |   Remove & Reimplement    |
| ------------------- | :------------------------: | :-----------------------: |
| Bundle size impact  |      **0** (dev-only)      |           **0**           |
| Dependency count    |         +1 npm dep         |        -1 npm dep         |
| Code to maintain    |      ~5 lines (usage)      |     ~100 lines (impl)     |
| HMR reliability     | Battle-tested (Hono team)  |       Custom = bugs       |
| Vite version compat |   Maintained by authors    | We track breaking changes |
| DX quality          | Excellent (instant reload) |    Degraded or broken     |
| **Verdict**         |         **✅ Win**         |        **❌ Lose**        |

## Honest Counter-arguments (Why ANALYSIS Marked This P3)

1. **"One less dependency"** — Valid concern, BUT this dep is:
   - Dev-only (zero production footprint)
   - From Hono's own org (not a random package)
   - Already a transitive dep of \`hono\` ecosystem users likely have

2. **"Locks us to Hono"** — True, but LessJS _is_ a Hono framework.
   Replacing Hono would require rewriting everything regardless of this plugin.

3. **"Could break on Vite major bumps"** — True, but:
   - The Hono team maintains this plugin alongside their framework
   - Our alternative implementation would break just as often (or worse)

## Production Footprint: Zero

\`\`\`bash
# Build output analysis (vite.config.build.ts):
external: ['@hono/vite-dev-server']  # ← Never bundled into SSR/client chunks
\`\`\`

The plugin is only loaded when \`vite dev\` runs (command === 'serve').
In \`vite build\`, the import is tree-shaken and the package never touched.

## Conclusion

> **Keep @hono/vite-dev-server.** The tradeoff heavily favors retention:
> zero production cost vs. ~100 lines of custom maintenance code,
> battle-tested HMR vs. home-grown bugs, and official support vs.
> tracking Vite internal APIs across versions.
>
> If a future requirement forces removal (e.g., switching from Hono),
> the replacement cost is well-documented above (~100 lines).

---

_Evaluated: 2026-04-28 | Version reviewed: @hono/vite-dev-server@^0.25.3_
`},{id:`0002`,title:`.less Compiler`,status:`Draft`,path:`/decisions/0002-less-compiler-eliminate-lit`,summary:`Explore an optional compiler that emits vanilla Custom Elements without framework runtime.`,source:`# \`.less\` Compiler — Optional Zero-Framework Component Authoring

## Status

**DRAFT** — Proposed for v0.10.0 alpha, not a v0.5-v0.9 blocker.

## Context

LessJS currently uses \`lit\` for the docs site and UI package, while core is moving toward a
DSD-first renderer with framework adapters. Lit should remain usable, but it should not be the
long-term foundation of the framework contract. The current Lit route brings:

- Lit runtime cost for Lit-authored islands
- adapter complexity for server rendering and style extraction
- upgrade/hydration terminology drift between old Lit SSR and new DSD-first rendering
- SSR/DSD/upgrade paths that must stay in sync
- Deno fmt panics on tagged template literals with HTML entities (dprint-core bug)
- Unnecessary type complexity: \`noImplicitOverride\`, decorators, complex generics

## Proposal

Introduce \`.less\` files — a component format purpose-built for LessJS. A compiler transforms
\`.less\` files into vanilla Custom Elements at build time. The goal is zero framework runtime for
compiled components. Lit remains an adapter, not a forced dependency.

### \`.less\` file format

\`\`\`less
<!-- my-counter.less -->
<template>
  <button @click="decrement">−</button>
  <span>{count}</span>
  <button @click="increment">+</button>
</template>

<script>
  count = 0
  increment() { this.count++ }
  decrement() { this.count-- }
<\/script>

<style>
  :host { display: inline-flex; gap: 0.5rem; align-items: center; }
</style>
\`\`\`

### Compiler output

\`\`\`ts
// dist/assets/my-counter.js — vanilla Custom Element, 0 deps
const tpl = document.querySelector('#my-counter-template');
class MyCounter extends HTMLElement {
  #count = 0;
  #root = this.attachShadow({ mode: 'open' });
  get count() {
    return this.#count;
  }
  set count(v) {
    this.#count = v;
    this.#update();
  }
  #update() {
    this.#root.querySelector('span').textContent = this.#count;
  }
  connectedCallback() {
    this.#root.append(tpl.content.cloneNode(true));
    this.#root.querySelector('button:first-child')
      .onclick = () => this.count--;
    this.#root.querySelector('button:last-child')
      .onclick = () => this.count++;
  }
}
customElements.define('my-counter', MyCounter);
\`\`\`

### What the compiler eliminates

| Layer   | Before (Lit adapter)           | After (.less compiler)                 |
| ------- | ------------------------------ | -------------------------------------- |
| Runtime | Lit runtime for Lit components | 0kb framework runtime for compiled CEs |
| SSR     | adapter-mediated rendering     | LessJS DSD renderer / template strings |
| Upgrade | Custom Element upgrade         | Custom Element upgrade                 |
| Build   | esbuild + Lit semantics        | standard TS/JS output                  |
| Tests   | adapter tests required         | compiler fixture tests required        |

### SSG integration

The route scanner (route-scanner.ts) already maps \`app/routes/*.ts\` → URL paths. Extend it to also scan \`.less\` files:

- \`app/routes/blog/hello-world.less\` → \`/blog/hello-world\`
- \`app/routes/blog.less\` → \`/blog\`
- \`app/islands/my-counter.less\` → Island component

Page \`.less\` files render directly (template is the page). Island \`.less\` files get lazy chunk treatment like today's Lit islands.

### Backward compatibility

- \`vite.config.ts\` option: \`compiler: 'lit' | 'less' | 'auto'\` (auto = \`.less\` files use compiler, \`.ts\` files use Lit)
- Lit support retained as optional runtime throughout v0.x
- v0.10.0 introduces \`.less\` as alpha and optional
- v1.0 default remains an open decision; Lit compatibility must not be broken casually

## Consequences

**Positive:**

- Zero framework runtime cost for compiled components
- Fewer upgrade-order bugs because compiled components target the LessJS DSD model directly
- No upstream dependency issues (dprint, node-domexception, parse5)
- Simpler developer API: HTML + minimal script, no class boilerplate
- True tree-shaking: only used components produce code
- SSG becomes synchronous string concatenation

**Negative:**

- Not backward compatible with existing Lit code (migration needed)
- Custom compiler = custom bugs (parser edge cases, sourcemap complexity)
- HMR in dev mode needs special handling (fall back to Lit or implement compiler in watch mode)
- No access to Lit ecosystem components (unless bridge is provided)

## Open Questions

1. Dev mode: run compiler on save, or fall back to Lit runtime for HMR?
2. Islands in \`.less\` format — does the \`<script>\` get extracted as a lazy module?
3. Slot/projection semantics — full HTML spec compliance needed in template compiler?
4. SSR rendering — \`template.innerHTML\` is identical to client, but lifecycle hooks (connectedCallback) need SSG treatment
`},{id:`0003`,title:`PWA Support`,status:`Partially Implemented`,path:`/decisions/0003-pwa-support`,summary:`Use NetworkFirst for HTML/API and CacheFirst for assets instead of full HTML precache.`,source:`# PWA Support for LessJS SSG

## Status

**PARTIALLY IMPLEMENTED** - available through \`less({ pwa })\` metadata and the
official \`deno task build\` flow. The service worker strategy has changed from
the original full-precache design.

## Context

LessJS generates pure static HTML with Declarative Shadow DOM. This is the ideal
substrate for a Progressive Web App:

- All pages are pre-rendered HTML (no server needed)
- Assets are versioned hashes (perfect cache keys)
- API routes can live separately on serverless platforms
- Service worker should avoid stale HTML by using NetworkFirst for HTML/API and
  CacheFirst for hashed assets

## Proposal

Add a \`pwa\` option to the \`less()\` plugin that automatically generates:

1. \`manifest.json\` - Web App Manifest (name, icons, display, theme_color)
2. \`sw.js\` - Service Worker with NetworkFirst (HTML/API) + CacheFirst (assets)
3. HTML \`<head>\` injection - \`<link rel="manifest">\`, \`<meta
   name="theme-color">\`, \`<link rel="service-worker">\`

### API

\`\`\`ts
// vite.config.ts
export default defineConfig({
  plugins: [less({
    pwa: {
      name: 'My LessJS App',
      shortName: 'LessJS',
      themeColor: '#000000',
      backgroundColor: '#ffffff',
      icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
      // Current built-in strategy: NetworkFirst HTML/API, CacheFirst assets.
    },
  })],
});
\`\`\`

### Service Worker Strategy

\`\`\`js
// Generated sw.js (~40 lines)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  const isAsset = /\\.[a-z0-9]+$/i.test(url.pathname) && !url.pathname.includes('/api/');
  e.respondWith(isAsset ? cacheFirst(e.request) : networkFirst(e.request));
});
\`\`\`

### SSG Integration

Inside the SSG phase, after pages are rendered:

\`\`\`ts
if (options.pwa) {
  writeFileSync(join(outputDir, 'manifest.json'), generateManifest(options.pwa));
  writeFileSync(join(outputDir, 'sw.js'), generateSwScript(options.pwa));
  // inject manifest link + sw registration into all HTML files
  injectIntoHtml(outputDir, {
    head: \`<link rel="manifest" href="/manifest.json">\`,
    body: \`<script>navigator.serviceWorker?.register('/sw.js')<\/script>\`,
  });
}
\`\`\`

## Consequences

- **Positive**: Offline access, instant repeat visits, installable on mobile
- **Positive**: Minimal code (~100 lines total across plugin + generator + sw
  script)
- **Neutral**: Service worker scope limited to site root (no cross-site impact)
- **Negative**: Offline-first HTML is intentionally not provided by default;
  stale static pages are a worse default
- **Negative**: Cache invalidation needs a generated cache name; current
  implementation uses a build-time timestamp
`},{id:`0004`,title:`@lessjs/blog`,status:`Draft`,path:`/decisions/0004-blog-system`,summary:`Plan a standalone Markdown blog package after the serverless fullstack milestone.`,source:`# \`@lessjs/blog\` - Standalone Blog Package

## Status

**DRAFT** - proposed after v0.8.0 Serverless Fullstack. The ideal
zero-framework version can wait for \`.less\` compiler alpha.

## Context

LessJS currently has two hardcoded blog route pages (\`/blog/\` +
\`/blog/less-compiler\`) on its own docs site. These are hand-written custom
element pages, not a reusable system.

Users need a proper blog: drop in \`.md\` files, get automatic listing +
pagination + RSS + tags. Like VitePress's blog feature, but as a LessJS plugin.

## Constraints

The blog system should not require Lit. It should work first as a plain SSG
plugin, then gain \`.less\` compiler templates when the compiler exists:

- Post templates should be able to compile to vanilla Custom Elements when
  \`.less\` exists
- SSR must be synchronous string concatenation (\`template.innerHTML\`)
- No page-level client runtime for plain blog pages; interactive widgets remain
  islands
- The \`.less\` compiler is an optional future template backend, not a blocker
  for the first release

## Proposal

### \`@lessjs/blog\` package

A Vite plugin that:

1. **Scans** a user-defined directory for \`.md\` files with YAML frontmatter
2. **Generates** route entries at build time (like route-scanner does for \`.ts\`
   files)
3. **Renders** listing pages, post pages, tag pages, and RSS feed during SSG

### User experience

\`\`\`ts
// vite.config.ts
import { less } from '@lessjs/core';
import { lessBlog } from '@lessjs/blog';

export default defineConfig({
  plugins: [
    less(),
    lessBlog({
      dir: 'content/blog', // where your .md files live
      title: 'My Blog',
      postsPerPage: 10,
    }),
  ],
});
\`\`\`

\`\`\`md
# content/blog/hello-world.md

---
title: Hello World
date: 2026-05-01
tags: [lessjs, meta]
---

This is my first post.
\`\`\`

### Generated routes

| Route               | Content                                |
| ------------------- | -------------------------------------- |
| \`/blog/\`            | Post listing (paginated, newest first) |
| \`/blog/hello-world\` | Individual post (rendered from .md)    |
| \`/blog/page/2\`      | Page 2 of listing                      |
| \`/blog/tags/lessjs\` | Filter by tag                          |
| \`/blog/feed.xml\`    | RSS 2.0 / Atom feed                    |

### Plugin architecture

The \`lessBlog()\` plugin hooks into the LessJS build pipeline:

\`\`\`text
vite.config.ts
  -> lessBlog() reads content/blog/*.md
       extracts frontmatter -> metadata.json
       registers virtual routes
  -> deno task build
       Phase 1: Vite SSR build
       Phase 2: buildClient() (no island chunks needed for blog)
       Phase 3: buildSSG() renders /blog/* pages
            generates /feed.xml
  -> dist/
       blog/index.html
       blog/hello-world/index.html
       feed.xml
\`\`\`

### Post rendering

With the \`.less\` compiler:

\`\`\`less
<!-- blog post template (built into @lessjs/blog) -->
<template>
  <article>
    <h1>{post.title}</h1>
    <time datetime="{post.isoDate}">{post.displayDate}</time>
    <div class="content">{post.html}</div>
    <nav class="tags">{post.tags}</nav>
  </article>
</template>

<script>
  // post data injected at compile time by the plugin
  post = { title: "", html: "", tags: [], isoDate: "", displayDate: "" }
<\/script>

<style>
  .content :host { max-width: 720px; margin: 0 auto; }
  time { font-size: 0.75rem; color: var(--less-text-muted); }
</style>
\`\`\`

Without the \`.less\` compiler:

The same content can be rendered through the LessJS DSD renderer or a safe
server-side HTML template helper. It should not depend on Lit for plain Markdown
pages.

### MDX support (future)

The \`.md\` parser should support:

- **Basic**: Gray-matter frontmatter + marked/markdown-it
- **Extended (v2)**: MDX - embed Lit Components or \`.less\` components inline in
  markdown
- **Code blocks**: Syntax highlighting at build time (not client-side)

## Implementation order

1. v0.8.0 stabilizes route/action/serverless conventions
2. \`@lessjs/blog\` ships as a plain SSG plugin first
3. \`.less\` compiler support is added when v0.10.0 alpha is available
4. LessJS docs site eats its own dogfood and replaces the current hardcoded blog
   routes

## Open Questions

1. Markdown parser: \`marked\` (lightweight) vs \`markdown-it\` (plugin ecosystem)
   vs custom?
2. Should the blog template be customizable via
   \`lessBlog({ template: "my-template.less" })\`?
3. RSS vs Atom vs both?
4. Comments? (Disqus, utteranc.es, or leave it to the user)

## Consequences

- **Positive**: Users get a one-line blog setup, competitive with VitePress
- **Positive**: LessJS docs site can dogfood its own blog package
- **Positive**: Zero framework runtime for plain blog pages (with \`.less\`
  compiler)
- **Negative**: The ideal compiler-backed architecture comes later
- **Negative**: Markdown parsing at build time adds ~100ms to Phase 1
`}],Wn=class extends K{static styles=[q,k`
      .decision-list {
        display: grid;
        gap: 0.75rem;
        margin: 1.5rem 0 2rem;
      }
      .decision-link {
        display: block;
        padding: 1rem;
        border: 0.5px solid var(--less-border);
        border-radius: 6px;
        text-decoration: none;
        background: var(--less-bg-surface);
      }
      .decision-link:hover {
        border-color: var(--less-border-hover);
      }
      .decision-title {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        color: var(--less-text-primary);
        font-size: 0.9375rem;
        font-weight: 500;
      }
      .decision-status {
        color: var(--less-text-muted);
        font-size: 0.75rem;
        white-space: nowrap;
      }
      .decision-summary {
        margin-top: 0.5rem;
        color: var(--less-text-tertiary);
        font-size: 0.8125rem;
        line-height: 1.6;
      }
    `];render(){return B`
      <less-layout currentPath="/decisions">
        <div class="container">
          <h1>Architecture Decisions</h1>
          <p class="subtitle">
            Source-controlled ADRs from <span class="inline-code">docs/decisions</span>, rendered directly
            into the docs site.
          </p>

          <div class="decision-list">
            ${Y.map(e=>B`
                <a class="decision-link" href="${e.path}">
                  <div class="decision-title">
                    <span>${e.id}: ${e.title}</span>
                    <span class="decision-status">${e.status}</span>
                  </div>
                  <div class="decision-summary">${e.summary}</div>
                </a>
              `)}
          </div>

          <div class="nav-row">
            <a href="/guide/blog-system" class="nav-link">&larr; Blog System</a>
            <a href="/roadmap" class="nav-link">Roadmap &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-decisions-index`,Wn);function Gn(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Kn(e){return e.trim().replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim())}function qn(e){return/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(e)}function X(e){let t=Gn(e),n=[];return t=t.replace(/`([^`]+)`/g,(e,t)=>`@@CODE_SPAN_${n.push(`<code>${t}</code>`)-1}@@`),t=t.replace(/\*\*([^*]+)\*\*/g,`<strong>$1</strong>`),t=t.replace(/\*([^*]+)\*/g,`<em>$1</em>`),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(e,t,n)=>`<a href="${String(n).startsWith(`http`)?n:Gn(n)}">${t}</a>`),t.replace(/@@CODE_SPAN_(\d+)@@/g,(e,t)=>n[Number(t)]||``)}function Jn(e,t){let n=[],r=t;for(;r<e.length&&e[r].trim();){let t=e[r];if(/^#{1,6}\s+/.test(t)||/^[-*]\s+/.test(t)||/^\d+\.\s+/.test(t)||/^>\s?/.test(t)||/^```/.test(t)||t.includes(`|`)&&r+1<e.length&&qn(e[r+1]))break;n.push(t.trim()),r++}return{html:`<p>${X(n.join(` `))}</p>`,next:r}}function Yn(e){let t=e.replace(/\r\n/g,`
`).split(`
`),n=[],r=0;for(;r<t.length;){let e=t[r].trim();if(!e){r++;continue}let i=e.match(/^```(\w+)?/);if(i){let e=i[1]?` data-language="${Gn(i[1])}"`:``,a=[];for(r++;r<t.length&&!t[r].trim().startsWith("```");)a.push(t[r]),r++;r<t.length&&r++,n.push(`<pre${e}><code>${Gn(a.join(`
`))}</code></pre>`);continue}let a=e.match(/^(#{1,6})\s+(.*)$/);if(a){let e=Math.min(a[1].length,4);n.push(`<h${e}>${X(a[2])}</h${e}>`),r++;continue}if(/^---+$/.test(e)){n.push(`<hr>`),r++;continue}if(e.includes(`|`)&&r+1<t.length&&qn(t[r+1])){let i=Kn(e);r+=2;let a=[];for(;r<t.length&&t[r].trim().includes(`|`);)a.push(Kn(t[r])),r++;n.push(`<table><thead><tr>${i.map(e=>`<th>${X(e)}</th>`).join(``)}</tr></thead><tbody>${a.map(e=>`<tr>${e.map(e=>`<td>${X(e)}</td>`).join(``)}</tr>`).join(``)}</tbody></table>`);continue}if(/^[-*]\s+/.test(e)){let e=[];for(;r<t.length&&/^[-*]\s+/.test(t[r].trim());)e.push(`<li>${X(t[r].trim().replace(/^[-*]\s+/,``))}</li>`),r++;n.push(`<ul>${e.join(``)}</ul>`);continue}if(/^\d+\.\s+/.test(e)){let e=[];for(;r<t.length&&/^\d+\.\s+/.test(t[r].trim());)e.push(`<li>${X(t[r].trim().replace(/^\d+\.\s+/,``))}</li>`),r++;n.push(`<ol>${e.join(``)}</ol>`);continue}if(/^>\s?/.test(e)){let e=[];for(;r<t.length&&/^>\s?/.test(t[r].trim());)e.push(t[r].trim().replace(/^>\s?/,``)),r++;n.push(`<blockquote>${e.map(e=>`<p>${X(e)}</p>`).join(``)}</blockquote>`);continue}let o=Jn(t,r);n.push(o.html),r=o.next===r?r+1:o.next}return n.join(`
`)}var Xn=class extends K{static styles=[q,k`
      .decision-meta {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        margin: 0.75rem 0 2rem;
        color: var(--less-text-muted);
        font-size: 0.75rem;
      }
      .badge {
        border: 0.5px solid var(--less-border);
        border-radius: 3px;
        padding: 0.125rem 0.375rem;
        color: var(--less-text-secondary);
      }
      .markdown h1 {
        display: none;
      }
      .markdown h4 {
        margin: 1rem 0 0.5rem;
        color: var(--less-text-primary);
        font-size: 0.8125rem;
      }
      .markdown blockquote {
        margin: 1rem 0;
        padding: 0.75rem 1rem;
        border-left: 2px solid var(--less-border-hover);
        background: var(--less-bg-surface);
        color: var(--less-text-secondary);
      }
      .markdown hr {
        border: 0;
        border-top: 0.5px solid var(--less-border);
        margin: 2rem 0;
      }
    `];render(){let e=this.decision;return B`
      <less-layout currentPath="${e.path}">
        <div class="container">
          <h1>${e.id}: ${e.title}</h1>
          <p class="subtitle">${e.summary}</p>
          <div class="decision-meta">
            <span class="badge">${e.status}</span>
            <span>Source: docs/decisions/${e.id}</span>
          </div>
          <div class="markdown">${Yn(e.source)}</div>
          <div class="nav-row">
            <a href="/decisions" class="nav-link">&larr; Decisions</a>
            <a href="/roadmap" class="nav-link">Roadmap &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}},Zn=class extends Xn{decision=Y[0]};customElements.define(`page-decision-0001`,Zn);var Qn=class extends Xn{decision=Y[1]};customElements.define(`page-decision-0002`,Qn);var $n=class extends Xn{decision=Y[2]};customElements.define(`page-decision-0003`,$n);var er=class extends Xn{decision=Y[3]};customElements.define(`page-decision-0004`,er);var tr=class extends K{static styles=k`
    .container {
      max-width: 720px;
      margin: 0 auto;
      padding: 2rem 1.5rem 3rem;
    }
    .overline {
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.24em;
      color: var(--less-text-muted);
      margin-bottom: 1.75rem;
      display: block;
    }
    h1 {
      font-size: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      margin: 0 0 0.5rem;
      color: var(--less-text-primary);
      line-height: 1.2;
    }
    .subtitle {
      color: var(--less-text-tertiary);
      margin-bottom: 3rem;
      font-size: 0.9375rem;
      line-height: 1.7;
    }
    h2 {
      font-size: 1.125rem;
      font-weight: 600;
      margin: 1.5rem 0 0.75rem;
      color: var(--less-text-primary);
    }
    p {
      line-height: 1.7;
      margin: 0.5rem 0;
      color: var(--less-text-secondary);
      font-size: 0.9375rem;
    }
    strong {
      color: var(--less-text-primary);
      font-weight: 600;
    }
    a {
      color: var(--less-text-primary);
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    hr.divider {
      border: none;
      border-top: 0.5px solid var(--less-border);
      margin: 2rem 0;
    }

    .jam-grid {
      display: flex;
      gap: 0;
      margin: 1.5rem 0 2rem;
      /* 0.5px: reduced to match less-ui spec */
      border: 0.5px solid var(--less-border);
      border-radius: 8px;
      overflow: hidden;
    }
    .jam-cell {
      flex: 1;
      padding: 1.5rem 1rem;
      text-align: center;
    }
    .jam-cell + .jam-cell {
      border-left: 0.5px solid var(--less-border);
    }
    .jam-cell .letter {
      font-size: 2rem;
      font-weight: 900;
      color: var(--less-text-primary);
      display: block;
      line-height: 1;
      margin-bottom: 0.5rem;
    }
    .jam-cell .label {
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--less-text-muted);
      display: block;
      margin-bottom: 0.3rem;
    }
    .jam-cell .desc {
      font-size: 0.75rem;
      color: var(--less-text-tertiary);
      line-height: 1.5;
      margin: 0;
    }
    .jam-cell:hover {
      background: var(--less-bg-hover);
    }

    .arch-card {
      /* 0.5px: reduced to match less-ui spec */
      border: 0.5px solid var(--less-border);
      border-radius: 8px;
      overflow: hidden;
    }
    .arch-card pre {
      margin: 0;
      padding: 1rem 1.25rem;
      background: var(--less-code-bg);
      font-size: 0.75rem;
      line-height: 1.7;
      overflow-x: auto;
    }
    .arch-card .endpoint-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1.25rem;
      background: var(--less-bg-surface);
      border-bottom: 0.5px solid var(--less-border);
      font-size: 0.8125rem;
      color: var(--less-text-secondary);
      font-family: "SF Mono", "Fira Code", "Consolas", monospace;
    }
    .arch-card .endpoint-bar a {
      text-decoration: none;
    }
    .endpoint-label {
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--less-text-muted);
      margin: 1.5rem 0 0.5rem;
    }
  `;render(){return B`
      <less-layout>
        <div class="container">
          <span class="overline">Showcase</span>
          <h1>JAM Pattern in Action</h1>
          <p class="subtitle">
            A live demonstration of the <strong>JAMstack</strong> pipeline — statically generated HTML
            that talks to a serverless API at runtime. Zero backend. Zero server maintenance.
          </p>

          <div class="jam-grid">
            <div class="jam-cell">
              <span class="letter">J</span>
              <span class="label">JavaScript</span>
              <p class="desc">Island component upgrades on the client, ready for interaction</p>
            </div>
            <div class="jam-cell">
              <span class="letter">A</span>
              <span class="label">API</span>
              <p class="desc">fetch() calls the LessJS serverless API hosted on Deno Deploy</p>
            </div>
            <div class="jam-cell">
              <span class="letter">M</span>
              <span class="label">Markup</span>
              <p class="desc">JSON response rendered into the DOM — no page reload needed</p>
            </div>
          </div>

          <!-- Live API Consumer Island -->
          <!-- api-consumer rendered by renderer in light DOM -->

          <hr class="divider" />

          <p
            style="font-size:0.8125rem;color:var(--less-text-tertiary);margin:0 0 0.5rem;line-height:1.6"
          >
            Another Island — <strong>0.9 KB</strong> of lazy-loaded JavaScript, fully interactive via
            Declarative Shadow DOM and Custom Element upgrade.
          </p>
          <counter-island></counter-island>

          <hr class="divider" />

          <h2>Architecture</h2>
          <p style="font-size:0.9375rem;color:var(--less-text-secondary);line-height:1.7">
            This entire page was statically generated at build time by the LessJS 3-phase pipeline. The
            interactive components are <strong>Islands</strong> — lazy-loaded JavaScript that upgrades
            only the parts that need interaction. Everything else is pure static HTML.
          </p>

          <div class="endpoint-label">API Endpoint</div>
          <div class="arch-card">
            <div class="endpoint-bar">
              <span>https://less-demo-api.sisyphuszheng.deno.net</span>
              <a
                href="https://less-demo-api.sisyphuszheng.deno.net/api"
                target="_blank"
                style="font-size:0.75rem;color:var(--less-text-primary);text-decoration:underline;text-underline-offset:3px"
              >Open →</a>
            </div>
          </div>

          <div class="endpoint-label">Build Pipeline</div>
          <div class="arch-card">
            <pre>deno task build → SSR bundle + island chunks + static HTML + DSD + clean URLs + PWA</pre>
          </div>
        </div>
      </less-layout>
    `}},nr=`less-card`,rr=class extends K{_dsdHydrated=!1;createRenderRoot(){return this.shadowRoot&&this.shadowRoot.childElementCount>0?(this._dsdHydrated=!0,this.shadowRoot):this.attachShadow({mode:`open`})}static styles=[J,k`
      :host {
        display: block;
        background: var(--less-bg-card);
        border: 0.5px solid var(--less-border);
        border-radius: var(--less-radius-lg);
        overflow: hidden;
      }

      :host([variant="elevated"]) {
        box-shadow: var(--less-shadow-md);
        border-color: transparent;
      }

      :host([variant="borderless"]) {
        border-color: transparent;
      }

      ::slotted([slot="header"]) {
        padding: var(--less-size-4) var(--less-size-5);
        border-bottom: 0.5px solid var(--less-border);
        font-size: var(--less-font-size-lg);
        font-weight: var(--less-font-weight-semibold);
        color: var(--less-text-primary);
        margin: 0;
      }

      .card-body {
        padding: var(--less-size-5);
      }

      ::slotted([slot="footer"]) {
        padding: var(--less-size-3) var(--less-size-5);
        border-top: 0.5px solid var(--less-border);
        font-size: var(--less-font-size-sm);
        color: var(--less-text-muted);
        margin: 0;
      }
    `];static properties={variant:{type:String,reflect:!0}};constructor(){super(),this.variant=`default`}render(){return this._dsdHydrated?H:B`
      <article part="base">
        <slot name="header"></slot>
        <div class="card-body">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </article>
    `}};customElements.get(`less-card`)||customElements.define(nr,rr);var ir=`less-button`,ar=class extends K{static delegatesFocus=!0;static formAssociated=!0;_internals;_dsdHydrated=!1;createRenderRoot(){return this.shadowRoot&&this.shadowRoot.childElementCount>0?(this._dsdHydrated=!0,this.shadowRoot):this.attachShadow({mode:`open`})}static styles=[J,k`
      :host {
        display: inline-block;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--less-size-2);
        font-family: var(--less-font-sans);
        font-weight: var(--less-font-weight-medium);
        text-decoration: none;
        cursor: pointer;
        border: 0.5px solid var(--less-border);
        background: transparent;
        color: var(--less-text-primary);
        border-radius: var(--less-radius-md);
        transition:
          color var(--less-transition-normal),
          border-color var(--less-transition-normal),
          background var(--less-transition-normal);
        white-space: nowrap;
        letter-spacing: var(--less-letter-spacing-wide);
      }

      /* Sizes */
      .btn--sm {
        padding: var(--less-size-1) var(--less-size-3);
        font-size: var(--less-font-size-sm);
        height: 28px;
      }

      .btn--md {
        padding: var(--less-size-2) var(--less-size-4);
        font-size: var(--less-font-size-md);
        height: 36px;
      }

      .btn--lg {
        padding: var(--less-size-3) var(--less-size-5);
        font-size: var(--less-font-size-lg);
        height: 44px;
      }

      /* Variants */
      .btn--default:hover {
        color: var(--less-text-primary);
        border-color: var(--less-border-hover);
        background: var(--less-accent-subtle);
      }

      .btn--primary {
        background: var(--less-accent);
        color: var(--less-bg-base);
        border-color: var(--less-accent);
      }

      .btn--primary:hover {
        background: var(--less-accent-dim);
        border-color: var(--less-accent-dim);
      }

      .btn--ghost {
        border-color: transparent;
      }

      .btn--ghost:hover {
        background: var(--less-accent-subtle);
        border-color: transparent;
      }

      /* States */
      .btn:disabled,
      .btn[aria-disabled="true"] {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }

      .btn:focus-visible {
        outline: 2px solid var(--less-accent);
        outline-offset: 2px;
      }

      /* :state() pseudo-class support — CSS custom states via ElementInternals */
      :host(:state(disabled)) .btn {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }
    `];static properties={variant:{type:String,reflect:!0},size:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},href:{type:String,reflect:!0},target:{type:String,reflect:!0},type:{type:String}};constructor(){super(),this.variant=`default`,this.size=`md`,this.disabled=!1,this.href=void 0,this.target=void 0,this.type=`button`,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this._updateState()}_updateState(){this._internals?.states&&(this.disabled?(this._internals.states.delete(`enabled`),this._internals.states.add(`disabled`)):(this._internals.states.delete(`disabled`),this._internals.states.add(`enabled`)))}updated(e){super.updated(e),e.has(`disabled`)&&this._updateState()}_preventClick(e){e.preventDefault()}render(){if(this._dsdHydrated)return H;let e=`btn btn--${this.variant} btn--${this.size}`;return this.href?B`
        <a
          class="${e}"
          href="${(this.disabled?void 0:this.href)??H}"
          target="${this.target||H}"
          aria-disabled="${this.disabled||H}"
          rel="${this.target===`_blank`?`noopener noreferrer`:H}"
          @click="${this.disabled?this._preventClick:H}"
        >
          <slot></slot>
        </a>
      `:B`
      <button class="${e}" ?disabled="${this.disabled}" type="${this.type}">
        <slot></slot>
      </button>
    `}};customElements.get(`less-button`)||customElements.define(ir,ar);var or=class extends K{static styles=[q,k`
      .example-grid {
        display: grid;
        gap: 1.5rem;
        margin: 1.5rem 0;
      }
      .example-card {
        padding: 1.5rem;
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 6px;
        transition: border-color 0.2s ease;
      }
      .example-card:hover {
        border-color: var(--less-border-hover);
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
        background: var(--less-code-bg);
        border-radius: 3px;
        font-weight: 500;
      }
      .example-card .tag.k {
        color: var(--less-accent);
      }
      .example-card .tag.i {
        color: var(--less-accent-dim);
      }
      .example-card .tag.s1 {
        color: var(--less-text-secondary);
      }
      .example-card .tag.s2 {
        color: var(--less-text-tertiary);
      }
      .example-card p {
        margin: 0.5rem 0 1rem;
        color: var(--less-text-secondary);
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
        background: var(--less-bg-base);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        font-size: 0.75rem;
        font-family: "SF Mono", "Fira Code", monospace;
      }
      .architecture-diagram {
        padding: 1.5rem;
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
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
        color: var(--less-text-muted);
        min-width: 120px;
      }
      .arch-value {
        font-size: 0.8125rem;
        color: var(--less-text-secondary);
      }
      .arch-divider {
        border: none;
        border-top: 0.5px solid var(--less-border);
        margin: 1rem 0;
      }
      .less-row {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin: 0.75rem 0;
      }
      .less-letter {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border: 0.5px solid var(--less-border-hover);
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 800;
        color: var(--less-text-primary);
        background: var(--less-bg-base);
      }
      .less-desc {
        font-size: 0.8125rem;
        color: var(--less-text-secondary);
        margin-left: 0.25rem;
        line-height: 28px;
      }
      .nav-links {
        display: flex;
        gap: 0.75rem;
        margin-top: 1rem;
      }
    `];render(){return B`
      <less-layout current-path="/examples">
        <div class="container">
          <h1>Examples</h1>
          <p class="subtitle">
            LessJS Architecture 实战 — 三范式继承 + 四约束验证
          </p>

          <h2>LessJS Architecture = Jamstack</h2>
          <p>
            LessJS 架构是唯一全链路 Web Standards 的 Jamstack 实现：
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
            <div class="less-row">
              <span class="less-letter">K</span><span class="less-desc">Knowledge — SSG + DSD</span>
            </div>
            <div class="less-row">
              <span class="less-letter">I</span><span class="less-desc"
              >Isolated — Islands + Shadow DOM</span>
            </div>
            <div class="less-row">
              <span class="less-letter">S</span><span class="less-desc">Semantic — No-JS baseline</span>
            </div>
            <div class="less-row">
              <span class="less-letter">S</span><span class="less-desc">Static — CDN + Serverless</span>
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
                <span class="constraint-badge">零框架运行时</span>
              </div>
              <p>
                最小化 LessJS 应用。展示 SSG + DSD 输出，内容在 JS 加载前可见。 使用 @lessjs/ui 组件。
              </p>
              <code-block
              ><pre><code>deno run -A npm:vite build
                # 输出: dist/index.html (含 DSD)</code></pre></code-block>
              <div class="nav-links">
                <less-button size="sm" href="/examples/hello">查看 Demo</less-button>
                <less-button
                  size="sm"
                  variant="ghost"
                  href="https://github.com/lessjs-run/LessJS/tree/main/docs/app/routes/examples/hello"
                >源码</less-button>
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
                <less-button size="sm" href="/examples/minimal-blog">查看 Demo</less-button>
                <less-button
                  size="sm"
                  variant="ghost"
                  href="https://github.com/lessjs-run/LessJS/tree/main/docs/app/routes/examples/minimal-blog"
                >源码</less-button>
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
                全栈示例。静态前端 + Serverless API Routes。 展示 LessJS 架构的完整四约束：静态文件部署到
                CDN，API 部署到 Serverless。
              </p>
              <code-block
              ><pre><code># 部署架构
                dist/           → CDN / GitHub Pages
                api/            → Deno Deploy / CF Workers</code></pre></code-block>
              <div class="nav-links">
                <less-button size="sm" href="/examples/fullstack">查看 Demo</less-button>
                <less-button
                  size="sm"
                  variant="ghost"
                  href="https://github.com/lessjs-run/LessJS/tree/main/docs/app/routes/examples/fullstack"
                >源码</less-button>
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
              <a href="/styling/less-ui" class="nav-link">&larr; @lessjs/ui</a>
              <a href="/guide/deployment" class="nav-link">Deployment &rarr;</a>
            </div>
          </div>
        </less-layout>
      `}};customElements.define(`page-examples`,or);var sr=t({__island:()=>!0,__tagName:()=>ur,default:()=>lr,tagName:()=>cr}),cr=`counter-island`,lr=class extends K{static styles=k`
    :host {
      display: block;
    }
    .counter {
      display: inline-flex;
      align-items: center;
      gap: 0;
      border: 1px solid var(--less-border, #ddd);
      border-radius: var(--radius, 8px);
      overflow: hidden;
      background: var(--less-bg-base, #fff);
    }
    .count {
      font-size: 1.5rem;
      font-weight: 700;
      min-width: 3.5rem;
      text-align: center;
      color: var(--less-text-primary, inherit);
      padding: 0.35rem 0.75rem;
      border-left: 1px solid var(--less-border, #ddd);
      border-right: 1px solid var(--less-border, #ddd);
      background: var(--less-bg-surface, #f5f5f5);
    }
    button {
      background: transparent;
      color: var(--less-text-secondary, #666);
      border: none;
      border-radius: 0;
      padding: 0.4rem 0.85rem;
      font-size: 1.15rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s ease, color 0.15s ease;
      line-height: 1;
      min-width: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button:hover {
      background: var(--less-accent-subtle, #f0f0f0);
      color: var(--less-text-primary, inherit);
    }
    button:active {
      background: var(--less-bg-hover, #e8e8e8);
      transform: scale(0.97);
    }
  `;static properties={count:{type:Number}};constructor(){super(),this.count=0}render(){return B`
      <div class="counter">
        <button aria-label="Decrease count" @click="${()=>this.count--}">−</button>
        <span class="count">${this.count}</span>
        <button aria-label="Increase count" @click="${()=>this.count++}">+</button>
      </div>
    `}};try{customElements.define(cr,lr)}catch{}var ur=`counter-island`,dr=class extends K{static styles=[q,k`
      .demo-container {
        padding: 2rem;
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 8px;
        margin: 1.5rem 0;
        color: var(--less-text-primary);
      }
      .demo-container h1 {
        font-size: 2rem;
        margin: 0 0 1rem;
      }
      .api-demo {
        margin-top: 1.5rem;
        padding: 1rem;
        background: var(--less-bg-elevated);
        border: 0.5px solid var(--less-border);
        border-radius: 6px;
      }
      .api-demo h3 {
        margin: 0 0 0.75rem;
        font-size: 0.9375rem;
        color: var(--less-accent);
      }
      .api-response {
        font-family: "SF Mono", "Fira Code", monospace;
        font-size: 0.8125rem;
        color: var(--less-text-secondary);
        background: var(--less-code-bg);
        padding: 0.75rem;
        border-radius: 4px;
      }
      .counter-demo {
        margin-top: 1.5rem;
        padding: 1rem;
        background: var(--less-bg-elevated);
        border: 0.5px solid var(--less-border);
        border-radius: 6px;
      }
      .counter-demo h3 {
        margin: 0 0 1rem;
        font-size: 0.9375rem;
        color: var(--less-accent);
      }
      .deployment-diagram {
        padding: 1.25rem;
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 6px;
        margin: 1.5rem 0;
        font-size: 0.8125rem;
        line-height: 1.8;
        font-family: "SF Mono", "Fira Code", monospace;
        white-space: pre;
        overflow-x: auto;
        color: var(--less-text-secondary);
      }
    `];render(){return B`
      <less-layout current-path="/examples/fullstack">
        <div class="container">
          <h1>全栈示例</h1>
          <p class="subtitle">
            K + I + S + S 四约束：静态前端 + Serverless API
          </p>

          <h2>在线演示</h2>
          <div class="demo-container">
            <h1>LessJS 全栈示例</h1>
            <p style="color: var(--less-text-tertiary); margin-bottom: 1.5rem;">
              SSG + API Routes + Islands —— 完整的全栈示例。
            </p>

            <div class="counter-demo">
              <h3>交互式 Island 演示</h3>
              <counter-island></counter-island>
            </div>

            <div class="api-demo">
              <h3>API Routes 演示</h3>
              <div class="api-response">
                GET /api/hello → { "message": "Hello from LessJS API!" } GET /api/time → { "time":
                "2026-04-26T...", "timestamp": 1745678... } GET /api/echo/:text → { "echo": "your-text" }
              </div>
            </div>
          </div>

          <h2>部署架构</h2>
          <div class="deployment-diagram">
            ┌─────────────────────────────────────────────────────────────────┐ │ 全栈部署 │ │ │ │
            ┌──────────────────┐ ┌──────────────────┐ │ │ │ 静态 dist/ │ │ API 路由 │ │ │ │ │ │ │ │ │ │
            index.html │ │ /api/hello │ │ │ │ + DSD │ │ /api/time │ │ │ │ + Island JS │ │ /api/echo │ │ │
            │ │ │ │ │ │ └──────────────────┘ └──────────────────┘ │ │ │ │ │ │ ▼ ▼ │ │ ┌──────────────────┐
            ┌──────────────────┐ │ │ │ CDN / │ │ Serverless │ │ │ │ GitHub Pages │ │ Deno Deploy │ │ │ │
            Cloudflare │ │ CF Workers │ │ │ │ Pages │ │ Vercel Edge │ │ │ └──────────────────┘
            └──────────────────┘ │ │ │ │ S 约束： 静态文件 + Serverless API │
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
                <td>Shadow DOM + 按需升级</td>
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

          <h2>API Routes 示例代码</h2>
          <code-block
          ><pre>
            <code>// app/routes/api/index.ts
              import { Hono } from 'hono'

              const app = new Hono()

              app.get('/hello', (c) => c.json({ message: 'Hello from LessJS API!' }))
              app.get('/time', (c) => c.json({ time: new Date().toISOString() }))
              app.get('/echo/:text', (c) => c.json({ echo: c.req.param('text') }))

              export default app</code></pre></code-block>

              <div class="nav-row">
                <a href="/examples/minimal-blog" class="nav-link">&larr; Minimal Blog</a>
                <a href="/guide/deployment" class="nav-link">部署 &rarr;</a>
              </div>
            </div>
          </less-layout>
        `}};customElements.define(`page-fullstack-demo`,dr);var fr=class extends K{static styles=[q,k`
      .demo-container {
        padding: 2rem;
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 8px;
        margin: 1.5rem 0;
      }
      .demo-container h1 {
        font-size: 2.5rem;
        font-weight: 800;
        margin: 0 0 1rem;
        color: var(--less-text-primary);
      }
      .demo-container .subtitle {
        color: var(--less-text-tertiary);
        font-size: 1rem;
        margin-bottom: 1.5rem;
      }
      .demo-container .cards {
        display: grid;
        gap: 1rem;
      }
      less-card {
        --less-bg-card: var(--less-bg-elevated);
      }
      .actions {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
      }
    `];render(){return B`
      <less-layout current-path="/examples/hello">
        <div class="container">
          <h1>Hello World Demo</h1>
          <p class="subtitle">
            K + S 约束：SSG + DSD 输出，内容在 JS 加载前可见
          </p>

          <h2>Live Demo</h2>
          <div class="demo-container">
            <h1>Hello, LessJS!</h1>
            <p class="subtitle">完全基于 Web 标准构建的极简全栈框架。</p>
            <div class="actions">
              <less-button variant="primary" href="https://jsr.io/@lessjs/core">快速上手</less-button>
              <less-button href="https://github.com/lessjs-run/LessJS">GitHub</less-button>
            </div>
            <div class="cards">
              <less-card>
                <h3 slot="header">SSG + DSD</h3>
                <p>
                  带声明式 Shadow DOM 的静态站点生成。内容在 JavaScript 加载前就可见。
                </p>
              </less-card>
              <less-card>
                <h3 slot="header">Islands 架构</h3>
                <p>
                  交互式组件按需 upgrade。默认静态优先，渐进增强。
                </p>
              </less-card>
              <less-card>
                <h3 slot="header">API Routes</h3>
                <p>带 Hono RPC 的 Serverless 端点。服务端到客户端类型安全。</p>
              </less-card>
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
      </less-layout>
    `}};customElements.define(`page-hello-demo`,fr);var pr=class extends K{static styles=[q,k`
      .demo-container {
        padding: 2rem;
        background: var(--less-bg-base);
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
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 6px;
      }
      .post-item h3 {
        margin: 0 0 0.5rem;
        font-size: 1rem;
      }
      .post-item p {
        margin: 0;
        color: var(--less-text-muted);
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
        color: var(--less-text-secondary);
      }
      .nav-link-demo.active {
        background: var(--less-bg-surface);
        color: var(--less-text-primary);
        font-weight: 600;
      }
    `];render(){return B`
      <less-layout current-path="/examples/minimal-blog">
        <div class="container">
          <h1>Minimal Blog Demo</h1>
          <p class="subtitle">
            K + I + S 约束：SSG + Theme Island + aria-current 导航
          </p>

          <h2>Live Demo</h2>
          <div class="demo-container">
            <div class="demo-header">
              <h1>My Blog</h1>
              <less-theme-toggle></less-theme-toggle>
            </div>
            <div class="nav-highlight-demo">
              <a class="nav-link-demo active" aria-current="page">Home</a>
              <a class="nav-link-demo">About</a>
              <a class="nav-link-demo">Archive</a>
            </div>
            <div class="post-list">
              <div class="post-item">
                <h3>理解 LessJS 架构</h3>
                <p>K·I·S·S 约束如何强制执行 Jamstack 原则...</p>
              </div>
              <div class="post-item">
                <h3>DSD：缺失的桥梁</h3>
                <p>声明式 Shadow DOM 解决了封装性与可访问性之间的两难...</p>
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
          ><pre>
            <code>导航高亮 → aria-current + CSS (L0+L1, 非 Island)
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
          </less-layout>
        `}};customElements.define(`page-minimal-blog-demo`,pr);var mr=class extends K{static styles=[q,k`
      .principle {
        padding: 1rem 1.25rem;
        background: var(--less-bg-surface);
        border-left: 2px solid var(--less-border-hover);
        border-radius: 0 4px 4px 0;
        margin: 1rem 0;
      }
    `];render(){return B`
      <less-layout currentPath="/guide/api-design">
        <div class="container">
          <h1>API 设计</h1>
          <p class="subtitle">
            API routes should feel like the Web: Request in, Response out, validation close to the
            boundary, typed clients where they reduce mistakes, and no hidden monolithic server.
          </p>

          <h2>Principles</h2>
          <div class="principle">
            <p>
              <strong>Use platform primitives.</strong>
              Prefer Fetch, Request, Response, FormData and URLSearchParams over framework-specific
              transport.
            </p>
            <p>
              <strong>Keep validation at the edge.</strong>
              Parse and validate request bodies before application logic sees them.
            </p>
            <p>
              <strong>Make runtime explicit.</strong>
              Static pages can call APIs, but those APIs still need a serverless or edge deployment
              target.
            </p>
          </div>

          <h2>Route Shape</h2>
          <table>
            <thead>
              <tr>
                <th>File</th>
                <th>URL</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="inline-code">app/routes/api/posts.ts</span></td>
                <td><span class="inline-code">/api/posts</span></td>
                <td>Collection handlers.</td>
              </tr>
              <tr>
                <td><span class="inline-code">app/routes/api/posts/[id].ts</span></td>
                <td><span class="inline-code">/api/posts/:id</span></td>
                <td>Resource handlers.</td>
              </tr>
              <tr>
                <td><span class="inline-code">app/routes/api/search.ts</span></td>
                <td><span class="inline-code">/api/search?q=kiss</span></td>
                <td>Query-driven endpoints.</td>
              </tr>
            </tbody>
          </table>

          <h2>Response Shape</h2>
          <p>
            Keep successful responses boring and predictable. Use HTTP status codes for status, JSON
            bodies for data, and framework errors for structured failures.
          </p>
          <code-block
          ><pre><code>return c.json({ posts }, 200);
            return c.json({ id, ...created }, 201);
            return c.json({ error: { code: 'NOT_FOUND', message: 'Post not found' } }, 404);</code></pre></code-block>

            <h2>Validation</h2>
            <p>
              LessJS does not force a validation library. Zod with
              <span class="inline-code">@hono/zod-validator</span> is a practical default when you want
              typed input.
            </p>
            <code-block
            ><pre><code>import { zValidator } from '@hono/zod-validator';
              import { z } from 'zod';

              const schema = z.object({
                title: z.string().min(1),
                body: z.string().optional(),
              });

              app.post('/', zValidator('json', schema), (c) => {
                const data = c.req.valid('json');
                return c.json({ ok: true, data }, 201);
              });</code></pre></code-block>

              <h2>Typed RPC</h2>
              <p>
                <span class="inline-code">@lessjs/rpc</span> is where type-safe client/server calling
                conventions can mature. Treat it as an opt-in layer over Hono rather than a replacement for
                plain API routes.
              </p>

              <h2>Actions</h2>
              <p>
                Future FormData actions should start from native forms, redirects and structured validation
                errors. They should enhance static pages without turning LessJS into a SPA runtime.
              </p>

              <div class="nav-row">
                <a href="/guide/api-routes" class="nav-link">&larr; API Routes</a>
                <a href="/guide/configuration" class="nav-link">Configuration &rarr;</a>
              </div>
            </div>
          </less-layout>
        `}};customElements.define(`page-api-design`,mr);var hr=class extends K{static styles=[q];render(){return B`
      <less-layout currentPath="/guide/api-routes">
        <div class="container">
          <h1>API 路由</h1>
          <p class="subtitle">
            LessJS 的服务端层是 Hono。API routes 使用标准 Request/Response 语义，
            适合部署到 serverless 或 edge runtime。
          </p>

          <h2>Create an API Route</h2>
          <p>
            API routes 放在 <span class="inline-code">app/routes/api</span>。
            模块默认导出一个 Hono app。
          </p>
          <code-block><pre><code>// app/routes/api/posts.ts
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.json([
    { id: 1, title: 'Hello LessJS' },
  ]);
});

app.post('/', async (c) => {
  const body = await c.req.json();
  return c.json({ id: 2, ...body }, 201);
});

export default app;
export type AppType = typeof app;</code></pre></code-block>

          <h2>Route Mapping</h2>
          <table>
            <thead>
              <tr>
                <th>File</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="inline-code">app/routes/api/status.ts</span></td>
                <td><span class="inline-code">/api/status</span></td>
              </tr>
              <tr>
                <td><span class="inline-code">app/routes/api/posts.ts</span></td>
                <td><span class="inline-code">/api/posts</span></td>
              </tr>
              <tr>
                <td><span class="inline-code">app/routes/api/users/[id].ts</span></td>
                <td><span class="inline-code">/api/users/:id</span></td>
              </tr>
            </tbody>
          </table>

          <h2>Validation</h2>
          <p>
            Hono middleware works normally inside API routes. Validation, auth, rate limits and response shaping
            should live close to the handler that owns the behavior.
          </p>
          <code-block><pre><code>import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

const app = new Hono();

const schema = z.object({
  title: z.string().min(1),
  body: z.string().optional(),
});

app.post('/', zValidator('json', schema), (c) => {
  const data = c.req.valid('json');
  return c.json({ id: crypto.randomUUID(), ...data }, 201);
});

export default app;</code></pre></code-block>

          <h2>Calling APIs from Islands</h2>
          <p>
            Islands can call API routes with <span class="inline-code">fetch</span> or Hono client helpers.
            Keep fetch state local unless multiple islands truly need a shared protocol.
          </p>
          <code-block><pre><code>async function loadPosts() {
  const res = await fetch('/api/posts');
  if (!res.ok) throw new Error('Failed to load posts');
  return await res.json();
}</code></pre></code-block>

          <h2>Static Build Boundary</h2>
          <p>
            SSG output is static files. API routes are part of the generated Hono app, but a purely static host
            will not run them. Deploy API routes through a serverless adapter or platform function when the app
            needs runtime behavior.
          </p>

          <div class="callout">
            <p>
              Near-term LessJS fullstack work should focus on explicit adapters, FormData actions,
              typed RPC and env/secrets. Until those are stable, API routes are powerful but intentionally simple.
            </p>
          </div>

          <div class="nav-row">
            <a href="/guide/islands" class="nav-link">&larr; Island Upgrade</a>
            <a href="/guide/api-design" class="nav-link">API Design &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-api-routes`,hr);var gr=class extends K{static styles=[q];render(){return B`
      <less-layout currentPath="/guide/architecture">
        <div class="container">
          <h1>架构</h1>
          <p class="subtitle">
            LessJS 的架构核心是把路由、渲染、island、API 和静态产物连接成一条可观察的构建链。
            这页描述当前模型，也明确哪些边界还在硬化中。
          </p>

          <h2>System Shape</h2>
          <p>
            一个 LessJS 应用由 <span class="inline-code">app/routes</span>、
            <span class="inline-code">app/islands</span>、可选 API routes、可选 middleware
            和构建 metadata 组成。构建器扫描这些约定，生成 Hono entry、client island entry
            和最终静态 HTML。
          </p>

          <code-block><pre><code>app/
  routes/
    index.ts              # page component for /
    guide/[slug].ts       # dynamic page route
    api/status.ts         # API route
    _middleware.ts        # route-tree middleware
  islands/
    counter.ts            # client-upgraded component
  _renderer.ts            # optional layout wrapper</code></pre></code-block>

          <h2>Build Pipeline</h2>
          <p>
            用户命令保持简单：<span class="inline-code">deno task build</span>。
            内部仍分成三个阶段，因为每一段都有不同的失败模式和可验证产物。
          </p>

          <code-block><pre><code>Phase 1: SSR bundle
  - scan routes, API routes, middleware and islands
  - generate virtual Hono entry
  - emit .less/build-metadata.json

Phase 2: client islands
  - read metadata
  - generate .less-client-entry.ts
  - build island chunks into dist/client

Phase 3: SSG
  - load generated Hono app through Vite SSR
  - render route HTML with Declarative Shadow DOM
  - inject island entry, PWA assets and static post-processing</code></pre></code-block>

          <h2>Rendering Model</h2>
          <p>
            LessJS 不是把浏览器里的组件树完整搬到客户端再 hydrate。SSR 阶段会实例化页面组件，
            获取它的模板和样式，并把结果写入 Declarative Shadow DOM。
          </p>

          <code-block><pre><code>&lt;page-home&gt;
  &lt;template shadowrootmode="open"&gt;
    &lt;style&gt;/* component styles */&lt;/style&gt;
    &lt;main&gt;Content is visible before JavaScript runs.&lt;/main&gt;
  &lt;/template&gt;
&lt;/page-home&gt;</code></pre></code-block>

          <p>
            当前渲染器的风险在于 safe/unsafe HTML 边界必须更清晰。未来的 DSD Renderer 2
            应该保留 Lit 的转义语义、隔离 unsafe HTML、覆盖 CSP nonce/meta 注入，并用测试锁住这些安全契约。
          </p>

          <h2>Island Upgrade</h2>
          <p>
            Island 是已经在 HTML 中出现的 Custom Element。客户端 entry 加载模块后，
            浏览器通过 <span class="inline-code">customElements.define()</span>
            升级它，事件监听、本地状态和 API 调用才开始工作。
          </p>

          <p>
            当前实现已经支持本地 islands 和 package islands，但构建 metadata 还需要继续收紧：
            页面级 island manifest、加载策略、嵌套路由中的本地 island 路径和 package island
            策略都应该成为 v0.7 前的重点。
          </p>

          <h2>Server Runtime</h2>
          <p>
            SSR 和 API 入口都由 Hono 组织。LessJS 选择 Hono 不是为了制造一个专有服务端模型，
            而是为了贴近 Fetch API、Web Request/Response 和多运行时部署。
          </p>

          <table>
            <thead>
              <tr>
                <th>层</th>
                <th>当前职责</th>
                <th>下一步</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Routes</td>
                <td>页面组件、动态参数、布局 renderer。</td>
                <td>更好的 route manifest 和失败诊断。</td>
              </tr>
              <tr>
                <td>Middleware</td>
                <td>Hono middleware 按路由树挂载。</td>
                <td>修复根 middleware 范围，补齐静态构建安全处理。</td>
              </tr>
              <tr>
                <td>API</td>
                <td>Hono handlers，面向 serverless runtime。</td>
                <td>typed actions、env/secrets、adapter 文档。</td>
              </tr>
              <tr>
                <td>SSG</td>
                <td>默认产出静态 HTML 和 client assets。</td>
                <td>CSP/PWA/postprocess 与 Hono entry 保持一致。</td>
              </tr>
            </tbody>
          </table>

          <h2>Package Boundaries</h2>
          <table>
            <thead>
              <tr>
                <th>Package</th>
                <th>职责</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="inline-code">@lessjs/core</span></td>
                <td>路由扫描、entry 生成、DSD SSR、SSG、CLI。</td>
              </tr>
              <tr>
                <td><span class="inline-code">@lessjs/ui</span></td>
                <td>文档站和示例可复用的 Web Components。</td>
              </tr>
              <tr>
                <td><span class="inline-code">@lessjs/rpc</span></td>
                <td>类型安全 API/RPC 能力的实验和沉淀。</td>
              </tr>
              <tr>
                <td><span class="inline-code">@lessjs/adapter-lit</span></td>
                <td>Lit 适配边界，未来为 compiler/多 adapter 留出空间。</td>
              </tr>
            </tbody>
          </table>

          <h2>Trust Boundaries</h2>
          <p>
            当前最重要的架构工作不是增加功能，而是把已经承诺的能力做可信：
            middleware 范围必须准确，SSG 和 Hono entry 的 CSP 行为必须一致，嵌套 island
            路径必须稳定，加载策略不能在构建时丢失。
          </p>

          <div class="nav-row">
            <a href="/guide/design-philosophy" class="nav-link">&larr; Design Philosophy</a>
            <a href="/guide/routing" class="nav-link">Routing &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-architecture`,gr);var _r=class extends K{static styles=[q,k`
      .adr-meta {
        font-size: 0.75rem;
        color: var(--less-text-muted);
        margin-bottom: 1.5rem;
      }
      h2 {
        font-size: 1rem;
        font-weight: 500;
        margin: 1.5rem 0 0.5rem;
        color: var(--less-text-primary);
      }
      h3 {
        font-size: 0.875rem;
        font-weight: 500;
        margin: 1rem 0 0.25rem;
        color: var(--less-text-secondary);
      }
      p {
        font-size: 0.8125rem;
        line-height: 1.7;
        color: var(--less-text-secondary);
        margin: 0 0 0.75rem;
      }
      .code-block {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 1rem;
        font-family: "SF Mono", "Fira Code", monospace;
        font-size: 0.75rem;
        line-height: 1.6;
        overflow-x: auto;
        margin: 0.75rem 0 1.25rem;
        color: var(--less-text-secondary);
        white-space: pre;
      }
      ul {
        font-size: 0.8125rem;
        line-height: 1.8;
        color: var(--less-text-secondary);
        margin: 0.5rem 0 1rem;
        padding-left: 1.25rem;
      }
    `];render(){return B`
      <less-layout currentPath="/guide/blog-system">
        <div class="container">
          <p class="adr-meta">ADR 0004 · 2026-04-30 · Draft · after v0.8.0 target</p>
          <h1>@lessjs/blog — Standalone SSG Blog Package</h1>

          <h2>Motivation</h2>
          <p>
            The docs site currently has two hardcoded blog pages — not a reusable system. Users need a
            one-line solution: drop in <code>.md</code> files, get automatic listing, pagination, RSS, and
            tags. Like VitePress, but as a LessJS plugin.
          </p>

          <h2>User experience</h2>
          <div class="code-block">
            // vite.config.ts import { less } from '@lessjs/core' import { lessBlog } from '@lessjs/blog'
            export default defineConfig({ plugins: [ less(), lessBlog({ dir: 'content/blog', // .md files
            go here title: 'My Blog', postsPerPage: 10, }), ], })
          </div>

          <div class="code-block">
            <!-- content/blog/hello-world.md -->
            --- title: Hello World date: 2026-05-01 tags: [kiss, meta] --- This is my first post.
          </div>

          <h2>Generated routes</h2>
          <ul>
            <li><code>/blog/</code> — Post listing (paginated, newest first)</li>
            <li><code>/blog/hello-world</code> — Individual post</li>
            <li><code>/blog/page/2</code> — Page 2</li>
            <li><code>/blog/tags/lessjs</code> — Filter by tag</li>
            <li><code>/blog/feed.xml</code> — RSS / Atom feed</li>
          </ul>

          <h2>Constraint</h2>
          <p>
            The blog package should not require Lit. The first useful version should work as a plain SSG
            plugin: Markdown in, static routes + feed out. Plain blog pages should ship no page-level
            framework runtime; interactive widgets remain islands.
          </p>
          <p>
            The <code>.less</code> compiler is an ideal future template backend, not a release blocker.
            When v0.10.0 alpha exists, blog templates can gain compiler-backed Custom Elements.
          </p>

          <h2>Implementation order</h2>
          <ol style="font-size:0.8125rem;line-height:1.8;color:var(--less-text-secondary)">
            <li>v0.8.0 stabilizes route/action/serverless conventions</li>
            <li><code>@lessjs/blog</code> ships as a plain SSG plugin first</li>
            <li><code>.less</code> compiler support is added after v0.10.0 alpha</li>
            <li>LessJS docs site dogfoods it and replaces current hardcoded blog routes</li>
          </ol>

          <p>详见 <code>docs/decisions/0004-blog-system.md</code></p>

          <div class="nav-row" style="margin-top:2rem">
            <a href="/guide/pwa" class="nav-link">&larr; PWA Support</a>
            <a href="/roadmap" class="nav-link">Roadmap &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-blog-system`,_r);var vr=class extends K{static styles=[q];render(){return B`
      <less-layout currentPath="/guide/configuration">
        <div class="container">
          <h1>配置</h1>
          <p class="subtitle">
            LessJS is configured through the Vite plugin. Keep configuration explicit:
            routes, islands, static output, head injection, PWA and middleware are separate concerns.
          </p>

          <h2>Minimal Config</h2>
          <code-block><pre><code>// vite.config.ts
import { defineConfig } from 'vite';
import { less } from '@lessjs/core';

export default defineConfig({
  plugins: [less()],
});</code></pre></code-block>

          <h2>Main Options</h2>
          <table>
            <thead>
              <tr>
                <th>Option</th>
                <th>Default</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="inline-code">routesDir</span></td>
                <td><span class="inline-code">'app/routes'</span></td>
                <td>Page routes, API routes, renderers and route-tree middleware.</td>
              </tr>
              <tr>
                <td><span class="inline-code">islandsDir</span></td>
                <td><span class="inline-code">'app/islands'</span></td>
                <td>Local client-upgraded Custom Elements.</td>
              </tr>
              <tr>
                <td><span class="inline-code">componentsDir</span></td>
                <td><span class="inline-code">'app/components'</span></td>
                <td>Shared server-rendered components.</td>
              </tr>
              <tr>
                <td><span class="inline-code">packageIslands</span></td>
                <td><span class="inline-code">[]</span></td>
                <td>Packages that export an <span class="inline-code">islands</span> metadata array.</td>
              </tr>
              <tr>
                <td><span class="inline-code">build.outDir</span></td>
                <td><span class="inline-code">'dist'</span></td>
                <td>Static output directory.</td>
              </tr>
            </tbody>
          </table>

          <h2>Document Metadata</h2>
          <code-block><pre><code>less({
  html: {
    lang: 'en',
    title: 'My LessJS App',
  },
});</code></pre></code-block>

          <h2>Head Injection</h2>
          <p>
            Use <span class="inline-code">inject</span> for external stylesheets, module scripts and small head fragments.
            URLs are validated before being added to the generated document.
          </p>
          <code-block><pre><code>less({
  inject: {
    stylesheets: [
      'https://cdn.example.com/theme.css',
    ],
    scripts: [
      'https://cdn.example.com/widget.js',
    ],
    headFragments: [
      '&lt;meta name="theme-color" content="#050505"&gt;',
    ],
  },
});</code></pre></code-block>

          <h2>Package Islands</h2>
          <p>
            Package islands are reusable Web Components discovered at build time.
            This is how <span class="inline-code">@lessjs/ui</span> contributes interactive components to the docs site.
          </p>
          <code-block><pre><code>less({
  packageIslands: ['@lessjs/ui'],
});</code></pre></code-block>

          <h2>Island Strategy</h2>
          <p>
            The framework option declares the default upgrade strategy. Current implementation still needs hardening
            so this metadata consistently reaches the client build.
          </p>
          <code-block><pre><code>less({
  island: {
    upgradeStrategy: 'idle',
  },
});</code></pre></code-block>

          <h2>Middleware</h2>
          <code-block><pre><code>less({
  middleware: {
    logger: true,
    requestId: true,
    cors: true,
    corsOrigin: 'https://example.com',
    securityHeaders: true,
    csp: {
      policy: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'",
      nonce: false,
      reportOnly: false,
    },
  },
});</code></pre></code-block>

          <h2>PWA</h2>
          <p>
            PWA support generates manifest and service worker assets during SSG. Treat it as an enhancement,
            not as a replacement for static HTML correctness.
          </p>
          <code-block><pre><code>less({
  pwa: {
    name: 'My LessJS App',
    shortName: 'LessJS',
    themeColor: '#050505',
    backgroundColor: '#ffffff',
  },
});</code></pre></code-block>

          <h2>Complete Example</h2>
          <code-block><pre><code>export default defineConfig({
  base: '/',
  plugins: [
    less({
      routesDir: 'app/routes',
      islandsDir: 'app/islands',
      componentsDir: 'app/components',
      packageIslands: ['@lessjs/ui'],
      html: {
        lang: 'en',
        title: 'My LessJS App',
      },
      build: {
        outDir: 'dist',
      },
    }),
  ],
});</code></pre></code-block>

          <div class="nav-row">
            <a href="/guide/api-design" class="nav-link">&larr; API Design</a>
            <a href="/guide/security-middleware" class="nav-link">Security & Middleware &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-configuration`,vr);var yr=class extends K{static styles=[q,k`
      .platform-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
        gap: 0.75rem;
        margin: 1rem 0 1.5rem;
      }

      .platform-card {
        padding: 1rem;
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
      }

      .platform-card h3 {
        margin: 0 0 0.4rem;
      }

      .platform-card p {
        margin: 0;
        font-size: 0.8125rem;
      }
    `];render(){return B`
      <less-layout currentPath="/guide/deployment">
        <div class="container">
          <h1>部署</h1>
          <p class="subtitle">
            LessJS deploys static files first. Runtime API routes are deployed separately through
            serverless or edge adapters when your application needs dynamic behavior.
          </p>

          <h2>Build Once</h2>
          <code-block><pre><code>deno task build</code></pre></code-block>
          <p>
            The build writes <span class="inline-code">dist/</span>: static HTML with Declarative Shadow
            DOM, client island chunks and copied public assets.
          </p>

          <h2>Static Hosting</h2>
          <div class="platform-grid">
            <div class="platform-card">
              <h3>GitHub Pages</h3>
              <p>Set Vite <span class="inline-code">base</span> when deploying under a repo path.</p>
            </div>
            <div class="platform-card">
              <h3>Cloudflare Pages</h3>
              <p>
                Build command: <span class="inline-code">deno task build</span>; output: <span
                  class="inline-code"
                >dist</span>.
              </p>
            </div>
            <div class="platform-card">
              <h3>Netlify</h3>
              <p>Publish directory: <span class="inline-code">dist</span>.</p>
            </div>
            <div class="platform-card">
              <h3>Vercel</h3>
              <p>Use static output with framework preset “Other”.</p>
            </div>
            <div class="platform-card">
              <h3>S3 / CloudFront</h3>
              <p>
                Upload <span class="inline-code">dist</span> and configure cache headers deliberately.
              </p>
            </div>
          </div>

          <h2>GitHub Pages Base Path</h2>
          <p>
            If the site is served from <span class="inline-code">https://user.github.io/repo/</span>,
            configure the base path in Vite.
          </p>
          <code-block
          ><pre><code>// vite.config.ts
            import { defineConfig } from 'vite';
            import { less } from '@lessjs/core';

            export default defineConfig({
              base: '/repo/',
              plugins: [less()],
            });</code></pre></code-block>

            <h2>API Deployment</h2>
            <p>
              API routes belong to the generated Hono app. Static hosts do not execute them automatically.
              Deploy API routes through a platform adapter when the app needs runtime behavior.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Target</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Deno Deploy</td>
                  <td>Natural target</td>
                  <td>Closest to the Deno-first development model.</td>
                </tr>
                <tr>
                  <td>Cloudflare Workers</td>
                  <td>Good target</td>
                  <td>Hono already maps well to Workers.</td>
                </tr>
                <tr>
                  <td>Vercel / Netlify Functions</td>
                  <td>Adapter work</td>
                  <td>Needs documented build output and runtime entry contracts.</td>
                </tr>
              </tbody>
            </table>

            <h2>No Production SSR Server by Default</h2>
            <p>
              LessJS does not require a long-running production SSR server for its main path. Static pages
              should stay static; dynamic behavior should be explicit API or future ISR behavior. This keeps
              hosting cheap, cacheable and operationally small.
            </p>

            <h2>Deployment Checklist</h2>
            <ul>
              <li>Run <span class="inline-code">deno task build</span> locally or in CI.</li>
              <li>Preview <span class="inline-code">dist/</span> before publishing.</li>
              <li>Confirm base path when deploying below a subdirectory.</li>
              <li>Confirm CSP/security headers survive the selected hosting path.</li>
              <li>Deploy API routes separately if islands call runtime endpoints.</li>
            </ul>

            <div class="nav-row">
              <a href="/guide/testing" class="nav-link">&larr; Testing</a>
              <a href="/roadmap" class="nav-link">Roadmap &rarr;</a>
            </div>
          </div>
        </less-layout>
      `}};customElements.define(`page-deployment`,yr);var br=class extends K{static styles=[q];render(){return B`
      <less-layout currentPath="/guide/design-philosophy">
        <div class="container">
          <h1>设计理念</h1>
          <p class="subtitle">
            LessJS 的哲学不是“少写代码”这么单薄，而是把复杂度放在正确的位置：
            平台已经解决的问题交给平台，框架必须解决的问题才由框架承担。
          </p>

          <div class="pillar">
            <div class="num">Principle 01</div>
            <h3>Web Standards First</h3>
            <p>
              HTTP 使用 Fetch API，UI 使用 Custom Elements 和 Shadow DOM，模块使用 ESM， 服务端使用 Hono
              对齐 Web 标准。用户学到的知识应该能离开 LessJS 继续使用。
            </p>
          </div>

          <div class="pillar">
            <div class="num">Principle 02</div>
            <h3>Static First, Dynamic When Explicit</h3>
            <p>
              默认产物应该是静态 HTML、CSS 和必要的 island JavaScript。需要 API、认证、 数据写入或
              revalidation 时再显式进入 serverless/fullstack 模式。
            </p>
          </div>

          <div class="pillar">
            <div class="num">Principle 03</div>
            <h3>Islands Are Upgrades, Not Hydration</h3>
            <p>
              页面先是可读、可缓存、可爬取的 HTML。交互组件随后通过 Custom Element upgrade
              变成活的组件。框架不把整页状态恢复当成默认成本。
            </p>
          </div>

          <div class="pillar">
            <div class="num">Principle 04</div>
            <h3>Adapters Extend, They Do Not Define</h3>
            <p>
              Lit 是当前最现实的作者体验；未来的 <span class="inline-code">.less</span>
              compiler 是优化路径，不是框架成立的前提。运行时、构建和文档都应该保持 adapter 边界清晰。
            </p>
          </div>

          <div class="pillar">
            <div class="num">Principle 05</div>
            <h3>Docs Must Be Falsifiable</h3>
            <p>
              文档要写当前行为，而不是愿景口号。能运行的写成指南；还没稳定的写进 Roadmap；
              风险和限制写在架构页里，而不是藏到用户踩坑之后。
            </p>
          </div>

          <h2>工程取舍</h2>
          <table>
            <thead>
              <tr>
                <th>选择</th>
                <th>原因</th>
                <th>代价</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lit authoring</td>
                <td>Web Components 生态成熟，SSR 可行，API 稳定。</td>
                <td>需要管理安全渲染边界，compiler 优化仍是未来项。</td>
              </tr>
              <tr>
                <td>Hono runtime</td>
                <td>足够小，贴近 Fetch，跨运行时迁移成本低。</td>
                <td>部署适配器和平台能力仍需要逐步补齐。</td>
              </tr>
              <tr>
                <td>SSG default</td>
                <td>部署简单，缓存友好，文档/内容站收益最大。</td>
                <td>动态数据和 ISR 需要额外运行时约定。</td>
              </tr>
            </tbody>
          </table>

          <h2>不追求的东西</h2>
          <p>
            LessJS 不追求把所有前端范式压进一个框架，也不追求用抽象遮住平台。
            如果一个功能必须引入大量专有协议，它需要证明自己能显著降低实际复杂度。
          </p>

          <div class="nav-row">
            <a href="/guide/getting-started" class="nav-link">&larr; Getting Started</a>
            <a href="/guide/architecture" class="nav-link">Architecture &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-design-philosophy`,br);var xr=class extends K{static styles=[q,k`
      .error-hierarchy {
        padding: 1rem;
        background: var(--less-bg-surface);
        border-left: 2px solid var(--less-border-hover);
        border-radius: 0 4px 4px 0;
        margin: 1rem 0;
        font-family: "SF Mono", "Fira Code", "Consolas", monospace;
        font-size: 0.8125rem;
        line-height: 1.8;
        color: var(--less-text-secondary);
      }
    `];render(){return B`
      <less-layout currentPath="/guide/error-handling">
        <div class="container">
          <h1>错误处理</h1>
          <p class="subtitle">
            LessJS separates framework errors, build-time rendering errors, API errors and browser island failures.
            The goal is clear diagnosis without leaking internals in production.
          </p>

          <h2>Error Hierarchy</h2>
          <div class="error-hierarchy">LessError
|-- NotFoundError          404
|-- UnauthorizedError      401
|-- ForbiddenError         403
|-- ValidationError        422
|-- ConflictError          409
|-- RateLimitError         429
|-- SsrRenderError         500, non-operational
└-- IslandUpgradeError     500, non-operational</div>

          <h2>Operational vs Programming Errors</h2>
          <table>
            <thead>
              <tr>
                <th>Kind</th>
                <th>Examples</th>
                <th>Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operational</td>
                <td>not found, unauthorized, validation, rate limit</td>
                <td>Return structured status and safe message.</td>
              </tr>
              <tr>
                <td>Programming</td>
                <td>render failure, invalid route module, broken island import</td>
                <td>Fail build or show dev diagnostics; hide internals in production output.</td>
              </tr>
            </tbody>
          </table>

          <h2>Use Framework Errors</h2>
          <code-block><pre><code>import { NotFoundError, ValidationError } from '@lessjs/core';

app.get('/api/posts/:id', async (c) => {
  const post = await findPost(c.req.param('id'));
  if (!post) throw new NotFoundError('Post', c.req.param('id'));
  return c.json(post);
});

app.post('/api/posts', async (c) => {
  const body = await c.req.json();
  if (!body.title) {
    throw new ValidationError('Invalid post', [
      { field: 'title', message: 'Title is required' },
    ]);
  }
  return c.json(body, 201);
});</code></pre></code-block>

          <h2>SSR / SSG Errors</h2>
          <p>
            LessJS rendering errors happen during dev SSR or static generation. In development,
            <span class="inline-code">renderSsrError()</span> can show message and stack.
            In production output, errors should be safe and generic.
          </p>
          <p>
            Renderer 2 should improve this further: failures should name the route, tag name, module path
            and original cause, so build logs point to the broken component instead of an empty shell.
          </p>

          <h2>Island Errors</h2>
          <p>
            Island failures happen in the browser after static HTML is already visible.
            Prefer graceful degradation: keep content readable, log the failed island, and avoid global crashes.
          </p>

          <h2>API Error Shape</h2>
          <p>
            <span class="inline-code">LessError#toJSON()</span> returns a small structured payload.
            API routes can use that shape directly when adding global error middleware.
          </p>
          <code-block><pre><code>{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid post"
  }
}</code></pre></code-block>

          <div class="nav-row">
            <a href="/guide/security-middleware" class="nav-link">&larr; Security & Middleware</a>
            <a href="/guide/testing" class="nav-link">Testing &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-error-handling`,xr);var Sr=class extends K{static styles=[q,k`
      .step {
        margin: 1.5rem 0 2rem;
      }

      .step h2 {
        margin-top: 0;
      }

      .note {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 0.75rem 1rem;
        margin: 1rem 0;
      }

      .note p {
        margin: 0;
      }
    `];render(){return B`
      <less-layout currentPath="/guide/getting-started">
        <div class="container">
          <h1>快速开始</h1>
          <p class="subtitle">
            从一个最小项目开始：创建应用、启动开发服务器、构建静态产物，再理解每个目录负责什么。
          </p>

          <div class="callout">
            <p>
              推荐使用 Deno 2.7+。LessJS 是 Deno-first 项目，依赖通过
              <span class="inline-code">deno.json</span> 管理，开发和构建命令都从 Deno task 进入。
            </p>
          </div>

          <section class="step">
            <h2>1. Create a Project</h2>
            <code-block
            ><pre><code>deno run -A jsr:@lessjs/create my-app
              cd my-app</code></pre></code-block>
            <p>
              生成的项目会包含页面路由、示例 island、Vite 配置和常用 Deno tasks。
            </p>
          </section>

          <section class="step">
            <h2>2. Start Dev Server</h2>
            <code-block><pre><code>deno task dev</code></pre></code-block>
            <p>
              开发模式通过 Vite 提供模块加载和刷新，通过生成的 Hono entry 提供 SSR/API 行为。 默认打开
              <span class="inline-code">http://localhost:5173</span>。
            </p>
          </section>

          <section class="step">
            <h2>3. Build Static Output</h2>
            <code-block><pre><code>deno task build</code></pre></code-block>
            <p>
              构建命令会依次生成 SSR bundle、client island entry 和 SSG HTML。 最终产物在 <span
                class="inline-code"
              >dist/</span>，可以部署到任意静态托管平台。
            </p>
          </section>

          <section class="step">
            <h2>4. Preview Production Build</h2>
            <code-block><pre><code>deno task preview</code></pre></code-block>
            <p>
              预览命令用于检查最终静态产物，而不是开发服务器行为。部署前至少跑一次。
            </p>
          </section>

          <h2>Project Shape</h2>
          <code-block
          ><pre><code>my-app/
            |-- app/
            |   |-- routes/
            |   |   |-- index.ts          # page route for /
            |   |   |-- about.ts          # page route for /about
            |   |   └-- api/
            |   |       └-- status.ts     # API route
            |   |-- islands/
            |   |   └-- counter.ts        # client-upgraded Custom Element
            |   └-- _renderer.ts          # optional layout wrapper
            |-- deno.json                 # tasks and imports
            └-- vite.config.ts            # LessJS plugin config</code></pre></code-block>

            <h2>Write a Page</h2>
            <p>
              页面是一个 Web Component。SSR 会把它渲染成 Declarative Shadow DOM， 所以内容在 JavaScript
              运行前就已经可见。
            </p>
            <code-block
            ><pre><code>import { html, LitElement } from 'lit';

            export class HomePage extends LitElement {
              override render() {
                return html&#96;&lt;main&gt;Hello LessJS&lt;/main&gt;&#96;;
              }
            }

            customElements.define('page-home', HomePage);
            export default HomePage;
            export const tagName = 'page-home';</code></pre></code-block>

            <h2>Add Interaction</h2>
            <p>
              把需要客户端行为的组件放进 <span class="inline-code">app/islands</span>。 页面 HTML
              先输出，浏览器加载 island entry 后再升级组件。
            </p>
            <code-block
            ><pre><code>&lt;counter-island count="1"&gt;&lt;/counter-island&gt;</code></pre></code-block>

            <div class="note">
              <p>
                下一步建议先读 <a href="/guide/architecture">Architecture</a>， 再读 <a
                  href="/guide/routing"
                >Routing</a>、<a href="/guide/ssg">Rendering & SSG</a>
                和 <a href="/guide/islands">Island Upgrade</a>。
              </p>
            </div>

            <div class="nav-row">
              <a href="/guide/positioning" class="nav-link">&larr; Framework Positioning</a>
              <a href="/guide/design-philosophy" class="nav-link">Design Philosophy &rarr;</a>
            </div>
          </div>
        </less-layout>
      `}};customElements.define(`page-getting-started`,Sr);var Cr=class extends K{static styles=[q,k`
      .comparison {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 1rem 0 1.5rem;
      }

      .comparison-item {
        padding: 1rem 1.25rem;
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
      }

      .comparison-item.less {
        background: var(--less-bg-surface);
      }

      @media (max-width: 720px) {
        .comparison {
          grid-template-columns: 1fr;
        }
      }
    `];render(){return B`
      <less-layout currentPath="/guide/islands">
        <div class="container">
          <h1>Island Upgrade</h1>
          <p class="subtitle">
            LessJS 的 island 是 DSD HTML 之后的 Custom Element upgrade。它不是整页 hydration，
            也不是把应用状态完整恢复到客户端。
          </p>

          <h2>Why Islands Exist</h2>
          <div class="comparison">
            <div class="comparison-item">
              <h3>Traditional SPA Cost</h3>
              <ul>
                <li>内容和交互都依赖客户端 JavaScript。</li>
                <li>首屏、SEO 和无 JS fallback 需要额外处理。</li>
                <li>组件模型通常绑定某个专有 runtime。</li>
              </ul>
            </div>
            <div class="comparison-item less">
              <h3>LessJS Island Model</h3>
              <ul>
                <li>内容先由 SSG + DSD 输出。</li>
                <li>只有真正需要交互的组件加载客户端模块。</li>
                <li>升级后再绑定事件、本地状态和浏览器 API。</li>
              </ul>
            </div>
          </div>

          <h2>Upgrade, Not Hydration</h2>
          <p>
            浏览器解析 HTML 时，Declarative Shadow DOM 已经把组件内容和样式放进 shadow root。
            客户端入口加载后调用 <span class="inline-code">customElements.define()</span>，
            浏览器把已有元素升级为真正的 Custom Element。这个过程更准确地叫
            <strong>Island Upgrade</strong>。
          </p>

          <h2>When To Create an Island</h2>
          <table>
            <thead>
              <tr>
                <th>Need</th>
                <th>Preferred layer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Readable content, navigation, layout</td>
                <td>HTML + DSD</td>
              </tr>
              <tr>
                <td>Hover, focus, responsive state, simple disclosure</td>
                <td>CSS and native HTML elements</td>
              </tr>
              <tr>
                <td>Clipboard, localStorage, IntersectionObserver, BroadcastChannel</td>
                <td>Small island using browser APIs</td>
              </tr>
              <tr>
                <td>Local state, event orchestration, API polling, optimistic UI</td>
                <td>Island Upgrade</td>
              </tr>
            </tbody>
          </table>

          <h2>Create a Local Island</h2>
          <p>
            本地 island 放在 <span class="inline-code">app/islands</span>。构建器会扫描它， 生成 client
            entry，并在静态 HTML 中注入入口脚本。
          </p>
          <code-block
          ><pre><code>// app/islands/my-counter.ts
            import { css, html, LitElement } from 'lit';

            export const tagName = 'my-counter';

            export default class MyCounter extends LitElement {
              static override styles = css&#96;
                :host { display: inline-flex; gap: 0.5rem; align-items: center; }
              &#96;;

              count = 0;

              override render() {
                return html&#96;
                  &lt;button @click=\\${()=>this.count--}&gt;-&lt;/button&gt;
                  &lt;span&gt;\\${this.count}&lt;/span&gt;
                  &lt;button @click=\\${()=>this.count++}&gt;+&lt;/button&gt;
                &#96;;
              }
            }

            customElements.define(tagName, MyCounter);</code></pre></code-block>

            <h2>Use an Island in a Page</h2>
            <code-block><pre><code>&lt;my-counter&gt;&lt;/my-counter&gt;</code></pre></code-block>
            <p>
              首屏 HTML 中会出现 host 和 shadow root。浏览器加载
              <span class="inline-code">my-counter</span> 模块后，按钮事件才会开始工作。
            </p>

            <h2>Package Islands</h2>
            <p>
              可复用包可以导出 island metadata，LessJS 在构建时读取这些信息，用于 SSR 注册和客户端入口生成。
            </p>
            <code-block
            ><pre><code>import type { PackageIslandMeta } from '@lessjs/core';

            export const islands: PackageIslandMeta[] = [
              {
                tagName: 'less-theme-toggle',
                modulePath: '@lessjs/ui/less-theme-toggle',
                strategy: 'eager',
              },
            ];</code></pre></code-block>

            <h2>Current Boundary</h2>
            <p>
              当前实现仍以全局 island entry 为主。下一阶段需要把
              <span class="inline-code">strategy</span> 从 metadata 真正带进 client build， 并引入页面级
              island manifest，让每个页面只加载实际出现的 island。
            </p>

            <div class="nav-row">
              <a href="/guide/ssg" class="nav-link">&larr; Rendering & SSG</a>
              <a href="/guide/api-routes" class="nav-link">API Routes &rarr;</a>
            </div>
          </div>
        </less-layout>
      `}};customElements.define(`page-islands-guide`,Cr);var wr=class extends K{static styles=[q,k`
      .adr-meta {
        font-size: 0.75rem;
        color: var(--less-text-muted);
        margin-bottom: 1.5rem;
      }
      h2 {
        font-size: 1rem;
        font-weight: 500;
        margin: 1.5rem 0 0.5rem;
        color: var(--less-text-primary);
      }
      h3 {
        font-size: 0.875rem;
        font-weight: 500;
        margin: 1rem 0 0.25rem;
        color: var(--less-text-secondary);
      }
      p {
        font-size: 0.8125rem;
        line-height: 1.7;
        color: var(--less-text-secondary);
        margin: 0 0 0.75rem;
      }
      .code-block {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 1rem;
        font-family: "SF Mono", "Fira Code", monospace;
        font-size: 0.75rem;
        line-height: 1.6;
        overflow-x: auto;
        margin: 0.75rem 0 1.25rem;
        color: var(--less-text-secondary);
        white-space: pre;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.8125rem;
        margin: 0.75rem 0;
      }
      th, td {
        padding: 0.5rem 0.75rem;
        text-align: left;
        border-bottom: 0.5px solid var(--less-border);
      }
      th {
        font-weight: 500;
        color: var(--less-text-primary);
      }
    `];render(){return B`
      <less-layout currentPath="/guide/less-compiler">
        <div class="container">
          <p class="adr-meta">ADR 0002 · 2026-04-30 · Draft · v0.10.0 alpha target</p>
          <h1>.less Compiler — Optional Zero-Framework Authoring</h1>

          <h2>Context</h2>
          <p>
            LessJS 的 docs 站和 UI 包现在仍使用 <code>lit</code> 编写组件，但 core 的长期合同应该是
            DSD-first renderer + framework adapters，而不是把 Lit 写进框架本体。Lit 是成熟、可靠的 Web
            Components 工具库；问题不在于它“不好”，而在于 LessJS 不应该把它变成唯一道路。
          </p>
          <p>
            当前需要面对的是：Lit-authored islands 的运行时代价、adapter 的 SSR/style extraction 复杂度、
            旧 Lit SSR 语境遗留的 hydration 术语漂移，以及 tagged template literals 在 Deno fmt 上的
            上游兼容问题。
          </p>

          <h2>Proposal</h2>
          <p>
            引入可选的 <code>.less</code> 文件格式。编译器在 build time 将它转换成 vanilla Custom
            Elements，让这类组件做到 0 KB framework runtime。Lit 继续作为 adapter 存在，不作为 v0.5-v0.9
            的阻塞项，也不在 v0.x 被草率移除。
          </p>

          <h3>.less file format</h3>
          <div class="code-block">
            &lt;!-- my-counter.less --&gt; &lt;template&gt; &lt;button
            @click="decrement"&gt;−&lt;/button&gt; &lt;span&gt;{count}&lt;/span&gt; &lt;button
            @click="increment"&gt;+&lt;/button&gt; &lt;/template&gt; &lt;script&gt; count = 0 increment()
            { this.count++ } decrement() { this.count-- } &lt;/script&gt; &lt;style&gt; :host { display:
            inline-flex; gap: 0.5rem; align-items: center; } &lt;/style&gt;
          </div>

          <h3>What the compiler eliminates</h3>
          <table>
            <tr>
              <th>Layer</th>
              <th>Before (Lit adapter)</th>
              <th>After (.less compiler)</th>
            </tr>
            <tr>
              <td>Runtime</td>
              <td>Lit runtime for Lit-authored islands</td>
              <td>0 KB framework runtime for compiled Custom Elements</td>
            </tr>
            <tr>
              <td>SSR</td>
              <td>adapter-mediated rendering</td>
              <td>LessJS DSD renderer / template strings</td>
            </tr>
            <tr>
              <td>Upgrade</td>
              <td>Custom Element upgrade</td>
              <td>Custom Element upgrade</td>
            </tr>
            <tr>
              <td>Build</td>
              <td>esbuild + Lit semantics</td>
              <td>standard TS/JS output</td>
            </tr>
            <tr>
              <td>Tests</td>
              <td>adapter tests required</td>
              <td>compiler fixture tests required</td>
            </tr>
          </table>

          <h2>SSG integration</h2>
          <p>
            The route scanner already maps <code>app/routes/*.ts</code> to URL paths. Extend it to also
            scan .less files. Page .less files render directly (template is the page). Island .less files
            get lazy chunk treatment.
          </p>

          <h2>Backward compatibility</h2>
          <p>
            可能的配置形态是 <code>compiler: 'lit' | 'kiss' | 'auto'</code>。其中
            <code>auto</code> 表示 <code>.less</code> 文件走编译器，<code>.ts</code> 组件继续走现有
            adapter。v0.10.0 只应把它作为 alpha 能力引入；v1.0 是否默认启用仍是开放决策。
          </p>

          <div class="nav-row" style="margin-top:2rem">
            <a href="/guide/pwa" class="nav-link">PWA Support &rarr;</a>
            <a href="/roadmap" class="nav-link">Roadmap &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-less-compiler`,wr);var Tr=class extends K{static styles=[q];render(){return B`
      <less-layout currentPath="/guide/positioning">
        <div class="container">
          <h1>框架定位</h1>
          <p class="subtitle">
            LessJS 是一个 Deno-first、Web Standards-first、static-first 的 Web
            框架。它的目标不是成为所有场景的最大框架，而是把内容优先、渐进增强和 Serverless API
            组织成一条可信的工程路径。
          </p>

          <h2>一句话定位</h2>
          <p>
            LessJS 用 <strong>DSD-rendered Web Components</strong> 输出首屏 HTML， 用 <strong>Island
              Upgrade</strong> 接管少量交互，用
            <strong>Hono + Fetch API</strong> 提供服务端能力，用
            <strong>SSG</strong> 作为默认交付形态。
          </p>

          <div class="callout">
            <p>
              这不是“另一个 hydration 框架”。更准确地说，LessJS 是一个把 Web Components、 Declarative
              Shadow DOM、ESM、Fetch API 和静态部署打通的应用骨架。
            </p>
          </div>

          <h2>最适合的场景</h2>
          <table>
            <thead>
              <tr>
                <th>场景</th>
                <th>为什么适合</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>文档站和产品站</td>
                <td>SSG 产物简单，首屏 HTML 稳定，交互通常集中在少数 island。</td>
              </tr>
              <tr>
                <td>博客和内容站</td>
                <td>内容优先、可爬取、可缓存，后续可以引入 PWA 和增量构建。</td>
              </tr>
              <tr>
                <td>轻量 Serverless 应用</td>
                <td>Hono API routes 和 Fetch 模型让部署到 Deno Deploy、Workers 等平台更自然。</td>
              </tr>
              <tr>
                <td>组件化设计系统展示</td>
                <td>Web Components 是平台能力，包级 island 可以跨项目复用。</td>
              </tr>
            </tbody>
          </table>

          <h2>暂时不主打的场景</h2>
          <p>
            LessJS 可以演进到更复杂的全栈应用，但当前文档不应把下列能力描述成成熟卖点：
          </p>
          <ul>
            <li>高频数据后台、CRM、复杂权限系统。</li>
            <li>生产级 ISR、分布式 cache lock、revalidate queue。</li>
            <li>整页客户端状态框架和传统 SPA 路由。</li>
            <li>完全消除 Lit 的生产级 compiler。</li>
          </ul>

          <h2>与常见框架的关系</h2>
          <table>
            <thead>
              <tr>
                <th>框架</th>
                <th>LessJS 不追随的部分</th>
                <th>LessJS 借鉴的部分</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Astro</td>
                <td>多 UI 框架整合不是近期目标。</td>
                <td>内容优先、岛屿交互、静态交付。</td>
              </tr>
              <tr>
                <td>Fresh</td>
                <td>不绑定 Preact，也不把 JSX 当作核心 DSL。</td>
                <td>Deno-first、Fetch-first、island-first。</td>
              </tr>
              <tr>
                <td>Next / Nuxt</td>
                <td>不以大型全栈平台为默认复杂度。</td>
                <td>路由约定、构建产物、部署适配器的工程纪律。</td>
              </tr>
            </tbody>
          </table>

          <h2>文档承诺</h2>
          <p>
            LessJS 文档应该只承诺当前能验证的能力，把未来功能明确标为 roadmap。
            如果某个功能依赖尚未完成的安全边界、构建 metadata、平台 adapter 或运行时约定，
            文档必须直接说明它还不是稳定路径。
          </p>

          <div class="nav-row">
            <a href="/guide/getting-started" class="nav-link">Getting Started &rarr;</a>
            <a href="/guide/architecture" class="nav-link">Architecture &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-positioning`,Tr);var Er=class extends K{static styles=[q,k`
      .adr-meta {
        font-size: 0.75rem;
        color: var(--less-text-muted);
        margin-bottom: 1.5rem;
      }
      h2 {
        font-size: 1rem;
        font-weight: 500;
        margin: 1.5rem 0 0.5rem;
        color: var(--less-text-primary);
      }
      h3 {
        font-size: 0.875rem;
        font-weight: 500;
        margin: 1rem 0 0.25rem;
        color: var(--less-text-secondary);
      }
      p {
        font-size: 0.8125rem;
        line-height: 1.7;
        color: var(--less-text-secondary);
        margin: 0 0 0.75rem;
      }
      .code-block {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        padding: 1rem;
        font-family: "SF Mono", "Fira Code", monospace;
        font-size: 0.75rem;
        line-height: 1.6;
        overflow-x: auto;
        margin: 0.75rem 0 1.25rem;
        color: var(--less-text-secondary);
        white-space: pre;
      }
    `];render(){return B`
      <less-layout currentPath="/guide/pwa">
        <div class="container">
          <p class="adr-meta">ADR 0003 · 2026-04-30 · Partially implemented</p>
          <h1>PWA Support for LessJS SSG</h1>

          <h2>Context</h2>
          <p>
            LessJS generates pure static HTML with Declarative Shadow DOM. This is the ideal substrate for
            a PWA: pages are pre-rendered, assets are versioned hashes, and API routes can stay outside
            the static artifact on a serverless platform. The important rule is freshness: HTML should
            prefer network, while hashed assets can prefer cache.
          </p>

          <h2>Implementation</h2>
          <p>
            Added to <code>build-ssg.ts</code> — after Phase 3, the SSG script generates:
          </p>
          <ul
            style="font-size:0.8125rem;color:var(--less-text-secondary);margin:0.5rem 0 1rem;line-height:1.8"
          >
            <li><code>manifest.json</code> — Web App Manifest with name, theme_color, icons</li>
            <li>
              <code>sw.js</code> — Service Worker with NetworkFirst (HTML/API) + CacheFirst (assets)
            </li>
            <li>HTML injection — <code>&lt;link rel="manifest"&gt;</code> + sw registration script</li>
          </ul>

          <h3>API</h3>
          <div class="code-block">
            // vite.config.ts export default defineConfig({ plugins: [less({ pwa: { name: 'My LessJS App',
            shortName: 'LessJS', themeColor: '#000000', backgroundColor: '#ffffff', }, })], })
          </div>

          <h3>Service Worker strategy</h3>
          <div class="code-block">
            self.addEventListener('install', () => self.skipWaiting()) self.addEventListener('fetch', (e)
            => { const url = new URL(e.request.url) const isAsset = /\\.[a-z0-9]+$/i.test(url.pathname) &&
            !url.pathname.includes('/api/') e.respondWith(isAsset ? cacheFirst(e.request) :
            networkFirst(e.request)) })
          </div>

          <h2>Current status</h2>
          <p>
            The <code>build-ssg.ts</code> script accepts a <code>pwa</code> option. When provided, it
            generates manifest.json and sw.js in the output directory, and injects manifest links + sw
            registration into every HTML file. The <code>less()</code> plugin already carries this option
            through build metadata.
          </p>
          <p>
            Benefit: offline access, instant repeat visits, installable on mobile. Cost: ~100 lines of
            code. No dependency on Workbox. The current service worker intentionally avoids full precache
            because stale <code>index.html</code> is worse than a first-load network request.
          </p>

          <div class="nav-row" style="margin-top:2rem">
            <a href="/guide/less-compiler" class="nav-link">&larr; LessJS Compiler</a>
            <a href="/roadmap" class="nav-link">Roadmap &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-pwa`,Er);var Dr=class extends K{static styles=[q];render(){return B`
      <less-layout currentPath="/guide/routing">
        <div class="container">
          <h1>路由</h1>
          <p class="subtitle">
            LessJS 使用文件系统路由。一个页面文件对应一个 URL；特殊文件用于 layout wrapping、
            middleware 和 API handlers。
          </p>

          <h2>Page Routes</h2>
          <p>
            <span class="inline-code">app/routes</span> 下的页面组件会被扫描成页面路由。
            页面模块必须默认导出 Custom Element class，并导出
            <span class="inline-code">tagName</span>。
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
                <td><span class="inline-code">app/routes/docs/index.ts</span></td>
                <td><span class="inline-code">/docs</span></td>
              </tr>
              <tr>
                <td><span class="inline-code">app/routes/docs/install.ts</span></td>
                <td><span class="inline-code">/docs/install</span></td>
              </tr>
            </tbody>
          </table>

          <h2>Dynamic Segments</h2>
          <p>
            方括号会转换成 Hono route params。SSR 时这些 params 会作为同名 property
            写入页面组件。
          </p>
          <table>
            <thead>
              <tr>
                <th>File</th>
                <th>Route</th>
                <th>Property</th>
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

          <code-block><pre><code>export class PostPage extends LitElement {
  slug = '';

  override render() {
    return html&#96;&lt;article&gt;Post: \${this.slug}&lt;/article&gt;&#96;;
  }
}</code></pre></code-block>

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
                <td>Wraps SSR output for a route subtree. Use it for layout shells or document-level composition.</td>
              </tr>
              <tr>
                <td><span class="inline-code">_middleware.ts</span></td>
                <td>Mounts Hono middleware for a route subtree. Use it for headers, auth, CSP nonce and request guards.</td>
              </tr>
              <tr>
                <td><span class="inline-code">api/*.ts</span></td>
                <td>Defines Hono API handlers under the same file-system route tree.</td>
              </tr>
            </tbody>
          </table>

          <h2>Route Module Contract</h2>
          <code-block><pre><code>import { html, LitElement } from 'lit';

export class AboutPage extends LitElement {
  override render() {
    return html&#96;&lt;main&gt;About&lt;/main&gt;&#96;;
  }
}

customElements.define('page-about', AboutPage);
export default AboutPage;
export const tagName = 'page-about';</code></pre></code-block>

          <h2>Current Boundary</h2>
          <p>
            路由扫描已经可以稳定处理页面、动态片段、renderer、middleware 和 API routes。
            v0.5.3 已修复根级 <span class="inline-code">_middleware.ts</span> 的挂载范围——
            现在会正确生成 <span class="inline-code">app.use('/*', ...)</span> 覆盖整个路由树。
          </p>

          <div class="nav-row">
            <a href="/guide/architecture" class="nav-link">&larr; Architecture</a>
            <a href="/guide/ssg" class="nav-link">Rendering & SSG &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-routing-guide`,Dr);var Or=class extends K{static styles=[q,k`
      .chain {
        padding: 1rem;
        background: var(--less-bg-surface);
        border-left: 2px solid var(--less-border-hover);
        border-radius: 0 4px 4px 0;
        margin: 1rem 0;
        font-family: "SF Mono", "Fira Code", "Consolas", monospace;
        font-size: 0.8125rem;
        line-height: 1.8;
        color: var(--less-text-secondary);
        white-space: pre-wrap;
      }
    `];render(){return B`
      <less-layout currentPath="/guide/security-middleware">
        <div class="container">
          <h1>安全与中间件</h1>
          <p class="subtitle">
            Middleware is where LessJS connects route-tree structure with production safety:
            request headers, CSP, auth guards, CORS and API-specific protections.
          </p>

          <h2>Mental Model</h2>
          <p>
            LessJS middleware is Hono middleware mounted from file-system route scopes.
            A middleware file affects its route subtree; nested middleware composes from outer to inner scope.
          </p>
          <div class="chain">request
  -> root middleware
  -> nested middleware
  -> page or API handler
  -> response post-processing</div>

          <h2>Route-Tree Middleware</h2>
          <table>
            <thead>
              <tr>
                <th>File</th>
                <th>Intended scope</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="inline-code">app/routes/_middleware.ts</span></td>
                <td>All pages and API routes.</td>
              </tr>
              <tr>
                <td><span class="inline-code">app/routes/admin/_middleware.ts</span></td>
                <td><span class="inline-code">/admin/*</span></td>
              </tr>
              <tr>
                <td><span class="inline-code">app/routes/api/_middleware.ts</span></td>
                <td><span class="inline-code">/api/*</span></td>
              </tr>
            </tbody>
          </table>

          <code-block><pre><code>// app/routes/admin/_middleware.ts
import type { Context, Next } from 'hono';

export default async function adminOnly(c: Context, next: Next) {
  const session = c.req.header('x-session');
  if (!session) return c.text('Unauthorized', 401);
  await next();
}</code></pre></code-block>

          <h2>CSP</h2>
          <p>
            CSP is a framework-level trust boundary because LessJS emits HTML, DSD templates and island scripts.
            If CSP is enabled for SSR responses, SSG output must receive the equivalent meta policy during static
            post-processing.
          </p>
          <code-block><pre><code>// vite.config.ts
less({
  middleware: {
    csp: {
      policy: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'",
      nonce: false,
      reportOnly: false,
    },
  },
});</code></pre></code-block>

          <h2>CORS</h2>
          <p>
            Configure CORS deliberately for API routes. Content pages often do not need cross-origin access;
            API routes often do.
          </p>
          <code-block><pre><code>less({
  middleware: {
    corsOrigin: 'https://example.com',
  },
});</code></pre></code-block>

          <h2>Security Headers</h2>
          <p>
            Common production headers should be enabled in one place and tested through both SSR and SSG paths.
          </p>
          <ul>
            <li><span class="inline-code">X-Content-Type-Options: nosniff</span></li>
            <li><span class="inline-code">X-Frame-Options</span> or equivalent CSP frame policy</li>
            <li><span class="inline-code">Referrer-Policy</span></li>
            <li><span class="inline-code">Permissions-Policy</span></li>
            <li><span class="inline-code">Content-Security-Policy</span> or SSG meta equivalent</li>
          </ul>

          <h2>Current Boundary</h2>
          <p>
            Two security issues should stay visible until fixed: root middleware must mount across the whole route tree,
            and SSG must not drop CSP when it post-processes static HTML. These are P1 reliability items because they
            affect production protections, not only developer ergonomics.
          </p>

          <div class="nav-row">
            <a href="/guide/configuration" class="nav-link">&larr; Configuration</a>
            <a href="/guide/error-handling" class="nav-link">Error Handling &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-security-middleware`,Or);var kr=class extends K{static styles=[q];render(){return B`
      <less-layout currentPath="/guide/ssg">
        <div class="container">
          <h1>渲染与 SSG</h1>
          <p class="subtitle">
            LessJS 的默认生产产物是静态 HTML。构建阶段会把页面渲染成带 Declarative Shadow DOM
            的文档，并注入必要的 client island entry。
          </p>

          <h2>Default Output</h2>
          <p>
            对用户来说，生产构建只有一个入口：
          </p>
          <code-block><pre><code>deno task build</code></pre></code-block>
          <p>
            结果写入 <span class="inline-code">dist/</span>。如果应用没有动态 API 依赖，
            这个目录可以直接部署到 GitHub Pages、Cloudflare Pages、Netlify、Vercel static output
            或 S3/CloudFront。
          </p>

          <h2>What Gets Rendered</h2>
          <p>
            页面组件会在构建时执行 SSR，输出 Web Component host 和 shadow root template。
            内容在 JavaScript 下载前就已经存在于 HTML 中。
          </p>
          <code-block><pre><code>&lt;page-home&gt;
  &lt;template shadowrootmode="open"&gt;
    &lt;style&gt;/* component styles */&lt;/style&gt;
    &lt;main&gt;Readable content first.&lt;/main&gt;
  &lt;/template&gt;
&lt;/page-home&gt;</code></pre></code-block>

          <h2>Three Internal Phases</h2>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Input</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SSR bundle</td>
                <td>routes, renderers, middleware, API handlers, islands</td>
                <td>generated Hono entry and <span class="inline-code">.less/build-metadata.json</span></td>
              </tr>
              <tr>
                <td>Client islands</td>
                <td>build metadata</td>
                <td>island entry and browser chunks under <span class="inline-code">dist/client</span></td>
              </tr>
              <tr>
                <td>SSG</td>
                <td>generated Hono app</td>
                <td>static HTML, copied assets and post-processed document head</td>
              </tr>
            </tbody>
          </table>

          <h2>DSD Semantics</h2>
          <table>
            <thead>
              <tr>
                <th>Capability</th>
                <th>Current state</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First screen</td>
                <td>Rendered HTML is visible before client JavaScript runs.</td>
              </tr>
              <tr>
                <td>Component styles</td>
                <td>Styles can be emitted into shadow roots through the Lit adapter path.</td>
              </tr>
              <tr>
                <td>Interaction</td>
                <td>Custom Elements upgrade after the island module is loaded.</td>
              </tr>
              <tr>
                <td>Nested DSD</td>
                <td>v0.6.0: Fully implemented with recursive rendering and slot projection.</td>
              </tr>
              <tr>
                <td>Safe HTML</td>
                <td>v0.6.0: SafeHtml/UnsafeHtml branded types with proper escaping semantics.</td>
              </tr>
            </tbody>
          </table>

          <h2>Security Post-Processing</h2>
          <p>
            SSG output must preserve security behavior from the generated Hono entry. CSP metadata, nonces,
            PWA head tags and island scripts should be injected through one shared post-processing path,
            so static deployment does not silently lose protections that exist in SSR mode.
          </p>

          <h2>Not ISR Yet</h2>
          <p>
            LessJS 当前稳定交付是 SSG。ISR 需要 route-level revalidate、cache lock、adapter contracts、
            failure fallback 和 CDN semantics。它属于 roadmap，而不是当前可依赖的生产能力。
          </p>

          <div class="nav-row">
            <a href="/guide/routing" class="nav-link">&larr; Routing</a>
            <a href="/guide/islands" class="nav-link">Island Upgrade &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-ssg-guide`,kr);var Ar=class extends K{static styles=[q];render(){return B`
      <less-layout currentPath="/guide/testing">
        <div class="container">
          <h1>测试</h1>
          <p class="subtitle">
            LessJS tests should protect the framework contract: route scanning, DSD output, island
            metadata, middleware scope, SSG post-processing and package boundaries.
          </p>

          <h2>Project Tests</h2>
          <p>
            Application code can use Deno's built-in test runner. Start with units for pure logic and API
            handlers, then add build smoke tests for the routes that matter most.
          </p>
          <code-block
          ><pre><code>deno test --allow-read --allow-write --allow-env --allow-net --allow-run</code></pre></code-block>

          <h2>Route Utilities</h2>
          <code-block
          ><pre><code>import { assertEquals } from 'jsr:@std/assert';
            import { extractParams, parseQuery } from '@lessjs/core';

            Deno.test('extractParams parses dynamic segments', () => {
              const params = extractParams('/users/:id', '/users/42');
              assertEquals(params, { id: '42' });
            });

            Deno.test('parseQuery returns plain values', () => {
              const query = parseQuery(new URL('https://example.com/?page=2'));
              assertEquals(query, { page: '2' });
            });</code></pre></code-block>

            <h2>Build Smoke Test</h2>
            <p>
              A static-first framework needs at least one test that builds the site and verifies generated
              HTML. This catches route scanner, SSR, client island and SSG integration problems.
            </p>
            <code-block
            ><pre><code>deno task build
              # then inspect dist/index.html, dist/client, manifest, CSP/PWA tags as needed</code></pre></code-block>

              <h2>Framework CI Baseline</h2>
              <p>
                For this repository, the package-level CI baseline is intentionally narrower than a full-root
                lint/typecheck because generated docs/public assets can have different tool constraints.
              </p>
              <code-block
              ><pre><code>deno test --allow-read --allow-write --allow-env --allow-net --allow-run
                deno lint packages/
                deno fmt --check packages/
                deno check packages/core/src/index.ts packages/rpc/src/index.ts packages/ui/src/index.ts
                deno task build:all</code></pre></code-block>

                <h2>High-Value Regression Tests</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Area</th>
                      <th>Test</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Middleware</td>
                      <td>
                        Root <span class="inline-code">_middleware.ts</span> protects <span class="inline-code"
                        >/</span> and nested routes.
                      </td>
                    </tr>
                    <tr>
                      <td>SSG CSP</td>
                      <td>Static HTML receives CSP meta when middleware CSP is configured.</td>
                    </tr>
                    <tr>
                      <td>Nested islands</td>
                      <td>
                        <span class="inline-code">app/islands/posts/index.ts</span> resolves to the scanned file
                        path.
                      </td>
                    </tr>
                    <tr>
                      <td>Strategies</td>
                      <td>
                        Package and default island strategies are represented in the generated client entry.
                      </td>
                    </tr>
                    <tr>
                      <td>Renderer</td>
                      <td>
                        Unsafe HTML, attributes, nested DSD and Lit adapter output have explicit expectations.
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h2>Browser Tests</h2>
                <p>
                  Use browser tests when behavior depends on Custom Element upgrade, IntersectionObserver, idle
                  loading, service workers or real DOM semantics. Unit tests are not enough for island strategy
                  work.
                </p>

                <div class="nav-row">
                  <a href="/guide/error-handling" class="nav-link">&larr; Error Handling</a>
                  <a href="/guide/deployment" class="nav-link">Deployment &rarr;</a>
                </div>
              </div>
            </less-layout>
          `}};customElements.define(`page-testing`,Ar);var jr=class extends K{static styles=k`
    :host {
      display: block;
      min-height: 100vh;
    }

    less-layout {
      min-height: 100vh;
    }

    .hero {
      background: #050505;
      color: #fff;
      border-bottom: 0.5px solid #222;
    }

    .hero-inner {
      max-width: 960px;
      margin: 0 auto;
      min-height: 54vh;
      padding: 3rem 1.5rem;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(18rem, 24rem);
      align-items: center;
      gap: 3rem;
    }

    .eyebrow {
      margin: 0 0 0.75rem;
      color: #9ca3af;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h1 {
      margin: 0;
      font-size: clamp(3rem, 9vw, 6rem);
      font-weight: 520;
      line-height: 0.95;
      letter-spacing: 0;
    }

    .hero-copy {
      margin: 1.25rem 0 0;
      max-width: 34rem;
      color: #d1d5db;
      font-size: 1rem;
      line-height: 1.75;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1.75rem;
    }

    .hero-actions a {
      display: inline-flex;
      align-items: center;
      min-height: 2.5rem;
      padding: 0 1rem;
      border-radius: 4px;
      border: 0.5px solid #3f3f46;
      color: #fff;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .hero-actions a.primary {
      background: #fff;
      border-color: #fff;
      color: #050505;
    }

    .signal {
      border: 0.5px solid #27272a;
      border-radius: 6px;
      background: #0f0f10;
      overflow: hidden;
    }

    .signal-row {
      display: grid;
      grid-template-columns: 5rem 1fr;
      gap: 1rem;
      padding: 1rem;
      border-bottom: 0.5px solid #27272a;
    }

    .signal-row:last-child {
      border-bottom: 0;
    }

    .signal-key {
      color: #a1a1aa;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .signal-value {
      color: #f4f4f5;
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .content {
      max-width: 960px;
      margin: 0 auto;
      padding: 3rem 1.5rem 4rem;
    }

    .band {
      display: grid;
      grid-template-columns: 15rem minmax(0, 1fr);
      gap: 2rem;
      padding: 2rem 0;
      border-bottom: 0.5px solid var(--less-border);
    }

    .band:last-child {
      border-bottom: 0;
    }

    h2 {
      margin: 0;
      color: var(--less-text-primary);
      font-size: 1rem;
      font-weight: 560;
    }

    p {
      margin: 0 0 0.75rem;
      color: var(--less-text-secondary);
      font-size: 0.875rem;
      line-height: 1.75;
    }

    .link-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.75rem;
    }

    .doc-link {
      display: block;
      border: 0.5px solid var(--less-border);
      border-radius: 5px;
      padding: 1rem;
      text-decoration: none;
      color: inherit;
      transition: border-color 0.15s, background 0.15s;
    }

    .doc-link:hover {
      border-color: var(--less-border-hover);
      background: var(--less-bg-surface);
    }

    .doc-link strong {
      display: block;
      margin-bottom: 0.35rem;
      color: var(--less-text-primary);
      font-size: 0.875rem;
      font-weight: 560;
    }

    .doc-link span {
      display: block;
      color: var(--less-text-tertiary);
      font-size: 0.8125rem;
      line-height: 1.55;
    }

    code {
      font-family: "SF Mono", "Fira Code", "Consolas", monospace;
      background: var(--less-code-bg);
      border: 0.5px solid var(--less-code-border);
      border-radius: 3px;
      padding: 0.125rem 0.375rem;
      font-size: 0.8125rem;
      color: var(--less-text-secondary);
    }

    @media (max-width: 760px) {
      .hero-inner,
      .band {
        grid-template-columns: 1fr;
      }

      .hero-inner {
        min-height: auto;
        gap: 2rem;
      }

      .link-grid {
        grid-template-columns: 1fr;
      }
    }
  `;render(){return B`
      <less-layout home>
        <section class="hero">
          <div class="hero-inner">
            <div>
              <p class="eyebrow">Deno-first / Web Standards-first / Static-first</p>
              <div style="display:flex;align-items:center;gap:0.5rem;">
                <img
                  src="/assets/less-logo-inverted.svg"
                  alt="LessJS"
                  style="width:120px;height:auto;display:block;flex-shrink:0;"
                >
                <span style="font-size:clamp(3rem,9vw,6rem);font-weight:520;line-height:0.95;color:#fff;"
                >Less</span>
              </div>
              <p class="hero-copy">
                一个以 DSD-rendered Web Components 为首屏模型、以 Island Upgrade 为交互模型、以 Hono API
                为服务端模型、以 SSG 为默认交付模型的 Web 框架。
              </p>
              <div class="hero-actions">
                <a class="primary" href="/guide/positioning">理解定位</a>
                <a href="/guide/getting-started">开始使用</a>
              </div>
            </div>

            <div class="signal" aria-label="LessJS architecture summary">
              <div class="signal-row">
                <div class="signal-key">Render</div>
                <div class="signal-value">HTML first, Declarative Shadow DOM first.</div>
              </div>
              <div class="signal-row">
                <div class="signal-key">Client</div>
                <div class="signal-value">Only islands upgrade into live Custom Elements.</div>
              </div>
              <div class="signal-row">
                <div class="signal-key">Server</div>
                <div class="signal-value">Hono, Fetch API, route-level middleware, API routes.</div>
              </div>
              <div class="signal-row">
                <div class="signal-key">Output</div>
                <div class="signal-value">Static files first; dynamic capability is explicit.</div>
              </div>
            </div>
          </div>
        </section>

        <main class="content">
          <section class="band">
            <h2>What LessJS Is</h2>
            <div>
              <p>
                LessJS
                的核心不是重新发明组件框架，而是把浏览器已经拥有的能力组织成一条小而清晰的生产路径：
                路由映射页面组件，SSR 生成 DSD HTML，构建阶段抽取 island client entry， SSG
                产出可以直接部署的静态站点。
              </p>
              <p>
                这让它天然适合文档、博客、内容站、营销页和轻量 serverless
                应用。大型后台和高频数据应用可以做， 但必须等 actions、session、validation、revalidation
                等生产约定更成熟后再作为主打场景。
              </p>
            </div>
          </section>

          <section class="band">
            <h2>What LessJS Is Not</h2>
            <div>
              <p>
                它不是 React/Vue 风格的整页 hydration 框架，也不应该提前承诺 ISR、零 JS 全站交互、
                或生产级 compiler 消除 Lit。LessJS 更愿意把边界写清楚，把已有能力做稳。
              </p>
              <p>
                当前稳定重心是 <code>SSG + DSD + Hono API + package islands</code>。
                未来能力会围绕这些边界渐进增加，而不是把所有现代框架关键词一次性塞进文档。
              </p>
            </div>
          </section>

          <section class="band">
            <h2>Read Next</h2>
            <div class="link-grid">
              <a class="doc-link" href="/guide/positioning">
                <strong>Framework Positioning</strong>
                <span>先理解 LessJS 解决什么问题，以及它暂时不解决什么问题。</span>
              </a>
              <a class="doc-link" href="/guide/architecture">
                <strong>Architecture</strong>
                <span>查看构建管线、渲染模型、island 升级和生产边界。</span>
              </a>
              <a class="doc-link" href="/guide/getting-started">
                <strong>Getting Started</strong>
                <span>创建项目、启动开发服务器、构建并预览静态产物。</span>
              </a>
              <a class="doc-link" href="/roadmap">
                <strong>Roadmap</strong>
                <span>了解近期修复、v0.6 渲染硬化、v0.7 island manifest 和后续方向。</span>
              </a>
            </div>
          </section>
        </main>
      </less-layout>
    `}};customElements.define(`docs-home`,jr);var Mr=class extends K{static styles=[q,k`
      .phase {
        margin: 1rem 0;
        padding: 1rem 1.25rem;
        border-left: 2px solid var(--less-border-hover);
        background: var(--less-bg-surface);
        border-radius: 0 4px 4px 0;
      }

      .phase h3 {
        margin-top: 0;
      }

      .status {
        display: inline-block;
        margin-bottom: 0.35rem;
        color: var(--less-text-muted);
        font-size: 0.6875rem;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
    `];render(){return B`
      <less-layout currentPath="/roadmap">
        <div class="container">
          <h1>Roadmap</h1>
          <p class="subtitle">
            LessJS 的路线图围绕一个判断展开：先把 SSG + DSD + Island Upgrade + Hono API 做可信，再扩展
            serverless fullstack、ISR、PWA 和 compiler。
          </p>

          <div class="callout">
            <p>
              Roadmap 不是宣传页。这里列出的未来项只有进入实现和测试后，才会被写成稳定用户指南。
            </p>
          </div>

          <h2>Now: v0.6 Stabilization</h2>
          <p>
            v0.6.0-alpha.1 已完成 DSD + Island + CSS 变量主题 + Signals 二开 + Form-Associated CE +
            Navigation API + dialog/popover + Speculative Loading 架构审查全部 8 Phase 38 项任务。
            当前聚焦稳定化：回归测试、文档更新、alpha 反馈收集。
          </p>
          <table>
            <thead>
              <tr>
                <th>Area</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TC39 Signals 二开</td>
                <td>✅ Done</td>
                <td>
                  <span class="inline-code">@lessjs/signal</span>：
                  <span class="inline-code">signal()</span>、
                  <span class="inline-code">computed()</span>、
                  <span class="inline-code">effect()</span>、
                  <span class="inline-code">islandEffect()</span>。 浏览器原生 <span class="inline-code"
                  >Signal</span> 条件回退。
                </td>
              </tr>
              <tr>
                <td>DSD 规范对齐</td>
                <td>✅ Done</td>
                <td>
                  <span class="inline-code">shadowrootdelegatesfocus</span>、
                  <span class="inline-code">shadowrootserializable</span>、
                  <span class="inline-code">shadowrootslotassignment</span>、
                  <span class="inline-code">shadowrootcustomelementregistry</span>。
                  <span class="inline-code">inferDsdOptions()</span> 自动推断。
                </td>
              </tr>
              <tr>
                <td>Form-Associated CE</td>
                <td>✅ Done</td>
                <td>
                  <span class="inline-code">less-button</span>、
                  <span class="inline-code">less-input</span> 使用
                  <span class="inline-code">ElementInternals</span>，支持
                  <span class="inline-code">:state()</span> 伪类。
                </td>
              </tr>
              <tr>
                <td>Navigation API</td>
                <td>✅ Done</td>
                <td>
                  <span class="inline-code">navigate()</span>、
                  <span class="inline-code">onNavigate()</span>、
                  <span class="inline-code">matchRoute()</span>。 URLPattern + regex fallback。
                </td>
              </tr>
              <tr>
                <td>Speculative Loading</td>
                <td>✅ Done</td>
                <td>
                  <span class="inline-code">&lt;link rel="modulepreload"&gt;</span> for eager；
                  <span class="inline-code">&lt;link rel="prefetch"&gt;</span> for lazy。
                </td>
              </tr>
              <tr>
                <td>dialog/popover + inert</td>
                <td>✅ Done</td>
                <td>
                  原生 <span class="inline-code">&lt;dialog&gt;</span> +
                  <span class="inline-code">::backdrop</span> +
                  <span class="inline-code">inert</span> 无障碍。
                </td>
              </tr>
              <tr>
                <td>Island 系统改进</td>
                <td>✅ Done</td>
                <td>
                  Mixin 替代猴子补丁，适配器显式注入，
                  <span class="inline-code">idle</span> 降级改进。
                </td>
              </tr>
              <tr>
                <td>Quick Wins</td>
                <td>✅ Done</td>
                <td>
                  <span class="inline-code">prefers-color-scheme</span>、escapeHtml 统一、 语义化
                  HTML、CSS 去重。
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Release Phases</h2>
          <div class="phase">
            <span class="status">v0.5.3 done</span>
            <h3>Trust Release</h3>
            <p>
              修复根 middleware scope、island chunk 双前缀、strategy 传递、嵌套 island 路径、SSG CSP
              注入和 DEFAULT_NAV 同步。 文档承诺与构建产物对齐，309 测试通过，构建全流程验证。
            </p>
          </div>

          <div class="phase">
            <span class="status">v0.6.0-alpha.1 done</span>
            <h3>DSD + Island Architecture + Signals + Web Standards</h3>
            <p>
              Declarative Shadow DOM SSR、Safe/Unsafe HTML 品牌类型、L2 嵌套 DSD 递归渲染、 CSS Custom
              Properties 主题系统（替代 _propagateTheme DOM 遍历）、Island 懒加载策略、 TC39
              signal-polyfill 二开（signal/computed/effect/islandEffect）、 DSD
              规范对齐（delegatesFocus/serializable/slotAssignment/scopedRegistry）、 Form-Associated CE +
              ElementInternals + :state()、Navigation API + URLPattern、 Speculative
              Loading、dialog/popover + inert、Island Mixin。 322 测试通过，deno lint 零警告。
            </p>
          </div>

          <div class="phase">
            <span class="status">v0.6.x — in progress</span>
            <h3>v0.6 Stabilization</h3>
            <p>
              alpha 反馈收集、回归测试增强、文档补全。v0.6.0 正式版发布前需要验证所有新增 Web Standards
              功能在真实应用中的表现。
            </p>
          </div>

          <div class="phase">
            <span class="status">v0.7</span>
            <h3>Island Upgrade Manifest + Speculative Loading</h3>
            <p>
              Move from global island entry toward page-level island manifests. Make eager, idle and
              visible strategies observable in browser tests, then document them as stable behavior. Add
              Speculation Rules for predictive prefetch.
            </p>
          </div>

          <div class="phase">
            <span class="status">v0.8</span>
            <h3>Serverless Fullstack</h3>
            <p>
              Promote Hono API routes into a complete app story: FormData actions, typed RPC, env/secrets,
              deployment adapters and small official examples for content-driven apps.
            </p>
          </div>

          <div class="phase">
            <span class="status">v0.9</span>
            <h3>SSG + ISR + PWA</h3>
            <p>
              Add route-level revalidation, cache locks, stale fallback, service worker strategy and CDN
              recipes. ISR should arrive only after adapter semantics are clear.
            </p>
          </div>

          <div class="phase">
            <span class="status">v0.10</span>
            <h3>.less Compiler Alpha</h3>
            <p>
              Explore a compiler that can reduce runtime cost and make Lit optional. It remains an
              optimization path, not a prerequisite for the current framework model.
            </p>
          </div>

          <h2>Product Direction</h2>
          <p>
            Near-term examples should focus on docs, blogs, content sites, product pages and light
            serverless apps. CRM/admin style applications are valid medium-term targets, but they need
            stronger forms, auth, validation, data loading and revalidation contracts before becoming
            official showcase material.
          </p>

          <h2>Principles</h2>
          <ul>
            <li>Web Standards first: prefer platform primitives over framework-specific protocols.</li>
            <li>Static first: dynamic runtime behavior must be explicit.</li>
            <li>DSD first: readable HTML exists before JavaScript runs.</li>
            <li>
              Island upgrade: client JavaScript upgrades interactive components, not the whole page.
            </li>
            <li>
              TC39 Signals first: 二开 signal-polyfill 跟标准走，框架造自己的 effect/islandEffect API。
            </li>
            <li>
              Docs are falsifiable: current guides describe current behavior; future work stays here.
            </li>
          </ul>

          <div class="nav-row">
            <a href="/guide/architecture" class="nav-link">&larr; Architecture</a>
            <a href="/decisions" class="nav-link">Architecture Decisions &rarr;</a>
          </div>
        </div>
      </less-layout>
    `}};customElements.define(`page-roadmap`,Mr);var Nr=class extends K{static styles=[q,k`
      .callout {
        padding: 1rem 1.25rem;
        margin: 1rem 0;
        border-left: 3px solid var(--less-border-hover);
        background: var(--less-bg-surface);
        border-radius: 0 3px 3px 0;
      }
      .callout.warn {
        border-left-color: var(--less-text-muted);
      }
      .component-grid {
        display: grid;
        gap: 1rem;
        margin: 1rem 0;
      }
      .component-card {
        padding: 1rem;
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 6px;
      }
      .component-card h4 {
        margin: 0 0 0.5rem;
        font-size: 1rem;
      }
      .component-card p {
        margin: 0;
        color: var(--less-text-muted);
        font-size: 0.875rem;
      }
    `];render(){return B`
      <less-layout currentPath="/styling/less-ui">
        <div class="container">
          <h1>@lessjs/ui</h1>
          <p class="subtitle">
            LessJS Architecture 的 UI 层：暗黑瑞士国际主义风格的 Web Components 组件库。
          </p>

          <h2>安装</h2>
          <code-block
          ><pre><code>// deno.json
            {
              "imports": {
                "@lessjs/ui": "jsr:@lessjs/ui@^0.5.2"
              }
            }</code></pre></code-block>

            <h2>可用组件</h2>
            <p>
              <span class="inline-code">@lessjs/ui</span> v0.5.0 提供以下 Web Components：
            </p>

            <div class="component-grid">
              <div class="component-card">
                <h4>less-button</h4>
                <p>按钮组件，支持 variants (default, primary, ghost) 和 sizes (sm, md, lg)</p>
              </div>
              <div class="component-card">
                <h4>less-card</h4>
                <p>卡片组件，支持 header/footer slots 和 variants (default, elevated, borderless)</p>
              </div>
              <div class="component-card">
                <h4>less-input</h4>
                <p>输入组件，支持 label、error states 和 validation</p>
              </div>
              <div class="component-card">
                <h4>less-code-block</h4>
                <p>代码块组件，带复制按钮和语法高亮</p>
              </div>
              <div class="component-card">
                <h4>less-layout</h4>
                <p>布局组件，包含 header、sidebar、footer 和移动端 hamburger 菜单</p>
              </div>
            </div>

            <h2>使用示例</h2>
            <code-block
            ><pre><code>// app/routes/index.ts
              import { html, LitElement } from 'lit';
              import '@lessjs/ui/less-button';
              import '@lessjs/ui/less-card';

              export class MyPage extends LitElement {
                override render() {
                  return html&#96;
                    &lt;less-button variant="primary"&gt;Click me&lt;/less-button&gt;
                    &lt;less-card&gt;
                      &lt;h3 slot="header"&gt;Title&lt;/h3&gt;
                      &lt;p&gt;Card content&lt;/p&gt;
                    &lt;/less-card&gt;
                  &#96;;
                }
              }</code></pre></code-block>

              <h2>设计令牌</h2>
              <p>
                组件使用 CSS 自定义属性作为设计令牌，可通过
                <span class="inline-code">@lessjs/ui/design-tokens</span> 导入：
              </p>
              <code-block
              ><pre><code>import '@lessjs/ui/design-tokens';

              // 可用的 CSS 自定义属性：
              // --less-bg-base, --less-text-primary, --less-border-base
              // --less-spacing-sm, --less-spacing-md, --less-spacing-lg
              // --less-font-sans, --less-font-mono
              // --less-radius-sm, --less-radius-md</code></pre></code-block>

              <h2>设计原则</h2>
              <p>@lessjs/ui 遵循 LessJS Architecture 四约束：</p>
              <ul>
                <li>
                  <strong>Web Standards First</strong>：组件是标准 Web Components（Lit），非框架私有抽象。
                </li>
                <li>
                  <strong>Minimal Augmentation</strong>：UI 层是可选的，不用 @lessjs/ui 也能写 LessJS 应用。
                </li>
                <li><strong>No Framework Binding</strong>：组件可在任何 Web Components 环境使用。</li>
                <li><strong>No Runtime Binding</strong>：纯 ESM 输出，无平台依赖。</li>
                <li><strong>Static (S)</strong>：所有组件输出 DSD，内容在 JS 加载前可见。</li>
              </ul>

              <h2>SSR 兼容性</h2>
              <p>
                所有组件使用 <span class="inline-code">static properties</span> 而非
                <span class="inline-code">@property</span> 装饰器，确保 Vite SSR 兼容。详见
                <a href="/guide/ssg#ssr-compatibility" style="color: var(--less-accent);">SSG 文档</a>。
              </p>

              <div class="callout warn">
                <p>
                  <strong>历史说明</strong>：v0.1.0-0.1.3 是 WebAwesome CDN loader。v0.1.4+ 开始自有 Web
                  Components 组件库（当前 v0.5.0）。如需 WebAwesome，改用
                  <span class="inline-code">inject</span> 选项手动注入 CDN。
                </p>
              </div>

              <div class="nav-row">
                <a href="/guide/deployment" class="nav-link">&larr; Deployment</a>
                <a href="/styling/web-awesome" class="nav-link">Web Awesome &rarr;</a>
              </div>
            </div>
          </less-layout>
        `}};customElements.define(`page-less-ui`,Nr);var Pr=class extends K{static styles=[q,k`
      .demo-box {
        padding: 1.25rem;
        border: 0.5px solid var(--less-border);
        border-radius: 3px;
        margin: 0.75rem 0 1.5rem;
      }
      .demo-box .component-row {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 0.75rem;
      }
    `];render(){return B`
      <less-layout currentPath="/styling/web-awesome">
        <div class="container">
          <h1>Web Awesome 组件</h1>
          <p class="subtitle">通过 CDN 使用 50+ UI 组件。无需导入。</p>

          <h2>工作原理</h2>
          <p>
            在 <span class="inline-code">less()</span> 配置中设置 <span class="inline-code">inject</span>
            选项， 将 Web Awesome 的 CSS 和 loader 注入到 <span class="inline-code">&lt;head&gt;</span>。
            所有 <span class="inline-code">&lt;wa-*&gt;</span> 自定义元素全局可用——无需逐组件导入。
          </p>

          <div class="demo-box">
            <h3>按钮</h3>
            <div class="component-row">
              <wa-button variant="brand">品牌</wa-button>
              <wa-button variant="success">成功</wa-button>
              <wa-button variant="danger">危险</wa-button>
              <wa-button variant="default">默认</wa-button>
            </div>
            <code-block>
              <pre><code>&lt;wa-button variant="brand"&gt;品牌&lt;/wa-button&gt;
                &lt;wa-button variant="danger"&gt;危险&lt;/wa-button&gt;</code></pre>
              </code-block>
            </div>

            <div class="demo-box">
              <h3>卡片</h3>
              <wa-card>
                <h2 slot="header">卡片标题</h2>
                <p>带 header 和 footer slots 的 Web Awesome 卡片组件。</p>
                <wa-button slot="footer" variant="brand">操作</wa-button>
              </wa-card>
              <code-block>
                <pre><code>&lt;wa-card&gt;
                  &lt;h2 slot="header"&gt;标题&lt;/h2&gt;
                  &lt;p&gt;内容&lt;/p&gt;
                  &lt;wa-button slot="footer" variant="brand"&gt;操作&lt;/wa-button&gt;
                &lt;/wa-card&gt;</code></pre>
              </code-block>
            </div>

            <div class="demo-box">
              <h3>徽章</h3>
              <div class="component-row">
                <wa-badge variant="primary">主要</wa-badge>
                <wa-badge variant="success">成功</wa-badge>
                <wa-badge variant="danger">危险</wa-badge>
                <wa-badge variant="warning">警告</wa-badge>
              </div>
              <code-block>
                <pre><code>&lt;wa-badge variant="primary"&gt;主要&lt;/wa-badge&gt;
                  &lt;wa-badge variant="danger"&gt;危险&lt;/wa-badge&gt;</code></pre>
                </code-block>
              </div>

              <h2>配置</h2>
              <p>通过 <span class="inline-code">inject</span> 选项启用 Web Awesome（推荐）：</p>
              <code-block>
                <pre><code>// vite.config.ts
                  import { less } from '@lessjs/core'
                  import { defineConfig } from 'vite'

                  export default defineConfig({
                    plugins: [
                      less({
                        inject: {
                          stylesheets: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/styles.css'],
                          scripts: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/webawesome.loader.js'],
                        },
                      }),
                    ]
                  })</code></pre>
                </code-block>

                <h2>从 <span class="inline-code">ui</span> 选项迁移</h2>
                <p>
                  旧的 <span class="inline-code">ui: { cdn: true }</span> 快捷方式仍然可用，但已弃用。迁移方法：
                </p>
                <code-block>
                  <pre><code>// 之前（已弃用）
                    less({ ui: { cdn: true } })

                    // 之后（推荐）
                    less({
                      inject: {
                        stylesheets: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/styles.css'],
                        scripts: ['https://cdn.jsdelivr.net/npm/@awesome-webcomponents/webawesome@3.5.0/dist/webawesome.loader.js'],
                      },
                    })</code></pre>
                  </code-block>
                  <p>
                    <span class="inline-code">inject</span> 选项更灵活——适用于任何 CDN、任何版本、任何外部资源。
                  </p>

                  <div class="nav-row">
                    <a href="/ui" class="nav-link">&larr; @lessjs/ui</a>
                    <a href="https://webawesome.com/docs" class="nav-link">Web Awesome 文档 &rarr;</a>
                  </div>
                </div>
              </less-layout>
            `}};customElements.define(`page-web-awesome`,Pr);var Fr=`less-input`,Ir=class extends K{static formAssociated=!0;static delegatesFocus=!0;_internals;_dsdHydrated=!1;createRenderRoot(){return this.shadowRoot&&this.shadowRoot.childElementCount>0?(this._dsdHydrated=!0,this.shadowRoot):this.attachShadow({mode:`open`})}static styles=[J,k`
      :host {
        display: block;
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--less-size-2);
      }

      label {
        font-size: var(--less-font-size-sm);
        font-weight: var(--less-font-weight-medium);
        color: var(--less-text-tertiary);
        letter-spacing: var(--less-letter-spacing-wide);
      }

      .input {
        width: 100%;
        padding: var(--less-size-2) var(--less-size-3);
        font-family: var(--less-font-sans);
        font-size: var(--less-font-size-md);
        color: var(--less-text-primary);
        background: var(--less-bg-base);
        border: 0.5px solid var(--less-border);
        border-radius: var(--less-radius-md);
        transition:
          border-color var(--less-transition-normal),
          box-shadow var(--less-transition-normal);
        outline: none;
      }

      .input::placeholder {
        color: var(--less-text-muted);
      }

      .input:hover {
        border-color: var(--less-border-hover);
      }

      .input:focus {
        border-color: var(--less-accent);
        box-shadow: 0 0 0 1px var(--less-accent);
      }

      .input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: var(--less-bg-surface);
      }

      .input--error {
        border-color: var(--less-error, #e55);
      }

      /* :state() pseudo-class support — CSS custom states via ElementInternals */
      :host(:state(disabled)) .input {
        opacity: 0.5;
        cursor: not-allowed;
        background: var(--less-bg-surface);
      }

      :host(:state(invalid)) .input {
        border-color: var(--less-error, #e55);
      }

      .error-message {
        font-size: var(--less-font-size-xs);
        color: var(--less-error, #e55);
      }
    `];static properties={type:{type:String},placeholder:{type:String},label:{type:String},value:{type:String},name:{type:String},disabled:{type:Boolean,reflect:!0},required:{type:Boolean},error:{type:String}};constructor(){super(),this.type=`text`,this.placeholder=void 0,this.label=void 0,this.value=void 0,this.name=void 0,this.disabled=!1,this.required=!1,this.error=void 0}connectedCallback(){super.connectedCallback(),this._internals=this.attachInternals(),this._internals.setFormValue(this.value??``),this._updateStates()}_updateStates(){this._internals?.states&&(this.disabled?(this._internals.states.add(`disabled`),this._internals.states.delete(`enabled`)):(this._internals.states.delete(`disabled`),this._internals.states.add(`enabled`)))}updated(e){super.updated(e),(e.has(`disabled`)||e.has(`error`))&&this._updateStates()}formResetCallback(){this.value=``,this.error=void 0,this._internals?.setFormValue(``)}formDisabledCallback(e){this.disabled=e}render(){if(this._dsdHydrated)return H;let e=this.error?`input-error`:void 0;return B`
      <div class="input-wrapper">
        ${this.label?B`
            <label for="input">${this.label}${this.required?` *`:``}</label>
          `:``}
        <input
          id="input"
          class="input ${this.error?`input--error`:``}"
          type="${this.type}"
          placeholder="${this.placeholder}"
          .value="${this.value??``}"
          name="${this.name}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          aria-invalid="${this.error?`true`:H}"
          aria-describedby="${e||H}"
          aria-errormessage="${e||H}"
          @input="${e=>this._handleInput(e)}"
        />
        ${this.error?B`
            <small id="input-error" role="alert" class="error-message">${this.error}</small>
          `:``}
      </div>
    `}_handleInput(e){let t=e.target;this.value=t.value,this._internals?.setFormValue(t.value),this.dispatchEvent(new CustomEvent(`less-input`,{detail:{value:t.value},bubbles:!0,composed:!1}))}};customElements.get(`less-input`)||customElements.define(Fr,Ir);var Lr=`less-code-block`,Rr=class extends En{static hydrateEvents=[{selector:`button.copy-btn`,event:`click`,method:`_copy`}];static styles=[J,k`
      :host {
        display: block;
        position: relative;
      }

      ::slotted(pre) {
        margin: 0;
        padding: var(--less-size-5);
        background: var(--less-code-bg);
        border: 0.5px solid var(--less-code-border);
        border-radius: var(--less-radius-sm);
        overflow-x: auto;
        font-family: var(--less-font-mono);
        font-size: var(--less-font-size-sm);
        line-height: var(--less-line-height-normal);
        color: var(--less-text-secondary);
        scrollbar-width: thin;
        scrollbar-color: var(--less-border) transparent;
      }

      .copy-btn {
        position: absolute;
        top: var(--less-size-2);
        right: var(--less-size-2);
        background: var(--less-bg-elevated);
        color: var(--less-text-muted);
        border: 0.5px solid var(--less-border);
        padding: var(--less-size-1) var(--less-size-3);
        font-size: var(--less-font-size-xs);
        font-family: var(--less-font-sans);
        cursor: pointer;
        border-radius: var(--less-radius-sm);
        transition: color var(--less-transition-normal), border-color var(--less-transition-normal);
        z-index: 1;
      }

      .copy-btn:hover {
        color: var(--less-text-secondary);
        border-color: var(--less-border-hover);
      }

      .copy-btn.copied {
        color: var(--less-text-primary);
        border-color: var(--less-border-hover);
      }

      .copy-btn.failed {
        color: var(--less-error, #e55);
        border-color: var(--less-error, #e55);
      }
    `];static properties={_copyState:{state:!0}};_copyTimer;constructor(){super(),this._copyState=`idle`}disconnectedCallback(){super.disconnectedCallback(),this._copyTimer!==void 0&&(clearTimeout(this._copyTimer),this._copyTimer=void 0)}render(){return this._dsdHydrated?H:B`
      <slot></slot>
      <button
        class="copy-btn ${this._copyState===`copied`?`copied`:``} ${this._copyState===`failed`?`failed`:``}"
        @click="${()=>this._copy()}"
      >
        ${this._copyState===`copied`?`Copied!`:this._copyState===`failed`?`Failed`:`Copy`}
      </button>
    `}async _copy(){try{let e=this.textContent||``;await navigator.clipboard.writeText(e),this._copyState=`copied`,this._updateCopyButtonDOM(),this._copyTimer=globalThis.setTimeout(()=>{this._copyState=`idle`,this._updateCopyButtonDOM(),this._copyTimer=void 0},2e3)}catch{this._copyState=`failed`,this._updateCopyButtonDOM(),this._copyTimer=globalThis.setTimeout(()=>{this._copyState=`idle`,this._updateCopyButtonDOM(),this._copyTimer=void 0},2e3)}}_updateCopyButtonDOM(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector(`button.copy-btn`);e&&(e.classList.toggle(`copied`,this._copyState===`copied`),e.classList.toggle(`failed`,this._copyState===`failed`),this._copyState===`copied`?e.textContent=`Copied!`:this._copyState===`failed`?e.textContent=`Failed`:e.textContent=`Copy`)}};customElements.get(`less-code-block`)||customElements.define(Lr,Rr);var zr=class extends K{static styles=[q,k`
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
        color: var(--less-text-muted);
        margin-bottom: 1.5rem;
        padding-bottom: 0.75rem;
        border-bottom: 0.5px solid var(--less-border);
      }

      /* ─── Palettes ─── */
      .palette-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        background: var(--less-border);
        border: 0.5px solid var(--less-border);
        border-radius: 6px;
        overflow: hidden;
      }

      .palette-card {
        padding: 1.5rem;
      }

      .palette-dark {
        background: var(--less-bg-base);
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
        color: var(--less-text-muted);
      }

      .palette-light .palette-name {
        color: var(--less-text-secondary);
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
        color: var(--less-text-muted);
      }

      .palette-light .swatch-label {
        color: var(--less-text-secondary);
      }

      .palette-desc {
        font-size: 0.75rem;
        line-height: 1.6;
      }

      .palette-dark .palette-desc {
        color: var(--less-text-tertiary);
      }

      .palette-dark .palette-desc strong {
        color: var(--less-text-primary);
      }

      .palette-light .palette-desc {
        color: var(--less-text-secondary);
      }

      .palette-light .palette-desc strong {
        color: var(--less-text-primary);
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
        border-bottom: 0.5px solid var(--less-border);
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
        color: var(--less-text-muted);
      }

      .type-sample {
        color: var(--less-text-primary);
      }

      /* ─── Component Preview ─── */
      .preview-card {
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 6px;
        overflow: hidden;
      }

      .preview-header {
        padding: 0.875rem 1.25rem;
        border-bottom: 0.5px solid var(--less-border);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .preview-title {
        font-size: 0.8125rem;
        font-weight: 600;
        color: var(--less-text-primary);
      }

      .preview-badge {
        font-size: 0.5625rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        padding: 0.25rem 0.5rem;
        border-radius: 3px;
        background: var(--less-accent-subtle);
        color: var(--less-text-secondary);
        border: 0.5px solid var(--less-border);
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
        background: var(--less-bg-surface);
        border: 0.5px solid var(--less-border);
        border-radius: 6px;
        text-align: center;
      }

      .install-section h3 {
        font-size: 0.9375rem;
        font-weight: 600;
        color: var(--less-text-primary);
        margin: 0 0 1rem;
      }

      .install-cmd {
        display: inline-flex;
        align-items: center;
        gap: 0.625rem;
        padding: 0.625rem 1.25rem;
        background: var(--less-bg-elevated);
        border: 0.5px solid var(--less-border);
        border-radius: 4px;
        font-family: "SF Mono", "Fira Code", "Consolas", monospace;
        font-size: 0.8125rem;
        color: var(--less-text-primary);
      }

      .install-cmd .prompt {
        color: var(--less-text-muted);
      }

      .install-section p {
        font-size: 0.8125rem;
        color: var(--less-text-tertiary);
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
    `];render(){return B`
      <less-layout current-path="/ui">
        <div class="container">
          <h1>设计系统</h1>
          <p class="subtitle">
            <strong>双色板。零噪音。</strong><br>
            深色和浅色。没有别的。
          </p>

          <!-- Palettes -->
          <div class="section">
            <div class="section-title">色板</div>
            <div class="palette-row">
              <div class="palette-card palette-dark">
                <div class="palette-name">深色</div>
                <div class="swatch-grid">
                  <div class="swatch-item">
                    <div class="swatch" style="background:#000"></div>
                    <div class="swatch-label">基底</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#0a0a0a"></div>
                    <div class="swatch-label">表面</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#fff"></div>
                    <div class="swatch-label">主色</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#999"></div>
                    <div class="swatch-label">次色</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#666"></div>
                    <div class="swatch-label">第三色</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#444"></div>
                    <div class="swatch-label">静默</div>
                  </div>
                </div>
                <p class="palette-desc">
                  <strong>黑色</strong> 基底。白色强调。灰色分层。
                </p>
              </div>
              <div class="palette-card palette-light">
                <div class="palette-name">浅色</div>
                <div class="swatch-grid">
                  <div class="swatch-item">
                    <div class="swatch" style="background:#fff"></div>
                    <div class="swatch-label">基底</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#fafafa"></div>
                    <div class="swatch-label">表面</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#000"></div>
                    <div class="swatch-label">主色</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#555"></div>
                    <div class="swatch-label">次色</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#888"></div>
                    <div class="swatch-label">第三色</div>
                  </div>
                  <div class="swatch-item">
                    <div class="swatch" style="background:#aaa"></div>
                    <div class="swatch-label">静默</div>
                  </div>
                </div>
                <p class="palette-desc">
                  <strong>白色</strong> 基底。黑色强调。灰色分层。
                </p>
              </div>
            </div>
          </div>

          <!-- Typography -->
          <div class="section">
            <div class="section-title">字体排版</div>
            <div class="type-scale">
              <div class="type-row">
                <span class="type-label">展示</span>
                <span class="type-sample" style="font-size:2.5rem;font-weight:900;letter-spacing:-0.04em"
                >LessJS UI</span>
              </div>
              <div class="type-row">
                <span class="type-label">H1</span>
                <span class="type-sample" style="font-size:1.75rem;font-weight:800;letter-spacing:-0.03em"
                >一级标题</span>
              </div>
              <div class="type-row">
                <span class="type-label">H2</span>
                <span class="type-sample" style="font-size:1.125rem;font-weight:600">二级标题</span>
              </div>
              <div class="type-row">
                <span class="type-label">正文</span>
                <span class="type-sample" style="font-size:0.9375rem;color:var(--less-text-secondary)"
                >正文段落示例。</span>
              </div>
              <div class="type-row">
                <span class="type-label">说明</span>
                <span
                  class="type-sample"
                  style="font-size:0.6875rem;color:var(--less-text-tertiary);text-transform:uppercase;letter-spacing:0.08em;font-weight:600"
                >说明文字</span>
              </div>
              <div class="type-row">
                <span class="type-label">等宽</span>
                <span
                  class="type-sample"
                  style="font-size:0.8125rem;font-family:'SF Mono','Fira Code','Consolas',monospace;color:var(--less-text-primary)"
                >deno add jsr:@lessjs/ui</span>
              </div>
            </div>
          </div>

          <!-- Buttons (Dogfooding less-button) -->
          <div class="section">
            <div class="section-title">按钮</div>
            <div class="preview-card">
              <div class="preview-header">
                <span class="preview-title">变体</span>
                <span class="preview-badge">可用</span>
              </div>
              <div class="preview-body">
                <less-button variant="primary">主要按钮</less-button>
                <less-button>默认按钮</less-button>
                <less-button variant="ghost">幽灵按钮</less-button>
              </div>
              <div class="preview-body" style="border-top:0.5px solid var(--less-border)">
                <less-button variant="primary" size="sm">小号</less-button>
                <less-button variant="primary" size="md">中号</less-button>
                <less-button variant="primary" size="lg">大号</less-button>
              </div>
              <div class="preview-body" style="border-top:0.5px solid var(--less-border)">
                <less-button disabled>禁用状态</less-button>
                <less-button href="/" target="_blank">链接按钮</less-button>
              </div>
            </div>
          </div>

          <!-- Cards (Dogfooding less-card) -->
          <div class="section">
            <div class="section-title">卡片</div>
            <div class="cards-grid">
              <less-card>
                <h3 slot="header">Island</h3>
                <p>带客户端升级的交互式组件和 Shadow DOM。</p>
                <div slot="footer">
                  <less-button size="sm">使用</less-button>
                </div>
              </less-card>
              <less-card>
                <h3 slot="header">静态</h3>
                <p>通过 DSD 零 JS 渲染。JS 加载前可见。</p>
                <div slot="footer">
                  <less-button size="sm">使用</less-button>
                </div>
              </less-card>
              <less-card variant="elevated">
                <h3 slot="header">API Route</h3>
                <p>带 Hono RPC 的 Serverless 函数。类型安全。</p>
                <div slot="footer">
                  <less-button size="sm">使用</less-button>
                </div>
              </less-card>
            </div>
          </div>

          <!-- Input (Dogfooding less-input) -->
          <div class="section">
            <div class="section-title">输入框</div>
            <div class="preview-card">
              <div class="preview-header">
                <span class="preview-title">文本输入</span>
                <span class="preview-badge">可用</span>
              </div>
              <div class="preview-body" style="flex-direction:column;gap:0.75rem">
                <less-input placeholder="输入邮箱..." label="邮箱"></less-input>
                <less-input type="password" placeholder="密码" label="密码" required></less-input>
                <less-input value="hello@kissjs.org" label="只读" disabled></less-input>
              </div>
            </div>
          </div>

          <!-- Code Block (Dogfooding less-code-block) -->
          <div class="section">
            <div class="section-title">代码块</div>
            <div class="preview-card">
              <div class="preview-header">
                <span class="preview-title">带复制按钮</span>
                <span class="preview-badge">可用</span>
              </div>
              <div class="preview-body">
                <less-code-block>
                  <pre>
                    <code>import '@lessjs/ui';

                    // 使用组件
                    &lt;less-button variant="primary"&gt;点我&lt;/less-button&gt;
                    &lt;less-card&gt;
                      &lt;h3 slot="header"&gt;标题&lt;/h3&gt;
                      &lt;p&gt;卡片内容&lt;/p&gt;
                    &lt;/less-card&gt;</code></pre>
                  </less-code-block>
                </div>
              </div>
            </div>

            <!-- Install -->
            <div class="install-section">
              <h3>安装 @lessjs/ui</h3>
              <div class="install-cmd">
                <span class="prompt">$</span> deno add jsr:@lessjs/ui
              </div>
              <p>Deno、Node、Bun。零配置。</p>
            </div>

            <div class="nav-row">
              <a href="/guide/deployment" class="nav-link">&larr; 部署</a>
              <a href="/styling/less-ui" class="nav-link">LessJS UI 文档 &rarr;</a>
            </div>
          </div>
        </less-layout>
      `}};customElements.define(`ui-showcase`,zr);var Br={wrap(e,t){return e.replace(`<!-- api-consumer rendered by renderer in light DOM -->`,`<api-consumer></api-consumer>`)}},Vr={wrap(e,t){return e}},Z={wrap(e,t){return e}},Hr=t({__island:()=>!0,__tagName:()=>Gr,default:()=>Wr,tagName:()=>Ur}),Ur=`api-consumer`,Wr=class extends K{static styles=k`
    :host {
      display: block;
    }

    .card {
      border: 0.5px solid var(--less-border);
      border-radius: 8px;
      padding: 1.25rem;
      background: var(--less-bg-surface);
    }
    .card h3 {
      font-size: 0.875rem;
      font-weight: 700;
      margin: 0 0 0.75rem;
      color: var(--less-text-primary);
      letter-spacing: -0.01em;
    }
    .status-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8125rem;
      color: var(--less-text-tertiary);
      margin-bottom: 0.75rem;
    }
    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      display: inline-block;
    }
    .status-dot.loading {
      background: var(--less-accent-dim);
    }
    .status-dot.connected {
      background: #22c55e;
    }
    .status-dot.error {
      background: var(--less-error);
    }

    .data-grid {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.25rem 0.75rem;
      font-size: 0.8125rem;
      margin-bottom: 0.75rem;
    }
    .data-grid .key {
      color: var(--less-text-tertiary);
      font-family: "SF Mono", "Fira Code", "Consolas", monospace;
      font-size: 0.75rem;
    }
    .data-grid .val {
      color: var(--less-text-primary);
      font-weight: 500;
    }

    .pre-box {
      background: var(--less-code-bg);
      border: 0.5px solid var(--less-code-border);
      border-radius: 6px;
      padding: 0.75rem 1rem;
      font-size: 0.75rem;
      font-family: "SF Mono", "Fira Code", "Consolas", monospace;
      color: var(--less-text-secondary);
      overflow-x: auto;
      margin: 0.75rem 0;
      line-height: 1.6;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.4rem 0.85rem;
      border: 0.5px solid var(--less-border);
      border-radius: 6px;
      background: var(--less-bg-card);
      color: var(--less-text-secondary);
      font-size: 0.8125rem;
      cursor: pointer;
      transition: all 0.15s;
    }
    .btn:hover {
      border-color: var(--less-border-hover);
      color: var(--less-text-primary);
      background: var(--less-bg-hover);
    }
    .btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    .btn.primary {
      background: var(--less-accent);
      color: var(--less-bg-base);
      border-color: var(--less-accent);
    }
    .btn.primary:hover {
      opacity: 0.85;
    }
    .btn.primary:disabled {
      opacity: 0.25;
      background: var(--less-text-muted);
      border-color: transparent;
    }

    .divider {
      border: none;
      border-top: 0.5px solid var(--less-border);
      margin: 1.25rem 0;
    }

    .form-row {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin: 0.75rem 0;
    }
    .form-row input {
      flex: 1;
      padding: 0.45rem 0.7rem;
      border: 0.5px solid var(--less-border);
      border-radius: 6px;
      background: var(--less-bg-card);
      color: var(--less-text-primary);
      font-size: 0.8125rem;
      outline: none;
      transition: border-color 0.15s;
    }
    .form-row input:focus {
      border-color: var(--less-border-hover);
    }
    .form-row input::placeholder {
      color: var(--less-text-muted);
    }

    .greeting {
      margin-top: 0.5rem;
      padding: 0.6rem 0.85rem;
      border-radius: 6px;
      font-size: 0.9375rem;
      font-weight: 500;
      background: color-mix(in srgb, var(--less-accent) 6%, transparent);
      // TODO: 0.5px after color-mix support
      border: 1px solid color-mix(in srgb, var(--less-accent) 15%, transparent);
      color: var(--less-text-primary);
      animation: fadeSlide 0.25s ease;
    }
    .err-msg {
      margin-top: 0.5rem;
      padding: 0.6rem 0.85rem;
      border-radius: 6px;
      font-size: 0.8125rem;
      background: color-mix(in srgb, var(--less-error) 8%, transparent);
      // TODO: 0.5px after color-mix support
      border: 1px solid color-mix(in srgb, var(--less-error) 20%, transparent);
      color: var(--less-error);
      animation: fadeSlide 0.25s ease;
    }

    @keyframes fadeSlide {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;static properties={apiUrl:{type:String},apiData:{type:Object},apiLoading:{type:Boolean},apiError:{type:String},name:{type:String},helloMsg:{type:String},helloLoading:{type:Boolean},helloError:{type:String}};constructor(){super(),this.apiUrl=``,this.apiData=null,this.apiLoading=!1,this.apiError=``,this.name=``,this.helloMsg=``,this.helloLoading=!1,this.helloError=``}get _base(){return this.apiUrl||`https://less-demo-api.sisyphuszheng.deno.net`}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this._fetchStatus())}async _fetchStatus(){this.apiLoading=!0,this.apiError=``;try{let e=await fetch(`${this._base}/api`);if(!e.ok)throw Error(`HTTP ${e.status}`);this.apiData=await e.json()}catch(e){this.apiError=String(e),this.apiData=null}finally{this.apiLoading=!1}}async _sayHello(){let e=this.name.trim();if(e){this.helloLoading=!0,this.helloError=``,this.helloMsg=``;try{let t=await fetch(`${this._base}/api/hello/${encodeURIComponent(e)}`);if(!t.ok)throw Error(`HTTP ${t.status}`);let n=await t.json();this.helloMsg=n.message}catch(e){this.helloError=String(e)}finally{this.helloLoading=!1}}}_onInput(e){this.name=e.target.value}_onKey(e){e.key===`Enter`&&this._sayHello()}render(){return B`
      <div class="card">
        <h3>Server Status</h3>
        <div class="status-row">
          <span class="status-dot ${this.apiLoading?`loading`:this.apiError?`error`:`connected`}"></span>
          ${this.apiLoading?`Contacting server...`:this.apiError?`Connection failed`:`API online`}
        </div>
        ${this.apiData?B`
            <div class="data-grid">
              <span class="key">framework</span><span class="val">${this.apiData.framework}</span>
              <span class="key">version</span><span class="val">${this.apiData.version}</span>
              <span class="key">jamstack</span><span class="val">${String(this.apiData.jamstack)}</span>
              <span class="key">serverless</span><span class="val">${String(this.apiData.serverless)}</span>
            </div>
          `:``} ${this.apiLoading?B`
            <div class="pre-box">Loading...</div>
          `:``} ${this.apiData?B`
            <div class="pre-box">${JSON.stringify(this.apiData,null,2)}</div>
          `:``} ${this.apiError?B`
            <div class="pre-box" style="color:var(--less-error)">${this.apiError}</div>
          `:``}
        <button class="btn" @click="${this._fetchStatus}" ?disabled="${this.apiLoading}">⟳ Refresh</button>

        <hr class="divider" />

        <h3>Say Hello</h3>
        <p style="font-size:0.8125rem;color:var(--less-text-tertiary);margin:0 0 0.75rem;line-height:1.6">
          Type your name and the serverless API will greet you back. Calls <code style="font-size:0.75rem"
          >GET /api/hello/:name</code> on Deno Deploy.
        </p>
        <div class="form-row">
          <input
            type="text"
            placeholder="Enter your name..."
            .value="${this.name}"
            @input="${this._onInput}"
            @keydown="${this._onKey}"
          />
          <button
            class="btn primary"
            @click="${this._sayHello}"
            ?disabled="${this.helloLoading||!this.name.trim()}"
          >
            ${this.helloLoading?`Sending...`:`Say Hello →`}
          </button>
        </div>
        ${this.helloMsg?B`
            <div class="greeting">${this.helloMsg}</div>
          `:``} ${this.helloError?B`
            <div class="err-msg">${this.helloError}</div>
          `:``}
      </div>
    `}};try{customElements.define(Ur,Wr)}catch{}var Gr=`api-consumer`;customElements.get(`page-not-found`)||customElements.define(`page-not-found`,jn),customElements.get(`page-blog-index`)||customElements.define(`page-blog-index`,Mn),customElements.get(`page-blog-less-compiler`)||customElements.define(`page-blog-less-compiler`,Nn),customElements.get(`blog-v040`)||customElements.define(`blog-v040`,Pn),customElements.get(`blog-v050-a0`)||customElements.define(`blog-v050-a0`,Fn),customElements.get(`blog-v0-5-alpha1`)||customElements.define(`blog-v0-5-alpha1`,Ln),customElements.get(`page-changelog`)||customElements.define(`page-changelog`,Rn),customElements.get(`page-contributing`)||customElements.define(`page-contributing`,Un),customElements.get(`page-decisions-index`)||customElements.define(`page-decisions-index`,Wn),customElements.get(`page-decision-0001`)||customElements.define(`page-decision-0001`,Zn),customElements.get(`page-decision-0002`)||customElements.define(`page-decision-0002`,Qn),customElements.get(`page-decision-0003`)||customElements.define(`page-decision-0003`,$n),customElements.get(`page-decision-0004`)||customElements.define(`page-decision-0004`,er),customElements.get(`page-demo`)||customElements.define(`page-demo`,tr),customElements.get(`page-examples`)||customElements.define(`page-examples`,or),customElements.get(`page-fullstack-demo`)||customElements.define(`page-fullstack-demo`,dr),customElements.get(`page-hello-demo`)||customElements.define(`page-hello-demo`,fr),customElements.get(`page-minimal-blog-demo`)||customElements.define(`page-minimal-blog-demo`,pr),customElements.get(`page-api-design`)||customElements.define(`page-api-design`,mr),customElements.get(`page-api-routes`)||customElements.define(`page-api-routes`,hr),customElements.get(`page-architecture`)||customElements.define(`page-architecture`,gr),customElements.get(`page-blog-system`)||customElements.define(`page-blog-system`,_r),customElements.get(`page-configuration`)||customElements.define(`page-configuration`,vr),customElements.get(`page-deployment`)||customElements.define(`page-deployment`,yr),customElements.get(`page-design-philosophy`)||customElements.define(`page-design-philosophy`,br),customElements.get(`page-error-handling`)||customElements.define(`page-error-handling`,xr),customElements.get(`page-getting-started`)||customElements.define(`page-getting-started`,Sr),customElements.get(`page-islands-guide`)||customElements.define(`page-islands-guide`,Cr),customElements.get(`page-less-compiler`)||customElements.define(`page-less-compiler`,wr),customElements.get(`page-positioning`)||customElements.define(`page-positioning`,Tr),customElements.get(`page-pwa`)||customElements.define(`page-pwa`,Er),customElements.get(`page-routing-guide`)||customElements.define(`page-routing-guide`,Dr),customElements.get(`page-security-middleware`)||customElements.define(`page-security-middleware`,Or),customElements.get(`page-ssg-guide`)||customElements.define(`page-ssg-guide`,kr),customElements.get(`page-testing`)||customElements.define(`page-testing`,Ar),customElements.get(`docs-home`)||customElements.define(`docs-home`,jr),customElements.get(`page-roadmap`)||customElements.define(`page-roadmap`,Mr),customElements.get(`page-less-ui`)||customElements.define(`page-less-ui`,Nr),customElements.get(`page-web-awesome`)||customElements.define(`page-web-awesome`,Pr),customElements.get(`ui-showcase`)||customElements.define(`ui-showcase`,zr);var Kr=e=>e&&e.default,qr=Kr(Hr);qr&&!customElements.get(`api-consumer`)&&customElements.define(`api-consumer`,qr);var Jr=Kr(zn);Jr&&!customElements.get(`code-block`)&&customElements.define(`code-block`,Jr);var Yr=Kr(sr);Yr&&!customElements.get(`counter-island`)&&customElements.define(`counter-island`,Yr);async function Q(e,t={},n={}){if(!e||!e.includes(`-`))throw Error(`[LessJS] Invalid custom element tag: `+String(e)+`. Must contain a hyphen.`);let r=customElements.get(e);return r?We(e,r,t,n):(console.warn(`[LessJS] <`+e+`> not registered — rendering empty`),`<${e}></${e}>`)}var $=new ze;$.use(`*`,tt()),$.use(`*`,ft()),$.use(`*`,pt({origin:e=>{if(e&&/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(e))return e},allowMethods:[`GET`,`POST`,`PUT`,`DELETE`,`PATCH`],allowHeaders:[`Content-Type`,`Authorization`],credentials:!0,maxAge:86400})),$.use(`*`,gt()),$.get(`/404`,async e=>{try{let t=await Q(`page-not-found`,e.req.param(),{route:`/404`,source:`404.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/blog`,async e=>{try{let t=await Q(`page-blog-index`,e.req.param(),{route:`/blog`,source:`blog/index.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/blog/less-compiler`,async e=>{try{let t=await Q(`page-blog-less-compiler`,e.req.param(),{route:`/blog/less-compiler`,source:`blog/less-compiler.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/blog/v0-4-0`,async e=>{try{let t=await Q(`blog-v040`,e.req.param(),{route:`/blog/v0-4-0`,source:`blog/v0-4-0.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/blog/v0-5-0`,async e=>{try{let t=await Q(`blog-v050-a0`,e.req.param(),{route:`/blog/v0-5-0`,source:`blog/v0-5-0.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/blog/v0-5-alpha1`,async e=>{try{let t=await Q(`blog-v0-5-alpha1`,e.req.param(),{route:`/blog/v0-5-alpha1`,source:`blog/v0-5-alpha1.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/changelog`,async e=>{try{let t=await Q(`page-changelog`,e.req.param(),{route:`/changelog`,source:`changelog.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/contributing`,async e=>{try{let t=await Q(`page-contributing`,e.req.param(),{route:`/contributing`,source:`contributing.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/decisions`,async e=>{try{let t=await Q(`page-decisions-index`,e.req.param(),{route:`/decisions`,source:`decisions/index.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/decisions/0001-keep-hono-vite-dev-server`,async e=>{try{let t=await Q(`page-decision-0001`,e.req.param(),{route:`/decisions/0001-keep-hono-vite-dev-server`,source:`decisions/0001-keep-hono-vite-dev-server.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/decisions/0002-kiss-compiler-eliminate-lit`,async e=>{try{let t=await Q(`page-decision-0002`,e.req.param(),{route:`/decisions/0002-kiss-compiler-eliminate-lit`,source:`decisions/0002-kiss-compiler-eliminate-lit.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/decisions/0003-pwa-support`,async e=>{try{let t=await Q(`page-decision-0003`,e.req.param(),{route:`/decisions/0003-pwa-support`,source:`decisions/0003-pwa-support.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/decisions/0004-blog-system`,async e=>{try{let t=await Q(`page-decision-0004`,e.req.param(),{route:`/decisions/0004-blog-system`,source:`decisions/0004-blog-system.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/demo`,async e=>{try{let t=await Q(`page-demo`,e.req.param(),{route:`/demo`,source:`demo/index.ts`});return t=Br.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/examples`,async e=>{try{let t=await Q(`page-examples`,e.req.param(),{route:`/examples`,source:`examples/index.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/examples/fullstack`,async e=>{try{let t=await Q(`page-fullstack-demo`,e.req.param(),{route:`/examples/fullstack`,source:`examples/fullstack.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/examples/hello`,async e=>{try{let t=await Q(`page-hello-demo`,e.req.param(),{route:`/examples/hello`,source:`examples/hello.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/examples/minimal-blog`,async e=>{try{let t=await Q(`page-minimal-blog-demo`,e.req.param(),{route:`/examples/minimal-blog`,source:`examples/minimal-blog.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/api-design`,async e=>{try{let t=await Q(`page-api-design`,e.req.param(),{route:`/guide/api-design`,source:`guide/api-design.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/api-routes`,async e=>{try{let t=await Q(`page-api-routes`,e.req.param(),{route:`/guide/api-routes`,source:`guide/api-routes.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/architecture`,async e=>{try{let t=await Q(`page-architecture`,e.req.param(),{route:`/guide/architecture`,source:`guide/architecture.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/blog-system`,async e=>{try{let t=await Q(`page-blog-system`,e.req.param(),{route:`/guide/blog-system`,source:`guide/blog-system.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/configuration`,async e=>{try{let t=await Q(`page-configuration`,e.req.param(),{route:`/guide/configuration`,source:`guide/configuration.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/deployment`,async e=>{try{let t=await Q(`page-deployment`,e.req.param(),{route:`/guide/deployment`,source:`guide/deployment.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/design-philosophy`,async e=>{try{let t=await Q(`page-design-philosophy`,e.req.param(),{route:`/guide/design-philosophy`,source:`guide/design-philosophy.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/error-handling`,async e=>{try{let t=await Q(`page-error-handling`,e.req.param(),{route:`/guide/error-handling`,source:`guide/error-handling.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/getting-started`,async e=>{try{let t=await Q(`page-getting-started`,e.req.param(),{route:`/guide/getting-started`,source:`guide/getting-started.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/islands`,async e=>{try{let t=await Q(`page-islands-guide`,e.req.param(),{route:`/guide/islands`,source:`guide/islands.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/less-compiler`,async e=>{try{let t=await Q(`page-less-compiler`,e.req.param(),{route:`/guide/less-compiler`,source:`guide/less-compiler.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/positioning`,async e=>{try{let t=await Q(`page-positioning`,e.req.param(),{route:`/guide/positioning`,source:`guide/positioning.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/pwa`,async e=>{try{let t=await Q(`page-pwa`,e.req.param(),{route:`/guide/pwa`,source:`guide/pwa.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/routing`,async e=>{try{let t=await Q(`page-routing-guide`,e.req.param(),{route:`/guide/routing`,source:`guide/routing.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/security-middleware`,async e=>{try{let t=await Q(`page-security-middleware`,e.req.param(),{route:`/guide/security-middleware`,source:`guide/security-middleware.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/ssg`,async e=>{try{let t=await Q(`page-ssg-guide`,e.req.param(),{route:`/guide/ssg`,source:`guide/ssg.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/guide/testing`,async e=>{try{let t=await Q(`page-testing`,e.req.param(),{route:`/guide/testing`,source:`guide/testing.ts`});return t=Z.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/index`,async e=>{try{let t=await Q(`docs-home`,e.req.param(),{route:`/index`,source:`index/index.ts`});return t=Vr.wrap(t,e),e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/roadmap`,async e=>{try{let t=await Q(`page-roadmap`,e.req.param(),{route:`/roadmap`,source:`roadmap.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/styling/less-ui`,async e=>{try{let t=await Q(`page-less-ui`,e.req.param(),{route:`/styling/less-ui`,source:`styling/less-ui.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/styling/web-awesome`,async e=>{try{let t=await Q(`page-web-awesome`,e.req.param(),{route:`/styling/web-awesome`,source:`styling/web-awesome.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}}),$.get(`/ui`,async e=>{try{let t=await Q(`ui-showcase`,e.req.param(),{route:`/ui`,source:`ui.ts`});return e.html(D(t,{title:`LessJS`,lang:`en`,headExtras:`<meta name="description" content="LessJS — Less is More. Web Standards-first Jamstack SSG with Island architecture. Zero-runtime core, DSD rendering, Lit Web Components, Hono API routes.">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-props@1.7.20/open-props.min.css" media="print" onload="this.media='all'">
  <style id="less-anti-flash">html{visibility:hidden}</style>
  <link rel="icon" type="image/svg+xml" href="/assets/less-logo.svg" />
  <link rel="apple-touch-icon" href="/assets/less-logo.svg" />
  <style>:root,[data-theme="light"]{--less-bg-base:var(--gray-0);--less-bg-surface:var(--gray-1);--less-bg-elevated:var(--gray-2);--less-bg-hover:var(--gray-2);--less-bg-card:var(--gray-0);--less-border:var(--gray-3);--less-border-hover:var(--gray-4);--less-text-primary:var(--gray-12);--less-text-secondary:var(--gray-8);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-6);--less-accent:var(--gray-12);--less-accent-dim:var(--gray-8);--less-accent-subtle:var(--gray-2);--less-code-bg:var(--gray-2);--less-code-border:var(--gray-3);--less-error:var(--red-7);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-4);color-scheme:light}[data-theme="dark"]{--less-bg-base:var(--gray-12);--less-bg-surface:var(--gray-11);--less-bg-elevated:var(--gray-10);--less-bg-hover:var(--gray-11);--less-bg-card:var(--gray-11);--less-border:var(--gray-9);--less-border-hover:var(--gray-8);--less-text-primary:var(--gray-0);--less-text-secondary:var(--gray-5);--less-text-tertiary:var(--gray-7);--less-text-muted:var(--gray-8);--less-accent:var(--gray-0);--less-accent-dim:var(--gray-4);--less-accent-subtle:var(--gray-11);--less-code-bg:var(--gray-10);--less-code-border:var(--gray-9);--less-error:var(--red-4);--less-scrollbar-track:transparent;--less-scrollbar-thumb:var(--gray-9);color-scheme:dark}body{margin:0;background:var(--less-bg-base);color:var(--less-text-primary);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
  <script src="/theme-init.js"><\/script>
  <script defer src="/mobile-menu.js"><\/script>`,cspNonce:e.get(`cspNonce`)}))}catch{return e.html(`<h1>500 Internal Server Error</h1>`,500)}});