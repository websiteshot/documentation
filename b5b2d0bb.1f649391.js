(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{114:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,b=l["".concat(i,".").concat(d)]||l[d]||m[d]||o;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n="https://websiteshot-docs.s3.eu-central-1.amazonaws.com",a={app:{apikeys:{src:n+"/app-apikeys.png",alt:"API Keys"},create:{src:n+"/app-create.png",alt:"Create Screenshot Job"},dashboard:{src:n+"/app-dashboard.png",alt:"Dashboard"},login:{src:n+"/app-login.png",alt:"Login"},members:{src:n+"/app-members.png",alt:"Members"},usage:{src:n+"/app-usage.png",alt:"Usage"}},github:{action:{src:n+"/github-github-action.png",alt:"GitHub Action"},actionmarketplace:{src:n+"/github-github-action-marketplace.png",alt:"GitHub Action Marketplace"},nodejs:{src:n+"/github-nodejs-client.png",alt:"NodeJS Client"},screenshotautomation:{src:n+"/github-screenshot-automation.png",alt:"Screenshot Automation"},simplescript:{src:n+"/github-simple-script.png",alt:"Simple Script"}},example:{natural:{src:n+"/example-natural.png",alt:"Example Natural"},shadow:{src:n+"/example-shadow.png",alt:"Example Shadow"},stylemacosdark:{src:n+"/example-macos-simple-dark.png",alt:"Example Style MacOS Simple Dark"},combined:{src:n+"/example-combined.png",alt:"Example Combined"}}}},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"BucketImage",(function(){return u})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(114)),i=r(119),c={id:"github-action",title:"Github Action"},p={unversionedId:"guides/github-action",id:"guides/github-action",isDocsHomePage:!1,title:"Github Action",description:"Repository",source:"@site/docs/guides/github-action.md",slug:"/guides/github-action",permalink:"/docs/guides/github-action",editUrl:"https://github.com/websiteshot/documentation/edit/main/docs/guides/github-action.md",version:"current",sidebar:"docs",previous:{title:"Simple Script",permalink:"/docs/guides/simple-script"},next:{title:"Track Website Progress",permalink:"/docs/guides/track-progress"}},s=[{value:"Repository",id:"repository",children:[]},{value:"Marketplace",id:"marketplace",children:[]}],u=function(e){var t=e.prop;return Object(o.b)("img",{src:t.src,alt:t.alt})},l={toc:s,BucketImage:u};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"repository"},"Repository"),Object(o.b)(u,{prop:i.a.github.action,mdxType:"BucketImage"}),Object(o.b)("h2",{id:"marketplace"},"Marketplace"),Object(o.b)(u,{prop:i.a.github.actionmarketplace,mdxType:"BucketImage"}))}m.isMDXComponent=!0}}]);