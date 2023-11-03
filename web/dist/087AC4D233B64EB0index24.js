/*! 
 Build based on gin-vue-admin 
 Time : 1698979068000 */
import{a9 as e,as as t,_ as n,x as o,y as a,o as l,h as s,w as u,B as r,aj as i,a0 as c,at as d,au as p,av as v,F as m,aw as h,C as f,D as b,ax as x,a6 as M,ay as g,a as y,af as I,az as S,r as k,Y as C,z as E,U as w,ag as A,A as T,aA as B,J as O,Z as P,$ as z,M as N,a7 as j,aB as $,a1 as L,aC as _,aD as W,aE as D,aF as q,aG as F,aH as R,aI as G,V,ab as H,S as U,c as Z,b as J,n as K,g as Y,t as Q,K as X,L as ee}from"./087AC4D233B64EB0index.js";import{_ as te}from"./087AC4D233B64EB0index25.js";import{E as ne}from"./087AC4D233B64EB0index21.js";let oe=class{constructor(e,t){this.parent=e,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(e){e===this.subMenuItems.length?e=0:e<0&&(e=this.subMenuItems.length-1),this.subMenuItems[e].focus(),this.subIndex=e}addListeners(){const n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,(o=>{o.addEventListener("keydown",(o=>{let a=!1;switch(o.code){case e.down:this.gotoSubIndex(this.subIndex+1),a=!0;break;case e.up:this.gotoSubIndex(this.subIndex-1),a=!0;break;case e.tab:t(n,"mouseleave");break;case e.enter:case e.space:a=!0,o.currentTarget.click()}return a&&(o.preventDefault(),o.stopPropagation()),!1}))}))}},ae=class{constructor(e,t){this.domNode=e,this.submenu=null,this.submenu=null,this.init(t)}init(e){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(".".concat(e,"-menu"));t&&(this.submenu=new oe(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",(n=>{let o=!1;switch(n.code){case e.down:t(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),o=!0;break;case e.up:t(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),o=!0;break;case e.tab:t(n.currentTarget,"mouseleave");break;case e.enter:case e.space:o=!0,n.currentTarget.click()}o&&n.preventDefault()}))}},le=class{constructor(e,t){this.domNode=e,this.init(t)}init(e){const t=this.domNode.childNodes;Array.from(t).forEach((t=>{1===t.nodeType&&new ae(t,e)}))}};var se=n(o({name:"ElMenuCollapseTransition",setup(){const e=a("menu");return{listeners:{onBeforeEnter:e=>e.style.opacity="0.2",onEnter(t,n){d(t,"".concat(e.namespace.value,"-opacity-transition")),t.style.opacity="1",n()},onAfterEnter(t){p(t,"".concat(e.namespace.value,"-opacity-transition")),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),v(t,e.m("collapse"))?(p(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),d(t,e.m("collapse"))):(d(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),p(t,e.m("collapse"))),t.style.width="".concat(t.scrollWidth,"px"),t.style.overflow="hidden"},onLeave(e){d(e,"horizontal-collapse-transition"),e.style.width="".concat(e.dataset.scrollWidth,"px")}}}}}),[["render",function(e,t,n,o,a,d){return l(),s(c,i({mode:"out-in"},e.listeners),{default:u((()=>[r(e.$slots,"default")])),_:3},16)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function ue(e,t){const n=m((()=>{let n=e.parent;const o=[t.value];for(;"ElMenu"!==n.type.name;)n.props.index&&o.unshift(n.props.index),n=n.parent;return o}));return{parentMenu:m((()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t})),indexPath:n}}function re(e){return m((()=>{const t=e.backgroundColor;return t?new h(t).shade(20).toString():""}))}const ie=(e,t)=>{const n=a("menu");return m((()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":re(e).value||"","active-color":e.activeTextColor||"",level:"".concat(t)})))},ce=f({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:b},expandOpenIcon:{type:b},collapseCloseIcon:{type:b},collapseOpenIcon:{type:b}}),de="ElSubMenu";var pe=o({name:de,props:ce,setup(e,{slots:t,expose:n}){x({from:"popper-append-to-body",replacement:"teleported",scope:de,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},m((()=>void 0!==e.popperAppendToBody)));const o=j(),{indexPath:l,parentMenu:s}=ue(o,m((()=>e.index))),u=a("menu"),r=a("sub-menu"),i=M("rootMenu");i||g(de,"can not inject root menu");const c=M("subMenu:".concat(s.value.uid));c||g(de,"can not inject sub menu");const d=y({}),p=y({});let v;const h=y(!1),f=y(),b=y(null),L=m((()=>"horizontal"===V.value&&W.value?"bottom-start":"right-start")),_=m((()=>"horizontal"===V.value&&W.value||"vertical"===V.value&&!i.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?R.value?e.expandOpenIcon:e.expandCloseIcon:I:e.collapseCloseIcon&&e.collapseOpenIcon?R.value?e.collapseOpenIcon:e.collapseCloseIcon:S)),W=m((()=>0===c.level)),D=m((()=>{var t;const n=null!=(t=e.teleported)?t:e.popperAppendToBody;return void 0===n?W.value:n})),q=m((()=>i.props.collapse?"".concat(u.namespace.value,"-zoom-in-left"):"".concat(u.namespace.value,"-zoom-in-top"))),F=m((()=>"horizontal"===V.value&&W.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"])),R=m((()=>i.openedMenus.includes(e.index))),G=m((()=>{let e=!1;return Object.values(d.value).forEach((t=>{t.active&&(e=!0)})),Object.values(p.value).forEach((t=>{t.active&&(e=!0)})),e})),V=m((()=>i.props.mode)),H=k({index:e.index,indexPath:l,active:G}),U=ie(i.props,c.level+1),Z=e=>{var t,n,o;e||null==(o=null==(n=null==(t=b.value)?void 0:t.popperRef)?void 0:n.popperInstanceRef)||o.destroy()},J=()=>{"hover"===i.props.menuTrigger&&"horizontal"===i.props.mode||i.props.collapse&&"vertical"===i.props.mode||e.disabled||i.handleSubMenuClick({index:e.index,indexPath:l.value,active:G.value})},K=(t,n=e.showTimeout)=>{var o;"focus"!==t.type&&("click"===i.props.menuTrigger&&"horizontal"===i.props.mode||!i.props.collapse&&"vertical"===i.props.mode||e.disabled||(c.mouseInChild.value=!0,null==v||v(),({stop:v}=$((()=>{i.openMenu(e.index,l.value)}),n)),D.value&&(null==(o=s.value.vnode.el)||o.dispatchEvent(new MouseEvent("mouseenter")))))},Y=(t=!1)=>{var n,a;"click"===i.props.menuTrigger&&"horizontal"===i.props.mode||!i.props.collapse&&"vertical"===i.props.mode||(null==v||v(),c.mouseInChild.value=!1,({stop:v}=$((()=>!h.value&&i.closeMenu(e.index,l.value)),e.hideTimeout)),D.value&&t&&"ElSubMenu"===(null==(n=o.parent)?void 0:n.type.name)&&(null==(a=c.handleMouseleave)||a.call(c,!0)))};C((()=>i.props.collapse),(e=>Z(Boolean(e))));{const e=e=>{p.value[e.index]=e},t=e=>{delete p.value[e.index]};E("subMenu:".concat(o.uid),{addSubMenu:e,removeSubMenu:t,handleMouseleave:Y,mouseInChild:h,level:c.level+1})}return n({opened:R}),w((()=>{i.addSubMenu(H),c.addSubMenu(H)})),A((()=>{c.removeSubMenu(H),i.removeSubMenu(H)})),()=>{var n;const a=[null==(n=t.title)?void 0:n.call(t),T(O,{class:r.e("icon-arrow"),style:{transform:R.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&i.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>B(_.value)?T(o.appContext.components[_.value]):T(_.value)})],l=i.isMenuPopup?T(ne,{ref:b,visible:R.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:L.value,teleported:D.value,fallbackPlacements:F.value,transition:q.value,gpuAcceleration:!1},{content:()=>{var n;return T("div",{class:[u.m(V.value),u.m("popup-container"),e.popperClass],onMouseenter:e=>K(e,100),onMouseleave:()=>Y(!0),onFocus:e=>K(e,100)},[T("ul",{class:[u.b(),u.m("popup"),u.m("popup-".concat(L.value))],style:U.value},[null==(n=t.default)?void 0:n.call(t)])])},default:()=>T("div",{class:r.e("title"),onClick:J},a)}):T(N,{},[T("div",{class:r.e("title"),ref:f,onClick:J},a),T(te,{},{default:()=>{var e;return P(T("ul",{role:"menu",class:[u.b(),u.m("inline")],style:U.value},[null==(e=t.default)?void 0:e.call(t)]),[[z,R.value]])}})]);return T("li",{class:[r.b(),r.is("active",G.value),r.is("opened",R.value),r.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:R.value,onMouseenter:K,onMouseleave:()=>Y(!0),onFocus:K},[l])}}});const ve=f({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:L(Array),default:()=>_([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),me=e=>Array.isArray(e)&&e.every((e=>B(e)));var he=o({name:"ElMenu",props:ve,emits:{close:(e,t)=>B(e)&&me(t),open:(e,t)=>B(e)&&me(t),select:(e,t,n,o)=>B(e)&&me(t)&&R(n)&&(void 0===o||o instanceof Promise)},setup(e,{emit:t,slots:n,expose:o}){const l=j(),s=l.appContext.config.globalProperties.$router,u=y(),r=a("menu"),i=a("sub-menu"),c=y(-1),d=y(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),p=y(e.defaultActive),v=y({}),h=y({}),f=m((()=>"horizontal"===e.mode||"vertical"===e.mode&&e.collapse)),b=(n,o)=>{d.value.includes(n)||(e.uniqueOpened&&(d.value=d.value.filter((e=>o.includes(e)))),d.value.push(n),t("open",n,o))},x=e=>{const t=d.value.indexOf(e);-1!==t&&d.value.splice(t,1)},M=(e,n)=>{x(e),t("close",e,n)},g=({index:e,indexPath:t})=>{d.value.includes(e)?M(e,t):b(e,t)},I=n=>{("horizontal"===e.mode||e.collapse)&&(d.value=[]);const{index:o,indexPath:a}=n;if(!G(o)&&!G(a))if(e.router&&s){const e=n.route||o,l=s.push(e).then((e=>(e||(p.value=o),e)));t("select",o,a,{index:o,indexPath:a,route:e},l)}else p.value=o,t("select",o,a,{index:o,indexPath:a})};let S=!0;const A=()=>{const e=()=>{c.value=-1,V((()=>{c.value=(()=>{var e,t;if(!u.value)return-1;const n=Array.from(null!=(t=null==(e=u.value)?void 0:e.childNodes)?t:[]).filter((e=>"#comment"!==e.nodeName&&("#text"!==e.nodeName||e.nodeValue))),o=Number.parseInt(getComputedStyle(u.value).paddingLeft,10),a=Number.parseInt(getComputedStyle(u.value).paddingRight,10),l=u.value.clientWidth-o-a;let s=0,r=0;return n.forEach(((e,t)=>{s+=e.offsetWidth||0,s<=l-64&&(r=t+1)})),r===n.length?-1:r})()}))};S?e():((e,t=33.34)=>{let n;return()=>{n&&clearTimeout(n),n=setTimeout((()=>{e()}),t)}})(e)(),S=!1};let B;C((()=>e.defaultActive),(t=>{v.value[t]||(p.value=""),(t=>{const n=v.value,o=n[t]||p.value&&n[p.value]||n[e.defaultActive];p.value=o?o.index:t})(t)})),C((()=>e.collapse),(e=>{e&&(d.value=[])})),C(v.value,(()=>{const t=p.value&&v.value[p.value];if(!t||"horizontal"===e.mode||e.collapse)return;t.indexPath.forEach((e=>{const t=h.value[e];t&&b(e,t.indexPath)}))})),W((()=>{"horizontal"===e.mode&&e.ellipsis?B=D(u,A).stop:null==B||B()}));{const t=e=>{h.value[e.index]=e},n=e=>{delete h.value[e.index]},o=e=>{v.value[e.index]=e},a=e=>{delete v.value[e.index]};E("rootMenu",k({props:e,openedMenus:d,items:v,subMenus:h,activeIndex:p,isMenuPopup:f,addMenuItem:o,removeMenuItem:a,addSubMenu:t,removeSubMenu:n,openMenu:b,closeMenu:M,handleMenuItemClick:I,handleSubMenuClick:g})),E("subMenu:".concat(l.uid),{addSubMenu:t,removeSubMenu:n,mouseInChild:y(!1),level:0})}w((()=>{"horizontal"===e.mode&&new le(l.vnode.el,r.namespace.value)}));o({open:e=>{const{indexPath:t}=h.value[e];t.forEach((e=>b(e,t)))},close:x,handleResize:A});return()=>{var t,o;let a=null!=(o=null==(t=n.default)?void 0:t.call(n))?o:[];const l=[];if("horizontal"===e.mode&&u.value){const t=q(a),n=-1===c.value?t:t.slice(0,c.value),o=-1===c.value?[]:t.slice(c.value);(null==o?void 0:o.length)&&e.ellipsis&&(a=n,l.push(T(pe,{index:"sub-menu-more",class:i.e("hide-arrow")},{title:()=>T(O,{class:i.e("icon-more")},{default:()=>T(F)}),default:()=>o})))}const s=ie(e,0),d=T("ul",{key:String(e.collapse),role:"menubar",ref:u,style:s.value,class:{[r.b()]:!0,[r.m(e.mode)]:!0,[r.m("collapse")]:e.collapse}},[...a,...l]);return e.collapseTransition&&"vertical"===e.mode?T(se,(()=>d)):d}}});const fe=f({index:{type:L([String,null]),default:null},route:{type:L([String,Object])},disabled:Boolean}),be="ElMenuItem";var xe=n(o({name:be,components:{ElTooltip:ne},props:fe,emits:{click:e=>B(e.index)&&Array.isArray(e.indexPath)},setup(e,{emit:t}){const n=j(),o=M("rootMenu"),l=a("menu"),s=a("menu-item");o||g(be,"can not inject root menu");const{parentMenu:u,indexPath:r}=ue(n,H(e,"index")),i=M("subMenu:".concat(u.value.uid));i||g(be,"can not inject sub menu");const c=m((()=>e.index===o.activeIndex)),d=k({index:e.index,indexPath:r,active:c});return w((()=>{i.addSubMenu(d),o.addMenuItem(d)})),A((()=>{i.removeSubMenu(d),o.removeMenuItem(d)})),{parentMenu:u,rootMenu:o,active:c,nsMenu:l,nsMenuItem:s,handleClick:()=>{e.disabled||(o.handleMenuItemClick({index:e.index,indexPath:r.value,route:e.route}),t("click",d))}}}}),[["render",function(e,t,n,o,a,i){const c=U("el-tooltip");return l(),Z("li",{class:K([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},["ElMenu"===e.parentMenu.type.name&&e.rootMenu.props.collapse&&e.$slots.title?(l(),s(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:u((()=>[r(e.$slots,"title")])),default:u((()=>[J("div",{class:K(e.nsMenu.be("tooltip","trigger"))},[r(e.$slots,"default")],2)])),_:3},8,["effect"])):(l(),Z(N,{key:1},[r(e.$slots,"default"),r(e.$slots,"title")],64))],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);var Me=n(o({name:"ElMenuItemGroup",props:{title:String},setup:()=>({ns:a("menu-item-group")})}),[["render",function(e,t,n,o,a,s){return l(),Z("li",{class:K(e.ns.b())},[J("div",{class:K(e.ns.e("title"))},[e.$slots.title?r(e.$slots,"title",{key:1}):(l(),Z(N,{key:0},[Y(Q(e.title),1)],64))],2),J("ul",null,[r(e.$slots,"default")])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const ge=X(he,{MenuItem:xe,MenuItemGroup:Me,SubMenu:pe}),ye=ee(xe);ee(Me);const Ie=ee(pe);export{ge as E,Ie as a,ye as b};
