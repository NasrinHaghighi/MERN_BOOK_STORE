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

/***/ "./components/Book/styles.ts":
/*!***********************************!*\
  !*** ./components/Book/styles.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertBox\": function() { return /* binding */ AlertBox; },\n/* harmony export */   \"Authors\": function() { return /* binding */ Authors; },\n/* harmony export */   \"BoxConatiner\": function() { return /* binding */ BoxConatiner; },\n/* harmony export */   \"BtnConatiner\": function() { return /* binding */ BtnConatiner; },\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"ConatinerInfo\": function() { return /* binding */ ConatinerInfo; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Discription\": function() { return /* binding */ Discription; },\n/* harmony export */   \"ImageDiv\": function() { return /* binding */ ImageDiv; },\n/* harmony export */   \"Input\": function() { return /* binding */ Input; },\n/* harmony export */   \"Price\": function() { return /* binding */ Price; },\n/* harmony export */   \"SeeCardBtn\": function() { return /* binding */ SeeCardBtn; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nfrom { opacity: 0;top:-50px }\\n    to { opacity:1;top:0px };\\n    \\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nposition:relative ;\\n\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nbackground-color:\",\n        \" ;\\nborder-radius:8px ;\\nmax-width: 1720px;\\ndisplay:flex ;\\njustify-content:space-between ;\\nalign-items:center ;\\n\\n  left: 0; \\n  right: 0; \\ntop:-50px ;\\n  margin-left: auto; \\n  margin-right: auto; \\n padding: 50px ;\\n opacity:0;\\n  position:absolute ;\\n box-shadow:\",\n        \" ;\\n color: \",\n        \";\\n font-size: 28px;\\n font-weight:700 ;\\n&>div{\\n &>span{\\n  font-style:italic ;\\n  color: #ffff;\\n }}\\n &.show{\\n  animation:\",\n        \" .8s .5s forwards;\\n  \\n }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\nmax-width: 1920px;\\n margin:0 auto ;\\n padding:150px 50px ;\\n display: grid;\\ngrid-template-columns: 2fr 3fr;\\ngrid-template-rows: 1fr;\\ngrid-column-gap: 0px;\\ngrid-row-gap: 0px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ntext-align:center ;\\nborder:2px solid red ;\\nborder-radius:0 8px 8px 0 ;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ntext-align:left ;\\npadding-bottom: 150px;\\n&>h1{\\n  font-size:56px ;\\n    color:\",\n        \";\\n    letter-spacing:.2rem;\\n}\\n&>h2{\\n  font-size:32px ;\\n    color:\",\n        \";\\n    color:\",\n        \";\\n    margin:20px 0 ; \\n}\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:10px 0 ;\\nfont-size:28px ;\\ncolor:\",\n        \";\\n\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:30px 0 ;\\nfont-size:26px ;\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:30px 0 ;\\nfont-size:30px ;\\ncolor:\",\n        \";\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay:flex ;\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth:170px ;\\nheight:50px ;\\nborder-radius:50px ;\\noutline:none ;\\nmargin-left:20px ;\\nborder:3px solid \",\n        \";\\ncolor:\",\n        \";\\nfont-size:20px ;\\nfont-weight:600 ;\\ntransition:all 0.3 ease-in-out ;\\n&:hover{\\n    color:\",\n        \";\\n    border:3px solid \",\n        \"; \\n}\\n\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth:288px ;\\nheight:50px ;\\nborder-radius:50px ;\\npadding:0 10px ;\\noutline:none ;\\nborder:3px solid \",\n        \";\\n\\nfont-size:20px ;\\nfont-weight:600 ;\\n  ::placeholder {\\n    \\n  }\\n\"\n    ]);\n    _templateObject11 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject12() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ncolor:#fff !important;\\nfont-size:18px ;\\npadding:10px 15px;\\nborder:none ;\\nborder-radius:8px ;\\ntransition:all 0.5 ease-in-out ;\\nbackground-color:\",\n        \" ;\\nfloat:left;\\nz-index:10;\\n&:hover{\\n color:#fff !important;\\n box-shadow:\",\n        \" !important;\\n transform:scale(1.1)!important;\\n}\\n\"\n    ]);\n    _templateObject12 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst fadein = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject());\nconst BoxConatiner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst AlertBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2(), (props)=>props.theme.blue2, (props)=>props.theme.alertBoxshdow, (props)=>props.theme.textStrong, fadein);\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nconst ConatinerInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5(), (props)=>props.theme.textStrong, (props)=>props.theme.textStrong, (props)=>props.theme.textStrong);\nconst Authors = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6(), (props)=>props.theme.orange);\nconst Discription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7());\nconst Price = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject8(), (props)=>props.theme.textStrong);\nconst BtnConatiner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject9());\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject10(), (props)=>props.theme.orange, (props)=>props.theme.orange, (props)=>props.theme.orange, (props)=>props.theme.textStrong);\nconst Input = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input(_templateObject11(), (props)=>props.theme.grayBorder);\nconst SeeCardBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject12(), (props)=>props.theme.orange, (props)=>props.theme.boxshadow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2svc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBRXRELE1BQU1FLFNBQVNELDREQUFTQTtBQUtqQixNQUFNRSxlQUFlSCw2REFBVSxxQkFJcEM7QUFDSyxNQUFNSyxXQUFXTCw2REFBVSxxQkFDZk0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDQyxLQUFLLEVBZTdCRixDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNFLGFBQWEsRUFDcENILENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ0csVUFBVSxFQVN6QlIsUUFHWjtBQUNLLE1BQU1TLFlBQVVYLDZEQUFVLHFCQVVoQztBQUdNLE1BQU1ZLFdBQVNaLDZEQUFVLHFCQUkvQjtBQUNNLE1BQU1hLGdCQUFjYiw2REFBVSxxQkFLekJNLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ0csVUFBVSxFQUs3QkosQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDRyxVQUFVLEVBQzdCSixDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNHLFVBQVUsRUFHeEM7QUFDTSxNQUFNSSxVQUFRZCw2REFBVSxxQkFHdkJNLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ1EsTUFBTSxFQUVoQztBQUNNLE1BQU1DLGNBQVloQiw2REFBVSxxQkFHbEM7QUFDTSxNQUFNaUIsUUFBTWpCLDZEQUFVLHFCQUdyQk0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDRyxVQUFVLEVBQ3BDO0FBQ00sTUFBTVEsZUFBY2xCLDZEQUFVLHFCQUVwQztBQUNNLE1BQU1tQixTQUFPbkIsZ0VBQWEsc0JBTWRNLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ1EsTUFBTSxFQUNwQ1QsQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDUSxNQUFNLEVBS3JCVCxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNRLE1BQU0sRUFDZFQsQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDRyxVQUFVLEVBR25EO0FBRU0sTUFBTVcsUUFBUXJCLCtEQUFZLHNCQU1kTSxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNnQixVQUFVLEVBTzlDO0FBRUssTUFBTUMsYUFBV3hCLGdFQUFhLHNCQU9sQk0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDUSxNQUFNLEVBSzlCVCxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNrQixTQUFTLEVBR3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9vay9zdHlsZXMudHM/ODZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkICx7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgZmFkZWluID0ga2V5ZnJhbWVzYFxyXG5mcm9tIHsgb3BhY2l0eTogMDt0b3A6LTUwcHggfVxyXG4gICAgdG8geyBvcGFjaXR5OjE7dG9wOjBweCB9O1xyXG4gICAgXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCb3hDb25hdGluZXIgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZSA7XHJcblxyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IEFsZXJ0Qm94ID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5ibHVlMn0gO1xyXG5ib3JkZXItcmFkaXVzOjhweCA7XHJcbm1heC13aWR0aDogMTcyMHB4O1xyXG5kaXNwbGF5OmZsZXggO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbiA7XHJcbmFsaWduLWl0ZW1zOmNlbnRlciA7XHJcblxyXG4gIGxlZnQ6IDA7IFxyXG4gIHJpZ2h0OiAwOyBcclxudG9wOi01MHB4IDtcclxuICBtYXJnaW4tbGVmdDogYXV0bzsgXHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuIHBhZGRpbmc6IDUwcHggO1xyXG4gb3BhY2l0eTowO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlIDtcclxuIGJveC1zaGFkb3c6JHtwcm9wcz0+cHJvcHMudGhlbWUuYWxlcnRCb3hzaGRvd30gO1xyXG4gY29sb3I6ICR7cHJvcHM9PnByb3BzLnRoZW1lLnRleHRTdHJvbmd9O1xyXG4gZm9udC1zaXplOiAyOHB4O1xyXG4gZm9udC13ZWlnaHQ6NzAwIDtcclxuJj5kaXZ7XHJcbiAmPnNwYW57XHJcbiAgZm9udC1zdHlsZTppdGFsaWMgO1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuIH19XHJcbiAmLnNob3d7XHJcbiAgYW5pbWF0aW9uOiR7ZmFkZWlufSAuOHMgLjVzIGZvcndhcmRzO1xyXG4gIFxyXG4gfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyPXN0eWxlZC5kaXZgXHJcblxyXG5tYXgtd2lkdGg6IDE5MjBweDtcclxuIG1hcmdpbjowIGF1dG8gO1xyXG4gcGFkZGluZzoxNTBweCA1MHB4IDtcclxuIGRpc3BsYXk6IGdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcclxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbmdyaWQtY29sdW1uLWdhcDogMHB4O1xyXG5ncmlkLXJvdy1nYXA6IDBweDtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZURpdj1zdHlsZWQuZGl2YFxyXG50ZXh0LWFsaWduOmNlbnRlciA7XHJcbmJvcmRlcjoycHggc29saWQgcmVkIDtcclxuYm9yZGVyLXJhZGl1czowIDhweCA4cHggMCA7XHJcbmBcclxuZXhwb3J0IGNvbnN0IENvbmF0aW5lckluZm89c3R5bGVkLmRpdmBcclxudGV4dC1hbGlnbjpsZWZ0IDtcclxucGFkZGluZy1ib3R0b206IDE1MHB4O1xyXG4mPmgxe1xyXG4gIGZvbnQtc2l6ZTo1NnB4IDtcclxuICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLnRleHRTdHJvbmd9O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6LjJyZW07XHJcbn1cclxuJj5oMntcclxuICBmb250LXNpemU6MzJweCA7XHJcbiAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS50ZXh0U3Ryb25nfTtcclxuICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLnRleHRTdHJvbmd9O1xyXG4gICAgbWFyZ2luOjIwcHggMCA7IFxyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IEF1dGhvcnM9c3R5bGVkLmRpdmBcclxubWFyZ2luOjEwcHggMCA7XHJcbmZvbnQtc2l6ZToyOHB4IDtcclxuY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUub3JhbmdlfTtcclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IERpc2NyaXB0aW9uPXN0eWxlZC5kaXZgXHJcbm1hcmdpbjozMHB4IDAgO1xyXG5mb250LXNpemU6MjZweCA7XHJcbmBcclxuZXhwb3J0IGNvbnN0IFByaWNlPXN0eWxlZC5kaXZgXHJcbm1hcmdpbjozMHB4IDAgO1xyXG5mb250LXNpemU6MzBweCA7XHJcbmNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLnRleHRTdHJvbmd9O1xyXG5gXHJcbmV4cG9ydCBjb25zdCBCdG5Db25hdGluZXIgPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleCA7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uYFxyXG53aWR0aDoxNzBweCA7XHJcbmhlaWdodDo1MHB4IDtcclxuYm9yZGVyLXJhZGl1czo1MHB4IDtcclxub3V0bGluZTpub25lIDtcclxubWFyZ2luLWxlZnQ6MjBweCA7XHJcbmJvcmRlcjozcHggc29saWQgJHtwcm9wcz0+cHJvcHMudGhlbWUub3JhbmdlfTtcclxuY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUub3JhbmdlfTtcclxuZm9udC1zaXplOjIwcHggO1xyXG5mb250LXdlaWdodDo2MDAgO1xyXG50cmFuc2l0aW9uOmFsbCAwLjMgZWFzZS1pbi1vdXQgO1xyXG4mOmhvdmVye1xyXG4gICAgY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUub3JhbmdlfTtcclxuICAgIGJvcmRlcjozcHggc29saWQgJHtwcm9wcz0+cHJvcHMudGhlbWUudGV4dFN0cm9uZ307IFxyXG59XHJcblxyXG5gIFxyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG53aWR0aDoyODhweCA7XHJcbmhlaWdodDo1MHB4IDtcclxuYm9yZGVyLXJhZGl1czo1MHB4IDtcclxucGFkZGluZzowIDEwcHggO1xyXG5vdXRsaW5lOm5vbmUgO1xyXG5ib3JkZXI6M3B4IHNvbGlkICR7cHJvcHM9PnByb3BzLnRoZW1lLmdyYXlCb3JkZXJ9O1xyXG5cclxuZm9udC1zaXplOjIwcHggO1xyXG5mb250LXdlaWdodDo2MDAgO1xyXG4gIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgXHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlZUNhcmRCdG49c3R5bGVkLmJ1dHRvbmBcclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG5mb250LXNpemU6MThweCA7XHJcbnBhZGRpbmc6MTBweCAxNXB4O1xyXG5ib3JkZXI6bm9uZSA7XHJcbmJvcmRlci1yYWRpdXM6OHB4IDtcclxudHJhbnNpdGlvbjphbGwgMC41IGVhc2UtaW4tb3V0IDtcclxuYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5vcmFuZ2V9IDtcclxuZmxvYXQ6bGVmdDtcclxuei1pbmRleDoxMDtcclxuJjpob3ZlcntcclxuIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuIGJveC1zaGFkb3c6JHtwcm9wcz0+cHJvcHMudGhlbWUuYm94c2hhZG93fSAhaW1wb3J0YW50O1xyXG4gdHJhbnNmb3JtOnNjYWxlKDEuMSkhaW1wb3J0YW50O1xyXG59XHJcbmBcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsImtleWZyYW1lcyIsImZhZGVpbiIsIkJveENvbmF0aW5lciIsImRpdiIsIkFsZXJ0Qm94IiwicHJvcHMiLCJ0aGVtZSIsImJsdWUyIiwiYWxlcnRCb3hzaGRvdyIsInRleHRTdHJvbmciLCJDb250YWluZXIiLCJJbWFnZURpdiIsIkNvbmF0aW5lckluZm8iLCJBdXRob3JzIiwib3JhbmdlIiwiRGlzY3JpcHRpb24iLCJQcmljZSIsIkJ0bkNvbmF0aW5lciIsIkJ1dHRvbiIsImJ1dHRvbiIsIklucHV0IiwiaW5wdXQiLCJncmF5Qm9yZGVyIiwiU2VlQ2FyZEJ0biIsImJveHNoYWRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Book/styles.ts\n"));

/***/ })

});