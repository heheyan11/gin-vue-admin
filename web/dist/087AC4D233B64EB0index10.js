/*! 
 Build based on gin-vue-admin 
 Time : 1698981314000 */
import{C as e,D as o,x as n,y as t,a as l,z as a,U as r,o as s,c as i,B as u,n as d,G as c,_ as p,a1 as m,a6 as f,b as v,h as g,w as h,I as b,J as w,t as y,a7 as k,K as E,L as I,a8 as B,F as C,H as _,a9 as x,aa as D,ab as A,Y as F,ac as S,S as R,d as j,ad as T,ae as M,O as $,V as L,E as K,af as O,P,Q as G,ag as z,ah as N,ai as H,aj as V,e as U,ak as q,M as W,al as J,u as Y,m as Q,a2 as Z,r as X,Z as ee,am as oe,g as ne,N as te,an as le,ao as ae,a0 as re,ap as se,$ as ie,a3 as ue,aq as de,a5 as ce}from"./087AC4D233B64EB0index.js";/* empty css                       *//* empty css                      *//* empty css                      */import{E as pe}from"./087AC4D233B64EB0scrollbar.js";/* empty css                     */import{a as me,E as fe}from"./087AC4D233B64EB0col.js";import ve from"./087AC4D233B64EB0index9.js";import ge from"./087AC4D233B64EB0history.js";import he from"./087AC4D233B64EB0search.js";import be from"./087AC4D233B64EB0bottomInfo.js";import{C as we}from"./087AC4D233B64EB0index23.js";import{c as ye,E as ke}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import Ee from"./087AC4D233B64EB0index12.js";import{c as Ie,E as Be,O as Ce,w as _e}from"./087AC4D233B64EB0index21.js";import{c as xe,E as De,d as Ae,a as Fe,C as Se,b as Re,e as je,f as Te,g as Me,F as $e,L as Le}from"./087AC4D233B64EB0dropdown.js";import{c as Ke}from"./087AC4D233B64EB0castArray.js";/* empty css                       */import"./087AC4D233B64EB0index8.js";import"./087AC4D233B64EB0menuItem.js";import"./087AC4D233B64EB0_plugin-vue_export-helper.js";import"./087AC4D233B64EB0index24.js";import"./087AC4D233B64EB0index25.js";import"./087AC4D233B64EB0asyncSubmenu.js";import"./087AC4D233B64EB0tab-pane.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0index11.js";import"./087AC4D233B64EB0image-viewer.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0drawer.js";const Oe=Symbol("breadcrumbKey"),Pe=e({separator:{type:String,default:"/"},separatorIcon:{type:o}}),Ge=n({name:"ElBreadcrumb"});var ze=p(n({...Ge,props:Pe,setup(e){const o=e,n=t("breadcrumb"),p=l();return a(Oe,o),r((()=>{const e=p.value.querySelectorAll(".".concat(n.e("item")));e.length&&e[e.length-1].setAttribute("aria-current","page")})),(e,o)=>(s(),i("div",{ref_key:"breadcrumb",ref:p,class:d(c(n).b()),"aria-label":"Breadcrumb",role:"navigation"},[u(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const Ne=e({to:{type:m([String,Object]),default:""},replace:{type:Boolean,default:!1}}),He=n({name:"ElBreadcrumbItem"});var Ve=p(n({...He,props:Ne,setup(e){const o=e,n=k(),a=f(Oe,void 0),r=t("breadcrumb"),p=n.appContext.config.globalProperties.$router,m=l(),E=()=>{o.to&&p&&(o.replace?p.replace(o.to):p.push(o.to))};return(e,o)=>{var n,t;return s(),i("span",{class:d(c(r).e("item"))},[v("span",{ref_key:"link",ref:m,class:d([c(r).e("inner"),c(r).is("link",!!e.to)]),role:"link",onClick:E},[u(e.$slots,"default")],2),(null==(n=c(a))?void 0:n.separatorIcon)?(s(),g(c(w),{key:0,class:d(c(r).e("separator"))},{default:h((()=>[(s(),g(b(c(a).separatorIcon)))])),_:1},8,["class"])):(s(),i("span",{key:1,class:d(c(r).e("separator")),role:"presentation"},y(null==(t=c(a))?void 0:t.separator),3))],2)}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const Ue=E(ze,{BreadcrumbItem:Ve}),qe=I(Ve),We=n({name:"ElContainer"});var Je=p(n({...We,props:{direction:{type:String}},setup(e){const o=e,n=B(),l=t("container"),a=C((()=>{if("vertical"===o.direction)return!0;if("horizontal"===o.direction)return!1;if(n&&n.default){return n.default().some((e=>{const o=e.type.name;return"ElHeader"===o||"ElFooter"===o}))}return!1}));return(e,o)=>(s(),i("section",{class:d([c(l).b(),c(l).is("vertical",c(a))])},[u(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const Ye=n({name:"ElAside"});var Qe=p(n({...Ye,props:{width:{type:String,default:null}},setup(e){const o=e,n=t("aside"),l=C((()=>o.width?n.cssVarBlock({width:o.width}):{}));return(e,o)=>(s(),i("aside",{class:d(c(n).b()),style:_(c(l))},[u(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const Ze=n({name:"ElFooter"});var Xe=p(n({...Ze,props:{height:{type:String,default:null}},setup(e){const o=e,n=t("footer"),l=C((()=>o.height?n.cssVarBlock({height:o.height}):{}));return(e,o)=>(s(),i("footer",{class:d(c(n).b()),style:_(c(l))},[u(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const eo=n({name:"ElHeader"});var oo=p(n({...eo,props:{height:{type:String,default:null}},setup(e){const o=e,n=t("header"),l=C((()=>o.height?n.cssVarBlock({height:o.height}):{}));return(e,o)=>(s(),i("header",{class:d(c(n).b()),style:_(c(l))},[u(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const no=n({name:"ElMain"});var to=p(n({...no,setup(e){const o=t("main");return(e,n)=>(s(),i("main",{class:d(c(o).b())},[u(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const lo=E(Je,{Aside:Qe,Footer:Xe,Header:oo,Main:to}),ao=I(Qe);I(Xe);const ro=I(oo),so=I(to),io=e({style:{type:m([String,Array,Object])},currentTabId:{type:m(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:m(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:uo,ElCollectionItem:co,COLLECTION_INJECTION_KEY:po,COLLECTION_ITEM_INJECTION_KEY:mo}=xe("RovingFocusGroup"),fo=Symbol("elRovingFocusGroup"),vo=Symbol("elRovingFocusGroupItem"),go={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},ho=(e,o,n)=>{const t=((e,o)=>{if("rtl"!==o)return e;switch(e){case x.right:return x.left;case x.left:return x.right;default:return e}})(e.key,n);if(!("vertical"===o&&[x.left,x.right].includes(t)||"horizontal"===o&&[x.up,x.down].includes(t)))return go[t]},bo=e=>{const{activeElement:o}=document;for(const n of e){if(n===o)return;if(n.focus(),o!==document.activeElement)return}},wo="currentTabIdChange",yo="rovingFocusGroup.entryFocus",ko={bubbles:!1,cancelable:!0},Eo=n({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:io,emits:[wo,"entryFocus"],setup(e,{emit:o}){var n;const t=l(null!=(n=e.currentTabId||e.defaultCurrentTabId)?n:null),r=l(!1),s=l(!1),i=l(null),{getItems:u}=f(po,void 0),d=C((()=>[{outline:"none"},e.style])),p=Ie((o=>{var n;null==(n=e.onMousedown)||n.call(e,o)}),(()=>{s.value=!0})),m=Ie((o=>{var n;null==(n=e.onFocus)||n.call(e,o)}),(e=>{const o=!c(s),{target:n,currentTarget:l}=e;if(n===l&&o&&!c(r)){const e=new Event(yo,ko);if(null==l||l.dispatchEvent(e),!e.defaultPrevented){const e=u().filter((e=>e.focusable)),o=[e.find((e=>e.active)),e.find((e=>e.id===c(t))),...e].filter(Boolean).map((e=>e.ref));bo(o)}}s.value=!1})),v=Ie((o=>{var n;null==(n=e.onBlur)||n.call(e,o)}),(()=>{r.value=!1}));a(fo,{currentTabbedId:D(t),loop:A(e,"loop"),tabIndex:C((()=>c(r)?-1:0)),rovingFocusGroupRef:i,rovingFocusGroupRootStyle:d,orientation:A(e,"orientation"),dir:A(e,"dir"),onItemFocus:e=>{o(wo,e)},onItemShiftTab:()=>{r.value=!0},onBlur:v,onFocus:m,onMousedown:p}),F((()=>e.currentTabId),(e=>{t.value=null!=e?e:null})),S(i,yo,((...e)=>{o("entryFocus",...e)}))}});var Io=p(n({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:uo,ElRovingFocusGroupImpl:p(Eo,[["render",function(e,o,n,t,l,a){return u(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}}),[["render",function(e,o,n,t,l,a){const r=R("el-roving-focus-group-impl"),i=R("el-focus-group-collection");return s(),g(i,null,{default:h((()=>[j(r,T(M(e.$attrs)),{default:h((()=>[u(e.$slots,"default")])),_:3},16)])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);var Bo=p(n({components:{ElRovingFocusCollectionItem:co},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:n,loop:t,onItemFocus:r,onItemShiftTab:s}=f(fo,void 0),{getItems:i}=f(po,void 0),u=$(),d=l(null),p=Ie((e=>{o("mousedown",e)}),(o=>{e.focusable?r(c(u)):o.preventDefault()})),m=Ie((e=>{o("focus",e)}),(()=>{r(c(u))})),v=Ie((e=>{o("keydown",e)}),(e=>{const{key:o,shiftKey:n,target:l,currentTarget:a}=e;if(o===x.tab&&n)return void s();if(l!==a)return;const r=ho(e);if(r){e.preventDefault();let o=i().filter((e=>e.focusable)).map((e=>e.ref));switch(r){case"last":o.reverse();break;case"prev":case"next":{"prev"===r&&o.reverse();const e=o.indexOf(a);o=t.value?(d=e+1,(u=o).map(((e,o)=>u[(o+d)%u.length]))):o.slice(e+1);break}}L((()=>{bo(o)}))}var u,d})),g=C((()=>n.value===c(u)));return a(vo,{rovingFocusGroupItemRef:d,tabIndex:C((()=>c(g)?0:-1)),handleMousedown:p,handleFocus:m,handleKeydown:v}),{id:u,handleKeydown:v,handleFocus:m,handleMousedown:p}}}),[["render",function(e,o,n,t,l,a){const r=R("el-roving-focus-collection-item");return s(),g(r,{id:e.id,focusable:e.focusable,active:e.active},{default:h((()=>[u(e.$slots,"default")])),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Co=Symbol("elDropdown"),{ButtonGroup:_o}=K;var xo=p(n({name:"ElDropdown",components:{ElButton:K,ElButtonGroup:_o,ElScrollbar:pe,ElDropdownCollection:De,ElTooltip:Be,ElRovingFocusGroup:Io,ElOnlyChild:Ce,ElIcon:w,ArrowDown:O},props:Ae,emits:["visible-change","click","command"],setup(e,{emit:o}){const n=k(),r=t("dropdown"),{t:s}=P(),i=l(),u=l(),d=l(null),p=l(null),m=l(null),f=l(null),v=l(!1),g=[x.enter,x.space,x.down],h=C((()=>({maxHeight:G(e.maxHeight)}))),b=C((()=>[r.m(B.value)])),w=C((()=>Ke(e.trigger))),y=$().value,E=C((()=>e.id||y));function I(){var e;null==(e=d.value)||e.onClose()}F([i,w],(([e,o],[n])=>{var t,l,a;(null==(t=null==n?void 0:n.$el)?void 0:t.removeEventListener)&&n.$el.removeEventListener("pointerenter",_),(null==(l=null==e?void 0:e.$el)?void 0:l.removeEventListener)&&e.$el.removeEventListener("pointerenter",_),(null==(a=null==e?void 0:e.$el)?void 0:a.addEventListener)&&o.includes("hover")&&e.$el.addEventListener("pointerenter",_)}),{immediate:!0}),z((()=>{var e,o;(null==(o=null==(e=i.value)?void 0:e.$el)?void 0:o.removeEventListener)&&i.value.$el.removeEventListener("pointerenter",_)}));const B=N();function _(){var e,o;null==(o=null==(e=i.value)?void 0:e.$el)||o.focus()}a(Co,{contentRef:p,role:C((()=>e.role)),triggerId:E,isUsingKeyboard:v,onItemEnter:function(){},onItemLeave:function(){const e=c(p);w.value.includes("hover")&&(null==e||e.focus()),f.value=null}}),a("elDropdown",{instance:n,dropdownSize:B,handleClick:function(){I()},commandHandler:function(...e){o("command",...e)},trigger:A(e,"trigger"),hideOnClick:A(e,"hideOnClick")});return{t:s,ns:r,scrollbar:m,wrapStyle:h,dropdownTriggerKls:b,dropdownSize:B,triggerId:E,triggerKeys:g,currentTabId:f,handleCurrentTabIdChange:function(e){f.value=e},handlerMainButtonClick:e=>{o("click",e)},handleEntryFocus:function(e){v.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:I,handleOpen:function(){var e;null==(e=d.value)||e.onOpen()},handleBeforeShowTooltip:function(){o("visible-change",!0)},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&p.value.focus()},handleBeforeHideTooltip:function(){o("visible-change",!1)},onFocusAfterTrapped:e=>{var o,n;e.preventDefault(),null==(n=null==(o=p.value)?void 0:o.focus)||n.call(o,{preventScroll:!0})},popperRef:d,contentRef:p,triggeringElementRef:i,referenceElementRef:u}}}),[["render",function(e,o,n,t,l,a){var r;const c=R("el-dropdown-collection"),p=R("el-roving-focus-group"),m=R("el-scrollbar"),f=R("el-only-child"),v=R("el-tooltip"),b=R("el-button"),w=R("arrow-down"),y=R("el-icon"),k=R("el-button-group");return s(),i("div",{class:d([e.ns.b(),e.ns.is("disabled",e.disabled)])},[j(v,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(r=e.referenceElementRef)?void 0:r.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:"".concat(e.ns.namespace.value,"-zoom-in-top"),teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},H({content:h((()=>[j(m,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:h((()=>[j(p,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:h((()=>[j(c,null,{default:h((()=>[u(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:h((()=>[j(f,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:h((()=>[u(e.$slots,"default")])),_:3},8,["id","tabindex"])]))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(s(),g(k,{key:0},{default:h((()=>[j(b,V({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:h((()=>[u(e.$slots,"default")])),_:3},16,["size","type","disabled","tabindex","onClick"]),j(b,V({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:h((()=>[j(y,{class:d(e.ns.e("icon"))},{default:h((()=>[j(w)])),_:1},8,["class"])])),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])])),_:3})):U("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Do=n({name:"DropdownItemImpl",components:{ElIcon:w},props:Fe,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const n=t("dropdown"),{role:l}=f(Co,void 0),{collectionItemRef:a}=f(Se,void 0),{collectionItemRef:r}=f(mo,void 0),{rovingFocusGroupItemRef:s,tabIndex:i,handleFocus:u,handleKeydown:d,handleMousedown:c}=f(vo,void 0),p=ye(a,r,s),m=C((()=>"menu"===l.value?"menuitem":"navigation"===l.value?"link":"button")),v=Ie((e=>{const{code:n}=e;if(n===x.enter||n===x.space)return e.preventDefault(),e.stopImmediatePropagation(),o("clickimpl",e),!0}),d);return{ns:n,itemRef:p,dataset:{[Re]:""},role:m,tabIndex:i,handleFocus:u,handleKeydown:v,handleMousedown:c}}}),Ao=["aria-disabled","tabindex","role"];const Fo=()=>{const e=f("elDropdown",{}),o=C((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:o}};var So=p(n({name:"ElDropdownItem",components:{ElDropdownCollectionItem:je,ElRovingFocusItem:Bo,ElDropdownItemImpl:p(Do,[["render",function(e,o,n,t,l,a){const r=R("el-icon");return s(),i(W,null,[e.divided?(s(),i("li",V({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):U("v-if",!0),v("li",V({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=o=>e.$emit("clickimpl",o)),onFocus:o[1]||(o[1]=(...o)=>e.handleFocus&&e.handleFocus(...o)),onKeydown:o[2]||(o[2]=q(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=(...o)=>e.handleMousedown&&e.handleMousedown(...o)),onPointermove:o[4]||(o[4]=o=>e.$emit("pointermove",o)),onPointerleave:o[5]||(o[5]=o=>e.$emit("pointerleave",o))}),[e.icon?(s(),g(r,{key:0},{default:h((()=>[(s(),g(b(e.icon)))])),_:1})):U("v-if",!0),u(e.$slots,"default")],16,Ao)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]])},inheritAttrs:!1,props:Fe,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:n}){const{elDropdown:t}=Fo(),a=k(),r=l(null),s=C((()=>{var e,o;return null!=(o=null==(e=c(r))?void 0:e.textContent)?o:""})),{onItemEnter:i,onItemLeave:u}=f(Co,void 0),d=Ie((e=>(o("pointermove",e),e.defaultPrevented)),_e((o=>{if(e.disabled)return void u(o);const n=o.currentTarget;n===document.activeElement||n.contains(document.activeElement)||(i(o),o.defaultPrevented||null==n||n.focus())}))),p=Ie((e=>(o("pointerleave",e),e.defaultPrevented)),_e((e=>{u(e)})));return{handleClick:Ie((n=>{if(!e.disabled)return o("click",n),"keydown"!==n.type&&n.defaultPrevented}),(o=>{var n,l,r;e.disabled?o.stopImmediatePropagation():((null==(n=null==t?void 0:t.hideOnClick)?void 0:n.value)&&(null==(l=t.handleClick)||l.call(t)),null==(r=t.commandHandler)||r.call(t,e.command,a,o))})),handlePointerMove:d,handlePointerLeave:p,textContent:s,propsAndAttrs:C((()=>({...e,...n})))}}}),[["render",function(e,o,n,t,l,a){var r;const i=R("el-dropdown-item-impl"),d=R("el-roving-focus-item"),c=R("el-dropdown-collection-item");return s(),g(c,{disabled:e.disabled,"text-value":null!=(r=e.textValue)?r:e.textContent},{default:h((()=>[j(d,{focusable:!e.disabled},{default:h((()=>[j(i,V(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:h((()=>[u(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Ro=n({name:"ElDropdownMenu",props:Te,setup(e){const o=t("dropdown"),{_elDropdownSize:n}=Fo(),l=n.value,{focusTrapRef:a,onKeydown:r}=f(J,void 0),{contentRef:s,role:i,triggerId:u}=f(Co,void 0),{collectionRef:d,getItems:p}=f(Me,void 0),{rovingFocusGroupRef:m,rovingFocusGroupRootStyle:v,tabIndex:g,onBlur:h,onFocus:b,onMousedown:w}=f(fo,void 0),{collectionRef:y}=f(po,void 0),k=C((()=>[o.b("menu"),o.bm("menu",null==l?void 0:l.value)])),E=ye(s,d,a,m,y),I=Ie((o=>{var n;null==(n=e.onKeydown)||n.call(e,o)}),(e=>{const{currentTarget:o,code:n,target:t}=e;if(o.contains(t),x.tab===n&&e.stopImmediatePropagation(),e.preventDefault(),t!==c(s))return;if(!$e.includes(n))return;const l=p().filter((e=>!e.disabled)).map((e=>e.ref));Le.includes(n)&&l.reverse(),bo(l)}));return{size:l,rovingFocusGroupRootStyle:v,tabIndex:g,dropdownKls:k,role:i,triggerId:u,dropdownListWrapperRef:E,handleKeydown:e=>{I(e),r(e)},onBlur:h,onFocus:b,onMousedown:w}}}),jo=["role","aria-labelledby"];var To=p(Ro,[["render",function(e,o,n,t,l,a){return s(),i("ul",{ref:e.dropdownListWrapperRef,class:d(e.dropdownKls),style:_(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...o)=>e.onBlur&&e.onBlur(...o)),onFocus:o[1]||(o[1]=(...o)=>e.onFocus&&e.onFocus(...o)),onKeydown:o[2]||(o[2]=q(((...o)=>e.handleKeydown&&e.handleKeydown(...o)),["self"])),onMousedown:o[3]||(o[3]=q(((...o)=>e.onMousedown&&e.onMousedown(...o)),["self"]))},[u(e.$slots,"default")],46,jo)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const Mo=E(xo,{DropdownItem:So,DropdownMenu:To}),$o=I(So),Lo=I(To),Ko={key:0,class:"quick-title"},Oo=["onClick"],Po={class:"dialog-footer"},Go=Object.assign({name:"CommandMenu"},{__name:"index",setup(e,{expose:o}){const n=Y(),t=Y(),a=Q(),r=Z(),u=l(!1),d=l(""),c=X([]),p=e=>{const o=[];return e.forEach((e=>{e.children&&e.children.length>0?o.push(...p(e.children)):e.meta.title&&e.meta.title.indexOf(d.value)>-1&&o.push({label:e.meta.title,func:()=>b(e)})})),o},m=()=>{const e={label:"跳转",children:[]},o=p(r.asyncRouters[0].children);e.children.push(...o),c.push(e)},f=()=>{const e={label:"操作",children:[]},o=[{label:"亮色主题",func:()=>w("light")},{label:"暗色主题",func:()=>w("dark")},{label:"退出登录",func:()=>a.LoginOut()}];e.children.push(...o.filter((e=>e.label.indexOf(d.value)>-1))),c.push(e)};m(),f();const b=e=>{var o,l;const a=e.name,s={},i={};(null==(o=r.routeMap[a])?void 0:o.parameters)&&(null==(l=r.routeMap[a])||l.parameters.forEach((e=>{"query"===e.type?s[e.key]=e.value:i[e.key]=e.value}))),a!==t.name&&(e.name.indexOf("http://")>-1||e.name.indexOf("https://")>-1?window.open(e.name):n.push({name:a,query:s,params:i}),u.value=!1)},w=e=>{null!==e?a.changeSideMode(e):a.changeSideMode("dark")},k=()=>{u.value=!1};return o({open:()=>{u.value=!0}}),F(d,(()=>{c.length=0,m(),f()})),(e,o)=>{const n=K,t=ke;return s(),g(t,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=e=>u.value=e),width:"30%",class:"overlay","show-close":!1},{header:h((()=>[ee(v("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>d.value=e),class:"quick-input",placeholder:"请输入你需要快捷到达的功能"},null,512),[[oe,d.value]])])),footer:h((()=>[v("span",Po,[j(n,{onClick:k},{default:h((()=>[ne("关闭")])),_:1})])])),default:h((()=>[(s(!0),i(W,null,te(c,((e,o)=>(s(),i("div",{key:o},[e.children.length?(s(),i("div",Ko,y(e.label),1)):U("",!0),(s(!0),i(W,null,te(e.children,((e,n)=>(s(),i("div",{key:o+"-"+n,class:"quick-item",onClick:e.func},y(e.label),9,Oo)))),128))])))),128))])),_:1},8,["modelValue"])}}}),zo=["src"],No={key:0,class:"gvaIcon gvaIcon-arrow-double-right"},Ho={key:1,class:"gvaIcon gvaIcon-arrow-double-left"},Vo={class:"mr-1.5 flex items-center"},Uo={class:"flex justify-center items-center h-full w-full"},qo={class:"cursor-pointer flex justify-center items-center"},Wo={class:"font-bold"},Jo=v("div",null,"指令菜单",-1),Yo={style:{"margin-left":"8px"}},Qo={class:"button"},Zo=v("span",{class:"button"},"K",-1),Xo={"element-loading-text":"正在加载中"},en=Object.assign({name:"Layout"},{__name:"index",setup(e){const o=Y(),n=le(),t=Z(),a=l(!1),u=l(!0),p=l(!1),m=l("");l(!1);const f=()=>{"WIN"===window.localStorage.getItem("osType")?m.value="Ctrl":m.value="⌘";window.addEventListener("keydown",(e=>{e.ctrlKey&&"k"===e.key&&(e.preventDefault(),E())}));const e=document.body.clientWidth;e<1e3?(p.value=!0,u.value=!1,a.value=!0):e>=1e3&&e<1200?(p.value=!1,u.value=!1,a.value=!0):(p.value=!1,u.value=!0,a.value=!1)};f();const k=l(),E=()=>{k.value.open()},I=l(!1);r((()=>{ae.emit("collapse",a.value),ae.emit("mobile",p.value),ae.on("reload",T),ae.on("showLoading",(()=>{I.value=!0})),ae.on("closeLoading",(()=>{I.value=!1})),window.onresize=()=>(f(),ae.emit("collapse",a.value),void ae.emit("mobile",p.value)),B.loadingInstance&&B.loadingInstance.close()}));const B=Q(),x=C((()=>"dark"===B.sideMode?"#fff":"light"===B.sideMode?"#191a23":B.baseColor)),D=C((()=>"dark"===B.sideMode?"#191a23":"light"===B.sideMode?"#fff":B.sideMode)),A=C((()=>n.meta.matched)),F=l(!0);let S=null;const T=async()=>{S&&window.clearTimeout(S),S=window.setTimeout((async()=>{if(n.meta.keepAlive)F.value=!1,await L(),F.value=!0;else{const e=n.meta.title;o.push({name:"Reload",params:{title:e}})}}),400)},M=l(!1),$=()=>{a.value=!a.value,u.value=!a.value,M.value=!a.value,ae.emit("collapse",a.value)},K=()=>{o.push({name:"person"})};return(e,o)=>{const l=me,r=ao,f=fe,C=qe,S=Ue,T=R("arrow-down"),L=w,O=$o,P=Lo,G=Mo,z=ro,N=R("router-view"),H=so,V=lo,q=ce;return s(),g(V,{class:"layout-cont"},{default:h((()=>[j(V,{class:d([u.value?"openside":"hideside",p.value?"mobile":""])},{default:h((()=>[j(l,{class:d([M.value&&p.value?"bg-black opacity-30 w-full h-full absolute top-0 left-0 z-[1001]":""]),onClick:o[0]||(o[0]=e=>(M.value=!M.value,u.value=!!a.value,void $()))},null,8,["class"]),j(r,{class:"main-cont gva-aside",style:_({width:p.value?a.value?"0px":"220px":a.value?"54px":"220px"})},{default:h((()=>[v("div",{class:"min-h-[60px] text-center transition-all duration-300 flex items-center justify-center gap-2",style:_({background:D.value})},[v("img",{alt:"",class:"w-9 h-9 p-1 bg-white rounded-full",src:e.$GIN_VUE_ADMIN.appLogo},null,8,zo),u.value?(s(),i("div",{key:0,class:"inline-flex font-bold text-2xl",style:_({color:x.value})},y(e.$GIN_VUE_ADMIN.appName),5)):U("",!0)],4),j(ve,{class:"aside"})])),_:1},8,["style"]),j(H,{class:"main-cont main-right"},{default:h((()=>[j(re,{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"},{default:h((()=>[v("div",{style:_({width:"calc(100% - ".concat(p.value?"0px":a.value?"54px":"220px",")")}),class:"fixed top-0 box-border z-50"},[j(l,null,{default:h((()=>[j(f,null,{default:h((()=>[j(z,{class:"header-cont"},{default:h((()=>[j(l,{class:"p-0 h-full"},{default:h((()=>[j(f,{xs:2,lg:1,md:1,sm:1,xl:1,class:"z-50 flex items-center pl-3"},{default:h((()=>[v("div",{class:"text-black cursor-pointer text-lg leading-5",onClick:$},[a.value?(s(),i("div",No)):(s(),i("div",Ho))])])),_:1}),j(f,{xs:10,lg:14,md:14,sm:9,xl:14,pull:1,class:"flex items-center"},{default:h((()=>[ee(j(S,{class:"breadcrumb"},{default:h((()=>[(s(!0),i(W,null,te(A.value.slice(1,A.value.length),(e=>(s(),g(C,{key:e.path},{default:h((()=>[ne(y(c(se)(e.meta.title,c(n))),1)])),_:2},1024)))),128))])),_:1},512),[[ie,!p.value]])])),_:1}),j(f,{xs:12,lg:9,md:9,sm:14,xl:9,class:"flex items-center justify-end"},{default:h((()=>[v("div",Vo,[j(he),j(G,null,{dropdown:h((()=>[j(P,null,{default:h((()=>[j(O,null,{default:h((()=>[v("span",Wo," 当前角色："+y(c(B).userInfo.authority.authorityName),1)])),_:1}),c(B).userInfo.authorities?(s(!0),i(W,{key:0},te(c(B).userInfo.authorities.filter((e=>e.authorityId!==c(B).userInfo.authorityId)),(e=>(s(),g(O,{key:e.authorityId,onClick:o=>(async e=>{0===(await de({authorityId:e})).code&&(window.sessionStorage.setItem("needCloseAll","true"),window.location.reload())})(e.authorityId)},{default:h((()=>[v("span",null," 切换为："+y(e.authorityName),1)])),_:2},1032,["onClick"])))),128)):U("",!0),j(O,{icon:"avatar"},{default:h((()=>[v("div",{class:"command-box",style:{display:"flex"},onClick:E},[Jo,v("div",Yo,[v("span",Qo,y(m.value),1),ne(" + "),Zo])])])),_:1}),j(O,{icon:"avatar",onClick:K},{default:h((()=>[ne("个人信息")])),_:1}),j(O,{icon:"reading-lamp",onClick:c(B).LoginOut},{default:h((()=>[ne("登 出")])),_:1},8,["onClick"])])),_:1})])),default:h((()=>[v("div",Uo,[v("span",qo,[j(we),ee(v("span",{style:{"margin-left":"5px"}},y(c(B).userInfo.nickName),513),[[ie,!p.value]]),j(L,null,{default:h((()=>[j(T)])),_:1})])])])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),j(ge,{ref:"layoutHistoryComponent"},null,512)],4)])),_:1}),F.value?(s(),g(N,{key:0,class:"admin-box"},{default:h((({Component:e})=>[ee((s(),i("div",Xo,[j(re,{mode:"out-in",name:"el-fade-in-linear"},{default:h((()=>[(s(),g(ue,{include:c(t).keepAliveRouters},[(s(),g(b(e)))],1032,["include"]))])),_:2},1024)])),[[q,I.value]])])),_:1})):U("",!0),j(be),j(Ee),j(Go,{ref_key:"command",ref:k},null,512)])),_:1})])),_:1},8,["class"])])),_:1})}}});export{en as default};
