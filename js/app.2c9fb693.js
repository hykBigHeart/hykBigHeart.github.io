(function(e){function t(t){for(var o,a,i=t[0],u=t[1],s=t[2],d=0,l=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);h&&h(t);while(l.length)l.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(o=!1)}o&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={app:0},c={app:0},r=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-045cb7a0":"04071d02","chunk-0624ebc7":"55b4aeb0","chunk-1812fcd4":"510792e0","chunk-1eb6bc3a":"6bb2e1ec","chunk-30136124":"f2d94adb","chunk-37523e12":"9c619504","chunk-37859af2":"9f3362fe","chunk-3ac97d12":"a1ccdac8","chunk-0c22db87":"79664297","chunk-41f5d2b4":"c40ec885","chunk-42321552":"83a0e3af","chunk-4bd1870a":"fe1ecf99","chunk-67c605d9":"cb42881b","chunk-7a8d8be1":"e1ca3ba7","chunk-7c1dfc10":"fef95418","chunk-c7b7dfee":"30a5dbeb","chunk-2049c7a0":"7a46b471","chunk-61672c49":"bb1a1e8c","chunk-729374a8":"c47d3316","chunk-e9d078ea":"6b7d05cb"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-045cb7a0":1,"chunk-0624ebc7":1,"chunk-1812fcd4":1,"chunk-1eb6bc3a":1,"chunk-30136124":1,"chunk-37523e12":1,"chunk-37859af2":1,"chunk-3ac97d12":1,"chunk-0c22db87":1,"chunk-41f5d2b4":1,"chunk-42321552":1,"chunk-4bd1870a":1,"chunk-67c605d9":1,"chunk-7a8d8be1":1,"chunk-7c1dfc10":1,"chunk-c7b7dfee":1,"chunk-2049c7a0":1,"chunk-61672c49":1,"chunk-729374a8":1,"chunk-e9d078ea":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-045cb7a0":"60d53e4e","chunk-0624ebc7":"f5d6c00e","chunk-1812fcd4":"ef84d5f4","chunk-1eb6bc3a":"60d47b37","chunk-30136124":"66584342","chunk-37523e12":"c0eeb11f","chunk-37859af2":"0c7b07f7","chunk-3ac97d12":"8e3002cf","chunk-0c22db87":"711b515a","chunk-41f5d2b4":"a2f8ca52","chunk-42321552":"88999040","chunk-4bd1870a":"58c11e66","chunk-67c605d9":"85fd8d3d","chunk-7a8d8be1":"791f0be7","chunk-7c1dfc10":"3cbdda3e","chunk-c7b7dfee":"9522ba33","chunk-2049c7a0":"3a9b5f6f","chunk-61672c49":"6d11277e","chunk-729374a8":"76f05c42","chunk-e9d078ea":"5495f5fa"}[e]+".css",c=u.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===c))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===o||d===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],h.parentNode.removeChild(h),n(r)},h.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var h=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},1462:function(e,t,n){e.exports=n.p+"img/workbench_choose.4a13f1cd.svg"},"1b51":function(e,t,n){"use strict";n("e372")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],r={created(){document.addEventListener("plusready",this.onPlusReady,!1)},methods:{onPlusReady(){const e=plus.barcode.create("barcode",[plus.barcode.QR],{top:"-9999",left:"0",width:"100%",height:"500px",position:"static"});plus.webview.currentWebview().append(e)}}},i=r,u=(n("d66b"),n("2877")),s=Object(u["a"])(i,a,c,!1,null,null,null),d=s.exports,l=n("8c4f"),h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("router-view",{attrs:{dropdownTitle:e.$route.query.title,dropdownValue:e.$route.query.value,dropdownoption:e.$route.query.option}}),t("div",{attrs:{id:"tabbar"}},[t("van-tabbar",{attrs:{route:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[t("van-tabbar-item",{staticStyle:{"text-align":"center"},attrs:{replace:"",to:"/workbench"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("img",{staticStyle:{"margin-bottom":"0.5rem"},attrs:{src:n.active?e.workbench_choose:e.workbench}}),t("div",[e._v("工作台")])]}}])}),t("van-tabbar-item",{staticStyle:{"text-align":"center"},attrs:{replace:"",to:"/wait-dealt",badge:e.waitDealtCount<=0?"":e.waitDealtCount},scopedSlots:e._u([{key:"default",fn:function(n){return[t("img",{staticStyle:{"margin-bottom":"0.5rem"},attrs:{src:n.active?e.agency_choose:e.agency}}),t("div",[e._v("待办")])]}}])}),t("van-tabbar-item",{staticStyle:{"text-align":"center"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("img",{staticStyle:{"margin-bottom":"0.5rem"},attrs:{src:n.active?e.meter_choose:e.meter}}),t("div",[e._v("仪表盘")])]}}])}),t("van-tabbar-item",{staticStyle:{"text-align":"center"},attrs:{replace:"",to:"/mine"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("img",{staticStyle:{"margin-bottom":"0.5rem"},attrs:{src:n.active?e.mine_choose:e.mine}}),t("div",[e._v("我的")])]}}])})],1)],1)],1)},p=[],b={name:"Home",data(){return{active:0,agency:n("cf4b"),agency_choose:n("fc9a"),meter:n("9fa4"),meter_choose:n("e944"),mine:n("66ef"),mine_choose:n("f0f6"),workbench:n("6d7a"),workbench_choose:n("1462"),waitDealtCount:0}},methods:{onChange(e){switch(this.active=e,e){case 0:this.$router.push({name:"Workbench"});break;case 1:this.$router.push({name:"WaitDealt"});break;case 2:break;case 3:this.$router.push({name:"mine"});break;default:break}},getWaitDealtCount(){this.$getHttp(`${this.$baseUrl}/OS-PM/versions/${this.$store.getters.getVersionId?this.$store.getters.getVersionId:window.localStorage.getItem("versionId")}/backlogsCount`).then(e=>{console.log("Home主页",e),200==e.status&&(this.waitDealtCount=0,Object.keys(e.data).forEach(t=>{this.waitDealtCount=this.waitDealtCount+e.data[t]}))})}},mounted(){console.log("home",this.$route.query.title,this.$route.query.value),this.getWaitDealtCount(),this.$bus.$on("handleVersion",()=>{this.getWaitDealtCount()})}},f=b,m=(n("1b51"),Object(u["a"])(f,h,p,!1,null,"7863ec4c",null)),g=m.exports;o["a"].use(l["a"]);const k=[{path:"/",redirect:"/loadingScreen"},{path:"/update",name:"update",component:()=>n.e("chunk-37523e12").then(n.bind(null,"8091"))},{path:"/Home",name:"Home",redirect:"/workbench",component:g,children:[{path:"/workbench",name:"Workbench",component:()=>n.e("chunk-67c605d9").then(n.bind(null,"33b5")),redirect:"/WorkTable",children:[{path:"/WorkTable",name:"WorkTable",component:()=>n.e("chunk-7c1dfc10").then(n.bind(null,"698c"))}]},{path:"/wait-dealt",name:"WaitDealt",component:()=>n.e("chunk-7a8d8be1").then(n.bind(null,"681d"))},{path:"/mine",name:"mine",component:()=>n.e("chunk-4bd1870a").then(n.bind(null,"3cc8"))}]},{path:"/loadingScreen",name:"loadingScreen",component:()=>n.e("chunk-0624ebc7").then(n.bind(null,"4356"))},{path:"/login",name:"Login",component:()=>n.e("chunk-e9d078ea").then(n.bind(null,"dd7b"))},{path:"/version-election",name:"VersionSelection",component:()=>n.e("chunk-045cb7a0").then(n.bind(null,"505f"))},{path:"/personnel-info",name:"PersonnelInfo",component:()=>n.e("chunk-41f5d2b4").then(n.bind(null,"7f4c"))},{path:"/select-department",name:"SelectDepartment",component:()=>n.e("chunk-30136124").then(n.bind(null,"2042"))},{path:"/select-device",name:"SelectDevice",component:()=>n.e("chunk-37859af2").then(n.bind(null,"0dcc"))},{path:"/project-progress",name:"ProjectProgress",component:()=>n.e("chunk-1eb6bc3a").then(n.bind(null,"80a6"))},{path:"/project-info",name:"ProjectInfo",component:()=>n.e("chunk-42321552").then(n.bind(null,"cd80"))},{path:"/Wait-dealt-list",name:"WaitDealtList",component:()=>n.e("chunk-1812fcd4").then(n.bind(null,"7b26"))},{path:"/wait-dealt-details",name:"WaitDealtDetails",component:()=>Promise.all([n.e("chunk-3ac97d12"),n.e("chunk-0c22db87")]).then(n.bind(null,"1964"))},{path:"/examine",name:"Examine",component:()=>n.e("chunk-3ac97d12").then(n.bind(null,"3103"))},{path:"/wait-dealt-confirm",name:"WaitDealtConfirm",component:()=>Promise.all([n.e("chunk-c7b7dfee"),n.e("chunk-729374a8")]).then(n.bind(null,"65d0"))},{path:"/problem-manage",name:"ProblemMange",component:()=>Promise.all([n.e("chunk-c7b7dfee"),n.e("chunk-61672c49")]).then(n.bind(null,"dd06"))},{path:"/problem-manage-details",name:"ProblemMangeDetails",component:()=>Promise.all([n.e("chunk-c7b7dfee"),n.e("chunk-2049c7a0")]).then(n.bind(null,"9964"))}],v=new l["a"]({mode:"hash",base:"/",routes:k});var w=v,y=n("2f62");o["a"].use(y["a"]);var S=new y["a"].Store({state:{versionId:"",department:"",device:"",organizationId:"",userId:"",btnShow:null},getters:{getVersionId(e){return e.versionId},getDepartment(e){return e.department},getDevice(e){return e.device},getOrganizationId(e){return e.organizationId},getUserId(e){return e.userId},getBtnShow(e){return e.btnShow}},mutations:{changeVersionId(e,t){e.versionId=t,window.localStorage.setItem("versionId",t)},changeDepartment(e,t){e.department=t},changeDevice(e,t){e.device=t},changeOrganizationId(e,t){e.organizationId=t},changeUserId(e,t){e.userId=t},changeBtnShow(e,t){console.log("changeBtnShow",t),e.btnShow=t}},actions:{},modules:{}}),_=(n("a3af"),n("b970")),P=n("d399"),D=(n("157a"),n("bc3a")),x=n.n(D),I=n("4328"),j=n.n(I),$=n("f564");x.a.defaults.timeout=6e4,x.a.defaults.headers={};const C=x.a.create({baseURL:"",timeout:6e3});function E(e,t,n){return new Promise((o,a)=>{C.post(e,t,n).then(e=>{o(e)},e=>{a(e)}).catch(e=>{a(e)})})}function O(e,t,n){return new Promise((o,a)=>{C.get(e,t,n).then(e=>{o(e)},e=>{a(e)}).catch(e=>{a(e)})})}function T(e,t,n){return console.log("fetchPut",e,"params",t,"config",n),new Promise((o,a)=>{C.put(e,t,n).then(e=>{o(e)},e=>{a(e)}).catch(e=>{a(e)})})}x.a.defaults.baseURL=window.location.origin,C.interceptors.request.use(e=>(e.isFormData&&(console.log("表单类型12"),e.headers["Content-Type"]="application/x-www-form-urlencoded",e.data=j.a.stringify(e.data),console.log("qs.stringify",e)),e),e=>Promise.reject(e)),C.interceptors.response.use(e=>e,e=>(401===e.response.status&&(w.push({name:"Login"}),Object($["a"])({type:"warning",message:"登录已过期请重新登录",duration:3e3})),Promise.reject(e)));var L,W;n("9622");o["a"].prototype.$getHttp=O,o["a"].prototype.$postHttp=E,o["a"].prototype.$putHttp=T,o["a"].prototype.$baseUrl="http://10.10.10.67:11012",o["a"].use(_["a"]),o["a"].config.productionTip=!1,w.beforeEach((e,t,n)=>{console.log(e.name),L=e.path,W="/loadingScreen"==L||"/login"==L||"/version-election"==L||"/WorkTable"==L||"/wait-dealt"==L||"/mine"==L||"/update"==L,n()}),document.addEventListener("plusready",(function(){console.log("plusready--plusready",L);var e=plus.webview.currentWebview();plus.key.addEventListener("backbutton",(function(){console.log("backbutton--backbutton",L,"isQuit",W),e.canBack((function(t){if(console.log("canBack",t),t.canBack)if(W){var n=null;plus.key.addEventListener("backbutton",(function(){!n&&W?(n=(new Date).getTime(),Object(P["a"])("再按一次退出应用"),console.log("再按一次退出应用1"),setTimeout((function(){n=null,console.log("定时器1")}),1e3)):(new Date).getTime()-n<1500&&plus.runtime.quit()}),!1)}else e.back();else{n=null;plus.key.addEventListener("backbutton",(function(){!n&&W?(n=(new Date).getTime(),Object(P["a"])("再按一次退出应用"),console.log("再按一次退出应用2"),setTimeout((function(){n=null,console.log("定时器2")}),1e3)):(new Date).getTime()-n<1500&&plus.runtime.quit()}),!1)}}))}))}));const H="object"===typeof window?window.navigator.userAgent:"";let q=-1,B=-1;function z(){return-1===q&&(q=/iPhone|iPod|iPad/i.test(H)?1:0),1===q}function A(){return-1===B&&(B=/Android/i.test(H)?1:0),1===B}if(A()){const e=window.innerHeight;console.log("main--innerHeight",e),window.addEventListener("resize",()=>{const t=window.innerHeight;console.log("main--newInnerHeight",t),e>t?(console.log("main---android 键盘弹窗事件",M),M.$store.commit("changeBtnShow",!1)):(console.log("main---android 键盘收起事件处理",M),M.$store.commit("changeBtnShow",!0))})}else z()&&(window.addEventListener("focusin",()=>{}),window.addEventListener("focusout",()=>{}));const M=new o["a"]({router:w,store:S,render:e=>e(d),beforeCreate(){o["a"].prototype.$bus=this}}).$mount("#app")},"66ef":function(e,t,n){e.exports=n.p+"img/mine.d4f91b60.svg"},"6d7a":function(e,t,n){e.exports=n.p+"img/workbench.afedeef1.svg"},"7d6b":function(e,t,n){},9622:function(e,t,n){},"9fa4":function(e,t,n){e.exports=n.p+"img/meter.73e6ad78.svg"},a3af:function(e,t){const n=16;function o(){const e=document.documentElement.clientWidth/375;document.documentElement.style.fontSize=n*Math.min(e,2)+"px"}o(),window.onresize=function(){o()}},cf4b:function(e,t,n){e.exports=n.p+"img/agency.db1b07bd.svg"},d66b:function(e,t,n){"use strict";n("7d6b")},e372:function(e,t,n){},e944:function(e,t,n){e.exports=n.p+"img/meter_choose.d3ebec87.svg"},f0f6:function(e,t,n){e.exports=n.p+"img/mine_choose.c8d413d8.svg"},fc9a:function(e,t,n){e.exports=n.p+"img/agency_choose.0ea632f6.svg"}});
//# sourceMappingURL=app.2c9fb693.js.map