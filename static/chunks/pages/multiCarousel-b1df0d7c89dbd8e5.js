(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{111:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/multiCarousel",function(){return n(6116)}])},7706:function(t,e,n){"use strict";n.d(e,{l:function(){return a},a:function(){return c}});var r=n(5893),o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(t){var e=t.title,n=t.onclickButton,c=(0,o.useRef)(null);return(0,r.jsx)("div",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}({ref:c,className:"ripple-button",onClick:function(t){console.log("SAD",t);var e=t.clientX-t.target.offsetLeft,r=t.clientY-t.target.offsetTop,o=document.createElement("span");o.style.left="".concat(e,"px"),o.style.top="".concat(r,"px"),t.target.appendChild(o),setTimeout((function(){o.remove()}),600),n(t)}},t,{children:e}))},a=function(){return(0,o.useEffect)((function(){var t=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;document.getElementById("navbar").style.top=t>e?"0":"-50px",t=e}}),[]),(0,r.jsxs)("div",{id:"navbar",children:[(0,r.jsx)("a",{href:"#home",children:"Home"}),(0,r.jsx)("a",{href:"#news",children:"News"}),(0,r.jsx)("a",{href:"#contact",children:"Contact"})]})}},6116:function(t,e,n){"use strict";n.r(e);var r=n(5893),o=n(7706);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=function(){return(0,r.jsxs)("div",{className:"mainContainer",children:[(0,r.jsx)(o.l,{}),(0,r.jsx)("div",{style:{display:"flex",flexDirection:"row",position:"absolute",bottom:0,width:"100vw",overflow:"scroll"},children:c(Array(50)).map((function(t,e){return(0,r.jsx)("div",{className:"bottomCard",children:"a"},e)}))})]})}}},function(t){t.O(0,[774,888,179],(function(){return e=111,t(t.s=e);var e}));var e=t.O();_N_E=e}]);