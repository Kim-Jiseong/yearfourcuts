"use strict";
exports.id = 106;
exports.ids = [106];
exports.modules = {

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Frame1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/components/frame1/style.js
var style = __webpack_require__(6302);
// EXTERNAL MODULE: ./styles/components/frame2/style.js
var frame2_style = __webpack_require__(1876);
// EXTERNAL MODULE: ./styles/components/frame3/style.js
var frame3_style = __webpack_require__(1850);
// EXTERNAL MODULE: external "browser-image-compression"
var external_browser_image_compression_ = __webpack_require__(1022);
var external_browser_image_compression_default = /*#__PURE__*/__webpack_require__.n(external_browser_image_compression_);
;// CONCATENATED MODULE: ./public/img/upload.png
/* harmony default export */ const upload = ({"src":"/_next/static/media/upload.8585da39.png","height":249,"width":375,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAAAAABd+vKJAAAAKklEQVR42mP4/+8/EPz7z/Dv/7+vX//9/wdk/Hj9+geY8e/Dh79ABkwNAHbFJ2LLZ7Z/AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/img/upload2.png
/* harmony default export */ const upload2 = ({"src":"/_next/static/media/upload2.d2692f67.png","height":409,"width":326,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAAAAAD/rdHkAAAAJklEQVR42mP4BwYM//7/AyKG///+AxGQ9+Pnf5Dg9+9wQYgSmEoANRgvmhboNl4AAAAASUVORK5CYII=","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./public/img/blank.png
var blank = __webpack_require__(300);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./atoms/atom.ts
var atom = __webpack_require__(7232);
;// CONCATENATED MODULE: ./pages/components/frame/type1.tsx











function Frame1(props) {
    const [Bg, setBg] = (0,external_recoil_.useRecoilState)(atom/* colorAtom */.cg);
    const [frame, setFrame] = (0,external_recoil_.useRecoilState)(atom/* frameAtom */.CJ);
    const [file1, setFile1] = (0,external_recoil_.useRecoilState)(atom/* file1Atom */.Ht);
    const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 1920,
        useWebWorker: true
    };
    const imageCompress = async (file)=>{
        try {
            const compressedFile = await external_browser_image_compression_default()(file, options);
            const promise = external_browser_image_compression_default().getDataUrlFromFile(compressedFile);
            promise.then((result)=>{
                return result;
            });
        //   return compressedFile;
        } catch (error) {
            console.log(error);
        }
    };
    const saveImgFile1 = async ()=>{
        const file1 = inputRef1.current?.files[0];
        if (file1) {
            const compressedFile = await external_browser_image_compression_default()(file1, options);
            const reader = new FileReader();
            console.log("file", file1);
            console.log("com", compressedFile);
            if (compressedFile) {
                reader.readAsDataURL(compressedFile);
                reader.onloadend = ()=>{
                    const base64data = reader.result;
                    console.log("base64data", base64data);
                    setFile1(base64data);
                };
            }
        }
    };
    const inputRef1 = (0,external_react_.useRef)(null);
    const onUploadImageButtonClick1 = (0,external_react_.useCallback)(()=>{
        if (!inputRef1.current) {
            return;
        }
        inputRef1.current.click();
    }, []);
    // -----------------------
    const [file2, setFile2] = (0,external_recoil_.useRecoilState)(atom/* file2Atom */.u9);
    const saveImgFile2 = async ()=>{
        const file2 = inputRef2.current?.files[0];
        if (file2) {
            const compressedFile = await external_browser_image_compression_default()(file2, options);
            const reader = new FileReader();
            console.log("file", file2);
            console.log("com", compressedFile);
            if (compressedFile) {
                reader.readAsDataURL(compressedFile);
                reader.onloadend = ()=>{
                    const base64data = reader.result;
                    console.log("base64data", base64data);
                    setFile2(base64data);
                };
            }
        }
    };
    const inputRef2 = (0,external_react_.useRef)(null);
    const onUploadImageButtonClick2 = (0,external_react_.useCallback)(()=>{
        if (!inputRef2.current) {
            return;
        }
        inputRef2.current.click();
    }, []);
    // -----------------------
    const [file3, setFile3] = (0,external_recoil_.useRecoilState)(atom/* file3Atom */.WQ);
    const saveImgFile3 = async ()=>{
        const file3 = inputRef3.current?.files[0];
        if (file3) {
            const compressedFile = await external_browser_image_compression_default()(file3, options);
            const reader = new FileReader();
            console.log("file", file3);
            console.log("com", compressedFile);
            if (compressedFile) {
                reader.readAsDataURL(compressedFile);
                reader.onloadend = ()=>{
                    const base64data = reader.result;
                    console.log("base64data", base64data);
                    setFile3(base64data);
                };
            }
        }
    };
    const inputRef3 = (0,external_react_.useRef)(null);
    const onUploadImageButtonClick3 = (0,external_react_.useCallback)(()=>{
        if (!inputRef3.current) {
            return;
        }
        inputRef3.current.click();
    }, []);
    // -----------------------
    const [file4, setFile4] = (0,external_recoil_.useRecoilState)(atom/* file4Atom */.$1);
    const saveImgFile4 = async ()=>{
        const file4 = inputRef4.current.files[0];
        if (file4) {
            const compressedFile = await external_browser_image_compression_default()(file4, options);
            const reader = new FileReader();
            console.log("file", file4);
            console.log("com", compressedFile);
            if (compressedFile) {
                reader.readAsDataURL(compressedFile);
                reader.onloadend = ()=>{
                    const base64data = reader.result;
                    console.log("base64data", base64data);
                    setFile4(base64data);
                };
            }
        }
    };
    const inputRef4 = (0,external_react_.useRef)(null);
    const onUploadImageButtonClick4 = (0,external_react_.useCallback)(()=>{
        if (!inputRef4.current) {
            return;
        }
        inputRef4.current.click();
    }, []);
    // -----------------------
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            frame === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* Container */.W2, {
                color: Bg,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* PhotoContainer */.RM, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file1 ? file1 : upload.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef1,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile1
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick2,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file2 ? file2 : upload.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef2,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile2
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file3 ? file3 : upload.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef3,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile3
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick4,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file4 ? file4 : upload.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef4,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile4
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* PhotoContainer2 */.Ic, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(style/* PhotoWrapperGrey */.kg, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: file1 ? file1 : blank/* default.src */.Z.src
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(style/* PhotoWrapperGrey */.kg, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: file2 ? file2 : blank/* default.src */.Z.src
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(style/* PhotoWrapperGrey */.kg, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: file3 ? file3 : blank/* default.src */.Z.src
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(style/* PhotoWrapperGrey */.kg, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: file4 ? file4 : blank/* default.src */.Z.src
                                })
                            })
                        ]
                    })
                ]
            }),
            frame === 2 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame2_style/* Container */.W2, {
                color: Bg,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame2_style/* PhotoContainer */.RM, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame2_style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file1 ? file1 : upload2.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef1,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile1
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame2_style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick2,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file2 ? file2 : upload2.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef2,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile2
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame2_style/* PhotoContainer2 */.Ic, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame2_style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file3 ? file3 : upload2.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef3,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile3
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame2_style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick4,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file4 ? file4 : upload2.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef4,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile4
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            frame === 3 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame3_style/* Container */.W2, {
                color: Bg,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame3_style/* PhotoContainer */.RM, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame3_style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file1 ? file1 : upload2.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef1,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile1
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame3_style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick2,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file2 ? file2 : upload2.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef2,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile2
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame3_style/* PhotoContainer2 */.Ic, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame3_style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file3 ? file3 : upload2.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef3,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile3
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(frame3_style/* PhotoWrapper */.YT, {
                                onClick: onUploadImageButtonClick4,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: file4 ? file4 : upload2.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        ref: inputRef4,
                                        accept: "image/*",
                                        type: "file",
                                        onChange: saveImgFile4
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;