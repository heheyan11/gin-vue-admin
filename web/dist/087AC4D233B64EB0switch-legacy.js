/*! 
 Build based on gin-vue-admin 
 Time : 1698981314000 */
!function(){function e(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function t(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?e(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}System.register(["./087AC4D233B64EB0index-legacy.js"],(function(e,l){"use strict";var n,c,r,o,a,s,u,h,d,v,p,f,w,_,b,g,x,m,y,k,S,C,I,O,V,j,P,T,z,B,E,A,N,D,K,F,U,q,G,H,J,Q,R,Y,L;return{setters:[function(e){n=e.C,c=e.bs,r=e.D,o=e.a1,a=e.bo,s=e.b3,u=e.aA,h=e.bm,d=e.br,v=e.c_,p=e.x,f=e.aR,w=e.ah,_=e.y,b=e.c8,g=e.c7,x=e.F,m=e.a,y=e.Q,k=e.Y,S=e.aS,C=e.U,I=e.o,O=e.c,V=e.b,j=e.G,P=e.n,T=e.q,z=e.h,B=e.w,E=e.I,A=e.J,N=e.e,D=e.t,K=e.d,F=e.c4,U=e.H,q=e.ak,G=e._,H=e.ax,J=e.V,Q=e.cT,R=e.ay,Y=e.a7,L=e.K}],execute:function(){var l,M=document.createElement("style");M.textContent=".el-switch{--el-switch-on-color: var(--el-color-primary);--el-switch-off-color: var(--el-border-color);display:inline-flex;align-items:center;position:relative;font-size:14px;line-height:20px;height:32px;vertical-align:middle}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__label{transition:var(--el-transition-duration-fast);height:20px;display:inline-block;font-size:14px;font-weight:500;cursor:pointer;vertical-align:middle;color:var(--el-text-color-primary)}.el-switch__label.is-active{color:var(--el-color-primary)}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{line-height:1;font-size:14px;display:inline-block}.el-switch__label .el-icon{height:inherit}.el-switch__label .el-icon svg{vertical-align:middle}.el-switch__input{position:absolute;width:0;height:0;opacity:0;margin:0}.el-switch__input:focus-visible~.el-switch__core{outline:2px solid var(--el-switch-on-color);outline-offset:1px}.el-switch__core{display:inline-flex;position:relative;align-items:center;min-width:40px;height:20px;border:1px solid var(--el-switch-border-color, var(--el-switch-off-color));outline:none;border-radius:10px;box-sizing:border-box;background:var(--el-switch-off-color);cursor:pointer;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration)}.el-switch__core .el-switch__inner{width:100%;transition:all var(--el-transition-duration);height:16px;display:flex;justify-content:center;align-items:center;overflow:hidden;padding:0 4px 0 18px}.el-switch__core .el-switch__inner .is-icon,.el-switch__core .el-switch__inner .is-text{font-size:12px;color:var(--el-color-white);-webkit-user-select:none;user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.el-switch__core .el-switch__action{position:absolute;left:1px;border-radius:var(--el-border-radius-circle);transition:all var(--el-transition-duration);width:16px;height:16px;background-color:var(--el-color-white);display:flex;justify-content:center;align-items:center;color:var(--el-switch-off-color)}.el-switch.is-checked .el-switch__core{border-color:var(--el-switch-border-color, var(--el-switch-on-color));background-color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__action{left:calc(100% - 17px);color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__inner{padding:0 18px 0 4px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter-from,.el-switch .label-fade-leave-active{opacity:0}.el-switch--large{font-size:14px;line-height:24px;height:40px}.el-switch--large .el-switch__label{height:24px;font-size:14px}.el-switch--large .el-switch__label *{font-size:14px}.el-switch--large .el-switch__core{min-width:50px;height:24px;border-radius:12px}.el-switch--large .el-switch__core .el-switch__inner{height:20px;padding:0 6px 0 22px}.el-switch--large .el-switch__core .el-switch__action{width:20px;height:20px}.el-switch--large.is-checked .el-switch__core .el-switch__action{left:calc(100% - 21px)}.el-switch--large.is-checked .el-switch__core .el-switch__inner{padding:0 22px 0 6px}.el-switch--small{font-size:12px;line-height:16px;height:24px}.el-switch--small .el-switch__label{height:16px;font-size:12px}.el-switch--small .el-switch__label *{font-size:12px}.el-switch--small .el-switch__core{min-width:30px;height:16px;border-radius:8px}.el-switch--small .el-switch__core .el-switch__inner{height:12px;padding:0 2px 0 14px}.el-switch--small .el-switch__core .el-switch__action{width:12px;height:12px}.el-switch--small.is-checked .el-switch__core .el-switch__action{left:calc(100% - 13px)}.el-switch--small.is-checked .el-switch__core .el-switch__inner{padding:0 14px 0 2px}\n",document.head.appendChild(M);var W=n({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:c},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:r},activeActionIcon:{type:r},activeIcon:{type:r},inactiveIcon:{type:r},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:o(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),X=(i(l={},a,(function(e){return s(e)||u(e)||h(e)})),i(l,d,(function(e){return s(e)||u(e)||h(e)})),i(l,v,(function(e){return s(e)||u(e)||h(e)})),l),Z=["onClick"],$=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],ee=["aria-hidden"],te=["aria-hidden"],ie=["aria-hidden"],le="ElSwitch",ne=p({name:le}),ce=p(t(t({},ne),{},{props:W,emits:X,setup:function(e,i){var l=i.expose,n=i.emit,c=e,r=Y(),o=f().formItem,u=w(),h=_("switch");[['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]].forEach((function(e){H({from:e[0],replacement:e[1],scope:le,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},x((function(){var t;return!!(null==(t=r.vnode.props)?void 0:t[e[2]])})))}));var p=b(c,{formItemContext:o}).inputId,G=g(x((function(){return c.loading}))),L=m(!1!==c.modelValue),M=m(),W=m(),X=x((function(){return[h.b(),h.m(u.value),h.is("disabled",G.value),h.is("checked",ae.value)]})),ne=x((function(){return[h.e("label"),h.em("label","left"),h.is("active",!ae.value)]})),ce=x((function(){return[h.e("label"),h.em("label","right"),h.is("active",ae.value)]})),re=x((function(){return{width:y(c.width)}}));k((function(){return c.modelValue}),(function(){L.value=!0})),k((function(){return c.value}),(function(){L.value=!1}));var oe=x((function(){return L.value?c.modelValue:c.value})),ae=x((function(){return oe.value===c.activeValue}));[c.activeValue,c.inactiveValue].includes(oe.value)||(n(a,c.inactiveValue),n(d,c.inactiveValue),n(v,c.inactiveValue)),k(ae,(function(e){var t;M.value.checked=e,c.validateEvent&&(null==(t=null==o?void 0:o.validate)||t.call(o,"change").catch((function(e){return S()})))}));var se=function(){var e=ae.value?c.inactiveValue:c.activeValue;n(a,e),n(d,e),n(v,e),J((function(){M.value.checked=ae.value}))},ue=function(){if(!G.value){var e=c.beforeChange;if(e){var t=e();[Q(t),s(t)].includes(!0)||R(le,"beforeChange must return type `Promise<boolean>` or `boolean`"),Q(t)?t.then((function(e){e&&se()})).catch((function(e){})):t&&se()}else se()}},he=x((function(){return h.cssVarBlock(t(t(t({},c.activeColor?{"on-color":c.activeColor}:null),c.inactiveColor?{"off-color":c.inactiveColor}:null),c.borderColor?{"border-color":c.borderColor}:null))}));return C((function(){M.value.checked=ae.value})),l({focus:function(){var e,t;null==(t=null==(e=M.value)?void 0:e.focus)||t.call(e)},checked:ae}),function(e,t){return I(),O("div",{class:P(j(X)),style:U(j(he)),onClick:q(ue,["prevent"])},[V("input",{id:j(p),ref_key:"input",ref:M,class:P(j(h).e("input")),type:"checkbox",role:"switch","aria-checked":j(ae),"aria-disabled":j(G),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:j(G),tabindex:e.tabindex,onChange:se,onKeydown:T(ue,["enter"])},null,42,$),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?N("v-if",!0):(I(),O("span",{key:0,class:P(j(ne))},[e.inactiveIcon?(I(),z(j(A),{key:0},{default:B((function(){return[(I(),z(E(e.inactiveIcon)))]})),_:1})):N("v-if",!0),!e.inactiveIcon&&e.inactiveText?(I(),O("span",{key:1,"aria-hidden":j(ae)},D(e.inactiveText),9,ee)):N("v-if",!0)],2)),V("span",{ref_key:"core",ref:W,class:P(j(h).e("core")),style:U(j(re))},[e.inlinePrompt?(I(),O("div",{key:0,class:P(j(h).e("inner"))},[e.activeIcon||e.inactiveIcon?(I(),z(j(A),{key:0,class:P(j(h).is("icon"))},{default:B((function(){return[(I(),z(E(j(ae)?e.activeIcon:e.inactiveIcon)))]})),_:1},8,["class"])):e.activeText||e.inactiveText?(I(),O("span",{key:1,class:P(j(h).is("text")),"aria-hidden":!j(ae)},D(j(ae)?e.activeText:e.inactiveText),11,te)):N("v-if",!0)],2)):N("v-if",!0),V("div",{class:P(j(h).e("action"))},[e.loading?(I(),z(j(A),{key:0,class:P(j(h).is("loading"))},{default:B((function(){return[K(j(F))]})),_:1},8,["class"])):e.activeActionIcon&&j(ae)?(I(),z(j(A),{key:1},{default:B((function(){return[(I(),z(E(e.activeActionIcon)))]})),_:1})):e.inactiveActionIcon&&!j(ae)?(I(),z(j(A),{key:2},{default:B((function(){return[(I(),z(E(e.inactiveActionIcon)))]})),_:1})):N("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?N("v-if",!0):(I(),O("span",{key:1,class:P(j(ce))},[e.activeIcon?(I(),z(j(A),{key:0},{default:B((function(){return[(I(),z(E(e.activeIcon)))]})),_:1})):N("v-if",!0),!e.activeIcon&&e.activeText?(I(),O("span",{key:1,"aria-hidden":!j(ae)},D(e.activeText),9,ie)):N("v-if",!0)],2))],14,Z)}}}));e("E",L(G(ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]])))}}}))}();
