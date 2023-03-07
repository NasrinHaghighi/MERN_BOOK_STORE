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

/***/ "./components/Book/Book.tsx":
/*!**********************************!*\
  !*** ./components/Book/Book.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/Book/styles.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/Image */ \"./helpers/Image.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Book() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const bookid = router.query.bookid;\n    const [bookItem, setBookItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:4000/api/v1/books/\".concat(bookid)).then((response)=>setBookItem(response.data.book));\n    }, []);\n    console.log(bookItem);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.BoxConatiner, {\n        children: bookItem && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.ImageDiv, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_Image__WEBPACK_IMPORTED_MODULE_4__.Images, {\n                    width: 450,\n                    height: 580,\n                    src: bookItem.imageUrl,\n                    alt: \"products\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Book\\\\Book.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Book\\\\Book.tsx\",\n                lineNumber: 37,\n                columnNumber: 8\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Book\\\\Book.tsx\",\n            lineNumber: 35,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ali\\\\Documents\\\\MERN-bookstore\\\\client\\\\components\\\\Book\\\\Book.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Book, \"AD7AWDoHec8toGDNClDEgWNNVEk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\nvar _c;\n$RefreshReg$(_c, \"Book\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2svQm9vay50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUFnRDtBQUNnQztBQUN6QztBQUVLO0FBSWxCO0FBSTFCLFNBQVNTLE9BQU87O0lBQ1osTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3pCLE1BQU1LLFNBQU9ELE9BQU9FLEtBQUssQ0FBQ0QsTUFBTTtJQUNqQyxNQUFNLENBQUNFLFVBQVVDLFlBQVksR0FBRVosK0NBQVFBO0lBRXRDRCxnREFBU0EsQ0FBQyxJQUFJO1FBQ2JPLGlEQUNJLENBQUMsc0NBQTZDLE9BQVBHLFNBQzFDSyxJQUFJLENBQUNDLENBQUFBLFdBQVdILFlBQVlHLFNBQVNDLElBQUksQ0FBQ0MsSUFBSTtJQUNoRCxHQUFFLEVBQUU7SUFDSkMsUUFBUUMsR0FBRyxDQUFDUjtJQUdiLHFCQUNFLDhEQUFDVixpREFBWUE7a0JBT1hVLDBCQUNGLDhEQUFDVCw4Q0FBU0E7c0JBRVAsNEVBQUNDLDZDQUFRQTswQkFFTiw0RUFBQ0Usa0RBQU1BO29CQUNUZSxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFLWCxTQUFTWSxRQUFRO29CQUV0QkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV1o7R0ExQ1NqQjs7UUFDVUgsa0RBQVNBOzs7S0FEbkJHO0FBNENULCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9vay9Cb29rLnRzeD9mOTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAse3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0JveENvbmF0aW5lcixDb250YWluZXIsIEltYWdlRGl2LCAgQWxlcnRCb3gsIFNlZUNhcmRCdG59IGZyb20gJy4vc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgZmV0Y2hpdGVtIH0gZnJvbSAnLi4vLi4vdXRpbGVzJztcclxuaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSAnLi4vLi4vaGVscGVycy9JbWFnZSdcclxuaW1wb3J0IEJvb2tJbmZvIGZyb20gJy4vQm9va0luZm8nO1xyXG5pbXBvcnQgQm9va0FsbEluZm8gZnJvbSAnLi9Cb29rQWxsSW5mby9Cb29rQWxsSW5mbyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBib29rVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL2Jvb2tUeXBlJztcclxuXHJcblxyXG5mdW5jdGlvbiBCb29rKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgY29uc3QgYm9va2lkPXJvdXRlci5xdWVyeS5ib29raWRcclxuICBjb25zdCBbYm9va0l0ZW0sIHNldEJvb2tJdGVtXSA9dXNlU3RhdGU8Ym9va1R5cGU+KClcclxuXHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgYXhpb3NcclxuICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdjEvYm9va3MvJHtib29raWR9YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+c2V0Qm9va0l0ZW0ocmVzcG9uc2UuZGF0YS5ib29rKSk7XHJcbiAgIH0sW10pXHJcbiAgIGNvbnNvbGUubG9nKGJvb2tJdGVtKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hDb25hdGluZXI+XHJcbiAgIFxyXG4gICAgey8qIDxBbGVydEJveCBjbGFzc05hbWU9e3Nob3dBbGVydCA/ICdzaG93JyA6ICcnfT5cclxuICAgIFxyXG4gICAgICA8ZGl2PkJvb2sgXCIgPHNwYW4+e2l0ZW0/LnZvbHVtZUluZm8udGl0bGV9IDwvc3Bhbj5cIiBhZGRlZCB0byB5b3IgY2FyZDwvZGl2PlxyXG4gICAgICA8U2VlQ2FyZEJ0bj48TGluayBocmVmPScvY2FyZCc+VmlldyBjYXJkPC9MaW5rPjwvU2VlQ2FyZEJ0bj5cclxuICAgICA8L0FsZXJ0Qm94PiAgKi99XHJcbiAgICAge2Jvb2tJdGVtICYmXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgXHJcbiAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgIFxyXG4gICAgICAgICAgPEltYWdlc1xyXG4gICAgICAgIHdpZHRoPXs0NTB9XHJcbiAgICAgICAgaGVpZ2h0PXs1ODB9XHJcbiAgICAgICAgc3JjPXtib29rSXRlbS5pbWFnZVVybH1cclxuICAgICAgICBcclxuICAgICAgICBhbHQ9XCJwcm9kdWN0c1wiXHJcbiAgICAgICAvPiBcclxuIFxyXG4gICAgICAgXHJcbiAgICAgICA8L0ltYWdlRGl2PiBcclxuXHJcbiAgICBcclxuICAgIDwvQ29udGFpbmVyPn1cclxuICAgIHsvKiA8Qm9va0FsbEluZm8gaXRlbT17aXRlbX0vPiAgKi99XHJcbiAgICA8L0JveENvbmF0aW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2siXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJveENvbmF0aW5lciIsIkNvbnRhaW5lciIsIkltYWdlRGl2IiwidXNlUm91dGVyIiwiSW1hZ2VzIiwiYXhpb3MiLCJCb29rIiwicm91dGVyIiwiYm9va2lkIiwicXVlcnkiLCJib29rSXRlbSIsInNldEJvb2tJdGVtIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImJvb2siLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJpbWFnZVVybCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Book/Book.tsx\n"));

/***/ })

});