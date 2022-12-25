"use strict";
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 2710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/FrameSel1.f8d98c2f.png","height":314,"width":103,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAQ0lEQVR4nGP89/3tfwY2PgaGX58YgJw3/xlYeRkYfn8Gcn58QJL5+gLIAcr8Asu8B3JgMt9eI3G+Pkcy4GLJfwYoAADB7SxmACPnBgAAAABJRU5ErkJggg==","blurWidth":3,"blurHeight":8});

/***/ }),

/***/ 3795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/FrameSel2.f5fdfae2.png","height":315,"width":208,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAhUlEQVR42hXOPRKCQAwF4NzfE3AebdQCLSzoRFGGEVnZdf9gJ4/k614ymTyq6ga70w2HtkdaC1pjmc7dgGs/4mEslAmJyaUM5dICZsboA9MUItTXR/i8oJsd02t2+EvQoZp8ZNKgZ04WyqbM9IsJQr/i0n9wfA4gCUWqlP39XaRaqepm3QBz65av9xptvgAAAABJRU5ErkJggg==","blurWidth":5,"blurHeight":8});

/***/ }),

/***/ 3689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/FrameSel3.ccd88c8f.png","height":315,"width":208,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAd0lEQVR42i2KOQ4CQQwE2zNejs34/0t4AJ9AIoIIkAhWu2gO24wtKqkuqel2edh82qN9O6YjY/sUw/JezWmlh5fXqqlXgdNLD3snbRpD6t+jmQ8M3mXoHMY0OsEMjikCb76e78jjYaKgnCBViLdnEagBRPGiRPYDf3pOT/1WWrcAAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});

/***/ }),

/***/ 2634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Frame": () => (/* binding */ Frame),
/* harmony export */   "default": () => (/* binding */ Upload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_upload_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5314);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var atoms_atom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7232);
/* harmony import */ var public_img_FrameSel1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2710);
/* harmony import */ var public_img_FrameSel2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3795);
/* harmony import */ var public_img_FrameSel3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Frame = styled_components__WEBPACK_IMPORTED_MODULE_5___default().img.withConfig({
    componentId: "sc-a3846628-0"
})`
  padding: calc(1rem + 2px);
  height: calc(100% + 2px);
  border-radius: 4px;
  /* width: 100%; */
  cursor: pointer;
  ${(props)=>props.fid === props.select && styled_components__WEBPACK_IMPORTED_MODULE_5__.css`
      padding: 1rem;
      border: 2px dashed;
      border-color: ${props.color};
    `}
  margin-bottom: 2rem;
`;
function Upload(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [frame, setFrame] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_7__/* .frameAtom */ .CJ);
    // const [frame, setFrame] = useState<any>();
    const [colorList, setColorList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [page, setPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_7__/* .pageAtom */ .nY);
    const [selColor, setSelColor] = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_7__/* .colorAtom */ .cg);
    // const [selColor, setSelColor] = useState<any>();
    const getColor = ()=>{
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("http://ec2-13-125-79-217.ap-northeast-2.compute.amazonaws.com/backend/" + "posts/colorlist").then((res)=>{
            console.log(res.data.colorlist[0]);
            setColorList(res.data.colorlist);
        }).catch((err)=>{
            console.log(err);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getColor();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .InfoContainer */ .LZ, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Step 1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "템플릿을 골라주세요"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle */ .DK, {
                children: [
                    "모양 ",
                    frame
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .FrameContainer */ .DI, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Frame, {
                        src: public_img_FrameSel1_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"].src */ .Z.src,
                        fid: 1,
                        select: frame,
                        color: "#FFD275",
                        onClick: ()=>setFrame(1)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Frame, {
                        src: public_img_FrameSel2_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"].src */ .Z.src,
                        fid: 2,
                        color: "#A0D2DB",
                        select: frame,
                        onClick: ()=>setFrame(2)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Frame, {
                        src: public_img_FrameSel3_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"].src */ .Z.src,
                        fid: 3,
                        color: "#C490D1",
                        select: frame,
                        onClick: ()=>setFrame(3)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle */ .DK, {
                children: "컬러"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .ColorContainer */ .Qk, {
                children: colorList && colorList.map((color, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .ColorWrapperContainer */ .LI, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .ColorWrapperSel */ .Wp, {
                                color: color,
                                title: selColor
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .ColorWrapper */ .g6, {
                                color: color,
                                onClick: ()=>{
                                    setSelColor(color);
                                }
                            })
                        ]
                    }, color))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .Btn */ .un, {
                onClick: ()=>{
                    if (frame && selColor) {
                        setPage(2);
                    }
                },
                children: "다음으로"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;