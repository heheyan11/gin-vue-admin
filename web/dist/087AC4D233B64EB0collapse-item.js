/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
import{C as e,Z as a,aC as s,bo as l,br as t,bm as o,a as i,V as n,z as c,y as d,F as r,x as u,o as m,c as p,B as v,n as b,G as C,_ as f,a3 as h,b as y,g as K,t as A,d as g,w as k,az as x,J as B,q as N,ak as E,W as I,X as w,K as _,L as V}from"./087AC4D233B64EB0index.js";import{c as j}from"./087AC4D233B64EB0castArray.js";import{_ as D}from"./087AC4D233B64EB0index25.js";import{g as F}from"./087AC4D233B64EB0rand.js";const H=e=>typeof o(e),S=e({accordion:Boolean,modelValue:{type:a([Array,String,Number]),default:()=>s([])}}),W={[l]:H,[t]:H},$=Symbol("collapseContextKey"),z=u({name:"ElCollapse"});var q=f(u({...z,props:S,emits:W,setup(e,{expose:a,emit:s}){const o=e,{activeNames:u,setActiveNames:f}=((e,a)=>{const s=i(j(e.modelValue)),o=o=>{s.value=o;const i=e.accordion?s.value[0]:s.value;a(l,i),a(t,i)};return n((()=>e.modelValue),(()=>s.value=j(e.modelValue)),{deep:!0}),c($,{activeNames:s,handleItemClick:a=>{if(e.accordion)o([s.value[0]===a?"":a]);else{const e=[...s.value],l=e.indexOf(a);l>-1?e.splice(l,1):e.push(a),o(e)}}}),{activeNames:s,setActiveNames:o}})(o,s),{rootKls:h}=(()=>{const e=d("collapse");return{rootKls:r((()=>e.b()))}})();return a({activeNames:u,setActiveNames:f}),(e,a)=>(m(),p("div",{class:b(C(h))},[v(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const G=e({title:{type:String,default:""},name:{type:a([String,Number]),default:()=>F()},disabled:Boolean}),J=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],L=["id","aria-hidden","aria-labelledby"],O=u({name:"ElCollapseItem"});var T=f(u({...O,props:G,setup(e,{expose:a}){const s=e,{focusing:l,id:t,isActive:o,handleFocus:n,handleHeaderClick:c,handleEnterClick:u}=(e=>{const a=h($),s=i(!1),l=i(!1),t=i(F()),o=r((()=>null==a?void 0:a.activeNames.value.includes(e.name)));return{focusing:s,id:t,isActive:o,handleFocus:()=>{setTimeout((()=>{l.value?l.value=!1:s.value=!0}),50)},handleHeaderClick:()=>{e.disabled||(null==a||a.handleItemClick(e.name),s.value=!1,l.value=!0)},handleEnterClick:()=>{null==a||a.handleItemClick(e.name)}}})(s),{arrowKls:f,headKls:_,rootKls:V,itemWrapperKls:j,itemContentKls:H,scopedContentId:S,scopedHeadId:W}=((e,{focusing:a,isActive:s,id:l})=>{const t=d("collapse"),o=r((()=>[t.b("item"),t.is("active",C(s)),t.is("disabled",e.disabled)])),i=r((()=>[t.be("item","header"),t.is("active",C(s)),{focusing:C(a)&&!e.disabled}]));return{arrowKls:r((()=>[t.be("item","arrow"),t.is("active",C(s))])),headKls:i,rootKls:o,itemWrapperKls:r((()=>t.be("item","wrap"))),itemContentKls:r((()=>t.be("item","content"))),scopedContentId:r((()=>t.b("content-".concat(C(l))))),scopedHeadId:r((()=>t.b("head-".concat(C(l)))))}})(s,{focusing:l,isActive:o,id:t});return a({isActive:o}),(e,a)=>(m(),p("div",{class:b(C(V))},[y("button",{id:C(W),class:b(C(_)),"aria-expanded":C(o),"aria-controls":C(S),"aria-describedby":C(S),tabindex:e.disabled?-1:0,type:"button",onClick:a[0]||(a[0]=(...e)=>C(c)&&C(c)(...e)),onKeydown:a[1]||(a[1]=N(E(((...e)=>C(u)&&C(u)(...e)),["stop","prevent"]),["space","enter"])),onFocus:a[2]||(a[2]=(...e)=>C(n)&&C(n)(...e)),onBlur:a[3]||(a[3]=e=>l.value=!1)},[v(e.$slots,"title",{},(()=>[K(A(e.title),1)])),g(C(B),{class:b(C(f))},{default:k((()=>[g(C(x))])),_:1},8,["class"])],42,J),g(C(D),null,{default:k((()=>[I(y("div",{id:C(S),role:"region",class:b(C(j)),"aria-hidden":!C(o),"aria-labelledby":C(W)},[y("div",{class:b(C(H))},[v(e.$slots,"default")],2)],10,L),[[w,C(o)]])])),_:3})],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);const X=_(q,{CollapseItem:T}),Z=V(T);export{Z as E,X as a};