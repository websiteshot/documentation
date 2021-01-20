(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,O=d["".concat(i,".").concat(m)]||d[m]||s[m]||c;return n?r.a.createElement(O,b(b({ref:t},o),{},{components:n})):r.a.createElement(O,b({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var o=2;o<c;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(133)),i={id:"screenshot-parameter",title:"ScreenshotParameter"},b={unversionedId:"api/types/screenshot-parameter",id:"api/types/screenshot-parameter",isDocsHomePage:!1,title:"ScreenshotParameter",description:"| Parameter        | Type                                       | Mandatory | Description                                                                                                                                                                               |",source:"@site/docs/api/types/ScreenshotParameter.md",slug:"/api/types/screenshot-parameter",permalink:"/docs/api/types/screenshot-parameter",editUrl:"https://github.com/websiteshot/documentation/edit/main/docs/api/types/ScreenshotParameter.md",version:"current",sidebar:"api",previous:{title:"RoundedCornersOptions",permalink:"/docs/api/types/rounded-corners-options"},next:{title:"ScheduleDescription",permalink:"/docs/api/types/schedule-description"}},l=[],o={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"width")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Width of the View")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"height")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Height of the View")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"style")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Style that should be applied to the created Screenshot: ",Object(c.b)("inlineCode",{parentName:"td"},"macos-simple-dark"),", ",Object(c.b)("inlineCode",{parentName:"td"},"macos-simple-light"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"loginParameter")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/types/login-parameter"}),"LoginParameter")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If the Website is guarded and needs login parameter you can configure User and Password within this field.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"area")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This allows you to define which part of the website should be used: ",Object(c.b)("inlineCode",{parentName:"td"},"topleft"),", ",Object(c.b)("inlineCode",{parentName:"td"},"topright"),", ",Object(c.b)("inlineCode",{parentName:"td"},"bottomleft"),", ",Object(c.b)("inlineCode",{parentName:"td"},"bottomright"),", ",Object(c.b)("inlineCode",{parentName:"td"},"centercenter"),", ",Object(c.b)("inlineCode",{parentName:"td"},"upperhalf"),", ",Object(c.b)("inlineCode",{parentName:"td"},"lowerhalf"),", ",Object(c.b)("inlineCode",{parentName:"td"},"leftside"),", ",Object(c.b)("inlineCode",{parentName:"td"},"rightside"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"effects")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array of ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/types/effect-config"}),"EffectConfig")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"After the screenshot is created, effects can still be applied. Multiple effects can be specified, they will be applied in the order in the array.")))))}p.isMDXComponent=!0}}]);