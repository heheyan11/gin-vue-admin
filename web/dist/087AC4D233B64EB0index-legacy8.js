/*! 
 Build based on gin-vue-admin 
 Time : 1699796219000 */
System.register(["./087AC4D233B64EB0menuItem-legacy.js","./087AC4D233B64EB0asyncSubmenu-legacy.js","./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0tooltip-legacy.js","./087AC4D233B64EB0popper-legacy.js","./087AC4D233B64EB0icon-legacy2.js","./087AC4D233B64EB0_plugin-vue_export-helper-legacy.js","./087AC4D233B64EB0index-legacy21.js","./087AC4D233B64EB0index-legacy24.js","./087AC4D233B64EB0index-legacy25.js"],(function(e,n){"use strict";var t,r,u,l,o,i,c,f,s,a,d,B;return{setters:[function(e){t=e.default},function(e){r=e.default},function(e){u=e.F,l=e.P,o=e.o,i=e.h,c=e.w,f=e.c,s=e.M,a=e.N,d=e.e,B=e.I},null,null,null,null,null,null,null],execute:function(){e("default",Object.assign({name:"AsideComponent"},{__name:"index",props:{routerInfo:{type:Object,default:function(){return null}},isCollapse:{default:function(){return!1},type:Boolean},theme:{default:function(){return{}},type:Object}},setup:function(e){var n=e,p=u((function(){return n.routerInfo.children&&n.routerInfo.children.filter((function(e){return!e.hidden})).length?r:t}));return function(n,t){var r=l("AsideComponent");return e.routerInfo.hidden?d("",!0):(o(),i(B(p.value),{key:0,"is-collapse":e.isCollapse,theme:e.theme,"router-info":e.routerInfo},{default:c((function(){return[e.routerInfo.children&&e.routerInfo.children.length?(o(!0),f(s,{key:0},a(e.routerInfo.children,(function(n){return o(),i(r,{key:n.name,"is-collapse":!1,"router-info":n,theme:e.theme},null,8,["router-info","theme"])})),128)):d("",!0)]})),_:1},8,["is-collapse","theme","router-info"]))}}}))}}}));
