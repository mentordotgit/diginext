(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3479],{5433:function(e,t,n){"use strict";var a=n(2734),i=n(50959),r=n(72096),l=n(19589),o=n(89107);let d=null,s=e=>e(),u=[],c={},v=i.forwardRef((e,t)=>{let[n,a]=i.useState(),[l,d]=i.useState(),[s,u]=i.useState(),[v,m]=i.useState(),[f,h]=i.useState(),[x,p]=i.useState(),[g,y]=(0,o.k)({prefixCls:n,getContainer:()=>l,maxCount:s,rtl:v,top:f,bottom:x}),j=(0,r.w6)(),S=j.getRootPrefixCls(),k=j.getIconPrefixCls(),C=()=>{let{prefixCls:e,container:t,maxCount:n,rtl:i,top:l,bottom:o}=function(){let{prefixCls:e,getContainer:t,rtl:n,maxCount:a,top:i,bottom:l}=c,o=null!=e?e:(0,r.w6)().getPrefixCls("notification"),d=(null==t?void 0:t())||document.body;return{prefixCls:o,container:d,rtl:n,maxCount:a,top:i,bottom:l}}();a(e),d(t),u(n),m(i),h(l),p(o)};return i.useEffect(C,[]),i.useImperativeHandle(t,()=>{let e=Object.assign({},g);return Object.keys(e).forEach(t=>{e[t]=function(){return C(),g[t].apply(g,arguments)}}),{instance:e,sync:C}}),i.createElement(r.ZP,{prefixCls:S,iconPrefixCls:k},y)});function m(){if(!d){let e=document.createDocumentFragment(),t={fragment:e};d=t,s(()=>{(0,a.s)(i.createElement(v,{ref(e){let{instance:n,sync:a}=e||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=a,m())})}}),e)});return}d.instance&&(u.forEach(e=>{switch(e.type){case"open":s(()=>{d.instance.open(Object.assign(Object.assign({},c),e.config))});break;case"destroy":s(()=>{null==d||d.instance.destroy(e.key)})}}),u=[])}function f(e){u.push({type:"open",config:e}),m()}let h={open:f,destroy:function(e){u.push({type:"destroy",key:e}),m()},config:function(e){c=Object.assign(Object.assign({},c),e),s(()=>{var e;null===(e=null==d?void 0:d.sync)||void 0===e||e.call(d)})},useNotification:o.Z,_InternalPanelDoNotUseOrYouWillBeFired:l.ZP},x=h;["success","info","warning","error"].forEach(e=>{x[e]=t=>f(Object.assign(Object.assign({},t),{type:e}))}),t.Z=x},26574:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/monitor/pod",function(){return n(4148)}])},4148:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var a=n(11527),i=n(2154),r=n(13740),l=n(67918);n(5433);var o=n(36865),d=n(61663),s=n(58699),u=n(85273),c=n(46457),v=n(75921),m=n(74637),f=n.n(m),h=n(32699),x=n(47725),p=n.n(x),g=n(50959),y=n(73621),j=n(19005);let S=e=>(0,j.wz)(["monitor-pod","list"],"/api/v1/monitor/pods",e);var k=n(22820),C=n(58012),w=n(97591),N=n(49309),b=n(90400);let I=n(64814),P=n(54498);f().extend(P),f().extend(I);let Z=()=>{var e;let{responsive:t}=(0,b.Jl)(),{data:n,status:i}=(0,y.x7)(),{list:m=[]}=n||{},[x,j]=(0,g.useState)(0),[I,P]=(0,g.useState)(1),{data:Z,status:O}=S({filter:{clusterShortName:""}}),{list:E,pagination:_}=Z||{},{total_items:F}=_||{},[T]=(0,k.kZ)(),[A,{setQuery:M}]=(0,N.o)(),R=(e,t)=>{var n,a;let{current:i}=e;j(null!==(a=null===(n=t.currentDataSource)||void 0===n?void 0:n.length)&&void 0!==a?a:0),i&&P(i)};(0,g.useEffect)(()=>j(null!==(e=null==E?void 0:E.length)&&void 0!==e?e:0),[E]);let z=(null==E?void 0:E.map((e,t)=>({...e,key:"ns-".concat(t),actions:(0,a.jsx)(o.Z.Compact,{children:(0,a.jsx)(d.Z,{title:"Are you sure to delete this item?",description:(0,a.jsx)("span",{className:"text-red-500",children:"Caution: this is permanent and cannot be rolled back."}),okText:"Yes",cancelText:"No",children:(0,a.jsx)(s.ZP,{icon:(0,a.jsx)(r.Z,{})})})})})))||[],D=null==E?void 0:E.map(e=>{var t,n;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.name)||"",value:(null===(n=e.metadata)||void 0===n?void 0:n.name)||""}}).filter(e=>""!==e.value).filter((e,t,n)=>t===n.findIndex(t=>t.text===e.text)),W=null==E?void 0:E.map(e=>{var t,n;return{text:(null===(t=e.metadata)||void 0===t?void 0:t.namespace)||"",value:(null===(n=e.metadata)||void 0===n?void 0:n.namespace)||""}}).filter(e=>""!==e.value).filter((e,t,n)=>t===n.findIndex(t=>t.text===e.text)),U=null==E?void 0:E.map(e=>{var t,n,a;let i=(null===(t=e.status)||void 0===t?void 0:null===(n=t.containerStatuses)||void 0===n?void 0:n.find(e=>!1===e.ready))?"Crashed":null===(a=e.status)||void 0===a?void 0:a.phase;return{text:i||"",value:i||""}}).filter(e=>""!==e.value).filter((e,t,n)=>t===n.findIndex(t=>t.text===e.text)),X=[{title:"Name",width:60,dataIndex:"name",key:"name",fixed:(null==t?void 0:t.md)?"left":void 0,filterSearch:!0,render(e,t){var n;return null===(n=t.metadata)||void 0===n?void 0:n.name},filters:D,onFilter(e,t){var n,a;return null===(n=t.metadata)||void 0===n||!n.name||(null===(a=t.metadata)||void 0===a?void 0:a.name.indexOf(e.toString()))>-1}},{title:"Phase",dataIndex:"phase",key:"phase",width:18,render(e,t){var n,i,r;let l=(null===(n=t.status)||void 0===n?void 0:null===(i=n.containerStatuses)||void 0===i?void 0:i.find(e=>!1===e.ready))?"Crashed":null===(r=t.status)||void 0===r?void 0:r.phase;return(0,a.jsx)(u.Z,{color:"Running"===l||"Succeeded"===l?"success":"Crashed"===l||"Failed"===l?"error":"blue",children:l})},filterSearch:!0,filters:U,onFilter(e,t){var n,a,i;let r=(null===(n=t.status)||void 0===n?void 0:null===(a=n.containerStatuses)||void 0===a?void 0:a.find(e=>!1===e.ready))?"Crashed":null===(i=t.status)||void 0===i?void 0:i.phase;return e===r}},{title:"CPU",dataIndex:"cpu",key:"cpu",width:17,render:(e,t)=>(0,a.jsx)(u.Z,{children:t.cpu}),sorter(e,t){var n,a;return(0,h.toInteger)(null===(n=e.cpu)||void 0===n?void 0:n.replace("m",""))-(0,h.toInteger)(null===(a=t.cpu)||void 0===a?void 0:a.replace("m",""))}},{title:"MEM",dataIndex:"memory",key:"memory",width:17,render:(e,t)=>(0,a.jsx)(u.Z,{children:t.memory}),sorter(e,t){var n,a;return(0,h.toInteger)(null===(n=e.memory)||void 0===n?void 0:n.replace("Mi",""))-(0,h.toInteger)(null===(a=t.memory)||void 0===a?void 0:a.replace("Mi",""))}},{title:"Namespace",dataIndex:"namespace",key:"namespace",width:25,render(e,t){var n;return(0,a.jsx)(p(),{href:"#",children:null===(n=t.metadata)||void 0===n?void 0:n.namespace})},filterSearch:!0,filters:W,onFilter(e,t){var n,a;return null===(n=t.metadata)||void 0===n||!n.namespace||(null===(a=t.metadata)||void 0===a?void 0:a.namespace.indexOf(e.toString()))>-1}},{title:"Node",dataIndex:"node",key:"node",width:25,render(e,t){var n;return(0,a.jsx)(p(),{href:"#",children:null===(n=t.spec)||void 0===n?void 0:n.nodeName})}},{title:"Cluster",dataIndex:"clusterShortName",key:"clusterShortName",width:25,render:e=>(0,a.jsx)(s.ZP,{type:"link",style:{padding:0},children:e}),filterSearch:!0,filters:m.map(e=>({text:e.shortName||"",value:e.shortName||""})),onFilter:(e,t)=>!t.clusterShortName||t.clusterShortName.indexOf(e.toString())>-1},{title:"Created at",dataIndex:"createdAt",key:"createdAt",width:25,render(e,t){var n;return(0,a.jsx)(C.q,{date:null===(n=t.metadata)||void 0===n?void 0:n.creationTimestamp})},sorter(e,t){var n,a;return f()(null===(n=e.metadata)||void 0===n?void 0:n.creationTimestamp).diff(f()(null===(a=t.metadata)||void 0===a?void 0:a.creationTimestamp))}},{title:(0,a.jsx)(c.Z.Text,{className:"text-xs md:text-sm",children:"Action"}),key:"action",fixed:"right",width:(null==t?void 0:t.md)?22:18,render:(e,t)=>t.actions}],Y=(0,g.useRef)(null),q=(0,l.Z)(Y);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.V,{title:"Pods (".concat(x,")"),breadcrumbs:[{name:"Workspace"}],actions:[]}),(0,a.jsx)("div",{className:"h-full flex-auto overflow-hidden",ref:Y,children:(0,a.jsx)(v.Z,{sticky:!0,size:"small",loading:"loading"===O,columns:X,dataSource:z,scroll:{x:1e3,y:void 0!==(null==q?void 0:q.height)?q.height-100:void 0},pagination:{pageSize:200,position:["bottomCenter"]},onChange:(e,t,n,a)=>R(e,a)})})]})};var O=n(7021),E=n(24810);let _=()=>(0,a.jsx)(i.Wk,{children:(0,a.jsx)(O.o,{meta:(0,a.jsx)(E.h,{title:"Pods",description:"List of pods."}),children:(0,a.jsx)(Z,{})})});var F=_}},function(e){e.O(0,[8201,2967,5775,9780,9774,2888,179],function(){return e(e.s=26574)}),_N_E=e.O()}]);