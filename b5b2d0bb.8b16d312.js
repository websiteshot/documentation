(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,g=l["".concat(o,".").concat(d)]||l[d]||b[d]||i;return r?a.a.createElement(g,c(c({ref:t},u),{},{components:r})):a.a.createElement(g,c({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},117:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n="https://websiteshot-docs.s3.eu-central-1.amazonaws.com",a={app:{apikeys:{src:n+"/app-apikeys.png",alt:"API Keys"},create:{src:n+"/app-create.png",alt:"Create Screenshot Job"},dashboard:{src:n+"/app-dashboard.png",alt:"Dashboard"},login:{src:n+"/app-login.png",alt:"Login"},members:{src:n+"/app-members.png",alt:"Members"},usage:{src:n+"/app-usage.png",alt:"Usage"}},github:{action:{src:n+"/github-github-action.png",alt:"GitHub Action"},actionmarketplace:{src:n+"/github-github-action-marketplace.png",alt:"GitHub Action Marketplace"},nodejs:{src:n+"/github-nodejs-client.png",alt:"NodeJS Client"},screenshotautomation:{src:n+"/github-screenshot-automation.png",alt:"Screenshot Automation"},simplescript:{src:n+"/github-simple-script.png",alt:"Simple Script"}}}},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"BucketImage",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(112)),o=r(117),c={id:"github-action",title:"Github Action"},p={unversionedId:"guides/github-action",id:"guides/github-action",isDocsHomePage:!1,title:"Github Action",description:"Repository",source:"@site/docs/guides/github-action.md",slug:"/guides/github-action",permalink:"/docs/guides/github-action",editUrl:"https://github.com/websiteshot/documentation/edit/main/docs/guides/github-action.md",version:"current",sidebar:"docs",previous:{title:"Simple Script",permalink:"/docs/guides/simple-script"}},u=[{value:"Repository",id:"repository",children:[]},{value:"Marketplace",id:"marketplace",children:[]}],s=function(e){var t=e.prop;return Object(i.b)("img",{src:t.src,alt:t.alt})},l={toc:u,BucketImage:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"repository"},"Repository"),Object(i.b)(s,{prop:o.a.github.action,mdxType:"BucketImage"}),Object(i.b)("h2",{id:"marketplace"},"Marketplace"),Object(i.b)(s,{prop:o.a.github.actionmarketplace,mdxType:"BucketImage"}))}b.isMDXComponent=!0}}]);