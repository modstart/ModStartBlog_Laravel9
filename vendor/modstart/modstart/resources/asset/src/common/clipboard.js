var Clipboard = require('./../vendor/clipboard/clipboard.js');

$(function () {
    var clipboard = new Clipboard('[data-clipboard-text]')
    clipboard.on('success', function (e) {
        window.api.dialog.tipSuccess('ε€εΆζε')
    })
})

if (!('api' in window)) {
    window.api = {}
}
window.api.clipboard = Clipboard

if (!('MS' in window)) {
    window.MS = {}
}
window.MS.clipboard = Clipboard
