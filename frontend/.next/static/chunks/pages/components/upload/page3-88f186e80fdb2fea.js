(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{3105:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/upload/page3",function(){return e(9416)}])},7232:function(n,t,e){"use strict";e.d(t,{$1:function(){return d},CJ:function(){return c},Ht:function(){return l},Nn:function(){return s},WQ:function(){return f},cg:function(){return u},hP:function(){return g},nY:function(){return m},u9:function(){return a},vf:function(){return p}});var r=e(4480),o=e(6983);let{persistAtom:i}=(0,o.J)(),c=(0,r.cn)({key:"frame",default:null}),u=(0,r.cn)({key:"color",default:"#000000"}),l=(0,r.cn)({key:"file1",default:""}),a=(0,r.cn)({key:"file2",default:""}),f=(0,r.cn)({key:"file3",default:""}),d=(0,r.cn)({key:"file4",default:""}),s=(0,r.cn)({key:"letterAtom",default:""}),p=(0,r.cn)({key:"authorAtom",default:""}),m=(0,r.cn)({key:"pageAtom",default:1}),g=(0,r.cn)({key:"modalAtom",default:!1})},9416:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return f}});var r=e(5893),o=e(7294),i=e(5314),c=e(1163),u=e(594),l=e(4480),a=e(7232);function f(n){let t=(0,c.useRouter)(),e=t.query.pid,f=(0,o.useRef)(),[d,s]=(0,l.FV)(a.cg),[p,m]=(0,l.FV)(a.CJ),[g,h]=(0,l.FV)(a.vf),[w,y]=(0,l.FV)(a.Nn),[b,k]=(0,l.FV)(a.Ht),[x,v]=(0,l.FV)(a.u9),[Z,C]=(0,l.FV)(a.WQ),[I,P]=(0,l.FV)(a.$1),[F,j]=(0,l.FV)(a.nY);console.log("frame",p);let z=n=>{h(n.target.value),console.log(g)},S=n=>{y(n.target.value),console.log(w),f.current.style.height="auto",f.current.style.height=f.current.scrollHeight+"px"},_=(n,t)=>{let e=atob(n.split(",")[1]),r=new ArrayBuffer(e.length),o=new Uint8Array(r);for(let i=0;i<e.length;i+=1)o[i]=e.charCodeAt(i);let c=new Blob([o],{type:"image/jpeg"}),u=new File([c],"image".concat(t,".jpg"));return console.log("image".concat(t," 변환됨")),u},N=async()=>{console.log("전송시작");let n=new FormData;[b,x,Z,I].forEach((t,e,r)=>{let o=_(t,e);n.append("image",o)}),console.log("image 모두 변환됨"),n.append("title",g),n.append("letter",w),n.append("color",d),n.append("frame",p),n.append("public_id",e),await (0,u.Z)({method:"post",url:"http://localhost:8000/backend/posts/newPost",data:n,headers:{"Content-Type":"multipart/form-data"}}).then(function(n){console.log(n),k(""),v(""),C(""),P(""),h(""),y(""),m(""),s("#FFD275"),j(1),t.push("/"+e)}).catch(function(n){console.log(n),alert("에러가 발생했습니다")})};return(0,r.jsxs)(i.W2,{children:[(0,r.jsxs)(i.LZ,{children:[(0,r.jsx)("div",{children:"Step 3"}),(0,r.jsx)("div",{children:"메시지를 남겨주세요"})]}),(0,r.jsx)(i.DK,{children:"from."}),(0,r.jsx)(i.S3,{onChange:z,maxLength:8,placeholder:"8글자 이하로 적어주세요"}),(0,r.jsx)(i.DK,{children:"메시지"}),(0,r.jsx)(i.kr,{rows:1,ref:f,onChange:S}),(0,r.jsx)(i.un,{style:{width:"100%",color:"white"},color:"#FF7575",onClick:()=>{p&&d&&b&&x&&Z&&I&&g&&(j("loading"),N())},children:"사진 올리기"})]})}},5314:function(n,t,e){"use strict";e.d(t,{Bo:function(){return N},DI:function(){return I},DK:function(){return C},LI:function(){return F},LZ:function(){return Z},Qk:function(){return P},S3:function(){return S},W2:function(){return v},Wp:function(){return z},g6:function(){return j},kr:function(){return _},ly:function(){return A},sb:function(){return J},un:function(){return V}});var r=e(7297),o=e(9521);function i(){let n=(0,r.Z)(["\n0%, 100% {\n    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\n  }\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(1800deg);\n    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\n  }\n  100% {\n    transform: rotateY(3600deg);\n  }\n"]);return i=function(){return n},n}function c(){let n=(0,r.Z)(["\n  width: 80%;\n  min-height: 100vh;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  /* align-items: center; */\n"]);return c=function(){return n},n}function u(){let n=(0,r.Z)(['\n  margin-top: 10rem;\n  margin-bottom: 3rem;\n  font-family: "SlowSlow";\n  display: flex;\n  flex-direction: column;\n  font-size: 2.8rem;\n  align-items: center;\n  &:last-child {\n    font-size: 3.2rem;\n  }\n']);return u=function(){return n},n}function l(){let n=(0,r.Z)(["\n  font-size: 1.7rem;\n  /* font-weight: 700; */\n  margin: 2rem 0 2rem 0;\n"]);return l=function(){return n},n}function a(){let n=(0,r.Z)(["\n  width: 100%;\n  overflow-x: scroll;\n  /* display: flex; */\n  white-space: nowrap;\n"]);return a=function(){return n},n}function f(){let n=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n"]);return f=function(){return n},n}function d(){let n=(0,r.Z)(["\n  position: relative;\n  /* padding: 1rem; */\n  margin-bottom: 2rem;\n  flex-grow: 0;\n  cursor: pointer;\n"]);return d=function(){return n},n}function s(){let n=(0,r.Z)(["\n  width: 6rem;\n  height: 6rem;\n  border-radius: 500px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /* background-color: red; */\n  border: 3px solid #fff9e7;\n  background: "," no-repeat center;\n  background-size: cover;\n  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.25);\n"]);return s=function(){return n},n}function p(){let n=(0,r.Z)(["\n      visibility: visible;\n    "]);return p=function(){return n},n}function m(){let n=(0,r.Z)(["\n  width: 6.8rem;\n  height: 6.8rem;\n  background: "," no-repeat center;\n  background-size: cover;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  border-radius: 500px;\n  visibility: hidden;\n  ","\n"]);return m=function(){return n},n}function g(){let n=(0,r.Z)(['\n  width: 100%;\n  background: none;\n  font-family: "SlowSlow";\n  border: none;\n  border-bottom: 1px solid black;\n  resize: none;\n  font-size: 2.4rem;\n  padding: 1rem;\n  padding-top: 0;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n']);return g=function(){return n},n}function h(){let n=(0,r.Z)(['\n  width: 100%;\n  background: none;\n  font-family: "SlowSlow";\n  border: 1px solid black;\n  resize: none;\n  font-size: 2.4rem;\n  padding: 1rem;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n']);return h=function(){return n},n}function w(){let n=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return w=function(){return n},n}function y(){let n=(0,r.Z)(["\n  width: 48%;\n  height: 6rem;\n  background: ",";\n  box-shadow: 0px 3px 6px #00000029;\n  border: 2px solid #1d1b1c;\n  border-radius: 12px;\n  margin-top: 4rem;\n  margin-bottom: 6rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #1d1b1c;\n  font-size: 1.8rem;\n  font-weight: 600;\n"]);return y=function(){return n},n}function b(){let n=(0,r.Z)(["\n  width: 100%;\n  height: 90vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return b=function(){return n},n}function k(){let n=(0,r.Z)(["\n  display: inline-block;\n  transform: translateZ(1px);\n  & > div {\n    display: inline-block;\n    width: 6rem;\n    height: 6rem;\n    margin: 8px;\n    border-radius: 50%;\n    background: #ff7575;\n    animation: "," 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n"]);return k=function(){return n},n}let x=(0,o.F4)(i()),v=o.ZP.div.withConfig({componentId:"sc-59dd23a4-0"})(c()),Z=o.ZP.div.withConfig({componentId:"sc-59dd23a4-1"})(u()),C=o.ZP.div.withConfig({componentId:"sc-59dd23a4-2"})(l()),I=o.ZP.div.withConfig({componentId:"sc-59dd23a4-3"})(a()),P=o.ZP.div.withConfig({componentId:"sc-59dd23a4-4"})(f()),F=o.ZP.div.withConfig({componentId:"sc-59dd23a4-5"})(d()),j=o.ZP.div.withConfig({componentId:"sc-59dd23a4-6"})(s(),n=>n.color||"black"),z=o.ZP.div.withConfig({componentId:"sc-59dd23a4-7"})(m(),n=>n.color||"black",n=>n.title===n.color&&(0,o.iv)(p())),S=o.ZP.input.withConfig({componentId:"sc-59dd23a4-8"})(g()),_=o.ZP.textarea.withConfig({componentId:"sc-59dd23a4-9"})(h()),N=o.ZP.div.withConfig({componentId:"sc-59dd23a4-10"})(w()),V=o.ZP.div.withConfig({componentId:"sc-59dd23a4-11"})(y(),n=>n.color),A=o.ZP.div.withConfig({componentId:"sc-59dd23a4-12"})(b()),J=o.ZP.div.withConfig({componentId:"sc-59dd23a4-13"})(k(),x)},6983:function(n,t){"use strict";t.J=void 0;let e=(n={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:e=localStorage}=n,r=({onSet:n,node:t,trigger:e,setSelf:r})=>{if("get"===e){let c=i();"function"==typeof c.then&&c.then(n=>{n.hasOwnProperty(t.key)&&r(n[t.key])}),c.hasOwnProperty(t.key)&&r(c[t.key])}n(async(n,e,r)=>{let c=i();"function"==typeof c.then?c.then(e=>o(n,e,t.key,r)):o(n,c,t.key,r)})},o=(n,t,e,r)=>{r?delete t[e]:t[e]=n,u(t)},i=()=>{let n=e.getItem(t);return null==n?{}:"string"==typeof n?c(n):"function"==typeof n.then?n.then(c):{}},c=n=>{if(void 0===n)return{};try{return JSON.parse(n)}catch(t){return console.error(t),{}}},u=n=>{try{"function"==typeof e.mergeItem?e.mergeItem(t,JSON.stringify(n)):e.setItem(t,JSON.stringify(n))}catch(r){console.error(r)}};return{persistAtom:r}};t.J=e}},function(n){n.O(0,[876,934,774,888,179],function(){return n(n.s=3105)}),_N_E=n.O()}]);