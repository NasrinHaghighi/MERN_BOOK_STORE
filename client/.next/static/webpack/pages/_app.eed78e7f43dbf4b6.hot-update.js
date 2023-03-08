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

/***/ "./features/bookSlice.ts":
/*!*******************************!*\
  !*** ./features/bookSlice.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BookSlice\": function() { return /* binding */ BookSlice; },\n/* harmony export */   \"addBook\": function() { return /* binding */ addBook; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    books: []\n};\nconst BookSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"Books\",\n    initialState,\n    reducers: {\n        addBook: (state, action)=>{\n            console.log(action.payload._id);\n            let tempo = state.books.find((b)=>b._id === action.payload._id);\n            if (tempo) {\n                let tempcard = state.books.map((b)=>{\n                    if (b._id === action.payload._id) {\n                        return {\n                            ...b,\n                            amount: b.amount + action.payload.amount\n                        };\n                    } else {\n                        return {\n                            ...b\n                        };\n                    }\n                });\n                state.books = tempcard;\n            } else {\n                state.books.push({\n                    ...action.payload,\n                    amount: 1\n                });\n            }\n        }\n    }\n});\nconst { addBook  } = BookSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9ib29rU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzhEO0FBZ0I5RCxNQUFNQyxlQUFtQjtJQUNyQkMsT0FBTSxFQUFFO0FBQ1o7QUFFTyxNQUFNQyxZQUFXSCw2REFBV0EsQ0FBQztJQUNoQ0ksTUFBSztJQUNMSDtJQUNBSSxVQUFTO1FBQ0xDLFNBQVEsQ0FBQ0MsT0FBT0MsU0FBNkI7WUFDekNDLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0csT0FBTyxDQUFDQyxHQUFHO1lBQzlCLElBQUlDLFFBQU1OLE1BQU1MLEtBQUssQ0FBQ1ksSUFBSSxDQUFDLENBQUNDLElBQUlBLEVBQUVILEdBQUcsS0FBS0osT0FBT0csT0FBTyxDQUFDQyxHQUFHO1lBR2hFLElBQUdDLE9BQU07Z0JBQ0wsSUFBSUcsV0FBU1QsTUFBTUwsS0FBSyxDQUFDZSxHQUFHLENBQUMsQ0FBQ0YsSUFBSTtvQkFDOUIsSUFBR0EsRUFBRUgsR0FBRyxLQUFLSixPQUFPRyxPQUFPLENBQUNDLEdBQUcsRUFBQzt3QkFFM0IsT0FBTzs0QkFBQyxHQUFHRyxDQUFDOzRCQUFFRyxRQUFPSCxFQUFFRyxNQUFNLEdBQUdWLE9BQU9HLE9BQU8sQ0FBQ08sTUFBTTt3QkFBQztvQkFDM0QsT0FBSzt3QkFFQSxPQUFPOzRCQUFDLEdBQUdILENBQUM7d0JBQUE7b0JBQ2pCLENBQUM7Z0JBRVI7Z0JBQ0FSLE1BQU1MLEtBQUssR0FBQ2M7WUFDYixPQUFRO2dCQUNKVCxNQUFNTCxLQUFLLENBQUNpQixJQUFJLENBQUM7b0JBQUMsR0FBR1gsT0FBT0csT0FBTztvQkFBRU8sUUFBTztnQkFBQztZQUNqRCxDQUFDO1FBR0Q7SUFZSjtBQUVKLEdBQUU7QUFFSyxNQUFNLEVBQUNaLFFBQU8sRUFBRyxHQUFFSCxVQUFVaUIsT0FBTztBQUMzQywrREFBZWpCLFVBQVVrQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2ZlYXR1cmVzL2Jvb2tTbGljZS50cz9kYzU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBCb29rIGZyb20gXCIuLi9jb21wb25lbnRzL0Jvb2svQm9va1wiO1xyXG5pbXBvcnQgeyBCb29rcyB9IGZyb20gXCIuLi9jb25zdGFudHMvTU9DS19EQVRBXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIEJvb2t7XHJcbiAgIF9pZDpzdHJpbmcsXHJcbiAgIGltYWdlOnN0cmluZyxcclxuICAgYW1vdW50Om51bWJlcixcclxuICAgYXV0aG9yczpzdHJpbmdbXSxcclxuICAgcHJpY2U6bnVtYmVyXHJcblxyXG59XHJcbmludGVyZmFjZSBCb29rc3tcclxuICAgIGJvb2tzOkJvb2tbXVxyXG59XHJcbmNvbnN0IGluaXRpYWxTdGF0ZTpCb29rcz17XHJcbiAgICBib29rczpbXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQm9va1NsaWNlPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOidCb29rcycsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczp7XHJcbiAgICAgICAgYWRkQm9vazooc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPEJvb2s+KT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZC5faWQpXHJcbiAgICAgICAgICAgIGxldCB0ZW1wbz1zdGF0ZS5ib29rcy5maW5kKChiKT0+Yi5faWQgPT09IGFjdGlvbi5wYXlsb2FkLl9pZClcclxuICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGlmKHRlbXBvKXtcclxuICAgICAgICAgICAgbGV0IHRlbXBjYXJkPXN0YXRlLmJvb2tzLm1hcCgoYik9PntcclxuICAgICAgICAgICAgICAgIGlmKGIuX2lkID09PSBhY3Rpb24ucGF5bG9hZC5faWQpe1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5iLCBhbW91bnQ6Yi5hbW91bnQgKyBhY3Rpb24ucGF5bG9hZC5hbW91bnQgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLmJ9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICB9KVxyXG4gICAgICAgICBzdGF0ZS5ib29rcz10ZW1wY2FyZFxyXG4gICAgICAgIH0gICBlbHNle1xyXG4gICAgICAgICAgICBzdGF0ZS5ib29rcy5wdXNoKHsuLi5hY3Rpb24ucGF5bG9hZCwgYW1vdW50OjF9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gYWRkTmV3QW1vdW50OihzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248YW55Pik9PntcclxuICAgICAgICAvLyAgICBzdGF0ZS5ib29rcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHsgaWYgKGl0ZW0uaWQgPT0gYWN0aW9uLnBheWxvYWQuaWQpIHN0YXRlLmJvb2tzW2ldID1hY3Rpb24ucGF5bG9hZDsgfSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgZGVsZXRJdGVtOihzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248YW55Pik9PntcclxuICAgICAgICAvLyAgICAgICAgY29uc3QgdGVtcENhcmQ9IHN0YXRlLmJvb2tzLmZpbHRlcigoaXRlbSk9PntcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgIC8vICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICBzdGF0ZS5ib29rcz10ZW1wQ2FyZFxyXG4gICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qge2FkZEJvb2ssIH0gPUJvb2tTbGljZS5hY3Rpb25zXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiYm9va3MiLCJCb29rU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRCb29rIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsIl9pZCIsInRlbXBvIiwiZmluZCIsImIiLCJ0ZW1wY2FyZCIsIm1hcCIsImFtb3VudCIsInB1c2giLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/bookSlice.ts\n"));

/***/ })

});