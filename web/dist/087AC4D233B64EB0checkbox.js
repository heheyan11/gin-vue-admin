/*! 
 Build based on gin-vue-admin 
 Time : 1698979068000 */
import{c5 as e,bL as a,bf as l,be as n,c6 as t,c0 as o,aP as i,bo as s,aA as u,bm as r,b3 as d,a6 as c,F as v,aY as b,c7 as m,aR as h,Y as p,aS as f,V as k,a7 as g,a as x,aN as C,aH as y,bj as L,ah as B,aI as S,c8 as E,x as I,a8 as w,y as F,o as z,h as D,w as V,b as A,n as _,G as N,Z as G,c as O,c3 as j,ak as R,c9 as U,B as $,M,g as H,t as K,e as P,I as Y,_ as q,H as J,C as Z,a1 as Q,z as T,aJ as W,K as X,L as ee}from"./087AC4D233B64EB0index.js";import{i as ae}from"./087AC4D233B64EB0isEqual.js";import{i as le,h as ne}from"./087AC4D233B64EB0hasIn.js";import{p as te,a as oe}from"./087AC4D233B64EB0_Uint8Array.js";var ie=Date.now;var se=e?function(a,l){return e(a,"toString",{configurable:!0,enumerable:!1,value:(n=l,function(){return n}),writable:!0});var n}:le;var ue,re,de;const ce=(ue=se,re=0,de=0,function(){var e=ie(),a=16-(e-de);if(de=e,a>0){if(++re>=800)return arguments[0]}else re=0;return ue.apply(void 0,arguments)});var ve=Math.max;function be(e,a,l){return a=ve(void 0===a?e.length-1:a,0),function(){for(var n=arguments,t=-1,o=ve(n.length-a,0),i=Array(o);++t<o;)i[t]=n[a+t];t=-1;for(var s=Array(a+1);++t<a;)s[t]=n[t];return s[a]=l(i),function(e,a,l){switch(l.length){case 0:return e.call(a);case 1:return e.call(a,l[0]);case 2:return e.call(a,l[0],l[1]);case 3:return e.call(a,l[0],l[1],l[2])}return e.apply(a,l)}(e,this,s)}}var me=a?a.isConcatSpreadable:void 0;function he(e){return l(e)||te(e)||!!(me&&e&&e[me])}function pe(e,a,l,n,t){var o=-1,i=e.length;for(l||(l=he),t||(t=[]);++o<i;){var s=e[o];a>0&&l(s)?a>1?pe(s,a-1,l,n,t):oe(t,s):n||(t[t.length]=s)}return t}function fe(e){return(null==e?0:e.length)?pe(e,1):[]}function ke(e,a){return function(e,a,l){for(var i=-1,s=a.length,u={};++i<s;){var r=a[i],d=n(e,r);l(d,r)&&t(u,o(r,e),d)}return u}(e,a,(function(a,l){return ne(e,l)}))}var ge=function(e){return ce(be(e,void 0,fe),e+"")}((function(e,a){return null==e?{}:ke(e,a)}));const xe=ge,Ce={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:i,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ye={[s]:e=>u(e)||r(e)||d(e),change:e=>u(e)||r(e)||d(e)},Le=Symbol("checkboxGroupContextKey"),Be=(e,{model:a,isLimitExceeded:l,hasOwnLabel:n,isDisabled:t,isLabeledByFormItem:o})=>{const i=c(Le,void 0),{formItem:s}=h(),{emit:u}=g();function r(a){var l,n;return a===e.trueLabel||!0===a?null==(l=e.trueLabel)||l:null!=(n=e.falseLabel)&&n}const d=v((()=>(null==i?void 0:i.validateEvent)||e.validateEvent));return p((()=>e.modelValue),(()=>{d.value&&(null==s||s.validate("change").catch((e=>f())))})),{handleChange:function(e){if(l.value)return;const a=e.target;u("change",r(a.checked),e)},onClickRoot:async function(i){if(!l.value&&!n.value&&!t.value&&o.value){i.composedPath().some((e=>"LABEL"===e.tagName))||(a.value=r([!1,e.falseLabel].includes(a.value)),await k(),function(e,a){u("change",r(e),a)}(a.value,i))}}}},Se=(e,a)=>{const{formItem:l}=h(),{model:n,isGroup:t,isLimitExceeded:o}=(e=>{const a=x(!1),{emit:l}=g(),n=c(Le,void 0),t=v((()=>!1===b(n))),o=x(!1);return{model:v({get(){var l,o;return t.value?null==(l=null==n?void 0:n.modelValue)?void 0:l.value:null!=(o=e.modelValue)?o:a.value},set(e){var i,u;t.value&&C(e)?(o.value=void 0!==(null==(i=null==n?void 0:n.max)?void 0:i.value)&&e.length>(null==n?void 0:n.max.value),!1===o.value&&(null==(u=null==n?void 0:n.changeEvent)||u.call(n,e))):(l(s,e),a.value=e)}}),isGroup:t,isLimitExceeded:o}})(e),{isFocused:i,isChecked:u,checkboxButtonSize:r,checkboxSize:p,hasOwnLabel:f}=((e,a,{model:l})=>{const n=c(Le,void 0),t=x(!1),o=v((()=>{const a=l.value;return d(a)?a:C(a)?y(e.label)?a.map(L).some((a=>ae(a,e.label))):a.map(L).includes(e.label):null!=a?a===e.trueLabel:!!a}));return{checkboxButtonSize:B(v((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value})),{prop:!0}),isChecked:o,isFocused:t,checkboxSize:B(v((()=>{var e;return null==(e=null==n?void 0:n.size)?void 0:e.value}))),hasOwnLabel:v((()=>!!a.default||!S(e.label)))}})(e,a,{model:n}),{isDisabled:k}=(({model:e,isChecked:a})=>{const l=c(Le,void 0),n=v((()=>{var n,t;const o=null==(n=null==l?void 0:l.max)?void 0:n.value,i=null==(t=null==l?void 0:l.min)?void 0:t.value;return!b(o)&&e.value.length>=o&&!a.value||!b(i)&&e.value.length<=i&&a.value}));return{isDisabled:m(v((()=>(null==l?void 0:l.disabled.value)||n.value))),isLimitDisabled:n}})({model:n,isChecked:u}),{inputId:I,isLabeledByFormItem:w}=E(e,{formItemContext:l,disableIdGeneration:f,disableIdManagement:t}),{handleChange:F,onClickRoot:z}=Be(e,{model:n,isLimitExceeded:o,hasOwnLabel:f,isDisabled:k,isLabeledByFormItem:w});return((e,{model:a})=>{e.checked&&(C(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0)})(e,{model:n}),{inputId:I,isLabeledByFormItem:w,isChecked:u,isDisabled:k,isFocused:i,checkboxButtonSize:r,checkboxSize:p,hasOwnLabel:f,model:n,handleChange:F,onClickRoot:z}},Ee=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],Ie=["id","indeterminate","disabled","value","name","tabindex"],we=I({name:"ElCheckbox"});var Fe=q(I({...we,props:Ce,emits:ye,setup(e){const a=e,l=w(),{inputId:n,isLabeledByFormItem:t,isChecked:o,isDisabled:i,isFocused:s,checkboxSize:u,hasOwnLabel:r,model:d,handleChange:c,onClickRoot:b}=Se(a,l),m=F("checkbox"),h=v((()=>[m.b(),m.m(u.value),m.is("disabled",i.value),m.is("bordered",a.border),m.is("checked",o.value)])),p=v((()=>[m.e("input"),m.is("disabled",i.value),m.is("checked",o.value),m.is("indeterminate",a.indeterminate),m.is("focus",s.value)]));return(e,a)=>(z(),D(Y(!N(r)&&N(t)?"span":"label"),{class:_(N(h)),"aria-controls":e.indeterminate?e.controls:null,onClick:N(b)},{default:V((()=>[A("span",{class:_(N(p))},[e.trueLabel||e.falseLabel?G((z(),O("input",{key:0,id:N(n),"onUpdate:modelValue":a[0]||(a[0]=e=>j(d)?d.value=e:null),class:_(N(m).e("original")),type:"checkbox",indeterminate:e.indeterminate,name:e.name,tabindex:e.tabindex,disabled:N(i),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>N(c)&&N(c)(...e)),onFocus:a[2]||(a[2]=e=>s.value=!0),onBlur:a[3]||(a[3]=e=>s.value=!1),onClick:a[4]||(a[4]=R((()=>{}),["stop"]))},null,42,Ee)),[[U,N(d)]]):G((z(),O("input",{key:1,id:N(n),"onUpdate:modelValue":a[5]||(a[5]=e=>j(d)?d.value=e:null),class:_(N(m).e("original")),type:"checkbox",indeterminate:e.indeterminate,disabled:N(i),value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[6]||(a[6]=(...e)=>N(c)&&N(c)(...e)),onFocus:a[7]||(a[7]=e=>s.value=!0),onBlur:a[8]||(a[8]=e=>s.value=!1),onClick:a[9]||(a[9]=R((()=>{}),["stop"]))},null,42,Ie)),[[U,N(d)]]),A("span",{class:_(N(m).e("inner"))},null,2)],2),N(r)?(z(),O("span",{key:0,class:_(N(m).e("label"))},[$(e.$slots,"default"),e.$slots.default?P("v-if",!0):(z(),O(M,{key:0},[H(K(e.label),1)],64))],2)):P("v-if",!0)])),_:3},8,["class","aria-controls","onClick"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const ze=["name","tabindex","disabled","true-value","false-value"],De=["name","tabindex","disabled","value"],Ve=I({name:"ElCheckboxButton"});var Ae=q(I({...Ve,props:Ce,emits:ye,setup(e){const a=e,l=w(),{isFocused:n,isChecked:t,isDisabled:o,checkboxButtonSize:i,model:s,handleChange:u}=Se(a,l),r=c(Le,void 0),d=F("checkbox"),b=v((()=>{var e,a,l,n;const t=null!=(a=null==(e=null==r?void 0:r.fill)?void 0:e.value)?a:"";return{backgroundColor:t,borderColor:t,color:null!=(n=null==(l=null==r?void 0:r.textColor)?void 0:l.value)?n:"",boxShadow:t?"-1px 0 0 0 ".concat(t):void 0}})),m=v((()=>[d.b("button"),d.bm("button",i.value),d.is("disabled",o.value),d.is("checked",t.value),d.is("focus",n.value)]));return(e,a)=>(z(),O("label",{class:_(N(m))},[e.trueLabel||e.falseLabel?G((z(),O("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=e=>j(s)?s.value=e:null),class:_(N(d).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:N(o),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>N(u)&&N(u)(...e)),onFocus:a[2]||(a[2]=e=>n.value=!0),onBlur:a[3]||(a[3]=e=>n.value=!1),onClick:a[4]||(a[4]=R((()=>{}),["stop"]))},null,42,ze)),[[U,N(s)]]):G((z(),O("input",{key:1,"onUpdate:modelValue":a[5]||(a[5]=e=>j(s)?s.value=e:null),class:_(N(d).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:N(o),value:e.label,onChange:a[6]||(a[6]=(...e)=>N(u)&&N(u)(...e)),onFocus:a[7]||(a[7]=e=>n.value=!0),onBlur:a[8]||(a[8]=e=>n.value=!1),onClick:a[9]||(a[9]=R((()=>{}),["stop"]))},null,42,De)),[[U,N(s)]]),e.$slots.default||e.label?(z(),O("span",{key:2,class:_(N(d).be("button","inner")),style:J(N(t)?N(b):void 0)},[$(e.$slots,"default",{},(()=>[H(K(e.label),1)]))],6)):P("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const _e=Z({modelValue:{type:Q(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:i,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),Ne={[s]:e=>C(e),change:e=>C(e)},Ge=I({name:"ElCheckboxGroup"});var Oe=q(I({...Ge,props:_e,emits:Ne,setup(e,{emit:a}){const l=e,n=F("checkbox"),{formItem:t}=h(),{inputId:o,isLabeledByFormItem:i}=E(l,{formItemContext:t}),u=async e=>{a(s,e),await k(),a("change",e)},r=v({get:()=>l.modelValue,set(e){u(e)}});return T(Le,{...xe(W(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:r,changeEvent:u}),p((()=>l.modelValue),(()=>{l.validateEvent&&(null==t||t.validate("change").catch((e=>f())))})),(e,a)=>{var l;return z(),D(Y(e.tag),{id:N(o),class:_(N(n).b("group")),role:"group","aria-label":N(i)?void 0:e.label||"checkbox-group","aria-labelledby":N(i)?null==(l=N(t))?void 0:l.labelId:void 0},{default:V((()=>[$(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const je=X(Fe,{CheckboxButton:Ae,CheckboxGroup:Oe});ee(Ae);const Re=ee(Oe);export{je as E,Re as a,pe as b,fe as f,be as o,ce as s};
