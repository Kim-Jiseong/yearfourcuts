(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{9157:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/upload/page2",function(){return e(6037)}])},6037:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return a}});var o=e(5893),i=e(7294),r=e(5314),c=e(1163),u=e(594),d=e(4480),l=e(106),s=e(7232);function a(n){(0,c.useRouter)();let t=()=>{u.Z.get("http://localhost:8000/backend/posts/colorlist").then(n=>{console.log(n.data.colorlist[0]),v(n.data.colorlist)}).catch(n=>{console.log(n)})};(0,i.useEffect)(()=>{t()},[]);let[e,a]=(0,d.FV)(s.Ht),[f,m]=(0,d.FV)(s.u9),[p,h]=(0,d.FV)(s.WQ),[g,w]=(0,d.FV)(s.$1),[b,x]=(0,d.FV)(s.CJ),[Z,v]=(0,i.useState)(),[k,y]=(0,d.FV)(s.nY),[C,j]=(0,d.FV)(s.cg);return console.log("frame",b),(0,o.jsxs)(r.W2,{children:[(0,o.jsxs)(r.LZ,{children:[(0,o.jsx)("div",{children:"Step 2"}),(0,o.jsx)("div",{children:"프레임 컬러를 고르고, 사진을 올려주세요"})]}),(0,o.jsx)(l.default,{}),(0,o.jsx)(r.DK,{children:"컬러"}),(0,o.jsx)(r.Qk,{children:Z&&Z.map((n,t)=>(0,o.jsxs)(r.LI,{children:[(0,o.jsx)(r.Wp,{color:n,title:C}),(0,o.jsx)(r.g6,{color:n,onClick:()=>{j(n)}})]},n))}),(0,o.jsxs)(r.Bo,{children:[(0,o.jsx)(r.un,{color:"white",onClick:()=>{y(k-1)},children:"이전으로"}),(0,o.jsx)(r.un,{color:"#FF7575",style:{color:"white"},onClick:()=>{b&&C&&e&&f&&p&&g&&y(3)},children:"다음으로"})]})]})}},5314:function(n,t,e){"use strict";e.d(t,{Bo:function(){return V},DI:function(){return j},DK:function(){return C},LI:function(){return P},LZ:function(){return y},Qk:function(){return I},S3:function(){return F},W2:function(){return k},Wp:function(){return _},g6:function(){return z},kr:function(){return S},ly:function(){return N},sb:function(){return W},un:function(){return E}});var o=e(7297),i=e(9521);function r(){let n=(0,o.Z)(["\n0%, 100% {\n    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\n  }\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(1800deg);\n    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\n  }\n  100% {\n    transform: rotateY(3600deg);\n  }\n"]);return r=function(){return n},n}function c(){let n=(0,o.Z)(["\n  width: 80%;\n  min-height: 100vh;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  /* align-items: center; */\n"]);return c=function(){return n},n}function u(){let n=(0,o.Z)(['\n  margin-top: 10rem;\n  margin-bottom: 3rem;\n  font-family: "SlowSlow";\n  display: flex;\n  flex-direction: column;\n  font-size: 2.8rem;\n  align-items: center;\n  &:last-child {\n    font-size: 3.2rem;\n  }\n']);return u=function(){return n},n}function d(){let n=(0,o.Z)(["\n  font-size: 1.7rem;\n  /* font-weight: 700; */\n  margin: 2rem 0 2rem 0;\n"]);return d=function(){return n},n}function l(){let n=(0,o.Z)(["\n  width: 100%;\n  overflow-x: scroll;\n  /* display: flex; */\n  white-space: nowrap;\n"]);return l=function(){return n},n}function s(){let n=(0,o.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n"]);return s=function(){return n},n}function a(){let n=(0,o.Z)(["\n  position: relative;\n  /* padding: 1rem; */\n  margin-bottom: 2rem;\n  flex-grow: 0;\n  cursor: pointer;\n"]);return a=function(){return n},n}function f(){let n=(0,o.Z)(["\n  width: 6rem;\n  height: 6rem;\n  border-radius: 500px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /* background-color: red; */\n  border: 3px solid #fff9e7;\n  background: "," no-repeat center;\n  background-size: cover;\n  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.25);\n"]);return f=function(){return n},n}function m(){let n=(0,o.Z)(["\n      visibility: visible;\n    "]);return m=function(){return n},n}function p(){let n=(0,o.Z)(["\n  width: 6.8rem;\n  height: 6.8rem;\n  background: "," no-repeat center;\n  background-size: cover;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  border-radius: 500px;\n  visibility: hidden;\n  ","\n"]);return p=function(){return n},n}function h(){let n=(0,o.Z)(['\n  width: 100%;\n  background: none;\n  font-family: "SlowSlow";\n  border: none;\n  border-bottom: 1px solid black;\n  resize: none;\n  font-size: 2.4rem;\n  padding: 1rem;\n  padding-top: 0;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n']);return h=function(){return n},n}function g(){let n=(0,o.Z)(['\n  width: 100%;\n  background: none;\n  font-family: "SlowSlow";\n  border: 1px solid black;\n  resize: none;\n  font-size: 2.4rem;\n  padding: 1rem;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n']);return g=function(){return n},n}function w(){let n=(0,o.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return w=function(){return n},n}function b(){let n=(0,o.Z)(["\n  width: 48%;\n  height: 6rem;\n  background: ",";\n  box-shadow: 0px 3px 6px #00000029;\n  border: 2px solid #1d1b1c;\n  border-radius: 12px;\n  margin-top: 4rem;\n  margin-bottom: 6rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #1d1b1c;\n  font-size: 1.8rem;\n  font-weight: 600;\n"]);return b=function(){return n},n}function x(){let n=(0,o.Z)(["\n  width: 100%;\n  height: 90vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return x=function(){return n},n}function Z(){let n=(0,o.Z)(["\n  display: inline-block;\n  transform: translateZ(1px);\n  & > div {\n    display: inline-block;\n    width: 6rem;\n    height: 6rem;\n    margin: 8px;\n    border-radius: 50%;\n    background: #ff7575;\n    animation: "," 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n"]);return Z=function(){return n},n}let v=(0,i.F4)(r()),k=i.ZP.div.withConfig({componentId:"sc-59dd23a4-0"})(c()),y=i.ZP.div.withConfig({componentId:"sc-59dd23a4-1"})(u()),C=i.ZP.div.withConfig({componentId:"sc-59dd23a4-2"})(d()),j=i.ZP.div.withConfig({componentId:"sc-59dd23a4-3"})(l()),I=i.ZP.div.withConfig({componentId:"sc-59dd23a4-4"})(s()),P=i.ZP.div.withConfig({componentId:"sc-59dd23a4-5"})(a()),z=i.ZP.div.withConfig({componentId:"sc-59dd23a4-6"})(f(),n=>n.color||"black"),_=i.ZP.div.withConfig({componentId:"sc-59dd23a4-7"})(p(),n=>n.color||"black",n=>n.title===n.color&&(0,i.iv)(m())),F=i.ZP.input.withConfig({componentId:"sc-59dd23a4-8"})(h()),S=i.ZP.textarea.withConfig({componentId:"sc-59dd23a4-9"})(g()),V=i.ZP.div.withConfig({componentId:"sc-59dd23a4-10"})(w()),E=i.ZP.div.withConfig({componentId:"sc-59dd23a4-11"})(b(),n=>n.color),N=i.ZP.div.withConfig({componentId:"sc-59dd23a4-12"})(x()),W=i.ZP.div.withConfig({componentId:"sc-59dd23a4-13"})(Z(),v)}},function(n){n.O(0,[876,934,810,106,774,888,179],function(){return n(n.s=9157)}),_N_E=n.O()}]);