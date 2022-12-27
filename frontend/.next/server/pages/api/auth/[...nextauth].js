"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 7288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
var next_default = /*#__PURE__*/__webpack_require__.n(next_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/kakao"
const kakao_namespaceObject = require("next-auth/providers/kakao");
var kakao_default = /*#__PURE__*/__webpack_require__.n(kakao_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



/* harmony default export */ const _nextauth_ = (next_default()({
    providers: [
        google_default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // checks: ["pkce", "state"], // both
            checks: "both"
        }),
        kakao_default()({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
            checks: "both"
        })
    ],
    callbacks: {
        async jwt ({ token , account  }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token;
                token.idToken = account.id_token;
            }
            return token;
        },
        async session ({ session , token , user  }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken;
            session.idToken = token.idToken;
            return session;
        }
    },
    secret: process.env.JWT_SECRET
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7288));
module.exports = __webpack_exports__;

})();