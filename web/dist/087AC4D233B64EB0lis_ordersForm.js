/*! 
 Build based on gin-vue-admin 
 Time : 1699796219000 */
import{an as e,u as l,a,r as o,o as d,c as u,b as r,d as p,w as t,g as m,k as n,l as s,E as i}from"./087AC4D233B64EB0index.js";import{a as c,E as V}from"./087AC4D233B64EB0form-item.js";/* empty css                      *//* empty css                     */import{f as v,c as b,u as f}from"./087AC4D233B64EB0lis_orders2.js";import"./087AC4D233B64EB0date.js";import"./087AC4D233B64EB0dictionary.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0sysDictionary2.js";const y={class:"gva-form-box"},_=Object.assign({name:"OrderForm"},{__name:"lis_ordersForm",setup(_){const U=e(),h=l(),B=a(""),C=a({apikey:"",buyId:"",accFillSz:"",avgPx:"",ctime:"",code:"",msg:"",fee:"",feeCcy:"",fillNotionalUsd:"",fillTime:"",instId:"",instType:"",lever:"",notionalUsd:"",ordId:"",ordType:"",pnl:"",px:"",side:"",state:"",sz:"",tdMode:""}),g=o({apikey:[{required:!0,message:"",trigger:["input","blur"]}]}),j=a();(async()=>{if(U.query.id){const e=await v({ID:U.query.id});0===e.code&&(C.value=e.data.relisOrders,B.value="update")}else B.value="create"})();const A=async()=>{var e;null==(e=j.value)||e.validate((async e=>{if(!e)return;let l;switch(B.value){case"create":default:l=await b(C.value);break;case"update":l=await f(C.value)}0===l.code&&n({type:"success",message:"创建/更改成功"})}))},D=()=>{h.go(-1)};return(e,l)=>{const a=s,o=c,n=i,v=V;return d(),u("div",null,[r("div",y,[p(v,{model:C.value,ref_key:"elFormRef",ref:j,"label-position":"right",rules:g,"label-width":"80px"},{default:t((()=>[p(o,{label:"用户apikey:",prop:"apikey"},{default:t((()=>[p(a,{modelValue:C.value.apikey,"onUpdate:modelValue":l[0]||(l[0]=e=>C.value.apikey=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"买单id:",prop:"buyId"},{default:t((()=>[p(a,{modelValue:C.value.buyId,"onUpdate:modelValue":l[1]||(l[1]=e=>C.value.buyId=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"累计成交量:",prop:"accFillSz"},{default:t((()=>[p(a,{modelValue:C.value.accFillSz,"onUpdate:modelValue":l[2]||(l[2]=e=>C.value.accFillSz=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"成交均价:",prop:"avgPx"},{default:t((()=>[p(a,{modelValue:C.value.avgPx,"onUpdate:modelValue":l[3]||(l[3]=e=>C.value.avgPx=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"创建订单的时间:",prop:"ctime"},{default:t((()=>[p(a,{modelValue:C.value.ctime,"onUpdate:modelValue":l[4]||(l[4]=e=>C.value.ctime=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"错误码:",prop:"code"},{default:t((()=>[p(a,{modelValue:C.value.code,"onUpdate:modelValue":l[5]||(l[5]=e=>C.value.code=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"错误信息:",prop:"msg"},{default:t((()=>[p(a,{modelValue:C.value.msg,"onUpdate:modelValue":l[6]||(l[6]=e=>C.value.msg=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"累计手续费:",prop:"fee"},{default:t((()=>[p(a,{modelValue:C.value.fee,"onUpdate:modelValue":l[7]||(l[7]=e=>C.value.fee=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"手续费币种:",prop:"feeCcy"},{default:t((()=>[p(a,{modelValue:C.value.feeCcy,"onUpdate:modelValue":l[8]||(l[8]=e=>C.value.feeCcy=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"委托单已成交美元价值:",prop:"fillNotionalUsd"},{default:t((()=>[p(a,{modelValue:C.value.fillNotionalUsd,"onUpdate:modelValue":l[9]||(l[9]=e=>C.value.fillNotionalUsd=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"最新成交时间:",prop:"fillTime"},{default:t((()=>[p(a,{modelValue:C.value.fillTime,"onUpdate:modelValue":l[10]||(l[10]=e=>C.value.fillTime=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"产品id:",prop:"instId"},{default:t((()=>[p(a,{modelValue:C.value.instId,"onUpdate:modelValue":l[11]||(l[11]=e=>C.value.instId=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"产品类型:",prop:"instType"},{default:t((()=>[p(a,{modelValue:C.value.instType,"onUpdate:modelValue":l[12]||(l[12]=e=>C.value.instType=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"杠杆倍数:",prop:"lever"},{default:t((()=>[p(a,{modelValue:C.value.lever,"onUpdate:modelValue":l[13]||(l[13]=e=>C.value.lever=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"委托单美元价值:",prop:"notionalUsd"},{default:t((()=>[p(a,{modelValue:C.value.notionalUsd,"onUpdate:modelValue":l[14]||(l[14]=e=>C.value.notionalUsd=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"产品Id:",prop:"ordId"},{default:t((()=>[p(a,{modelValue:C.value.ordId,"onUpdate:modelValue":l[15]||(l[15]=e=>C.value.ordId=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"订单类型:",prop:"ordType"},{default:t((()=>[p(a,{modelValue:C.value.ordType,"onUpdate:modelValue":l[16]||(l[16]=e=>C.value.ordType=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"收益:",prop:"pnl"},{default:t((()=>[p(a,{modelValue:C.value.pnl,"onUpdate:modelValue":l[17]||(l[17]=e=>C.value.pnl=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"委托价格:",prop:"px"},{default:t((()=>[p(a,{modelValue:C.value.px,"onUpdate:modelValue":l[18]||(l[18]=e=>C.value.px=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"订单方向:",prop:"side"},{default:t((()=>[p(a,{modelValue:C.value.side,"onUpdate:modelValue":l[19]||(l[19]=e=>C.value.side=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"订单数量:",prop:"state"},{default:t((()=>[p(a,{modelValue:C.value.state,"onUpdate:modelValue":l[20]||(l[20]=e=>C.value.state=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"委托数量:",prop:"sz"},{default:t((()=>[p(a,{modelValue:C.value.sz,"onUpdate:modelValue":l[21]||(l[21]=e=>C.value.sz=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,{label:"交易模式:",prop:"tdMode"},{default:t((()=>[p(a,{modelValue:C.value.tdMode,"onUpdate:modelValue":l[22]||(l[22]=e=>C.value.tdMode=e),clearable:!0,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),p(o,null,{default:t((()=>[p(n,{type:"primary",onClick:A},{default:t((()=>[m("保存")])),_:1}),p(n,{type:"primary",onClick:D},{default:t((()=>[m("返回")])),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}});export{_ as default};
