"use strict";
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 9416:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var atoms_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7232);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Upload(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const pid = router.query.pid;
    const textarea = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [selColor, setSelColor] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .colorAtom */ .cg);
    const [frame, setFrame] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .frameAtom */ .CJ);
    const [author, setAuthor] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .authorAtom */ .vf);
    const [letter, setLetter] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .letterAtom */ .Nn);
    const [file1, setFile1] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .file1Atom */ .Ht);
    const [file2, setFile2] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .file2Atom */ .u9);
    const [file3, setFile3] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .file3Atom */ .WQ);
    const [file4, setFile4] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .file4Atom */ .$1);
    const [page, setPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(atoms_atom__WEBPACK_IMPORTED_MODULE_6__/* .pageAtom */ .nY);
    console.log("frame", frame);
    const authorInput = (event)=>{
        setAuthor(event.target.value);
        console.log(author);
    };
    const handleResizeHeight = (event)=>{
        setLetter(event.target.value);
        console.log(letter);
        textarea.current.style.height = "auto";
        textarea.current.style.height = textarea.current.scrollHeight + "px";
    };
    const formDataHandler = (dataURI, idx)=>{
        const byteString = atob(dataURI.split(",")[1]);
        // Blob 구성 준비
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for(let i = 0; i < byteString.length; i += 1){
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([
            ia
        ], {
            type: "image/jpeg"
        });
        const file = new File([
            blob
        ], `image${idx}.jpg`);
        console.log(`image${idx} 변환됨`);
        return file;
    };
    const sendFormData = async ()=>{
        console.log("전송시작");
        const filelist = [
            file1,
            file2,
            file3,
            file4
        ];
        const formData = new FormData();
        filelist.forEach((value, index, array)=>{
            const temp = formDataHandler(value, index);
            formData.append("image", temp);
        });
        console.log("image 모두 변환됨");
        formData.append("title", author);
        formData.append("letter", letter);
        formData.append("color", selColor);
        formData.append("frame", frame);
        formData.append("public_id", pid);
        await (0,axios__WEBPACK_IMPORTED_MODULE_4__["default"])({
            method: "post",
            url: "https://www.4cuts4memories.com/backend/" + "posts/newPost",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(function(res) {
            console.log(res);
            setFile1("");
            setFile2("");
            setFile3("");
            setFile4("");
            setAuthor("");
            setLetter("");
            setFrame("");
            setSelColor("#FFD275");
            setPage(1);
            router.push("/" + pid);
        }).catch(function(error) {
            console.log(error);
            alert("에러가 발생했습니다");
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .InfoContainer */ .LZ, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Step 3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "메시지를 남겨주세요"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle */ .DK, {
                children: "from."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .Author */ .S3, {
                onChange: authorInput,
                maxLength: 8,
                placeholder: "8글자 이하로 적어주세요"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .SubTitle */ .DK, {
                children: "메시지"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .Letter */ .kr, {
                rows: 1,
                ref: textarea,
                onChange: handleResizeHeight
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(styles_upload_style__WEBPACK_IMPORTED_MODULE_2__/* .Btn */ .un, {
                style: {
                    width: "100%",
                    color: "white"
                },
                color: "#FF7575",
                onClick: ()=>{
                    if (frame && selColor && file1 && file2 && file3 && file4 && author) {
                        setPage("loading");
                        sendFormData();
                    }
                },
                children: "사진 올리기"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;