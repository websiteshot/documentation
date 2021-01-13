(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=b(n),u=r,m=l["".concat(c,".").concat(u)]||l[u]||d[u]||o;return n?a.a.createElement(m,s(s({ref:t},i),{},{components:n})):a.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(131)),c={id:"get-screenshots",title:"Get Screenshots"},s={unversionedId:"api/screenshots/get-screenshots",id:"api/screenshots/get-screenshots",isDocsHomePage:!1,title:"Get Screenshots",description:"GET /api/projects/jobId",source:"@site/docs/api/screenshots/get-screenshots.md",slug:"/api/screenshots/get-screenshots",permalink:"/docs/api/screenshots/get-screenshots",editUrl:"https://github.com/websiteshot/documentation/edit/main/docs/api/screenshots/get-screenshots.md",version:"current",sidebar:"api",previous:{title:"Get",permalink:"/docs/api/jobs/get-screenshot-jobs"},next:{title:"BlurOptions",permalink:"/docs/api/types/blur-options"}},p=[{value:"Response",id:"response",children:[{value:"Example Response",id:"example-response",children:[]}]}],i={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GET")," /api/projects/:projectId/screenshots/root/:jobId"),Object(o.b)("h2",{id:"response"},"Response"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"rootId")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JobId")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"meta")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/types/meta"}),"Meta")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Meta data")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"jobs")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Array of ",Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/types/job-result"}),"JobResult")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"References to created screenshots")))),Object(o.b)("h3",{id:"example-response"},"Example Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "rootId": "e9879ee2-bae9-40fe-865f-e30f2368d808",\n  "meta": {\n    "created": 1605813006223\n  },\n  "jobs": [\n    {\n      "data": "https://storage.googleapis.com/websiteshot-poc.appspot.com/02886ddf-2c12-40d6-aad8-5572028e88ee/02d25f25-d853-4272-925c-986892549a7a.png?GoogleAccessId=...",\n      "rootId": "e9879ee2-bae9-40fe-865f-e30f2368d808",\n      "projectId": "02886ddf-2c12-40d6-aad8-5572028e88ee",\n      "uuid": "02d25f25-d853-4272-925c-986892549a7a",\n      "url": {\n        "url": "https://console.websiteshot.app/guarded",\n        "name": "Just a Test",\n        "loadingTime": 15000\n      },\n      "meta": {\n        "created": 1605813006223\n      },\n      "screenshotParameter": {\n        "height": 720,\n        "width": 1200,\n        "basepath": "/tmp",\n        "name": "02d25f25-d853-4272-925c-986892549a7a"\n      },\n      "preview": "https://storage.googleapis.com/websiteshot-poc.appspot.com/02886ddf-2c12-40d6-aad8-5572028e88ee/02d25f25-d853-4272-925c-986892549a7a-preview.png?GoogleAccessId=..."\n    }\n  ]\n}\n')))}b.isMDXComponent=!0}}]);