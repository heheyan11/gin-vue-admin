/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
import{C as e,aP as a,bm as l,br as n,c_ as t,aI as r,bo as u,x as s,ae as i,y as o,a as c,r as m,aR as d,F as p,aY as b,ah as v,c7 as f,V as N,R as y,b6 as h,o as I,c as V,W as x,G as g,n as S,q as A,d as w,w as E,h as F,ad as k,c$ as B,J as _,e as K,aX as C,cI as O,ak as M,l as P,_ as T,ay as z,aA as D,aS as Y,K as j}from"./087AC4D233B64EB0index.js";import{v as G}from"./087AC4D233B64EB0index26.js";const R=e({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:a,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||l(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt("".concat(e),10)},validateEvent:{type:Boolean,default:!0}}),W={[n]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[t]:e=>l(e)||r(e),[u]:e=>l(e)||r(e)},q=["aria-label","onKeydown"],J=["aria-label","onKeydown"],X=s({name:"ElInputNumber"});const $=j(T(s({...X,props:R,emits:W,setup(e,{expose:a,emit:s}){const T=e,{t:j}=i(),R=o("input-number"),W=c(),X=m({currentValue:T.modelValue,userInput:null}),{formItem:$}=d(),H=p((()=>l(T.modelValue)&&T.modelValue<=T.min)),L=p((()=>l(T.modelValue)&&T.modelValue>=T.max)),Q=p((()=>{const e=ne(T.step);return b(T.precision)?Math.max(ne(T.modelValue),e):(T.precision,T.precision)})),U=p((()=>T.controls&&"right"===T.controlsPosition)),Z=v(),ee=f(),ae=p((()=>{if(null!==X.userInput)return X.userInput;let e=X.currentValue;if(r(e))return"";if(l(e)){if(Number.isNaN(e))return"";b(T.precision)||(e=e.toFixed(T.precision))}return e})),le=(e,a)=>{if(b(a)&&(a=Q.value),0===a)return Math.round(e);let l=String(e);const n=l.indexOf(".");if(-1===n)return e;if(!l.replace(".","").split("")[n+a])return e;const t=l.length;return"5"===l.charAt(t-1)&&(l="".concat(l.slice(0,Math.max(0,t-1)),"6")),Number.parseFloat(Number(l).toFixed(a))},ne=e=>{if(r(e))return 0;const a=e.toString(),l=a.indexOf(".");let n=0;return-1!==l&&(n=a.length-l-1),n},te=(e,a=1)=>l(e)?le(e+T.step*a):X.currentValue,re=()=>{if(T.readonly||ee.value||L.value)return;const e=Number(ae.value)||0,a=te(e);ie(a),s(t,X.currentValue)},ue=()=>{if(T.readonly||ee.value||H.value)return;const e=Number(ae.value)||0,a=te(e,-1);ie(a),s(t,X.currentValue)},se=(e,a)=>{const{max:l,min:n,step:t,precision:i,stepStrictly:o,valueOnClear:c}=T;l<n&&z("InputNumber","min should not be greater than max.");let m=Number(e);if(r(e)||Number.isNaN(m))return null;if(""===e){if(null===c)return null;m=D(c)?{min:n,max:l}[c]:c}return o&&(m=le(Math.round(m/t)*t,i)),b(i)||(m=le(m,i)),(m>l||m<n)&&(m=m>l?l:n,a&&s(u,m)),m},ie=(e,a=!0)=>{var l;const t=X.currentValue,r=se(e);a?t!==r&&(X.userInput=null,s(u,r),s(n,r,t),T.validateEvent&&(null==(l=null==$?void 0:$.validate)||l.call($,"change").catch((e=>Y()))),X.currentValue=r):s(u,r)},oe=e=>{X.userInput=e;const a=""===e?null:Number(e);s(t,a),ie(a,!1)},ce=e=>{const a=""!==e?Number(e):"";(l(a)&&!Number.isNaN(a)||""===e)&&ie(a),X.userInput=null},me=e=>{s("focus",e)},de=e=>{var a;s("blur",e),T.validateEvent&&(null==(a=null==$?void 0:$.validate)||a.call($,"blur").catch((e=>Y())))};return N((()=>T.modelValue),(e=>{const a=se(X.userInput),n=se(e,!0);l(a)||a&&a===n||(X.currentValue=n,X.userInput=null)}),{immediate:!0}),y((()=>{var e;const{min:a,max:n,modelValue:t}=T,r=null==(e=W.value)?void 0:e.input;if(r.setAttribute("role","spinbutton"),Number.isFinite(n)?r.setAttribute("aria-valuemax",String(n)):r.removeAttribute("aria-valuemax"),Number.isFinite(a)?r.setAttribute("aria-valuemin",String(a)):r.removeAttribute("aria-valuemin"),r.setAttribute("aria-valuenow",X.currentValue||0===X.currentValue?String(X.currentValue):""),r.setAttribute("aria-disabled",String(ee.value)),!l(t)&&null!=t){let e=Number(t);Number.isNaN(e)&&(e=null),s(u,e)}})),h((()=>{var e,a;const l=null==(e=W.value)?void 0:e.input;null==l||l.setAttribute("aria-valuenow","".concat(null!=(a=X.currentValue)?a:""))})),a({focus:()=>{var e,a;null==(a=null==(e=W.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=W.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(I(),V("div",{class:S([g(R).b(),g(R).m(g(Z)),g(R).is("disabled",g(ee)),g(R).is("without-controls",!e.controls),g(R).is("controls-right",g(U))]),onDragstart:a[1]||(a[1]=M((()=>{}),["prevent"]))},[e.controls?x((I(),V("span",{key:0,role:"button","aria-label":g(j)("el.inputNumber.decrease"),class:S([g(R).e("decrease"),g(R).is("disabled",g(H))]),onKeydown:A(ue,["enter"])},[w(g(_),null,{default:E((()=>[g(U)?(I(),F(g(k),{key:0})):(I(),F(g(B),{key:1}))])),_:1})],42,q)),[[g(G),ue]]):K("v-if",!0),e.controls?x((I(),V("span",{key:1,role:"button","aria-label":g(j)("el.inputNumber.increase"),class:S([g(R).e("increase"),g(R).is("disabled",g(L))]),onKeydown:A(re,["enter"])},[w(g(_),null,{default:E((()=>[g(U)?(I(),F(g(C),{key:0})):(I(),F(g(O),{key:1}))])),_:1})],42,J)),[[g(G),re]]):K("v-if",!0),w(g(P),{id:e.id,ref_key:"input",ref:W,type:"number",step:e.step,"model-value":g(ae),placeholder:e.placeholder,readonly:e.readonly,disabled:g(ee),size:g(Z),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=M((()=>{}),["prevent"])),onKeydown:[A(M(re,["prevent"]),["up"]),A(M(ue,["prevent"]),["down"])],onBlur:de,onFocus:me,onInput:oe,onChange:ce},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{$ as E};