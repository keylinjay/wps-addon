import{bp as p,a4 as b,bq as u,o as k,br as m,bs as e,n as a,y as d,bt as _,bu as v}from"./index-267d7a3c.js";function h(o,t){switch(o){case"getDocName":{let n=wps.EtApplication().ActiveWorkbook;return n?n.Name:"当前没有打开任何文档"}case"createTaskPane":{p.showTaskPane("ExcelTools/TaskPane");break}case"newDoc":{wps.EtApplication().Workbooks.Add();break}case"addString":{let n=wps.EtApplication().ActiveSheet;n&&(n.Cells.Item(1,1).Formula="Hello, wps加载项!"+n.Cells.Item(1,1).Formula);break}case"closeDoc":{if(wps.EtApplication().Workbooks.Count<2){alert("当前只有一个文档，别关了。");break}let n=wps.EtApplication().ActiveWorkbook;n&&n.Close();break}case"openWeb":{wps.OAAssist.ShellExecute(t);break}}}const r={onbuttonclick:h};const g={name:"DialogOfSample",data(){return{DemoSpan:"",docName:""}},methods:{onbuttonclick(o){return r.onbuttonclick(o)},onDocNameClick(){this.docName=r.onbuttonclick("getDocName")},onOpenWeb(){r.onbuttonclick("openWeb",this.DemoSpan)}},mounted(){u.get("/.debugTemp/NotifyDemoUrl").then(o=>{this.DemoSpan=o.data})}},c=o=>(_("data-v-0754447d"),o=o(),v(),o),w={class:"hello"},f={class:"global"},D=c(()=>e("div",{class:"divItem"},[a(" 这是一个网页，按"),e("span",{style:{"font-weight":"bolder"}},'"F12"'),a("可以打开调试器。 ")],-1)),S={class:"divItem"},x=["href"],y=c(()=>e("div",{class:"divItem"},[a(" 开发文档: "),e("span",{style:{"font-weight":"bolder",color:"slateblue"}},[e("a",{target:"_blank",href:"https://open.wps.cn/docs/client/wpsLoad"},"https://open.wps.cn/docs/client/wpsLoad")])],-1)),C=c(()=>e("hr",null,null,-1)),A={class:"divItem"},I=c(()=>e("hr",null,null,-1)),N={class:"divItem"};function E(o,t,n,W,i,s){return k(),m("div",w,[e("div",f,[D,e("div",S,[a(" 这个示例展示了wps加载项的相关基础能力，与B/S业务系统的交互，请用浏览器打开： "),e("span",{style:{"font-weight":"bolder",color:"slateblue",cursor:"pointer"},onClick:t[0]||(t[0]=l=>s.onOpenWeb())},[e("a",{target:"_blank",href:i.DemoSpan},d(i.DemoSpan),9,x)])]),y,C,e("div",A,[e("button",{style:{margin:"3px"},onClick:t[1]||(t[1]=l=>s.onDocNameClick())},"取文件名"),e("button",{style:{margin:"3px"},onClick:t[2]||(t[2]=l=>s.onbuttonclick("createTaskPane"))}," 创建任务窗格 "),e("button",{style:{margin:"3px"},onClick:t[3]||(t[3]=l=>s.onbuttonclick("newDoc"))}," 新建文件 "),e("button",{style:{margin:"3px"},onClick:t[4]||(t[4]=l=>s.onbuttonclick("addString"))}," 文档开头添加字符串 "),e("button",{style:{margin:"3px"},onClick:t[5]||(t[5]=l=>s.onbuttonclick("closeDoc"))}," 关闭文件 ")]),I,e("div",N,[a(" 文档文件名为："),e("span",null,d(i.docName),1)])])])}const B=b(g,[["render",E],["__scopeId","data-v-0754447d"]]);export{B as default};
