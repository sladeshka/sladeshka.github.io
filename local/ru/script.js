/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"ru": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~ru"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ru/images sync recursive \\.(png|jpe?g|svg)$":
/*!***********************************************!*\
  !*** ./src/ru/images sync \.(png|jpe?g|svg)$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./222.jpg\": \"./src/ru/images/222.jpg\",\n\t\"./333.png\": \"./src/ru/images/333.png\",\n\t\"./untitled10.jpg\": \"./src/ru/images/untitled10.jpg\",\n\t\"./untitled11.jpg\": \"./src/ru/images/untitled11.jpg\",\n\t\"./untitled12.jpg\": \"./src/ru/images/untitled12.jpg\",\n\t\"./untitled13.jpg\": \"./src/ru/images/untitled13.jpg\",\n\t\"./untitled14.jpg\": \"./src/ru/images/untitled14.jpg\",\n\t\"./untitled15.jpg\": \"./src/ru/images/untitled15.jpg\",\n\t\"./untitled16.jpg\": \"./src/ru/images/untitled16.jpg\",\n\t\"./untitled17.jpg\": \"./src/ru/images/untitled17.jpg\",\n\t\"./untitled18.jpg\": \"./src/ru/images/untitled18.jpg\",\n\t\"./untitled19.jpg\": \"./src/ru/images/untitled19.jpg\",\n\t\"./untitled20.jpg\": \"./src/ru/images/untitled20.jpg\",\n\t\"./untitled21.jpg\": \"./src/ru/images/untitled21.jpg\",\n\t\"./untitled22.jpg\": \"./src/ru/images/untitled22.jpg\",\n\t\"./untitled3.png\": \"./src/ru/images/untitled3.png\",\n\t\"./untitled5.jpg\": \"./src/ru/images/untitled5.jpg\",\n\t\"./untitled6.jpg\": \"./src/ru/images/untitled6.jpg\",\n\t\"./untitled7.jpg\": \"./src/ru/images/untitled7.jpg\",\n\t\"./untitled8.jpg\": \"./src/ru/images/untitled8.jpg\",\n\t\"./untitled9.jpg\": \"./src/ru/images/untitled9.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/ru/images sync recursive \\\\.(png|jpe?g|svg)$\";\n\n//# sourceURL=webpack:///./src/ru/images_sync_\\.(png%7Cjpe?");

/***/ }),

/***/ "./src/ru/images/222.jpg":
/*!*******************************!*\
  !*** ./src/ru/images/222.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/222.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/222.jpg?");

/***/ }),

/***/ "./src/ru/images/333.png":
/*!*******************************!*\
  !*** ./src/ru/images/333.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/333.png\");\n\n//# sourceURL=webpack:///./src/ru/images/333.png?");

/***/ }),

/***/ "./src/ru/images/untitled10.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled10.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled10.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled10.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled11.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled11.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled11.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled11.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled12.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled12.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled12.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled12.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled13.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled13.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled13.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled13.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled14.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled14.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled14.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled14.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled15.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled15.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled15.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled15.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled16.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled16.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled16.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled16.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled17.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled17.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled17.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled17.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled18.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled18.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled18.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled18.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled19.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled19.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled19.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled19.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled20.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled20.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled20.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled20.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled21.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled21.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled21.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled21.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled22.jpg":
/*!**************************************!*\
  !*** ./src/ru/images/untitled22.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled22.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled22.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled3.png":
/*!*************************************!*\
  !*** ./src/ru/images/untitled3.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled3.png\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled3.png?");

/***/ }),

/***/ "./src/ru/images/untitled5.jpg":
/*!*************************************!*\
  !*** ./src/ru/images/untitled5.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled5.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled5.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled6.jpg":
/*!*************************************!*\
  !*** ./src/ru/images/untitled6.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled6.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled6.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled7.jpg":
/*!*************************************!*\
  !*** ./src/ru/images/untitled7.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled7.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled7.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled8.jpg":
/*!*************************************!*\
  !*** ./src/ru/images/untitled8.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled8.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled8.jpg?");

/***/ }),

/***/ "./src/ru/images/untitled9.jpg":
/*!*************************************!*\
  !*** ./src/ru/images/untitled9.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/local/ru/images/untitled9.jpg\");\n\n//# sourceURL=webpack:///./src/ru/images/untitled9.jpg?");

/***/ }),

/***/ "./src/ru/script.js":
/*!**************************!*\
  !*** ./src/ru/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/ru/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nwindow.$ = __webpack_provided_window_dot_jQuery = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;\n\n\n/**\r\n * images\r\n */\n// import './images/arrow.svg';\n// import all file from folder\n\nvar importFileFromFolder = function importFileFromFolder(require) {\n  return require.keys().reduce(function (acc, next) {\n    acc[next.replace(\"./\", \"\")] = require(next);\n    return acc;\n  }, {});\n};\n\nimportFileFromFolder(__webpack_require__(\"./src/ru/images sync recursive \\\\.(png|jpe?g|svg)$\"));\n/**\r\n * fonts\r\n */\n// import './fonts/Roboto-Thin.ttf';\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function ($) {\n  console.log(window.location); // $('.dropdown-item').on('change', function() {\n  //     if ($(this).val() == 'en' || $(this).val() == 'ru') {\n  //         window.location.href = window.location.href.replace(/(en)|(ru)/g, $(this).val());\n  //     }\n  // })\n\n  $('.collapse').collapse();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/ru/script.js?");

/***/ }),

/***/ "./src/ru/style.css":
/*!**************************!*\
  !*** ./src/ru/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/ru/style.css?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/ru/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/ru/script.js */\"./src/ru/script.js\");\n\n\n//# sourceURL=webpack:///multi_./src/ru/script.js?");

/***/ })

/******/ });