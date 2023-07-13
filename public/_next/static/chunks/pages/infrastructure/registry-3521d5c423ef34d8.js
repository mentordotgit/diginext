(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6067],{35396:function(e,t,n){"use strict";var i=n(30001),r=n(50959),a=n(62658),d=n(94590),o=function(e,t){return r.createElement(d.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:a.Z}))};o.displayName="EditOutlined",t.Z=r.forwardRef(o)},89675:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/infrastructure/registry",function(){return n(62145)}])},62145:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var i,r,a=n(11527),d=n(78177),o=n(58699),s=n(47164),l=n(2154),c=n(97591),u=n(35396),f=n(13740),x=n(30388),h=n(5433),g=n(36865),p=n(61663),m=n(5489),y=n(74637),w=n.n(y),v=n(50959),j=n(79402),k=n(58012),Z=n(49309),_=n(13557);let C=n(64814),N=n(54498);w().extend(N),w().extend(C);let b=[{title:"Name",width:70,dataIndex:"name",key:"name",fixed:"left",filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.name||t.name.indexOf(e.toString())>-1},{title:"Host",width:60,dataIndex:"host",key:"host",render:e=>(0,a.jsx)(o.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.host||t.host.indexOf(e.toString())>-1},{title:"Provider",dataIndex:"provider",key:"provider",width:30,render:(e,t)=>(0,a.jsx)(a.Fragment,{children:t.provider})},{title:"Created by",dataIndex:"owner",key:"owner",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.owner||(null!==(i=t.owner.name)&&void 0!==i?i:"").indexOf(e.toString())>-1,render:(e,t)=>(0,a.jsx)(a.Fragment,{children:t.owner.name})},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,a.jsx)(k.q,{date:e}),sorter:(e,t)=>w()(e.createdAt).diff(w()(t.createdAt))},{title:"Updated at",dataIndex:"updatedAt",key:"updatedAt",width:50,render:e=>(0,a.jsx)(k.q,{date:e}),sorter:(e,t)=>w()(e.updatedAt).diff(w()(t.updatedAt))},{title:"Action",key:"action",width:50,fixed:"right",render:(e,t)=>t.actions}],A=null!==(r=_.XL.tableConfig.defaultPageSize)&&void 0!==r?r:20,S=()=>{let[e,t]=(0,v.useState)(1),{data:n,status:i}=(0,j.fy)({populate:"owner",pagination:{page:e,size:A}}),{list:r,pagination:d}=n||{},{total_items:s}=d||{},[l]=(0,j.Y4)(),[c,{setQuery:y}]=(0,Z.o)(),w=async e=>{let t=await l({_id:e});(null==t?void 0:t.status)&&h.Z.success({message:"Item deleted successfully."})},k=(null==r?void 0:r.map(e=>({...e,actions:(0,a.jsxs)(g.Z.Compact,{children:[(0,a.jsx)(o.ZP,{icon:(0,a.jsx)(u.Z,{}),onClick:()=>y({lv1:"edit",type:"registry",registry_slug:e.slug})}),(0,a.jsx)(p.Z,{title:"Are you sure to delete this item?",description:(0,a.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),onConfirm:()=>w(e._id),okText:"Yes",cancelText:"No",children:(0,a.jsx)(o.ZP,{icon:(0,a.jsx)(f.Z,{})})})]})})))||[],_=e=>{let{current:n}=e;n&&t(n)},C=(0,v.useRef)(null),N=(0,x.Z)(C);return(0,a.jsx)("div",{className:"h-full flex-auto overflow-hidden",ref:C,children:(0,a.jsx)(m.Z,{sticky:!0,size:"small",loading:"loading"===i,columns:b,dataSource:k,scroll:{x:1e3,y:void 0!==(null==N?void 0:N.height)?N.height-140:void 0},pagination:{pageSize:A,total:s,position:["bottomCenter"]},onChange:_})})};var I=n(27481),P=n(24810);let E=()=>{(0,s.useRouter)();let[,{setQuery:e}]=(0,Z.o)();return(0,a.jsx)(l.Wk,{children:(0,a.jsxs)(I.o,{meta:(0,a.jsx)(P.h,{title:"Container Registries",description:"List of your container registries."}),children:[(0,a.jsx)(c.V,{title:"Container Registries",breadcrumbs:[{name:"Infrastructure"}],actions:[(0,a.jsx)(o.ZP,{type:"default",icon:(0,a.jsx)(d.Z,{className:"align-middle"}),onClick:()=>e({lv1:"new",type:"registry"}),children:"New"},"registry-new-btn")]}),(0,a.jsx)(S,{})]})})};var O=E}},function(e){e.O(0,[8201,2967,8543,5932,9774,2888,179],function(){return e(e.s=89675)}),_N_E=e.O()}]);