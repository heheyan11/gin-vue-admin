/*! 
 Build based on gin-vue-admin 
 Time : 1699796219000 */
import{a as e,o as a,h as l,w as t,d as o,b as i,g as r,c as s,M as u,N as n,G as d,t as m,a1 as p,k as c,l as v,E as g,J as h,V as y,e as B,d6 as f,d7 as C,d8 as b,d9 as w,da as E,S as D,db as I}from"./087AC4D233B64EB0index.js";import{E as j}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import{a as k,E as V}from"./087AC4D233B64EB0form-item.js";/* empty css                     */import{E as A}from"./087AC4D233B64EB0pagination.js";import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as _,a as x}from"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       */import{E as U}from"./087AC4D233B64EB0popover.js";import{E as N}from"./087AC4D233B64EB0switch.js";import{E as z}from"./087AC4D233B64EB0cascader-panel.js";import"./087AC4D233B64EB0radio.js";/* empty css                      */import{g as S}from"./087AC4D233B64EB0authority2.js";import{C as O}from"./087AC4D233B64EB0index23.js";import{E as T}from"./087AC4D233B64EB0drawer.js";import{E as q}from"./087AC4D233B64EB0image-viewer.js";/* empty css                     */import{_ as J,U as F,a as P,g as K,e as M}from"./087AC4D233B64EB0common.js";import{_ as R}from"./087AC4D233B64EB0warningBar.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0dropdown.js";import"./087AC4D233B64EB0rand.js";import"./087AC4D233B64EB0arrays.js";import"./087AC4D233B64EB0cloneDeep.js";import"./087AC4D233B64EB0_plugin-vue_export-helper.js";import"./087AC4D233B64EB0upload2.js";import"./087AC4D233B64EB0progress.js";const $={class:"gva-btn-list"},G={class:"media"},Z={class:"header-img-box-list"},H={class:"header-img-box-list"},L=i("picture",null,null,-1),Q=["onClick"],W={__name:"index",props:{target:{type:Object,default:null},targetKey:{type:String,default:""}},emits:["enterImg"],setup(y,{expose:B,emit:f}){const C=e(""),b=e(""),w=e({}),E=e(1),D=e(0),I=e(20),j=e=>{I.value=e,z()},_=e=>{E.value=e,z()},x=f,U=e(!1),N=e([]),z=async()=>{const e=await K({page:E.value,pageSize:I.value,...w.value});0===e.code&&(N.value=e.data.list,D.value=e.data.total,E.value=e.data.page,I.value=e.data.pageSize,U.value=!0)};return B({open:z}),(e,B)=>{const f=v,S=k,O=g,K=V,W=h,X=q,Y=A,ee=T;return a(),l(ee,{modelValue:U.value,"onUpdate:modelValue":B[3]||(B[3]=e=>U.value=e),title:"媒体库",size:"650px"},{default:t((()=>[o(R,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),i("div",$,[o(J,{imageCommon:b.value,"onUpdate:imageCommon":B[0]||(B[0]=e=>b.value=e),class:"upload-btn-media-library",onOnSuccess:z},null,8,["imageCommon"]),o(F,{imageUrl:C.value,"onUpdate:imageUrl":B[1]||(B[1]=e=>C.value=e),"file-size":512,"max-w-h":1080,class:"upload-btn-media-library",onOnSuccess:z},null,8,["imageUrl"]),o(K,{ref:"searchForm",inline:!0,model:w.value},{default:t((()=>[o(S,{label:""},{default:t((()=>[o(f,{modelValue:w.value.keyword,"onUpdate:modelValue":B[2]||(B[2]=e=>w.value.keyword=e),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"])])),_:1}),o(S,null,{default:t((()=>[o(O,{type:"primary",icon:"search",onClick:z},{default:t((()=>[r("查询")])),_:1})])),_:1})])),_:1},8,["model"])]),i("div",G,[(a(!0),s(u,null,n(N.value,((e,r)=>(a(),s("div",{key:r,class:"media-box"},[i("div",Z,[(a(),l(X,{key:r,src:d(P)(e.url),onClick:a=>{return l=e.url,t=y.target,o=y.targetKey,t&&o&&(t[o]=l),x("enterImg",l),void(U.value=!1);var l,t,o}},{error:t((()=>[i("div",H,[o(W,null,{default:t((()=>[L])),_:1})])])),_:2},1032,["src","onClick"]))]),i("div",{class:"img-title",onClick:a=>(async e=>{p.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:e.name}).then((async({value:a})=>{e.name=a,0===(await M(e)).code&&(c({type:"success",message:"编辑成功!"}),z())})).catch((()=>{c({type:"info",message:"取消修改"})}))})(e)},m(e.name),9,Q)])))),128))]),o(Y,{"current-page":E.value,"page-size":I.value,total:D.value,style:{"justify-content":"center"},layout:"total, prev, pager, next, jumper",onCurrentChange:_,onSizeChange:j},null,8,["current-page","page-size","total"])])),_:1},8,["modelValue"])}}},X={class:"gva-table-box"},Y={class:"gva-btn-list"},ee=i("p",null,"确定要删除此用户吗",-1),ae={style:{"text-align":"right","margin-top":"8px"}},le={class:"gva-pagination"},te={style:{height:"60vh",overflow:"auto",padding:"0 12px"}},oe=["src"],ie={key:1,class:"header-img-box"},re={class:"dialog-footer"},se=Object.assign({name:"User"},{__name:"user",setup(u){const n=e("/api/"),d=(e,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const l={authorityId:e.authorityId,authorityName:e.authorityName,children:[]};d(e.children,l.children),a.push(l)}else{const l={authorityId:e.authorityId,authorityName:e.authorityName};a.push(l)}}))},m=e(1),h=e(0),T=e(10),q=e([]),J=e=>{T.value=e,P()},F=e=>{m.value=e,P()},P=async()=>{const e=await f({page:m.value,pageSize:T.value});0===e.code&&(q.value=e.data.list,h.value=e.data.total,m.value=e.data.page,T.value=e.data.pageSize)};y((()=>q.value),(()=>{K()}));(async()=>{P();const e=await S({page:1,pageSize:999});Z(e.data.list)})();const K=()=>{q.value&&q.value.forEach((e=>{e.authorityIds=e.authorities&&e.authorities.map((e=>e.authorityId))}))},M=e(null),$=()=>{M.value.open()},G=e([]),Z=e=>{G.value=[],d(e,G.value)},H=e({username:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[],enable:1}),L=e({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,message:"最低5位字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,message:"最低6位字符",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}],phone:[{pattern:/^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/,message:"请输入合法手机号",trigger:"blur"}],email:[{pattern:/^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,message:"请输入正确的邮箱",trigger:"blur"}],authorityId:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}),Q=e(null),se=async()=>{H.value.authorityId=H.value.authorityIds[0],Q.value.validate((async e=>{if(e){const e={...H.value};if("add"===de.value){0===(await w(e)).code&&(c({type:"success",message:"创建成功"}),await P(),ne())}if("edit"===de.value){0===(await E(e)).code&&(c({type:"success",message:"编辑成功"}),await P(),ne())}}}))},ue=e(!1),ne=()=>{Q.value.resetFields(),H.value.headerImg="",H.value.authorityIds=[],ue.value=!1},de=e("add"),me=()=>{de.value="add",ue.value=!0},pe={},ce=async(e,a,l)=>{if(a)return void(l||(pe[e.ID]=[...e.authorityIds]));await D();0===(await I({ID:e.ID,authorityIds:e.authorityIds})).code?c({type:"success",message:"角色设置成功"}):l?e.authorityIds=[l,...e.authorityIds]:(e.authorityIds=[...pe[e.ID]],delete pe[e.ID])};return(e,u)=>{const d=g,y=_,f=z,w=N,I=U,S=x,K=A,Z=v,pe=k,ve=V,ge=j;return a(),s("div",null,[o(R,{title:"注：右上角头像下拉可切换角色"}),i("div",X,[i("div",Y,[o(d,{type:"primary",icon:"plus",onClick:me},{default:t((()=>[r("新增用户")])),_:1})]),o(S,{data:q.value,"row-key":"ID"},{default:t((()=>[o(y,{align:"left",label:"头像","min-width":"75"},{default:t((e=>[o(O,{style:{"margin-top":"8px"},"pic-src":e.row.headerImg},null,8,["pic-src"])])),_:1}),o(y,{align:"left",label:"ID","min-width":"50",prop:"ID"}),o(y,{align:"left",label:"用户名","min-width":"150",prop:"userName"}),o(y,{align:"left",label:"昵称","min-width":"150",prop:"nickName"}),o(y,{align:"left",label:"手机号","min-width":"180",prop:"phone"}),o(y,{align:"left",label:"邮箱","min-width":"180",prop:"email"}),o(y,{align:"left",label:"用户角色","min-width":"200"},{default:t((e=>[o(f,{modelValue:e.row.authorityIds,"onUpdate:modelValue":a=>e.row.authorityIds=a,options:G.value,"show-all-levels":!1,"collapse-tags":"",props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1,onVisibleChange:a=>{ce(e.row,a,0)},onRemoveTag:a=>{ce(e.row,!1,a)}},null,8,["modelValue","onUpdate:modelValue","options","onVisibleChange","onRemoveTag"])])),_:1}),o(y,{align:"left",label:"启用","min-width":"150"},{default:t((e=>[o(w,{modelValue:e.row.enable,"onUpdate:modelValue":a=>e.row.enable=a,"inline-prompt":"","active-value":1,"inactive-value":2,onChange:()=>{(async e=>{H.value=JSON.parse(JSON.stringify(e)),await D();const a={...H.value};0===(await E(a)).code&&(c({type:"success",message:"".concat(2===a.enable?"禁用":"启用","成功")}),await P(),H.value.headerImg="",H.value.authorityIds=[])})(e.row)}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),o(y,{label:"操作","min-width":"250",fixed:"right"},{default:t((e=>[o(I,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:t((()=>[o(d,{type:"primary",link:"",icon:"delete"},{default:t((()=>[r("删除")])),_:1})])),default:t((()=>[ee,i("div",ae,[o(d,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:t((()=>[r("取消")])),_:2},1032,["onClick"]),o(d,{type:"primary",onClick:a=>(async e=>{0===(await b({id:e.ID})).code&&(c.success("删除成功"),e.visible=!1,await P())})(e.row)},{default:t((()=>[r("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"]),o(d,{type:"primary",link:"",icon:"edit",onClick:a=>{return l=e.row,de.value="edit",H.value=JSON.parse(JSON.stringify(l)),void(ue.value=!0);var l}},{default:t((()=>[r("编辑")])),_:2},1032,["onClick"]),o(d,{type:"primary",link:"",icon:"magic-stick",onClick:a=>{return l=e.row,void p.confirm("是否将此用户密码重置为123456?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const e=await C({ID:l.ID});0===e.code?c({type:"success",message:e.msg}):c({type:"error",message:e.msg})}));var l}},{default:t((()=>[r("重置密码")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),i("div",le,[o(K,{"current-page":m.value,"page-size":T.value,"page-sizes":[10,30,50,100],total:h.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:F,onSizeChange:J},null,8,["current-page","page-size","total"])])]),o(ge,{modelValue:ue.value,"onUpdate:modelValue":u[7]||(u[7]=e=>ue.value=e),title:"用户","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:t((()=>[i("div",re,[o(d,{onClick:ne},{default:t((()=>[r("取 消")])),_:1}),o(d,{type:"primary",onClick:se},{default:t((()=>[r("确 定")])),_:1})])])),default:t((()=>[i("div",te,[o(ve,{ref_key:"userForm",ref:Q,rules:L.value,model:H.value,"label-width":"80px"},{default:t((()=>["add"===de.value?(a(),l(pe,{key:0,label:"用户名",prop:"userName"},{default:t((()=>[o(Z,{modelValue:H.value.userName,"onUpdate:modelValue":u[0]||(u[0]=e=>H.value.userName=e)},null,8,["modelValue"])])),_:1})):B("",!0),"add"===de.value?(a(),l(pe,{key:1,label:"密码",prop:"password"},{default:t((()=>[o(Z,{modelValue:H.value.password,"onUpdate:modelValue":u[1]||(u[1]=e=>H.value.password=e)},null,8,["modelValue"])])),_:1})):B("",!0),o(pe,{label:"昵称",prop:"nickName"},{default:t((()=>[o(Z,{modelValue:H.value.nickName,"onUpdate:modelValue":u[2]||(u[2]=e=>H.value.nickName=e)},null,8,["modelValue"])])),_:1}),o(pe,{label:"手机号",prop:"phone"},{default:t((()=>[o(Z,{modelValue:H.value.phone,"onUpdate:modelValue":u[3]||(u[3]=e=>H.value.phone=e)},null,8,["modelValue"])])),_:1}),o(pe,{label:"邮箱",prop:"email"},{default:t((()=>[o(Z,{modelValue:H.value.email,"onUpdate:modelValue":u[4]||(u[4]=e=>H.value.email=e)},null,8,["modelValue"])])),_:1}),o(pe,{label:"用户角色",prop:"authorityId"},{default:t((()=>[o(f,{modelValue:H.value.authorityIds,"onUpdate:modelValue":u[5]||(u[5]=e=>H.value.authorityIds=e),style:{width:"100%"},options:G.value,"show-all-levels":!1,props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1},null,8,["modelValue","options"])])),_:1}),o(pe,{label:"启用",prop:"disabled"},{default:t((()=>[o(w,{modelValue:H.value.enable,"onUpdate:modelValue":u[6]||(u[6]=e=>H.value.enable=e),"inline-prompt":"","active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),o(pe,{label:"头像","label-width":"80px"},{default:t((()=>[i("div",{style:{display:"inline-block"},onClick:$},[H.value.headerImg?(a(),s("img",{key:0,alt:"头像",class:"header-img-box",src:H.value.headerImg&&"http"!==H.value.headerImg.slice(0,4)?n.value+H.value.headerImg:H.value.headerImg},null,8,oe)):(a(),s("div",ie,"从媒体库选择"))])])),_:1})])),_:1},8,["rules","model"])])])),_:1},8,["modelValue"]),o(W,{ref_key:"chooseImg",ref:M,target:H.value,"target-key":"headerImg"},null,8,["target"])])}}});export{se as default};
