System.register(["./index-legacy-9064cd94.js","./DataTable-legacy-d8d34a6c.js","./FormItem-legacy-33805e19.js","./LayoutContent-legacy-e2555612.js"],(function(e,l){"use strict";var a,t,u,i,o,r,s,n,c,v,d,p,m,g,f,h,b,V,N,F,y,j,k;return{setters:[e=>{a=e.r,t=e.f,u=e.o,i=e.j,o=e.w,r=e.k,s=e.D,n=e.l,c=e.x,v=e.n,d=e.y,p=e.m,m=e.v,g=e.t,f=e.A,h=e.h,b=e.F},e=>{V=e.N,N=e.a,F=e.b},e=>{y=e.N,j=e.a},e=>{k=e.N}],execute:function(){e("default",{__name:"index",setup(e){const l=a(null),_=a("medium"),S=a({selectValueProjectName:"广州粤芯半导体技术有限公司12英寸集成电路生产线项目总承包",selectValueFilter1:"栋号名称",selectValueFilter2:null,selectValueLv1:null,selectValueLv2:null,selectValueItemLv1:null,selectValueItemLv2:null,selectValueBuildingName:null,selectValuePackageName:null,selectValueFilterName:null,selectValueFloorage:"建筑面积"}),x=t((()=>S.value.selectValueFilter1)),P={selectValueProjectName:{required:!0,trigger:["blur","change"],message:"请选择 selectValue"}},C=a({filter1:["栋号名称","包名称","专业名称","一级系统","二级系统","一级物料","二级物料"].map((e=>({label:e,value:e}))),filter2:["栋号名称","包名称","专业名称","一级系统","二级系统","一级物料","二级物料"].map((e=>({label:e,value:e}))),floorage:["建筑面积","洁净面积","核心面积","室外面积"].map((e=>({label:e,value:e})))}),z=t((()=>{let e=C.value.buildingNames;switch(console.log(S.value.selectValueFilter1),S.value.selectValueFilter1){case"栋号名称":e=C.value.buildingNames;break;case"包名称":e=C.value.packageNames;break;case"专业名称":e=C.value.majorNames;break;case"一级系统":e=C.value.lv1;break;case"二级系统":e=C.value.lv2;break;case"一级物料":e=C.value.itemLv1;break;case"二级物料":e=C.value.itemLv2}return e}));a([{label:"在这里选择要查询的项目的名称",value:"",disabled:!0}]);const w=({node:e,option:l})=>h(b,{placement:"right"},{trigger:()=>e,default:()=>l.label});let L=a(0);const U=a([]),W=a({page:1,pageSize:15,showSizePicker:!0,pageSizes:[15,30,50],onChange:e=>{W.value.page=e},onUpdatePageSize:e=>{W.value.pageSize=e,W.value.page=1}}),I=new Intl.NumberFormat("en-US"),B=[{title:"分类1",key:"filter1",minWidth:60},{title:"分类2",key:"filter2",minWidth:60},{title:"分包合同总价（元）",key:"totalCost",minWidth:60,align:"right",render:e=>I.format(e.totalCost)},{title:()=>S.value.selectValueFloorage,key:"floorage",minWidth:60,align:"right"},{title:"分包合同总金额（元）",key:"totalCost",minWidth:60,align:"right",render:e=>I.format(e.totalCost)},{title:"造价占比（%）",key:"costPercent",minWidth:100,align:"right",render:e=>(e.totalCost/L.value*100).toFixed(2)+"%"},{title:"单方造价（元/m2）",key:"costIndicator",minWidth:100,align:"right",render:e=>(e.totalCost/e.floorage).toFixed(2)}];async function E(){const e=await s.get("/DataTools/CostIndicators",{params:{projectName:S.value.selectValueProjectName,filter1:S.value.selectValueFilter1,filter2:S.value.selectValueFilter2}});console.log("res is",e),console.log(JSON.parse(e.data));let l=JSON.parse(e.data);U.value=[],L.value=0,l.data.forEach((e=>{U.value.push({filter1:e[S.value.selectValueFilter1],filter2:e[S.value.selectValueFilter2],totalCost:e["合价"].toFixed(2)}),L.value+=Number(e["合价"])})),JSON.parse(e.projectNames).forEach((e=>{C.value.projectName.push({label:e,value:e})})),["projectNames","lv1","lv2","itemLv1","itemLv2","majorNames","packageNames","buildingNames"].forEach((l=>{C.value[l]=[],JSON.parse(e[l]).forEach((e=>{C.value[l].push({label:e,value:e})}))}))}return E(),(e,a)=>(u(),i(r(f),{position:"absolute"},{default:o((()=>[n(r(m),{justify:"space-between",align:"center",style:{height:"48px",padding:"12px"}},{default:o((()=>[n(r(c),{size:24,type:"danger"},{default:o((()=>[v("成本指标")])),_:1}),n(r(V),{type:"info",style:{"min-width":"10rem"}},{default:o((()=>[v(d(S.value.selectValueProjectName?S.value.selectValueProjectName:"这里仅用于显示当前项目名称"),1)])),_:1}),n(r(p),null,{default:o((()=>[v(" 总价（万元）:"+d(r(I).format((r(L)/1e4).toFixed(2))),1)])),_:1})])),_:1}),n(r(g),{style:{height:"104px",padding:"12px"},bordered:""},{default:o((()=>[n(r(m),{justify:"space-between",align:"center"},{default:o((()=>[n(r(y),{inline:"",ref_key:"formRef",ref:l,model:S.value,rules:P,"label-width":"auto","require-mark-placement":"right-hanging",size:_.value},{default:o((()=>[n(r(j),{label:"项目名称",path:"selectValueProjectName"},{default:o((()=>[n(r(N),{filterable:"",value:S.value.selectValueProjectName,"onUpdate:value":a[0]||(a[0]=e=>S.value.selectValueProjectName=e),placeholder:"Select",options:C.value.projectNames,"render-option":w},null,8,["value","options"])])),_:1}),n(r(j),{label:"分类1",path:"selectValueFilter1"},{default:o((()=>[n(r(N),{filterable:"",value:S.value.selectValueFilter1,"onUpdate:value":a[1]||(a[1]=e=>S.value.selectValueFilter1=e),placeholder:"Select",options:C.value.filter1,"render-option":w},null,8,["value","options"])])),_:1}),n(r(j),{label:"栋号名称",path:"selectValueBuildingName"},{default:o((()=>[n(r(N),{filterable:"",value:S.value.selectValueBuildingName,"onUpdate:value":a[2]||(a[2]=e=>S.value.selectValueBuildingName=e),placeholder:"Select",options:C.value.buildingNames,"render-option":w},null,8,["value","options"])])),_:1}),n(r(j),{label:x.value,path:"selectValueFilterName"},{default:o((()=>[n(r(N),{filterable:"",value:S.value.selectValueFilterName,"onUpdate:value":a[3]||(a[3]=e=>S.value.selectValueFilterName=e),placeholder:"Select",options:z.value,"render-option":w},null,8,["value","options"])])),_:1},8,["label"]),n(r(j),{label:"面积",path:"selectValueFloorage"},{default:o((()=>[n(r(N),{filterable:"",value:S.value.selectValueFloorage,"onUpdate:value":a[4]||(a[4]=e=>S.value.selectValueFloorage=e),placeholder:"Select",options:C.value.floorage,"render-option":w},null,8,["value","options"])])),_:1}),n(r(j),{label:"分类2",path:"selectValueFilter2"},{default:o((()=>[n(r(N),{filterable:"",value:S.value.selectValueFilter2,"onUpdate:value":a[5]||(a[5]=e=>S.value.selectValueFilter2=e),placeholder:"Select",options:C.value.filter2,"render-option":w,clearable:""},null,8,["value","options"])])),_:1}),n(r(j),null,{default:o((()=>[n(r(p),{type:"primary",onClick:E},{default:o((()=>[v(" 搜索 ")])),_:1})])),_:1})])),_:1},8,["model","size"])])),_:1})])),_:1}),n(r(k),{position:"absolute",style:{top:"152px",bottom:"0px"},"native-scrollbar":!1,"content-style":"padding: 12px;"},{default:o((()=>[n(r(F),{columns:B,data:U.value,pagination:W.value,size:_.value,"single-line":!1,"max-height":"500"},null,8,["data","pagination","size"])])),_:1})])),_:1}))}})}}}));
