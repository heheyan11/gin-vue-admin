/*! 
 Build based on gin-vue-admin 
 Time : 1698981314000 */
import{a,Z as e,o as t,c as o,b as i,d as l,w as s,g as n,t as r,G as p,a4 as m,k as u,l as c,E as d,a5 as B}from"./087AC4D233B64EB0index.js";/* empty css                       */import{E as g}from"./087AC4D233B64EB0pagination.js";/* empty css                     */import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as C,a as v}from"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       *//* empty css                      */import{_ as f,U as E,g as j,d as A,e as D}from"./087AC4D233B64EB0common.js";import{C as h}from"./087AC4D233B64EB0index23.js";import{f as w}from"./087AC4D233B64EB0format.js";import{_ as y}from"./087AC4D233B64EB0warningBar.js";import{_}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";import{E as b}from"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0upload2.js";import"./087AC4D233B64EB0progress.js";import"./087AC4D233B64EB0cloneDeep.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0image-viewer.js";import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";import"./087AC4D233B64EB0sysDictionary2.js";/* empty css                     */const x=(a,e)=>{var t=new Image;t.setAttribute("crossOrigin","anonymous"),t.onload=function(){var a=document.createElement("canvas");a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(t,0,0,t.width,t.height);var o=a.toDataURL("image/png"),i=document.createElement("a"),l=new MouseEvent("click");i.download=e||"photo",i.href=o,i.dispatchEvent(l)},t.src=a},k={class:"gva-table-box"},U={class:"gva-btn-list"},z=["onClick"],O={class:"gva-pagination"},S=_(Object.assign({name:"Upload"},{__name:"upload",setup(_){const S=a("/api"),I=a(""),T=a(""),V=a(1),L=a(0),M=a(10),q=a({}),G=a([]),P=a=>{M.value=a,Z()},R=a=>{V.value=a,Z()},Z=async()=>{const a=await j({page:V.value,pageSize:M.value,...q.value});0===a.code&&(G.value=a.data.list,L.value=a.data.total,V.value=a.data.page,M.value=a.data.pageSize)};Z();return(a,j)=>{const _=c,F=d,H=C,J=b,K=v,N=g,Q=B;return e((t(),o("div",null,[i("div",k,[l(y,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),i("div",U,[l(f,{imageCommon:T.value,"onUpdate:imageCommon":j[0]||(j[0]=a=>T.value=a),onOnSuccess:Z},null,8,["imageCommon"]),l(E,{imageUrl:I.value,"onUpdate:imageUrl":j[1]||(j[1]=a=>I.value=a),"file-size":512,"max-w-h":1080,onOnSuccess:Z},null,8,["imageUrl"]),l(_,{modelValue:q.value.keyword,"onUpdate:modelValue":j[2]||(j[2]=a=>q.value.keyword=a),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"]),l(F,{type:"primary",icon:"search",onClick:Z},{default:s((()=>[n("查询")])),_:1})]),l(K,{data:G.value},{default:s((()=>[l(H,{align:"left",label:"预览",width:"100"},{default:s((a=>[l(h,{"pic-type":"file","pic-src":a.row.url,preview:""},null,8,["pic-src"])])),_:1}),l(H,{align:"left",label:"日期",prop:"UpdatedAt",width:"180"},{default:s((a=>[i("div",null,r(p(w)(a.row.UpdatedAt)),1)])),_:1}),l(H,{align:"left",label:"文件名/备注",prop:"name",width:"180"},{default:s((a=>[i("div",{class:"name",onClick:e=>(async a=>{m.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:a.name}).then((async({value:e})=>{a.name=e,0===(await D(a)).code&&(u({type:"success",message:"编辑成功!"}),Z())})).catch((()=>{u({type:"info",message:"取消修改"})}))})(a.row)},r(a.row.name),9,z)])),_:1}),l(H,{align:"left",label:"链接",prop:"url","min-width":"300"}),l(H,{align:"left",label:"标签",prop:"tag",width:"100"},{default:s((a=>[l(J,{type:"jpg"===a.row.tag?"primary":"success","disable-transitions":""},{default:s((()=>[n(r(a.row.tag),1)])),_:2},1032,["type"])])),_:1}),l(H,{align:"left",label:"操作",width:"160"},{default:s((a=>[l(F,{icon:"download",type:"primary",link:"",onClick:e=>{var t;(t=a.row).url.indexOf("http://")>-1||t.url.indexOf("https://")>-1?x(t.url,t.name):x(S.value+"/"+t.url,t.name)}},{default:s((()=>[n("下载")])),_:2},1032,["onClick"]),l(F,{icon:"delete",type:"primary",link:"",onClick:e=>(async a=>{m.confirm("此操作将永久删除文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await A(a)).code&&(u({type:"success",message:"删除成功!"}),1===G.value.length&&V.value>1&&V.value--,Z())})).catch((()=>{u({type:"info",message:"已取消删除"})}))})(a.row)},{default:s((()=>[n("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),i("div",O,[l(N,{"current-page":V.value,"page-size":M.value,"page-sizes":[10,30,50,100],style:{float:"right",padding:"20px"},total:L.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:R,onSizeChange:P},null,8,["current-page","page-size","total"])])])])),[[Q,a.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]])}}}),[["__scopeId","data-v-de65f0f5"]]);export{S as default};
