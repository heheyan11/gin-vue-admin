/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
import{an as e,u as a,a as l,r as s,o as r,c as t,b as o,d as i,w as u,M as p,N as d,g as m,k as n,l as c,E as B}from"./087AC4D233B64EB0index.js";import{a as y,E as A}from"./087AC4D233B64EB0form-item.js";/* empty css                      *//* empty css                     */import"./087AC4D233B64EB0tag.js";import{E as C,a as E}from"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{f as b,c as j,u as D}from"./087AC4D233B64EB0lisApis2.js";import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0index22.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0sysDictionary2.js";const f={class:"gva-form-box"},v=Object.assign({name:"ApisForm"},{__name:"lisApisForm",setup(v){const g=e(),h=a(),_=l(""),K=l({apiKey:"",passPhrase:"",secretKey:""}),V=s({apiKey:[{required:!0,message:"",trigger:["input","blur"]}],passPhrase:[{required:!0,message:"",trigger:["input","blur"]}],secretKey:[{required:!0,message:"",trigger:["input","blur"]}]}),w=l();(async()=>{if(g.query.id){const e=await b({ID:g.query.id});0===e.code&&(K.value=e.data.relisApis,_.value="update")}else _.value="create"})();const P=async()=>{var e;null==(e=w.value)||e.validate((async e=>{if(!e)return;let a;switch(_.value){case"create":default:a=await j(K.value);break;case"update":a=await D(K.value)}0===a.code&&n({type:"success",message:"创建/更改成功"})}))},k=()=>{h.go(-1)};return(e,a)=>{const l=c,s=y,n=C,b=E,j=B,D=A;return r(),t("div",null,[o("div",f,[i(D,{model:K.value,ref_key:"elFormRef",ref:w,"label-position":"right",rules:V,"label-width":"80px"},{default:u((()=>[i(s,{label:"ApiKey:",prop:"apiKey"},{default:u((()=>[i(l,{modelValue:K.value.apiKey,"onUpdate:modelValue":a[0]||(a[0]=e=>K.value.apiKey=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(s,{label:"PassPhrase:",prop:"passPhrase"},{default:u((()=>[i(l,{modelValue:K.value.passPhrase,"onUpdate:modelValue":a[1]||(a[1]=e=>K.value.passPhrase=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(s,{label:"SecretKey:",prop:"secretKey"},{default:u((()=>[i(l,{modelValue:K.value.secretKey,"onUpdate:modelValue":a[2]||(a[2]=e=>K.value.secretKey=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(s,{label:"是否启动:",prop:"status"},{default:u((()=>[i(b,{modelValue:K.value.status,"onUpdate:modelValue":a[3]||(a[3]=e=>K.value.status=e),placeholder:"请选择",style:{width:"100%"},clearable:!0},{default:u((()=>[(r(),t(p,null,d(["停止","启动"],(e=>i(n,{key:e,label:e,value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1}),i(s,null,{default:u((()=>[i(j,{type:"primary",onClick:P},{default:u((()=>[m("保存")])),_:1}),i(j,{type:"primary",onClick:k},{default:u((()=>[m("返回")])),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}});export{v as default};