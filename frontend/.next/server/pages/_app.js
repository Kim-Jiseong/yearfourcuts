"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/GlobalStyle.jsx



const GlobalStyleWrapper = external_styled_components_.createGlobalStyle`


  * {
    box-sizing: border-box;
  }
  body, button, form, h1, h2, h3, h4, h5, h6, p, input, legend, li, ol, ul, select, table, td, textarea, th {
    margin:0;
    padding:0;
    /* background-color: #1D1D1D; */
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    background:none;
    border:0;
    cursor:pointer;

    &:disabled {
      cursor: default;
    }
  }

  *:focus {
    outline: none;
  }

  html {
    font-size: 62.5%;

    -webkit-tap-highlight-color: transparent;
  }
  body {
    /* background-color: #D6EAF1; */

  }
  body {
  padding: 0;
  margin: 0;
  font-family: 'NanumSquareNeo-Variable';
  word-break: keep-all;
  background-color: #FFF9E7;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
  /* font-family: -apple-system, InkLipquid; */
}
@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GangwonEduPowerExtraBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'SlowSlow';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/SlowSlow.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  @media screen and (max-width: 415px) {
    html {
      font-size: 9.375px;
    }
  }

  @media screen and (max-width: 413px) {
    html {
      font-size: 8.75px;
    }
  }

  @media screen and (max-width: 361px) {
    html {
      font-size: 8.125px;
    }
  }

  @media screen and (max-width: 321px) {
    html {
      font-size: 7.5px;
    }
  }
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-3b5557bb-0"
})`
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  max-width: 430px;
  width: 100vw;
  margin: 0 auto;
  font-size: 1.6rem;
  background-color: #fff9e7;
  /* font-family: "Noto Sans KR"; */
  color: #222222;
`;
const GlobalStyle = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyleWrapper, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                children: children
            })
        ]
    });
};
/* harmony default export */ const styles_GlobalStyle = (GlobalStyle);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx





// export default function App({ Component, pageProps, session }: AppProps) {
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
        session: pageProps.session,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_recoil_.RecoilRoot, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_GlobalStyle, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "일년네컷"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9481));
module.exports = __webpack_exports__;

})();