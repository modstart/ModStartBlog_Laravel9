!function(){var n,U=[],o=!1,t={};function s(e,t){for(var a,i,o=$G(e).children,r=0;i=o[r++];)if("focus"==i.className){a=i.getAttribute(t);break}return a}function r(e){var t;e&&($G("preview").innerHTML='<div class="previewMsg"><span>'+lang.urlError+'</span></div><div style="position: absolute; inset: 0; background: #FFF; text-align: center; display: flex; justify-items: center; align-items: center;"><div style="text-align:center;flex-grow:1;">'+["<audio",(t=t||{}).id?' id="'+t.id+'"':"",t.cls?' class="'+t.cls+'"':""," controls >",'<source src="'+e+'" type="audio/mpeg" />',"</audio>"].join("")+"</div></div>")}function e(e){this.$wrap=e.constructor==String?$("#"+e):$(e),this.init()}window.onload=function(){t=editor.getOpt("audioConfig"),$focus($G("audioUrl")),function(){for(var o=$G("tabHeads").children,e=0;e<o.length;e++)domUtils.on(o[e],"click",function(e){for(var t,a=e.target||e.srcElement,i=0;i<o.length;i++)t=o[i].getAttribute("data-content-id"),o[i]==a?(domUtils.addClass(o[i],"focus"),domUtils.addClass($G(t),"focus")):(domUtils.removeClasses(o[i],"focus"),domUtils.removeClasses($G(t),"focus"))});t.disableUpload||($G("tabHeads").querySelector('[data-content-id="upload"]').style.display="inline-block");t.selectCallback&&($G("audioSelect").style.display="inline-block",domUtils.on($G("audioSelect"),"click",function(e){t.selectCallback(editor,function(e){e&&($G("audioUrl").value=e.path,r(e.path))})}))}(),function(e){for(var t,a=0;t=e[a++];){var i,o=$G(t),r={none:lang.default,left:lang.floatLeft,right:lang.floatRight,center:lang.block};for(i in r){var n=document.createElement("div");n.setAttribute("name",i),"none"==i&&(n.className="focus"),n.style.cssText="background:url(images/"+i+"_focus.jpg);",n.setAttribute("title",r[i]),o.appendChild(n)}!function(e){for(var t,a=$G(e).children,i=0;t=a[i++];)domUtils.on(t,"click",function(){for(var e,t=0;e=a[t++];)e.className="",e.removeAttribute&&e.removeAttribute("class");this.className="focus"})}(t)}}(["audioFloat","upload_alignment"]),function(e){browser.ie?e.onpropertychange=function(){r(this.value)}:e.addEventListener("input",function(){r(this.value)},!1)}($G("audioUrl")),dialog.onok=function(){switch($G("preview").innerHTML="",s("tabHeads","tabSrc")){case"audio":return function(){var e=$G("audioUrl").value;s("audioFloat","name");if(!e)return!1;editor.execCommand("insertaudio",{url:e},o?"upload":null)}();case"upload":return function(){var e,t=[],a=editor.getOpt("audioUrlPrefix"),i=s("upload_alignment","name")||"none";for(e in U){var o=U[e];t.push({url:a+o.url,align:i})}var r=n.getQueueCount();{if(r)return $(".info","#queueList").html('<span style="color:red;">'+"还有2个未上传文件".replace(/[\d]/,r)+"</span>"),!1;editor.execCommand("insertaudio",t,"upload")}}()}},dialog.oncancel=function(){$G("preview").innerHTML=""},function(){var e,t,a,i=editor.selection.getRange().getClosedNode();i&&i.className&&(a="edui-faked-audio"==i.className,t=-1!=i.className.indexOf("edui-upload-audio"),(a||t)&&($G("audioUrl").value=e=i.getAttribute("_url"),a=domUtils.getComputedStyle(i,"float"),function(e){for(var t,a=$G("audioFloat").children,i=0;t=a[i++];)t.getAttribute("name")==e?"focus"!=t.className&&(t.className="focus"):"focus"==t.className&&(t.className="")}("center"===domUtils.getComputedStyle(i.parentNode,"text-align")?"center":a)),t&&(o=!0)),r(e)}(),n=new e("queueList")},e.prototype={init:function(){this.fileList=[],this.initContainer(),this.initUploader()},initContainer:function(){this.$queue=this.$wrap.find(".filelist")},initUploader:function(){var d,a=this,u=jQuery,e=a.$wrap,i=e.find(".filelist"),o=e.find(".statusBar"),r=o.find(".info"),n=e.find(".uploadBtn"),t=(e.find(".filePickerBtn"),e.find(".filePickerBlock")),s=e.find(".placeholder"),l=o.find(".progress").hide(),c=0,p=0,f=window.devicePixelRatio||1,g=113*f,m=113*f,h="",v={},b=(f="transition"in(e=document.createElement("p").style)||"WebkitTransition"in e||"MozTransition"in e||"msTransition"in e||"OTransition"in e,e=null,f),w=editor.getActionUrl(editor.getOpt("audioActionName")),f=editor.getOpt("audioMaxSize"),x=(editor.getOpt("audioAllowFiles")||[]).join("").replace(/\./g,",").replace(/^[,]/,"");function C(a){function i(e){switch(e){case"exceed_size":text=lang.errorExceedSize;break;case"interrupt":text=lang.errorInterrupt;break;case"http":text=lang.errorHttp;break;case"not_allow_type":text=lang.errorFileType;break;default:text=lang.errorUploadRetry}l.text(text).show()}var o=u('<li id="'+a.id+'"><p class="title">'+a.name+'</p><p class="imgWrap"></p><p class="progress"><span></span></p></li>'),r=u('<div class="file-panel"><span class="cancel">'+lang.uploadDelete+'</span><span class="rotateRight">'+lang.uploadTurnRight+'</span><span class="rotateLeft">'+lang.uploadTurnLeft+"</span></div>").appendTo(o),n=o.find("p.progress span"),s=o.find("p.imgWrap"),l=u('<p class="error"></p>').hide().appendTo(o);"invalid"===a.getStatus()?i(a.statusText):(s.text(lang.uploadPreview),-1=="|png|jpg|jpeg|bmp|gif|".indexOf("|"+a.ext.toLowerCase()+"|")?s.empty().addClass("notimage").append('<i class="file-preview file-type-'+a.ext.toLowerCase()+'"></i><span class="file-title">'+a.name+"</span>"):browser.ie&&browser.version<=7?s.text(lang.uploadNoPreview):d.makeThumb(a,function(e,t){e||!t||/^data:/.test(t)&&browser.ie&&browser.version<=7?s.text(lang.uploadNoPreview):(t=u('<img src="'+t+'">'),s.empty().append(t),t.on("error",function(){s.text(lang.uploadNoPreview)}))},g,m),v[a.id]=[a.size,0],a.rotation=0,a.ext&&-1!=x.indexOf(a.ext.toLowerCase())||(i("not_allow_type"),d.removeFile(a))),a.on("statuschange",function(e,t){"progress"===t?n.hide().width(0):"queued"===t&&(o.off("mouseenter mouseleave"),r.remove()),"error"===e||"invalid"===e?(i(a.statusText),v[a.id][1]=1):"interrupt"===e?i("interrupt"):"queued"===e?v[a.id][1]=0:"progress"===e&&(l.hide(),n.css("display","block")),o.removeClass("state-"+t).addClass("state-"+e)}),o.on("mouseenter",function(){r.stop().animate({height:30})}),o.on("mouseleave",function(){r.stop().animate({height:0})}),r.on("click","span",function(){var e;switch(u(this).index()){case 0:return void d.removeFile(a);case 1:a.rotation+=90;break;case 2:a.rotation-=90}b?(e="rotate("+a.rotation+"deg)",s.css({"-webkit-transform":e,"-mos-transform":e,"-o-transform":e,transform:e})):s.css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation="+~~(a.rotation/90%4+4)%4+")")}),o.insertBefore(t)}function y(){var e,a=0,i=0,t=l.children();u.each(v,function(e,t){i+=t[0],a+=t[0]*t[1]}),e=i?a/i:0,t.eq(0).text(Math.round(100*e)+"%"),t.eq(1).css("width",Math.round(100*e)+"%"),S()}function k(e){if(e!=h){var t=d.getStats();switch(n.removeClass("state-"+h),n.addClass("state-"+e),e){case"pedding":i.addClass("element-invisible"),o.addClass("element-invisible"),s.removeClass("element-invisible"),l.hide(),r.hide(),d.refresh();break;case"ready":s.addClass("element-invisible"),i.removeClass("element-invisible"),o.removeClass("element-invisible"),l.hide(),r.show(),n.text(lang.uploadStart),d.refresh();break;case"uploading":l.show(),r.hide(),n.text(lang.uploadPause);break;case"paused":l.show(),r.hide(),n.text(lang.uploadContinue);break;case"confirm":if(l.show(),r.hide(),n.text(lang.uploadStart),(t=d.getStats()).successNum&&!t.uploadFailNum)return void k("finish");break;case"finish":l.hide(),r.show(),t.uploadFailNum?n.text(lang.uploadRetry):n.text(lang.uploadStart)}h=e,S()}a.getQueueCount()?n.removeClass("disabled"):n.addClass("disabled")}function S(){var e,t="";"ready"===h?t=lang.updateStatusReady.replace("_",c).replace("_KB",WebUploader.formatSize(p)):"confirm"===h?(e=d.getStats()).uploadFailNum&&(t=lang.updateStatusConfirm.replace("_",e.successNum).replace("_",e.successNum)):(e=d.getStats(),t=lang.updateStatusFinish.replace("_",c).replace("_KB",WebUploader.formatSize(p)).replace("_",e.successNum),e.uploadFailNum&&(t+=lang.updateStatusError.replace("_",e.uploadFailNum))),r.html(t)}WebUploader.Uploader.support()?editor.getOpt("audioActionName")?(f={pick:{id:"#filePickerReady",label:lang.uploadSelectFile},swf:"../../third-party/webuploader/Uploader.swf",server:w,fileVal:editor.getOpt("audioFieldName"),duplicate:!0,fileSingleSizeLimit:f,headers:editor.getOpt("serverHeaders")||{},compress:!1},editor.getOpt("uploadServiceEnable")&&(f.customUpload=function(t,a){editor.getOpt("uploadServiceUpload")("audio",t,{success:function(e){a.onSuccess(t,{_raw:JSON.stringify(e)})},error:function(e){a.onError(t,e)},progress:function(e){a.onProgress(t,e)}},{from:"audio"})}),(d=a.uploader=WebUploader.create(f)).addButton({id:"#filePickerBlock"}),d.addButton({id:"#filePickerBtn",label:lang.uploadAddFile}),k("pedding"),d.on("fileQueued",function(e){c++,p+=e.size,1===c&&(s.addClass("element-invisible"),o.show()),C(e)}),d.on("fileDequeued",function(e){var t;c--,p-=e.size,e=u("#"+(t=e).id),delete v[t.id],y(),e.off().find(".file-panel").off().end().remove(),y()}),d.on("filesQueued",function(e){d.isInProgress()||"pedding"!=h&&"finish"!=h&&"confirm"!=h&&"ready"!=h||k("ready"),y()}),d.on("all",function(e,t){switch(e){case"uploadFinished":k("confirm");break;case"startUpload":var a=utils.serializeParam(editor.queryCommandValue("serverparam"))||"",a=utils.formatUrl(w+(-1==w.indexOf("?")?"?":"&")+"encode=utf-8&"+a);d.option("server",a),k("uploading");break;case"stopUpload":k("paused")}}),d.on("uploadBeforeSend",function(e,t,a){-1!=w.toLowerCase().indexOf("jsp")&&(a.X_Requested_With="XMLHttpRequest")}),d.on("uploadProgress",function(e,t){u("#"+e.id).find(".progress span").css("width",100*t+"%"),v[e.id][1]=t,y()}),d.on("uploadSuccess",function(t,e){t=u("#"+t.id);try{var a=e._raw||e,i=utils.str2json(a);"SUCCESS"==(i=editor.getOpt("serverResponsePrepare")(i)).state?(U.push({url:i.url,type:i.type,original:i.original}),t.append('<span class="success"></span>')):t.find(".error").text(i.state).show()}catch(e){t.find(".error").text(lang.errorServerUpload).show()}}),d.on("uploadError",function(e,t){}),d.on("error",function(e,t,a){"F_EXCEED_SIZE"===e?editor.getOpt("tipError")(lang.errorExceedSize+" "+(t/1024/1024).toFixed(1)+"MB"):console.log("error",e,t,a)}),d.on("uploadComplete",function(e,t){}),n.on("click",function(){return!u(this).hasClass("disabled")&&void("ready"===h||"paused"===h?d.upload():"uploading"===h&&d.stop())}),n.addClass("state-"+h),y()):u("#filePickerReady").after(u("<div>").html(lang.errorLoadConfig)).hide():u("#filePickerReady").after(u("<div>").html(lang.errorNotSupport)).hide()},getQueueCount:function(){for(var e,t=0,a=this.uploader.getFiles(),i=0;e=a[i++];)"queued"!=(e=e.getStatus())&&"uploading"!=e&&"progress"!=e||t++;return t},refresh:function(){this.uploader.refresh()}}}();