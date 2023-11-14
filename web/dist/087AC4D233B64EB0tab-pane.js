/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
import{Q as e,aF as a,cF as t,C as l,Z as s,aC as o,x as n,a3 as r,ay as i,y as u,a as c,V as d,S as v,aE as p,o as b,c as m,n as f,G as h,H as y,_ as g,a4 as C,cG as x,cH as w,F as P,R as k,b6 as N,d as T,J as B,a_ as S,az as E,bK as A,a6 as R,ax as F,z as _,B as K,cI as L,bo as z,aY as V,aA as H,bm as I,a5 as j,cJ as q,r as D,T as G,W as J,X as M,e as W,K as X,L as Y}from"./087AC4D233B64EB0index.js";import{c as O}from"./087AC4D233B64EB0strings.js";const Q=(l,s)=>{const o={},n=e([]);return{children:n,addChild:e=>{o[e.uid]=e,n.value=((e,l,s)=>a(e.subTree).filter((e=>{var a;return t(e)&&(null==(a=e.type)?void 0:a.name)===l&&!!e.component})).map((e=>e.component.uid)).map((e=>s[e])).filter((e=>!!e)))(l,s,o)},removeChild:e=>{delete o[e],n.value=n.value.filter((a=>a.uid!==e))}}},U=Symbol("tabsRootContextKey"),Z=l({tabs:{type:s(Array),default:()=>o([])}}),$="ElTabBar",ee=n({name:$});var ae=g(n({...ee,props:Z,setup(e,{expose:a}){const t=e,l=C(),s=r(U);s||i($,"<el-tabs><el-tab-bar /></el-tabs>");const o=u("tabs"),n=c(),g=c(),x=()=>g.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y",r="x"===n?"left":"top";return t.tabs.every((s=>{var n,i;const u=null==(i=null==(n=l.parent)?void 0:n.refs)?void 0:i["tab-".concat(s.uid)];if(!u)return!1;if(!s.active)return!0;e=u["offset".concat(O(r))],a=u["client".concat(O(o))];const c=window.getComputedStyle(u);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(c.paddingLeft)+Number.parseFloat(c.paddingRight)),e+=Number.parseFloat(c.paddingLeft)),!1})),{[o]:"".concat(a,"px"),transform:"translate".concat(O(n),"(").concat(e,"px)")}})();return d((()=>t.tabs),(async()=>{await v(),x()}),{immediate:!0}),p(n,(()=>x())),a({ref:n,update:x}),(e,a)=>(b(),m("div",{ref_key:"barRef",ref:n,class:f([h(o).e("active-bar"),h(o).is(h(s).props.tabPosition)]),style:y(g.value)},null,6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const te=l({panes:{type:s(Array),default:()=>o([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),le="ElTabNav",se=n({name:le,props:te,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const l=C(),s=r(U);s||i(le,"<el-tabs><tab-nav /></el-tabs>");const o=u("tabs"),n=x(),b=w(),m=c(),f=c(),h=c(),y=c(),g=c(!1),F=c(0),_=c(!1),K=c(!0),L=P((()=>["top","bottom"].includes(s.props.tabPosition)?"width":"height")),z=P((()=>{const e="width"===L.value?"X":"Y";return{transform:"translate".concat(e,"(-").concat(F.value,"px)")}})),V=()=>{if(!m.value)return;const e=m.value["offset".concat(O(L.value))],a=F.value;if(!a)return;const t=a>e?a-e:0;F.value=t},H=()=>{if(!m.value||!f.value)return;const e=f.value["offset".concat(O(L.value))],a=m.value["offset".concat(O(L.value))],t=F.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;F.value=l},I=async()=>{const e=f.value;if(!(g.value&&h.value&&m.value&&e))return;await v();const a=h.value.querySelector(".is-active");if(!a)return;const t=m.value,l=["top","bottom"].includes(s.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),r=l?e.offsetWidth-n.width:e.offsetHeight-n.height,i=F.value;let u=i;l?(o.left<n.left&&(u=i-(n.left-o.left)),o.right>n.right&&(u=i+o.right-n.right)):(o.top<n.top&&(u=i-(n.top-o.top)),o.bottom>n.bottom&&(u=i+(o.bottom-n.bottom))),u=Math.max(u,0),F.value=Math.min(u,r)},j=()=>{var a;if(!f.value||!m.value)return;e.stretch&&(null==(a=y.value)||a.update());const t=f.value["offset".concat(O(L.value))],l=m.value["offset".concat(O(L.value))],s=F.value;l<t?(g.value=g.value||{},g.value.prev=s,g.value.next=s+l<t,t-s<l&&(F.value=t-l)):(g.value=!1,s>0&&(F.value=0))},q=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=R;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus({preventScroll:!0}),n[i].click(),D()},D=()=>{K.value&&(_.value=!0)},G=()=>_.value=!1;return d(n,(e=>{"hidden"===e?K.value=!1:"visible"===e&&setTimeout((()=>K.value=!0),50)})),d(b,(e=>{e?setTimeout((()=>K.value=!0),50):K.value=!1})),p(h,j),k((()=>setTimeout((()=>I()),0))),N((()=>j())),a({scrollToActiveTab:I,removeFocus:G}),d((()=>e.panes),(()=>l.update()),{flush:"post",deep:!0}),()=>{const a=g.value?[T("span",{class:[o.e("nav-prev"),o.is("disabled",!g.value.prev)],onClick:V},[T(B,null,{default:()=>[T(S,null,null)]})]),T("span",{class:[o.e("nav-next"),o.is("disabled",!g.value.next)],onClick:H},[T(B,null,{default:()=>[T(E,null,null)]})])]:null,l=e.panes.map(((a,l)=>{var n,r,i,u;const c=a.uid,d=a.props.disabled,v=null!=(r=null!=(n=a.props.name)?n:a.index)?r:"".concat(l),p=!d&&(a.isClosable||e.editable);a.index="".concat(l);const b=p?T(B,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[T(A,null,null)]}):null,m=(null==(u=(i=a.slots).label)?void 0:u.call(i))||a.props.label,f=!d&&a.active?0:-1;return T("div",{ref:"tab-".concat(c),class:[o.e("item"),o.is(s.props.tabPosition),o.is("active",a.active),o.is("disabled",d),o.is("closable",p),o.is("focus",_.value)],id:"tab-".concat(v),key:"tab-".concat(c),"aria-controls":"pane-".concat(v),role:"tab","aria-selected":a.active,tabindex:f,onFocus:()=>D(),onBlur:()=>G(),onClick:e=>{G(),t("tabClick",a,v,e)},onKeydown:e=>{!p||e.code!==R.delete&&e.code!==R.backspace||t("tabRemove",a,e)}},[m,b])}));return T("div",{ref:h,class:[o.e("nav-wrap"),o.is("scrollable",!!g.value),o.is(s.props.tabPosition)]},[a,T("div",{class:o.e("nav-scroll"),ref:m},[T("div",{class:[o.e("nav"),o.is(s.props.tabPosition),o.is("stretch",e.stretch&&["top","bottom"].includes(s.props.tabPosition))],ref:f,style:z.value,role:"tablist",onKeydown:q},[e.type?null:T(ae,{ref:y,tabs:[...e.panes]},null),l])])])}}}),oe=l({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:s(Function),default:()=>!0},stretch:Boolean}),ne=e=>H(e)||I(e),re=n({name:"ElTabs",props:oe,emits:{[z]:e=>ne(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>ne(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>ne(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:l}){var s,o;const n=u("tabs"),{children:r,addChild:i,removeChild:p}=Q(C(),"ElTabPane"),b=c(),m=c(null!=(o=null!=(s=e.modelValue)?s:e.activeName)?o:"0"),f=async(t,l=!1)=>{var s,o,n;if(m.value!==t&&!V(t))try{!1!==await(null==(s=e.beforeLeave)?void 0:s.call(e,t,m.value))&&(m.value=t,l&&(a(z,t),a("tabChange",t)),null==(n=null==(o=b.value)?void 0:o.removeFocus)||n.call(o))}catch(r){}},h=(e,t,l)=>{e.props.disabled||(f(t,!0),a("tabClick",e,l))},y=(e,t)=>{e.props.disabled||V(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},g=()=>{a("edit",void 0,"add"),a("tabAdd")};return F({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},P((()=>!!e.activeName))),d((()=>e.activeName),(e=>f(e))),d((()=>e.modelValue),(e=>f(e))),d(m,(async()=>{var e;await v(),null==(e=b.value)||e.scrollToActiveTab()})),_(U,{props:e,currentName:m,registerPane:i,unregisterPane:p}),l({currentName:m}),()=>{const a=t.addIcon,l=e.editable||e.addable?T("span",{class:n.e("new-tab"),tabindex:"0",onClick:g,onKeydown:e=>{e.code===R.enter&&g()}},[a?K(t,"addIcon"):T(B,{class:n.is("icon-plus")},{default:()=>[T(L,null,null)]})]):null,s=T("div",{class:[n.e("header"),n.is(e.tabPosition)]},[l,T(se,{ref:b,currentName:m.value,editable:e.editable,type:e.type,panes:r.value,stretch:e.stretch,onTabClick:h,onTabRemove:y},null)]),o=T("div",{class:n.e("content")},[K(t,"default")]);return T("div",{class:[n.b(),n.m(e.tabPosition),{[n.m("card")]:"card"===e.type,[n.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[s,o]:[o,s]])}}}),ie=l({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ue=["id","aria-hidden","aria-labelledby"],ce="ElTabPane",de=n({name:ce});var ve=g(n({...de,props:ie,setup(e){const a=e,t=C(),l=j(),s=r(U);s||i(ce,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=u("tab-pane"),n=c(),v=P((()=>a.closable||s.props.closable)),p=q((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:n.value)})),y=c(p.value),g=P((()=>{var e;return null!=(e=a.name)?e:n.value})),x=q((()=>!a.lazy||y.value||p.value));d(p,(e=>{e&&(y.value=!0)}));const w=D({uid:t.uid,slots:l,props:a,paneName:g,active:p,index:n,isClosable:v});return k((()=>{s.registerPane(w)})),G((()=>{s.unregisterPane(w.uid)})),(e,a)=>h(x)?J((b(),m("div",{key:0,id:"pane-".concat(h(g)),class:f(h(o).b()),role:"tabpanel","aria-hidden":!h(p),"aria-labelledby":"tab-".concat(h(g))},[K(e.$slots,"default")],10,ue)),[[M,h(p)]]):W("v-if",!0)}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const pe=X(re,{TabPane:ve}),be=Y(ve);export{be as E,pe as a};