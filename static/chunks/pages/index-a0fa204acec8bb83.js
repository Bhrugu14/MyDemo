(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4369)}])},4369:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var u=t(5893),i=(t(2920),t(1163)),r=(t(7706),t(7294)),c=function(n){var e=n.item,t=n.onClickDelete;return(0,u.jsxs)("div",{onClick:function(n){alert("delete button is clicked")},children:[e.name,(0,u.jsx)("button",{onClick:function(n){n.stopPropagation(),t()},children:"delete"})]})};function o(){(0,i.useRouter)();var n=(0,r.useState)([{name:"bhrugu"},{name:"bhrugu2"},{name:"bhrugu3"},{name:"bhrugu4"},{name:"bhrugu5"}]),e=n[0],t=n[1],o=(0,r.useState)(""),l=o[0],a=o[1];return(0,u.jsxs)("div",{children:[(0,u.jsx)("input",{value:l,type:"text",onChange:function(n){return a(n.target.value)}}),(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:e.map((function(n,i){return console.log("searchText",l,!n.name.includes(l)),n.name.includes(l)?(0,u.jsx)(c,{item:n,onClickDelete:function(){t(e.filter((function(n,e){return e!=i})))}},i):null}))})]})}}},function(n){n.O(0,[622,774,888,179],(function(){return e=5557,n(n.s=e);var e}));var e=n.O();_N_E=e}]);