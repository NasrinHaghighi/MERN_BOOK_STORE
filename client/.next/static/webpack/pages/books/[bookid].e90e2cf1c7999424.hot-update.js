"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/books/[bookid]",{

/***/ "./components/Book/Star/Star.tsx":
/*!***************************************!*\
  !*** ./components/Book/Star/Star.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\nfunction Star(param) {\n    let { star  } = param;\n    const tempStars = Array.from({\n        length: 5\n    }, (_, index)=>{\n        const number = index + 0.5;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            style: {\n                color: \"orange\"\n            },\n            children: star >= index + 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsStarFill, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Book\\\\Star\\\\Star.tsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, this) : star >= number ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsStarHalf, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Book\\\\Star\\\\Star.tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsStar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Book\\\\Star\\\\Star.tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, this)\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Book\\\\Star\\\\Star.tsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: tempStars\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Book\\\\Star\\\\Star.tsx\",\n        lineNumber: 26,\n        columnNumber: 8\n    }, this);\n}\n_c = Star;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Star);\nvar _c;\n$RefreshReg$(_c, \"Star\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2svU3Rhci9TdGFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUF5QjtBQUNtQztBQUs1RCxTQUFTSSxLQUFNLEtBQVUsRUFBRTtRQUFaLEVBQUNDLEtBQUksRUFBSyxHQUFWO0lBR1gsTUFBTUMsWUFBVUMsTUFBTUMsSUFBSSxDQUFDO1FBQUNDLFFBQU87SUFBQyxHQUFFLENBQUNDLEdBQUVDLFFBQVE7UUFDN0MsTUFBTUMsU0FBUUQsUUFBTTtRQUVwQixxQkFDSSw4REFBQ0U7WUFBaUJDLE9BQU87Z0JBQUNDLE9BQU07WUFBUTtzQkFDL0NWLFFBQVFNLFFBQU8sa0JBQ2hCLDhEQUFDVixzREFBVUE7Ozs7dUJBQ1JJLFFBQU9PLHVCQUNWLDhEQUFDVixzREFBVUE7Ozs7cUNBRVgsOERBQUNDLGtEQUFNQTs7OztvQkFBRztXQU5TUTs7Ozs7SUFVZjtJQUNELHFCQUNBLDhEQUFDRTtrQkFBTVA7Ozs7OztBQUVOO0tBckJDRjtBQXNCVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jvb2svU3Rhci9TdGFyLnRzeD81MGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCc1N0YXJGaWxsLEJzU3RhckhhbGYsIEJzU3Rhcn0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBTdGFyICh7c3Rhcn06YW55KSB7XHJcblxyXG5cclxuICAgIGNvbnN0IHRlbXBTdGFycz1BcnJheS5mcm9tKHtsZW5ndGg6NX0sKF8saW5kZXgpPT57XHJcbiAgICAgICAgY29uc3QgbnVtYmVyPSBpbmRleCswLjVcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IHN0eWxlPXt7Y29sb3I6J29yYW5nZSd9fT5cclxuICAgIHtzdGFyID49IGluZGV4ICsxID8oXHJcbiAgICA8QnNTdGFyRmlsbCAvPlxyXG4gICAgKTogc3RhciA+PW51bWJlciA/KFxyXG4gICAgPEJzU3RhckhhbGYgLz5cclxuICAgICk6KFxyXG4gICAgPEJzU3Rhci8+KSAgICAgIFxyXG4gICAgfVxyXG4gICAgPC9zcGFuPlxyXG4gICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICByZXR1cm4oXHJcbiAgICAgICA8c3Bhbj57dGVtcFN0YXJzfTwvc3Bhbj5cclxuICAgICAgIClcclxuICAgICAgICB9XHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJcclxuXHJcblxyXG4vLyBjb25zdCB0ZW1wU3RhcnM9QXJyYXkuZnJvbSh7bGVuZ3RoOjV9LChfLGluZGV4KT0+e1xyXG4vLyAgICAgY29uc3QgbnVtYmVyPSBpbmRleCswLjVcclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxyXG4vLyB7c3RhciA+PSBpbmRleCArMSA/KFxyXG4vLyA8QnNTdGFyRmlsbCAvPlxyXG4vLyApOiBzdGFyID49bnVtYmVyID8oXHJcbi8vIDxCc1N0YXJIYWxmIC8+XHJcbi8vICk6KFxyXG4vLyA8QnNTdGFyLz4pICAgICAgXHJcbi8vIH1cclxuLy8gPC9zcGFuPlxyXG4vLyApXHJcbi8vICAgICB9KSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJzU3RhckZpbGwiLCJCc1N0YXJIYWxmIiwiQnNTdGFyIiwiU3RhciIsInN0YXIiLCJ0ZW1wU3RhcnMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiLCJudW1iZXIiLCJzcGFuIiwic3R5bGUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Book/Star/Star.tsx\n"));

/***/ })

});