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

/***/ "./features/favoraiteListSlice.ts":
/*!****************************************!*\
  !*** ./features/favoraiteListSlice.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavoraiteListSlice\": function() { return /* binding */ FavoraiteListSlice; },\n/* harmony export */   \"addToFavoraiteList\": function() { return /* binding */ addToFavoraiteList; },\n/* harmony export */   \"backtofalseFavoraiteAlert\": function() { return /* binding */ backtofalseFavoraiteAlert; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    favoraitelist: [],\n    favoraiteAlert: false,\n    favoraiteMessage: \" \"\n};\nconst FavoraiteListSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"FavoraiteList\",\n    initialState,\n    reducers: {\n        addToFavoraiteList: (state, action)=>{\n            let tempo = state.favoraitelist.find((b)=>b._id === action.payload._id);\n            if (tempo) {\n                let tempcard = state.favoraitelist.map((b)=>{\n                    if (b._id === action.payload._id) {\n                        state.favoraiteAlert = true;\n                        state.favoraiteMessage = \"\".concat(b.name.length > 20 ? b.name.substring(0, 20) : b.name, \" + is aleady exist in your wishlist\");\n                        return {\n                            ...b,\n                            amount: Number(b.amount) + 1\n                        };\n                    } else {\n                        return {\n                            ...b\n                        };\n                    }\n                });\n                state.favoraitelist = tempcard;\n            } else {\n                state.favoraiteAlert = true;\n                state.favoraiteMessage = \"\".concat(action.payload.name.length > 20 ? action.payload.name.substring(0, 20) : action.payload.name, \" + added to wishlist\");\n                state.favoraitelist.push({\n                    ...action.payload,\n                    amount: 1\n                });\n            }\n        },\n        backtofalseFavoraiteAlert: (state)=>{\n            state.favoraiteAlert = false;\n        }\n    }\n});\nconst { addToFavoraiteList , backtofalseFavoraiteAlert  } = FavoraiteListSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavoraiteListSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9mYXZvcmFpdGVMaXN0U2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM4RDtBQXNCOUQsTUFBTUMsZUFBbUI7SUFDckJDLGVBQWMsRUFBRTtJQUNqQkMsZ0JBQWUsS0FBSztJQUNwQkMsa0JBQWlCO0FBQ3BCO0FBRU8sTUFBTUMscUJBQW9CTCw2REFBV0EsQ0FBQztJQUN6Q00sTUFBSztJQUNMTDtJQUNBTSxVQUFTO1FBQ0xDLG9CQUFtQixDQUFDQyxPQUFPQyxTQUE2QjtZQUVyRCxJQUFJQyxRQUFNRixNQUFNUCxhQUFhLENBQUNVLElBQUksQ0FBQyxDQUFDQyxJQUFJQSxFQUFFQyxHQUFHLEtBQUtKLE9BQU9LLE9BQU8sQ0FBQ0QsR0FBRztZQUVwRSxJQUFHSCxPQUFNO2dCQUNSLElBQUlLLFdBQVNQLE1BQU1QLGFBQWEsQ0FBQ2UsR0FBRyxDQUFDLENBQUNKLElBQUk7b0JBQ3RDLElBQUdBLEVBQUVDLEdBQUcsS0FBS0osT0FBT0ssT0FBTyxDQUFDRCxHQUFHLEVBQUM7d0JBQzVCTCxNQUFNTixjQUFjLEdBQUMsSUFBSTt3QkFDMUJNLE1BQU1MLGdCQUFnQixHQUFDLEdBQW9ELE9BQWpEUyxFQUFFUCxJQUFJLENBQUNZLE1BQU0sR0FBQyxLQUFJTCxFQUFFUCxJQUFJLENBQUNhLFNBQVMsQ0FBQyxHQUFFLE1BQUtOLEVBQUVQLElBQUksRUFBQzt3QkFFNUUsT0FBTzs0QkFBQyxHQUFHTyxDQUFDOzRCQUFFTyxRQUFPQyxPQUFPUixFQUFFTyxNQUFNLElBQUU7d0JBQUM7b0JBQ3pDLE9BQUs7d0JBRUQsT0FBTzs0QkFBQyxHQUFHUCxDQUFDO3dCQUFBO29CQUNoQixDQUFDO2dCQUNIO2dCQUNMSixNQUFNUCxhQUFhLEdBQUNjO1lBQ3JCLE9BQ0k7Z0JBQ0FQLE1BQU1OLGNBQWMsR0FBQyxJQUFJO2dCQUV6Qk0sTUFBTUwsZ0JBQWdCLEdBQUMsR0FBNEYsT0FBekZNLE9BQU9LLE9BQU8sQ0FBQ1QsSUFBSSxDQUFDWSxNQUFNLEdBQUMsS0FBSVIsT0FBT0ssT0FBTyxDQUFDVCxJQUFJLENBQUNhLFNBQVMsQ0FBQyxHQUFFLE1BQU1ULE9BQU9LLE9BQU8sQ0FBQ1QsSUFBSSxFQUFDO2dCQUVuSEcsTUFBTVAsYUFBYSxDQUFDb0IsSUFBSSxDQUFDO29CQUFDLEdBQUdaLE9BQU9LLE9BQU87b0JBQUVLLFFBQU87Z0JBQUM7WUFDekQsQ0FBQztRQUVEO1FBQ0FHLDJCQUEwQixDQUFDZCxRQUFRO1lBQy9CQSxNQUFNTixjQUFjLEdBQUMsS0FBSztRQUVyQjtJQUViO0FBRUosR0FBRTtBQUVLLE1BQU0sRUFBQ0ssbUJBQWtCLEVBQUVlLDBCQUF5QixFQUFDLEdBQUVsQixtQkFBbUJtQixPQUFPO0FBQ3hGLCtEQUFlbkIsbUJBQW1Cb0IsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9mZWF0dXJlcy9mYXZvcmFpdGVMaXN0U2xpY2UudHM/ZWJlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgQm9vayBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb29rL0Jvb2tcIjtcclxuLy9pbXBvcnQgeyBCb29rcyB9IGZyb20gXCIuLi9jb25zdGFudHMvTU9DS19EQVRBXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIEJvb2t7XHJcbiAgICBfaWQ6c3RyaW5nLFxyXG4gICAgaW1hZ2VVcmw6c3RyaW5nLFxyXG4gICAgbmFtZTpzdHJpbmcsXHJcbiAgICBhdXRob3I6c3RyaW5nLFxyXG4gICAgcHJpY2U6bnVtYmVyLFxyXG4gICAgZGVzY3JpcHRpbjpzdHJpbmcsXHJcbiAgICBmb3JtYXQ6c3RyaW5nLFxyXG4gICAgcmF0aW5nOm51bWJlcixcclxuICAgIGFtb3VudDpudW1iZXJcclxuXHJcbn1cclxuaW50ZXJmYWNlIEJvb2tze1xyXG4gICAgZmF2b3JhaXRlbGlzdDpCb29rW10sXHJcbiAgICBmYXZvcmFpdGVBbGVydDpib29sZWFuLFxyXG4gICAgZmF2b3JhaXRlTWVzc2FnZTpzdHJpbmdcclxufVxyXG5jb25zdCBpbml0aWFsU3RhdGU6Qm9va3M9e1xyXG4gICAgZmF2b3JhaXRlbGlzdDpbXSxcclxuICAgZmF2b3JhaXRlQWxlcnQ6ZmFsc2UsXHJcbiAgIGZhdm9yYWl0ZU1lc3NhZ2U6JyAnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGYXZvcmFpdGVMaXN0U2xpY2U9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6J0Zhdm9yYWl0ZUxpc3QnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6e1xyXG4gICAgICAgIGFkZFRvRmF2b3JhaXRlTGlzdDooc3RhdGUsIGFjdGlvbjpQYXlsb2FkQWN0aW9uPEJvb2s+KT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBsZXQgdGVtcG89c3RhdGUuZmF2b3JhaXRlbGlzdC5maW5kKChiKT0+Yi5faWQgPT09IGFjdGlvbi5wYXlsb2FkLl9pZClcclxuICAgICAgIFxyXG4gICAgICAgICAgIGlmKHRlbXBvKXtcclxuICAgICAgICAgICAgbGV0IHRlbXBjYXJkPXN0YXRlLmZhdm9yYWl0ZWxpc3QubWFwKChiKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYi5faWQgPT09IGFjdGlvbi5wYXlsb2FkLl9pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZmF2b3JhaXRlQWxlcnQ9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgc3RhdGUuZmF2b3JhaXRlTWVzc2FnZT1gJHtiLm5hbWUubGVuZ3RoPjIwID9iLm5hbWUuc3Vic3RyaW5nKDAsMjApOiBiLm5hbWV9ICsgaXMgYWxlYWR5IGV4aXN0IGluIHlvdXIgd2lzaGxpc3RgXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4uYiwgYW1vdW50Ok51bWJlcihiLmFtb3VudCkrMX1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5ifVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIHN0YXRlLmZhdm9yYWl0ZWxpc3Q9dGVtcGNhcmRcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc3RhdGUuZmF2b3JhaXRlQWxlcnQ9dHJ1ZVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdGF0ZS5mYXZvcmFpdGVNZXNzYWdlPWAke2FjdGlvbi5wYXlsb2FkLm5hbWUubGVuZ3RoPjIwID9hY3Rpb24ucGF5bG9hZC5uYW1lLnN1YnN0cmluZygwLDIwKSA6IGFjdGlvbi5wYXlsb2FkLm5hbWV9ICsgYWRkZWQgdG8gd2lzaGxpc3RgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YXRlLmZhdm9yYWl0ZWxpc3QucHVzaCh7Li4uYWN0aW9uLnBheWxvYWQsIGFtb3VudDoxfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmFja3RvZmFsc2VGYXZvcmFpdGVBbGVydDooc3RhdGUpPT57XHJcbiAgICAgICAgICAgIHN0YXRlLmZhdm9yYWl0ZUFsZXJ0PWZhbHNlXHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgXHJcbiAgICB9LFxyXG4gIFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHthZGRUb0Zhdm9yYWl0ZUxpc3QsIGJhY2t0b2ZhbHNlRmF2b3JhaXRlQWxlcnR9ID1GYXZvcmFpdGVMaXN0U2xpY2UuYWN0aW9uc1xyXG5leHBvcnQgZGVmYXVsdCBGYXZvcmFpdGVMaXN0U2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImZhdm9yYWl0ZWxpc3QiLCJmYXZvcmFpdGVBbGVydCIsImZhdm9yYWl0ZU1lc3NhZ2UiLCJGYXZvcmFpdGVMaXN0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Zhdm9yYWl0ZUxpc3QiLCJzdGF0ZSIsImFjdGlvbiIsInRlbXBvIiwiZmluZCIsImIiLCJfaWQiLCJwYXlsb2FkIiwidGVtcGNhcmQiLCJtYXAiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJhbW91bnQiLCJOdW1iZXIiLCJwdXNoIiwiYmFja3RvZmFsc2VGYXZvcmFpdGVBbGVydCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/favoraiteListSlice.ts\n"));

/***/ })

});