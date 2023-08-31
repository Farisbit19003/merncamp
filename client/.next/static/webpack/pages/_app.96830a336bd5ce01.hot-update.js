"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Nav = ()=>{\n    _s();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n         true && setCurrent(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const logout = ()=>{\n        window.localStorage.removeItem(\"auth\");\n        setState(null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"nav bg-dark d-flex justify-content-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/\",\n                className: \"nav-link    \".concat(current === \"/\" && \"active\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                        src: \"/images/logo_transparent.png\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Udemy\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    \"MERNCAMP\"\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\Udemy\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            state !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/user/dashboard\",\n                        className: \"nav-link  \".concat(current === \"/user/dashboard\" && \"active\"),\n                        children: state && state.user && state.user.name\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Udemy\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/user/profile/update\",\n                        className: \"nav-link  \".concat(current === \"/user/profile/update\" && \"active\"),\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Udemy\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        onClick: logout,\n                        className: \"nav-link pointer\",\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Udemy\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/login\",\n                        className: \"nav-link  \".concat(current === \"/login\" && \"active\"),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Udemy\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/register\",\n                        className: \"nav-link text-light \".concat(current === \"/register\" && \"active\"),\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\Udemy\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\Udemy\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"WMy6b77cjjdYHFT+GKwQSFgPFY8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3RDtBQUNmO0FBQ2Y7QUFDRztBQUNXO0FBQ1Y7QUFDOUIsTUFBTVEsTUFBTSxJQUFNOztJQUNoQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdaLGlEQUFVQSxDQUFDRyxpREFBV0E7SUFDaERGLGdEQUFTQSxDQUFDLElBQU07UUFDZFksS0FBZSxJQUFJSCxXQUFXSyxPQUFPQyxRQUFRLENBQUNDLFFBQVE7SUFDeEQsR0FBRztRQUFDSixLQUFlLElBQUlFLE9BQU9DLFFBQVEsQ0FBQ0MsUUFBUTtLQUFDO0lBQ2hELE1BQU1DLFNBQVNaLHNEQUFTQTtJQUN4QixNQUFNYSxTQUFTLElBQU07UUFDbkJKLE9BQU9LLFlBQVksQ0FBQ0MsVUFBVSxDQUFDO1FBQy9CVCxTQUFTLElBQUk7UUFDYk0sT0FBT0ksSUFBSSxDQUFDO0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNuQixrREFBSUE7Z0JBQ0hvQixNQUFLO2dCQUNMRCxXQUFXLGVBQTJDLE9BQTVCZixZQUFZLE9BQU87O2tDQUU3Qyw4REFBQ0Ysd0NBQU1BO3dCQUFDbUIsS0FBSTs7Ozs7O29CQUFnQzs7Ozs7OztZQUk3Q2YsVUFBVSxJQUFJLGlCQUNiOztrQ0FDRSw4REFBQ04sa0RBQUlBO3dCQUNIb0IsTUFBSzt3QkFDTEQsV0FBVyxhQUVWLE9BRENmLFlBQVkscUJBQXFCO2tDQUdsQ0UsU0FBU0EsTUFBTWdCLElBQUksSUFBSWhCLE1BQU1nQixJQUFJLENBQUNDLElBQUk7Ozs7OztrQ0FFekMsOERBQUN2QixrREFBSUE7d0JBQ0hvQixNQUFLO3dCQUNMRCxXQUFXLGFBRVYsT0FEQ2YsWUFBWSwwQkFBMEI7a0NBRXpDOzs7Ozs7a0NBSUQsOERBQUNvQjt3QkFBRUMsU0FBU1g7d0JBQVFLLFdBQVU7a0NBQW9COzs7Ozs7OzZDQUtwRDs7a0NBQ0UsOERBQUNuQixrREFBSUE7d0JBQ0hvQixNQUFLO3dCQUNMRCxXQUFXLGFBRVYsT0FEQ2YsWUFBWSxZQUFZO2tDQUUzQjs7Ozs7O2tDQUlELDhEQUFDSixrREFBSUE7d0JBQ0hvQixNQUFLO3dCQUNMRCxXQUFXLHVCQUVWLE9BRENmLFlBQVksZUFBZTtrQ0FFOUI7Ozs7Ozs7NEJBSUo7Ozs7Ozs7QUFHUDtHQXBFTUQ7O1FBTVdGLGtEQUFTQTs7O0tBTnBCRTtBQXFFTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi5qcz84NjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFwiKTtcclxuICAgIHNldFN0YXRlKG51bGwpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXYgYmctZGFyayBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICA8TGlua1xyXG4gICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAgICAke2N1cnJlbnQgPT09IFwiL1wiICYmIFwiYWN0aXZlXCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxBdmF0YXIgc3JjPVwiL2ltYWdlcy9sb2dvX3RyYW5zcGFyZW50LnBuZ1wiLz5cclxuICAgICAgICBNRVJOQ0FNUFxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICB7c3RhdGUgIT09IG51bGwgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCIvdXNlci9kYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAgJHtcclxuICAgICAgICAgICAgICBjdXJyZW50ID09PSBcIi91c2VyL2Rhc2hib2FyZFwiICYmIFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIubmFtZX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCIvdXNlci9wcm9maWxlL3VwZGF0ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICAke1xyXG4gICAgICAgICAgICAgIGN1cnJlbnQgPT09IFwiL3VzZXIvcHJvZmlsZS91cGRhdGVcIiAmJiBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPHAgb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJuYXYtbGluayAgcG9pbnRlclwiPlxyXG4gICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi9sb2dpblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICAke1xyXG4gICAgICAgICAgICAgIGN1cnJlbnQgPT09IFwiL2xvZ2luXCIgJiYgXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL3JlZ2lzdGVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgdGV4dC1saWdodCAke1xyXG4gICAgICAgICAgICAgIGN1cnJlbnQgPT09IFwiL3JlZ2lzdGVyXCIgJiYgXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJDb250ZXh0IiwiUmVhY3QiLCJMaW5rIiwidXNlUm91dGVyIiwiQXZhdGFyIiwiTmF2IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJzdGF0ZSIsInNldFN0YXRlIiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicm91dGVyIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJuYXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3JjIiwidXNlciIsIm5hbWUiLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n"));

/***/ })

});