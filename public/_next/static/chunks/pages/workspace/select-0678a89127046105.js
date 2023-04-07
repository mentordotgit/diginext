(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{80904:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace/select",function(){return a(69306)}])},44643:function(e,t,a){"use strict";var s=a(11527),n=a(95954),i=a(50959),c=a(85276);let l=e=>{let t=(0,n.useRouter)(),{isDarkMode:a}=(0,c.vs)(),[l,o]=(0,i.useState)("".concat(t.basePath,"/assets/images/diginext_logo_white.svg"));return(0,i.useEffect)(()=>{o(a?"".concat(t.basePath,"/assets/images/diginext_logo_white.svg"):"".concat(t.basePath,"/assets/images/diginext_logo.svg"))},[a]),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"mx-auto my-5 w-64 text-center ".concat(e.className),children:(0,s.jsx)("img",{src:l,alt:"Diginext Logo"})}),e.useTagline&&(0,s.jsx)("div",{className:"mb-6",children:"Build faster. Deploy easier. More flexible."})]})};t.Z=l},69306:function(e,t,a){"use strict";a.r(t);var s=a(11527),n=a(17434),i=a(31326),c=a(95568),l=a(20193),o=a(94984),r=a(78007),u=a(82129),d=a(95954),h=a.n(d),p=a(50959),x=a(66109),m=a(49113),g=a(66830),j=a(76780),v=a(44643),w=a(95967),f=a(96861),_=a(74883);let{Title:k}=n.Z,b=()=>{var e,t;let a=(0,d.useRouter)(),[n,b]=(0,p.useState)(""),N=e=>b(e.currentTarget.value),[P,{refetch:Z}]=(0,x.aC)(),[y,C]=(0,g.av)(),[E]=(0,m.Hc)(),{workspaces:S=[]}=P||{},I=async e=>{let t=await E({userId:P._id,workspace:e});if(null==t?void 0:t.status){let e=new URL(window.location.href),t=e.searchParams.get("redirect_url")||window.location.origin;a.push(t)}},L=async e=>{console.log("Submit:",e);let t=await y({...e});if(null==t?void 0:t.status){let e=null==t?void 0:t.data;await Z(),h().push((0,_.r8)()?"".concat(_.De.NEXT_PUBLIC_BASE_URL):"https://".concat(null==e?void 0:e.slug,".").concat(_.De.NEXT_PUBLIC_DOMAIN))}},T=e=>{console.log("Failed:",e)},X=e=>{console.log("workspace > id :>> ",e),I(e)};return(0,s.jsx)(x.Wk,{children:(0,s.jsx)(w.o,{useSidebar:!1,meta:(0,s.jsx)(f.h,{title:"Select/Create a Workspace",description:"Select or create your workspace."}),children:(0,s.jsxs)(j.Z,{className:"text-center",children:[(0,s.jsx)(v.Z,{}),S.length>0&&(0,s.jsxs)("div",{children:[(0,s.jsx)(k,{level:3,children:"Select a workspace:"}),(0,s.jsx)("p",{children:"Choose a workspace which you want to interact with:"}),(0,s.jsx)(i.Z,{name:"select",children:(0,s.jsx)(i.Z.Item,{name:"workspace",children:(0,s.jsx)(c.Z,{size:"large",value:"".concat(null===(e=S[0])||void 0===e?void 0:e.name," (").concat(null===(t=S[0])||void 0===t?void 0:t.slug,")"),onChange:X,options:null==S?void 0:S.map(e=>({label:"".concat(e.name," (").concat(e.slug,")"),value:e._id}))})})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(k,{level:3,children:"Create a new workspace:"}),(0,s.jsx)(i.Z,{name:"create",onFinish:L,onFinishFailed:T,autoComplete:"off",children:(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(i.Z.Item,{name:"public",valuePropName:"public",children:(0,s.jsx)(o.Z,{defaultChecked:!0,children:"Public"})}),(0,s.jsxs)(l.Z.Compact,{className:"w-full",children:[(0,s.jsx)(i.Z.Item,{name:"name",style:{flex:"auto"},rules:[{required:!0,message:"Please input your workspace name!"}],children:(0,s.jsx)(r.Z,{className:"text-center text-lg",placeholder:"Enter your workspace name",onChange:N})}),(0,s.jsx)(i.Z.Item,{children:(0,s.jsx)(u.ZP,{type:"primary",htmlType:"submit",disabled:""===n,className:"h-[38px]",children:"GO!"})})]})]})})]})]})})})};t.default=b},96861:function(e,t,a){"use strict";a.d(t,{h:function(){return r}});var s=a(11527),n=a(67559),i=a.n(n),c=a(95954),l=a(68449),o=a(74883);let r=e=>{let t=(0,c.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,s.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,s.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,s.jsx)(l.PB,{title:"".concat(e.title," | ").concat(o.XL.site_name),description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o.XL.locale,site_name:o.XL.site_name}}),(0,s.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",rel:"stylesheet"})]})}}},function(e){e.O(0,[201,967,494,522,774,888,179],function(){return e(e.s=80904)}),_N_E=e.O()}]);