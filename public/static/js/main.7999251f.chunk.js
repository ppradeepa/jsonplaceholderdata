(this.webpackJsonpjsonpostclient=this.webpackJsonpjsonpostclient||[]).push([[0],{105:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(11),r=n.n(i),o=(n(79),n(80),n(146)),s=n(148),l=n(106),d=n(143),j=n(21),O=n(6),b=Object(d.a)((function(t){return{root:{display:"flex"}}})),u=function(){var t=b();Object(j.a)();return Object(O.jsxs)("div",{className:t.root,children:[Object(O.jsx)(o.a,{}),Object(O.jsx)(s.a,{children:Object(O.jsx)(l.a,{variant:"h6",noWrap:!0,children:"JSONPlaceHOlder"})})]})},p=n(38),x=n(12),h=n(28),g=n(160),S={GET_POST:"GET_POST",EDIT_POST:"EDIT_POST",REMOVE_POST:"REMOVE_POST",SEARCH_POST:"SET_POST_COUNT",SET_POST_COUNT:"SET_POST_COUNT",GET_POST_COUNT:"GET_POST_COUNT",SUCCESS_CALL_API:"SUCCESS_CALL_API",ERROR_CALL_API:"ERROR_CALL_API"},T={loading:!1,postDetails:"",error:null};function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0,n=e.data;switch(e.type){case S.SUCCESS_CALL_API:return Object(x.a)(Object(x.a)({},t),{},{loading:!0});case S.GET_POST:return Object(x.a)(Object(x.a)({},t),{},{loading:!1,postDetails:n});case S.EDIT_POST:return Object(x.a)(Object(x.a)({},t),{},{postDetails:n});case S.REMOVE_POST:return Object(x.a)(Object(x.a)({},t),{},{loading:!1,postDetails:t.postDetails.filter((function(t){return t.id!==n}))});case S.UPDATE_POST:var a=t.postDetails.map((function(t){return t.id===n.id?n:t}));return Object(x.a)(Object(x.a)({},t),{},{postDetails:a});case S.SEARCH_POST:return Object(x.a)(Object(x.a)({},t),{},{postDetails:t.postDetails.filter((function(t){return t.title.includes(n)}))});case S.ERROR_CALL_API:return Object(x.a)(Object(x.a)({},t),{},{loading:!1,error:e.error})}}var _=n(65),m=n.n(_),v=Object(a.createContext)(T),E=function(t){var e=Object(a.useReducer)(f,T),n=Object(h.a)(e,2),c=n[0],i=n[1];c.postDetails,c.loading,c.error;return Object(a.useEffect)((function(){i({type:S.SUCCESS_CALL_API}),m.a.get("/post").then((function(t){200!=t.status||i({type:S.GET_POST,data:t.data})})).catch((function(t){i({type:S.ERROR_CALL_API,error:t})}))}),[]),Object(O.jsx)(v.Provider,{value:{post:c.postDetails,getpost:function(t){i({type:S.GET_POST,data:t})},searchpost:function(t){i({type:S.SEARCH_POST,data:t})},updatepost:function(t){i({type:S.UPDATE_POST,data:t})},removepost:function(t){i({type:S.REMOVE_POST,data:t})},editpost:function(t){i({type:S.EDIT_POST,data:t})}},children:t.children})},C=n(149),P=n(107),y=n(159),A=Object(d.a)((function(t){return{root:{flexGrow:1},paper:{padding:t.spacing(2),textAlign:"center",color:t.palette.text.secondary}}})),R=function(){var t=Object(a.useContext)(v),e=t.post,n=t.searchpost,c=A();return Object(O.jsx)("div",{className:c.root,children:Object(O.jsx)(C.a,{container:!0,spacing:3,children:Object(O.jsx)(C.a,{item:!0,xs:12,children:Object(O.jsx)(P.a,{className:c.paper,children:e.length>0?Object(O.jsx)(g.a,{onInputChange:function(t,e){n(e)},options:e.map((function(t){return t.title})),renderInput:function(t){return Object(O.jsx)(y.a,Object(x.a)(Object(x.a)({},t),{},{label:"Search",id:"limoText",margin:"normal",variant:"outlined",fullWidth:!0,InputProps:Object(x.a)(Object(x.a)({},t.InputProps),{},{type:"search"})}))}}):""})})})})},D=n(151),I=n(152),L=n(153),N=n(154),U=n(155),G=n(162),w=n(156),B=n(157),k=n(158),W=Object(d.a)((function(t){return{root:{flexGrow:1},paper:{padding:t.spacing(2),textAlign:"center"},title:{padding:t.spacing(2),marginBottom:16,fontSize:14},card:{maxWidth:300,margin:"auto",transition:"0.3s",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)"}},media:{paddingTop:"56.25%"},content:{textAlign:"left",padding:t.spacing(3)},divider:{margin:"".concat(t.spacing(3),"px 0")},heading:{fontWeight:"bold"},subheading:{lineHeight:1.8}}})),F=function(){var t=W(),e=Object(a.useContext)(v),n=e.post,c=(e.searchpost,e.editpost,e.removepost),i=e.updatepost,r=(e.getpost,Object(a.useState)([])),o=Object(h.a)(r,2),s=(o[0],o[1]),d=Object(a.useState)(!1),j=Object(h.a)(d,2),b=j[0],u=j[1],g=Object(a.useState)(!1),S=Object(h.a)(g,2),T=(S[0],S[1]),f=Object(a.useState)({id:null,title:"",post:""}),_=Object(h.a)(f,2),m=_[0],E=_[1],P=function(t){var e=t.target,n=e.name,a=e.value;E(Object(x.a)(Object(x.a)({},m),{},Object(p.a)({},n,a)))};return Object(O.jsxs)("div",{className:t.root,children:[Object(O.jsx)(C.a,{container:!0,spacing:3,children:Object(O.jsxs)(C.a,{item:!0,xs:12,children:[" ",Object(O.jsx)(R,{})]})}),Object(O.jsxs)(C.a,{container:!0,spacing:3,children:[n.length>0?n.map((function(e){return Object(O.jsxs)(C.a,{item:!0,xs:3,children:[" ",Object(O.jsx)(D.a,{className:t.card,children:Object(O.jsxs)(I.a,{className:t.content,children:[Object(O.jsxs)(I.a,{children:[Object(O.jsx)(l.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Title"}),Object(O.jsx)(l.a,{color:"secondary",children:e.title}),Object(O.jsx)(L.a,{className:t.divider}),Object(O.jsx)(l.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Body"}),Object(O.jsx)(l.a,{variant:"body2",color:"primary",children:e.body})]}),Object(O.jsxs)(N.a,{children:[Object(O.jsx)(U.a,{variant:"contained",color:"primary",onClick:function(){return function(t){E(t),u(!0),T(!0)}(e)},children:"Edit"}),Object(O.jsx)(U.a,{variant:"contained",color:"secondary",onClick:function(){return t=e.id,s(t),void c(t);var t},children:"DELETE"})]})]})},e.id)]},e.id)})):"",b?Object(O.jsxs)(G.a,{open:b,children:[Object(O.jsx)(w.a,{children:"EditForm"}),Object(O.jsx)(B.a,{children:Object(O.jsxs)(C.a,{container:!0,justify:"center",alignItems:"center",spacing:2,children:[Object(O.jsx)(C.a,{item:!0,xs:12,children:Object(O.jsx)(y.a,{id:"outlined-basic",label:"Title",type:"text",name:"title",autoComplete:"title",variant:"outlined",onChange:P,value:m.title,fullWidth:!0})}),Object(O.jsx)(C.a,{item:!0,xs:12,children:Object(O.jsx)(y.a,{id:"outlined-basic",label:"Body",type:"text",name:"body",autoComplete:"title",variant:"outlined",onChange:P,value:m.body,fullWidth:!0})})]})}),Object(O.jsxs)(k.a,{children:[Object(O.jsx)(U.a,{color:"secondary",variant:"contained",onClick:function(){return u(!1)},children:"Close"}),Object(O.jsx)(U.a,{variant:"contained",color:"primary",onClick:function(){i(m),u(!1)},children:"Update"})]})]}):""]})]})};var H=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(E,{children:[Object(O.jsx)(u,{}),Object(O.jsx)(F,{})]})})},M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,164)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(H,{})}),document.getElementById("root")),M()},79:function(t,e,n){},80:function(t,e,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.7999251f.chunk.js.map