import{d as L,r as _,i as x,l as N,o as $,y as A,_ as C,a as t,c as i,b as n,F as w,q as h,f as M,z as g,t as I,A as F,B as R}from"./index-4d1f4963.js";const V=L({name:"LuckDraw",setup(){let l=0,r,e=0,a=!1;const o=_(!1),u=_(0),v=x([{phone:"186****2336抽中0元话费"},{phone:"166****2336抽中1元话费"},{phone:"156****2336抽中2元话费"}]),m=x([{id:1,runId:0,name:"潘多拉音箱"},{id:2,runId:1,name:"小酷M1耳机"},{id:3,runId:2,name:"酷狗VIP会员"},{id:4,runId:7,name:"8元话费"},{id:5,runId:3,name:"12元话费"},{id:6,runId:6,name:"谢谢参与1"},{id:7,runId:5,name:"4元话费"},{id:8,runId:4,name:"谢谢参与2"}]),b=N(()=>{const s=JSON.parse(JSON.stringify(m));return s.splice(4,0,{name:"drawBtn"}),s}),T=()=>{o.value=!0,setTimeout(()=>{v.push(v[0]),v.shift(),o.value=!1},500)},f=()=>{const s=setTimeout(()=>{if(u.value++,u.value>7&&(u.value=0),r!=null&&r.id&&(Date.now()-e)/1e3>2.5){if(console.log("奖品出来了"),l+=20,(Date.now()-e)/1e3>5&&r.runId===u.value){clearTimeout(s),setTimeout(()=>{a=!1;const d=m.find(p=>p.id===r.id);d&&console.log(`您抽中的奖品是${d.name},奖品id是${d.id}`)},400);return}}else l>=50&&(l-=20);f()},l)},B=()=>{setTimeout(()=>{const s=Math.ceil(Math.random()*8),d=m.find(p=>p.id===s);d&&(r=d),console.log("返回的抽奖结果是",r)},2e3),f()},D=()=>{if(a){console.log("正在抽奖中...");return}if(isNaN(200))return!1;l=200,a=!0,e=Date.now(),B(),console.log("开始抽奖")};return $(async()=>{await A(),setInterval(T,2e3)}),{awards:m,awardList:b,animate:o,list:v,current:u,handleStart:D}}});const q=c=>(F("data-v-9a630300"),c=c(),R(),c),z={class:"luckdraw-content"},J={class:"luckdraw-scroll"},O={class:"bg-scroll"},E={class:"lkq-name"},P={class:"turntable"},j=M('<svg class="bulb svelte-ecndpu" viewBox="-6 -6 316 316" fill="currentColor" fill-rule="evenodd" data-v-9a630300><g class="bulb-1 svelte-ecndpu" data-v-9a630300><circle cx="10" cy="10" r="4" data-v-9a630300></circle><circle cx="78" cy="4" r="4" data-v-9a630300></circle><circle cx="152" cy="4" r="4" data-v-9a630300></circle><circle cx="226" cy="4" r="4" data-v-9a630300></circle><circle cx="294" cy="10" r="4" data-v-9a630300></circle><circle cx="4" cy="89" r="4" data-v-9a630300></circle><circle cx="4" cy="173" r="4" data-v-9a630300></circle><circle cx="4" cy="258" r="4" data-v-9a630300></circle><circle cx="41" cy="300" r="4" data-v-9a630300></circle><circle cx="115" cy="300" r="4" data-v-9a630300></circle><circle cx="189" cy="300" r="4" data-v-9a630300></circle><circle cx="263" cy="300" r="4" data-v-9a630300></circle><circle cx="300" cy="258" r="4" data-v-9a630300></circle><circle cx="300" cy="173" r="4" data-v-9a630300></circle><circle cx="300" cy="89" r="4" data-v-9a630300></circle></g><g class="bulb-2 svelte-ecndpu" data-v-9a630300><circle cx="41" cy="4" r="4" data-v-9a630300></circle><circle cx="115" cy="4" r="4" data-v-9a630300></circle><circle cx="189" cy="4" r="4" data-v-9a630300></circle><circle cx="263" cy="4" r="4" data-v-9a630300></circle><circle cx="4" cy="46" r="4" data-v-9a630300></circle><circle cx="4" cy="131" r="4" data-v-9a630300></circle><circle cx="4" cy="215" r="4" data-v-9a630300></circle><circle cx="10" cy="294" r="4" data-v-9a630300></circle><circle cx="294" cy="294" r="4" data-v-9a630300></circle><circle cx="300" cy="215" r="4" data-v-9a630300></circle><circle cx="300" cy="131" r="4" data-v-9a630300></circle><circle cx="300" cy="46" r="4" data-v-9a630300></circle><circle cx="78" cy="300" r="4" data-v-9a630300></circle><circle cx="152" cy="300" r="4" data-v-9a630300></circle><circle cx="226" cy="300" r="4" data-v-9a630300></circle></g></svg>',1),G={class:"awards-list"},H=q(()=>n("span",{class:"draw-btn-text"},"点击抽奖",-1)),K=[H],Q={key:1};function U(c,y,k,S,l,r){return t(),i("div",z,[n("div",J,[n("ul",O,[(t(!0),i(w,null,h(c.list,(e,a)=>(t(),i("li",{key:a,class:g({anim:c.animate&&a==0})},[n("span",E,I(e.phone),1)],2))),128))])]),n("div",P,[j,n("ul",G,[(t(!0),i(w,null,h(c.awardList,(e,a)=>(t(),i("li",{key:e.id,class:g(["awards-item",{"awards-item-draw":a===4,"run-item":e.runId===c.current}])},[a===4?(t(),i("div",{key:0,onClick:y[0]||(y[0]=(...o)=>c.handleStart&&c.handleStart(...o)),class:"draw-btn svelte-ecndpu"},K)):(t(),i("div",Q,I(e.name),1))],2))),128))])])])}const X=C(V,[["render",U],["__scopeId","data-v-9a630300"]]);export{X as default};
