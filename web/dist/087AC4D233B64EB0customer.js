/*! 
 Build based on gin-vue-admin 
 Time : 1698981314000 */
import{v as e,a,o as t,c as l,d as o,b as s,w as r,g as i,t as u,G as m,k as p,E as n,l as d}from"./087AC4D233B64EB0index.js";import{E as c}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import{a as B,E as v}from"./087AC4D233B64EB0form-item.js";/* empty css                     */import{E as C}from"./087AC4D233B64EB0pagination.js";import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as f,a as D}from"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       */import{E}from"./087AC4D233B64EB0popover.js";/* empty css                      */import{_ as g}from"./087AC4D233B64EB0warningBar.js";import{f as j}from"./087AC4D233B64EB0format.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0dropdown.js";/* empty css                     */import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";import"./087AC4D233B64EB0sysDictionary2.js";const A=a=>e({url:"/customer/customer",method:"post",data:a}),y={class:"gva-table-box"},b={class:"gva-btn-list"},h=s("p",null,"确定要删除吗？",-1),w={style:{"text-align":"right","margin-top":"8px"}},_={class:"gva-pagination"},k={class:"dialog-footer"},V=Object.assign({name:"Customer"},{__name:"customer",setup(V){const x=a({customerName:"",customerPhoneData:""}),I=a(1),z=a(0),U=a(10),N=a([]),P=e=>{U.value=e,O()},S=e=>{I.value=e,O()},O=async()=>{const a=await(t={page:I.value,pageSize:U.value},e({url:"/customer/customerList",method:"get",params:t}));var t;0===a.code&&(N.value=a.data.list,z.value=a.data.total,I.value=a.data.page,U.value=a.data.pageSize)};O();const q=a(!1),G=a(""),L=async a=>{const t=await(l={ID:a.ID},e({url:"/customer/customer",method:"get",params:l}));var l;G.value="update",0===t.code&&(x.value=t.data.customer,q.value=!0)},T=()=>{q.value=!1,x.value={customerName:"",customerPhoneData:""}},F=async a=>{a.visible=!1;var t;0===(await(t={ID:a.ID},e({url:"/customer/customer",method:"delete",data:t}))).code&&(p({type:"success",message:"删除成功"}),1===N.value.length&&I.value>1&&I.value--,O())},H=async()=>{let a;switch(G.value){case"create":default:a=await A(x.value);break;case"update":a=await(t=x.value,e({url:"/customer/customer",method:"put",data:t}))}var t;0===a.code&&(T(),O())},J=()=>{G.value="create",q.value=!0};return(e,a)=>{const p=n,A=f,V=E,O=D,G=C,K=d,M=B,Q=v,R=c;return t(),l("div",null,[o(g,{title:"在资源权限中将此角色的资源权限清空 或者不包含创建者的角色 即可屏蔽此客户资源的显示"}),s("div",y,[s("div",b,[o(p,{type:"primary",icon:"plus",onClick:J},{default:r((()=>[i("新增")])),_:1})]),o(O,{ref:"multipleTable",data:N.value,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:r((()=>[o(A,{type:"selection",width:"55"}),o(A,{align:"left",label:"接入日期",width:"180"},{default:r((e=>[s("span",null,u(m(j)(e.row.CreatedAt)),1)])),_:1}),o(A,{align:"left",label:"姓名",prop:"customerName",width:"120"}),o(A,{align:"left",label:"电话",prop:"customerPhoneData",width:"120"}),o(A,{align:"left",label:"接入人ID",prop:"sysUserId",width:"120"}),o(A,{align:"left",label:"操作","min-width":"160"},{default:r((e=>[o(p,{type:"primary",link:"",icon:"edit",onClick:a=>L(e.row)},{default:r((()=>[i("变更")])),_:2},1032,["onClick"]),o(V,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:r((()=>[o(p,{type:"primary",link:"",icon:"delete",onClick:a=>e.row.visible=!0},{default:r((()=>[i("删除")])),_:2},1032,["onClick"])])),default:r((()=>[h,s("div",w,[o(p,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:r((()=>[i("取消")])),_:2},1032,["onClick"]),o(p,{type:"primary",onClick:a=>F(e.row)},{default:r((()=>[i("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"]),s("div",_,[o(G,{"current-page":I.value,"page-size":U.value,"page-sizes":[10,30,50,100],total:z.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:S,onSizeChange:P},null,8,["current-page","page-size","total"])])]),o(R,{modelValue:q.value,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value=e),"before-close":T,title:"客户"},{footer:r((()=>[s("div",k,[o(p,{onClick:T},{default:r((()=>[i("取 消")])),_:1}),o(p,{type:"primary",onClick:H},{default:r((()=>[i("确 定")])),_:1})])])),default:r((()=>[o(Q,{inline:!0,model:x.value,"label-width":"80px"},{default:r((()=>[o(M,{label:"客户名"},{default:r((()=>[o(K,{modelValue:x.value.customerName,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value.customerName=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(M,{label:"客户电话"},{default:r((()=>[o(K,{modelValue:x.value.customerPhoneData,"onUpdate:modelValue":a[1]||(a[1]=e=>x.value.customerPhoneData=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}});export{V as default};
