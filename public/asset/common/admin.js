!function(e){var n={};function i(t){var a;return(n[t]||(a=n[t]={i:t,l:!1,exports:{}},e[t].call(a.exports,a,a.exports,i),a.l=!0,a)).exports}i.m=e,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(a,t){if(1&t&&(a=i(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var n in a)i.d(e,n,function(t){return a[t]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/asset//",i(i.s=320)}({320:function(t,a,e){!function(c){window._rootWindow=MS.util.getRootWindow(),window._pageTabManager={closeFromTab:function(){var t;window!=parent.window&&(t=window.frameElement.getAttribute("data-tab-page"),window.parent._pageTabManager.close(t))},updateTitleFromTab:function(t){var a;t&&window!=parent.window&&(a=window.frameElement.getAttribute("data-tab-page"),window.parent._pageTabManager.updateTitle(a,t))},activeUrl:function(t){var n=_rootWindow.$(".ub-panel-frame .left .menu"),i=_rootWindow._pageTabManager.normalTabUrl(t);n.find("a").each(function(t,a){var e=c(a).attr("href");if("javascript:;"!==e&&_rootWindow._pageTabManager.normalTabUrl(e)===i){c(a).parents(".children").prev().addClass("open"),n.find(".menu-item").removeClass("active"),c(a).closest(".menu-item").addClass("active");try{a.scrollIntoView({block:"center",behavior:"smooth"})}catch(t){}}})}},c(window).on("load",function(){c(".ub-panel-frame > .right > .content.fixed, .ub-panel-dialog .panel-dialog-body").scroll(function(){var t=document.createEvent("HTMLEvents");t.initEvent("scroll",!1,!0),window.dispatchEvent(t)});var e,n,t=c(window).width()<600,a=c(".ub-panel-frame"),i=(t?(a.find(".left-menu-shrink").on("click",function(){a.removeClass("left-toggle")}),a.find(".left-trigger").on("click",function(){a.addClass("left-toggle")})):a.find(".left-trigger").on("click",function(){a.toggleClass("left-toggle"),window.api.base.postSuccess(window.__msAdminRoot+"util/frame",{frameLeftToggle:a.is(".left-toggle")},function(t){})}),a.find(".left .logo").on("click",function(){return c(i.find("a")[0]).click(),!1}),a.find(".left .menu")),r=null,o=a.find("#menuSearchKeywords"),d=(o.on("keyup",function(){var t=c(this).val();r&&clearTimeout(r),r=setTimeout(function(){var r;(r=c.trim(t))?(i.find(".title").addClass("open"),i.find("[data-keywords-filter]").attr("data-keywords-filter","hide"),i.find("[data-keywords-item]").attr("data-keywords-item","hide"),i.find("[data-keywords-filter]").each(function(t,a){var e=c(a).text().trim(),n=PinyinMatch.match(e,r),i=e;!1!==n&&(n=n,i=(e=e).substring(0,n[0])+"<mark>"+e.substring(n[0],n[1]+1)+"</mark>"+e.substring(n[1]+1),c(a).attr("data-keywords-filter","show"),c(a).attr("data-keywords-item","show")),c(a).find("span").html(i)}),i.find(">.menu-item>.children>.menu-item>.children").each(function(t,a){0<c(a).find("[data-keywords-filter=show]").length&&c(a).attr("data-keywords-item","show").prev().attr("data-keywords-item","show")}),i.find(">.menu-item>.children").each(function(t,a){0<c(a).find("[data-keywords-filter=show]").length&&c(a).attr("data-keywords-item","show").prev().attr("data-keywords-item","show")}),i.find("[data-keywords-filter=show][data-menu-title]").each(function(t,a){a=c(a).next();a.attr("data-keywords-item","show"),a.find("[data-keywords-filter]").attr("data-keywords-filter","show").attr("data-keywords-item","show")})):(i.find("[data-keywords-filter]").attr("data-keywords-filter","show"),i.find("[data-keywords-item]").attr("data-keywords-item","show"),i.find("[data-keywords-filter]").each(function(t,a){var e=c(a).text().trim();c(a).find("span").html(e)}))},200)}),o.val()&&o.trigger("keyup"),a.find("#adminTabPage")),s=a.find("#adminTabMenu"),l=a.find("#adminMainPage"),o=a.find("#adminTabRefresh");c("html").is("[page-tabs-enable]")&&!t?(e={draging:!1,scrollLeftStart:0,startX:0,startY:0,isDragged:!1},s.on("mousedown",function(t){e.draging=!0,e.scrollLeftStart=s.scrollLeft(),e.startX=t.pageX,e.startY=t.pageY,e.isDragged=!1}),s.on("mousemove",function(t){var a;e.draging&&(10<(a=t.pageX-e.startX)*a+(t=t.pageY-e.startY)*t&&(e.isDragged=!0),s.scrollLeft(e.scrollLeftStart-a))}),s.on("mouseup",function(t){e.draging=!1}),s.on("mouseleave",function(t){e.draging=!1}),n=Object.assign(window._pageTabManager,{data:[],id:1,runsOnFocus:[],normalTabUrl(t){if(0<t.indexOf("_is_tab=1"))return t;let a=(t=new URL(t,document.baseURI).href).split("#"),e=a[0];return(e=(e=e.replace(/\/$/,""))+(-1<e.indexOf("?")?"&":"?")+"_is_tab=1")+(a[1]?"#"+a[1]:"")},getIndexById:function(t){t=parseInt(t);for(var a=0;a<this.data.length;a++)if(this.data[a].id==t)return a;return null},getById:function(t){t=this.getIndexById(t);return null===t?null:this.data[t]},getByUrl:function(t){t=this.normalTabUrl(t);for(var a=0;a<this.data.length;a++)if(this.data[a].url==t)return this.data[a];return null},close:function(t){var a,e=this.getIndexById(t);null!==e&&(a=this.data[e],d.find("[data-tab-page="+t+"]").remove(),s.find("[data-tab-menu="+t+"]").remove(),a.active&&(0<e?this.active(this.data[e-1].id):e<this.data.length-1?this.active(this.data[e+1].id):this.active(0)),this.data.splice(e,1),this.updateMainPage())},updateMainPage:function(){var t=0<this.data.filter(t=>t.active).length;l.toggleClass("hidden",t),d.toggleClass("hidden",!t),i.find(".menu-item.page-main").toggleClass("active",!t)},activeId:function(){for(var t=0;t<this.data.length;t++)if(this.data[t].active)return this.data[t].id;return null},activeByUrl:function(t){t=this.getByUrl(t);t&&this.active(t.id)},refresh:function(){var t=this.activeId();(t?d.find("iframe[data-tab-page="+t+"]")[0].contentWindow:window).location.reload()},active:function(t){if(t){d.find("iframe").addClass("hidden").filter("[data-tab-page="+t+"]").removeClass("hidden"),s.find("a").removeClass("active").filter("[data-tab-menu="+t+"]").addClass("active");var a=s.find("[data-tab-menu="+t+"]");try{a[0].scrollIntoView({block:"center",behavior:"smooth"})}catch(t){}for(i=0;i<this.data.length;i++){var e=this.data[i].id==t;this.data[i].active!==e&&(e?this.data[i].option.focus():this.data[i].option.blur()),this.data[i].active=e}for(var n=d.find("iframe:not(.hidden)"),i=0;i<n.length;i++){var r=n[i];if(r.contentWindow&&r.contentWindow._pageTabManager&&r.contentWindow._pageTabManager.runsOnFocus){for(var o=0;o<r.contentWindow._pageTabManager.runsOnFocus.length;o++)(0,r.contentWindow._pageTabManager.runsOnFocus[o])();r.contentWindow._pageTabManager.runsOnFocus=[]}}}else{d.find("iframe").addClass("hidden"),s.find("a").removeClass("active"),a=s.find("[data-tab-menu-main]").addClass("active");try{a[0].scrollIntoView({block:"center",behavior:"smooth"})}catch(t){}for(var i=0;i<this.data.length;i++)this.data[i].active&&this.data[i].option.blur(),this.data[i].active=!1}this.updateMainPage()},open:function(t,a,e){var n;e=Object.assign({focus:function(){},blur:function(){}},e),t=this.normalTabUrl(t),this.normalTabUrl(window.location.href)!==t?(n=this.getByUrl(t))?this.active(n.id):(d.append(`<iframe src="${t}" class="hidden" frameborder="0" data-tab-page="${this.id}"></iframe>`),s.append(`<a href="javascript:;" data-tab-menu="${this.id}" draggable="false">${a}<i class="close iconfont icon-close"></i></a>`),this.data.push({url:t,title:a,id:this.id,active:!1,option:e}),this.active(this.id),this.id++):this.active(0)},updateTitle:function(t,a){s.find("[data-tab-menu="+t+"]").html(a+'<i class="close iconfont icon-close"></i>')}}),i.find("a").on("click",function(){var t=c(this);if(!t.is("[data-tab-menu-ignore]")){var a,e=t.attr("href");if(!["javascript:;"].includes(e))return a=c.trim(t.text()),n.open(e,a,{focus:function(){t.closest(".ub-panel-frame").find(".menu-item").removeClass("active"),t.parent().addClass("active")},blur:function(){t.parent().removeClass("active")}}),!1}}),s.on("click","[data-tab-menu-main]",function(){if(!e.isDragged)return n.active(null),!1}),s.on("click","[data-tab-menu]",function(){e.isDragged||n.active(c(this).attr("data-tab-menu"))}),s.on("click","[data-tab-menu] i.close",function(){return n.close(c(this).parent().attr("data-tab-menu")),!1}),o.on("click",function(){return n.refresh(),!1}),c(document).on("click","[data-tab-open]",function(){let a=c(this).attr("href");if(!["javascript:;"].includes(a)){let t=c(this).attr("data-tab-title");return t=t||c(this).text(),_rootWindow._pageTabManager.open(a,t,{focus:function(){n.activeUrl(a)}}),!1}}),window._pageTabManager=n):o.remove(),a.find("#fullScreenTrigger").on("click",function(){return MS.util.fullscreen.trigger(),!1})})}.call(this,e(8))},8:function(t,a){t.exports=window.$}});