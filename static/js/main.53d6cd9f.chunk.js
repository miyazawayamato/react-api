(this.webpackJsonpapi=this.webpackJsonpapi||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),s=a(18),i=a.n(s),r=(a(23),a(24),a(4)),j=a.n(r),b=a(6),l=a(5),d=a(7),o=a.n(d),O=a(0),u=function(){var e=Object(O.jsx)("div",{}),t=Object(c.useState)(e),a=Object(l.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)([]),r=Object(l.a)(i,2),d=r[0],u=r[1];Object(c.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://dokusika.deca.jp/api/qualis");case 2:t=e.sent,u(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=function(){var t=Object(b.a)(j.a.mark((function t(a){var c,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://dokusika.deca.jp/api/quali/"+a);case 2:c=t.sent,n=c.data.data,e=Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"\u8cc7\u683c\u540d:"}),Object(O.jsx)("span",{children:n.certificate})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"\u5408\u683c\u7387:"}),Object(O.jsx)("span",{children:n.passrate})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"\u8a66\u9a13\u65e5\u7a0b:"}),Object(O.jsx)("span",{children:n.time})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"\u8cc7\u683c\u533a\u5206:"}),Object(O.jsx)("span",{children:n.class})]})]}),s(e);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:n}),d.map((function(e){return Object(O.jsx)("button",{onClick:function(){return m(e.id)},className:"certifi",children:e.certificate})}))]})},m=a(1),h=function(e){var t,a=Object(c.useState)(!1),n=Object(l.a)(a,2),s=n[0],i=n[1],r=Object(c.useState)(!0),d=Object(l.a)(r,2),u=d[0],h=d[1],p=Object(c.useState)({name:"\u5185\u5bb9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",email:"\u5185\u5bb9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",body:"\u5185\u5bb9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}),x=Object(l.a)(p,2),f=x[0],v=x[1],y=Object(c.useState)({name:"",email:"",body:""}),g=Object(l.a)(y,2),k=g[0],N=g[1],S=/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,w=function(e){var t=e.target.name,a=e.target.value;switch(t){case"name":N(Object(m.a)(Object(m.a)({},k),{},{name:a})),a.match(/\S/g)&&a?v(Object(m.a)(Object(m.a)({},f),{},{name:""})):v(Object(m.a)(Object(m.a)({},f),{},{name:"\u5185\u5bb9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}));break;case"email":N(Object(m.a)(Object(m.a)({},k),{},{email:a})),a.match(/\S/g)&&a?a.match(S)?v(Object(m.a)(Object(m.a)({},f),{},{email:""})):v(Object(m.a)(Object(m.a)({},f),{},{email:"\u6b63\u3057\u3044\u5f62\u5f0f\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"})):v(Object(m.a)(Object(m.a)({},f),{},{email:"\u5185\u5bb9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}));break;case"body":N(Object(m.a)(Object(m.a)({},k),{},{body:a})),a.match(/\S/g)&&a?v(Object(m.a)(Object(m.a)({},f),{},{body:""})):v(Object(m.a)(Object(m.a)({},f),{},{body:"\u5185\u5bb9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}))}""===f.name&&""===f.email&&""===f.body?h(!1):h(!0)},C=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:k.name,email:k.email,body:k.body},console.log(t),e.next=4,o.a.post("https://dokusika.deca.jp/api/contact",t);case 4:a=e.sent,console.log(a),i(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t=s?Object(O.jsx)("div",{className:"done",children:"\u9001\u4fe1\u5b8c\u4e86"}):Object(O.jsx)("div",{className:"contact",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("p",{className:"title",children:"\u304a\u540d\u524d"}),Object(O.jsx)("input",{type:"text",name:"name",value:k.name,onChange:w,className:"input"}),Object(O.jsx)("p",{className:"error",children:f.name}),Object(O.jsx)("p",{className:"title",children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(O.jsx)("input",{type:"email",name:"email",value:k.email,onChange:w,className:"input"}),Object(O.jsx)("p",{className:"error",children:f.email}),Object(O.jsx)("p",{className:"title",children:"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9"}),Object(O.jsx)("textarea",{name:"body",value:k.body,onChange:w}),Object(O.jsx)("p",{className:"error",children:f.body}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{className:"submit",onClick:C,type:"button",disabled:u,children:"\u9001\u4fe1"})})]})}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"contact-form",children:t})})};var p=function(){return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)("h2",{children:"\u8cc7\u683c\u60c5\u5831\u53d6\u5f97"}),Object(O.jsx)(u,{}),Object(O.jsx)("h3",{children:"\u304a\u554f\u3044\u5408\u308f\u305b"}),Object(O.jsx)("p",{children:"\u203b\u5b9f\u969b\u306b\u5165\u529b\u3057\u305f\u30a2\u30c9\u30ec\u30b9\u306b\u78ba\u8a8d\u30e1\u30fc\u30eb\u304c\u5c4a\u304d\u307e\u3059\u3002"}),Object(O.jsx)(h,{})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root")),x()}},[[45,1,2]]]);
//# sourceMappingURL=main.53d6cd9f.chunk.js.map