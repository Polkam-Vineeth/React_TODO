(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(8),i=n.n(c),l=(n(14),n(7),n(9)),d=n(6),o=n(3),r=n.p+"static/media/todoimg.385c3bfb.png",j=n(0),u=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(localStorage.getItem("lists")?JSON.parse(localStorage.getItem("lists")):[]),i=Object(o.a)(c,2),u=i[0],b=i[1],f=Object(a.useState)(!0),m=Object(o.a)(f,2),O=m[0],h=m[1],x=Object(a.useState)(null),g=Object(o.a)(x,2),y=g[0],v=g[1],p=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()],S=function(){if(n)if(n&&!O)b(u.map((function(e){return e.id===y?Object(d.a)(Object(d.a)({},e),{},{name:n}):e}))),h(!0),s(""),v(null);else{var e={id:(new Date).getTime().toString(),name:n};b([].concat(Object(l.a)(u),[e])),s("")}else alert("Hey there!! Please add your Valuable Tasks to the list. \ud83e\udd17")};return Object(a.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(u))}),[u]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main-div",children:Object(j.jsxs)("div",{className:"child-div",children:[Object(j.jsxs)("h1",{style:{fontSize:"3.5em",fontFamily:"Satisfy"},children:["Heyah , It's ",p,"."]}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{src:r,alt:"todologo",style:{width:"250px",height:"250px"}}),Object(j.jsx)("h2",{style:{fontFamily:"Roboto"},children:"Add Tasks to your TODO list here! \ud83c\udfaf"})]}),Object(j.jsxs)("div",{className:"addItems",children:[Object(j.jsx)("input",{type:"text",placeholder:"\u270d Add Tasks...",value:n,onChange:function(e){return s(e.target.value)}}),O?Object(j.jsx)("i",{className:"fa fa-plus add-btn",title:"Add Item",onClick:S}):Object(j.jsx)("i",{className:"fa fa-edit add-btn",title:"Update Item",onClick:S})]}),Object(j.jsx)("div",{className:"showItems",children:u.map((function(e){return Object(j.jsxs)("div",{className:"eachItem",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsxs)("div",{className:"todo-btn",children:[Object(j.jsx)("i",{className:"fa fa-edit add-btn",title:"Edit Item",onClick:function(){return function(e){var t=u.find((function(t){return t.id===e}));console.log(t),h(!1),s(t.name),v(e)}(e.id)}}),Object(j.jsx)("i",{className:"fa fa-trash add-btn",title:"Delete Item",onClick:function(){return function(e){var t=u.filter((function(t){return e!==t.id}));b(t)}(e.id)}})]})]},e.id)}))}),Object(j.jsx)("div",{className:"showItems",children:Object(j.jsxs)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){b([])},children:[Object(j.jsx)("span",{children:" CHECK LIST "})," "]})})]})})})};var b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),f()},7:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.6d346964.chunk.js.map