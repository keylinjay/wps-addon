import{c as x,a as b,ap as f,b as d,L as s,d as C,u as w,e as g,f as $,i as y,h as l,aH as k,a4 as z,x as D,a5 as B,bv as p,o as N,j as R,w as c,l as m,bs as P,y as u,n as T}from"./index-267d7a3c.js";const V=e=>{const{textColor1:o,dividerColor:n,fontWeightStrong:r}=e;return{textColor:o,color:n,fontWeight:r}},F={name:"Divider",common:x,self:V},j=F,L=b("divider","\n position: relative;\n display: flex;\n width: 100%;\n box-sizing: border-box;\n font-size: 16px;\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n",[f("vertical","\n margin-top: 24px;\n margin-bottom: 24px;\n ",[f("no-title","\n display: flex;\n align-items: center;\n ")]),d("title","\n display: flex;\n align-items: center;\n margin-left: 12px;\n margin-right: 12px;\n white-space: nowrap;\n font-weight: var(--n-font-weight);\n "),s("title-position-left",[d("line",[s("left",{width:"28px"})])]),s("title-position-right",[d("line",[s("right",{width:"28px"})])]),s("dashed",[d("line","\n background-color: #0000;\n height: 0px;\n width: 100%;\n border-style: dashed;\n border-width: 1px 0 0;\n ")]),s("vertical","\n display: inline-block;\n height: 1em;\n margin: 0 8px;\n vertical-align: middle;\n width: 1px;\n "),d("line","\n border: none;\n transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);\n height: 1px;\n width: 100%;\n margin: 0;\n "),f("dashed",[d("line",{backgroundColor:"var(--n-color)"})]),s("dashed",[d("line",{borderColor:"var(--n-color)"})]),s("vertical",{backgroundColor:"var(--n-color)"})]),I=Object.assign(Object.assign({},g.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),O=C({name:"Divider",props:I,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=w(e),r=g("Divider","-divider",L,j,e,o),a=$(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:h,textColor:v,fontWeight:_}}=r.value;return{"--n-bezier":t,"--n-color":h,"--n-text-color":v,"--n-font-weight":_}}),i=n?y("divider",void 0,a,e):void 0;return{mergedClsPrefix:o,cssVars:n?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:o,titlePlacement:n,vertical:r,dashed:a,cssVars:i,mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{role:"separator",class:["".concat(t,"-divider"),this.themeClass,{["".concat(t,"-divider--vertical")]:r,["".concat(t,"-divider--no-title")]:!o.default,["".concat(t,"-divider--dashed")]:a,["".concat(t,"-divider--title-position-").concat(n)]:o.default&&n}],style:i},r?null:l("div",{class:"".concat(t,"-divider__line ").concat(t,"-divider__line--left")}),!r&&o.default?l(k,null,l("div",{class:"".concat(t,"-divider__title")},this.$slots),l("div",{class:"".concat(t,"-divider__line ").concat(t,"-divider__line--right")})):null)}});const S={name:"Root",data(){return{isFetching:!1,content:"马之千里者，一食或尽粟一石。食马者不知其能千里而食也。是马也，虽有千里之能，食不饱，力不足，才美不外见，且欲与常马等不可得，安求其能千里也？",author:"韩愈 - 「马说」"}},methods:{fetchData(){this.isFetching||(this.isFetching=!0,fetch("https://v1.hitokoto.cn").then(e=>e.json()).then(e=>{setTimeout(()=>{this.isFetching=!1},3e3),this.content=e.hitokoto,this.author=(e.from_who?e.from_who:"")+" - 「"+e.from+"」"}))}},created(){},mounted(){setInterval(()=>{this.fetchData()},6e3)},components:{NGradientText:D,NCard:B,NDivider:O}},W={class:"wrap"};function E(e,o,n,r,a,i){const t=p("n-gradient-text"),h=p("n-divider"),v=p("n-card");return N(),R(v,{onClick:i.fetchData},{default:c(()=>[m(t,{size:24,type:"success"},{default:c(()=>[P("p",W,'"'+u(a.content)+'"',1)]),_:1}),m(h,{"title-placement":"right"},{default:c(()=>[m(t,{size:14,type:"success"},{default:c(()=>[T(u(a.author),1)]),_:1})]),_:1})]),_:1},8,["onClick"])}const M=z(S,[["render",E],["__scopeId","data-v-0381be4e"]]);export{M as default};
