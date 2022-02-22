"use strict";
(() => {
var exports = {};
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ user1),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(510);
// EXTERNAL MODULE: ./components/title.js
var title = __webpack_require__(135);
;// CONCATENATED MODULE: ./pages/users/[id].js





function user1({ user  }) {
    const router = (0,router_namespaceObject.useRouter)();
    if (router.isFallback) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            /*#__PURE__*/ children: "Cargando..."
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(title/* default */.Z, {
                children: [
                    "User ID ",
                    user.id
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-292267500ae09831" + " " + "card",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "jsx-292267500ae09831",
                        children: "User"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "jsx-292267500ae09831",
                        children: [
                            "Name: ",
                            user.name
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "jsx-292267500ae09831",
                        children: [
                            "Email: ",
                            user.email
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "jsx-292267500ae09831",
                        children: [
                            "Phone: ",
                            user.phone
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "jsx-292267500ae09831",
                        children: [
                            "Website: ",
                            user.website
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "292267500ae09831",
                children: ".card.jsx-292267500ae09831{margin:1rem;\n-webkit-flex-basis:45%;\n-ms-flex-preferred-size:45%;\nflex-basis:45%;\npadding:1.5rem;\ntext-align:left;\ncolor:inherit;\n-webkit-text-decoration:none;\ntext-decoration:none;\nborder:1px solid #eaeaea;\nborder-radius:10px;\n-webkit-transition:color 0.15s ease, border-color 0.15s ease;\ntransition:color 0.15s ease, border-color 0.15s ease}\n.card.jsx-292267500ae09831:hover, .card.jsx-292267500ae09831:focus, .card.jsx-292267500ae09831:active{color:#0070f3;\nborder-color:#0070f3}\n.card.jsx-292267500ae09831 h3.jsx-292267500ae09831{margin:0 0 1rem 0;\nfont-size:1.5rem}\n.card.jsx-292267500ae09831 p.jsx-292267500ae09831{margin:0;\nfont-size:1.25rem;\nline-height:1.5}"
            })
        ]
    }));
};
async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const users = await response.json();
    const paths = users.map((value)=>{
        return {
            params: {
                id: `${value.id}`
            }
        };
    });
    return {
        paths,
        fallback: true
    };
}
async function getStaticProps({ params  }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: {
            user
        }
    };
}


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,254], () => (__webpack_exec__(995)));
module.exports = __webpack_exports__;

})();