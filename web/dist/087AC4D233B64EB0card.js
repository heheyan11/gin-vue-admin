/*! 
 Build based on gin-vue-admin 
 Time : 1698981314000 */
import{C as s,a1 as a,x as e,y as t,o as r,c as d,n as o,G as l,B as n,g as c,t as y,e as i,b as p,H as h,_ as u,K as b}from"./087AC4D233B64EB0index.js";const v=s({header:{type:String,default:""},bodyStyle:{type:a([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),f=e({name:"ElCard"});const m=b(u(e({...f,props:v,setup(s){const a=t("card");return(s,e)=>(r(),d("div",{class:o([l(a).b(),l(a).is("".concat(s.shadow,"-shadow"))])},[s.$slots.header||s.header?(r(),d("div",{key:0,class:o(l(a).e("header"))},[n(s.$slots,"header",{},(()=>[c(y(s.header),1)]))],2)):i("v-if",!0),p("div",{class:o([l(a).e("body"),s.bodyClass]),style:h(s.bodyStyle)},[n(s.$slots,"default")],6)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]));export{m as E};
