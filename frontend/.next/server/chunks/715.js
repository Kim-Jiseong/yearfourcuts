"use strict";
exports.id = 715;
exports.ids = [715];
exports.modules = {

/***/ 5715:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(300);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7276);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var atoms_atom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7232);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_11__]);
axios__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function DetailFrame(props) {
    const S3 = "https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/";
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)({
        required: false
    });
    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [masterModal, setMasterModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_7__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_10__/* .modalAtom */ .hP);
    const [master, setMaster] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.master);
    const [Bg, setBg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.color);
    const [frame, setFrame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.frame);
    const [file1, setFile1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file1);
    const [file2, setFile2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file2);
    const [file3, setFile3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file3);
    const [file4, setFile4] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://yearfourcuts.s3.ap-northeast-2.amazonaws.com/" + props.file4);
    const [letter, setLetter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.letter);
    const [author, setAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.author);
    const [pk, setPk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.id);
    const imgContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onHtmlToPng = ()=>{
        console.log("onCapture");
        html2canvas__WEBPACK_IMPORTED_MODULE_9___default()(imgContainer.current, {
            allowTaint: true,
            useCORS: true
        }).then((canvas)=>{
            console.log("canvas", canvas);
            onSaveAs(canvas.toDataURL("image/png"), "4cuts4memories.png");
        });
        // const onCapture = () => {};
        const onSaveAs = (uri, filename)=>{
            console.log("onSaveAs");
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.href = uri;
            link.download = filename;
            link.click();
            document.body.removeChild(link);
        };
    };
    const deletePost = ()=>{
        axios__WEBPACK_IMPORTED_MODULE_11__["default"].post("https://www.4cuts4memories.com/backend/" + "posts/deletePost", {
            post_pk: pk
        }).then(function(res) {
            console.log(res);
            alert("삭제되었습니다");
            next_router__WEBPACK_IMPORTED_MODULE_5___default().reload();
        }).catch(function(error) {
            alert("사진 삭제에 실패했습니다. 다시 시도해주세요.");
            console.log(error);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            frame === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
                    ref: imgContainer,
                    color: Bg,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoContainer */ .RM, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file1 ? file1 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file2 ? file2 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file3 ? file3 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file4 ? file4 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoContainer2 */ .Ic, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapperGrey */ .kg, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file1 ? file1 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapperGrey */ .kg, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file2 ? file2 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapperGrey */ .kg, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file3 ? file3 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .PhotoWrapperGrey */ .kg, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file4 ? file4 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        master === session?.user?.email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .BtnWrapper */ .Bo, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                                    onClick: ()=>{
                                        const result = confirm("이 사진을 삭제하시겠습니까?");
                                        if (result === true) {
                                            deletePost();
                                        } else {
                                            return;
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "bi bi-trash"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                                    onClick: ()=>{
                                        const result = confirm("이 사진을 다운로드하시겠습니까?");
                                        if (result === true) {
                                            onHtmlToPng();
                                        } else {
                                            return;
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "bi bi-download"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                                    onClick: ()=>{
                                        setModal(true);
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "bi bi-envelope-paper"
                                    })
                                })
                            ]
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
                    ref: imgContainer,
                    color: Bg,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoContainer */ .RM, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file1 ? file1 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file2 ? file2 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoContainer2 */ .Ic, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file3 ? file3 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame2_style__WEBPACK_IMPORTED_MODULE_3__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file4 ? file4 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        master === session?.user?.email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .BtnWrapper */ .Bo, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                                    onClick: ()=>{
                                        const result = confirm("이 사진을 삭제하시겠습니까?");
                                        if (result === true) {
                                            deletePost();
                                        } else {
                                            return;
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "bi bi-trash"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                                    onClick: ()=>{
                                        const result = confirm("이 사진을 다운로드하시겠습니까?");
                                        if (result === true) {
                                            onHtmlToPng();
                                        } else {
                                            return;
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "bi bi-download"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                                    onClick: ()=>{
                                        setModal(true);
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "bi bi-envelope-paper"
                                    })
                                })
                            ]
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
                    ref: imgContainer,
                    color: Bg,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoContainer */ .RM, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file1 ? file1 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file2 ? file2 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoContainer2 */ .Ic, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file3 ? file3 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame3_style__WEBPACK_IMPORTED_MODULE_4__/* .PhotoWrapper */ .YT, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        crossOrigin: "anonymous",
                                        src: file4 ? file4 : public_img_blank_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src
                                    })
                                })
                            ]
                        }),
                        master === session?.user?.email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .BtnWrapper */ .Bo, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                                    onClick: ()=>{
                                        const result = confirm("이 사진을 삭제하시겠습니까?");
                                        if (result === true) {
                                            deletePost();
                                        } else {
                                            return;
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "bi bi-trash"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                                    onClick: ()=>{
                                        const result = confirm("이 사진을 다운로드하시겠습니까?");
                                        if (result === true) {
                                            onHtmlToPng();
                                        } else {
                                            return;
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "bi bi-download"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_components_frame1_style__WEBPACK_IMPORTED_MODULE_2__/* .MailIcon */ .bV, {
                                    onClick: ()=>{
                                        setModal(true);
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "bi bi-envelope-paper"
                                    })
                                })
                            ]
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;