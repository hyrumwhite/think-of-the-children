window.ThinkOfTheChildren=function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n){e.exports=function(e){var n;return n=e.component,e.component=function(r,t){return t.components&&function(n){var r=n.components;for(var t in r){var o=r[t];t=t[0].toLowerCase()+t.slice(1),e.component(t,o)}}(t),t.directives&&function(n){var r=n.directives;for(var t in r){var o=r[t];t=t[0].toLowerCase()+t.slice(1),e.directive(t,o)}}(t),r=r[0].toLowerCase()+r.slice(1),n(r,t),e},e}}]);