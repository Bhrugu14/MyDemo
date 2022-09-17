(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/dist/shared/lib/styled-jsx"
const styled_jsx_namespaceObject = require("next/dist/shared/lib/styled-jsx");
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "next-page-transitions"
const external_next_page_transitions_namespaceObject = require("next-page-transitions");
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(819);
;// CONCATENATED MODULE: ./pages/_app.js






const TIMEOUT = 400;
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1.0, width=device-width",
                    className: styled_jsx_default().dynamic([
                        [
                            "c049d4f85f51261b",
                            [
                                TIMEOUT,
                                TIMEOUT,
                                TIMEOUT,
                                TIMEOUT
                            ]
                        ]
                    ])
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_page_transitions_namespaceObject.PageTransition, {
                timeout: TIMEOUT,
                classNames: "page-transition",
                loadingComponent: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: styled_jsx_default().dynamic([
                        [
                            "c049d4f85f51261b",
                            [
                                TIMEOUT,
                                TIMEOUT,
                                TIMEOUT,
                                TIMEOUT
                            ]
                        ]
                    ]),
                    children: "loading..."
                }),
                loadingDelay: 500,
                loadingTimeout: {
                    enter: TIMEOUT,
                    exit: 0
                },
                loadingClassNames: "loading-indicator",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps,
                    className: styled_jsx_default().dynamic([
                        [
                            "c049d4f85f51261b",
                            [
                                TIMEOUT,
                                TIMEOUT,
                                TIMEOUT,
                                TIMEOUT
                            ]
                        ]
                    ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                })
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "c049d4f85f51261b",
                dynamic: [
                    TIMEOUT,
                    TIMEOUT,
                    TIMEOUT,
                    TIMEOUT
                ],
                children: `.page-transition-enter{opacity:0;-webkit-transform:translate3d(0,20px,0);-moz-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}.page-transition-enter-active{opacity:1;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity ${TIMEOUT}ms,-webkit-transform ${TIMEOUT}ms;-moz-transition:opacity ${TIMEOUT}ms,-moz-transform ${TIMEOUT}ms;-o-transition:opacity ${TIMEOUT}ms,-o-transform ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms,-webkit-transform ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms,-moz-transform ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms,-o-transform ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms,transform ${TIMEOUT}ms}.page-transition-exit{opacity:1}.page-transition-exit-active{opacity:0;-webkit-transition:opacity ${TIMEOUT}ms;-moz-transition:opacity ${TIMEOUT}ms;-o-transition:opacity ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms}.loading-indicator-appear,.loading-indicator-enter{opacity:0}.loading-indicator-appear-active,.loading-indicator-enter-active{opacity:1;-webkit-transition:opacity ${TIMEOUT}ms;-moz-transition:opacity ${TIMEOUT}ms;-o-transition:opacity ${TIMEOUT}ms;transition:opacity ${TIMEOUT}ms}`
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 819:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(191));
module.exports = __webpack_exports__;

})();