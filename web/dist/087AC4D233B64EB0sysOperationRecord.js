/*! 
 Build based on gin-vue-admin 
 Time : 1698979068000 */
import{v as e,a,S as l,o as t,c as o,b as r,d as s,w as i,g as p,t as n,G as u,h as d,k as c,l as m,E as v,J as f}from"./087AC4D233B64EB0index.js";import{E as B}from"./087AC4D233B64EB0pagination.js";/* empty css                     */import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as g,a as y}from"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       *//* empty css                     */import{E as C}from"./087AC4D233B64EB0popover.js";import{a as h,E as b}from"./087AC4D233B64EB0form-item.js";/* empty css                      */import{f as E}from"./087AC4D233B64EB0format.js";import{E as D}from"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0dropdown.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";import"./087AC4D233B64EB0sysDictionary2.js";const j={class:"gva-search-box"},w={class:"gva-table-box"},A={class:"gva-btn-list"},_=r("p",null,"确定要删除吗？",-1),k={style:{"text-align":"right","margin-top":"8px"}},V={class:"popover-box"},x={key:1},O={class:"popover-box"},S={key:1},R=r("p",null,"确定要删除吗？",-1),z={style:{"text-align":"right","margin-top":"8px"}},I={class:"gva-pagination"},U=Object.assign({name:"SysOperationRecord"},{__name:"sysOperationRecord",setup(U){const N=a(1),J=a(0),q=a(10),G=a([]),L=a({}),P=()=>{L.value={}},T=()=>{N.value=1,q.value=10,""===L.value.status&&(L.value.status=null),K()},F=e=>{q.value=e,K()},H=e=>{N.value=e,K()},K=async()=>{const a=await(l={page:N.value,pageSize:q.value,...L.value},e({url:"/sysOperationRecord/getSysOperationRecordList",method:"get",params:l}));var l;0===a.code&&(G.value=a.data.list,J.value=a.data.total,N.value=a.data.page,q.value=a.data.pageSize)};K();const M=a(!1),Q=a([]),W=e=>{Q.value=e},X=async()=>{const a=[];Q.value&&Q.value.forEach((e=>{a.push(e.ID)}));var l;0===(await(l={ids:a},e({url:"/sysOperationRecord/deleteSysOperationRecordByIds",method:"delete",data:l}))).code&&(c({type:"success",message:"删除成功"}),G.value.length===a.length&&N.value>1&&N.value--,M.value=!1,K())},Y=async a=>{a.visible=!1;var l;0===(await(l={ID:a.ID},e({url:"/sysOperationRecord/deleteSysOperationRecord",method:"delete",data:l}))).code&&(c({type:"success",message:"删除成功"}),1===G.value.length&&N.value>1&&N.value--,K())},Z=e=>{try{return JSON.parse(e)}catch(a){return e}};return(e,a)=>{const c=m,U=h,K=v,$=b,ee=C,ae=g,le=D,te=l("warning"),oe=f,re=y,se=B;return t(),o("div",null,[r("div",j,[s($,{inline:!0,model:L.value},{default:i((()=>[s(U,{label:"请求方法"},{default:i((()=>[s(c,{modelValue:L.value.method,"onUpdate:modelValue":a[0]||(a[0]=e=>L.value.method=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),s(U,{label:"请求路径"},{default:i((()=>[s(c,{modelValue:L.value.path,"onUpdate:modelValue":a[1]||(a[1]=e=>L.value.path=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),s(U,{label:"结果状态码"},{default:i((()=>[s(c,{modelValue:L.value.status,"onUpdate:modelValue":a[2]||(a[2]=e=>L.value.status=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),s(U,null,{default:i((()=>[s(K,{type:"primary",icon:"search",onClick:T},{default:i((()=>[p("查询")])),_:1}),s(K,{icon:"refresh",onClick:P},{default:i((()=>[p("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),r("div",w,[r("div",A,[s(ee,{modelValue:M.value,"onUpdate:modelValue":a[5]||(a[5]=e=>M.value=e),placement:"top",width:"160"},{reference:i((()=>[s(K,{icon:"delete",style:{"margin-left":"10px"},disabled:!Q.value.length,onClick:a[4]||(a[4]=e=>M.value=!0)},{default:i((()=>[p("删除")])),_:1},8,["disabled"])])),default:i((()=>[_,r("div",k,[s(K,{type:"primary",link:"",onClick:a[3]||(a[3]=e=>M.value=!1)},{default:i((()=>[p("取消")])),_:1}),s(K,{type:"primary",onClick:X},{default:i((()=>[p("确定")])),_:1})])])),_:1},8,["modelValue"])]),s(re,{ref:"multipleTable",data:G.value,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSelectionChange:W},{default:i((()=>[s(ae,{align:"left",type:"selection",width:"55"}),s(ae,{align:"left",label:"操作人",width:"140"},{default:i((e=>[r("div",null,n(e.row.user.userName)+"("+n(e.row.user.nickName)+")",1)])),_:1}),s(ae,{align:"left",label:"日期",width:"180"},{default:i((e=>[p(n(u(E)(e.row.CreatedAt)),1)])),_:1}),s(ae,{align:"left",label:"状态码",prop:"status",width:"120"},{default:i((e=>[r("div",null,[s(le,{type:"success"},{default:i((()=>[p(n(e.row.status),1)])),_:2},1024)])])),_:1}),s(ae,{align:"left",label:"请求IP",prop:"ip",width:"120"}),s(ae,{align:"left",label:"请求方法",prop:"method",width:"120"}),s(ae,{align:"left",label:"请求路径",prop:"path",width:"240"}),s(ae,{align:"left",label:"请求",prop:"path",width:"80"},{default:i((e=>[r("div",null,[e.row.body?(t(),d(ee,{key:0,placement:"left-start",trigger:"click"},{reference:i((()=>[s(oe,{style:{cursor:"pointer"}},{default:i((()=>[s(te)])),_:1})])),default:i((()=>[r("div",V,[r("pre",null,n(Z(e.row.body)),1)])])),_:2},1024)):(t(),o("span",x,"无"))])])),_:1}),s(ae,{align:"left",label:"响应",prop:"path",width:"80"},{default:i((e=>[r("div",null,[e.row.resp?(t(),d(ee,{key:0,placement:"left-start",trigger:"click"},{reference:i((()=>[s(oe,{style:{cursor:"pointer"}},{default:i((()=>[s(te)])),_:1})])),default:i((()=>[r("div",O,[r("pre",null,n(Z(e.row.resp)),1)])])),_:2},1024)):(t(),o("span",S,"无"))])])),_:1}),s(ae,{align:"left",label:"操作"},{default:i((e=>[s(ee,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:i((()=>[s(K,{icon:"delete",type:"primary",link:"",onClick:a=>e.row.visible=!0},{default:i((()=>[p("删除")])),_:2},1032,["onClick"])])),default:i((()=>[R,r("div",z,[s(K,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:i((()=>[p("取消")])),_:2},1032,["onClick"]),s(K,{type:"primary",onClick:a=>Y(e.row)},{default:i((()=>[p("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"]),r("div",I,[s(se,{"current-page":N.value,"page-size":q.value,"page-sizes":[10,30,50,100],total:J.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:H,onSizeChange:F},null,8,["current-page","page-size","total"])])])])}}});export{U as default};
