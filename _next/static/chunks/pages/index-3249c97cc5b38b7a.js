(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5348)}])},7706:function(e,t,n){"use strict";n.d(t,{l:function(){return i},a:function(){return a}});var o=n(5893),s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(e){var t=e.title,n=e.onclickButton,a=(0,s.useRef)(null);return(0,o.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({ref:a,className:"ripple-button",onClick:function(e){console.log("SAD",e);var t=e.clientX-e.target.offsetLeft,o=e.clientY-e.target.offsetTop,s=document.createElement("span");s.style.left="".concat(t,"px"),s.style.top="".concat(o,"px"),e.target.appendChild(s),setTimeout((function(){s.remove()}),600),n(e)}},e,{children:t}))},i=function(){return(0,s.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;document.getElementById("navbar").style.top=e>t?"0":"-50px",e=t}}),[]),(0,o.jsxs)("div",{id:"navbar",children:[(0,o.jsx)("a",{href:"#home",children:"Home"}),(0,o.jsx)("a",{href:"#news",children:"News"}),(0,o.jsx)("a",{href:"#contact",children:"Contact"})]})}},5348:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var o=n(5893),s=n(7294);function r(e){var t,n,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function a(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}function i(e){return"number"==typeof e&&!isNaN(e)}function c(e){return"boolean"==typeof e}function l(e){return"string"==typeof e}function u(e){return"function"==typeof e}function d(e){return l(e)||u(e)?e:null}function f(e){return 0===e||e}function p(e){return(0,s.isValidElement)(e)||l(e)||u(e)||i(e)}const m={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},g={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function y(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:r=!0,collapseDuration:a=300}=e;return function(e){let{children:i,position:c,preventExitTransition:l,done:u,nodeRef:d,isIn:f}=e;const p=o?t+"--"+c:t,m=o?n+"--"+c:n,g=(0,s.useRef)(),y=(0,s.useRef)(0);function h(e){if(e.target!==d.current)return;const t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===y.current&&"animationcancel"!==e.type&&(t.className=g.current)}function T(){const e=d.current;e.removeEventListener("animationend",T),r?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame((()=>{s.minHeight="initial",s.height=o+"px",s.transition="all "+n+"ms",requestAnimationFrame((()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)}))}))}(e,u,a):u()}return(0,s.useLayoutEffect)((()=>{!function(){const e=d.current;g.current=e.className,e.className+=" "+p,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}()}),[]),(0,s.useEffect)((()=>{f||(l?T():function(){y.current=1;const e=d.current;e.className+=" "+m,e.addEventListener("animationend",T)}())}),[f]),s.createElement(s.Fragment,null,i)}}function h(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const T={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter((e=>e!==t));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach((t=>{const n=setTimeout((()=>{t(...[].slice.call(arguments,1))}),0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)}))}},v=e=>{let{theme:t,type:n,...o}=e;return s.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")",...o})},E={info:function(e){return s.createElement(v,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(v,{...e},s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(v,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(v,{...e},s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function b(e){const[,t]=(0,s.useReducer)((e=>e+1),0),[n,o]=(0,s.useState)([]),r=(0,s.useRef)(null),a=(0,s.useRef)(new Map).current,m=e=>-1!==n.indexOf(e),g=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:e=>a.get(e)}).current;function y(e){let{containerId:t}=e;const{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function v(e){o((t=>f(e)?t.filter((t=>t!==e)):[]))}function b(){const{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();_(e,t,n)}function C(e,n){let{delay:o,staleId:m,...y}=n;if(!p(e)||function(e){return!r.current||g.props.enableMultiContainer&&e.containerId!==g.props.containerId||a.has(e.toastId)&&null==e.updateId}(y))return;const{toastId:C,updateId:O,data:I}=y,{props:x}=g,w=()=>v(C),L=null==O;L&&g.count++;const N={toastId:C,updateId:O,data:I,containerId:y.containerId,isLoading:y.isLoading,theme:y.theme||x.theme,icon:null!=y.icon?y.icon:x.icon,isIn:!1,key:y.key||g.toastKey++,type:y.type,closeToast:w,closeButton:y.closeButton,rtl:x.rtl,position:y.position||x.position,transition:y.transition||x.transition,className:d(y.className||x.toastClassName),bodyClassName:d(y.bodyClassName||x.bodyClassName),style:y.style||x.toastStyle,bodyStyle:y.bodyStyle||x.bodyStyle,onClick:y.onClick||x.onClick,pauseOnHover:c(y.pauseOnHover)?y.pauseOnHover:x.pauseOnHover,pauseOnFocusLoss:c(y.pauseOnFocusLoss)?y.pauseOnFocusLoss:x.pauseOnFocusLoss,draggable:c(y.draggable)?y.draggable:x.draggable,draggablePercent:y.draggablePercent||x.draggablePercent,draggableDirection:y.draggableDirection||x.draggableDirection,closeOnClick:c(y.closeOnClick)?y.closeOnClick:x.closeOnClick,progressClassName:d(y.progressClassName||x.progressClassName),progressStyle:y.progressStyle||x.progressStyle,autoClose:!y.isLoading&&(k=y.autoClose,R=x.autoClose,!1===k||i(k)&&k>0?k:R),hideProgressBar:c(y.hideProgressBar)?y.hideProgressBar:x.hideProgressBar,progress:y.progress,role:y.role||x.role,deleteToast(){const e=h(a.get(C),"removed");a.delete(C),T.emit(4,e);const n=g.queue.length;if(g.count=f(C)?g.count-1:g.count-g.displayedToast,g.count<0&&(g.count=0),n>0){const e=f(C)?1:g.props.limit;if(1===n||1===e)g.displayedToast++,b();else{const t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)b()}}else t()}};var k,R;N.iconOut=function(e){let{theme:t,type:n,isLoading:o,icon:r}=e,a=null;const c={theme:t,type:n};return!1===r||(u(r)?a=r(c):(0,s.isValidElement)(r)?a=(0,s.cloneElement)(r,c):l(r)||i(r)?a=r:o?a=E.spinner():(e=>e in E)(n)&&(a=E[n](c))),a}(N),u(y.onOpen)&&(N.onOpen=y.onOpen),u(y.onClose)&&(N.onClose=y.onClose),N.closeButton=x.closeButton,!1===y.closeButton||p(y.closeButton)?N.closeButton=y.closeButton:!0===y.closeButton&&(N.closeButton=!p(x.closeButton)||x.closeButton);let P=e;(0,s.isValidElement)(e)&&!l(e.type)?P=(0,s.cloneElement)(e,{closeToast:w,toastProps:N,data:I}):u(e)&&(P=e({closeToast:w,toastProps:N,data:I})),x.limit&&x.limit>0&&g.count>x.limit&&L?g.queue.push({toastContent:P,toastProps:N,staleId:m}):i(o)?setTimeout((()=>{_(P,N,m)}),o):_(P,N,m)}function _(e,t,n){const{toastId:s}=t;n&&a.delete(n);const r={content:e,props:t};a.set(s,r),o((e=>[...e,s].filter((e=>e!==n)))),T.emit(4,h(r,null==r.props.updateId?"added":"updated"))}return(0,s.useEffect)((()=>(g.containerId=e.containerId,T.cancelEmit(3).on(0,C).on(1,(e=>r.current&&v(e))).on(5,y).emit(2,g),()=>T.emit(3,g))),[]),(0,s.useEffect)((()=>{g.props=e,g.isToastActive=m,g.displayedToast=n.length})),{getToastToRender:function(t){const n=new Map,o=Array.from(a.values());return e.newestOnTop&&o.reverse(),o.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},containerRef:r,isToastActive:m}}function C(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function _(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function O(e){const[t,n]=(0,s.useState)(!1),[o,r]=(0,s.useState)(!1),a=(0,s.useRef)(null),i=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,s.useRef)(e),{autoClose:l,pauseOnHover:d,closeToast:f,onClick:p,closeOnClick:m}=e;function g(t){if(e.draggable){i.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",E),document.addEventListener("touchmove",v),document.addEventListener("touchend",E);const n=a.current;i.canCloseOnClick=!0,i.canDrag=!0,i.boundingRect=n.getBoundingClientRect(),n.style.transition="",i.x=C(t.nativeEvent),i.y=_(t.nativeEvent),"x"===e.draggableDirection?(i.start=i.x,i.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(i.start=i.y,i.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(){if(i.boundingRect){const{top:t,bottom:n,left:o,right:s}=i.boundingRect;e.pauseOnHover&&i.x>=o&&i.x<=s&&i.y>=t&&i.y<=n?T():h()}}function h(){n(!0)}function T(){n(!1)}function v(n){const o=a.current;i.canDrag&&o&&(i.didMove=!0,t&&T(),i.x=C(n),i.y=_(n),i.delta="x"===e.draggableDirection?i.x-i.start:i.y-i.start,i.start!==i.x&&(i.canCloseOnClick=!1),o.style.transform="translate"+e.draggableDirection+"("+i.delta+"px)",o.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function E(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",E);const t=a.current;if(i.canDrag&&i.didMove&&t){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return r(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,s.useEffect)((()=>{c.current=e})),(0,s.useEffect)((()=>(a.current&&a.current.addEventListener("d",h,{once:!0}),u(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),()=>{const e=c.current;u(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)})),[]),(0,s.useEffect)((()=>(e.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",h),window.addEventListener("blur",T)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",h),window.removeEventListener("blur",T))})),[e.pauseOnFocusLoss]);const b={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return l&&d&&(b.onMouseEnter=T,b.onMouseLeave=h),m&&(b.onClick=e=>{p&&p(e),i.canCloseOnClick&&f()}),{playToast:h,pauseToast:T,isRunning:t,preventExitTransition:o,toastRef:a,eventHandlers:b}}function I(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function x(e){let{delay:t,isRunning:n,closeToast:o,type:r,hide:i,className:c,style:l,controlledProgress:d,progress:f,rtl:p,isIn:m,theme:g}=e;const y={...l,animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:i?0:1};d&&(y.transform="scaleX("+f+")");const h=a("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+g,"Toastify__progress-bar--"+r,{"Toastify__progress-bar--rtl":p}),T=u(c)?c({rtl:p,type:r,defaultClassName:h}):a(h,c);return s.createElement("div",{role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:T,style:y,[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]:d&&f<1?null:()=>{m&&o()}})}x.defaultProps={type:g.DEFAULT,hide:!1};const w=e=>{const{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:r}=O(e),{closeButton:i,children:c,autoClose:l,onClick:d,type:f,hideProgressBar:p,closeToast:m,transition:g,position:y,className:h,style:T,bodyClassName:v,bodyStyle:E,progressClassName:b,progressStyle:C,updateId:_,role:w,progress:L,rtl:N,toastId:k,deleteToast:R,isIn:P,isLoading:B,iconOut:D,theme:M}=e,S=a("Toastify__toast","Toastify__toast-theme--"+M,"Toastify__toast--"+f,{"Toastify__toast--rtl":N}),A=u(h)?h({rtl:N,position:y,type:f,defaultClassName:S}):a(S,h),j=!!L,F={closeToast:m,type:f,theme:M};let z=null;return!1===i||(z=u(i)?i(F):s.isValidElement(i)?s.cloneElement(i,F):I(F)),s.createElement(g,{isIn:P,done:R,position:y,preventExitTransition:n,nodeRef:o},s.createElement("div",{id:k,onClick:d,className:A,...r,style:T,ref:o},s.createElement("div",{...P&&{role:w},className:u(v)?v({type:f}):a("Toastify__toast-body",v),style:E},null!=D&&s.createElement("div",{className:a("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},D),s.createElement("div",null,c)),z,(l||j)&&s.createElement(x,{..._&&!j?{key:"pb-"+_}:{},rtl:N,theme:M,delay:l,isRunning:t,isIn:P,closeToast:m,hide:p,type:f,style:C,className:b,controlledProgress:j,progress:L})))},L=y({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),N=(y({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),y({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),y({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,s.forwardRef)(((e,t)=>{const{getToastToRender:n,containerRef:o,isToastActive:r}=b(e),{className:i,style:c,rtl:l,containerId:f}=e;function p(e){const t=a("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":l});return u(i)?i({position:e,rtl:l,defaultClassName:t}):a(t,d(i))}return(0,s.useEffect)((()=>{t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:f},n(((e,t)=>{const n=t.length?{...c}:{...c,pointerEvents:"none"};return s.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map(((e,n)=>{let{content:o,props:a}=e;return s.createElement(w,{...a,isIn:r(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:"toast-"+a.key},o)})))})))})));N.displayName="ToastContainer",N.defaultProps={position:m.TOP_RIGHT,transition:L,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:I,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let k,R=new Map,P=[];function B(){return Math.random().toString(36).substring(2,9)}function D(e){return e&&(l(e.toastId)||i(e.toastId))?e.toastId:B()}function M(e,t){return R.size>0?T.emit(0,e,t):P.push({content:e,options:t}),t.toastId}function S(e,t){return{...t,type:t&&t.type||e,toastId:D(t)}}function A(e){return(t,n)=>M(t,S(e,n))}function j(e,t){return M(e,S(g.DEFAULT,t))}j.loading=(e,t)=>M(e,S(g.DEFAULT,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),j.promise=function(e,t,n){let o,{pending:s,error:r,success:a}=t;s&&(o=l(s)?j.loading(s,n):j.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=(e,t,s)=>{if(null==t)return void j.dismiss(o);const r={type:e,...i,...n,data:s},a=l(t)?{render:t}:t;return o?j.update(o,{...r,...a}):j(a.render,{...r,...a}),s},d=u(e)?e():e;return d.then((e=>c("success",a,e))).catch((e=>c("error",r,e))),d},j.success=A(g.SUCCESS),j.info=A(g.INFO),j.error=A(g.ERROR),j.warning=A(g.WARNING),j.warn=j.warning,j.dark=(e,t)=>M(e,S(g.DEFAULT,{theme:"dark",...t})),j.dismiss=e=>T.emit(1,e),j.clearWaitingQueue=function(e){return void 0===e&&(e={}),T.emit(5,e)},j.isActive=e=>{let t=!1;return R.forEach((n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},j.update=function(e,t){void 0===t&&(t={}),setTimeout((()=>{const n=function(e,t){let{containerId:n}=t;const o=R.get(n||k);return o?o.getToast(e):null}(e,t);if(n){const{props:o,content:s}=n,r={...o,...t,toastId:t.toastId||e,updateId:B()};r.toastId!==e&&(r.staleId=e);const a=r.render||s;delete r.render,M(a,r)}}),0)},j.done=e=>{j.update(e,{progress:1})},j.onChange=e=>(T.on(4,e),()=>{T.off(4,e)}),j.POSITION=m,j.TYPE=g,T.on(2,(e=>{k=e.containerId||e,R.set(k,e),P.forEach((e=>{T.emit(0,e.content,e.options)})),P=[]})).on(3,(e=>{R.delete(e.containerId||e),0===R.size&&T.off(0).off(1).off(5)}));var F=n(1163),z=n(7706);function H(){var e=(0,F.useRouter)();return(0,o.jsxs)("div",{className:"wrapper",children:[(0,o.jsx)("p",{children:"Ripple Buttons with Toast"}),(0,o.jsxs)("section",{style:{display:"flex",flex:1,flexDirection:"row",height:"40%",width:"100%",flexWrap:"wrap"},children:[(0,o.jsx)(z.a,{style:{backgroundColor:"grey"},onclickButton:function(){return j.info("Information Toast!")},title:"info"}),(0,o.jsx)(z.a,{style:{backgroundColor:"rgb(21, 160, 3"},onclickButton:function(){return j.success("Success Toast!")},title:"success"}),(0,o.jsx)(z.a,{style:{backgroundColor:"red"},onclickButton:function(){return j.error("Warning Toast!")},title:"error"}),(0,o.jsx)(z.a,{style:{backgroundColor:"rgb(131, 129, 2)"},onclickButton:function(){return j.warning("Warning Toast!")},title:"warning"})]}),(0,o.jsx)("section",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",height:"40%",width:"100%"},children:(0,o.jsx)(z.a,{style:{alignSelf:"center"},onclickButton:function(){return e.push("/multiCarousel")},title:"Next Page"})}),(0,o.jsx)(N,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0})]})}},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);