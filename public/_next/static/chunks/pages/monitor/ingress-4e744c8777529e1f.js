(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{69423:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/monitor/ingress",function(){return a(69267)}])},69267:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var n=a(11527),i=a(2154),r=a(13740),l=a(30388);a(5433);var d=a(36865),o=a(61663),s=a(58699),u=a(46457),c=a(5489),m=a(74637),v=a.n(m),x=a(47725),h=a.n(x),f=a(50959),p=a(73621),g=a(19005);let N=e=>(0,g.wz)(["monitor-ingress","list"],"/api/v1/monitor/ingresses",e);var j=a(22820),k=a(58012),S=a(97591),w=a(49309),_=a(90400);let y=a(64814),Z=a(54498);v().extend(Z),v().extend(y);let C=()=>{var e;let{responsive:t}=(0,_.Jl)(),{data:a,status:i}=(0,p.x7)(),{list:m=[]}=a||{},[x,g]=(0,f.useState)(0),[y,Z]=(0,f.useState)(1),{data:C,status:I}=N({filter:{clusterShortName:""}}),{list:T,pagination:b}=C||{},{total_items:E}=b||{},[O]=(0,j.kZ)(),[A,{setQuery:F}]=(0,w.o)(),P=(e,t)=>{var a,n;let{current:i}=e;g(null!==(n=null===(a=t.currentDataSource)||void 0===a?void 0:a.length)&&void 0!==n?n:0),i&&Z(i)};(0,f.useEffect)(()=>g(null!==(e=null==T?void 0:T.length)&&void 0!==e?e:0),[T]);let z=(null==T?void 0:T.map((e,t)=>({...e,key:"ns-".concat(t),actions:(0,n.jsx)(d.Z.Compact,{children:(0,n.jsx)(o.Z,{title:"Are you sure to delete this item?",description:(0,n.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),okText:"Yes",cancelText:"No",children:(0,n.jsx)(s.ZP,{icon:(0,n.jsx)(r.Z,{})})})})})))||[],W=null==T?void 0:T.map(e=>{var t,a;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.name)||"",value:(null===(a=e.metadata)||void 0===a?void 0:a.name)||""}}).filter(e=>""!==e.value).filter((e,t,a)=>t===a.findIndex(t=>t.text===e.text)),X=null==T?void 0:T.map(e=>{var t,a;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.namespace)||"",value:(null===(a=e.metadata)||void 0===a?void 0:a.namespace)||""}}).filter(e=>""!==e.value).filter((e,t,a)=>t===a.findIndex(t=>t.text===e.text)),q=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:(null==t?void 0:t.md)?"left":void 0,filterSearch:!0,render(e,t){var a;return null===(a=t.metadata)||void 0===a?void 0:a.name},filters:W,onFilter(e,t){var a,n;return null===(a=t.metadata)||void 0===a||!a.name||(null===(n=t.metadata)||void 0===n?void 0:n.name.indexOf(e.toString()))>-1}},{title:"Namespace",dataIndex:"namespace",key:"namespace",width:30,render(e,t){var a;return(0,n.jsx)(h(),{href:"#",children:null===(a=t.metadata)||void 0===a?void 0:a.namespace})},filterSearch:!0,filters:X,onFilter(e,t){var a,n;return null===(a=t.metadata)||void 0===a||!a.namespace||(null===(n=t.metadata)||void 0===n?void 0:n.namespace.indexOf(e.toString()))>-1}},{title:"Cluster",dataIndex:"clusterShortName",key:"clusterShortName",width:30,render:e=>(0,n.jsx)(s.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:m.map(e=>({text:e.shortName||"",value:e.shortName||""})),onFilter:(e,t)=>!t.clusterShortName||t.clusterShortName.indexOf(e.toString())>-1},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:30,render(e,t){var a;return(0,n.jsx)(k.q,{date:null===(a=t.metadata)||void 0===a?void 0:a.creationTimestamp})},sorter(e,t){var a,n;return v()(null===(a=e.metadata)||void 0===a?void 0:a.creationTimestamp).diff(v()(null===(n=t.metadata)||void 0===n?void 0:n.creationTimestamp))}},{title:(0,n.jsx)(u.Z.Text,{className:"text-xs md:text-sm",children:"Action"}),key:"action",fixed:"right",width:(null==t?void 0:t.md)?30:26,render:(e,t)=>t.actions}],D=(0,f.useRef)(null),J=(0,l.Z)(D);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(S.V,{title:"Ingresses (".concat(x,")"),breadcrumbs:[{name:"Workspace"}],actions:[]}),(0,n.jsx)("div",{className:"h-full flex-auto overflow-hidden",ref:D,children:(0,n.jsx)(c.Z,{sticky:!0,size:"small",loading:"loading"===I,columns:q,dataSource:z,scroll:{x:1e3,y:void 0!==(null==J?void 0:J.height)?J.height-140:void 0},pagination:{pageSize:200,position:["bottomCenter"]},onChange:(e,t,a,n)=>P(e,n)})})]})};var I=a(27481),T=a(24810);let b=()=>(0,n.jsx)(i.Wk,{children:(0,n.jsx)(I.o,{meta:(0,n.jsx)(T.h,{title:"Ingresses",description:"List of ingresses."}),children:(0,n.jsx)(C,{})})});var E=b}},function(e){e.O(0,[8201,2967,8543,5932,9774,2888,179],function(){return e(e.s=69423)}),_N_E=e.O()}]);