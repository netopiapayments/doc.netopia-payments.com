"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6036],{932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(4848),s=t(8453);const a={sidebar_position:1},r="Introduction",o={id:"payment-api/intro",title:"Introduction",description:"The Payments API  was designed and implemented by NETOPIA Payments development team to be used in third party applications to cover the payment process.",source:"@site/docs/payment-api/intro.md",sourceDirName:"payment-api",slug:"/payment-api/intro",permalink:"/docs/payment-api/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Payment API",permalink:"/docs/category/payment-api"},next:{title:"Starting a payment",permalink:"/docs/payment-api/start/start-strc"}},c={},d=[{value:"Why NETOPIA Payments API",id:"why-netopia-payments-api",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"NETOPIA Payments administration platform",id:"netopia-payments-administration-platform",level:3},{value:"API KEY",id:"api-key",level:3},{value:"API Diagram",id:"api-diagram",level:2},{value:"Payments OpenAPI Specification",id:"payments-openapi-specification",level:2},{value:"API Reference",id:"api-reference",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Payments API"}),"  was designed and implemented by NETOPIA Payments development team to be used in third party applications to cover the payment process."]}),"\n",(0,i.jsx)(n.h2,{id:"why-netopia-payments-api",children:"Why NETOPIA Payments API"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fast and Secure"}),"\n",(0,i.jsx)(n.li,{children:"Full support for 3DSecure authentication"}),"\n",(0,i.jsx)(n.li,{children:"Easy to integrate with any third party application"}),"\n",(0,i.jsx)(n.li,{children:"Stellar support"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["You should have a merchant account with NETOPIA. If you dont yet have one, start by ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://netopia-payments.com/register/",children:"creating it"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"netopia-payments-administration-platform",children:"NETOPIA Payments administration platform"}),"\n",(0,i.jsxs)(n.p,{children:["Login with your username/password to ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://admin.netopia-payments.com/",children:"administration console"})}),". From here you'll be able to configure your account, monitor incoming transactions, add users, etc."]}),"\n",(0,i.jsxs)(n.p,{children:["NETOPIA gives you the possibility to test the payment process during or after the implemention of your application too by providing a sandbox environment which mirrors the features of production. It can be accessed directly from your production account or by logging in to ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://sandbox.netopia-payments.com",children:"sandbox"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"api-key",children:"API KEY"}),"\n",(0,i.jsxs)(n.p,{children:["In order to communicate with the payment API, you need a specific ",(0,i.jsx)(n.strong,{children:"API KEY"})]}),"\n",(0,i.jsxs)(n.p,{children:["From NETOPIA ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://admin.netopia-payments.com/",children:"Payments admin"})})," -> Profile -> Security, you can generate an ",(0,i.jsx)(n.strong,{children:"API KEY"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example API Key",src:t(652).A+"",width:"1235",height:"633"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You shoyld always pass the API KEY in the ",(0,i.jsx)(n.strong,{children:"HTTP Headers"})," of your request"]}),"\n",(0,i.jsx)(n.li,{children:"You can regenerate/remove/add a new API Key at any time"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Once you have an ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"ACTIVE ACCOUNT"})})," and an ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"API KEY"})}),", you are almost ready to ",(0,i.jsx)(n.a,{href:"/docs/payment-api/start/start-strc",children:"start"})," actual payments via ",(0,i.jsx)(n.strong,{children:"NETOPIA Payments' API"})]}),"\n",(0,i.jsx)(n.h2,{id:"api-diagram",children:"API Diagram"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Api diagram",src:t(885).A+"",width:"128",height:"128"})}),"\n",(0,i.jsx)(n.h2,{id:"payments-openapi-specification",children:"Payments OpenAPI Specification"}),"\n",(0,i.jsxs)(n.p,{children:["Following the link below you can find the ",(0,i.jsx)(n.strong,{children:"openapi 3.0 specification"})," to have bigger picture on NETOPIA Payments' API"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://secure.sandbox.netopia-payments.com/spec\n"})}),"\n",(0,i.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["NETOPIA Payments API ",(0,i.jsx)(n.strong,{children:"Version 1"})]}),"\n",(0,i.jsxs)(n.li,{children:["Release at ",(0,i.jsx)(n.strong,{children:"2021"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},885:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMTAiIGZpbGw9IiMwMDU4QTQiLz4KPHBhdGggZD0iTTcxLjY4IDMyLjQxMTJMNTYgMjBINDZWMTA4LjY3NUg1Ni43MlYzMy4wNjQ0TDcxLjY4IDQ0LjMzMjVWMTA4LjY3NUg4MlYyMEg3MS42OFYzMi40MTEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},652:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/apiKey-8598999881eef0e51b257b941eb32380.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);