/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
import{an as e,u as a,a as l,r,o as s,c as t,b as o,d as i,w as u,g as n,k as m,l as d,E as p}from"./087AC4D233B64EB0index.js";import{a as c,E as B}from"./087AC4D233B64EB0form-item.js";/* empty css                      *//* empty css                     */import{f,c as g,u as C}from"./087AC4D233B64EB0lisCoins2.js";import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0sysDictionary2.js";const v={class:"gva-form-box"},b=Object.assign({name:"CoinsForm"},{__name:"lisCoinsForm",setup(b){const y=e(),j=a(),A=l(""),D=l({name:"",zhang:"",decimal:""}),E=r({name:[{required:!0,message:"",trigger:["input","blur"]}],zhang:[{required:!0,message:"",trigger:["input","blur"]}],decimal:[{required:!0,message:"",trigger:["input","blur"]}]}),_=l();(async()=>{if(y.query.id){const e=await f({ID:y.query.id});0===e.code&&(D.value=e.data.relisCoins,A.value="update")}else A.value="create"})();const h=async()=>{var e;null==(e=_.value)||e.validate((async e=>{if(!e)return;let a;switch(A.value){case"create":default:a=await g(D.value);break;case"update":a=await C(D.value)}0===a.code&&m({type:"success",message:"创建/更改成功"})}))},V=()=>{j.go(-1)};return(e,a)=>{const l=d,r=c,m=p,f=B;return s(),t("div",null,[o("div",v,[i(f,{model:D.value,ref_key:"elFormRef",ref:_,"label-position":"right",rules:E,"label-width":"80px"},{default:u((()=>[i(r,{label:"名称:",prop:"name"},{default:u((()=>[i(l,{modelValue:D.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>D.value.name=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(r,{label:"每张精度:",prop:"zhang"},{default:u((()=>[i(l,{modelValue:D.value.zhang,"onUpdate:modelValue":a[1]||(a[1]=e=>D.value.zhang=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(r,{label:"精度:",prop:"decimal"},{default:u((()=>[i(l,{modelValue:D.value.decimal,"onUpdate:modelValue":a[2]||(a[2]=e=>D.value.decimal=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),i(r,null,{default:u((()=>[i(m,{type:"primary",onClick:h},{default:u((()=>[n("保存")])),_:1}),i(m,{type:"primary",onClick:V},{default:u((()=>[n("返回")])),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}});export{b as default};
