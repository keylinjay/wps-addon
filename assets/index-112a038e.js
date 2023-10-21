import{r as n,f as F,o as z,j as w,w as o,k as l,D as U,l as t,x as B,n as f,y,m as k,v as j,t as D,A as J,h as W,F as I}from"./index-267d7a3c.js";import{N as O,a as m,b as T}from"./DataTable-b117b6b1.js";import{N as R,a as c}from"./FormItem-c65c3669.js";import{N as E}from"./LayoutContent-d12489f4.js";const Q={__name:"index",setup(q){const x=n(null),b=n("medium"),a=n({selectValueProjectName:"广州粤芯半导体技术有限公司12英寸集成电路生产线项目总承包",selectValueFilter1:"栋号名称",selectValueFilter2:null,selectValueLv1:null,selectValueLv2:null,selectValueItemLv1:null,selectValueItemLv2:null,selectValueBuildingName:null,selectValuePackageName:null,selectValueFilterName:null,selectValueFloorage:"建筑面积"}),S=F(()=>a.value.selectValueFilter1),_={selectValueProjectName:{required:!0,trigger:["blur","change"],message:"请选择 selectValue"}},u=n({filter1:["栋号名称","包名称","专业名称","一级系统","二级系统","一级物料","二级物料"].map(e=>({label:e,value:e})),filter2:["栋号名称","包名称","专业名称","一级系统","二级系统","一级物料","二级物料"].map(e=>({label:e,value:e})),floorage:["建筑面积","洁净面积","核心面积","室外面积"].map(e=>({label:e,value:e}))}),C=F(()=>{let e=u.value.buildingNames;switch(console.log(a.value.selectValueFilter1),a.value.selectValueFilter1){case"栋号名称":e=u.value.buildingNames;break;case"包名称":e=u.value.packageNames;break;case"专业名称":e=u.value.majorNames;break;case"一级系统":e=u.value.lv1;break;case"二级系统":e=u.value.lv2;break;case"一级物料":e=u.value.itemLv1;break;case"二级物料":e=u.value.itemLv2;break}return e});n([{label:"在这里选择要查询的项目的名称",value:"",disabled:!0}]);const p=({node:e,option:r})=>W(I,{placement:"right"},{trigger:()=>e,default:()=>r.label}),L=()=>{var e=[];return e};let d=n(0);const g=n(L()),v=n({page:1,pageSize:15,showSizePicker:!0,pageSizes:[15,30,50],onChange:e=>{v.value.page=e},onUpdatePageSize:e=>{v.value.pageSize=e,v.value.page=1}}),N=new Intl.NumberFormat("en-US"),P=[{title:"分类1",key:"filter1",minWidth:60},{title:"分类2",key:"filter2",minWidth:60},{title:"分包合同总价（元）",key:"totalCost",minWidth:60,align:"right",render:e=>N.format(e.totalCost)},{title(){return a.value.selectValueFloorage},key:"floorage",minWidth:60,align:"right"},{title:"分包合同总金额（元）",key:"totalCost",minWidth:60,align:"right",render:e=>N.format(e.totalCost)},{title:"造价占比（%）",key:"costPercent",minWidth:100,align:"right",render:e=>(e.totalCost/d.value*100).toFixed(2)+"%"},{title:"单方造价（元/m2）",key:"costIndicator",minWidth:100,align:"right",render:e=>(e.totalCost/e.floorage).toFixed(2)}];async function V(){const e=await U.get("/DataTools/CostIndicators",{params:{projectName:a.value.selectValueProjectName,filter1:a.value.selectValueFilter1,filter2:a.value.selectValueFilter2}});console.log("res is",e),console.log(JSON.parse(e.data));let r=JSON.parse(e.data);g.value=[],d.value=0,r.data.forEach(i=>{g.value.push({filter1:i[a.value.selectValueFilter1],filter2:i[a.value.selectValueFilter2],totalCost:i.合价.toFixed(2)}),d.value+=Number(i.合价)}),JSON.parse(e.projectNames).forEach(i=>{u.value.projectName.push({label:i,value:i})}),["projectNames","lv1","lv2","itemLv1","itemLv2","majorNames","packageNames","buildingNames"].forEach(i=>{u.value[i]=[],JSON.parse(e[i]).forEach(h=>{u.value[i].push({label:h,value:h})})})}return V(),(e,r)=>(z(),w(l(J),{position:"absolute"},{default:o(()=>[t(l(j),{justify:"space-between",align:"center",style:{height:"48px",padding:"12px"}},{default:o(()=>[t(l(B),{size:24,type:"danger"},{default:o(()=>[f("成本指标")]),_:1}),t(l(O),{type:"info",style:{"min-width":"10rem"}},{default:o(()=>[f(y(a.value.selectValueProjectName?a.value.selectValueProjectName:"这里仅用于显示当前项目名称"),1)]),_:1}),t(l(k),null,{default:o(()=>[f(" 总价（万元）:"+y(l(N).format((l(d)/1e4).toFixed(2))),1)]),_:1})]),_:1}),t(l(D),{style:{height:"104px",padding:"12px"},bordered:""},{default:o(()=>[t(l(j),{justify:"space-between",align:"center"},{default:o(()=>[t(l(R),{inline:"",ref_key:"formRef",ref:x,model:a.value,rules:_,"label-width":"auto","require-mark-placement":"right-hanging",size:b.value},{default:o(()=>[t(l(c),{label:"项目名称",path:"selectValueProjectName"},{default:o(()=>[t(l(m),{filterable:"",value:a.value.selectValueProjectName,"onUpdate:value":r[0]||(r[0]=s=>a.value.selectValueProjectName=s),placeholder:"Select",options:u.value.projectNames,"render-option":p},null,8,["value","options"])]),_:1}),t(l(c),{label:"分类1",path:"selectValueFilter1"},{default:o(()=>[t(l(m),{filterable:"",value:a.value.selectValueFilter1,"onUpdate:value":r[1]||(r[1]=s=>a.value.selectValueFilter1=s),placeholder:"Select",options:u.value.filter1,"render-option":p},null,8,["value","options"])]),_:1}),t(l(c),{label:"栋号名称",path:"selectValueBuildingName"},{default:o(()=>[t(l(m),{filterable:"",value:a.value.selectValueBuildingName,"onUpdate:value":r[2]||(r[2]=s=>a.value.selectValueBuildingName=s),placeholder:"Select",options:u.value.buildingNames,"render-option":p},null,8,["value","options"])]),_:1}),t(l(c),{label:S.value,path:"selectValueFilterName"},{default:o(()=>[t(l(m),{filterable:"",value:a.value.selectValueFilterName,"onUpdate:value":r[3]||(r[3]=s=>a.value.selectValueFilterName=s),placeholder:"Select",options:C.value,"render-option":p},null,8,["value","options"])]),_:1},8,["label"]),t(l(c),{label:"面积",path:"selectValueFloorage"},{default:o(()=>[t(l(m),{filterable:"",value:a.value.selectValueFloorage,"onUpdate:value":r[4]||(r[4]=s=>a.value.selectValueFloorage=s),placeholder:"Select",options:u.value.floorage,"render-option":p},null,8,["value","options"])]),_:1}),t(l(c),{label:"分类2",path:"selectValueFilter2"},{default:o(()=>[t(l(m),{filterable:"",value:a.value.selectValueFilter2,"onUpdate:value":r[5]||(r[5]=s=>a.value.selectValueFilter2=s),placeholder:"Select",options:u.value.filter2,"render-option":p,clearable:""},null,8,["value","options"])]),_:1}),t(l(c),null,{default:o(()=>[t(l(k),{type:"primary",onClick:V},{default:o(()=>[f(" 搜索 ")]),_:1})]),_:1})]),_:1},8,["model","size"])]),_:1})]),_:1}),t(l(E),{position:"absolute",style:{top:"152px",bottom:"0px"},"native-scrollbar":!1,"content-style":"padding: 12px;"},{default:o(()=>[t(l(T),{columns:P,data:g.value,pagination:v.value,size:b.value,"single-line":!1,"max-height":"500"},null,8,["data","pagination","size"])]),_:1})]),_:1}))}};export{Q as default};
