!function(c){"use strict";var o,t,d={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,unavailable:null,deactivated:null,overdue:null,ready:null},p={},u=null,a=0,f={},i=0,h={},e=function(){var e,t,a,n,r="ZeroClipboard.swf";if(!document.currentScript||!(n=document.currentScript.src)){var i=document.getElementsByTagName("script");if("readyState"in i[0])for(e=i.length;e--&&("interactive"!==i[e].readyState||!(n=i[e].src)););else if("loading"===document.readyState)n=i[i.length-1].src;else{for(e=i.length;e--;){if(!(a=i[e].src)){t=null;break}if(a=(a=a.split("#")[0].split("?")[0]).slice(0,a.lastIndexOf("/")+1),null==t)t=a;else if(t!==a){t=null;break}}null!==t&&(n=t)}}return r=n?(n=n.split("#")[0].split("?")[0]).slice(0,n.lastIndexOf("/")+1)+r:r}(),F=(t=/\-([a-z])/g,function(e){return e.replace(t,B)});function B(e,t){return t.toUpperCase()}function y(e){var t;e=e||c.event,this!==c?t=this:e.target?t=e.target:e.srcElement&&(t=e.srcElement),P.activate(t)}function l(e,t){if(e&&1===e.nodeType)if(e.classList)e.classList.contains(t)||e.classList.add(t);else if(t&&"string"==typeof t){var a=(t||"").split(/\s+/);if(1===e.nodeType)if(e.className){for(var n=" "+e.className+" ",r=e.className,i=0,o=a.length;i<o;i++)n.indexOf(" "+a[i]+" ")<0&&(r+=" "+a[i]);e.className=r.replace(/^\s+|\s+$/g,"")}else e.className=t}}function s(e,t){if(e&&1===e.nodeType)if(e.classList)e.classList.contains(t)&&e.classList.remove(t);else if(t&&"string"==typeof t||void 0===t){var a=(t||"").split(/\s+/);if(1===e.nodeType&&e.className)if(t){for(var n=(" "+e.className+" ").replace(/[\n\t]/g," "),r=0,i=a.length;r<i;r++)n=n.replace(" "+a[r]+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}else e.className=""}}function v(e,t,a){if("function"==typeof t.indexOf)return t.indexOf(e,a);var n,r=t.length;for(void 0===a?a=0:a<0&&(a=r+a),n=a;n<r;n++)if(t.hasOwnProperty(n)&&t[n]===e)return n;return-1}function g(e){if("string"==typeof e)throw new TypeError("ZeroClipboard doesn't accept query strings.");return"number"!=typeof e.length?[e]:e}function m(){for(var e,t,a,n=arguments[0]||{},r=1,i=arguments.length;r<i;r++)if(null!=(e=arguments[r]))for(t in e)e.hasOwnProperty(t)&&(n[t],n!==(a=e[t]))&&void 0!==a&&(n[t]=a);return n}var H=function(){var e,t,a=1;return"function"==typeof document.body.getBoundingClientRect&&(e=(e=document.body.getBoundingClientRect()).right-e.left,t=document.body.offsetWidth,a=Math.round(e/t*100)/100),a},b=function(e){var t,a;return e&&("number"==typeof e&&0<e?t=e:"string"==typeof e&&(a=parseInt(e,10))&&!isNaN(a)&&0<a&&(t=a)),t||("number"==typeof j.zIndex&&0<j.zIndex?t=j.zIndex:"string"==typeof j.zIndex&&(a=parseInt(j.zIndex,10))&&!isNaN(a)&&0<a&&(t=a)),t||0},w=function(e){var t,a;return null!=e&&""!==e&&""!==(e=e.replace(/^\s+|\s+$/g,""))&&(!(e=-1===(a=(e=-1===(t=e.indexOf("//"))?e:e.slice(t+2)).indexOf("/"))?e:-1===t||0===a?null:e.slice(0,a))||".swf"!==e.slice(-4).toLowerCase())&&e||null},M=function(e,t){var a=w(t.swfPath),n=(null===a&&(a=e),[]),t=(r(t.trustedOrigins,n),r(t.trustedDomains,n),n.length);if(0<t){if(1===t&&"*"===n[0])return"always";if(-1!==v(e,n))return 1===t&&e===a?"sameDomain":"always"}return"never"};function r(e,t){var a,n,r;if(null!=e&&"*"!==t[0]&&"object"==typeof(e="string"==typeof e?[e]:e)&&"number"==typeof e.length)for(a=0,n=e.length;a<n;a++)if(e.hasOwnProperty(a)&&(r=w(e[a]))){if("*"===r){t.length=0,t.push("*");break}-1===v(r,t)&&t.push(r)}}function x(e){if(null==e)return[];if(Object.keys)return Object.keys(e);var t,a=[];for(t in e)e.hasOwnProperty(t)&&a.push(t);return a}n=c.Array.prototype.slice;var n,C,O,T=function(e){return n.call(e,0)},D=!1,z=!1,k=!1,N="";function E(e){e=e.match(/[\d]+/g);return e.length=3,e.join(".")}function I(e){e&&(D=!0,!(N=e.version?E(e.version):N)&&e.description&&(N=E(e.description)),e.filename)&&(e=e.filename,k=!!e&&(e=e.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e)||"chrome.plugin"===e.slice(-13)))}if(navigator.plugins&&navigator.plugins.length)I(navigator.plugins["Shockwave Flash"]),navigator.plugins["Shockwave Flash 2.0"]&&(D=!0,N="2.0.0.11");else if(navigator.mimeTypes&&navigator.mimeTypes.length)I((O=navigator.mimeTypes["application/x-shockwave-flash"])&&O.enabledPlugin);else if("undefined"!=typeof ActiveXObject){z=!0;try{C=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),D=!0,N=E(C.GetVariable("$version"))}catch(e){try{C=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),D=!0,N="6.0.21"}catch(e){try{C=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),D=!0,N=E(C.GetVariable("$version"))}catch(e){z=!1}}}}d.disabled=!0!==D,d.outdated=N&&parseFloat(N)<11,d.version=N||"0.0.0",d.pluginType=k?"pepper":z?"activex":D?"netscape":"unknown";function P(e){if(!(this instanceof P))return new P(e);var t;this.id=""+a++,f[this.id]={instance:this,elements:[],handlers:{}},e&&this.clip(e),"boolean"!=typeof d.ready&&(d.ready=!1),P.isFlashUnusable()||null!==d.bridge||(t=this,"number"==typeof(e=j.flashLoadTimeout)&&0<=e&&setTimeout(function(){"boolean"!=typeof d.deactivated&&(d.deactivated=!0),!0===d.deactivated&&P.emit({type:"error",name:"flash-deactivated",client:t})},e),d.overdue=!1,$())}P.prototype.setText=function(e){return P.setData("text/plain",e),this},P.prototype.setHtml=function(e){return P.setData("text/html",e),this},P.prototype.setRichText=function(e){return P.setData("application/rtf",e),this},P.prototype.setData=function(){return P.setData.apply(P,T(arguments)),this},P.prototype.clearData=function(){return P.clearData.apply(P,T(arguments)),this},P.prototype.setSize=function(e,t){return S(e,t),this},P.prototype.destroy=function(){this.unclip(),this.off(),delete f[this.id]};var j={swfPath:e,trustedDomains:c.location.host?[c.location.host]:[],cacheBust:!0,forceHandCursor:!(P.version="2.0.0-beta.5"),forceEnhancedClipboard:!1,zIndex:999999999,debug:!1,title:null,autoActivate:!0,flashLoadTimeout:3e4},$=(P.isFlashUnusable=function(){return!!(d.disabled||d.outdated||d.unavailable||d.deactivated)},P.config=function(e){if("object"==typeof e&&null!==e&&m(j,e),"string"==typeof e&&e)return j.hasOwnProperty(e)?j[e]:void 0;var t,a={};for(t in j)j.hasOwnProperty(t)&&("object"==typeof j[t]&&null!==j[t]?"length"in j[t]?a[t]=j[t].slice(0):a[t]=m({},j[t]):a[t]=j[t]);return a},P.destroy=function(){for(var e in P.deactivate(),f)f.hasOwnProperty(e)&&f[e]&&(e=f[e].instance)&&"function"==typeof e.destroy&&e.destroy();var a,n=d.bridge;n&&((a=L(n))&&("activex"===d.pluginType&&"readyState"in n?(n.style.display="none",function e(){if(4===n.readyState){for(var t in n)"function"==typeof n[t]&&(n[t]=null);n.parentNode.removeChild(n),a.parentNode&&a.parentNode.removeChild(a)}else setTimeout(e,10)}()):(n.parentNode.removeChild(n),a.parentNode&&a.parentNode.removeChild(a))),d.ready=null,d.bridge=null,d.deactivated=null),P.clearData()},P.activate=function(e){o&&(s(o,j.hoverClass),s(o,j.activeClass)),l(o=e,j.hoverClass),X();var t,a,n=j.title||e.getAttribute("title"),e=(n&&(t=L(d.bridge))&&t.setAttribute("title",n),!0===j.forceHandCursor||"pointer"===(t=e,n="cursor",a=c.getComputedStyle?c.getComputedStyle(t,null).getPropertyValue(n):(a=F(n),(t.currentStyle||t.style)[a]),"cursor"!==n||a&&"auto"!==a||"a"!==t.tagName.toLowerCase()?a:"pointer"));n=e,!0===d.ready&&d.bridge&&"function"==typeof d.bridge.setHandCursor?d.bridge.setHandCursor(n):d.ready=!1},P.deactivate=function(){var e=L(d.bridge);e&&(e.removeAttribute("title"),e.style.left="0px",e.style.top="-9999px",S(1,1)),o&&(s(o,j.hoverClass),s(o,j.activeClass),o=null)},P.state=function(){return{browser:function(e,t){for(var a={},n=0,r=t.length;n<r;n++)t[n]in e&&(a[t[n]]=e[t[n]]);return a}(c.navigator,["userAgent","platform","appName"]),flash:function(e,t){var a,n={};for(a in e)-1===v(a,t)&&(n[a]=e[a]);return n}(d,["bridge"]),zeroclipboard:{version:P.version,config:P.config()}}},P.setData=function(e,t){var a,n;if("object"==typeof e&&e&&void 0===t)a=e,P.clearData();else{if("string"!=typeof e||!e)return;(a={})[e]=t}for(n in a)n&&a.hasOwnProperty(n)&&"string"==typeof a[n]&&a[n]&&(p[n]=a[n])},P.clearData=function(e){if(void 0===e){var t=p;if(t)for(var a in t)t.hasOwnProperty(a)&&delete t[a];u=null}else"string"==typeof e&&p.hasOwnProperty(e)&&delete p[e]},function(){var e,t,a,n,r,i,o,l=document.getElementById("global-zeroclipboard-html-bridge");l||(t="never"===(e=M(c.location.host,j))?"none":"all",a=function(e){var t,a,n,r,i="",o=[];if(e.trustedDomains&&("string"==typeof e.trustedDomains?r=[e.trustedDomains]:"object"==typeof e.trustedDomains&&"length"in e.trustedDomains&&(r=e.trustedDomains)),r&&r.length)for(t=0,a=r.length;t<a;t++)if(r.hasOwnProperty(t)&&r[t]&&"string"==typeof r[t]&&(n=w(r[t]))){if("*"===n){o=[n];break}o.push.apply(o,[n,"//"+n,c.location.protocol+"//"+n])}return o.length&&(i+="trustedOrigins="+encodeURIComponent(o.join(","))),!0===e.forceEnhancedClipboard&&(i+=(i?"&":"")+"forceEnhancedClipboard=true"),i}(j),o=j.swfPath+(i=j.swfPath,null==(o=j)||o&&!0===o.cacheBust?(-1===i.indexOf("?")?"?":"&")+"noCache="+(new Date).getTime():""),l=R(),i=document.createElement("div"),l.appendChild(i),document.body.appendChild(l),(n=document.createElement("div")).innerHTML='<object id="global-zeroclipboard-flash-bridge" name="global-zeroclipboard-flash-bridge" width="100%" height="100%" '+((r="activex"===d.pluginType)?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+o+'"')+">"+(r?'<param name="movie" value="'+o+'"/>':"")+'<param name="allowScriptAccess" value="'+e+'"/><param name="allowNetworking" value="'+t+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+a+'"/></object>',r=n.firstChild,n=null,r.ZeroClipboard=P,l.replaceChild(r,i)),r=(r=r||((r=document["global-zeroclipboard-flash-bridge"])&&(o=r.length)?r[o-1]:r))||l.firstChild,d.bridge=r||null}),R=function(){var e=document.createElement("div");return e.id="global-zeroclipboard-html-bridge",e.className="global-zeroclipboard-container",e.style.position="absolute",e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.height="1px",e.style.zIndex=""+b(j.zIndex),e},L=function(e){for(var t=e&&e.parentNode;t&&"OBJECT"===t.nodeName&&t.parentNode;)t=t.parentNode;return t||null},X=function(){var e,t,a,n,r,i;o&&(e=o,t=j.zIndex,t={left:0,top:0,width:0,height:0,zIndex:b(t)-1},e.getBoundingClientRect&&(e=e.getBoundingClientRect(),n="pageXOffset"in c&&"pageYOffset"in c?(a=c.pageXOffset,c.pageYOffset):(n=H(),a=Math.round(document.documentElement.scrollLeft/n),Math.round(document.documentElement.scrollTop/n)),r=document.documentElement.clientLeft||0,i=document.documentElement.clientTop||0,t.left=e.left+a-r,t.top=e.top+n-i,t.width="width"in e?e.width:e.right-e.left,t.height="height"in e?e.height:e.bottom-e.top),a=t,(r=L(d.bridge))&&(r.style.top=a.top+"px",r.style.left=a.left+"px",r.style.width=a.width+"px",r.style.height=a.height+"px",r.style.zIndex=a.zIndex+1),S(a.width,a.height))},S=function(e,t){var a=L(d.bridge);a&&(a.style.width=e+"px",a.style.height=t+"px")},A=(P.emit=function(e){var t,a,n,r,i,o,l,s;if("string"==typeof e&&e&&(s=e),"object"==typeof e&&e&&"string"==typeof e.type&&e.type&&(s=e.type,t=e),s){if(e=U(s,t),G(e),"ready"===e.type&&!0===d.overdue)return P.emit({type:"error",name:"flash-overdue"});if(a=!/^(before)?copy$/.test(e.type),e.client)A.call(e.client,e,a);else for(r=0,i=(n=e.target&&e.target!==c&&!0===j.autoActivate?J(e.target):function(){for(var e,t=[],a=x(f),n=0,r=a.length;n<r;n++)(e=f[a[n]].instance)&&e instanceof P&&t.push(e);return t}()).length;r<i;r++)o=m({},e,{client:n[r]}),A.call(n[r],o,a);return"copy"===e.type&&(l=(s=function(e){var t={},a={};if("object"==typeof e&&e){for(var n in e)if(n&&e.hasOwnProperty(n)&&"string"==typeof e[n]&&e[n])switch(n.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":t.text=e[n],a.text=n;break;case"text/html":case"html":case"air:html":case"flash:html":t.html=e[n],a.html=n;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":t.rtf=e[n],a.rtf=n}return{data:t,formatMap:a}}}(p)).data,u=s.formatMap),l}},function(e,t){var a=f[this.id]&&f[this.id].handlers[e.type];if(a&&a.length)for(var n,r,i=0,o=a.length;i<o;i++)r=this,"function"==typeof(n="object"==typeof(n="string"==typeof(n=a[i])&&"function"==typeof c[n]?c[n]:n)&&n&&"function"==typeof n.handleEvent?(r=n).handleEvent:n)&&!function(e,t,a,n){n?c.setTimeout(function(){e.apply(t,a)},0):e.apply(t,a)}(n,r,[e],t);return this}),Z={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate","flash-overdue":"Flash communication was established but NOT within the acceptable time limit"}},U=function(e,t){if(e||t&&t.type)return t=t||{},e=(e||t.type).toLowerCase(),m(t,{type:e,target:t.target||o||null,relatedTarget:t.relatedTarget||null,currentTarget:d&&d.bridge||null}),e=Z[t.type],(e="error"===t.type&&t.name?e&&e[t.name]:e)&&(t.message=e),"ready"===t.type&&m(t,{target:null,version:d.version}),"error"===t.type&&(t.target=null,/^flash-(outdated|unavailable|deactivated|overdue)$/.test(t.name))&&m(t,{version:d.version,minimumVersion:"11.0.0"}),"copy"===t.type&&(t.clipboardData={setData:P.setData,clearData:P.clearData}),(t="aftercopy"===t.type?function(e,t){if("object"!=typeof e||!e||"object"!=typeof t||!t)return e;var a,n={};for(a in e)if(e.hasOwnProperty(a))if("success"!==a&&"data"!==a)n[a]=e[a];else{n[a]={};var r,i=e[a];for(r in i)r&&i.hasOwnProperty(r)&&t.hasOwnProperty(r)&&(n[a][t[r]]=i[r])}return n}(t,u):t).target&&!t.relatedTarget&&(t.relatedTarget=V(t.target)),t},V=function(e){e=e&&e.getAttribute&&e.getAttribute("data-clipboard-target");return e?document.getElementById(e):null},G=function(e){var t=e.target||o;switch(e.type){case"error":v(e.name,["flash-disabled","flash-outdated","flash-deactivated","flash-overdue"])&&m(d,{disabled:"flash-disabled"===e.name,outdated:"flash-outdated"===e.name,unavailable:"flash-unavailable"===e.name,deactivated:"flash-deactivated"===e.name,overdue:"flash-overdue"===e.name,ready:!1});break;case"ready":var a=!0===d.deactivated;m(d,{disabled:!1,outdated:!1,unavailable:!1,deactivated:!1,overdue:a,ready:!a});break;case"copy":var n,r,a=e.relatedTarget;!p["text/html"]&&!p["text/plain"]&&a&&(r=a.value||a.outerHTML||a.innerHTML)&&(n=a.value||a.textContent||a.innerText)?(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",n),r!==n&&e.clipboardData.setData("text/html",r)):!p["text/plain"]&&e.target&&(n=e.target.getAttribute("data-clipboard-text"))&&(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",n));break;case"aftercopy":P.clearData(),t&&t!==function(){try{return document.activeElement}catch(e){}return null}()&&t.focus&&t.focus();break;case"mouseover":l(t,j.hoverClass);break;case"mouseout":!0===j.autoActivate&&P.deactivate();break;case"mousedown":l(t,j.activeClass);break;case"mouseup":s(t,j.activeClass)}},J=(P.prototype.on=function(e,t){var a,n={},r=f[this.id]&&f[this.id].handlers;if("string"==typeof e&&e)a=e.toLowerCase().split(/\s+/);else if("object"==typeof e&&e&&void 0===t)for(o in e)e.hasOwnProperty(o)&&"string"==typeof o&&o&&"function"==typeof e[o]&&this.on(o,e[o]);if(a&&a.length){for(o=0,l=a.length;o<l;o++)n[e=a[o].replace(/^on/,"")]=!0,r[e]||(r[e]=[]),r[e].push(t);if(n.ready&&d.ready&&P.emit({type:"ready",client:this}),n.error)for(var i=["disabled","outdated","unavailable","deactivated","overdue"],o=0,l=i.length;o<l;o++)if(d[i[o]]){P.emit({type:"error",name:"flash-"+i[o],client:this});break}}return this},P.prototype.off=function(e,t){var a,n,r,i,o,l=f[this.id]&&f[this.id].handlers;if(0===arguments.length)i=x(l);else if("string"==typeof e&&e)i=e.split(/\s+/);else if("object"==typeof e&&e&&void 0===t)for(a in e)e.hasOwnProperty(a)&&"string"==typeof a&&a&&"function"==typeof e[a]&&this.off(a,e[a]);if(i&&i.length)for(a=0,n=i.length;a<n;a++)if((o=l[e=i[a].toLowerCase().replace(/^on/,"")])&&o.length)if(t)for(r=v(t,o);-1!==r;)o.splice(r,1),r=v(t,o,r);else l[e].length=0;return this},P.prototype.handlers=function(e){var t,a=null,n=f[this.id]&&f[this.id].handlers;if(n){if("string"==typeof e&&e)return n[e]?n[e].slice(0):null;for(t in a={},n)n.hasOwnProperty(t)&&n[t]&&(a[t]=n[t].slice(0))}return a},P.prototype.clip=function(e){e=g(e);for(var t,a,n,r=0;r<e.length;r++)e.hasOwnProperty(r)&&e[r]&&1===e[r].nodeType&&(e[r].zcClippingId?-1===v(this.id,h[e[r].zcClippingId])&&h[e[r].zcClippingId].push(this.id):(e[r].zcClippingId="zcClippingId_"+i++,h[e[r].zcClippingId]=[this.id],!0===j.autoActivate&&(t=e[r],a="mouseover",n=y,t)&&1===t.nodeType&&(t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent&&t.attachEvent("on"+a,n))),t=f[this.id].elements,-1===v(e[r],t))&&t.push(e[r]);return this},P.prototype.unclip=function(e){var t=f[this.id];if(t)for(var a,n,r,i,o=t.elements,l=(e=void 0===e?o.slice(0):g(e)).length;l--;)if(e.hasOwnProperty(l)&&e[l]&&1===e[l].nodeType){for(a=0;-1!==(a=v(e[l],o,a));)o.splice(a,1);var s=h[e[l].zcClippingId];if(s){for(a=0;-1!==(a=v(this.id,s,a));)s.splice(a,1);0===s.length&&(!0===j.autoActivate&&(n=e[l],r="mouseover",i=y,n)&&1===n.nodeType&&(n.removeEventListener?n.removeEventListener(r,i,!1):n.detachEvent&&n.detachEvent("on"+r,i)),delete e[l].zcClippingId)}}return this},P.prototype.elements=function(){var e=f[this.id];return e&&e.elements?e.elements.slice(0):[]},function(e){var t,a,n,r,i=[];if(e&&1===e.nodeType&&(e=e.zcClippingId)&&h.hasOwnProperty(e)&&(t=h[e])&&t.length)for(a=0,n=t.length;a<n;a++)(r=f[t[a]].instance)&&r instanceof P&&i.push(r);return i});j.hoverClass="zeroclipboard-is-hover",j.activeClass="zeroclipboard-is-active","function"==typeof define&&define.amd?define(function(){return P}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=P:c.ZeroClipboard=P}(function(){return this}());