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
/* harmony export */   "NY": () => (/* binding */ SetHiddenBtn),
/* harmony export */   "Rp": () => (/* binding */ SetHiddenConatainer),
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
/* unused harmony export HiddenSpanWrapper */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

// import { colors } from 'styles/theme'
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-0"
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
    componentId: "sc-a8d786bf-1"
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
    componentId: "sc-a8d786bf-2"
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
    componentId: "sc-a8d786bf-3"
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
    componentId: "sc-a8d786bf-4"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-5"
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
  position: relative;
  & img {
    position: absolute;
    left: -20px;
    width: 17%;
  }
`;
const BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-6"
})`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const SubBtn1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Btn).withConfig({
    componentId: "sc-a8d786bf-7"
})`
  width: 50%;
  height: 5.6rem;
`;
const SubBtn2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Btn).withConfig({
    componentId: "sc-a8d786bf-8"
})`
  width: 45%;
  height: 5.6rem;
  color: black;
`;
const NoPostContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-9"
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
    componentId: "sc-a8d786bf-10"
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
    componentId: "sc-a8d786bf-11"
})`
  width: 100px;
  margin: 0 auto;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const URLShareWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-12"
})`
  margin: 2rem;
`;
const URLShareInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-13"
})`
  width: 90%;
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
    componentId: "sc-a8d786bf-14"
})``;
const PostListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-15"
})`
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  display: block;
`;
const PostListInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-16"
})`
  font-family: "SlowSlow";
  text-align: center;
  font-size: 2.2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const FrameBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-17"
})`
  width: 210px;
  ${(props)=>props.id === 1 && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 105px;
    `}
  /* padding-bottom: 150%; */
  margin-right: 2rem;
  display: inline-block;
`;
const ModalBg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-18"
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
    componentId: "sc-a8d786bf-19"
})`
  width: 80%;
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
    componentId: "sc-a8d786bf-20"
})`
  width: 90%;
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
    componentId: "sc-a8d786bf-21"
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
    componentId: "sc-a8d786bf-22"
})`
  width: 90%;
  margin: 0 auto;
`;
const SetHiddenConatainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-23"
})`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;
const SetHiddenBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().label.withConfig({
    componentId: "sc-a8d786bf-24"
})`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  & input {
    appearance: none;
    position: relative;
    box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.25);
    background-color: white;
    border-radius: 4px;
    width: 10rem;
    height: 3rem;
    cursor: pointer;
    margin-left: 1rem;
  }
  & input::before {
    content: "";
    position: absolute;
    left: 0;
    width: 5rem;
    height: 3rem;
    background-color: #ff7575;
    border-radius: 4px;
    transition: left 250ms linear;
  }
  & input:checked::before {
    left: 5rem;
  }
  & input:checked {
  }
`;
const HiddenSpanWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a8d786bf-25"
})`
  font-size: 1.2rem;
  /* padding: 1rem; */
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  pointer-events: none;
  & span {
    width: 50%;
    text-align: center;
  }
`;


/***/ })

};
;