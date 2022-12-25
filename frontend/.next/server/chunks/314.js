"use strict";
exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 5314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/* harmony export */   "un": () => (/* binding */ Btn)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

// import css from "styled-jsx/css";
// import { colors } from 'styles/theme'
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-242f9fc3-0"
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
    componentId: "sc-242f9fc3-1"
})`
  margin-top: 10rem;
  margin-bottom: 3rem;
  font-family: "SlowSlow";
  display: flex;
  flex-direction: column;
  font-size: 2.4rem;
  align-items: center;
  &:last-child {
    font-size: 3rem;
  }
`;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-242f9fc3-2"
})`
  font-size: 1.8rem;
  /* font-weight: 700; */
  margin: 2rem 0 2rem 0;
`;
const FrameContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-242f9fc3-3"
})`
  width: 100%;
  overflow-x: scroll;
  /* display: flex; */
  white-space: nowrap;
`;
const ColorContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-242f9fc3-4"
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const ColorWrapperContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-242f9fc3-5"
})`
  position: relative;
  /* padding: 1rem; */
  margin-bottom: 2rem;
  flex-grow: 0;
  cursor: pointer;
`;
const ColorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-242f9fc3-6"
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
    componentId: "sc-242f9fc3-7"
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
    componentId: "sc-242f9fc3-8"
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
`;
const Letter = styled_components__WEBPACK_IMPORTED_MODULE_0___default().textarea.withConfig({
    componentId: "sc-242f9fc3-9"
})`
  width: 100%;
  background: none;
  font-family: "SlowSlow";
  border: 1px solid black;
  resize: none;
  font-size: 2.4rem;
  padding: 1rem;
`;
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-242f9fc3-10"
})`
  width: 100%;
  height: 6rem;
  background: white;
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #1d1b1c;
  border-radius: 12px;
  margin-top: 4rem;
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d1b1c;
  font-size: 1.8rem;
  /* font-weight: 700; */
`;


/***/ })

};
;