/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
!function(){function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),u=new B(n||[]);return a(i,"_invoke",{value:L(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",d="suspendedYield",m="executing",y="completed",g={};function v(){}function b(){}function w(){}var x={};f(x,u,(function(){return this}));var E=Object.getPrototypeOf,O=E&&E(E(V([])));O&&O!==r&&o.call(O,u)&&(x=O);var j=w.prototype=v.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function D(t,e){function r(n,a,i,u){var l=p(t[n],t,a);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"==typeof f&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,u)}))}u(l.arg)}var n;a(this,"_invoke",{value:function(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}})}function L(e,r,n){var o=h;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var l=C(u,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var c=p(e,r,n);if("normal"===c.type){if(o=n.done?y:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=y,n.method="throw",n.arg=c.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function V(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=w,a(j,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:b,configurable:!0}),b.displayName=f(w,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},_(D.prototype),f(D.prototype,l,(function(){return this})),e.AsyncIterator=D,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new D(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(j),f(j,c,"Generator"),f(j,u,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=V,B.prototype={constructor:B,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:V(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function o(t,e,r,n,o,a,i){try{var u=t[a](i),l=u.value}catch(c){return void r(c)}u.done?e(l):Promise.resolve(l).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function u(t){o(i,n,a,u,l,"next",t)}function l(t){o(i,n,a,u,l,"throw",t)}u(void 0)}))}}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0form-item-legacy.js","./087AC4D233B64EB0button-legacy.js","./087AC4D233B64EB0input-legacy.js","./087AC4D233B64EB0_plugin-vue_export-helper-legacy.js","./087AC4D233B64EB0castArray-legacy.js","./087AC4D233B64EB0_baseClone-legacy.js","./087AC4D233B64EB0_Uint8Array-legacy.js","./087AC4D233B64EB0_initCloneObject-legacy.js"],(function(t,r){"use strict";var o,i,u,l,c,f,s,p,h,d,m,y,g,v,b,w,x,E;return{setters:[function(t){o=t.v,i=t.x,u=t.r,l=t.R,c=t.aJ,f=t.o,s=t.c,p=t.b,h=t.d,d=t.w,m=t.g,y=t.ak,g=t.l,v=t.E,b=t.k},function(t){w=t.a,x=t.E},null,null,function(t){E=t._},null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".plug-row[data-v-be215c72]{display:flex;width:100%;align-items:center}.plug-row+.plug-row[data-v-be215c72]{margin-top:.75rem}.plug-row>span[data-v-be215c72]{margin-left:.5rem}\n",document.head.appendChild(r);var O=function(){var t=a(n().mark((function t(e){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({url:"/config/config",method:"get"});case 2:0==(r=t.sent).code&&(e.formData=r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=a(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r=e.formData,o({url:"/config/config",method:"put",data:r});case 2:0==t.sent.code&&b({type:"success",message:"更改成功"});case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}(),_=i({components:{},props:{},setup:function(){var t=u({formData:{spotNum:"",swapNum:"",planOrderRate:"",topRate:"",topCallRate:"",levers:""},rules:{spotNum:[{pattern:/^\d+(\.\d+)?$/,trigger:["blur","change"],message:"请输入数字"}],swapNum:[{pattern:/^\d+(\.\d+)?$/,trigger:["blur","change"],message:"请输入数字"}],planOrderRate:[{pattern:/^\d+(\.\d+)?$/,trigger:["blur","change"],message:"请输入数字"}],topRate:[{pattern:/^\d+(\.\d+)?$/,trigger:["blur","change"],message:"请输入数字"}],topCallRate:[{pattern:/^\d+(\.\d+)?$/,trigger:["blur","change"],message:"请输入数字"}],levers:[{pattern:/^\d+(\.\d+)?$/,trigger:["blur","change"],message:"请输入数字"}]}});l((function(){O(t)}));return e(e({},c(t)),{},{submitForm:function(){j(t)}})}}),D={class:"gva-table-box"};t("default",E(_,[["render",function(t,e,r,n,o,a){var i=g,u=w,l=v,c=x;return f(),s("div",null,[p("div",D,[h(c,{"label-width":"140px",class:"w-[680px]",model:t.formData,ref:"vForm",rules:t.rules,"label-position":"left",size:"medium",onSubmit:e[6]||(e[6]=y((function(){}),["prevent"]))},{default:d((function(){return[h(u,{label:"币币下单数量U","label-width":"130px",prop:"spotNum"},{default:d((function(){return[h(i,{modelValue:t.formData.spotNum,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.formData.spotNum=e}),type:"text",clearable:""},null,8,["modelValue"])]})),_:1}),h(u,{label:"永续下单数量U","label-width":"130px",prop:"swapNum"},{default:d((function(){return[h(i,{modelValue:t.formData.swapNum,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.formData.swapNum=e}),type:"text",clearable:""},null,8,["modelValue"])]})),_:1}),h(u,{label:"开始下单系数","label-width":"130px",prop:"planOrderRate"},{default:d((function(){return[h(i,{modelValue:t.formData.planOrderRate,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.formData.planOrderRate=e}),type:"text",clearable:""},null,8,["modelValue"])]})),_:1}),h(u,{label:"开始止盈系数","label-width":"130px",prop:"topRate"},{default:d((function(){return[h(i,{modelValue:t.formData.topRate,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.formData.topRate=e}),type:"text",clearable:""},null,8,["modelValue"])]})),_:1}),h(u,{label:"止盈回调系数","label-width":"130px",prop:"topCallRate"},{default:d((function(){return[h(i,{modelValue:t.formData.topCallRate,"onUpdate:modelValue":e[4]||(e[4]=function(e){return t.formData.topCallRate=e}),type:"text",clearable:""},null,8,["modelValue"])]})),_:1}),h(u,{label:"杠杆倍数","label-width":"130px",prop:"levers"},{default:d((function(){return[h(i,{modelValue:t.formData.levers,"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.formData.levers=e}),type:"text",clearable:""},null,8,["modelValue"])]})),_:1}),h(u,null,{default:d((function(){return[h(l,{type:"primary",onClick:t.submitForm},{default:d((function(){return[m("保存")]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model","rules"])])])}],["__scopeId","data-v-be215c72"]]))}}}))}();
