(self.webpackChunkalecture=self.webpackChunkalecture||[]).push([[695],{9695:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var l=a(8678),n=a(3046),r=a(3564),s=a(9669),c=a.n(s),i=a(7294),u=a(5977),m=a(3727),d=a(8100);const o=()=>{const{data:e,error:t,revalidate:a,mutate:s}=(0,d.ZP)("/api/users",r.Z),[o,p]=(0,i.useState)(!1),[E,v]=(0,l.Z)(""),[h,w]=(0,l.Z)(""),b=(0,i.useCallback)((e=>{e.preventDefault(),p(!1),c().post("/api/users/login",{email:E,password:h},{withCredentials:!0}).then((e=>{a()})).catch((e=>{var t,a;p(401===(null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.statusCode))}))}),[E,h]);return void 0===e?i.createElement("div",null,"로딩중..."):e?i.createElement(u.l_,{to:"/workspace/sleact/channel/일반"}):i.createElement("div",{id:"container"},i.createElement(n.h4,null,"Sleact"),i.createElement(n.l0,{onSubmit:b},i.createElement(n.__,{id:"email-label"},i.createElement("span",null,"이메일 주소"),i.createElement("div",null,i.createElement(n.II,{type:"email",id:"email",name:"email",value:E,onChange:v}))),i.createElement(n.__,{id:"password-label"},i.createElement("span",null,"비밀번호"),i.createElement("div",null,i.createElement(n.II,{type:"password",id:"password",name:"password",value:h,onChange:w})),o&&i.createElement(n.jj,null,"이메일과 비밀번호 조합이 일치하지 않습니다.")),i.createElement(n.zx,{type:"submit"},"로그인")),i.createElement(n.Ji,null,"아직 회원이 아니신가요? ",i.createElement(m.rU,{to:"/signup"},"회원가입 하러가기")))}}}]);