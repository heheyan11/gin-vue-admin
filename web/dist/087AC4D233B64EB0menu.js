/*! 
 Build based on gin-vue-admin 
 Time : 1698979068000 */
import{r as e,a as l,o as a,c as t,b as o,d as i,w as u,g as d,G as n,cO as r,t as p,h as s,I as m,e as c,d0 as v,d1 as f,a4 as h,d2 as b,k as w,d3 as B,d4 as y,d5 as g,E as _,J as V,l as D,p as C,i as k}from"./087AC4D233B64EB0index.js";import{E}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import{a as A,E as j}from"./087AC4D233B64EB0form-item.js";/* empty css                       *//* empty css                      */import{E as I}from"./087AC4D233B64EB0cascader-panel.js";/* empty css                     */import"./087AC4D233B64EB0tag.js";import{E as x}from"./087AC4D233B64EB0checkbox.js";import"./087AC4D233B64EB0radio.js";import"./087AC4D233B64EB0scrollbar.js";import{E as U,a as T}from"./087AC4D233B64EB0select.js";import{E as N,a as q}from"./087AC4D233B64EB0table-column.js";/* empty css                     *//* empty css                      */import M from"./087AC4D233B64EB0icon.js";import{_ as S}from"./087AC4D233B64EB0warningBar.js";import{c as z}from"./087AC4D233B64EB0authorityBtn.js";import{t as O}from"./087AC4D233B64EB0doc.js";import{_ as P}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";import{E as F}from"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0rand.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0arrays.js";import"./087AC4D233B64EB0cloneDeep.js";import"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0hasIn.js";const $=e=>(C("data-v-73be144b"),e=e(),k(),e),G={class:"gva-table-box"},H={class:"gva-btn-list"},J={key:0,class:"icon-column"},K={style:{display:"inline-flex","align-items":"center"}},L=$((()=>o("span",null,"路由Path",-1))),Q=$((()=>o("span",{style:{"font-size":"12px","margin-right":"12px"}},"如果菜单包含子菜单，请创建router-view二级路由页面或者",-1))),R=$((()=>o("span",null," 高亮菜单 ",-1))),W=$((()=>o("span",null," 是否为基础页面 ",-1))),X={class:"flex items-center gap-2"},Y={class:"flex items-center gap-2 mt-3"},Z={class:"dialog-footer"},ee=P(Object.assign({name:"Menus"},{__name:"menu",setup(C){const k=e({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],component:[{required:!0,message:"请输入文件路径",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),P=l(1),$=l(0),ee=l(999),le=l([]),ae=l({}),te=async()=>{const e=await f({page:P.value,pageSize:ee.value,...ae.value});0===e.code&&(le.value=e.data.list,$.value=e.data.total,P.value=e.data.page,ee.value=e.data.pageSize)};te();const oe=()=>{ie.value.component=ie.value.component.replace(/\\/g,"/")},ie=l({ID:0,path:"",name:"",hidden:!1,parentId:"",component:"",meta:{activeName:"",title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1},parameters:[],menuBtn:[]}),ue=()=>{ie.value.path=ie.value.name},de=e=>{pe(),e()},ne=l(null),re=l(!1),pe=()=>{re.value=!1,ne.value.resetFields(),ie.value={ID:0,path:"",name:"",hidden:!1,parentId:"",component:"",meta:{title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1}}},se=l(!1),me=()=>{pe(),se.value=!1},ce=async()=>{ne.value.validate((async e=>{if(e){let e;e=be.value?await B(ie.value):await y(ie.value),0===e.code&&(w({type:"success",message:be.value?"编辑成功":"添加成功!"}),te()),pe(),se.value=!1}}))},ve=l([{ID:"0",title:"根菜单"}]),fe=()=>{ve.value=[{ID:"0",title:"根目录"}],he(le.value,ve.value,!1)},he=(e,l,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const t={title:e.meta.title,ID:String(e.ID),disabled:a||e.ID===ie.value.ID,children:[]};he(e.children,t.children,a||e.ID===ie.value.ID),l.push(t)}else{const t={title:e.meta.title,ID:String(e.ID),disabled:a||e.ID===ie.value.ID};l.push(t)}}))},be=l(!1),we=l("新增菜单"),Be=e=>{we.value="新增菜单",ie.value.parentId=String(e),be.value=!1,fe(),se.value=!0};return(e,l)=>{const f=_,B=V,y=N,C=q,$=D,ee=A,ae=x,pe=U,he=T,ye=I,ge=F,_e=j,Ve=E;return a(),t("div",null,[o("div",G,[o("div",H,[i(f,{type:"primary",icon:"plus",onClick:l[0]||(l[0]=e=>Be("0"))},{default:u((()=>[d("新增根菜单")])),_:1}),i(B,{class:"cursor-pointer",onClick:l[1]||(l[1]=e=>n(O)("https://www.bilibili.com/video/BV1kv4y1g7nT/?p=4&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:u((()=>[i(n(r))])),_:1})]),i(C,{data:le.value,"row-key":"ID"},{default:u((()=>[i(y,{align:"left",label:"ID","min-width":"100",prop:"ID"}),i(y,{align:"left",label:"展示名称","min-width":"120",prop:"authorityName"},{default:u((e=>[o("span",null,p(e.row.meta.title),1)])),_:1}),i(y,{align:"left",label:"图标","min-width":"140",prop:"authorityName"},{default:u((e=>[e.row.meta.icon?(a(),t("div",J,[i(B,null,{default:u((()=>[(a(),s(m(e.row.meta.icon)))])),_:2},1024),o("span",null,p(e.row.meta.icon),1)])):c("",!0)])),_:1}),i(y,{align:"left",label:"路由Name","show-overflow-tooltip":"","min-width":"160",prop:"name"}),i(y,{align:"left",label:"路由Path","show-overflow-tooltip":"","min-width":"160",prop:"path"}),i(y,{align:"left",label:"是否隐藏","min-width":"100",prop:"hidden"},{default:u((e=>[o("span",null,p(e.row.hidden?"隐藏":"显示"),1)])),_:1}),i(y,{align:"left",label:"父节点","min-width":"90",prop:"parentId"}),i(y,{align:"left",label:"排序","min-width":"70",prop:"sort"}),i(y,{align:"left",label:"文件路径","min-width":"360",prop:"component"}),i(y,{align:"left",fixed:"right",label:"操作",width:"300"},{default:u((e=>[i(f,{type:"primary",link:"",icon:"plus",onClick:l=>Be(e.row.ID)},{default:u((()=>[d("添加子菜单")])),_:2},1032,["onClick"]),i(f,{type:"primary",link:"",icon:"edit",onClick:l=>(async e=>{we.value="编辑菜单";const l=await g({id:e});ie.value=l.data.menu,be.value=!0,fe(),se.value=!0})(e.row.ID)},{default:u((()=>[d("编辑")])),_:2},1032,["onClick"]),i(f,{type:"primary",link:"",icon:"delete",onClick:l=>{return a=e.row.ID,void h.confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await b({ID:a})).code&&(w({type:"success",message:"删除成功!"}),1===le.value.length&&P.value>1&&P.value--,te())})).catch((()=>{w({type:"info",message:"已取消删除"})}));var a}},{default:u((()=>[d("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),i(Ve,{modelValue:se.value,"onUpdate:modelValue":l[20]||(l[20]=e=>se.value=e),"before-close":de,title:we.value},{footer:u((()=>[o("div",Z,[i(f,{onClick:me},{default:u((()=>[d("取 消")])),_:1}),i(f,{type:"primary",onClick:ce},{default:u((()=>[d("确 定")])),_:1})])])),default:u((()=>[i(S,{title:"新增菜单，需要在角色管理内配置权限才可使用"}),se.value?(a(),s(_e,{key:0,ref_key:"menuForm",ref:ne,inline:!0,model:ie.value,rules:k,"label-position":"top","label-width":"85px"},{default:u((()=>[i(ee,{label:"路由Name",prop:"path",style:{width:"30%"}},{default:u((()=>[i($,{modelValue:ie.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>ie.value.name=e),autocomplete:"off",placeholder:"唯一英文字符串",onChange:ue},null,8,["modelValue"])])),_:1}),i(ee,{prop:"path",style:{width:"30%"}},{label:u((()=>[o("span",K,[L,i(ae,{modelValue:re.value,"onUpdate:modelValue":l[3]||(l[3]=e=>re.value=e),style:{"margin-left":"12px",height:"auto"}},{default:u((()=>[d("添加参数")])),_:1},8,["modelValue"])])])),default:u((()=>[i($,{modelValue:ie.value.path,"onUpdate:modelValue":l[4]||(l[4]=e=>ie.value.path=e),disabled:!re.value,autocomplete:"off",placeholder:"建议只在后方拼接参数"},null,8,["modelValue","disabled"])])),_:1}),i(ee,{label:"是否隐藏",style:{width:"30%"}},{default:u((()=>[i(he,{modelValue:ie.value.hidden,"onUpdate:modelValue":l[5]||(l[5]=e=>ie.value.hidden=e),placeholder:"是否在列表隐藏"},{default:u((()=>[i(pe,{value:!1,label:"否"}),i(pe,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),i(ee,{label:"父节点ID",style:{width:"30%"}},{default:u((()=>[i(ye,{modelValue:ie.value.parentId,"onUpdate:modelValue":l[6]||(l[6]=e=>ie.value.parentId=e),style:{width:"100%"},disabled:!be.value,options:ve.value,props:{checkStrictly:!0,label:"title",value:"ID",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1}),i(ee,{label:"文件路径",prop:"component",style:{width:"60%"}},{default:u((()=>[i($,{modelValue:ie.value.component,"onUpdate:modelValue":l[7]||(l[7]=e=>ie.value.component=e),autocomplete:"off",placeholder:"页面:view/xxx/xx.vue 插件:plugin/xx/xx.vue",onBlur:oe},null,8,["modelValue"]),Q,i(f,{style:{"margin-top":"4px"},onClick:l[8]||(l[8]=e=>ie.value.component="view/routerHolder.vue")},{default:u((()=>[d("点我设置")])),_:1})])),_:1}),i(ee,{label:"展示名称",prop:"meta.title",style:{width:"30%"}},{default:u((()=>[i($,{modelValue:ie.value.meta.title,"onUpdate:modelValue":l[9]||(l[9]=e=>ie.value.meta.title=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),i(ee,{label:"图标",prop:"meta.icon",style:{width:"30%"}},{default:u((()=>[i(M,{meta:ie.value.meta,style:{width:"100%"}},null,8,["meta"])])),_:1}),i(ee,{label:"排序标记",prop:"sort",style:{width:"30%"}},{default:u((()=>[i($,{modelValue:ie.value.sort,"onUpdate:modelValue":l[10]||(l[10]=e=>ie.value.sort=e),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])])),_:1}),i(ee,{prop:"meta.activeName",style:{width:"30%"}},{label:u((()=>[o("div",null,[R,i(ge,{content:"注：当到达此路由时候，指定左侧菜单指定name会处于活跃状态（亮起），可为空，为空则为本路由Name。",placement:"top",effect:"light"},{default:u((()=>[i(B,null,{default:u((()=>[i(n(v))])),_:1})])),_:1})])])),default:u((()=>[i($,{modelValue:ie.value.meta.activeName,"onUpdate:modelValue":l[11]||(l[11]=e=>ie.value.meta.activeName=e),placeholder:ie.value.name,autocomplete:"off"},null,8,["modelValue","placeholder"])])),_:1}),i(ee,{label:"KeepAlive",prop:"meta.keepAlive",style:{width:"30%"}},{default:u((()=>[i(he,{modelValue:ie.value.meta.keepAlive,"onUpdate:modelValue":l[12]||(l[12]=e=>ie.value.meta.keepAlive=e),style:{width:"100%"},placeholder:"是否keepAlive缓存页面"},{default:u((()=>[i(pe,{value:!1,label:"否"}),i(pe,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),i(ee,{label:"CloseTab",prop:"meta.closeTab",style:{width:"30%"}},{default:u((()=>[i(he,{modelValue:ie.value.meta.closeTab,"onUpdate:modelValue":l[13]||(l[13]=e=>ie.value.meta.closeTab=e),style:{width:"100%"},placeholder:"是否自动关闭tab"},{default:u((()=>[i(pe,{value:!1,label:"否"}),i(pe,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),i(ee,{style:{width:"30%"}},{label:u((()=>[o("div",null,[W,i(ge,{content:"此项选择为是，则不会展示左侧菜单以及顶部信息。",placement:"top",effect:"light"},{default:u((()=>[i(B,null,{default:u((()=>[i(n(v))])),_:1})])),_:1})])])),default:u((()=>[i(he,{modelValue:ie.value.meta.defaultMenu,"onUpdate:modelValue":l[14]||(l[14]=e=>ie.value.meta.defaultMenu=e),style:{width:"100%"},placeholder:"是否为基础页面"},{default:u((()=>[i(pe,{value:!1,label:"否"}),i(pe,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])):c("",!0),o("div",null,[o("div",X,[i(f,{type:"primary",icon:"edit",onClick:l[15]||(l[15]=e=>{return(l=ie.value).parameters||(l.parameters=[]),void l.parameters.push({type:"query",key:"",value:""});var l})},{default:u((()=>[d("新增菜单参数")])),_:1}),i(B,{class:"cursor-pointer",onClick:l[16]||(l[16]=e=>n(O)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=9&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:u((()=>[i(n(r))])),_:1})]),i(C,{data:ie.value.parameters,style:{width:"100%","margin-top":"12px"}},{default:u((()=>[i(y,{align:"left",prop:"type",label:"参数类型",width:"180"},{default:u((e=>[i(he,{modelValue:e.row.type,"onUpdate:modelValue":l=>e.row.type=l,placeholder:"请选择"},{default:u((()=>[i(pe,{key:"query",value:"query",label:"query"}),i(pe,{key:"params",value:"params",label:"params"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),i(y,{align:"left",prop:"key",label:"参数key",width:"180"},{default:u((e=>[o("div",null,[i($,{modelValue:e.row.key,"onUpdate:modelValue":l=>e.row.key=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(y,{align:"left",prop:"value",label:"参数值"},{default:u((e=>[o("div",null,[i($,{modelValue:e.row.value,"onUpdate:modelValue":l=>e.row.value=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(y,{align:"left"},{default:u((e=>[o("div",null,[i(f,{type:"danger",icon:"delete",onClick:l=>{return a=ie.value.parameters,t=e.$index,void a.splice(t,1);var a,t}},{default:u((()=>[d("删除")])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),o("div",Y,[i(f,{type:"primary",icon:"edit",onClick:l[17]||(l[17]=e=>{return(l=ie.value).menuBtn||(l.menuBtn=[]),void l.menuBtn.push({name:"",desc:""});var l})},{default:u((()=>[d("新增可控按钮 ")])),_:1}),i(B,{class:"cursor-pointer",onClick:l[18]||(l[18]=e=>n(O)("https://www.gin-vue-admin.com/guide/web/button-auth.html"))},{default:u((()=>[i(n(v))])),_:1}),i(B,{class:"cursor-pointer",onClick:l[19]||(l[19]=e=>n(O)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=11&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:u((()=>[i(n(r))])),_:1})]),i(C,{data:ie.value.menuBtn,style:{width:"100%","margin-top":"12px"}},{default:u((()=>[i(y,{align:"left",prop:"name",label:"按钮名称",width:"180"},{default:u((e=>[o("div",null,[i($,{modelValue:e.row.name,"onUpdate:modelValue":l=>e.row.name=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(y,{align:"left",prop:"name",label:"备注",width:"180"},{default:u((e=>[o("div",null,[i($,{modelValue:e.row.desc,"onUpdate:modelValue":l=>e.row.desc=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(y,{align:"left"},{default:u((e=>[o("div",null,[i(f,{type:"danger",icon:"delete",onClick:l=>(async(e,l)=>{const a=e[l];if(0===a.ID)return void e.splice(l,1);0===(await z({id:a.ID})).code&&e.splice(l,1)})(ie.value.menuBtn,e.$index)},{default:u((()=>[d("删除")])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-73be144b"]]);export{ee as default};
