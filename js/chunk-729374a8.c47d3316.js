(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-729374a8"],{"25d0":function(t,e,i){t.exports=i.p+"img/confirm.35d32770.svg"},"4f14":function(t,e,i){"use strict";i("a949")},"5a0c":function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";var t=1e3,e=6e4,i=36e5,s="millisecond",n="second",a="minute",o="hour",r="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],i=t%100;return"["+t+(e[(i-20)%10]||e[i]||e[0])+"]"}},v=function(t,e,i){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(i)+t},b={s:v,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),s=Math.floor(i/60),n=i%60;return(e<=0?"+":"-")+v(s,2,"0")+":"+v(n,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var s=12*(i.year()-e.year())+(i.month()-e.month()),n=e.clone().add(s,c),a=i-n<0,o=e.clone().add(s+(a?-1:1),c);return+(-(s+(i-n)/(a?n-o:o-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:l,d:r,D:h,h:o,m:a,s:n,ms:s,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",w={};w[$]=g;var y=function(t){return t instanceof M},I=function t(e,i,s){var n;if(!e)return $;if("string"==typeof e){var a=e.toLowerCase();w[a]&&(n=a),i&&(w[a]=i,n=a);var o=e.split("-");if(!n&&o.length>1)return t(o[0])}else{var r=e.name;w[r]=e,n=r}return!s&&n&&($=n),n||!s&&$},k=function(t,e){if(y(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new M(i)},D=b;D.l=I,D.i=y,D.w=function(t,e){return k(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function g(t){this.$L=I(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(p);if(s){var n=s[2]-1||0,a=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)):new Date(s[1],n,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return D},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var i=k(t);return this.startOf(e)<=i&&i<=this.endOf(e)},v.isAfter=function(t,e){return k(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<k(t)},v.$g=function(t,e,i){return D.u(t)?this[e]:this.set(i,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var i=this,s=!!D.u(e)||e,u=D.p(t),f=function(t,e){var n=D.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return s?n:n.endOf(r)},p=function(t,e){return D.w(i.toDate()[t].apply(i.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},m=this.$W,g=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return s?f(1,0):f(31,11);case c:return s?f(1,g):f(0,g+1);case l:var $=this.$locale().weekStart||0,w=(m<$?m+7:m)-$;return f(s?v-w:v+(6-w),g);case r:case h:return p(b+"Hours",0);case o:return p(b+"Minutes",1);case a:return p(b+"Seconds",2);case n:return p(b+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var i,l=D.p(t),u="set"+(this.$u?"UTC":""),f=(i={},i[r]=u+"Date",i[h]=u+"Date",i[c]=u+"Month",i[d]=u+"FullYear",i[o]=u+"Hours",i[a]=u+"Minutes",i[n]=u+"Seconds",i[s]=u+"Milliseconds",i)[l],p=l===r?this.$D+(e-this.$W):e;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[D.p(t)]()},v.add=function(s,u){var h,f=this;s=Number(s);var p=D.p(u),m=function(t){var e=k(f);return D.w(e.date(e.date()+Math.round(t*s)),f)};if(p===c)return this.set(c,this.$M+s);if(p===d)return this.set(d,this.$y+s);if(p===r)return m(1);if(p===l)return m(7);var g=(h={},h[a]=e,h[o]=i,h[n]=t,h)[p]||1,v=this.$d.getTime()+s*g;return D.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",n=D.z(this),a=this.$H,o=this.$m,r=this.$M,l=i.weekdays,c=i.months,u=function(t,i,n,a){return t&&(t[i]||t(e,s))||n[i].slice(0,a)},d=function(t){return D.s(a%12||12,t,"0")},h=i.meridiem||function(t,e,i){var s=t<12?"AM":"PM";return i?s.toLowerCase():s},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:r+1,MM:D.s(r+1,2,"0"),MMM:u(i.monthsShort,r,c,3),MMMM:u(c,r),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,l,2),ddd:u(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:D.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:D.s(o,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:n};return s.replace(m,(function(t,e){return e||p[t]||n.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(s,h,f){var p,m=D.p(h),g=k(s),v=(g.utcOffset()-this.utcOffset())*e,b=this-g,$=D.m(this,g);return $=(p={},p[d]=$/12,p[c]=$,p[u]=$/3,p[l]=(b-v)/6048e5,p[r]=(b-v)/864e5,p[o]=b/i,p[a]=b/e,p[n]=b/t,p)[m]||b,f?$:D.a($)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),s=I(t,e,!0);return s&&(i.$L=s),i},v.clone=function(){return D.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),T=M.prototype;return k.prototype=T,[["$ms",s],["$s",n],["$m",a],["$H",o],["$W",r],["$M",c],["$y",d],["$D",h]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),k.extend=function(t,e){return t.$i||(t(e,M,k),t.$i=!0),k},k.locale=I,k.isDayjs=y,k.unix=function(t){return k(1e3*t)},k.en=w[$],k.Ls=w,k.p={},k}))},"65d0":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"mobile-title"},[e("navBar",{attrs:{titleText:"待办详情"}})],1),e("div",{staticClass:"mobile-body"},[e("p",[t._v("目前具体进展情况")]),t._l(t.postsList,(function(t){return e("div",{key:t.id},[e("van-cell",{attrs:{center:"",title:t.postDetails,label:t.postPeople+" "+t.postTime}})],1)})),t.disableUse||t.bottomData.realEndTime?e("img",{attrs:{src:t.posting}}):e("img",{attrs:{src:t.posting},on:{click:t.openPosting}}),e("div",{staticClass:"item"},[t._l(t.problemImg,(function(i){return e("div",{key:i.id,staticClass:"img-frame",staticStyle:{margin:"0.5rem 0rem"},on:{click:function(e){return t.downloadFiles(i,!0)}}},[e("span",[t._v(t._s(i.fileName))]),t.disableUse||t.bottomData.realEndTime?t._e():e("img",{attrs:{src:t.closeAnnex},on:{click:function(e){return e.stopPropagation(),t.closeAnnexFun(i.id,i.parameterId)}}})])})),e("van-uploader",{ref:"vanUploader",staticStyle:{display:"none"},attrs:{accept:"","after-read":t.afterRead}}),t.disableUse||t.bottomData.realEndTime?e("img",{attrs:{src:t.add_annex}}):e("img",{attrs:{src:t.add_annex},on:{click:function(e){return t.$refs.vanUploader.chooseFile()}}})],2),e("hr",{attrs:{color:"#F3F3F3"}}),e("p",[t._v("基本信息")]),e("van-cell",{attrs:{center:"",title:"发布人",label:t.info.issueUser}}),e("van-cell",{attrs:{center:"",title:"发布时间",label:t.info.issueTime}}),e("van-cell",{attrs:{center:"",title:"状态",label:t.info.status}}),e("van-cell",{attrs:{center:"",title:"提醒提前量",label:t.info.warnNumber+"天"}}),e("van-cell",{attrs:{center:"",title:"标准分",label:t.info.standardScore+"分"}}),e("van-cell",{attrs:{center:"",title:"工作类型",label:t.info.isCirculate}}),"循环性工作"==t.info.isCirculate?e("van-cell",{attrs:{center:"",title:"完成起止时间",label:t.info.wancheng}}):e("van-cell",{attrs:{center:"",title:"要求完成时间",label:t.info.endTime}}),e("van-cell",{attrs:{center:"",title:"循环周期",label:t.info.cycleTime}}),e("van-cell",{attrs:{center:"",title:"工作内容及要求",label:t.info.details}}),e("hr",{attrs:{color:"#F3F3F3"}}),e("p",[t._v("分项任务")]),t._l(t.subTasks,(function(t){return e("van-cell",{key:t.id,attrs:{center:"",title:t.itemTaskDescribe,value:0==t.nodeType?"开始节点":1==t.nodeType?"中间节点":2==t.nodeType?"结束节点":"-",label:"要求完成时间："+t.endTime}})})),e("hr",{attrs:{color:"#F3F3F3"}}),e("p",[t._v("责任单位")]),e("img",{staticStyle:{width:"100%"},attrs:{src:t.dutyUnitImg}}),t._l(t.dutyUnit,(function(i){return e("van-cell",{key:i.deptId,attrs:{center:"",title:i.deptName?i.deptName:"-"},scopedSlots:t._u([{key:"label",fn:function(){return t._l(i.userNames,(function(i){return e("div",{key:i.id},[e("span",{staticClass:"color-button",style:{background:"MANEUVERING"==i.workType?"#107e3e":"SAFETY"==i.workType?"#ce0c0c":"CRAFT"==i.workType?"#0a6ed1":"PRODUCTION"==i.workType?"#925ace":"#9ca3af"}},[t._v(" "+t._s(i.userName?i.userName:"-")+" ")])])}))},proxy:!0}],null,!0)})})),e("van-button",{attrs:{disabled:"",type:"info"}},[t._v("点击上传")]),t._l(t.echoFileList,(function(i){return e("div",{key:i.id,staticClass:"img-frame",staticStyle:{margin:"0.5rem 0rem"},on:{click:function(e){return t.downloadFiles(i,!1)}}},[e("span",[t._v(t._s(i.fileName))])])}))],2),e("div",{staticClass:"float-button"},[e("van-button",{attrs:{disabled:t.disableUse||t.bottomData.realEndTime,type:"info"},on:{click:t.confirmFun}},[e("img",{attrs:{src:t.confirm}}),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.btnTextVisible,expression:"!btnTextVisible"}]},[t._v("确认")])])],1),e("van-popup",{style:{height:"32%"},attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("div",{staticClass:"input-box"},[e("p",[t._v(t._s(t.inputText))]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{cols:"30",rows:"5",placeholder:"请输入"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),e("div",{staticClass:"button-box"},[e("van-button",{attrs:{type:"default"},on:{click:function(e){t.show=!1}}},[e("span",[t._v("取消")])]),e("van-button",{attrs:{type:"info"},on:{click:t.postingConfirm}},[e("span",[t._v("确认")])])],1)])])],1)},n=[],a=(i("b7ef"),i("907a"),i("3c5d"),i("fa9e"),i("77d9"),i("d399")),o=i("da1d"),r=i("28a2"),l=i("5a0c"),c=i.n(l),u={name:"WaitDealtConfirm",components:{navBar:o["a"]},data(){return{show:!1,btnTextVisible:!1,disableUse:!1,problemImg:[],pictureId:[],info:{},postsList:[],subTasks:[],dutyUnit:[],echoFileList:[],description:"",bottomData:{},taskUnitId:"",taskId:"",deptId:"",postPeople:"",inputText:"",posting:i("93ab"),closeAnnex:i("a202"),add_annex:i("73a3"),confirm:i("25d0"),dutyUnitImg:i("a355")}},methods:{changeClose(){},openPosting(){this.show=!0,this.inputText=""},postingConfirm(){if(""!=this.description&&null!=this.description||""!=this.inputText)if(this.show=!1,""==this.inputText)this.$postHttp(`${this.$baseUrl}/OS-PM/overhaulManagement/${window.localStorage.getItem("versionId")}/postMessage`,{postDetails:this.description,postPeople:this.postPeople,postTime:c()(new Date).format("YYYY-MM-DD HH:mm:ss"),taskUnitId:this.taskUnitId}).then(t=>{console.log("postMessage",t),this.getPostsList(),this.description=""}).catch(t=>{});else{const t={identifyPeople:JSON.parse(window.localStorage.getItem("user")).userName,identifyPeopleId:JSON.parse(window.localStorage.getItem("user")).userId,realEndTime:"",id:this.taskUnitId,taskId:this.taskId,deptId:this.deptId};t.realEndTime=c()(new Date).format("YYYY-MM-DD"),t.confirmDescription=this.description,console.log("obj",t);const e=JSON.stringify(t),i=new Blob([e],{type:"application/json"}),s=new FormData;s.append("taskUnit",i),this.pictureId.forEach(t=>{s.append("files",t)}),this.$postHttp(`${this.$baseUrl}/OS-PM/overhaulManagement/${window.localStorage.getItem("versionId")}/taskFeedBack`,s).then(t=>{console.log("taskFeedBack",t),200==t.status&&(this.disableUse=!0,a["a"].success("保存成功！"))}).catch(t=>{})}else alert("请输入帖子内容")},showImg(t){Object(r["a"])([t])},downloadFiles(t,e){if(console.log("downloadFiles",t),e&&!this.disableUse&&!this.bottomData.realEndTime)return void alert("保存后可以下载");let i=confirm("是否要下载 "+t.fileName+"?");i&&this.uploadFile(t)},closeAnnexFun(t,e){this.problemImg=this.problemImg.filter(e=>t!=e.id),this.pictureId=this.pictureId.filter(t=>e!=t.lastModified),console.log("problemImg",this.problemImg,"pictureId",this.pictureId)},confirmFun(){this.disableUse||(this.show=!0,this.inputText="确认描述",this.description="")},afterRead(t){function e(t,e){let i=t.split(","),s=i[0].match(/:(.*?);/)[1],n=atob(i[1]),a=n.length,o=new Uint8Array(a);while(a--)o[a]=n.charCodeAt(a);return new File([o],e,{type:s})}console.log("afterRead",t),this.pictureId.push(t.file);const i=new FormData;i.append("uploadFile",e(t.content,t.file.name)),console.log("fromData",i),this.$postHttp(this.$baseUrl+"/CMS/file/upload",i).then(e=>{console.log("upload",e),200==e.status&&(this.problemImg.push({fileName:e.data.data.fileName+"."+e.data.data.fileType,imgPath:e.data.data.filePath,id:e.data.data.id,parameterId:t.file.lastModified}),console.log("pictureId",this.pictureId,"problemImg",this.problemImg))}).catch(t=>{})},uploadFile(t){this.$getHttp(`${this.$baseUrl}/OS-PM/overhaulManagement/${window.localStorage.getItem("versionId")}/downLoadFile/${t.id}`,{responseType:"blob"}).then(e=>{if(console.log("response下载123",e,"file",t),200==e.status){document.addEventListener("plusready",(function(){}),!1),console.log("response.config.url",e.config.url);const i=plus.downloader.createDownload(e.config.url,{filename:"_downloads/"+t.fileName},(function(t,e){if(console.log("createDownload2",t,e),200==e){var i=plus.io.convertLocalFileSystemURL(t.filename);console.log(i),plus.runtime.openFile(t.filename)}else alert("Download failed: "+e),plus.downloader.clear()}));console.log("dtask",i),i.start();let s=0,n=plus.nativeUI.showWaiting("正在下载");i.addEventListener("statechanged",(function(t,e){switch(t.state){case 1:n.setTitle("正在下载");break;case 3:s=parseInt(parseFloat(t.downloadedSize)/parseFloat(t.totalSize)*100),n.setTitle("  正在下载"+s+"%  ");break;case 4:plus.nativeUI.closeWaiting();break}}))}}).catch(()=>{})},getPostsList(){this.$getHttp(`${this.$baseUrl}/OS-PM/overhaulManagement/${window.localStorage.getItem("versionId")}/selectMessage/${this.taskUnitId}`).then(t=>{console.log("selectMessage",t),200==t.status&&(this.postsList=t.data)})},async handleInterface(t){let e={};e=await this.$postHttp(`${this.$baseUrl}/OS-PM/overhaulManagement/${window.localStorage.getItem("versionId")}/selectWorkTask`,{scene:"检修专项排查"==t?"2":"检修统筹计划"==t?"0":"大检修规范化管理"==t?"1":"",tag:"feedback"}),e.data.results.forEach(t=>{t.itemTasks.forEach(e=>{if(e.id==this.$route.query.number){this.info=t,this.subTasks.push(e),console.log("taskUnitList",e),this.bottomData=e.taskUnitList[0],this.taskUnitId=e.taskUnitList[0].id,this.taskId=e.id,this.deptId=e.taskUnitList[0].deptId,this.echoFileList=t.fileRecords,this.postPeople=e.taskUnitList[0].identifyPeople?e.taskUnitList[0].identifyPeople:JSON.parse(window.localStorage.getItem("user")).userName,console.log("postPeople",this.postPeople),e.taskUnitList.forEach((t,e)=>{t.id===this.taskUnitId&&(this.description=t.confirmDescription,t.fileRecords&&(this.problemImg=t.fileRecords,this.problemImg.forEach(t=>{t.fileName=t.fileName})))});let i=t.itemTasks[0].taskUnitList;i.forEach(t=>{let e={deptId:t.deptId,deptName:t.deptName,userNames:[],deptUserId:[],showUserNames:""};t.userList&&t.userList.forEach(i=>{e.showUserNames+=i.userName+" ,";let s={id:i.id,userName:i.userName,workType:i.majorPosition};e.userNames.push(s),e.deptUserId.push(i.id+"-"+t.deptId)}),this.dutyUnit.push(e)}),console.log("subTasks",this.subTasks,"dutyUnit",this.dutyUnit,"problemImg",this.problemImg)}})}),this.getPostsList(),this.info.status=1==this.info.status?"已发布":"未发布",this.info.isCirculate=1==this.info.isCirculate?"循环性工作":"一次性工作",this.info.wancheng=this.info.startTime+" 至 "+this.info.endTime,console.log(this.$route.query.waitDealtName,e,"this.info",this.info)}},mounted(){this.handleInterface(this.$route.query.waitDealtName),document.querySelector(".mobile-body")&&document.querySelector(".mobile-body").addEventListener("scroll",()=>{let t=null;this.btnTextVisible=!0,window.clearTimeout(t),t=window.setTimeout(()=>{this.btnTextVisible=!1},101)})}},d=u,h=(i("4f14"),i("2877")),f=Object(h["a"])(d,s,n,!1,null,"fe27d920",null);e["default"]=f.exports},"73a3":function(t,e,i){t.exports=i.p+"img/add_annex.e846fa73.svg"},"93ab":function(t,e,i){t.exports=i.p+"img/posting.f05daf31.svg"},a202:function(t,e,i){t.exports=i.p+"img/closeAnnex.9ce203a1.svg"},a355:function(t,e,i){t.exports=i.p+"img/dutyUnitImg.158412b1.svg"},a949:function(t,e,i){}}]);
//# sourceMappingURL=chunk-729374a8.c47d3316.js.map