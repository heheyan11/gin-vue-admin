/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
import{C as e,D as o,Z as l,bo as a,b3 as n,bG as t,ac as s,a as u,ci as c,cj as r,F as d,af as i,ck as p,V as f,S as y,R as v,a4 as C,aB as m,bg as B}from"./087AC4D233B64EB0index.js";const b=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),g={close:()=>!0},D=e({...b,appendToBody:Boolean,beforeClose:{type:l(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),S={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[a]:e=>n(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},F=(e,o)=>{const l=C().emit,{nextZIndex:n}=t();let b="";const g=s(),D=s(),S=u(!1),F=u(!1),x=u(!1),A=u(e.zIndex||n());let I,h;const O=c("namespace",r),k=d((()=>{const o={},l="--".concat(O.value,"-dialog");return e.fullscreen||(e.top&&(o["".concat(l,"-margin-top")]=e.top),e.width&&(o["".concat(l,"-width")]=i(e.width))),o})),w=d((()=>e.alignCenter?{display:"flex"}:{}));function z(){null==h||h(),null==I||I(),e.openDelay&&e.openDelay>0?({stop:I}=m((()=>N()),e.openDelay)):N()}function E(){null==I||I(),null==h||h(),e.closeDelay&&e.closeDelay>0?({stop:h}=m((()=>V()),e.closeDelay)):V()}function L(){e.beforeClose?e.beforeClose((function(e){e||(F.value=!0,S.value=!1)})):E()}function N(){B&&(S.value=!0)}function V(){S.value=!1}return e.lockScroll&&p(S),f((()=>e.modelValue),(a=>{a?(F.value=!1,z(),x.value=!0,A.value=e.zIndex?A.value++:n(),y((()=>{l("open"),o.value&&(o.value.scrollTop=0)}))):S.value&&E()})),f((()=>e.fullscreen),(e=>{o.value&&(e?(b=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=b)})),v((()=>{e.modelValue&&(S.value=!0,x.value=!0,z())})),{afterEnter:function(){l("opened")},afterLeave:function(){l("closed"),l(a,!1),e.destroyOnClose&&(x.value=!1)},beforeLeave:function(){l("close")},handleClose:L,onModalClick:function(){e.closeOnClickModal&&L()},close:E,doClose:V,onOpenAutoFocus:function(){l("openAutoFocus")},onCloseAutoFocus:function(){l("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&L()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:g,bodyId:D,closed:F,style:k,overlayDialogStyle:w,rendered:x,visible:S,zIndex:A}};export{g as a,D as b,S as c,b as d,F as u};