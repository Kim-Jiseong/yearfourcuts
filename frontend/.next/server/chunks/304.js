"use strict";
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/blank.31fa7ee5.png","height":241,"width":370,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAE0lEQVR4nGP89+/ffwY8YDAoAAB/xBPjcwGt/AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 6302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$S": () => (/* binding */ LetterModal),
/* harmony export */   "Ic": () => (/* binding */ PhotoContainer2),
/* harmony export */   "RM": () => (/* binding */ PhotoContainer),
/* harmony export */   "S3": () => (/* binding */ Author),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "YT": () => (/* binding */ PhotoWrapper),
/* harmony export */   "bV": () => (/* binding */ MailIcon),
/* harmony export */   "kg": () => (/* binding */ PhotoWrapperGrey)
/* harmony export */ });
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
    componentId: "sc-2a09b8a0-0"
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
    componentId: "sc-2a09b8a0-1"
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
    componentId: "sc-2a09b8a0-2"
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
    componentId: "sc-2a09b8a0-3"
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
    componentId: "sc-2a09b8a0-4"
})`
  filter: grayscale();
`;
const Author = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-2a09b8a0-5"
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
    componentId: "sc-2a09b8a0-6"
})`
  width: auto;
  margin-right: 1rem;
  position: absolute;
  font-size: 2rem;
  right: 0;
  bottom: 10px;
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
    componentId: "sc-2a09b8a0-7"
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


/***/ }),

/***/ 1876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ic": () => (/* binding */ PhotoContainer2),
/* harmony export */   "RM": () => (/* binding */ PhotoContainer),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "YT": () => (/* binding */ PhotoWrapper)
/* harmony export */ });
/* unused harmony export PhotoWrapperGrey */
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
    componentId: "sc-2954cda8-0"
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
    componentId: "sc-2954cda8-1"
})`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  /* background-color: red; */
  position: absolute;
  padding-top: 7rem;
  padding-bottom: 1rem;
  width: 50%;
  height: 100%;
  padding-left: 1rem;
  left: 0; ;
`;
const PhotoContainer2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-2954cda8-2"
})`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: red; */
  padding-top: 1rem;
  padding-bottom: 7rem;
  padding-right: 1rem;
  position: absolute;
  width: 50%;
  height: 100%;
  align-items: flex-end;
  right: 0; ;
`;
const PhotoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-2954cda8-3"
})`
  background-color: white;
  width: 96%;
  height: 49%;
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
    componentId: "sc-2954cda8-4"
})`
  filter: grayscale();
`;


/***/ }),

/***/ 1850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ic": () => (/* binding */ PhotoContainer2),
/* harmony export */   "RM": () => (/* binding */ PhotoContainer),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "YT": () => (/* binding */ PhotoWrapper)
/* harmony export */ });
/* unused harmony export PhotoWrapperGrey */
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
    componentId: "sc-df0df020-0"
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
    componentId: "sc-df0df020-1"
})`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  /* background-color: red; */
  position: absolute;
  padding-top: 1rem;
  padding-bottom: 7rem;
  width: 50%;
  height: 100%;
  padding-left: 1rem;
  top: 0;
  left: 0; ;
`;
const PhotoContainer2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-df0df020-2"
})`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: red; */
  padding-top: 1rem;
  padding-bottom: 7rem;
  padding-right: 1rem;
  position: absolute;

  width: 50%;
  height: 100%;
  align-items: flex-end;
  top: 0;
  right: 0;
`;
const PhotoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-df0df020-3"
})`
  background-color: white;
  width: 96%;
  height: 49%;
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
    componentId: "sc-df0df020-4"
})`
  filter: grayscale();
`;


/***/ })

};
;