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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var _BookItem_BookItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BookItem/BookItem */ \"./components/BookItem/BookItem.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./components/Books/Main/styles.ts\");\n/* harmony import */ var _ToTop_ToTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ToTop/ToTop */ \"./components/ToTop/ToTop.tsx\");\n/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/tfi */ \"./node_modules/react-icons/tfi/index.esm.js\");\n/* harmony import */ var _BookItem2_BookItem2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../BookItem2/BookItem2 */ \"./components/BookItem2/BookItem2.tsx\");\n/* harmony import */ var _Invalid_Invalid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Invalid/Invalid */ \"./components/Invalid/Invalid.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n//import FilterPrice from '../FilterPrice/FilterPrice';\n\nfunction Main() {\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    //get data form redux and fech data \n    const categorySelected = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.category.category);\n    const rateSelected = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.rate.rate);\n    const priceSelected = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.price.price);\n    console.log(priceSelected);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filtedData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [invalidSearchTerm, setInvalidSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:4000/api/v1/books\").then((response)=>setData(response.data.books));\n        setLoading(false);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true);\n        //console.log(categorySelected)\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"http://localhost:4000/api/v1/books?numericFilters=rating>=\".concat(rateSelected, \",price>20&category=\").concat(categorySelected)).then((response)=>setData(response.data.books));\n        setLoading(false);\n    }, [\n        categorySelected,\n        rateSelected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Top, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: grid ? \"\" : \"active\",\n                                onClick: ()=>setGrid(!grid),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tfi__WEBPACK_IMPORTED_MODULE_9__.TfiLayoutListThumbAlt, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 79\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: grid ? \"active\" : \"\",\n                                onClick: ()=>setGrid(!grid),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tfi__WEBPACK_IMPORTED_MODULE_9__.TfiLayoutGrid3Alt, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 79\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 5\n                }, this),\n                invalidSearchTerm ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Invalid_Invalid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 24\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: grid ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.BooksConatiner, {\n                        children: [\n                            !loading && data ? data.map((item)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookItem_BookItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    item: item\n                                }, item._id, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 16\n                                }, this);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Loading\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToTop_ToTop__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 8\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 5\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.BooksConatiner2, {\n                        children: [\n                            !loading && data ? data.map((item)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BookItem2_BookItem2__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    item: item\n                                }, item._id, false, {\n                                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 16\n                                }, this);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Loading\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToTop_ToTop__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.LoadMore, {\n                                children: \"More\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 2\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Main\\\\Main.tsx\",\n            lineNumber: 58,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"3xVvNY6WsWq//Vqv3BlDc/Wi0AY=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tzL01haW4vTWFpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRTtBQUVFO0FBRXRCO0FBQ3dDO0FBR2pEO0FBQ2M7QUFDSTtBQUNOO0FBQ047QUFDNUMsdURBQXVEO0FBQzdCO0FBRzFCLFNBQVNrQixPQUFPOztJQUNkLE1BQU1DLFdBQVNoQiw0REFBY0E7SUFDN0Isb0NBQW9DO0lBQ3BDLE1BQU1pQixtQkFBa0JoQiw0REFBY0EsQ0FBRWlCLENBQUFBLFFBQU9BLE1BQU1DLFFBQVEsQ0FBQ0EsUUFBUTtJQUN0RSxNQUFNQyxlQUFlbkIsNERBQWNBLENBQUVpQixDQUFBQSxRQUFPQSxNQUFNRyxJQUFJLENBQUNBLElBQUk7SUFDM0QsTUFBTUMsZ0JBQWdCckIsNERBQWNBLENBQUVpQixDQUFBQSxRQUFPQSxNQUFNSyxLQUFLLENBQUNBLEtBQUs7SUFDOURDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFJZCxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBQzVCLCtDQUFRQSxDQUFVLEtBQUs7SUFDL0MsTUFBTSxDQUFDNkIsTUFBTUMsUUFBUSxHQUFFOUIsK0NBQVFBLENBQWEsRUFBRTtJQUM3QyxNQUFNLENBQUMrQixZQUFhQyxnQkFBZ0IsR0FBRWhDLCtDQUFRQSxDQUFDLEVBQUU7SUFFbEQsTUFBTSxDQUFDaUMsTUFBTUMsUUFBUSxHQUFFbEMsK0NBQVFBLENBQVM7SUFDeEMsTUFBTSxDQUFDbUMsTUFBTUMsUUFBUSxHQUFFcEMsK0NBQVFBLENBQUMsSUFBSTtJQUNwQyxNQUFNLENBQUNxQyxZQUFZQyxjQUFjLEdBQUV0QywrQ0FBUUEsQ0FBQztJQUM1QyxNQUFNLENBQUN1QyxtQkFBbUJDLHFCQUFxQixHQUFFeEMsK0NBQVFBLENBQUMsS0FBSztJQUduRUQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkNkIsV0FBVyxJQUFJO1FBQ2RiLGlEQUNPLENBQUMsc0NBQ0oyQixJQUFJLENBQUNDLENBQUFBLFdBQVliLFFBQVFhLFNBQVNkLElBQUksQ0FBQ2UsS0FBSztRQUM3Q2hCLFdBQVcsS0FBSztJQUN0QixHQUFHLEVBQUU7SUFFTDdCLGdEQUFTQSxDQUFDLElBQU07UUFDZDZCLFdBQVcsSUFBSTtRQUNoQiwrQkFBK0I7UUFDN0JiLGlEQUNRLENBQUMsNkRBQStGRyxPQUFsQ0csY0FBYSx1QkFBc0MsT0FBakJILG1CQUNuR3dCLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWWIsUUFBUWEsU0FBU2QsSUFBSSxDQUFDZSxLQUFLO1FBRTdDaEIsV0FBVyxLQUFLO0lBQ3ZCLEdBQUc7UUFBQ1Y7UUFBaUJHO0tBQWE7SUFFaEMscUJBQ0U7a0JBQ0EsNEVBQUNkLDhDQUFTQTs7OEJBRVYsOERBQUNELHdDQUFHQTs4QkFDSCw0RUFBQ0UseUNBQUlBOzswQ0FDQSw4REFBQ3FDO2dDQUFLQyxXQUFXWCxPQUFPLEtBQUssUUFBUTtnQ0FBRVksU0FBUyxJQUFJWCxRQUFRLENBQUNEOzBDQUFPLDRFQUFDdkIsa0VBQXFCQTs7Ozs7Ozs7OzswQ0FDMUYsOERBQUNpQztnQ0FBS0MsV0FBV1gsT0FBTyxXQUFXLEVBQUU7Z0NBQUVZLFNBQVMsSUFBSVgsUUFBUSxDQUFDRDswQ0FBTyw0RUFBQ3hCLDhEQUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFHN0Y0QixrQ0FBb0IsOERBQUN6Qix3REFBT0E7Ozs7eUNBQzNCLDhEQUFDa0M7OEJBQ0ViLHFCQUNILDhEQUFDL0IsbURBQWNBOzs0QkFDWixDQUFDdUIsV0FBV0UsT0FBTUEsS0FBS29CLEdBQUcsQ0FBQyxDQUFDQyxPQUFPO2dDQUNsQyxxQkFBTyw4REFBQy9DLDBEQUFRQTtvQ0FBZStDLE1BQU1BO21DQUFmQSxLQUFLQyxHQUFHOzs7Ozs0QkFDaEMsbUJBQUksOERBQUNDOzBDQUFFOzs7OztvQ0FBVzswQ0FHakIsOERBQUMxQyxvREFBS0E7Ozs7Ozs7Ozs7NkNBS1QsOERBQUNELG9EQUFlQTs7NEJBQ2IsQ0FBQ2tCLFdBQVdFLE9BQU1BLEtBQUtvQixHQUFHLENBQUMsQ0FBQ0MsT0FBTztnQ0FDbEMscUJBQU8sOERBQUNyQyw0REFBU0E7b0NBQWVxQyxNQUFNQTttQ0FBZkEsS0FBS0MsR0FBRzs7Ozs7NEJBQ2pDLG1CQUFJLDhEQUFDQzswQ0FBRTs7Ozs7b0NBQVc7MENBQ3BCLDhEQUFDMUMsb0RBQUtBOzs7OzswQ0FFVCw4REFBQ0wsNkNBQVFBOzBDQUFFOzs7Ozs7Ozs7Ozs0QkFDTTs7Ozs7d0JBQ1o7Ozs7Ozs7O0FBTU47R0E1RVNXOztRQUNRZix3REFBY0E7UUFFTEMsd0RBQWNBO1FBQ2pCQSx3REFBY0E7UUFDYkEsd0RBQWNBOzs7S0FMN0JjO0FBOEVULCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9va3MvTWFpbi9NYWluLnRzeD80YjBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LCB1c2VTdGF0ZSx1c2VSZWYsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGVzJztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvaG9va3MnXHJcbmltcG9ydCB7IHNlbGVjdGVkY2F0ZWdvcnkgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9DYXRlZ29yeVNsaWNlJ1xyXG5pbXBvcnQgQm9va0l0ZW0gZnJvbSAnLi4vLi4vQm9va0l0ZW0vQm9va0l0ZW0nO1xyXG5pbXBvcnQge0Jvb2tzQ29uYXRpbmVyLCBMb2FkTW9yZSwgVG9wLENvbnRhaW5lciwgR3JpZCwgQm9va3NDb25hdGluZXIyfSBmcm9tICcuL3N0eWxlcydcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uL0ZlYXR1cmVzL0ZlYXR1cmVzJztcclxuaW1wb3J0IHsgYm9va1R5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ib29rVHlwZSc7XHJcbmltcG9ydCBUb1RvcCBmcm9tICcuLi8uLi9Ub1RvcC9Ub1RvcCc7XHJcbmltcG9ydCB7IFRmaUxheW91dEdyaWQzQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL3RmaVwiO1xyXG5pbXBvcnQgeyBUZmlMYXlvdXRMaXN0VGh1bWJBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvdGZpXCI7XHJcbmltcG9ydCBCb29rSXRlbTIgZnJvbSAnLi4vLi4vQm9va0l0ZW0yL0Jvb2tJdGVtMic7XHJcbmltcG9ydCBJbnZhbGlkIGZyb20gJy4uLy4uL0ludmFsaWQvSW52YWxpZCc7XHJcbi8vaW1wb3J0IEZpbHRlclByaWNlIGZyb20gJy4uL0ZpbHRlclByaWNlL0ZpbHRlclByaWNlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2g9dXNlQXBwRGlzcGF0Y2goKVxyXG4gIC8vZ2V0IGRhdGEgZm9ybSByZWR1eCBhbmQgZmVjaCBkYXRhIFxyXG4gIGNvbnN0IGNhdGVnb3J5U2VsZWN0ZWQgPXVzZUFwcFNlbGVjdG9yKChzdGF0ZT0+c3RhdGUuY2F0ZWdvcnkuY2F0ZWdvcnkpKVxyXG4gIGNvbnN0IHJhdGVTZWxlY3RlZCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZT0+c3RhdGUucmF0ZS5yYXRlKSlcclxuICBjb25zdCBwcmljZVNlbGVjdGVkID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlPT5zdGF0ZS5wcmljZS5wcmljZSkpXHJcbiAgY29uc29sZS5sb2cocHJpY2VTZWxlY3RlZClcclxuXHJcblxyXG5cclxuY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddPXVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID11c2VTdGF0ZTxib29rVHlwZVtdPihbXSlcclxuICAgICBjb25zdCBbZmlsdGVkRGF0YSAsIHNldEZpbHRlcmVkRGF0YV0gPXVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9dXNlU3RhdGU8bnVtYmVyPigxKVxyXG4gICAgY29uc3QgW2dyaWQsIHNldEdyaWRdID11c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID11c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtpbnZhbGlkU2VhcmNoVGVybSwgc2V0SW52YWxpZFNlYXJjaFRlcm1dID11c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIHNldExvYWRpbmcodHJ1ZSlcclxuICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvYm9va3NcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2V0RGF0YShyZXNwb25zZS5kYXRhLmJvb2tzKSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbn0sIFtdKVxyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBzZXRMb2FkaW5nKHRydWUpXHJcbiAvL2NvbnNvbGUubG9nKGNhdGVnb3J5U2VsZWN0ZWQpXHJcbiAgIGF4aW9zXHJcbiAgICAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3YxL2Jvb2tzP251bWVyaWNGaWx0ZXJzPXJhdGluZz49JHtyYXRlU2VsZWN0ZWR9LHByaWNlPjIwJmNhdGVnb3J5PSR7Y2F0ZWdvcnlTZWxlY3RlZH1gKVxyXG4gICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2V0RGF0YShyZXNwb25zZS5kYXRhLmJvb2tzKSk7XHJcbiAgICAgIFxyXG4gICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxufSwgW2NhdGVnb3J5U2VsZWN0ZWQscmF0ZVNlbGVjdGVkXSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxDb250YWluZXI+XHJcbiAgICBcclxuICAgIDxUb3A+IFxyXG4gICAgIDxHcmlkPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtncmlkID8gJycgOiAnYWN0aXZlJ30gb25DbGljaz17KCk9PnNldEdyaWQoIWdyaWQpfT48VGZpTGF5b3V0TGlzdFRodW1iQWx0Lz48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2dyaWQgPyAnYWN0aXZlJyA6ICcnfSBvbkNsaWNrPXsoKT0+c2V0R3JpZCghZ3JpZCl9PjxUZmlMYXlvdXRHcmlkM0FsdCAvPjwvc3Bhbj5cclxuICAgICA8L0dyaWQ+XHJcbiAgICA8L1RvcD5cclxuICB7aW52YWxpZFNlYXJjaFRlcm0gPyA8SW52YWxpZCAvPiA6XHJcbiAgICA8ZGl2PlxyXG4gICAgIHsgZ3JpZCA/IFxyXG4gICAgPEJvb2tzQ29uYXRpbmVyPlxyXG4gICAgICB7IWxvYWRpbmcgJiYgZGF0YSA/ZGF0YS5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgcmV0dXJuIDxCb29rSXRlbSBrZXk9e2l0ZW0uX2lkfWl0ZW09e2l0ZW19Lz5cclxuICAgICAgfSk6IDxwPkxvYWRpbmc8L3A+fVxyXG4gICBcclxuXHJcbiAgICAgICA8VG9Ub3AgLz5cclxuICAgIHsvKiA8TG9hZE1vcmUgPk1vcmU8L0xvYWRNb3JlPiAqL31cclxuICAgIDwvQm9va3NDb25hdGluZXI+IDpcclxuXHJcblxyXG4gICAgPEJvb2tzQ29uYXRpbmVyMj5cclxuICAgICAgeyFsb2FkaW5nICYmIGRhdGEgP2RhdGEubWFwKChpdGVtKT0+e1xyXG4gICAgICAgIHJldHVybiA8Qm9va0l0ZW0yIGtleT17aXRlbS5faWR9aXRlbT17aXRlbX0vPlxyXG4gICAgICB9KTogPHA+TG9hZGluZzwvcD59XHJcbiAgICA8VG9Ub3AgLz5cclxuICAgXHJcbiA8TG9hZE1vcmUgPk1vcmU8L0xvYWRNb3JlPlxyXG48L0Jvb2tzQ29uYXRpbmVyMj4gfVxyXG48L2Rpdj4gfVxyXG5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICBcclxuICAgICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluXHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBvYnNlcnZlcj11c2VSZWY8SW50ZXJzZWN0aW9uT2JzZXJ2ZXI+KClcclxuICAgXHJcbi8vIGNvbnN0IGxhc3RCb29rZWxlbWVudFJlZiA9IHVzZUNhbGxiYWNrKChub2RlOiBhbnkpPT57XHJcbi8vICAgICAgICBpZihsb2FkaW5nKSByZXR1cm5cclxuLy8gICAgICAgIGlmIChvYnNlcnZlci5jdXJyZW50KSBvYnNlcnZlci5jdXJyZW50LmRpc2Nvbm5lY3QoKVxyXG4vLyAgICAgICAgb2JzZXJ2ZXIuY3VycmVudCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57XHJcbi8vICAgICAgICAgaWYoZW50cmllc1swXS5pc0ludGVyc2VjdGluZyl7XHJcbi8vICAgICAgICAgc2V0UGFnZSg1KVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfSlcclxuLy8gICAgICBpZihub2RlKSBvYnNlcnZlci5jdXJyZW50Lm9ic2VydmUobm9kZSlcclxuLy8gICAgICAgIH0sW2xvYWRpbmddKVxyXG5cclxuXHJcbi8vaWYgc2VhcmNoVGVybSBjaGFuZ2UgaW4gcmVkdXgvL1xyXG4vLyAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuLy8gICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbi8vICAgICBpZihzZWFyY2hUZXJtLmxlbmd0aD4xKXtcclxuICAgICAgXHJcbi8vICAgICAgIChmZXRjaERhdGEoc2VhcmNoVGVybSwgcGFnZSoxNSsxKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbi8vICAgICAgICAgc2V0RGF0YSAoWy4uLnJlc3VsdC5pdGVtc10pXHJcbi8vIH0pKVxyXG4vLyBzZXRMb2FkaW5nKGZhbHNlKTtcclxuLy8gICAgIH1cclxuICAgXHJcbi8vICAgICB9LCBbc2VhcmNoVGVybS5sZW5ndGhdKVxyXG5cclxuLy8vL2NvbnN0IHByaWNlPXVzZUFwcFNlbGVjdG9yKHN0YXRlPT5zdGF0ZS5wcmljZS5wcmljZSlcclxuXHJcbi8vY29uc29sZS5sb2coY2F0ZWdvcnkpXHJcbi8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgY29uc3QgdD0gZGF0YS5maWx0ZXIoKGl0ZW0pPT57XHJcbi8vICAgIHJldHVybiBpdGVtLnZvbHVtZUluZm8ucGFnZUNvdW50Pj0gcHJpY2VbMF0gJiYgaXRlbS52b2x1bWVJbmZvLnBhZ2VDb3VudCA8PSBwcmljZVsxXVxyXG4vLyAgIH0pXHJcbi8vICAgc2V0RGF0YSh0KVxyXG4vLyAgIH0sIFtwcmljZV0pXHJcbi8vICAgLy9jYXRlZ29yeSBjYWhuZ2VkIG1ha2UgbmV3IGFyclxyXG4vLyAgICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4vLyAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4vLyAgICAgICBzZXRQYWdlKDApO1xyXG4vLyAgICAgICBzZXREYXRhKFtdKTtcclxuLy8gICAgICAgLy9jb25zb2xlLmxvZyhwYWdlKTtcclxuLy8gICAgICAgaWYoY2F0ZWdvcnkubGVuZ3RoPjEpe1xyXG4vLyAgICAgICAgIHNldEludmFsaWRTZWFyY2hUZXJtKGZhbHNlKTtcclxuLy8gICAgICAgICAoZmV0Y2hEYXRhKGNhdGVnb3J5LCBwYWdlKjE1KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbi8vICAgICAgICAgICBzZXREYXRhIChbLi4ucmVzdWx0Lml0ZW1zXSlcclxuICAgICAgICAgXHJcbi8vICAgICAgICAgfSkpXHJcbi8vICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgc2V0SW52YWxpZFNlYXJjaFRlcm0odHJ1ZSlcclxuLy8gICAgICAgfVxyXG4gICAgICBcclxuLy8gICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgXHJcbi8vICAgICAgIH0sIFtjYXRlZ29yeV0pXHJcbiAgXHJcbiAgXHJcbi8vICAgLy9qdXN0IHBhZ2UgY2FobmdlZCBhZGQgdG8gdGhlIGVuZCBvZiBwYWdlXHJcbi8vICAgICAgIHVzZUVmZmVjdCggKCkgPT4ge1xyXG4vLyAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbi8vICAgICAgICAgICAoZmV0Y2hEYXRhKGNhdGVnb3J5LCBwYWdlKjE1KzEpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuLy8gICAgICAgICAgICAgICAgICAgIHNldERhdGEgKFsuLi5kYXRhLC4uLnJlc3VsdC5pdGVtc10pXHJcbi8vICAgICAgICAgICAgfSkpXHJcbi8vICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuLy8gICAgICAgICB9LCBbcGFnZV0pXHJcbiAgXHJcbi8vICAgLy9pZiBxdWVyeSBjaGFuZ2VkLy9cclxuICBcclxuICBcclxuLy8gICAgICBjb25zdCBoYW5kZWxQYWdlPSgpPT57XHJcbi8vICAgICAgIHNldFBhZ2UocGFnZSsxKVxyXG4vLyAgICAgIH1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiQm9va0l0ZW0iLCJCb29rc0NvbmF0aW5lciIsIkxvYWRNb3JlIiwiVG9wIiwiQ29udGFpbmVyIiwiR3JpZCIsIkJvb2tzQ29uYXRpbmVyMiIsIlRvVG9wIiwiVGZpTGF5b3V0R3JpZDNBbHQiLCJUZmlMYXlvdXRMaXN0VGh1bWJBbHQiLCJCb29rSXRlbTIiLCJJbnZhbGlkIiwiYXhpb3MiLCJNYWluIiwiZGlzcGF0Y2giLCJjYXRlZ29yeVNlbGVjdGVkIiwic3RhdGUiLCJjYXRlZ29yeSIsInJhdGVTZWxlY3RlZCIsInJhdGUiLCJwcmljZVNlbGVjdGVkIiwicHJpY2UiLCJjb25zb2xlIiwibG9nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2V0RGF0YSIsImZpbHRlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJwYWdlIiwic2V0UGFnZSIsImdyaWQiLCJzZXRHcmlkIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJpbnZhbGlkU2VhcmNoVGVybSIsInNldEludmFsaWRTZWFyY2hUZXJtIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiYm9va3MiLCJzcGFuIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRpdiIsIm1hcCIsIml0ZW0iLCJfaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Books/Main/Main.tsx\n"));

/***/ })

});