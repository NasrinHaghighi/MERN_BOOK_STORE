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

/***/ "./components/Footer/styles.ts":
/*!*************************************!*\
  !*** ./components/Footer/styles.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"FooterBox\": function() { return /* binding */ FooterBox; },\n/* harmony export */   \"LeftContainer\": function() { return /* binding */ LeftContainer; },\n/* harmony export */   \"MiddelContainer\": function() { return /* binding */ MiddelContainer; },\n/* harmony export */   \"Right\": function() { return /* binding */ Right; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  max-width: 100%;\\nbackground-color:\",\n        \" ;\\nposition:absolute ;\\nbottom:0 ;\\npadding:70px 0 0 0 ;\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: grid;\\ngrid-template-columns: repeat(3, 1fr);\\ngrid-template-rows: 1fr;\\ngrid-column-gap: 0px;\\ngrid-row-gap: 0px; \\nborder-top:1px dotted gray ;\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nborder-right:1px dotted gray ;\\ntext-align:right ;\\npadding: 15px 15px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ntext-align:center ;\\npadding: 15px 15px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nborder-left:1px dotted gray ;\\npadding: 15px 15px;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject(), (props)=>props.theme.grayBG);\nconst FooterBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst LeftContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nconst MiddelContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst Right = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxZQUFVRCw2REFBVSxvQkFFZEcsQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDQyxNQUFNLEVBSzNDO0FBQ00sTUFBTUMsWUFBVU4sNkRBQVUscUJBUWhDO0FBRU0sTUFBTU8sZ0JBQWNQLDZEQUFVLHFCQUlwQztBQUNNLE1BQU1RLGtCQUFnQlIsNkRBQVUscUJBR3RDO0FBQ00sTUFBTVMsUUFBTVQsNkRBQVUscUJBRzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdGVyL3N0eWxlcy50cz83NDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyPXN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmdyYXlCR30gO1xyXG5wb3NpdGlvbjphYnNvbHV0ZSA7XHJcbmJvdHRvbTowIDtcclxucGFkZGluZzo3MHB4IDAgMCAwIDtcclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IEZvb3RlckJveD1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG5ncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XHJcbmdyaWQtcm93LWdhcDogMHB4OyBcclxuYm9yZGVyLXRvcDoxcHggZG90dGVkIGdyYXkgO1xyXG5cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExlZnRDb250YWluZXI9c3R5bGVkLmRpdmBcclxuYm9yZGVyLXJpZ2h0OjFweCBkb3R0ZWQgZ3JheSA7XHJcbnRleHQtYWxpZ246cmlnaHQgO1xyXG5wYWRkaW5nOiAxNXB4IDE1cHg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IE1pZGRlbENvbnRhaW5lcj1zdHlsZWQuZGl2YFxyXG50ZXh0LWFsaWduOmNlbnRlciA7XHJcbnBhZGRpbmc6IDE1cHggMTVweDtcclxuYFxyXG5leHBvcnQgY29uc3QgUmlnaHQ9c3R5bGVkLmRpdmBcclxuYm9yZGVyLWxlZnQ6MXB4IGRvdHRlZCBncmF5IDtcclxucGFkZGluZzogMTVweCAxNXB4O1xyXG5gXHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZ3JheUJHIiwiRm9vdGVyQm94IiwiTGVmdENvbnRhaW5lciIsIk1pZGRlbENvbnRhaW5lciIsIlJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer/styles.ts\n"));

/***/ })

});