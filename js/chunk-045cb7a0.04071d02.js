(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-045cb7a0"],{"505f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"version-election"},[e("div",{staticClass:"title"},[t._v(" 版本选择 ")]),e("van-dropdown-menu",{attrs:{"get-container":"body"}},[e("van-dropdown-item",{attrs:{title:t.title,options:t.option},on:{change:t.handelChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e("van-button",{attrs:{round:"",type:"info",block:"",disabled:t.buttonDisabled},on:{click:t.getIntoSystem}},[t._v("进入系统")])],1)},o=[],s={name:"VersionSelection",data(){return{value:"",title:"请选择版本",option:[],buttonDisabled:!0}},async created(){const t=await this.$getHttp(this.$baseUrl+"/OS-PM/version/getAllVersion",{}),e=[];t.data.forEach(t=>{const i={text:t.versionName,value:t.id};e.push(i)}),this.option=e},methods:{handelChange(t){this.option.forEach(e=>{e.value===t&&(this.title=e.text,this.$store.commit("changeVersionId",t))}),this.buttonDisabled=!1},getIntoSystem(){const t={title:this.title,value:this.value,option:this.option};window.localStorage.setItem("versionMsg",JSON.stringify(t)),this.$router.push({name:"Home",query:{title:this.title,value:this.value,option:this.option}})}}},a=s,l=(i("e37d"),i("2877")),c=Object(l["a"])(a,n,o,!1,null,"328c80eb",null);e["default"]=c.exports},6158:function(t,e,i){},e37d:function(t,e,i){"use strict";i("6158")}}]);
//# sourceMappingURL=chunk-045cb7a0.04071d02.js.map