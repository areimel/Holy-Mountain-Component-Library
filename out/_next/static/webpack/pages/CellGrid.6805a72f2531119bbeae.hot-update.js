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
  var columns = _ref.columns;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cellGrid,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Cell, {
      className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cell,
      columns: function columns(props) {
        return props.columns;
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner + ' inner',
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Cell, {
      className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cell,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner + ' inner',
        children: "Lorem ipsum dolor sit amet,"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Cell, {
      className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.cell,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _CellGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner + ' inner',
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DZWxsR3JpZC9DZWxsR3JpZC5qcyJdLCJuYW1lcyI6WyJDZWxsIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJjb2x1bW5zIiwicGFkZGluZyIsImNlbGxJbm5lcldpZHRoIiwiQ2VsbEdyaWQiLCJzdHlsZXMiLCJjZWxsR3JpZCIsImNlbGwiLCJpbm5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUNZLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE9BQU4sSUFBaUIsR0FBckI7QUFBQSxDQURqQixFQUVFLFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLE9BQU4sSUFBaUIsTUFBckI7QUFBQSxDQUZQLEVBS0ssVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0csY0FBTixJQUF3QixPQUE1QjtBQUFBLENBTFYsQ0FBVjtLQUFNTixJO0FBWVMsU0FBU08sUUFBVCxPQUVaO0FBQUEsTUFEREgsT0FDQyxRQUREQSxPQUNDO0FBQ0Qsc0JBQ0M7QUFBSyxhQUFTLEVBQUVJLDREQUFNLENBQUNDLFFBQXZCO0FBQUEsNEJBRUEscUVBQUMsSUFBRDtBQUNFLGVBQVMsRUFBRUQsNERBQU0sQ0FBQ0UsSUFEcEI7QUFFRSxhQUFPLEVBQUUsaUJBQUFQLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNDLE9BQVY7QUFBQSxPQUZoQjtBQUFBLDZCQUtTO0FBQUssaUJBQVMsRUFBRUksNERBQU0sQ0FBQ0csS0FBUCxHQUFjLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBYUEscUVBQUMsSUFBRDtBQUFNLGVBQVMsRUFBRUgsNERBQU0sQ0FBQ0UsSUFBeEI7QUFBQSw2QkFFUztBQUFLLGlCQUFTLEVBQUVGLDREQUFNLENBQUNHLEtBQVAsR0FBYyxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiQSxlQXFCQSxxRUFBQyxJQUFEO0FBQU0sZUFBUyxFQUFFSCw0REFBTSxDQUFDRSxJQUF4QjtBQUFBLDZCQUVTO0FBQUssaUJBQVMsRUFBRUYsNERBQU0sQ0FBQ0csS0FBUCxHQUFjLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWdDRDtNQW5DdUJKLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ2VsbEdyaWQuNjgwNWE3MmYyNTMxMTE5YmJlYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9DZWxsR3JpZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENlbGwgPSBzdHlsZWQuZGl2YFxyXG5cdHdpZHRoOiBjYWxjKDEwMCUgLyAke3Byb3BzID0+IHByb3BzLmNvbHVtbnMgfHwgXCIzXCJ9KTsgXHJcblx0cGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy5wYWRkaW5nIHx8IFwiMjVweFwifTtcclxuXHJcblx0LmlubmVye1xyXG5cdFx0bWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLmNlbGxJbm5lcldpZHRoIHx8IFwiMzUwcHhcIn07XHJcblx0fVxyXG4gIH1cclxuXHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2VsbEdyaWQoeyBcclxuICBjb2x1bW5zLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICBcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbEdyaWR9ID5cclxuICBcdFx0XHJcblx0ICA8Q2VsbCBcclxuXHQgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH1cclxuXHQgICAgY29sdW1ucz17cHJvcHMgPT4gcHJvcHMuY29sdW1uc31cclxuXHQgID5cclxuXHRcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lciArJyBpbm5lcid9PlxyXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHJcblx0ICA8L0NlbGw+XHJcblxyXG5cdCAgPENlbGwgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH0+XHJcblx0XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXIgKycgaW5uZXInfT5cclxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdFxyXG5cdCAgPC9DZWxsPlxyXG5cclxuXHQgIDxDZWxsIGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9PlxyXG5cdFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlubmVyICsnIGlubmVyJ30+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHRcclxuXHQgIDwvQ2VsbD5cclxuXHJcblx0PC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=