(this.webpackJsonpcodify=this.webpackJsonpcodify||[]).push([[0],{5550:function(e,a,t){e.exports=t(6118)},5555:function(e,a,t){},5556:function(e,a,t){},6118:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),l=t.n(o),c=(t(5555),t(28)),i=(t(5556),t(6147)),s=t(6157),u=t(205),m=t(94),d=t(206),g=t.n(d),f=t(15),b=t(6152),p=t(6153),E=t(19),v=t.n(E),h=t(62),C=t.n(h),O=t(6165),j=t(6150),k=t(96),y=t(6149),w=t(95),N=Object(i.a)((function(e){var a=e.spacing;return Object(O.a)({root:{display:"flex"},macOS:{backgroundColor:m.a[300],padding:a(.5)},windows10:{backgroundColor:"#fff",justifyContent:"flex-end"},linuxMint:{backgroundColor:"#d3d4cf",justifyContent:"flex-end",padding:a(.5)},dot:{borderRadius:"50%",margin:a(.25),height:a(1),width:a(1)},green:{backgroundColor:k.a[500]},yellow:{backgroundColor:y.a[800]},red:{backgroundColor:w.a[500]},square:{borderRadius:0}})})),x=function(e){var a=e.className,t=e.variant,n=void 0===t?"windows10":t,o=N();switch(n){case"macOS":return r.a.createElement("div",{className:v()(o.root,o.macOS,a)},r.a.createElement("div",{className:v()(o.dot,o.red)}),r.a.createElement("div",{className:v()(o.dot,o.yellow)}),r.a.createElement("div",{className:v()(o.dot,o.green)}));case"windows10":return r.a.createElement("div",{className:v()(o.root,o.windows10,a)},r.a.createElement(j.a,{size:"small",className:o.square},r.a.createElement(f.q,null)),r.a.createElement(j.a,{size:"small",className:o.square},r.a.createElement(f.p,null)),r.a.createElement(j.a,{size:"small",className:o.square},r.a.createElement(f.o,null)));case"linuxMint":return r.a.createElement("div",{className:v()(o.root,o.linuxMint,a)},r.a.createElement(j.a,{size:"small"},r.a.createElement(f.q,{fontSize:"small"})),r.a.createElement(j.a,{size:"small"},r.a.createElement(f.b,{fontSize:"small"})),r.a.createElement(j.a,{size:"small"},r.a.createElement(f.c,{fontSize:"small",style:{color:"#78b375"}})));default:return r.a.createElement("div",{className:v()(o.root,a)})}},S=Object(i.a)((function(e){var a=e.spacing;return{root:{display:"flex",flexDirection:"column",overflow:"hidden",width:700,height:320,backgroundColor:m.a[700],marginBottom:a(2)},content:{flex:1}}})),z=function(e){var a=e.language,t=e.lightMode,n=e.os,o=e.showLineNumbers,l=S();return r.a.createElement(b.a,{className:l.root,elevation:15},r.a.createElement(x,{variant:n}),r.a.createElement("div",{className:l.content},r.a.createElement(C.a,{height:"300px",width:"700px",language:a,theme:t?"light":"dark",value:'const fun = () => {\n  console.log("Hello World!")\n}',options:{selectOnLineNumbers:!1,lineNumbers:o?"on":"off",minimap:{enabled:!1}}})))},I=Object(i.a)((function(e){return{root:{padding:(0,e.spacing)(8)}}})),M=r.a.forwardRef((function(e,a){var t=e.backgroundColor,n=e.className,o=e.fontColor,l=e.language,c=e.lightMode,i=e.os,s=e.showLineNumbers,u=I();return r.a.createElement(b.a,{ref:a,className:v()(u.root,n),elevation:10,square:!0,style:{backgroundColor:t}},r.a.createElement(p.a,{variant:"h3",gutterBottom:!0,contentEditable:!0,spellCheck:!1,suppressContentEditableWarning:!0,style:{color:o}},"Edit this cool title"),r.a.createElement(z,{language:l,lightMode:c,os:i,showLineNumbers:s}))})),L=t(6),B=t(211),F=t(6164),q=t(6162),W=Object(L.a)((function(e){e.palette,e.spacing;return Object(O.a)({root:{},button:{}})}))((function(e){var a=e.children,t=e.classes,n=e.id,o=e.icon,l=e.tooltip,i=r.a.useState(null),s=Object(c.a)(i,2),u=s[0],m=s[1],d=Boolean(u),g=d?"picker-".concat(n,"-popover"):void 0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{title:l,placement:"right"},r.a.createElement(j.a,{"aria-describedby":g,className:t.button,onClick:function(e){m(e.currentTarget)},color:d?"primary":"default"},o)),r.a.createElement(q.a,{id:g,open:d,anchorEl:u,onClose:function(){m(null)},anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"}},a))})),D=Object(L.a)((function(e){e.palette,e.spacing;return Object(O.a)({root:{},button:{}})}))((function(e){var a=e.classes,t=e.color,n=e.onChange,o=e.id,l=e.icon,c=e.tooltip;return r.a.createElement(W,{id:o,classes:a,icon:l,tooltip:c},r.a.createElement(B.ChromePicker,{color:t,onChange:function(e){return n(e.hex)}}))})),P=function(e){var a=e.active,t=e.activeIcon,n=e.inactiveIcon,o=e.onChange,l=e.tooltip;return r.a.createElement(F.a,{title:l,placement:"right"},r.a.createElement(j.a,{onClick:function(){return o(!a)}},a?t:n))},R=t(213),T=t(6155),H=t(6166),_=t(6161),A=t(6167),J=Object(L.a)((function(e){var a=e.spacing;return Object(O.a)({formControl:{margin:a(1),minWidth:120}})}))((function(e){var a=e.classes,t=e.id,o=e.icon,l=e.language,i=e.onChange,s=e.tooltip,u=Object(n.useState)([]),m=Object(c.a)(u,2),d=m[0],g=m[1];Object(n.useEffect)((function(){h.monaco.init().then((function(e){g(e.languages.getLanguages().map((function(e){var a=e.id,t=e.aliases;return{id:a,alias:(null===t||void 0===t?void 0:t.length)?t[0]:a}})))})).catch((function(e){return console.error("An error occurred during initialization of Monaco: ",e)}))}),[]);var f=function(e){var a=e.target;i(a.value)};return r.a.createElement(W,{id:t,icon:o,tooltip:s},r.a.createElement(T.a,{className:a.formControl,variant:"outlined"},r.a.createElement(H.a,{shrink:!0,id:"language-select-label"},"Language"),r.a.createElement(_.a,{inputProps:{name:"language",id:"language-select-label"},onChange:function(e){return f(e)},value:l},d.map((function(e,a){var t=e.id,n=e.alias;return r.a.createElement(A.a,{key:t,value:t},n)})))))})),G=Object(L.a)((function(e){e.spacing;return Object(O.a)({root:{}})}))((function(e){var a=e.id,t=e.onChange;return r.a.createElement(W,{id:a,icon:r.a.createElement(f.m,null),tooltip:"Operating system"},r.a.createElement(b.a,null,r.a.createElement(j.a,{onClick:function(){return t("windows10")}},r.a.createElement(f.l,null)),r.a.createElement(j.a,{onClick:function(){return t("linuxMint")}},r.a.createElement(f.k,null)),r.a.createElement(j.a,{onClick:function(){return t("macOS")}},r.a.createElement(f.a,null))))})),$=Object(L.a)((function(e){var a=e.spacing;return Object(O.a)({root:{padding:a(0,2),backgroundColor:m.a[300],display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid ".concat(m.a[400])}})}))((function(e){var a=e.classes,t=e.className;return r.a.createElement("div",{className:v()(a.root,t)},r.a.createElement(p.a,{variant:"h6"},"Codify"),r.a.createElement(j.a,{href:"https://github.com/TeamWertarbyte/codify",target:"_blank"},r.a.createElement(f.h,null)))})),K=t(6156),Q=Object(L.a)((function(e){var a=e.spacing;return Object(O.a)({root:{padding:a(1,2),backgroundColor:m.a[50],display:"flex",alignItems:"center",justifyContent:"flex-end",borderTop:"1px solid ".concat(m.a[400])},divider:{margin:a(0,1),backgroundColor:m.a[400]}})}))((function(e){var a=e.classes,t=e.className;return r.a.createElement("div",{className:v()(a.root,t)},r.a.createElement(p.a,{variant:"caption"},r.a.createElement("a",{href:"https://wertarbyte.com/impressum",target:"_blank",rel:"noopener noreferrer"},"Imprint")),r.a.createElement(K.a,{className:a.divider,orientation:"vertical"}),r.a.createElement(p.a,{variant:"caption"},"Copyright \xa9 2020"," ",r.a.createElement("a",{href:"https://wertarbyte.com/",target:"_blank",rel:"noopener noreferrer"},"Wertarbyte GmbH")))})),U=Object(i.a)((function(e){var a=e.spacing;return{root:{display:"flex",flexDirection:"column",height:"100%"},content:{display:"flex",flex:1},toolbar:{display:"flex",flexDirection:"column",backgroundColor:m.a[300],padding:a(1)},captureStageContainer:{flex:1,display:"grid",placeItems:"center",justifyItems:"center",backgroundColor:m.a[200],borderLeft:"1px solid ".concat(m.a[400])},fab:{position:"absolute",bottom:a(6),right:a(2)},options:{padding:a(1)}}}));var V=function(){var e=U(),a=Object(n.useRef)(),t=Object(n.useState)("#FFFFFF"),o=Object(c.a)(t,2),l=o[0],i=o[1],m=Object(n.useState)("#000000"),d=Object(c.a)(m,2),b=d[0],p=d[1],E=Object(n.useState)(!0),v=Object(c.a)(E,2),h=v[0],C=v[1],O=Object(n.useState)(!0),j=Object(c.a)(O,2),k=j[0],y=j[1],w=Object(n.useState)("windows10"),N=Object(c.a)(w,2),x=N[0],S=N[1],z=Object(n.useState)("javascript"),I=Object(c.a)(z,2),L=I[0],B=I[1];return r.a.createElement("div",{className:e.root},r.a.createElement($,null),r.a.createElement("div",{className:e.content},r.a.createElement("div",{className:e.toolbar},r.a.createElement(D,{id:"background-color",tooltip:"Background Color",color:l,onChange:i,icon:r.a.createElement(f.f,null)}),r.a.createElement(D,{id:"font-color",tooltip:"Text Color",color:b,onChange:p,icon:r.a.createElement(f.g,null)}),r.a.createElement(J,{id:"code-language",tooltip:"Code language",language:L,onChange:B,icon:r.a.createElement(f.d,null)}),r.a.createElement(P,{active:h,tooltip:"Line Numbers",onChange:C,activeIcon:r.a.createElement(R.FormatListNumbers,null),inactiveIcon:r.a.createElement(f.n,null)}),r.a.createElement(P,{active:k,tooltip:k?"Dark Mode":"Light Mode",onChange:y,activeIcon:r.a.createElement(f.j,null),inactiveIcon:r.a.createElement(f.i,null)}),r.a.createElement(G,{id:"operating-system",onChange:S})),r.a.createElement("div",{className:e.captureStageContainer},r.a.createElement(M,{ref:a,backgroundColor:l,fontColor:b,language:L,lightMode:k,os:x,showLineNumbers:h}))),r.a.createElement(Q,null),r.a.createElement(s.a,{className:e.fab,onClick:function(){g.a.toBlob(a.current).then((function(e){Object(u.saveAs)(e,"codify-".concat(Date.now(),".png"))}))},color:"primary"},r.a.createElement(f.e,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=t(6158),Y=t(6159),Z=t(6160),ee=t(214);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y.a,{theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light";return Object(X.a)({palette:{primary:{main:"#005091"},secondary:{main:"#348a31"},error:{main:"#f44336"},type:e}})}()},r.a.createElement(Z.a,null),r.a.createElement(ee.SnackbarProvider,{SnackbarProps:{autoHideDuration:4e3}},r.a.createElement(V,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[5550,1,2]]]);
//# sourceMappingURL=main.3d952013.chunk.js.map