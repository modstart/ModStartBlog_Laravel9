!function(t){var r={};function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=r,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/asset//",u(u.s=370)}({370:function(n,e,t){t=t(371);window.MS=window.MS||{},window.MS.urlWatcher=t},371:function(n,e,t){!function(r){n.exports=function(n){var e=r.extend({intervalInMS:3e3,data:null,url:null,maxRound:100,jsonp:!1,preRequest:function(){},requestFinish:function(n){},expired:function(){}},n),t=this;this.running=!1,this.currentRound=0,this.start=function(){return t.running=!0,t.currentRound=0,setTimeout(t.sendRequest,e.intervalInMS),t},this.stop=function(){if(t.running)return t.running=!1,t},this.next=function(){return setTimeout(t.sendRequest,e.intervalInMS),t},this.sendRequest=function(){if(t.running){if(t.currentRound++,t.currentRound>e.maxRound)return t.running=!1,void e.expired();e.preRequest(),e.jsonp?r.ajax({url:e.url,dataType:"jsonp",timeout:1e4,data:e.data,success:n=>{e.requestFinish.call(t,n)},error:n=>{e.requestFinish.call(t,{code:-1,msg:"请求出现错误"})},jsonp:"callback"}):r.post(e.url,e.data,function(n){e.requestFinish.call(t,n)})}}}}.call(this,t(8))},8:function(n,e){n.exports=window.$}});