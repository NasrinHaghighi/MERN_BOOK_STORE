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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertBox\": function() { return /* binding */ AlertBox; },\n/* harmony export */   \"Authors\": function() { return /* binding */ Authors; },\n/* harmony export */   \"BoxConatiner\": function() { return /* binding */ BoxConatiner; },\n/* harmony export */   \"BtnConatiner\": function() { return /* binding */ BtnConatiner; },\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"ConatinerInfo\": function() { return /* binding */ ConatinerInfo; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Discription\": function() { return /* binding */ Discription; },\n/* harmony export */   \"ImageDiv\": function() { return /* binding */ ImageDiv; },\n/* harmony export */   \"Input\": function() { return /* binding */ Input; },\n/* harmony export */   \"Page\": function() { return /* binding */ Page; },\n/* harmony export */   \"Price\": function() { return /* binding */ Price; },\n/* harmony export */   \"SeeCardBtn\": function() { return /* binding */ SeeCardBtn; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nfrom { opacity: 0;top:-50px }\\n    to { opacity:1;top:0px };\\n    \\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nposition:relative ;\\n\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nbackground-color:\",\n        \" ;\\nborder-radius:8px ;\\nmax-width: 1720px;\\ndisplay:flex ;\\njustify-content:space-between ;\\nalign-items:center ;\\n\\n  left: 0; \\n  right: 0; \\ntop:-50px ;\\n  margin-left: auto; \\n  margin-right: auto; \\n padding: 50px ;\\n opacity:0;\\n  position:absolute ;\\n box-shadow:\",\n        \" ;\\n color: \",\n        \";\\n font-size: 28px;\\n font-weight:700 ;\\n&>div{\\n &>span{\\n  font-style:italic ;\\n  color: #ffff;\\n }}\\n &.show{\\n  animation:\",\n        \" .8s .5s forwards;\\n  \\n }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\nmax-width: 1920px;\\n margin:0 auto ;\\n padding:150px 50px ;\\n display: grid;\\ngrid-template-columns: 1fr 3fr;\\ngrid-template-rows: 1fr;\\ngrid-column-gap: 0px;\\ngrid-row-gap: 0px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: block;\\nposition: absolute;\\nleft: 0;\\ntop: 0;\\nwidth: 450px;\\nheight: 580px;\\n\\npadding: 0;\\nmargin: 0;\\n background-color: #fff; // Old browsers */\\ntransform-origin: 0 50% 0;\\ntransform-style: preserve-3d;\\ntransition: all .5s cubic-bezier(0.25,1,.25,1);\\n&.page1{\\n \\n  display: none;\\ntransform: rotateY(20deg) translateZ(-1px);\\n}\\n&.page2{\\n  display: none;\\ntransform: rotateY(30deg) translateZ(-2px);\\n}\\n&.page3{\\n  display: none;\\ntransform: rotateY(40deg) translateZ(-3px);\\n}\\n&.cover{\\n  z-index: 2 !important;\\ndisplay: block;\\nwidth: 450px;\\nheight: 580px;\\n background:#333 !important;\\ntransform: rotateY(0deg) translateZ(0px);}\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: block;\\nfloat: left;\\nwidth: 450px;\\nheight: 580px;\\nmargin: 0;\\npadding: 0;\\n background: #333; \\ntransform: translate3d(0,0,0);\\n&:hover{\\n  \",\n        \" {\\n      &.page1 {\\n       display:block ;\\n       border:1px solid \",\n        \" ;\\n        transform: rotateY(-34deg);\\n      }\\n      display: block;\\n      &.page2 {\\n        transform: rotateY(-27deg);\\n      }\\n      &.page3 {\\n        display: block;\\n        transform: rotateY(-15deg);\\n      }\\n      &.cover {\\n        transform: rotateY(-40deg);\\n      }\\n    }\\n}\\n&>ul{\\n  display: block;\\nposition: relative;\\nwidth: 450px;\\nheight: 580px;\\nmargin: 0px;\\npadding: 0;\\nlist-style: none;\\nperspective-origin: 0 50% 0;\\nperspective: 800px;\\n-webkit-transform: translate3d(0,0,0);\\n}\\n\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ntext-align:left ;\\npadding-bottom: 150px;\\n&>h1{\\n  font-size:56px ;\\n    color:\",\n        \";\\n    letter-spacing:.2rem;\\n}\\n&>h2{\\n  font-size:32px ;\\n    color:\",\n        \";\\n    color:\",\n        \";\\n    margin:20px 0 ; \\n}\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:10px 0 ;\\nfont-size:28px ;\\ncolor:\",\n        \";\\n\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:30px 0 ;\\nfont-size:26px ;\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:30px 0 ;\\nfont-size:30px ;\\ncolor:\",\n        \";\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay:flex ;\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth:170px ;\\nheight:50px ;\\nborder-radius:50px ;\\noutline:none ;\\nmargin-left:20px ;\\nborder:3px solid \",\n        \";\\ncolor:\",\n        \";\\nfont-size:20px ;\\nfont-weight:600 ;\\ntransition:all 0.3 ease-in-out ;\\n&:hover{\\n    color:\",\n        \";\\n    border:3px solid \",\n        \"; \\n}\\n\\n\"\n    ]);\n    _templateObject11 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject12() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth:288px ;\\nheight:50px ;\\nborder-radius:50px ;\\npadding:0 10px ;\\noutline:none ;\\nborder:3px solid \",\n        \";\\n\\nfont-size:20px ;\\nfont-weight:600 ;\\n  ::placeholder {\\n    \\n  }\\n\"\n    ]);\n    _templateObject12 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject13() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ncolor:#fff !important;\\nfont-size:18px ;\\npadding:10px 15px;\\nborder:none ;\\nborder-radius:8px ;\\ntransition:all 0.5 ease-in-out ;\\nbackground-color:\",\n        \" ;\\nfloat:left;\\nz-index:10;\\n&:hover{\\n color:#fff !important;\\n box-shadow:\",\n        \" !important;\\n transform:scale(1.1)!important;\\n}\\n\"\n    ]);\n    _templateObject13 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst fadein = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject());\nconst BoxConatiner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst AlertBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2(), (props)=>props.theme.blue2, (props)=>props.theme.alertBoxshdow, (props)=>props.theme.textStrong, fadein);\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst Page = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nconst ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5(), Page, (props)=>props.theme.grayBorder);\n///////////////////////////////////////////////////////////\nconst ConatinerInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6(), (props)=>props.theme.textStrong, (props)=>props.theme.textStrong, (props)=>props.theme.textStrong);\nconst Authors = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7(), (props)=>props.theme.orange);\nconst Discription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject8());\nconst Price = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject9(), (props)=>props.theme.textStrong);\nconst BtnConatiner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject10());\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject11(), (props)=>props.theme.orange, (props)=>props.theme.orange, (props)=>props.theme.orange, (props)=>props.theme.textStrong);\nconst Input = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input(_templateObject12(), (props)=>props.theme.grayBorder);\nconst SeeCardBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject13(), (props)=>props.theme.orange, (props)=>props.theme.boxshadow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2svc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBRXRELE1BQU1FLFNBQVNELDREQUFTQTtBQUtqQixNQUFNRSxlQUFlSCw2REFBVSxxQkFJcEM7QUFDSyxNQUFNSyxXQUFXTCw2REFBVSxxQkFDZk0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDQyxLQUFLLEVBZTdCRixDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNFLGFBQWEsRUFDcENILENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ0csVUFBVSxFQVN6QlIsUUFHWjtBQUNLLE1BQU1TLFlBQVVYLDZEQUFVLHFCQVVoQztBQUdNLE1BQU1ZLE9BQUtaLDZEQUFVLHFCQWtDM0I7QUFHTSxNQUFNYSxXQUFTYiw2REFBVSxxQkFVNUJZLE1BR3NCTixDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNPLFVBQVUsRUE2QnREO0FBQ0QsMkRBQTJEO0FBRXBELE1BQU1DLGdCQUFjZiw2REFBVSxxQkFLekJNLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ0csVUFBVSxFQUs3QkosQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDRyxVQUFVLEVBQzdCSixDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNHLFVBQVUsRUFHeEM7QUFDTSxNQUFNTSxVQUFRaEIsNkRBQVUscUJBR3ZCTSxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNVLE1BQU0sRUFFaEM7QUFDTSxNQUFNQyxjQUFZbEIsNkRBQVUscUJBR2xDO0FBQ00sTUFBTW1CLFFBQU1uQiw2REFBVSxxQkFHckJNLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ0csVUFBVSxFQUNwQztBQUNNLE1BQU1VLGVBQWNwQiw2REFBVSxzQkFFcEM7QUFDTSxNQUFNcUIsU0FBT3JCLGdFQUFhLHNCQU1kTSxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNVLE1BQU0sRUFDcENYLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ1UsTUFBTSxFQUtyQlgsQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDVSxNQUFNLEVBQ2RYLENBQUFBLFFBQU9BLE1BQU1DLEtBQUssQ0FBQ0csVUFBVSxFQUduRDtBQUVNLE1BQU1hLFFBQVF2QiwrREFBWSxzQkFNZE0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDTyxVQUFVLEVBTzlDO0FBRUssTUFBTVcsYUFBV3pCLGdFQUFhLHNCQU9sQk0sQ0FBQUEsUUFBT0EsTUFBTUMsS0FBSyxDQUFDVSxNQUFNLEVBSzlCWCxDQUFBQSxRQUFPQSxNQUFNQyxLQUFLLENBQUNtQixTQUFTLEVBR3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9vay9zdHlsZXMudHM/ODZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkICx7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgZmFkZWluID0ga2V5ZnJhbWVzYFxyXG5mcm9tIHsgb3BhY2l0eTogMDt0b3A6LTUwcHggfVxyXG4gICAgdG8geyBvcGFjaXR5OjE7dG9wOjBweCB9O1xyXG4gICAgXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCb3hDb25hdGluZXIgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjpyZWxhdGl2ZSA7XHJcblxyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IEFsZXJ0Qm94ID0gc3R5bGVkLmRpdmBcclxuYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS5ibHVlMn0gO1xyXG5ib3JkZXItcmFkaXVzOjhweCA7XHJcbm1heC13aWR0aDogMTcyMHB4O1xyXG5kaXNwbGF5OmZsZXggO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbiA7XHJcbmFsaWduLWl0ZW1zOmNlbnRlciA7XHJcblxyXG4gIGxlZnQ6IDA7IFxyXG4gIHJpZ2h0OiAwOyBcclxudG9wOi01MHB4IDtcclxuICBtYXJnaW4tbGVmdDogYXV0bzsgXHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuIHBhZGRpbmc6IDUwcHggO1xyXG4gb3BhY2l0eTowO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlIDtcclxuIGJveC1zaGFkb3c6JHtwcm9wcz0+cHJvcHMudGhlbWUuYWxlcnRCb3hzaGRvd30gO1xyXG4gY29sb3I6ICR7cHJvcHM9PnByb3BzLnRoZW1lLnRleHRTdHJvbmd9O1xyXG4gZm9udC1zaXplOiAyOHB4O1xyXG4gZm9udC13ZWlnaHQ6NzAwIDtcclxuJj5kaXZ7XHJcbiAmPnNwYW57XHJcbiAgZm9udC1zdHlsZTppdGFsaWMgO1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuIH19XHJcbiAmLnNob3d7XHJcbiAgYW5pbWF0aW9uOiR7ZmFkZWlufSAuOHMgLjVzIGZvcndhcmRzO1xyXG4gIFxyXG4gfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyPXN0eWxlZC5kaXZgXHJcblxyXG5tYXgtd2lkdGg6IDE5MjBweDtcclxuIG1hcmdpbjowIGF1dG8gO1xyXG4gcGFkZGluZzoxNTBweCA1MHB4IDtcclxuIGRpc3BsYXk6IGdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbmdyaWQtY29sdW1uLWdhcDogMHB4O1xyXG5ncmlkLXJvdy1nYXA6IDBweDtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlPXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDA7XHJcbnRvcDogMDtcclxud2lkdGg6IDQ1MHB4O1xyXG5oZWlnaHQ6IDU4MHB4O1xyXG5cclxucGFkZGluZzogMDtcclxubWFyZ2luOiAwO1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgLy8gT2xkIGJyb3dzZXJzICovXHJcbnRyYW5zZm9ybS1vcmlnaW46IDAgNTAlIDA7XHJcbnRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbnRyYW5zaXRpb246IGFsbCAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsMSwuMjUsMSk7XHJcbiYucGFnZTF7XHJcbiBcclxuICBkaXNwbGF5OiBub25lO1xyXG50cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpIHRyYW5zbGF0ZVooLTFweCk7XHJcbn1cclxuJi5wYWdlMntcclxuICBkaXNwbGF5OiBub25lO1xyXG50cmFuc2Zvcm06IHJvdGF0ZVkoMzBkZWcpIHRyYW5zbGF0ZVooLTJweCk7XHJcbn1cclxuJi5wYWdlM3tcclxuICBkaXNwbGF5OiBub25lO1xyXG50cmFuc2Zvcm06IHJvdGF0ZVkoNDBkZWcpIHRyYW5zbGF0ZVooLTNweCk7XHJcbn1cclxuJi5jb3ZlcntcclxuICB6LWluZGV4OiAyICFpbXBvcnRhbnQ7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG53aWR0aDogNDUwcHg7XHJcbmhlaWdodDogNTgwcHg7XHJcbiBiYWNrZ3JvdW5kOiMzMzMgIWltcG9ydGFudDtcclxudHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMHB4KTt9XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VEaXY9c3R5bGVkLmRpdmBcclxuZGlzcGxheTogYmxvY2s7XHJcbmZsb2F0OiBsZWZ0O1xyXG53aWR0aDogNDUwcHg7XHJcbmhlaWdodDogNTgwcHg7XHJcbm1hcmdpbjogMDtcclxucGFkZGluZzogMDtcclxuIGJhY2tncm91bmQ6ICMzMzM7IFxyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuJjpob3ZlcntcclxuICAke1BhZ2V9IHtcclxuICAgICAgJi5wYWdlMSB7XHJcbiAgICAgICBkaXNwbGF5OmJsb2NrIDtcclxuICAgICAgIGJvcmRlcjoxcHggc29saWQgJHtwcm9wcz0+cHJvcHMudGhlbWUuZ3JheUJvcmRlcn0gO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMzRkZWcpO1xyXG4gICAgICB9XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAmLnBhZ2UyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTI3ZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAmLnBhZ2UzIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE1ZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAmLmNvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTQwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiY+dWx7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxud2lkdGg6IDQ1MHB4O1xyXG5oZWlnaHQ6IDU4MHB4O1xyXG5tYXJnaW46IDBweDtcclxucGFkZGluZzogMDtcclxubGlzdC1zdHlsZTogbm9uZTtcclxucGVyc3BlY3RpdmUtb3JpZ2luOiAwIDUwJSAwO1xyXG5wZXJzcGVjdGl2ZTogODAwcHg7XHJcbi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbn1cclxuXHJcbmBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBjb25zdCBDb25hdGluZXJJbmZvPXN0eWxlZC5kaXZgXHJcbnRleHQtYWxpZ246bGVmdCA7XHJcbnBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuJj5oMXtcclxuICBmb250LXNpemU6NTZweCA7XHJcbiAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS50ZXh0U3Ryb25nfTtcclxuICAgIGxldHRlci1zcGFjaW5nOi4ycmVtO1xyXG59XHJcbiY+aDJ7XHJcbiAgZm9udC1zaXplOjMycHggO1xyXG4gICAgY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUudGV4dFN0cm9uZ307XHJcbiAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS50ZXh0U3Ryb25nfTtcclxuICAgIG1hcmdpbjoyMHB4IDAgOyBcclxufVxyXG5gXHJcbmV4cG9ydCBjb25zdCBBdXRob3JzPXN0eWxlZC5kaXZgXHJcbm1hcmdpbjoxMHB4IDAgO1xyXG5mb250LXNpemU6MjhweCA7XHJcbmNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLm9yYW5nZX07XHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBEaXNjcmlwdGlvbj1zdHlsZWQuZGl2YFxyXG5tYXJnaW46MzBweCAwIDtcclxuZm9udC1zaXplOjI2cHggO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBQcmljZT1zdHlsZWQuZGl2YFxyXG5tYXJnaW46MzBweCAwIDtcclxuZm9udC1zaXplOjMwcHggO1xyXG5jb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS50ZXh0U3Ryb25nfTtcclxuYFxyXG5leHBvcnQgY29uc3QgQnRuQ29uYXRpbmVyID1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXggO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBCdXR0b249c3R5bGVkLmJ1dHRvbmBcclxud2lkdGg6MTcwcHggO1xyXG5oZWlnaHQ6NTBweCA7XHJcbmJvcmRlci1yYWRpdXM6NTBweCA7XHJcbm91dGxpbmU6bm9uZSA7XHJcbm1hcmdpbi1sZWZ0OjIwcHggO1xyXG5ib3JkZXI6M3B4IHNvbGlkICR7cHJvcHM9PnByb3BzLnRoZW1lLm9yYW5nZX07XHJcbmNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLm9yYW5nZX07XHJcbmZvbnQtc2l6ZToyMHB4IDtcclxuZm9udC13ZWlnaHQ6NjAwIDtcclxudHJhbnNpdGlvbjphbGwgMC4zIGVhc2UtaW4tb3V0IDtcclxuJjpob3ZlcntcclxuICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLm9yYW5nZX07XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkICR7cHJvcHM9PnByb3BzLnRoZW1lLnRleHRTdHJvbmd9OyBcclxufVxyXG5cclxuYCBcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxud2lkdGg6Mjg4cHggO1xyXG5oZWlnaHQ6NTBweCA7XHJcbmJvcmRlci1yYWRpdXM6NTBweCA7XHJcbnBhZGRpbmc6MCAxMHB4IDtcclxub3V0bGluZTpub25lIDtcclxuYm9yZGVyOjNweCBzb2xpZCAke3Byb3BzPT5wcm9wcy50aGVtZS5ncmF5Qm9yZGVyfTtcclxuXHJcbmZvbnQtc2l6ZToyMHB4IDtcclxuZm9udC13ZWlnaHQ6NjAwIDtcclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIFxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWVDYXJkQnRuPXN0eWxlZC5idXR0b25gXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuZm9udC1zaXplOjE4cHggO1xyXG5wYWRkaW5nOjEwcHggMTVweDtcclxuYm9yZGVyOm5vbmUgO1xyXG5ib3JkZXItcmFkaXVzOjhweCA7XHJcbnRyYW5zaXRpb246YWxsIDAuNSBlYXNlLWluLW91dCA7XHJcbmJhY2tncm91bmQtY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUub3JhbmdlfSA7XHJcbmZsb2F0OmxlZnQ7XHJcbnotaW5kZXg6MTA7XHJcbiY6aG92ZXJ7XHJcbiBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiBib3gtc2hhZG93OiR7cHJvcHM9PnByb3BzLnRoZW1lLmJveHNoYWRvd30gIWltcG9ydGFudDtcclxuIHRyYW5zZm9ybTpzY2FsZSgxLjEpIWltcG9ydGFudDtcclxufVxyXG5gXHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJrZXlmcmFtZXMiLCJmYWRlaW4iLCJCb3hDb25hdGluZXIiLCJkaXYiLCJBbGVydEJveCIsInByb3BzIiwidGhlbWUiLCJibHVlMiIsImFsZXJ0Qm94c2hkb3ciLCJ0ZXh0U3Ryb25nIiwiQ29udGFpbmVyIiwiUGFnZSIsIkltYWdlRGl2IiwiZ3JheUJvcmRlciIsIkNvbmF0aW5lckluZm8iLCJBdXRob3JzIiwib3JhbmdlIiwiRGlzY3JpcHRpb24iLCJQcmljZSIsIkJ0bkNvbmF0aW5lciIsIkJ1dHRvbiIsImJ1dHRvbiIsIklucHV0IiwiaW5wdXQiLCJTZWVDYXJkQnRuIiwiYm94c2hhZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Book/styles.ts\n"));

/***/ })

});