/*! 
 Build based on gin-vue-admin 
 Time : 1699796219000 */
import{bg as e,ba as a,C as t,Z as l,aC as n,bm as s,x as o,cn as i,co as c,cp as r,ae as u,y as d,bG as v,a as f,cq as m,Q as p,F as g,V as b,S as y,R as w,o as k,h,d as x,w as z,b as C,n as I,G as _,H as N,ak as S,e as O,J as E,bK as A,c as T,M as B,a_ as L,az as R,cr as Y,cs as X,I as M,ct as j,cu as D,N as F,W as $,X as W,B as H,Y as P,bI as G,_ as K,a9 as V,a6 as q,cv as Q,K as Z,aQ as J,cw as U,t as ee,aj as ae,bh as te,aA as le,cx as ne,cy as se}from"./087AC4D233B64EB0index.js";import{d as oe}from"./087AC4D233B64EB0debounce.js";function ie(e,t,l){var n=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(l)&&(n="leading"in l?!!l.leading:n,s="trailing"in l?!!l.trailing:s),oe(e,t,{leading:n,maxWait:t,trailing:s})}const ce=t({urlList:{type:l(Array),default:()=>n([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),re={close:()=>!0,switch:e=>s(e),rotate:e=>s(e)},ue=["src"],de=o({name:"ElImageViewer"});const ve=Z(K(o({...de,props:ce,emits:re,setup(e,{expose:a,emit:t}){const l=e,n={CONTAIN:{name:"contain",icon:i(c)},ORIGINAL:{name:"original",icon:i(r)}},{t:o}=u(),K=d("image-viewer"),{nextZIndex:Z}=v(),J=f(),U=f([]),ee=m(),ae=f(!0),te=f(l.initialIndex),le=p(n.CONTAIN),ne=f({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),se=g((()=>{const{urlList:e}=l;return e.length<=1})),oe=g((()=>0===te.value)),ce=g((()=>te.value===l.urlList.length-1)),re=g((()=>l.urlList[te.value])),de=g((()=>[K.e("btn"),K.e("prev"),K.is("disabled",!l.infinite&&oe.value)])),ve=g((()=>[K.e("btn"),K.e("next"),K.is("disabled",!l.infinite&&ce.value)])),fe=g((()=>{const{scale:e,deg:a,offsetX:t,offsetY:l,enableTransition:s}=ne.value;let o=t/e,i=l/e;switch(a%360){case 90:case-270:[o,i]=[i,-o];break;case 180:case-180:[o,i]=[-o,-i];break;case 270:case-90:[o,i]=[-i,o]}const c={transform:"scale(".concat(e,") rotate(").concat(a,"deg) translate(").concat(o,"px, ").concat(i,"px)"),transition:s?"transform .3s":""};return le.value.name===n.CONTAIN.name&&(c.maxWidth=c.maxHeight="100%"),c})),me=g((()=>s(l.zIndex)?l.zIndex:Z()));function pe(){ee.stop(),t("close")}function ge(){ae.value=!1}function be(e){ae.value=!1,e.target.alt=o("el.image.error")}function ye(e){if(ae.value||0!==e.button||!J.value)return;ne.value.enableTransition=!1;const{offsetX:a,offsetY:t}=ne.value,l=e.pageX,n=e.pageY,s=ie((e=>{ne.value={...ne.value,offsetX:a+e.pageX-l,offsetY:t+e.pageY-n}})),o=V(document,"mousemove",s);V(document,"mouseup",(()=>{o()})),e.preventDefault()}function we(){ne.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ke(){if(ae.value)return;const e=Q(n),a=Object.values(n),t=le.value.name,l=(a.findIndex((e=>e.name===t))+1)%e.length;le.value=n[e[l]],we()}function he(e){const a=l.urlList.length;te.value=(e+a)%a}function xe(){oe.value&&!l.infinite||he(te.value-1)}function ze(){ce.value&&!l.infinite||he(te.value+1)}function Ce(e,a={}){if(ae.value)return;const{minScale:n,maxScale:s}=l,{zoomRate:o,rotateDeg:i,enableTransition:c}={zoomRate:l.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":ne.value.scale>n&&(ne.value.scale=Number.parseFloat((ne.value.scale/o).toFixed(3)));break;case"zoomIn":ne.value.scale<s&&(ne.value.scale=Number.parseFloat((ne.value.scale*o).toFixed(3)));break;case"clockwise":ne.value.deg+=i,t("rotate",ne.value.deg);break;case"anticlockwise":ne.value.deg-=i,t("rotate",ne.value.deg)}ne.value.enableTransition=c}return b(re,(()=>{y((()=>{const e=U.value[0];(null==e?void 0:e.complete)||(ae.value=!0)}))})),b(te,(e=>{we(),t("switch",e)})),w((()=>{var e,a;!function(){const e=ie((e=>{switch(e.code){case q.esc:l.closeOnPressEscape&&pe();break;case q.space:ke();break;case q.left:xe();break;case q.up:Ce("zoomIn");break;case q.right:ze();break;case q.down:Ce("zoomOut")}})),a=ie((e=>{Ce((e.deltaY||e.deltaX)<0?"zoomIn":"zoomOut",{zoomRate:l.zoomRate,enableTransition:!1})}));ee.run((()=>{V(document,"keydown",e),V(document,"wheel",a)}))}(),null==(a=null==(e=J.value)?void 0:e.focus)||a.call(e)})),a({setActiveItem:he}),(e,a)=>(k(),h(G,{to:"body",disabled:!e.teleported},[x(P,{name:"viewer-fade",appear:""},{default:z((()=>[C("div",{ref_key:"wrapper",ref:J,tabindex:-1,class:I(_(K).e("wrapper")),style:N({zIndex:_(me)})},[C("div",{class:I(_(K).e("mask")),onClick:a[0]||(a[0]=S((a=>e.hideOnClickModal&&pe()),["self"]))},null,2),O(" CLOSE "),C("span",{class:I([_(K).e("btn"),_(K).e("close")]),onClick:pe},[x(_(E),null,{default:z((()=>[x(_(A))])),_:1})],2),O(" ARROW "),_(se)?O("v-if",!0):(k(),T(B,{key:0},[C("span",{class:I(_(de)),onClick:xe},[x(_(E),null,{default:z((()=>[x(_(L))])),_:1})],2),C("span",{class:I(_(ve)),onClick:ze},[x(_(E),null,{default:z((()=>[x(_(R))])),_:1})],2)],64)),O(" ACTIONS "),C("div",{class:I([_(K).e("btn"),_(K).e("actions")])},[C("div",{class:I(_(K).e("actions__inner"))},[x(_(E),{onClick:a[1]||(a[1]=e=>Ce("zoomOut"))},{default:z((()=>[x(_(Y))])),_:1}),x(_(E),{onClick:a[2]||(a[2]=e=>Ce("zoomIn"))},{default:z((()=>[x(_(X))])),_:1}),C("i",{class:I(_(K).e("actions__divider"))},null,2),x(_(E),{onClick:ke},{default:z((()=>[(k(),h(M(_(le).icon)))])),_:1}),C("i",{class:I(_(K).e("actions__divider"))},null,2),x(_(E),{onClick:a[3]||(a[3]=e=>Ce("anticlockwise"))},{default:z((()=>[x(_(j))])),_:1}),x(_(E),{onClick:a[4]||(a[4]=e=>Ce("clockwise"))},{default:z((()=>[x(_(D))])),_:1})],2)],2),O(" CANVAS "),C("div",{class:I(_(K).e("canvas"))},[(k(!0),T(B,null,F(e.urlList,((e,a)=>$((k(),T("img",{ref_for:!0,ref:e=>U.value[a]=e,key:e,src:e,style:N(_(fe)),class:I(_(K).e("img")),onLoad:ge,onError:be,onMousedown:ye},null,46,ue)),[[W,a===te.value]]))),128))],2),H(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]])),fe=t({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:l([String,Object])},previewSrcList:{type:l(Array),default:()=>n([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),me={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>s(e),close:()=>!0,show:()=>!0},pe=["src","loading"],ge={key:0},be=o({name:"ElImage",inheritAttrs:!1});const ye=Z(K(o({...be,props:fe,emits:me,setup(a,{emit:t}){const l=a;let n="";const{t:s}=u(),o=d("image"),i=J(),c=U(),r=f(),v=f(!1),m=f(!0),p=f(!1),x=f(),S=f(),E=e&&"loading"in HTMLImageElement.prototype;let A,L;const R=g((()=>[o.e("inner"),M.value&&o.e("preview"),m.value&&o.is("loading")])),Y=g((()=>i.style)),X=g((()=>{const{fit:a}=l;return e&&a?{objectFit:a}:{}})),M=g((()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0})),j=g((()=>{const{previewSrcList:e,initialIndex:a}=l;let t=a;return a>e.length-1&&(t=0),t})),D=g((()=>"eager"!==l.loading&&(!E&&"lazy"===l.loading||l.lazy))),F=()=>{e&&(m.value=!0,v.value=!1,r.value=l.src)};function $(e){m.value=!1,v.value=!1,t("load",e)}function W(e){m.value=!1,v.value=!0,t("error",e)}function P(){((a,t)=>{if(!e||!a||!t)return!1;const l=a.getBoundingClientRect();let n;return n=t instanceof Element?t.getBoundingClientRect():{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<n.bottom&&l.bottom>n.top&&l.right>n.left&&l.left<n.right})(x.value,S.value)&&(F(),q())}const G=se(P,200,!0);async function K(){var a;if(!e)return;await y();const{scrollContainer:t}=l;te(t)?S.value=t:le(t)&&""!==t?S.value=null!=(a=document.querySelector(t))?a:void 0:x.value&&(S.value=ne(x.value)),S.value&&(A=V(S,"scroll",G),setTimeout((()=>P()),100))}function q(){e&&S.value&&G&&(null==A||A(),S.value=void 0)}function Q(e){if(e.ctrlKey)return e.deltaY<0||e.deltaY>0?(e.preventDefault(),!1):void 0}function Z(){M.value&&(L=V("wheel",Q,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",p.value=!0,t("show"))}function oe(){null==L||L(),document.body.style.overflow=n,p.value=!1,t("close")}function ie(e){t("switch",e)}return b((()=>l.src),(()=>{D.value?(m.value=!0,v.value=!1,q(),K()):F()})),w((()=>{D.value?K():F()})),(e,a)=>(k(),T("div",{ref_key:"container",ref:x,class:I([_(o).b(),e.$attrs.class]),style:N(_(Y))},[v.value?H(e.$slots,"error",{key:0},(()=>[C("div",{class:I(_(o).e("error"))},ee(_(s)("el.image.error")),3)])):(k(),T(B,{key:1},[void 0!==r.value?(k(),T("img",ae({key:0},_(c),{src:r.value,loading:e.loading,style:_(X),class:_(R),onClick:Z,onLoad:$,onError:W}),null,16,pe)):O("v-if",!0),m.value?(k(),T("div",{key:1,class:I(_(o).e("wrapper"))},[H(e.$slots,"placeholder",{},(()=>[C("div",{class:I(_(o).e("placeholder"))},null,2)]))],2)):O("v-if",!0)],64)),_(M)?(k(),T(B,{key:2},[p.value?(k(),h(_(ve),{key:0,"z-index":e.zIndex,"initial-index":_(j),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:oe,onSwitch:ie},{default:z((()=>[e.$slots.viewer?(k(),T("div",ge,[H(e.$slots,"viewer")])):O("v-if",!0)])),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):O("v-if",!0)],64)):O("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]));export{ye as E};
