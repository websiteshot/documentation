(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{138:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),i=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(r),b=a,f=u["".concat(o,".").concat(b)]||u[b]||m[b]||p;return r?n.a.createElement(f,c(c({ref:t},s),{},{components:r})):n.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<p;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},141:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a="https://websiteshot-docs.s3.eu-central-1.amazonaws.com",n={app:{apikeys:{src:a+"/app-apikeys.png",alt:"API Keys"},create:{src:a+"/app-create.png",alt:"Create Screenshot Job"},dashboard:{src:a+"/app-dashboard.png",alt:"Dashboard"},login:{src:a+"/app-login.png",alt:"Login"},members:{src:a+"/app-members.png",alt:"Members"},usage:{src:a+"/app-usage.png",alt:"Usage"},webhooks:{src:a+"/app-webhooks.png",alt:"Webhooks"}},github:{action:{src:a+"/github-github-action.png",alt:"GitHub Action"},actionmarketplace:{src:a+"/github-github-action-marketplace.png",alt:"GitHub Action Marketplace"},nodejs:{src:a+"/github-nodejs-client.png",alt:"NodeJS Client"},screenshotautomation:{src:a+"/github-screenshot-automation.png",alt:"Screenshot Automation"},simplescript:{src:a+"/github-simple-script.png",alt:"Simple Script"}},example:{natural:{src:a+"/example-natural.png",alt:"Example Natural"},shadow:{src:a+"/example-shadow.png",alt:"Example Shadow"},stylemacosdark:{src:a+"/example-macos-simple-dark.png",alt:"Example Style MacOS Simple Dark"},combined:{src:a+"/example-combined.png",alt:"Example Combined"},resize:{src:a+"/example-resize.png",alt:"Example Resize"},blur:{src:a+"/example-blur.png",alt:"Example Blur"},areaupperhalf:{src:a+"/example-upperhalf.png",alt:"Example Area Upper Half"}},socialshare:{template1:{src:a+"/examples-social-share-template-1.png",alt:"Example Social Share Template 1"},template2:{src:a+"/examples-social-share-template-2.png",alt:"Example Social Share Template 2"},template3:{src:a+"/examples-social-share-template-3.png",alt:"Example Social Share Template 3"}}}},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"BucketImage",(function(){return i})),r.d(t,"default",(function(){return m}));var a=r(3),n=r(7),p=(r(0),r(138)),o=r(141),c={id:"crop-area",title:"Crop Area Upper Half"},l={unversionedId:"examples/crop-area",id:"examples/crop-area",isDocsHomePage:!1,title:"Crop Area Upper Half",source:"@site/docs/examples/crop-area.md",slug:"/examples/crop-area",permalink:"/docs/examples/crop-area",editUrl:"https://github.com/websiteshot/documentation/edit/main/docs/examples/crop-area.md",version:"current",sidebar:"docs",previous:{title:"Blur Effect",permalink:"/docs/examples/blur"}},s=[],i=function(e){var t=e.prop;return Object(p.b)("img",{src:t.src,alt:t.alt})},u={toc:s,BucketImage:i};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)(i,{prop:o.a.example.areaupperhalf,mdxType:"BucketImage"}))}m.isMDXComponent=!0}}]);