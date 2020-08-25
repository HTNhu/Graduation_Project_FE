(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{VEyr:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BMrR");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kPKH");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PArb");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal["default"].signature : function (a) {\n  return a;\n};\n\n/* eslint-disable react/prop-types */\n\n\n\nvar DescriptionItem = function DescriptionItem(_ref) {\n  var title = _ref.title,\n      content = _ref.content;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "site-description-item-profile-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "site-description-item-profile-p-label"\n  }, title, ":"), content);\n};\n\nfunction Info(props) {\n  var userInfo = props.userInfo;\n  console.log(userInfo, \'user\xccno\');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "site-description-item-profile-p",\n    style: {\n      marginBottom: 24\n    }\n  }, "User Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "site-description-item-profile-p"\n  }, "Personal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DescriptionItem, {\n    title: "Full Name",\n    content: "".concat(userInfo === null || userInfo === void 0 ? void 0 : userInfo.firstname, " ").concat(userInfo === null || userInfo === void 0 ? void 0 : userInfo.lastname)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DescriptionItem, {\n    title: "Account",\n    content: userInfo === null || userInfo === void 0 ? void 0 : userInfo.email\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DescriptionItem, {\n    title: "Birthday",\n    content: userInfo === null || userInfo === void 0 ? void 0 : userInfo.birthday\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DescriptionItem, {\n    title: "Website",\n    content: "-"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    span: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DescriptionItem, {\n    title: "Message",\n    content: "Make things as simple as possible but no simpler."\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n    className: "site-description-item-profile-p"\n  }, "Contacts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DescriptionItem, {\n    title: "Email",\n    content: userInfo === null || userInfo === void 0 ? void 0 : userInfo.email\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    span: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DescriptionItem, {\n    title: "Phone Number",\n    content: userInfo === null || userInfo === void 0 ? void 0 : userInfo.phoneNumber\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n    span: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DescriptionItem, {\n    title: "Github",\n    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "http://github.com/ant-design/ant-design/"\n    }, "github.com/ant-design/ant-design/")\n  }))));\n}\n\nvar _default = Info;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DescriptionItem, "DescriptionItem", "/home/nhuht/Documents/Family-Project/webpack-react/src/pages/profile/info/index.js");\n  reactHotLoader.register(Info, "Info", "/home/nhuht/Documents/Family-Project/webpack-react/src/pages/profile/info/index.js");\n  reactHotLoader.register(_default, "default", "/home/nhuht/Documents/Family-Project/webpack-react/src/pages/profile/info/index.js");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== \'undefined\' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("3UD+")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVkV5ci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9maWxlL2luZm8vaW5kZXguanM/NTQ0YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3csIENvbCwgRGl2aWRlciB9IGZyb20gJ2FudGQnXG5cbmNvbnN0IERlc2NyaXB0aW9uSXRlbSA9ICh7IHRpdGxlLCBjb250ZW50IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J3NpdGUtZGVzY3JpcHRpb24taXRlbS1wcm9maWxlLXdyYXBwZXInPlxuICAgIDxwIGNsYXNzTmFtZT0nc2l0ZS1kZXNjcmlwdGlvbi1pdGVtLXByb2ZpbGUtcC1sYWJlbCc+e3RpdGxlfTo8L3A+XG4gICAge2NvbnRlbnR9XG4gIDwvZGl2PlxuKVxuZnVuY3Rpb24gSW5mbyAocHJvcHMpIHtcbiAgY29uc3QgeyB1c2VySW5mbyB9ID0gcHJvcHNcbiAgY29uc29sZS5sb2codXNlckluZm8sICd1c2Vyw4xubycpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwXG4gICAgICAgIGNsYXNzTmFtZT0nc2l0ZS1kZXNjcmlwdGlvbi1pdGVtLXByb2ZpbGUtcCdcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyNCB9fVxuICAgICAgPlxuICAgICAgICBVc2VyIFByb2ZpbGVcbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT0nc2l0ZS1kZXNjcmlwdGlvbi1pdGVtLXByb2ZpbGUtcCc+UGVyc29uYWw8L3A+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNwYW49ezEyfT5cbiAgICAgICAgICA8RGVzY3JpcHRpb25JdGVtIHRpdGxlPSdGdWxsIE5hbWUnIGNvbnRlbnQ9e2Ake3VzZXJJbmZvPy5maXJzdG5hbWV9ICR7dXNlckluZm8/Lmxhc3RuYW1lfWB9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNwYW49ezEyfT5cbiAgICAgICAgICA8RGVzY3JpcHRpb25JdGVtIHRpdGxlPSdBY2NvdW50JyBjb250ZW50PXt1c2VySW5mbz8uZW1haWx9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNwYW49ezEyfT5cbiAgICAgICAgICA8RGVzY3JpcHRpb25JdGVtIHRpdGxlPSdCaXJ0aGRheScgY29udGVudD17dXNlckluZm8/LmJpcnRoZGF5fSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgPERlc2NyaXB0aW9uSXRlbSB0aXRsZT0nV2Vic2l0ZScgY29udGVudD0nLScgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgIDxEZXNjcmlwdGlvbkl0ZW1cbiAgICAgICAgICAgIHRpdGxlPSdNZXNzYWdlJ1xuICAgICAgICAgICAgY29udGVudD0nTWFrZSB0aGluZ3MgYXMgc2ltcGxlIGFzIHBvc3NpYmxlIGJ1dCBubyBzaW1wbGVyLidcbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT0nc2l0ZS1kZXNjcmlwdGlvbi1pdGVtLXByb2ZpbGUtcCc+Q29udGFjdHM8L3A+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNwYW49ezEyfT5cbiAgICAgICAgICA8RGVzY3JpcHRpb25JdGVtIHRpdGxlPSdFbWFpbCcgY29udGVudD17dXNlckluZm8/LmVtYWlsfSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgPERlc2NyaXB0aW9uSXRlbSB0aXRsZT0nUGhvbmUgTnVtYmVyJyBjb250ZW50PXt1c2VySW5mbz8ucGhvbmVOdW1iZXJ9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNwYW49ezI0fT5cbiAgICAgICAgICA8RGVzY3JpcHRpb25JdGVtXG4gICAgICAgICAgICB0aXRsZT0nR2l0aHViJ1xuICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHA6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi8nPlxuICAgICAgICAgICAgICAgIGdpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFPQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQVlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7O0FBcEVBO0FBTUE7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///VEyr\n')}}]);