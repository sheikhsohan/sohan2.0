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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FloatingButton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FloatingButton.css */ \"(app-pages-browser)/./components/CustomButton/FloatingButton.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Import CSS for styling\nconst FloatingButton = ()=>{\n    _s();\n    const [isUpdating, setIsUpdating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setIsUpdating(true);\n            // Simulate update process completion\n            setTimeout(()=>{\n                setIsUpdating(false);\n            }, 2000); // Change this to match your actual update process time\n        }, 4000); // Show loader every 4 seconds, updating every 2 seconds\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"floating-button-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"floating-button\",\n            children: isUpdating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loader\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\CustomButton\\\\FloatingButton.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined) : \"Update\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\CustomButton\\\\FloatingButton.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\CustomButton\\\\FloatingButton.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FloatingButton, \"7+UrZ06mnJ7X1poz7flQ81s9k6Y=\");\n_c = FloatingButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FloatingButton);\nvar _c;\n$RefreshReg$(_c, \"FloatingButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9uL0Zsb2F0aW5nQnV0dG9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDbUQ7QUFDckIsQ0FBQyx5QkFBeUI7QUFFeEQsTUFBTUcsaUJBQWlCOztJQUNuQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUksV0FBV0MsWUFBWTtZQUMzQkYsY0FBYztZQUVkLHFDQUFxQztZQUNyQ0csV0FBVztnQkFDVEgsY0FBYztZQUNoQixHQUFHLE9BQU8sdURBQXVEO1FBQ25FLEdBQUcsT0FBTyx3REFBd0Q7UUFFbEUsT0FBTyxJQUFNSSxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBVTtrQkFDZiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWlAsMkJBQ0MsOERBQUNNO2dCQUFJQyxXQUFVOzs7Ozs0QkFFZjs7Ozs7Ozs7Ozs7QUFLVjtHQTNCSVI7S0FBQUE7QUE2Qk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXN0b21CdXR0b24vRmxvYXRpbmdCdXR0b24uanM/YjdmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL0Zsb2F0aW5nQnV0dG9uLmNzcyc7IC8vIEltcG9ydCBDU1MgZm9yIHN0eWxpbmdcclxuXHJcbmNvbnN0IEZsb2F0aW5nQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzVXBkYXRpbmcsIHNldElzVXBkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNVcGRhdGluZyh0cnVlKTtcclxuICBcclxuICAgICAgICAvLyBTaW11bGF0ZSB1cGRhdGUgcHJvY2VzcyBjb21wbGV0aW9uXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc1VwZGF0aW5nKGZhbHNlKTtcclxuICAgICAgICB9LCAyMDAwKTsgLy8gQ2hhbmdlIHRoaXMgdG8gbWF0Y2ggeW91ciBhY3R1YWwgdXBkYXRlIHByb2Nlc3MgdGltZVxyXG4gICAgICB9LCA0MDAwKTsgLy8gU2hvdyBsb2FkZXIgZXZlcnkgNCBzZWNvbmRzLCB1cGRhdGluZyBldmVyeSAyIHNlY29uZHNcclxuICBcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSwgW10pO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLWJ1dHRvblwiPlxyXG4gICAgICAgICAge2lzVXBkYXRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAnVXBkYXRlJ1xyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ0J1dHRvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGbG9hdGluZ0J1dHRvbiIsImlzVXBkYXRpbmciLCJzZXRJc1VwZGF0aW5nIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CustomButton/FloatingButton.js\n"));

/***/ })

});