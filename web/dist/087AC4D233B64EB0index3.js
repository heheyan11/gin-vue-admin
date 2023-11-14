/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
import{u as a,a as e,r as l,m as t,o as s,c as r,b as o,t as n,d as c,w as i,q as u,s as d,h as m,e as p,g as h,k as f,l as g,E as b}from"./087AC4D233B64EB0index.js";import{E as w,a as y}from"./087AC4D233B64EB0form-item.js";/* empty css                      *//* empty css                     */import{_ as B,c as v}from"./087AC4D233B64EB0initdb.js";import C from"./087AC4D233B64EB0bottomInfo.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";const _=""+new URL("087AC4D233B64EB0docs.png",import.meta.url).href,x=""+new URL("087AC4D233B64EB0kefu.png",import.meta.url).href,E=""+new URL("087AC4D233B64EB0github.png",import.meta.url).href,A=""+new URL("087AC4D233B64EB0video.png",import.meta.url).href,j={id:"userLayout",class:"w-full h-full relative"},D={class:"rounded-lg flex items-center justify-evenly w-full h-full bg-white md:w-screen md:h-screen md:bg-[#194bfb]"},k={class:"md:w-3/5 w-10/12 h-full flex items-center justify-evenly"},I=o("div",{class:"oblique h-[130%] w-3/5 bg-white transform -rotate-12 absolute -ml-52"},null,-1),V={class:"z-[999] pt-12 pb-10 md:w-96 w-full rounded-lg flex flex-col justify-between box-border"},L={class:"flex items-center justify-center"},U=["src"],z={class:"mb-9"},N={class:"text-center text-4xl font-bold"},q=o("p",{class:"text-center text-sm font-normal text-gray-500 mt-2.5"},"A management platform using Golang and Vue ",-1),R={class:"flex w-full justify-between"},G={class:"w-1/3 h-11 bg-[#c3d4f2] rounded"},K=["src"],M=o("div",{class:"hidden md:block w-1/2 h-full float-right bg-[#194bfb]"},[o("img",{class:"h-full",src:B,alt:"banner"})],-1),O=o("div",{class:"links items-center justify-center gap-2 hidden md:flex"},[o("a",{href:"http://doc.henrongyi.top/",target:"_blank"},[o("img",{src:_,class:"w-8 h-8",alt:"文档"})]),o("a",{href:"https://support.qq.com/product/371961",target:"_blank"},[o("img",{src:x,class:"w-8 h-8",alt:"客服"})]),o("a",{href:"https://github.com/flipped-aurora/gin-vue-admin",target:"_blank"},[o("img",{src:E,class:"w-8 h-8",alt:"github"})]),o("a",{href:"https://space.bilibili.com/322210472",target:"_blank"},[o("img",{src:A,class:"w-8 h-8",alt:"视频站"})])],-1),$=Object.assign({name:"Login"},{__name:"index",setup(B){const _=a(),x=()=>{d({}).then((async a=>{F.captcha.push({max:a.data.captchaLength,min:a.data.captchaLength,message:"请输入".concat(a.data.captchaLength,"位验证码"),trigger:"blur"}),A.value=a.data.picPath,$.captchaId=a.data.captchaId,$.openCaptcha=a.data.openCaptcha}))};x();const E=e(null),A=e(""),$=l({username:"",password:"",captcha:"",captchaId:"",openCaptcha:!1}),F=l({username:[{validator:(a,e,l)=>{if(e.length<5)return l(new Error("请输入正确的用户名"));l()},trigger:"blur"}],password:[{validator:(a,e,l)=>{if(e.length<6)return l(new Error("请输入正确的密码"));l()},trigger:"blur"}],captcha:[{message:"验证码格式不正确",trigger:"blur"}]}),P=t(),H=()=>{E.value.validate((async a=>{if(!a)return f({type:"error",message:"请正确填写登录信息",showClose:!0}),x(),!1;await(async()=>await P.LoginIn($))()||x()}))},J=async()=>{var a;const e=await v();0===e.code&&((null==(a=e.data)?void 0:a.needInit)?(P.NeedInit(),_.push({name:"Init"})):f({type:"info",message:"已配置数据库信息，无法初始化"}))};return(a,e)=>{const l=g,t=y,d=b,f=w;return s(),r("div",j,[o("div",D,[o("div",k,[I,o("div",V,[o("div",null,[o("div",L,[o("img",{class:"w-24",src:a.$GIN_VUE_ADMIN.appLogo,alt:""},null,8,U)]),o("div",z,[o("p",N,n(a.$GIN_VUE_ADMIN.appName),1),q]),c(f,{ref_key:"loginForm",ref:E,model:$,rules:F,"validate-on-rule-change":!1,onKeyup:u(H,["enter"])},{default:i((()=>[c(t,{prop:"username",class:"mb-6"},{default:i((()=>[c(l,{modelValue:$.username,"onUpdate:modelValue":e[0]||(e[0]=a=>$.username=a),size:"large",placeholder:"请输入用户名","suffix-icon":"user"},null,8,["modelValue"])])),_:1}),c(t,{prop:"password",class:"mb-6"},{default:i((()=>[c(l,{modelValue:$.password,"onUpdate:modelValue":e[1]||(e[1]=a=>$.password=a),"show-password":"",size:"large",type:"password",placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),$.openCaptcha?(s(),m(t,{key:0,prop:"captcha",class:"mb-6"},{default:i((()=>[o("div",R,[c(l,{modelValue:$.captcha,"onUpdate:modelValue":e[2]||(e[2]=a=>$.captcha=a),placeholder:"请输入验证码",size:"large",class:"flex-1 mr-5"},null,8,["modelValue"]),o("div",G,[A.value?(s(),r("img",{key:0,class:"w-full h-full",src:A.value,alt:"请输入验证码",onClick:e[3]||(e[3]=a=>x())},null,8,K)):p("",!0)])])])),_:1})):p("",!0),c(t,{class:"mb-6"},{default:i((()=>[c(d,{class:"shadow shadow-blue-600 h-11 w-full",type:"primary",size:"large",onClick:H},{default:i((()=>[h("登 录")])),_:1})])),_:1}),c(t,{class:"mb-6"},{default:i((()=>[c(d,{class:"shadow shadow-blue-600 h-11 w-full",type:"primary",size:"large",onClick:J},{default:i((()=>[h("前往初始化")])),_:1})])),_:1})])),_:1},8,["model","rules","onKeyup"])])])]),M]),c(C,{class:"left-0 right-0 absolute bottom-3 mx-auto w-full z-20"},{default:i((()=>[O])),_:1})])}}});export{$ as default};
