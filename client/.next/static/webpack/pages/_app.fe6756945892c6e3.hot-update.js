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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BookSlice\": function() { return /* binding */ BookSlice; },\n/* harmony export */   \"addBook\": function() { return /* binding */ addBook; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    books: []\n};\nconst BookSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"Books\",\n    initialState,\n    reducers: {\n        addBook: (state, action)=>{\n            console.log(action.payload);\n            console.log(state.books);\n            let tempo = state.books.find((b)=>b._id === action.payload._id);\n            if (tempo) {\n                let tempcard = state.books.map((b)=>{\n                    if (b._id === action.payload._id) {\n                        return {\n                            ...b,\n                            amount: Number(b.amount) + Number(action.payload.amount)\n                        };\n                    } else {\n                        return {\n                            ...b\n                        };\n                    }\n                });\n                state.books = tempcard;\n            } else {\n                state.books.push({\n                    ...action.payload,\n                    amount: 1\n                });\n            }\n        }\n    }\n});\nconst { addBook  } = BookSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9ib29rU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzhEO0FBZ0I5RCxNQUFNQyxlQUFtQjtJQUNyQkMsT0FBTSxFQUFFO0FBQ1o7QUFFTyxNQUFNQyxZQUFXSCw2REFBV0EsQ0FBQztJQUNoQ0ksTUFBSztJQUNMSDtJQUNBSSxVQUFTO1FBQ0xDLFNBQVEsQ0FBQ0MsT0FBT0MsU0FBNkI7WUFDekNDLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0csT0FBTztZQUMxQkYsUUFBUUMsR0FBRyxDQUFDSCxNQUFNTCxLQUFLO1lBQzVCLElBQUlVLFFBQU1MLE1BQU1MLEtBQUssQ0FBQ1csSUFBSSxDQUFDLENBQUNDLElBQUlBLEVBQUVDLEdBQUcsS0FBS1AsT0FBT0csT0FBTyxDQUFDSSxHQUFHO1lBRzNELElBQUdILE9BQU07Z0JBQ0wsSUFBSUksV0FBU1QsTUFBTUwsS0FBSyxDQUFDZSxHQUFHLENBQUMsQ0FBQ0gsSUFBSTtvQkFDOUIsSUFBR0EsRUFBRUMsR0FBRyxLQUFLUCxPQUFPRyxPQUFPLENBQUNJLEdBQUcsRUFBQzt3QkFDNUIsT0FBTzs0QkFBQyxHQUFHRCxDQUFDOzRCQUFFSSxRQUFPQyxPQUFPTCxFQUFFSSxNQUFNLElBQUdDLE9BQU9YLE9BQU9HLE9BQU8sQ0FBQ08sTUFBTTt3QkFBRTtvQkFDekUsT0FBSzt3QkFDRCxPQUFPOzRCQUFDLEdBQUdKLENBQUM7d0JBQUE7b0JBQ2hCLENBQUM7Z0JBQ1c7Z0JBQ0FQLE1BQU1MLEtBQUssR0FBQ2M7WUFDaEMsT0FBUTtnQkFDSlQsTUFBTUwsS0FBSyxDQUFDa0IsSUFBSSxDQUFDO29CQUFDLEdBQUdaLE9BQU9HLE9BQU87b0JBQUVPLFFBQU87Z0JBQUM7WUFDakQsQ0FBQztRQUdEO0lBWUo7QUFFSixHQUFFO0FBRUssTUFBTSxFQUFDWixRQUFPLEVBQUcsR0FBRUgsVUFBVWtCLE9BQU87QUFDM0MsK0RBQWVsQixVQUFVbUIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9mZWF0dXJlcy9ib29rU2xpY2UudHM/ZGM1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgQm9vayBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb29rL0Jvb2tcIjtcclxuaW1wb3J0IHsgQm9va3MgfSBmcm9tIFwiLi4vY29uc3RhbnRzL01PQ0tfREFUQVwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBCb29re1xyXG4gICBfaWQ6c3RyaW5nLFxyXG4gICBpbWFnZTpzdHJpbmcsXHJcbiAgIGFtb3VudD86bnVtYmVyLFxyXG4gICBhdXRob3JzOnN0cmluZ1tdLFxyXG4gICBwcmljZTpudW1iZXJcclxuXHJcbn1cclxuaW50ZXJmYWNlIEJvb2tze1xyXG4gICAgYm9va3M6Qm9va1tdXHJcbn1cclxuY29uc3QgaW5pdGlhbFN0YXRlOkJvb2tzPXtcclxuICAgIGJvb2tzOltdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCb29rU2xpY2U9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6J0Jvb2tzJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICBhZGRCb29rOihzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248Qm9vaz4pPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5ib29rcylcclxuICAgICAgIGxldCB0ZW1wbz1zdGF0ZS5ib29rcy5maW5kKChiKT0+Yi5faWQgPT09IGFjdGlvbi5wYXlsb2FkLl9pZClcclxuICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGlmKHRlbXBvKXtcclxuICAgICAgICAgICAgbGV0IHRlbXBjYXJkPXN0YXRlLmJvb2tzLm1hcCgoYik9PntcclxuICAgICAgICAgICAgICAgIGlmKGIuX2lkID09PSBhY3Rpb24ucGF5bG9hZC5faWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4uYiwgYW1vdW50Ok51bWJlcihiLmFtb3VudCkgK051bWJlcihhY3Rpb24ucGF5bG9hZC5hbW91bnQpIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4uYn1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5ib29rcz10ZW1wY2FyZFxyXG4gICAgICAgIH0gICBlbHNle1xyXG4gICAgICAgICAgICBzdGF0ZS5ib29rcy5wdXNoKHsuLi5hY3Rpb24ucGF5bG9hZCwgYW1vdW50OjF9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gYWRkTmV3QW1vdW50OihzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248YW55Pik9PntcclxuICAgICAgICAvLyAgICBzdGF0ZS5ib29rcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHsgaWYgKGl0ZW0uaWQgPT0gYWN0aW9uLnBheWxvYWQuaWQpIHN0YXRlLmJvb2tzW2ldID1hY3Rpb24ucGF5bG9hZDsgfSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgZGVsZXRJdGVtOihzdGF0ZSwgYWN0aW9uOlBheWxvYWRBY3Rpb248YW55Pik9PntcclxuICAgICAgICAvLyAgICAgICAgY29uc3QgdGVtcENhcmQ9IHN0YXRlLmJvb2tzLmZpbHRlcigoaXRlbSk9PntcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgIC8vICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICBzdGF0ZS5ib29rcz10ZW1wQ2FyZFxyXG4gICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qge2FkZEJvb2ssIH0gPUJvb2tTbGljZS5hY3Rpb25zXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiYm9va3MiLCJCb29rU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRCb29rIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInRlbXBvIiwiZmluZCIsImIiLCJfaWQiLCJ0ZW1wY2FyZCIsIm1hcCIsImFtb3VudCIsIk51bWJlciIsInB1c2giLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./features/bookSlice.ts\n"));

/***/ })

});