!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=NetlifyCmsApp},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){n(4),n(5),e.exports=n(7)},function(e,t,n){"use strict";var r=n(2)(n(1));r.default.init(),r.default.registerPreviewStyle("cms.css")},function(e,t,n){"use strict";var r=n(2)(n(6));window.netlifyIdentity=r.default;var o=function(){return r.default.on("login",(function(){document.location.href="/rizvi.dev/admin/"}))};r.default.on("init",(function(e){e?r.default.on("logout",(function(){o()})):o()})),r.default.init()},function(e,t){e.exports=netlifyIdentity},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),a=n.n(i),u=function(e){var t=e.entry,n=(0,e.widgetFor)("body"),r=t.getIn(["data","title"]);return a.a.createElement("div",{className:"page"},a.a.createElement("h1",{className:"page__title"},r),a.a.createElement("div",{className:"page__body"},n))},l=function(e){var t=e.entry,n=(0,e.widgetFor)("body"),r=t.getIn(["data","title"]);return a.a.createElement("div",{className:"post"},a.a.createElement("h1",{className:"post__title"},r),a.a.createElement("div",{className:"post__body"},n))};o.a.registerPreviewTemplate("pages",u),o.a.registerPreviewTemplate("posts",l)}]);
//# sourceMappingURL=cms.js.map