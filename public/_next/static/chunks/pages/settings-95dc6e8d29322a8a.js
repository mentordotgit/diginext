(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{40820:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return i(84638)}])},66830:function(n,e,i){"use strict";i.d(e,{Hg:function(){return r},av:function(){return a},hv:function(){return c}});var t=i(83360);let a=n=>(0,t.FF)(["workspaces"],"/api/v1/workspace",n),c=n=>(0,t.yt)(["workspaces"],"/api/v1/workspace",n),r=n=>(0,t.FF)(["workspaces","invite"],"/api/v1/workspace/invite",n)},29537:function(n,e,i){"use strict";i.d(e,{Z:function(){return m}});var t=i(11527),a=i(45645),c=i(50959),r=i(76777),s=i(807),l=function(n,e){return c.createElement(s.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:r.Z}))};l.displayName="CopyOutlined";var o=c.forwardRef(l),d=i(17434),h=i(78007),u=i(82129),g=i(20193),p=i(32699),w=i(85276);let x=n=>{let{children:e,value:i,mode:a="block",type:c="text"}=n,[r,s]=(0,w.m9)();return(0,t.jsx)(t.Fragment,{children:"block"===a?(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)(d.Z.Paragraph,{children:"text"===c?(0,t.jsx)("pre",{children:i}):(0,t.jsx)(h.Z,{type:"password",className:"flex-none",disabled:!0,value:i})}),(0,t.jsx)(u.ZP,{type:"primary",danger:!(0,p.isEmpty)(r),size:"large",onClick:()=>s(i),icon:(0,t.jsx)(o,{}),children:r?"Copied":"Copy"})]}):(0,t.jsxs)(g.Z.Compact,{children:[(0,t.jsx)(h.Z,{type:c,className:"flex-none",disabled:!0,value:i}),(0,t.jsx)(u.ZP,{type:"primary",danger:!(0,p.isEmpty)(r),size:"large",onClick:()=>s(i),icon:(0,t.jsx)(o,{}),children:r?"Copied":"Copy"})]})})};var m=x},81289:function(n,e,i){"use strict";i.d(e,{D:function(){return g},V:function(){return p}});var t=i(11527),a=i(95752),c=i(99513),r=i(18467),s=i(515),l=i(82129),o=i(8290),d=i(20193),h=i(95954),u=i(85276);function g(n){let{token:{colorTextHeading:e}}=s.Z.useToken(),{isDarkMode:i}=(0,u.vs)(),{color:a=i?"white":"black",value:c}=n;return(0,t.jsx)("h1",{className:"my-0 grow py-0 pt-2 text-xl font-bold",style:{color:a},children:c})}let p=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,h.useRouter)(),{breadcrumbs:i=[],title:u="Page Title",actions:p=[(0,t.jsx)(l.ZP,{type:"default",icon:(0,t.jsx)(a.Z,{className:"align-middle"}),children:"Settings"},"workspace-setting-btn"),(0,t.jsx)(l.ZP,{type:"default",icon:(0,t.jsx)(c.Z,{className:"align-middle"})},"more-btn")]}=n,{token:{colorTextHeading:w}}=s.Z.useToken();return(0,t.jsxs)("div",{className:"border-b border-gray-300 px-6 py-4",children:[(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(o.Z.Item,{href:"".concat(e.basePath,"/"),children:(0,t.jsx)(r.Z,{})},"breadcrumb-home"),i.map((n,e)=>(0,t.jsxs)(o.Z.Item,{href:n.url,children:[n.icon,(0,t.jsx)("span",{children:n.name})]},"breadcrumb-".concat(e)))]}),(0,t.jsxs)("div",{className:" flex w-full flex-row",children:[(0,t.jsx)(g,{value:u}),(0,t.jsx)("div",{children:(0,t.jsx)(d.Z,{children:p})})]})]})}},84638:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return no}});var t=i(11527),a=i(66109),c=i(81289),r=i(45645),s=i(50959),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M705.6 124.9a8 8 0 00-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0162.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0127.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 01-76.3 113.3 353.06 353.06 0 01-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 01-113.2-76.4A355.92 355.92 0 01184 650.4a355 355 0 01-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z"}}]},name:"poweroff",theme:"outlined"},o=i(807),d=function(n,e){return s.createElement(o.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:e,icon:l}))};d.displayName="PoweroffOutlined";var h=s.forwardRef(d),u=i(42741),g=i(82129);let p=()=>(0,t.jsx)(u.Z,{title:"Are you sure?",description:"This action cannot be undone.",placement:"bottomRight",children:(0,t.jsx)(g.ZP,{type:"default",danger:!0,icon:(0,t.jsx)(h,{className:"align-middle"}),children:"Destroy"})});var w=i(34113),x=i(20193),m=i(17434),S=i(40808),f=i(84875),$=i.n(f),b=i(64778),k=i(58457),v=i(82261),I=i(75534),M=i(19890),y=i(13189),j=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],P=s.forwardRef(function(n,e){var i,t=n.prefixCls,a=void 0===t?"rc-switch":t,c=n.className,r=n.checked,l=n.defaultChecked,o=n.disabled,d=n.loadingIcon,h=n.checkedChildren,u=n.unCheckedChildren,g=n.onClick,p=n.onChange,w=n.onKeyDown,x=(0,I.Z)(n,j),m=(0,M.Z)(!1,{value:r,defaultValue:l}),S=(0,v.Z)(m,2),f=S[0],P=S[1];function Z(n,e){var i=f;return o||(P(i=n),null==p||p(i,e)),i}var C=$()(a,c,(i={},(0,k.Z)(i,"".concat(a,"-checked"),f),(0,k.Z)(i,"".concat(a,"-disabled"),o),i));return s.createElement("button",(0,b.Z)({},x,{type:"button",role:"switch","aria-checked":f,disabled:o,className:C,ref:e,onKeyDown:function(n){n.which===y.Z.LEFT?Z(!1,n):n.which===y.Z.RIGHT&&Z(!0,n),null==w||w(n)},onClick:function(n){var e=Z(!f,n);null==g||g(e,n)}}),d,s.createElement("span",{className:"".concat(a,"-inner")},s.createElement("span",{className:"".concat(a,"-inner-checked")},h),s.createElement("span",{className:"".concat(a,"-inner-unchecked")},u)))});P.displayName="Switch";var Z=i(93666),C=i(47067),E=i(19455),z=i(55409),N=i(99590),_=i(1688),O=i(61165),T=i(71433);let H=n=>{let{componentCls:e}=n,i=`${e}-inner`;return{[e]:{[`&${e}-small`]:{minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:`${n.switchHeightSM}px`,[`${e}-inner`]:{paddingInlineStart:n.switchInnerMarginMaxSM,paddingInlineEnd:n.switchInnerMarginMinSM,[`${i}-checked`]:{marginInlineStart:`calc(-100% + ${n.switchPinSizeSM+2*n.switchPadding}px - ${2*n.switchInnerMarginMaxSM}px)`,marginInlineEnd:`calc(100% - ${n.switchPinSizeSM+2*n.switchPadding}px + ${2*n.switchInnerMarginMaxSM}px)`},[`${i}-unchecked`]:{marginTop:-n.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${e}-handle`]:{width:n.switchPinSizeSM,height:n.switchPinSizeSM},[`${e}-loading-icon`]:{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize},[`&${e}-checked`]:{[`${e}-inner`]:{paddingInlineStart:n.switchInnerMarginMinSM,paddingInlineEnd:n.switchInnerMarginMaxSM,[`${i}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${i}-unchecked`]:{marginInlineStart:`calc(100% - ${n.switchPinSizeSM+2*n.switchPadding}px + ${2*n.switchInnerMarginMaxSM}px)`,marginInlineEnd:`calc(-100% + ${n.switchPinSizeSM+2*n.switchPadding}px - ${2*n.switchInnerMarginMaxSM}px)`}},[`${e}-handle`]:{insetInlineStart:`calc(100% - ${n.switchPinSizeSM+n.switchPadding}px)`}},[`&:not(${e}-disabled):active`]:{[`&:not(${e}-checked) ${i}`]:{[`${i}-unchecked`]:{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2}},[`&${e}-checked ${i}`]:{[`${i}-checked`]:{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2}}}}}}},D=n=>{let{componentCls:e}=n;return{[e]:{[`${e}-loading-icon${n.iconCls}`]:{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"},[`&${e}-checked ${e}-loading-icon`]:{color:n.switchColor}}}},W=n=>{let{componentCls:e}=n,i=`${e}-handle`;return{[e]:{[i]:{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:`all ${n.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:`all ${n.switchDuration} ease-in-out`,content:'""'}},[`&${e}-checked ${i}`]:{insetInlineStart:`calc(100% - ${n.switchPinSize+n.switchPadding}px)`},[`&:not(${e}-disabled):active`]:{[`${i}::before`]:{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0},[`&${e}-checked ${i}::before`]:{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}}}}},R=n=>{let{componentCls:e}=n,i=`${e}-inner`;return{[e]:{[i]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:n.switchInnerMarginMax,paddingInlineEnd:n.switchInnerMarginMin,transition:`padding-inline-start ${n.switchDuration} ease-in-out, padding-inline-end ${n.switchDuration} ease-in-out`,[`${i}-checked, ${i}-unchecked`]:{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:`margin-inline-start ${n.switchDuration} ease-in-out, margin-inline-end ${n.switchDuration} ease-in-out`,pointerEvents:"none"},[`${i}-checked`]:{marginInlineStart:`calc(-100% + ${n.switchPinSize+2*n.switchPadding}px - ${2*n.switchInnerMarginMax}px)`,marginInlineEnd:`calc(100% - ${n.switchPinSize+2*n.switchPadding}px + ${2*n.switchInnerMarginMax}px)`},[`${i}-unchecked`]:{marginTop:-n.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${e}-checked ${i}`]:{paddingInlineStart:n.switchInnerMarginMin,paddingInlineEnd:n.switchInnerMarginMax,[`${i}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${i}-unchecked`]:{marginInlineStart:`calc(100% - ${n.switchPinSize+2*n.switchPadding}px + ${2*n.switchInnerMarginMax}px)`,marginInlineEnd:`calc(-100% + ${n.switchPinSize+2*n.switchPadding}px - ${2*n.switchInnerMarginMax}px)`}},[`&:not(${e}-disabled):active`]:{[`&:not(${e}-checked) ${i}`]:{[`${i}-unchecked`]:{marginInlineStart:2*n.switchPadding,marginInlineEnd:-(2*n.switchPadding)}},[`&${e}-checked ${i}`]:{[`${i}-checked`]:{marginInlineStart:-(2*n.switchPadding),marginInlineEnd:2*n.switchPadding}}}}}},A=n=>{let{componentCls:e}=n;return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,T.Wf)(n)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:`${n.switchHeight}px`,verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${n.motionDurationMid}`,userSelect:"none",[`&:hover:not(${e}-disabled)`]:{background:n.colorTextTertiary}}),(0,T.Qy)(n)),{[`&${e}-checked`]:{background:n.switchColor,[`&:hover:not(${e}-disabled)`]:{background:n.colorPrimaryHover}},[`&${e}-loading, &${e}-disabled`]:{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${e}-rtl`]:{direction:"rtl"}})}};var L=(0,_.Z)("Switch",n=>{let e=n.fontSize*n.lineHeight,i=n.controlHeight/2,t=e-4,a=i-4,c=(0,O.TS)(n,{switchMinWidth:2*t+8,switchHeight:e,switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchInnerMarginMin:t/2,switchInnerMarginMax:t+2+4,switchPadding:2,switchPinSize:t,switchBg:n.colorBgContainer,switchMinWidthSM:2*a+4,switchHeightSM:i,switchInnerMarginMinSM:a/2,switchInnerMarginMaxSM:a+2+4,switchPinSizeSM:a,switchHandleShadow:`0 2px 4px 0 ${new N.C("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:.75*n.fontSizeIcon,switchLoadingIconColor:`rgba(0, 0, 0, ${n.opacityLoading})`,switchHandleActiveInset:"-30%"});return[A(c),R(c),W(c),D(c),H(c)]}),X=function(n,e){var i={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&0>e.indexOf(t)&&(i[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)0>e.indexOf(t[a])&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(i[t[a]]=n[t[a]]);return i};let B=s.forwardRef((n,e)=>{var{prefixCls:i,size:t,disabled:a,loading:c,className:r,rootClassName:l}=n,o=X(n,["prefixCls","size","disabled","loading","className","rootClassName"]);let{getPrefixCls:d,direction:h}=s.useContext(Z.E_),u=s.useContext(E.Z),g=s.useContext(C.Z),p=d("switch",i),w=s.createElement("div",{className:`${p}-handle`},c&&s.createElement(S.Z,{className:`${p}-loading-icon`})),[x,m]=L(p),f=$()({[`${p}-small`]:"small"===(t||u),[`${p}-loading`]:c,[`${p}-rtl`]:"rtl"===h},r,l,m);return x(s.createElement(z.Z,null,s.createElement(P,Object.assign({},o,{prefixCls:p,className:f,disabled:(null!=a?a:g)||c,ref:e,loadingIcon:w}))))});B.__ANT_SWITCH=!0;var F=i(66830),K=i(71449);let V=()=>{let n=w.Z.useApp(),e=(0,K.c)(),[i,a]=(0,s.useState)(null==e?void 0:e.public),[c,r]=(0,F.hv)({filter:{_id:null==e?void 0:e._id}}),l=async i=>{let t=await c({public:i});(null==t?void 0:t.status)&&(a(i),n.notification.success({message:"Congrats!",description:'Made "'.concat(null==e?void 0:e.name,'" workspace ').concat(i?"PUBLIC":"PRIVATE"," successfully.")}))};return(0,t.jsxs)(x.Z,{direction:"horizontal",size:6,children:[(0,t.jsx)(m.Z.Title,{level:5,style:{marginBottom:0},children:"Public"}),(0,t.jsx)(B,{checked:i,onChange:l,loading:"loading"===r})]})};var Q=i(16332),U=i(79254),Y=i(7482),G=i(74637),q=i.n(G),J=i(95019),nn=i(83360);let ne=n=>(0,nn.wz)(["users","list"],"/api/v1/api_key",n);var ni=i(29537);let nt=i(64814),na=i(54498);q().extend(na),q().extend(nt);let nc=()=>{let n=(0,K.c)(),{data:{list:e=[]}={list:[]}}=ne(),{data:i}=(0,J.sc)();return(0,t.jsxs)("div",{className:"px-4 py-6",children:[(0,t.jsxs)(m.Z.Title,{children:[null==n?void 0:n.name," Workspace"]}),e.length>0&&(0,t.jsx)(Q.ZP,{dataSource:e,renderItem:(n,e)=>{let{name:i,email:a,token:{access_token:c}={access_token:""}}=n;return(0,t.jsx)(U.Z,{title:i,children:(0,t.jsx)("div",{children:(0,t.jsx)(ni.Z,{type:"password",mode:"inline",value:c})},"api-key-".concat(c))})}}),(0,t.jsx)(Y.Z,{dashed:!0}),(0,t.jsx)(U.Z,{title:"DX_KEY",children:(0,t.jsx)("div",{children:(0,t.jsx)(ni.Z,{mode:"inline",value:(null==n?void 0:n.dx_key)||""})},"dx-key")}),(0,t.jsx)(Y.Z,{dashed:!0}),(0,t.jsx)(U.Z,{title:"PUBLIC KEY",children:(0,t.jsx)("div",{children:(0,t.jsx)(ni.Z,{mode:"inline",value:(null==i?void 0:i.data.publicKey)||""})},"ssh-public-key")})]})};var nr=i(97428),ns=i(96861);let nl=()=>(0,t.jsx)(a.Wk,{children:(0,t.jsxs)(nr.o,{meta:(0,t.jsx)(ns.h,{title:"Settings",description:"Workspace's configuration."}),children:[(0,t.jsx)(c.V,{title:"Workspace Settings",breadcrumbs:[{name:"Workspace"}],actions:[(0,t.jsx)(V,{},"workspace-privacy-switch"),(0,t.jsx)(p,{},"destroy-workspace-button")]}),(0,t.jsx)(nc,{})]})});var no=nl},71449:function(n,e,i){"use strict";i.d(e,{c:function(){return a}});var t=i(66109);let a=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];let[n]=(0,t.aC)();return null==n?void 0:n.activeWorkspace}}},function(n){n.O(0,[201,967,938,136,368,774,888,179],function(){return n(n.s=40820)}),_N_E=n.O()}]);