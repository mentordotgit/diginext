(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{73403:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(1413),a=t(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"},o=t(42135),i=function(e,r){return a.createElement(o.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:r,icon:l}))};i.displayName="HomeOutlined";var c=a.forwardRef(i)},75527:function(e,r,t){"use strict";t.d(r,{Z:function(){return w}});var n=t(74902),a=t(94184),l=t.n(a),o=t(50344),i=t(67294),c=t(53124),s=t(36907),u=t(96159),d=t(80882),m=t(8703),p=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>r.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};let b=e=>{var r;let t;let{prefixCls:n,separator:a="/",children:l,menu:o,overlay:s,dropdownProps:u}=e,b=p(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),{getPrefixCls:h}=i.useContext(c.E_),f=h("breadcrumb",n);return(r=t="href"in b?i.createElement("a",Object.assign({className:`${f}-link`},b),l):i.createElement("span",Object.assign({className:`${f}-link`},b),l),t=o||s?i.createElement(m.Z,Object.assign({menu:o,overlay:s,placement:"bottom"},u),i.createElement("span",{className:`${f}-overlay-link`},r,i.createElement(d.Z,null))):r,null!=l)?i.createElement("li",null,t,a&&i.createElement("span",{className:`${f}-separator`},a)):null};b.__ANT_BREADCRUMB_ITEM=!0;let h=e=>{let{children:r}=e,{getPrefixCls:t}=i.useContext(c.E_),n=t("breadcrumb");return i.createElement("span",{className:`${n}-separator`},r||"/")};h.__ANT_BREADCRUMB_SEPARATOR=!0;var f=t(67968),g=t(45503),x=t(14747);let j=e=>{let{componentCls:r,iconCls:t}=e;return{[r]:Object.assign(Object.assign({},(0,x.Wf)(e)),{color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize,[t]:{fontSize:e.breadcrumbIconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.breadcrumbLinkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${e.paddingXXS}px`,borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},(0,x.Qy)(e)),[`li:last-child > ${r}-separator`]:{display:"none"},[`${r}-separator`]:{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor},[`${r}-link`]:{[`
          > ${t} + span,
          > ${t} + a
        `]:{marginInlineStart:e.marginXXS}},[`${r}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:`0 ${e.paddingXXS}px`,marginInline:-e.marginXXS,[`> ${t}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}};var v=(0,f.Z)("Breadcrumb",e=>{let r=(0,g.TS)(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[j(r)]}),y=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>r.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function S(e,r,t,n){let a=t.indexOf(e)===t.length-1,l=function(e,r){if(!e.breadcrumbName)return null;let t=Object.keys(r).join("|"),n=e.breadcrumbName.replace(RegExp(`:(${t})`,"g"),(e,t)=>r[t]||e);return n}(e,r);return a?i.createElement("span",null,l):i.createElement("a",{href:`#/${n.join("/")}`},l)}let k=(e,r)=>(e=(e||"").replace(/^\//,""),Object.keys(r).forEach(t=>{e=e.replace(`:${t}`,r[t])}),e),O=(e,r,t)=>{let a=(0,n.Z)(e),l=k(r||"",t);return l&&a.push(l),a},E=e=>{let r;var{prefixCls:t,separator:n="/",style:a,className:d,routes:m,children:p,itemRender:h=S,params:f={}}=e,g=y(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]);let{getPrefixCls:x,direction:j}=i.useContext(c.E_),E=x("breadcrumb",t),[w,C]=v(E);if(m&&m.length>0){let _=[];r=m.map(e=>{let r;let t=k(e.path,f);t&&_.push(t),e.children&&e.children.length&&(r=i.createElement(s.Z,{items:e.children.map(e=>({key:e.path||e.breadcrumbName,label:h(e,f,m,O(_,e.path,f))}))}));let a={separator:n};return r&&(a.overlay=r),i.createElement(b,Object.assign({},a,{key:t||e.breadcrumbName}),h(e,f,m,_))})}else p&&(r=(0,o.Z)(p).map((e,r)=>e?(0,u.Tm)(e,{separator:n,key:r}):e));let N=l()(E,{[`${E}-rtl`]:"rtl"===j},d,C);return w(i.createElement("nav",Object.assign({className:N,style:a},g),i.createElement("ol",null,r)))};E.Item=b,E.Separator=h;var w=E},96755:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/build/[...slugs]",function(){return t(64119)}])},45788:function(e,r,t){"use strict";t.d(r,{D:function(){return p},V:function(){return b}});var n=t(85893),a=t(42952),l=t(89705),o=t(73403),i=t(92195),c=t(71577),s=t(75527),u=t(26713),d=t(11163),m=t(5678);function p(e){let{token:{colorTextHeading:r}}=i.Z.useToken(),{isDarkMode:t}=(0,m.vs)(),{color:a=t?"white":"black",value:l}=e;return(0,n.jsx)("h1",{className:"my-0 grow py-0 pt-2 text-xl font-bold",style:{color:a},children:l})}let b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,d.useRouter)(),{breadcrumbs:t=[],title:m="Page Title",actions:b=[(0,n.jsx)(c.Z,{type:"default",icon:(0,n.jsx)(a.Z,{className:"align-middle"}),children:"Settings"},"workspace-setting-btn"),(0,n.jsx)(c.Z,{type:"default",icon:(0,n.jsx)(l.Z,{className:"align-middle"})},"more-btn")]}=e,{token:{colorTextHeading:h}}=i.Z.useToken();return(0,n.jsxs)("div",{className:"border-b border-gray-300 px-6 py-4",children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(s.Z.Item,{href:"".concat(r.basePath,"/"),children:(0,n.jsx)(o.Z,{})},"breadcrumb-home"),t.map((e,r)=>(0,n.jsxs)(s.Z.Item,{href:e.url,children:[e.icon,(0,n.jsx)("span",{children:e.name})]},"breadcrumb-".concat(r)))]}),(0,n.jsxs)("div",{className:" flex w-full flex-row",children:[(0,n.jsx)(p,{value:m}),(0,n.jsx)("div",{children:(0,n.jsx)(u.Z,{children:b})})]})]})}},64119:function(e,r,t){"use strict";t.r(r);var n=t(85893),a=t(11163),l=t(45788),o=t(46003),i=t(65009),c=t(69008);let s=()=>{let e=(0,a.useRouter)();if(!e.isReady)return(0,n.jsx)(n.Fragment,{});console.log("router.asPath :>> ",e.asPath);let{slugs:r=[]}=e.query,[t=""]=r;return console.log("buildSlug :>> ",t),(0,n.jsxs)(i.o,{meta:(0,n.jsx)(c.h,{title:"Build Detail",description:"View the details of your build logs."}),children:[(0,n.jsx)(l.V,{title:"Build Detail",breadcrumbs:[{name:"Workspace"}]}),(0,n.jsx)("div",{className:"p-5",children:(0,n.jsx)(o.O,{slug:t})})]})};r.default=s},69008:function(e,r,t){"use strict";t.d(r,{h:function(){return s}});var n=t(85893),a=t(9008),l=t.n(a),o=t(11163),i=t(2962),c=t(51369);let s=e=>{let r=(0,o.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"".concat(r.basePath,"/apple-touch-icon.png")},"apple"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(r.basePath,"/favicon-32x32.png")},"icon32"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(r.basePath,"/favicon-16x16.png")},"icon16"),(0,n.jsx)("link",{rel:"icon",href:"".concat(r.basePath,"/favicon.ico")},"favicon")]}),(0,n.jsx)(i.PB,{title:"".concat(e.title," | ").concat(c.XL.site_name),description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:c.XL.locale,site_name:c.XL.site_name}}),(0,n.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",rel:"stylesheet"})]})}}},function(e){e.O(0,[662,762,481,9,774,888,179],function(){return e(e.s=96755)}),_N_E=e.O()}]);