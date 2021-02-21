(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"BucketImage",(function(){return l})),r.d(t,"default",(function(){return m}));var a=r(3),n=r(7),o=(r(0),r(138)),c=r(141),i={id:"quickstart",title:"Quick Start"},s={unversionedId:"guides/quickstart",id:"guides/quickstart",isDocsHomePage:!1,title:"Quick Start",description:"No coding is necessary for the Quick Start. You can simply create a new screenshot via the console. Click on the button Create Screenshot Job.",source:"@site/docs/guides/quickstart.md",slug:"/guides/quickstart",permalink:"/docs/guides/quickstart",editUrl:"https://github.com/websiteshot/documentation/edit/main/docs/guides/quickstart.md",version:"current",sidebar:"docs",previous:{title:"Webhooks",permalink:"/docs/features/webhooks"},next:{title:"Simple Script",permalink:"/docs/guides/simple-script"}},p=[],l=function(e){var t=e.prop;return Object(o.b)("img",{src:t.src,alt:t.alt})},u={toc:p,BucketImage:l};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"No coding is necessary for the Quick Start. You can simply create a new screenshot via the console. Click on the button ",Object(o.b)("strong",{parentName:"p"},"Create Screenshot Job"),"."),Object(o.b)(l,{prop:c.a.app.create,mdxType:"BucketImage"}),Object(o.b)("p",null,"In the following form you have to fill in the input fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"URL"),": the URL of the website you want to take a screenshot of. You can also simply use ",Object(o.b)("inlineCode",{parentName:"li"},"https://console.websiteshot.app")," for this purpose."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Name"),": Give your screenshot a name. This is useful if you want to take a lot of screenshots for a job."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Resolution"),": Here you decide in which resolution the screenshot will be created. A few popular dimensions are given.")))}m.isMDXComponent=!0},138:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=a,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return r?n.a.createElement(d,i(i({ref:t},p),{},{components:r})):n.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},141:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a="https://websiteshot-docs.s3.eu-central-1.amazonaws.com",n={app:{apikeys:{src:a+"/app-apikeys.png",alt:"API Keys"},create:{src:a+"/app-create.png",alt:"Create Screenshot Job"},dashboard:{src:a+"/app-dashboard.png",alt:"Dashboard"},login:{src:a+"/app-login.png",alt:"Login"},members:{src:a+"/app-members.png",alt:"Members"},usage:{src:a+"/app-usage.png",alt:"Usage"},webhooks:{src:a+"/app-webhooks.png",alt:"Webhooks"}},github:{action:{src:a+"/github-github-action.png",alt:"GitHub Action"},actionmarketplace:{src:a+"/github-github-action-marketplace.png",alt:"GitHub Action Marketplace"},nodejs:{src:a+"/github-nodejs-client.png",alt:"NodeJS Client"},screenshotautomation:{src:a+"/github-screenshot-automation.png",alt:"Screenshot Automation"},simplescript:{src:a+"/github-simple-script.png",alt:"Simple Script"}},example:{natural:{src:a+"/example-natural.png",alt:"Example Natural"},shadow:{src:a+"/example-shadow.png",alt:"Example Shadow"},stylemacosdark:{src:a+"/example-macos-simple-dark.png",alt:"Example Style MacOS Simple Dark"},combined:{src:a+"/example-combined.png",alt:"Example Combined"},resize:{src:a+"/example-resize.png",alt:"Example Resize"},blur:{src:a+"/example-blur.png",alt:"Example Blur"},areaupperhalf:{src:a+"/example-upperhalf.png",alt:"Example Area Upper Half"}},socialshare:{template1:{src:a+"/examples-social-share-template-1.png",alt:"Example Social Share Template 1"},template2:{src:a+"/examples-social-share-template-2.png",alt:"Example Social Share Template 2"},template3:{src:a+"/examples-social-share-template-3.png",alt:"Example Social Share Template 3"}}}}}]);