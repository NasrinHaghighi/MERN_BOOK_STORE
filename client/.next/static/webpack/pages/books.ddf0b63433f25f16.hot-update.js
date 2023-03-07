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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var _BookItem_BookItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BookItem/BookItem */ \"./components/BookItem/BookItem.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./components/Books/Main/styles.ts\");\n/* harmony import */ var _ToTop_ToTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ToTop/ToTop */ \"./components/ToTop/ToTop.tsx\");\n/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/tfi */ \"./node_modules/react-icons/tfi/index.esm.js\");\n/* harmony import */ var _BookItem2_BookItem2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../BookItem2/BookItem2 */ \"./components/BookItem2/BookItem2.tsx\");\n/* harmony import */ var _Invalid_Invalid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Invalid/Invalid */ \"./components/Invalid/Invalid.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n//import FilterPrice from '../FilterPrice/FilterPrice';\n\nfunction Main() {\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    //get data form redux and fech data \n    const categorySelected = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.category.category);\n    const rateSelected = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.rate.rate);\n    const priceSelected = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.price.price);\n    console.log(priceSelected);\n    let min = priceSelected[0];\n    let max = priceSelected[1];\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filtedData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [invalidSearchTerm, setInvalidSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:4000/api/v1/books\").then((response)=>setData(response.data.books));\n        setLoading(false);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        //console.log(categorySelected)\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:4000/api/v1/books?numericFilters=rating>=\".concat(rateSelected, \",price>\").concat(min, \"&category=\").concat(categorySelected)).then((response)=>setData(response.data.books));\n        setLoading(false);\n    }, [\n        categorySelected,\n        rateSelected,\n        min\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Top, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: grid ? \"\" : \"active\",\n                                onClick: ()=>setGrid(!grid),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tfi__WEBPACK_IMPORTED_MODULE_9__.TfiLayoutListThumbAlt, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 79\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: grid ? \"active\" : \"\",\n                                onClick: ()=>setGrid(!grid),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tfi__WEBPACK_IMPORTED_MODULE_9__.TfiLayoutGrid3Alt, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 79\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 5\n                }, this),\n                invalidSearchTerm ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Invalid_Invalid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 24\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: grid ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.BooksConatiner, {\n                        children: [\n                            !loading && data ? data.map((item)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookItem_BookItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    item: item\n                                }, item._id, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 16\n                                }, this);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Loading\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToTop_ToTop__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 8\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 5\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.BooksConatiner2, {\n                        children: [\n                            !loading && data ? data.map((item)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookItem2_BookItem2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    item: item\n                                }, item._id, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 16\n                                }, this);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Loading\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToTop_ToTop__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.LoadMore, {\n                                children: \"More\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 2\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n            lineNumber: 58,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"3xVvNY6WsWq//Vqv3BlDc/Wi0AY=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0RBQUtBOzs7Ozs7Ozs7OzZDQUtULDhEQUFDRCxvREFBZUE7OzRCQUNiLENBQUNvQixXQUFXRSxPQUFNQSxLQUFLb0IsR0FBRyxDQUFDLENBQUNDLE9BQU87Z0NBQ2xDLHFCQUFPLDhEQUFDdkMsNERBQVNBO29DQUFldUMsTUFBTUE7bUNBQWZBLEtBQUtDLEdBQUc7Ozs7OzRCQUNqQyxtQkFBSSw4REFBQ0M7MENBQUU7Ozs7O29DQUFXOzBDQUNwQiw4REFBQzVDLG9EQUFLQTs7Ozs7MENBRVQsOERBQUNMLDZDQUFRQTswQ0FBRTs7Ozs7Ozs7Ozs7NEJBQ007Ozs7O3dCQUNaOzs7Ozs7OztBQU1OO0dBNUVTVzs7UUFDUWYsd0RBQWNBO1FBRUxDLHdEQUFjQTtRQUNqQkEsd0RBQWNBO1FBQ2JBLHdEQUFjQTs7O0tBTDdCYztBQThFVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jvb2tzL01haW4vTWFpbi50c3g/NGIwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlU3RhdGUsdXNlUmVmLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4uLy4uLy4uL3V0aWxlcyc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L2hvb2tzJ1xyXG5pbXBvcnQgeyBzZWxlY3RlZGNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvQ2F0ZWdvcnlTbGljZSdcclxuaW1wb3J0IEJvb2tJdGVtIGZyb20gJy4uLy4uL0Jvb2tJdGVtL0Jvb2tJdGVtJztcclxuaW1wb3J0IHtCb29rc0NvbmF0aW5lciwgTG9hZE1vcmUsIFRvcCxDb250YWluZXIsIEdyaWQsIEJvb2tzQ29uYXRpbmVyMn0gZnJvbSAnLi9zdHlsZXMnXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi9GZWF0dXJlcy9GZWF0dXJlcyc7XHJcbmltcG9ydCB7IGJvb2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvYm9va1R5cGUnO1xyXG5pbXBvcnQgVG9Ub3AgZnJvbSAnLi4vLi4vVG9Ub3AvVG9Ub3AnO1xyXG5pbXBvcnQgeyBUZmlMYXlvdXRHcmlkM0FsdCB9IGZyb20gXCJyZWFjdC1pY29ucy90ZmlcIjtcclxuaW1wb3J0IHsgVGZpTGF5b3V0TGlzdFRodW1iQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL3RmaVwiO1xyXG5pbXBvcnQgQm9va0l0ZW0yIGZyb20gJy4uLy4uL0Jvb2tJdGVtMi9Cb29rSXRlbTInO1xyXG5pbXBvcnQgSW52YWxpZCBmcm9tICcuLi8uLi9JbnZhbGlkL0ludmFsaWQnO1xyXG4vL2ltcG9ydCBGaWx0ZXJQcmljZSBmcm9tICcuLi9GaWx0ZXJQcmljZS9GaWx0ZXJQcmljZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBNYWluKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoPXVzZUFwcERpc3BhdGNoKClcclxuICAvL2dldCBkYXRhIGZvcm0gcmVkdXggYW5kIGZlY2ggZGF0YSBcclxuICBjb25zdCBjYXRlZ29yeVNlbGVjdGVkID11c2VBcHBTZWxlY3Rvcigoc3RhdGU9PnN0YXRlLmNhdGVnb3J5LmNhdGVnb3J5KSlcclxuICBjb25zdCByYXRlU2VsZWN0ZWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGU9PnN0YXRlLnJhdGUucmF0ZSkpXHJcbiAgY29uc3QgcHJpY2VTZWxlY3RlZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZT0+c3RhdGUucHJpY2UucHJpY2UpKVxyXG4gIGNvbnNvbGUubG9nKHByaWNlU2VsZWN0ZWQpXHJcbiAgbGV0IG1pbj1wcmljZVNlbGVjdGVkWzBdXHJcbiAgbGV0IG1heD1wcmljZVNlbGVjdGVkWzFdXHJcblxyXG5jb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ109dXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPXVzZVN0YXRlPGJvb2tUeXBlW10+KFtdKVxyXG4gICAgIGNvbnN0IFtmaWx0ZWREYXRhICwgc2V0RmlsdGVyZWREYXRhXSA9dXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID11c2VTdGF0ZTxudW1iZXI+KDEpXHJcbiAgICBjb25zdCBbZ3JpZCwgc2V0R3JpZF0gPXVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPXVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2ludmFsaWRTZWFyY2hUZXJtLCBzZXRJbnZhbGlkU2VhcmNoVGVybV0gPXVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS92MS9ib29rc1wiKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBzZXREYXRhKHJlc3BvbnNlLmRhdGEuYm9va3MpKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxufSwgW10pXHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIHNldExvYWRpbmcodHJ1ZSlcclxuIC8vY29uc29sZS5sb2coY2F0ZWdvcnlTZWxlY3RlZClcclxuICAgYXhpb3NcclxuICAgICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvYm9va3M/bnVtZXJpY0ZpbHRlcnM9cmF0aW5nPj0ke3JhdGVTZWxlY3RlZH0scHJpY2U+JHttaW59JmNhdGVnb3J5PSR7Y2F0ZWdvcnlTZWxlY3RlZH1gKVxyXG4gICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2V0RGF0YShyZXNwb25zZS5kYXRhLmJvb2tzKSk7XHJcbiAgICAgIFxyXG4gICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxufSwgW2NhdGVnb3J5U2VsZWN0ZWQscmF0ZVNlbGVjdGVkLG1pbl0pXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgXHJcbiAgICA8VG9wPiBcclxuICAgICA8R3JpZD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Z3JpZCA/ICcnIDogJ2FjdGl2ZSd9IG9uQ2xpY2s9eygpPT5zZXRHcmlkKCFncmlkKX0+PFRmaUxheW91dExpc3RUaHVtYkFsdC8+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtncmlkID8gJ2FjdGl2ZScgOiAnJ30gb25DbGljaz17KCk9PnNldEdyaWQoIWdyaWQpfT48VGZpTGF5b3V0R3JpZDNBbHQgLz48L3NwYW4+XHJcbiAgICAgPC9HcmlkPlxyXG4gICAgPC9Ub3A+XHJcbiAge2ludmFsaWRTZWFyY2hUZXJtID8gPEludmFsaWQgLz4gOlxyXG4gICAgPGRpdj5cclxuICAgICB7IGdyaWQgPyBcclxuICAgIDxCb29rc0NvbmF0aW5lcj5cclxuICAgICAgeyFsb2FkaW5nICYmIGRhdGEgP2RhdGEubWFwKChpdGVtKT0+e1xyXG4gICAgICAgIHJldHVybiA8Qm9va0l0ZW0ga2V5PXtpdGVtLl9pZH1pdGVtPXtpdGVtfS8+XHJcbiAgICAgIH0pOiA8cD5Mb2FkaW5nPC9wPn1cclxuICAgXHJcblxyXG4gICAgICAgPFRvVG9wIC8+XHJcbiAgICB7LyogPExvYWRNb3JlID5Nb3JlPC9Mb2FkTW9yZT4gKi99XHJcbiAgICA8L0Jvb2tzQ29uYXRpbmVyPiA6XHJcblxyXG5cclxuICAgIDxCb29rc0NvbmF0aW5lcjI+XHJcbiAgICAgIHshbG9hZGluZyAmJiBkYXRhID9kYXRhLm1hcCgoaXRlbSk9PntcclxuICAgICAgICByZXR1cm4gPEJvb2tJdGVtMiBrZXk9e2l0ZW0uX2lkfWl0ZW09e2l0ZW19Lz5cclxuICAgICAgfSk6IDxwPkxvYWRpbmc8L3A+fVxyXG4gICAgPFRvVG9wIC8+XHJcbiAgIFxyXG4gPExvYWRNb3JlID5Nb3JlPC9Mb2FkTW9yZT5cclxuPC9Cb29rc0NvbmF0aW5lcjI+IH1cclxuPC9kaXY+IH1cclxuXHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgXHJcbiAgICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc3Qgb2JzZXJ2ZXI9dXNlUmVmPEludGVyc2VjdGlvbk9ic2VydmVyPigpXHJcbiAgIFxyXG4vLyBjb25zdCBsYXN0Qm9va2VsZW1lbnRSZWYgPSB1c2VDYWxsYmFjaygobm9kZTogYW55KT0+e1xyXG4vLyAgICAgICAgaWYobG9hZGluZykgcmV0dXJuXHJcbi8vICAgICAgICBpZiAob2JzZXJ2ZXIuY3VycmVudCkgb2JzZXJ2ZXIuY3VycmVudC5kaXNjb25uZWN0KClcclxuLy8gICAgICAgIG9ic2VydmVyLmN1cnJlbnQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e1xyXG4vLyAgICAgICAgIGlmKGVudHJpZXNbMF0uaXNJbnRlcnNlY3Rpbmcpe1xyXG4vLyAgICAgICAgIHNldFBhZ2UoNSlcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgIH0pXHJcbi8vICAgICAgaWYobm9kZSkgb2JzZXJ2ZXIuY3VycmVudC5vYnNlcnZlKG5vZGUpXHJcbi8vICAgICAgICB9LFtsb2FkaW5nXSlcclxuXHJcblxyXG4vL2lmIHNlYXJjaFRlcm0gY2hhbmdlIGluIHJlZHV4Ly9cclxuLy8gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbi8vICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4vLyAgICAgaWYoc2VhcmNoVGVybS5sZW5ndGg+MSl7XHJcbiAgICAgIFxyXG4vLyAgICAgICAoZmV0Y2hEYXRhKHNlYXJjaFRlcm0sIHBhZ2UqMTUrMSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4vLyAgICAgICAgIHNldERhdGEgKFsuLi5yZXN1bHQuaXRlbXNdKVxyXG4vLyB9KSlcclxuLy8gc2V0TG9hZGluZyhmYWxzZSk7XHJcbi8vICAgICB9XHJcbiAgIFxyXG4vLyAgICAgfSwgW3NlYXJjaFRlcm0ubGVuZ3RoXSlcclxuXHJcbi8vLy9jb25zdCBwcmljZT11c2VBcHBTZWxlY3RvcihzdGF0ZT0+c3RhdGUucHJpY2UucHJpY2UpXHJcblxyXG4vL2NvbnNvbGUubG9nKGNhdGVnb3J5KVxyXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgIGNvbnN0IHQ9IGRhdGEuZmlsdGVyKChpdGVtKT0+e1xyXG4vLyAgICByZXR1cm4gaXRlbS52b2x1bWVJbmZvLnBhZ2VDb3VudD49IHByaWNlWzBdICYmIGl0ZW0udm9sdW1lSW5mby5wYWdlQ291bnQgPD0gcHJpY2VbMV1cclxuLy8gICB9KVxyXG4vLyAgIHNldERhdGEodClcclxuLy8gICB9LCBbcHJpY2VdKVxyXG4vLyAgIC8vY2F0ZWdvcnkgY2FobmdlZCBtYWtlIG5ldyBhcnJcclxuLy8gICAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuLy8gICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuLy8gICAgICAgc2V0UGFnZSgwKTtcclxuLy8gICAgICAgc2V0RGF0YShbXSk7XHJcbi8vICAgICAgIC8vY29uc29sZS5sb2cocGFnZSk7XHJcbi8vICAgICAgIGlmKGNhdGVnb3J5Lmxlbmd0aD4xKXtcclxuLy8gICAgICAgICBzZXRJbnZhbGlkU2VhcmNoVGVybShmYWxzZSk7XHJcbi8vICAgICAgICAgKGZldGNoRGF0YShjYXRlZ29yeSwgcGFnZSoxNSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4vLyAgICAgICAgICAgc2V0RGF0YSAoWy4uLnJlc3VsdC5pdGVtc10pXHJcbiAgICAgICAgIFxyXG4vLyAgICAgICAgIH0pKVxyXG4vLyAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgIHNldEludmFsaWRTZWFyY2hUZXJtKHRydWUpXHJcbi8vICAgICAgIH1cclxuICAgICAgXHJcbi8vICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIFxyXG4vLyAgICAgICB9LCBbY2F0ZWdvcnldKVxyXG4gIFxyXG4gIFxyXG4vLyAgIC8vanVzdCBwYWdlIGNhaG5nZWQgYWRkIHRvIHRoZSBlbmQgb2YgcGFnZVxyXG4vLyAgICAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuLy8gICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4vLyAgICAgICAgICAgKGZldGNoRGF0YShjYXRlZ29yeSwgcGFnZSoxNSsxKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICAgICAgICAgICBzZXREYXRhIChbLi4uZGF0YSwuLi5yZXN1bHQuaXRlbXNdKVxyXG4vLyAgICAgICAgICAgIH0pKVxyXG4vLyAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbi8vICAgICAgICAgfSwgW3BhZ2VdKVxyXG4gIFxyXG4vLyAgIC8vaWYgcXVlcnkgY2hhbmdlZC8vXHJcbiAgXHJcbiAgXHJcbi8vICAgICAgY29uc3QgaGFuZGVsUGFnZT0oKT0+e1xyXG4vLyAgICAgICBzZXRQYWdlKHBhZ2UrMSlcclxuLy8gICAgICB9XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIkJvb2tJdGVtIiwiQm9va3NDb25hdGluZXIiLCJMb2FkTW9yZSIsIlRvcCIsIkNvbnRhaW5lciIsIkdyaWQiLCJCb29rc0NvbmF0aW5lcjIiLCJUb1RvcCIsIlRmaUxheW91dEdyaWQzQWx0IiwiVGZpTGF5b3V0TGlzdFRodW1iQWx0IiwiQm9va0l0ZW0yIiwiSW52YWxpZCIsImF4aW9zIiwiTWFpbiIsImRpc3BhdGNoIiwiY2F0ZWdvcnlTZWxlY3RlZCIsInN0YXRlIiwiY2F0ZWdvcnkiLCJyYXRlU2VsZWN0ZWQiLCJyYXRlIiwicHJpY2VTZWxlY3RlZCIsInByaWNlIiwiY29uc29sZSIsImxvZyIsIm1pbiIsIm1heCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJmaWx0ZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwicGFnZSIsInNldFBhZ2UiLCJncmlkIiwic2V0R3JpZCIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiaW52YWxpZFNlYXJjaFRlcm0iLCJzZXRJbnZhbGlkU2VhcmNoVGVybSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImJvb2tzIiwic3BhbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkaXYiLCJtYXAiLCJpdGVtIiwiX2lkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Books/Main/Main.tsx\n"));

/***/ })

});