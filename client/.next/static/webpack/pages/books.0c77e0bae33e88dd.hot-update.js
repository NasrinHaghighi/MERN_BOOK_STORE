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

/***/ "./components/Books/Main/styles.ts":
/*!*****************************************!*\
  !*** ./components/Books/Main/styles.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BooksConatiner\": function() { return /* binding */ BooksConatiner; },\n/* harmony export */   \"BooksConatiner2\": function() { return /* binding */ BooksConatiner2; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Grid\": function() { return /* binding */ Grid; },\n/* harmony export */   \"LoadMore\": function() { return /* binding */ LoadMore; },\n/* harmony export */   \"Top\": function() { return /* binding */ Top; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\npadding:0 10px ;\\nmargin:50px 0 ;\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay:flex ;\\njustify-content:space-between ;\\nheight:80px ;\\nwidth:100% ;\\npadding:10px 10px ;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\n\\n&>span{\\n   \\n    cursor: pointer;\\n    width:30px ;\\n    height:30px ;\\n    font-size:30px ;\\n    margin:0 10px ;\\n   \\n    &.active{\\n        color:orange;\\n    }\\n}\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: grid;\\ngrid-template-columns: repeat(3, 1fr);\\ngrid-template-rows: 1fr;\\ngrid-column-gap:20px;\\ngrid-row-gap: 20px;\\n@media (max-width:1650px) {\\n    grid-template-columns: repeat(2, 1fr);\\n\\n\\n}\\n@media (max-width:1350px) {\\n    grid-template-columns: repeat(1, 1fr);\\n\\n\\n}\\n\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nbackground-color:\",\n        ' ;\\nwidth:300px ;\\nheight:50px ;\\nborder-radius: 5px;\\ntext-align:center ;\\nborder:none ;\\nposition:relative ;\\nfont-size:18px ;\\nfont-weight:700 ;\\n&::before {\\n    content: \"\";\\n    position: absolute;\\n    width: 0px;\\n    height: 5px;\\n    right:5px;\\n    bottom: 0;\\n    background-color: #DB1037;\\n    background-image: linear-gradient(90deg, #DB1037, #CD40E6);;\\n    transition: .3s ease;\\n  }\\n  &:hover {\\n    &::before {\\n        width: 95%; \\n    }\\n\\n}\\n\\n'\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\n\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst Top = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nconst BooksConatiner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst LoadMore = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject4(), (props)=>props.theme.orange);\nconst BooksConatiner2 = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2tzL01haW4vc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLFlBQVVELDZEQUFVLG9CQUloQztBQUNNLE1BQU1HLE1BQUlILDZEQUFVLHFCQU0xQjtBQUNNLE1BQU1JLE9BQUtKLDZEQUFVLHFCQWUzQjtBQUNNLE1BQU1LLGlCQUFlTCw2REFBVSxxQkFpQnJDO0FBQ00sTUFBTU0sV0FBU04sZ0VBQWEscUJBQ2hCUSxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNDLE1BQU0sRUEyQjNDO0FBQ00sTUFBTUMsa0JBQWdCWCw2REFBVSxxQkFHdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rcy9NYWluL3N0eWxlcy50cz82ZjRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyPXN0eWxlZC5kaXZgXHJcbnBhZGRpbmc6MCAxMHB4IDtcclxubWFyZ2luOjUwcHggMCA7XHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBUb3A9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4IDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4gO1xyXG5oZWlnaHQ6ODBweCA7XHJcbndpZHRoOjEwMCUgO1xyXG5wYWRkaW5nOjEwcHggMTBweCA7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEdyaWQ9c3R5bGVkLmRpdmBcclxuXHJcblxyXG4mPnNwYW57XHJcbiAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6MzBweCA7XHJcbiAgICBoZWlnaHQ6MzBweCA7XHJcbiAgICBmb250LXNpemU6MzBweCA7XHJcbiAgICBtYXJnaW46MCAxMHB4IDtcclxuICAgXHJcbiAgICAmLmFjdGl2ZXtcclxuICAgICAgICBjb2xvcjpvcmFuZ2U7XHJcbiAgICB9XHJcbn1cclxuYFxyXG5leHBvcnQgY29uc3QgQm9va3NDb25hdGluZXI9c3R5bGVkLmRpdmBcclxuZGlzcGxheTogZ3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbmdyaWQtY29sdW1uLWdhcDoyMHB4O1xyXG5ncmlkLXJvdy1nYXA6IDIwcHg7XHJcbkBtZWRpYSAobWF4LXdpZHRoOjE2NTBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuXHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjEzNTBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuXHJcblxyXG59XHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBMb2FkTW9yZT1zdHlsZWQuYnV0dG9uYFxyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLm9yYW5nZX0gO1xyXG53aWR0aDozMDBweCA7XHJcbmhlaWdodDo1MHB4IDtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG50ZXh0LWFsaWduOmNlbnRlciA7XHJcbmJvcmRlcjpub25lIDtcclxucG9zaXRpb246cmVsYXRpdmUgO1xyXG5mb250LXNpemU6MThweCA7XHJcbmZvbnQtd2VpZ2h0OjcwMCA7XHJcbiY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgcmlnaHQ6NXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCMTAzNztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0RCMTAzNywgI0NENDBFNik7O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogOTUlOyBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IEJvb2tzQ29uYXRpbmVyMj1zdHlsZWQuZGl2YFxyXG5cclxuXHJcbmBcclxuXHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJUb3AiLCJHcmlkIiwiQm9va3NDb25hdGluZXIiLCJMb2FkTW9yZSIsImJ1dHRvbiIsInByb3BzIiwidGhlbWUiLCJvcmFuZ2UiLCJCb29rc0NvbmF0aW5lcjIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Books/Main/styles.ts\n"));

/***/ })

});