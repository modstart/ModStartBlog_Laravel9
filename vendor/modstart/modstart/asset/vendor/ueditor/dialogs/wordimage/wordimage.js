var flashObj,flashContainer,wordImage={},g=$G;function addUploadButtonListener(){g("saveFile").addEventListener("change",function(){var e;1===this.files.length?($(".image-tip").html("正在转存，请稍后..."),e=this.files[0],uploader.addFile(e),uploader.upload()):alert("请选择1个文件")})}function addOkListener(){dialog.onok=function(){if(imageUrls.length){var e=editor.getOpt("imageUrlPrefix"),t=domUtils.getElementsByTagName(editor.document,"img");editor.fireEvent("saveScene");for(var a,i=0;a=t[i++];){var n=a.getAttribute("data-word-image");if(n)for(var o,r=0;o=imageUrls[r++];)if(-1!=n.indexOf(o.name.replace(" ",""))){a.src=e+o.url,a.setAttribute("_src",e+o.url),a.setAttribute("title",o.title),domUtils.removeAttributes(a,["data-word-image","style","width","height"]),editor.fireEvent("selectionchange");break}}editor.fireEvent("saveScene")}},dialog.oncancel=function(){}}function showLocalPath(e){var t,a=editor.selection.getRange().getClosedNode(),i=editor.execCommand("wordimage");1==i.length||a&&"IMG"==a.tagName?g(e).value=i[0]:(a=(t=i[0]).lastIndexOf("/")||0,i=t.lastIndexOf("\\")||0,t=t.substring(0,t.lastIndexOf(i<a?"/":"\\")+1),g(e).value=t)}function createCopyButton(e,t){t=g(t).value;t.startsWith("file:////")&&(t=t.substring(8)),t=decodeURI(t),g(e).setAttribute("data-clipboard-text",t),new Clipboard("[data-clipboard-text]").on("success",function(e){g("copyButton").innerHTML="复制成功"})}wordImage.init=function(e,t){showLocalPath("fileUrl"),createCopyButton("copyButton","fileUrl"),addUploadButtonListener(),addOkListener()};