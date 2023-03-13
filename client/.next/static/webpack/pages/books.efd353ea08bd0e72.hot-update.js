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

/***/ "./components/Books/Alerts/AddCardAlert.tsx":
/*!**************************************************!*\
  !*** ./components/Books/Alerts/AddCardAlert.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/Books/Alerts/styles.ts\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/hooks */ \"./redux/hooks.ts\");\n/* harmony import */ var _features_bookSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../features/bookSlice */ \"./features/bookSlice.ts\");\n/* harmony import */ var _features_favoraiteListSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../features/favoraiteListSlice */ \"./features/favoraiteListSlice.ts\");\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Modal */ \"./node_modules/@mui/material/Modal/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AddCardAlert() {\n    _s();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleOpen = ()=>setOpen(true);\n    const handleClose = ()=>setOpen(false);\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const alertState = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.books.alert);\n    const messageState = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.books.message);\n    const favoraiteAlertState = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.favoriteList.favoraiteAlert);\n    const favoraiteMessageState = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.favoriteList.favoraiteMessage);\n    //const messageState =useAppSelector((state=>state.books.message))\n    const modifyMes = messageState.split(\"+\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (alertState) {\n            setOpen(true);\n        }\n        setTimeout(()=>{\n            dispatch((0,_features_bookSlice__WEBPACK_IMPORTED_MODULE_4__.backtofalseAlert)());\n        }, 4000);\n        if (!alertState) {\n            setOpen(false);\n        }\n    }, [\n        alertState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (favoraiteAlertState) {\n            setOpen(true);\n        }\n        setTimeout(()=>{\n            dispatch((0,_features_favoraiteListSlice__WEBPACK_IMPORTED_MODULE_5__.backtofalseFavoraiteAlert)());\n        }, 4000);\n        if (!favoraiteAlertState) {\n            setOpen(false);\n        }\n    }, [\n        favoraiteAlertState\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            open: open,\n            onClose: handleClose,\n            \"aria-labelledby\": \"modal-modal-title\",\n            \"aria-describedby\": \"modal-modal-description\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    alertState && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        className: alertState ? \"active\" : \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    '\"',\n                                    modifyMes[0],\n                                    '\" '\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Alerts\\\\AddCardAlert.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                children: modifyMes[1]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Alerts\\\\AddCardAlert.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Alerts\\\\AddCardAlert.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 6\n                    }, this),\n                    favoraiteAlertState && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        className: favoraiteAlertState ? \"active\" : \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    '\"',\n                                    modifyMes[0],\n                                    '\" '\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Alerts\\\\AddCardAlert.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                children: modifyMes[1]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Alerts\\\\AddCardAlert.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Alerts\\\\AddCardAlert.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Alerts\\\\AddCardAlert.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Books\\\\Alerts\\\\AddCardAlert.tsx\",\n            lineNumber: 51,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_s(AddCardAlert, \"eGzQ2w2t52KOolALpqFf5v7Atvk=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = AddCardAlert;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddCardAlert);\nvar _c;\n$RefreshReg$(_c, \"AddCardAlert\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tzL0FsZXJ0cy9BZGRDYXJkQWxlcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEM7QUFDbEI7QUFDeUM7QUFDVDtBQUNrQjtBQUN0QztBQUd4QyxTQUFTUSxlQUFlOztJQUNwQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1YscURBQWMsQ0FBQyxLQUFLO0lBQzVDLE1BQU1ZLGFBQWEsSUFBTUYsUUFBUSxJQUFJO0lBQ3JDLE1BQU1HLGNBQWMsSUFBTUgsUUFBUSxLQUFLO0lBQ3ZDLE1BQU1JLFdBQVNYLDREQUFjQTtJQUM3QixNQUFNWSxhQUFZWCw0REFBY0EsQ0FBRVksQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDQyxLQUFLO0lBQzFELE1BQU1DLGVBQWNmLDREQUFjQSxDQUFFWSxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNHLE9BQU87SUFDOUQsTUFBTUMsc0JBQXFCakIsNERBQWNBLENBQUVZLENBQUFBLFFBQU9BLE1BQU1NLFlBQVksQ0FBQ0MsY0FBYztJQUNuRixNQUFNQyx3QkFBdUJwQiw0REFBY0EsQ0FBRVksQ0FBQUEsUUFBT0EsTUFBTU0sWUFBWSxDQUFDRyxnQkFBZ0I7SUFDdkYsa0VBQWtFO0lBQ3RFLE1BQU1DLFlBQVdQLGFBQWFRLEtBQUssQ0FBQztJQUVwQzFCLGdEQUFTQSxDQUFDLElBQUk7UUFDWixJQUFHYyxZQUFXO1lBQ1pMLFFBQVEsSUFBSTtRQUNkLENBQUM7UUFDQ2tCLFdBQVcsSUFBTTtZQUNiZCxTQUFTVCxxRUFBZ0JBO1FBRTdCLEdBQUc7UUFDSCxJQUFHLENBQUNVLFlBQVc7WUFDWEwsUUFBUSxLQUFLO1FBQ2YsQ0FBQztJQUVQLEdBQUU7UUFBQ0s7S0FBVztJQUVkZCxnREFBU0EsQ0FBQyxJQUFJO1FBQ1YsSUFBR29CLHFCQUFvQjtZQUNyQlgsUUFBUSxJQUFJO1FBQ2QsQ0FBQztRQUNDa0IsV0FBVyxJQUFNO1lBQ2JkLFNBQVNSLHVGQUF5QkE7UUFFdEMsR0FBRztRQUNILElBQUcsQ0FBQ2UscUJBQW9CO1lBQ3BCWCxRQUFRLEtBQUs7UUFDZixDQUFDO0lBRVAsR0FBRTtRQUFDVztLQUFvQjtJQUV2QixxQkFDRTtrQkFDRCw0RUFBQ2QsMkRBQUtBO1lBQ0RFLE1BQU1BO1lBQ05vQixTQUFTaEI7WUFDVGlCLG1CQUFnQjtZQUNoQkMsb0JBQWlCO3NCQUVqQiw0RUFBQ0M7O29CQUNGakIsNEJBQ0YsOERBQUNiLHdDQUFHQTt3QkFBQytCLFdBQVdsQixhQUFhLFdBQVcsRUFBRTs7MENBQ3ZDLDhEQUFDbUI7O29DQUFHO29DQUFFUixTQUFTLENBQUMsRUFBRTtvQ0FBQzs7Ozs7OzswQ0FDbkIsOERBQUNTOzBDQUFJVCxTQUFTLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7O29CQUtwQkwscUNBQ0EsOERBQUNuQix3Q0FBR0E7d0JBQUMrQixXQUFXWixzQkFBc0IsV0FBVyxFQUFFOzswQ0FDaEQsOERBQUNhOztvQ0FBRztvQ0FBRVIsU0FBUyxDQUFDLEVBQUU7b0NBQUM7Ozs7Ozs7MENBQ25CLDhEQUFDUzswQ0FBSVQsU0FBUyxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV6QjtHQXRFU2xCOztRQUlVTCx3REFBY0E7UUFDWEMsd0RBQWNBO1FBQ1pBLHdEQUFjQTtRQUNQQSx3REFBY0E7UUFDWkEsd0RBQWNBOzs7S0FSdENJO0FBd0VULCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9va3MvQWxlcnRzL0FkZENhcmRBbGVydC50c3g/YjIwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLHt1c2VFZmZlY3QsdXNlU3RhdGV9ZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Qm94fSBmcm9tICcuL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvaG9va3MnXHJcbmltcG9ydCB7YmFja3RvZmFsc2VBbGVydH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYm9va1NsaWNlJ1xyXG5pbXBvcnQge2JhY2t0b2ZhbHNlRmF2b3JhaXRlQWxlcnR9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2Zhdm9yYWl0ZUxpc3RTbGljZSdcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTW9kYWwnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEFkZENhcmRBbGVydCgpIHtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRPcGVuKHRydWUpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoPXVzZUFwcERpc3BhdGNoKClcclxuICAgIGNvbnN0IGFsZXJ0U3RhdGUgPXVzZUFwcFNlbGVjdG9yKChzdGF0ZT0+c3RhdGUuYm9va3MuYWxlcnQpKVxyXG4gICAgY29uc3QgbWVzc2FnZVN0YXRlID11c2VBcHBTZWxlY3Rvcigoc3RhdGU9PnN0YXRlLmJvb2tzLm1lc3NhZ2UpKVxyXG4gICAgY29uc3QgZmF2b3JhaXRlQWxlcnRTdGF0ZSA9dXNlQXBwU2VsZWN0b3IoKHN0YXRlPT5zdGF0ZS5mYXZvcml0ZUxpc3QuZmF2b3JhaXRlQWxlcnQpKVxyXG4gICAgY29uc3QgZmF2b3JhaXRlTWVzc2FnZVN0YXRlID11c2VBcHBTZWxlY3Rvcigoc3RhdGU9PnN0YXRlLmZhdm9yaXRlTGlzdC5mYXZvcmFpdGVNZXNzYWdlKSlcclxuICAgIC8vY29uc3QgbWVzc2FnZVN0YXRlID11c2VBcHBTZWxlY3Rvcigoc3RhdGU9PnN0YXRlLmJvb2tzLm1lc3NhZ2UpKVxyXG5jb25zdCBtb2RpZnlNZXM9IG1lc3NhZ2VTdGF0ZS5zcGxpdChcIitcIik7XHJcblxyXG51c2VFZmZlY3QoKCk9PntcclxuICBpZihhbGVydFN0YXRlKXtcclxuICAgIHNldE9wZW4odHJ1ZSlcclxuICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChiYWNrdG9mYWxzZUFsZXJ0KCkpXHJcbiAgICAgICBcclxuICAgIH0sIDQwMDApO1xyXG4gICAgaWYoIWFsZXJ0U3RhdGUpe1xyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICAgIH1cclxuIFxyXG59LFthbGVydFN0YXRlXSlcclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoZmF2b3JhaXRlQWxlcnRTdGF0ZSl7XHJcbiAgICAgIHNldE9wZW4odHJ1ZSlcclxuICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChiYWNrdG9mYWxzZUZhdm9yYWl0ZUFsZXJ0KCkpXHJcbiAgICAgICAgIFxyXG4gICAgICB9LCA0MDAwKTtcclxuICAgICAgaWYoIWZhdm9yYWl0ZUFsZXJ0U3RhdGUpe1xyXG4gICAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgICAgICB9XHJcbiAgIFxyXG4gIH0sW2Zhdm9yYWl0ZUFsZXJ0U3RhdGVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgIHthbGVydFN0YXRlICYmIFxyXG4gICAgIDxCb3ggY2xhc3NOYW1lPXthbGVydFN0YXRlID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgPGgzPlwie21vZGlmeU1lc1swXX1cIiA8L2gzPlxyXG4gICAgICAgIDxoNj57bW9kaWZ5TWVzWzFdfTwvaDY+XHJcbiAgICA8L0JveD4gfVxyXG5cclxuXHJcblxyXG4gICAge2Zhdm9yYWl0ZUFsZXJ0U3RhdGUgJiYgXHJcbiAgICAgPEJveCBjbGFzc05hbWU9e2Zhdm9yYWl0ZUFsZXJ0U3RhdGUgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICA8aDM+XCJ7bW9kaWZ5TWVzWzBdfVwiIDwvaDM+XHJcbiAgICAgICAgPGg2Pnttb2RpZnlNZXNbMV19PC9oNj5cclxuICAgIDwvQm94PiB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRDYXJkQWxlcnQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJCb3giLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiYmFja3RvZmFsc2VBbGVydCIsImJhY2t0b2ZhbHNlRmF2b3JhaXRlQWxlcnQiLCJNb2RhbCIsIkFkZENhcmRBbGVydCIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJkaXNwYXRjaCIsImFsZXJ0U3RhdGUiLCJzdGF0ZSIsImJvb2tzIiwiYWxlcnQiLCJtZXNzYWdlU3RhdGUiLCJtZXNzYWdlIiwiZmF2b3JhaXRlQWxlcnRTdGF0ZSIsImZhdm9yaXRlTGlzdCIsImZhdm9yYWl0ZUFsZXJ0IiwiZmF2b3JhaXRlTWVzc2FnZVN0YXRlIiwiZmF2b3JhaXRlTWVzc2FnZSIsIm1vZGlmeU1lcyIsInNwbGl0Iiwic2V0VGltZW91dCIsIm9uQ2xvc2UiLCJhcmlhLWxhYmVsbGVkYnkiLCJhcmlhLWRlc2NyaWJlZGJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJoNiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Books/Alerts/AddCardAlert.tsx\n"));

/***/ })

});