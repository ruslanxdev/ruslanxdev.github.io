"use strict";(self.webpackChunkruslanx_dev=self.webpackChunkruslanx_dev||[]).push([[223],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,l=new RegExp("^"+i.source),o=new RegExp(i.source+n.source,"gu"),s=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,l=!1,o=!1;for(let s=0;s<e.length;s++){const c=e[s];i&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),i=!1,o=l,l=!0,s++):l&&o&&a.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),o=l,l=!1,i=!0):(i=r(c)===c&&n(c)!==c,o=l,l=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,s.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{G:function(){return j},L:function(){return h},M:function(){return k},P:function(){return x},S:function(){return F},_:function(){return o},a:function(){return l},b:function(){return m},c:function(){return c},g:function(){return u},h:function(){return s}});var r=a(6540),n=(a(2729),a(5556)),i=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function m(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,o,s){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),s&&(c.objectPosition=s);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=o(e,g);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:s}=e,c=o(e,f);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:i}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=o(e,y);const s=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,l({},i,t,{sizes:s,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:s})})),c):c};var w;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],x=function(e){let{fallback:t}=e,a=o(e,E);return t?r.createElement(v,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(v,l({},e)),r.createElement("noscript",null,r.createElement(v,l({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],L=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},N={image:i().object.isRequired,alt:I},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],z=new Set;let $,A;const H=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:m,class:u,onStartLoad:g,onLoad:p,onError:h}=e,f=o(e,_);const{width:y,height:b,layout:v}=n,w=d(y,b,v),{style:E,className:x}=w,k=o(w,T),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(m=u);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,y,b);return(0,r.useEffect)((()=>{$||($=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return A=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(C);if(A&&z.has(C))return;let t,r;return $.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;S.current&&(S.current.innerHTML=a(l({isLoading:!0,isLoaded:z.has(C),image:n},f)),z.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=o(S.current,C,z,i,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{z.has(C)&&A&&(S.current.innerHTML=A(l({isLoading:z.has(C),isLoaded:z.has(C),image:n},f)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},k,{style:l({},E,i,{backgroundColor:c}),className:`${x}${m?` ${m}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},j=(0,r.memo)((function(e){return e.image?(0,r.createElement)(H,e):null}));j.propTypes=N,j.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:n,__error:i}=t,s=o(t,O);return i&&console.warn(i),n?r.createElement(e,l({image:n},s)):(console.warn("Image not loaded",a),null)}}const P=R((function(e){let{as:t="div",className:a,class:n,style:i,image:s,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:f,objectFit:y,objectPosition:b}=e,v=o(e,S);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=l({objectFit:y,objectPosition:b,backgroundColor:f},p);const{width:w,height:E,layout:I,images:N,placeholder:_,backgroundColor:T}=s,z=d(w,E,I),{style:$,className:A}=z,H=o(z,C),j={fallback:void 0,sources:[]};return N.fallback&&(j.fallback=l({},N.fallback,{srcSet:N.fallback.srcSet?L(N.fallback.srcSet):void 0})),N.sources&&(j.sources=N.sources.map((e=>l({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,l({},H,{style:l({},$,i,{backgroundColor:f}),className:`${A}${a?` ${a}`:""}`}),r.createElement(h,{layout:I,width:w,height:E},r.createElement(x,l({},u(_,!1,I,w,E,T,y,b))),r.createElement(k,l({"data-gatsby-image-ssr":"",className:g},v,m("eager"===c,!1,j,c,p)))))})),q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},W=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:I,width:q,height:q,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};P.displayName="StaticImage",P.propTypes=M;const F=R(j);F.displayName="StaticImage",F.propTypes=M},2773:function(e,t,a){a.d(t,{A:function(){return z}});var r=a(6540),n=a(4794),i=a(7581),l=a(8453),o=a(106);const s={maxWidth:"52rem",margin:"0 auto",padding:"1rem"};var c=e=>{let{children:t}=e;return r.createElement("div",{style:s},t)},d=a(2532);const m=i.default.ul.withConfig({displayName:"LinkList__List",componentId:"sc-1ggr8u0-0"})(["list-style-type:none;padding-left:0;margin-top:0;line-height:1.5;height:1.5rem;"]),u={display:"inline-block",verticalAlign:"top",marginRight:"1rem",height:"1.5rem"};var g=e=>{let{items:t}=e;return r.createElement(m,null,t.map(((e,t)=>{let{to:a,href:i,text:l}=e;return a?r.createElement("li",{style:u,key:t},r.createElement(n.Link,{to:a},l)):i?r.createElement("li",{style:u,key:t},r.createElement("a",{href:i,rel:"noreferrer",target:"_blank"},l)):r.createElement("li",{style:u,key:t},r.createElement("s",null,l))})))};const p={height:"7rem",paddingTop:"0.5rem"},h={position:"relative"},f={...h,display:"none",touchAction:"none",pointerEvents:"none",MozUserSelect:"none",WebkitUserSelect:"none"},y=i.default.div.withConfig({displayName:"Header__ImageHomeWrapper",componentId:"sc-ctrlne-0"})(["display:block;position:absolute;width:10rem;height:10rem;margin-top:9.5rem;margin-left:-12.5rem;z-index:1;border-radius:50%;overflow:hidden;@media (max-width:1200px){display:inline-block;float:left;width:6rem;height:6rem;margin-top:2.5rem;margin-left:0;}"]),b=(0,i.default)(y).withConfig({displayName:"Header__ImagePageWrapper",componentId:"sc-ctrlne-1"})(["width:4rem;height:4rem;margin-top:9.5rem;margin-left:-5rem;@media (max-width:1000px){position:relative;width:4rem;height:4rem;margin-top:-0.5rem;margin-right:1rem;margin-left:0;}"]),v={width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100%",transition:"none"},w=i.default.div.withConfig({displayName:"Header__SiteTitle",componentId:"sc-ctrlne-2"})(["line-height:1.5;vertical-align:top;margin-right:1rem;@media (max-width:576px){display:block;width:calc(100% - 5rem);margin-right:0;}"]),E={color:"black",textDecoration:"none"},x=[{to:"/blog",text:"Блог"},{to:"/cv",text:"Резюме"}];var k=e=>{let{isHome:t=!1}=e;const i=t?y:b;return r.createElement("header",{style:p},r.createElement(c,null,r.createElement(i,null,r.createElement(n.Link,{to:"/"},r.createElement(d.S,{style:v,alt:"Руслан Хуснетдинов",src:"../images/icon-cropped.png",placeholder:"none",loading:"eager",layout:"fixed",width:320,height:320,__imageData:a(8537)}))),r.createElement("div",{style:t?f:h},r.createElement(w,null,r.createElement(n.Link,{to:"/",style:E},"Руслан Хуснетдинов")),r.createElement("nav",null,r.createElement(g,{items:x})))))};const S={paddingBottom:"1rem"},C=[{href:"https://github.com/ruslanxdev",text:"GitHub"},{href:"https://www.linkedin.com/in/ruslanxdev",text:"LinkedIn"},{href:"https://t.me/superadventurer",text:"Telegram"},{href:"mailto:ruslankhh@gmail.com",text:"Email"}];var L=()=>r.createElement("footer",{style:S},r.createElement(c,null,r.createElement(g,{items:C}),r.createElement("div",null,"© 2024 Руслан Хуснетдинов")));const I=i.styled.span.withConfig({displayName:"Cover__Container",componentId:"sc-8cs8mx-0"})(["display:inline-block;position:relative;float:right;width:10rem;margin-top:3rem;margin-left:1rem;overflow:hidden;@media (max-width:576px){max-height:10rem;float:none;margin-top:0;margin-left:0;margin-bottom:-2rem;}"]);var N=e=>{let{data:t}=e;return r.createElement(I,null,r.createElement(d.G,{alt:"Руслан Хуснетдинов",image:(0,d.c)(t),placeholder:"blurred",loading:"eager",layout:"fixed"}))};const _={SubHeader:o.A,Link:n.Link},T=(0,i.createGlobalStyle)(["*{box-sizing:border-box;}body{color:#232129;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';margin:0;line-height:1;overflow-x:hidden;}main{font-size:1.125rem;line-height:1.34;overflow-x:hidden;}h1,h2,h3,h4{margin-bottom:1rem;line-height:1;}h1{margin-top:3rem;font-size:3rem;}h2{margin-top:2.25rem;font-size:2.25rem;}h3{margin-top:1.5rem;font-size:1.75rem;}h4{margin-top:1.25rem;font-size:1.375rem;}blockquote{margin-left:0;margin-right:0;font-size:1.4375rem;}p{margin-bottom:0;}ul{margin-top:0.25rem;padding-inline-start:2rem;}"]);var z=e=>{let{title:t,cover:a,pageTitle:i,isHome:o,children:s}=e;const d=(0,n.useStaticQuery)("3159585216");var m,u,g,p;i||(i=t===(null===(m=d.site)||void 0===m||null===(u=m.siteMetadata)||void 0===u?void 0:u.title)?t:`${t} — ${null===(g=d.site)||void 0===g||null===(p=g.siteMetadata)||void 0===p?void 0:p.title}`);return r.createElement(r.Fragment,null,r.createElement(T,null),r.createElement("title",null,i),r.createElement(k,{isHome:o}),r.createElement("main",null,r.createElement(c,null,a&&r.createElement(N,{data:a}),r.createElement("h1",null,t),r.createElement(l.xA,{components:_},s))),r.createElement(L,null))}},106:function(e,t,a){var r=a(6540);const n=a(7581).styled.div.withConfig({displayName:"SubHeader__Container",componentId:"sc-r18gme-0"})(["font-weight:normal;"]),i={1:{fontSize:"1.375rem",marginTop:"-1rem",color:"darkgray"},2:{fontSize:"1.125rem",marginTop:"-1rem",color:"darkgray"},3:{display:"inline-block",fontSize:"1.125rem",color:"darkgray"},4:{display:"inline-block"},5:{display:"inline-block",fontSize:"0.777778em",color:"darkgray"}};t.A=e=>{let{type:t=1,children:a}=e;return r.createElement(n,{className:"SubHeader",style:i[t]},a)}},8453:function(e,t,a){a.d(t,{RP:function(){return i},xA:function(){return o}});var r=a(6540);const n=r.createContext({});function i(e){const t=r.useContext(n);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const l={};function o({components:e,children:t,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||l:i(e),r.createElement(n.Provider,{value:o},t)}},8537:function(e){e.exports=JSON.parse('{"layout":"fixed","images":{"fallback":{"src":"/static/3d3dce480de87933a126b1752ece9ae6/5f035/icon-cropped.png","srcSet":"/static/3d3dce480de87933a126b1752ece9ae6/5f035/icon-cropped.png 320w","sizes":"320px"},"sources":[{"srcSet":"/static/3d3dce480de87933a126b1752ece9ae6/5e011/icon-cropped.webp 320w","type":"image/webp","sizes":"320px"}]},"width":320,"height":320}')}}]);
//# sourceMappingURL=commons-a33c1871244174db3fa5.js.map