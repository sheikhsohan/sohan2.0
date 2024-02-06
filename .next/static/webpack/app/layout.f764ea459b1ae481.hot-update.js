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

/***/ "(app-pages-browser)/./components/DesignProjects.js":
/*!**************************************!*\
  !*** ./components/DesignProjects.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _popup_PopupModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup/PopupModel */ \"(app-pages-browser)/./components/popup/PopupModel.js\");\n// DesignProjects.js\n\n\n\nconst designProjects = [\n    {\n        title: \"Banner Design\",\n        imageUrl: \"/img/psd/banner.jpg\",\n        svgUrl: \"/img/svg/photoshop.svg\",\n        details: \"#React #NextJs #Tailwind\",\n        link: \"https://example.com/banner\"\n    },\n    {\n        title: \"Coffee Banner Design\",\n        imageUrl: \"/img/psd/coffie_banner.jpg\",\n        svgUrl: \"/img/svg/photoshop.svg\",\n        details: \"#React #NextJs #Tailwind\",\n        link: \"https://example.com/coffee-banner\"\n    },\n    {\n        title: \"Coffee Banner Design\",\n        imageUrl: \"/img/psd/coffie_banner.jpg\",\n        svgUrl: \"/img/svg/photoshop.svg\"\n    },\n    {\n        title: \"Coffee Banner Design\",\n        imageUrl: \"/img/psd/coffie_banner.jpg\",\n        svgUrl: \"/img/svg/photoshop.svg\"\n    }\n];\nconst DesignSection = (param)=>{\n    let { activeContent } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: designProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"design \".concat(activeContent(\"design\")),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"list_inner_psd\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"image\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/img/thumbs/1-1.jpg\",\n                                    alt: \"image\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"main\",\n                                    \"data-img-url\": project.imageUrl\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                            lineNumber: 40,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"overlay\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"popup-button\",\n                                onClick: ()=>handleModalOpen(index),\n                                children: \"Open Popup Modal\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                                lineNumber: 46,\n                                columnNumber: 9\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                            lineNumber: 44,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"svg\",\n                            src: project.svgUrl,\n                            alt: \"image\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                            lineNumber: 48,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"details\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: project.details\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: project.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                            lineNumber: 49,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_popup_PopupModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            project: project,\n                            isOpen: openModalIndex === index,\n                            onClose: handleModalClose\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                            lineNumber: 54,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, undefined)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\sohan\\\\Downloads\\\\iknow-personal-portfolio-react-nextjs-template-2024-01-30-07-26-40-utc\\\\package\\\\iknow\\\\components\\\\DesignProjects.js\",\n                lineNumber: 38,\n                columnNumber: 3\n            }, undefined))\n    }, void 0, false);\n};\n_c = DesignSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DesignSection);\nvar _c;\n$RefreshReg$(_c, \"DesignSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRGVzaWduUHJvamVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvQkFBb0I7O0FBRU07QUFDa0I7QUFFNUMsTUFBTUUsaUJBQWlCO0lBQ3JCO1FBQ0VDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxNQUFNO0lBQ1I7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDVjtDQUVEO0FBRUQsTUFBTUcsZ0JBQWdCO1FBQUMsRUFBRUMsYUFBYSxFQUFFO0lBQ3RDLHFCQUNFO2tCQUNHUCxlQUFlUSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ2xDLDhEQUFDQztnQkFBZUMsV0FBVyxVQUFrQyxPQUF4QkwsY0FBYzswQkFDakQsNEVBQUNNO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBSUMsS0FBSTtvQ0FBc0JDLEtBQUk7Ozs7Ozs4Q0FDbkMsOERBQUNIO29DQUFJRCxXQUFVO29DQUFPSyxnQkFBY1IsUUFBUVAsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUV0RCw4REFBQ1c7NEJBQUlELFdBQVU7c0NBRWIsNEVBQUNNO2dDQUFFQyxNQUFLO2dDQUFJUCxXQUFVO2dDQUFlUSxTQUFTLElBQU1DLGdCQUFnQlg7MENBQVE7Ozs7Ozs7Ozs7O3NDQUU5RSw4REFBQ0k7NEJBQUlGLFdBQVU7NEJBQU1HLEtBQUtOLFFBQVFOLE1BQU07NEJBQUVhLEtBQUk7Ozs7OztzQ0FDOUMsOERBQUNIOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ1U7OENBQU1iLFFBQVFMLE9BQU87Ozs7Ozs4Q0FDdEIsOERBQUNtQjs4Q0FBSWQsUUFBUVIsS0FBSzs7Ozs7Ozs7Ozs7O3NDQUdwQiw4REFBQ0YseURBQVVBOzRCQUFDVSxTQUFTQTs0QkFBU2UsUUFBUUMsbUJBQW1CZjs0QkFBT2dCLFNBQVNDOzs7Ozs7Ozs7Ozs7ZUFoQnBFakI7Ozs7OztBQXVCWDtLQTNCTUo7QUE2Qk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXNpZ25Qcm9qZWN0cy5qcz8yNjVkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERlc2lnblByb2plY3RzLmpzXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUG9wdXBNb2RhbCBmcm9tICcuL3BvcHVwL1BvcHVwTW9kZWwnO1xyXG5cclxuY29uc3QgZGVzaWduUHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdCYW5uZXIgRGVzaWduJyxcclxuICAgIGltYWdlVXJsOiAnL2ltZy9wc2QvYmFubmVyLmpwZycsXHJcbiAgICBzdmdVcmw6ICcvaW1nL3N2Zy9waG90b3Nob3Auc3ZnJyxcclxuICAgIGRldGFpbHM6ICcjUmVhY3QgI05leHRKcyAjVGFpbHdpbmQnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vZXhhbXBsZS5jb20vYmFubmVyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ29mZmVlIEJhbm5lciBEZXNpZ24nLFxyXG4gICAgaW1hZ2VVcmw6ICcvaW1nL3BzZC9jb2ZmaWVfYmFubmVyLmpwZycsXHJcbiAgICBzdmdVcmw6ICcvaW1nL3N2Zy9waG90b3Nob3Auc3ZnJyxcclxuICAgIGRldGFpbHM6ICcjUmVhY3QgI05leHRKcyAjVGFpbHdpbmQnLFxyXG4gICAgbGluazogJ2h0dHBzOi8vZXhhbXBsZS5jb20vY29mZmVlLWJhbm5lcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0NvZmZlZSBCYW5uZXIgRGVzaWduJyxcclxuICAgIGltYWdlVXJsOiAnL2ltZy9wc2QvY29mZmllX2Jhbm5lci5qcGcnLFxyXG4gICAgc3ZnVXJsOiAnL2ltZy9zdmcvcGhvdG9zaG9wLnN2ZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0NvZmZlZSBCYW5uZXIgRGVzaWduJyxcclxuICAgIGltYWdlVXJsOiAnL2ltZy9wc2QvY29mZmllX2Jhbm5lci5qcGcnLFxyXG4gICAgc3ZnVXJsOiAnL2ltZy9zdmcvcGhvdG9zaG9wLnN2ZycsXHJcbiAgfSxcclxuICAvLyBBZGQgbW9yZSBkZXNpZ24gcHJvamVjdHMgYXMgbmVlZGVkXHJcbl07XHJcblxyXG5jb25zdCBEZXNpZ25TZWN0aW9uID0gKHsgYWN0aXZlQ29udGVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtkZXNpZ25Qcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17YGRlc2lnbiAke2FjdGl2ZUNvbnRlbnQoJ2Rlc2lnbicpfWB9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyX3BzZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1nL3RodW1icy8xLTEuanBnXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiIGRhdGEtaW1nLXVybD17cHJvamVjdC5pbWFnZVVybH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxyXG4gICAgICAgIHsvKiBQb3B1cCBidXR0b24gd2l0aGluIHRoZSBvdmVybGF5IHNlY3Rpb24gKi99XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJwb3B1cC1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNb2RhbE9wZW4oaW5kZXgpfT5PcGVuIFBvcHVwIE1vZGFsPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJzdmdcIiBzcmM9e3Byb2plY3Quc3ZnVXJsfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgIDxzcGFuPntwcm9qZWN0LmRldGFpbHN9PC9zcGFuPlxyXG4gICAgICAgIDxoMz57cHJvamVjdC50aXRsZX08L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFJlbmRlciB0aGUgUG9wdXBNb2RhbCBjb21wb25lbnQgZm9yIGVhY2ggcHJvamVjdCAqL31cclxuICAgICAgPFBvcHVwTW9kYWwgcHJvamVjdD17cHJvamVjdH0gaXNPcGVuPXtvcGVuTW9kYWxJbmRleCA9PT0gaW5kZXh9IG9uQ2xvc2U9e2hhbmRsZU1vZGFsQ2xvc2V9IC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG4pKX1cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzaWduU2VjdGlvbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJQb3B1cE1vZGFsIiwiZGVzaWduUHJvamVjdHMiLCJ0aXRsZSIsImltYWdlVXJsIiwic3ZnVXJsIiwiZGV0YWlscyIsImxpbmsiLCJEZXNpZ25TZWN0aW9uIiwiYWN0aXZlQ29udGVudCIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsImxpIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0IiwiZGF0YS1pbWctdXJsIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwiaGFuZGxlTW9kYWxPcGVuIiwic3BhbiIsImgzIiwiaXNPcGVuIiwib3Blbk1vZGFsSW5kZXgiLCJvbkNsb3NlIiwiaGFuZGxlTW9kYWxDbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DesignProjects.js\n"));

/***/ })

});