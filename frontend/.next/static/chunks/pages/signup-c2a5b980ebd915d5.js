(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return e(8508)}])},8508:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return y}});var o=e(5893),i=e(3299),c=e(7294),a=e(7297),r=e(9521);function s(){let n=(0,a.Z)(["\n  width: 80%;\n  min-height: 100vh;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  /* align-items: center; */\n  justify-content: center;\n  /* border: 1px solid black; */\n"]);return s=function(){return n},n}function l(){let n=(0,a.Z)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n"]);return l=function(){return n},n}function d(){let n=(0,a.Z)(['\n  color: #4f3500;\n  font-weight: 700;\n  font-size: 4.8rem;\n  font-family: "GangwonEduPowerExtraBoldA";\n']);return d=function(){return n},n}function u(){let n=(0,a.Z)(['\n  color: #4f3500;\n  /* font-weight: 700; */\n  /* text-align: center; */\n  font-size: 2rem;\n  margin-bottom: 2.2rem;\n  /* font-family: "N"; */\n']);return u=function(){return n},n}function f(){let n=(0,a.Z)(['\n  color: #4f3500;\n  /* font-weight: 700; */\n  /* text-align: center; */\n  font-size: 1.8rem;\n  margin-bottom: 2rem;\n  /* font-family: "SlowSlow"; */\n  background: none;\n  border: none;\n  border-bottom: 1px solid #4f3500;\n  padding: 1rem;\n']);return f=function(){return n},n}function m(){let n=(0,a.Z)(["\n  color: red;\n  margin-bottom: 2rem;\n"]);return m=function(){return n},n}function g(){let n=(0,a.Z)(["\n  width: 100%;\n  height: 40px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 2px solid #1d1b1c;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.6rem;\n"]);return g=function(){return n},n}let h=r.ZP.div.withConfig({componentId:"sc-73861ed-0"})(s()),p=r.ZP.div.withConfig({componentId:"sc-73861ed-1"})(l());r.ZP.div.withConfig({componentId:"sc-73861ed-2"})(d());let x=r.ZP.div.withConfig({componentId:"sc-73861ed-3"})(u()),w=r.ZP.input.withConfig({componentId:"sc-73861ed-4"})(f()),k=r.ZP.div.withConfig({componentId:"sc-73861ed-5"})(m()),b=r.ZP.div.withConfig({componentId:"sc-73861ed-6"})(g());var v=e(1163),Z=e(594);function y(){let n=(0,v.useRouter)(),[t,e]=(0,c.useState)(!1),[a,r]=(0,c.useState)(),[s,l]=(0,c.useState)(!0),{data:d,status:u}=(0,i.useSession)({required:!1}),f=()=>{if(console.log("회원가입",d),null==d?void 0:d.idToken)Z.Z.post("https://www.4cuts4memories.com/backend/accounts/google/callback/",{accessToken:d.accessToken}).then(function(t){console.log(t),"202 UserAlreadyExist"===t.data.status&&t.data.nickname?n.push(t.data.pid):("202 UserAlreadyExist"!==t.data.status||t.data.nickname,l(!1))}).catch(function(n){console.log("에러발생"),console.log(n)});else{var t;Z.Z.post("https://www.4cuts4memories.com/backend/accounts/kakao/callback/",{accessToken:null==d?void 0:d.accessToken,email:null==d?void 0:null===(t=d.user)||void 0===t?void 0:t.email}).then(function(t){console.log(t),"202 UserAlreadyExist"===t.data.status&&t.data.nickname?n.push(t.data.pid):("202 UserAlreadyExist"!==t.data.status||t.data.nickname,l(!1))}).catch(function(n){console.log("에러발생"),console.log(n)})}},m=()=>{var t;console.log("닉네임"),Z.Z.post("https://www.4cuts4memories.com/backend/accounts/nickname/change",{email:null==d?void 0:null===(t=d.user)||void 0===t?void 0:t.email,nickname:a}).then(function(t){console.log(t),"201 Updated"===t.data.status?(e(!1),n.push(t.data.pid)):"300 Bad Request"===t.data.status&&e(!0)}).catch(function(n){console.log(n)})};return((0,c.useEffect)(()=>{"authenticated"===u&&f()},[u]),!0===s)?(0,o.jsx)(h,{children:(0,o.jsx)(p,{children:"로딩중..."})}):"authenticated"===u?(0,o.jsxs)(h,{children:[(0,o.jsx)(x,{children:"이름을 정해주세요"}),(0,o.jsx)(w,{type:"text",onChange:n=>{console.log(n.target.value),r(n.target.value)}}),t&&(0,o.jsx)(k,{children:"유효한 이름이 아닙니다"}),(0,o.jsx)(b,{onClick:m,children:"다음"})]}):(0,o.jsxs)("div",{children:["회원가입 중 문제가 발생하였습니다",(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:()=>(0,i.signIn)("google"),children:"Sign in"})]})}}},function(n){n.O(0,[876,934,774,888,179],function(){return n(n.s=7805)}),_N_E=n.O()}]);