"use strict";(self.webpackChunknews_proj=self.webpackChunknews_proj||[]).push([[981],{1757:function(t,n,e){e.d(n,{Z:function(){return u}});var r,i=e(1614),a=e(890),s=(e(2791),e(168)),c=e(7691).ZP.section(r||(r=(0,s.Z)(["\n  padding: 100px 0;\n"]))),o=e(184),u=function(t){var n=t.children,e=t.title;return(0,o.jsx)(c,{children:(0,o.jsxs)(i.Z,{children:[e&&(0,o.jsx)(a.Z,{variant:"h2",sx:{marginBottom:"20px",textAlign:"center"},children:e}),n]})})}},1541:function(t,n,e){e.r(n),e.d(n,{default:function(){return b}});var r=e(4165),i=e(3433),a=e(5861),s=e(9439),c=e(6151),o=e(2791),u=e(4554),d=e(1889),p=e(7621),l=e(9504),f=e(890),x=e(184),h=function(t){var n=t.title,e=t.description;return(0,x.jsx)(p.Z,{sx:{maxWidth:600,minHeight:"300px"},children:(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(f.Z,{variant:"h2",sx:{fontSize:24,fontWeight:"bold",marginBottom:function(t){return t.spacing(2)},textTransform:"uppercase"},children:n}),(0,x.jsx)(f.Z,{sx:{fontSize:18},variant:"body1",children:e})]})})},Z=function(t){var n=t.data;return(0,x.jsx)(u.Z,{sx:{display:"grid",gap:"12px",justifyContent:"center",gridTemplateColumns:{md:"1fr 1fr",lg:"1fr 1fr 1fr"},minHeight:"400px"},children:n.map((function(t){return(0,x.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,x.jsx)(h,{title:t.title,description:t.body})},t.title)}))})},m=e(1757),v=e(1912).Z.create({baseURL:"https://jsonplaceholder.typicode.com"}),g=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var n,e=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:1,t.next=3,v.get("/posts",{params:{_page:n,limit:10}});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=(0,o.useState)([]),n=(0,s.Z)(t,2),e=n[0],u=n[1],d=(0,o.useState)(!1),p=(0,s.Z)(d,2),l=p[0],f=p[1],h=(0,o.useState)(!0),v=(0,s.Z)(h,2),j=v[0],b=v[1],y=(0,o.useState)(1),k=(0,s.Z)(y,2),w=k[0],S=k[1];(0,o.useEffect)((function(){C()}),[w]);var C=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f(!0),t.next=4,g(w);case 4:n=t.sent,u([].concat((0,i.Z)(e),(0,i.Z)(n.data))),f(!1),0===n.data.length&&b(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0),f(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return(0,x.jsxs)(m.Z,{title:"Watch your fresh news",children:[(0,x.jsx)(Z,{data:e}),j&&(0,x.jsx)(c.Z,{variant:"contained",color:"primary",disabled:l,onClick:function(){S(w+1)},sx:{display:"block",marginLeft:"auto",marginTop:"20px"},children:l?"Loading...":"Load More"})]})},b=j}}]);
//# sourceMappingURL=981.55e00f26.chunk.js.map