"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/CustomButton/FloatingButton.js":
/*!***************************************************!*\
  !*** ./components/CustomButton/FloatingButton.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FloatingButton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FloatingButton.css */ \"(app-pages-browser)/./components/CustomButton/FloatingButton.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Import CSS for styling\nconst FloatingButton = ()=>{\n    _s();\n    const [isUpdating, setIsUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleUpdate = ()=>{\n        setIsUpdating(true);\n        // Simulate update process\n        setTimeout(()=>{\n            setIsUpdating(false);\n        }, 2000); // Change this to match your actual update process time\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"floating-button-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"floating-button\",\n            onClick: handleUpdate,\n            children: isUpdating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loader\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\CustomButton\\\\FloatingButton.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined) : \"Updating ...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\CustomButton\\\\FloatingButton.js\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\CustomButton\\\\FloatingButton.js\",\n        lineNumber: 18,\n        columnNumber: 7\n    }, undefined);\n};\n_s(FloatingButton, \"Iu9QP35HOe9AU5k2QizHmZa0ji4=\");\n_c = FloatingButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FloatingButton);\nvar _c;\n$RefreshReg$(_c, \"FloatingButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9uL0Zsb2F0aW5nQnV0dG9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDVixDQUFDLHlCQUF5QjtBQUV4RCxNQUFNRSxpQkFBaUI7O0lBQ25CLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNSSxlQUFlO1FBQ25CRCxjQUFjO1FBRWQsMEJBQTBCO1FBQzFCRSxXQUFXO1lBQ1RGLGNBQWM7UUFDaEIsR0FBRyxPQUFPLHVEQUF1RDtJQUNuRTtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO1lBQWtCQyxTQUFTSjtzQkFDdkNGLDJCQUNDLDhEQUFDSTtnQkFBSUMsV0FBVTs7Ozs7NEJBRWY7Ozs7Ozs7Ozs7O0FBS1Y7R0F2QklOO0tBQUFBO0FBeUJOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9uL0Zsb2F0aW5nQnV0dG9uLmpzP2I3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vRmxvYXRpbmdCdXR0b24uY3NzJzsgLy8gSW1wb3J0IENTUyBmb3Igc3R5bGluZ1xyXG5cclxuY29uc3QgRmxvYXRpbmdCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNVcGRhdGluZywgc2V0SXNVcGRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgIHNldElzVXBkYXRpbmcodHJ1ZSk7XHJcbiAgXHJcbiAgICAgIC8vIFNpbXVsYXRlIHVwZGF0ZSBwcm9jZXNzXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldElzVXBkYXRpbmcoZmFsc2UpO1xyXG4gICAgICB9LCAyMDAwKTsgLy8gQ2hhbmdlIHRoaXMgdG8gbWF0Y2ggeW91ciBhY3R1YWwgdXBkYXRlIHByb2Nlc3MgdGltZVxyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmctYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmctYnV0dG9uXCIgb25DbGljaz17aGFuZGxlVXBkYXRlfT5cclxuICAgICAgICAgIHtpc1VwZGF0aW5nID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJ1VwZGF0aW5nIC4uLidcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmxvYXRpbmdCdXR0b24iLCJpc1VwZGF0aW5nIiwic2V0SXNVcGRhdGluZyIsImhhbmRsZVVwZGF0ZSIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CustomButton/FloatingButton.js\n"));

/***/ })

});