"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{300:function(n,e){e.Z={src:"/_next/static/media/blank.31fa7ee5.png",height:241,width:370,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAE0lEQVR4nGP89+/ffwY8YDAoAAB/xBPjcwGt/AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},7232:function(n,e,t){t.d(e,{$1:function(){return u},CJ:function(){return c},Ht:function(){return d},Nn:function(){return f},WQ:function(){return a},cg:function(){return l},hP:function(){return p},nY:function(){return h},u9:function(){return s},vf:function(){return g}});var i=t(4480),o=t(6983);let{persistAtom:r}=(0,o.J)(),c=(0,i.cn)({key:"frame",default:null}),l=(0,i.cn)({key:"color",default:"#FFFFFF"}),d=(0,i.cn)({key:"file1",default:""}),s=(0,i.cn)({key:"file2",default:""}),a=(0,i.cn)({key:"file3",default:""}),u=(0,i.cn)({key:"file4",default:""}),f=(0,i.cn)({key:"letterAtom",default:""}),g=(0,i.cn)({key:"authorAtom",default:""}),h=(0,i.cn)({key:"pageAtom",default:1}),p=(0,i.cn)({key:"modalAtom",default:!1})},106:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var i=t(5893),o=t(7294),r=t(6302),c=t(9106),l=t(1850),d=t(221),s={src:"/_next/static/media/upload.8585da39.png",height:249,width:375,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAAKklEQVR42mP4/+8/EPz7z/Dv/7+vX//9/wdk/Hj9+geY8e/Dh79ABkwNAHbFJ2LLZ7Z/AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},a={src:"/_next/static/media/upload2.d2692f67.png",height:409,width:326,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAAAAAD/rdHkAAAAJklEQVR42mP4BwYM//7/AyKG///+AxGQ9+Pnf5Dg9+9wQYgSmEoANRgvmhboNl4AAAAASUVORK5CYII=",blurWidth:6,blurHeight:8},u=t(300),f=t(4480),g=t(7232);function h(n){let[e,t]=(0,f.FV)(g.cg),[h,p]=(0,f.FV)(g.CJ),[m,x]=(0,f.FV)(g.Ht),b={maxSizeMB:.2,maxWidthOrHeight:1920,useWebWorker:!0},w=async()=>{var n;let e=null===(n=A.current)||void 0===n?void 0:n.files[0];if(e){let t=await (0,d.Z)(e,b),i=new FileReader;console.log("file",e),console.log("com",t),t&&(i.readAsDataURL(t),i.onloadend=()=>{let n=i.result;console.log("base64data",n),x(n)})}},A=(0,o.useRef)(null),j=(0,o.useCallback)(()=>{A.current&&A.current.click()},[]),[k,y]=(0,f.FV)(g.u9),v=async()=>{var n;let e=null===(n=C.current)||void 0===n?void 0:n.files[0];if(e){let t=await (0,d.Z)(e,b),i=new FileReader;console.log("file",e),console.log("com",t),t&&(i.readAsDataURL(t),i.onloadend=()=>{let n=i.result;console.log("base64data",n),y(n)})}},C=(0,o.useRef)(null),Z=(0,o.useCallback)(()=>{C.current&&C.current.click()},[]),[R,I]=(0,f.FV)(g.WQ),P=async()=>{var n;let e=null===(n=Y.current)||void 0===n?void 0:n.files[0];if(e){let t=await (0,d.Z)(e,b),i=new FileReader;console.log("file",e),console.log("com",t),t&&(i.readAsDataURL(t),i.onloadend=()=>{let n=i.result;console.log("base64data",n),I(n)})}},Y=(0,o.useRef)(null),F=(0,o.useCallback)(()=>{Y.current&&Y.current.click()},[]),[T,U]=(0,f.FV)(g.$1),V=async()=>{let n=S.current.files[0];if(n){let e=await (0,d.Z)(n,b),t=new FileReader;console.log("file",n),console.log("com",e),e&&(t.readAsDataURL(e),t.onloadend=()=>{let n=t.result;console.log("base64data",n),U(n)})}},S=(0,o.useRef)(null),W=(0,o.useCallback)(()=>{S.current&&S.current.click()},[]);return(0,i.jsxs)("div",{children:[1===h&&(0,i.jsxs)(r.W2,{color:e,children:[(0,i.jsxs)(r.RM,{children:[(0,i.jsxs)(r.YT,{onClick:j,children:[(0,i.jsx)("img",{src:m||s.src}),(0,i.jsx)("input",{ref:A,accept:"image/*",type:"file",onChange:w})]}),(0,i.jsxs)(r.YT,{onClick:Z,children:[(0,i.jsx)("img",{src:k||s.src}),(0,i.jsx)("input",{ref:C,accept:"image/*",type:"file",onChange:v})]}),(0,i.jsxs)(r.YT,{onClick:F,children:[(0,i.jsx)("img",{src:R||s.src}),(0,i.jsx)("input",{ref:Y,accept:"image/*",type:"file",onChange:P})]}),(0,i.jsxs)(r.YT,{onClick:W,children:[(0,i.jsx)("img",{src:T||s.src}),(0,i.jsx)("input",{ref:S,accept:"image/*",type:"file",onChange:V})]})]}),(0,i.jsxs)(r.Ic,{children:[(0,i.jsx)(r.kg,{children:(0,i.jsx)("img",{src:m||u.Z.src})}),(0,i.jsx)(r.kg,{children:(0,i.jsx)("img",{src:k||u.Z.src})}),(0,i.jsx)(r.kg,{children:(0,i.jsx)("img",{src:R||u.Z.src})}),(0,i.jsx)(r.kg,{children:(0,i.jsx)("img",{src:T||u.Z.src})})]})]}),2===h&&(0,i.jsxs)(c.W2,{color:e,children:[(0,i.jsxs)(c.RM,{children:[(0,i.jsxs)(c.YT,{onClick:j,children:[(0,i.jsx)("img",{src:m||a.src}),(0,i.jsx)("input",{ref:A,accept:"image/*",type:"file",onChange:w})]}),(0,i.jsxs)(c.YT,{onClick:Z,children:[(0,i.jsx)("img",{src:k||a.src}),(0,i.jsx)("input",{ref:C,accept:"image/*",type:"file",onChange:v})]})]}),(0,i.jsxs)(c.Ic,{children:[(0,i.jsxs)(c.YT,{onClick:F,children:[(0,i.jsx)("img",{src:R||a.src}),(0,i.jsx)("input",{ref:Y,accept:"image/*",type:"file",onChange:P})]}),(0,i.jsxs)(c.YT,{onClick:W,children:[(0,i.jsx)("img",{src:T||a.src}),(0,i.jsx)("input",{ref:S,accept:"image/*",type:"file",onChange:V})]})]})]}),3===h&&(0,i.jsxs)(l.W2,{color:e,children:[(0,i.jsxs)(l.RM,{children:[(0,i.jsxs)(l.YT,{onClick:j,children:[(0,i.jsx)("img",{src:m||a.src}),(0,i.jsx)("input",{ref:A,accept:"image/*",type:"file",onChange:w})]}),(0,i.jsxs)(l.YT,{onClick:Z,children:[(0,i.jsx)("img",{src:k||a.src}),(0,i.jsx)("input",{ref:C,accept:"image/*",type:"file",onChange:v})]})]}),(0,i.jsxs)(l.Ic,{children:[(0,i.jsxs)(l.YT,{onClick:F,children:[(0,i.jsx)("img",{src:R||a.src}),(0,i.jsx)("input",{ref:Y,accept:"image/*",type:"file",onChange:P})]}),(0,i.jsxs)(l.YT,{onClick:W,children:[(0,i.jsx)("img",{src:T||a.src}),(0,i.jsx)("input",{ref:S,accept:"image/*",type:"file",onChange:V})]})]})]})]})}},6302:function(n,e,t){t.d(e,{$S:function(){return A},Bo:function(){return j},Ic:function(){return m},RM:function(){return p},W2:function(){return h},YT:function(){return x},bV:function(){return w},kg:function(){return b}});var i=t(7297);t(1876);var o=t(9521);function r(){let n=(0,i.Z)(["\n  width: 100%;\n  /* min-height: 100vh; */\n  padding-bottom: calc(150% + 6rem);\n  margin: 0 auto;\n  display: flex;\n  /* justify-content: space-between; */\n  position: relative;\n  background: "," no-repeat center;\n  background-size: cover;\n  & div:last-child {\n    right: 0;\n  }\n  /* align-items: center; */\n"]);return r=function(){return n},n}function c(){let n=(0,i.Z)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  /* background-color: red; */\n  position: absolute;\n  padding-top: 1rem;\n  padding-bottom: 7rem;\n  width: 50%;\n  height: 100%;\n  top: 0;\n  left: 0;\n"]);return c=function(){return n},n}function l(){let n=(0,i.Z)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  /* background-color: red; */\n  position: absolute;\n  padding-top: 1rem;\n  padding-bottom: 7rem;\n  width: 50%;\n  height: 100%;\n  top: 0;\n  right: 0;\n"]);return l=function(){return n},n}function d(){let n=(0,i.Z)(["\n  background-color: white;\n  width: 90%;\n  height: 23%;\n  cursor: pointer;\n  overflow: hidden;\n  & img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  & input {\n    visibility: hidden;\n  }\n  /* border: 1px solid blue; */\n  /* height: 10rem; */\n  /* position: absolute; */\n"]);return d=function(){return n},n}function s(){let n=(0,i.Z)(["\n  filter: grayscale();\n"]);return s=function(){return n},n}function a(){let n=(0,i.Z)(['\n  font-family: "SlowSlow";\n  font-size: 2rem;\n  position: absolute;\n  right: 12px;\n  bottom: 10px;\n  background: white;\n  padding: 0 1rem 0.4rem 1rem;\n  border-radius: 8px;\n']);return a=function(){return n},n}function u(){let n=(0,i.Z)(['\n  /* width: auto; */\n  /* position: absolute; */\n  font-size: 2rem;\n  /* font-family: "SlowSlow"; */\n  /* right: 0; */\n  /* bottom: 0px; */\n  background: white;\n  padding: 1rem 1rem 1rem 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  margin-right: 1rem;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  & i {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  &:hover {\n    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);\n  }\n']);return u=function(){return n},n}function f(){let n=(0,i.Z)(['\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  flex-direction: column;\n  /* justify-content: center; */\n  align-items: center;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  cursor: pointer;\n  word-wrap: break-word;\n  & p {\n    margin-top: 10%;\n    width: 80%;\n    max-height: 80%;\n    font-family: "SlowSlow";\n    font-size: 2rem;\n    font-weight: 600;\n    overflow-y: auto;\n    white-space: pre-line;\n    text-align: left;\n    /* word-wrap: break-word; */\n  }\n  & p:last-child {\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n    text-align: right;\n  }\n']);return f=function(){return n},n}function g(){let n=(0,i.Z)(["\n  width: 40%;\n  position: absolute;\n  bottom: 10px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  /* padding: 1rem; */\n"]);return g=function(){return n},n}let h=o.ZP.div.withConfig({componentId:"sc-5c41cfd0-0"})(r(),n=>n.color),p=o.ZP.div.withConfig({componentId:"sc-5c41cfd0-1"})(c()),m=o.ZP.div.withConfig({componentId:"sc-5c41cfd0-2"})(l()),x=o.ZP.div.withConfig({componentId:"sc-5c41cfd0-3"})(d()),b=(0,o.ZP)(x).withConfig({componentId:"sc-5c41cfd0-4"})(s());o.ZP.p.withConfig({componentId:"sc-5c41cfd0-5"})(a());let w=o.ZP.div.withConfig({componentId:"sc-5c41cfd0-6"})(u()),A=o.ZP.div.withConfig({componentId:"sc-5c41cfd0-7"})(f()),j=o.ZP.div.withConfig({componentId:"sc-5c41cfd0-8"})(g())},9106:function(n,e,t){t.d(e,{Ic:function(){return f},RM:function(){return u},W2:function(){return a},YT:function(){return g}});var i=t(7297);t(1876);var o=t(9521);function r(){let n=(0,i.Z)(["\n  width: 100%;\n  /* min-height: 100vh; */\n  padding-bottom: calc(150% + 6rem);\n  margin: 0 auto;\n  display: flex;\n  /* justify-content: space-between; */\n  position: relative;\n  background: "," no-repeat center;\n  background-size: cover;\n  & div:last-child {\n    right: 0;\n  }\n  /* align-items: center; */\n"]);return r=function(){return n},n}function c(){let n=(0,i.Z)(["\n  width: 48%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  /* background-color: red; */\n  position: absolute;\n  padding-top: 7rem;\n  padding-bottom: 1rem;\n  width: 50%;\n  height: 100%;\n  padding-left: 1rem;\n  left: 0; ;\n"]);return c=function(){return n},n}function l(){let n=(0,i.Z)(["\n  width: 48%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  /* background-color: red; */\n  padding-top: 1rem;\n  padding-bottom: 7rem;\n  padding-right: 1rem;\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  align-items: flex-end;\n  right: 0; ;\n"]);return l=function(){return n},n}function d(){let n=(0,i.Z)(["\n  background-color: white;\n  width: 96%;\n  height: 49%;\n  cursor: pointer;\n  overflow: hidden;\n  & img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  & input {\n    visibility: hidden;\n  }\n  /* border: 1px solid blue; */\n  /* height: 10rem; */\n  /* position: absolute; */\n"]);return d=function(){return n},n}function s(){let n=(0,i.Z)(["\n  filter: grayscale();\n"]);return s=function(){return n},n}let a=o.ZP.div.withConfig({componentId:"sc-2954cda8-0"})(r(),n=>n.color),u=o.ZP.div.withConfig({componentId:"sc-2954cda8-1"})(c()),f=o.ZP.div.withConfig({componentId:"sc-2954cda8-2"})(l()),g=o.ZP.div.withConfig({componentId:"sc-2954cda8-3"})(d());(0,o.ZP)(g).withConfig({componentId:"sc-2954cda8-4"})(s())},1850:function(n,e,t){t.d(e,{Ic:function(){return f},RM:function(){return u},W2:function(){return a},YT:function(){return g}});var i=t(7297);t(1876);var o=t(9521);function r(){let n=(0,i.Z)(["\n  width: 100%;\n  /* min-height: 100vh; */\n  padding-bottom: calc(150% + 6rem);\n  margin: 0 auto;\n  display: flex;\n  /* justify-content: space-between; */\n  position: relative;\n  background: "," no-repeat center;\n  background-size: cover;\n  & div:last-child {\n    right: 0;\n  }\n  /* align-items: center; */\n"]);return r=function(){return n},n}function c(){let n=(0,i.Z)(["\n  width: 48%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  /* background-color: red; */\n  position: absolute;\n  padding-top: 1rem;\n  padding-bottom: 7rem;\n  width: 50%;\n  height: 100%;\n  padding-left: 1rem;\n  top: 0;\n  left: 0; ;\n"]);return c=function(){return n},n}function l(){let n=(0,i.Z)(["\n  width: 48%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  /* background-color: red; */\n  padding-top: 1rem;\n  padding-bottom: 7rem;\n  padding-right: 1rem;\n  position: absolute;\n\n  width: 50%;\n  height: 100%;\n  align-items: flex-end;\n  top: 0;\n  right: 0;\n"]);return l=function(){return n},n}function d(){let n=(0,i.Z)(["\n  background-color: white;\n  width: 96%;\n  height: 49%;\n  cursor: pointer;\n  overflow: hidden;\n  & img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  & input {\n    visibility: hidden;\n  }\n  /* border: 1px solid blue; */\n  /* height: 10rem; */\n  /* position: absolute; */\n"]);return d=function(){return n},n}function s(){let n=(0,i.Z)(["\n  filter: grayscale();\n"]);return s=function(){return n},n}let a=o.ZP.div.withConfig({componentId:"sc-df0df020-0"})(r(),n=>n.color),u=o.ZP.div.withConfig({componentId:"sc-df0df020-1"})(c()),f=o.ZP.div.withConfig({componentId:"sc-df0df020-2"})(l()),g=o.ZP.div.withConfig({componentId:"sc-df0df020-3"})(d());(0,o.ZP)(g).withConfig({componentId:"sc-df0df020-4"})(s())}}]);