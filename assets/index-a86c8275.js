import{_ as c}from"./index.vue_vue_type_script_setup_true_lang-ec7e303a.js";import{d as p,r as t,o as s,c as i,g as u}from"./index-62ad9cce.js";const f=p({__name:"index",setup(_){const o=t([]),a=t([{label:"id",prop:"id",align:"center"},{label:"菜单名称",prop:"name",align:"center"},{label:"路径",prop:"path",align:"center",render(n,e){return console.log(e),n("span",e.row.path?e.row.path:"--")}},{label:"图标",prop:"icon",align:"center",render(n,e){return n("span",e.row.icon?e.row.icon:"--")}},{label:"排序值",prop:"sort",align:"center"}]);function r(){u().then(n=>{o.value=n.result})}return r(),(n,e)=>{const l=c;return s(),i(l,{data:o.value,columns:a.value},null,8,["data","columns"])}}});export{f as default};