"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/card",{

/***/ "./components/Card/CardItem/CardItem.tsx":
/*!***********************************************!*\
  !*** ./components/Card/CardItem/CardItem.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/Card/CardItem/styles.ts\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _helpers_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/Image */ \"./helpers/Image.tsx\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/hooks */ \"./redux/hooks.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CardItem(param) {\n    let { item , index  } = param;\n    _s();\n    const [newAmount, setNewAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item.amount);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    //cahnge the maonut in redux by on chang event//\n    // const newAmountHandel=(e:any)=>{\n    //   setNewAmount(e.target.value)\n    //  dispatch(addNewAmount({...item, amount:e.target.value}))\n    // }\n    // const handledelet=()=>{\n    //   dispatch(deletItem(item))\n    // }\n    //console.log(newAmount)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.CardItemContainer, {\n        className: index % 2 == 1 ? \"even\" : \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Trash, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTrashAlt, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Card\\\\CardItem\\\\CardItem.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Card\\\\CardItem\\\\CardItem.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.BookPhoto, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_Image__WEBPACK_IMPORTED_MODULE_3__.Images, {\n                    width: 60,\n                    height: 82,\n                    src: item.imageUrl,\n                    alt: \"book\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Card\\\\CardItem\\\\CardItem.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Card\\\\CardItem\\\\CardItem.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Name, {\n                children: item.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Card\\\\CardItem\\\\CardItem.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Price, {\n                children: [\n                    item.price,\n                    \",00 e\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Card\\\\CardItem\\\\CardItem.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Amount, {\n                type: \"number\",\n                min: \"1\",\n                max: \"10\",\n                value: item.amount\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Card\\\\CardItem\\\\CardItem.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Card\\\\CardItem\\\\CardItem.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(CardItem, \"vMbA5PDBQdPILIAc7CRTuG382Tk=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = CardItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardItem);\nvar _c;\n$RefreshReg$(_c, \"CardItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQvQ2FyZEl0ZW0vQ2FyZEl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUFvQztBQUV5RDtBQUNqRDtBQUNJO0FBQ3FCO0FBVXJFLFNBQVNXLFNBQVMsS0FBa0IsRUFBRTtRQUFwQixFQUFDQyxLQUFJLEVBQUVDLE1BQUssRUFBTSxHQUFsQjs7SUFDbEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUVkLCtDQUFRQSxDQUFTVyxLQUFLSSxNQUFNO0lBRTdELE1BQU1DLFdBQVNQLDREQUFjQTtJQUc3QixnREFBZ0Q7SUFDaEQsbUNBQW1DO0lBRW5DLGlDQUFpQztJQUNqQyw0REFBNEQ7SUFFNUQsSUFBSTtJQUNKLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsSUFBSTtJQUNKLHdCQUF3QjtJQUN0QixxQkFDRSw4REFBQ1Isc0RBQWlCQTtRQUFDZ0IsV0FBV0wsUUFBUSxLQUFLLElBQUksU0FBUyxFQUFFOzswQkFDdEQsOERBQUNWLDBDQUFLQTswQkFBRSw0RUFBQ0ssc0RBQVVBOzs7Ozs7Ozs7OzBCQUNuQiw4REFBQ0QsOENBQVNBOzBCQUNWLDRFQUFDRSxrREFBTUE7b0JBQ1BVLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLEtBQUtULEtBQUtVLFFBQVE7b0JBQ2xCQyxLQUFJOzs7Ozs7Ozs7OzswQkFHSiw4REFBQ25CLHlDQUFJQTswQkFBRVEsS0FBS1ksSUFBSTs7Ozs7OzBCQUNoQiw4REFBQ25CLDBDQUFLQTs7b0JBQUVPLEtBQUthLEtBQUs7b0JBQUM7Ozs7Ozs7MEJBRW5CLDhEQUFDbkIsMkNBQU1BO2dCQUFDb0IsTUFBSztnQkFBU0MsS0FBSTtnQkFBSUMsS0FBSTtnQkFBTUMsT0FBT2pCLEtBQUtJLE1BQU07Ozs7Ozs7Ozs7OztBQUtsRTtHQXBDU0w7O1FBR01ELHdEQUFjQTs7O0tBSHBCQztBQXNDVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmQvQ2FyZEl0ZW0vQ2FyZEl0ZW0udHN4P2RkM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICx7dXNlU3RhdGV9ZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQge0NhcmRJdGVtQ29udGFpbmVyLCBUcmFzaCxOYW1lLFByaWNlLCAgQW1vdW50LCBUb3RhbFByaWNlLCBCb29rUGhvdG8gfSBmcm9tICcuL3N0eWxlcydcclxuaW1wb3J0IHsgRmFUcmFzaEFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBJbWFnZXMgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL0ltYWdlJztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvaG9va3MnXHJcbi8vaW1wb3J0IHthZGROZXdBbW91bnQsIGRlbGV0SXRlbX0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYm9va1NsaWNlJ1xyXG5pbXBvcnQgeyBib29rVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2Jvb2tUeXBlJztcclxuXHJcbmludGVyZmFjZSBJdGVte1xyXG4gIGl0ZW06Ym9va1R5cGUsXHJcbiAgaW5kZXg6bnVtYmVyXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBDYXJkSXRlbSh7aXRlbSwgaW5kZXh9Okl0ZW0pIHtcclxuY29uc3QgW25ld0Ftb3VudCwgc2V0TmV3QW1vdW50XSA9dXNlU3RhdGU8bnVtYmVyPihpdGVtLmFtb3VudClcclxuXHJcbmNvbnN0IGRpc3BhdGNoPXVzZUFwcERpc3BhdGNoKClcclxuXHJcblxyXG4vL2NhaG5nZSB0aGUgbWFvbnV0IGluIHJlZHV4IGJ5IG9uIGNoYW5nIGV2ZW50Ly9cclxuLy8gY29uc3QgbmV3QW1vdW50SGFuZGVsPShlOmFueSk9PntcclxuICBcclxuLy8gICBzZXROZXdBbW91bnQoZS50YXJnZXQudmFsdWUpXHJcbi8vICBkaXNwYXRjaChhZGROZXdBbW91bnQoey4uLml0ZW0sIGFtb3VudDplLnRhcmdldC52YWx1ZX0pKVxyXG4gXHJcbi8vIH1cclxuLy8gY29uc3QgaGFuZGxlZGVsZXQ9KCk9PntcclxuLy8gICBkaXNwYXRjaChkZWxldEl0ZW0oaXRlbSkpXHJcbi8vIH1cclxuLy9jb25zb2xlLmxvZyhuZXdBbW91bnQpXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkSXRlbUNvbnRhaW5lciBjbGFzc05hbWU9e2luZGV4ICUgMiA9PSAxID8gJ2V2ZW4nIDogJyd9PlxyXG4gICAgICAgIDxUcmFzaCA+PEZhVHJhc2hBbHQgLz48L1RyYXNoPlxyXG4gICAgICAgIDxCb29rUGhvdG8+XHJcbiAgICAgICAgPEltYWdlc1xyXG4gICAgICAgIHdpZHRoPXs2MH1cclxuICAgICAgICBoZWlnaHQ9ezgyfVxyXG4gICAgICAgIHNyYz17aXRlbS5pbWFnZVVybH1cclxuICAgICAgICBhbHQ9XCJib29rXCJcclxuICAgICAgIC8+XHJcbiAgICAgICAgPC9Cb29rUGhvdG8+XHJcbiAgICAgICAgPE5hbWU+e2l0ZW0ubmFtZX08L05hbWU+XHJcbiAgICAgICAgPFByaWNlPntpdGVtLnByaWNlfSwwMCBlPC9QcmljZT5cclxuICAgICAgICBcclxuICAgICAgICA8QW1vdW50IHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCIgbWF4PScxMCcgIHZhbHVlPXtpdGVtLmFtb3VudH0vPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiA8VG90YWxQcmljZT57aXRlbS5hbW91bnQqaXRlbS5wcmljZX0sMDAgZTwvVG90YWxQcmljZT4gKi99XHJcbiAgICA8L0NhcmRJdGVtQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEl0ZW0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcmRJdGVtQ29udGFpbmVyIiwiVHJhc2giLCJOYW1lIiwiUHJpY2UiLCJBbW91bnQiLCJCb29rUGhvdG8iLCJGYVRyYXNoQWx0IiwiSW1hZ2VzIiwidXNlQXBwRGlzcGF0Y2giLCJDYXJkSXRlbSIsIml0ZW0iLCJpbmRleCIsIm5ld0Ftb3VudCIsInNldE5ld0Ftb3VudCIsImFtb3VudCIsImRpc3BhdGNoIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJpbWFnZVVybCIsImFsdCIsIm5hbWUiLCJwcmljZSIsInR5cGUiLCJtaW4iLCJtYXgiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Card/CardItem/CardItem.tsx\n"));

/***/ })

});