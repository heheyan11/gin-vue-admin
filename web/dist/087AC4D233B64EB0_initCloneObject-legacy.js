/*! 
 Build based on gin-vue-admin 
 Time : 1699796219000 */
System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0_Uint8Array-legacy.js"],(function(t,r){"use strict";var n,e,o,u,c,f,i,a,s;return{setters:[function(t){n=t.ba,e=t.b$,o=t.bN,u=t.bR},function(t){c=t.h,f=t.j,i=t.l,a=t.o,s=t.U}],execute:function(){t({a:O,b:function(t,r){var n=r?O(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},c:function(t,r,n,u){var c=!n;n||(n={});for(var f=-1,i=r.length;++f<i;){var a=r[f],s=u?u(n[a],t[a],a,n,t):void 0;void 0===s&&(s=t[a]),c?e(n,a,s):o(n,a,s)}return n},d:function(t,r){var n=-1,e=t.length;for(r||(r=Array(e));++n<e;)r[n]=t[n];return r},e:function(t,r){if(r)return t.slice();var n=t.length,e=h?h(n):new t.constructor(n);return t.copy(e),e},i:function(t){return"function"!=typeof t.constructor||c(t)?{}:y(l(t))},k:function(t){return f(t)?i(t,!0):function(t){if(!n(t))return function(t){var r=[];if(null!=t)for(var n in Object(t))r.push(n);return r}(t);var r=c(t),e=[];for(var o in t)("constructor"!=o||!r&&p.call(t,o))&&e.push(o);return e}(t)}});var v=Object.create,y=function(){function t(){}return function(r){if(!n(r))return{};if(v)return v(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}(),p=Object.prototype.hasOwnProperty,b=a(Object.getPrototypeOf,Object),l=t("g",b),g="object"==typeof t&&t&&!t.nodeType&&t,j=g&&"object"==typeof r&&r&&!r.nodeType&&r,d=j&&j.exports===g?u.Buffer:void 0,h=d?d.allocUnsafe:void 0;function O(t){var r=new t.constructor(t.byteLength);return new s(r).set(new s(t)),r}}}}));
