(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{93394:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){return l(70662)}])},51234:function(e,t,l){"use strict";l.d(t,{BT:function(){return i},E_:function(){return a},Zz:function(){return s}});var n=l(22859);let s=e=>(0,n.wz)(["projects","list"],"/api/v1/project",e),i=e=>(0,n.wz)(["projects","list"],"/api/v1/project/with-apps",e),a=()=>(0,n.TV)(["projects","delete"],"/api/v1/project")},44064:function(e,t,l){"use strict";l.d(t,{D:function(){return x},V:function(){return j}});var n=l(11527),s=l(68834),i=l(8357),a=l(59850),r=l(75616),o=l(58699),d=l(70802),c=l(36865),u=l(7094),p=l(89335);function x(e){let{token:{colorTextHeading:t}}=r.Z.useToken(),{isDarkMode:l}=(0,p.vs)(),{color:s=l?"white":"black",value:i}=e;return(0,n.jsx)("h1",{className:"my-0 grow py-0 pt-2 text-xl font-bold",style:{color:s},children:i})}let j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,u.useRouter)(),{breadcrumbs:l=[],title:p="Page Title",actions:j=[(0,n.jsx)(o.ZP,{type:"default",icon:(0,n.jsx)(s.Z,{className:"align-middle"}),children:"Settings"},"workspace-setting-btn"),(0,n.jsx)(o.ZP,{type:"default",icon:(0,n.jsx)(i.Z,{className:"align-middle"})},"more-btn")]}=e,{token:{colorTextHeading:h}}=r.Z.useToken();return(0,n.jsxs)("div",{className:"border-b border-gray-300 px-6 py-4",children:[(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(d.Z.Item,{href:"".concat(t.basePath,"/"),children:(0,n.jsx)(a.Z,{})},"breadcrumb-home"),l.map((e,t)=>(0,n.jsxs)(d.Z.Item,{href:e.url,children:[e.icon,(0,n.jsx)("span",{children:e.name})]},"breadcrumb-".concat(t)))]}),(0,n.jsxs)("div",{className:" flex w-full flex-row",children:[(0,n.jsx)(x,{value:p}),(0,n.jsx)("div",{children:(0,n.jsx)(c.Z,{children:j})})]})]})}},70662:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return ee}});var n,s=l(11527),i=l(77665),a=l(44064),r=l(86218),o=l(4651),d=l(13740),c=l(10544),u=l(76332),p=l(34380),x=l(76068),j=l(14989),h=l(66396),m=l(84765),g=l(35396),y=l(58699),f=l(85273),Z=l(31620),v=l(99104),k=l(5433),b=l(36865),w=l(61663),C=l(88158),_=l(34153),S=l(40083),P=l(74637),N=l.n(P),A=l(32699),T=l(62973),E=l.n(T),I=l(7094),F=l(50959),z=l(50094),L=l(51234),O=l(59823),M=l(10340),R=l(65438),U=l(14198),V=l(28842),Y=l(10684),q=l(78177),B=l(95065),W=l(87175);let X=e=>{let{app:t,env:l,next:n}=e,[i,a]=(0,z.mv)({filter:{slug:t}}),r=async e=>{console.log("Success:",e);let t=[e.domain],s=await i({domains:t,env:l});console.log("response :>> ",s),n&&n()},o=e=>{console.log("Failed:",e)};return(0,s.jsxs)(B.Z,{name:"add-domains",style:{maxWidth:600},layout:"vertical",onFinish:r,onFinishFailed:o,autoComplete:"off",children:[(0,s.jsx)(B.Z.Item,{label:"Domain",name:"domain",rules:[{required:!0,message:"Please input your domain."}],children:(0,s.jsx)(W.Z,{prefix:(0,s.jsx)(V.Z,{}),placeholder:"Your domain"})}),(0,s.jsx)(B.Z.Item,{children:(0,s.jsx)(y.ZP,{type:"primary",htmlType:"submit",icon:"success"===a?(0,s.jsx)(Y.Z,{}):(0,s.jsx)(q.Z,{}),loading:"loading"===a,children:"Submit"})})]})},D=l(64814),H=l(54498);N().extend(H),N().extend(D);let J=null!==(n=U.XL.tableConfig.defaultPageSize)&&void 0!==n?n:20,G=()=>{let e=(0,I.useRouter)(),[t,{setQuery:l}]=(0,M.o)(),{responsive:n}=(0,R.Jl)(),i=[{title:"Project/app",width:(null==n?void 0:n.md)?60:40,dataIndex:"name",key:"name",fixed:(null==n?void 0:n.md)?"left":void 0,render:(e,t)=>"project"===t.type?(0,s.jsx)(E(),{href:"/apps?project=".concat(t.slug),children:(0,s.jsx)("strong",{children:t.slug})}):"app"===t.type?(0,s.jsx)(s.Fragment,{children:t.slug}):e},{title:"Cluster",width:40,dataIndex:"cluster",key:"cluster",render:e=>(0,s.jsx)(y.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.cluster&&t.cluster.indexOf(e.toString())>-1||!0},{title:"Ready",width:20,dataIndex:"readyCount",key:"readyCount",render:(e,t)=>e&&t.replicas?(0,s.jsxs)(f.Z,{children:[e,"/",t.replicas]}):(0,s.jsx)(s.Fragment,{})},{title:"Last updated by",dataIndex:"owner",key:"owner",width:45,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>t.owner&&t.owner.indexOf(e.toString())>-1||!0,render:e=>(0,s.jsx)(s.Fragment,{children:null==e?void 0:e.name})},{title:"Last updated",dataIndex:"updatedAt",key:"updatedAt",width:40,render:e=>(0,s.jsx)(O.q,{date:e}),sorter:(e,t)=>N()(e.updatedAt).diff(N()(t.updatedAt))},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:40,render:e=>(0,s.jsx)(O.q,{date:e}),sorter:(e,t)=>N()(e.createdAt).diff(N()(t.createdAt))},{title:"Status",dataIndex:"status",fixed:(null==n?void 0:n.md)?"right":void 0,key:"status",width:(null==n?void 0:n.md)?20:15,filters:[{text:"healthy",value:"healthy"},{text:"undeployed",value:"undeployed"},{text:"partial_healthy",value:"partial_healthy"},{text:"failed",value:"failed"},{text:"crashed",value:"crashed"},{text:"unknown",value:"unknown"}],filterSearch:!0,onFilter:(e,t)=>"project"===t.type||"app"===t.type||(console.log("record.status === value :>> ",t.status,e),!!t.status&&t.status===e),render:e=>(0,s.jsx)(f.Z,{color:"healthy"===e?"success":"undeployed"===e?"pink":"default",icon:(0,s.jsx)(r.Z,{className:"align-middle"}),children:e})},{title:(0,s.jsx)(Z.Z.Text,{className:"text-xs md:text-sm",children:"Action"}),key:"action",fixed:"right",width:(null==n?void 0:n.md)?18:13,dataIndex:"action",render:(e,t)=>t.actions}],[a,P]=(0,F.useState)(t.page?parseInt(t.page,10):1),{data:T,status:U}=(0,L.BT)({populate:"owner",pagination:{page:a,size:J}}),{list:V,pagination:Y}=T||{},{total_pages:q,total_items:B}=Y||{},[W,D]=(0,L.E_)(),[H,G]=(0,z._M)(),[K,Q]=(0,z.Bm)(),[$,ee]=v.Z.useModal(),et=(e,t)=>{console.log("env :>> ",t);let l=$.info({title:"Add new domains",icon:(0,s.jsx)(o.Z,{}),content:(0,s.jsx)(X,{app:e,env:t,next:()=>{l.destroy(),k.Z.success({message:"Congrats!",description:"New domain was added successfully!"})}}),footer:null,closable:!0,maskClosable:!0,onOk(){}})},el=(e,t,n)=>{l({lv1:"build",project:e,app:t})},en=(e,t,n)=>{l({lv1:"release",project:e,app:t,env:n})},es=(e,t,n)=>{l({lv1:"env_vars",project:e,app:t,env:n})},ei=async e=>{let t=await W({_id:e});console.log("[deleteProject] result :>> ",t)},ea=async e=>{let t=await H({_id:e});console.log("[deleteApp] result :>> ",t)},er=async(e,t)=>{let l=await K({_id:e,env:t});console.log("[deleteEnvironment] result :>> ",l)};(0,F.useEffect)(()=>{if(!e.isReady)return;let l=t.page?parseInt(t.page.toString(),10):1;P(l)},[t.page]);let eo=null==V?void 0:V.map(e=>({...e,type:"project",actions:(0,s.jsx)(b.Z.Compact,{children:(0,s.jsx)(w.Z,{title:"Are you sure to delete this project?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: all of the related apps & deployed environments will be also deleted."}),onConfirm:()=>ei(e._id),okText:"Yes",cancelText:"No",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(d.Z,{})})})}),key:e._id,id:e._id,status:"N/A",children:e.apps?e.apps.map(t=>{var n;let i=Object.keys(null!==(n=t.deployEnvironment)&&void 0!==n?n:{}),a=i.map(n=>{var i;let a=(t.deployEnvironment||{})[n]||{},r={name:(0,s.jsx)(y.ZP,{type:"link",onClick:()=>l({lv1:"deploy_environment",project:e.slug,app:t.slug,env:n}),children:n.toUpperCase()}),key:"".concat(e.slug,"-").concat(t.slug,"-").concat(n),id:n,slug:n,projectSlug:e.slug,appSlug:t.slug,type:"prod"!==n?"env":"env-prod",status:"N/A",url:a.domains?"https://".concat(a.domains[0]):"",prereleaseUrl:"prod"===n?null!==(i=a.prereleaseUrl)&&void 0!==i?i:"https://".concat(t.slug,".prerelease.diginext.site").toLowerCase():"",...a};return r.actions="prod"===n?(0,s.jsxs)(b.Z.Compact,{children:[(0,s.jsx)(C.Z,{title:"Preview pre-release site",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(c.Z,{}),href:r.prereleaseUrl,target:"_blank",disabled:(0,A.isEmpty)(r.prereleaseUrl)})}),(0,s.jsx)(C.Z,{title:"View live website",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(u.Z,{}),href:r.url,target:"_blank",disabled:(0,A.isEmpty)(r.url)})}),(0,s.jsx)(_.Z,{menu:{items:[{label:"List of builds",key:"list-of-builds",icon:(0,s.jsx)(p.Z,{}),onClick:()=>el(r.projectSlug,r.appSlug,r.id)},{label:"List of releases",key:"list-of-releases",icon:(0,s.jsx)(x.Z,{}),onClick:()=>en(r.projectSlug,r.appSlug,n)},{label:"Modify environment variables",key:"env-vars",icon:(0,s.jsx)(j.Z,{}),onClick:()=>es(r.projectSlug,r.appSlug,n)},{label:"Add domains",key:"add-domains",icon:(0,s.jsx)(h.Z,{}),onClick:()=>et(r.appSlug,n)}]},children:(0,s.jsx)(y.ZP,{style:{padding:"4px 4px"},children:(0,s.jsx)(m.Z,{})})}),(0,s.jsx)(w.Z,{title:"Are you sure to delete this environment?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back (excepts re-deploying)."}),onConfirm:()=>er(t._id,n),okText:"Yes",cancelText:"No",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(d.Z,{})})})]}):(0,s.jsxs)(b.Z.Compact,{children:[(0,s.jsx)(C.Z,{title:"View website",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(c.Z,{}),href:r.url,target:"_blank",disabled:(0,A.isEmpty)(r.url)})}),(0,s.jsx)(_.Z,{menu:{items:[{label:"List of builds",key:"list-of-builds",icon:(0,s.jsx)(p.Z,{}),onClick:()=>el(r.projectSlug,r.appSlug,r.id)},{label:"Modify environment variables",key:"env-vars",icon:(0,s.jsx)(j.Z,{}),onClick:()=>es(r.projectSlug,r.appSlug,n)},{label:"Add domains",key:"add-domains",icon:(0,s.jsx)(h.Z,{}),onClick:()=>et(r.appSlug,n)}]},children:(0,s.jsx)(y.ZP,{style:{padding:"4px 4px"},children:(0,s.jsx)(m.Z,{})})}),(0,s.jsx)(w.Z,{title:"Are you sure to delete this environment?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back (excepts re-deploying)."}),onConfirm:()=>er(t._id,n),okText:"Yes",cancelText:"No",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(d.Z,{})})})]}),r});return{...t,key:t._id,id:t._id,status:"N/A",type:"app",children:a,actions:(0,s.jsxs)(b.Z.Compact,{children:[(0,s.jsx)(C.Z,{title:"Edit app",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(g.Z,{})})}),(0,s.jsx)(w.Z,{title:"Are you sure to delete this app?",description:(0,s.jsx)("span",{className:"text-red-500",children:"Caution: all of the related deployed environments will be also deleted."}),onConfirm:()=>ea(t._id),okText:"Yes",cancelText:"No",children:(0,s.jsx)(y.ZP,{icon:(0,s.jsx)(d.Z,{})})})]})}}):[]})),ed=e=>{let{current:t}=e;l({page:null!=t?t:1})};return(0,s.jsxs)("div",{children:[(0,s.jsx)(S.Z,{loading:"loading"===U,columns:i,dataSource:eo,scroll:{x:1600},sticky:{offsetHeader:48},defaultExpandAllRows:!0,pagination:{showSizeChanger:!0,current:a,defaultPageSize:J,total:B},onChange:ed}),ee]})};var K=l(42789),Q=l(13179);let $=()=>(0,s.jsx)(i.Wk,{children:(0,s.jsxs)(K.o,{meta:(0,s.jsx)(Q.h,{title:"Projects",description:"Manage builds & deployments of your projects / apps "}),children:[(0,s.jsx)(a.V,{title:"Projects",breadcrumbs:[{name:"Workspace"}]}),(0,s.jsx)(G,{})]})});var ee=$}},function(e){e.O(0,[201,967,326,130,160,774,888,179],function(){return e(e.s=93394)}),_N_E=e.O()}]);