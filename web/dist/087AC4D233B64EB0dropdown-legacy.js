/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0index-legacy21.js"],(function(t,r){"use strict";var o,i,l,u,a,c,f,p,s,m,y,d,b,g,O;return{setters:[function(e){o=e._,i=e.x,l=e.B,u=e.a,a=e.z,c=e.a3,f=e.R,p=e.G,s=e.ag,m=e.C,y=e.Z,d=e.D,b=e.a6},function(e){g=e.d,O=e.u}],execute:function(){var r=o(i({inheritAttrs:!1}),[["render",function(e,t,r,n,o,i){return l(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var v=o(i({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,t,r,n,o,i){return l(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]),E=t("b","data-el-collection-item"),C=t("c",(function(t){var o="El".concat(t,"Collection"),i="".concat(o,"Item"),l=Symbol(o),m=Symbol(i),y=n(n({},r),{},{name:o,setup:function(){var t=u(null),r=new Map;a(l,{itemMap:r,getItems:function(){var n=p(t);if(!n)return[];var o=Array.from(n.querySelectorAll("[".concat(E,"]")));return e(r.values()).sort((function(e,t){return o.indexOf(e.ref)-o.indexOf(t.ref)}))},collectionRef:t})}}),d=n(n({},v),{},{name:i,setup:function(e,t){var r=t.attrs,o=u(null),i=c(l,void 0);a(m,{collectionItemRef:o}),f((function(){var e=p(o);e&&i.itemMap.set(e,n({ref:e},r))})),s((function(){var e=p(o);i.itemMap.delete(e)}))}});return{COLLECTION_INJECTION_KEY:l,COLLECTION_ITEM_INJECTION_KEY:m,ElCollection:y,ElCollectionItem:d}})),S=(t("d",m({trigger:g.trigger,effect:n(n({},O.effect),{},{default:"light"}),type:{type:y(String)},placement:{type:y(String),default:"bottom"},popperOptions:{type:y(Object),default:function(){return{}}},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:y([Number,String]),default:0},maxHeight:{type:y([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:y(Object)},teleported:O.teleported})),t("a",m({command:{type:[Object,String,Number],default:function(){return{}}},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:d}})),t("f",m({onKeydown:{type:y(Function)}})),[b.down,b.pageDown,b.home]),I=t("L",[b.up,b.pageUp,b.end]),j=(t("F",[].concat(S,e(I))),C("Dropdown")),h=j.ElCollection,w=j.ElCollectionItem,N=j.COLLECTION_INJECTION_KEY,_=j.COLLECTION_ITEM_INJECTION_KEY;t({E:h,e:w,g:N,C:_})}}}))}();
