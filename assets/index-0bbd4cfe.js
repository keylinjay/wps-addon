import{p as x,q as b,r as c,s as p,o as I,j as L,w as t,k as e,l as a,t as C,v as f,x as R,n as v,y as j,z,m as B,A as S,B as T,C as $}from"./index-267d7a3c.js";import{N as K,a as y,b as q}from"./LayoutContent-d12489f4.js";import{N as D,a as w}from"./FormItem-c65c3669.js";const h={code:0,data:{token:"admin"}};async function F(m){return h.data.token=m.name,h}const U={login:F},V="JTools",J={__name:"index",setup(m){const g=x(),{query:r}=b(),o=c({name:"admin",password:"12"});_();function _(){const n=p.get("loginInfo");n&&(o.value.name=n.name||"",o.value.password=n.password||"")}const u=c(!0),i=c(!1);async function d(){const{name:n,password:l}=o.value;if(!n||!l){$message.warning("请输入用户名和密码");return}try{i.value=!0,$message.loading("正在验证...");const s=await U.login({name:n,password:l.toString()});if(console.log("当前用户名是：",n),$message.success("登录成功"),T(s.data.token),u.value?p.set("loginInfo",{name:n,password:l}):p.remove("loginInfo"),await $(),r.redirect){const k=r.redirect;Reflect.deleteProperty(r,"redirect"),g.push({path:k,query:r})}else g.push("/")}catch(s){console.error(s),$message.removeMessage()}i.value=!1}function N(){o.value.name="admin",o.value.password="123",d()}return N(),(n,l)=>(I(),L(e(S),{position:"absolute","content-style":"padding: 24px;"},{default:t(()=>[a(e(f),{style:{height:"100%"},justify:"center",align:"center",vertical:"",size:"large"},{default:t(()=>[a(e(C),null,{default:t(()=>[a(e(f),{justify:"center"},{default:t(()=>[a(e(R),{size:24,type:"info"},{default:t(()=>[v(j(V))]),_:1})]),_:1})]),_:1}),a(e(K),{"content-style":"padding: 24px;"},{default:t(()=>[a(e(D),{"label-placement":"left","label-width":"auto"},{default:t(()=>[a(e(w),{label:"用户名："},{default:t(()=>[a(e(y),{value:o.value.name,"onUpdate:value":l[0]||(l[0]=s=>o.value.name=s),autofocus:"",placeholder:"admin",maxlength:20},null,8,["value"])]),_:1}),a(e(w),{label:"密码："},{default:t(()=>[a(e(y),{value:o.value.password,"onUpdate:value":l[1]||(l[1]=s=>o.value.password=s),type:"password","show-password-on":"mousedown",placeholder:"123456",maxlength:20,onKeypress:z(d,["enter"])},null,8,["value","onKeypress"])]),_:1}),a(e(f),{justify:"space-between",align:"center",size:"large"},{default:t(()=>[a(e(q),{checked:u.value,label:"记住我","on-update:checked":s=>u.value=s},null,8,["checked","on-update:checked"]),a(e(B),{type:"primary",loading:i.value,onClick:d},{default:t(()=>[v(" 登录 ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{J as default};
