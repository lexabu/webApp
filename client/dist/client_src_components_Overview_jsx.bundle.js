"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjupiter_clothing"] = self["webpackChunkjupiter_clothing"] || []).push([["client_src_components_Overview_jsx"],{

/***/ "./client/src/components/Overview.jsx":
/*!********************************************!*\
  !*** ./client/src/components/Overview.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Common_facebooklogo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Common/facebooklogo.png */ \"./client/src/components/Common/facebooklogo.png\");\n/* harmony import */ var _Common_twitterlogo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Common/twitterlogo.png */ \"./client/src/components/Common/twitterlogo.png\");\n/* harmony import */ var _Common_pinterestlogo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Common/pinterestlogo.png */ \"./client/src/components/Common/pinterestlogo.png\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar ReviewStars = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_react-rating_lib_react-rating_esm_js\"), __webpack_require__.e(\"client_src_components_Common_ReviewStars_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Common/ReviewStars.jsx */ \"./client/src/components/Common/ReviewStars.jsx\"));\n});\nvar StyleSelector = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.lazy)(function () {\n  return __webpack_require__.e(/*! import() */ \"client_src_components_Overview_StyleSelector_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./Overview/StyleSelector.jsx */ \"./client/src/components/Overview/StyleSelector.jsx\"));\n});\nvar AddToCart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js-node_modules_babel_runti-b64d34\"), __webpack_require__.e(\"vendors-node_modules_react-select_dist_react-select_esm_js\"), __webpack_require__.e(\"client_src_components_Overview_AddToCart_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Overview/AddToCart.jsx */ \"./client/src/components/Overview/AddToCart.jsx\"));\n});\nvar Gallery = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.lazy)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-2a657b\"), __webpack_require__.e(\"client_src_components_Overview_Gallery_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Overview/Gallery.jsx */ \"./client/src/components/Overview/Gallery.jsx\"));\n});\n\nvar PropTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\nvar Overview = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Overview, _React$Component);\n\n  var _super = _createSuper(Overview);\n\n  function Overview(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Overview);\n\n    _this = _super.call(this, props);\n    var styles = props.styles,\n        reviews = props.reviews,\n        product = props.product;\n    var currentStyle = styles.filter(function (style) {\n      return style['default?'];\n    })[0];\n    _this.state = {\n      currentStyle: currentStyle,\n      styles: styles,\n      reviews: reviews,\n      product: product,\n      currentImage: 0\n    };\n    _this.updateStyle = _this.updateStyle.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.updateImage = _this.updateImage.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Overview, [{\n    key: \"updateStyle\",\n    value: function updateStyle(currentStyle) {\n      var _this$state = this.state,\n          styles = _this$state.styles,\n          reviews = _this$state.reviews,\n          product = _this$state.product,\n          currentImage = _this$state.currentImage;\n      this.setState({\n        currentStyle: currentStyle,\n        styles: styles,\n        reviews: reviews,\n        product: product,\n        currentImage: currentImage\n      });\n    }\n  }, {\n    key: \"updateImage\",\n    value: function updateImage(currentImage) {\n      var _this$state2 = this.state,\n          styles = _this$state2.styles,\n          reviews = _this$state2.reviews,\n          product = _this$state2.product,\n          currentStyle = _this$state2.currentStyle;\n      this.setState({\n        currentStyle: currentStyle,\n        styles: styles,\n        reviews: reviews,\n        product: product,\n        currentImage: currentImage\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state3 = this.state,\n          styles = _this$state3.styles,\n          reviews = _this$state3.reviews,\n          product = _this$state3.product,\n          currentStyle = _this$state3.currentStyle,\n          currentImage = _this$state3.currentImage;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: \"overview\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(Gallery, {\n        currentStyle: currentStyle,\n        currentImage: currentImage,\n        key: currentStyle.style_id,\n        updateImage: this.updateImage\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: \"product-information right-column\"\n      }, reviews.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(ReviewStars, {\n        reviews: reviews\n      }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"span\", {\n        className: \"category\"\n      }, product.category.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"h1\", {\n        className: \"name\"\n      }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"span\", {\n        className: \"display-price\"\n      }, \"$\".concat(currentStyle.sale_price || currentStyle.original_price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"span\", {\n        className: \"original-price\"\n      }, currentStyle.sale_price ? \"  $\".concat(currentStyle.original_price) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"br\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(StyleSelector, {\n        currentStyle: currentStyle,\n        styles: styles,\n        changeStyle: this.updateStyle\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(AddToCart, {\n        currentStyle: currentStyle,\n        key: currentStyle.style_id * 99\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: \"social-buttons-contianer right-column\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"b\", {\n        className: \"social-buttons-title\"\n      }, \"Share on Socials\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: \"flex-break\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: \"social-buttons\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"a\", {\n        href: \"https://www.facebook.com/sharer/sharer.php?u=http://127.0.0.1:1128</div>}\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"img\", {\n        src: _Common_facebooklogo_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        className: \"logo-button\",\n        alt: \"facebook\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"a\", {\n        href: \"https://twitter.com/intent/tweet?url=http://127.0.0.1:1128</div>}&text=\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"img\", {\n        src: _Common_twitterlogo_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        className: \"logo-button\",\n        alt: \"twitter\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"a\", {\n        href: \"https://pinterest.com/pin/create/button/?url=http://127.0.0.1:1128</div>}&media=&description=\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"img\", {\n        src: _Common_pinterestlogo_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        className: \"logo-button\",\n        alt: \"pinterest\"\n      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"div\", {\n        className: \"product-description\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"span\", {\n        className: \"slogan\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"b\", null, product.slogan)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"span\", {\n        className: \"description\"\n      }, product.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(\"br\", null)));\n    }\n  }]);\n\n  return Overview;\n}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));\n\nOverview.propTypes = {\n  reviews: PropTypes.instanceOf(Object).isRequired,\n  styles: PropTypes.instanceOf(Object).isRequired,\n  product: PropTypes.instanceOf(Object).isRequired\n};\nOverview.displayName = 'Overview';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);\n\n//# sourceURL=webpack://jupiter-clothing/./client/src/components/Overview.jsx?");

/***/ }),

/***/ "./client/src/components/Common/facebooklogo.png":
/*!*******************************************************!*\
  !*** ./client/src/components/Common/facebooklogo.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"199eead0da1af97ae388b8c893c96db0.png\");\n\n//# sourceURL=webpack://jupiter-clothing/./client/src/components/Common/facebooklogo.png?");

/***/ }),

/***/ "./client/src/components/Common/pinterestlogo.png":
/*!********************************************************!*\
  !*** ./client/src/components/Common/pinterestlogo.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0f025719b26d32e389fdc598b5c50586.png\");\n\n//# sourceURL=webpack://jupiter-clothing/./client/src/components/Common/pinterestlogo.png?");

/***/ }),

/***/ "./client/src/components/Common/twitterlogo.png":
/*!******************************************************!*\
  !*** ./client/src/components/Common/twitterlogo.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5567f1e596981c99b2d0c83f16a58b35.png\");\n\n//# sourceURL=webpack://jupiter-clothing/./client/src/components/Common/twitterlogo.png?");

/***/ })

}]);