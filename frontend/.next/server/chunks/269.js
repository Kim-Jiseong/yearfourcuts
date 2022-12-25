"use strict";
exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 5176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styles_main_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6780);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var atoms_atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7232);






function Header(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // const sendPage = (page: number) => {
    //   console.log("sendpage", page);
    //   props.getPage(page);
    // };
    const [modal, setModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_5__/* .modalAtom */ .hP);
    const [page, setPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_5__/* .pageAtom */ .nY);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_main_style__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .h4, {
        children: [
            props.page === "main" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_main_style__WEBPACK_IMPORTED_MODULE_3__/* .HeaderContent */ .oB, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "bi bi-chevron-left",
                        onClick: ()=>{
                            router.push("/");
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            props.name,
                            "님의 앨범"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "bi bi-upload",
                        onClick: ()=>{
                            setModal("share");
                        }
                    })
                ]
            }),
            props.page === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_main_style__WEBPACK_IMPORTED_MODULE_3__/* .HeaderContent */ .oB, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "bi bi-chevron-left",
                        onClick: ()=>{
                            router.push("/" + props.pid);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "사진 올리기"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                ]
            }),
            props.page !== 1 && props.page !== "main" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_main_style__WEBPACK_IMPORTED_MODULE_3__/* .HeaderContent */ .oB, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: "bi bi-chevron-left",
                        onClick: ()=>{
                            setPage(page - 1);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "사진 올리기"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;