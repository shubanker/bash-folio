(this["webpackJsonpshell-folio"]=this["webpackJsonpshell-folio"]||[]).push([[0],[,,,function(e,t,n){e.exports={container:"social-card_container__2Pkjk",box:"social-card_box__eipQZ",boxText:"social-card_boxText__rLFX-",boxTitle:"social-card_boxTitle__2edHf",profile:"social-card_profile__17HKz",icon:"social-card_icon__wGIeX"}},function(e,t,n){e.exports={bash:"bashCmd_bash__Rc8fh",username:"bashCmd_username__27YQh",processor:"bashCmd_processor__3T29a",cmd:"bashCmd_cmd__2R4Vh",typeingDone:"bashCmd_typeingDone__2oehN",cursor:"bashCmd_cursor__9tx_T"}},,,,function(e,t,n){e.exports={themeSelector:"App_themeSelector__3xtY7",themeBlock:"App_themeBlock__1GwOs",active:"App_active__3fnQU"}},,,function(e,t,n){e.exports={container:"Folio_container__1Vxpe"}},function(e,t,n){e.exports={icon:"Toolbar_icon__26yoa"}},,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,o=n(1),a=n.n(o),r=n(10),i=n.n(r),s=(n(19),n(2)),l=n(13),u=n(0),d="John Doe",m="dev@JS",b=[{ficon:"fa-github",title:"github",path:"#"},{ficon:"fa-linkedin",title:"linkedin",path:"#"},{ficon:"fa-stack-overflow",title:"StackOverflow",path:"#"},{ficon:"fa-twitter",title:"twitter",path:"#"}],j=n(3),f=n.n(j),h=[{command:"whoami",typeWritterText:"Hello world"},{command:"ls",component:function(e){var t=e.next;Object(o.useEffect)((function(){var e=setTimeout((function(){t()}),1e3);return function(){return clearTimeout(e)}}),[t]);return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:["about.txt","projects.md","card.md","help.txt","resume.pdf"].map((function(e){return Object(u.jsx)("div",{className:"col-4 p-0",children:e},e)}))})})}},{command:"cat about.txt",typeWritterText:"\n  This is a project to showcase folio into a shell like Ui.\n  I am bad at writing summary lol, you get the idea.\n  ",typeWritterOptions:{typingSpeed:25}},{command:"cat help.txt",typeWritterText:'\n    You can configure list of commands and output in commands.config.ts\n  Also supports rendering a custom component, so you get a ton of possibilities. \n  For custom components, you need to call "next()" passed in props inside your custom component to tell console to continue with next commands.\n  '},{command:"skp-md-viewer card.md",component:function(e){var t=e.next;Object(o.useEffect)((function(){var e=setTimeout((function(){t()}),1e3);return function(){return clearTimeout(e)}}),[t]);return Object(u.jsx)("div",{className:"container ".concat(f.a.container),children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-4 col-md-6 col-12",children:Object(u.jsxs)("div",{className:f.a.box,children:[Object(u.jsx)("img",{className:f.a.profile,src:"https://cdn.dribbble.com/users/14374/screenshots/3147608/programer.gif",alt:d}),Object(u.jsx)("div",{className:f.a.boxTitle,children:d}),Object(u.jsx)("div",{className:f.a.boxText,children:Object(u.jsx)("span",{children:"JavaScript Developer"})}),Object(u.jsx)("div",{className:f.a.icons,children:b.map((function(e){var t=e.ficon,n=e.path;return Object(u.jsx)("a",{href:n,children:Object(u.jsx)("i",{className:"".concat(f.a.icon," fa ").concat(t)})},t+n)}))})]})})})})}}],p=function(e){return Object(o.useEffect)(e,[])},x=n(7),O=n.n(x),v=n(4),_=n.n(v),g=function(e){var t=e.userName,n=e.next,c=e.cmd,a=void 0===c?"":c,r=e.retainCursor,i=void 0!==r&&r,l=Object(o.useState)(!1),d=Object(s.a)(l,2),m=d[0],b=d[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:_.a.bash,children:[Object(u.jsxs)("span",{className:_.a.username,children:[t," "]})," ",Object(u.jsx)("span",{className:_.a.processor,children:"~/Welcome"})]}),Object(u.jsxs)("div",{className:"".concat(_.a.cmd," ").concat(m?_.a.typeingDone:""),children:["$",Object(u.jsx)(O.a,{options:{cursorClassName:"Typewriter__cursor ".concat(_.a.cursor)},onInit:function(e){e.changeDelay(55).pauseFor(500).typeString(a||"").callFunction((function(){b(!i),null===n||void 0===n||n()})).start()}})]})]})},y=n(14),w=(n(22),function(e){var t,n=e.command,c=e.next,a=Object(o.useState)(!1),r=Object(s.a)(a,2),i=r[0],l=r[1],d=n.component,m=n.typeWritterText,b=n.typeWritterOptions,j=n.componentProps;if(d)t=Object(u.jsx)(d,Object(y.a)({next:c},j));else{var f,h=null!==(f=null===m||void 0===m?void 0:m.trim().split("\n"))&&void 0!==f?f:[];t=i?null===h||void 0===h?void 0:h.map((function(e){return Object(u.jsx)("span",{className:"command-line",children:e},e)})):Object(u.jsx)(O.a,{options:null!==b&&void 0!==b?b:{},onInit:function(e){var t;e.changeDelay(null!==(t=null===b||void 0===b?void 0:b.typingSpeed)&&void 0!==t?t:35),h.forEach((function(t){return e.typeString(t+"<br>").pauseFor(600)})),e.callFunction((function(){c(),l(!0)})).start()}})}return Object(u.jsx)(u.Fragment,{children:t})}),N=function(e){var t=e.command,n=e.next,c=Object(o.useState)(!1),a=Object(s.a)(c,2),r=a[0],i=a[1],l=Object(o.useCallback)((function(){n()}),[n]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{userName:m,cmd:t.command,next:function(){return i(!0)}}),r?Object(u.jsx)(w,{command:t,next:l}):null]})},k=n(11),S=n.n(k),T=["title","titleId"];function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function E(e,t){var n=e.title,a=e.titleId,r=F(e,T);return o.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",width:54,height:14,viewBox:"0 0 54 14",ref:t,"aria-labelledby":a},r),n?o.createElement("title",{id:a},n):null,c||(c=o.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)"},o.createElement("circle",{cx:6,cy:6,r:6,fill:"#FF5F56",stroke:"#E0443E",strokeWidth:.5}),o.createElement("circle",{cx:26,cy:6,r:6,fill:"#FFBD2E",stroke:"#DEA123",strokeWidth:.5}),o.createElement("circle",{cx:46,cy:6,r:6,fill:"#27C93F",stroke:"#1AAB29",strokeWidth:.5}))))}var I=o.forwardRef(E),D=(n.p,function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(!1),r=Object(s.a)(a,2),i=r[0],d=r[1],b=Object(o.useState)(null),j=Object(s.a)(b,2),f=j[0],x=j[1],O=Object(o.useCallback)((function(){window.scrollTo({behavior:"smooth",top:document.body.scrollHeight})}),[]),v=Object(o.useCallback)((function(){d(!1),setTimeout((function(){if(n.length<h.length){var e=[].concat(Object(l.a)(n),[h[n.length]]);c(e),d(!0)}else O(),clearInterval(f)}),400)}),[n,O,f]),_=Object(o.useCallback)((function(){}),[]);p((function(){v(),x(setInterval((function(){O()}),2e3))}));var y=n.map((function(e,t){return Object(u.jsx)(N,{command:e,next:t===n.length-1?v:_},t)}));return Object(u.jsxs)("div",{className:"shell-container ".concat(S.a.container),children:[Object(u.jsx)(I,{}),y,i?null:Object(u.jsx)(g,{userName:m,cmd:"",retainCursor:!0})]})}),W=n(8),B=n.n(W),A=n(12),P=n.n(A),J=function(){return Object(u.jsx)("div",{className:"row justify-content-end mb-2 toolbar",children:Object(u.jsx)("div",{className:"col col-md-6 col-lg-4",children:Object(u.jsx)("div",{className:"row justify-content-end",children:b.map((function(e){var t=e.ficon,n=e.path,c=e.title;return Object(u.jsx)("div",{className:"col-1 ".concat(P.a.icon),children:Object(u.jsx)("a",{href:n,title:c,children:Object(u.jsx)("i",{className:"fa ".concat(t)})})},t+n)}))})})})},L="theme-default";var H=function(){var e,t=Object(o.useState)(null!==(e=localStorage.getItem("theme"))&&void 0!==e?e:L),n=Object(s.a)(t,2),c=n[0],a=n[1],r=Object(o.useMemo)((function(){return{"#222":"theme-default","#fff":"theme-light","#02203c":"theme-blue"}}),[]),i=Object(o.useMemo)((function(){return Object.keys(r)}),[r]);p((function(){document.body.classList.add(c)}));var l=Object(o.useCallback)((function(e){document.body.classList.replace(c,r[e]),a(r[e]),localStorage.setItem("theme",r[e])}),[r,c]),d=Object(u.jsx)("div",{className:B.a.themeSelector,children:i.map((function(e){return Object(u.jsx)("div",{className:"".concat(B.a.themeBlock," ").concat(r[e]===c?B.a.active:""),style:{backgroundColor:e},onClick:function(){return l(e)}},e)}))});return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(J,{}),Object(u.jsx)(D,{}),d]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root")),R()}],[[23,1,2]]]);
//# sourceMappingURL=main.f9b550fa.chunk.js.map