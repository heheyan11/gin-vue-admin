/*! 
 Build based on gin-vue-admin 
 Time : 1699796219000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var e,r={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(e){l=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new A(n||[]);return o(i,"_invoke",{value:B(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var p="suspendedStart",h="suspendedYield",g="executing",v="completed",m={};function b(){}function y(){}function w(){}var x={};l(x,c,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(D([])));E&&E!==n&&a.call(E,c)&&(x=E);var k=w.prototype=b.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(n,o,i,c){var u=f(t[n],t,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&a.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var n;o(this,"_invoke",{value:function(t,a){function o(){return new e((function(e,n){r(t,a,e,n)}))}return n=n?n.then(o,o):o()}})}function B(t,r,n){var a=p;return function(o,i){if(a===g)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=g;var s=f(t,r,n);if("normal"===s.type){if(a=n.done?v:h,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=v,n.method="throw",n.arg=s.arg)}}}function O(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=f(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function D(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return y.prototype=w,o(k,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:y,configurable:!0}),y.displayName=l(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},L(j.prototype),l(j.prototype,u,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,a,o){void 0===o&&(o=Promise);var i=new j(d(t,e,n,a),o);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(k),l(k,s,"Generator"),l(k,c,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=D,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;q(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},r}function e(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(a,o){var i=t.apply(r,n);function c(t){e(i,a,o,c,u,"next",t)}function u(t){e(i,a,o,c,u,"throw",t)}c(void 0)}))}}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0col-legacy.js","./087AC4D233B64EB0icon-legacy2.js","./087AC4D233B64EB0echartsLine-legacy.js","./087AC4D233B64EB0dashboardTable-legacy.js","./087AC4D233B64EB0_plugin-vue_export-helper-legacy.js","./087AC4D233B64EB0github-legacy.js","./087AC4D233B64EB0date-legacy.js"],(function(e,n){"use strict";var a,o,i,c,u,s,l,d,f,p,h,g,v,m,b,y,w,x,_,E,k,L,j,B,O;return{setters:[function(t){a=t.a,o=t.O,i=t.u,c=t.P,u=t.o,s=t.c,l=t.b,d=t.t,f=t.G,p=t.d,h=t.w,g=t.g,v=t.M,m=t.N,b=t.h,y=t.H,w=t.I,x=t.J,_=t.p,E=t.i},function(t){k=t.E,L=t.a},null,function(t){j=t.default},function(t){B=t.default},function(t){O=t._},null,null],execute:function(){var C=document.createElement("style");C.textContent=".page[data-v-ae619b29]{padding:0}.page .gva-card-box[data-v-ae619b29]{padding:1rem}.page .gva-card-box+.gva-card-box[data-v-ae619b29]{padding-top:0}.page .gva-card[data-v-ae619b29]{box-sizing:border-box;height:auto;overflow:hidden;border-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:2rem 1.5rem;--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.page .gva-card .gva-card-title[data-v-ae619b29]{border-top-width:0px;border-left-width:0px;border-right-width:0px;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(243 244 246 / var(--tw-border-opacity));padding-bottom:1.25rem}.page .gva-top-card[data-v-ae619b29]{display:flex;height:18rem;align-items:center;justify-content:space-between;--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.page .gva-top-card-left[data-v-ae619b29]{display:flex;height:100%;width:auto;flex-direction:column}.page .gva-top-card-left-title[data-v-ae619b29]{font-size:1.875rem;line-height:2.25rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.page .gva-top-card-left-dot[data-v-ae619b29]{margin-top:1rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.page .gva-top-card-left-item[data-v-ae619b29]{margin-top:14px}.page .gva-top-card-left-item+.gva-top-card-left-item[data-v-ae619b29]{margin-top:24px}.page .gva-top-card-right[data-v-ae619b29]{height:600px;width:600px;margin-top:28px}.page[data-v-ae619b29] .el-card__header{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));padding:0}.page .card-header[data-v-ae619b29]{border-bottom-width:1px;border-top-width:0px;border-left-width:0px;border-right-width:0px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity));padding-bottom:1.25rem}.page .quick-entrance-items[data-v-ae619b29]{display:flex;align-items:center;justify-content:center;text-align:center;--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.page .quick-entrance-items .quick-entrance-item[data-v-ae619b29]{display:flex;cursor:pointer;flex-direction:column;align-items:center;border-radius:.5rem;padding:1.5rem 2rem;transition-property:all;transition-duration:.1s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.page .quick-entrance-items .quick-entrance-item[data-v-ae619b29]:hover{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.page .quick-entrance-items .quick-entrance-item-icon[data-v-ae619b29]{margin:auto 0;display:flex;height:4rem;width:4rem;align-items:center;justify-content:center;border-radius:.5rem;font-size:1.5rem;line-height:2rem}.page .quick-entrance-items .quick-entrance-item p[data-v-ae619b29]{margin-top:.625rem}.dashboard-icon[data-v-ae619b29]{margin-right:.5rem;display:flex;align-items:center;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(96 165 250 / var(--tw-text-opacity))}\n",document.head.appendChild(C);var q=""+new URL("087AC4D233B64EB0dashboard.png",n.meta.url).href,A=a("今日晴，0℃ - 10℃，天气寒冷，注意添加衣物。"),D="ed98962b641278b36f6372f47eacb7cc",P=function(){return G(),A},G=function(){var e=r(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("https://restapi.amap.com/v3/ip?key="+D);case 2:(r=t.sent).data.adcode&&N(r.data.adcode);case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=r(t().mark((function e(r){var n,a;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("https://restapi.amap.com/v3/weather/weatherInfo?key="+D+"&extensions=base&city="+r);case 2:"1"===(n=t.sent).data.status&&(a=n.data.lives[0],A.value=a.city+" 天气："+a.weather+" 温度："+a.temperature+"摄氏度 风向："+a.winddirection+" 风力："+a.windpower+"级 空气湿度："+a.humidity);case 4:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(t){return _("data-v-ae619b29"),t=t(),E(),t},T={class:"page"},z={class:"gva-card-box"},I={class:"gva-card gva-top-card"},F={class:"gva-top-card-left"},Y=S((function(){return l("div",{class:"gva-top-card-left-title"},"早安，管理员，请开始一天的工作吧",-1)})),H={class:"gva-top-card-left-dot"},J={class:"flex items-center"},M={class:"flex items-center"},R={class:"flex items-center"},U=S((function(){return l("img",{src:q,class:"gva-top-card-right",alt:""},null,-1)})),K={class:"gva-card-box"},Q={class:"gva-card quick-entrance"},V=S((function(){return l("div",{class:"gva-card-title"},"快捷入口",-1)})),W={class:"quick-entrance-item"},X={class:"gva-card-box"},Z={class:"gva-card"},$=S((function(){return l("div",{class:"gva-card-title"},"数据统计",-1)})),tt={class:"p-4"},et=Object.assign({name:"Dashboard"},{__name:"index",setup:function(t){var e=P(),r=a([{label:"用户管理",icon:"monitor",name:"user",color:"#ff9c6e",bg:"rgba(255, 156, 110,.3)"},{label:"角色管理",icon:"setting",name:"authority",color:"#69c0ff",bg:"rgba(105, 192, 255,.3)"},{label:"订单管理",icon:"menu",name:"orders",color:"#b37feb",bg:"rgba(179, 127, 235,.3)"},{label:"api管理",icon:"cpu",name:"apis",color:"#ffd666",bg:"rgba(255, 214, 102,.3)"},{label:"做单配置",icon:"document-checked",name:"config",color:"#ff85c0",bg:"rgba(255, 133, 192,.3)"},{label:"symbol配置",icon:"user",name:"coins",color:"#5cdbd3",bg:"rgba(92, 219, 211,.3)"}]),n=i();return function(t,a){var o=c("sort"),i=x,_=k,E=c("avatar"),O=c("comment"),C=L;return u(),s("div",T,[l("div",z,[l("div",I,[l("div",F,[Y,l("div",H,d(f(e)),1),p(C,{class:"my-8 w-[500px]"},{default:h((function(){return[p(_,{span:8,xs:24,sm:8},{default:h((function(){return[l("div",J,[p(i,{class:"dashboard-icon"},{default:h((function(){return[p(o)]})),_:1}),g(" 今日流量 (1231231) ")])]})),_:1}),p(_,{span:8,xs:24,sm:8},{default:h((function(){return[l("div",M,[p(i,{class:"dashboard-icon"},{default:h((function(){return[p(E)]})),_:1}),g(" 总用户数 (24001) ")])]})),_:1}),p(_,{span:8,xs:24,sm:8},{default:h((function(){return[l("div",R,[p(i,{class:"dashboard-icon"},{default:h((function(){return[p(O)]})),_:1}),g(" 好评率 (99%) ")])]})),_:1})]})),_:1})]),U])]),l("div",K,[l("div",Q,[V,p(C,{gutter:20},{default:h((function(){return[(u(!0),s(v,null,m(r.value,(function(t,e){return u(),b(_,{key:e,span:4,xs:8,class:"quick-entrance-items",onClick:function(e){return r=t.name,void n.push({name:r});var r}},{default:h((function(){return[l("div",W,[l("div",{class:"quick-entrance-item-icon",style:y({backgroundColor:t.bg})},[p(i,null,{default:h((function(){return[(u(),b(w(t.icon),{style:y({color:t.color})},null,8,["style"]))]})),_:2},1024)],4),l("p",null,d(t.label),1)])]})),_:2},1032,["onClick"])})),128))]})),_:1})])]),l("div",X,[l("div",Z,[$,l("div",tt,[p(C,{gutter:20},{default:h((function(){return[p(_,{xs:24,sm:18},{default:h((function(){return[p(j)]})),_:1}),p(_,{xs:24,sm:6},{default:h((function(){return[p(B)]})),_:1})]})),_:1})])])])])}}});e("default",O(et,[["__scopeId","data-v-ae619b29"]]))}}}))}();
