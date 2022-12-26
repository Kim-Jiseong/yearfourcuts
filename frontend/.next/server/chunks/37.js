"use strict";
exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 6037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Upload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_upload_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5314);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pages_components_frame_type1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(106);
/* harmony import */ var atoms_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7232);







function Upload(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [file1, setFile1] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .file1Atom */ .Ht);
    const [file2, setFile2] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .file2Atom */ .u9);
    const [file3, setFile3] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .file3Atom */ .WQ);
    const [file4, setFile4] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .file4Atom */ .$1);
    const [frame, setFrame] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .frameAtom */ .CJ);
    const [colorList, setColorList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [page, setPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .pageAtom */ .nY);
    const [selColor, setSelColor] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .colorAtom */ .cg);
    console.log("frame", frame);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .InfoContainer */ .LZ, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Step 2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "사진을 올려주세요"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pages_components_frame_type1__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .BtnWrapper */ .Bo, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .Btn */ .un, {
                        color: "white",
                        onClick: ()=>{
                            setPage(page - 1);
                        },
                        children: "이전으로"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .Btn */ .un, {
                        color: "#FF7575",
                        onClick: ()=>{
                            if (frame && selColor && file1 && file2 && file3 && file4) {
                                setPage(3);
                            }
                        },
                        children: "다음으로"
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;