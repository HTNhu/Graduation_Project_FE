(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{nVeD:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RIqP");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("J4zp");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VXEj");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("jq9l");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Wcq6");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("wd/R");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar ListComments = function ListComments(_ref) {\n  var idSeminar = _ref.idSeminar,\n      onScrollEnd = _ref.onScrollEnd;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      comment = _useState2[0],\n      setComment = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),\n      comments = _useState4[0],\n      setComments = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {\n    firebase_app__WEBPACK_IMPORTED_MODULE_6__["database"]().ref("seminars/".concat(idSeminar, "/comments")).on(\'child_added\', function (snapshot) {\n      if (snapshot.val()) {\n        setComment(snapshot.val());\n      }\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(function () {\n    if (comment) {\n      setComments([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(comments), [comment]));\n      onScrollEnd();\n    }\n  }, [comment]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n    dataSource: comments,\n    itemLayout: "horizontal",\n    renderItem: function renderItem(props) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n        style: {\n          margin: \'0 10px\'\n        }\n      }, props, {\n        datetime: moment__WEBPACK_IMPORTED_MODULE_7___default()(props === null || props === void 0 ? void 0 : props.createdAt).fromNow()\n      }));\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (ListComments);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiblZlRC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9zZW1pbmFyL2NvbW1lbnRzL2xpc3RDb21tZW50cy9pbmRleC5qcz85ZDU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbW1lbnQsIExpc3QgfSBmcm9tICdhbnRkJ1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmNvbnN0IExpc3RDb21tZW50cyA9ICh7IGlkU2VtaW5hciwgb25TY3JvbGxFbmQgfSkgPT4ge1xuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZpcmViYXNlXG4gICAgICAuZGF0YWJhc2UoKVxuICAgICAgLnJlZihgc2VtaW5hcnMvJHtpZFNlbWluYXJ9L2NvbW1lbnRzYClcbiAgICAgIC5vbignY2hpbGRfYWRkZWQnLCBzbmFwc2hvdCA9PiB7XG4gICAgICAgIGlmIChzbmFwc2hvdC52YWwoKSkge1xuICAgICAgICAgIHNldENvbW1lbnQoc25hcHNob3QudmFsKCkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH0sIFtdKVxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb21tZW50KSB7XG4gICAgICBzZXRDb21tZW50cyhbLi4uY29tbWVudHMsIGNvbW1lbnRdKVxuICAgICAgb25TY3JvbGxFbmQoKVxuICAgIH1cbiAgfSwgW2NvbW1lbnRdKVxuICByZXR1cm4gKFxuICAgIDxMaXN0XG4gICAgICBkYXRhU291cmNlPXtjb21tZW50c31cbiAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgIHJlbmRlckl0ZW09e3Byb3BzID0+IChcbiAgICAgICAgPENvbW1lbnRcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcwIDEwcHgnIH19XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIGRhdGV0aW1lPXttb21lbnQocHJvcHM/LmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RDb21tZW50c1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFIQTtBQURBO0FBSEE7QUFZQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///nVeD\n')}}]);