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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BookSlice\": function() { return /* binding */ BookSlice; },\n/* harmony export */   \"addBook\": function() { return /* binding */ addBook; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    books: []\n};\nconst BookSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"Books\",\n    initialState,\n    reducers: {\n        addBook: (state, action)=>{\n            console.log(action.payload);\n            let tempo = state.books.find((b)=>b._id === action.payload._id);\n            if (tempo) {\n                let tempcard = state.books.map((b)=>{\n                    if (b._id === action.payload._id) {\n                        return {\n                            ...b,\n                            amount: Number(b.amount) + Number(action.payload.amount)\n                        };\n                    } else {\n                        return {\n                            ...b\n                        };\n                    }\n                });\n                state.books = tempcard;\n            } else {\n                state.books.push({\n                    ...action.payload,\n                    amount: 1\n                });\n            }\n        }\n    }\n});\nconst { addBook  } = BookSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9ib29rU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzhEO0FBZ0I5RCxNQUFNQyxlQUFtQjtJQUNyQkMsT0FBTSxFQUFFO0FBQ1o7QUFFTyxNQUFNQyxZQUFXSCw2REFBV0EsQ0FBQztJQUNoQ0ksTUFBSztJQUNMSDtJQUNBSSxVQUFTO1FBQ0xDLFNBQVEsQ0FBQ0MsT0FBT0MsU0FBNkI7WUFDekNDLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0csT0FBTztZQUMxQixJQUFJQyxRQUFNTCxNQUFNTCxLQUFLLENBQUNXLElBQUksQ0FBQyxDQUFDQyxJQUFJQSxFQUFFQyxHQUFHLEtBQUtQLE9BQU9HLE9BQU8sQ0FBQ0ksR0FBRztZQUdoRSxJQUFHSCxPQUFNO2dCQUNMLElBQUlJLFdBQVNULE1BQU1MLEtBQUssQ0FBQ2UsR0FBRyxDQUFDLENBQUNILElBQUk7b0JBQzlCLElBQUdBLEVBQUVDLEdBQUcsS0FBS1AsT0FBT0csT0FBTyxDQUFDSSxHQUFHLEVBQUM7d0JBQzVCLE9BQU87NEJBQUMsR0FBR0QsQ0FBQzs0QkFBRUksUUFBT0MsT0FBT0wsRUFBRUksTUFBTSxJQUFHQyxPQUFPWCxPQUFPRyxPQUFPLENBQUNPLE1BQU07d0JBQUU7b0JBQ3pFLE9BQUs7d0JBQ0QsT0FBTzs0QkFBQyxHQUFHSixDQUFDO3dCQUFBO29CQUNoQixDQUFDO2dCQUNXO2dCQUNBUCxNQUFNTCxLQUFLLEdBQUNjO1lBQ2hDLE9BQVE7Z0JBQ0pULE1BQU1MLEtBQUssQ0FBQ2tCLElBQUksQ0FBQztvQkFBQyxHQUFHWixPQUFPRyxPQUFPO29CQUFFTyxRQUFPO2dCQUFDO1lBQ2pELENBQUM7UUFHRDtJQVlKO0FBRUosR0FBRTtBQUVLLE1BQU0sRUFBQ1osUUFBTyxFQUFHLEdBQUVILFVBQVVrQixPQUFPO0FBQzNDLCtEQUFlbEIsVUFBVW1CLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmVhdHVyZXMvYm9va1NsaWNlLnRzP2RjNTciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IEJvb2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9vay9Cb29rXCI7XHJcbmltcG9ydCB7IEJvb2tzIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9NT0NLX0RBVEFcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgQm9va3tcclxuICAgX2lkOnN0cmluZyxcclxuICAgaW1hZ2U6c3RyaW5nLFxyXG4gICBhbW91bnQ/Om51bWJlcixcclxuICAgYXV0aG9yczpzdHJpbmdbXSxcclxuICAgcHJpY2U6bnVtYmVyXHJcblxyXG59XHJcbmludGVyZmFjZSBCb29rc3tcclxuICAgIGJvb2tzOkJvb2tbXVxyXG59XHJcbmNvbnN0IGluaXRpYWxTdGF0ZTpCb29rcz17XHJcbiAgICBib29rczpbXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQm9va1NsaWNlPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOidCb29rcycsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczp7XHJcbiAgICAgICAgYWRkQm9vazooc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPEJvb2s+KT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgbGV0IHRlbXBvPXN0YXRlLmJvb2tzLmZpbmQoKGIpPT5iLl9pZCA9PT0gYWN0aW9uLnBheWxvYWQuX2lkKVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgaWYodGVtcG8pe1xyXG4gICAgICAgICAgICBsZXQgdGVtcGNhcmQ9c3RhdGUuYm9va3MubWFwKChiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYi5faWQgPT09IGFjdGlvbi5wYXlsb2FkLl9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5iLCBhbW91bnQ6TnVtYmVyKGIuYW1vdW50KSArTnVtYmVyKGFjdGlvbi5wYXlsb2FkLmFtb3VudCkgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5ifVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmJvb2tzPXRlbXBjYXJkXHJcbiAgICAgICAgfSAgIGVsc2V7XHJcbiAgICAgICAgICAgIHN0YXRlLmJvb2tzLnB1c2goey4uLmFjdGlvbi5wYXlsb2FkLCBhbW91bnQ6MX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBhZGROZXdBbW91bnQ6KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxhbnk+KT0+e1xyXG4gICAgICAgIC8vICAgIHN0YXRlLmJvb2tzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSkgeyBpZiAoaXRlbS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5pZCkgc3RhdGUuYm9va3NbaV0gPWFjdGlvbi5wYXlsb2FkOyB9KTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICBkZWxldEl0ZW06KHN0YXRlLCBhY3Rpb246UGF5bG9hZEFjdGlvbjxhbnk+KT0+e1xyXG4gICAgICAgIC8vICAgICAgICBjb25zdCB0ZW1wQ2FyZD0gc3RhdGUuYm9va3MuZmlsdGVyKChpdGVtKT0+e1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICAgLy8gICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgIHN0YXRlLmJvb2tzPXRlbXBDYXJkXHJcbiAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICAgICB9LFxyXG4gICAgfSxcclxuICBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7YWRkQm9vaywgfSA9Qm9va1NsaWNlLmFjdGlvbnNcclxuZXhwb3J0IGRlZmF1bHQgQm9va1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJib29rcyIsIkJvb2tTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZEJvb2siLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidGVtcG8iLCJmaW5kIiwiYiIsIl9pZCIsInRlbXBjYXJkIiwibWFwIiwiYW1vdW50IiwiTnVtYmVyIiwicHVzaCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/bookSlice.ts\n"));

/***/ })

});