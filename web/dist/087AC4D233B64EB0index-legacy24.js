/*! 
 Build based on gin-vue-admin 
 Time : 1699839817000 */
!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function t(e,n,t){return(n=a(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a(o.key),o)}}function r(e,n,t){return n&&u(e.prototype,n),t&&u(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0index-legacy25.js","./087AC4D233B64EB0index-legacy21.js"],(function(n,u){"use strict";var a,l,i,s,c,p,d,f,v,m,h,b,y,g,x,M,I,S,k,C,w,E,A,T,P,O,B,j,z,N,$,L,_,W,D,q,R,F,G,V,H,U,Z,J,K,X,Y,Q,ee,ne,te,oe,ue,re,ae,le,ie;return{setters:[function(e){a=e.a6,l=e.as,i=e._,s=e.x,c=e.y,p=e.o,d=e.h,f=e.w,v=e.B,m=e.aj,h=e.Y,b=e.at,y=e.au,g=e.av,x=e.F,M=e.aw,I=e.C,S=e.D,k=e.ax,C=e.a3,w=e.ay,E=e.a,A=e.ad,T=e.az,P=e.r,O=e.V,B=e.z,j=e.R,z=e.ag,N=e.A,$=e.aA,L=e.J,_=e.W,W=e.X,D=e.M,q=e.a4,R=e.aB,F=e.Z,G=e.aC,V=e.aD,H=e.aE,U=e.aF,Z=e.aG,J=e.aH,K=e.aI,X=e.S,Y=e.a8,Q=e.P,ee=e.c,ne=e.b,te=e.n,oe=e.g,ue=e.t,re=e.K,ae=e.L},function(e){le=e._},function(e){ie=e.E}],execute:function(){var u=function(){function e(n,t){o(this,e),this.parent=n,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}return r(e,[{key:"init",value:function(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}},{key:"gotoSubIndex",value:function(e){e===this.subMenuItems.length?e=0:e<0&&(e=this.subMenuItems.length-1),this.subMenuItems[e].focus(),this.subIndex=e}},{key:"addListeners",value:function(){var e=this,n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,(function(t){t.addEventListener("keydown",(function(t){var o=!1;switch(t.code){case a.down:e.gotoSubIndex(e.subIndex+1),o=!0;break;case a.up:e.gotoSubIndex(e.subIndex-1),o=!0;break;case a.tab:l(n,"mouseleave");break;case a.enter:case a.space:o=!0,t.currentTarget.click()}return o&&(t.preventDefault(),t.stopPropagation()),!1}))}))}}]),e}(),se=function(){function e(n,t){o(this,e),this.domNode=n,this.submenu=null,this.submenu=null,this.init(t)}return r(e,[{key:"init",value:function(e){this.domNode.setAttribute("tabindex","0");var n=this.domNode.querySelector(".".concat(e,"-menu"));n&&(this.submenu=new u(this,n)),this.addListeners()}},{key:"addListeners",value:function(){var e=this;this.domNode.addEventListener("keydown",(function(n){var t=!1;switch(n.code){case a.down:l(n.currentTarget,"mouseenter"),e.submenu&&e.submenu.gotoSubIndex(0),t=!0;break;case a.up:l(n.currentTarget,"mouseenter"),e.submenu&&e.submenu.gotoSubIndex(e.submenu.subMenuItems.length-1),t=!0;break;case a.tab:l(n.currentTarget,"mouseleave");break;case a.enter:case a.space:t=!0,n.currentTarget.click()}t&&n.preventDefault()}))}}]),e}(),ce=function(){function e(n,t){o(this,e),this.domNode=n,this.init(t)}return r(e,[{key:"init",value:function(e){var n=this.domNode.childNodes;Array.from(n).forEach((function(n){1===n.nodeType&&new se(n,e)}))}}]),e}(),pe=s({name:"ElMenuCollapseTransition",setup:function(){var e=c("menu");return{listeners:{onBeforeEnter:function(e){return e.style.opacity="0.2"},onEnter:function(n,t){b(n,"".concat(e.namespace.value,"-opacity-transition")),n.style.opacity="1",t()},onAfterEnter:function(n){y(n,"".concat(e.namespace.value,"-opacity-transition")),n.style.opacity=""},onBeforeLeave:function(n){n.dataset||(n.dataset={}),g(n,e.m("collapse"))?(y(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),b(n,e.m("collapse"))):(b(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),y(n,e.m("collapse"))),n.style.width="".concat(n.scrollWidth,"px"),n.style.overflow="hidden"},onLeave:function(e){b(e,"horizontal-collapse-transition"),e.style.width="".concat(e.dataset.scrollWidth,"px")}}}}});var de=i(pe,[["render",function(e,n,t,o,u,r){return p(),d(h,m({mode:"out-in"},e.listeners),{default:f((function(){return[v(e.$slots,"default")]})),_:3},16)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function fe(e,n){var t=x((function(){for(var t=e.parent,o=[n.value];"ElMenu"!==t.type.name;)t.props.index&&o.unshift(t.props.index),t=t.parent;return o}));return{parentMenu:x((function(){for(var n=e.parent;n&&!["ElMenu","ElSubMenu"].includes(n.type.name);)n=n.parent;return n})),indexPath:t}}function ve(e){return x((function(){var n=e.backgroundColor;return n?new M(n).shade(20).toString():""}))}var me=function(e,n){var t=c("menu");return x((function(){return t.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":ve(e).value||"","active-color":e.activeTextColor||"",level:"".concat(n)})}))},he=I({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:S},expandOpenIcon:{type:S},collapseCloseIcon:{type:S},collapseOpenIcon:{type:S}}),be="ElSubMenu",ye=s({name:be,props:he,setup:function(e,n){var t=n.slots,o=n.expose;k({from:"popper-append-to-body",replacement:"teleported",scope:be,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},x((function(){return void 0!==e.popperAppendToBody})));var u=q(),r=fe(u,x((function(){return e.index}))),a=r.indexPath,l=r.parentMenu,i=c("menu"),s=c("sub-menu"),p=C("rootMenu");p||w(be,"can not inject root menu");var d=C("subMenu:".concat(l.value.uid));d||w(be,"can not inject sub menu");var f,v=E({}),m=E({}),h=E(!1),b=E(),y=E(null),g=x((function(){return"horizontal"===U.value&&I.value?"bottom-start":"right-start"})),M=x((function(){return"horizontal"===U.value&&I.value||"vertical"===U.value&&!p.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?V.value?e.expandOpenIcon:e.expandCloseIcon:A:e.collapseCloseIcon&&e.collapseOpenIcon?V.value?e.collapseOpenIcon:e.collapseCloseIcon:T})),I=x((function(){return 0===d.level})),S=x((function(){var n,t=null!=(n=e.teleported)?n:e.popperAppendToBody;return void 0===t?I.value:t})),F=x((function(){return p.props.collapse?"".concat(i.namespace.value,"-zoom-in-left"):"".concat(i.namespace.value,"-zoom-in-top")})),G=x((function(){return"horizontal"===U.value&&I.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]})),V=x((function(){return p.openedMenus.includes(e.index)})),H=x((function(){var e=!1;return Object.values(v.value).forEach((function(n){n.active&&(e=!0)})),Object.values(m.value).forEach((function(n){n.active&&(e=!0)})),e})),U=x((function(){return p.props.mode})),Z=P({index:e.index,indexPath:a,active:H}),J=me(p.props,d.level+1),K=function(e){var n,t,o;e||null==(o=null==(t=null==(n=y.value)?void 0:n.popperRef)?void 0:t.popperInstanceRef)||o.destroy()},X=function(){"hover"===p.props.menuTrigger&&"horizontal"===p.props.mode||p.props.collapse&&"vertical"===p.props.mode||e.disabled||p.handleSubMenuClick({index:e.index,indexPath:a.value,active:H.value})},Y=function(n){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.showTimeout;if("focus"!==n.type&&!("click"===p.props.menuTrigger&&"horizontal"===p.props.mode||!p.props.collapse&&"vertical"===p.props.mode||e.disabled)){d.mouseInChild.value=!0,null==f||f();var u=R((function(){p.openMenu(e.index,a.value)}),o);f=u.stop,S.value&&(null==(t=l.value.vnode.el)||t.dispatchEvent(new MouseEvent("mouseenter")))}},Q=function(){var n,t,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!("click"===p.props.menuTrigger&&"horizontal"===p.props.mode||!p.props.collapse&&"vertical"===p.props.mode)){null==f||f(),d.mouseInChild.value=!1;var r=R((function(){return!h.value&&p.closeMenu(e.index,a.value)}),e.hideTimeout);f=r.stop,S.value&&o&&"ElSubMenu"===(null==(n=u.parent)?void 0:n.type.name)&&(null==(t=d.handleMouseleave)||t.call(d,!0))}};O((function(){return p.props.collapse}),(function(e){return K(Boolean(e))}));return B("subMenu:".concat(u.uid),{addSubMenu:function(e){m.value[e.index]=e},removeSubMenu:function(e){delete m.value[e.index]},handleMouseleave:Q,mouseInChild:h,level:d.level+1}),o({opened:V}),j((function(){p.addSubMenu(Z),d.addSubMenu(Z)})),z((function(){d.removeSubMenu(Z),p.removeSubMenu(Z)})),function(){var n,o=[null==(n=t.title)?void 0:n.call(t),N(L,{class:s.e("icon-arrow"),style:{transform:V.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&p.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:function(){return $(M.value)?N(u.appContext.components[M.value]):N(M.value)}})],r=p.isMenuPopup?N(ie,{ref:y,visible:V.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:g.value,teleported:S.value,fallbackPlacements:G.value,transition:F.value,gpuAcceleration:!1},{content:function(){var n;return N("div",{class:[i.m(U.value),i.m("popup-container"),e.popperClass],onMouseenter:function(e){return Y(e,100)},onMouseleave:function(){return Q(!0)},onFocus:function(e){return Y(e,100)}},[N("ul",{class:[i.b(),i.m("popup"),i.m("popup-".concat(g.value))],style:J.value},[null==(n=t.default)?void 0:n.call(t)])])},default:function(){return N("div",{class:s.e("title"),onClick:X},o)}}):N(D,{},[N("div",{class:s.e("title"),ref:b,onClick:X},o),N(le,{},{default:function(){var e;return _(N("ul",{role:"menu",class:[i.b(),i.m("inline")],style:J.value},[null==(e=t.default)?void 0:e.call(t)]),[[W,V.value]])}})]);return N("li",{class:[s.b(),s.is("active",H.value),s.is("opened",V.value),s.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:V.value,onMouseenter:Y,onMouseleave:function(){return Q(!0)},onFocus:Y},[r])}}}),ge=I({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:F(Array),default:function(){return G([])}},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),xe=function(e){return Array.isArray(e)&&e.every((function(e){return $(e)}))},Me=s({name:"ElMenu",props:ge,emits:{close:function(e,n){return $(e)&&xe(n)},open:function(e,n){return $(e)&&xe(n)},select:function(e,n,t,o){return $(e)&&xe(n)&&J(t)&&(void 0===o||o instanceof Promise)}},setup:function(n,o){var u,r=o.emit,a=o.slots,l=o.expose,i=q(),s=i.appContext.config.globalProperties.$router,p=E(),d=c("menu"),f=c("sub-menu"),v=E(-1),m=E(n.defaultOpeneds&&!n.collapse?n.defaultOpeneds.slice(0):[]),h=E(n.defaultActive),b=E({}),y=E({}),g=x((function(){return"horizontal"===n.mode||"vertical"===n.mode&&n.collapse})),M=function(e,t){m.value.includes(e)||(n.uniqueOpened&&(m.value=m.value.filter((function(e){return t.includes(e)}))),m.value.push(e),r("open",e,t))},I=function(e){var n=m.value.indexOf(e);-1!==n&&m.value.splice(n,1)},S=function(e,n){I(e),r("close",e,n)},k=!0,C=function(){var e=function(){v.value=-1,X((function(){v.value=function(){var e,n;if(!p.value)return-1;var t=Array.from(null!=(n=null==(e=p.value)?void 0:e.childNodes)?n:[]).filter((function(e){return"#comment"!==e.nodeName&&("#text"!==e.nodeName||e.nodeValue)})),o=Number.parseInt(getComputedStyle(p.value).paddingLeft,10),u=Number.parseInt(getComputedStyle(p.value).paddingRight,10),r=p.value.clientWidth-o-u,a=0,l=0;return t.forEach((function(e,n){(a+=e.offsetWidth||0)<=r-64&&(l=n+1)})),l===t.length?-1:l}()}))};k?e():function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:33.34;return function(){n&&clearTimeout(n),n=setTimeout((function(){e()}),t)}}(e)(),k=!1};O((function(){return n.defaultActive}),(function(e){var t,o,u;b.value[e]||(h.value=""),t=e,o=b.value,u=o[t]||h.value&&o[h.value]||o[n.defaultActive],h.value=u?u.index:t})),O((function(){return n.collapse}),(function(e){e&&(m.value=[])})),O(b.value,(function(){var e=h.value&&b.value[h.value];e&&"horizontal"!==n.mode&&!n.collapse&&e.indexPath.forEach((function(e){var n=y.value[e];n&&M(e,n.indexPath)}))})),V((function(){"horizontal"===n.mode&&n.ellipsis?u=H(p,C).stop:null==u||u()}));var w=function(e){y.value[e.index]=e},A=function(e){delete y.value[e.index]};B("rootMenu",P({props:n,openedMenus:m,items:b,subMenus:y,activeIndex:h,isMenuPopup:g,addMenuItem:function(e){b.value[e.index]=e},removeMenuItem:function(e){delete b.value[e.index]},addSubMenu:w,removeSubMenu:A,openMenu:M,closeMenu:S,handleMenuItemClick:function(e){("horizontal"===n.mode||n.collapse)&&(m.value=[]);var t=e.index,o=e.indexPath;if(!K(t)&&!K(o))if(n.router&&s){var u=e.route||t,a=s.push(u).then((function(e){return e||(h.value=t),e}));r("select",t,o,{index:t,indexPath:o,route:u},a)}else h.value=t,r("select",t,o,{index:t,indexPath:o})},handleSubMenuClick:function(e){var n=e.index,t=e.indexPath;m.value.includes(n)?S(n,t):M(n,t)}})),B("subMenu:".concat(i.uid),{addSubMenu:w,removeSubMenu:A,mouseInChild:E(!1),level:0}),j((function(){"horizontal"===n.mode&&new ce(i.vnode.el,d.namespace.value)}));return l({open:function(e){var n=y.value[e].indexPath;n.forEach((function(e){return M(e,n)}))},close:I,handleResize:C}),function(){var o,u,r,l=null!=(r=null==(u=a.default)?void 0:u.call(a))?r:[],i=[];if("horizontal"===n.mode&&p.value){var s=U(l),c=-1===v.value?s:s.slice(0,v.value),m=-1===v.value?[]:s.slice(v.value);(null==m?void 0:m.length)&&n.ellipsis&&(l=c,i.push(N(ye,{index:"sub-menu-more",class:f.e("hide-arrow")},{title:function(){return N(L,{class:f.e("icon-more")},{default:function(){return N(Z)}})},default:function(){return m}})))}var h=me(n,0),b=N("ul",{key:String(n.collapse),role:"menubar",ref:p,style:h.value,class:(o={},t(o,d.b(),!0),t(o,d.m(n.mode),!0),t(o,d.m("collapse"),n.collapse),o)},[].concat(e(l),i));return n.collapseTransition&&"vertical"===n.mode?N(de,(function(){return b})):b}}}),Ie=I({index:{type:F([String,null]),default:null},route:{type:F([String,Object])},disabled:Boolean}),Se="ElMenuItem",ke=s({name:Se,components:{ElTooltip:ie},props:Ie,emits:{click:function(e){return $(e.index)&&Array.isArray(e.indexPath)}},setup:function(e,n){var t=n.emit,o=q(),u=C("rootMenu"),r=c("menu"),a=c("menu-item");u||w(Se,"can not inject root menu");var l=fe(o,Y(e,"index")),i=l.parentMenu,s=l.indexPath,p=C("subMenu:".concat(i.value.uid));p||w(Se,"can not inject sub menu");var d=x((function(){return e.index===u.activeIndex})),f=P({index:e.index,indexPath:s,active:d});return j((function(){p.addSubMenu(f),u.addMenuItem(f)})),z((function(){p.removeSubMenu(f),u.removeMenuItem(f)})),{parentMenu:i,rootMenu:u,active:d,nsMenu:r,nsMenuItem:a,handleClick:function(){e.disabled||(u.handleMenuItemClick({index:e.index,indexPath:s.value,route:e.route}),t("click",f))}}}});var Ce=i(ke,[["render",function(e,n,t,o,u,r){var a=Q("el-tooltip");return p(),ee("li",{class:te([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:n[0]||(n[0]=function(){return e.handleClick&&e.handleClick.apply(e,arguments)})},["ElMenu"===e.parentMenu.type.name&&e.rootMenu.props.collapse&&e.$slots.title?(p(),d(a,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:f((function(){return[v(e.$slots,"title")]})),default:f((function(){return[ne("div",{class:te(e.nsMenu.be("tooltip","trigger"))},[v(e.$slots,"default")],2)]})),_:3},8,["effect"])):(p(),ee(D,{key:1},[v(e.$slots,"default"),v(e.$slots,"title")],64))],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]),we=s({name:"ElMenuItemGroup",props:{title:String},setup:function(){return{ns:c("menu-item-group")}}});var Ee=i(we,[["render",function(e,n,t,o,u,r){return p(),ee("li",{class:te(e.ns.b())},[ne("div",{class:te(e.ns.e("title"))},[e.$slots.title?v(e.$slots,"title",{key:1}):(p(),ee(D,{key:0},[oe(ue(e.title),1)],64))],2),ne("ul",null,[v(e.$slots,"default")])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);n("E",re(Me,{MenuItem:Ce,MenuItemGroup:Ee,SubMenu:ye})),n("b",ae(Ce));ae(Ee);n("a",ae(ye))}}}))}();
