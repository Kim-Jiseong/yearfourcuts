(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return t(8508)}])},8508:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});var o=t(5893),i=t(3299),c=t(7294),r=t(7297),s=t(9521);function a(){let n=(0,r.Z)(["\n  width: 80%;\n  min-height: 100vh;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  /* align-items: center; */\n  justify-content: center;\n  /* border: 1px solid black; */\n"]);return a=function(){return n},n}function l(){let n=(0,r.Z)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n"]);return l=function(){return n},n}function u(){let n=(0,r.Z)(['\n  color: #4f3500;\n  font-weight: 700;\n  font-size: 4.8rem;\n  font-family: "GangwonEduPowerExtraBoldA";\n']);return u=function(){return n},n}function d(){let n=(0,r.Z)(['\n  color: #4f3500;\n  /* font-weight: 700; */\n  /* text-align: center; */\n  font-size: 2.4rem;\n  margin-bottom: 2.2rem;\n  /* font-family: "N"; */\n']);return d=function(){return n},n}function f(){let n=(0,r.Z)(['\n  color: #4f3500;\n  /* font-weight: 700; */\n  /* text-align: center; */\n  font-size: 1.8rem;\n  margin-bottom: 2rem;\n  /* font-family: "SlowSlow"; */\n  background: none;\n  border: none;\n  border-bottom: 1px solid #4f3500;\n  padding: 1rem;\n']);return f=function(){return n},n}function g(){let n=(0,r.Z)(["\n  color: red;\n  margin-bottom: 2rem;\n"]);return g=function(){return n},n}function m(){let n=(0,r.Z)(["\n  width: 100%;\n  height: 40px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 2px solid #1d1b1c;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.6rem;\n"]);return m=function(){return n},n}let h=s.ZP.div.withConfig({componentId:"sc-9e46e80d-0"})(a()),p=s.ZP.div.withConfig({componentId:"sc-9e46e80d-1"})(l());s.ZP.div.withConfig({componentId:"sc-9e46e80d-2"})(u());let x=s.ZP.div.withConfig({componentId:"sc-9e46e80d-3"})(d()),w=s.ZP.input.withConfig({componentId:"sc-9e46e80d-4"})(f()),b=s.ZP.div.withConfig({componentId:"sc-9e46e80d-5"})(g()),k=s.ZP.div.withConfig({componentId:"sc-9e46e80d-6"})(m());var v=t(1163),Z=t(594);function j(){let n=(0,v.useRouter)(),[e,t]=(0,c.useState)(!1),[r,s]=(0,c.useState)(),[a,l]=(0,c.useState)(!0),{data:u,status:d}=(0,i.useSession)({required:!1}),f=()=>{console.log("회원가입",u),(null==u?void 0:u.accessToken)&&Z.Z.post("https://www.4cuts4memories.com/backend/accounts/google/callback/",{accessToken:u.accessToken}).then(function(e){console.log(e),"202 UserAlreadyExist"===e.data.status&&e.data.nickname?n.push(e.data.pid):("202 UserAlreadyExist"!==e.data.status||e.data.nickname,l(!1))}).catch(function(n){console.log("에러발생"),(0,i.signIn)("google",{callbackUrl:"/signup"}),console.log(n)})},g=()=>{var e;console.log("닉네임"),Z.Z.post("https://www.4cuts4memories.com/backend/accounts/nickname/change",{email:null==u?void 0:null===(e=u.user)||void 0===e?void 0:e.email,nickname:r}).then(function(e){console.log(e),"201 Updated"===e.data.status?(t(!1),n.push(e.data.pid)):"300 Bad Request"===e.data.status&&t(!0)}).catch(function(n){console.log(n)})};return((0,c.useEffect)(()=>{"authenticated"===d&&(console.log("유저 생성 시작"),f())},[d]),!0===a)?(0,o.jsx)(h,{children:(0,o.jsx)(p,{children:"로딩중..."})}):"authenticated"===d?(0,o.jsxs)(h,{children:[(0,o.jsx)(x,{children:"이름을 정해주세요"}),(0,o.jsx)(w,{type:"text",onChange:n=>{console.log(n.target.value),s(n.target.value)}}),e&&(0,o.jsx)(b,{children:"유효한 이름이 아닙니다"}),(0,o.jsx)(k,{onClick:g,children:"다음"})]}):(0,o.jsxs)("div",{children:["회원가입 중 문제가 발생하였습니다",(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:()=>(0,i.signIn)("google"),children:"Sign in"})]})}}},function(n){n.O(0,[876,934,774,888,179],function(){return n(n.s=7805)}),_N_E=n.O()}]);