import{_ as s}from"./index.vue_vue_type_script_setup_true_lang-ec7e303a.js";import{i as r,d as c,r as a,o as i,a as p,b as u}from"./index-62ad9cce.js";const m=function(){return r("/data/roleList.json")},v=c({__name:"index",setup(_){const e=a([]),o=a([{prop:"id",label:"id"},{prop:"name",label:"名称"},{prop:"code",label:"角色代码"},{prop:"description",label:"描述"}]);function n(){m().then(t=>{e.value=t.result})}return n(),(t,d)=>{const l=s;return i(),p("div",null,[u(l,{data:e.value,columns:o.value},null,8,["data","columns"])])}}});export{v as default};
