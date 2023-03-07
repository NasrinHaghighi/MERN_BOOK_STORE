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

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _features_bookSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/bookSlice */ \"./features/bookSlice.ts\");\n/* harmony import */ var _features_CategorySlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/CategorySlice */ \"./features/CategorySlice.ts\");\n/* harmony import */ var _features_PageSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/PageSlice */ \"./features/PageSlice.ts\");\n/* harmony import */ var _features_priceFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/priceFilter */ \"./features/priceFilter.ts\");\n/* harmony import */ var _features_rateSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/rateSlice */ \"./features/rateSlice.ts\");\n/* harmony import */ var _features_scrollTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/scrollTo */ \"./features/scrollTo.ts\");\n/* harmony import */ var _features_searchSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features/searchSlice */ \"./features/searchSlice.ts\");\n\n\n//import { createWrapper } from 'next-redux-wrapper'\n\n\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.configureStore)({\n    reducer: {\n        category: _features_CategorySlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        page: _features_PageSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        books: _features_bookSlice__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        price: _features_priceFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        tag: _features_scrollTo__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        rate: _features_rateSlice__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        search: _features_searchSlice__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: {\n                // Ignore these action types\n                ignoredActions: [\n                    \"your/action/type\"\n                ],\n                // Ignore these field paths in all actions\n                ignoredActionPaths: [\n                    \"meta.arg\",\n                    \"payload.timestamp\"\n                ],\n                // Ignore these paths in the state\n                ignoredPaths: [\n                    \"items.dates\"\n                ]\n            }\n        })\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUU7QUFDakI7QUFDaEQsb0RBQW9EO0FBQ0U7QUFDUjtBQUNHO0FBQ1Q7QUFDSTtBQUNNO0FBRTNDLE1BQU1RLFFBQVFSLGdFQUFjQSxDQUFDO0lBQzlCUyxTQUFTO1FBQ1BDLFVBQVNSLCtEQUFhQTtRQUN0QlMsTUFBS1IsMkRBQVNBO1FBQ2RTLE9BQU1YLDJEQUFTQTtRQUNmWSxPQUFNVCw2REFBV0E7UUFDakJVLEtBQUlSLDBEQUFRQTtRQUNaUyxNQUFLViwyREFBSUE7UUFDVFcsUUFBT1QsNkRBQVdBO0lBRXZCO0lBQ0FVLFlBQVksQ0FBQ0MsdUJBQ2JBLHFCQUFxQjtZQUNqQkMsbUJBQW1CO2dCQUNuQiw0QkFBNEI7Z0JBQzVCQyxnQkFBZ0I7b0JBQUM7aUJBQW1CO2dCQUNwQywwQ0FBMEM7Z0JBQzFDQyxvQkFBb0I7b0JBQUM7b0JBQVk7aUJBQW9CO2dCQUNyRCxrQ0FBa0M7Z0JBQ2xDQyxjQUFjO29CQUFDO2lCQUFjO1lBQy9CO1FBQ0Y7QUFFRCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3N0b3JlLnRzPzkzYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnMsIGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0ICBCb29rU2xpY2UgIGZyb20gJy4uL2ZlYXR1cmVzL2Jvb2tTbGljZSc7XHJcbi8vaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IENhdGVnb3J5U2xpY2UgZnJvbSAnLi4vZmVhdHVyZXMvQ2F0ZWdvcnlTbGljZSc7XHJcbmltcG9ydCBQYWdlU2xpY2UgZnJvbSAnLi4vZmVhdHVyZXMvUGFnZVNsaWNlJztcclxuaW1wb3J0IHByaWNlRmlsdGVyIGZyb20gJy4uL2ZlYXR1cmVzL3ByaWNlRmlsdGVyJ1xyXG5pbXBvcnQgUmF0ZSBmcm9tICcuLi9mZWF0dXJlcy9yYXRlU2xpY2UnXHJcbmltcG9ydCBzY3JvbGxUbyBmcm9tICcuLi9mZWF0dXJlcy9zY3JvbGxUbyc7XHJcbmltcG9ydCBzZWFyY2hTbGljZSBmcm9tICcuLi9mZWF0dXJlcy9zZWFyY2hTbGljZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICAgIHJlZHVjZXI6IHtcclxuICAgICAgICBjYXRlZ29yeTpDYXRlZ29yeVNsaWNlLFxyXG4gICAgICAgIHBhZ2U6UGFnZVNsaWNlLFxyXG4gICAgICAgIGJvb2tzOkJvb2tTbGljZSxcclxuICAgICAgICBwcmljZTpwcmljZUZpbHRlcixcclxuICAgICAgICB0YWc6c2Nyb2xsVG8sXHJcbiAgICAgICAgcmF0ZTpSYXRlLFxyXG4gICAgICAgIHNlYXJjaDpzZWFyY2hTbGljZVxyXG4gICAgICBcclxuICAgfSxcclxuICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxyXG4gICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XHJcbiAgICAgICBzZXJpYWxpemFibGVDaGVjazoge1xyXG4gICAgICAgLy8gSWdub3JlIHRoZXNlIGFjdGlvbiB0eXBlc1xyXG4gICAgICAgaWdub3JlZEFjdGlvbnM6IFsneW91ci9hY3Rpb24vdHlwZSddLFxyXG4gICAgICAgLy8gSWdub3JlIHRoZXNlIGZpZWxkIHBhdGhzIGluIGFsbCBhY3Rpb25zXHJcbiAgICAgICBpZ25vcmVkQWN0aW9uUGF0aHM6IFsnbWV0YS5hcmcnLCAncGF5bG9hZC50aW1lc3RhbXAnXSxcclxuICAgICAgIC8vIElnbm9yZSB0aGVzZSBwYXRocyBpbiB0aGUgc3RhdGVcclxuICAgICAgIGlnbm9yZWRQYXRoczogWydpdGVtcy5kYXRlcyddLFxyXG4gICAgIH0sXHJcbiAgIH0pLFxyXG5cclxuICB9KTtcclxuXHJcbi8vICAgZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9KCk9PntcclxuLy8gY29uZmlndXJlU3RvcmUoe1xyXG4vLyAgIHJlZHVjZXI6Y29tYmluZVJlZHVjZXJzLFxyXG4vLyB9KVxyXG4vLyAgIH1cclxuLy8gICBleHBvcnQgY29uc3Qgd3JhcHBlcj1jcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSlcclxuICBcclxuXHJcbiAgLy8gSW5mZXIgdGhlIGBSb290U3RhdGVgIGFuZCBgQXBwRGlzcGF0Y2hgIHR5cGVzIGZyb20gdGhlIHN0b3JlIGl0c2VsZlxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT5cclxuLy8gSW5mZXJyZWQgdHlwZToge3Bvc3RzOiBQb3N0c1N0YXRlLCBjb21tZW50czogQ29tbWVudHNTdGF0ZSwgdXNlcnM6IFVzZXJzU3RhdGV9XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiQm9va1NsaWNlIiwiQ2F0ZWdvcnlTbGljZSIsIlBhZ2VTbGljZSIsInByaWNlRmlsdGVyIiwiUmF0ZSIsInNjcm9sbFRvIiwic2VhcmNoU2xpY2UiLCJzdG9yZSIsInJlZHVjZXIiLCJjYXRlZ29yeSIsInBhZ2UiLCJib29rcyIsInByaWNlIiwidGFnIiwicmF0ZSIsInNlYXJjaCIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwiaWdub3JlZEFjdGlvbnMiLCJpZ25vcmVkQWN0aW9uUGF0aHMiLCJpZ25vcmVkUGF0aHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.ts\n"));

/***/ })

});