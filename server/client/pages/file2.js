;(function(){
'use strict';

module.exports = {
    data: function data() {
        return {
            msg: 'Hello world!'
        };
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{staticClass:"red"},[_vm._v(_vm._s(_vm.msg))])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-ac8be376"