(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1eb6bc3a","chunk-37859af2","chunk-30136124"],{"0dcc":function(e,t,s){"use strict";s.r(t);s("caad");var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"select-device"},[t("navBar",{attrs:{svgIcon:e.svgIcon,titleText:"选择装置"},on:{changeClose:e.changeClose}}),t("p",{directives:[{name:"show",rawName:"v-show",value:e.svgIcon.includes("close"),expression:"svgIcon.includes('close')"}],on:{click:e.showSelectDepartment}},[e._v(e._s(e.$store.getters.getDepartment))]),t("van-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[t("van-cell-group",e._l(e.deviceList,(function(s,n){return t("van-cell",{key:s.id,attrs:{title:s.deviceName,clickable:""},on:{click:function(t){return e.clickRadio(n,s.id)}},scopedSlots:e._u([{key:"right-icon",fn:function(){return[t("van-radio",{attrs:{name:n}})]},proxy:!0}],null,!0)})})),1)],1),t("van-button",{directives:[{name:"show",rawName:"v-show",value:!e.svgIcon.includes("close"),expression:"!svgIcon.includes('close')"}],attrs:{disabled:e.radio<=-1,round:"",type:"info","native-type":"submit"},on:{click:e.define}},[e._v("确定")]),t("van-popup",{style:{height:"100%"},attrs:{position:"bottom",duration:"0"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t("selectDepartment",{attrs:{svgIcon:e.close},on:{changeClose:e.currentClose}})],1)],1)},i=[],c=s("da1d"),o=s("2042"),a={name:"SelectDevice",props:{svgIcon:{type:String,default:()=>s("d93d")}},components:{navBar:c["a"],selectDepartment:o["default"]},data(){return{radio:-1,deviceId:null,deviceList:[],close:s("bf37"),show:!1}},methods:{showPopup(){},clickRadio(e,t){this.radio=e,this.deviceId=t,this.svgIcon.includes("close")&&(this.$store.commit("changeDevice",this.deviceList[this.radio].deviceName),this.$emit("changeClose"))},define(){this.$router.push({name:"ProjectProgress",query:{deviceId:this.deviceId}}),this.$store.commit("changeDevice",this.deviceList[this.radio].deviceName)},changeClose(){this.$emit("changeClose")},showSelectDepartment(){this.show=!0},currentClose(){this.show=!1,this.init()},init(){this.radio=-1,this.$postHttp(this.$baseUrl+"/OS-PM/device/findOrganization",{organizationId:this.$store.getters.getOrganizationId}).then(e=>{200==e.status&&(this.deviceList=e.data)}).catch(e=>{})}},mounted(){this.init()}},r=a,l=(s("1141"),s("2877")),u=Object(l["a"])(r,n,i,!1,null,"bc4d84ea",null);t["default"]=u.exports},1141:function(e,t,s){"use strict";s("7a72")},"1be4":function(e,t,s){var n=s("d066");e.exports=n("document","documentElement")},2042:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"select-department"},[t("navBar",{attrs:{svgIcon:e.svgIcon,titleText:"选择部门"},on:{changeClose:e.changeClose}}),e._l(e.departmentList,(function(s){return t("van-cell",{key:s.id,attrs:{"is-link":""},on:{click:function(t){return e.showPopup(s)}}},[e._v(e._s(s.label))])}))],2)},i=[],c=(s("caad"),s("da1d")),o={name:"SelectDepartment",props:{svgIcon:{type:String,default:()=>s("d93d")}},components:{navBar:c["a"]},data(){return{departmentList:[]}},methods:{changeClose(){this.$emit("changeClose")},showPopup(e){this.$store.commit("changeOrganizationId",e.id),this.svgIcon.includes("close")?this.$emit("changeClose"):this.$router.push({name:"SelectDevice"}),this.$store.commit("changeDepartment",e.label)}},mounted(){this.$getHttp(this.$baseUrl+"/OS-PM/organization/getTree").then(e=>{if(200==e.status){function t(e){let s=[];return e.forEach(e=>{0!=e.children.length?(s.push(e),s=s.concat(t(e.children))):s.push(e)}),s}this.departmentList=t(e.data)}}).catch(e=>{})}},a=o,r=(s("8296"),s("2877")),l=Object(r["a"])(a,n,i,!1,null,"46c9af5b",null);t["default"]=l.exports},"37e8":function(e,t,s){var n=s("83ab"),i=s("aed9"),c=s("9bf2"),o=s("825a"),a=s("fc6a"),r=s("df75");t.f=n&&!i?Object.defineProperties:function(e,t){o(e);var s,n=a(t),i=r(t),l=i.length,u=0;while(l>u)c.f(e,s=i[u++],n[s]);return e}},"44d2":function(e,t,s){var n=s("b622"),i=s("7c73"),c=s("9bf2").f,o=n("unscopables"),a=Array.prototype;void 0==a[o]&&c(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},"476a":function(e,t,s){},"4b88":function(e,t,s){"use strict";s("6e0b")},"6e0b":function(e,t,s){},"707f":function(e,t,s){},"7a72":function(e,t,s){},"7c73":function(e,t,s){var n,i=s("825a"),c=s("37e8"),o=s("7839"),a=s("d012"),r=s("1be4"),l=s("cc12"),u=s("f772"),d=">",h="<",v="prototype",p="script",f=u("IE_PROTO"),g=function(){},m=function(e){return h+p+d+e+h+"/"+p+d},b=function(e){e.write(m("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=l("iframe"),s="java"+p+":";return t.style.display="none",r.appendChild(t),t.src=String(s),e=t.contentWindow.document,e.open(),e.write(m("document.F=Object")),e.close(),e.F},I=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}I="undefined"!=typeof document?document.domain&&n?b(n):w():b(n);var e=o.length;while(e--)delete I[v][o[e]];return I()};a[f]=!0,e.exports=Object.create||function(e,t){var s;return null!==e?(g[v]=i(e),s=new g,g[v]=null,s[f]=e):s=I(),void 0===t?s:c.f(s,t)}},"7c85":function(e,t,s){e.exports=s.p+"img/drop_down.0967086e.svg"},"80a6":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"project-progress"},[t("navBar",{attrs:{titleText:"项目进度"}},[t("p",{on:{click:e.showSelectDevice}},[e._v(e._s(e.$store.getters.getDepartment)+" / "+e._s(e.$store.getters.getDevice)),t("img",{attrs:{src:e.drop_down}})])]),t("div",{staticStyle:{"text-align":"center"}},[t("van-search",{attrs:{placeholder:"请选择时间"},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}})],1),t("div",{staticClass:"progress-container"},e._l(e.progressData,(function(s,n){return t("div",{key:n,staticClass:"item",on:{click:function(t){return e.toProjectInfo(s)}}},[t("h3",[e._v(e._s(s.projectName))]),t("span",{style:"CHECKING_STATE"==s.status?"color: #00A3FF":"EDITING_STATE"==s.status?"#FF9B3F":"DISAGREE_STATE"==s.status?"#DE3124":"FINISHED_STATE"==s.status?"color: #02CD53":""},[e._v(e._s(e.projectStateObj[s.status]))]),t("p",[e._v("项目编号："+e._s(s.projectNum))])])})),0),t("van-popup",{style:{height:"100%"},attrs:{position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t("selectDevice",{ref:"selectDevice",attrs:{svgIcon:e.close},on:{changeClose:e.changeClose}})],1),t("selectDevice",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"selectDevice",attrs:{svgIcon:e.close},on:{changeClose:e.changeClose}})],1)},i=[],c=s("da1d"),o=s("0dcc"),a={name:"ProjectProgress",data(){return{versionId:null,searchValue:"",progressData:[],drop_down:s("7c85"),close:s("bf37"),show:!1,projectStateObj:{}}},components:{navBar:c["a"],selectDevice:o["default"]},methods:{showSelectDevice(){this.show=!0,this.$refs.selectDevice.init(),this.$store.commit("changeOrganizationId",this.$store.getters.getOrganizationId)},changeClose(){this.show=!1},toProjectInfo(e){this.$router.push({name:"ProjectInfo",query:{item:JSON.stringify(e)}})},getProjectList(){this.$postHttp(`${this.$baseUrl}/OS-PM/version/${this.versionId}/bigOverhaulProjectPlan/overhaulProject/all/filter`,{deviceId:this.$route.query.deviceId}).then(e=>{200==e.status&&(this.progressData=e.data.page.results)}).catch(e=>{})},getState(){this.$getHttp(this.$baseUrl+"/OS-PM/dict/getAll?enumClass=BaseData$ApprovalState").then(e=>{200==e.status&&e.data.map(e=>{for(let t in e)this.projectStateObj[t]=e[t]})}).catch(e=>{})}},mounted(){this.getState(),this.$getHttp(this.$baseUrl+"/OS-PM/version/getAllVersion").then(e=>{this.versionId=e.data[0].id,this.getProjectList()}).catch(e=>{})}},r=a,l=(s("4b88"),s("2877")),u=Object(l["a"])(r,n,i,!1,null,"670f9ea2",null);t["default"]=u.exports},8296:function(e,t,s){"use strict";s("476a")},bf37:function(e,t,s){e.exports=s.p+"img/close.e7685cae.svg"},caad:function(e,t,s){"use strict";var n=s("23e7"),i=s("4d64").includes,c=s("d039"),o=s("44d2"),a=c((function(){return!Array(1).includes()}));n({target:"Array",proto:!0,forced:a},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d93d:function(e,t,s){e.exports=s.p+"img/left_back.cec8506f.svg"},da1d:function(e,t,s){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"nav-bar"},[t("van-nav-bar",{on:{"click-left":e.clickLeft,"click-right":e.clickRight},scopedSlots:e._u([{key:"left",fn:function(){return[t("img",{attrs:{src:e.svgIcon}})]},proxy:!0},{key:"title",fn:function(){return[e._v(" "+e._s(e.titleText)+" "),e._t("default")]},proxy:!0},{key:"right",fn:function(){return[t("img",{attrs:{src:e.svgIconRight}})]},proxy:!0}],null,!0)})],1)},i=[],c=(s("caad"),{name:"NavBar",props:{svgIcon:{type:String,default:()=>s("d93d")},svgIconRight:{type:String,default:()=>""},titleText:{type:String,default:()=>""}},data(){return{}},methods:{clickLeft(){this.svgIcon.includes("close")?this.$emit("changeClose"):this.$router.back()},clickRight(){this.$emit("clickRight")}}}),o=c,a=(s("f1f8"),s("2877")),r=Object(a["a"])(o,n,i,!1,null,"28ca8737",null);t["a"]=r.exports},df75:function(e,t,s){var n=s("ca84"),i=s("7839");e.exports=Object.keys||function(e){return n(e,i)}},f1f8:function(e,t,s){"use strict";s("707f")}}]);
//# sourceMappingURL=chunk-1eb6bc3a.6bb2e1ec.js.map