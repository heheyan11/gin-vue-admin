/*! 
 Build based on gin-vue-admin 
 Time : 1698979068000 */
System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0upload-legacy2.js","./087AC4D233B64EB0progress-legacy.js","./087AC4D233B64EB0icon-legacy2.js","./087AC4D233B64EB0cloneDeep-legacy.js","./087AC4D233B64EB0_baseClone-legacy.js","./087AC4D233B64EB0_Uint8Array-legacy.js","./087AC4D233B64EB0_initCloneObject-legacy.js","./087AC4D233B64EB0isEqual-legacy.js"],(function(e,n){"use strict";var l,a,t,u,c,o,s,i,r,d,f,B,g;return{setters:[function(e){l=e.m,a=e.a,t=e.S,u=e.o,c=e.c,o=e.d,s=e.w,i=e.G,r=e.b,d=e.g,f=e.k,B=e.J},function(e){g=e.E},null,null,null,null,null,null,null],execute:function(){var n=r("div",{class:"el-upload__text"},[d(" 拖拽或"),r("em",null,"点击上传")],-1),p=r("div",{class:"el-upload__tip"}," 请把安装包的zip拖拽至此处上传 ",-1);e("default",{__name:"index",setup:function(e){var r=l(),d=a("/api"),C=function(e){if(0===e.code){var n="";e.data&&e.data.forEach((function(e,l){n+="".concat(l+1,".").concat(e.msg,"\n")})),alert(n)}else f.error(e.msg)};return function(e,l){var a=t("upload-filled"),f=B,E=g;return u(),c("div",null,[o(E,{drag:"",action:"".concat(d.value,"/autoCode/installPlugin"),headers:{"x-token":i(r).token},"show-file-list":!1,"on-success":C,"on-error":C,name:"plug"},{tip:s((function(){return[p]})),default:s((function(){return[o(f,{class:"el-icon--upload"},{default:s((function(){return[o(a)]})),_:1}),n]})),_:1},8,["action","headers"])])}}})}}}));
