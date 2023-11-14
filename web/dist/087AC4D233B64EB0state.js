/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
import{a as t,T as e,o as a,c as l,d as n,w as u,h as s,b as o,g as d,t as r,e as p,M as c,N as f}from"./087AC4D233B64EB0index.js";import{E as _}from"./087AC4D233B64EB0progress.js";import{E as v}from"./087AC4D233B64EB0card.js";import{E as i,a as g}from"./087AC4D233B64EB0col.js";import{g as C}from"./087AC4D233B64EB0system2.js";const x=o("div",null,"Runtime",-1),m=o("div",null,"Disk",-1),B=o("div",null,"CPU",-1),y=o("div",null,"Ram",-1),b=Object.assign({name:"State"},{__name:"state",setup(b){const k=t(null),M=t({}),h=t([{color:"#5cb87a",percentage:20},{color:"#e6a23c",percentage:40},{color:"#f56c6c",percentage:80}]),E=async()=>{const{data:t}=await C();M.value=t.server};return E(),k.value=setInterval((()=>{E()}),1e4),e((()=>{clearInterval(k.value),k.value=null})),(t,e)=>{const C=i,b=g,k=v,E=_;return a(),l("div",null,[n(b,{gutter:15,class:"py-1"},{default:u((()=>[n(C,{span:12},{default:u((()=>[M.value.os?(a(),s(k,{key:0,class:"card_item"},{header:u((()=>[x])),default:u((()=>[o("div",null,[n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("os:")])),_:1}),n(C,{span:12,textContent:r(M.value.os.goos)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("cpu nums:")])),_:1}),n(C,{span:12,textContent:r(M.value.os.numCpu)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("compiler:")])),_:1}),n(C,{span:12,textContent:r(M.value.os.compiler)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("go version:")])),_:1}),n(C,{span:12,textContent:r(M.value.os.goVersion)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("goroutine nums:")])),_:1}),n(C,{span:12,textContent:r(M.value.os.numGoroutine)},null,8,["textContent"])])),_:1})])])),_:1})):p("",!0)])),_:1}),n(C,{span:12},{default:u((()=>[M.value.disk?(a(),s(k,{key:0,class:"card_item"},{header:u((()=>[m])),default:u((()=>[o("div",null,[n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("total (MB)")])),_:1}),n(C,{span:12,textContent:r(M.value.disk.totalMb)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("used (MB)")])),_:1}),n(C,{span:12,textContent:r(M.value.disk.usedMb)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("total (GB)")])),_:1}),n(C,{span:12,textContent:r(M.value.disk.totalGb)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("used (GB)")])),_:1}),n(C,{span:12,textContent:r(M.value.disk.usedGb)},null,8,["textContent"])])),_:1})])),_:1}),n(C,{span:12},{default:u((()=>[n(E,{type:"dashboard",percentage:M.value.disk.usedPercent,color:h.value},null,8,["percentage","color"])])),_:1})])),_:1})])])),_:1})):p("",!0)])),_:1})])),_:1}),n(b,{gutter:15,class:"py-1"},{default:u((()=>[n(C,{span:12},{default:u((()=>[M.value.cpu?(a(),s(k,{key:0,class:"card_item","body-style":{height:"180px","overflow-y":"scroll"}},{header:u((()=>[B])),default:u((()=>[o("div",null,[n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("physical number of cores:")])),_:1}),n(C,{span:12,textContent:r(M.value.cpu.cores)},null,8,["textContent"])])),_:1}),(a(!0),l(c,null,f(M.value.cpu.cpus,((t,e)=>(a(),s(b,{key:e,gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("core "+r(e)+":",1)])),_:2},1024),n(C,{span:12},{default:u((()=>[n(E,{type:"line",percentage:+t.toFixed(0),color:h.value},null,8,["percentage","color"])])),_:2},1024)])),_:2},1024)))),128))])])),_:1})):p("",!0)])),_:1}),n(C,{span:12},{default:u((()=>[M.value.ram?(a(),s(k,{key:0,class:"card_item"},{header:u((()=>[y])),default:u((()=>[o("div",null,[n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("total (MB)")])),_:1}),n(C,{span:12,textContent:r(M.value.ram.totalMb)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("used (MB)")])),_:1}),n(C,{span:12,textContent:r(M.value.ram.usedMb)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("total (GB)")])),_:1}),n(C,{span:12,textContent:r(M.value.ram.totalMb/1024)},null,8,["textContent"])])),_:1}),n(b,{gutter:10},{default:u((()=>[n(C,{span:12},{default:u((()=>[d("used (GB)")])),_:1}),n(C,{span:12,textContent:r((M.value.ram.usedMb/1024).toFixed(2))},null,8,["textContent"])])),_:1})])),_:1}),n(C,{span:12},{default:u((()=>[n(E,{type:"dashboard",percentage:M.value.ram.usedPercent,color:h.value},null,8,["percentage","color"])])),_:1})])),_:1})])])),_:1})):p("",!0)])),_:1})])),_:1})])}}});export{b as default};