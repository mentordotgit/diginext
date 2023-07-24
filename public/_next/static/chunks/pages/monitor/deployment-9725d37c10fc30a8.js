(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5722],{10757:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/monitor/deployment",function(){return l(25291)}])},25291:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return F}});var a=l(11527),i=l(2154),n=l(13740),r=l(30388),d=l(36865),o=l(61663),s=l(58699),u=l(85273),v=l(88158),c=l(46457),m=l(5489),p=l(74637),x=l.n(p),f=l(32699),h=l(47725),g=l.n(h),y=l(50959),j=l(73621),w=l(19005);let k=e=>(0,w.wz)(["monitor-deployment","list"],"/api/v1/monitor/deployments",e),I=e=>(0,w.TV)(["monitor-deployment","delete"],"/api/v1/monitor/deployments",e);var S=l(58012),A=l(97591),Z=l(90400);let C=l(64814),R=l(54498);x().extend(R),x().extend(C);let _=()=>{var e,t;let{responsive:l}=(0,Z.Jl)(),{data:i,status:p}=(0,j.x7)(),{list:h=[]}=i||{},[w,C]=(0,y.useState)(0),[R,_]=(0,y.useState)(1),{data:b,status:N}=k({filter:{cluster:""}}),{list:T,pagination:F}=b||{},{total_items:E=null!==(e=null==T?void 0:T.length)&&void 0!==e?e:0}=F||{},[M,P]=I(),O=(e,t)=>{var l,a;let{current:i}=e;C(null!==(a=null===(l=t.currentDataSource)||void 0===l?void 0:l.length)&&void 0!==a?a:0),i&&_(i)};(0,y.useEffect)(()=>C(null!==(t=null==T?void 0:T.length)&&void 0!==t?t:0),[T]);let z=(null==T?void 0:T.map((e,t)=>({...e,key:"ns-".concat(t),actions:(0,a.jsx)(d.Z.Compact,{children:(0,a.jsx)(o.Z,{title:"Are you sure to delete this item?",description:(0,a.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),onConfirm(){var t,l;return M({cluster:e.cluster,namespace:null===(t=e.metadata)||void 0===t?void 0:t.namespace,name:null===(l=e.metadata)||void 0===l?void 0:l.name})},okText:"Yes",cancelText:"No",children:(0,a.jsx)(s.ZP,{icon:(0,a.jsx)(n.Z,{})})})})})))||[],D=null==T?void 0:T.map(e=>{var t,l;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.name)||"",value:(null===(l=e.metadata)||void 0===l?void 0:l.name)||""}}).filter(e=>""!==e.value).filter((e,t,l)=>t===l.findIndex(t=>t.text===e.text)),V=null==T?void 0:T.map(e=>{var t,l;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.namespace)||"",value:(null===(l=e.metadata)||void 0===l?void 0:l.namespace)||""}}).filter(e=>""!==e.value).filter((e,t,l)=>t===l.findIndex(t=>t.text===e.text)),W=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:(null==l?void 0:l.md)?"left":void 0,filterSearch:!0,render(e,t){var l;return null===(l=t.metadata)||void 0===l?void 0:l.name},filters:D,onFilter(e,t){var l,a;return null===(l=t.metadata)||void 0===l||!l.name||(null===(a=t.metadata)||void 0===a?void 0:a.name.indexOf(e.toString()))>-1}},{title:"Pods",dataIndex:"pods",key:"pods",width:15,render(e,t){var l,i,n,r,d,o,s,v,c,m;let p=null!==(c=null!==(o=null===(l=t.status)||void 0===l?void 0:l.availableReplicas)&&void 0!==o?o:null===(i=t.status)||void 0===i?void 0:i.readyReplicas)&&void 0!==c?c:(null!==(s=null===(n=t.status)||void 0===n?void 0:n.replicas)&&void 0!==s?s:0)-(null!==(v=null===(r=t.status)||void 0===r?void 0:r.unavailableReplicas)&&void 0!==v?v:0),x=null!==(m=null===(d=t.status)||void 0===d?void 0:d.replicas)&&void 0!==m?m:0;return(0,a.jsxs)(u.Z,{color:0===p?"error":p<x?"warning":"default",children:[p,"/",x]})},filterSearch:!0,filters:[{text:"Ready",value:"ready"},{text:"Partial",value:"partial"},{text:"Failed",value:"failed"}],onFilter(e,t){var l,a,i,n,r,d,o,s,u,v;let c=null!==(u=null!==(d=null===(l=t.status)||void 0===l?void 0:l.availableReplicas)&&void 0!==d?d:null===(a=t.status)||void 0===a?void 0:a.readyReplicas)&&void 0!==u?u:(null!==(o=null===(i=t.status)||void 0===i?void 0:i.replicas)&&void 0!==o?o:0)-(null!==(s=null===(n=t.status)||void 0===n?void 0:n.unavailableReplicas)&&void 0!==s?s:0),m=null!==(v=null===(r=t.status)||void 0===r?void 0:r.replicas)&&void 0!==v?v:0;return"failed"===e?0===c:"partial"===e?c>0&&c<m:c===m}},{title:"CPU",dataIndex:"cpu",key:"cpu",width:17,render(e,t){var l,i;let n=(0,f.toInteger)(null===(l=t.cpuAvg)||void 0===l?void 0:l.replace("m",""))||0,r=(0,f.toInteger)(null===(i=t.cpuCapacity)||void 0===i?void 0:i.replace("m",""))||0;return 0===r?(0,a.jsx)(v.Z,{overlay:(0,a.jsxs)(a.Fragment,{children:["Recommend: ",t.cpuRecommend]}),children:(0,a.jsx)(u.Z,{color:0===r?"default":n>.8*r?"warning":"success",children:t.cpuAvg})}):(0,a.jsx)(u.Z,{color:0===r?"default":n>.8*r?"warning":"success",children:t.cpuAvg})},sorter(e,t){var l,a;return(0,f.toInteger)(null===(l=e.cpuAvg)||void 0===l?void 0:l.replace("m",""))-(0,f.toInteger)(null===(a=t.cpuAvg)||void 0===a?void 0:a.replace("m",""))}},{title:"MEM",dataIndex:"memory",key:"memory",width:17,render(e,t){var l,i;let n=(0,f.toInteger)(null===(l=t.memoryAvg)||void 0===l?void 0:l.replace("Mi",""))||0,r=(0,f.toInteger)(null===(i=t.memoryCapacity)||void 0===i?void 0:i.replace("Mi",""))||0;return 0===r?(0,a.jsx)(v.Z,{overlay:(0,a.jsxs)(a.Fragment,{children:["Recommend: ",t.memoryRecommend]}),children:(0,a.jsx)(u.Z,{color:0===r?"default":n>.8*r?"warning":"success",children:t.memoryAvg})}):(0,a.jsx)(u.Z,{color:0===r?"default":n>.8*r?"warning":"success",children:t.memoryAvg})},sorter(e,t){var l,a;return(0,f.toInteger)(null===(l=e.memoryAvg)||void 0===l?void 0:l.replace("Mi",""))-(0,f.toInteger)(null===(a=t.memoryAvg)||void 0===a?void 0:a.replace("Mi",""))}},{title:"Namespace",dataIndex:"namespace",key:"namespace",width:30,render(e,t){var l;return(0,a.jsx)(g(),{href:"#",children:null===(l=t.metadata)||void 0===l?void 0:l.namespace})},filterSearch:!0,filters:V,onFilter(e,t){var l,a;return null===(l=t.metadata)||void 0===l||!l.namespace||(null===(a=t.metadata)||void 0===a?void 0:a.namespace.indexOf(e.toString()))>-1}},{title:"Cluster",dataIndex:"clusterSlug",key:"clusterSlug",width:30,render:e=>(0,a.jsx)(g(),{href:"#",children:e}),filterSearch:!0,filters:h.map(e=>({text:e.slug||"",value:e.slug||""})),onFilter:(e,t)=>!t.clusterSlug||t.clusterSlug.indexOf(e.toString())>-1},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:30,render(e,t){var l;return(0,a.jsx)(S.q,{date:null===(l=t.metadata)||void 0===l?void 0:l.creationTimestamp})},sorter(e,t){var l,a;return x()(null===(l=e.metadata)||void 0===l?void 0:l.creationTimestamp).diff(x()(null===(a=t.metadata)||void 0===a?void 0:a.creationTimestamp))}},{title:(0,a.jsx)(c.Z.Text,{className:"text-xs md:text-sm",children:"Action"}),key:"action",fixed:"right",width:(null==l||l.md,12),render:(e,t)=>t.actions}],X=(0,y.useRef)(null),q=(0,r.Z)(X);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A.V,{title:"Deployments (".concat(w,")"),breadcrumbs:[{name:"Workspace"}],actions:[]}),(0,a.jsx)("div",{className:"flex-auto overflow-auto",ref:X,children:(0,a.jsx)(m.Z,{sticky:!0,loading:"loading"===N,size:"small",columns:W,dataSource:z,scroll:{x:1e3,y:void 0!==(null==q?void 0:q.height)?q.height-140:void 0},pagination:{pageSize:200,position:["bottomCenter"]},onChange:(e,t,l,a)=>O(e,a)})})]})};var b=l(33923),N=l(24810);let T=()=>(0,a.jsx)(i.Wk,{children:(0,a.jsx)(b.o,{meta:(0,a.jsx)(N.h,{title:"Deployments",description:"List of deployments."}),children:(0,a.jsx)(_,{})})});var F=T}},function(e){e.O(0,[8201,2967,9033,1079,9774,2888,179],function(){return e(e.s=10757)}),_N_E=e.O()}]);