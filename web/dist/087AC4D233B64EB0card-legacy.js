/*! 
 Build based on gin-vue-admin 
 Time : 1698981314000 */
!function(){function r(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function e(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function t(r,e,t){return(e=function(r){var e=function(r,e){if("object"!=typeof r||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var o=t.call(r,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"==typeof e?e:String(e)}(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}System.register(["./087AC4D233B64EB0index-legacy.js"],(function(r,t){"use strict";var o,a,n,d,l,c,i,s,u,b,p,v,f,y,g,h;return{setters:[function(r){o=r.C,a=r.a1,n=r.x,d=r.y,l=r.o,c=r.c,i=r.n,s=r.G,u=r.B,b=r.g,p=r.t,v=r.e,f=r.b,y=r.H,g=r._,h=r.K}],execute:function(){var t=document.createElement("style");t.textContent=".el-card{--el-card-border-color: var(--el-border-color-light);--el-card-border-radius: 4px;--el-card-padding: 20px;--el-card-bg-color: var(--el-fill-color-blank);border-radius:var(--el-card-border-radius);border:1px solid var(--el-card-border-color);background-color:var(--el-card-bg-color);overflow:hidden;color:var(--el-text-color-primary);transition:var(--el-transition-duration)}.el-card.is-always-shadow{box-shadow:var(--el-box-shadow-light)}.el-card.is-hover-shadow:hover,.el-card.is-hover-shadow:focus{box-shadow:var(--el-box-shadow-light)}.el-card__header{padding:calc(var(--el-card-padding) - 2px) var(--el-card-padding);border-bottom:1px solid var(--el-card-border-color);box-sizing:border-box}.el-card__body{padding:var(--el-card-padding)}\n",document.head.appendChild(t);var w=o({header:{type:String,default:""},bodyStyle:{type:a([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),m=n({name:"ElCard"}),O=n(e(e({},m),{},{props:w,setup:function(r){var e=d("card");return function(r,t){return l(),c("div",{class:i([s(e).b(),s(e).is("".concat(r.shadow,"-shadow"))])},[r.$slots.header||r.header?(l(),c("div",{key:0,class:i(s(e).e("header"))},[u(r.$slots,"header",{},(function(){return[b(p(r.header),1)]}))],2)):v("v-if",!0),f("div",{class:i([s(e).e("body"),r.bodyClass]),style:y(r.bodyStyle)},[u(r.$slots,"default")],6)],2)}}}));r("E",h(g(O,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]])))}}}))}();
