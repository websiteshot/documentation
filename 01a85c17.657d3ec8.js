(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7],{114:function(e,a,t){"use strict";var r=t(3),n=t(7),l=t(0),c=t.n(l),s=t(108),o=t(110),i=t(23),m=t(109),u=t(111),f=t(55),d=t.n(f);function E(e){var a=e.to,t=e.href,l=e.label,s=e.prependBaseUrlToHref,i=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),m=Object(u.a)(a),f=Object(u.a)(t,{forcePrependBaseUrl:!0});return c.a.createElement(o.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:s?f:t}:{to:m},i),l)}var b=function(e){var a=e.url,t=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(m.useThemeConfig)().footer,a=e||{},t=a.copyright,r=a.links,n=void 0===r?[]:r,l=a.logo,o=void 0===l?{}:l,f=Object(u.a)(o.src);return e?c.a.createElement("footer",{className:Object(s.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},n&&n.length>0&&c.a.createElement("div",{className:"row footer__links"},n.map((function(e,a){return c.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?c.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(E,e))}))):null)}))),(o||t)&&c.a.createElement("div",{className:"footer__bottom text--center"},o&&o.src&&c.a.createElement("div",{className:"margin-bottom--sm"},o.href?c.a.createElement("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},c.a.createElement(b,{alt:o.alt,url:f})):c.a.createElement(b,{alt:o.alt,url:f})),t?c.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null)),c.a.createElement(i.a,null,c.a.createElement("script",{defer:!0,src:"https://static.cloudflareinsights.com/beacon.min.js","data-cf-beacon":'{"token": "4386072c15bf4295bf17358d68964a3d"}'}))):null}},117:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(0),n=t.n(r),l=t(108),c=t(110),s=t(56),o=t.n(s);function i(e){var a=e.sidebar;return 0===a.items.length?null:n.a.createElement("div",{className:Object(l.a)(o.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:o.a.sidebarItemTitle},a.title),n.a.createElement("ul",{className:o.a.sidebarItemList},a.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:o.a.sidebarItem},n.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:o.a.sidebarItemLink,activeClassName:o.a.sidebarItemLinkActive},e.title))}))))}},70:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(113),c=t(110),s=t(117);a.default=function(e){var a=e.tags,t=e.sidebar,r={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);r[a]=r[a]||[],r[a].push(e)}));var o=Object.entries(r).sort((function(e,a){var t=e[0],r=a[0];return t===r?0:t>r?1:-1})).map((function(e){var t=e[0],r=e[1];return n.a.createElement("div",{key:t},n.a.createElement("h3",null,t),r.map((function(e){return n.a.createElement(c.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),n.a.createElement("hr",null))})).filter((function(e){return null!=e}));return n.a.createElement(l.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(s.a,{sidebar:t})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,"Tags"),n.a.createElement("div",{className:"margin-vert--lg"},o)))))}}}]);