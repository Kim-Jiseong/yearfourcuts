(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{4051:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/upload/page1",function(){return e(7189)}])},7232:function(n,t,e){"use strict";e.d(t,{$1:function(){return s},CJ:function(){return c},Ht:function(){return f},Nn:function(){return a},WQ:function(){return d},cg:function(){return u},hP:function(){return m},nY:function(){return p},u9:function(){return l},vf:function(){return g}});var r=e(4480),o=e(6983);let{persistAtom:i}=(0,o.J)(),c=(0,r.cn)({key:"frame",default:null}),u=(0,r.cn)({key:"color",default:"#FFD275"}),f=(0,r.cn)({key:"file1",default:""}),l=(0,r.cn)({key:"file2",default:""}),d=(0,r.cn)({key:"file3",default:""}),s=(0,r.cn)({key:"file4",default:""}),a=(0,r.cn)({key:"letterAtom",default:""}),g=(0,r.cn)({key:"authorAtom",default:""}),p=(0,r.cn)({key:"pageAtom",default:1}),m=(0,r.cn)({key:"modalAtom",default:!1})},7189:function(n,t,e){"use strict";e.r(t),e.d(t,{Frame:function(){return h},default:function(){return w}});var r=e(7297),o=e(5893),i=e(7294),c=e(5314),u=e(1163),f=e(594),l=e(9521),d=e(4480),s=e(7232),a={src:"/_next/static/media/FrameSel1.f8d98c2f.png",height:314,width:103,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAQ0lEQVR4nGP89/3tfwY2PgaGX58YgJw3/xlYeRkYfn8Gcn58QJL5+gLIAcr8Asu8B3JgMt9eI3G+Pkcy4GLJfwYoAADB7SxmACPnBgAAAABJRU5ErkJggg==",blurWidth:3,blurHeight:8},g={src:"/_next/static/media/FrameSel2.f5fdfae2.png",height:315,width:208,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAhUlEQVR42hXOPRKCQAwF4NzfE3AebdQCLSzoRFGGEVnZdf9gJ4/k614ymTyq6ga70w2HtkdaC1pjmc7dgGs/4mEslAmJyaUM5dICZsboA9MUItTXR/i8oJsd02t2+EvQoZp8ZNKgZ04WyqbM9IsJQr/i0n9wfA4gCUWqlP39XaRaqepm3QBz65av9xptvgAAAABJRU5ErkJggg==",blurWidth:5,blurHeight:8},p={src:"/_next/static/media/FrameSel3.ccd88c8f.png",height:315,width:208,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAd0lEQVR42i2KOQ4CQQwE2zNejs34/0t4AJ9AIoIIkAhWu2gO24wtKqkuqel2edh82qN9O6YjY/sUw/JezWmlh5fXqqlXgdNLD3snbRpD6t+jmQ8M3mXoHMY0OsEMjikCb76e78jjYaKgnCBViLdnEagBRPGiRPYDf3pOT/1WWrcAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8};function m(){let n=(0,r.Z)(["\n      padding: 1rem;\n      border: 2px dashed;\n      border-color: ",";\n    "]);return m=function(){return n},n}function A(){let n=(0,r.Z)(["\n  padding: calc(1rem + 2px);\n  height: calc(100% + 2px);\n  border-radius: 4px;\n  /* width: 100%; */\n  cursor: pointer;\n  ","\n  margin-bottom: 2rem;\n"]);return A=function(){return n},n}let h=l.ZP.img.withConfig({componentId:"sc-a3846628-0"})(A(),n=>n.fid===n.select&&(0,l.iv)(m(),n.color));function w(n){(0,u.useRouter)();let[t,e]=(0,d.FV)(s.CJ),[r,l]=(0,i.useState)(),[m,A]=(0,d.FV)(s.nY),[w,b]=(0,d.FV)(s.cg),x=()=>{f.Z.get("http://ec2-13-125-79-217.ap-northeast-2.compute.amazonaws.com/api/posts/colorlist").then(n=>{console.log(n.data.colorlist[0]),l(n.data.colorlist)}).catch(n=>{console.log(n)})};return(0,i.useEffect)(()=>{x()},[]),(0,o.jsxs)(c.W2,{children:[(0,o.jsxs)(c.LZ,{children:[(0,o.jsx)("div",{children:"Step 1"}),(0,o.jsx)("div",{children:"템플릿을 골라주세요"})]}),(0,o.jsxs)(c.DK,{children:["모양 ",t]}),(0,o.jsxs)(c.DI,{children:[(0,o.jsx)(h,{src:a.src,fid:1,select:t,color:"#FFD275",onClick:()=>e(1)}),(0,o.jsx)(h,{src:g.src,fid:2,color:"#A0D2DB",select:t,onClick:()=>e(2)}),(0,o.jsx)(h,{src:p.src,fid:3,color:"#C490D1",select:t,onClick:()=>e(3)})]}),(0,o.jsx)(c.DK,{children:"컬러"}),(0,o.jsx)(c.Qk,{children:r&&r.map((n,t)=>(0,o.jsxs)(c.LI,{children:[(0,o.jsx)(c.Wp,{color:n,title:w}),(0,o.jsx)(c.g6,{color:n,onClick:()=>{b(n)}})]},n))}),(0,o.jsx)(c.un,{onClick:()=>{t&&w&&A(2)},children:"다음으로"})]})}},5314:function(n,t,e){"use strict";e.d(t,{DI:function(){return x},DK:function(){return b},LI:function(){return y},LZ:function(){return w},Qk:function(){return k},S3:function(){return I},W2:function(){return h},Wp:function(){return Z},g6:function(){return C},kr:function(){return v},un:function(){return P}});var r=e(7297),o=e(9521);function i(){let n=(0,r.Z)(["\n  width: 80%;\n  min-height: 100vh;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  /* align-items: center; */\n"]);return i=function(){return n},n}function c(){let n=(0,r.Z)(['\n  margin-top: 10rem;\n  margin-bottom: 3rem;\n  font-family: "SlowSlow";\n  display: flex;\n  flex-direction: column;\n  font-size: 2.4rem;\n  align-items: center;\n  &:last-child {\n    font-size: 3rem;\n  }\n']);return c=function(){return n},n}function u(){let n=(0,r.Z)(["\n  font-size: 1.8rem;\n  /* font-weight: 700; */\n  margin: 2rem 0 2rem 0;\n"]);return u=function(){return n},n}function f(){let n=(0,r.Z)(["\n  width: 100%;\n  overflow-x: scroll;\n  /* display: flex; */\n  white-space: nowrap;\n"]);return f=function(){return n},n}function l(){let n=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n"]);return l=function(){return n},n}function d(){let n=(0,r.Z)(["\n  position: relative;\n  /* padding: 1rem; */\n  margin-bottom: 2rem;\n  flex-grow: 0;\n  cursor: pointer;\n"]);return d=function(){return n},n}function s(){let n=(0,r.Z)(["\n  width: 6rem;\n  height: 6rem;\n  border-radius: 500px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  /* background-color: red; */\n  border: 3px solid #fff9e7;\n  background: "," no-repeat center;\n  background-size: cover;\n  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.25);\n"]);return s=function(){return n},n}function a(){let n=(0,r.Z)(["\n      visibility: visible;\n    "]);return a=function(){return n},n}function g(){let n=(0,r.Z)(["\n  width: 6.8rem;\n  height: 6.8rem;\n  background: "," no-repeat center;\n  background-size: cover;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  border-radius: 500px;\n  visibility: hidden;\n  ","\n"]);return g=function(){return n},n}function p(){let n=(0,r.Z)(['\n  width: 100%;\n  background: none;\n  font-family: "SlowSlow";\n  border: none;\n  border-bottom: 1px solid black;\n  resize: none;\n  font-size: 2.4rem;\n  padding: 1rem;\n  padding-top: 0;\n']);return p=function(){return n},n}function m(){let n=(0,r.Z)(['\n  width: 100%;\n  background: none;\n  font-family: "SlowSlow";\n  border: 1px solid black;\n  resize: none;\n  font-size: 2.4rem;\n  padding: 1rem;\n']);return m=function(){return n},n}function A(){let n=(0,r.Z)(["\n  width: 100%;\n  height: 6rem;\n  background: white;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 2px solid #1d1b1c;\n  border-radius: 12px;\n  margin-top: 4rem;\n  margin-bottom: 1rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #1d1b1c;\n  font-size: 1.8rem;\n  /* font-weight: 700; */\n"]);return A=function(){return n},n}let h=o.ZP.div.withConfig({componentId:"sc-242f9fc3-0"})(i()),w=o.ZP.div.withConfig({componentId:"sc-242f9fc3-1"})(c()),b=o.ZP.div.withConfig({componentId:"sc-242f9fc3-2"})(u()),x=o.ZP.div.withConfig({componentId:"sc-242f9fc3-3"})(f()),k=o.ZP.div.withConfig({componentId:"sc-242f9fc3-4"})(l()),y=o.ZP.div.withConfig({componentId:"sc-242f9fc3-5"})(d()),C=o.ZP.div.withConfig({componentId:"sc-242f9fc3-6"})(s(),n=>n.color||"black"),Z=o.ZP.div.withConfig({componentId:"sc-242f9fc3-7"})(g(),n=>n.color||"black",n=>n.title===n.color&&(0,o.iv)(a())),I=o.ZP.input.withConfig({componentId:"sc-242f9fc3-8"})(p()),v=o.ZP.textarea.withConfig({componentId:"sc-242f9fc3-9"})(m()),P=o.ZP.div.withConfig({componentId:"sc-242f9fc3-10"})(A())},6983:function(n,t){"use strict";t.J=void 0;let e=(n={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};let{key:t="recoil-persist",storage:e=localStorage}=n,r=({onSet:n,node:t,trigger:e,setSelf:r})=>{if("get"===e){let c=i();"function"==typeof c.then&&c.then(n=>{n.hasOwnProperty(t.key)&&r(n[t.key])}),c.hasOwnProperty(t.key)&&r(c[t.key])}n(async(n,e,r)=>{let c=i();"function"==typeof c.then?c.then(e=>o(n,e,t.key,r)):o(n,c,t.key,r)})},o=(n,t,e,r)=>{r?delete t[e]:t[e]=n,u(t)},i=()=>{let n=e.getItem(t);return null==n?{}:"string"==typeof n?c(n):"function"==typeof n.then?n.then(c):{}},c=n=>{if(void 0===n)return{};try{return JSON.parse(n)}catch(t){return console.error(t),{}}},u=n=>{try{"function"==typeof e.mergeItem?e.mergeItem(t,JSON.stringify(n)):e.setItem(t,JSON.stringify(n))}catch(r){console.error(r)}};return{persistAtom:r}};t.J=e}},function(n){n.O(0,[876,934,774,888,179],function(){return n(n.s=4051)}),_N_E=n.O()}]);