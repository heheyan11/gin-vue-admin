/*! 
 Build based on gin-vue-admin 
 Time : 1698979068000 */
import{C as a}from"./087AC4D233B64EB0github.js";import{f as s}from"./087AC4D233B64EB0date.js";import{_ as e}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";import{a as t,o,c as m,b as l,M as i,N as c,n as d,t as r,p as f,i as n}from"./087AC4D233B64EB0index.js";const p={class:"commit-table"},u=(a=>(f("data-v-5c444690"),a=a(),n(),a))((()=>l("div",{class:"commit-table-title"}," 更新日志 ",-1))),v={class:"log"},h={class:"flex-1 flex key-box"},b={class:"flex-5 flex message"},g={class:"flex-3 flex form"},x=e(Object.assign({name:"DashboardTable"},{__name:"dashboardTable",setup(e){const f=t(!0),n=t([]);return a(0).then((({data:a})=>{f.value=!1,a.forEach(((a,e)=>{a.commit.message&&e<10&&n.value.push({from:s(a.commit.author.date,"yyyy-MM-dd"),title:a.commit.author.name,showDayAndMonth:!0,message:a.commit.message})}))})),(a,s)=>(o(),m("div",p,[u,l("div",v,[(o(!0),m(i,null,c(n.value,((a,s)=>(o(),m("div",{key:s,class:"log-item"},[l("div",h,[l("span",{class:d(["key",s<3&&"top"])},r(s+1),3)]),l("div",b,r(a.message),1),l("div",g,r(a.from),1)])))),128))])]))}}),[["__scopeId","data-v-5c444690"]]);export{x as default};
