/*! 
 Build based on gin-vue-admin 
 Time : 1698979068000 */
!function(){function e(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0index-legacy25.js","./087AC4D233B64EB0checkbox-legacy.js"],(function(r,a){"use strict";var d,l,c,s,u,h,f,v,p,y,g,k,m,N,b,C,x,E,D,w,K,_,S,A,z,B,T,O,L,I,$,M,j,q,F,P,H,R,Y,U,W,J,V,X,Z,G,Q,ee,te;return{setters:[function(e){d=e.c2,l=e.r,c=e.aH,s=e._,u=e.x,h=e.y,f=e.a6,v=e.A,p=e.z,y=e.a,g=e.au,k=e.at,m=e.J,N=e.c4,b=e.Y,C=e.V,x=e.cY,E=e.S,D=e.Z,w=e.$,K=e.o,_=e.c,S=e.b,A=e.h,z=e.w,B=e.I,T=e.n,O=e.ak,L=e.e,I=e.d,$=e.H,M=e.M,j=e.N,q=e.a7,F=e.b0,P=e.aA,H=e.T,R=e.U,Y=e.b6,U=e.ac,W=e.a9,J=e.D,V=e.P,X=e.F,Z=e.b5,G=e.B,Q=e.t},function(e){ee=e._},function(e){te=e.E}],execute:function(){var a=document.createElement("style");a.textContent=".fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.fade-in-linear-enter-from,.fade-in-linear-leave-to{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:var(--el-transition-fade-linear)}.el-fade-in-linear-enter-from,.el-fade-in-linear-leave-to{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-fade-in-enter-from,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-zoom-in-center-enter-from,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transition:var(--el-transition-md-fade);transform-origin:center top}.el-zoom-in-top-enter-active[data-popper-placement^=top],.el-zoom-in-top-leave-active[data-popper-placement^=top]{transform-origin:center bottom}.el-zoom-in-top-enter-from,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transition:var(--el-transition-md-fade);transform-origin:center bottom}.el-zoom-in-bottom-enter-from,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1);transition:var(--el-transition-md-fade);transform-origin:top left}.el-zoom-in-left-enter-from,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:var(--el-transition-duration) height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.el-collapse-transition-leave-active,.el-collapse-transition-enter-active{transition:var(--el-transition-duration) max-height ease-in-out,var(--el-transition-duration) padding-top ease-in-out,var(--el-transition-duration) padding-bottom ease-in-out}.horizontal-collapse-transition{transition:var(--el-transition-duration) width ease-in-out,var(--el-transition-duration) padding-left ease-in-out,var(--el-transition-duration) padding-right ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter-from,.el-list-leave-to{opacity:0;transform:translateY(-30px)}.el-list-leave-active{position:absolute!important}.el-opacity-transition{transition:opacity var(--el-transition-duration) cubic-bezier(.55,0,.1,1)}.el-tree{--el-tree-node-content-height: 26px;--el-tree-node-hover-bg-color: var(--el-fill-color-light);--el-tree-text-color: var(--el-text-color-regular);--el-tree-expand-icon-color: var(--el-text-color-placeholder);position:relative;cursor:default;background:var(--el-fill-color-blank);color:var(--el-tree-text-color);font-size:var(--el-font-size-base)}.el-tree__empty-block{position:relative;min-height:60px;text-align:center;width:100%;height:100%}.el-tree__empty-text{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:var(--el-text-color-secondary);font-size:var(--el-font-size-base)}.el-tree__drop-indicator{position:absolute;left:0;right:0;height:1px;background-color:var(--el-color-primary)}.el-tree-node{white-space:nowrap;outline:none}.el-tree-node:focus>.el-tree-node__content{background-color:var(--el-tree-node-hover-bg-color)}.el-tree-node.is-drop-inner>.el-tree-node__content .el-tree-node__label{background-color:var(--el-color-primary);color:#fff}.el-tree-node__content{--el-checkbox-height: var(--el-tree-node-content-height);display:flex;align-items:center;height:var(--el-tree-node-content-height);cursor:pointer}.el-tree-node__content>.el-tree-node__expand-icon{padding:6px;box-sizing:content-box}.el-tree-node__content>label.el-checkbox{margin-right:8px}.el-tree-node__content:hover{background-color:var(--el-tree-node-hover-bg-color)}.el-tree.is-dragging .el-tree-node__content{cursor:move}.el-tree.is-dragging .el-tree-node__content *{pointer-events:none}.el-tree.is-dragging.is-drop-not-allow .el-tree-node__content{cursor:not-allowed}.el-tree-node__expand-icon{cursor:pointer;color:var(--el-tree-expand-icon-color);font-size:12px;transform:rotate(0);transition:transform var(--el-transition-duration) ease-in-out}.el-tree-node__expand-icon.expanded{transform:rotate(90deg)}.el-tree-node__expand-icon.is-leaf{color:transparent;cursor:default;visibility:hidden}.el-tree-node__expand-icon.is-hidden{visibility:hidden}.el-tree-node__loading-icon{margin-right:8px;font-size:var(--el-font-size-base);color:var(--el-tree-expand-icon-color)}.el-tree-node>.el-tree-node__children{overflow:hidden;background-color:transparent}.el-tree-node.is-expanded>.el-tree-node__children{display:block}.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content{background-color:var(--el-color-primary-light-9)}\n",document.head.appendChild(a);var ne="$treeNodeId",re=function(e,t){t&&!t[ne]&&Object.defineProperty(t,ne,{value:e.id,enumerable:!1,configurable:!1,writable:!1})},oe=function(e,t){return e?t[e]:t[ne]},ae=function(e,t,n){var r=e.value.currentNode;n();var o=e.value.currentNode;r!==o&&t("current-change",o?o.data:null,o)},ie=function(e){for(var t=!0,n=!0,r=!0,o=0,a=e.length;o<a;o++){var i=e[o];(!0!==i.checked||i.indeterminate)&&(t=!1,i.disabled||(r=!1)),(!1!==i.checked||i.indeterminate)&&(n=!1)}return{all:t,none:n,allWithoutDisable:r,half:!t&&!n}},de=function e(t){if(0!==t.childNodes.length&&!t.loading){var n=ie(t.childNodes),r=n.all,o=n.none,a=n.half;r?(t.checked=!0,t.indeterminate=!1):a?(t.checked=!1,t.indeterminate=!0):o&&(t.checked=!1,t.indeterminate=!1);var i=t.parent;i&&0!==i.level&&(t.store.checkStrictly||e(i))}},le=function(e,t){var n=e.store.props,r=e.data||{},o=n[t];if("function"==typeof o)return o(r,e);if("string"==typeof o)return r[o];if(void 0===o){var a=r[t];return void 0===a?"":a}},ce=0,se=function(){function e(t){for(var n in o(this,e),this.id=ce++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1,t)d(t,n)&&(this[n]=t[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}return i(e,[{key:"initialize",value:function(){var e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);var t=e.props;if(t&&void 0!==t.isLeaf){var n=le(this,"isLeaf");"boolean"==typeof n&&(this.isLeafByUser=n)}if(!0!==e.lazy&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||re(this,this.data),this.data){var r=e.defaultExpandedKeys,o=e.key;o&&r&&r.includes(this.key)&&this.expand(null,e.autoExpandParent),o&&void 0!==e.currentNodeKey&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),!this.parent||1!==this.level&&!0!==this.parent.expanded||(this.canFocus=!0)}}},{key:"setData",value:function(e){var t;Array.isArray(e)||re(this,e),this.data=e,this.childNodes=[];for(var n=0,r=(t=0===this.level&&Array.isArray(this.data)?this.data:le(this,"children")||[]).length;n<r;n++)this.insertChild({data:t[n]})}},{key:"label",get:function(){return le(this,"label")}},{key:"key",get:function(){var e=this.store.key;return this.data?this.data[e]:null}},{key:"disabled",get:function(){return le(this,"disabled")}},{key:"nextSibling",get:function(){var e=this.parent;if(e){var t=e.childNodes.indexOf(this);if(t>-1)return e.childNodes[t+1]}return null}},{key:"previousSibling",get:function(){var e=this.parent;if(e){var t=e.childNodes.indexOf(this);if(t>-1)return t>0?e.childNodes[t-1]:null}return null}},{key:"contains",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return(this.childNodes||[]).some((function(n){return n===e||t&&n.contains(e)}))}},{key:"remove",value:function(){var e=this.parent;e&&e.removeChild(this)}},{key:"insertChild",value:function(t,n,r){if(!t)throw new Error("InsertChild error: child is required.");if(!(t instanceof e)){if(!r){var o=this.getChildren(!0);o.includes(t.data)||(void 0===n||n<0?o.push(t.data):o.splice(n,0,t.data))}Object.assign(t,{parent:this,store:this.store}),(t=l(new e(t)))instanceof e&&t.initialize()}t.level=this.level+1,void 0===n||n<0?this.childNodes.push(t):this.childNodes.splice(n,0,t),this.updateLeafState()}},{key:"insertBefore",value:function(e,t){var n;t&&(n=this.childNodes.indexOf(t)),this.insertChild(e,n)}},{key:"insertAfter",value:function(e,t){var n;t&&-1!==(n=this.childNodes.indexOf(t))&&(n+=1),this.insertChild(e,n)}},{key:"removeChild",value:function(e){var t=this.getChildren()||[],n=t.indexOf(e.data);n>-1&&t.splice(n,1);var r=this.childNodes.indexOf(e);r>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(r,1)),this.updateLeafState()}},{key:"removeChildByData",value:function(e){for(var t=null,n=0;n<this.childNodes.length;n++)if(this.childNodes[n].data===e){t=this.childNodes[n];break}t&&this.removeChild(t)}},{key:"expand",value:function(e,t){var n=this,r=function(){if(t)for(var r=n.parent;r.level>0;)r.expanded=!0,r=r.parent;n.expanded=!0,e&&e(),n.childNodes.forEach((function(e){e.canFocus=!0}))};this.shouldLoadData()?this.loadData((function(e){Array.isArray(e)&&(n.checked?n.setChecked(!0,!0):n.store.checkStrictly||de(n),r())})):r()}},{key:"doCreateChildren",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.forEach((function(e){t.insertChild(Object.assign({data:e},n),void 0,!0)}))}},{key:"collapse",value:function(){this.expanded=!1,this.childNodes.forEach((function(e){e.canFocus=!1}))}},{key:"shouldLoadData",value:function(){return!0===this.store.lazy&&this.store.load&&!this.loaded}},{key:"updateLeafState",value:function(){if(!0!==this.store.lazy||!0===this.loaded||void 0===this.isLeafByUser){var e=this.childNodes;!this.store.lazy||!0===this.store.lazy&&!0===this.loaded?this.isLeaf=!e||0===e.length:this.isLeaf=!1}else this.isLeaf=this.isLeafByUser}},{key:"setChecked",value:function(e,t,n,r){var o=this;if(this.indeterminate="half"===e,this.checked=!0===e,!this.store.checkStrictly){if(!this.shouldLoadData()||this.store.checkDescendants){var a=ie(this.childNodes),i=a.all,d=a.allWithoutDisable;this.isLeaf||i||!d||(this.checked=!1,e=!1);var l=function(){if(t){for(var n=o.childNodes,a=0,i=n.length;a<i;a++){var d=n[a];r=r||!1!==e;var l=d.disabled?d.checked:r;d.setChecked(l,t,!0,r)}var c=ie(n),s=c.half,u=c.all;u||(o.checked=u,o.indeterminate=s)}};if(this.shouldLoadData())return void this.loadData((function(){l(),de(o)}),{checked:!1!==e});l()}var c=this.parent;c&&0!==c.level&&(n||de(c))}}},{key:"getChildren",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(0===this.level)return this.data;var t=this.data;if(!t)return null;var n=this.store.props,r="children";return n&&(r=n.children||"children"),void 0===t[r]&&(t[r]=null),e&&!t[r]&&(t[r]=[]),t[r]}},{key:"updateChildren",value:function(){var e=this,t=this.getChildren()||[],n=this.childNodes.map((function(e){return e.data})),r={},o=[];t.forEach((function(e,t){var a=e[ne];!!a&&n.findIndex((function(e){return e[ne]===a}))>=0?r[a]={index:t,data:e}:o.push({index:t,data:e})})),this.store.lazy||n.forEach((function(t){r[t[ne]]||e.removeChildByData(t)})),o.forEach((function(t){var n=t.index,r=t.data;e.insertChild({data:r},n)})),this.updateLeafState()}},{key:"loadData",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!0!==this.store.lazy||!this.store.load||this.loaded||this.loading&&!Object.keys(n).length)e&&e.call(this);else{this.loading=!0;this.store.load(this,(function(r){t.childNodes=[],t.doCreateChildren(r,n),t.loaded=!0,t.loading=!1,t.updateLeafState(),e&&e.call(t,r)}))}}}]),e}(),ue=function(){function e(t){for(var n in o(this,e),this.currentNode=null,this.currentNodeKey=null,t)d(t,n)&&(this[n]=t[n]);this.nodesMap={}}return i(e,[{key:"initialize",value:function(){var e=this;(this.root=new se({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load)?(0,this.load)(this.root,(function(t){e.root.doCreateChildren(t),e._initDefaultCheckedNodes()})):this._initDefaultCheckedNodes()}},{key:"filter",value:function(e){var t=this.filterNodeMethod,n=this.lazy;!function r(o){var a=o.root?o.root.childNodes:o.childNodes;if(a.forEach((function(n){n.visible=t.call(n,e,n.data,n),r(n)})),!o.visible&&a.length){var i;i=!a.some((function(e){return e.visible})),o.root?o.root.visible=!1===i:o.visible=!1===i}e&&(!o.visible||o.isLeaf||n||o.expand())}(this)}},{key:"setData",value:function(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}},{key:"getNode",value:function(e){if(e instanceof se)return e;var t=c(e)?oe(this.key,e):e;return this.nodesMap[t]||null}},{key:"insertBefore",value:function(e,t){var n=this.getNode(t);n.parent.insertBefore({data:e},n)}},{key:"insertAfter",value:function(e,t){var n=this.getNode(t);n.parent.insertAfter({data:e},n)}},{key:"remove",value:function(e){var t=this.getNode(e);t&&t.parent&&(t===this.currentNode&&(this.currentNode=null),t.parent.removeChild(t))}},{key:"append",value:function(e,t){var n=t?this.getNode(t):this.root;n&&n.insertChild({data:e})}},{key:"_initDefaultCheckedNodes",value:function(){var e=this,t=this.defaultCheckedKeys||[],n=this.nodesMap;t.forEach((function(t){var r=n[t];r&&r.setChecked(!0,!e.checkStrictly)}))}},{key:"_initDefaultCheckedNode",value:function(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}},{key:"setDefaultCheckedKey",value:function(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}},{key:"registerNode",value:function(e){var t=this.key;e&&e.data&&(t?void 0!==e.key&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}},{key:"deregisterNode",value:function(e){var t=this;this.key&&e&&e.data&&(e.childNodes.forEach((function(e){t.deregisterNode(e)})),delete this.nodesMap[e.key])}},{key:"getCheckedNodes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];return function r(o){(o.root?o.root.childNodes:o.childNodes).forEach((function(o){(o.checked||t&&o.indeterminate)&&(!e||e&&o.isLeaf)&&n.push(o.data),r(o)}))}(this),n}},{key:"getCheckedKeys",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.getCheckedNodes(t).map((function(t){return(t||{})[e.key]}))}},{key:"getHalfCheckedNodes",value:function(){var e=[];return function t(n){(n.root?n.root.childNodes:n.childNodes).forEach((function(n){n.indeterminate&&e.push(n.data),t(n)}))}(this),e}},{key:"getHalfCheckedKeys",value:function(){var e=this;return this.getHalfCheckedNodes().map((function(t){return(t||{})[e.key]}))}},{key:"_getAllNodes",value:function(){var e=[],t=this.nodesMap;for(var n in t)d(t,n)&&e.push(t[n]);return e}},{key:"updateChildren",value:function(e,t){var n=this.nodesMap[e];if(n){for(var r=n.childNodes,o=r.length-1;o>=0;o--){var a=r[o];this.remove(a.data)}for(var i=0,d=t.length;i<d;i++){var l=t[i];this.append(l,n.data)}}}},{key:"_setCheckedKeys",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,o=this._getAllNodes().sort((function(e,t){return t.level-e.level})),a=Object.create(null),i=Object.keys(r);o.forEach((function(e){return e.setChecked(!1,!1)}));for(var d=function(){var r=o[l],d=r.data[e].toString();if(!i.includes(d))return r.checked&&!a[d]&&r.setChecked(!1,!1),0;for(var c=r.parent;c&&c.level>0;)a[c.data[e]]=!0,c=c.parent;if(r.isLeaf||t.checkStrictly)return r.setChecked(!0,!1),0;if(r.setChecked(!0,!0),n){r.setChecked(!1,!1);!function e(t){t.childNodes.forEach((function(t){t.isLeaf||t.setChecked(!1,!1),e(t)}))}(r)}},l=0,c=o.length;l<c;l++)d()}},{key:"setCheckedNodes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.key,r={};e.forEach((function(e){r[(e||{})[n]]=!0})),this._setCheckedKeys(n,t,r)}},{key:"setCheckedKeys",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.defaultCheckedKeys=e;var n=this.key,r={};e.forEach((function(e){r[e]=!0})),this._setCheckedKeys(n,t,r)}},{key:"setDefaultExpandedKeys",value:function(e){var t=this;e=e||[],this.defaultExpandedKeys=e,e.forEach((function(e){var n=t.getNode(e);n&&n.expand(null,t.autoExpandParent)}))}},{key:"setChecked",value:function(e,t,n){var r=this.getNode(e);r&&r.setChecked(!!t,n)}},{key:"getCurrentNode",value:function(){return this.currentNode}},{key:"setCurrentNode",value:function(e){var t=this.currentNode;t&&(t.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}},{key:"setUserCurrentNode",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e[this.key],r=this.nodesMap[n];this.setCurrentNode(r),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}},{key:"setCurrentNodeKey",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(null==e)return this.currentNode&&(this.currentNode.isCurrent=!1),void(this.currentNode=null);var n=this.getNode(e);n&&(this.setCurrentNode(n),t&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}]),e}(),he=u({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup:function(e){var t=h("tree"),n=f("NodeInstance"),r=f("RootTree");return function(){var o=e.node,a=o.data,i=o.store;return e.renderContent?e.renderContent(v,{_self:n,node:o,data:a,store:i}):r.ctx.slots.default?r.ctx.slots.default({node:o,data:a}):v("span",{class:t.be("node","label")},[o.label])}}}),fe=s(he,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node-content.vue"]]);function ve(e){var t=f("TreeNodeMap",null),r={treeNodeExpand:function(t){e.node!==t&&e.node.collapse()},children:[]};return t&&t.children.push(r),p("TreeNodeMap",r),{broadcastExpanded:function(t){if(e.accordion){var o,a=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,d=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return d=e.done,e},e:function(e){l=!0,i=e},f:function(){try{d||null==r.return||r.return()}finally{if(l)throw i}}}}(r.children);try{for(a.s();!(o=a.n()).done;){o.value.treeNodeExpand(t)}}catch(i){a.e(i)}finally{a.f()}}}}}var pe=Symbol("dragEvents");var ye=u({name:"ElTreeNode",components:{ElCollapseTransition:ee,ElCheckbox:te,NodeContent:fe,ElIcon:m,Loading:N},props:{node:{type:se,default:function(){return{}}},props:{type:Object,default:function(){return{}}},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup:function(n,r){var o=h("tree"),a=ve(n).broadcastExpanded,i=f("RootTree"),d=y(!1),l=y(!1),c=y(null),s=y(null),u=y(null),v=f(pe),g=q();p("NodeInstance",g),n.node.expanded&&(d.value=!0,l.value=!0);var k=i.props.props.children||"children";b((function(){var e=n.node.data[k];return e&&t(e)}),(function(){n.node.updateChildren()})),b((function(){return n.node.indeterminate}),(function(e){m(n.node.checked,e)})),b((function(){return n.node.checked}),(function(e){m(e,n.node.indeterminate)})),b((function(){return n.node.expanded}),(function(e){C((function(){return d.value=e})),e&&(l.value=!0)}));var m=function(e,t){c.value===e&&s.value===t||i.ctx.emit("check-change",n.node.data,e,t),c.value=e,s.value=t},N=function(){n.node.isLeaf||(d.value?(i.ctx.emit("node-collapse",n.node.data,n.node,g),n.node.collapse()):(n.node.expand(),r.emit("node-expand",n.node.data,n.node,g)))},E=function(e,t){n.node.setChecked(t.target.checked,!i.props.checkStrictly),C((function(){var e=i.store.value;i.ctx.emit("check",n.node.data,{checkedNodes:e.getCheckedNodes(),checkedKeys:e.getCheckedKeys(),halfCheckedNodes:e.getHalfCheckedNodes(),halfCheckedKeys:e.getHalfCheckedKeys()})}))};return{ns:o,node$:u,tree:i,expanded:d,childNodeRendered:l,oldChecked:c,oldIndeterminate:s,getNodeKey:function(e){return oe(i.props.nodeKey,e.data)},getNodeClass:function(t){var r,o=n.props.class;if(!o)return{};F(o)?r=o(t.data,t):r=o;return P(r)?e({},r,!0):r},handleSelectChange:m,handleClick:function(e){ae(i.store,i.ctx.emit,(function(){return i.store.value.setCurrentNode(n.node)})),i.currentNode.value=n.node,i.props.expandOnClickNode&&N(),i.props.checkOnClickNode&&!n.node.disabled&&E(null,{target:{checked:!n.node.checked}}),i.ctx.emit("node-click",n.node.data,n.node,g,e)},handleContextMenu:function(e){i.instance.vnode.props.onNodeContextmenu&&(e.stopPropagation(),e.preventDefault()),i.ctx.emit("node-contextmenu",e,n.node.data,n.node,g)},handleExpandIconClick:N,handleCheckChange:E,handleChildNodeExpand:function(e,t,n){a(t),i.ctx.emit("node-expand",e,t,n)},handleDragStart:function(e){i.props.draggable&&v.treeNodeDragStart({event:e,treeNode:n})},handleDragOver:function(e){e.preventDefault(),i.props.draggable&&v.treeNodeDragOver({event:e,treeNode:{$el:u.value,node:n.node}})},handleDrop:function(e){e.preventDefault()},handleDragEnd:function(e){i.props.draggable&&v.treeNodeDragEnd(e)},CaretRight:x}}}),ge=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],ke=["aria-expanded"];var me=s(ye,[["render",function(e,t,n,r,o,a){var i=E("el-icon"),d=E("el-checkbox"),l=E("loading"),c=E("node-content"),s=E("el-tree-node"),u=E("el-collapse-transition");return D((K(),_("div",{ref:"node$",class:T([e.ns.b("node"),e.ns.is("expanded",e.expanded),e.ns.is("current",e.node.isCurrent),e.ns.is("hidden",!e.node.visible),e.ns.is("focusable",!e.node.disabled),e.ns.is("checked",!e.node.disabled&&e.node.checked),e.getNodeClass(e.node)]),role:"treeitem",tabindex:"-1","aria-expanded":e.expanded,"aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.props.draggable,"data-key":e.getNodeKey(e.node),onClick:t[1]||(t[1]=O((function(){return e.handleClick&&e.handleClick.apply(e,arguments)}),["stop"])),onContextmenu:t[2]||(t[2]=function(){return e.handleContextMenu&&e.handleContextMenu.apply(e,arguments)}),onDragstart:t[3]||(t[3]=O((function(){return e.handleDragStart&&e.handleDragStart.apply(e,arguments)}),["stop"])),onDragover:t[4]||(t[4]=O((function(){return e.handleDragOver&&e.handleDragOver.apply(e,arguments)}),["stop"])),onDragend:t[5]||(t[5]=O((function(){return e.handleDragEnd&&e.handleDragEnd.apply(e,arguments)}),["stop"])),onDrop:t[6]||(t[6]=O((function(){return e.handleDrop&&e.handleDrop.apply(e,arguments)}),["stop"]))},[S("div",{class:T(e.ns.be("node","content")),style:$({paddingLeft:(e.node.level-1)*e.tree.props.indent+"px"})},[e.tree.props.icon||e.CaretRight?(K(),A(i,{key:0,class:T([e.ns.be("node","expand-icon"),e.ns.is("leaf",e.node.isLeaf),{expanded:!e.node.isLeaf&&e.expanded}]),onClick:O(e.handleExpandIconClick,["stop"])},{default:z((function(){return[(K(),A(B(e.tree.props.icon||e.CaretRight)))]})),_:1},8,["class","onClick"])):L("v-if",!0),e.showCheckbox?(K(),A(d,{key:1,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:!!e.node.disabled,onClick:t[0]||(t[0]=O((function(){}),["stop"])),onChange:e.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):L("v-if",!0),e.node.loading?(K(),A(i,{key:2,class:T([e.ns.be("node","loading-icon"),e.ns.is("loading")])},{default:z((function(){return[I(l)]})),_:1},8,["class"])):L("v-if",!0),I(c,{node:e.node,"render-content":e.renderContent},null,8,["node","render-content"])],6),I(u,null,{default:z((function(){return[!e.renderAfterExpand||e.childNodeRendered?D((K(),_("div",{key:0,class:T(e.ns.be("node","children")),role:"group","aria-expanded":e.expanded},[(K(!0),_(M,null,j(e.node.childNodes,(function(t){return K(),A(s,{key:e.getNodeKey(t),"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"show-checkbox":e.showCheckbox,node:t,accordion:e.accordion,props:e.props,onNodeExpand:e.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"])})),128))],10,ke)),[[w,e.expanded]]):L("v-if",!0)]})),_:1})],42,ge)),[[w,e.node.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree-node.vue"]]);var Ne=u({name:"ElTree",components:{ElTreeNode:me},props:{data:{type:Array,default:function(){return[]}},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:function(){return{children:"children",label:"label",disabled:"disabled"}}},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:J}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup:function(e,t){var n=V().t,r=h("tree"),o=y(new ue({key:e.nodeKey,data:e.data,lazy:e.lazy,props:e.props,load:e.load,currentNodeKey:e.currentNodeKey,checkStrictly:e.checkStrictly,checkDescendants:e.checkDescendants,defaultCheckedKeys:e.defaultCheckedKeys,defaultExpandedKeys:e.defaultExpandedKeys,autoExpandParent:e.autoExpandParent,defaultExpandAll:e.defaultExpandAll,filterNodeMethod:e.filterNodeMethod}));o.value.initialize();var a=y(o.value.root),i=y(null),d=y(null),l=y(null),c=ve(e).broadcastExpanded,s=function(e){var t=e.props,n=e.ctx,r=e.el$,o=e.dropIndicator$,a=e.store,i=h("tree"),d=y({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return p(pe,{treeNodeDragStart:function(e){var r=e.event,o=e.treeNode;if("function"==typeof t.allowDrag&&!t.allowDrag(o.node))return r.preventDefault(),!1;r.dataTransfer.effectAllowed="move";try{r.dataTransfer.setData("text/plain","")}catch(a){}d.value.draggingNode=o,n.emit("node-drag-start",o.node,r)},treeNodeDragOver:function(e){var a=e.event,l=e.treeNode,c=d.value.dropNode;c&&c.node.id!==l.node.id&&g(c.$el,i.is("drop-inner"));var s=d.value.draggingNode;if(s&&l){var u=!0,h=!0,f=!0,v=!0;"function"==typeof t.allowDrop&&(u=t.allowDrop(s.node,l.node,"prev"),v=h=t.allowDrop(s.node,l.node,"inner"),f=t.allowDrop(s.node,l.node,"next")),a.dataTransfer.dropEffect=h||u||f?"move":"none",(u||h||f)&&(null==c?void 0:c.node.id)!==l.node.id&&(c&&n.emit("node-drag-leave",s.node,c.node,a),n.emit("node-drag-enter",s.node,l.node,a)),(u||h||f)&&(d.value.dropNode=l),l.node.nextSibling===s.node&&(f=!1),l.node.previousSibling===s.node&&(u=!1),l.node.contains(s.node,!1)&&(h=!1),(s.node===l.node||s.node.contains(l.node))&&(u=!1,h=!1,f=!1);var p,y=l.$el.querySelector(".".concat(i.be("node","content"))).getBoundingClientRect(),m=r.value.getBoundingClientRect(),N=u?h?.25:f?.45:1:-1,b=f?h?.75:u?.55:0:1,C=-9999,x=a.clientY-y.top;p=x<y.height*N?"before":x>y.height*b?"after":h?"inner":"none";var E=l.$el.querySelector(".".concat(i.be("node","expand-icon"))).getBoundingClientRect(),D=o.value;"before"===p?C=E.top-m.top:"after"===p&&(C=E.bottom-m.top),D.style.top="".concat(C,"px"),D.style.left="".concat(E.right-m.left,"px"),"inner"===p?k(l.$el,i.is("drop-inner")):g(l.$el,i.is("drop-inner")),d.value.showDropIndicator="before"===p||"after"===p,d.value.allowDrop=d.value.showDropIndicator||v,d.value.dropType=p,n.emit("node-drag-over",s.node,l.node,a)}},treeNodeDragEnd:function(e){var t=d.value,r=t.draggingNode,o=t.dropType,l=t.dropNode;if(e.preventDefault(),e.dataTransfer.dropEffect="move",r&&l){var c={data:r.node.data};"none"!==o&&r.node.remove(),"before"===o?l.node.parent.insertBefore(c,l.node):"after"===o?l.node.parent.insertAfter(c,l.node):"inner"===o&&l.node.insertChild(c),"none"!==o&&a.value.registerNode(c),g(l.$el,i.is("drop-inner")),n.emit("node-drag-end",r.node,l.node,o,e),"none"!==o&&n.emit("node-drop",r.node,l.node,o,e)}r&&!l&&n.emit("node-drag-end",r.node,null,o,e),d.value.showDropIndicator=!1,d.value.draggingNode=null,d.value.dropNode=null,d.value.allowDrop=!0}}),{dragState:d}}({props:e,ctx:t,el$:d,dropIndicator$:l,store:o}),u=s.dragState;!function(e,t){var n=e.el$,r=h("tree"),o=H([]),a=H([]);R((function(){i()})),Y((function(){o.value=Array.from(n.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(n.value.querySelectorAll("input[type=checkbox]"))})),b(a,(function(e){e.forEach((function(e){e.setAttribute("tabindex","-1")}))})),U(n,"keydown",(function(e){var a=e.target;if(a.className.includes(r.b("node"))){var i=e.code;o.value=Array.from(n.value.querySelectorAll(".".concat(r.is("focusable"),"[role=treeitem]")));var d,l=o.value.indexOf(a);if([W.up,W.down].includes(i)){if(e.preventDefault(),i===W.up)for(var c=d=-1===l?0:0!==l?l-1:o.value.length-1;!t.value.getNode(o.value[d].dataset.key).canFocus;){if(--d===c){d=-1;break}d<0&&(d=o.value.length-1)}else for(var s=d=-1===l?0:l<o.value.length-1?l+1:0;!t.value.getNode(o.value[d].dataset.key).canFocus;){if(++d===s){d=-1;break}d>=o.value.length&&(d=0)}-1!==d&&o.value[d].focus()}[W.left,W.right].includes(i)&&(e.preventDefault(),a.click());var u=a.querySelector('[type="checkbox"]');[W.enter,W.space].includes(i)&&u&&(e.preventDefault(),u.click())}}));var i=function(){var e;o.value=Array.from(n.value.querySelectorAll(".".concat(r.is("focusable"),"[role=treeitem]"))),a.value=Array.from(n.value.querySelectorAll("input[type=checkbox]"));var t=n.value.querySelectorAll(".".concat(r.is("checked"),"[role=treeitem]"));t.length?t[0].setAttribute("tabindex","0"):null==(e=o.value[0])||e.setAttribute("tabindex","0")}}({el$:d},o);var f=X((function(){var e=a.value.childNodes;return!e||0===e.length||e.every((function(e){return!e.visible}))}));b((function(){return e.currentNodeKey}),(function(e){o.value.setCurrentNodeKey(e)})),b((function(){return e.defaultCheckedKeys}),(function(e){o.value.setDefaultCheckedKey(e)})),b((function(){return e.defaultExpandedKeys}),(function(e){o.value.setDefaultExpandedKeys(e)})),b((function(){return e.data}),(function(e){o.value.setData(e)}),{deep:!0}),b((function(){return e.checkStrictly}),(function(e){o.value.checkStrictly=e}));var v=function(){var e=o.value.getCurrentNode();return e?e.data:null};return p("RootTree",{ctx:t,props:e,store:o,root:a,currentNode:i,instance:q()}),p(Z,void 0),{ns:r,store:o,root:a,currentNode:i,dragState:u,el$:d,dropIndicator$:l,isEmpty:f,filter:function(t){if(!e.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");o.value.filter(t)},getNodeKey:function(t){return oe(e.nodeKey,t.data)},getNodePath:function(t){if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");var n=o.value.getNode(t);if(!n)return[];for(var r=[n.data],i=n.parent;i&&i!==a.value;)r.push(i.data),i=i.parent;return r.reverse()},getCheckedNodes:function(e,t){return o.value.getCheckedNodes(e,t)},getCheckedKeys:function(e){return o.value.getCheckedKeys(e)},getCurrentNode:v,getCurrentKey:function(){if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");var t=v();return t?t[e.nodeKey]:null},setCheckedNodes:function(t,n){if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");o.value.setCheckedNodes(t,n)},setCheckedKeys:function(t,n){if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");o.value.setCheckedKeys(t,n)},setChecked:function(e,t,n){o.value.setChecked(e,t,n)},getHalfCheckedNodes:function(){return o.value.getHalfCheckedNodes()},getHalfCheckedKeys:function(){return o.value.getHalfCheckedKeys()},setCurrentNode:function(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");ae(o,t.emit,(function(){return o.value.setUserCurrentNode(n,r)}))},setCurrentKey:function(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");ae(o,t.emit,(function(){return o.value.setCurrentNodeKey(n,r)}))},t:n,getNode:function(e){return o.value.getNode(e)},remove:function(e){o.value.remove(e)},append:function(e,t){o.value.append(e,t)},insertBefore:function(e,t){o.value.insertBefore(e,t)},insertAfter:function(e,t){o.value.insertAfter(e,t)},handleNodeExpand:function(e,n,r){c(n),t.emit("node-expand",e,n,r)},updateKeyChildren:function(t,n){if(!e.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");o.value.updateChildren(t,n)}}}});var be=s(Ne,[["render",function(t,n,r,o,a,i){var d=E("el-tree-node");return K(),_("div",{ref:"el$",class:T([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner","inner"===t.dragState.dropType),e({},t.ns.m("highlight-current"),t.highlightCurrent)]),role:"tree"},[(K(!0),_(M,null,j(t.root.childNodes,(function(e){return K(),A(d,{key:t.getNodeKey(e),node:e,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"])})),128)),t.isEmpty?(K(),_("div",{key:0,class:T(t.ns.e("empty-block"))},[G(t.$slots,"empty",{},(function(){var e;return[S("span",{class:T(t.ns.e("empty-text"))},Q(null!=(e=t.emptyText)?e:t.t("el.tree.emptyText")),3)]}))],2)):L("v-if",!0),D(S("div",{ref:"dropIndicator$",class:T(t.ns.e("drop-indicator"))},null,2),[[w,t.dragState.showDropIndicator]])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/tree/src/tree.vue"]]);be.install=function(e){e.component(be.name,be)};r("E",be)}}}))}();
