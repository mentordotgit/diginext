(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{31134:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[...slugs]",function(){return n(65405)}])},1940:function(e,t,n){"use strict";n.d(t,{BT:function(){return i},E_:function(){return a},Zz:function(){return s}});var r=n(83360);let s=e=>(0,r.wz)(["projects","list"],"/api/v1/project",e),i=e=>(0,r.wz)(["projects","list"],"/api/v1/project/with-apps",e),a=()=>(0,r.TV)(["projects","delete"],"/api/v1/project")},81289:function(e,t,n){"use strict";n.d(t,{D:function(){return j},V:function(){return p}});var r=n(11527),s=n(95752),i=n(99513),a=n(18467),d=n(515),l=n(82129),o=n(8290),c=n(20193),u=n(95954),x=n(85276);function j(e){let{token:{colorTextHeading:t}}=d.Z.useToken(),{isDarkMode:n}=(0,x.vs)(),{color:s=n?"white":"black",value:i}=e;return(0,r.jsx)("h1",{className:"my-0 grow py-0 pt-2 text-xl font-bold",style:{color:s},children:i})}let p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,u.useRouter)(),{breadcrumbs:n=[],title:x="Page Title",actions:p=[(0,r.jsx)(l.ZP,{type:"default",icon:(0,r.jsx)(s.Z,{className:"align-middle"}),children:"Settings"},"workspace-setting-btn"),(0,r.jsx)(l.ZP,{type:"default",icon:(0,r.jsx)(i.Z,{className:"align-middle"})},"more-btn")]}=e,{token:{colorTextHeading:f}}=d.Z.useToken();return(0,r.jsxs)("div",{className:"border-b border-gray-300 px-6 py-4",children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(o.Z.Item,{href:"".concat(t.basePath,"/"),children:(0,r.jsx)(a.Z,{})},"breadcrumb-home"),n.map((e,t)=>(0,r.jsxs)(o.Z.Item,{href:e.url,children:[e.icon,(0,r.jsx)("span",{children:e.name})]},"breadcrumb-".concat(t)))]}),(0,r.jsxs)("div",{className:" flex w-full flex-row",children:[(0,r.jsx)(j,{value:x}),(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{children:p})})]})]})}},65405:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(11527);n(50959);var s=n(66109),i=n(81289),a=n(9734),d=n(79908),l=n(22932),o=n(59140),c=n(37537),u=n(85718),x=n(79560),j=n(82129),p=n(3741),f=n(20193),h=n(39658),m=n(74637),Z=n.n(m),g=n(32699),v=n(95954),w=n(10891),y=n(1940),k=n(1830);let b=n(64814),P=n(54498);Z().extend(P),Z().extend(b);let _=[{title:"App name",width:70,dataIndex:"name",key:"name",fixed:"left",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.name&&t.name.indexOf(e.toString())>-1||!0},{title:"Cluster",width:60,dataIndex:"cluster",key:"cluster",render:e=>(0,r.jsx)(j.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.cluster||t.cluster.indexOf(e.toString())>-1},{title:"Last updated by",dataIndex:"owner",key:"owner",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.owner||(t.owner.slug||"").indexOf(e.toString())>-1,render:e=>(0,r.jsx)(r.Fragment,{children:null==e?void 0:e.slug})},{title:"Last updated",dataIndex:"updatedAt",key:"updatedAt",width:50,render:e=>(0,r.jsx)(k.q,{date:e}),sorter:(e,t)=>Z()(e.updatedAt).diff(Z()(t.updatedAt))},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,r.jsx)(k.q,{date:e}),sorter:(e,t)=>Z()(e.createdAt).diff(Z()(t.createdAt))},{title:"Status",dataIndex:"status",fixed:"right",key:"status",width:30,filters:[{text:"live",value:"live"}],render:e=>(0,r.jsx)(p.Z,{color:"success",icon:(0,r.jsx)(a.Z,{className:"align-middle"}),children:e})},{title:"Action",key:"action",fixed:"right",width:50,dataIndex:"action",render:(e,t)=>{switch(e){case"app":case"project":return(0,r.jsxs)(f.Z.Compact,{children:[(0,r.jsx)(j.ZP,{icon:(0,r.jsx)(d.Z,{})}),(0,r.jsx)(j.ZP,{icon:(0,r.jsx)(l.Z,{})})]});case"env":return(0,r.jsxs)(f.Z.Compact,{children:[(0,r.jsx)(j.ZP,{icon:(0,r.jsx)(o.Z,{}),href:t.url,target:"_blank"}),(0,r.jsx)(j.ZP,{icon:(0,r.jsx)(l.Z,{})}),(0,r.jsx)(j.ZP,{icon:(0,r.jsx)(c.Z,{})}),(0,r.jsx)(j.ZP,{icon:(0,r.jsx)(d.Z,{})})]});case"env-prod":return(0,r.jsxs)(f.Z.Compact,{children:[(0,r.jsx)(j.ZP,{icon:(0,r.jsx)(o.Z,{})}),(0,r.jsx)(j.ZP,{icon:(0,r.jsx)(u.Z,{})}),(0,r.jsx)(j.ZP,{icon:(0,r.jsx)(l.Z,{})}),(0,r.jsx)(j.ZP,{icon:(0,r.jsx)(x.Z,{})}),(0,r.jsx)(j.ZP,{icon:(0,r.jsx)(d.Z,{})})]});default:return(0,r.jsx)(r.Fragment,{})}}}],A=()=>{let e=(0,v.useRouter)(),{slugs:t}=e.query,[n]=t||[],{data:s}=(0,y.Zz)({filter:{slug:n||"undefined"}}),{list:i}=s||{},[a]=i||[],{data:d}=(0,w.VD)({filter:{project:a?a._id:"undefined"},populate:"owner,project"}),{list:l}=d||{},o=(l||[]).map(e=>{var t;let n=Object.keys(null!==(t=e.deployEnvironment)&&void 0!==t?t:{}),r=n.map(t=>{let n=(e.deployEnvironment||{})[t]||{};return{name:t.toUpperCase(),key:"".concat(null==a?void 0:a.slug,"-").concat(e.slug,"-").concat(t),id:t,slug:t,action:"prod"!==t?"env":"env-prod",status:"live",url:n.domains?"https://".concat(n.domains[0]):"",...n}});return{...e,children:r}});return(0,g.isEmpty)(t)?(0,r.jsx)(r.Fragment,{children:"Project not found."}):(0,r.jsx)("div",{children:(0,r.jsx)(h.Z,{columns:_,dataSource:o,scroll:{x:1200},sticky:{offsetHeader:48},pagination:{pageSize:20},expandable:{defaultExpandAllRows:!0}})})};var N=n(97428),E=n(96861);let S=()=>(0,r.jsx)(s.Wk,{children:(0,r.jsxs)(N.o,{meta:(0,r.jsx)(E.h,{title:"Projects",description:"Manage builds & deployments of your projects / apps "}),children:[(0,r.jsx)(i.V,{title:"Projects",breadcrumbs:[{name:"Workspace"}]}),(0,r.jsx)(A,{})]})});var I=S}},function(e){e.O(0,[201,967,938,243,368,774,888,179],function(){return e(e.s=31134)}),_N_E=e.O()}]);