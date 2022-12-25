"use strict";
exports.id = 715;
exports.ids = [715];
exports.modules = {

/***/ 5715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DetailFrame)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6302);
/* harmony import */ var styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1876);
/* harmony import */ var styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1850);
/* harmony import */ var public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(300);






function DetailFrame(props) {
    const S3 = "https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/";
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [Bg, setBg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.color);
    const [frame, setFrame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.frame);
    const [file1, setFile1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file1);
    const [file2, setFile2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file2);
    const [file3, setFile3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file3);
    const [file4, setFile4] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file4);
    const [letter, setLetter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.letter);
    const [author, setAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.author);
    const [pk, setPk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.id);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            frame === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
                    color: Bg,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoContainer */ .RM, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file1 ? file1 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file2 ? file2 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file3 ? file3 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file4 ? file4 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoContainer2 */ .Ic, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapperGrey */ .kg, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file1 ? file1 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapperGrey */ .kg, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file2 ? file2 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapperGrey */ .kg, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file3 ? file3 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapperGrey */ .kg, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file4 ? file4 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                            onClick: ()=>{
                                setModal(true);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bi bi-envelope-paper"
                            })
                        }),
                        modal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .LetterModal */ .$S, {
                            onClick: ()=>{
                                setModal(false);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: letter
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: author
                                })
                            ]
                        })
                    ]
                })
            }),
            frame === 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W2, {
                    color: Bg,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoContainer */ .RM, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file1 ? file1 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file2 ? file2 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoContainer2 */ .Ic, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file3 ? file3 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file4 ? file4 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                            onClick: ()=>{
                                setModal(true);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bi bi-envelope-paper"
                            })
                        }),
                        modal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .LetterModal */ .$S, {
                            onClick: ()=>{
                                setModal(false);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: letter
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: author
                                })
                            ]
                        })
                    ]
                })
            }),
            frame === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W2, {
                    color: Bg,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoContainer */ .RM, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file1 ? file1 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file2 ? file2 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoContainer2 */ .Ic, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file3 ? file3 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: file4 ? file4 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                            onClick: ()=>{
                                setModal(true);
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "bi bi-envelope-paper"
                            })
                        }),
                        modal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .LetterModal */ .$S, {
                            onClick: ()=>{
                                setModal(false);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: letter
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: author
                                })
                            ]
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