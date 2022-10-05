/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  req\n}) => {\n  if (true) {\n    // We are on the server\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',\n      headers: req.headers\n    });\n  } else {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2UxOTYiXSwibmFtZXMiOlsicmVxIiwiYXhpb3MiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSwrREFBZSxDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFhO0FBQzFCLFlBQW1DO0FBQ2pDO0FBRUEsV0FBT0MsbURBQUEsQ0FBYTtBQUNsQkMsYUFBTyxFQUNMLGlFQUZnQjtBQUdsQkMsYUFBTyxFQUFFSCxHQUFHLENBQUNHO0FBSEssS0FBYixDQUFQO0FBS0QsR0FSRCxNQVFPLEVBS047QUFDRixDQWZEIiwiZmlsZSI6Ii4vYXBpL2J1aWxkLWNsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHJlcSB9KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyXG5cbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVUkw6XG4gICAgICAgICdodHRwOi8vaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWwnLFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gV2UgbXVzdCBiZSBvbiB0aGUgYnJvd3NlclxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVybDogJy8nLFxuICAgIH0pO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/muhammadbilal/Desktop/ticketing-dev-mern-stack-microservice-using-kubernetes-cloud-cluster-googleCloud/client/components/header.js\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  currentUser\n}) => {\n  const links = [!currentUser && {\n    label: 'Sign Up',\n    href: '/auth/signup'\n  }, !currentUser && {\n    label: 'Sign In',\n    href: '/auth/signin'\n  }, currentUser && {\n    label: 'Sign Out',\n    href: '/auth/signout'\n  }].filter(linkConfig => linkConfig).map(({\n    label,\n    href\n  }) => {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n      className: \"nav-item\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: \"nav-link\",\n          children: label\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }, undefined)\n    }, href, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, undefined);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n    className: \"navbar navbar-light bg-light\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"navbar-brand\",\n        children: \"GitTix\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"d-flex justify-content-end\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"nav d-flex align-items-center\",\n        children: links\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, undefined);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL2hlYWRlci5qcz82NDc4Il0sIm5hbWVzIjpbImN1cnJlbnRVc2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJmaWx0ZXIiLCJsaW5rQ29uZmlnIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSwrREFBZSxDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFxQjtBQUNsQyxRQUFNQyxLQUFLLEdBQUcsQ0FDWixDQUFDRCxXQUFELElBQWdCO0FBQUVFLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxRQUFJLEVBQUU7QUFBMUIsR0FESixFQUVaLENBQUNILFdBQUQsSUFBZ0I7QUFBRUUsU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFFBQUksRUFBRTtBQUExQixHQUZKLEVBR1pILFdBQVcsSUFBSTtBQUFFRSxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsUUFBSSxFQUFFO0FBQTNCLEdBSEgsRUFLWEMsTUFMVyxDQUtKQyxVQUFVLElBQUlBLFVBTFYsRUFNWEMsR0FOVyxDQU1QLENBQUM7QUFBRUosU0FBRjtBQUFTQztBQUFULEdBQUQsS0FBcUI7QUFDeEIsd0JBQ0U7QUFBZSxlQUFTLEVBQUMsVUFBekI7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRUEsSUFBWjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxVQUFiO0FBQUEsb0JBQXlCRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQVNDLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQU9ELEdBZFcsQ0FBZDtBQWdCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQywrQkFBZDtBQUFBLGtCQUErQ0Y7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQTVCRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgY3VycmVudFVzZXIgfSkgPT4ge1xuICBjb25zdCBsaW5rcyA9IFtcbiAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gVXAnLCBocmVmOiAnL2F1dGgvc2lnbnVwJyB9LFxuICAgICFjdXJyZW50VXNlciAmJiB7IGxhYmVsOiAnU2lnbiBJbicsIGhyZWY6ICcvYXV0aC9zaWduaW4nIH0sXG4gICAgY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gT3V0JywgaHJlZjogJy9hdXRoL3NpZ25vdXQnIH1cbiAgXVxuICAgIC5maWx0ZXIobGlua0NvbmZpZyA9PiBsaW5rQ29uZmlnKVxuICAgIC5tYXAoKHsgbGFiZWwsIGhyZWYgfSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17aHJlZn0gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2xhYmVsfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5HaXRUaXg8L2E+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+e2xpbmtzfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n\nvar _jsxFileName = \"/Users/muhammadbilal/Desktop/ticketing-dev-mern-stack-microservice-using-kubernetes-cloud-cluster-googleCloud/client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst AppComponent = ({\n  Component,\n  pageProps,\n  currentUser\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__.default, {\n      currentUser: currentUser\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\nAppComponent.getInitialProps = async appContext => {\n  const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__.default)(appContext.ctx);\n  const {\n    data\n  } = await client.get('/api/users/currentuser');\n  let pageProps = {};\n\n  if (appContext.Component.getInitialProps) {\n    pageProps = await appContext.Component.getInitialProps(appContext.ctx);\n  }\n\n  return _objectSpread({\n    pageProps\n  }, data);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY2xpZW50IiwiYnVpbGRDbGllbnQiLCJjdHgiLCJkYXRhIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUMsV0FBYjtBQUF3QkM7QUFBeEIsQ0FBRCxLQUEyQztBQUM5RCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLHVEQUFEO0FBQVEsaUJBQVcsRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBUEQ7O0FBU0FGLFlBQVksQ0FBQ0ksZUFBYixHQUErQixNQUFNQyxVQUFOLElBQW9CO0FBQ2pELFFBQU1DLE1BQU0sR0FBR0MsMERBQVcsQ0FBQ0YsVUFBVSxDQUFDRyxHQUFaLENBQTFCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVcsTUFBTUgsTUFBTSxDQUFDSSxHQUFQLENBQVcsd0JBQVgsQ0FBdkI7QUFFQSxNQUFJUixTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsTUFBSUcsVUFBVSxDQUFDSixTQUFYLENBQXFCRyxlQUF6QixFQUEwQztBQUN4Q0YsYUFBUyxHQUFHLE1BQU1HLFVBQVUsQ0FBQ0osU0FBWCxDQUFxQkcsZUFBckIsQ0FBcUNDLFVBQVUsQ0FBQ0csR0FBaEQsQ0FBbEI7QUFDRDs7QUFFRDtBQUNFTjtBQURGLEtBRUtPLElBRkw7QUFJRCxDQWJEOztBQWVBLCtEQUFlVCxZQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5cbmNvbnN0IEFwcENvbXBvbmVudCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjdXJyZW50VXNlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQXBwQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGFwcENvbnRleHQgPT4ge1xuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChhcHBDb250ZXh0LmN0eCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldCgnL2FwaS91c2Vycy9jdXJyZW50dXNlcicpO1xuXG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgaWYgKGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0LmN0eCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhZ2VQcm9wcyxcbiAgICAuLi5kYXRhXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_bootstrap_dist_css_bootstrap_css-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();