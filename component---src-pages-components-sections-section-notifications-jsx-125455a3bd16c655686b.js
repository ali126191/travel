(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{148:function(e,t,a){"use strict";a.r(t);var n=a(7),o=a.n(n),r=a(0),i=a.n(r),l=a(168),c=a.n(l),s=a(258),d=a.n(s),u=a(292),f=a.n(u),p=a(37),g=a.n(p),m=a(4),x=a.n(m),b=a(291),h=a.n(b),v=a(201),y=a.n(v),E=a(196),k=a.n(E),w=a(263),S=a.n(w),j=(a(33),a(177)),O={root:Object.assign({},j.h,{position:"relative",padding:"20px 15px",lineHeight:"20px",marginBottom:"20px",fontSize:"14px",backgroundColor:"white",color:"#555555",borderRadius:"0px",maxWidth:"100%",minWidth:"auto",boxShadow:"0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"}),info:Object.assign({backgroundColor:"#00d3ee",color:"#ffffff"},j.k),success:Object.assign({backgroundColor:"#5cb860",color:"#ffffff"},j.s),warning:Object.assign({backgroundColor:"#ffa21a",color:"#ffffff"},j.x),danger:Object.assign({backgroundColor:"#f55a4e",color:"#ffffff"},j.e),primary:Object.assign({backgroundColor:"#af2cc5",color:"#ffffff"},j.n),message:{padding:"0",display:"block",maxWidth:"89%"},close:{width:"14px",height:"14px"},iconButton:{width:"24px",height:"24px",float:"right",fontSize:"1.5rem",fontWeight:"500",lineHeight:"1",position:"absolute",right:"-4px",top:"0",padding:"0"},icon:{display:"block",float:"left",marginRight:"1.071rem"},container:Object.assign({},j.d,{position:"relative"})},z=function(e){function t(t){var a;(a=e.call(this,t)||this).closeAlert=a.closeAlert.bind(g()(a));var n=t.classes,o=t.message,r=t.color,l=t.close,c=t.icon,s=[];void 0!==l&&(s=[i.a.createElement(y.a,{className:n.iconButton,key:"close","aria-label":"Close",color:"inherit",onClick:a.closeAlert},i.a.createElement(S.a,{className:n.close}))]);var d=null;switch(typeof c){case"function":d=i.a.createElement(t.icon,{className:n.icon});break;case"string":d=i.a.createElement(k.a,{className:n.icon},t.icon);break;default:d=null}return a.state={alert:i.a.createElement(h.a,{message:i.a.createElement("div",null,d,o,void 0!==l?s:null),classes:{root:n.root+" "+n[r],message:n.message+" "+n.container}})},a}o()(t,e);var a=t.prototype;return a.closeAlert=function(){this.setState({alert:null})},a.render=function(){return this.state.alert},t}(i.a.Component);z.propTypes={classes:x.a.object.isRequired,message:x.a.node.isRequired,color:x.a.oneOf(["info","success","warning","danger","primary"]),close:x.a.bool,icon:x.a.oneOfType([x.a.func,x.a.string])};var N=c()(O)(z);function R(e){var t=Object.assign({},e).classes;return i.a.createElement("div",{className:t.clearfix})}R.propTypes={classes:x.a.object.isRequired};var C=c()({clearfix:{"&:after,&:before":{display:"table",content:'" "'},"&:after":{clear:"both"}}})(R),W={section:{backgroundColor:"#FFFFFF",display:"block",width:"100%",position:"relative",padding:"0"},title:Object.assign({},j.v,{marginTop:"30px",minHeight:"32px",textDecoration:"none"}),container:j.d},_=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.classes;return i.a.createElement("div",{className:e.section,id:"notifications"},i.a.createElement("div",{className:e.container},i.a.createElement("div",{className:e.title},i.a.createElement("h3",null,"Notifications"))),i.a.createElement(N,{message:i.a.createElement("span",null,i.a.createElement("b",null,"INFO ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"info",icon:"info_outline"}),i.a.createElement(N,{message:i.a.createElement("span",null,i.a.createElement("b",null,"SUCCESS ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"success",icon:d.a}),i.a.createElement(N,{message:i.a.createElement("span",null,i.a.createElement("b",null,"WARNING ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"warning",icon:f.a}),i.a.createElement(N,{message:i.a.createElement("span",null,i.a.createElement("b",null,"DANGER ALERT:")," You've got some friends nearby, stop looking at your phone and find them..."),close:!0,color:"danger",icon:"info_outline"}),i.a.createElement(C,null))},t}(i.a.Component);t.default=c()(W)(_)},177:function(e,t,a){"use strict";a.d(t,"i",function(){return n}),a.d(t,"w",function(){return o}),a.d(t,"d",function(){return i}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return l}),a.d(t,"h",function(){return c}),a.d(t,"p",function(){return s}),a.d(t,"z",function(){return d}),a.d(t,"g",function(){return u}),a.d(t,"u",function(){return f}),a.d(t,"m",function(){return p}),a.d(t,"r",function(){return g}),a.d(t,"j",function(){return m}),a.d(t,"n",function(){return x}),a.d(t,"k",function(){return b}),a.d(t,"s",function(){return h}),a.d(t,"x",function(){return v}),a.d(t,"e",function(){return y}),a.d(t,"q",function(){return E}),a.d(t,"y",function(){return k}),a.d(t,"t",function(){return w}),a.d(t,"f",function(){return S}),a.d(t,"l",function(){return j}),a.d(t,"o",function(){return O}),a.d(t,"v",function(){return z}),a.d(t,"b",function(){return N});a(33);var n=260,o={transition:"all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"},r={paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"},i=Object.assign({},r,{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),l={boxShadow:"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},c={fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"},s="#9c27b0",d="#ff9800",u="#f44336",f="#4caf50",p="#00acc1",g="#e91e63",m="#999999",x={boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"},b={boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"},h={boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"},v={boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"},y={boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"},E={boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"},k=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},v),w=Object.assign({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},h),S=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},y),j=Object.assign({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},b),O=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},x),z=(Object.assign({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},E),Object.assign({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},c),{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'}),N=Object.assign({},z,{marginTop:".625rem"})},196:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(265))},258:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(179)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),o.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),"Check");t.default=r},265:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(73)),r=n(a(34)),i=n(a(170)),l=n(a(0)),c=(n(a(4)),n(a(169))),s=(a(171),n(a(168))),d=a(178),u=function(e){return{root:{userSelect:"none",fontSize:24,width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:20},fontSizeLarge:{fontSize:36}}};function f(e){var t,a=e.children,n=e.classes,s=e.className,u=e.color,f=e.component,p=e.fontSize,g=(0,i.default)(e,["children","classes","className","color","component","fontSize"]);return l.default.createElement(f,(0,o.default)({className:(0,c.default)("material-icons",n.root,(t={},(0,r.default)(t,n["color".concat((0,d.capitalize)(u))],"inherit"!==u),(0,r.default)(t,n["fontSize".concat((0,d.capitalize)(p))],"default"!==p),t),s),"aria-hidden":"true"},g),a)}t.styles=u,f.defaultProps={color:"inherit",component:"span",fontSize:"default"},f.muiName="Icon";var p=(0,s.default)(u,{name:"MuiIcon"})(f);t.default=p},291:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a(5663))},292:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(179)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),o.default.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"})),"Warning");t.default=r},5663:function(e,t,a){"use strict";var n=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a(73)),r=n(a(170)),i=n(a(34)),l=n(a(0)),c=(n(a(4)),n(a(169))),s=n(a(168)),d=n(a(190)),u=n(a(217)),f=a(251),p=function(e){var t,a="light"===e.palette.type?.8:.98,n=(0,f.emphasize)(e.palette.background.default,a);return{root:(t={color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 24px"},(0,i.default)(t,e.breakpoints.up("md"),{minWidth:288,maxWidth:568,borderRadius:e.shape.borderRadius}),(0,i.default)(t,e.breakpoints.down("sm"),{flexGrow:1}),t),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:24,marginRight:-8}}};t.styles=p;var g=(0,s.default)(p,{name:"MuiSnackbarContent"})(function(e){var t=e.action,a=e.classes,n=e.className,i=e.message,s=(0,r.default)(e,["action","classes","className","message"]);return l.default.createElement(d.default,(0,o.default)({component:u.default,headlineMapping:{body1:"div",body2:"div"},role:"alertdialog",square:!0,elevation:6,className:(0,c.default)(a.root,n)},s),l.default.createElement("div",{className:a.message},i),t?l.default.createElement("div",{className:a.action},t):null)});t.default=g}}]);
//# sourceMappingURL=component---src-pages-components-sections-section-notifications-jsx-125455a3bd16c655686b.js.map