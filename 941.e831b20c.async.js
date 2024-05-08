"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[941],{42110:function(Ct,Le){var f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};Le.Z=f},11941:function(Ct,Le,f){f.d(Le,{Z:function(){return Oa}});var n=f(67294),Tt=f(84481),Pt=f(48001),ne=f(87462),Et=f(42110),Rt=f(93771),It=function(t,a){return n.createElement(Rt.Z,(0,ne.Z)({},t,{ref:a,icon:Et.Z}))},wt=n.forwardRef(It),Zt=wt,Lt=f(93967),K=f.n(Lt),V=f(4942),J=f(1413),z=f(97685),ze=f(71002),ye=f(91),Ge=f(21770),zt=f(31131),xe=(0,n.createContext)(null),je=f(74902),Ne=f(9220),Nt=f(66680),Mt=f(42550),ke=f(75164),_t=function(t){var a=t.activeTabOffset,r=t.horizontal,i=t.rtl,l=t.indicator,c=l===void 0?{}:l,o=c.size,s=c.align,d=s===void 0?"center":s,v=(0,n.useState)(),b=(0,z.Z)(v,2),x=b[0],w=b[1],_=(0,n.useRef)(),R=n.useCallback(function(m){return typeof o=="function"?o(m):typeof o=="number"?o:m},[o]);function N(){ke.Z.cancel(_.current)}return(0,n.useEffect)(function(){var m={};if(a)if(r){m.width=R(a.width);var u=i?"right":"left";d==="start"&&(m[u]=a[u]),d==="center"&&(m[u]=a[u]+a.width/2,m.transform=i?"translateX(50%)":"translateX(-50%)"),d==="end"&&(m[u]=a[u]+a.width,m.transform="translateX(-100%)")}else m.height=R(a.height),d==="start"&&(m.top=a.top),d==="center"&&(m.top=a.top+a.height/2,m.transform="translateY(-50%)"),d==="end"&&(m.top=a.top+a.height,m.transform="translateY(-100%)");return N(),_.current=(0,ke.Z)(function(){w(m)}),N},[a,r,i,d,R]),{style:x}},Bt=_t,Xe={width:0,height:0,left:0,top:0};function Ot(e,t,a){return(0,n.useMemo)(function(){for(var r,i=new Map,l=t.get((r=e[0])===null||r===void 0?void 0:r.key)||Xe,c=l.left+l.width,o=0;o<e.length;o+=1){var s=e[o].key,d=t.get(s);if(!d){var v;d=t.get((v=e[o-1])===null||v===void 0?void 0:v.key)||Xe}var b=i.get(s)||(0,J.Z)({},d);b.right=c-b.left-b.width,i.set(s,b)}return i},[e.map(function(r){return r.key}).join("_"),t,a])}function Ke(e,t){var a=n.useRef(e),r=n.useState({}),i=(0,z.Z)(r,2),l=i[1];function c(o){var s=typeof o=="function"?o(a.current):o;s!==a.current&&t(s,a.current),a.current=s,l({})}return[a.current,c]}var At=.1,Ve=.01,Ce=20,Fe=Math.pow(.995,Ce);function Dt(e,t){var a=(0,n.useState)(),r=(0,z.Z)(a,2),i=r[0],l=r[1],c=(0,n.useState)(0),o=(0,z.Z)(c,2),s=o[0],d=o[1],v=(0,n.useState)(0),b=(0,z.Z)(v,2),x=b[0],w=b[1],_=(0,n.useState)(),R=(0,z.Z)(_,2),N=R[0],m=R[1],u=(0,n.useRef)();function I($){var Z=$.touches[0],S=Z.screenX,T=Z.screenY;l({x:S,y:T}),window.clearInterval(u.current)}function M($){if(i){$.preventDefault();var Z=$.touches[0],S=Z.screenX,T=Z.screenY;l({x:S,y:T});var h=S-i.x,P=T-i.y;t(h,P);var Y=Date.now();d(Y),w(Y-s),m({x:h,y:P})}}function A(){if(i&&(l(null),m(null),N)){var $=N.x/x,Z=N.y/x,S=Math.abs($),T=Math.abs(Z);if(Math.max(S,T)<At)return;var h=$,P=Z;u.current=window.setInterval(function(){if(Math.abs(h)<Ve&&Math.abs(P)<Ve){window.clearInterval(u.current);return}h*=Fe,P*=Fe,t(h*Ce,P*Ce)},Ce)}}var H=(0,n.useRef)();function D($){var Z=$.deltaX,S=$.deltaY,T=0,h=Math.abs(Z),P=Math.abs(S);h===P?T=H.current==="x"?Z:S:h>P?(T=Z,H.current="x"):(T=S,H.current="y"),t(-T,-T)&&$.preventDefault()}var C=(0,n.useRef)(null);C.current={onTouchStart:I,onTouchMove:M,onTouchEnd:A,onWheel:D},n.useEffect(function(){function $(h){C.current.onTouchStart(h)}function Z(h){C.current.onTouchMove(h)}function S(h){C.current.onTouchEnd(h)}function T(h){C.current.onWheel(h)}return document.addEventListener("touchmove",Z,{passive:!1}),document.addEventListener("touchend",S,{passive:!1}),e.current.addEventListener("touchstart",$,{passive:!1}),e.current.addEventListener("wheel",T),function(){document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",S)}},[])}var Wt=f(8410);function Ue(e){var t=(0,n.useState)(0),a=(0,z.Z)(t,2),r=a[0],i=a[1],l=(0,n.useRef)(0),c=(0,n.useRef)();return c.current=e,(0,Wt.o)(function(){var o;(o=c.current)===null||o===void 0||o.call(c)},[r]),function(){l.current===r&&(l.current+=1,i(l.current))}}function Ht(e){var t=(0,n.useRef)([]),a=(0,n.useState)({}),r=(0,z.Z)(a,2),i=r[1],l=(0,n.useRef)(typeof e=="function"?e():e),c=Ue(function(){var s=l.current;t.current.forEach(function(d){s=d(s)}),t.current=[],l.current=s,i({})});function o(s){t.current.push(s),c()}return[l.current,o]}var Ye={width:0,height:0,left:0,top:0,right:0};function Gt(e,t,a,r,i,l,c){var o=c.tabs,s=c.tabPosition,d=c.rtl,v,b,x;return["top","bottom"].includes(s)?(v="width",b=d?"right":"left",x=Math.abs(a)):(v="height",b="top",x=-a),(0,n.useMemo)(function(){if(!o.length)return[0,0];for(var w=o.length,_=w,R=0;R<w;R+=1){var N=e.get(o[R].key)||Ye;if(N[b]+N[v]>x+t){_=R-1;break}}for(var m=0,u=w-1;u>=0;u-=1){var I=e.get(o[u].key)||Ye;if(I[b]<x){m=u+1;break}}return m>=_?[0,0]:[m,_]},[e,t,r,i,l,x,s,o.map(function(w){return w.key}).join("_"),d])}function Qe(e){var t;return e instanceof Map?(t={},e.forEach(function(a,r){t[r]=a})):t=e,JSON.stringify(t)}var jt="TABS_DQ";function Je(e){return String(e).replace(/"/g,jt)}function qe(e,t,a,r){return!(!a||r||e===!1||e===void 0&&(t===!1||t===null))}var kt=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.editable,i=e.locale,l=e.style;return!r||r.showAdd===!1?null:n.createElement("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:l,"aria-label":(i==null?void 0:i.addAriaLabel)||"Add tab",onClick:function(o){r.onEdit("add",{event:o})}},r.addIcon||"+")}),et=kt,Xt=n.forwardRef(function(e,t){var a=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var l,c={};return(0,ze.Z)(i)==="object"&&!n.isValidElement(i)?c=i:c.right=i,a==="right"&&(l=c.right),a==="left"&&(l=c.left),l?n.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},l):null}),tt=Xt,Kt=f(29171),at=f(72512),te=f(15105),Vt=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.id,i=e.tabs,l=e.locale,c=e.mobile,o=e.more,s=o===void 0?{}:o,d=e.style,v=e.className,b=e.editable,x=e.tabBarGutter,w=e.rtl,_=e.removeAriaLabel,R=e.onTabClick,N=e.getPopupContainer,m=e.popupClassName,u=(0,n.useState)(!1),I=(0,z.Z)(u,2),M=I[0],A=I[1],H=(0,n.useState)(null),D=(0,z.Z)(H,2),C=D[0],$=D[1],Z=s.icon,S=Z===void 0?"More":Z,T="".concat(r,"-more-popup"),h="".concat(a,"-dropdown"),P=C!==null?"".concat(T,"-").concat(C):null,Y=l==null?void 0:l.dropdownAriaLabel;function oe(E,O){E.preventDefault(),E.stopPropagation(),b.onEdit("remove",{key:O,event:E})}var p=n.createElement(at.ZP,{onClick:function(O){var j=O.key,X=O.domEvent;R(j,X),A(!1)},prefixCls:"".concat(h,"-menu"),id:T,tabIndex:-1,role:"listbox","aria-activedescendant":P,selectedKeys:[C],"aria-label":Y!==void 0?Y:"expanded dropdown"},i.map(function(E){var O=E.closable,j=E.disabled,X=E.closeIcon,U=E.key,ee=E.label,q=qe(O,X,b,j);return n.createElement(at.sN,{key:U,id:"".concat(T,"-").concat(U),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(U),disabled:j},n.createElement("span",null,ee),q&&n.createElement("button",{type:"button","aria-label":_||"remove",tabIndex:0,className:"".concat(h,"-menu-item-remove"),onClick:function(ce){ce.stopPropagation(),oe(ce,U)}},X||b.removeIcon||"\xD7"))}));function k(E){for(var O=i.filter(function(q){return!q.disabled}),j=O.findIndex(function(q){return q.key===C})||0,X=O.length,U=0;U<X;U+=1){j=(j+E+X)%X;var ee=O[j];if(!ee.disabled){$(ee.key);return}}}function re(E){var O=E.which;if(!M){[te.Z.DOWN,te.Z.SPACE,te.Z.ENTER].includes(O)&&(A(!0),E.preventDefault());return}switch(O){case te.Z.UP:k(-1),E.preventDefault();break;case te.Z.DOWN:k(1),E.preventDefault();break;case te.Z.ESC:A(!1);break;case te.Z.SPACE:case te.Z.ENTER:C!==null&&R(C,E);break}}(0,n.useEffect)(function(){var E=document.getElementById(P);E&&E.scrollIntoView&&E.scrollIntoView(!1)},[C]),(0,n.useEffect)(function(){M||$(null)},[M]);var G=(0,V.Z)({},w?"marginRight":"marginLeft",x);i.length||(G.visibility="hidden",G.order=1);var F=K()((0,V.Z)({},"".concat(h,"-rtl"),w)),le=c?null:n.createElement(Kt.Z,(0,ne.Z)({prefixCls:h,overlay:p,visible:i.length?M:!1,onVisibleChange:A,overlayClassName:K()(F,m),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:N},s),n.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:G,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":T,id:"".concat(r,"-more"),"aria-expanded":M,onKeyDown:re},S));return n.createElement("div",{className:K()("".concat(a,"-nav-operations"),v),style:d,ref:t},le,n.createElement(et,{prefixCls:a,locale:l,editable:b}))}),Ft=n.memo(Vt,function(e,t){return t.tabMoving}),Ut=function(t){var a=t.prefixCls,r=t.id,i=t.active,l=t.tab,c=l.key,o=l.label,s=l.disabled,d=l.closeIcon,v=l.icon,b=t.closable,x=t.renderWrapper,w=t.removeAriaLabel,_=t.editable,R=t.onClick,N=t.onFocus,m=t.style,u="".concat(a,"-tab"),I=qe(b,d,_,s);function M(C){s||R(C)}function A(C){C.preventDefault(),C.stopPropagation(),_.onEdit("remove",{key:c,event:C})}var H=n.useMemo(function(){return v&&typeof o=="string"?n.createElement("span",null,o):o},[o,v]),D=n.createElement("div",{key:c,"data-node-key":Je(c),className:K()(u,(0,V.Z)((0,V.Z)((0,V.Z)({},"".concat(u,"-with-remove"),I),"".concat(u,"-active"),i),"".concat(u,"-disabled"),s)),style:m,onClick:M},n.createElement("div",{role:"tab","aria-selected":i,id:r&&"".concat(r,"-tab-").concat(c),className:"".concat(u,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function($){$.stopPropagation(),M($)},onKeyDown:function($){[te.Z.SPACE,te.Z.ENTER].includes($.which)&&($.preventDefault(),M($))},onFocus:N},v&&n.createElement("span",{className:"".concat(u,"-icon")},v),o&&H),I&&n.createElement("button",{type:"button","aria-label":w||"remove",tabIndex:0,className:"".concat(u,"-remove"),onClick:function($){$.stopPropagation(),A($)}},d||_.removeIcon||"\xD7"));return x?x(D):D},Yt=Ut,Qt=function(t,a){var r=t.offsetWidth,i=t.offsetHeight,l=t.offsetTop,c=t.offsetLeft,o=t.getBoundingClientRect(),s=o.width,d=o.height,v=o.x,b=o.y;return Math.abs(s-r)<1?[s,d,v-a.x,b-a.y]:[r,i,c,l]},be=function(t){var a=t.current||{},r=a.offsetWidth,i=r===void 0?0:r,l=a.offsetHeight,c=l===void 0?0:l;if(t.current){var o=t.current.getBoundingClientRect(),s=o.width,d=o.height;if(Math.abs(s-i)<1)return[s,d]}return[i,c]},Te=function(t,a){return t[a?0:1]},Jt=n.forwardRef(function(e,t){var a=e.className,r=e.style,i=e.id,l=e.animated,c=e.activeKey,o=e.rtl,s=e.extra,d=e.editable,v=e.locale,b=e.tabPosition,x=e.tabBarGutter,w=e.children,_=e.onTabClick,R=e.onTabScroll,N=e.indicator,m=n.useContext(xe),u=m.prefixCls,I=m.tabs,M=(0,n.useRef)(null),A=(0,n.useRef)(null),H=(0,n.useRef)(null),D=(0,n.useRef)(null),C=(0,n.useRef)(null),$=(0,n.useRef)(null),Z=(0,n.useRef)(null),S=b==="top"||b==="bottom",T=Ke(0,function(B,y){S&&R&&R({direction:B>y?"left":"right"})}),h=(0,z.Z)(T,2),P=h[0],Y=h[1],oe=Ke(0,function(B,y){!S&&R&&R({direction:B>y?"top":"bottom"})}),p=(0,z.Z)(oe,2),k=p[0],re=p[1],G=(0,n.useState)([0,0]),F=(0,z.Z)(G,2),le=F[0],E=F[1],O=(0,n.useState)([0,0]),j=(0,z.Z)(O,2),X=j[0],U=j[1],ee=(0,n.useState)([0,0]),q=(0,z.Z)(ee,2),me=q[0],ce=q[1],ue=(0,n.useState)([0,0]),ge=(0,z.Z)(ue,2),L=ge[0],ie=ge[1],pe=Ht(new Map),ct=(0,z.Z)(pe,2),Aa=ct[0],Da=ct[1],Pe=Ot(I,Aa,X[0]),Me=Te(le,S),$e=Te(X,S),_e=Te(me,S),st=Te(L,S),dt=Me<$e+_e,ae=dt?Me-st:Me-_e,Wa="".concat(u,"-nav-operations-hidden"),se=0,ve=0;S&&o?(se=0,ve=Math.max(0,$e-ae)):(se=Math.min(0,ae-$e),ve=0);function Be(B){return B<se?se:B>ve?ve:B}var Oe=(0,n.useRef)(null),Ha=(0,n.useState)(),ut=(0,z.Z)(Ha,2),Ee=ut[0],vt=ut[1];function Ae(){vt(Date.now())}function De(){Oe.current&&clearTimeout(Oe.current)}Dt(D,function(B,y){function W(Q,fe){Q(function(de){var we=Be(de+fe);return we})}return dt?(S?W(Y,B):W(re,y),De(),Ae(),!0):!1}),(0,n.useEffect)(function(){return De(),Ee&&(Oe.current=setTimeout(function(){vt(0)},100)),De},[Ee]);var Ga=Gt(Pe,ae,S?P:k,$e,_e,st,(0,J.Z)((0,J.Z)({},e),{},{tabs:I})),ft=(0,z.Z)(Ga,2),ja=ft[0],ka=ft[1],bt=(0,Nt.Z)(function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:c,y=Pe.get(B)||{width:0,height:0,left:0,right:0,top:0};if(S){var W=P;o?y.right<P?W=y.right:y.right+y.width>P+ae&&(W=y.right+y.width-ae):y.left<-P?W=-y.left:y.left+y.width>-P+ae&&(W=-(y.left+y.width-ae)),re(0),Y(Be(W))}else{var Q=k;y.top<-k?Q=-y.top:y.top+y.height>-k+ae&&(Q=-(y.top+y.height-ae)),Y(0),re(Be(Q))}}),Re={};b==="top"||b==="bottom"?Re[o?"marginRight":"marginLeft"]=x:Re.marginTop=x;var mt=I.map(function(B,y){var W=B.key;return n.createElement(Yt,{id:i,prefixCls:u,key:W,tab:B,style:y===0?void 0:Re,closable:B.closable,editable:d,active:W===c,renderWrapper:w,removeAriaLabel:v==null?void 0:v.removeAriaLabel,onClick:function(fe){_(W,fe)},onFocus:function(){bt(W),Ae(),D.current&&(o||(D.current.scrollLeft=0),D.current.scrollTop=0)}})}),gt=function(){return Da(function(){var y,W=new Map,Q=(y=C.current)===null||y===void 0?void 0:y.getBoundingClientRect();return I.forEach(function(fe){var de,we=fe.key,xt=(de=C.current)===null||de===void 0?void 0:de.querySelector('[data-node-key="'.concat(Je(we),'"]'));if(xt){var Ua=Qt(xt,Q),Ze=(0,z.Z)(Ua,4),Ya=Ze[0],Qa=Ze[1],Ja=Ze[2],qa=Ze[3];W.set(we,{width:Ya,height:Qa,left:Ja,top:qa})}}),W})};(0,n.useEffect)(function(){gt()},[I.map(function(B){return B.key}).join("_")]);var Ie=Ue(function(){var B=be(M),y=be(A),W=be(H);E([B[0]-y[0]-W[0],B[1]-y[1]-W[1]]);var Q=be(Z);ce(Q);var fe=be($);ie(fe);var de=be(C);U([de[0]-Q[0],de[1]-Q[1]]),gt()}),Xa=I.slice(0,ja),Ka=I.slice(ka+1),ht=[].concat((0,je.Z)(Xa),(0,je.Z)(Ka)),pt=Pe.get(c),Va=Bt({activeTabOffset:pt,horizontal:S,indicator:N,rtl:o}),Fa=Va.style;(0,n.useEffect)(function(){bt()},[c,se,ve,Qe(pt),Qe(Pe),S]),(0,n.useEffect)(function(){Ie()},[o]);var $t=!!ht.length,Se="".concat(u,"-nav-wrap"),We,He,St,yt;return S?o?(He=P>0,We=P!==ve):(We=P<0,He=P!==se):(St=k<0,yt=k!==se),n.createElement(Ne.Z,{onResize:Ie},n.createElement("div",{ref:(0,Mt.x1)(t,M),role:"tablist",className:K()("".concat(u,"-nav"),a),style:r,onKeyDown:function(){Ae()}},n.createElement(tt,{ref:A,position:"left",extra:s,prefixCls:u}),n.createElement(Ne.Z,{onResize:Ie},n.createElement("div",{className:K()(Se,(0,V.Z)((0,V.Z)((0,V.Z)((0,V.Z)({},"".concat(Se,"-ping-left"),We),"".concat(Se,"-ping-right"),He),"".concat(Se,"-ping-top"),St),"".concat(Se,"-ping-bottom"),yt)),ref:D},n.createElement(Ne.Z,{onResize:Ie},n.createElement("div",{ref:C,className:"".concat(u,"-nav-list"),style:{transform:"translate(".concat(P,"px, ").concat(k,"px)"),transition:Ee?"none":void 0}},mt,n.createElement(et,{ref:Z,prefixCls:u,locale:v,editable:d,style:(0,J.Z)((0,J.Z)({},mt.length===0?void 0:Re),{},{visibility:$t?"hidden":null})}),n.createElement("div",{className:K()("".concat(u,"-ink-bar"),(0,V.Z)({},"".concat(u,"-ink-bar-animated"),l.inkBar)),style:Fa}))))),n.createElement(Ft,(0,ne.Z)({},e,{removeAriaLabel:v==null?void 0:v.removeAriaLabel,ref:$,prefixCls:u,tabs:ht,className:!$t&&Wa,tabMoving:!!Ee})),n.createElement(tt,{ref:H,position:"right",extra:s,prefixCls:u})))}),nt=Jt,qt=n.forwardRef(function(e,t){var a=e.prefixCls,r=e.className,i=e.style,l=e.id,c=e.active,o=e.tabKey,s=e.children;return n.createElement("div",{id:l&&"".concat(l,"-panel-").concat(o),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":l&&"".concat(l,"-tab-").concat(o),"aria-hidden":!c,style:i,className:K()(a,c&&"".concat(a,"-active"),r),ref:t},s)}),rt=qt,ea=["renderTabBar"],ta=["label","key"],aa=function(t){var a=t.renderTabBar,r=(0,ye.Z)(t,ea),i=n.useContext(xe),l=i.tabs;if(a){var c=(0,J.Z)((0,J.Z)({},r),{},{panes:l.map(function(o){var s=o.label,d=o.key,v=(0,ye.Z)(o,ta);return n.createElement(rt,(0,ne.Z)({tab:s,key:d,tabKey:d},v))})});return a(c,nt)}return n.createElement(nt,r)},na=aa,ra=f(82225),ia=["key","forceRender","style","className","destroyInactiveTabPane"],oa=function(t){var a=t.id,r=t.activeKey,i=t.animated,l=t.tabPosition,c=t.destroyInactiveTabPane,o=n.useContext(xe),s=o.prefixCls,d=o.tabs,v=i.tabPane,b="".concat(s,"-tabpane");return n.createElement("div",{className:K()("".concat(s,"-content-holder"))},n.createElement("div",{className:K()("".concat(s,"-content"),"".concat(s,"-content-").concat(l),(0,V.Z)({},"".concat(s,"-content-animated"),v))},d.map(function(x){var w=x.key,_=x.forceRender,R=x.style,N=x.className,m=x.destroyInactiveTabPane,u=(0,ye.Z)(x,ia),I=w===r;return n.createElement(ra.ZP,(0,ne.Z)({key:w,visible:I,forceRender:_,removeOnLeave:!!(c||m),leavedClassName:"".concat(b,"-hidden")},i.tabPaneMotion),function(M,A){var H=M.style,D=M.className;return n.createElement(rt,(0,ne.Z)({},u,{prefixCls:b,id:a,tabKey:w,animated:v,active:I,style:(0,J.Z)((0,J.Z)({},R),H),className:K()(N,D),ref:A}))})})))},la=oa,en=f(80334);function ca(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=(0,J.Z)({inkBar:!0},(0,ze.Z)(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var sa=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","more","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],it=0,da=n.forwardRef(function(e,t){var a=e.id,r=e.prefixCls,i=r===void 0?"rc-tabs":r,l=e.className,c=e.items,o=e.direction,s=e.activeKey,d=e.defaultActiveKey,v=e.editable,b=e.animated,x=e.tabPosition,w=x===void 0?"top":x,_=e.tabBarGutter,R=e.tabBarStyle,N=e.tabBarExtraContent,m=e.locale,u=e.more,I=e.destroyInactiveTabPane,M=e.renderTabBar,A=e.onChange,H=e.onTabClick,D=e.onTabScroll,C=e.getPopupContainer,$=e.popupClassName,Z=e.indicator,S=(0,ye.Z)(e,sa),T=n.useMemo(function(){return(c||[]).filter(function(L){return L&&(0,ze.Z)(L)==="object"&&"key"in L})},[c]),h=o==="rtl",P=ca(b),Y=(0,n.useState)(!1),oe=(0,z.Z)(Y,2),p=oe[0],k=oe[1];(0,n.useEffect)(function(){k((0,zt.Z)())},[]);var re=(0,Ge.Z)(function(){var L;return(L=T[0])===null||L===void 0?void 0:L.key},{value:s,defaultValue:d}),G=(0,z.Z)(re,2),F=G[0],le=G[1],E=(0,n.useState)(function(){return T.findIndex(function(L){return L.key===F})}),O=(0,z.Z)(E,2),j=O[0],X=O[1];(0,n.useEffect)(function(){var L=T.findIndex(function(pe){return pe.key===F});if(L===-1){var ie;L=Math.max(0,Math.min(j,T.length-1)),le((ie=T[L])===null||ie===void 0?void 0:ie.key)}X(L)},[T.map(function(L){return L.key}).join("_"),F,j]);var U=(0,Ge.Z)(null,{value:a}),ee=(0,z.Z)(U,2),q=ee[0],me=ee[1];(0,n.useEffect)(function(){a||(me("rc-tabs-".concat(it)),it+=1)},[]);function ce(L,ie){H==null||H(L,ie);var pe=L!==F;le(L),pe&&(A==null||A(L))}var ue={id:q,activeKey:F,animated:P,tabPosition:w,rtl:h,mobile:p},ge=(0,J.Z)((0,J.Z)({},ue),{},{editable:v,locale:m,more:u,tabBarGutter:_,onTabClick:ce,onTabScroll:D,extra:N,style:R,panes:null,getPopupContainer:C,popupClassName:$,indicator:Z});return n.createElement(xe.Provider,{value:{tabs:T,prefixCls:i}},n.createElement("div",(0,ne.Z)({ref:t,id:a,className:K()(i,"".concat(i,"-").concat(w),(0,V.Z)((0,V.Z)((0,V.Z)({},"".concat(i,"-mobile"),p),"".concat(i,"-editable"),v),"".concat(i,"-rtl"),h),l)},S),n.createElement(na,(0,ne.Z)({},ge,{renderTabBar:M})),n.createElement(la,(0,ne.Z)({destroyInactiveTabPane:I},ue,{animated:P}))))}),ua=da,va=ua,fa=f(53124),ba=f(35792),ma=f(98675),ga=f(33603);const ha={motionAppear:!1,motionEnter:!0,motionLeave:!0};function pa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},a;return t===!1?a={inkBar:!1,tabPane:!1}:t===!0?a={inkBar:!0,tabPane:!0}:a=Object.assign({inkBar:!0},typeof t=="object"?t:{}),a.tabPane&&(a.tabPaneMotion=Object.assign(Object.assign({},ha),{motionName:(0,ga.m)(e,"switch")})),a}var $a=f(50344),Sa=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};function ya(e){return e.filter(t=>t)}function xa(e,t){if(e)return e;const a=(0,$a.Z)(t).map(r=>{if(n.isValidElement(r)){const{key:i,props:l}=r,c=l||{},{tab:o}=c,s=Sa(c,["tab"]);return Object.assign(Object.assign({key:String(i)},s),{label:o})}return null});return ya(a)}var g=f(54548),he=f(14747),Ca=f(91945),Ta=f(45503),ot=f(67771),Pa=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[(0,ot.oN)(e,"slide-up"),(0,ot.oN)(e,"slide-down")]]};const Ea=e=>{const{componentCls:t,tabsCardPadding:a,cardBg:r,cardGutter:i,colorBorderSecondary:l,itemSelectedColor:c}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:r,border:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${l}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:c,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:(0,g.bf)(i)}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)} 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)}`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:(0,g.bf)(i)}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,g.bf)(e.borderRadiusLG)} 0 0 ${(0,g.bf)(e.borderRadiusLG)}`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)} 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Ra=e=>{const{componentCls:t,itemHoverColor:a,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,he.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${(0,g.bf)(r)} 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},he.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${(0,g.bf)(e.paddingXXS)} ${(0,g.bf)(e.paddingSM)}`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ia=e=>{const{componentCls:t,margin:a,colorBorderSecondary:r,horizontalMargin:i,verticalItemPadding:l,verticalItemMargin:c,calc:o}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:i,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:a,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:o(e.controlHeight).mul(1.25).equal(),[`${t}-tab`]:{padding:l,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:c},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:(0,g.bf)(o(e.lineWidth).mul(-1).equal())},borderLeft:{_skip_check_:!0,value:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:o(e.lineWidth).mul(-1).equal()},borderRight:{_skip_check_:!0,value:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},wa=e=>{const{componentCls:t,cardPaddingSM:a,cardPaddingLG:r,horizontalItemPaddingSM:i,horizontalItemPaddingLG:l}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:i,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:l,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${(0,g.bf)(e.borderRadius)} ${(0,g.bf)(e.borderRadius)}`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${(0,g.bf)(e.borderRadius)} ${(0,g.bf)(e.borderRadius)} 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${(0,g.bf)(e.borderRadius)} ${(0,g.bf)(e.borderRadius)} 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${(0,g.bf)(e.borderRadius)} 0 0 ${(0,g.bf)(e.borderRadius)}`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}}}}}},Za=e=>{const{componentCls:t,itemActiveColor:a,itemHoverColor:r,iconCls:i,tabsHorizontalItemMargin:l,horizontalItemPadding:c,itemSelectedColor:o,itemColor:s}=e,d=`${t}-tab`;return{[d]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:c,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:s,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:a}},(0,he.Qy)(e)),"&-btn":{outline:"none",transition:`all ${e.motionDurationSlow}`,[`${d}-icon:not(:last-child)`]:{marginInlineEnd:e.marginSM}},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:e.calc(e.marginXXS).mul(-1).equal()},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${d}-active ${d}-btn`]:{color:o,textShadow:e.tabsActiveTextShadow},[`&${d}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${d}-disabled ${d}-btn, &${d}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${d}-remove ${i}`]:{margin:0},[`${i}:not(:last-child)`]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${d} + ${d}`]:{margin:{_skip_check_:!0,value:l}}}},La=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:a,iconCls:r,cardGutter:i,calc:l}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:a},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:(0,g.bf)(e.marginSM)}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:(0,g.bf)(e.marginXS)},marginLeft:{_skip_check_:!0,value:(0,g.bf)(l(e.marginXXS).mul(-1).equal())},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:i},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},za=e=>{const{componentCls:t,tabsCardPadding:a,cardHeight:r,cardGutter:i,itemHoverColor:l,itemActiveColor:c,colorBorderSecondary:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,he.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.calc(e.controlHeightLG).div(8).equal(),transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:r,minHeight:r,marginLeft:{_skip_check_:!0,value:i},padding:`0 ${(0,g.bf)(e.paddingXS)}`,background:"transparent",border:`${(0,g.bf)(e.lineWidth)} ${e.lineType} ${o}`,borderRadius:`${(0,g.bf)(e.borderRadiusLG)} ${(0,g.bf)(e.borderRadiusLG)} 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:l},"&:active, &:focus:not(:focus-visible)":{color:c}},(0,he.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Za(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Na=e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}};var Ma=(0,Ca.I$)("Tabs",e=>{const t=(0,Ta.TS)(e,{tabsCardPadding:e.cardPadding,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${(0,g.bf)(e.horizontalItemGutter)}`,tabsHorizontalItemMarginRTL:`0 0 0 ${(0,g.bf)(e.horizontalItemGutter)}`});return[wa(t),La(t),Ia(t),Ra(t),Ea(t),za(t),Pa(t)]},Na),_a=()=>null,Ba=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]]);return a};const lt=e=>{var t,a,r,i,l,c,o,s,d,v,b;const{type:x,className:w,rootClassName:_,size:R,onEdit:N,hideAdd:m,centered:u,addIcon:I,removeIcon:M,moreIcon:A,more:H,popupClassName:D,children:C,items:$,animated:Z,style:S,indicatorSize:T,indicator:h}=e,P=Ba(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","removeIcon","moreIcon","more","popupClassName","children","items","animated","style","indicatorSize","indicator"]),{prefixCls:Y}=P,{direction:oe,tabs:p,getPrefixCls:k,getPopupContainer:re}=n.useContext(fa.E_),G=k("tabs",Y),F=(0,ba.Z)(G),[le,E,O]=Ma(G,F);let j;x==="editable-card"&&(j={onEdit:(ue,ge)=>{let{key:L,event:ie}=ge;N==null||N(ue==="add"?ie:L,ue)},removeIcon:(t=M!=null?M:p==null?void 0:p.removeIcon)!==null&&t!==void 0?t:n.createElement(Tt.Z,null),addIcon:(I!=null?I:p==null?void 0:p.addIcon)||n.createElement(Zt,null),showAdd:m!==!0});const X=k(),U=(0,ma.Z)(R),ee=xa($,C),q=pa(G,Z),me=Object.assign(Object.assign({},p==null?void 0:p.style),S),ce={align:(a=h==null?void 0:h.align)!==null&&a!==void 0?a:(r=p==null?void 0:p.indicator)===null||r===void 0?void 0:r.align,size:(o=(l=(i=h==null?void 0:h.size)!==null&&i!==void 0?i:T)!==null&&l!==void 0?l:(c=p==null?void 0:p.indicator)===null||c===void 0?void 0:c.size)!==null&&o!==void 0?o:p==null?void 0:p.indicatorSize};return le(n.createElement(va,Object.assign({direction:oe,getPopupContainer:re},P,{items:ee,className:K()({[`${G}-${U}`]:U,[`${G}-card`]:["card","editable-card"].includes(x),[`${G}-editable-card`]:x==="editable-card",[`${G}-centered`]:u},p==null?void 0:p.className,w,_,E,O,F),popupClassName:K()(D,E,O,F),style:me,editable:j,more:Object.assign({icon:(b=(v=(d=(s=p==null?void 0:p.more)===null||s===void 0?void 0:s.icon)!==null&&d!==void 0?d:p==null?void 0:p.moreIcon)!==null&&v!==void 0?v:A)!==null&&b!==void 0?b:n.createElement(Pt.Z,null),transitionName:`${X}-slide-up`},H),prefixCls:G,animated:q,indicator:ce})))};lt.TabPane=_a;var Oa=lt}}]);
