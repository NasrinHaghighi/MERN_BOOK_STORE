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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertBox\": function() { return /* binding */ AlertBox; },\n/* harmony export */   \"Authors\": function() { return /* binding */ Authors; },\n/* harmony export */   \"BoxConatiner\": function() { return /* binding */ BoxConatiner; },\n/* harmony export */   \"BtnConatiner\": function() { return /* binding */ BtnConatiner; },\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"ConatinerInfo\": function() { return /* binding */ ConatinerInfo; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Discription\": function() { return /* binding */ Discription; },\n/* harmony export */   \"ImageDiv\": function() { return /* binding */ ImageDiv; },\n/* harmony export */   \"Input\": function() { return /* binding */ Input; },\n/* harmony export */   \"Page\": function() { return /* binding */ Page; },\n/* harmony export */   \"Price\": function() { return /* binding */ Price; },\n/* harmony export */   \"SeeCardBtn\": function() { return /* binding */ SeeCardBtn; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nfrom { opacity: 0;top:-50px }\\n    to { opacity:1;top:0px };\\n    \\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nposition:relative ;\\n\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nbackground-color:\",\n        \" ;\\nborder-radius:8px ;\\nmax-width: 1720px;\\ndisplay:flex ;\\njustify-content:space-between ;\\nalign-items:center ;\\n\\n  left: 0; \\n  right: 0; \\ntop:-50px ;\\n  margin-left: auto; \\n  margin-right: auto; \\n padding: 50px ;\\n opacity:0;\\n  position:absolute ;\\n box-shadow:\",\n        \" ;\\n color: \",\n        \";\\n font-size: 28px;\\n font-weight:700 ;\\n&>div{\\n &>span{\\n  font-style:italic ;\\n  color: #ffff;\\n }}\\n &.show{\\n  animation:\",\n        \" .8s .5s forwards;\\n  \\n }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\nmax-width: 1920px;\\n margin:0 auto ;\\n padding:150px 50px ;\\n display: grid;\\ngrid-template-columns: 1fr 3fr;\\ngrid-template-rows: 1fr;\\ngrid-column-gap: 0px;\\ngrid-row-gap: 0px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: block;\\nposition: absolute;\\nleft: 0;\\ntop: 0;\\nwidth: 400px;\\nheight:450px;\\n  background-image: \",\n        \";\\n\\npadding: 0;\\nmargin: 0;\\n background-color: #fff; // Old browsers */\\ntransform-origin: 0 50% 0;\\ntransform-style: preserve-3d;\\ntransition: all .5s cubic-bezier(0.25,1,.25,1);\\n&.page1{\\n \\n  display: none;\\ntransform: rotateY(20deg) translateZ(-1px);\\n}\\n&.page2{\\n  display: none;\\ntransform: rotateY(30deg) translateZ(-2px);\\n}\\n&.page3{\\n  display: none;\\ntransform: rotateY(40deg) translateZ(-3px);\\n}\\n&.cover{\\n  z-index: 2 !important;\\ndisplay: block;\\nwidth: 400px;\\nheight:450px;\\n\\ntransform: rotateY(0deg) translateZ(0px);}\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: block;\\nfloat: left;\\nwidth: 400px;\\nheight:450px;\\nmargin: 0;\\npadding: 0;\\n background: #333; \\ntransform: translate3d(0,0,0);\\ntransition:all 0.3 ease ;\\n&:hover{\\n  \",\n        \" {\\n      &.page1 {\\n       display:block ;\\n       border:1px solid \",\n        \" ;\\n        transform: rotateY(-25deg);\\n      }\\n    \\n      &.page2 {\\n        display: block;\\n        border:1px solid \",\n        \" ;\\n        transform: rotateY(-20deg);\\n      }\\n      &.page3 {\\n        display: block;\\n        border:1px solid \",\n        \" ;\\n        transform: rotateY(-15deg);\\n      }\\n      &.cover {\\n        transform: rotateY(-30deg);\\n      }\\n    }\\n}\\n&>ul{\\n  display: block;\\nposition: relative;\\nwidth: 400px;\\nheight:450px;\\nmargin: 0px;\\npadding: 0;\\nlist-style: none;\\nperspective-origin: 0 50% 0;\\nperspective: 800px;\\n-webkit-transform: translate3d(0,0,0);\\n}\\n\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ntext-align:left ;\\npadding-bottom: 150px;\\n&>h1{\\n  font-size:56px ;\\n    color:\",\n        \";\\n    letter-spacing:.2rem;\\n}\\n&>h2{\\n  font-size:32px ;\\n    color:\",\n        \";\\n    color:\",\n        \";\\n    margin:20px 0 ; \\n}\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:10px 0 ;\\nfont-size:28px ;\\ncolor:\",\n        \";\\n\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:30px 0 ;\\nfont-size:26px ;\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:30px 0 ;\\nfont-size:30px ;\\ncolor:\",\n        \";\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay:flex ;\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth:170px ;\\nheight:50px ;\\nborder-radius:50px ;\\noutline:none ;\\nmargin-left:20px ;\\nborder:3px solid \",\n        \";\\ncolor:\",\n        \";\\nfont-size:20px ;\\nfont-weight:600 ;\\ntransition:all 0.3 ease-in-out ;\\n&:hover{\\n    color:\",\n        \";\\n    border:3px solid \",\n        \"; \\n}\\n\\n\"\n    ]);\n    _templateObject11 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject12() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth:288px ;\\nheight:50px ;\\nborder-radius:50px ;\\npadding:0 10px ;\\noutline:none ;\\nborder:3px solid \",\n        \";\\n\\nfont-size:20px ;\\nfont-weight:600 ;\\n  ::placeholder {\\n    \\n  }\\n\"\n    ]);\n    _templateObject12 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject13() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ncolor:#fff !important;\\nfont-size:18px ;\\npadding:10px 15px;\\nborder:none ;\\nborder-radius:8px ;\\ntransition:all 0.5 ease-in-out ;\\nbackground-color:\",\n        \" ;\\nfloat:left;\\nz-index:10;\\n&:hover{\\n color:#fff !important;\\n box-shadow:\",\n        \" !important;\\n transform:scale(1.1)!important;\\n}\\n\"\n    ]);\n    _templateObject13 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst fadein = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject());\nconst BoxConatiner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst AlertBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2(), (props)=>props.theme.blue2, (props)=>props.theme.alertBoxshdow, (props)=>props.theme.textStrong, fadein);\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst Page = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4(), (props)=>\"url(\".concat(props.bg, \")\"));\nconst ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5(), Page, (props)=>props.theme.grayBorder, (props)=>props.theme.grayBorder, (props)=>props.theme.grayBorder);\n///////////////////////////////////////////////////////////\nconst ConatinerInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6(), (props)=>props.theme.textStrong, (props)=>props.theme.textStrong, (props)=>props.theme.textStrong);\nconst Authors = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7(), (props)=>props.theme.orange);\nconst Discription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject8());\nconst Price = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject9(), (props)=>props.theme.textStrong);\nconst BtnConatiner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject10());\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject11(), (props)=>props.theme.orange, (props)=>props.theme.orange, (props)=>props.theme.orange, (props)=>props.theme.textStrong);\nconst Input = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input(_templateObject12(), (props)=>props.theme.grayBorder);\nconst SeeCardBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject13(), (props)=>props.theme.orange, (props)=>props.theme.boxshadow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2svc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBRXRELE1BQU1FLFNBQVNELDREQUFTQTtBQUtqQixNQUFNRSxlQUFlSCw2REFBVSxxQkFJcEM7QUFDSyxNQUFNSyxXQUFXTCw2REFBVSxxQkFDZk0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDQyxLQUFLLEVBZTdCRixDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNFLGFBQWEsRUFDcENILENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ0csVUFBVSxFQVN6QlIsUUFHWjtBQUNLLE1BQU1TLFlBQVVYLDZEQUFVLHFCQVVoQztBQUdNLE1BQU1ZLE9BQUtaLDZEQUFVLHFCQVNOLENBQUNNLFFBQVUsT0FBZ0IsT0FBVEEsTUFBTU8sRUFBRSxFQUFDLE1BNEJoRDtBQUdNLE1BQU1DLFdBQVNkLDZEQUFVLHFCQVc1QlksTUFHc0JOLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ1EsVUFBVSxFQU01QlQsQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDUSxVQUFVLEVBSzdCVCxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNRLFVBQVUsRUFxQnZEO0FBQ0QsMkRBQTJEO0FBRXBELE1BQU1DLGdCQUFjaEIsNkRBQVUscUJBS3pCTSxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNHLFVBQVUsRUFLN0JKLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ0csVUFBVSxFQUM3QkosQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDRyxVQUFVLEVBR3hDO0FBQ00sTUFBTU8sVUFBUWpCLDZEQUFVLHFCQUd2Qk0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDVyxNQUFNLEVBRWhDO0FBQ00sTUFBTUMsY0FBWW5CLDZEQUFVLHFCQUdsQztBQUNNLE1BQU1vQixRQUFNcEIsNkRBQVUscUJBR3JCTSxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNHLFVBQVUsRUFDcEM7QUFDTSxNQUFNVyxlQUFjckIsNkRBQVUsc0JBRXBDO0FBQ00sTUFBTXNCLFNBQU90QixnRUFBYSxzQkFNZE0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDVyxNQUFNLEVBQ3BDWixDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNXLE1BQU0sRUFLckJaLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ1csTUFBTSxFQUNkWixDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNHLFVBQVUsRUFHbkQ7QUFFTSxNQUFNYyxRQUFReEIsK0RBQVksc0JBTWRNLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ1EsVUFBVSxFQU85QztBQUVLLE1BQU1XLGFBQVcxQixnRUFBYSxzQkFPbEJNLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ1csTUFBTSxFQUs5QlosQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDb0IsU0FBUyxFQUd6QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jvb2svc3R5bGVzLnRzPzg2ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCAseyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IGZhZGVpbiA9IGtleWZyYW1lc2BcclxuZnJvbSB7IG9wYWNpdHk6IDA7dG9wOi01MHB4IH1cclxuICAgIHRvIHsgb3BhY2l0eToxO3RvcDowcHggfTtcclxuICAgIFxyXG5gO1xyXG5leHBvcnQgY29uc3QgQm94Q29uYXRpbmVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246cmVsYXRpdmUgO1xyXG5cclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBBbGVydEJveCA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUuYmx1ZTJ9IDtcclxuYm9yZGVyLXJhZGl1czo4cHggO1xyXG5tYXgtd2lkdGg6IDE3MjBweDtcclxuZGlzcGxheTpmbGV4IDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4gO1xyXG5hbGlnbi1pdGVtczpjZW50ZXIgO1xyXG5cclxuICBsZWZ0OiAwOyBcclxuICByaWdodDogMDsgXHJcbnRvcDotNTBweCA7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IFxyXG4gIG1hcmdpbi1yaWdodDogYXV0bzsgXHJcbiBwYWRkaW5nOiA1MHB4IDtcclxuIG9wYWNpdHk6MDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZSA7XHJcbiBib3gtc2hhZG93OiR7cHJvcHM9PnByb3BzLnRoZW1lLmFsZXJ0Qm94c2hkb3d9IDtcclxuIGNvbG9yOiAke3Byb3BzPT5wcm9wcy50aGVtZS50ZXh0U3Ryb25nfTtcclxuIGZvbnQtc2l6ZTogMjhweDtcclxuIGZvbnQtd2VpZ2h0OjcwMCA7XHJcbiY+ZGl2e1xyXG4gJj5zcGFue1xyXG4gIGZvbnQtc3R5bGU6aXRhbGljIDtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiB9fVxyXG4gJi5zaG93e1xyXG4gIGFuaW1hdGlvbjoke2ZhZGVpbn0gLjhzIC41cyBmb3J3YXJkcztcclxuICBcclxuIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lcj1zdHlsZWQuZGl2YFxyXG5cclxubWF4LXdpZHRoOiAxOTIwcHg7XHJcbiBtYXJnaW46MCBhdXRvIDtcclxuIHBhZGRpbmc6MTUwcHggNTBweCA7XHJcbiBkaXNwbGF5OiBncmlkO1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbmdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG5ncmlkLWNvbHVtbi1nYXA6IDBweDtcclxuZ3JpZC1yb3ctZ2FwOiAwcHg7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgUGFnZT1zdHlsZWQuZGl2PHtcclxuICBiZz86IHN0cmluZztcclxufT5gXHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDA7XHJcbnRvcDogMDtcclxud2lkdGg6IDQwMHB4O1xyXG5oZWlnaHQ6NDUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogJHsocHJvcHMpID0+IGB1cmwoJHtwcm9wcy5iZ30pYH07XHJcblxyXG5wYWRkaW5nOiAwO1xyXG5tYXJnaW46IDA7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvLyBPbGQgYnJvd3NlcnMgKi9cclxudHJhbnNmb3JtLW9yaWdpbjogMCA1MCUgMDtcclxudHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxudHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC4yNSwxLC4yNSwxKTtcclxuJi5wYWdlMXtcclxuIFxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbnRyYW5zZm9ybTogcm90YXRlWSgyMGRlZykgdHJhbnNsYXRlWigtMXB4KTtcclxufVxyXG4mLnBhZ2Uye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbnRyYW5zZm9ybTogcm90YXRlWSgzMGRlZykgdHJhbnNsYXRlWigtMnB4KTtcclxufVxyXG4mLnBhZ2Uze1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbnRyYW5zZm9ybTogcm90YXRlWSg0MGRlZykgdHJhbnNsYXRlWigtM3B4KTtcclxufVxyXG4mLmNvdmVye1xyXG4gIHotaW5kZXg6IDIgIWltcG9ydGFudDtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiA0MDBweDtcclxuaGVpZ2h0OjQ1MHB4O1xyXG5cclxudHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMHB4KTt9XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VEaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTogYmxvY2s7XHJcbmZsb2F0OiBsZWZ0O1xyXG53aWR0aDogNDAwcHg7XHJcbmhlaWdodDo0NTBweDtcclxubWFyZ2luOiAwO1xyXG5wYWRkaW5nOiAwO1xyXG4gYmFja2dyb3VuZDogIzMzMzsgXHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG50cmFuc2l0aW9uOmFsbCAwLjMgZWFzZSA7XHJcbiY6aG92ZXJ7XHJcbiAgJHtQYWdlfSB7XHJcbiAgICAgICYucGFnZTEge1xyXG4gICAgICAgZGlzcGxheTpibG9jayA7XHJcbiAgICAgICBib3JkZXI6MXB4IHNvbGlkICR7cHJvcHM9PnByb3BzLnRoZW1lLmdyYXlCb3JkZXJ9IDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTI1ZGVnKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgICYucGFnZTIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgJHtwcm9wcz0+cHJvcHMudGhlbWUuZ3JheUJvcmRlcn0gO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMjBkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgICYucGFnZTMge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgJHtwcm9wcz0+cHJvcHMudGhlbWUuZ3JheUJvcmRlcn0gO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTVkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgICYuY292ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMzBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuJj51bHtcclxuICBkaXNwbGF5OiBibG9jaztcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogNDAwcHg7XHJcbmhlaWdodDo0NTBweDtcclxubWFyZ2luOiAwcHg7XHJcbnBhZGRpbmc6IDA7XHJcbmxpc3Qtc3R5bGU6IG5vbmU7XHJcbnBlcnNwZWN0aXZlLW9yaWdpbjogMCA1MCUgMDtcclxucGVyc3BlY3RpdmU6IDgwMHB4O1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG59XHJcblxyXG5gXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgY29uc3QgQ29uYXRpbmVySW5mbz1zdHlsZWQuZGl2YFxyXG50ZXh0LWFsaWduOmxlZnQgO1xyXG5wYWRkaW5nLWJvdHRvbTogMTUwcHg7XHJcbiY+aDF7XHJcbiAgZm9udC1zaXplOjU2cHggO1xyXG4gICAgY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUudGV4dFN0cm9uZ307XHJcbiAgICBsZXR0ZXItc3BhY2luZzouMnJlbTtcclxufVxyXG4mPmgye1xyXG4gIGZvbnQtc2l6ZTozMnB4IDtcclxuICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLnRleHRTdHJvbmd9O1xyXG4gICAgY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUudGV4dFN0cm9uZ307XHJcbiAgICBtYXJnaW46MjBweCAwIDsgXHJcbn1cclxuYFxyXG5leHBvcnQgY29uc3QgQXV0aG9ycz1zdHlsZWQuZGl2YFxyXG5tYXJnaW46MTBweCAwIDtcclxuZm9udC1zaXplOjI4cHggO1xyXG5jb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5vcmFuZ2V9O1xyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgRGlzY3JpcHRpb249c3R5bGVkLmRpdmBcclxubWFyZ2luOjMwcHggMCA7XHJcbmZvbnQtc2l6ZToyNnB4IDtcclxuYFxyXG5leHBvcnQgY29uc3QgUHJpY2U9c3R5bGVkLmRpdmBcclxubWFyZ2luOjMwcHggMCA7XHJcbmZvbnQtc2l6ZTozMHB4IDtcclxuY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUudGV4dFN0cm9uZ307XHJcbmBcclxuZXhwb3J0IGNvbnN0IEJ0bkNvbmF0aW5lciA9c3R5bGVkLmRpdmBcclxuZGlzcGxheTpmbGV4IDtcclxuYFxyXG5leHBvcnQgY29uc3QgQnV0dG9uPXN0eWxlZC5idXR0b25gXHJcbndpZHRoOjE3MHB4IDtcclxuaGVpZ2h0OjUwcHggO1xyXG5ib3JkZXItcmFkaXVzOjUwcHggO1xyXG5vdXRsaW5lOm5vbmUgO1xyXG5tYXJnaW4tbGVmdDoyMHB4IDtcclxuYm9yZGVyOjNweCBzb2xpZCAke3Byb3BzPT5wcm9wcy50aGVtZS5vcmFuZ2V9O1xyXG5jb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5vcmFuZ2V9O1xyXG5mb250LXNpemU6MjBweCA7XHJcbmZvbnQtd2VpZ2h0OjYwMCA7XHJcbnRyYW5zaXRpb246YWxsIDAuMyBlYXNlLWluLW91dCA7XHJcbiY6aG92ZXJ7XHJcbiAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5vcmFuZ2V9O1xyXG4gICAgYm9yZGVyOjNweCBzb2xpZCAke3Byb3BzPT5wcm9wcy50aGVtZS50ZXh0U3Ryb25nfTsgXHJcbn1cclxuXHJcbmAgXHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbndpZHRoOjI4OHB4IDtcclxuaGVpZ2h0OjUwcHggO1xyXG5ib3JkZXItcmFkaXVzOjUwcHggO1xyXG5wYWRkaW5nOjAgMTBweCA7XHJcbm91dGxpbmU6bm9uZSA7XHJcbmJvcmRlcjozcHggc29saWQgJHtwcm9wcz0+cHJvcHMudGhlbWUuZ3JheUJvcmRlcn07XHJcblxyXG5mb250LXNpemU6MjBweCA7XHJcbmZvbnQtd2VpZ2h0OjYwMCA7XHJcbiAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICBcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VlQ2FyZEJ0bj1zdHlsZWQuYnV0dG9uYFxyXG5jb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbmZvbnQtc2l6ZToxOHB4IDtcclxucGFkZGluZzoxMHB4IDE1cHg7XHJcbmJvcmRlcjpub25lIDtcclxuYm9yZGVyLXJhZGl1czo4cHggO1xyXG50cmFuc2l0aW9uOmFsbCAwLjUgZWFzZS1pbi1vdXQgO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLm9yYW5nZX0gO1xyXG5mbG9hdDpsZWZ0O1xyXG56LWluZGV4OjEwO1xyXG4mOmhvdmVye1xyXG4gY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4gYm94LXNoYWRvdzoke3Byb3BzPT5wcm9wcy50aGVtZS5ib3hzaGFkb3d9ICFpbXBvcnRhbnQ7XHJcbiB0cmFuc2Zvcm06c2NhbGUoMS4xKSFpbXBvcnRhbnQ7XHJcbn1cclxuYFxyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwia2V5ZnJhbWVzIiwiZmFkZWluIiwiQm94Q29uYXRpbmVyIiwiZGl2IiwiQWxlcnRCb3giLCJwcm9wcyIsInRoZW1lIiwiYmx1ZTIiLCJhbGVydEJveHNoZG93IiwidGV4dFN0cm9uZyIsIkNvbnRhaW5lciIsIlBhZ2UiLCJiZyIsIkltYWdlRGl2IiwiZ3JheUJvcmRlciIsIkNvbmF0aW5lckluZm8iLCJBdXRob3JzIiwib3JhbmdlIiwiRGlzY3JpcHRpb24iLCJQcmljZSIsIkJ0bkNvbmF0aW5lciIsIkJ1dHRvbiIsImJ1dHRvbiIsIklucHV0IiwiaW5wdXQiLCJTZWVDYXJkQnRuIiwiYm94c2hhZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Book/styles.ts\n"));

/***/ })

});