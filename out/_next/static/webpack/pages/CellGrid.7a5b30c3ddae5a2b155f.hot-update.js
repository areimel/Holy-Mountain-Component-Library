webpackHotUpdate_N_E("pages/CellGrid",{

/***/ "./components/CellGrid/CellGrid.js":
/*!*****************************************!*\
  !*** ./components/CellGrid/CellGrid.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CellGrid; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellGrid.module.scss */ "./components/CellGrid/CellGrid.module.scss");
/* harmony import */ var _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "D:\\Dev\\Personal Sites\\Temp Tests\\Gatsby 1\\next-netlify-starter\\components\\CellGrid\\CellGrid.js";

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\twidth: calc(100% / ", "); \n\tpadding: ", ";\n\n\t.inner{\n\t\tmax-width: ", ";\n\t}\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Cell = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return props.columns || "3";
}, function (props) {
  return props.padding || "25px";
}, function (props) {
  return props.cellInnerWidth || "350px";
});
_c = Cell;
function CellGrid(_ref) {
  var columns = _ref.columns,
      cellInnerWidth = _ref.cellInnerWidth;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cellGrid,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Cell, {
      className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cell,
      columns: columns,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner + ' inner',
        cellInnerWidth: cellInnerWidth,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Cell, {
      className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cell,
      columns: columns,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner + ' inner',
        cellInnerWidth: cellInnerWidth,
        children: "Lorem ipsum dolor sit amet,"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Cell, {
      className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cell,
      columns: columns,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner + ' inner',
        cellInnerWidth: cellInnerWidth,
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 4
  }, this);
}
_c2 = CellGrid;

var _c, _c2;

$RefreshReg$(_c, "Cell");
$RefreshReg$(_c2, "CellGrid");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DZWxsR3JpZC9DZWxsR3JpZC5qcyJdLCJuYW1lcyI6WyJDZWxsIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJjb2x1bW5zIiwicGFkZGluZyIsImNlbGxJbm5lcldpZHRoIiwiQ2VsbEdyaWQiLCJzdHlsZXMiLCJjZWxsR3JpZCIsImNlbGwiLCJpbm5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUNZLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE9BQU4sSUFBaUIsR0FBckI7QUFBQSxDQURqQixFQUVFLFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLE9BQU4sSUFBaUIsTUFBckI7QUFBQSxDQUZQLEVBS0ssVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0csY0FBTixJQUF3QixPQUE1QjtBQUFBLENBTFYsQ0FBVjtLQUFNTixJO0FBWVMsU0FBU08sUUFBVCxPQUdaO0FBQUEsTUFGREgsT0FFQyxRQUZEQSxPQUVDO0FBQUEsTUFEREUsY0FDQyxRQUREQSxjQUNDO0FBQ0Qsc0JBQ0M7QUFBSyxhQUFTLEVBQUVFLDREQUFNLENBQUNDLFFBQXZCO0FBQUEsNEJBRUEscUVBQUMsSUFBRDtBQUNFLGVBQVMsRUFBRUQsNERBQU0sQ0FBQ0UsSUFEcEI7QUFFRSxhQUFPLEVBQUVOLE9BRlg7QUFBQSw2QkFJUztBQUFLLGlCQUFTLEVBQUVJLDREQUFNLENBQUNHLEtBQVAsR0FBYyxRQUE5QjtBQUF3QyxzQkFBYyxFQUFFTCxjQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQVdBLHFFQUFDLElBQUQ7QUFDRSxlQUFTLEVBQUVFLDREQUFNLENBQUNFLElBRHBCO0FBRUUsYUFBTyxFQUFFTixPQUZYO0FBQUEsNkJBSVM7QUFBSyxpQkFBUyxFQUFFSSw0REFBTSxDQUFDRyxLQUFQLEdBQWMsUUFBOUI7QUFBd0Msc0JBQWMsRUFBRUwsY0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEEsZUFvQkEscUVBQUMsSUFBRDtBQUNFLGVBQVMsRUFBRUUsNERBQU0sQ0FBQ0UsSUFEcEI7QUFFRSxhQUFPLEVBQUVOLE9BRlg7QUFBQSw2QkFJUztBQUFLLGlCQUFTLEVBQUVJLDREQUFNLENBQUNHLEtBQVAsR0FBYyxRQUE5QjtBQUF3QyxzQkFBYyxFQUFFTCxjQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFnQ0Q7TUFwQ3VCQyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NlbGxHcmlkLjdhNWIzMGMzZGRhZTVhMmIxNTVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2VsbEdyaWQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDZWxsID0gc3R5bGVkLmRpdmBcclxuXHR3aWR0aDogY2FsYygxMDAlIC8gJHtwcm9wcyA9PiBwcm9wcy5jb2x1bW5zIHx8IFwiM1wifSk7IFxyXG5cdHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZyB8fCBcIjI1cHhcIn07XHJcblxyXG5cdC5pbm5lcntcclxuXHRcdG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy5jZWxsSW5uZXJXaWR0aCB8fCBcIjM1MHB4XCJ9O1xyXG5cdH1cclxuICB9XHJcblxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbGxHcmlkKHsgXHJcbiAgY29sdW1ucyxcclxuICBjZWxsSW5uZXJXaWR0aCxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgXHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGxHcmlkfSA+XHJcbiAgXHRcdFxyXG5cdCAgPENlbGwgXHJcblx0ICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9XHJcblx0ICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcblx0ICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXIgKycgaW5uZXInfSBjZWxsSW5uZXJXaWR0aD17Y2VsbElubmVyV2lkdGh9PlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0ICA8L0NlbGw+XHJcblxyXG5cdCAgPENlbGwgXHJcblx0ICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9XHJcblx0ICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcblx0ICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXIgKycgaW5uZXInfSBjZWxsSW5uZXJXaWR0aD17Y2VsbElubmVyV2lkdGh9PlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0ICA8L0NlbGw+XHJcblxyXG5cdCAgPENlbGwgXHJcblx0ICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9XHJcblx0ICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcblx0ICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXIgKycgaW5uZXInfSBjZWxsSW5uZXJXaWR0aD17Y2VsbElubmVyV2lkdGh9PlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0ICA8L0NlbGw+XHJcblxyXG5cdDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9