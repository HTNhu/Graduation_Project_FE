(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{BJyk:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuInfo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BvKs");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GZ0F");\n\n\n\nfunction MenuInfo(_ref) {\n  var type = _ref.type,\n      userId = _ref.userId,\n      isBroken = _ref.isBroken,\n      isMe = _ref.isMe,\n      history = _ref.history;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {\n    selectedKeys: [type],\n    style: {\n      marginTop: -30,\n      // color: \'black\',\n      fontSize: 15,\n      fontWeight: 550,\n      width: isBroken ? \'60vw\' : \'35vw\',\n      backgroundColor: \'initial\'\n    },\n    overflowedIndicator: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n      color: "black"\n    }),\n    mode: "horizontal"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Item, {\n    onClick: function onClick() {\n      return history.push("/".concat(userId, "/info"));\n    },\n    key: "info"\n  }, "Th\\xF4ng tin"), isMe && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Item, {\n    onClick: function onClick() {\n      return history.push("/".concat(userId, "/savedposts"));\n    },\n    key: "savedposts"\n  }, "B\\xE0i vi\\u1EBFt \\u0111\\xE3 l\\u01B0u"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Item, {\n    onClick: function onClick() {\n      return history.push("/".concat(userId, "/myposts"));\n    },\n    key: "myposts"\n  }, "B\\xE0i vi\\u1EBFt c\\u1EE7a t\\xF4i"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Item, {\n    onClick: function onClick() {\n      return history.push("/".concat(userId, "/joinedGroup"));\n    },\n    key: "joinedGroup"\n  }, "C\\u1ED9ng \\u0111\\u1ED3ng \\u0111\\xE3 tham gia"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkp5ay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9maWxlL21lbnVJbmZvL2luZGV4LmpzPzA0OWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBFbGxpcHNpc091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVJbmZvKHsgdHlwZSwgdXNlcklkLCBpc0Jyb2tlbiwgaXNNZSwgaGlzdG9yeSB9KSB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVcbiAgICAgIHNlbGVjdGVkS2V5cz17W3R5cGVdfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgbWFyZ2luVG9wOiAtMzAsXG4gICAgICAgIC8vIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDU1MCxcbiAgICAgICAgd2lkdGg6IGlzQnJva2VuID8gJzYwdncnIDogJzM1dncnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdpbml0aWFsJ1xuICAgICAgfX1cbiAgICAgIG92ZXJmbG93ZWRJbmRpY2F0b3I9ezxFbGxpcHNpc091dGxpbmVkIGNvbG9yPVwiYmxhY2tcIiAvPn1cbiAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcbiAgICA+XG4gICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaChgLyR7dXNlcklkfS9pbmZvYCl9IGtleT1cImluZm9cIj5cbiAgICAgICAgVGjDtG5nIHRpblxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICB7Lyoge2lzQnJva2VuICYmIChcbiAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaChgLyR7dXNlcklkfS9tZXNzZW5nZXJgKX1cbiAgICAgICAgICBrZXk9XCJtYWlsXCJcbiAgICAgICAgPlxuICAgICAgICAgIFRpbiBuaOG6r25cbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICApfSAqL31cbiAgICAgIHtpc01lICYmIChcbiAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaChgLyR7dXNlcklkfS9zYXZlZHBvc3RzYCl9XG4gICAgICAgICAga2V5PVwic2F2ZWRwb3N0c1wiXG4gICAgICAgID5cbiAgICAgICAgICBCw6BpIHZp4bq/dCDEkcOjIGzGsHVcbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICApfVxuICAgICAgPE1lbnUuSXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goYC8ke3VzZXJJZH0vbXlwb3N0c2ApfVxuICAgICAgICBrZXk9XCJteXBvc3RzXCJcbiAgICAgID5cbiAgICAgICAgQsOgaSB2aeG6v3QgY+G7p2EgdMO0aVxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8TWVudS5JdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaChgLyR7dXNlcklkfS9qb2luZWRHcm91cGApfVxuICAgICAgICBrZXk9XCJqb2luZWRHcm91cFwiXG4gICAgICA+XG4gICAgICAgIEPhu5luZyDEkeG7k25nIMSRw6MgdGhhbSBnaWFcbiAgICAgIDwvTWVudS5JdGVtPlxuICAgIDwvTWVudT5cbiAgKVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBWEE7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///BJyk\n')}}]);