"use strict";
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 7189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Frame": () => (/* binding */ Frame),
  "default": () => (/* binding */ Upload)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/upload/style.ts
var style = __webpack_require__(5314);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./atoms/atom.ts
var atom = __webpack_require__(7232);
;// CONCATENATED MODULE: ./public/img/FrameSel1.png
/* harmony default export */ const FrameSel1 = ({"src":"/_next/static/media/FrameSel1.f8d98c2f.png","height":314,"width":103,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAQ0lEQVR4nGP89/3tfwY2PgaGX58YgJw3/xlYeRkYfn8Gcn58QJL5+gLIAcr8Asu8B3JgMt9eI3G+Pkcy4GLJfwYoAADB7SxmACPnBgAAAABJRU5ErkJggg==","blurWidth":3,"blurHeight":8});
;// CONCATENATED MODULE: ./public/img/FrameSel2.png
/* harmony default export */ const FrameSel2 = ({"src":"/_next/static/media/FrameSel2.f5fdfae2.png","height":315,"width":208,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAhUlEQVR42hXOPRKCQAwF4NzfE3AebdQCLSzoRFGGEVnZdf9gJ4/k614ymTyq6ga70w2HtkdaC1pjmc7dgGs/4mEslAmJyaUM5dICZsboA9MUItTXR/i8oJsd02t2+EvQoZp8ZNKgZ04WyqbM9IsJQr/i0n9wfA4gCUWqlP39XaRaqepm3QBz65av9xptvgAAAABJRU5ErkJggg==","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./public/img/FrameSel3.png
/* harmony default export */ const FrameSel3 = ({"src":"/_next/static/media/FrameSel3.ccd88c8f.png","height":315,"width":208,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAd0lEQVR42i2KOQ4CQQwE2zNejs34/0t4AJ9AIoIIkAhWu2gO24wtKqkuqel2edh82qN9O6YjY/sUw/JezWmlh5fXqqlXgdNLD3snbRpD6t+jmQ8M3mXoHMY0OsEMjikCb76e78jjYaKgnCBViLdnEagBRPGiRPYDf3pOT/1WWrcAAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./pages/components/upload/page1.tsx










const Frame = external_styled_components_default().img.withConfig({
    componentId: "sc-d14ffba-0"
})`
  padding: calc(1rem + 2px);
  height: calc(100% + 2px);
  border-radius: 4px;
  /* width: 100%; */
  cursor: pointer;
  ${(props)=>props.fid === props.select && external_styled_components_.css`
      padding: 1rem;
      border: 2px dashed;
      border-color: ${props.color};
    `}
  margin-bottom: 2rem;
`;
function Upload(props) {
    const router = (0,router_.useRouter)();
    const [frame, setFrame] = (0,external_recoil_.useRecoilState)(atom/* frameAtom */.CJ);
    // const [frame, setFrame] = useState<any>();
    const [colorList, setColorList] = (0,external_react_.useState)();
    const [selColor, setSelColor] = (0,external_recoil_.useRecoilState)(atom/* colorAtom */.cg);
    const [page, setPage] = (0,external_recoil_.useRecoilState)(atom/* pageAtom */.nY);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* Container */.W2, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* InfoContainer */.LZ, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Step 1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "템플릿을 골라주세요"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* SubTitle */.DK, {
                children: [
                    "모양 ",
                    frame
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(style/* FrameContainer */.DI, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Frame, {
                        src: FrameSel1.src,
                        fid: 1,
                        select: frame,
                        color: "#FFD275",
                        onClick: ()=>setFrame(1)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Frame, {
                        src: FrameSel2.src,
                        fid: 2,
                        color: "#A0D2DB",
                        select: frame,
                        onClick: ()=>setFrame(2)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Frame, {
                        src: FrameSel3.src,
                        fid: 3,
                        color: "#C490D1",
                        select: frame,
                        onClick: ()=>setFrame(3)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(style/* Btn */.un, {
                style: {
                    backgroundColor: "white",
                    width: "100%"
                },
                onClick: ()=>{
                    if (frame) {
                        setPage(2);
                    }
                },
                children: "다음으로"
            })
        ]
    });
}


/***/ })

};
;