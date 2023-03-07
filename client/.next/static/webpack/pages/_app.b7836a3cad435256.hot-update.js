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

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/Header/styles.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/rx */ \"./node_modules/react-icons/rx/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var _Basket_Basket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Basket/Basket */ \"./components/Basket/Basket.tsx\");\n/* harmony import */ var _ShopDropdown_ShopDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ShopDropdown/ShopDropdown */ \"./components/Header/ShopDropdown/ShopDropdown.tsx\");\n/* harmony import */ var _features_searchSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../features/searchSlice */ \"./features/searchSlice.ts\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/debounce */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const searchHandel = (e)=>{\n        _s1();\n        e.preventDefault();\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default()(()=>dispatch((0,_features_searchSlice__WEBPACK_IMPORTED_MODULE_9__.searchTerm)(e.target.value)), 3000), []);\n        dispatch((0,_features_searchSlice__WEBPACK_IMPORTED_MODULE_9__.searchTerm)(e.target.value));\n        setTimeout(()=>{\n            router.push(\"/books\");\n        }, 1000);\n    };\n    _s1(searchHandel, \"epj4qY15NHsef74wNqHIp5fdZmg=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Wapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.HeaderWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Logo, {\n                            children: \"logo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_rx__WEBPACK_IMPORTED_MODULE_11__.RxHome, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 40\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/books\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ShopDropdown_ShopDropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 13\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 14\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__.FaNewspaper, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"About us\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.NavItem, {\n                                    className: \"loginBtn\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__.FaUser, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                \"Signin \",\n                                                \" \",\n                                                \"/ \",\n                                                \" \",\n                                                \"Login\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 24\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper2, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Lens, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.DropdownS, {\n                                onMouseOver: ()=>setShow(true),\n                                onMouseLeave: ()=>setShow(false),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.DropDownToggle, {\n                                        className: \"main-style\",\n                                        id: \"dropdown-basic\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_13__.BsSearch, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 10\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.DropDownMenu, {\n                                        show: show,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Dropdown.Item, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                                onChange: searchHandel\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 13\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 9\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 7\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Basket_Basket__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n            lineNumber: 39,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Header\\\\Header.tsx\",\n        lineNumber: 38,\n        columnNumber: 7\n    }, this);\n}\n_s(Header, \"V5CRTEBCVYyO0Wt0O4GvGjiO4Jo=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0Q7QUFDd0Y7QUFFM0c7QUFDVztBQUNLO0FBQ0w7QUFDRTtBQUVDO0FBQ0c7QUFFTjtBQUNVO0FBRVo7QUFDaUI7QUFDRjtBQUNmO0FBQ3RDLFNBQVMyQixTQUFTOzs7SUFFWixNQUFNQyxXQUFTTiw0REFBY0E7SUFDN0IsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUc3QiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXRDLE1BQU04QixTQUFTVixzREFBU0E7SUFDeEIsTUFBTVcsZUFBYSxDQUFDQyxJQUFROztRQUM1QkEsRUFBRUMsY0FBYztRQUNmaEMsa0RBQVdBLENBQUN3Qix1REFBUUEsQ0FBQyxJQUFNRSxTQUFTSCxpRUFBVUEsQ0FBQ1EsRUFBRUUsTUFBTSxDQUFDQyxLQUFLLElBQUksT0FBTyxFQUFFO1FBQzNFUixTQUFTSCxpRUFBVUEsQ0FBQ1EsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1FBQ2xDQyxXQUFXLElBQU07WUFDakJOLE9BQU9PLElBQUksQ0FBQztRQUNmLEdBQUc7SUFJRDtRQVZPTjtJQVdWLHFCQUNJLDhEQUFDN0IsMkNBQU1BO2tCQUNULDRFQUFDQyxrREFBYUE7OzhCQUNWLDhEQUFDSSw0Q0FBT0E7O3NDQUNSLDhEQUFDSCx5Q0FBSUE7c0NBQUM7Ozs7OztzQ0FDTiw4REFBQ0Msd0NBQUdBOzs4Q0FDSiw4REFBQ0MsNENBQU9BOztzREFDRiw4REFBQ1MsbURBQU1BOzs7OztzREFBRyw4REFBQ0Qsa0RBQUlBOzRDQUFDd0IsTUFBSztzREFBSSw0RUFBQ0M7MERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUVyQyw4REFBQ2pDLDRDQUFPQTs4Q0FDSCw0RUFBQ1Esa0RBQUlBO3dDQUFDd0IsTUFBSztrREFDWiw0RUFBQ2Ysa0VBQVlBOzs7Ozs7Ozs7Ozs7Ozs7OENBR2pCLDhEQUFDakIsNENBQU9BOztzREFDRiw4REFBQ1Usd0RBQVdBOzs7OztzREFBRSw4REFBQ3VCO3NEQUFLOzs7Ozs7Ozs7Ozs7OENBRTFCLDhEQUFDakMsNENBQU9BO29DQUFDa0MsV0FBVTs7c0RBQ2IsOERBQUN2QixtREFBTUE7Ozs7O3NEQUFFLDhEQUFDc0I7O2dEQUFLO2dEQUFRO2dEQUFJO2dEQUFHO2dEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUl4Qyw4REFBQy9CLDZDQUFRQTs7c0NBTVQsOERBQUNDLHlDQUFJQTtzQ0FDTCw0RUFBQ0MsOENBQVNBO2dDQUFNK0IsYUFBYSxJQUFNWixRQUFRLElBQUk7Z0NBQU1hLGNBQWMsSUFBTWIsUUFBUSxLQUFLOztrREFDdEYsOERBQUNsQixtREFBY0E7d0NBQUM2QixXQUFVO3dDQUFhRyxJQUFHO2tEQUN6Qyw0RUFBQ3pCLHFEQUFRQTs7Ozs7Ozs7OztrREFHWiw4REFBQ04saURBQVlBO3dDQUFDZ0IsTUFBTUE7a0RBQ2xCLDRFQUFDVCwyREFBYTtzREFDViw0RUFBQ04sMENBQUtBO2dEQUFDZ0MsVUFBVWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FPckIsOERBQUNULHNEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0dBbkVTSTs7UUFFWUwsd0RBQWNBO1FBR2RELGtEQUFTQTs7O0tBTHJCTTtBQXFFVCwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIudHN4P2U3ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICx7dXNlU3RhdGUsdXNlQ2FsbGJhY2t9ZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7V2FwcGVyLEhlYWRlcldyYXBwZXIsIExvZ28sIE5hdiwgTmF2SXRlbSwgV3JhcHBlcixXcmFwcGVyMiwgTGVucywgRHJvcGRvd25TLERyb3BEb3duVG9nZ2xlLCBEcm9wRG93bk1lbnUsIElucHV0fSBmcm9tICcuL3N0eWxlcydcclxuaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvSW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBSeEhvbWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcnhcIjtcclxuaW1wb3J0IHsgRmFOZXdzcGFwZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgRmFVc2VyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEJzU2VhcmNoIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9yZWR1eC9ob29rcydcclxuXHJcbmltcG9ydCBCYXNrZXQgZnJvbSAnLi4vQmFza2V0L0Jhc2tldCc7XHJcbmltcG9ydCBTaG9wRHJvcGRvd24gZnJvbSAnLi9TaG9wRHJvcGRvd24vU2hvcERyb3Bkb3duJztcclxuaW1wb3J0IHtzZWFyY2hUZXJtfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9zZWFyY2hTbGljZSdcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSdcclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIFxyXG4gICAgICBjb25zdCBkaXNwYXRjaD11c2VBcHBEaXNwYXRjaCgpXHJcbiAgICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgIFxyXG4gICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgICBjb25zdCBzZWFyY2hIYW5kZWw9KGU6YW55KT0+e1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgIHVzZUNhbGxiYWNrKGRlYm91bmNlKCgpID0+IGRpc3BhdGNoKHNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpKSwgMzAwMCksIFtdKTtcclxuICAgICAgZGlzcGF0Y2goc2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9ib29rc1wiKVxyXG4gICB9LCAxMDAwKTtcclxuICAgXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxXYXBwZXI+XHJcbiAgICA8SGVhZGVyV3JhcHBlcj5cclxuICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8TG9nbz5sb2dvPC9Mb2dvPlxyXG4gICAgICAgIDxOYXY+XHJcbiAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPFJ4SG9tZSAvPjxMaW5rIGhyZWY9Jy8nPjxzcGFuPkhvbWU8L3NwYW4+PC9MaW5rPiBcclxuICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICA8TGluayBocmVmPScvYm9va3MnPlxyXG4gICAgICAgICAgICA8U2hvcERyb3Bkb3duIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPiBcclxuICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZhTmV3c3BhcGVyLz48c3Bhbj5BYm91dCB1czwvc3Bhbj4gXHJcbiAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT0nbG9naW5CdG4nPlxyXG4gICAgICAgICAgICAgIDxGYVVzZXIvPjxzcGFuPlNpZ25pbiB7JyAnfS8geycgJ31Mb2dpbjwvc3Bhbj4gXHJcbiAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvV3JhcHBlcj5cclxuICAgICAgICA8V3JhcHBlcjI+XHJcbiAgICAgICAgICAgIHsvKiAqKioqKioqKioqKioqKioqKlNFQVJDSCoqKioqICovfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8TGVucyA+XHJcbiAgICAgICAgPERyb3Bkb3duUyAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRTaG93KHRydWUpfSAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3coZmFsc2UpfSA+XHJcbiAgICAgICAgPERyb3BEb3duVG9nZ2xlIGNsYXNzTmFtZT1cIm1haW4tc3R5bGVcIiBpZD1cImRyb3Bkb3duLWJhc2ljXCI+XHJcbiAgICAgICAgIDxCc1NlYXJjaCAvPlxyXG4gICAgICAgIDwvRHJvcERvd25Ub2dnbGU+XHJcblxyXG4gICAgICA8RHJvcERvd25NZW51IHNob3c9e3Nob3d9PlxyXG4gICAgICAgIDxEcm9wZG93bi5JdGVtID5cclxuICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXtzZWFyY2hIYW5kZWx9ID48L0lucHV0PlxyXG4gICAgICAgIDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgIFxyXG4gICAgICA8L0Ryb3BEb3duTWVudT5cclxuICAgIDwvRHJvcGRvd25TPlxyXG4gICAgICAgIDwvTGVucz5cclxuICAgICAgICAgICB7LyogKioqKioqKioqKioqKioqKipTRUFSQ0gqKioqKiAqL31cclxuICAgICAgICA8QmFza2V0IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvV3JhcHBlcjI+XHJcblxyXG4gICAgPC9IZWFkZXJXcmFwcGVyPlxyXG4gICAgPC9XYXBwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiV2FwcGVyIiwiSGVhZGVyV3JhcHBlciIsIkxvZ28iLCJOYXYiLCJOYXZJdGVtIiwiV3JhcHBlciIsIldyYXBwZXIyIiwiTGVucyIsIkRyb3Bkb3duUyIsIkRyb3BEb3duVG9nZ2xlIiwiRHJvcERvd25NZW51IiwiSW5wdXQiLCJMaW5rIiwiUnhIb21lIiwiRmFOZXdzcGFwZXIiLCJGYVVzZXIiLCJCc1NlYXJjaCIsIkRyb3Bkb3duIiwidXNlUm91dGVyIiwidXNlQXBwRGlzcGF0Y2giLCJCYXNrZXQiLCJTaG9wRHJvcGRvd24iLCJzZWFyY2hUZXJtIiwiZGVib3VuY2UiLCJIZWFkZXIiLCJkaXNwYXRjaCIsInNob3ciLCJzZXRTaG93Iiwicm91dGVyIiwic2VhcmNoSGFuZGVsIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRUaW1lb3V0IiwicHVzaCIsImhyZWYiLCJzcGFuIiwiY2xhc3NOYW1lIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlTGVhdmUiLCJpZCIsIkl0ZW0iLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/Header.tsx\n"));

/***/ })

});