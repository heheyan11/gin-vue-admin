/*! 
 Build based on gin-vue-admin 
 Time : 1698979068000 */
import{an as e,u as a,a as s,m as l,F as t,Y as n,ao as u,W as o,o as r,c as i,d as v,w as m,M as c,N as p,h as d,b as y,H as g,G as f,g as h,t as b,ap as S,ak as I,Z as q,$ as O}from"./087AC4D233B64EB0index.js";import{E as C,a as k}from"./087AC4D233B64EB0tab-pane.js";import"./087AC4D233B64EB0strings.js";const N={class:"router-history"},w=["tab"],x=Object.assign({name:"HistoryComponent"},{__name:"history",setup(x){const J=e(),E=a(),j=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),A=s([]),V=s(""),B=s(!1),P=l(),T=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),_=s(0),D=s(0),L=s(!1),R=s(!1),H=s(""),Y=t((()=>P.userInfo.authority.defaultRouter)),$=()=>{A.value=[{name:Y.value,meta:{title:"首页"},query:{},params:{}}],E.push({name:Y.value}),B.value=!1,sessionStorage.setItem("historys",JSON.stringify(A.value))},F=()=>{let e;const a=A.value.findIndex((a=>(j(a)===H.value&&(e=a),j(a)===H.value))),s=A.value.findIndex((e=>j(e)===V.value));A.value.splice(0,a),a>s&&E.push(e),sessionStorage.setItem("historys",JSON.stringify(A.value))},G=()=>{let e;const a=A.value.findIndex((a=>(j(a)===H.value&&(e=a),j(a)===H.value))),s=A.value.findIndex((e=>j(e)===V.value));A.value.splice(a+1,A.value.length),a<s&&E.push(e),sessionStorage.setItem("historys",JSON.stringify(A.value))},K=()=>{let e;A.value=A.value.filter((a=>(j(a)===H.value&&(e=a),j(a)===H.value))),E.push(e),sessionStorage.setItem("historys",JSON.stringify(A.value))},M=e=>{if(!A.value.some((a=>((e,a)=>{if(e.name!==a.name)return!1;if(Object.keys(e.query).length!==Object.keys(a.query).length||Object.keys(e.params).length!==Object.keys(a.params).length)return!1;for(const s in e.query)if(e.query[s]!==a.query[s])return!1;for(const s in e.params)if(e.params[s]!==a.params[s])return!1;return!0})(a,e)))){const a={};a.name=e.name,a.meta={...e.meta},delete a.meta.matched,a.query=e.query,a.params=e.params,A.value.push(a)}window.sessionStorage.setItem("activeValue",j(e))},U=s({}),W=e=>{var a;const s=null==(a=null==e?void 0:e.props)?void 0:a.name;if(!s)return;const l=U.value[s];E.push({name:l.name,query:l.query,params:l.params})},X=e=>{const a=A.value.findIndex((a=>j(a)===e));j(J)===e&&(1===A.value.length?E.push({name:Y.value}):a<A.value.length-1?E.push({name:A.value[a+1].name,query:A.value[a+1].query,params:A.value[a+1].params}):E.push({name:A.value[a-1].name,query:A.value[a-1].query,params:A.value[a-1].params})),A.value.splice(a,1)};n((()=>B.value),(()=>{B.value?document.body.addEventListener("click",(()=>{B.value=!1})):document.body.removeEventListener("click",(()=>{B.value=!1}))})),n((()=>J),((e,a)=>{"Login"!==e.name&&"Reload"!==e.name&&(A.value=A.value.filter((e=>!e.meta.closeTab)),M(e),sessionStorage.setItem("historys",JSON.stringify(A.value)),V.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),n((()=>A.value),(()=>{sessionStorage.setItem("historys",JSON.stringify(A.value)),U.value={},A.value.forEach((e=>{U.value[j(e)]=e})),u.emit("setKeepAlive",A.value)}),{deep:!0});return(()=>{u.on("closeThisPage",(()=>{X(T(J))})),u.on("closeAllPage",(()=>{$()})),u.on("mobile",(e=>{R.value=e})),u.on("collapse",(e=>{L.value=e}));const e=[{name:Y.value,meta:{title:"首页"},query:{},params:{}}];A.value=JSON.parse(sessionStorage.getItem("historys"))||e,window.sessionStorage.getItem("activeValue")?V.value=window.sessionStorage.getItem("activeValue"):V.value=j(J),M(J),"true"===window.sessionStorage.getItem("needCloseAll")&&($(),window.sessionStorage.removeItem("needCloseAll"))})(),o((()=>{u.off("collapse"),u.off("mobile")})),(e,a)=>{const s=C,l=k;return r(),i("div",N,[v(l,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),closable:!(1===A.value.length&&e.$route.name===Y.value),type:"card",onContextmenu:a[1]||(a[1]=I((e=>(e=>{if(1===A.value.length&&J.name===Y.value)return!1;let a="";if(a="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id,a){let s;B.value=!0,s=L.value?54:220,R.value&&(s=0),_.value=e.clientX-s,D.value=e.clientY+10,H.value=a.substring(4)}})(e)),["prevent"])),onTabClick:W,onTabRemove:X},{default:m((()=>[(r(!0),i(c,null,p(A.value,(e=>(r(),d(s,{key:T(e),label:e.meta.title,name:T(e),tab:e,class:"gva-tab"},{label:m((()=>[y("span",{tab:e,style:g({color:V.value===T(e)?f(P).activeColor:"#333"})},[y("i",{class:"dot",style:g({backgroundColor:V.value===T(e)?f(P).activeColor:"#ddd"})},null,4),h(" "+b(f(S)(e.meta.title,e)),1)],12,w)])),_:2},1032,["label","name","tab"])))),128))])),_:1},8,["modelValue","closable"]),q(y("ul",{style:g({left:_.value+"px",top:D.value+"px"}),class:"contextmenu"},[y("li",{onClick:$},"关闭所有"),y("li",{onClick:F},"关闭左侧"),y("li",{onClick:G},"关闭右侧"),y("li",{onClick:K},"关闭其他")],4),[[O,B.value]])])}}});export{x as default};
