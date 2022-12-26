"use strict";
exports.id = 302;
exports.ids = [302];
exports.modules = {

/***/ 6302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$S": () => (/* binding */ LetterModal),
/* harmony export */   "Bo": () => (/* binding */ BtnWrapper),
/* harmony export */   "Ic": () => (/* binding */ PhotoContainer2),
/* harmony export */   "RM": () => (/* binding */ PhotoContainer),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "YT": () => (/* binding */ PhotoWrapper),
/* harmony export */   "bV": () => (/* binding */ MailIcon),
/* harmony export */   "kg": () => (/* binding */ PhotoWrapperGrey)
/* harmony export */ });
/* unused harmony export Author */
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4300);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


// import { colors } from 'styles/theme'
// export interface FFrameTypes {
//   id?: number;
//   color?: string;
//   select?: number;
//   prop?: any;
// }
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-da6e6f8-0"
})`
  width: 100%;
  /* min-height: 100vh; */
  padding-bottom: calc(150% + 6rem);
  margin: 0 auto;
  display: flex;
  /* justify-content: space-between; */
  position: relative;
  background: ${(props)=>props.color} no-repeat center;
  background-size: cover;
  & div:last-child {
    right: 0;
  }
  /* align-items: center; */
`;
const PhotoContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-da6e6f8-1"
})`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  position: absolute;
  padding-top: 1rem;
  padding-bottom: 7rem;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
`;
const PhotoContainer2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-da6e6f8-2"
})`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  position: absolute;
  padding-top: 1rem;
  padding-bottom: 7rem;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
`;
const PhotoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-da6e6f8-3"
})`
  background-color: white;
  width: 90%;
  height: 23%;
  cursor: pointer;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & input {
    visibility: hidden;
  }
  /* border: 1px solid blue; */
  /* height: 10rem; */
  /* position: absolute; */
`;
const PhotoWrapperGrey = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(PhotoWrapper).withConfig({
    componentId: "sc-da6e6f8-4"
})`
  filter: grayscale();
`;
const Author = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-da6e6f8-5"
})`
  font-family: "SlowSlow";
  font-size: 2rem;
  position: absolute;
  right: 12px;
  bottom: 10px;
  background: white;
  padding: 0 1rem 0.4rem 1rem;
  border-radius: 8px;
`;
const MailIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-da6e6f8-6"
})`
  /* width: auto; */
  /* position: absolute; */
  font-size: 2rem;
  /* font-family: "SlowSlow"; */
  /* right: 0; */
  /* bottom: 0px; */
  background: white;
  padding: 1rem 1rem 0.9rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  }
`;
const LetterModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-da6e6f8-7"
})`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  word-wrap: break-word;
  & p {
    width: 80%;
    font-family: "SlowSlow";
    font-size: 2rem;
    font-weight: 600;
    white-space: pre-line;
    /* word-wrap: break-word; */
  }
  & p:last-child {
    position: absolute;
    bottom: 10px;
    right: 10px;
    text-align: right;
  }
`;
const BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-da6e6f8-8"
})`
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 0);
  /* background: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;


/***/ })

};
;