/*! 
 Build based on gin-vue-admin 
 Time : 1698979068000 */
import{C as e,aP as a,bm as l,br as n,c_ as t,aI as r,bo as u,x as s,P as i,y as o,a as c,r as m,aR as d,F as p,aY as b,ah as v,c7 as f,Y as N,U as y,b6 as h,o as I,c as x,Z as V,G as g,n as S,q as A,d as w,w as E,h as F,af as k,c$ as B,J as _,e as K,aX as C,cI as O,ak as P,l as M,_ as T,ay as Y,aA as z,aS as D,K as j}from"./087AC4D233B64EB0index.js";import{v as G}from"./087AC4D233B64EB0index26.js";const q=e({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:a,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||l(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt("".concat(e),10)},validateEvent:{type:Boolean,default:!0}}),J={[n]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[t]:e=>l(e)||r(e),[u]:e=>l(e)||r(e)},R=["aria-label","onKeydown"],U=["aria-label","onKeydown"],W=s({name:"ElInputNumber"});const X=j(T(s({...W,props:q,emits:J,setup(e,{expose:a,emit:s}){const T=e,{t:j}=i(),q=o("input-number"),J=c(),W=m({currentValue:T.modelValue,userInput:null}),{formItem:X}=d(),Z=p((()=>l(T.modelValue)&&T.modelValue<=T.min)),$=p((()=>l(T.modelValue)&&T.modelValue>=T.max)),H=p((()=>{const e=ne(T.step);return b(T.precision)?Math.max(ne(T.modelValue),e):(T.precision,T.precision)})),L=p((()=>T.controls&&"right"===T.controlsPosition)),Q=v(),ee=f(),ae=p((()=>{if(null!==W.userInput)return W.userInput;let e=W.currentValue;if(r(e))return"";if(l(e)){if(Number.isNaN(e))return"";b(T.precision)||(e=e.toFixed(T.precision))}return e})),le=(e,a)=>{if(b(a)&&(a=H.value),0===a)return Math.round(e);let l=String(e);const n=l.indexOf(".");if(-1===n)return e;if(!l.replace(".","").split("")[n+a])return e;const t=l.length;return"5"===l.charAt(t-1)&&(l="".concat(l.slice(0,Math.max(0,t-1)),"6")),Number.parseFloat(Number(l).toFixed(a))},ne=e=>{if(r(e))return 0;const a=e.toString(),l=a.indexOf(".");let n=0;return-1!==l&&(n=a.length-l-1),n},te=(e,a=1)=>l(e)?le(e+T.step*a):W.currentValue,re=()=>{if(T.readonly||ee.value||$.value)return;const e=Number(ae.value)||0,a=te(e);ie(a),s(t,W.currentValue)},ue=()=>{if(T.readonly||ee.value||Z.value)return;const e=Number(ae.value)||0,a=te(e,-1);ie(a),s(t,W.currentValue)},se=(e,a)=>{const{max:l,min:n,step:t,precision:i,stepStrictly:o,valueOnClear:c}=T;l<n&&Y("InputNumber","min should not be greater than max.");let m=Number(e);if(r(e)||Number.isNaN(m))return null;if(""===e){if(null===c)return null;m=z(c)?{min:n,max:l}[c]:c}return o&&(m=le(Math.round(m/t)*t,i)),b(i)||(m=le(m,i)),(m>l||m<n)&&(m=m>l?l:n,a&&s(u,m)),m},ie=(e,a=!0)=>{var l;const t=W.currentValue,r=se(e);a?t!==r&&(W.userInput=null,s(u,r),s(n,r,t),T.validateEvent&&(null==(l=null==X?void 0:X.validate)||l.call(X,"change").catch((e=>D()))),W.currentValue=r):s(u,r)},oe=e=>{W.userInput=e;const a=""===e?null:Number(e);s(t,a),ie(a,!1)},ce=e=>{const a=""!==e?Number(e):"";(l(a)&&!Number.isNaN(a)||""===e)&&ie(a),W.userInput=null},me=e=>{s("focus",e)},de=e=>{var a;s("blur",e),T.validateEvent&&(null==(a=null==X?void 0:X.validate)||a.call(X,"blur").catch((e=>D())))};return N((()=>T.modelValue),(e=>{const a=se(W.userInput),n=se(e,!0);l(a)||a&&a===n||(W.currentValue=n,W.userInput=null)}),{immediate:!0}),y((()=>{var e;const{min:a,max:n,modelValue:t}=T,r=null==(e=J.value)?void 0:e.input;if(r.setAttribute("role","spinbutton"),Number.isFinite(n)?r.setAttribute("aria-valuemax",String(n)):r.removeAttribute("aria-valuemax"),Number.isFinite(a)?r.setAttribute("aria-valuemin",String(a)):r.removeAttribute("aria-valuemin"),r.setAttribute("aria-valuenow",W.currentValue||0===W.currentValue?String(W.currentValue):""),r.setAttribute("aria-disabled",String(ee.value)),!l(t)&&null!=t){let e=Number(t);Number.isNaN(e)&&(e=null),s(u,e)}})),h((()=>{var e,a;const l=null==(e=J.value)?void 0:e.input;null==l||l.setAttribute("aria-valuenow","".concat(null!=(a=W.currentValue)?a:""))})),a({focus:()=>{var e,a;null==(a=null==(e=J.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=J.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(I(),x("div",{class:S([g(q).b(),g(q).m(g(Q)),g(q).is("disabled",g(ee)),g(q).is("without-controls",!e.controls),g(q).is("controls-right",g(L))]),onDragstart:a[1]||(a[1]=P((()=>{}),["prevent"]))},[e.controls?V((I(),x("span",{key:0,role:"button","aria-label":g(j)("el.inputNumber.decrease"),class:S([g(q).e("decrease"),g(q).is("disabled",g(Z))]),onKeydown:A(ue,["enter"])},[w(g(_),null,{default:E((()=>[g(L)?(I(),F(g(k),{key:0})):(I(),F(g(B),{key:1}))])),_:1})],42,R)),[[g(G),ue]]):K("v-if",!0),e.controls?V((I(),x("span",{key:1,role:"button","aria-label":g(j)("el.inputNumber.increase"),class:S([g(q).e("increase"),g(q).is("disabled",g($))]),onKeydown:A(re,["enter"])},[w(g(_),null,{default:E((()=>[g(L)?(I(),F(g(C),{key:0})):(I(),F(g(O),{key:1}))])),_:1})],42,U)),[[g(G),re]]):K("v-if",!0),w(g(M),{id:e.id,ref_key:"input",ref:J,type:"number",step:e.step,"model-value":g(ae),placeholder:e.placeholder,readonly:e.readonly,disabled:g(ee),size:g(Q),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=P((()=>{}),["prevent"])),onKeydown:[A(P(re,["prevent"]),["up"]),A(P(ue,["prevent"]),["down"])],onBlur:de,onFocus:me,onInput:oe,onChange:ce},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{X as E};
