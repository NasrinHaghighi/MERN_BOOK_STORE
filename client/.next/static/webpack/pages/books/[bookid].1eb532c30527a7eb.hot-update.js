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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlertBox\": function() { return /* binding */ AlertBox; },\n/* harmony export */   \"Authors\": function() { return /* binding */ Authors; },\n/* harmony export */   \"BookAuthor\": function() { return /* binding */ BookAuthor; },\n/* harmony export */   \"BookDetail\": function() { return /* binding */ BookDetail; },\n/* harmony export */   \"BookFormat\": function() { return /* binding */ BookFormat; },\n/* harmony export */   \"BookRate\": function() { return /* binding */ BookRate; },\n/* harmony export */   \"BookTitle\": function() { return /* binding */ BookTitle; },\n/* harmony export */   \"BoxConatiner\": function() { return /* binding */ BoxConatiner; },\n/* harmony export */   \"BtnConatiner\": function() { return /* binding */ BtnConatiner; },\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"ConatinerInfo\": function() { return /* binding */ ConatinerInfo; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Description\": function() { return /* binding */ Description; },\n/* harmony export */   \"Discription\": function() { return /* binding */ Discription; },\n/* harmony export */   \"ImageDiv\": function() { return /* binding */ ImageDiv; },\n/* harmony export */   \"Input\": function() { return /* binding */ Input; },\n/* harmony export */   \"Page\": function() { return /* binding */ Page; },\n/* harmony export */   \"Price\": function() { return /* binding */ Price; },\n/* harmony export */   \"SeeCardBtn\": function() { return /* binding */ SeeCardBtn; },\n/* harmony export */   \"Share\": function() { return /* binding */ Share; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nfrom { opacity: 0;top:-50px }\\n    to { opacity:1;top:0px };\\n    \\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nposition:relative ;\\n\\n\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmax-width: 1520px;\\n margin:0 auto ;\\n padding:50px 50px ;\\n display: grid;\\ngrid-template-columns: 1fr 3fr;\\ngrid-template-rows: 1fr;\\ngrid-column-gap: 0px;\\ngrid-row-gap: 0px;\\nbackground-color:#fff ;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nbackground-color:lightblue ;\\nmargin: 10px 35px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: block;\\nposition: absolute;\\nleft: 0;\\ntop: 0;\\nwidth: 400px;\\nheight:500px;\\nbackground: \",\n        \";\\nbackground-position: center;\\n  background-size: cover;\\npadding: 0;\\nmargin: 0;\\n background-color: #fff; // Old browsers */\\ntransform-origin: 0 50% 0;\\ntransform-style: preserve-3d;\\ntransition: all .5s cubic-bezier(0.25,1,.25,1);\\n&.page1{\\n \\n  display: none;\\ntransform: rotateY(20deg) translateZ(-1px);\\n}\\n&.page2{\\n  display: none;\\ntransform: rotateY(30deg) translateZ(-2px);\\n}\\n&.page3{\\n  display: none;\\ntransform: rotateY(40deg) translateZ(-3px);\\n}\\n&.cover{\\n  z-index: 2 !important;\\ndisplay: block;\\nwidth: 400px;\\nheight:500px;\\n\\ntransform: rotateY(0deg) translateZ(0px);}\\n\"\n    ]);\n    _templateObject10 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay: block;\\nfloat: left;\\nwidth: 400px;\\nheight:500px;\\nmargin: 0;\\npadding: 0;\\n background: #333; \\ntransform: translate3d(0,0,0);\\ntransition:all 0.3 ease ;\\n&:hover{\\n  \",\n        \" {\\n      &.page1 {\\n       display:block ;\\n       border:1px solid \",\n        \" ;\\n        transform: rotateY(-25deg);\\n      }\\n    \\n      &.page2 {\\n        display: block;\\n        border:1px solid \",\n        \" ;\\n        transform: rotateY(-20deg);\\n      }\\n      &.page3 {\\n        display: block;\\n        border:1px solid \",\n        \" ;\\n        transform: rotateY(-15deg);\\n      }\\n      &.cover {\\n        transform: rotateY(-30deg);\\n      }\\n    }\\n}\\n&>ul{\\n  display: block;\\nposition: relative;\\nwidth: 400px;\\nheight:450px;\\nmargin: 0px;\\npadding: 0;\\nlist-style: none;\\nperspective-origin: 0 50% 0;\\nperspective: 800px;\\ntransform: translate3d(0,0,0);\\n}\\n\\n\"\n    ]);\n    _templateObject11 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject12() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ntext-align:left ;\\npadding-bottom: 150px;\\n&>h1{\\n  font-size:56px ;\\n    color:\",\n        \";\\n    letter-spacing:.2rem;\\n}\\n&>h2{\\n  font-size:32px ;\\n    color:\",\n        \";\\n    color:\",\n        \";\\n    margin:20px 0 ; \\n}\\n\"\n    ]);\n    _templateObject12 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject13() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:10px 0 ;\\nfont-size:28px ;\\ncolor:\",\n        \";\\n\\n\"\n    ]);\n    _templateObject13 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject14() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:30px 0 ;\\nfont-size:26px ;\\n\"\n    ]);\n    _templateObject14 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject15() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin:30px 0 ;\\nfont-size:30px ;\\ncolor:\",\n        \";\\n\"\n    ]);\n    _templateObject15 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject16() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ndisplay:flex ;\\n\"\n    ]);\n    _templateObject16 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject17() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth:170px ;\\nheight:50px ;\\nborder-radius:50px ;\\noutline:none ;\\nmargin-left:20px ;\\nborder:3px solid \",\n        \";\\ncolor:\",\n        \";\\nfont-size:20px ;\\nfont-weight:600 ;\\ntransition:all 0.3 ease-in-out ;\\n&:hover{\\n    color:\",\n        \";\\n    border:3px solid \",\n        \"; \\n}\\n\\n\"\n    ]);\n    _templateObject17 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject18() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth:288px ;\\nheight:50px ;\\nborder-radius:50px ;\\npadding:0 10px ;\\noutline:none ;\\nborder:3px solid \",\n        \";\\n\\nfont-size:20px ;\\nfont-weight:600 ;\\n  ::placeholder {\\n    \\n  }\\n\"\n    ]);\n    _templateObject18 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject19() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\ncolor:#fff !important;\\nfont-size:18px ;\\npadding:10px 15px;\\nborder:none ;\\nborder-radius:8px ;\\ntransition:all 0.5 ease-in-out ;\\nbackground-color:\",\n        \" ;\\nfloat:left;\\nz-index:10;\\n&:hover{\\n color:#fff !important;\\n box-shadow:\",\n        \" !important;\\n transform:scale(1.1)!important;\\n}\\n\"\n    ]);\n    _templateObject19 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject20() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nbackground-color:\",\n        \" ;\\nborder-radius:8px ;\\nmax-width: 1720px;\\ndisplay:flex ;\\njustify-content:space-between ;\\nalign-items:center ;\\n\\n  left: 0; \\n  right: 0; \\ntop:-50px ;\\n  margin-left: auto; \\n  margin-right: auto; \\n padding: 50px ;\\n opacity:0;\\n  position:absolute ;\\n box-shadow:\",\n        \" ;\\n color: \",\n        \";\\n font-size: 28px;\\n font-weight:700 ;\\n&>div{\\n &>span{\\n  font-style:italic ;\\n  color: #ffff;\\n }}\\n &.show{\\n  animation:\",\n        \" .8s .5s forwards;\\n  \\n }\\n\"\n    ]);\n    _templateObject20 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst fadein = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(_templateObject());\nconst BoxConatiner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nconst BookDetail = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1(_templateObject4());\nconst BookRate = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5());\nconst BookFormat = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6());\nconst BookAuthor = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7());\nconst Share = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject8());\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject9());\n//////animated book*///////////////////////\nconst Page = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject10(), (props)=>\"url(\".concat(props.bg, \") no-repeat \"));\nconst ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject11(), Page, (props)=>props.theme.grayBorder, (props)=>props.theme.grayBorder, (props)=>props.theme.grayBorder);\n///////////////////////////////////////////////////////////\nconst ConatinerInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject12(), (props)=>props.theme.textStrong, (props)=>props.theme.textStrong, (props)=>props.theme.textStrong);\nconst Authors = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject13(), (props)=>props.theme.orange);\nconst Discription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject14());\nconst Price = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject15(), (props)=>props.theme.textStrong);\nconst BtnConatiner = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject16());\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject17(), (props)=>props.theme.orange, (props)=>props.theme.orange, (props)=>props.theme.orange, (props)=>props.theme.textStrong);\nconst Input = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input(_templateObject18(), (props)=>props.theme.grayBorder);\nconst SeeCardBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject19(), (props)=>props.theme.orange, (props)=>props.theme.boxshadow);\n/************Alert************* */ const AlertBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject20(), (props)=>props.theme.blue2, (props)=>props.theme.alertBoxshdow, (props)=>props.theme.textStrong, fadein);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jvb2svc3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUV0RCxNQUFNRSxTQUFTRCw0REFBU0E7QUFPakIsTUFBTUUsZUFBZUgsNkRBQVUscUJBSXBDO0FBRUssTUFBTUssWUFBVUwsNkRBQVUscUJBVWhDO0FBQ00sTUFBTU0sYUFBV04sNkRBQVUscUJBR2pDO0FBQ00sTUFBTU8sWUFBVVAsNERBQVMscUJBRS9CO0FBQ00sTUFBTVMsV0FBU1QsNkRBQVUscUJBRS9CO0FBQ00sTUFBTVUsYUFBV1YsNkRBQVUscUJBRWpDO0FBQ00sTUFBTVcsYUFBV1gsNkRBQVUscUJBRWpDO0FBQ00sTUFBTVksUUFBTVosNkRBQVUscUJBRTVCO0FBQ00sTUFBTWEsY0FBWWIsNkRBQVUscUJBRWxDO0FBRUQsMkNBQTJDO0FBQ3BDLE1BQU1jLE9BQUtkLDZEQUFVLHNCQVNkZSxDQUFBQSxRQUFTLE9BQWdCLE9BQVRBLE1BQU1DLEVBQUUsRUFBQyxpQkE2QnRDO0FBQ00sTUFBTUMsV0FBU2pCLDZEQUFVLHNCQVc1QmMsTUFHc0JDLENBQUFBLFFBQU9BLE1BQU1HLEtBQUssQ0FBQ0MsVUFBVSxFQU01QkosQ0FBQUEsUUFBT0EsTUFBTUcsS0FBSyxDQUFDQyxVQUFVLEVBSzdCSixDQUFBQSxRQUFPQSxNQUFNRyxLQUFLLENBQUNDLFVBQVUsRUFxQnZEO0FBQ0QsMkRBQTJEO0FBRXBELE1BQU1DLGdCQUFjcEIsNkRBQVUsc0JBS3pCZSxDQUFBQSxRQUFPQSxNQUFNRyxLQUFLLENBQUNHLFVBQVUsRUFLN0JOLENBQUFBLFFBQU9BLE1BQU1HLEtBQUssQ0FBQ0csVUFBVSxFQUM3Qk4sQ0FBQUEsUUFBT0EsTUFBTUcsS0FBSyxDQUFDRyxVQUFVLEVBR3hDO0FBQ00sTUFBTUMsVUFBUXRCLDZEQUFVLHNCQUd2QmUsQ0FBQUEsUUFBT0EsTUFBTUcsS0FBSyxDQUFDSyxNQUFNLEVBRWhDO0FBQ00sTUFBTUMsY0FBWXhCLDZEQUFVLHNCQUdsQztBQUNNLE1BQU15QixRQUFNekIsNkRBQVUsc0JBR3JCZSxDQUFBQSxRQUFPQSxNQUFNRyxLQUFLLENBQUNHLFVBQVUsRUFDcEM7QUFDTSxNQUFNSyxlQUFjMUIsNkRBQVUsc0JBRXBDO0FBQ00sTUFBTTJCLFNBQU8zQixnRUFBYSxzQkFNZGUsQ0FBQUEsUUFBT0EsTUFBTUcsS0FBSyxDQUFDSyxNQUFNLEVBQ3BDUixDQUFBQSxRQUFPQSxNQUFNRyxLQUFLLENBQUNLLE1BQU0sRUFLckJSLENBQUFBLFFBQU9BLE1BQU1HLEtBQUssQ0FBQ0ssTUFBTSxFQUNkUixDQUFBQSxRQUFPQSxNQUFNRyxLQUFLLENBQUNHLFVBQVUsRUFHbkQ7QUFFTSxNQUFNUSxRQUFRN0IsK0RBQVksc0JBTWRlLENBQUFBLFFBQU9BLE1BQU1HLEtBQUssQ0FBQ0MsVUFBVSxFQU85QztBQUVLLE1BQU1ZLGFBQVcvQixnRUFBYSxzQkFPbEJlLENBQUFBLFFBQU9BLE1BQU1HLEtBQUssQ0FBQ0ssTUFBTSxFQUs5QlIsQ0FBQUEsUUFBT0EsTUFBTUcsS0FBSyxDQUFDYyxTQUFTLEVBR3pDO0FBR0QsZ0NBQWdDLEdBR3pCLE1BQU1DLFdBQVdqQyw2REFBVSxzQkFDZmUsQ0FBQUEsUUFBT0EsTUFBTUcsS0FBSyxDQUFDZ0IsS0FBSyxFQWU3Qm5CLENBQUFBLFFBQU9BLE1BQU1HLEtBQUssQ0FBQ2lCLGFBQWEsRUFDcENwQixDQUFBQSxRQUFPQSxNQUFNRyxLQUFLLENBQUNHLFVBQVUsRUFTekJuQixRQUdaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9vay9zdHlsZXMudHM/ODZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkICx7IGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgZmFkZWluID0ga2V5ZnJhbWVzYFxyXG5mcm9tIHsgb3BhY2l0eTogMDt0b3A6LTUwcHggfVxyXG4gICAgdG8geyBvcGFjaXR5OjE7dG9wOjBweCB9O1xyXG4gICAgXHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJveENvbmF0aW5lciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOnJlbGF0aXZlIDtcclxuXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lcj1zdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6IDE1MjBweDtcclxuIG1hcmdpbjowIGF1dG8gO1xyXG4gcGFkZGluZzo1MHB4IDUwcHggO1xyXG4gZGlzcGxheTogZ3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG5ncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XHJcbmdyaWQtcm93LWdhcDogMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNmZmYgO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBCb29rRGV0YWlsPXN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3I6bGlnaHRibHVlIDtcclxubWFyZ2luOiAxMHB4IDM1cHg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEJvb2tUaXRsZT1zdHlsZWQuaDFgXHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBCb29rUmF0ZT1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgQm9va0Zvcm1hdD1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgQm9va0F1dGhvcj1zdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgU2hhcmU9c3R5bGVkLmRpdmBcclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uPXN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG4vLy8vLy9hbmltYXRlZCBib29rKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBQYWdlPXN0eWxlZC5kaXY8e1xyXG4gIGJnPzogc3RyaW5nO1xyXG59PmBcclxuZGlzcGxheTogYmxvY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogMDtcclxudG9wOiAwO1xyXG53aWR0aDogNDAwcHg7XHJcbmhlaWdodDo1MDBweDtcclxuYmFja2dyb3VuZDogJHtwcm9wcyA9PiBgdXJsKCR7cHJvcHMuYmd9KSBuby1yZXBlYXQgYH07XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5wYWRkaW5nOiAwO1xyXG5tYXJnaW46IDA7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvLyBPbGQgYnJvd3NlcnMgKi9cclxudHJhbnNmb3JtLW9yaWdpbjogMCA1MCUgMDtcclxudHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxudHJhbnNpdGlvbjogYWxsIC41cyBjdWJpYy1iZXppZXIoMC4yNSwxLC4yNSwxKTtcclxuJi5wYWdlMXtcclxuIFxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbnRyYW5zZm9ybTogcm90YXRlWSgyMGRlZykgdHJhbnNsYXRlWigtMXB4KTtcclxufVxyXG4mLnBhZ2Uye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbnRyYW5zZm9ybTogcm90YXRlWSgzMGRlZykgdHJhbnNsYXRlWigtMnB4KTtcclxufVxyXG4mLnBhZ2Uze1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbnRyYW5zZm9ybTogcm90YXRlWSg0MGRlZykgdHJhbnNsYXRlWigtM3B4KTtcclxufVxyXG4mLmNvdmVye1xyXG4gIHotaW5kZXg6IDIgIWltcG9ydGFudDtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiA0MDBweDtcclxuaGVpZ2h0OjUwMHB4O1xyXG5cclxudHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMHB4KTt9XHJcbmBcclxuZXhwb3J0IGNvbnN0IEltYWdlRGl2PXN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5mbG9hdDogbGVmdDtcclxud2lkdGg6IDQwMHB4O1xyXG5oZWlnaHQ6NTAwcHg7XHJcbm1hcmdpbjogMDtcclxucGFkZGluZzogMDtcclxuIGJhY2tncm91bmQ6ICMzMzM7IFxyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxudHJhbnNpdGlvbjphbGwgMC4zIGVhc2UgO1xyXG4mOmhvdmVye1xyXG4gICR7UGFnZX0ge1xyXG4gICAgICAmLnBhZ2UxIHtcclxuICAgICAgIGRpc3BsYXk6YmxvY2sgO1xyXG4gICAgICAgYm9yZGVyOjFweCBzb2xpZCAke3Byb3BzPT5wcm9wcy50aGVtZS5ncmF5Qm9yZGVyfSA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC0yNWRlZyk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAmLnBhZ2UyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICR7cHJvcHM9PnByb3BzLnRoZW1lLmdyYXlCb3JkZXJ9IDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTIwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAmLnBhZ2UzIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICR7cHJvcHM9PnByb3BzLnRoZW1lLmdyYXlCb3JkZXJ9IDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE1ZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAmLmNvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTMwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiY+dWx7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxud2lkdGg6IDQwMHB4O1xyXG5oZWlnaHQ6NDUwcHg7XHJcbm1hcmdpbjogMHB4O1xyXG5wYWRkaW5nOiAwO1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5wZXJzcGVjdGl2ZS1vcmlnaW46IDAgNTAlIDA7XHJcbnBlcnNwZWN0aXZlOiA4MDBweDtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbn1cclxuXHJcbmBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBjb25zdCBDb25hdGluZXJJbmZvPXN0eWxlZC5kaXZgXHJcbnRleHQtYWxpZ246bGVmdCA7XHJcbnBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuJj5oMXtcclxuICBmb250LXNpemU6NTZweCA7XHJcbiAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS50ZXh0U3Ryb25nfTtcclxuICAgIGxldHRlci1zcGFjaW5nOi4ycmVtO1xyXG59XHJcbiY+aDJ7XHJcbiAgZm9udC1zaXplOjMycHggO1xyXG4gICAgY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUudGV4dFN0cm9uZ307XHJcbiAgICBjb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS50ZXh0U3Ryb25nfTtcclxuICAgIG1hcmdpbjoyMHB4IDAgOyBcclxufVxyXG5gXHJcbmV4cG9ydCBjb25zdCBBdXRob3JzPXN0eWxlZC5kaXZgXHJcbm1hcmdpbjoxMHB4IDAgO1xyXG5mb250LXNpemU6MjhweCA7XHJcbmNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLm9yYW5nZX07XHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBEaXNjcmlwdGlvbj1zdHlsZWQuZGl2YFxyXG5tYXJnaW46MzBweCAwIDtcclxuZm9udC1zaXplOjI2cHggO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBQcmljZT1zdHlsZWQuZGl2YFxyXG5tYXJnaW46MzBweCAwIDtcclxuZm9udC1zaXplOjMwcHggO1xyXG5jb2xvcjoke3Byb3BzPT5wcm9wcy50aGVtZS50ZXh0U3Ryb25nfTtcclxuYFxyXG5leHBvcnQgY29uc3QgQnRuQ29uYXRpbmVyID1zdHlsZWQuZGl2YFxyXG5kaXNwbGF5OmZsZXggO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBCdXR0b249c3R5bGVkLmJ1dHRvbmBcclxud2lkdGg6MTcwcHggO1xyXG5oZWlnaHQ6NTBweCA7XHJcbmJvcmRlci1yYWRpdXM6NTBweCA7XHJcbm91dGxpbmU6bm9uZSA7XHJcbm1hcmdpbi1sZWZ0OjIwcHggO1xyXG5ib3JkZXI6M3B4IHNvbGlkICR7cHJvcHM9PnByb3BzLnRoZW1lLm9yYW5nZX07XHJcbmNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLm9yYW5nZX07XHJcbmZvbnQtc2l6ZToyMHB4IDtcclxuZm9udC13ZWlnaHQ6NjAwIDtcclxudHJhbnNpdGlvbjphbGwgMC4zIGVhc2UtaW4tb3V0IDtcclxuJjpob3ZlcntcclxuICAgIGNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLm9yYW5nZX07XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkICR7cHJvcHM9PnByb3BzLnRoZW1lLnRleHRTdHJvbmd9OyBcclxufVxyXG5cclxuYCBcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxud2lkdGg6Mjg4cHggO1xyXG5oZWlnaHQ6NTBweCA7XHJcbmJvcmRlci1yYWRpdXM6NTBweCA7XHJcbnBhZGRpbmc6MCAxMHB4IDtcclxub3V0bGluZTpub25lIDtcclxuYm9yZGVyOjNweCBzb2xpZCAke3Byb3BzPT5wcm9wcy50aGVtZS5ncmF5Qm9yZGVyfTtcclxuXHJcbmZvbnQtc2l6ZToyMHB4IDtcclxuZm9udC13ZWlnaHQ6NjAwIDtcclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIFxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWVDYXJkQnRuPXN0eWxlZC5idXR0b25gXHJcbmNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuZm9udC1zaXplOjE4cHggO1xyXG5wYWRkaW5nOjEwcHggMTVweDtcclxuYm9yZGVyOm5vbmUgO1xyXG5ib3JkZXItcmFkaXVzOjhweCA7XHJcbnRyYW5zaXRpb246YWxsIDAuNSBlYXNlLWluLW91dCA7XHJcbmJhY2tncm91bmQtY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUub3JhbmdlfSA7XHJcbmZsb2F0OmxlZnQ7XHJcbnotaW5kZXg6MTA7XHJcbiY6aG92ZXJ7XHJcbiBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiBib3gtc2hhZG93OiR7cHJvcHM9PnByb3BzLnRoZW1lLmJveHNoYWRvd30gIWltcG9ydGFudDtcclxuIHRyYW5zZm9ybTpzY2FsZSgxLjEpIWltcG9ydGFudDtcclxufVxyXG5gXHJcblxyXG5cclxuLyoqKioqKioqKioqKkFsZXJ0KioqKioqKioqKioqKiAqL1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBbGVydEJveCA9IHN0eWxlZC5kaXZgXHJcbmJhY2tncm91bmQtY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUuYmx1ZTJ9IDtcclxuYm9yZGVyLXJhZGl1czo4cHggO1xyXG5tYXgtd2lkdGg6IDE3MjBweDtcclxuZGlzcGxheTpmbGV4IDtcclxuanVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4gO1xyXG5hbGlnbi1pdGVtczpjZW50ZXIgO1xyXG5cclxuICBsZWZ0OiAwOyBcclxuICByaWdodDogMDsgXHJcbnRvcDotNTBweCA7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87IFxyXG4gIG1hcmdpbi1yaWdodDogYXV0bzsgXHJcbiBwYWRkaW5nOiA1MHB4IDtcclxuIG9wYWNpdHk6MDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZSA7XHJcbiBib3gtc2hhZG93OiR7cHJvcHM9PnByb3BzLnRoZW1lLmFsZXJ0Qm94c2hkb3d9IDtcclxuIGNvbG9yOiAke3Byb3BzPT5wcm9wcy50aGVtZS50ZXh0U3Ryb25nfTtcclxuIGZvbnQtc2l6ZTogMjhweDtcclxuIGZvbnQtd2VpZ2h0OjcwMCA7XHJcbiY+ZGl2e1xyXG4gJj5zcGFue1xyXG4gIGZvbnQtc3R5bGU6aXRhbGljIDtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiB9fVxyXG4gJi5zaG93e1xyXG4gIGFuaW1hdGlvbjoke2ZhZGVpbn0gLjhzIC41cyBmb3J3YXJkcztcclxuICBcclxuIH1cclxuYDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsImtleWZyYW1lcyIsImZhZGVpbiIsIkJveENvbmF0aW5lciIsImRpdiIsIkNvbnRhaW5lciIsIkJvb2tEZXRhaWwiLCJCb29rVGl0bGUiLCJoMSIsIkJvb2tSYXRlIiwiQm9va0Zvcm1hdCIsIkJvb2tBdXRob3IiLCJTaGFyZSIsIkRlc2NyaXB0aW9uIiwiUGFnZSIsInByb3BzIiwiYmciLCJJbWFnZURpdiIsInRoZW1lIiwiZ3JheUJvcmRlciIsIkNvbmF0aW5lckluZm8iLCJ0ZXh0U3Ryb25nIiwiQXV0aG9ycyIsIm9yYW5nZSIsIkRpc2NyaXB0aW9uIiwiUHJpY2UiLCJCdG5Db25hdGluZXIiLCJCdXR0b24iLCJidXR0b24iLCJJbnB1dCIsImlucHV0IiwiU2VlQ2FyZEJ0biIsImJveHNoYWRvdyIsIkFsZXJ0Qm94IiwiYmx1ZTIiLCJhbGVydEJveHNoZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Book/styles.ts\n"));

/***/ })

});