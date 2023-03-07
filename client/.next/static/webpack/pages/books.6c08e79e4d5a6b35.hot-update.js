"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/books",{

/***/ "./components/Books/Main/Main.tsx":
/*!****************************************!*\
  !*** ./components/Books/Main/Main.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var _BookItem_BookItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BookItem/BookItem */ \"./components/BookItem/BookItem.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./components/Books/Main/styles.ts\");\n/* harmony import */ var _ToTop_ToTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ToTop/ToTop */ \"./components/ToTop/ToTop.tsx\");\n/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/tfi */ \"./node_modules/react-icons/tfi/index.esm.js\");\n/* harmony import */ var _BookItem2_BookItem2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../BookItem2/BookItem2 */ \"./components/BookItem2/BookItem2.tsx\");\n/* harmony import */ var _Invalid_Invalid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Invalid/Invalid */ \"./components/Invalid/Invalid.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n//import FilterPrice from '../FilterPrice/FilterPrice';\n\nfunction Main() {\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    //get data form redux and fech data \n    const categorySelected = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.category.category);\n    const rateSelected = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.rate.rate);\n    const priceSelected = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.price.price);\n    console.log(priceSelected);\n    let min = priceSelected[0];\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filtedData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [invalidSearchTerm, setInvalidSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:4000/api/v1/books\").then((response)=>setData(response.data.books));\n        setLoading(false);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        //console.log(categorySelected)\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:4000/api/v1/books?numericFilters=rating>=\".concat(rateSelected, \",price>\").concat(min, \"&category=\").concat(categorySelected)).then((response)=>setData(response.data.books));\n        setLoading(false);\n    }, [\n        categorySelected,\n        rateSelected,\n        min\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Top, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: grid ? \"\" : \"active\",\n                                onClick: ()=>setGrid(!grid),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tfi__WEBPACK_IMPORTED_MODULE_9__.TfiLayoutListThumbAlt, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 79\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: grid ? \"active\" : \"\",\n                                onClick: ()=>setGrid(!grid),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tfi__WEBPACK_IMPORTED_MODULE_9__.TfiLayoutGrid3Alt, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 79\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 5\n                }, this),\n                invalidSearchTerm ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Invalid_Invalid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 24\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: grid ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.BooksConatiner, {\n                        children: [\n                            !loading && data ? data.map((item)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookItem_BookItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    item: item\n                                }, item._id, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 16\n                                }, this);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Loading\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToTop_ToTop__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 8\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 5\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.BooksConatiner2, {\n                        children: [\n                            !loading && data ? data.map((item)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookItem2_BookItem2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    item: item\n                                }, item._id, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 16\n                                }, this);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Loading\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToTop_ToTop__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.LoadMore, {\n                                children: \"More\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 2\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n            lineNumber: 58,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"3xVvNY6WsWq//Vqv3BlDc/Wi0AY=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUE7OzRCQUNiLENBQUNtQixXQUFXRSxPQUFNQSxLQUFLb0IsR0FBRyxDQUFDLENBQUNDLE9BQU87Z0NBQ2xDLHFCQUFPLDhEQUFDdEMsNERBQVNBO29DQUFlc0MsTUFBTUE7bUNBQWZBLEtBQUtDLEdBQUc7Ozs7OzRCQUNqQyxtQkFBSSw4REFBQ0M7MENBQUU7Ozs7O29DQUFXOzBDQUNwQiw4REFBQzNDLG9EQUFLQTs7Ozs7MENBRVQsOERBQUNMLDZDQUFRQTswQ0FBRTs7Ozs7Ozs7Ozs7NEJBQ007Ozs7O3dCQUNaOzs7Ozs7OztBQU1OO0dBNUVTVzs7UUFDUWYsd0RBQWNBO1FBRUxDLHdEQUFjQTtRQUNqQkEsd0RBQWNBO1FBQ2JBLHdEQUFjQTs7O0tBTDdCYztBQThFVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jvb2tzL01haW4vTWFpbi50c3g/NGIwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlU3RhdGUsdXNlUmVmLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4uLy4uLy4uL3V0aWxlcyc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L2hvb2tzJ1xyXG5pbXBvcnQgeyBzZWxlY3RlZGNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvQ2F0ZWdvcnlTbGljZSdcclxuaW1wb3J0IEJvb2tJdGVtIGZyb20gJy4uLy4uL0Jvb2tJdGVtL0Jvb2tJdGVtJztcclxuaW1wb3J0IHtCb29rc0NvbmF0aW5lciwgTG9hZE1vcmUsIFRvcCxDb250YWluZXIsIEdyaWQsIEJvb2tzQ29uYXRpbmVyMn0gZnJvbSAnLi9zdHlsZXMnXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi9GZWF0dXJlcy9GZWF0dXJlcyc7XHJcbmltcG9ydCB7IGJvb2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvYm9va1R5cGUnO1xyXG5pbXBvcnQgVG9Ub3AgZnJvbSAnLi4vLi4vVG9Ub3AvVG9Ub3AnO1xyXG5pbXBvcnQgeyBUZmlMYXlvdXRHcmlkM0FsdCB9IGZyb20gXCJyZWFjdC1pY29ucy90ZmlcIjtcclxuaW1wb3J0IHsgVGZpTGF5b3V0TGlzdFRodW1iQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL3RmaVwiO1xyXG5pbXBvcnQgQm9va0l0ZW0yIGZyb20gJy4uLy4uL0Jvb2tJdGVtMi9Cb29rSXRlbTInO1xyXG5pbXBvcnQgSW52YWxpZCBmcm9tICcuLi8uLi9JbnZhbGlkL0ludmFsaWQnO1xyXG4vL2ltcG9ydCBGaWx0ZXJQcmljZSBmcm9tICcuLi9GaWx0ZXJQcmljZS9GaWx0ZXJQcmljZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBNYWluKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoPXVzZUFwcERpc3BhdGNoKClcclxuICAvL2dldCBkYXRhIGZvcm0gcmVkdXggYW5kIGZlY2ggZGF0YSBcclxuICBjb25zdCBjYXRlZ29yeVNlbGVjdGVkID11c2VBcHBTZWxlY3Rvcigoc3RhdGU9PnN0YXRlLmNhdGVnb3J5LmNhdGVnb3J5KSlcclxuICBjb25zdCByYXRlU2VsZWN0ZWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGU9PnN0YXRlLnJhdGUucmF0ZSkpXHJcbiAgY29uc3QgcHJpY2VTZWxlY3RlZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZT0+c3RhdGUucHJpY2UucHJpY2UpKVxyXG4gIGNvbnNvbGUubG9nKHByaWNlU2VsZWN0ZWQpXHJcbiAgbGV0IG1pbj1wcmljZVNlbGVjdGVkWzBdXHJcblxyXG5cclxuY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddPXVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID11c2VTdGF0ZTxib29rVHlwZVtdPihbXSlcclxuICAgICBjb25zdCBbZmlsdGVkRGF0YSAsIHNldEZpbHRlcmVkRGF0YV0gPXVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9dXNlU3RhdGU8bnVtYmVyPigxKVxyXG4gICAgY29uc3QgW2dyaWQsIHNldEdyaWRdID11c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID11c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtpbnZhbGlkU2VhcmNoVGVybSwgc2V0SW52YWxpZFNlYXJjaFRlcm1dID11c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIHNldExvYWRpbmcodHJ1ZSlcclxuICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvYm9va3NcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2V0RGF0YShyZXNwb25zZS5kYXRhLmJvb2tzKSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbn0sIFtdKVxyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBzZXRMb2FkaW5nKHRydWUpXHJcbiAvL2NvbnNvbGUubG9nKGNhdGVnb3J5U2VsZWN0ZWQpXHJcbiAgIGF4aW9zXHJcbiAgICAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3YxL2Jvb2tzP251bWVyaWNGaWx0ZXJzPXJhdGluZz49JHtyYXRlU2VsZWN0ZWR9LHByaWNlPiR7bWlufSZjYXRlZ29yeT0ke2NhdGVnb3J5U2VsZWN0ZWR9YClcclxuICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldERhdGEocmVzcG9uc2UuZGF0YS5ib29rcykpO1xyXG4gICAgICBcclxuICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbn0sIFtjYXRlZ29yeVNlbGVjdGVkLHJhdGVTZWxlY3RlZCxtaW5dKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgIFxyXG4gICAgPFRvcD4gXHJcbiAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2dyaWQgPyAnJyA6ICdhY3RpdmUnfSBvbkNsaWNrPXsoKT0+c2V0R3JpZCghZ3JpZCl9PjxUZmlMYXlvdXRMaXN0VGh1bWJBbHQvPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Z3JpZCA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9eygpPT5zZXRHcmlkKCFncmlkKX0+PFRmaUxheW91dEdyaWQzQWx0IC8+PC9zcGFuPlxyXG4gICAgIDwvR3JpZD5cclxuICAgIDwvVG9wPlxyXG4gIHtpbnZhbGlkU2VhcmNoVGVybSA/IDxJbnZhbGlkIC8+IDpcclxuICAgIDxkaXY+XHJcbiAgICAgeyBncmlkID8gXHJcbiAgICA8Qm9va3NDb25hdGluZXI+XHJcbiAgICAgIHshbG9hZGluZyAmJiBkYXRhID9kYXRhLm1hcCgoaXRlbSk9PntcclxuICAgICAgICByZXR1cm4gPEJvb2tJdGVtIGtleT17aXRlbS5faWR9aXRlbT17aXRlbX0vPlxyXG4gICAgICB9KTogPHA+TG9hZGluZzwvcD59XHJcbiAgIFxyXG5cclxuICAgICAgIDxUb1RvcCAvPlxyXG4gICAgey8qIDxMb2FkTW9yZSA+TW9yZTwvTG9hZE1vcmU+ICovfVxyXG4gICAgPC9Cb29rc0NvbmF0aW5lcj4gOlxyXG5cclxuXHJcbiAgICA8Qm9va3NDb25hdGluZXIyPlxyXG4gICAgICB7IWxvYWRpbmcgJiYgZGF0YSA/ZGF0YS5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgcmV0dXJuIDxCb29rSXRlbTIga2V5PXtpdGVtLl9pZH1pdGVtPXtpdGVtfS8+XHJcbiAgICAgIH0pOiA8cD5Mb2FkaW5nPC9wPn1cclxuICAgIDxUb1RvcCAvPlxyXG4gICBcclxuIDxMb2FkTW9yZSA+TW9yZTwvTG9hZE1vcmU+XHJcbjwvQm9va3NDb25hdGluZXIyPiB9XHJcbjwvZGl2PiB9XHJcblxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgIFxyXG4gICAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5cclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IG9ic2VydmVyPXVzZVJlZjxJbnRlcnNlY3Rpb25PYnNlcnZlcj4oKVxyXG4gICBcclxuLy8gY29uc3QgbGFzdEJvb2tlbGVtZW50UmVmID0gdXNlQ2FsbGJhY2soKG5vZGU6IGFueSk9PntcclxuLy8gICAgICAgIGlmKGxvYWRpbmcpIHJldHVyblxyXG4vLyAgICAgICAgaWYgKG9ic2VydmVyLmN1cnJlbnQpIG9ic2VydmVyLmN1cnJlbnQuZGlzY29ubmVjdCgpXHJcbi8vICAgICAgICBvYnNlcnZlci5jdXJyZW50ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntcclxuLy8gICAgICAgICBpZihlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKXtcclxuLy8gICAgICAgICBzZXRQYWdlKDUpXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICB9KVxyXG4vLyAgICAgIGlmKG5vZGUpIG9ic2VydmVyLmN1cnJlbnQub2JzZXJ2ZShub2RlKVxyXG4vLyAgICAgICAgfSxbbG9hZGluZ10pXHJcblxyXG5cclxuLy9pZiBzZWFyY2hUZXJtIGNoYW5nZSBpbiByZWR1eC8vXHJcbi8vICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4vLyAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuLy8gICAgIGlmKHNlYXJjaFRlcm0ubGVuZ3RoPjEpe1xyXG4gICAgICBcclxuLy8gICAgICAgKGZldGNoRGF0YShzZWFyY2hUZXJtLCBwYWdlKjE1KzEpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuLy8gICAgICAgICBzZXREYXRhIChbLi4ucmVzdWx0Lml0ZW1zXSlcclxuLy8gfSkpXHJcbi8vIHNldExvYWRpbmcoZmFsc2UpO1xyXG4vLyAgICAgfVxyXG4gICBcclxuLy8gICAgIH0sIFtzZWFyY2hUZXJtLmxlbmd0aF0pXHJcblxyXG4vLy8vY29uc3QgcHJpY2U9dXNlQXBwU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnByaWNlLnByaWNlKVxyXG5cclxuLy9jb25zb2xlLmxvZyhjYXRlZ29yeSlcclxuLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICBjb25zdCB0PSBkYXRhLmZpbHRlcigoaXRlbSk9PntcclxuLy8gICAgcmV0dXJuIGl0ZW0udm9sdW1lSW5mby5wYWdlQ291bnQ+PSBwcmljZVswXSAmJiBpdGVtLnZvbHVtZUluZm8ucGFnZUNvdW50IDw9IHByaWNlWzFdXHJcbi8vICAgfSlcclxuLy8gICBzZXREYXRhKHQpXHJcbi8vICAgfSwgW3ByaWNlXSlcclxuLy8gICAvL2NhdGVnb3J5IGNhaG5nZWQgbWFrZSBuZXcgYXJyXHJcbi8vICAgICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbi8vICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbi8vICAgICAgIHNldFBhZ2UoMCk7XHJcbi8vICAgICAgIHNldERhdGEoW10pO1xyXG4vLyAgICAgICAvL2NvbnNvbGUubG9nKHBhZ2UpO1xyXG4vLyAgICAgICBpZihjYXRlZ29yeS5sZW5ndGg+MSl7XHJcbi8vICAgICAgICAgc2V0SW52YWxpZFNlYXJjaFRlcm0oZmFsc2UpO1xyXG4vLyAgICAgICAgIChmZXRjaERhdGEoY2F0ZWdvcnksIHBhZ2UqMTUpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuLy8gICAgICAgICAgIHNldERhdGEgKFsuLi5yZXN1bHQuaXRlbXNdKVxyXG4gICAgICAgICBcclxuLy8gICAgICAgICB9KSlcclxuLy8gICAgICAgfWVsc2V7XHJcbi8vICAgICAgICBzZXRJbnZhbGlkU2VhcmNoVGVybSh0cnVlKVxyXG4vLyAgICAgICB9XHJcbiAgICAgIFxyXG4vLyAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBcclxuLy8gICAgICAgfSwgW2NhdGVnb3J5XSlcclxuICBcclxuICBcclxuLy8gICAvL2p1c3QgcGFnZSBjYWhuZ2VkIGFkZCB0byB0aGUgZW5kIG9mIHBhZ2VcclxuLy8gICAgICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbi8vICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuLy8gICAgICAgICAgIChmZXRjaERhdGEoY2F0ZWdvcnksIHBhZ2UqMTUrMSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSAoWy4uLmRhdGEsLi4ucmVzdWx0Lml0ZW1zXSlcclxuLy8gICAgICAgICAgICB9KSlcclxuLy8gICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4vLyAgICAgICAgIH0sIFtwYWdlXSlcclxuICBcclxuLy8gICAvL2lmIHF1ZXJ5IGNoYW5nZWQvL1xyXG4gIFxyXG4gIFxyXG4vLyAgICAgIGNvbnN0IGhhbmRlbFBhZ2U9KCk9PntcclxuLy8gICAgICAgc2V0UGFnZShwYWdlKzEpXHJcbi8vICAgICAgfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJCb29rSXRlbSIsIkJvb2tzQ29uYXRpbmVyIiwiTG9hZE1vcmUiLCJUb3AiLCJDb250YWluZXIiLCJHcmlkIiwiQm9va3NDb25hdGluZXIyIiwiVG9Ub3AiLCJUZmlMYXlvdXRHcmlkM0FsdCIsIlRmaUxheW91dExpc3RUaHVtYkFsdCIsIkJvb2tJdGVtMiIsIkludmFsaWQiLCJheGlvcyIsIk1haW4iLCJkaXNwYXRjaCIsImNhdGVnb3J5U2VsZWN0ZWQiLCJzdGF0ZSIsImNhdGVnb3J5IiwicmF0ZVNlbGVjdGVkIiwicmF0ZSIsInByaWNlU2VsZWN0ZWQiLCJwcmljZSIsImNvbnNvbGUiLCJsb2ciLCJtaW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJzZXREYXRhIiwiZmlsdGVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsInBhZ2UiLCJzZXRQYWdlIiwiZ3JpZCIsInNldEdyaWQiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImludmFsaWRTZWFyY2hUZXJtIiwic2V0SW52YWxpZFNlYXJjaFRlcm0iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJib29rcyIsInNwYW4iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGl2IiwibWFwIiwiaXRlbSIsIl9pZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Books/Main/Main.tsx\n"));

/***/ })

});