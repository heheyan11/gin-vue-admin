/*! 
 Build based on gin-vue-admin 
 Time : 1698981314000 */
import{C as s,b2 as a,x as e,ah as l,y as o,F as n,o as t,c,b as i,B as r,n as u,G as p,h as d,w as f,d as k,bK as m,ak as g,J as b,e as y,H as v,a0 as C,_ as h,K as B}from"./087AC4D233B64EB0index.js";const _=s({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:a,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),E={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},S=e({name:"ElTag"});const w=B(h(e({...S,props:_,emits:E,setup(s,{emit:a}){const e=s,h=l(),B=o("tag"),_=n((()=>{const{type:s,hit:a,effect:l,closable:o,round:n}=e;return[B.b(),B.is("closable",o),B.m(s),B.m(h.value),B.m(l),B.is("hit",a),B.is("round",n)]})),E=s=>{a("close",s)},S=s=>{a("click",s)};return(s,a)=>s.disableTransitions?(t(),c("span",{key:0,class:u(p(_)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:u(p(B).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),d(p(b),{key:0,class:u(p(B).e("close")),onClick:g(E,["stop"])},{default:f((()=>[k(p(m))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(t(),d(C,{key:1,name:"".concat(p(B).namespace.value,"-zoom-in-center"),appear:""},{default:f((()=>[i("span",{class:u(p(_)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:u(p(B).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),d(p(b),{key:0,class:u(p(B).e("close")),onClick:g(E,["stop"])},{default:f((()=>[k(p(m))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));export{w as E,_ as t};
