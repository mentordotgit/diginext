(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4855],{35396:function(e,t,n){"use strict";var i=n(30001),o=n(50959),a=n(62658),d=n(94590),r=function(e,t){return o.createElement(d.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:a.Z}))};r.displayName="EditOutlined",t.Z=o.forwardRef(r)},59620:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace/roles",function(){return n(4147)}])},4147:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var i,o=n(11527),a=n(2154),d=n(97591),r=n(35396),l=n(13740),s=n(30388),c=n(5433),u=n(36865),f=n(58699),x=n(61663),h=n(5489),m=n(74637),p=n.n(m),w=n(50959),v=n(7620),g=n(58012),k=n(49309),j=n(90400),y=n(13557);let Z=n(64814),_=n(54498);p().extend(_),p().extend(Z);let C=null!==(i=y.XL.tableConfig.defaultPageSize)&&void 0!==i?i:20,N=()=>{var e;let{responsive:t}=(0,j.Jl)(),n=[{title:"Name",width:40,dataIndex:"name",key:"name",fixed:(null==t?void 0:t.md)?"left":void 0,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(e,t)=>!t.name||t.name.indexOf(e.toString())>-1},{title:"Created by",dataIndex:"owner",key:"owner",width:50,filterSearch:!0,filters:[{text:"goon",value:"goon"}],onFilter:(t,n)=>!n.owner||(null!==(e=n.owner.name)&&void 0!==e?e:"").indexOf(t.toString())>-1,render:(e,t)=>(0,o.jsx)(o.Fragment,{children:t.owner?t.owner.name:"System"})},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:50,render:e=>(0,o.jsx)(g.q,{date:e}),sorter:(e,t)=>p()(e.createdAt).diff(p()(t.createdAt))},{title:"Updated at",dataIndex:"updatedAt",key:"updatedAt",width:50,render:e=>(0,o.jsx)(g.q,{date:e}),sorter:(e,t)=>p()(e.updatedAt).diff(p()(t.updatedAt))},{title:"Action",key:"action",width:(null==t?void 0:t.md)?26:18,fixed:"right",render:(e,t)=>t.actions}],[i,a]=(0,w.useState)(1),{data:d,status:m}=(0,v.bd)({populate:"owner,workspace",pagination:{page:i,size:C}}),{list:y,pagination:Z}=d||{},{total_items:_}=Z||{},[N]=(0,v.CN)(),[b,{setQuery:A}]=(0,k.o)(),S=e=>{let{current:t}=e;t&&a(t)},E=async e=>{let t=await N({_id:e});(null==t?void 0:t.status)&&c.Z.success({message:"Item deleted successfully."})},I=(null==y?void 0:y.map((e,t)=>({...e,actions:(0,o.jsxs)(u.Z.Compact,{children:[(0,o.jsx)(f.ZP,{icon:(0,o.jsx)(r.Z,{}),onClick:()=>A({lv1:"edit",type:"role",role:e.slug})}),(0,o.jsx)(x.Z,{title:"Are you sure to delete this item?",description:(0,o.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),onConfirm:()=>E(e._id),okText:"Yes",cancelText:"No",children:(0,o.jsx)(f.ZP,{icon:(0,o.jsx)(l.Z,{})})})]})})))||[],O=(0,w.useRef)(null),P=(0,s.Z)(O);return(0,o.jsx)("div",{className:"h-full flex-auto overflow-hidden",ref:O,children:(0,o.jsx)(h.Z,{sticky:!0,size:"small",loading:"loading"===m,columns:n,dataSource:I,scroll:{x:1e3,y:void 0!==(null==P?void 0:P.height)?P.height-140:void 0},pagination:{pageSize:C,total:_,position:["bottomCenter"]},onChange:S})})};var b=n(27481),A=n(24810);let S=()=>(0,o.jsx)(a.Wk,{children:(0,o.jsxs)(b.o,{meta:(0,o.jsx)(A.h,{title:"Roles",description:"List of roles in the workspace."}),children:[(0,o.jsx)(d.V,{title:"Roles",breadcrumbs:[{name:"Workspace"}]}),(0,o.jsx)(N,{})]})});var E=S}},function(e){e.O(0,[8201,2967,8543,5932,9774,2888,179],function(){return e(e.s=59620)}),_N_E=e.O()}]);