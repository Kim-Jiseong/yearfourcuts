"use strict";
exports.id = 780;
exports.ids = [780];
exports.modules = {

/***/ 6780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bo": () => (/* binding */ BtnWrapper),
/* harmony export */   "DK": () => (/* binding */ SubTitle),
/* harmony export */   "F0": () => (/* binding */ ModalContainer),
/* harmony export */   "Hu": () => (/* binding */ PostListInfo),
/* harmony export */   "J4": () => (/* binding */ NoPostInfo),
/* harmony export */   "Ld": () => (/* binding */ PostListContainer),
/* harmony export */   "MA": () => (/* binding */ SubBtn2),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "YC": () => (/* binding */ ModalInfoContainer),
/* harmony export */   "Yq": () => (/* binding */ SubBtn1),
/* harmony export */   "_w": () => (/* binding */ NoPostContainer),
/* harmony export */   "al": () => (/* binding */ ShareContainer),
/* harmony export */   "dE": () => (/* binding */ ModalPostWrapper),
/* harmony export */   "g1": () => (/* binding */ ModalBg),
/* harmony export */   "gN": () => (/* binding */ ControlContainer),
/* harmony export */   "gY": () => (/* binding */ URLShareWrapper),
/* harmony export */   "h4": () => (/* binding */ Header),
/* harmony export */   "oB": () => (/* binding */ HeaderContent),
/* harmony export */   "rZ": () => (/* binding */ URLShareButton),
/* harmony export */   "sJ": () => (/* binding */ FrameBox),
/* harmony export */   "tc": () => (/* binding */ URLShareInput),
/* harmony export */   "un": () => (/* binding */ Btn),
/* harmony export */   "wn": () => (/* binding */ ModalPostContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

// import { colors } from 'styles/theme'
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-0"
})`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  /* justify-content: center; */
  /* border: 1px solid black; */
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-1"
})`
  width: 100%;
  height: 6.2rem;
  position: absolute;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
`;
const HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-2"
})`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & i {
    cursor: pointer;
  }
`;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-3"
})`
  color: #4f3500;
  /* font-weight: 700; */
  text-align: center;
  font-size: 2.4rem;
  margin-top: 8.4rem;
  margin-bottom: 2.2rem;
  font-family: "SlowSlow";
`;
const ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-4"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-5"
})`
  width: 100%;
  height: 8.4rem;
  background: ${(props)=>props.color};
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #1d1b1c;
  border-radius: 12px;
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: white;
  font-size: 1.8rem;
  /* font-weight: 700; */
`;
const BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-6"
})`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const SubBtn1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Btn).withConfig({
    componentId: "sc-fbe50663-7"
})`
  width: 50%;
  height: 5.6rem;
`;
const SubBtn2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Btn).withConfig({
    componentId: "sc-fbe50663-8"
})`
  width: 45%;
  height: 5.6rem;
  color: black;
`;
const NoPostContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-9"
})`
  width: 100%;
  padding-bottom: 120%;
  margin-top: 2rem;
  margin-bottom: 10rem;
  background: #ffffff80 0% 0% no-repeat padding-box;
  border: 2px dashed #333333;
  border-radius: 12px;
  position: relative;
`;
const NoPostInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-10"
})`
  width: 100%;
  font-family: "slowslow";
  font-size: 2.2rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ShareContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-11"
})`
  width: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const URLShareWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-12"
})`
  margin: 2rem;
`;
const URLShareInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-13"
})`
  width: 80%;
  height: 3.5rem;
  background: #ffffff;
  box-shadow: inset 0px 2px 6px #00000029;
  border: 1px solid #1d1b1c;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  margin: 0 auto;
  & input {
    width: 80%;
    height: 3.5rem;
    background: none;
    color: #a5a5a5;
    border: none;
  }
`;
const URLShareButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-fbe50663-14"
})``;
const PostListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-15"
})`
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  display: block;
`;
const PostListInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-16"
})`
  font-family: "SlowSlow";
  text-align: center;
  font-size: 2.2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const FrameBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-17"
})`
  width: 210px;
  /* padding-bottom: 150%; */
  margin-right: 2rem;
  display: inline-block;
`;
const ModalBg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-18"
})`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
  cursor: pointer;
`;
const ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-19"
})`
  position: fixed;
  background-color: white;
  border-radius: 20px;
  padding: 1.6rem;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-20"
})`
  width: 80%;
  text-align: center;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
  & div:last-child {
    cursor: pointer;
  }
`;
const ModalPostContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-21"
})`
  width: 90%;
  max-width: 387px;
  position: fixed;
  /* background-color: white; */
  border-radius: 20px;
  padding: 1.6rem;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalPostWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-fbe50663-22"
})`
  width: 80%;
  margin: 0 auto;
`;


/***/ })

};
;