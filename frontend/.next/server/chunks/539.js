"use strict";
exports.id = 539;
exports.ids = [539];
exports.modules = {

/***/ 7539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ShowFrame)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "buffer"
var external_buffer_ = __webpack_require__(4300);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/components/showframe/frame1/style.js


// import { colors } from 'styles/theme'
// export interface FFrameTypes {
//   id?: number;
//   color?: string;
//   select?: number;
//   prop?: any;
// }
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-ab723d58-0"
})`
  width: 100%;
  /* min-height: 100vh; */
  padding-bottom: calc(300% + 6rem);
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
const PhotoContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-ab723d58-1"
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  position: absolute;
  padding-top: 1rem;
  padding-bottom: 7rem;
  height: 100%;
  top: 0;
  left: 0;
`;
// export const PhotoContainer2 = styled.div`
//   width: 50%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   /* background-color: red; */
//   position: absolute;
//   padding-top: 1rem;
//   padding-bottom: 7rem;
//   width: 50%;
//   height: 100%;
//   top: 0;
//   right: 0;
// `;
const PhotoWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-ab723d58-2"
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
const PhotoWrapperGrey = external_styled_components_default()(PhotoWrapper).withConfig({
    componentId: "sc-ab723d58-3"
})`
  filter: grayscale();
`;
const Author = external_styled_components_default().p.withConfig({
    componentId: "sc-ab723d58-4"
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
const MailIcon = external_styled_components_default().div.withConfig({
    componentId: "sc-ab723d58-5"
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
const LetterModal = external_styled_components_default().div.withConfig({
    componentId: "sc-ab723d58-6"
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

// EXTERNAL MODULE: ./styles/components/frame2/style.js
var style = __webpack_require__(1876);
// EXTERNAL MODULE: ./styles/components/frame3/style.js
var frame3_style = __webpack_require__(1850);
// EXTERNAL MODULE: ./public/img/blank.png
var blank = __webpack_require__(300);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./atoms/atom.ts
var atom = __webpack_require__(7232);
;// CONCATENATED MODULE: ./pages/components/frame/showFrame.tsx








function ShowFrame(props) {
    const S3 = "https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/";
    const [modal, setModal] = (0,external_recoil_.useRecoilState)(atom/* modalAtom */.hP);
    const [Bg, setBg] = (0,external_react_.useState)(props.color);
    const [frame, setFrame] = (0,external_react_.useState)(props.frame);
    const [file1, setFile1] = (0,external_react_.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file1);
    const [file2, setFile2] = (0,external_react_.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file2);
    const [file3, setFile3] = (0,external_react_.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file3);
    const [file4, setFile4] = (0,external_react_.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file4);
    const [letter, setLetter] = (0,external_react_.useState)(props.letter);
    const [author, setAuthor] = (0,external_react_.useState)(props.author);
    const [pk, setPk] = (0,external_react_.useState)(props.id);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: ()=>{
            console.log("opendetail", pk, props.id);
            setModal(pk);
        },
        children: [
            frame === 1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
                    color: Bg,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PhotoContainer, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(PhotoWrapper, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file1 ? file1 : blank/* default.src */.Z.src
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PhotoWrapper, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file2 ? file2 : blank/* default.src */.Z.src
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PhotoWrapper, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file3 ? file3 : blank/* default.src */.Z.src
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PhotoWrapper, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file4 ? file4 : blank/* default.src */.Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Author, {
                            children: author
                        })
                    ]
                })
            }),
            frame === 2 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* Container */.W2, {
                    color: Bg,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* PhotoContainer */.RM, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(style/* PhotoWrapper */.YT, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file1 ? file1 : blank/* default.src */.Z.src
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(style/* PhotoWrapper */.YT, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file2 ? file2 : blank/* default.src */.Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* PhotoContainer2 */.Ic, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(style/* PhotoWrapper */.YT, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file3 ? file3 : blank/* default.src */.Z.src
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(style/* PhotoWrapper */.YT, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file4 ? file4 : blank/* default.src */.Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Author, {
                            children: author
                        })
                    ]
                })
            }),
            frame === 3 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame3_style/* Container */.W2, {
                    color: Bg,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame3_style/* PhotoContainer */.RM, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(frame3_style/* PhotoWrapper */.YT, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file1 ? file1 : blank/* default.src */.Z.src
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(frame3_style/* PhotoWrapper */.YT, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file2 ? file2 : blank/* default.src */.Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame3_style/* PhotoContainer2 */.Ic, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(frame3_style/* PhotoWrapper */.YT, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file3 ? file3 : blank/* default.src */.Z.src
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(frame3_style/* PhotoWrapper */.YT, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file4 ? file4 : blank/* default.src */.Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Author, {
                            children: author
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;