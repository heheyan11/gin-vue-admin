/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
import{C as e,bs as a,D as t,Z as i,bo as l,b3 as n,aA as o,bm as c,br as s,c_ as r,x as v,aR as u,ah as d,y as p,c8 as f,c7 as b,F as y,a as m,af as h,V as k,aS as g,R as S,o as x,c as C,b as I,G as V,n as w,q as T,h as _,w as B,I as A,J as E,e as N,t as P,d as K,c4 as D,H as F,ak as R,_ as j,ax as q,S as z,cT as G,ay as H,a4 as J,K as U}from"./087AC4D233B64EB0index.js";const Z=e({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:a},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:t},activeActionIcon:{type:t},activeIcon:{type:t},inactiveIcon:{type:t},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:i(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),L={[l]:e=>n(e)||o(e)||c(e),[s]:e=>n(e)||o(e)||c(e),[r]:e=>n(e)||o(e)||c(e)},M=["onClick"],O=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],Q=["aria-hidden"],W=["aria-hidden"],X=["aria-hidden"],Y="ElSwitch",$=v({name:Y});const ee=U(j(v({...$,props:Z,emits:L,setup(e,{expose:a,emit:t}){const i=e,o=J(),{formItem:c}=u(),v=d(),j=p("switch");[['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]].forEach((e=>{q({from:e[0],replacement:e[1],scope:Y,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},y((()=>{var a;return!!(null==(a=o.vnode.props)?void 0:a[e[2]])})))}));const{inputId:U}=f(i,{formItemContext:c}),Z=b(y((()=>i.loading))),L=m(!1!==i.modelValue),$=m(),ee=m(),ae=y((()=>[j.b(),j.m(v.value),j.is("disabled",Z.value),j.is("checked",oe.value)])),te=y((()=>[j.e("label"),j.em("label","left"),j.is("active",!oe.value)])),ie=y((()=>[j.e("label"),j.em("label","right"),j.is("active",oe.value)])),le=y((()=>({width:h(i.width)})));k((()=>i.modelValue),(()=>{L.value=!0})),k((()=>i.value),(()=>{L.value=!1}));const ne=y((()=>L.value?i.modelValue:i.value)),oe=y((()=>ne.value===i.activeValue));[i.activeValue,i.inactiveValue].includes(ne.value)||(t(l,i.inactiveValue),t(s,i.inactiveValue),t(r,i.inactiveValue)),k(oe,(e=>{var a;$.value.checked=e,i.validateEvent&&(null==(a=null==c?void 0:c.validate)||a.call(c,"change").catch((e=>g())))}));const ce=()=>{const e=oe.value?i.inactiveValue:i.activeValue;t(l,e),t(s,e),t(r,e),z((()=>{$.value.checked=oe.value}))},se=()=>{if(Z.value)return;const{beforeChange:e}=i;if(!e)return void ce();const a=e();[G(a),n(a)].includes(!0)||H(Y,"beforeChange must return type `Promise<boolean>` or `boolean`"),G(a)?a.then((e=>{e&&ce()})).catch((e=>{})):a&&ce()},re=y((()=>j.cssVarBlock({...i.activeColor?{"on-color":i.activeColor}:null,...i.inactiveColor?{"off-color":i.inactiveColor}:null,...i.borderColor?{"border-color":i.borderColor}:null})));return S((()=>{$.value.checked=oe.value})),a({focus:()=>{var e,a;null==(a=null==(e=$.value)?void 0:e.focus)||a.call(e)},checked:oe}),(e,a)=>(x(),C("div",{class:w(V(ae)),style:F(V(re)),onClick:R(se,["prevent"])},[I("input",{id:V(U),ref_key:"input",ref:$,class:w(V(j).e("input")),type:"checkbox",role:"switch","aria-checked":V(oe),"aria-disabled":V(Z),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:V(Z),tabindex:e.tabindex,onChange:ce,onKeydown:T(se,["enter"])},null,42,O),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?N("v-if",!0):(x(),C("span",{key:0,class:w(V(te))},[e.inactiveIcon?(x(),_(V(E),{key:0},{default:B((()=>[(x(),_(A(e.inactiveIcon)))])),_:1})):N("v-if",!0),!e.inactiveIcon&&e.inactiveText?(x(),C("span",{key:1,"aria-hidden":V(oe)},P(e.inactiveText),9,Q)):N("v-if",!0)],2)),I("span",{ref_key:"core",ref:ee,class:w(V(j).e("core")),style:F(V(le))},[e.inlinePrompt?(x(),C("div",{key:0,class:w(V(j).e("inner"))},[e.activeIcon||e.inactiveIcon?(x(),_(V(E),{key:0,class:w(V(j).is("icon"))},{default:B((()=>[(x(),_(A(V(oe)?e.activeIcon:e.inactiveIcon)))])),_:1},8,["class"])):e.activeText||e.inactiveText?(x(),C("span",{key:1,class:w(V(j).is("text")),"aria-hidden":!V(oe)},P(V(oe)?e.activeText:e.inactiveText),11,W)):N("v-if",!0)],2)):N("v-if",!0),I("div",{class:w(V(j).e("action"))},[e.loading?(x(),_(V(E),{key:0,class:w(V(j).is("loading"))},{default:B((()=>[K(V(D))])),_:1},8,["class"])):e.activeActionIcon&&V(oe)?(x(),_(V(E),{key:1},{default:B((()=>[(x(),_(A(e.activeActionIcon)))])),_:1})):e.inactiveActionIcon&&!V(oe)?(x(),_(V(E),{key:2},{default:B((()=>[(x(),_(A(e.inactiveActionIcon)))])),_:1})):N("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?N("v-if",!0):(x(),C("span",{key:1,class:w(V(ie))},[e.activeIcon?(x(),_(V(E),{key:0},{default:B((()=>[(x(),_(A(e.activeIcon)))])),_:1})):N("v-if",!0),!e.activeIcon&&e.activeText?(x(),C("span",{key:1,"aria-hidden":!V(oe)},P(e.activeText),9,X)):N("v-if",!0)],2))],14,M))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]));export{ee as E};