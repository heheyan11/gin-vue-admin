/*! 
 Build based on gin-vue-admin 
 Time : 1698981314000 */
import{a,o as e,c as t,d as l,b as o,w as r,g as i,G as u,cO as d,h as s,e as n,a4 as p,k as m,E as h,J as y,l as c}from"./087AC4D233B64EB0index.js";import{E as v}from"./087AC4D233B64EB0drawer.js";import"./087AC4D233B64EB0overlay.js";import{E as B,a as f}from"./087AC4D233B64EB0tab-pane.js";import{E as C}from"./087AC4D233B64EB0dialog.js";import{a as E,E as I}from"./087AC4D233B64EB0form-item.js";/* empty css                     */import{E as A}from"./087AC4D233B64EB0cascader-panel.js";/* empty css                      */import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0checkbox.js";import"./087AC4D233B64EB0radio.js";import"./087AC4D233B64EB0scrollbar.js";import{E as b,a as D}from"./087AC4D233B64EB0table-column.js";/* empty css                       *//* empty css                     *//* empty css                      */import{g,d as j,c as w,u as _,a as k}from"./087AC4D233B64EB0authority2.js";import N from"./087AC4D233B64EB0menus.js";import V from"./087AC4D233B64EB0apis.js";import x from"./087AC4D233B64EB0datas.js";import{_ as U}from"./087AC4D233B64EB0warningBar.js";import{t as q}from"./087AC4D233B64EB0doc.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0rand.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0arrays.js";import"./087AC4D233B64EB0cloneDeep.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0tree.js";import"./087AC4D233B64EB0index25.js";import"./087AC4D233B64EB0authorityBtn.js";import"./087AC4D233B64EB0_plugin-vue_export-helper.js";import"./087AC4D233B64EB0api2.js";/* empty css                              */const S={class:"authority"},z={class:"gva-table-box"},O={class:"gva-btn-list"},R={class:"dialog-footer"},T=Object.assign({name:"Authority"},{__name:"authority",setup(T){const F=a([{authorityId:0,authorityName:"根角色"}]),G=a(!1),J=a("add"),P=a({}),$=a("新增角色"),H=a(!1),K=a(!1),L=a({}),M=a({authorityId:0,authorityName:"",parentId:0}),Q=a({authorityId:[{required:!0,message:"请输入角色ID",trigger:"blur"},{validator:(a,e,t)=>/^[0-9]*[1-9][0-9]*$/.test(e)?t():t(new Error("请输入正整数")),trigger:"blur",message:"必须为正整数"}],authorityName:[{required:!0,message:"请输入角色名",trigger:"blur"}],parentId:[{required:!0,message:"请选择父角色",trigger:"blur"}]}),W=a(1),X=a(0),Y=a(999),Z=a([]),aa=a({}),ea=async()=>{const a=await g({page:W.value,pageSize:Y.value,...aa.value});0===a.code&&(Z.value=a.data.list,X.value=a.data.total,W.value=a.data.page,Y.value=a.data.pageSize)};ea();const ta=(a,e)=>{P.value[a]=e},la=a(null),oa=a(null),ra=a(null),ia=(a,e)=>{const t=[la,oa,ra];e&&t[e].value.needConfirm&&(t[e].value.enterAndNext(),t[e].value.needConfirm=!1)},ua=a(null),da=()=>{ua.value&&ua.value.resetFields(),M.value={authorityId:0,authorityName:"",parentId:0}},sa=()=>{da(),H.value=!1,K.value=!1},na=()=>{ua.value.validate((async a=>{if(a){switch(M.value.authorityId=Number(M.value.authorityId),J.value){case"add":0===(await k(M.value)).code&&(m({type:"success",message:"添加成功!"}),ea(),sa());break;case"edit":0===(await _(M.value)).code&&(m({type:"success",message:"添加成功!"}),ea(),sa());break;case"copy":{const a={authority:{authorityId:0,authorityName:"",datauthorityId:[],parentId:0},oldAuthorityId:0};a.authority.authorityId=M.value.authorityId,a.authority.authorityName=M.value.authorityName,a.authority.parentId=M.value.parentId,a.authority.dataAuthorityId=L.value.dataAuthorityId,a.oldAuthorityId=L.value.authorityId;0===(await w(a)).code&&(m({type:"success",message:"复制成功！"}),ea())}}da(),H.value=!1}}))},pa=()=>{F.value=[{authorityId:0,authorityName:"根角色"}],ma(Z.value,F.value,!1)},ma=(a,e,t)=>{M.value.authorityId=String(M.value.authorityId),a&&a.forEach((a=>{if(a.children&&a.children.length){const l={authorityId:a.authorityId,authorityName:a.authorityName,disabled:t||a.authorityId===M.value.authorityId,children:[]};ma(a.children,l.children,t||a.authorityId===M.value.authorityId),e.push(l)}else{const l={authorityId:a.authorityId,authorityName:a.authorityName,disabled:t||a.authorityId===M.value.authorityId};e.push(l)}}))},ha=a=>{da(),$.value="新增角色",J.value="add",M.value.parentId=a,pa(),H.value=!0};return(a,g)=>{const w=h,_=y,k=b,T=D,K=A,X=E,Y=c,aa=I,da=C,ma=B,ya=f,ca=v;return e(),t("div",S,[l(U,{title:"注：右上角头像下拉可切换角色"}),o("div",z,[o("div",O,[l(w,{type:"primary",icon:"plus",onClick:g[0]||(g[0]=a=>ha(0))},{default:r((()=>[i("新增角色")])),_:1}),l(_,{class:"cursor-pointer",onClick:g[1]||(g[1]=a=>u(q)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=8&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:r((()=>[l(u(d))])),_:1})]),l(T,{data:Z.value,"tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"authorityId",style:{width:"100%"}},{default:r((()=>[l(k,{label:"角色ID","min-width":"180",prop:"authorityId"}),l(k,{align:"left",label:"角色名称","min-width":"180",prop:"authorityName"}),l(k,{align:"left",label:"操作",width:"460"},{default:r((a=>[l(w,{icon:"setting",type:"primary",link:"",onClick:e=>{return t=a.row,G.value=!0,void(P.value=t);var t}},{default:r((()=>[i("设置权限")])),_:2},1032,["onClick"]),l(w,{icon:"plus",type:"primary",link:"",onClick:e=>ha(a.row.authorityId)},{default:r((()=>[i("新增子角色")])),_:2},1032,["onClick"]),l(w,{icon:"copy-document",type:"primary",link:"",onClick:e=>(a=>{pa(),$.value="拷贝角色",J.value="copy";for(const e in M.value)M.value[e]=a[e];L.value=a,H.value=!0})(a.row)},{default:r((()=>[i("拷贝")])),_:2},1032,["onClick"]),l(w,{icon:"edit",type:"primary",link:"",onClick:e=>(a=>{pa(),$.value="编辑角色",J.value="edit";for(const e in M.value)M.value[e]=a[e];pa(),H.value=!0})(a.row)},{default:r((()=>[i("编辑")])),_:2},1032,["onClick"]),l(w,{icon:"delete",type:"primary",link:"",onClick:e=>{return t=a.row,void p.confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await j({authorityId:t.authorityId})).code&&(m({type:"success",message:"删除成功!"}),1===Z.value.length&&W.value>1&&W.value--,ea())})).catch((()=>{m({type:"info",message:"已取消删除"})}));var t}},{default:r((()=>[i("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),l(da,{modelValue:H.value,"onUpdate:modelValue":g[5]||(g[5]=a=>H.value=a),title:$.value},{footer:r((()=>[o("div",R,[l(w,{onClick:sa},{default:r((()=>[i("取 消")])),_:1}),l(w,{type:"primary",onClick:na},{default:r((()=>[i("确 定")])),_:1})])])),default:r((()=>[l(aa,{ref_key:"authorityForm",ref:ua,model:M.value,rules:Q.value,"label-width":"80px"},{default:r((()=>[l(X,{label:"父级角色",prop:"parentId"},{default:r((()=>[l(K,{modelValue:M.value.parentId,"onUpdate:modelValue":g[2]||(g[2]=a=>M.value.parentId=a),style:{width:"100%"},disabled:"add"===J.value,options:F.value,props:{checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1}),l(X,{label:"角色ID",prop:"authorityId"},{default:r((()=>[l(Y,{modelValue:M.value.authorityId,"onUpdate:modelValue":g[3]||(g[3]=a=>M.value.authorityId=a),disabled:"edit"===J.value,autocomplete:"off",maxlength:"15"},null,8,["modelValue","disabled"])])),_:1}),l(X,{label:"角色姓名",prop:"authorityName"},{default:r((()=>[l(Y,{modelValue:M.value.authorityName,"onUpdate:modelValue":g[4]||(g[4]=a=>M.value.authorityName=a),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"]),G.value?(e(),s(ca,{key:0,modelValue:G.value,"onUpdate:modelValue":g[6]||(g[6]=a=>G.value=a),"custom-class":"auth-drawer","with-header":!1,size:"40%",title:"角色配置"},{default:r((()=>[l(ya,{"before-leave":ia,type:"border-card"},{default:r((()=>[l(ma,{label:"角色菜单"},{default:r((()=>[l(N,{ref_key:"menus",ref:la,row:P.value,onChangeRow:ta},null,8,["row"])])),_:1}),l(ma,{label:"角色api"},{default:r((()=>[l(V,{ref_key:"apis",ref:oa,row:P.value,onChangeRow:ta},null,8,["row"])])),_:1}),l(ma,{label:"资源权限"},{default:r((()=>[l(x,{ref_key:"datas",ref:ra,authority:Z.value,row:P.value,onChangeRow:ta},null,8,["authority","row"])])),_:1})])),_:1})])),_:1},8,["modelValue"])):n("",!0)])}}});export{T as default};
