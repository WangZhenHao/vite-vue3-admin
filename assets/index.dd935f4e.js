import{_ as p}from"./index.vue_vue_type_script_setup_true_lang.783ec981.js";import{i as _,d,r as o,a as m,o as f,c as b,b as n,w as a,e as l,t as v}from"./index.5fe141eb.js";const x=function(){return _("/data/roleList.json")},w=d({__name:"index",setup(D){const e=o([]),s=o([{prop:"code",label:"\u6D4B\u8BD5",width:"12",align:"center"},{prop:"code",label:"\u89D2\u8272\u4EE3\u7801"},{prop:"id",label:"id"},{prop:"description",label:"\u63CF\u8FF0"}]);function c(){x().then(t=>{e.value=t.result})}return c(),(t,F)=>{const u=m("el-button"),r=p;return f(),b("div",null,[n(r,{data:e.value,columns:s.value},{action:a(i=>[n(u,null,{default:a(()=>[l("\u7F16\u8F91")]),_:1}),l(" "+v(i.row.name),1)]),_:1},8,["data","columns"])])}}});export{w as default};
