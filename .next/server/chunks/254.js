"use strict";
exports.id = 254;
exports.ids = [254];
exports.modules = {

/***/ 510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/navbar.js



function Navbar() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "jsx-ad45a484acbcaa72",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "jsx-ad45a484acbcaa72",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/users",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "jsx-ad45a484acbcaa72",
                    children: "Users"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/posts",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "jsx-ad45a484acbcaa72",
                    children: "Posts"
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "ad45a484acbcaa72",
                children: "nav.jsx-ad45a484acbcaa72{padding-top:10px}\na.jsx-ad45a484acbcaa72{padding:0 10px}"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/layout.js



function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-e00a05c4cf890875",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "jsx-e00a05c4cf890875",
                /*#__PURE__*/ children: children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "96d8f34fb1bacc8c",
                children: "div.jsx-e00a05c4cf890875{min-height:100vh;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\nmain.jsx-e00a05c4cf890875{-webkit-flex:1;\n-ms-flex:1;\nflex:1;\ndisplay: flex:\r\n                        flex-direction: column;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "a77a355d7c33b99b",
                children: "html, body{padding:0;\nmargin:0}\n*{box-sizing:border-box}"
            })
        ]
    }));
};


/***/ }),

/***/ 135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);


function Title(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
        className: "jsx-75c3b624788c79fd",
        children: [
            props.children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "75c3b624788c79fd",
                children: "h1.jsx-75c3b624788c79fd{margin:0;\nfont-size:3rem;\ntext-align:center}"
            })
        ]
    }));
};


/***/ })

};
;