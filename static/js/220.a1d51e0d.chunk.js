"use strict";(self.webpackChunknews_proj=self.webpackChunknews_proj||[]).push([[220],{1889:function(n,r,t){t.d(r,{ZP:function(){return B}});var a=t(3433),o=t(4942),e=t(3366),i=t(7462),c=t(2791),p=t(8182),u=t(1184),s=t(8519),l=t(4419),g=t(6934),m=t(1402),f=t(3967);var v=c.createContext(),d=t(5878),h=t(1217);function w(n){return(0,h.Z)("MuiGrid",n)}var b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],x=(0,d.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,a.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,a.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,a.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,a.Z)(b.map((function(n){return"grid-xs-".concat(n)}))),(0,a.Z)(b.map((function(n){return"grid-sm-".concat(n)}))),(0,a.Z)(b.map((function(n){return"grid-md-".concat(n)}))),(0,a.Z)(b.map((function(n){return"grid-lg-".concat(n)}))),(0,a.Z)(b.map((function(n){return"grid-xl-".concat(n)}))))),Z=t(184),y=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function k(n){var r=n.breakpoints,t=n.values,a="";Object.keys(t).forEach((function(n){""===a&&0!==t[n]&&(a=n)}));var o=Object.keys(r).sort((function(n,t){return r[n]-r[t]}));return o.slice(0,o.indexOf(a))}var W=(0,g.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState,o=t.container,e=t.direction,i=t.item,c=t.spacing,p=t.wrap,u=t.zeroMinWidth,s=t.breakpoints,l=[];o&&(l=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t["spacing-xs-".concat(String(n))]];var a=[];return r.forEach((function(r){var o=n[r];Number(o)>0&&a.push(t["spacing-".concat(r,"-").concat(String(o))])})),a}(c,s,r));var g=[];return s.forEach((function(n){var a=t[n];a&&g.push(r["grid-".concat(n,"-").concat(String(a))])})),[r.root,o&&r.container,i&&r.item,u&&r.zeroMinWidth].concat((0,a.Z)(l),["row"!==e&&r["direction-xs-".concat(String(e))],"wrap"!==p&&r["wrap-xs-".concat(String(p))]],g)}})((function(n){var r=n.ownerState;return(0,i.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(n){var r=n.theme,t=n.ownerState,a=(0,u.P$)({values:t.direction,breakpoints:r.breakpoints.values});return(0,u.k9)({theme:r},a,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(x.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,t=n.ownerState,a=t.container,e=t.rowSpacing,i={};if(a&&0!==e){var c,p=(0,u.P$)({values:e,breakpoints:r.breakpoints.values});"object"===typeof p&&(c=k({breakpoints:r.breakpoints.values,values:p})),i=(0,u.k9)({theme:r},p,(function(n,t){var a,e=r.spacing(n);return"0px"!==e?(0,o.Z)({marginTop:"-".concat(S(e))},"& > .".concat(x.item),{paddingTop:S(e)}):null!=(a=c)&&a.includes(t)?{}:(0,o.Z)({marginTop:0},"& > .".concat(x.item),{paddingTop:0})}))}return i}),(function(n){var r=n.theme,t=n.ownerState,a=t.container,e=t.columnSpacing,i={};if(a&&0!==e){var c,p=(0,u.P$)({values:e,breakpoints:r.breakpoints.values});"object"===typeof p&&(c=k({breakpoints:r.breakpoints.values,values:p})),i=(0,u.k9)({theme:r},p,(function(n,t){var a,e=r.spacing(n);return"0px"!==e?(0,o.Z)({width:"calc(100% + ".concat(S(e),")"),marginLeft:"-".concat(S(e))},"& > .".concat(x.item),{paddingLeft:S(e)}):null!=(a=c)&&a.includes(t)?{}:(0,o.Z)({width:"100%",marginLeft:0},"& > .".concat(x.item),{paddingLeft:0})}))}return i}),(function(n){var r,t=n.theme,a=n.ownerState;return t.breakpoints.keys.reduce((function(n,o){var e={};if(a[o]&&(r=a[o]),!r)return n;if(!0===r)e={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)e={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,u.P$)({values:a.columns,breakpoints:t.breakpoints.values}),p="object"===typeof c?c[o]:c;if(void 0===p||null===p)return n;var s="".concat(Math.round(r/p*1e8)/1e6,"%"),l={};if(a.container&&a.item&&0!==a.columnSpacing){var g=t.spacing(a.columnSpacing);if("0px"!==g){var m="calc(".concat(s," + ").concat(S(g),")");l={flexBasis:m,maxWidth:m}}}e=(0,i.Z)({flexBasis:s,flexGrow:0,maxWidth:s},l)}return 0===t.breakpoints.values[o]?Object.assign(n,e):n[t.breakpoints.up(o)]=e,n}),{})}));var M=function(n){var r=n.classes,t=n.container,o=n.direction,e=n.item,i=n.spacing,c=n.wrap,p=n.zeroMinWidth,u=n.breakpoints,s=[];t&&(s=function(n,r){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var t=[];return r.forEach((function(r){var a=n[r];if(Number(a)>0){var o="spacing-".concat(r,"-").concat(String(a));t.push(o)}})),t}(i,u));var g=[];u.forEach((function(r){var t=n[r];t&&g.push("grid-".concat(r,"-").concat(String(t)))}));var m={root:["root",t&&"container",e&&"item",p&&"zeroMinWidth"].concat((0,a.Z)(s),["row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==c&&"wrap-xs-".concat(String(c))],g)};return(0,l.Z)(m,w,r)},N=c.forwardRef((function(n,r){var t=(0,m.Z)({props:n,name:"MuiGrid"}),a=(0,f.Z)().breakpoints,o=(0,s.Z)(t),u=o.className,l=o.columns,g=o.columnSpacing,d=o.component,h=void 0===d?"div":d,w=o.container,b=void 0!==w&&w,x=o.direction,S=void 0===x?"row":x,k=o.item,N=void 0!==k&&k,B=o.rowSpacing,j=o.spacing,z=void 0===j?0:j,P=o.wrap,T=void 0===P?"wrap":P,G=o.zeroMinWidth,R=void 0!==G&&G,E=(0,e.Z)(o,y),O=B||z,C=g||z,L=c.useContext(v),$=b?l||12:L,_={},A=(0,i.Z)({},E);a.keys.forEach((function(n){null!=E[n]&&(_[n]=E[n],delete A[n])}));var D=(0,i.Z)({},o,{columns:$,container:b,direction:S,item:N,rowSpacing:O,columnSpacing:C,wrap:T,zeroMinWidth:R,spacing:z},_,{breakpoints:a.keys}),F=M(D);return(0,Z.jsx)(v.Provider,{value:$,children:(0,Z.jsx)(W,(0,i.Z)({ownerState:D,className:(0,p.Z)(F.root,u),as:h,ref:r},A))})})),B=N},890:function(n,r,t){t.d(r,{Z:function(){return x}});var a=t(3366),o=t(7462),e=t(2791),i=t(8182),c=t(8519),p=t(4419),u=t(6934),s=t(1402),l=t(4036),g=t(5878),m=t(1217);function f(n){return(0,m.Z)("MuiTypography",n)}(0,g.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=t(184),d=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],h=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState;return[r.root,t.variant&&r[t.variant],"inherit"!==t.align&&r["align".concat((0,l.Z)(t.align))],t.noWrap&&r.noWrap,t.gutterBottom&&r.gutterBottom,t.paragraph&&r.paragraph]}})((function(n){var r=n.theme,t=n.ownerState;return(0,o.Z)({margin:0},t.variant&&r.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),w={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=e.forwardRef((function(n,r){var t=(0,s.Z)({props:n,name:"MuiTypography"}),e=function(n){return b[n]||n}(t.color),u=(0,c.Z)((0,o.Z)({},t,{color:e})),g=u.align,m=void 0===g?"inherit":g,x=u.className,Z=u.component,y=u.gutterBottom,S=void 0!==y&&y,k=u.noWrap,W=void 0!==k&&k,M=u.paragraph,N=void 0!==M&&M,B=u.variant,j=void 0===B?"body1":B,z=u.variantMapping,P=void 0===z?w:z,T=(0,a.Z)(u,d),G=(0,o.Z)({},u,{align:m,color:e,className:x,component:Z,gutterBottom:S,noWrap:W,paragraph:N,variant:j,variantMapping:P}),R=Z||(N?"p":P[j]||w[j])||"span",E=function(n){var r=n.align,t=n.gutterBottom,a=n.noWrap,o=n.paragraph,e=n.variant,i=n.classes,c={root:["root",e,"inherit"!==n.align&&"align".concat((0,l.Z)(r)),t&&"gutterBottom",a&&"noWrap",o&&"paragraph"]};return(0,p.Z)(c,f,i)}(G);return(0,v.jsx)(h,(0,o.Z)({as:R,ref:r,ownerState:G,className:(0,i.Z)(E.root,x)},T))}))}}]);
//# sourceMappingURL=220.a1d51e0d.chunk.js.map