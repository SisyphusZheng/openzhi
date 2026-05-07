import{t as e}from"./rolldown-runtime-B_k5qpF0.js";var t=globalThis,n=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap,a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=i.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(t,e))}return e}toString(){return this.cssText}},o=e=>new a(typeof e==`string`?e:e+``,void 0,r),s=(e,...t)=>new a(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,r),c=(e,r)=>{if(n)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of r){let r=document.createElement(`style`),i=t.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=n.cssText,e.appendChild(r)}},l=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return o(t)})(e):e,{is:u,defineProperty:d,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,f=globalThis,p=f.trustedTypes,m=p?p.emptyScript:``,ie=f.reactiveElementPolyfillSupport,h=(e,t)=>e,g={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},_=(e,t)=>!u(e,t),v={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ee(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??v}static _$Ei(){if(this.hasOwnProperty(h(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(h(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(h(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(l(e))}else e!==void 0&&t.push(l(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?g:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?g:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??_)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:`open`},y[h(`elementProperties`)]=new Map,y[h(`finalized`)]=new Map,ie?.({ReactiveElement:y}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var b=globalThis,x=e=>e,S=b.trustedTypes,C=S?S.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,w=`$lit$`,T=`lit$${Math.random().toFixed(9).slice(2)}$`,E=`?`+T,D=`<${E}>`,O=document,k=()=>O.createComment(``),A=e=>e===null||typeof e!=`object`&&typeof e!=`function`,j=Array.isArray,ae=e=>j(e)||typeof e?.[Symbol.iterator]==`function`,M=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,F=/>/g,I=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),L=/'/g,R=/"/g,z=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),V=Symbol.for(`lit-noChange`),H=Symbol.for(`lit-nothing`),U=new WeakMap,W=O.createTreeWalker(O,129);function G(e,t){if(!j(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return C===void 0?t:C.createHTML(t)}var oe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=N;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===N?c[1]===`!--`?o=P:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=I):(z.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=I):o=F:o===I?c[0]===`>`?(o=i??N,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?I:c[3]===`"`?R:L):o===R||o===L?o=I:o===P||o===F?o=N:(o=I,i=void 0);let d=o===I&&e[t+1].startsWith(`/>`)?` `:``;a+=o===N?n+D:l>=0?(r.push(s),n.slice(0,l)+w+n.slice(l)+T+d):n+T+(l===-2?t:d)}return[G(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},K=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=oe(t,n);if(this.el=e.createElement(l,r),W.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=W.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(w)){let t=u[o++],n=i.getAttribute(e).split(T),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ce:r[1]===`?`?le:r[1]===`@`?ue:Y}),i.removeAttribute(e)}else e.startsWith(T)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(z.test(i.tagName)){let e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],k()),W.nextNode(),c.push({type:2,index:++a});i.append(e[t],k())}}}else if(i.nodeType===8)if(i.data===E)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(T,e+1))!==-1;)c.push({type:7,index:a}),e+=T.length-1}a++}}static createElement(e,t){let n=O.createElement(`template`);return n.innerHTML=e,n}};function q(e,t,n=e,r){if(t===V)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=A(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=q(e,i._$AS(e,t.values),i,r)),t}var se=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??O).importNode(t,!0);W.currentNode=r;let i=W.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new J(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new de(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=W.nextNode(),a++)}return W.currentNode=O,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},J=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),A(e)?e===H||e==null||e===``?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==V&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ae(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==H&&A(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=K.createElement(G(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new se(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return t===void 0&&U.set(e.strings,t=new K(e)),t}k(t){j(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(k()),this.O(k()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=x(e).nextSibling;x(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Y=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=H}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=q(this,e,t,0),a=!A(e)||e!==this._$AH&&e!==V,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=q(this,r[n+o],t,o),s===V&&(s=this._$AH[o]),a||=!A(s)||s!==this._$AH[o],s===H?e=H:e!==H&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ce=class extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}},le=class extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==H)}},ue=class extends Y{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=q(this,e,t,0)??H)===V)return;let n=this._$AH,r=e===H&&n!==H||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==H&&(n===H||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},de=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}},fe=b.litHtmlPolyfillSupport;fe?.(K,J),(b.litHtmlVersions??=[]).push(`3.3.2`);var pe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new J(t.insertBefore(k(),e),e,void 0,n??{})}return i._$AI(e),i},X=globalThis,Z=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};Z._$litElement$=!0,Z.finalized=!0,X.litElementHydrateSupport?.({LitElement:Z});var me=X.litElementPolyfillSupport;me?.({LitElement:Z}),(X.litElementVersions??=[]).push(`4.2.2`);var he=e({default:()=>$,tagName:()=>Q}),Q=`api-consumer`,$=class extends Z{static styles=s`
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
    `}};try{customElements.define(Q,$)}catch{}export{s as a,B as i,Z as n,H as r,he as t};