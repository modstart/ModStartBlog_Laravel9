!function(n){var u={};function r(t){var e;return(u[t]||(e=u[t]={i:t,l:!1,exports:{}},n[t].call(e.exports,e,e.exports,r),e.l=!0,e)).exports}r.m=n,r.c=u,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/asset//",r(r.s=379)}({379:function(t,e,n){"use strict";n.r(e),"MS"in window||(window.MS={}),window.MS.lazyValue=function(){var u=this;return u._url=null,u._interval=3e3,u._update=null,u._updateOne=null,u._finish=null,u._fetch=null,u.url=function(t){return u._url=t,u},u.interval=function(t){return u._interval=t,u},u.update=function(t){return u._update=t,u},u.updateOne=function(t){return u._updateOne=t,u},u.finish=function(t){return u._finish=t,u},u.fetch=function(t){return u._fetch=t,u},u.start=function(){u._fetch||MS&&MS.api&&MS.api.post&&(u._fetch=function(t,e){MS.api.post(t,{},e)});function n(){u._fetch(u._url,function(t){if(0==t.code){if(u._update&&u._update(t.data.value),u._updateOne)for(var e in t.data.value)u._updateOne(e,t.data.value[e]);"finish"==t.data.status?u._finish&&u._finish(t.data.value):setTimeout(function(){n()},u._interval)}else alert("请求出现错误："+JSON.stringify(t))})}return n(),u},u}}});