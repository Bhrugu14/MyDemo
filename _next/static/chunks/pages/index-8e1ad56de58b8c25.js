(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8056)}])},7729:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var o=n(1799),s=n(9396),a=n(5893),r=n(7294),i=function(e){var t=e.title,n=e.onclickButton,i=(0,r.useRef)(null);return(0,a.jsx)("div",(0,s.Z)((0,o.Z)({ref:i,className:"ripple-button",onClick:function(e){console.log("SAD",e);var t=e.clientX-e.target.offsetLeft,o=e.clientY-e.target.offsetTop,s=document.createElement("span");s.style.left="".concat(t,"px"),s.style.top="".concat(o,"px"),e.target.appendChild(s),setTimeout((function(){s.remove()}),600),n(e)}},e),{children:t}))}},8056:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var o=n(5893),s=n(7294);function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var r=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o};function i(e){return"number"===typeof e&&!isNaN(e)}function l(e){return"boolean"===typeof e}function c(e){return"string"===typeof e}function u(e){return"function"===typeof e}function d(e){return c(e)||u(e)?e:null}function f(e){return null!=e}function p(e){return(0,s.isValidElement)(e)||c(e)||u(e)||i(e)}const m={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},g={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function y(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:a=!0,collapseDuration:r=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:f}=e;const p=o?t+"--"+l:t,m=o?n+"--"+l:n,g=(0,s.useRef)(0);return(0,s.useLayoutEffect)((()=>{const e=d.current,t=p.split(" "),n=o=>{o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,s.useEffect)((()=>{const e=d.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame((()=>{s.minHeight="initial",s.height=o+"px",s.transition="all "+n+"ms",requestAnimationFrame((()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)}))}))}(e,u,r):u()};f||(c?t():(g.current=1,e.className+=" "+m,e.addEventListener("animationend",t)))}),[f]),s.createElement(s.Fragment,null,i)}}function h(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const T={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter((e=>e!==t));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach((t=>{const n=setTimeout((()=>{t(...[].slice.call(arguments,1))}),0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)}))}},v=e=>{let{theme:t,type:n,...o}=e;return s.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")",...o})};const E={info:function(e){return s.createElement(v,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(v,{...e},s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(v,{...e},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(v,{...e},s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function b(e){let{theme:t,type:n,isLoading:o,icon:a}=e,r=null;const l={theme:t,type:n};return!1===a||(u(a)?r=a(l):(0,s.isValidElement)(a)?r=(0,s.cloneElement)(a,l):c(a)||i(a)?r=a:o?r=E.spinner():(e=>e in E)(n)&&(r=E[n](l))),r}function C(e){const[,t]=(0,s.useReducer)((e=>e+1),0),[n,o]=(0,s.useState)([]),a=(0,s.useRef)(null),r=(0,s.useRef)(new Map).current,m=e=>-1!==n.indexOf(e),g=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:e=>r.get(e)}).current;function y(e){let{containerId:t}=e;const{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function v(e){o((t=>f(e)?t.filter((t=>t!==e)):[]))}function E(){const{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();_(e,t,n)}function C(e,n){let{delay:o,staleId:m,...y}=n;if(!p(e)||function(e){return!a.current||g.props.enableMultiContainer&&e.containerId!==g.props.containerId||r.has(e.toastId)&&null==e.updateId}(y))return;const{toastId:C,updateId:I,data:O}=y,{props:L}=g,x=()=>v(C),N=null==I;N&&g.count++;const k={toastId:C,updateId:I,data:O,containerId:y.containerId,isLoading:y.isLoading,theme:y.theme||L.theme,icon:null!=y.icon?y.icon:L.icon,isIn:!1,key:y.key||g.toastKey++,type:y.type,closeToast:x,closeButton:y.closeButton,rtl:L.rtl,position:y.position||L.position,transition:y.transition||L.transition,className:d(y.className||L.toastClassName),bodyClassName:d(y.bodyClassName||L.bodyClassName),style:y.style||L.toastStyle,bodyStyle:y.bodyStyle||L.bodyStyle,onClick:y.onClick||L.onClick,pauseOnHover:l(y.pauseOnHover)?y.pauseOnHover:L.pauseOnHover,pauseOnFocusLoss:l(y.pauseOnFocusLoss)?y.pauseOnFocusLoss:L.pauseOnFocusLoss,draggable:l(y.draggable)?y.draggable:L.draggable,draggablePercent:y.draggablePercent||L.draggablePercent,draggableDirection:y.draggableDirection||L.draggableDirection,closeOnClick:l(y.closeOnClick)?y.closeOnClick:L.closeOnClick,progressClassName:d(y.progressClassName||L.progressClassName),progressStyle:y.progressStyle||L.progressStyle,autoClose:!y.isLoading&&(R=y.autoClose,w=L.autoClose,!1===R||i(R)&&R>0?R:w),hideProgressBar:l(y.hideProgressBar)?y.hideProgressBar:L.hideProgressBar,progress:y.progress,role:y.role||L.role,deleteToast(){const e=h(r.get(C),"removed");r.delete(C),T.emit(4,e);const n=g.queue.length;if(g.count=f(C)?g.count-1:g.count-g.displayedToast,g.count<0&&(g.count=0),n>0){const e=f(C)?1:g.props.limit;if(1===n||1===e)g.displayedToast++,E();else{const t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)E()}}else t()}};var R,w;k.iconOut=b(k),u(y.onOpen)&&(k.onOpen=y.onOpen),u(y.onClose)&&(k.onClose=y.onClose),k.closeButton=L.closeButton,!1===y.closeButton||p(y.closeButton)?k.closeButton=y.closeButton:!0===y.closeButton&&(k.closeButton=!p(L.closeButton)||L.closeButton);let P=e;(0,s.isValidElement)(e)&&!c(e.type)?P=(0,s.cloneElement)(e,{closeToast:x,toastProps:k,data:O}):u(e)&&(P=e({closeToast:x,toastProps:k,data:O})),L.limit&&L.limit>0&&g.count>L.limit&&N?g.queue.push({toastContent:P,toastProps:k,staleId:m}):i(o)?setTimeout((()=>{_(P,k,m)}),o):_(P,k,m)}function _(e,t,n){const{toastId:s}=t;n&&r.delete(n);const a={content:e,props:t};r.set(s,a),o((e=>[...e,s].filter((e=>e!==n)))),T.emit(4,h(a,null==a.props.updateId?"added":"updated"))}return(0,s.useEffect)((()=>(g.containerId=e.containerId,T.cancelEmit(3).on(0,C).on(1,(e=>a.current&&v(e))).on(5,y).emit(2,g),()=>{r.clear(),T.emit(3,g)})),[]),(0,s.useEffect)((()=>{g.props=e,g.isToastActive=m,g.displayedToast=n.length})),{getToastToRender:function(t){const n=new Map,o=Array.from(r.values());return e.newestOnTop&&o.reverse(),o.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(e=>t(e[0],e[1])))},containerRef:a,isToastActive:m}}function _(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function O(e){const[t,n]=(0,s.useState)(!1),[o,a]=(0,s.useState)(!1),r=(0,s.useRef)(null),i=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=(0,s.useRef)(e),{autoClose:c,pauseOnHover:d,closeToast:f,onClick:p,closeOnClick:m}=e;function g(t){if(e.draggable){i.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",E),document.addEventListener("touchmove",v),document.addEventListener("touchend",E);const n=r.current;i.canCloseOnClick=!0,i.canDrag=!0,i.boundingRect=n.getBoundingClientRect(),n.style.transition="",i.x=_(t.nativeEvent),i.y=I(t.nativeEvent),"x"===e.draggableDirection?(i.start=i.x,i.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(i.start=i.y,i.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(){if(i.boundingRect){const{top:t,bottom:n,left:o,right:s}=i.boundingRect;e.pauseOnHover&&i.x>=o&&i.x<=s&&i.y>=t&&i.y<=n?T():h()}}function h(){n(!0)}function T(){n(!1)}function v(n){const o=r.current;i.canDrag&&o&&(i.didMove=!0,t&&T(),i.x=_(n),i.y=I(n),"x"===e.draggableDirection?i.delta=i.x-i.start:i.delta=i.y-i.start,i.start!==i.x&&(i.canCloseOnClick=!1),o.style.transform="translate"+e.draggableDirection+"("+i.delta+"px)",o.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function E(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",E);const t=r.current;if(i.canDrag&&i.didMove&&t){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,s.useEffect)((()=>{l.current=e})),(0,s.useEffect)((()=>(r.current&&r.current.addEventListener("d",h,{once:!0}),u(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),()=>{const e=l.current;u(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)})),[]),(0,s.useEffect)((()=>(e.pauseOnFocusLoss&&function(){document.hasFocus()||T();window.addEventListener("focus",h),window.addEventListener("blur",T)}(),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",h),window.removeEventListener("blur",T))})),[e.pauseOnFocusLoss]);const b={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};return c&&d&&(b.onMouseEnter=T,b.onMouseLeave=h),m&&(b.onClick=e=>{p&&p(e),i.canCloseOnClick&&f()}),{playToast:h,pauseToast:T,isRunning:t,preventExitTransition:o,toastRef:r,eventHandlers:b}}function L(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function x(e){let{delay:t,isRunning:n,closeToast:o,type:a,hide:i,className:l,style:c,controlledProgress:d,progress:f,rtl:p,isIn:m,theme:g}=e;const y={...c,animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:i?0:1};d&&(y.transform="scaleX("+f+")");const h=r("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+g,"Toastify__progress-bar--"+a,{"Toastify__progress-bar--rtl":p}),T=u(l)?l({rtl:p,type:a,defaultClassName:h}):r(h,l),v={[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]:d&&f<1?null:()=>{m&&o()}};return s.createElement("div",{role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:T,style:y,...v})}x.defaultProps={type:g.DEFAULT,hide:!1};const N=e=>{const{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:a}=O(e),{closeButton:i,children:l,autoClose:c,onClick:d,type:f,hideProgressBar:p,closeToast:m,transition:g,position:y,className:h,style:T,bodyClassName:v,bodyStyle:E,progressClassName:b,progressStyle:C,updateId:_,role:I,progress:N,rtl:k,toastId:R,deleteToast:w,isIn:P,isLoading:B,iconOut:D,theme:M}=e,A=r("Toastify__toast","Toastify__toast-theme--"+M,"Toastify__toast--"+f,{"Toastify__toast--rtl":k}),S=u(h)?h({rtl:k,position:y,type:f,defaultClassName:A}):r(A,h),F=!!N,z={closeToast:m,type:f,theme:M};let H=null;return!1===i||(H=u(i)?i(z):s.isValidElement(i)?s.cloneElement(i,z):L(z)),s.createElement(g,{isIn:P,done:w,position:y,preventExitTransition:n,nodeRef:o},s.createElement("div",{id:R,onClick:d,className:S,...a,style:T,ref:o},s.createElement("div",{...P&&{role:I},className:u(v)?v({type:f}):r("Toastify__toast-body",v),style:E},null!=D&&s.createElement("div",{className:r("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!B})},D),s.createElement("div",null,l)),H,(c||F)&&s.createElement(x,{..._&&!F?{key:"pb-"+_}:{},rtl:k,theme:M,delay:c,isRunning:t,isIn:P,closeToast:m,hide:p,type:f,style:C,className:b,controlledProgress:F,progress:N})))},k=y({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),R=(y({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),y({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),y({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,s.forwardRef)(((e,t)=>{const{getToastToRender:n,containerRef:o,isToastActive:a}=C(e),{className:i,style:l,rtl:c,containerId:f}=e;function p(e){const t=r("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":c});return u(i)?i({position:e,rtl:c,defaultClassName:t}):r(t,d(i))}return(0,s.useEffect)((()=>{t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:f},n(((e,t)=>{const n=t.length?{...l}:{...l,pointerEvents:"none"};return s.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map(((e,n)=>{let{content:o,props:r}=e;return s.createElement(N,{...r,isIn:a(r.toastId),style:{...r.style,"--nth":n+1,"--len":t.length},key:"toast-"+r.key},o)})))})))})));R.displayName="ToastContainer",R.defaultProps={position:m.TOP_RIGHT,transition:k,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let w,P=new Map,B=[];function D(){return Math.random().toString(36).substring(2,9)}function M(e){return e&&(c(e.toastId)||i(e.toastId))?e.toastId:D()}function A(e,t){return P.size>0?T.emit(0,e,t):B.push({content:e,options:t}),t.toastId}function S(e,t){return{...t,type:t&&t.type||e,toastId:M(t)}}function F(e){return(t,n)=>A(t,S(e,n))}function z(e,t){return A(e,S(g.DEFAULT,t))}z.loading=(e,t)=>A(e,S(g.DEFAULT,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),z.promise=function(e,t,n){let o,{pending:s,error:a,success:r}=t;s&&(o=c(s)?z.loading(s,n):z.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=(e,t,s)=>{if(null==t)return void z.dismiss(o);const a={type:e,...i,...n,data:s},r=c(t)?{render:t}:t;return o?z.update(o,{...a,...r}):z(r.render,{...a,...r}),s},d=u(e)?e():e;return d.then((e=>l("success",r,e))).catch((e=>l("error",a,e))),d},z.success=F(g.SUCCESS),z.info=F(g.INFO),z.error=F(g.ERROR),z.warning=F(g.WARNING),z.warn=z.warning,z.dark=(e,t)=>A(e,S(g.DEFAULT,{theme:"dark",...t})),z.dismiss=e=>{P.size>0?T.emit(1,e):B=B.filter((t=>f(e)&&t.options.toastId!==e))},z.clearWaitingQueue=function(e){return void 0===e&&(e={}),T.emit(5,e)},z.isActive=e=>{let t=!1;return P.forEach((n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},z.update=function(e,t){void 0===t&&(t={}),setTimeout((()=>{const n=function(e,t){let{containerId:n}=t;const o=P.get(n||w);return o?o.getToast(e):null}(e,t);if(n){const{props:o,content:s}=n,a={...o,...t,toastId:t.toastId||e,updateId:D()};a.toastId!==e&&(a.staleId=e);const r=a.render||s;delete a.render,A(r,a)}}),0)},z.done=e=>{z.update(e,{progress:1})},z.onChange=e=>(T.on(4,e),()=>{T.off(4,e)}),z.POSITION=m,z.TYPE=g,T.on(2,(e=>{w=e.containerId||e,P.set(w,e),B.forEach((e=>{T.emit(0,e.content,e.options)})),B=[]})).on(3,(e=>{P.delete(e.containerId||e),0===P.size&&T.off(0).off(1).off(5)}));var H=n(1163),j=n(7729);function q(){var e=(0,H.useRouter)();return(0,o.jsxs)("div",{style:{height:"100%",width:"100%"},children:[(0,o.jsx)("h2",{children:"Ripple Buttons with Toast"}),(0,o.jsxs)("section",{style:{display:"flex",alignItems:"center",justifyContent:"center",flex:1,flexDirection:"row",height:"40%",width:"100%",flexWrap:"wrap"},children:[(0,o.jsx)(j.a,{style:{backgroundColor:"grey"},onclickButton:function(){return z.info("Love you Hiral")},title:"info"}),(0,o.jsx)(j.a,{style:{backgroundColor:"rgb(21, 160, 3"},onclickButton:function(){return z.success("Success Toast!")},title:"success"}),(0,o.jsx)(j.a,{style:{backgroundColor:"red"},onclickButton:function(){return z.error("Warning Toast!")},title:"error"}),(0,o.jsx)(j.a,{style:{backgroundColor:"rgb(131, 129, 2)"},onclickButton:function(){return z.warning("Warning Toast!")},title:"warning"})]}),(0,o.jsx)("section",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",height:"40%",width:"100%"},children:(0,o.jsx)(j.a,{style:{alignSelf:"center"},onclickButton:function(){return e.push("/multiCarousel")},title:"Next Page"})}),(0,o.jsx)(R,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0})]})}},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);