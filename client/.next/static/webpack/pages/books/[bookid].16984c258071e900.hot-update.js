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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertBox\": function() { return /* binding */ AlertBox; },\n/* harmony export */   \"Authors\": function() { return /* binding */ Authors; },\n/* harmony export */   \"BoxConatiner\": function() { return /* binding */ BoxConatiner; },\n/* harmony export */   \"BtnConatiner\": function() { return /* binding */ BtnConatiner; },\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"ConatinerInfo\": function() { return /* binding */ ConatinerInfo; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Discription\": function() { return /* binding */ Discription; },\n/* harmony export */   \"ImageDiv\": function() { return /* binding */ ImageDiv; },\n/* harmony export */   \"Input\": function() { return /* binding */ Input; },\n/* harmony export */   \"Page\": function() { return /* binding */ Page; },\n/* harmony export */   \"Price\": function() { return /* binding */ Price; },\n/* harmony export */   \"SeeCardBtn\": function() { return /* binding */ SeeCardBtn; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nfrom { opacity: 0;top:-50px }\\n    to { opacity:1;top:0px };\\n    \\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nposition:relative ;\\n\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nbackground-color:\",\n        \" ;\\nborder-radius:8px ;\\nmax-width: 1720px;\\ndisplay:flex ;\\njustify-content:space-between ;\\nalign-items:center ;\\n\\n  left: 0; \\n  right: 0; \\ntop:-50px ;\\n  margin-left: auto; \\n  margin-right: auto; \\n padding: 50px ;\\n opacity:0;\\n  position:absolute ;\\n box-shadow:\",\n        \" ;\\n color: \",\n        \";\\n font-size: 28px;\\n font-weight:700 ;\\n&>div{\\n &>span{\\n  font-style:italic ;\\n  color: #ffff;\\n }}\\n &.show{\\n  animation:\",\n        \" .8s .5s forwards;\\n  \\n }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\nmax-width: 1920px;\\n margin:0 auto ;\\n padding:150px 50px ;\\n display: grid;\\ngrid-template-columns: 1fr 3fr;\\ngrid-template-rows: 1fr;\\ngrid-column-gap: 0px;\\ngrid-row-gap: 0px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: block;\\nposition: absolute;\\nleft: 0;\\ntop: 0;\\nwidth: 450px;\\nheight: 580px;\\n\\npadding: 0;\\nmargin: 0;\\n background-color: #fff; // Old browsers */\\ntransform-origin: 0 50% 0;\\ntransform-style: preserve-3d;\\ntransition: all .5s cubic-bezier(0.25,1,.25,1);\\n&.page1{\\n  border:1px solid red ;\\n  display: none;\\ntransform: rotateY(20deg) translateZ(-1px);\\n}\\n&.page2{\\n  display: none;\\ntransform: rotateY(30deg) translateZ(-2px);\\n}\\n&.page3{\\n  display: none;\\ntransform: rotateY(40deg) translateZ(-3px);\\n}\\n&.cover{\\n  z-index: 2 !important;\\ndisplay: block;\\nwidth: 450px;\\nheight: 580px;\\n background:#333 !important;\\ntransform: rotateY(0deg) translateZ(0px);}\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: block;\\nfloat: left;\\nwidth: 450px;\\nheight: 580px;\\nmargin: 0;\\npadding: 0;\\n background: #333; \\ntransform: translate3d(0,0,0);\\n&:hover{\\n  \",\n        \" {\\n      &.page1 {\\n        transform: rotateY(-34deg);\\n      }\\n      &.page2 {\\n        transform: rotateY(-27deg);\\n      }\\n      &.page3 {\\n        transform: rotateY(-15deg);\\n      }\\n      &.cover {\\n        transform: rotateY(-40deg);\\n      }\\n    }\\n}\\n&>ul{\\n  display: block;\\nposition: relative;\\nwidth: 450px;\\nheight: 580px;\\nmargin: 0px;\\npadding: 0;\\nlist-style: none;\\nperspective-origin: 0 50% 0;\\nperspective: 800px;\\n-webkit-transform: translate3d(0,0,0);\\n}\\n\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ntext-align:left ;\\npadding-bottom: 150px;\\n&>h1{\\n  font-size:56px ;\\n    color:\",\n        \";\\n    letter-spacing:.2rem;\\n}\\n&>h2{\\n  font-size:32px ;\\n    color:\",\n        \";\\n    color:\",\n        \";\\n    margin:20px 0 ; \\n}\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:10px 0 ;\\nfont-size:28px ;\\ncolor:\",\n        \";\\n\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:30px 0 ;\\nfont-size:26px ;\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:30px 0 ;\\nfont-size:30px ;\\ncolor:\",\n        \";\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay:flex ;\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth:170px ;\\nheight:50px ;\\nborder-radius:50px ;\\noutline:none ;\\nmargin-left:20px ;\\nborder:3px solid \",\n        \";\\ncolor:\",\n        \";\\nfont-size:20px ;\\nfont-weight:600 ;\\ntransition:all 0.3 ease-in-out ;\\n&:hover{\\n    color:\",\n        \";\\n    border:3px solid \",\n        \"; \\n}\\n\\n\"\n    ]);\n    _templateObject11 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject12() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth:288px ;\\nheight:50px ;\\nborder-radius:50px ;\\npadding:0 10px ;\\noutline:none ;\\nborder:3px solid \",\n        \";\\n\\nfont-size:20px ;\\nfont-weight:600 ;\\n  ::placeholder {\\n    \\n  }\\n\"\n    ]);\n    _templateObject12 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject13() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ncolor:#fff !important;\\nfont-size:18px ;\\npadding:10px 15px;\\nborder:none ;\\nborder-radius:8px ;\\ntransition:all 0.5 ease-in-out ;\\nbackground-color:\",\n        \" ;\\nfloat:left;\\nz-index:10;\\n&:hover{\\n color:#fff !important;\\n box-shadow:\",\n        \" !important;\\n transform:scale(1.1)!important;\\n}\\n\"\n    ]);\n    _templateObject13 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst fadein = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject());\nconst BoxConatiner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst AlertBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2(), (props)=>props.theme.blue2, (props)=>props.theme.alertBoxshdow, (props)=>props.theme.textStrong, fadein);\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst Page = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nconst ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5(), Page);\n///////////////////////////////////////////////////////////\nconst ConatinerInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6(), (props)=>props.theme.textStrong, (props)=>props.theme.textStrong, (props)=>props.theme.textStrong);\nconst Authors = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7(), (props)=>props.theme.orange);\nconst Discription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject8());\nconst Price = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject9(), (props)=>props.theme.textStrong);\nconst BtnConatiner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject10());\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject11(), (props)=>props.theme.orange, (props)=>props.theme.orange, (props)=>props.theme.orange, (props)=>props.theme.textStrong);\nconst Input = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input(_templateObject12(), (props)=>props.theme.grayBorder);\nconst SeeCardBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject13(), (props)=>props.theme.orange, (props)=>props.theme.boxshadow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2svc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFFdEQsTUFBTUUsU0FBU0QsNERBQVNBO0FBS2pCLE1BQU1FLGVBQWVILDZEQUFVLHFCQUlwQztBQUNLLE1BQU1LLFdBQVdMLDZEQUFVLHFCQUNmTSxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNDLEtBQUssRUFlN0JGLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ0UsYUFBYSxFQUNwQ0gsQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDRyxVQUFVLEVBU3pCUixRQUdaO0FBQ0ssTUFBTVMsWUFBVVgsNkRBQVUscUJBVWhDO0FBR00sTUFBTVksT0FBS1osNkRBQVUscUJBa0MzQjtBQUdNLE1BQU1hLFdBQVNiLDZEQUFVLHFCQVU1QlksTUE0Qkg7QUFDRCwyREFBMkQ7QUFFcEQsTUFBTUUsZ0JBQWNkLDZEQUFVLHFCQUt6Qk0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDRyxVQUFVLEVBSzdCSixDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNHLFVBQVUsRUFDN0JKLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ0csVUFBVSxFQUd4QztBQUNNLE1BQU1LLFVBQVFmLDZEQUFVLHFCQUd2Qk0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDUyxNQUFNLEVBRWhDO0FBQ00sTUFBTUMsY0FBWWpCLDZEQUFVLHFCQUdsQztBQUNNLE1BQU1rQixRQUFNbEIsNkRBQVUscUJBR3JCTSxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNHLFVBQVUsRUFDcEM7QUFDTSxNQUFNUyxlQUFjbkIsNkRBQVUsc0JBRXBDO0FBQ00sTUFBTW9CLFNBQU9wQixnRUFBYSxzQkFNZE0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDUyxNQUFNLEVBQ3BDVixDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNTLE1BQU0sRUFLckJWLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ1MsTUFBTSxFQUNkVixDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNHLFVBQVUsRUFHbkQ7QUFFTSxNQUFNWSxRQUFRdEIsK0RBQVksc0JBTWRNLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ2lCLFVBQVUsRUFPOUM7QUFFSyxNQUFNQyxhQUFXekIsZ0VBQWEsc0JBT2xCTSxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNTLE1BQU0sRUFLOUJWLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ21CLFNBQVMsRUFHekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Cb29rL3N0eWxlcy50cz84NmU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgLHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBmYWRlaW4gPSBrZXlmcmFtZXNgXHJcbmZyb20geyBvcGFjaXR5OiAwO3RvcDotNTBweCB9XHJcbiAgICB0byB7IG9wYWNpdHk6MTt0b3A6MHB4IH07XHJcbiAgICBcclxuYDtcclxuZXhwb3J0IGNvbnN0IEJveENvbmF0aW5lciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlIDtcclxuXHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgQWxlcnRCb3ggPSBzdHlsZWQuZGl2YFxyXG5iYWNrZ3JvdW5kLWNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmJsdWUyfSA7XHJcbmJvcmRlci1yYWRpdXM6OHB4IDtcclxubWF4LXdpZHRoOiAxNzIwcHg7XHJcbmRpc3BsYXk6ZmxleCA7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuIDtcclxuYWxpZ24taXRlbXM6Y2VudGVyIDtcclxuXHJcbiAgbGVmdDogMDsgXHJcbiAgcmlnaHQ6IDA7IFxyXG50b3A6LTUwcHggO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyBcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxyXG4gcGFkZGluZzogNTBweCA7XHJcbiBvcGFjaXR5OjA7XHJcbiAgcG9zaXRpb246YWJzb2x1dGUgO1xyXG4gYm94LXNoYWRvdzoke3Byb3BzPT5wcm9wcy50aGVtZS5hbGVydEJveHNoZG93fSA7XHJcbiBjb2xvcjogJHtwcm9wcz0+cHJvcHMudGhlbWUudGV4dFN0cm9uZ307XHJcbiBmb250LXNpemU6IDI4cHg7XHJcbiBmb250LXdlaWdodDo3MDAgO1xyXG4mPmRpdntcclxuICY+c3BhbntcclxuICBmb250LXN0eWxlOml0YWxpYyA7XHJcbiAgY29sb3I6ICNmZmZmO1xyXG4gfX1cclxuICYuc2hvd3tcclxuICBhbmltYXRpb246JHtmYWRlaW59IC44cyAuNXMgZm9yd2FyZHM7XHJcbiAgXHJcbiB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBDb250YWluZXI9c3R5bGVkLmRpdmBcclxuXHJcbm1heC13aWR0aDogMTkyMHB4O1xyXG4gbWFyZ2luOjAgYXV0byA7XHJcbiBwYWRkaW5nOjE1MHB4IDUwcHggO1xyXG4gZGlzcGxheTogZ3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG5ncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XHJcbmdyaWQtcm93LWdhcDogMHB4O1xyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2U9c3R5bGVkLmRpdmBcclxuZGlzcGxheTogYmxvY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogMDtcclxudG9wOiAwO1xyXG53aWR0aDogNDUwcHg7XHJcbmhlaWdodDogNTgwcHg7XHJcblxyXG5wYWRkaW5nOiAwO1xyXG5tYXJnaW46IDA7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvLyBPbGQgYnJvd3NlcnMgKi9cclxudHJhbnNmb3JtLW9yaWdpbjogMCA1MCUgMDtcclxudHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxudHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC4yNSwxLC4yNSwxKTtcclxuJi5wYWdlMXtcclxuICBib3JkZXI6MXB4IHNvbGlkIHJlZCA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxudHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKSB0cmFuc2xhdGVaKC0xcHgpO1xyXG59XHJcbiYucGFnZTJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxudHJhbnNmb3JtOiByb3RhdGVZKDMwZGVnKSB0cmFuc2xhdGVaKC0ycHgpO1xyXG59XHJcbiYucGFnZTN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxudHJhbnNmb3JtOiByb3RhdGVZKDQwZGVnKSB0cmFuc2xhdGVaKC0zcHgpO1xyXG59XHJcbiYuY292ZXJ7XHJcbiAgei1pbmRleDogMiAhaW1wb3J0YW50O1xyXG5kaXNwbGF5OiBibG9jaztcclxud2lkdGg6IDQ1MHB4O1xyXG5oZWlnaHQ6IDU4MHB4O1xyXG4gYmFja2dyb3VuZDojMzMzICFpbXBvcnRhbnQ7XHJcbnRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDBweCk7fVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlRGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5mbG9hdDogbGVmdDtcclxud2lkdGg6IDQ1MHB4O1xyXG5oZWlnaHQ6IDU4MHB4O1xyXG5tYXJnaW46IDA7XHJcbnBhZGRpbmc6IDA7XHJcbiBiYWNrZ3JvdW5kOiAjMzMzOyBcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiY6aG92ZXJ7XHJcbiAgJHtQYWdlfSB7XHJcbiAgICAgICYucGFnZTEge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgICYucGFnZTIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMjdkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgICYucGFnZTMge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTVkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgICYuY292ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtNDBkZWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuJj51bHtcclxuICBkaXNwbGF5OiBibG9jaztcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG53aWR0aDogNDUwcHg7XHJcbmhlaWdodDogNTgwcHg7XHJcbm1hcmdpbjogMHB4O1xyXG5wYWRkaW5nOiAwO1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5wZXJzcGVjdGl2ZS1vcmlnaW46IDAgNTAlIDA7XHJcbnBlcnNwZWN0aXZlOiA4MDBweDtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxufVxyXG5cclxuYFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbmF0aW5lckluZm89c3R5bGVkLmRpdmBcclxudGV4dC1hbGlnbjpsZWZ0IDtcclxucGFkZGluZy1ib3R0b206IDE1MHB4O1xyXG4mPmgxe1xyXG4gIGZvbnQtc2l6ZTo1NnB4IDtcclxuICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLnRleHRTdHJvbmd9O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6LjJyZW07XHJcbn1cclxuJj5oMntcclxuICBmb250LXNpemU6MzJweCA7XHJcbiAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS50ZXh0U3Ryb25nfTtcclxuICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLnRleHRTdHJvbmd9O1xyXG4gICAgbWFyZ2luOjIwcHggMCA7IFxyXG59XHJcbmBcclxuZXhwb3J0IGNvbnN0IEF1dGhvcnM9c3R5bGVkLmRpdmBcclxubWFyZ2luOjEwcHggMCA7XHJcbmZvbnQtc2l6ZToyOHB4IDtcclxuY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUub3JhbmdlfTtcclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IERpc2NyaXB0aW9uPXN0eWxlZC5kaXZgXHJcbm1hcmdpbjozMHB4IDAgO1xyXG5mb250LXNpemU6MjZweCA7XHJcbmBcclxuZXhwb3J0IGNvbnN0IFByaWNlPXN0eWxlZC5kaXZgXHJcbm1hcmdpbjozMHB4IDAgO1xyXG5mb250LXNpemU6MzBweCA7XHJcbmNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLnRleHRTdHJvbmd9O1xyXG5gXHJcbmV4cG9ydCBjb25zdCBCdG5Db25hdGluZXIgPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleCA7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbj1zdHlsZWQuYnV0dG9uYFxyXG53aWR0aDoxNzBweCA7XHJcbmhlaWdodDo1MHB4IDtcclxuYm9yZGVyLXJhZGl1czo1MHB4IDtcclxub3V0bGluZTpub25lIDtcclxubWFyZ2luLWxlZnQ6MjBweCA7XHJcbmJvcmRlcjozcHggc29saWQgJHtwcm9wcz0+cHJvcHMudGhlbWUub3JhbmdlfTtcclxuY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUub3JhbmdlfTtcclxuZm9udC1zaXplOjIwcHggO1xyXG5mb250LXdlaWdodDo2MDAgO1xyXG50cmFuc2l0aW9uOmFsbCAwLjMgZWFzZS1pbi1vdXQgO1xyXG4mOmhvdmVye1xyXG4gICAgY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUub3JhbmdlfTtcclxuICAgIGJvcmRlcjozcHggc29saWQgJHtwcm9wcz0+cHJvcHMudGhlbWUudGV4dFN0cm9uZ307IFxyXG59XHJcblxyXG5gIFxyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG53aWR0aDoyODhweCA7XHJcbmhlaWdodDo1MHB4IDtcclxuYm9yZGVyLXJhZGl1czo1MHB4IDtcclxucGFkZGluZzowIDEwcHggO1xyXG5vdXRsaW5lOm5vbmUgO1xyXG5ib3JkZXI6M3B4IHNvbGlkICR7cHJvcHM9PnByb3BzLnRoZW1lLmdyYXlCb3JkZXJ9O1xyXG5cclxuZm9udC1zaXplOjIwcHggO1xyXG5mb250LXdlaWdodDo2MDAgO1xyXG4gIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgXHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlZUNhcmRCdG49c3R5bGVkLmJ1dHRvbmBcclxuY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG5mb250LXNpemU6MThweCA7XHJcbnBhZGRpbmc6MTBweCAxNXB4O1xyXG5ib3JkZXI6bm9uZSA7XHJcbmJvcmRlci1yYWRpdXM6OHB4IDtcclxudHJhbnNpdGlvbjphbGwgMC41IGVhc2UtaW4tb3V0IDtcclxuYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5vcmFuZ2V9IDtcclxuZmxvYXQ6bGVmdDtcclxuei1pbmRleDoxMDtcclxuJjpob3ZlcntcclxuIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuIGJveC1zaGFkb3c6JHtwcm9wcz0+cHJvcHMudGhlbWUuYm94c2hhZG93fSAhaW1wb3J0YW50O1xyXG4gdHJhbnNmb3JtOnNjYWxlKDEuMSkhaW1wb3J0YW50O1xyXG59XHJcbmBcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsImtleWZyYW1lcyIsImZhZGVpbiIsIkJveENvbmF0aW5lciIsImRpdiIsIkFsZXJ0Qm94IiwicHJvcHMiLCJ0aGVtZSIsImJsdWUyIiwiYWxlcnRCb3hzaGRvdyIsInRleHRTdHJvbmciLCJDb250YWluZXIiLCJQYWdlIiwiSW1hZ2VEaXYiLCJDb25hdGluZXJJbmZvIiwiQXV0aG9ycyIsIm9yYW5nZSIsIkRpc2NyaXB0aW9uIiwiUHJpY2UiLCJCdG5Db25hdGluZXIiLCJCdXR0b24iLCJidXR0b24iLCJJbnB1dCIsImlucHV0IiwiZ3JheUJvcmRlciIsIlNlZUNhcmRCdG4iLCJib3hzaGFkb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Book/styles.ts\n"));

/***/ })

});