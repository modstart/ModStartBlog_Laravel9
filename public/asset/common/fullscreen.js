!function(t){var u={};function o(e){if(u[e])return u[e].exports;var n=u[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=u,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)o.d(t,u,function(e){return n[e]}.bind(null,u));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/asset//",o(o.s=321)}({321:function(e,n){var t={enter:function(e){var n=document.documentElement;n.requestFullscreen?(n.requestFullscreen(),setTimeout(function(){e&&e()},1e3)):n.mozRequestFullScreen?(n.mozRequestFullScreen(),setTimeout(function(){e&&e()},1e3)):n.webkitRequestFullScreen?(n.webkitRequestFullScreen(),setTimeout(function(){e&&e()},1e3)):elem.msRequestFullscreen&&(elem.msRequestFullscreen(),setTimeout(function(){e&&e()},1e3))},exit:function(e){document.exitFullscreen?(document.exitFullscreen(),setTimeout(function(){e&&e()},1e3)):document.mozCancelFullScreen?(document.mozCancelFullScreen(),setTimeout(function(){e&&e()},1e3)):document.webkitCancelFullScreen?(document.webkitCancelFullScreen(),setTimeout(function(){e&&e()},1e3)):document.msExitFullscreen&&(document.msExitFullscreen(),setTimeout(function(){e&&e()},1e3))},isFullScreen:function(){return document.exitFullscreen?document.fullscreen:document.mozCancelFullScreen?document.mozFullScreen:document.webkitCancelFullScreen?document.webkitIsFullScreen:!!document.msExitFullscreen&&document.msFullscreenElement},trigger:function(e){t.isFullScreen()?t.exit(function(){e("exit")}):t.enter(function(){e("enter")})}};"api"in window||(window.api={}),window.api.fullscreen=t,"MS"in window||(window.MS={}),window.MS.fullscreen=t}});