/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
import{a,O as s,u as e,P as t,o as c,c as l,b as o,t as r,G as i,d,w as n,g as m,M as u,N as b,h as p,H as v,I as g,J as f,p as h,i as _}from"./087AC4D233B64EB0index.js";import{E as x,a as B}from"./087AC4D233B64EB0col.js";/* empty css                     */import y from"./087AC4D233B64EB0echartsLine.js";import C from"./087AC4D233B64EB0dashboardTable.js";import{_ as k}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";import"./087AC4D233B64EB0github.js";import"./087AC4D233B64EB0date.js";const w=""+new URL("087AC4D233B64EB0dashboard.png",import.meta.url).href,D=a("今日晴，0℃ - 10℃，天气寒冷，注意添加衣物。"),E="ed98962b641278b36f6372f47eacb7cc",j=async()=>{const a=await s.get("https://restapi.amap.com/v3/ip?key="+E);a.data.adcode&&A(a.data.adcode)},A=async a=>{const e=await s.get("https://restapi.amap.com/v3/weather/weatherInfo?key="+E+"&extensions=base&city="+a);if("1"===e.data.status){const a=e.data.lives[0];D.value=a.city+" 天气："+a.weather+" 温度："+a.temperature+"摄氏度 风向："+a.winddirection+" 风力："+a.windpower+"级 空气湿度："+a.humidity}},q=a=>(h("data-v-ae619b29"),a=a(),_(),a),I={class:"page"},L={class:"gva-card-box"},O={class:"gva-card gva-top-card"},G={class:"gva-top-card-left"},H=q((()=>o("div",{class:"gva-top-card-left-title"},"早安，管理员，请开始一天的工作吧",-1))),J={class:"gva-top-card-left-dot"},M={class:"flex items-center"},N={class:"flex items-center"},P={class:"flex items-center"},R=q((()=>o("img",{src:w,class:"gva-top-card-right",alt:""},null,-1))),T={class:"gva-card-box"},U={class:"gva-card quick-entrance"},z=q((()=>o("div",{class:"gva-card-title"},"快捷入口",-1))),F={class:"quick-entrance-item"},K={class:"gva-card-box"},Q={class:"gva-card"},S=q((()=>o("div",{class:"gva-card-title"},"数据统计",-1))),V={class:"p-4"},W=k(Object.assign({name:"Dashboard"},{__name:"index",setup(s){const h=(j(),D),_=a([{label:"用户管理",icon:"monitor",name:"user",color:"#ff9c6e",bg:"rgba(255, 156, 110,.3)"},{label:"角色管理",icon:"setting",name:"authority",color:"#69c0ff",bg:"rgba(105, 192, 255,.3)"},{label:"订单管理",icon:"menu",name:"orders",color:"#b37feb",bg:"rgba(179, 127, 235,.3)"},{label:"api管理",icon:"cpu",name:"apis",color:"#ffd666",bg:"rgba(255, 214, 102,.3)"},{label:"做单配置",icon:"document-checked",name:"config",color:"#ff85c0",bg:"rgba(255, 133, 192,.3)"},{label:"symbol配置",icon:"user",name:"coins",color:"#5cdbd3",bg:"rgba(92, 219, 211,.3)"}]),k=e();return(a,s)=>{const e=t("sort"),w=f,D=x,E=t("avatar"),j=t("comment"),A=B;return c(),l("div",I,[o("div",L,[o("div",O,[o("div",G,[H,o("div",J,r(i(h)),1),d(A,{class:"my-8 w-[500px]"},{default:n((()=>[d(D,{span:8,xs:24,sm:8},{default:n((()=>[o("div",M,[d(w,{class:"dashboard-icon"},{default:n((()=>[d(e)])),_:1}),m(" 今日流量 (1231231) ")])])),_:1}),d(D,{span:8,xs:24,sm:8},{default:n((()=>[o("div",N,[d(w,{class:"dashboard-icon"},{default:n((()=>[d(E)])),_:1}),m(" 总用户数 (24001) ")])])),_:1}),d(D,{span:8,xs:24,sm:8},{default:n((()=>[o("div",P,[d(w,{class:"dashboard-icon"},{default:n((()=>[d(j)])),_:1}),m(" 好评率 (99%) ")])])),_:1})])),_:1})]),R])]),o("div",T,[o("div",U,[z,d(A,{gutter:20},{default:n((()=>[(c(!0),l(u,null,b(_.value,((a,s)=>(c(),p(D,{key:s,span:4,xs:8,class:"quick-entrance-items",onClick:s=>{return e=a.name,void k.push({name:e});var e}},{default:n((()=>[o("div",F,[o("div",{class:"quick-entrance-item-icon",style:v({backgroundColor:a.bg})},[d(w,null,{default:n((()=>[(c(),p(g(a.icon),{style:v({color:a.color})},null,8,["style"]))])),_:2},1024)],4),o("p",null,r(a.label),1)])])),_:2},1032,["onClick"])))),128))])),_:1})])]),o("div",K,[o("div",Q,[S,o("div",V,[d(A,{gutter:20},{default:n((()=>[d(D,{xs:24,sm:18},{default:n((()=>[d(y)])),_:1}),d(D,{xs:24,sm:6},{default:n((()=>[d(C)])),_:1})])),_:1})])])])])}}}),[["__scopeId","data-v-ae619b29"]]);export{W as default};
