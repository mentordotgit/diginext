(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{26860:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){return n(92720)}])},1940:function(e,t,n){"use strict";n.d(t,{BT:function(){return i},E_:function(){return a},Zz:function(){return s}});var l=n(83360);let s=e=>(0,l.wz)(["projects","list"],"/api/v1/project",e),i=e=>(0,l.wz)(["projects","list"],"/api/v1/project/with-apps",e),a=()=>(0,l.TV)(["projects","delete"],"/api/v1/project")},81289:function(e,t,n){"use strict";n.d(t,{D:function(){return x},V:function(){return j}});var l=n(11527),s=n(95752),i=n(99513),a=n(18467),r=n(515),o=n(82129),d=n(8290),c=n(20193),u=n(95954),p=n(85276);function x(e){let{token:{colorTextHeading:t}}=r.Z.useToken(),{isDarkMode:n}=(0,p.vs)(),{color:s=n?"white":"black",value:i}=e;return(0,l.jsx)("h1",{className:"my-0 grow py-0 pt-2 text-xl font-bold",style:{color:s},children:i})}let j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,u.useRouter)(),{breadcrumbs:n=[],title:p="Page Title",actions:j=[(0,l.jsx)(o.ZP,{type:"default",icon:(0,l.jsx)(s.Z,{className:"align-middle"}),children:"Settings"},"workspace-setting-btn"),(0,l.jsx)(o.ZP,{type:"default",icon:(0,l.jsx)(i.Z,{className:"align-middle"})},"more-btn")]}=e,{token:{colorTextHeading:h}}=r.Z.useToken();return(0,l.jsxs)("div",{className:"border-b border-gray-300 px-6 py-4",children:[(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(d.Z.Item,{href:"".concat(t.basePath,"/"),children:(0,l.jsx)(a.Z,{})},"breadcrumb-home"),n.map((e,t)=>(0,l.jsxs)(d.Z.Item,{href:e.url,children:[e.icon,(0,l.jsx)("span",{children:e.name})]},"breadcrumb-".concat(t)))]}),(0,l.jsxs)("div",{className:" flex w-full flex-row",children:[(0,l.jsx)(x,{value:p}),(0,l.jsx)("div",{children:(0,l.jsx)(c.Z,{children:j})})]})]})}},92720:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var l,s=n(11527),i=n(66109),a=n(81289),r=n(48409),o=n(79781),d=n(5962),c=n(59140),u=n(85718),p=n(37537),x=n(23407),j=n(63072),h=n(79560),m=n(44792),g=n(79908),y=n(82129),f=n(3741),Z=n(69766),v=n(25857),w=n(20193),k=n(42741),b=n(14354),C=n(38833),_=n(39658),S=n(74637),P=n.n(S),N=n(32699),A=n(94603),T=n.n(A),E=n(95954),I=n(50959),F=n(10891),z=n(1940),L=n(1830),O=n(32365),W=n(74883),M=n(53468),U=n(73875),V=n(96430),Y=n(31326),R=n(78007);let q=e=>{let{app:t,env:n,next:l}=e,[i,a]=(0,F.mv)({filter:{slug:t}}),r=async e=>{console.log("Success:",e);let t=[e.domain],s=await i({domains:t,env:n});console.log("response :>> ",s),l&&l()},o=e=>{console.log("Failed:",e)};return(0,s.jsxs)(Y.Z,{name:"add-domains",style:{maxWidth:600},layout:"vertical",onFinish:r,onFinishFailed:o,autoComplete:"off",children:[(0,s.jsx)(Y.Z.Item,{label:"Domain",name:"domain",rules:[{required:!0,message:"Please input your domain."}],children:(0,s.jsx)(R.Z,{prefix:(0,s.jsx)(M.Z,{}),placeholder:"Your domain"})}),(0,s.jsx)(Y.Z.Item,{children:(0,s.jsx)(y.ZP,{type:"primary",htmlType:"submit",icon:"success"===a?(0,s.jsx)(U.Z,{}):(0,s.jsx)(V.Z,{}),loading:"loading"===a,children:"Submit"})})]})},B=n(64814),X=n(54498);P().extend(X),P().extend(B);let D=[{title:"Project/app",width:70,dataIndex:"name",key:"name",fixed:(null==window?void 0:window.innerWidth)>=728?"left":void 0,render:(e,t)=>"project"===t.type?(0,s.jsx)(T(),{href:"/apps?project=".concat(t.slug),children:(0,s.jsx)("strong",{children:t.slug})}):"app"===t.type?(0,s.jsx)(s.Fragment,{children:t.slug}):e},{title:"Cluster",width:40,dataIndex:"cluster",key:"cluster",render:e=>(0,s.jsx)(y.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.cluster&&t.cluster.indexOf(e.toString())>-1||!0},{title:"Ready",width:20,dataIndex:"readyCount",key:"readyCount",render:(e,t)=>e&&t.replicas?(0,s.jsxs)(f.Z,{children:[e,"/",t.replicas]}):(0,s.jsx)(s.Fragment,{})},{title:"Last updated by",dataIndex:"owner",key:"owner",width:45,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.owner&&t.owner.indexOf(e.toString())>-1||!0,render:e=>(0,s.jsx)(s.Fragment,{children:null==e?void 0:e.name})},{title:"Last updated",dataIndex:"updatedAt",key:"updatedAt",width:40,render:e=>(0,s.jsx)(L.q,{date:e}),sorter:(e,t)=>P()(e.updatedAt).diff(P()(t.updatedAt))},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:40,render:e=>(0,s.jsx)(L.q,{date:e}),sorter:(e,t)=>P()(e.createdAt).diff(P()(t.createdAt))},{title:"Status",dataIndex:"status",fixed:(null==window?void 0:window.innerWidth)>=728?"right":void 0,key:"status",width:35,filters:[{text:"healthy",value:"healthy"},{text:"undeployed",value:"undeployed"},{text:"partial_healthy",value:"partial_healthy"},{text:"failed",value:"failed"},{text:"crashed",value:"crashed"},{text:"unknown",value:"unknown"}],filterSearch:!0,onFilter:(e,t)=>"project"===t.type||"app"===t.type||(console.log("record.status === value :>> ",t.status,e),!!t.status&&t.status===e),render:e=>(0,s.jsx)(f.Z,{color:"healthy"===e?"success":"undeployed"===e?"pink":"default",icon:(0,s.jsx)(r.Z,{className:"align-middle"}),children:e})},{title:"Action",key:"action",fixed:"right",width:(null==window?void 0:window.innerWidth)>=728?70:14,dataIndex:"action",render:(e,t)=>t.actions}],H=null!==(l=W.XL.tableConfig.defaultPageSize)&&void 0!==l?l:20,G=()=>{let e=(0,E.useRouter)(),[t,{setQuery:n}]=(0,O.o)(),[l,i]=(0,I.useState)(t.page?parseInt(t.page,10):1),{data:a}=(0,z.BT)({populate:"owner",pagination:{page:l,size:H}}),{list:r,pagination:f}=a||{},{total_pages:S,total_items:P}=f||{},[A,T]=(0,z.E_)(),[L,W]=(0,F._M)(),[M,U]=(0,F.Bm)(),[V,Y]=Z.Z.useModal(),R=(e,t)=>{console.log("env :>> ",t);let n=V.info({title:"Add new domains",icon:(0,s.jsx)(o.Z,{}),content:(0,s.jsx)(q,{app:e,env:t,next:()=>{n.destroy(),v.Z.success({message:"Congrats!",description:"New domain was added successfully!"})}}),footer:null,closable:!0,maskClosable:!0,onOk(){}})},B=(e,t,l)=>{n({lv1:"build",project:e,app:t,env:l})},X=(e,t,l)=>{n({lv1:"release",project:e,app:t,env:l})},G=(e,t,l)=>{n({lv1:"env_vars",project:e,app:t,env:l})},J=async e=>{let t=await A({_id:e});console.log("[deleteProject] result :>> ",t)},K=async e=>{let t=await L({_id:e});console.log("[deleteApp] result :>> ",t)},Q=async(e,t)=>{let n=await M({_id:e,env:t});console.log("[deleteEnvironment] result :>> ",n)};(0,I.useEffect)(()=>{if(!e.isReady)return;let n=t.page?parseInt(t.page.toString(),10):1;i(n)},[t.page]);let $=null==r?void 0:r.map(e=>({...e,type:"project",actions:(0,s.jsx)(w.Z.Compact,{children:(0,s.jsx)(k.Z,{title:"Are you sure to delete this project?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: all of the related apps & deployed environments will be also deleted."}),onConfirm:()=>J(e._id),okText:"Yes",cancelText:"No",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(d.Z,{})})})}),key:e._id,id:e._id,status:"N/A",children:e.apps?e.apps.map(t=>{var l;let i=Object.keys(null!==(l=t.deployEnvironment)&&void 0!==l?l:{}),a=i.map(l=>{var i;let a=(t.deployEnvironment||{})[l]||{},r={name:(0,s.jsx)(y.ZP,{type:"link",onClick:()=>n({lv1:"deploy_environment",project:e.slug,app:t.slug,env:l}),children:l.toUpperCase()}),key:"".concat(e.slug,"-").concat(t.slug,"-").concat(l),id:l,slug:l,projectSlug:e.slug,appSlug:t.slug,type:"prod"!==l?"env":"env-prod",status:"N/A",url:a.domains?"https://".concat(a.domains[0]):"",prereleaseUrl:"prod"===l?null!==(i=a.prereleaseUrl)&&void 0!==i?i:"https://".concat(t.slug,".prerelease.diginext.site").toLowerCase():"",...a};return r.actions="prod"===l?(0,s.jsxs)(w.Z.Compact,{children:[(0,s.jsx)(b.Z,{title:"Preview pre-release site",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(c.Z,{}),href:r.prereleaseUrl,target:"_blank",disabled:(0,N.isEmpty)(r.prereleaseUrl)})}),(0,s.jsx)(b.Z,{title:"View live website",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(u.Z,{}),href:r.url,target:"_blank",disabled:(0,N.isEmpty)(r.url)})}),(0,s.jsx)(C.Z,{menu:{items:[{label:"List of builds",key:"list-of-builds",icon:(0,s.jsx)(p.Z,{}),onClick:()=>B(r.projectSlug,r.appSlug,r.id)},{label:"List of releases",key:"list-of-releases",icon:(0,s.jsx)(x.Z,{}),onClick:()=>X(r.projectSlug,r.appSlug,l)},{label:"Modify environment variables",key:"env-vars",icon:(0,s.jsx)(j.Z,{}),onClick:()=>G(r.projectSlug,r.appSlug,l)},{label:"Add domains",key:"add-domains",icon:(0,s.jsx)(h.Z,{}),onClick:()=>R(r.appSlug,l)}]},children:(0,s.jsx)(y.ZP,{style:{padding:"4px 4px"},children:(0,s.jsx)(m.Z,{})})}),(0,s.jsx)(k.Z,{title:"Are you sure to delete this environment?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back (excepts re-deploying)."}),onConfirm:()=>Q(t._id,l),okText:"Yes",cancelText:"No",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(d.Z,{})})})]}):(0,s.jsxs)(w.Z.Compact,{children:[(0,s.jsx)(b.Z,{title:"View website",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(c.Z,{}),href:r.url,target:"_blank",disabled:(0,N.isEmpty)(r.url)})}),(0,s.jsx)(C.Z,{menu:{items:[{label:"List of builds",key:"list-of-builds",icon:(0,s.jsx)(p.Z,{}),onClick:()=>B(r.projectSlug,r.appSlug,r.id)},{label:"Modify environment variables",key:"env-vars",icon:(0,s.jsx)(j.Z,{}),onClick:()=>G(r.projectSlug,r.appSlug,l)},{label:"Add domains",key:"add-domains",icon:(0,s.jsx)(h.Z,{}),onClick:()=>R(r.appSlug,l)}]},children:(0,s.jsx)(y.ZP,{style:{padding:"4px 4px"},children:(0,s.jsx)(m.Z,{})})}),(0,s.jsx)(k.Z,{title:"Are you sure to delete this environment?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back (excepts re-deploying)."}),onConfirm:()=>Q(t._id,l),okText:"Yes",cancelText:"No",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(d.Z,{})})})]}),r});return{...t,key:t._id,id:t._id,status:"N/A",type:"app",children:a,actions:(0,s.jsxs)(w.Z.Compact,{children:[(0,s.jsx)(b.Z,{title:"Edit app",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(g.Z,{})})}),(0,s.jsx)(k.Z,{title:"Are you sure to delete this app?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: all of the related deployed environments will be also deleted."}),onConfirm:()=>K(t._id),okText:"Yes",cancelText:"No",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(d.Z,{})})})]})}}):[]})),ee=e=>{let{current:t}=e;n({page:null!=t?t:1})};return(0,s.jsxs)("div",{children:[(0,s.jsx)(_.Z,{columns:D,dataSource:$,scroll:{x:1600},sticky:{offsetHeader:48},pagination:{showSizeChanger:!0,current:l,defaultPageSize:H,total:P},onChange:ee}),Y]})};var J=n(97428),K=n(96861);let Q=()=>(0,s.jsx)(i.Wk,{children:(0,s.jsxs)(J.o,{meta:(0,s.jsx)(K.h,{title:"Projects",description:"Manage builds & deployments of your projects / apps "}),children:[(0,s.jsx)(a.V,{title:"Projects",breadcrumbs:[{name:"Workspace"}]}),(0,s.jsx)(G,{})]})});var $=Q}},function(e){e.O(0,[201,967,938,555,368,774,888,179],function(){return e(e.s=26860)}),_N_E=e.O()}]);