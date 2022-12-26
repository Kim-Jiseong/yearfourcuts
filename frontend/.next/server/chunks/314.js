"use strict";
exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 5314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bo": () => (/* binding */ BtnWrapper),
/* harmony export */   "DI": () => (/* binding */ FrameContainer),
/* harmony export */   "DK": () => (/* binding */ SubTitle),
/* harmony export */   "LI": () => (/* binding */ ColorWrapperContainer),
/* harmony export */   "LZ": () => (/* binding */ InfoContainer),
/* harmony export */   "Qk": () => (/* binding */ ColorContainer),
/* harmony export */   "S3": () => (/* binding */ Author),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "Wp": () => (/* binding */ ColorWrapperSel),
/* harmony export */   "g6": () => (/* binding */ ColorWrapper),
/* harmony export */   "kr": () => (/* binding */ Letter),
/* harmony export */   "ly": () => (/* binding */ LoadingContainer),
/* harmony export */   "sb": () => (/* binding */ LoaderWrapper),
/* harmony export */   "un": () => (/* binding */ Btn)
/* harmony export */ });
/* unused harmony export spinner */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

// import css from "styled-jsx/css";
// import { colors } from 'styles/theme'
const spinner = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-0"
})`
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  /* align-items: center; */
`;
const InfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-1"
})`
  margin-top: 10rem;
  margin-bottom: 3rem;
  font-family: "SlowSlow";
  display: flex;
  flex-direction: column;
  font-size: 2.8rem;
  align-items: center;
  &:last-child {
    font-size: 3.2rem;
  }
`;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-2"
})`
  font-size: 1.7rem;
  /* font-weight: 700; */
  margin: 2rem 0 2rem 0;
`;
const FrameContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-3"
})`
  width: 100%;
  overflow-x: scroll;
  /* display: flex; */
  white-space: nowrap;
`;
const ColorContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-4"
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const ColorWrapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-5"
})`
  position: relative;
  /* padding: 1rem; */
  margin-bottom: 2rem;
  flex-grow: 0;
  cursor: pointer;
`;
const ColorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-6"
})`
  width: 6rem;
  height: 6rem;
  border-radius: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: red; */
  border: 3px solid #fff9e7;
  background: ${(props)=>props.color || "black"} no-repeat center;
  background-size: cover;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.25);
`;
const ColorWrapperSel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-7"
})`
  width: 6.8rem;
  height: 6.8rem;
  background: ${(props)=>props.color || "black"} no-repeat center;
  background-size: cover;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 500px;
  visibility: hidden;
  ${(props)=>props.title === props.color && styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
      visibility: visible;
    `}
`;
const Author = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
    componentId: "sc-59dd23a4-8"
})`
  width: 100%;
  background: none;
  font-family: "SlowSlow";
  border: none;
  border-bottom: 1px solid black;
  resize: none;
  font-size: 2.4rem;
  padding: 1rem;
  padding-top: 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Letter = styled_components__WEBPACK_IMPORTED_MODULE_0___default().textarea.withConfig({
    componentId: "sc-59dd23a4-9"
})`
  width: 100%;
  background: none;
  font-family: "SlowSlow";
  border: 1px solid black;
  resize: none;
  font-size: 2.4rem;
  padding: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-10"
})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-11"
})`
  width: 48%;
  height: 6rem;
  background: ${(props)=>props.color};
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #1d1b1c;
  border-radius: 12px;
  margin-top: 4rem;
  margin-bottom: 6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d1b1c;
  font-size: 1.8rem;
  font-weight: 600;
`;
const LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-12"
})`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-59dd23a4-13"
})`
  display: inline-block;
  transform: translateZ(1px);
  & > div {
    display: inline-block;
    width: 6rem;
    height: 6rem;
    margin: 8px;
    border-radius: 50%;
    background: #ff7575;
    animation: ${spinner} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`;


/***/ })

};
;