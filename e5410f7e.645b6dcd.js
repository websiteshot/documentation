(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"BucketImage",(function(){return l})),r.d(t,"default",(function(){return m}));var a=r(3),n=r(7),o=(r(0),r(137)),s=r(140),c={id:"getting-started",title:"Getting Started"},i={unversionedId:"websiteshot/getting-started",id:"websiteshot/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"It doesn't take much to get started with Websiteshot. The only requirement is an account.",source:"@site/docs/websiteshot/getting-started.md",slug:"/websiteshot/getting-started",permalink:"/docs/websiteshot/getting-started",editUrl:"https://github.com/websiteshot/documentation/edit/main/docs/websiteshot/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Console",permalink:"/docs/websiteshot/console"}},p=[],l=function(e){var t=e.prop;return Object(o.b)("img",{src:t.src,alt:t.alt})},u={toc:p,BucketImage:l};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It doesn't take much to get started with Websiteshot. The only requirement is an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.websiteshot.app"}),"account"),"."),Object(o.b)(l,{prop:s.a.app.login,mdxType:"BucketImage"}),Object(o.b)("p",null,"Screenshots are always assigned to a project. A project is the workspace or context in which you are currently working. After logging in for the first time, create your first project so that you can take screenshots. Learn more about the interface on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/websiteshot/console"}),"Console page"),"."),Object(o.b)("p",null,"There's a huge amount of next steps you can tackle now. Of course, it strongly depends on your use case. We have prepared some guides that can help or inspire you:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Although we take an API first approach you don't need to request the API to create your first screenshot. Check out the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/guides/quickstart"}),"Quick Start Guide")," to learn how."),Object(o.b)("li",{parentName:"ul"},"Use a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/guides/simple-script"}),"simple script")," to see how to use the API from the command line."),Object(o.b)("li",{parentName:"ul"},"Integrate Websiteshot into your Github workflows with a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/guides/github-action"}),"Github Action"),". For example, you can commission new screenshots after each deployment.")))}m.isMDXComponent=!0},137:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),b=a,h=u["".concat(s,".").concat(b)]||u[b]||m[b]||o;return r?n.a.createElement(h,c(c({ref:t},p),{},{components:r})):n.a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},140:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a="https://websiteshot-docs.s3.eu-central-1.amazonaws.com",n={app:{apikeys:{src:a+"/app-apikeys.png",alt:"API Keys"},create:{src:a+"/app-create.png",alt:"Create Screenshot Job"},dashboard:{src:a+"/app-dashboard.png",alt:"Dashboard"},login:{src:a+"/app-login.png",alt:"Login"},members:{src:a+"/app-members.png",alt:"Members"},usage:{src:a+"/app-usage.png",alt:"Usage"}},github:{action:{src:a+"/github-github-action.png",alt:"GitHub Action"},actionmarketplace:{src:a+"/github-github-action-marketplace.png",alt:"GitHub Action Marketplace"},nodejs:{src:a+"/github-nodejs-client.png",alt:"NodeJS Client"},screenshotautomation:{src:a+"/github-screenshot-automation.png",alt:"Screenshot Automation"},simplescript:{src:a+"/github-simple-script.png",alt:"Simple Script"}},example:{natural:{src:a+"/example-natural.png",alt:"Example Natural"},shadow:{src:a+"/example-shadow.png",alt:"Example Shadow"},stylemacosdark:{src:a+"/example-macos-simple-dark.png",alt:"Example Style MacOS Simple Dark"},combined:{src:a+"/example-combined.png",alt:"Example Combined"},resize:{src:a+"/example-resize.png",alt:"Example Resize"},blur:{src:a+"/example-blur.png",alt:"Example Blur"},areaupperhalf:{src:a+"/example-upperhalf.png",alt:"Example Area Upper Half"}},socialshare:{template1:{src:a+"/examples-social-share-template-1.png",alt:"Example Social Share Template 1"},template2:{src:a+"/examples-social-share-template-2.png",alt:"Example Social Share Template 2"},template3:{src:a+"/examples-social-share-template-3.png",alt:"Example Social Share Template 3"}}}}}]);