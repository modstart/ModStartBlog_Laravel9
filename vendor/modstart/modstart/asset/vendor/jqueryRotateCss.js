!function(r){function o(t){var a=t.data("_ARS_data");return a||t.data("_ARS_data",a={rotateUnits:"deg",scale:1,rotate:0}),a}function n(t,a){t.css("transform","rotate("+a.rotate+a.rotateUnits+") scale("+a.scale+","+a.scale+")")}r.fn.rotate=function(t){var a=r(this),e=o(a);return void 0===t?e.rotate+e.rotateUnits:((t=t.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/))&&(t[3]&&(e.rotateUnits=t[3]),e.rotate=t[1],n(a,e)),this)},r.fn.scale=function(t){var a=r(this),e=o(a);return void 0===t?e.scale:(e.scale=t,n(a,e),this)};var t=r.fx.prototype.cur,e=(r.fx.prototype.cur=function(){return"rotate"==this.prop?parseFloat(r(this.elem).rotate()):"scale"==this.prop?parseFloat(r(this.elem).scale()):t.apply(this,arguments)},r.fx.step.rotate=function(t){var a=o(r(t.elem));r(t.elem).rotate(t.now+a.rotateUnits)},r.fx.step.scale=function(t){r(t.elem).scale(t.now)},r.fn.animate);r.fn.animate=function(t){var a;return void 0!==t.rotate&&((a=t.rotate.toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/))&&a[5]&&(o(r(this)).rotateUnits=a[5]),t.rotate=a[1]),e.apply(this,arguments)}}(jQuery);