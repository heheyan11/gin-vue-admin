/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var r,e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(r){f=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof m?r:m,i=Object.create(o.prototype),u=new C(n||[]);return a(i,"_invoke",{value:I(t,e,u)}),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",p="suspendedYield",d="executing",v="completed",g={};function m(){}function w(){}function b(){}var E={};f(E,u,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(N([])));j&&j!==n&&o.call(j,u)&&(E=j);var A=b.prototype=m.prototype=Object.create(E);function L(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(n,a,i,u){var c=s(t[n],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,u)}),(function(t){e("throw",t,i,u)})):r.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return e("throw",t,i,u)}))}u(c.arg)}var n;a(this,"_invoke",{value:function(t,o){function a(){return new r((function(r,n){e(t,o,r,n)}))}return n=n?n.then(a,a):a()}})}function I(t,e,n){var o=y;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=B(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=s(t,e,n);if("normal"===l.type){if(o=n.done?v:p,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function B(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,B(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=s(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t||""===t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return w.prototype=b,a(A,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return{__await:t}},L(_.prototype),f(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(A),f(A,l,"Generator"),f(A,u,(function(){return this})),f(A,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},e}function r(t,r,e,n,o,a,i){try{var u=t[a](i),c=u.value}catch(l){return void e(l)}u.done?r(c):Promise.resolve(c).then(n,o)}function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0checkbox-group-legacy.js","./087AC4D233B64EB0checkbox-legacy.js","./087AC4D233B64EB0button-legacy.js","./087AC4D233B64EB0authority-legacy2.js","./087AC4D233B64EB0warningBar-legacy.js","./087AC4D233B64EB0isEqual-legacy.js","./087AC4D233B64EB0_Uint8Array-legacy.js","./087AC4D233B64EB0hasIn-legacy.js","./087AC4D233B64EB0icon-legacy2.js"],(function(n,o){"use strict";var a,i,u,c,l,f,h,s,y,p,d,v,g,m,w,b,E;return{setters:[function(t){a=t.a,i=t.o,u=t.c,c=t.d,l=t.b,f=t.w,h=t.g,s=t.M,y=t.N,p=t.h,d=t.t,v=t.k,g=t.E},null,function(t){m=t.E,w=t.a},null,function(t){b=t.s},function(t){E=t._},null,null,null,null],execute:function(){var o={class:"sticky top-0.5 z-10 bg-white my-4"},x={class:"clear-both pt-4"};n("default",Object.assign({name:"Datas"},{__name:"datas",props:{row:{default:function(){return{}},type:Object},authority:{default:function(){return[]},type:Array}},emits:["changeRow"],setup:function(n,j){var A=j.expose,L=j.emit,_=n,I=a([]),B=a(!1),O=function t(r){r&&r.forEach((function(r){var e={};e.authorityId=r.authorityId,e.authorityName=r.authorityName,I.value.push(e),r.children&&r.children.length&&t(r.children)}))},k=a([]);O(_.authority),_.row.dataAuthorityId&&_.row.dataAuthorityId.forEach((function(t){var r=I.value&&I.value.filter((function(r){return r.authorityId===t.authorityId}))&&I.value.filter((function(r){return r.authorityId===t.authorityId}))[0];k.value.push(r)}));var C=L,N=function(){k.value=e(I.value),C("changeRow","dataAuthorityId",k.value),B.value=!0},S=function(){k.value=I.value.filter((function(t){return t.authorityId===_.row.authorityId})),C("changeRow","dataAuthorityId",k.value),B.value=!0},D=function(){var t=[];P(_.row,t),k.value=I.value.filter((function(r){return t.indexOf(r.authorityId)>-1})),C("changeRow","dataAuthorityId",k.value),B.value=!0},P=function t(r,e){e.push(r.authorityId),r.children&&r.children.forEach((function(r){t(r,e)}))},G=function(){var e,n=(e=t().mark((function r(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(_.row);case 2:0===t.sent.code&&v({type:"success",message:"资源设置成功"});case 4:case"end":return t.stop()}}),r)})),function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function u(t){r(i,o,a,u,c,"next",t)}function c(t){r(i,o,a,u,c,"throw",t)}u(void 0)}))});return function(){return n.apply(this,arguments)}}(),T=function(){C("changeRow","dataAuthorityId",k.value),B.value=!0};return A({enterAndNext:function(){G()},needConfirm:B}),function(t,r){var e=g,n=m,a=w;return i(),u("div",null,[c(E,{title:"此功能仅用于创建角色和角色的many2many关系表，具体使用还须自己结合表实现业务，详情参考示例代码（客户示例）。此功能不建议使用，建议使用插件市场【组织管理功能（点击前往）】来管理资源权限。",href:"https://plugin.gin-vue-admin.com/#/layout/newPluginInfo?id=36"}),l("div",o,[c(e,{class:"float-left",type:"primary",onClick:N},{default:f((function(){return[h("全选")]})),_:1}),c(e,{class:"float-left",type:"primary",onClick:S},{default:f((function(){return[h("本角色")]})),_:1}),c(e,{class:"float-left",type:"primary",onClick:D},{default:f((function(){return[h("本角色及子角色")]})),_:1}),c(e,{class:"float-right",type:"primary",onClick:G},{default:f((function(){return[h("确 定")]})),_:1})]),l("div",x,[c(a,{modelValue:k.value,"onUpdate:modelValue":r[0]||(r[0]=function(t){return k.value=t}),onChange:T},{default:f((function(){return[(i(!0),u(s,null,y(I.value,(function(t,r){return i(),p(n,{key:r,label:t},{default:f((function(){return[h(d(t.authorityName),1)]})),_:2},1032,["label"])})),128))]})),_:1},8,["modelValue"])])])}}}))}}}))}();
