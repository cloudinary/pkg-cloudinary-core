/**
   * cloudinary-main.js
   * Cloudinary's JavaScript library - Version 2.7.2
   * Copyright Cloudinary
   * see https://github.com/cloudinary/cloudinary_js
   *
   */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/assign"), require("lodash/cloneDeep"), require("lodash/compact"), require("lodash/difference"), require("lodash/functions"), require("lodash/identity"), require("lodash/includes"), require("lodash/isArray"), require("lodash/isElement"), require("lodash/isFunction"), require("lodash/isPlainObject"), require("lodash/isString"), require("lodash/merge"), require("lodash/trim"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/assign", "lodash/cloneDeep", "lodash/compact", "lodash/difference", "lodash/functions", "lodash/identity", "lodash/includes", "lodash/isArray", "lodash/isElement", "lodash/isFunction", "lodash/isPlainObject", "lodash/isString", "lodash/merge", "lodash/trim"], factory);
	else if(typeof exports === 'object')
		exports["cloudinary"] = factory(require("lodash/assign"), require("lodash/cloneDeep"), require("lodash/compact"), require("lodash/difference"), require("lodash/functions"), require("lodash/identity"), require("lodash/includes"), require("lodash/isArray"), require("lodash/isElement"), require("lodash/isFunction"), require("lodash/isPlainObject"), require("lodash/isString"), require("lodash/merge"), require("lodash/trim"));
	else
		root["cloudinary"] = factory(root["_"]["assign"], root["_"]["cloneDeep"], root["_"]["compact"], root["_"]["difference"], root["_"]["functions"], root["_"]["identity"], root["_"]["includes"], root["_"]["isArray"], root["_"]["isElement"], root["_"]["isFunction"], root["_"]["isPlainObject"], root["_"]["isString"], root["_"]["merge"], root["_"]["trim"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_lodash_assign__, __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__, __WEBPACK_EXTERNAL_MODULE_lodash_compact__, __WEBPACK_EXTERNAL_MODULE_lodash_difference__, __WEBPACK_EXTERNAL_MODULE_lodash_functions__, __WEBPACK_EXTERNAL_MODULE_lodash_identity__, __WEBPACK_EXTERNAL_MODULE_lodash_includes__, __WEBPACK_EXTERNAL_MODULE_lodash_isArray__, __WEBPACK_EXTERNAL_MODULE_lodash_isElement__, __WEBPACK_EXTERNAL_MODULE_lodash_isFunction__, __WEBPACK_EXTERNAL_MODULE_lodash_isPlainObject__, __WEBPACK_EXTERNAL_MODULE_lodash_isString__, __WEBPACK_EXTERNAL_MODULE_lodash_merge__, __WEBPACK_EXTERNAL_MODULE_lodash_trim__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/namespace/cloudinary-core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/namespace/cloudinary-core.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var lodash_namespaceObject = {};
__webpack_require__.r(lodash_namespaceObject);
__webpack_require__.d(lodash_namespaceObject, "assign", function() { return assign_root_assign_default.a; });
__webpack_require__.d(lodash_namespaceObject, "cloneDeep", function() { return cloneDeep_root_cloneDeep_default.a; });
__webpack_require__.d(lodash_namespaceObject, "compact", function() { return compact_root_compact_default.a; });
__webpack_require__.d(lodash_namespaceObject, "difference", function() { return difference_root_difference_default.a; });
__webpack_require__.d(lodash_namespaceObject, "functions", function() { return functions_root_functions_default.a; });
__webpack_require__.d(lodash_namespaceObject, "identity", function() { return identity_root_identity_default.a; });
__webpack_require__.d(lodash_namespaceObject, "includes", function() { return includes_root_includes_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isArray", function() { return isArray_root_isArray_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isPlainObject", function() { return isPlainObject_root_isPlainObject_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isString", function() { return isString_root_isString_default.a; });
__webpack_require__.d(lodash_namespaceObject, "merge", function() { return merge_root_merge_default.a; });
__webpack_require__.d(lodash_namespaceObject, "contains", function() { return includes_root_includes_default.a; });
__webpack_require__.d(lodash_namespaceObject, "isElement", function() { return isElement_root_isElement_; });
__webpack_require__.d(lodash_namespaceObject, "isFunction", function() { return isFunction_root_isFunction_; });
__webpack_require__.d(lodash_namespaceObject, "trim", function() { return trim_root_trim_; });
__webpack_require__.d(lodash_namespaceObject, "getData", function() { return lodash_getData; });
__webpack_require__.d(lodash_namespaceObject, "setData", function() { return lodash_setData; });
__webpack_require__.d(lodash_namespaceObject, "getAttribute", function() { return lodash_getAttribute; });
__webpack_require__.d(lodash_namespaceObject, "setAttribute", function() { return lodash_setAttribute; });
__webpack_require__.d(lodash_namespaceObject, "removeAttribute", function() { return lodash_removeAttribute; });
__webpack_require__.d(lodash_namespaceObject, "setAttributes", function() { return setAttributes; });
__webpack_require__.d(lodash_namespaceObject, "hasClass", function() { return lodash_hasClass; });
__webpack_require__.d(lodash_namespaceObject, "addClass", function() { return lodash_addClass; });
__webpack_require__.d(lodash_namespaceObject, "getStyles", function() { return getStyles; });
__webpack_require__.d(lodash_namespaceObject, "cssExpand", function() { return cssExpand; });
__webpack_require__.d(lodash_namespaceObject, "domStyle", function() { return domStyle; });
__webpack_require__.d(lodash_namespaceObject, "curCSS", function() { return curCSS; });
__webpack_require__.d(lodash_namespaceObject, "cssValue", function() { return cssValue; });
__webpack_require__.d(lodash_namespaceObject, "augmentWidthOrHeight", function() { return augmentWidthOrHeight; });
__webpack_require__.d(lodash_namespaceObject, "getWidthOrHeight", function() { return getWidthOrHeight; });
__webpack_require__.d(lodash_namespaceObject, "width", function() { return lodash_width; });
__webpack_require__.d(lodash_namespaceObject, "omit", function() { return omit; });
__webpack_require__.d(lodash_namespaceObject, "allStrings", function() { return baseutil_allStrings; });
__webpack_require__.d(lodash_namespaceObject, "without", function() { return without; });
__webpack_require__.d(lodash_namespaceObject, "isNumberLike", function() { return isNumberLike; });
__webpack_require__.d(lodash_namespaceObject, "smartEscape", function() { return smartEscape; });
__webpack_require__.d(lodash_namespaceObject, "defaults", function() { return defaults; });
__webpack_require__.d(lodash_namespaceObject, "objectProto", function() { return objectProto; });
__webpack_require__.d(lodash_namespaceObject, "objToString", function() { return objToString; });
__webpack_require__.d(lodash_namespaceObject, "isObject", function() { return isObject; });
__webpack_require__.d(lodash_namespaceObject, "funcTag", function() { return funcTag; });
__webpack_require__.d(lodash_namespaceObject, "reWords", function() { return reWords; });
__webpack_require__.d(lodash_namespaceObject, "camelCase", function() { return camelCase; });
__webpack_require__.d(lodash_namespaceObject, "snakeCase", function() { return snakeCase; });
__webpack_require__.d(lodash_namespaceObject, "convertKeys", function() { return convertKeys; });
__webpack_require__.d(lodash_namespaceObject, "withCamelCaseKeys", function() { return withCamelCaseKeys; });
__webpack_require__.d(lodash_namespaceObject, "withSnakeCaseKeys", function() { return withSnakeCaseKeys; });
__webpack_require__.d(lodash_namespaceObject, "base64Encode", function() { return base64Encode; });
__webpack_require__.d(lodash_namespaceObject, "base64EncodeURL", function() { return base64EncodeURL; });
__webpack_require__.d(lodash_namespaceObject, "extractUrlParams", function() { return extractUrlParams; });
__webpack_require__.d(lodash_namespaceObject, "patchFetchFormat", function() { return patchFetchFormat; });
__webpack_require__.d(lodash_namespaceObject, "optionConsume", function() { return optionConsume; });
__webpack_require__.d(lodash_namespaceObject, "isEmpty", function() { return isEmpty; });
var constants_namespaceObject = {};
__webpack_require__.r(constants_namespaceObject);
__webpack_require__.d(constants_namespaceObject, "VERSION", function() { return VERSION; });
__webpack_require__.d(constants_namespaceObject, "CF_SHARED_CDN", function() { return CF_SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "OLD_AKAMAI_SHARED_CDN", function() { return OLD_AKAMAI_SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "AKAMAI_SHARED_CDN", function() { return AKAMAI_SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "SHARED_CDN", function() { return SHARED_CDN; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_POSTER_OPTIONS", function() { return DEFAULT_POSTER_OPTIONS; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_SOURCE_TYPES", function() { return DEFAULT_VIDEO_SOURCE_TYPES; });
__webpack_require__.d(constants_namespaceObject, "SEO_TYPES", function() { return SEO_TYPES; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_IMAGE_PARAMS", function() { return DEFAULT_IMAGE_PARAMS; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_PARAMS", function() { return DEFAULT_VIDEO_PARAMS; });
__webpack_require__.d(constants_namespaceObject, "DEFAULT_VIDEO_SOURCES", function() { return DEFAULT_VIDEO_SOURCES; });

// CONCATENATED MODULE: ./src/utf8_encode.js
/**
 * UTF8 encoder
 * @private
 */
var utf8_encode;
/* harmony default export */ var src_utf8_encode = (utf8_encode = function utf8_encode(argString) {
  var c1, enc, end, n, start, string, stringl, utftext; // http://kevin.vanzonneveld.net
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: sowberry
  // +    tweaked by: Jack
  // +   bugfixed by: Onno Marsman
  // +   improved by: Yves Sucaet
  // +   bugfixed by: Onno Marsman
  // +   bugfixed by: Ulrich
  // +   bugfixed by: Rafal Kukawski
  // +   improved by: kirilloid
  // *     example 1: utf8_encode('Kevin van Zonneveld');
  // *     returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  string = argString + ''; // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  utftext = '';
  start = void 0;
  end = void 0;
  stringl = 0;
  start = end = 0;
  stringl = string.length;
  n = 0;

  while (n < stringl) {
    c1 = string.charCodeAt(n);
    enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
    } else {
      enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
    }

    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }

      utftext += enc;
      start = end = n + 1;
    }

    n++;
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
});
// CONCATENATED MODULE: ./src/crc32.js

/**
 * CRC32 calculator
 * Depends on 'utf8_encode'
 * @private
 * @param {string} str - The string to calculate the CRC32 for.
 * @return {number}
 */

function crc32(str) {
  var crc, i, iTop, table, x, y; // http://kevin.vanzonneveld.net
  // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // +   improved by: T0bsn
  // +   improved by: http://stackoverflow.com/questions/2647935/javascript-crc32-function-and-php-crc32-not-matching
  // -    depends on: utf8_encode
  // *     example 1: crc32('Kevin van Zonneveld');
  // *     returns 1: 1249991249

  str = src_utf8_encode(str);
  table = '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D';
  crc = 0;
  x = 0;
  y = 0;
  crc = crc ^ -1;
  i = 0;
  iTop = str.length;

  while (i < iTop) {
    y = (crc ^ str.charCodeAt(i)) & 0xFF;
    x = '0x' + table.substr(y * 9, 8);
    crc = crc >>> 8 ^ x;
    i++;
  }

  crc = crc ^ -1; //convert to unsigned 32-bit int if needed

  if (crc < 0) {
    crc += 4294967296;
  }

  return crc;
}

/* harmony default export */ var src_crc32 = (crc32);
// EXTERNAL MODULE: external {"commonjs":"lodash/assign","commonjs2":"lodash/assign","amd":"lodash/assign","root":["_","assign"]}
var assign_root_assign_ = __webpack_require__("lodash/assign");
var assign_root_assign_default = /*#__PURE__*/__webpack_require__.n(assign_root_assign_);

// EXTERNAL MODULE: external {"commonjs":"lodash/cloneDeep","commonjs2":"lodash/cloneDeep","amd":"lodash/cloneDeep","root":["_","cloneDeep"]}
var cloneDeep_root_cloneDeep_ = __webpack_require__("lodash/cloneDeep");
var cloneDeep_root_cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep_root_cloneDeep_);

// EXTERNAL MODULE: external {"commonjs":"lodash/compact","commonjs2":"lodash/compact","amd":"lodash/compact","root":["_","compact"]}
var compact_root_compact_ = __webpack_require__("lodash/compact");
var compact_root_compact_default = /*#__PURE__*/__webpack_require__.n(compact_root_compact_);

// EXTERNAL MODULE: external {"commonjs":"lodash/difference","commonjs2":"lodash/difference","amd":"lodash/difference","root":["_","difference"]}
var difference_root_difference_ = __webpack_require__("lodash/difference");
var difference_root_difference_default = /*#__PURE__*/__webpack_require__.n(difference_root_difference_);

// EXTERNAL MODULE: external {"commonjs":"lodash/functions","commonjs2":"lodash/functions","amd":"lodash/functions","root":["_","functions"]}
var functions_root_functions_ = __webpack_require__("lodash/functions");
var functions_root_functions_default = /*#__PURE__*/__webpack_require__.n(functions_root_functions_);

// EXTERNAL MODULE: external {"commonjs":"lodash/identity","commonjs2":"lodash/identity","amd":"lodash/identity","root":["_","identity"]}
var identity_root_identity_ = __webpack_require__("lodash/identity");
var identity_root_identity_default = /*#__PURE__*/__webpack_require__.n(identity_root_identity_);

// EXTERNAL MODULE: external {"commonjs":"lodash/includes","commonjs2":"lodash/includes","amd":"lodash/includes","root":["_","includes"]}
var includes_root_includes_ = __webpack_require__("lodash/includes");
var includes_root_includes_default = /*#__PURE__*/__webpack_require__.n(includes_root_includes_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isArray","commonjs2":"lodash/isArray","amd":"lodash/isArray","root":["_","isArray"]}
var isArray_root_isArray_ = __webpack_require__("lodash/isArray");
var isArray_root_isArray_default = /*#__PURE__*/__webpack_require__.n(isArray_root_isArray_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isPlainObject","commonjs2":"lodash/isPlainObject","amd":"lodash/isPlainObject","root":["_","isPlainObject"]}
var isPlainObject_root_isPlainObject_ = __webpack_require__("lodash/isPlainObject");
var isPlainObject_root_isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject_root_isPlainObject_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isString","commonjs2":"lodash/isString","amd":"lodash/isString","root":["_","isString"]}
var isString_root_isString_ = __webpack_require__("lodash/isString");
var isString_root_isString_default = /*#__PURE__*/__webpack_require__.n(isString_root_isString_);

// EXTERNAL MODULE: external {"commonjs":"lodash/merge","commonjs2":"lodash/merge","amd":"lodash/merge","root":["_","merge"]}
var merge_root_merge_ = __webpack_require__("lodash/merge");
var merge_root_merge_default = /*#__PURE__*/__webpack_require__.n(merge_root_merge_);

// EXTERNAL MODULE: external {"commonjs":"lodash/isElement","commonjs2":"lodash/isElement","amd":"lodash/isElement","root":["_","isElement"]}
var isElement_root_isElement_ = __webpack_require__("lodash/isElement");

// EXTERNAL MODULE: external {"commonjs":"lodash/isFunction","commonjs2":"lodash/isFunction","amd":"lodash/isFunction","root":["_","isFunction"]}
var isFunction_root_isFunction_ = __webpack_require__("lodash/isFunction");

// EXTERNAL MODULE: external {"commonjs":"lodash/trim","commonjs2":"lodash/trim","amd":"lodash/trim","root":["_","trim"]}
var trim_root_trim_ = __webpack_require__("lodash/trim");

// CONCATENATED MODULE: ./src/util/baseutil.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Includes common utility methods and shims
 */


function omit(obj, keys) {
  obj = obj || {};
  var srcKeys = Object.keys(obj).filter(function (key) {
    return !includes_root_includes_default()(keys, key);
  });
  var filtered = {};
  srcKeys.forEach(function (key) {
    return filtered[key] = obj[key];
  });
  return filtered;
}
/**
 * Return true if all items in list are strings
 * @function Util.allString
 * @param {Array} list - an array of items
 */

var baseutil_allStrings = function allStrings(list) {
  return list.length && list.every(isString_root_isString_default.a);
};
/**
* Creates a new array without the given item.
* @function Util.without
* @param {Array} array - original array
* @param {*} item - the item to exclude from the new array
* @return {Array} a new array made of the original array's items except for `item`
 */

var without = function without(array, item) {
  return array.filter(function (v) {
    return v !== item;
  });
};
/**
* Return true is value is a number or a string representation of a number.
* @function Util.isNumberLike
* @param {*} value
* @returns {boolean} true if value is a number
* @example
*    Util.isNumber(0) // true
*    Util.isNumber("1.3") // true
*    Util.isNumber("") // false
*    Util.isNumber(undefined) // false
 */

var isNumberLike = function isNumberLike(value) {
  return value != null && !isNaN(parseFloat(value));
};
/**
 * Escape all characters matching unsafe in the given string
 * @function Util.smartEscape
 * @param {string} string - source string to escape
 * @param {RegExp} unsafe - characters that must be escaped
 * @return {string} escaped string
 */

var smartEscape = function smartEscape(string) {
  var unsafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /([^a-zA-Z0-9_.\-\/:]+)/g;
  return string.replace(unsafe, function (match) {
    return match.split("").map(function (c) {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    }).join("");
  });
};
/**
 * Assign values from sources if they are not defined in the destination.
 * Once a value is set it does not change
 * @function Util.defaults
 * @param {Object} destination - the object to assign defaults to
 * @param {...Object} source - the source object(s) to assign defaults from
 * @return {Object} destination after it was modified
 */

var defaults = function defaults(destination) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  return sources.reduce(function (dest, source) {
    var key, value;

    for (key in source) {
      value = source[key];

      if (dest[key] === void 0) {
        dest[key] = value;
      }
    }

    return dest;
  }, destination);
};
/*********** lodash functions */

var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */

var objToString = objectProto.toString;
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
#isObject({});
 * // => true
 *
#isObject([1, 2, 3]);
 * // => true
 *
#isObject(1);
 * // => false
 */

var isObject = function isObject(value) {
  var type; // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.

  type = _typeof(value);
  return !!value && (type === 'object' || type === 'function');
};
var funcTag = '[object Function]';
/**
* Checks if `value` is classified as a `Function` object.
* @function Util.isFunction
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
* @example
*
* function Foo(){};
* isFunction(Foo);
* // => true
*
* isFunction(/abc/);
* // => false
 */

var isFunction = function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 which returns 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) === funcTag;
};
/*********** lodash functions */

/** Used to match words to create compound words. */

var reWords = function () {
  var lower, upper;
  upper = '[A-Z]';
  lower = '[a-z]+';
  return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
}();
/**
* Convert string to camelCase
* @function Util.camelCase
* @param {string} source - the string to convert
* @return {string} in camelCase format
 */

var camelCase = function camelCase(source) {
  var words = source.match(reWords);
  words = words.map(function (word) {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
  });
  words[0] = words[0].toLocaleLowerCase();
  return words.join('');
};
/**
 * Convert string to snake_case
 * @function Util.snakeCase
 * @param {string} source - the string to convert
 * @return {string} in snake_case format
 */

var snakeCase = function snakeCase(source) {
  var words = source.match(reWords);
  words = words.map(function (word) {
    return word.toLocaleLowerCase();
  });
  return words.join('_');
};
/**
 * Creates a new object from source, with the keys transformed using the converter.
 * @param {object} source
 * @param {function|null} converter
 * @returns {object}
 */

var convertKeys = function convertKeys(source, converter) {
  var result, value;
  result = {};

  for (var key in source) {
    value = source[key];

    if (converter) {
      key = converter(key);
    }

    if (!isEmpty(key)) {
      result[key] = value;
    }
  }

  return result;
};
/**
 * Create a copy of the source object with all keys in camelCase
 * @function Util.withCamelCaseKeys
 * @param {Object} value - the object to copy
 * @return {Object} a new object
 */

var withCamelCaseKeys = function withCamelCaseKeys(source) {
  return convertKeys(source, camelCase);
};
/**
 * Create a copy of the source object with all keys in snake_case
 * @function Util.withSnakeCaseKeys
 * @param {Object} value - the object to copy
 * @return {Object} a new object
 */

var withSnakeCaseKeys = function withSnakeCaseKeys(source) {
  return convertKeys(source, snakeCase);
}; // Browser
// Node.js

var base64Encode = typeof btoa !== 'undefined' && isFunction(btoa) ? btoa : typeof Buffer !== 'undefined' && isFunction(Buffer) ? function (input) {
  if (!(input instanceof Buffer)) {
    input = new Buffer.from(String(input), 'binary');
  }

  return input.toString('base64');
} : function (input) {
  throw new Error("No base64 encoding function found");
};
/**
* Returns the Base64-decoded version of url.<br>
* This method delegates to `btoa` if present. Otherwise it tries `Buffer`.
* @function Util.base64EncodeURL
* @param {string} url - the url to encode. the value is URIdecoded and then re-encoded before converting to base64 representation
* @return {string} the base64 representation of the URL
 */

var base64EncodeURL = function base64EncodeURL(url) {
  try {
    url = decodeURI(url);
  } finally {
    url = encodeURI(url);
  }

  return base64Encode(url);
};
/**
 * A list of keys used by the url() function.
 * @private
 */

var URL_KEYS = ['api_secret', 'auth_token', 'cdn_subdomain', 'cloud_name', 'cname', 'format', 'private_cdn', 'resource_type', 'secure', 'secure_cdn_subdomain', 'secure_distribution', 'shorten', 'sign_url', 'ssl_detected', 'type', 'url_suffix', 'use_root_path', 'version'];
/**
 * Create a new object with only URL parameters
 * @param {object} options The source object
 * @return {Object} An object containing only URL parameters
 */

function extractUrlParams(options) {
  return URL_KEYS.reduce(function (obj, key) {
    if (options[key] != null) {
      obj[key] = options[key];
    }

    return obj;
  }, {});
}
/**
 * Handle the format parameter for fetch urls
 * @private
 * @param options url and transformation options. This argument may be changed by the function!
 */

function patchFetchFormat(options) {
  if (options == null) {
    options = {};
  }

  if (options.type === "fetch") {
    if (options.fetch_format == null) {
      options.fetch_format = optionConsume(options, "format");
    }
  }
}
/**
 * Deletes `option_name` from `options` and return the value if present.
 * If `options` doesn't contain `option_name` the default value is returned.
 * @param {Object} options a collection
 * @param {String} option_name the name (key) of the desired value
 * @param {*} [default_value] the value to return is option_name is missing
 */

function optionConsume(options, option_name, default_value) {
  var result = options[option_name];
  delete options[option_name];

  if (result != null) {
    return result;
  } else {
    return default_value;
  }
}
/**
 * Returns true if value is empty:
 * <ul>
 *   <li>value is null or undefined</li>
 *   <li>value is an array or string of length 0</li>
 *   <li>value is an object with no keys</li>
 * </ul>
 * @function Util.isEmpty
 * @param value
 * @returns {boolean} true if value is empty
 */

function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (typeof value.length == "number") {
    return value.length === 0;
  }

  if (typeof value.size == "number") {
    return value.size === 0;
  }

  if (_typeof(value) == "object") {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        return false;
      }
    }

    return true;
  }

  return true;
}
// CONCATENATED MODULE: ./src/util/lodash.js
var nodeContains;

















/*
 * Includes utility methods and lodash / jQuery shims
 */

/**
 * Get data from the DOM element.
 *
 * This method will use jQuery's `data()` method if it is available, otherwise it will get the `data-` attribute
 * @param {Element} element - the element to get the data from
 * @param {string} name - the name of the data item
 * @returns the value associated with the `name`
 * @function Util.getData
 */

var lodash_getData = function getData(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_(element.getAttribute):
      return element.getAttribute("data-".concat(name));

    case !isFunction_root_isFunction_(element.getAttr):
      return element.getAttr("data-".concat(name));

    case !isFunction_root_isFunction_(element.data):
      return element.data(name);

    case !(isFunction_root_isFunction_(typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.data) && isElement_root_isElement_(element)):
      return jQuery(element).data(name);
  }
};
/**
 * Set data in the DOM element.
 *
 * This method will use jQuery's `data()` method if it is available, otherwise it will set the `data-` attribute
 * @function Util.setData
 * @param {Element} element - the element to set the data in
 * @param {string} name - the name of the data item
 * @param {*} value - the value to be set
 *
 */

var lodash_setData = function setData(element, name, value) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_(element.setAttribute):
      return element.setAttribute("data-".concat(name), value);

    case !isFunction_root_isFunction_(element.setAttr):
      return element.setAttr("data-".concat(name), value);

    case !isFunction_root_isFunction_(element.data):
      return element.data(name, value);

    case !(isFunction_root_isFunction_(typeof jQuery !== "undefined" && jQuery.fn && jQuery.fn.data) && isElement_root_isElement_(element)):
      return jQuery(element).data(name, value);
  }
};
/**
 * Get attribute from the DOM element.
 *
 * @function Util.getAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 * @returns {*} the value of the attribute
 *
 */

var lodash_getAttribute = function getAttribute(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_(element.getAttribute):
      return element.getAttribute(name);

    case !isFunction_root_isFunction_(element.attr):
      return element.attr(name);

    case !isFunction_root_isFunction_(element.getAttr):
      return element.getAttr(name);
  }
};
/**
 * Set attribute in the DOM element.
 *
 * @function Util.setAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 * @param {*} value - the value to be set
 */

var lodash_setAttribute = function setAttribute(element, name, value) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_(element.setAttribute):
      return element.setAttribute(name, value);

    case !isFunction_root_isFunction_(element.attr):
      return element.attr(name, value);

    case !isFunction_root_isFunction_(element.setAttr):
      return element.setAttr(name, value);
  }
};
/**
 * Remove an attribute in the DOM element.
 *
 * @function Util.removeAttribute
 * @param {Element} element - the element to set the attribute for
 * @param {string} name - the name of the attribute
 */

var lodash_removeAttribute = function removeAttribute(element, name) {
  switch (false) {
    case !(element == null):
      return void 0;

    case !isFunction_root_isFunction_(element.removeAttribute):
      return element.removeAttribute(name);

    default:
      return lodash_setAttribute(element, void 0);
  }
};
/**
 * Set a group of attributes to the element
 * @function Util.setAttributes
 * @param {Element} element - the element to set the attributes for
 * @param {Object} attributes - a hash of attribute names and values
 */

var setAttributes = function setAttributes(element, attributes) {
  var name, results, value;
  results = [];

  for (name in attributes) {
    value = attributes[name];

    if (value != null) {
      results.push(lodash_setAttribute(element, name, value));
    } else {
      results.push(lodash_removeAttribute(element, name));
    }
  }

  return results;
};
/**
 * Checks if element has a css class
 * @function Util.hasClass
 * @param {Element} element - the element to check
 * @param {string} name - the class name
 @returns {boolean} true if the element has the class
 */

var lodash_hasClass = function hasClass(element, name) {
  if (isElement_root_isElement_(element)) {
    return element.className.match(new RegExp("\\b".concat(name, "\\b")));
  }
};
/**
 * Add class to the element
 * @function Util.addClass
 * @param {Element} element - the element
 * @param {string} name - the class name to add
 */

var lodash_addClass = function addClass(element, name) {
  if (!element.className.match(new RegExp("\\b".concat(name, "\\b")))) {
    return element.className = trim_root_trim_("".concat(element.className, " ").concat(name));
  }
}; // The following code is taken from jQuery

var getStyles = function getStyles(elem) {
  // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
  // IE throws on elements created in popups
  // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
  if (elem.ownerDocument.defaultView.opener) {
    return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
  }

  return window.getComputedStyle(elem, null);
};
var cssExpand = ["Top", "Right", "Bottom", "Left"];

nodeContains = function nodeContains(a, b) {
  var adown, bup;
  adown = a.nodeType === 9 ? a.documentElement : a;
  bup = b && b.parentNode;
  return a === bup || !!(bup && bup.nodeType === 1 && adown.contains(bup));
}; // Truncated version of jQuery.style(elem, name)


var domStyle = function domStyle(elem, name) {
  if (!(!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style)) {
    return elem.style[name];
  }
};
var curCSS = function curCSS(elem, name, computed) {
  var maxWidth, minWidth, ret, rmargin, style, width;
  rmargin = /^margin/;
  width = void 0;
  minWidth = void 0;
  maxWidth = void 0;
  ret = void 0;
  style = elem.style;
  computed = computed || getStyles(elem);

  if (computed) {
    // Support: IE9
    // getPropertyValue is only needed for .css('filter') (#12537)
    ret = computed.getPropertyValue(name) || computed[name];
  }

  if (computed) {
    if (ret === "" && !nodeContains(elem.ownerDocument, elem)) {
      ret = domStyle(elem, name);
    } // Support: iOS < 6
    // A tribute to the "awesome hack by Dean Edwards"
    // iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
    // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values


    if (rnumnonpx.test(ret) && rmargin.test(name)) {
      // Remember the original values
      width = style.width;
      minWidth = style.minWidth;
      maxWidth = style.maxWidth; // Put in the new values to get a computed value out

      style.minWidth = style.maxWidth = style.width = ret;
      ret = computed.width; // Revert the changed values

      style.width = width;
      style.minWidth = minWidth;
      style.maxWidth = maxWidth;
    }
  } // Support: IE
  // IE returns zIndex value as an integer.


  if (ret !== undefined) {
    return ret + "";
  } else {
    return ret;
  }
};
var cssValue = function cssValue(elem, name, convert, styles) {
  var val;
  val = curCSS(elem, name, styles);

  if (convert) {
    return parseFloat(val);
  } else {
    return val;
  }
};
var augmentWidthOrHeight = function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
  var i, len, side, sides, val; // If we already have the right measurement, avoid augmentation
  // Otherwise initialize for horizontal or vertical properties

  if (extra === (isBorderBox ? "border" : "content")) {
    return 0;
  } else {
    sides = name === "width" ? ["Right", "Left"] : ["Top", "Bottom"];
    val = 0;

    for (i = 0, len = sides.length; i < len; i++) {
      side = sides[i];

      if (extra === "margin") {
        // Both box models exclude margin, so add it if we want it
        val += cssValue(elem, extra + side, true, styles);
      }

      if (isBorderBox) {
        if (extra === "content") {
          // border-box includes padding, so remove it if we want content
          val -= cssValue(elem, "padding".concat(side), true, styles);
        }

        if (extra !== "margin") {
          // At this point, extra isn't border nor margin, so remove border
          val -= cssValue(elem, "border".concat(side, "Width"), true, styles);
        }
      } else {
        // At this point, extra isn't content, so add padding
        val += cssValue(elem, "padding".concat(side), true, styles);

        if (extra !== "padding") {
          // At this point, extra isn't content nor padding, so add border
          val += cssValue(elem, "border".concat(side, "Width"), true, styles);
        }
      }
    }

    return val;
  }
};
var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
var getWidthOrHeight = function getWidthOrHeight(elem, name, extra) {
  var isBorderBox, styles, val, valueIsBorderBox; // Start with offset property, which is equivalent to the border-box value

  valueIsBorderBox = true;
  val = name === "width" ? elem.offsetWidth : elem.offsetHeight;
  styles = getStyles(elem);
  isBorderBox = cssValue(elem, "boxSizing", false, styles) === "border-box"; // Some non-html elements return undefined for offsetWidth, so check for null/undefined
  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668

  if (val <= 0 || val == null) {
    // Fall back to computed then uncomputed css if necessary
    val = curCSS(elem, name, styles);

    if (val < 0 || val == null) {
      val = elem.style[name];
    }

    if (rnumnonpx.test(val)) {
      // Computed unit is not pixels. Stop here and return.
      return val;
    } // Check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style
    //    valueIsBorderBox = isBorderBox and (support.boxSizingReliable() or val is elem.style[name])


    valueIsBorderBox = isBorderBox && val === elem.style[name]; // Normalize "", auto, and prepare for extra

    val = parseFloat(val) || 0;
  } // Use the active box-sizing model to add/subtract irrelevant styles


  return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles);
};
var lodash_width = function width(element) {
  return getWidthOrHeight(element, "width", "content");
};
/**
 * @class Util
 */

/**
 * Returns true if item is a string
 * @function Util.isString
 * @param item
 * @returns {boolean} true if item is a string
 */

/**
 * Returns true if item is empty:
 * <ul>
 *   <li>item is null or undefined</li>
 *   <li>item is an array or string of length 0</li>
 *   <li>item is an object with no keys</li>
 * </ul>
 * @function Util.isEmpty
 * @param item
 * @returns {boolean} true if item is empty
 */

/**
 * Assign source properties to destination.
 * If the property is an object it is assigned as a whole, overriding the destination object.
 * @function Util.assign
 * @param {Object} destination - the object to assign to
 */

/**
 * Recursively assign source properties to destination
 * @function Util.merge
 * @param {Object} destination - the object to assign to
 * @param {...Object} [sources] The source objects.
 */

/**
 * Create a new copy of the given object, including all internal objects.
 * @function Util.cloneDeep
 * @param {Object} value - the object to clone
 * @return {Object} a new deep copy of the object
 */

/**
 * Creates a new array from the parameter with "falsey" values removed
 * @function Util.compact
 * @param {Array} array - the array to remove values from
 * @return {Array} a new array without falsey values
 */

/**
 * Check if a given item is included in the given array
 * @function Util.contains
 * @param {Array} array - the array to search in
 * @param {*} item - the item to search for
 * @return {boolean} true if the item is included in the array
 */

/**
 * Returns values in the given array that are not included in the other array
 * @function Util.difference
 * @param {Array} arr - the array to select from
 * @param {Array} values - values to filter from arr
 * @return {Array} the filtered values
 */

/**
 * Returns a list of all the function names in obj
 * @function Util.functions
 * @param {Object} object - the object to inspect
 * @return {Array} a list of functions of object
 */

/**
 * Returns the provided value. This functions is used as a default predicate function.
 * @function Util.identity
 * @param {*} value
 * @return {*} the provided value
 */

/**
 * Remove leading or trailing spaces from text
 * @function Util.trim
 * @param {string} text
 * @return {string} the `text` without leading or trailing spaces
 */
// CONCATENATED MODULE: ./src/expression.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Represents a transformation expression.
 * @param {string} expressionStr - An expression in string format.
 * @class Expression
 *
 */
var Expression =
/*#__PURE__*/
function () {
  function Expression(expressionStr) {
    _classCallCheck(this, Expression);

    /**
     * @protected
     * @inner Expression-expressions
     */
    this.expressions = [];

    if (expressionStr != null) {
      this.expressions.push(Expression.normalize(expressionStr));
    }
  }
  /**
   * Convenience constructor method
   * @function Expression.new
   */


  _createClass(Expression, [{
    key: "serialize",

    /**
     * Serialize the expression
     * @return {string} the expression as a string
     */
    value: function serialize() {
      return Expression.normalize(this.expressions.join("_"));
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.serialize();
    }
    /**
     * Get the parent transformation of this expression
     * @return Transformation
     */

  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
    /**
     * Set the parent transformation of this expression
     * @param {Transformation} the parent transformation
     * @return {Expression} this expression
     */

  }, {
    key: "setParent",
    value: function setParent(parent) {
      this.parent = parent;
      return this;
    }
    /**
     * Add a expression
     * @function Expression#predicate
     * @internal
     */

  }, {
    key: "predicate",
    value: function predicate(name, operator, value) {
      if (Expression.OPERATORS[operator] != null) {
        operator = Expression.OPERATORS[operator];
      }

      this.expressions.push("".concat(name, "_").concat(operator, "_").concat(value));
      return this;
    }
    /**
     * @function Expression#and
     */

  }, {
    key: "and",
    value: function and() {
      this.expressions.push("and");
      return this;
    }
    /**
     * @function Expression#or
     */

  }, {
    key: "or",
    value: function or() {
      this.expressions.push("or");
      return this;
    }
    /**
     * Conclude expression
     * @function Expression#then
     * @return {Transformation} the transformation this expression is defined for
     */

  }, {
    key: "then",
    value: function then() {
      return this.getParent()["if"](this.toString());
    }
    /**
     * @function Expression#height
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "height",
    value: function height(operator, value) {
      return this.predicate("h", operator, value);
    }
    /**
     * @function Expression#width
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "width",
    value: function width(operator, value) {
      return this.predicate("w", operator, value);
    }
    /**
     * @function Expression#aspectRatio
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio(operator, value) {
      return this.predicate("ar", operator, value);
    }
    /**
     * @function Expression#pages
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "pageCount",
    value: function pageCount(operator, value) {
      return this.predicate("pc", operator, value);
    }
    /**
     * @function Expression#faces
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Expression} this expression
     */

  }, {
    key: "faceCount",
    value: function faceCount(operator, value) {
      return this.predicate("fc", operator, value);
    }
  }, {
    key: "value",
    value: function value(_value) {
      this.expressions.push(_value);
      return this;
    }
    /**
     */

  }], [{
    key: "new",
    value: function _new(expressionStr) {
      return new this(expressionStr);
    }
    /**
     * Normalize a string expression
     * @function Cloudinary#normalize
     * @param {string} expression a expression, e.g. "w gt 100", "width_gt_100", "width > 100"
     * @return {string} the normalized form of the value expression, e.g. "w_gt_100"
     */

  }, {
    key: "normalize",
    value: function normalize(expression) {
      var operators, pattern, replaceRE;

      if (expression == null) {
        return expression;
      }

      expression = String(expression);
      operators = "\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*";
      pattern = "((" + operators + ")(?=[ _])|" + Object.keys(Expression.PREDEFINED_VARS).join("|") + ")";
      replaceRE = new RegExp(pattern, "g");
      expression = expression.replace(replaceRE, function (match) {
        return Expression.OPERATORS[match] || Expression.PREDEFINED_VARS[match];
      });
      return expression.replace(/[ _]+/g, '_');
    }
  }, {
    key: "variable",
    value: function variable(name, value) {
      return new this(name).value(value);
    }
    /**
     * @returns Expression a new expression with the predefined variable "width"
     * @function Expression.width
     */

  }, {
    key: "width",
    value: function width() {
      return new this("width");
    }
    /**
     * @returns Expression a new expression with the predefined variable "height"
     * @function Expression.height
     */

  }, {
    key: "height",
    value: function height() {
      return new this("height");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialWidth"
     * @function Expression.initialWidth
     */

  }, {
    key: "initialWidth",
    value: function initialWidth() {
      return new this("initialWidth");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialHeight"
     * @function Expression.initialHeight
     */

  }, {
    key: "initialHeight",
    value: function initialHeight() {
      return new this("initialHeight");
    }
    /**
     * @returns Expression a new expression with the predefined variable "aspectRatio"
     * @function Expression.aspectRatio
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio() {
      return new this("aspectRatio");
    }
    /**
     * @returns Expression a new expression with the predefined variable "initialAspectRatio"
     * @function Expression.initialAspectRatio
     */

  }, {
    key: "initialAspectRatio",
    value: function initialAspectRatio() {
      return new this("initialAspectRatio");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageCount"
     * @function Expression.pageCount
     */

  }, {
    key: "pageCount",
    value: function pageCount() {
      return new this("pageCount");
    }
    /**
     * @returns Expression new expression with the predefined variable "faceCount"
     * @function Expression.faceCount
     */

  }, {
    key: "faceCount",
    value: function faceCount() {
      return new this("faceCount");
    }
    /**
     * @returns Expression a new expression with the predefined variable "currentPage"
     * @function Expression.currentPage
     */

  }, {
    key: "currentPage",
    value: function currentPage() {
      return new this("currentPage");
    }
    /**
     * @returns Expression a new expression with the predefined variable "tags"
     * @function Expression.tags
     */

  }, {
    key: "tags",
    value: function tags() {
      return new this("tags");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageX"
     * @function Expression.pageX
     */

  }, {
    key: "pageX",
    value: function pageX() {
      return new this("pageX");
    }
    /**
     * @returns Expression a new expression with the predefined variable "pageY"
     * @function Expression.pageY
     */

  }, {
    key: "pageY",
    value: function pageY() {
      return new this("pageY");
    }
  }]);

  return Expression;
}();
/**
 * @internal
 */


Expression.OPERATORS = {
  "=": 'eq',
  "!=": 'ne',
  "<": 'lt',
  ">": 'gt',
  "<=": 'lte',
  ">=": 'gte',
  "&&": 'and',
  "||": 'or',
  "*": "mul",
  "/": "div",
  "+": "add",
  "-": "sub"
};
/**
 * @internal
 */

Expression.PREDEFINED_VARS = {
  "aspect_ratio": "ar",
  "aspectRatio": "ar",
  "current_page": "cp",
  "currentPage": "cp",
  "duration": "du",
  "face_count": "fc",
  "faceCount": "fc",
  "height": "h",
  "initial_aspect_ratio": "iar",
  "initial_duration": "idu",
  "initial_height": "ih",
  "initial_width": "iw",
  "initialAspectRatio": "iar",
  "initialDuration": "idu",
  "initialHeight": "ih",
  "initialWidth": "iw",
  "page_count": "pc",
  "page_x": "px",
  "page_y": "py",
  "pageCount": "pc",
  "pageX": "px",
  "pageY": "py",
  "tags": "tags",
  "width": "w"
};
/**
 * @internal
 */

Expression.BOUNDRY = "[ _]+";
/* harmony default export */ var expression = (Expression);
// CONCATENATED MODULE: ./src/condition.js
function condition_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { condition_typeof = function _typeof(obj) { return typeof obj; }; } else { condition_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return condition_typeof(obj); }

function condition_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function condition_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function condition_createClass(Constructor, protoProps, staticProps) { if (protoProps) condition_defineProperties(Constructor.prototype, protoProps); if (staticProps) condition_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (condition_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Represents a transformation condition.
 * @param {string} conditionStr - a condition in string format
 * @class Condition
 * @example
 * // normally this class is not instantiated directly
 * var tr = cloudinary.Transformation.new()
 *    .if().width( ">", 1000).and().aspectRatio("<", "3:4").then()
 *      .width(1000)
 *      .crop("scale")
 *    .else()
 *      .width(500)
 *      .crop("scale")
 *
 * var tr = cloudinary.Transformation.new()
 *    .if("w > 1000 and aspectRatio < 3:4")
 *      .width(1000)
 *      .crop("scale")
 *    .else()
 *      .width(500)
 *      .crop("scale")
 *
 */

var Condition =
/*#__PURE__*/
function (_Expression) {
  _inherits(Condition, _Expression);

  function Condition(conditionStr) {
    condition_classCallCheck(this, Condition);

    return _possibleConstructorReturn(this, _getPrototypeOf(Condition).call(this, conditionStr));
  }
  /**
   * @function Condition#height
   * @param {string} operator the comparison operator (e.g. "<", "lt")
   * @param {string|number} value the right hand side value
   * @return {Condition} this condition
   */


  condition_createClass(Condition, [{
    key: "height",
    value: function height(operator, value) {
      return this.predicate("h", operator, value);
    }
    /**
     * @function Condition#width
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "width",
    value: function width(operator, value) {
      return this.predicate("w", operator, value);
    }
    /**
     * @function Condition#aspectRatio
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "aspectRatio",
    value: function aspectRatio(operator, value) {
      return this.predicate("ar", operator, value);
    }
    /**
     * @function Condition#pages
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "pageCount",
    value: function pageCount(operator, value) {
      return this.predicate("pc", operator, value);
    }
    /**
     * @function Condition#faces
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "faceCount",
    value: function faceCount(operator, value) {
      return this.predicate("fc", operator, value);
    }
    /**
     * @function Condition#duration
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "duration",
    value: function duration(operator, value) {
      return this.predicate("du", operator, value);
    }
    /**
     * @function Condition#initialDuration
     * @param {string} operator the comparison operator (e.g. "<", "lt")
     * @param {string|number} value the right hand side value
     * @return {Condition} this condition
     */

  }, {
    key: "initialDuration",
    value: function initialDuration(operator, value) {
      return this.predicate("idu", operator, value);
    }
  }]);

  return Condition;
}(expression);

/* harmony default export */ var condition = (Condition);
// CONCATENATED MODULE: ./src/configuration.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function configuration_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function configuration_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function configuration_createClass(Constructor, protoProps, staticProps) { if (protoProps) configuration_defineProperties(Constructor.prototype, protoProps); if (staticProps) configuration_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class for defining account configuration options.
 * Depends on 'utils'
 */

/**
 * Class for defining account configuration options.
 * @constructor Configuration
 * @param {Object} options - The account configuration parameters to set.
 * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
 *  target="_new">Available configuration options</a>
 */

var configuration_Configuration =
/*#__PURE__*/
function () {
  function Configuration(options) {
    configuration_classCallCheck(this, Configuration);

    this.configuration = options == null ? {} : cloneDeep_root_cloneDeep_default()(options);
    defaults(this.configuration, DEFAULT_CONFIGURATION_PARAMS);
  }
  /**
   * Initializes the configuration. This method is a convenience method that invokes both 
   *  {@link Configuration#fromEnvironment|fromEnvironment()} (Node.js environment only) 
   *  and {@link Configuration#fromDocument|fromDocument()}. 
   *  It first tries to retrieve the configuration from the environment variable. 
   *  If not available, it tries from the document meta tags. 
   * @function Configuration#init
   * @return {Configuration} returns `this` for chaining
   * @see fromDocument
   * @see fromEnvironment
   */


  configuration_createClass(Configuration, [{
    key: "init",
    value: function init() {
      this.fromEnvironment();
      this.fromDocument();
      return this;
    }
    /**
     * Set a new configuration item
     * @function Configuration#set
     * @param {string} name - the name of the item to set
     * @param {*} value - the value to be set
     * @return {Configuration}
     *
     */

  }, {
    key: "set",
    value: function set(name, value) {
      this.configuration[name] = value;
      return this;
    }
    /**
     * Get the value of a configuration item
     * @function Configuration#get
     * @param {string} name - the name of the item to set
     * @return {*} the configuration item
     */

  }, {
    key: "get",
    value: function get(name) {
      return this.configuration[name];
    }
  }, {
    key: "merge",
    value: function merge(config) {
      assign_root_assign_default()(this.configuration, cloneDeep_root_cloneDeep_default()(config));
      return this;
    }
    /**
     * Initialize Cloudinary from HTML meta tags.
     * @function Configuration#fromDocument
     * @return {Configuration}
     * @example <meta name="cloudinary_cloud_name" content="mycloud">
     *
     */

  }, {
    key: "fromDocument",
    value: function fromDocument() {
      var el, i, len, meta_elements;
      meta_elements = typeof document !== "undefined" && document !== null ? document.querySelectorAll('meta[name^="cloudinary_"]') : void 0;

      if (meta_elements) {
        for (i = 0, len = meta_elements.length; i < len; i++) {
          el = meta_elements[i];
          this.configuration[el.getAttribute('name').replace('cloudinary_', '')] = el.getAttribute('content');
        }
      }

      return this;
    }
    /**
     * Initialize Cloudinary from the `CLOUDINARY_URL` environment variable.
     *
     * This function will only run under Node.js environment.
     * @function Configuration#fromEnvironment
     * @requires Node.js
     */

  }, {
    key: "fromEnvironment",
    value: function fromEnvironment() {
      var _this = this;

      var cloudinary_url, query, uri, uriRegex;

      if (typeof process !== "undefined" && process !== null && process.env && process.env.CLOUDINARY_URL) {
        cloudinary_url = process.env.CLOUDINARY_URL;
        uriRegex = /cloudinary:\/\/(?:(\w+)(?:\:([\w-]+))?@)?([\w\.-]+)(?:\/([^?]*))?(?:\?(.+))?/;
        uri = uriRegex.exec(cloudinary_url);

        if (uri) {
          if (uri[3] != null) {
            this.configuration['cloud_name'] = uri[3];
          }

          if (uri[1] != null) {
            this.configuration['api_key'] = uri[1];
          }

          if (uri[2] != null) {
            this.configuration['api_secret'] = uri[2];
          }

          if (uri[4] != null) {
            this.configuration['private_cdn'] = uri[4] != null;
          }

          if (uri[4] != null) {
            this.configuration['secure_distribution'] = uri[4];
          }

          query = uri[5];

          if (query != null) {
            query.split('&').forEach(function (value) {
              var _value$split = value.split('='),
                  _value$split2 = _slicedToArray(_value$split, 2),
                  k = _value$split2[0],
                  v = _value$split2[1];

              if (v == null) {
                v = true;
              }

              _this.configuration[k] = v;
            });
          }
        }
      }

      return this;
    }
    /**
     * Create or modify the Cloudinary client configuration
     *
     * Warning: `config()` returns the actual internal configuration object. modifying it will change the configuration.
     *
     * This is a backward compatibility method. For new code, use get(), merge() etc.
     * @function Configuration#config
     * @param {hash|string|boolean} new_config
     * @param {string} new_value
     * @returns {*} configuration, or value
     *
     * @see {@link fromEnvironment} for initialization using environment variables
     * @see {@link fromDocument} for initialization using HTML meta tags
     */

  }, {
    key: "config",
    value: function config(new_config, new_value) {
      switch (false) {
        case new_value === void 0:
          this.set(new_config, new_value);
          return this.configuration;

        case !isString_root_isString_default()(new_config):
          return this.get(new_config);

        case !isPlainObject_root_isPlainObject_default()(new_config):
          this.merge(new_config);
          return this.configuration;

        default:
          // Backward compatibility - return the internal object
          return this.configuration;
      }
    }
    /**
     * Returns a copy of the configuration parameters
     * @function Configuration#toOptions
     * @returns {Object} a key:value collection of the configuration parameters
     */

  }, {
    key: "toOptions",
    value: function toOptions() {
      return cloneDeep_root_cloneDeep_default()(this.configuration);
    }
  }]);

  return Configuration;
}();

var DEFAULT_CONFIGURATION_PARAMS = {
  responsive_class: 'cld-responsive',
  responsive_use_breakpoints: true,
  round_dpr: true,
  secure: (typeof window !== "undefined" && window !== null ? window.location ? window.location.protocol : void 0 : void 0) === 'https:'
};
configuration_Configuration.CONFIG_PARAMS = ["api_key", "api_secret", "callback", "cdn_subdomain", "cloud_name", "cname", "private_cdn", "protocol", "resource_type", "responsive", "responsive_class", "responsive_use_breakpoints", "responsive_width", "round_dpr", "secure", "secure_cdn_subdomain", "secure_distribution", "shorten", "type", "upload_preset", "url_suffix", "use_root_path", "version"];
/* harmony default export */ var src_configuration = (configuration_Configuration);
// CONCATENATED MODULE: ./src/layer/layer.js
function layer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function layer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function layer_createClass(Constructor, protoProps, staticProps) { if (protoProps) layer_defineProperties(Constructor.prototype, protoProps); if (staticProps) layer_defineProperties(Constructor, staticProps); return Constructor; }



var layer_Layer =
/*#__PURE__*/
function () {
  /**
   * Layer
   * @constructor Layer
   * @param {Object} options - layer parameters
   */
  function Layer(options) {
    var _this = this;

    layer_classCallCheck(this, Layer);

    this.options = {};

    if (options != null) {
      ["resourceType", "type", "publicId", "format"].forEach(function (key) {
        var ref;
        return _this.options[key] = (ref = options[key]) != null ? ref : options[snakeCase(key)];
      });
    }
  }

  layer_createClass(Layer, [{
    key: "resourceType",
    value: function resourceType(value) {
      this.options.resourceType = value;
      return this;
    }
  }, {
    key: "type",
    value: function type(value) {
      this.options.type = value;
      return this;
    }
  }, {
    key: "publicId",
    value: function publicId(value) {
      this.options.publicId = value;
      return this;
    }
    /**
     * Get the public ID, formatted for layer parameter
     * @function Layer#getPublicId
     * @return {String} public ID
     */

  }, {
    key: "getPublicId",
    value: function getPublicId() {
      var ref;
      return (ref = this.options.publicId) != null ? ref.replace(/\//g, ":") : void 0;
    }
    /**
     * Get the public ID, with format if present
     * @function Layer#getFullPublicId
     * @return {String} public ID
     */

  }, {
    key: "getFullPublicId",
    value: function getFullPublicId() {
      if (this.options.format != null) {
        return this.getPublicId() + "." + this.options.format;
      } else {
        return this.getPublicId();
      }
    }
  }, {
    key: "format",
    value: function format(value) {
      this.options.format = value;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function Layer#toString
     */

  }, {
    key: "toString",
    value: function toString() {
      var components;
      components = [];

      if (this.options.publicId == null) {
        throw "Must supply publicId";
      }

      if (!(this.options.resourceType === "image")) {
        components.push(this.options.resourceType);
      }

      if (!(this.options.type === "upload")) {
        components.push(this.options.type);
      }

      components.push(this.getFullPublicId());
      return compact_root_compact_default()(components).join(":");
    }
  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor(this.options);
    }
  }]);

  return Layer;
}();

/* harmony default export */ var layer_layer = (layer_Layer);
// CONCATENATED MODULE: ./src/layer/textlayer.js
function textlayer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { textlayer_typeof = function _typeof(obj) { return typeof obj; }; } else { textlayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return textlayer_typeof(obj); }

function textlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function textlayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function textlayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) textlayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) textlayer_defineProperties(Constructor, staticProps); return Constructor; }

function textlayer_possibleConstructorReturn(self, call) { if (call && (textlayer_typeof(call) === "object" || typeof call === "function")) { return call; } return textlayer_assertThisInitialized(self); }

function textlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function textlayer_getPrototypeOf(o) { textlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return textlayer_getPrototypeOf(o); }

function textlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) textlayer_setPrototypeOf(subClass, superClass); }

function textlayer_setPrototypeOf(o, p) { textlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return textlayer_setPrototypeOf(o, p); }




var textlayer_TextLayer =
/*#__PURE__*/
function (_Layer) {
  textlayer_inherits(TextLayer, _Layer);

  /**
   * @constructor TextLayer
   * @param {Object} options - layer parameters
   */
  function TextLayer(options) {
    var _this;

    textlayer_classCallCheck(this, TextLayer);

    var keys;
    _this = textlayer_possibleConstructorReturn(this, textlayer_getPrototypeOf(TextLayer).call(this, options));
    keys = ["resourceType", "resourceType", "fontFamily", "fontSize", "fontWeight", "fontStyle", "textDecoration", "textAlign", "stroke", "letterSpacing", "lineSpacing", "fontHinting", "fontAntialiasing", "text"];

    if (options != null) {
      keys.forEach(function (key) {
        var ref;
        return _this.options[key] = (ref = options[key]) != null ? ref : options[snakeCase(key)];
      });
    }

    _this.options.resourceType = "text";
    return _this;
  }

  textlayer_createClass(TextLayer, [{
    key: "resourceType",
    value: function resourceType(_resourceType) {
      throw "Cannot modify resourceType for text layers";
    }
  }, {
    key: "type",
    value: function type(_type) {
      throw "Cannot modify type for text layers";
    }
  }, {
    key: "format",
    value: function format(_format) {
      throw "Cannot modify format for text layers";
    }
  }, {
    key: "fontFamily",
    value: function fontFamily(_fontFamily) {
      this.options.fontFamily = _fontFamily;
      return this;
    }
  }, {
    key: "fontSize",
    value: function fontSize(_fontSize) {
      this.options.fontSize = _fontSize;
      return this;
    }
  }, {
    key: "fontWeight",
    value: function fontWeight(_fontWeight) {
      this.options.fontWeight = _fontWeight;
      return this;
    }
  }, {
    key: "fontStyle",
    value: function fontStyle(_fontStyle) {
      this.options.fontStyle = _fontStyle;
      return this;
    }
  }, {
    key: "textDecoration",
    value: function textDecoration(_textDecoration) {
      this.options.textDecoration = _textDecoration;
      return this;
    }
  }, {
    key: "textAlign",
    value: function textAlign(_textAlign) {
      this.options.textAlign = _textAlign;
      return this;
    }
  }, {
    key: "stroke",
    value: function stroke(_stroke) {
      this.options.stroke = _stroke;
      return this;
    }
  }, {
    key: "letterSpacing",
    value: function letterSpacing(_letterSpacing) {
      this.options.letterSpacing = _letterSpacing;
      return this;
    }
  }, {
    key: "lineSpacing",
    value: function lineSpacing(_lineSpacing) {
      this.options.lineSpacing = _lineSpacing;
      return this;
    }
  }, {
    key: "fontHinting",
    value: function fontHinting(_fontHinting) {
      this.options.fontHinting = _fontHinting;
      return this;
    }
  }, {
    key: "fontAntialiasing",
    value: function fontAntialiasing(_fontAntialiasing) {
      this.options.fontAntialiasing = _fontAntialiasing;
      return this;
    }
  }, {
    key: "text",
    value: function text(_text) {
      this.options.text = _text;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function TextLayer#toString
     * @return {String}
     */

  }, {
    key: "toString",
    value: function toString() {
      var components, hasPublicId, hasStyle, publicId, re, res, start, style, text, textSource;
      style = this.textStyleIdentifier();

      if (this.options.publicId != null) {
        publicId = this.getFullPublicId();
      }

      if (this.options.text != null) {
        hasPublicId = !isEmpty(publicId);
        hasStyle = !isEmpty(style);

        if (hasPublicId && hasStyle || !hasPublicId && !hasStyle) {
          throw "Must supply either style parameters or a public_id when providing text parameter in a text overlay/underlay, but not both!";
        }

        re = /\$\([a-zA-Z]\w*\)/g;
        start = 0; //        textSource = text.replace(new RegExp("[,/]", 'g'), (c)-> "%#{c.charCodeAt(0).toString(16).toUpperCase()}")

        textSource = smartEscape(this.options.text, /[,\/]/g);
        text = "";

        while (res = re.exec(textSource)) {
          text += smartEscape(textSource.slice(start, res.index));
          text += res[0];
          start = res.index + res[0].length;
        }

        text += smartEscape(textSource.slice(start));
      }

      components = [this.options.resourceType, style, publicId, text];
      return compact_root_compact_default()(components).join(":");
    }
  }, {
    key: "textStyleIdentifier",
    value: function textStyleIdentifier() {
      var components;
      components = [];

      if (this.options.fontWeight !== "normal") {
        components.push(this.options.fontWeight);
      }

      if (this.options.fontStyle !== "normal") {
        components.push(this.options.fontStyle);
      }

      if (this.options.textDecoration !== "none") {
        components.push(this.options.textDecoration);
      }

      components.push(this.options.textAlign);

      if (this.options.stroke !== "none") {
        components.push(this.options.stroke);
      }

      if (!(isEmpty(this.options.letterSpacing) && !isNumberLike(this.options.letterSpacing))) {
        components.push("letter_spacing_" + this.options.letterSpacing);
      }

      if (!(isEmpty(this.options.lineSpacing) && !isNumberLike(this.options.lineSpacing))) {
        components.push("line_spacing_" + this.options.lineSpacing);
      }

      if (!isEmpty(this.options.fontAntialiasing)) {
        components.push("antialias_" + this.options.fontAntialiasing);
      }

      if (!isEmpty(this.options.fontHinting)) {
        components.push("hinting_" + this.options.fontHinting);
      }

      if (!isEmpty(compact_root_compact_default()(components))) {
        if (isEmpty(this.options.fontFamily)) {
          throw "Must supply fontFamily. ".concat(components);
        }

        if (isEmpty(this.options.fontSize) && !isNumberLike(this.options.fontSize)) {
          throw "Must supply fontSize.";
        }
      }

      components.unshift(this.options.fontFamily, this.options.fontSize);
      components = compact_root_compact_default()(components).join("_");
      return components;
    }
  }]);

  return TextLayer;
}(layer_layer);

;
/* harmony default export */ var textlayer = (textlayer_TextLayer);
// CONCATENATED MODULE: ./src/layer/subtitleslayer.js
function subtitleslayer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { subtitleslayer_typeof = function _typeof(obj) { return typeof obj; }; } else { subtitleslayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return subtitleslayer_typeof(obj); }

function subtitleslayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function subtitleslayer_possibleConstructorReturn(self, call) { if (call && (subtitleslayer_typeof(call) === "object" || typeof call === "function")) { return call; } return subtitleslayer_assertThisInitialized(self); }

function subtitleslayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function subtitleslayer_getPrototypeOf(o) { subtitleslayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return subtitleslayer_getPrototypeOf(o); }

function subtitleslayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) subtitleslayer_setPrototypeOf(subClass, superClass); }

function subtitleslayer_setPrototypeOf(o, p) { subtitleslayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return subtitleslayer_setPrototypeOf(o, p); }



var SubtitlesLayer =
/*#__PURE__*/
function (_TextLayer) {
  subtitleslayer_inherits(SubtitlesLayer, _TextLayer);

  /**
   * Represent a subtitles layer
   * @constructor SubtitlesLayer
   * @param {Object} options - layer parameters
   */
  function SubtitlesLayer(options) {
    var _this;

    subtitleslayer_classCallCheck(this, SubtitlesLayer);

    _this = subtitleslayer_possibleConstructorReturn(this, subtitleslayer_getPrototypeOf(SubtitlesLayer).call(this, options));
    _this.options.resourceType = "subtitles";
    return _this;
  }

  return SubtitlesLayer;
}(textlayer);

/* harmony default export */ var subtitleslayer = (SubtitlesLayer);
// CONCATENATED MODULE: ./src/layer/fetchlayer.js
function fetchlayer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { fetchlayer_typeof = function _typeof(obj) { return typeof obj; }; } else { fetchlayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return fetchlayer_typeof(obj); }

function fetchlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fetchlayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function fetchlayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) fetchlayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) fetchlayer_defineProperties(Constructor, staticProps); return Constructor; }

function fetchlayer_possibleConstructorReturn(self, call) { if (call && (fetchlayer_typeof(call) === "object" || typeof call === "function")) { return call; } return fetchlayer_assertThisInitialized(self); }

function fetchlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function fetchlayer_getPrototypeOf(o) { fetchlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return fetchlayer_getPrototypeOf(o); }

function fetchlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) fetchlayer_setPrototypeOf(subClass, superClass); }

function fetchlayer_setPrototypeOf(o, p) { fetchlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return fetchlayer_setPrototypeOf(o, p); }




var fetchlayer_FetchLayer =
/*#__PURE__*/
function (_Layer) {
  fetchlayer_inherits(FetchLayer, _Layer);

  /**
   * @class FetchLayer
   * @classdesc Creates an image layer using a remote URL.
   * @param {Object|string} options - layer parameters or a url
   * @param {string} options.url the url of the image to fetch
   */
  function FetchLayer(options) {
    var _this;

    fetchlayer_classCallCheck(this, FetchLayer);

    _this = fetchlayer_possibleConstructorReturn(this, fetchlayer_getPrototypeOf(FetchLayer).call(this, options));

    if (isString_root_isString_default()(options)) {
      _this.options.url = options;
    } else if (options != null ? options.url : void 0) {
      _this.options.url = options.url;
    }

    return _this;
  }

  fetchlayer_createClass(FetchLayer, [{
    key: "url",
    value: function url(_url) {
      this.options.url = _url;
      return this;
    }
    /**
     * generate the string representation of the layer
     * @function FetchLayer#toString
     * @return {String}
     */

  }, {
    key: "toString",
    value: function toString() {
      return "fetch:".concat(base64EncodeURL(this.options.url));
    }
  }]);

  return FetchLayer;
}(layer_layer);

/* harmony default export */ var fetchlayer = (fetchlayer_FetchLayer);
// CONCATENATED MODULE: ./src/parameters.js
function parameters_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { parameters_typeof = function _typeof(obj) { return typeof obj; }; } else { parameters_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return parameters_typeof(obj); }

function parameters_possibleConstructorReturn(self, call) { if (call && (parameters_typeof(call) === "object" || typeof call === "function")) { return call; } return parameters_assertThisInitialized(self); }

function parameters_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = parameters_getPrototypeOf(object); if (object === null) break; } return object; }

function parameters_getPrototypeOf(o) { parameters_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return parameters_getPrototypeOf(o); }

function parameters_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) parameters_setPrototypeOf(subClass, superClass); }

function parameters_setPrototypeOf(o, p) { parameters_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return parameters_setPrototypeOf(o, p); }

function parameters_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function parameters_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function parameters_createClass(Constructor, protoProps, staticProps) { if (protoProps) parameters_defineProperties(Constructor.prototype, protoProps); if (staticProps) parameters_defineProperties(Constructor, staticProps); return Constructor; }








/**
 * Transformation parameters
 * Depends on 'util', 'transformation'
 */

var parameters_Param =
/*#__PURE__*/
function () {
  /**
   * Represents a single parameter.
   * @class Param
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} shortName - The name of the serialized form of the parameter.
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @ignore
   */
  function Param(name, shortName) {
    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity_root_identity_default.a;

    parameters_classCallCheck(this, Param);

    /**
     * The name of the parameter in snake_case
     * @member {string} Param#name
     */
    this.name = name;
    /**
     * The name of the serialized form of the parameter
     * @member {string} Param#shortName
     */

    this.shortName = shortName;
    /**
     * Manipulate origValue when value is called
     * @member {function} Param#process
     */

    this.process = process;
  }
  /**
   * Set a (unprocessed) value for this parameter
   * @function Param#set
   * @param {*} origValue - the value of the parameter
   * @return {Param} self for chaining
   */


  parameters_createClass(Param, [{
    key: "set",
    value: function set(origValue) {
      this.origValue = origValue;
      return this;
    }
    /**
     * Generate the serialized form of the parameter
     * @function Param#serialize
     * @return {string} the serialized form of the parameter
     */

  }, {
    key: "serialize",
    value: function serialize() {
      var val, valid;
      val = this.value();
      valid = isArray_root_isArray_default()(val) || isPlainObject_root_isPlainObject_default()(val) || isString_root_isString_default()(val) ? !isEmpty(val) : val != null;

      if (this.shortName != null && valid) {
        return "".concat(this.shortName, "_").concat(val);
      } else {
        return '';
      }
    }
    /**
     * Return the processed value of the parameter
     * @function Param#value
     */

  }, {
    key: "value",
    value: function value() {
      return this.process(this.origValue);
    }
  }, {
    key: "build_array",
    value: function build_array(arg) {
      if (arg == null) {
        return [];
      } else if (isArray_root_isArray_default()(arg)) {
        return arg;
      } else {
        return [arg];
      }
    }
    /**
    * Covert value to video codec string.
    *
    * If the parameter is an object,
    * @param {(string|Object)} param - the video codec as either a String or a Hash
    * @return {string} the video codec string in the format codec:profile:level
    * @example
    * vc_[ :profile : [level]]
    * or
      { codec: 'h264', profile: 'basic', level: '3.1' }
    * @ignore
     */

  }], [{
    key: "norm_color",
    value: function norm_color(value) {
      return value != null ? value.replace(/^#/, 'rgb:') : void 0;
    }
  }, {
    key: "process_video_params",
    value: function process_video_params(param) {
      var video;

      switch (param.constructor) {
        case Object:
          video = "";

          if ('codec' in param) {
            video = param['codec'];

            if ('profile' in param) {
              video += ":" + param['profile'];

              if ('level' in param) {
                video += ":" + param['level'];
              }
            }
          }

          return video;

        case String:
          return param;

        default:
          return null;
      }
    }
  }]);

  return Param;
}();

var parameters_ArrayParam =
/*#__PURE__*/
function (_Param) {
  parameters_inherits(ArrayParam, _Param);

  /**
   * A parameter that represents an array.
   * @param {string} name - The name of the parameter in snake_case.
   * @param {string} shortName - The name of the serialized form of the parameter
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {string} [sep='.'] - The separator to use when joining the array elements together
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @class ArrayParam
   * @extends Param
   * @ignore
   */
  function ArrayParam(name, shortName) {
    var _this;

    var sep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    var process = arguments.length > 3 ? arguments[3] : undefined;

    parameters_classCallCheck(this, ArrayParam);

    _this = parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(ArrayParam).call(this, name, shortName, process));
    _this.sep = sep;
    return _this;
  }

  parameters_createClass(ArrayParam, [{
    key: "serialize",
    value: function serialize() {
      if (this.shortName != null) {
        var arrayValue = this.value();

        if (isEmpty(arrayValue)) {
          return '';
        } else if (isString_root_isString_default()(arrayValue)) {
          return "".concat(this.shortName, "_").concat(arrayValue);
        } else {
          var flat = arrayValue.map(function (t) {
            return isFunction_root_isFunction_(t.serialize) ? t.serialize() : t;
          }).join(this.sep);
          return "".concat(this.shortName, "_").concat(flat);
        }
      } else {
        return '';
      }
    }
  }, {
    key: "value",
    value: function value() {
      var _this2 = this;

      if (isArray_root_isArray_default()(this.origValue)) {
        return this.origValue.map(function (v) {
          return _this2.process(v);
        });
      } else {
        return this.process(this.origValue);
      }
    }
  }, {
    key: "set",
    value: function set(origValue) {
      if (origValue == null || isArray_root_isArray_default()(origValue)) {
        return _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, origValue);
      } else {
        return _get(parameters_getPrototypeOf(ArrayParam.prototype), "set", this).call(this, [origValue]);
      }
    }
  }]);

  return ArrayParam;
}(parameters_Param);

var parameters_TransformationParam =
/*#__PURE__*/
function (_Param2) {
  parameters_inherits(TransformationParam, _Param2);

  /**
   * A parameter that represents a transformation
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} [shortName='t'] - The name of the serialized form of the parameter
   * @param {string} [sep='.'] - The separator to use when joining the array elements together
   * @param {function} [process=Util.identity ] - Manipulate origValue when value is called
   * @class TransformationParam
   * @extends Param
   * @ignore
   */
  function TransformationParam(name) {
    var _this3;

    var shortName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "t";
    var sep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
    var process = arguments.length > 3 ? arguments[3] : undefined;

    parameters_classCallCheck(this, TransformationParam);

    _this3 = parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(TransformationParam).call(this, name, shortName, process));
    _this3.sep = sep;
    return _this3;
  }

  parameters_createClass(TransformationParam, [{
    key: "serialize",
    value: function serialize() {
      var _this4 = this;

      if (isEmpty(this.value())) {
        return '';
      } else if (baseutil_allStrings(this.value())) {
        var joined = this.value().join(this.sep);

        if (!isEmpty(joined)) {
          return "".concat(this.shortName, "_").concat(joined);
        } else {
          return '';
        }
      } else {
        return this.value().map(function (t) {
          if (isString_root_isString_default()(t) && !isEmpty(t)) {
            return "".concat(_this4.shortName, "_").concat(t);
          } else if (isFunction_root_isFunction_(t.serialize)) {
            return t.serialize();
          } else if (isPlainObject_root_isPlainObject_default()(t) && !isEmpty(t)) {
            return new src_transformation(t).serialize();
          } else {
            return undefined;
          }
        }).filter(function (t) {
          return t;
        });
      }
    }
  }, {
    key: "set",
    value: function set(origValue1) {
      this.origValue = origValue1;

      if (isArray_root_isArray_default()(this.origValue)) {
        return _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, this.origValue);
      } else {
        return _get(parameters_getPrototypeOf(TransformationParam.prototype), "set", this).call(this, [this.origValue]);
      }
    }
  }]);

  return TransformationParam;
}(parameters_Param);

var RangeParam =
/*#__PURE__*/
function (_Param3) {
  parameters_inherits(RangeParam, _Param3);

  /**
   * A parameter that represents a range.
   * @param {string} name - The name of the parameter in snake_case
   * @param {string} shortName - The name of the serialized form of the parameter
   *                         If a value is not provided, the parameter will not be serialized.
   * @param {function} [process=norm_range_value ] - Manipulate origValue when value is called
   * @class RangeParam
   * @extends Param
   * @ignore
   */
  function RangeParam(name, shortName, process) {
    var _this5;

    parameters_classCallCheck(this, RangeParam);

    _this5 = parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(RangeParam).call(this, name, shortName, process));
    _this5.process || (_this5.process = _this5.norm_range_value);
    return _this5;
  }

  parameters_createClass(RangeParam, null, [{
    key: "norm_range_value",
    value: function norm_range_value(value) {
      var modifier, offset;
      offset = String(value).match(new RegExp('^' + offset_any_pattern + '$'));

      if (offset) {
        modifier = offset[5] != null ? 'p' : '';
        value = (offset[1] || offset[4]) + modifier;
      }

      return value;
    }
  }]);

  return RangeParam;
}(parameters_Param);

var parameters_RawParam =
/*#__PURE__*/
function (_Param4) {
  parameters_inherits(RawParam, _Param4);

  function RawParam(name, shortName) {
    var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity_root_identity_default.a;

    parameters_classCallCheck(this, RawParam);

    return parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(RawParam).call(this, name, shortName, process));
  }

  parameters_createClass(RawParam, [{
    key: "serialize",
    value: function serialize() {
      return this.value();
    }
  }]);

  return RawParam;
}(parameters_Param);

var LAYER_KEYWORD_PARAMS = [["font_weight", "normal"], ["font_style", "normal"], ["text_decoration", "none"], ["text_align", null], ["stroke", "none"], ["letter_spacing", null], ["line_spacing", null], ["font_antialias", null], ["font_hinting", null]];

var parameters_LayerParam =
/*#__PURE__*/
function (_Param5) {
  parameters_inherits(LayerParam, _Param5);

  function LayerParam() {
    parameters_classCallCheck(this, LayerParam);

    return parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(LayerParam).apply(this, arguments));
  }

  parameters_createClass(LayerParam, [{
    key: "value",
    // Parse layer options
    // @return [string] layer transformation string
    // @private
    value: function value() {
      if (this.origValue == null) {
        return '';
      }

      var result;

      if (this.origValue instanceof layer_layer) {
        result = this.origValue;
      } else if (isPlainObject_root_isPlainObject_default()(this.origValue)) {
        var layerOptions = withCamelCaseKeys(this.origValue);

        if (layerOptions.resourceType === "text" || layerOptions.text != null) {
          result = new textlayer(layerOptions);
        } else if (layerOptions.resourceType === "subtitles") {
          result = new subtitleslayer(layerOptions);
        } else if (layerOptions.resourceType === "fetch" || layerOptions.url != null) {
          result = new fetchlayer(layerOptions);
        } else {
          result = new layer_layer(layerOptions);
        }
      } else if (isString_root_isString_default()(this.origValue)) {
        if (/^fetch:.+/.test(this.origValue)) {
          result = new fetchlayer(this.origValue.substr(6));
        } else {
          result = this.origValue;
        }
      } else {
        result = '';
      }

      return result.toString();
    }
  }, {
    key: "textStyle",
    value: function textStyle(layer) {
      return new textlayer(layer).textStyleIdentifier();
    }
  }]);

  return LayerParam;
}(parameters_Param);

var parameters_ExpressionParam =
/*#__PURE__*/
function (_Param6) {
  parameters_inherits(ExpressionParam, _Param6);

  function ExpressionParam() {
    parameters_classCallCheck(this, ExpressionParam);

    return parameters_possibleConstructorReturn(this, parameters_getPrototypeOf(ExpressionParam).apply(this, arguments));
  }

  parameters_createClass(ExpressionParam, [{
    key: "serialize",
    value: function serialize() {
      return expression.normalize(_get(parameters_getPrototypeOf(ExpressionParam.prototype), "serialize", this).call(this));
    }
  }]);

  return ExpressionParam;
}(parameters_Param);


// CONCATENATED MODULE: ./src/transformation.js
function transformation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { transformation_typeof = function _typeof(obj) { return typeof obj; }; } else { transformation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return transformation_typeof(obj); }

function transformation_possibleConstructorReturn(self, call) { if (call && (transformation_typeof(call) === "object" || typeof call === "function")) { return call; } return transformation_assertThisInitialized(self); }

function transformation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function transformation_getPrototypeOf(o) { transformation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return transformation_getPrototypeOf(o); }

function transformation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) transformation_setPrototypeOf(subClass, superClass); }

function transformation_setPrototypeOf(o, p) { transformation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return transformation_setPrototypeOf(o, p); }

function transformation_slicedToArray(arr, i) { return transformation_arrayWithHoles(arr) || transformation_iterableToArrayLimit(arr, i) || transformation_nonIterableRest(); }

function transformation_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function transformation_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function transformation_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function transformation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function transformation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function transformation_createClass(Constructor, protoProps, staticProps) { if (protoProps) transformation_defineProperties(Constructor.prototype, protoProps); if (staticProps) transformation_defineProperties(Constructor, staticProps); return Constructor; }






/**
 * Assign key, value to target, when value is not null.<br>
 *   This function mutates the target!
 * @param {object} target the object to assign the values to
 * @param {object} sources one or more objects to get values from
 * @returns {object} the target after the assignment
 */

function assignNotNull(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (source) {
    Object.keys(source).forEach(function (key) {
      if (source[key] != null) {
        target[key] = source[key];
      }
    });
  });
  return target;
}
/**
 * TransformationBase
 * Depends on 'configuration', 'parameters','util'
 * @internal
 */


var transformation_TransformationBase =
/*#__PURE__*/
function () {
  /**
   * The base class for transformations.
   * Members of this class are documented as belonging to the {@link Transformation} class for convenience.
   * @class TransformationBase
   */
  function TransformationBase(options) {
    transformation_classCallCheck(this, TransformationBase);

    /** @private */

    /** @private */
    var parent, trans;
    parent = void 0;
    trans = {};
    /**
     * Return an options object that can be used to create an identical Transformation
     * @function Transformation#toOptions
     * @return {Object} Returns a plain object representing this transformation
     */

    this.toOptions = function (withChain) {
      var opt = {};

      if (withChain == null) {
        withChain = true;
      }

      Object.keys(trans).forEach(function (key) {
        return opt[key] = trans[key].origValue;
      });
      assignNotNull(opt, this.otherOptions);

      if (withChain && !isEmpty(this.chained)) {
        var list = this.chained.map(function (tr) {
          return tr.toOptions();
        });
        list.push(opt);
        opt = {};
        assignNotNull(opt, this.otherOptions);
        opt.transformation = list;
      }

      return opt;
    };
    /**
     * Set a parent for this object for chaining purposes.
     *
     * @function Transformation#setParent
     * @param {Object} object - the parent to be assigned to
     * @returns {Transformation} Returns this instance for chaining purposes.
     */


    this.setParent = function (object) {
      parent = object;

      if (object != null) {
        this.fromOptions(typeof object.toOptions === "function" ? object.toOptions() : void 0);
      }

      return this;
    };
    /**
     * Returns the parent of this object in the chain
     * @function Transformation#getParent
     * @protected
     * @return {Object} Returns the parent of this object if there is any
     */


    this.getParent = function () {
      return parent;
    }; // Helper methods to create parameter methods
    // These methods are defined here because they access `trans` which is
    // a private member of `TransformationBase`

    /** @protected */


    this.param = function (value, name, abbr, defaultValue, process) {
      if (process == null) {
        if (isFunction_root_isFunction_(defaultValue)) {
          process = defaultValue;
        } else {
          process = identity_root_identity_default.a;
        }
      }

      trans[name] = new parameters_Param(name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.rawParam = function (value, name, abbr, defaultValue) {
      var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : identity_root_identity_default.a;
      process = lastArgCallback(arguments);
      trans[name] = new parameters_RawParam(name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.rangeParam = function (value, name, abbr, defaultValue) {
      var process = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : identity_root_identity_default.a;
      process = lastArgCallback(arguments);
      trans[name] = new RangeParam(name, abbr, process).set(value);
      return this;
    };
    /** @protected */


    this.arrayParam = function (value, name, abbr) {
      var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ":";
      var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : identity_root_identity_default.a;
      process = lastArgCallback(arguments);
      trans[name] = new parameters_ArrayParam(name, abbr, sep, process).set(value);
      return this;
    };
    /** @protected */


    this.transformationParam = function (value, name, abbr) {
      var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ".";
      var defaultValue = arguments.length > 4 ? arguments[4] : undefined;
      var process = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : identity_root_identity_default.a;
      process = lastArgCallback(arguments);
      trans[name] = new parameters_TransformationParam(name, abbr, sep, process).set(value);
      return this;
    };

    this.layerParam = function (value, name, abbr) {
      trans[name] = new parameters_LayerParam(name, abbr).set(value);
      return this;
    }; // End Helper methods

    /**
     * Get the value associated with the given name.
     * @function Transformation#getValue
     * @param {string} name - the name of the parameter
     * @return {*} the processed value associated with the given name
     * @description Use {@link get}.origValue for the value originally provided for the parameter
     */


    this.getValue = function (name) {
      var value = trans[name] && trans[name].value();
      return value != null ? value : this.otherOptions[name];
    };
    /**
     * Get the parameter object for the given parameter name
     * @function Transformation#get
     * @param {string} name the name of the transformation parameter
     * @returns {Param} the param object for the given name, or undefined
     */


    this.get = function (name) {
      return trans[name];
    };
    /**
     * Remove a transformation option from the transformation.
     * @function Transformation#remove
     * @param {string} name - the name of the option to remove
     * @return {*} Returns the option that was removed or null if no option by that name was found. The type of the
     *              returned value depends on the value.
     */


    this.remove = function (name) {
      var temp;

      switch (false) {
        case trans[name] == null:
          temp = trans[name];
          delete trans[name];
          return temp.origValue;

        case this.otherOptions[name] == null:
          temp = this.otherOptions[name];
          delete this.otherOptions[name];
          return temp;

        default:
          return null;
      }
    };
    /**
     * Return an array of all the keys (option names) in the transformation.
     * @return {Array<string>} the keys in snakeCase format
     */


    this.keys = function () {
      var key;
      return function () {
        var results;
        results = [];

        for (key in trans) {
          if (key != null) {
            results.push(key.match(VAR_NAME_RE) ? key : snakeCase(key));
          }
        }

        return results;
      }().sort();
    };
    /**
     * Returns a plain object representation of the transformation. Values are processed.
     * @function Transformation#toPlainObject
     * @return {Object} the transformation options as plain object
     */


    this.toPlainObject = function () {
      var hash, key, list;
      hash = {};

      for (key in trans) {
        hash[key] = trans[key].value();

        if (isPlainObject_root_isPlainObject_default()(hash[key])) {
          hash[key] = cloneDeep_root_cloneDeep_default()(hash[key]);
        }
      }

      if (!isEmpty(this.chained)) {
        list = this.chained.map(function (tr) {
          return tr.toPlainObject();
        });
        list.push(hash);
        hash = {
          transformation: list
        };
      }

      return hash;
    };
    /**
     * Complete the current transformation and chain to a new one.
     * In the URL, transformations are chained together by slashes.
     * @function Transformation#chain
     * @return {Transformation} Returns this transformation for chaining
     * @example
     * var tr = cloudinary.Transformation.new();
     * tr.width(10).crop('fit').chain().angle(15).serialize()
     * // produces "c_fit,w_10/a_15"
     */


    this.chain = function () {
      var names, tr;
      names = Object.getOwnPropertyNames(trans);

      if (names.length !== 0) {
        tr = new this.constructor(this.toOptions(false));
        this.resetTransformations();
        this.chained.push(tr);
      }

      return this;
    };

    this.resetTransformations = function () {
      trans = {};
      return this;
    };

    this.otherOptions = {};
    this.chained = [];
    this.fromOptions(options);
  }
  /**
   * Merge the provided options with own's options
   * @param {Object} [options={}] key-value list of options
   * @returns {Transformation} Returns this instance for chaining
   */


  transformation_createClass(TransformationBase, [{
    key: "fromOptions",
    value: function fromOptions(options) {
      if (options instanceof TransformationBase) {
        this.fromTransformation(options);
      } else {
        options || (options = {});

        if (isString_root_isString_default()(options) || isArray_root_isArray_default()(options)) {
          options = {
            transformation: options
          };
        }

        options = cloneDeep_root_cloneDeep_default()(options, function (value) {
          if (value instanceof TransformationBase || value instanceof Layer) {
            return new value.clone();
          }
        }); // Handling of "if" statements precedes other options as it creates a chained transformation

        if (options["if"]) {
          this.set("if", options["if"]);
          delete options["if"];
        }

        for (var key in options) {
          var opt = options[key];

          if (opt != null) {
            if (key.match(VAR_NAME_RE)) {
              if (key !== '$attr') {
                this.set('variable', key, opt);
              }
            } else {
              this.set(key, opt);
            }
          }
        }
      }

      return this;
    }
  }, {
    key: "fromTransformation",
    value: function fromTransformation(other) {
      var _this = this;

      if (other instanceof TransformationBase) {
        other.keys().forEach(function (key) {
          return _this.set(key, other.get(key).origValue);
        });
      }

      return this;
    }
    /**
     * Set a parameter.
     * The parameter name `key` is converted to
     * @param {string} key - the name of the parameter
     * @param {*} values - the value of the parameter
     * @returns {Transformation} Returns this instance for chaining
     */

  }, {
    key: "set",
    value: function set(key) {
      var camelKey;
      camelKey = camelCase(key);

      for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        values[_key2 - 1] = arguments[_key2];
      }

      if (includes_root_includes_default()(transformation_Transformation.methods, camelKey)) {
        this[camelKey].apply(this, values);
      } else {
        this.otherOptions[key] = values[0];
      }

      return this;
    }
  }, {
    key: "hasLayer",
    value: function hasLayer() {
      return this.getValue("overlay") || this.getValue("underlay");
    }
    /**
     * Generate a string representation of the transformation.
     * @function Transformation#serialize
     * @return {string} Returns the transformation as a string
     */

  }, {
    key: "serialize",
    value: function serialize() {
      var ifParam, j, len, paramList, ref, ref1, ref2, ref3, ref4, resultArray, t, transformationList, transformationString, transformations, value, variables, vars;
      resultArray = this.chained.map(function (tr) {
        return tr.serialize();
      });
      paramList = this.keys();
      transformations = (ref = this.get("transformation")) != null ? ref.serialize() : void 0;
      ifParam = (ref1 = this.get("if")) != null ? ref1.serialize() : void 0;
      variables = processVar((ref2 = this.get("variables")) != null ? ref2.value() : void 0);
      paramList = difference_root_difference_default()(paramList, ["transformation", "if", "variables"]);
      vars = [];
      transformationList = [];

      for (j = 0, len = paramList.length; j < len; j++) {
        t = paramList[j];

        if (t.match(VAR_NAME_RE)) {
          vars.push(t + "_" + expression.normalize((ref3 = this.get(t)) != null ? ref3.value() : void 0));
        } else {
          transformationList.push((ref4 = this.get(t)) != null ? ref4.serialize() : void 0);
        }
      }

      switch (false) {
        case !isString_root_isString_default()(transformations):
          transformationList.push(transformations);
          break;

        case !isArray_root_isArray_default()(transformations):
          resultArray = resultArray.concat(transformations);
      }

      transformationList = function () {
        var k, len1, results;
        results = [];

        for (k = 0, len1 = transformationList.length; k < len1; k++) {
          value = transformationList[k];

          if (isArray_root_isArray_default()(value) && !isEmpty(value) || !isArray_root_isArray_default()(value) && value) {
            results.push(value);
          }
        }

        return results;
      }();

      transformationList = vars.sort().concat(variables).concat(transformationList.sort());

      if (ifParam === "if_end") {
        transformationList.push(ifParam);
      } else if (!isEmpty(ifParam)) {
        transformationList.unshift(ifParam);
      }

      transformationString = compact_root_compact_default()(transformationList).join(this.param_separator);

      if (!isEmpty(transformationString)) {
        resultArray.push(transformationString);
      }

      return compact_root_compact_default()(resultArray).join(this.trans_separator);
    }
    /**
     * Provide a list of all the valid transformation option names
     * @function Transformation#listNames
     * @private
     * @return {Array<string>} a array of all the valid option names
     */

  }, {
    key: "listNames",
    value: function listNames() {
      return transformation_Transformation.methods;
    }
    /**
     * Returns the attributes for an HTML tag.
     * @function Cloudinary.toHtmlAttributes
     * @return PlainObject
     */

  }, {
    key: "toHtmlAttributes",
    value: function toHtmlAttributes() {
      var _this2 = this;

      var attrName, height, key, options, ref2, ref3, value, width;
      options = {};

      for (key in this.otherOptions) {
        value = this.otherOptions[key];

        if (includes_root_includes_default()(transformation_Transformation.PARAM_NAMES, snakeCase(key))) {
          continue;
        }

        attrName = /^html_/.test(key) ? key.slice(5) : key;
        options[attrName] = value;
      } // convert all "html_key" to "key" with the same value


      this.keys().forEach(function (key) {
        if (/^html_/.test(key)) {
          options[camelCase(key.slice(5))] = _this2.getValue(key);
        }
      });

      if (!(this.hasLayer() || this.getValue("angle") || includes_root_includes_default()(["fit", "limit", "lfill"], this.getValue("crop")))) {
        width = (ref2 = this.get("width")) != null ? ref2.origValue : void 0;
        height = (ref3 = this.get("height")) != null ? ref3.origValue : void 0;

        if (parseFloat(width) >= 1.0) {
          if (options['width'] == null) {
            options['width'] = width;
          }
        }

        if (parseFloat(height) >= 1.0) {
          if (options['height'] == null) {
            options['height'] = height;
          }
        }
      }

      return options;
    }
  }, {
    key: "isValidParamName",
    value: function isValidParamName(name) {
      return transformation_Transformation.methods.indexOf(camelCase(name)) >= 0;
    }
    /**
     * Delegate to the parent (up the call chain) to produce HTML
     * @function Transformation#toHtml
     * @return {string} HTML representation of the parent if possible.
     * @example
     * tag = cloudinary.ImageTag.new("sample", {cloud_name: "demo"})
     * // ImageTag {name: "img", publicId: "sample"}
     * tag.toHtml()
     * // <img src="http://res.cloudinary.com/demo/image/upload/sample">
     * tag.transformation().crop("fit").width(300).toHtml()
     * // <img src="http://res.cloudinary.com/demo/image/upload/c_fit,w_300/sample">
     */

  }, {
    key: "toHtml",
    value: function toHtml() {
      var ref;
      return (ref = this.getParent()) != null ? typeof ref.toHtml === "function" ? ref.toHtml() : void 0 : void 0;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.serialize();
    }
  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor(this.toOptions(true));
    }
  }]);

  return TransformationBase;
}();

;
var VAR_NAME_RE = /^\$[a-zA-Z0-9]+$/;
transformation_TransformationBase.prototype.trans_separator = '/';
transformation_TransformationBase.prototype.param_separator = ',';

function lastArgCallback(args) {
  var callback;
  callback = args != null ? args[args.length - 1] : void 0;

  if (isFunction_root_isFunction_(callback)) {
    return callback;
  } else {
    return void 0;
  }
}

function processVar(varArray) {
  var j, len, name, results, v;

  if (isArray_root_isArray_default()(varArray)) {
    results = [];

    for (j = 0, len = varArray.length; j < len; j++) {
      var _varArray$j = transformation_slicedToArray(varArray[j], 2);

      name = _varArray$j[0];
      v = _varArray$j[1];
      results.push("".concat(name, "_").concat(expression.normalize(v)));
    }

    return results;
  } else {
    return varArray;
  }
}
/**
 * Transformation Class methods.
 * This is a list of the parameters defined in Transformation.
 * Values are camelCased.
 * @const Transformation.methods
 * @private
 * @ignore
 * @type {Array<string>}
 */

/**
 * Parameters that are filtered out before passing the options to an HTML tag.
 *
 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
 * @const {Array<string>} Transformation.PARAM_NAMES
 * @private
 * @ignore
 * @see toHtmlAttributes
 */


var transformation_Transformation =
/*#__PURE__*/
function (_TransformationBase) {
  transformation_inherits(Transformation, _TransformationBase);

  /**
   * Represents a single transformation.
   * @class Transformation
   * @example
   * t = new cloudinary.Transformation();
   * t.angle(20).crop("scale").width("auto");
   *
   * // or
   *
   * t = new cloudinary.Transformation( {angle: 20, crop: "scale", width: "auto"});
   * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" 
   *  target="_blank">Available image transformations</a>
   * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" 
   *  target="_blank">Available video transformations</a>
   */
  function Transformation(options) {
    transformation_classCallCheck(this, Transformation);

    return transformation_possibleConstructorReturn(this, transformation_getPrototypeOf(Transformation).call(this, options));
  }
  /**
   * Convenience constructor
   * @param {Object} options
   * @return {Transformation}
   * @example cl = cloudinary.Transformation.new( {angle: 20, crop: "scale", width: "auto"})
   */


  transformation_createClass(Transformation, [{
    key: "angle",

    /*
      Transformation Parameters
    */
    value: function angle(value) {
      return this.arrayParam(value, "angle", "a", ".", expression.normalize);
    }
  }, {
    key: "audioCodec",
    value: function audioCodec(value) {
      return this.param(value, "audio_codec", "ac");
    }
  }, {
    key: "audioFrequency",
    value: function audioFrequency(value) {
      return this.param(value, "audio_frequency", "af");
    }
  }, {
    key: "aspectRatio",
    value: function aspectRatio(value) {
      return this.param(value, "aspect_ratio", "ar", expression.normalize);
    }
  }, {
    key: "background",
    value: function background(value) {
      return this.param(value, "background", "b", parameters_Param.norm_color);
    }
  }, {
    key: "bitRate",
    value: function bitRate(value) {
      return this.param(value, "bit_rate", "br");
    }
  }, {
    key: "border",
    value: function border(value) {
      return this.param(value, "border", "bo", function (border) {
        if (isPlainObject_root_isPlainObject_default()(border)) {
          border = assign_root_assign_default()({}, {
            color: "black",
            width: 2
          }, border);
          return "".concat(border.width, "px_solid_").concat(parameters_Param.norm_color(border.color));
        } else {
          return border;
        }
      });
    }
  }, {
    key: "color",
    value: function color(value) {
      return this.param(value, "color", "co", parameters_Param.norm_color);
    }
  }, {
    key: "colorSpace",
    value: function colorSpace(value) {
      return this.param(value, "color_space", "cs");
    }
  }, {
    key: "crop",
    value: function crop(value) {
      return this.param(value, "crop", "c");
    }
  }, {
    key: "defaultImage",
    value: function defaultImage(value) {
      return this.param(value, "default_image", "d");
    }
  }, {
    key: "delay",
    value: function delay(value) {
      return this.param(value, "delay", "dl");
    }
  }, {
    key: "density",
    value: function density(value) {
      return this.param(value, "density", "dn");
    }
  }, {
    key: "duration",
    value: function duration(value) {
      return this.rangeParam(value, "duration", "du");
    }
  }, {
    key: "dpr",
    value: function dpr(value) {
      return this.param(value, "dpr", "dpr", function (dpr) {
        dpr = dpr.toString();

        if (dpr != null ? dpr.match(/^\d+$/) : void 0) {
          return dpr + ".0";
        } else {
          return expression.normalize(dpr);
        }
      });
    }
  }, {
    key: "effect",
    value: function effect(value) {
      return this.arrayParam(value, "effect", "e", ":", expression.normalize);
    }
  }, {
    key: "else",
    value: function _else() {
      return this["if"]('else');
    }
  }, {
    key: "endIf",
    value: function endIf() {
      return this["if"]('end');
    }
  }, {
    key: "endOffset",
    value: function endOffset(value) {
      return this.rangeParam(value, "end_offset", "eo");
    }
  }, {
    key: "fallbackContent",
    value: function fallbackContent(value) {
      return this.param(value, "fallback_content");
    }
  }, {
    key: "fetchFormat",
    value: function fetchFormat(value) {
      return this.param(value, "fetch_format", "f");
    }
  }, {
    key: "format",
    value: function format(value) {
      return this.param(value, "format");
    }
  }, {
    key: "flags",
    value: function flags(value) {
      return this.arrayParam(value, "flags", "fl", ".");
    }
  }, {
    key: "gravity",
    value: function gravity(value) {
      return this.param(value, "gravity", "g");
    }
  }, {
    key: "fps",
    value: function fps(value) {
      return this.param(value, "fps", "fps", function (fps) {
        if (isString_root_isString_default()(fps)) {
          return fps;
        } else if (isArray_root_isArray_default()(fps)) {
          return fps.join("-");
        } else {
          return fps;
        }
      });
    }
  }, {
    key: "height",
    value: function height(value) {
      var _this3 = this;

      return this.param(value, "height", "h", function () {
        if (_this3.getValue("crop") || _this3.getValue("overlay") || _this3.getValue("underlay")) {
          return expression.normalize(value);
        } else {
          return null;
        }
      });
    }
  }, {
    key: "htmlHeight",
    value: function htmlHeight(value) {
      return this.param(value, "html_height");
    }
  }, {
    key: "htmlWidth",
    value: function htmlWidth(value) {
      return this.param(value, "html_width");
    }
  }, {
    key: "if",
    value: function _if() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var i, ifVal, j, ref, trIf, trRest;

      switch (value) {
        case "else":
          this.chain();
          return this.param(value, "if", "if");

        case "end":
          this.chain();

          for (i = j = ref = this.chained.length - 1; j >= 0; i = j += -1) {
            ifVal = this.chained[i].getValue("if");

            if (ifVal === "end") {
              break;
            } else if (ifVal != null) {
              trIf = Transformation["new"]()["if"](ifVal);
              this.chained[i].remove("if");
              trRest = this.chained[i];
              this.chained[i] = Transformation["new"]().transformation([trIf, trRest]);

              if (ifVal !== "else") {
                break;
              }
            }
          }

          return this.param(value, "if", "if");

        case "":
          return condition["new"]().setParent(this);

        default:
          return this.param(value, "if", "if", function (value) {
            return condition["new"](value).toString();
          });
      }
    }
  }, {
    key: "keyframeInterval",
    value: function keyframeInterval(value) {
      return this.param(value, "keyframe_interval", "ki");
    }
  }, {
    key: "offset",
    value: function offset(value) {
      var end_o, start_o;

      var _ref = isFunction_root_isFunction_(value != null ? value.split : void 0) ? value.split('..') : isArray_root_isArray_default()(value) ? value : [null, null];

      var _ref2 = transformation_slicedToArray(_ref, 2);

      start_o = _ref2[0];
      end_o = _ref2[1];

      if (start_o != null) {
        this.startOffset(start_o);
      }

      if (end_o != null) {
        return this.endOffset(end_o);
      }
    }
  }, {
    key: "opacity",
    value: function opacity(value) {
      return this.param(value, "opacity", "o", expression.normalize);
    }
  }, {
    key: "overlay",
    value: function overlay(value) {
      return this.layerParam(value, "overlay", "l");
    }
  }, {
    key: "page",
    value: function page(value) {
      return this.param(value, "page", "pg");
    }
  }, {
    key: "poster",
    value: function poster(value) {
      return this.param(value, "poster");
    }
  }, {
    key: "prefix",
    value: function prefix(value) {
      return this.param(value, "prefix", "p");
    }
  }, {
    key: "quality",
    value: function quality(value) {
      return this.param(value, "quality", "q", expression.normalize);
    }
  }, {
    key: "radius",
    value: function radius(value) {
      return this.arrayParam(value, "radius", "r", ":", expression.normalize);
    }
  }, {
    key: "rawTransformation",
    value: function rawTransformation(value) {
      return this.rawParam(value, "raw_transformation");
    }
  }, {
    key: "size",
    value: function size(value) {
      var height, width;

      if (isFunction_root_isFunction_(value != null ? value.split : void 0)) {
        var _value$split = value.split('x');

        var _value$split2 = transformation_slicedToArray(_value$split, 2);

        width = _value$split2[0];
        height = _value$split2[1];
        this.width(width);
        return this.height(height);
      }
    }
  }, {
    key: "sourceTypes",
    value: function sourceTypes(value) {
      return this.param(value, "source_types");
    }
  }, {
    key: "sourceTransformation",
    value: function sourceTransformation(value) {
      return this.param(value, "source_transformation");
    }
  }, {
    key: "startOffset",
    value: function startOffset(value) {
      return this.rangeParam(value, "start_offset", "so");
    }
  }, {
    key: "streamingProfile",
    value: function streamingProfile(value) {
      return this.param(value, "streaming_profile", "sp");
    }
  }, {
    key: "transformation",
    value: function transformation(value) {
      return this.transformationParam(value, "transformation", "t");
    }
  }, {
    key: "underlay",
    value: function underlay(value) {
      return this.layerParam(value, "underlay", "u");
    }
  }, {
    key: "variable",
    value: function variable(name, value) {
      return this.param(value, name, name);
    }
  }, {
    key: "variables",
    value: function variables(values) {
      return this.arrayParam(values, "variables");
    }
  }, {
    key: "videoCodec",
    value: function videoCodec(value) {
      return this.param(value, "video_codec", "vc", parameters_Param.process_video_params);
    }
  }, {
    key: "videoSampling",
    value: function videoSampling(value) {
      return this.param(value, "video_sampling", "vs");
    }
  }, {
    key: "width",
    value: function width(value) {
      var _this4 = this;

      return this.param(value, "width", "w", function () {
        if (_this4.getValue("crop") || _this4.getValue("overlay") || _this4.getValue("underlay")) {
          return expression.normalize(value);
        } else {
          return null;
        }
      });
    }
  }, {
    key: "customFunction",
    value: function customFunction(value) {
      return this.param(value, "custom_function", "fn", function () {
        if (value.function_type === "remote") {
          return [value.function_type, btoa(value.source)].join(":");
        } else if (value.function_type === "wasm") return [value.function_type, value.source].join(":");
      });
    }
  }, {
    key: "x",
    value: function x(value) {
      return this.param(value, "x", "x", expression.normalize);
    }
  }, {
    key: "y",
    value: function y(value) {
      return this.param(value, "y", "y", expression.normalize);
    }
  }, {
    key: "zoom",
    value: function zoom(value) {
      return this.param(value, "zoom", "z", expression.normalize);
    }
  }], [{
    key: "new",
    value: function _new(options) {
      return new Transformation(options);
    }
  }]);

  return Transformation;
}(transformation_TransformationBase);
/**
 * Transformation Class methods.
 * This is a list of the parameters defined in Transformation.
 * Values are camelCased.
 */


transformation_Transformation.methods = ["angle", "audioCodec", "audioFrequency", "aspectRatio", "background", "bitRate", "border", "color", "colorSpace", "crop", "customFunction", "defaultImage", "delay", "density", "duration", "dpr", "effect", "else", "endIf", "endOffset", "fallbackContent", "fetchFormat", "format", "flags", "gravity", "fps", "height", "htmlHeight", "htmlWidth", "if", "keyframeInterval", "offset", "opacity", "overlay", "page", "poster", "prefix", "quality", "radius", "rawTransformation", "size", "sourceTypes", "sourceTransformation", "startOffset", "streamingProfile", "transformation", "underlay", "variable", "variables", "videoCodec", "videoSampling", "width", "x", "y", "zoom"];
/**
 * Parameters that are filtered out before passing the options to an HTML tag.
 *
 * The list of parameters is a combination of `Transformation::methods` and `Configuration::CONFIG_PARAMS`
 */

transformation_Transformation.PARAM_NAMES = transformation_Transformation.methods.map(snakeCase).concat(src_configuration.CONFIG_PARAMS);
/* harmony default export */ var src_transformation = (transformation_Transformation);
// CONCATENATED MODULE: ./src/tags/htmltag.js
function htmltag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function htmltag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function htmltag_createClass(Constructor, protoProps, staticProps) { if (protoProps) htmltag_defineProperties(Constructor.prototype, protoProps); if (staticProps) htmltag_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Generic HTML tag
 * Depends on 'transformation', 'util'
 */


/**
 * Represents an HTML (DOM) tag
 * @constructor HtmlTag
 * @param {string} name - the name of the tag
 * @param {string} [publicId]
 * @param {Object} options
 * @example tag = new HtmlTag( 'div', { 'width': 10})
 */

var htmltag_HtmlTag =
/*#__PURE__*/
function () {
  function HtmlTag(name, publicId, options) {
    htmltag_classCallCheck(this, HtmlTag);

    var transformation;
    this.name = name;
    this.publicId = publicId;

    if (options == null) {
      if (isPlainObject_root_isPlainObject_default()(publicId)) {
        options = publicId;
        this.publicId = void 0;
      } else {
        options = {};
      }
    }

    transformation = new src_transformation(options);
    transformation.setParent(this);

    this.transformation = function () {
      return transformation;
    };
  }
  /**
   * Convenience constructor
   * Creates a new instance of an HTML (DOM) tag
   * @function HtmlTag.new
   * @param {string} name - the name of the tag
   * @param {string} [publicId]
   * @param {Object} options
   * @return {HtmlTag}
   * @example tag = HtmlTag.new( 'div', { 'width': 10})
   */


  htmltag_createClass(HtmlTag, [{
    key: "htmlAttrs",

    /**
     * combine key and value from the `attr` to generate an HTML tag attributes string.
     * `Transformation::toHtmlTagOptions` is used to filter out transformation and configuration keys.
     * @protected
     * @param {Object} attrs
     * @return {string} the attributes in the format `'key1="value1" key2="value2"'`
     * @ignore
     */
    value: function htmlAttrs(attrs) {
      var key, pairs, value;
      return pairs = function () {
        var results;
        results = [];

        for (key in attrs) {
          value = escapeQuotes(attrs[key]);

          if (value) {
            results.push(toAttribute(key, value));
          }
        }

        return results;
      }().sort().join(' ');
    }
    /**
     * Get all options related to this tag.
     * @function HtmlTag#getOptions
     * @returns {Object} the options
     *
     */

  }, {
    key: "getOptions",
    value: function getOptions() {
      return this.transformation().toOptions();
    }
    /**
     * Get the value of option `name`
     * @function HtmlTag#getOption
     * @param {string} name - the name of the option
     * @returns {*} Returns the value of the option
     *
     */

  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.transformation().getValue(name);
    }
    /**
     * Get the attributes of the tag.
     * @function HtmlTag#attributes
     * @returns {Object} attributes
     */

  }, {
    key: "attributes",
    value: function attributes() {
      // The attributes are be computed from the options every time this method is invoked.
      var htmlAttributes = this.transformation().toHtmlAttributes();
      Object.keys(htmlAttributes).forEach(function (key) {
        if (isPlainObject_root_isPlainObject_default()(htmlAttributes[key])) {
          delete htmlAttributes[key];
        }
      });

      if (htmlAttributes.attributes) {
        // Currently HTML attributes are defined both at the top level and under 'attributes'
        merge_root_merge_default()(htmlAttributes, htmlAttributes.attributes);
        delete htmlAttributes.attributes;
      }

      return htmlAttributes;
    }
    /**
     * Set a tag attribute named `name` to `value`
     * @function HtmlTag#setAttr
     * @param {string} name - the name of the attribute
     * @param {string} value - the value of the attribute
     */

  }, {
    key: "setAttr",
    value: function setAttr(name, value) {
      this.transformation().set("html_".concat(name), value);
      return this;
    }
    /**
     * Get the value of the tag attribute `name`
     * @function HtmlTag#getAttr
     * @param {string} name - the name of the attribute
     * @returns {*}
     */

  }, {
    key: "getAttr",
    value: function getAttr(name) {
      return this.attributes()["html_".concat(name)] || this.attributes()[name];
    }
    /**
     * Remove the tag attributed named `name`
     * @function HtmlTag#removeAttr
     * @param {string} name - the name of the attribute
     * @returns {*}
     */

  }, {
    key: "removeAttr",
    value: function removeAttr(name) {
      var ref;
      return (ref = this.transformation().remove("html_".concat(name))) != null ? ref : this.transformation().remove(name);
    }
    /**
     * @function HtmlTag#content
     * @protected
     * @ignore
     */

  }, {
    key: "content",
    value: function content() {
      return "";
    }
    /**
     * @function HtmlTag#openTag
     * @protected
     * @ignore
     */

  }, {
    key: "openTag",
    value: function openTag() {
      var tag = "<" + this.name;
      var htmlAttrs = this.htmlAttrs(this.attributes());

      if (htmlAttrs && htmlAttrs.length > 0) {
        tag += " " + htmlAttrs;
      }

      return tag + ">";
    }
    /**
     * @function HtmlTag#closeTag
     * @protected
     * @ignore
     */

  }, {
    key: "closeTag",
    value: function closeTag() {
      return "</".concat(this.name, ">");
    }
    /**
     * Generates an HTML representation of the tag.
     * @function HtmlTag#toHtml
     * @returns {string} Returns HTML in string format
     */

  }, {
    key: "toHtml",
    value: function toHtml() {
      return this.openTag() + this.content() + this.closeTag();
    }
    /**
     * Creates a DOM object representing the tag.
     * @function HtmlTag#toDOM
     * @returns {Element}
     */

  }, {
    key: "toDOM",
    value: function toDOM() {
      var element, name, ref, value;

      if (!isFunction_root_isFunction_(typeof document !== "undefined" && document !== null ? document.createElement : void 0)) {
        throw "Can't create DOM if document is not present!";
      }

      element = document.createElement(this.name);
      ref = this.attributes();

      for (name in ref) {
        value = ref[name];
        element.setAttribute(name, value);
      }

      return element;
    }
  }], [{
    key: "new",
    value: function _new(name, publicId, options) {
      return new this(name, publicId, options);
    }
  }, {
    key: "isResponsive",
    value: function isResponsive(tag, responsiveClass) {
      var dataSrc;
      dataSrc = lodash_getData(tag, 'src-cache') || lodash_getData(tag, 'src');
      return lodash_hasClass(tag, responsiveClass) && /\bw_auto\b/.exec(dataSrc);
    }
  }]);

  return HtmlTag;
}();

;
/**
 * Represent the given key and value as an HTML attribute.
 * @function toAttribute
 * @protected
 * @param {string} key - attribute name
 * @param {*|boolean} value - the value of the attribute. If the value is boolean `true`, return the key only.
 * @returns {string} the attribute
 *
 */

function toAttribute(key, value) {
  if (!value) {
    return void 0;
  } else if (value === true) {
    return key;
  } else {
    return "".concat(key, "=\"").concat(value, "\"");
  }
}
/**
 * If given value is a string, replaces quotes with character entities (&#34;, &#39;)
 * @param value - value to change
 * @returns {*} changed value
 */


function escapeQuotes(value) {
  return isString_root_isString_default()(value) ? value.replace('"', '&#34;').replace("'", '&#39;') : value;
}

/* harmony default export */ var htmltag = (htmltag_HtmlTag);
// CONCATENATED MODULE: ./src/constants.js
var VERSION = "2.5.0";
var CF_SHARED_CDN = "d3jpl91pxevbkh.cloudfront.net";
var OLD_AKAMAI_SHARED_CDN = "cloudinary-a.akamaihd.net";
var AKAMAI_SHARED_CDN = "res.cloudinary.com";
var SHARED_CDN = AKAMAI_SHARED_CDN;
var DEFAULT_POSTER_OPTIONS = {
  format: 'jpg',
  resource_type: 'video'
};
var DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];
var SEO_TYPES = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};
/**
* @const {Object} Cloudinary.DEFAULT_IMAGE_PARAMS
* Defaults values for image parameters.
*
* (Previously defined using option_consume() )
 */

var DEFAULT_IMAGE_PARAMS = {
  resource_type: "image",
  transformation: [],
  type: 'upload'
};
/**
* Defaults values for video parameters.
* @const {Object} Cloudinary.DEFAULT_VIDEO_PARAMS
* (Previously defined using option_consume() )
 */

var DEFAULT_VIDEO_PARAMS = {
  fallback_content: '',
  resource_type: "video",
  source_transformation: {},
  source_types: DEFAULT_VIDEO_SOURCE_TYPES,
  transformation: [],
  type: 'upload'
};
/**
 * Recommended sources for video tag
 * @const {Object} Cloudinary.DEFAULT_VIDEO_SOURCES
 */

var DEFAULT_VIDEO_SOURCES = [{
  type: "mp4",
  codecs: "hev1",
  transformations: {
    video_codec: "h265"
  }
}, {
  type: "webm",
  codecs: "vp9",
  transformations: {
    video_codec: "vp9"
  }
}, {
  type: "mp4",
  transformations: {
    video_codec: "auto"
  }
}, {
  type: "webm",
  transformations: {
    video_codec: "auto"
  }
}];
/**
 * The resource storage type
 * @typedef type
 * @enum {string}
 * @property  {string} 'upload' A resource uploaded directly to Cloudinary
 * @property  {string} 'fetch' A resource fetched by Cloudinary from a 3rd party storage
 * @property  {string} 'private'
 * @property  {string} 'authenticated'
 * @property  {string} 'sprite'
 * @property  {string} 'facebook'
 * @property  {string} 'twitter'
 * @property  {string} 'youtube'
 * @property  {string} 'vimeo'
 *
 */

/**
 * The resource type
 * @typedef resourceType
 * @enum {string}
 * @property {string} 'image' An image file
 * @property {string} 'video' A video file
 * @property {string} 'raw'   A raw file
 */
// CONCATENATED MODULE: ./src/url.js





function absolutize(url) {
  var prefix;

  if (!url.match(/^https?:\//)) {
    prefix = document.location.protocol + '//' + document.location.host;

    if (url[0] === '?') {
      prefix += document.location.pathname;
    } else if (url[0] !== '/') {
      prefix += document.location.pathname.replace(/\/[^\/]*$/, '/');
    }

    url = prefix + url;
  }

  return url;
} // Produce a number between 1 and 5 to be used for cdn sub domains designation


function cdnSubdomainNumber(publicId) {
  return src_crc32(publicId) % 5 + 1;
}
/**
 * Create the URL prefix for Cloudinary resources.
 * @param {string} publicId the resource public ID
 * @param {object} options additional options
 * @param {string} options.cloud_name - the cloud name.
 * @param {boolean} [options.cdn_subdomain=false] - Whether to automatically build URLs with
 *  multiple CDN sub-domains.
 * @param {string} [options.private_cdn] - Boolean (default: false). Should be set to true for Advanced plan's users
 *  that have a private CDN distribution.
 * @param {string} [options.protocol="http://"] - the URI protocol to use. If options.secure is true,
 *  the value is overridden to "https://"
 * @param {string} [options.secure_distribution] - The domain name of the CDN distribution to use for building HTTPS URLs.
 *  Relevant only for Advanced plan's users that have a private CDN distribution.
 * @param {string} [options.cname] - Custom domain name to use for building HTTP URLs.
 *  Relevant only for Advanced plan's users that have a private CDN distribution and a custom CNAME.
 * @param {boolean} [options.secure_cdn_subdomain=true] - When options.secure is true and this parameter is false,
 *  the subdomain is set to "res".
 * @param {boolean} [options.secure=false] - Force HTTPS URLs of images even if embedded in non-secure HTTP pages.
 *  When this value is true, options.secure_distribution will be used as host if provided, and options.protocol is set
 *  to "https://".
 * @returns {string} the URL prefix for the resource.
 * @private
*/


function cloudinaryUrlPrefix(publicId, options) {
  if (options.cloud_name && options.cloud_name[0] === '/') {
    return '/res' + options.cloud_name;
  } // defaults


  var protocol = "http://";
  var cdnPart = "";
  var subdomain = "res";
  var host = ".cloudinary.com";
  var path = "/" + options.cloud_name; // modifications

  if (options.protocol) {
    protocol = options.protocol + '//';
  }

  if (options.private_cdn) {
    cdnPart = options.cloud_name + "-";
    path = "";
  }

  if (options.cdn_subdomain) {
    subdomain = "res-" + cdnSubdomainNumber(publicId);
  }

  if (options.secure) {
    protocol = "https://";

    if (options.secure_cdn_subdomain === false) {
      subdomain = "res";
    }

    if (options.secure_distribution != null && options.secure_distribution !== OLD_AKAMAI_SHARED_CDN && options.secure_distribution !== SHARED_CDN) {
      cdnPart = "";
      subdomain = "";
      host = options.secure_distribution;
    }
  } else if (options.cname) {
    protocol = "http://";
    cdnPart = "";
    subdomain = options.cdn_subdomain ? 'a' + (src_crc32(publicId) % 5 + 1) + '.' : '';
    host = options.cname;
  }

  return [protocol, cdnPart, subdomain, host, path].join("");
}
/**
 * Return the resource type and action type based on the given configuration
 * @function Cloudinary#finalizeResourceType
 * @param {Object|string} resourceType
 * @param {string} [type='upload']
 * @param {string} [urlSuffix]
 * @param {boolean} [useRootPath]
 * @param {boolean} [shorten]
 * @returns {string} resource_type/type
 * @ignore
 */


function finalizeResourceType() {
  var resourceType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "image";
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "upload";
  var urlSuffix = arguments.length > 2 ? arguments[2] : undefined;
  var useRootPath = arguments.length > 3 ? arguments[3] : undefined;
  var shorten = arguments.length > 4 ? arguments[4] : undefined;
  var options;
  resourceType = resourceType == null ? "image" : resourceType;
  type = type == null ? "upload" : type;

  if (isPlainObject_root_isPlainObject_default()(resourceType)) {
    options = resourceType;
    resourceType = options.resource_type;
    type = options.type;
    urlSuffix = options.url_suffix;
    useRootPath = options.use_root_path;
    shorten = options.shorten;
  }

  if (type == null) {
    type = 'upload';
  }

  if (urlSuffix != null) {
    resourceType = SEO_TYPES["".concat(resourceType, "/").concat(type)];
    type = null;

    if (resourceType == null) {
      throw new Error("URL Suffix only supported for ".concat(Object.keys(SEO_TYPES).join(', ')));
    }
  }

  if (useRootPath) {
    if (resourceType === 'image' && type === 'upload' || resourceType === "images") {
      resourceType = null;
      type = null;
    } else {
      throw new Error("Root path only supported for image/upload");
    }
  }

  if (shorten && resourceType === 'image' && type === 'upload') {
    resourceType = 'iu';
    type = null;
  }

  return [resourceType, type].join("/");
}
/**
 * Generates a URL for any asset in your Media library.
 * @function url
 * @ignore
 * @param {string} publicId - The public ID of the media asset.
 * @param {Object} [options={}] - The {@link Transformation} parameters to include in the URL.
 * @param {object} [config={}] - URL configuration parameters
 * @param {type} [options.type='upload'] - The asset's storage type.
 *  For details on all fetch types, see
 * <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
 *  target="_blank">Fetch types</a>. 
 * @param {Object} [options.resource_type='image'] - The type of asset. <p>Possible values:<br/> 
 *  - `image`<br/>
 *  - `video`<br/>
 *  - `raw` 
 * @return {string} The media asset URL.
 * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
 *  Available image transformations</a>
 * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
 *  Available video transformations</a>   
 */


function url_url(publicId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var error, prefix, ref, resourceTypeAndType, transformation, transformationString, url, version;

  if (!publicId) {
    return publicId;
  }

  if (options instanceof src_transformation) {
    options = options.toOptions();
  }

  options = defaults({}, options, config, DEFAULT_IMAGE_PARAMS);

  if (options.type === 'fetch') {
    options.fetch_format = options.fetch_format || options.format;
    publicId = absolutize(publicId);
  }

  transformation = new src_transformation(options);
  transformationString = transformation.serialize();

  if (!options.cloud_name) {
    throw 'Unknown cloud_name';
  } // if publicId has a '/' and doesn't begin with v<number> and doesn't start with http[s]:/ and version is empty and force_version is truthy or undefined


  if ((options.force_version || typeof options.force_version === 'undefined') && publicId.search('/') >= 0 && !publicId.match(/^v[0-9]+/) && !publicId.match(/^https?:\//) && !((ref = options.version) != null ? ref.toString() : void 0)) {
    options.version = 1;
  }

  if (publicId.match(/^https?:/)) {
    if (options.type === 'upload' || options.type === 'asset') {
      url = publicId;
    } else {
      publicId = encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/');
    }
  } else {
    try {
      // Make sure publicId is URI encoded.
      publicId = decodeURIComponent(publicId);
    } catch (error1) {
      error = error1;
    }

    publicId = encodeURIComponent(publicId).replace(/%3A/g, ':').replace(/%2F/g, '/');

    if (options.url_suffix) {
      if (options.url_suffix.match(/[\.\/]/)) {
        throw 'url_suffix should not include . or /';
      }

      publicId = publicId + '/' + options.url_suffix;
    }

    if (options.format) {
      if (!options.trust_public_id) {
        publicId = publicId.replace(/\.(jpg|png|gif|webp)$/, '');
      }

      publicId = publicId + '.' + options.format;
    }
  }

  prefix = cloudinaryUrlPrefix(publicId, options);
  resourceTypeAndType = finalizeResourceType(options.resource_type, options.type, options.url_suffix, options.use_root_path, options.shorten);
  version = options.version ? 'v' + options.version : '';
  return url || compact_root_compact_default()([prefix, resourceTypeAndType, transformationString, version, publicId]).join('/').replace(/([^:])\/+/g, '$1/');
}
;
// CONCATENATED MODULE: ./src/util/generateBreakpoints.js
function generateBreakpoints_slicedToArray(arr, i) { return generateBreakpoints_arrayWithHoles(arr) || generateBreakpoints_iterableToArrayLimit(arr, i) || generateBreakpoints_nonIterableRest(); }

function generateBreakpoints_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function generateBreakpoints_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function generateBreakpoints_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Helper function. Gets or populates srcset breakpoints using provided parameters
 * Either the breakpoints or min_width, max_width, max_images must be provided.
 *
 * @private
 * @param {srcset} srcset Options with either `breakpoints` or `min_width`, `max_width`, and `max_images`
 *
 * @return {number[]} Array of breakpoints
 *
 */
function generateBreakpoints(srcset) {
  var breakpoints = srcset.breakpoints || [];

  if (breakpoints.length) {
    return breakpoints;
  }

  var _map = [srcset.min_width, srcset.max_width, srcset.max_images].map(Number),
      _map2 = generateBreakpoints_slicedToArray(_map, 3),
      min_width = _map2[0],
      max_width = _map2[1],
      max_images = _map2[2];

  if ([min_width, max_width, max_images].some(isNaN)) {
    throw 'Either (min_width, max_width, max_images) ' + 'or breakpoints must be provided to the image srcset attribute';
  }

  if (min_width > max_width) {
    throw 'min_width must be less than max_width';
  }

  if (max_images <= 0) {
    throw 'max_images must be a positive integer';
  } else if (max_images === 1) {
    min_width = max_width;
  }

  var stepSize = Math.ceil((max_width - min_width) / Math.max(max_images - 1, 1));

  for (var current = min_width; current < max_width; current += stepSize) {
    breakpoints.push(current);
  }

  breakpoints.push(max_width);
  return breakpoints;
}
// CONCATENATED MODULE: ./src/util/srcsetUtils.js

var srcsetUtils_isEmpty = isEmpty;



/**
 * Options used to generate the srcset attribute.
 * @typedef {object} srcset
 * @property {(number[]|string[])}   [breakpoints] An array of breakpoints.
 * @property {number}                [min_width]   Minimal width of the srcset images.
 * @property {number}                [max_width]   Maximal width of the srcset images.
 * @property {number}                [max_images]  Number of srcset images to generate.
 * @property {object|string}         [transformation] The transformation to use in the srcset urls.
 * @property {boolean}               [sizes] Whether to calculate and add the sizes attribute.
 */

/**
 * Helper function. Generates a single srcset item url
 *
 * @private
 * @param {string} public_id  Public ID of the resource.
 * @param {number} width      Width in pixels of the srcset item.
 * @param {object|string} transformation
 * @param {object} options    Additional options.
 *
 * @return {string} Resulting URL of the item
 */

function scaledUrl(public_id, width, transformation) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var configParams = extractUrlParams(options);
  transformation = transformation || options;
  configParams.raw_transformation = new src_transformation([merge_root_merge_default.a({}, transformation), {
    crop: 'scale',
    width: width
  }]).toString();
  return url_url(public_id, configParams);
}
/**
 * If cache is enabled, get the breakpoints from the cache. If the values were not found in the cache,
 * or cache is not enabled, generate the values.
 * @param {srcset} srcset The srcset configuration parameters
 * @param {string} public_id
 * @param {object} options
 * @return {*|Array}
 */

function getOrGenerateBreakpoints(public_id) {
  var srcset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return generateBreakpoints(srcset);
}
/**
 * Helper function. Generates srcset attribute value of the HTML img tag
 * @private
 *
 * @param {string} public_id  Public ID of the resource
 * @param {number[]} breakpoints An array of breakpoints (in pixels)
 * @param {object} transformation The transformation
 * @param {object} options Includes html tag options, transformation options
 * @return {string} Resulting srcset attribute value
 */

function generateSrcsetAttribute(public_id, breakpoints, transformation, options) {
  options = cloneDeep_root_cloneDeep_default.a(options);
  patchFetchFormat(options);
  return breakpoints.map(function (width) {
    return "".concat(scaledUrl(public_id, width, transformation, options), " ").concat(width, "w");
  }).join(', ');
}
/**
 * Helper function. Generates sizes attribute value of the HTML img tag
 * @private
 * @param {number[]} breakpoints An array of breakpoints.
 * @return {string} Resulting sizes attribute value
 */

function generateSizesAttribute(breakpoints) {
  if (breakpoints == null) {
    return '';
  }

  return breakpoints.map(function (width) {
    return "(max-width: ".concat(width, "px) ").concat(width, "px");
  }).join(', ');
}
/**
 * Helper function. Generates srcset and sizes attributes of the image tag
 *
 * Generated attributes are added to attributes argument
 *
 * @private
 * @param {string}    publicId  The public ID of the resource
 * @param {object}    attributes Existing HTML attributes.
 * @param {srcset}    srcsetData
 * @param {object}    options    Additional options.
 *
 * @return array The responsive attributes
 */

function generateImageResponsiveAttributes(publicId) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var srcsetData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Create both srcset and sizes here to avoid fetching breakpoints twice
  var responsiveAttributes = {};

  if (srcsetUtils_isEmpty(srcsetData)) {
    return responsiveAttributes;
  }

  var generateSizes = !attributes.sizes && srcsetData.sizes === true;
  var generateSrcset = !attributes.srcset;

  if (generateSrcset || generateSizes) {
    var breakpoints = getOrGenerateBreakpoints(publicId, srcsetData, options);

    if (generateSrcset) {
      var transformation = srcsetData.transformation;
      var srcsetAttr = generateSrcsetAttribute(publicId, breakpoints, transformation, options);

      if (!srcsetUtils_isEmpty(srcsetAttr)) {
        responsiveAttributes.srcset = srcsetAttr;
      }
    }

    if (generateSizes) {
      var sizesAttr = generateSizesAttribute(breakpoints);

      if (!srcsetUtils_isEmpty(sizesAttr)) {
        responsiveAttributes.sizes = sizesAttr;
      }
    }
  }

  return responsiveAttributes;
}
/**
 * Generate a media query
 *
 * @private
 * @param {object} options configuration options
 * @param {number|string} options.min_width
 * @param {number|string} options.max_width
 * @return {string} a media query string
 */

function generateMediaAttr(options) {
  var mediaQuery = [];

  if (options != null) {
    if (options.min_width != null) {
      mediaQuery.push("(min-width: ".concat(options.min_width, "px)"));
    }

    if (options.max_width != null) {
      mediaQuery.push("(max-width: ".concat(options.max_width, "px)"));
    }
  }

  return mediaQuery.join(' and ');
}
var srcsetUrl = scaledUrl;
// CONCATENATED MODULE: ./src/tags/imagetag.js
function imagetag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { imagetag_typeof = function _typeof(obj) { return typeof obj; }; } else { imagetag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return imagetag_typeof(obj); }

function imagetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function imagetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function imagetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) imagetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) imagetag_defineProperties(Constructor, staticProps); return Constructor; }

function imagetag_possibleConstructorReturn(self, call) { if (call && (imagetag_typeof(call) === "object" || typeof call === "function")) { return call; } return imagetag_assertThisInitialized(self); }

function imagetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function imagetag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { imagetag_get = Reflect.get; } else { imagetag_get = function _get(target, property, receiver) { var base = imagetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return imagetag_get(target, property, receiver || target); }

function imagetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = imagetag_getPrototypeOf(object); if (object === null) break; } return object; }

function imagetag_getPrototypeOf(o) { imagetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return imagetag_getPrototypeOf(o); }

function imagetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) imagetag_setPrototypeOf(subClass, superClass); }

function imagetag_setPrototypeOf(o, p) { imagetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return imagetag_setPrototypeOf(o, p); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */




/**
 * Creates an HTML (DOM) Image tag using Cloudinary as the source.
 * @constructor ImageTag
 * @extends HtmlTag
 * @param {string} [publicId]
 * @param {Object} [options]
 */

var imagetag_ImageTag =
/*#__PURE__*/
function (_HtmlTag) {
  imagetag_inherits(ImageTag, _HtmlTag);

  function ImageTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    imagetag_classCallCheck(this, ImageTag);

    return imagetag_possibleConstructorReturn(this, imagetag_getPrototypeOf(ImageTag).call(this, "img", publicId, options));
  }
  /** @override */


  imagetag_createClass(ImageTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var attr, options, srcAttribute;
      attr = imagetag_get(imagetag_getPrototypeOf(ImageTag.prototype), "attributes", this).call(this) || {};
      options = this.getOptions();
      var srcsetParam = this.getOption('srcset');
      var attributes = this.getOption('attributes') || {};
      var responsiveAttributes = {};

      if (isString_root_isString_default()(srcsetParam)) {
        responsiveAttributes.srcset = srcsetParam;
      } else {
        responsiveAttributes = generateImageResponsiveAttributes(this.publicId, attributes, srcsetParam, options);
      }

      if (!isEmpty(responsiveAttributes)) {
        delete options.width;
        delete options.height;
      }

      merge_root_merge_default()(attr, responsiveAttributes);
      srcAttribute = options.responsive && !options.client_hints ? 'data-src' : 'src';

      if (attr[srcAttribute] == null) {
        attr[srcAttribute] = url_url(this.publicId, this.getOptions());
      }

      return attr;
    }
  }]);

  return ImageTag;
}(htmltag);

;
/* harmony default export */ var imagetag = (imagetag_ImageTag);
// CONCATENATED MODULE: ./src/tags/sourcetag.js
function sourcetag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sourcetag_typeof = function _typeof(obj) { return typeof obj; }; } else { sourcetag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sourcetag_typeof(obj); }

function sourcetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sourcetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sourcetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) sourcetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) sourcetag_defineProperties(Constructor, staticProps); return Constructor; }

function sourcetag_possibleConstructorReturn(self, call) { if (call && (sourcetag_typeof(call) === "object" || typeof call === "function")) { return call; } return sourcetag_assertThisInitialized(self); }

function sourcetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sourcetag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { sourcetag_get = Reflect.get; } else { sourcetag_get = function _get(target, property, receiver) { var base = sourcetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return sourcetag_get(target, property, receiver || target); }

function sourcetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = sourcetag_getPrototypeOf(object); if (object === null) break; } return object; }

function sourcetag_getPrototypeOf(o) { sourcetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sourcetag_getPrototypeOf(o); }

function sourcetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sourcetag_setPrototypeOf(subClass, superClass); }

function sourcetag_setPrototypeOf(o, p) { sourcetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sourcetag_setPrototypeOf(o, p); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */




/**
 * Creates an HTML (DOM) Image tag using Cloudinary as the source.
 * @constructor SourceTag
 * @extends HtmlTag
 * @param {string} [publicId]
 * @param {Object} [options]
 */

var sourcetag_SourceTag =
/*#__PURE__*/
function (_HtmlTag) {
  sourcetag_inherits(SourceTag, _HtmlTag);

  function SourceTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    sourcetag_classCallCheck(this, SourceTag);

    return sourcetag_possibleConstructorReturn(this, sourcetag_getPrototypeOf(SourceTag).call(this, "source", publicId, options));
  }
  /** @override */


  sourcetag_createClass(SourceTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var srcsetParam = this.getOption('srcset');
      var attr = sourcetag_get(sourcetag_getPrototypeOf(SourceTag.prototype), "attributes", this).call(this) || {};
      var options = this.getOptions();
      merge_root_merge_default()(attr, generateImageResponsiveAttributes(this.publicId, attr, srcsetParam, options));

      if (!attr.srcset) {
        attr.srcset = url_url(this.publicId, options);
      }

      if (!attr.media && options.media) {
        attr.media = generateMediaAttr(options.media);
      }

      return attr;
    }
  }]);

  return SourceTag;
}(htmltag);

;
/* harmony default export */ var sourcetag = (sourcetag_SourceTag);
// CONCATENATED MODULE: ./src/tags/picturetag.js
function picturetag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { picturetag_typeof = function _typeof(obj) { return typeof obj; }; } else { picturetag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return picturetag_typeof(obj); }

function picturetag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function picturetag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function picturetag_createClass(Constructor, protoProps, staticProps) { if (protoProps) picturetag_defineProperties(Constructor.prototype, protoProps); if (staticProps) picturetag_defineProperties(Constructor, staticProps); return Constructor; }

function picturetag_possibleConstructorReturn(self, call) { if (call && (picturetag_typeof(call) === "object" || typeof call === "function")) { return call; } return picturetag_assertThisInitialized(self); }

function picturetag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function picturetag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { picturetag_get = Reflect.get; } else { picturetag_get = function _get(target, property, receiver) { var base = picturetag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return picturetag_get(target, property, receiver || target); }

function picturetag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = picturetag_getPrototypeOf(object); if (object === null) break; } return object; }

function picturetag_getPrototypeOf(o) { picturetag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return picturetag_getPrototypeOf(o); }

function picturetag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) picturetag_setPrototypeOf(subClass, superClass); }

function picturetag_setPrototypeOf(o, p) { picturetag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return picturetag_setPrototypeOf(o, p); }







var picturetag_PictureTag =
/*#__PURE__*/
function (_HtmlTag) {
  picturetag_inherits(PictureTag, _HtmlTag);

  function PictureTag(publicId) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var sources = arguments.length > 2 ? arguments[2] : undefined;

    picturetag_classCallCheck(this, PictureTag);

    _this = picturetag_possibleConstructorReturn(this, picturetag_getPrototypeOf(PictureTag).call(this, 'picture', publicId, options));
    _this.widthList = sources;
    return _this;
  }
  /** @override */


  picturetag_createClass(PictureTag, [{
    key: "content",
    value: function content() {
      var _this2 = this;

      return this.widthList.map(function (_ref) {
        var min_width = _ref.min_width,
            max_width = _ref.max_width,
            transformation = _ref.transformation;

        var options = _this2.getOptions();

        var sourceTransformation = new src_transformation(options);
        sourceTransformation.chain().fromOptions(typeof transformation === 'string' ? {
          raw_transformation: transformation
        } : transformation);
        options = extractUrlParams(options);
        options.media = {
          min_width: min_width,
          max_width: max_width
        };
        options.transformation = sourceTransformation;
        return new sourcetag(_this2.publicId, options).toHtml();
      }).join('') + new imagetag(this.publicId, this.getOptions()).toHtml();
    }
    /** @override */

  }, {
    key: "attributes",
    value: function attributes() {
      var attr = picturetag_get(picturetag_getPrototypeOf(PictureTag.prototype), "attributes", this).call(this);

      delete attr.width;
      delete attr.height;
      return attr;
    }
    /** @override */

  }, {
    key: "closeTag",
    value: function closeTag() {
      return "</" + this.name + ">";
    }
  }]);

  return PictureTag;
}(htmltag);

;
/* harmony default export */ var picturetag = (picturetag_PictureTag);
// CONCATENATED MODULE: ./src/tags/videotag.js
function videotag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { videotag_typeof = function _typeof(obj) { return typeof obj; }; } else { videotag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return videotag_typeof(obj); }

function videotag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function videotag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function videotag_createClass(Constructor, protoProps, staticProps) { if (protoProps) videotag_defineProperties(Constructor.prototype, protoProps); if (staticProps) videotag_defineProperties(Constructor, staticProps); return Constructor; }

function videotag_possibleConstructorReturn(self, call) { if (call && (videotag_typeof(call) === "object" || typeof call === "function")) { return call; } return videotag_assertThisInitialized(self); }

function videotag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function videotag_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { videotag_get = Reflect.get; } else { videotag_get = function _get(target, property, receiver) { var base = videotag_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return videotag_get(target, property, receiver || target); }

function videotag_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = videotag_getPrototypeOf(object); if (object === null) break; } return object; }

function videotag_getPrototypeOf(o) { videotag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return videotag_getPrototypeOf(o); }

function videotag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) videotag_setPrototypeOf(subClass, superClass); }

function videotag_setPrototypeOf(o, p) { videotag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return videotag_setPrototypeOf(o, p); }

/**
 * Video Tag
 * Depends on 'tags/htmltag', 'util', 'cloudinary'
 */




var VIDEO_TAG_PARAMS = ['source_types', 'source_transformation', 'fallback_content', 'poster', 'sources'];
var videotag_DEFAULT_VIDEO_SOURCE_TYPES = ['webm', 'mp4', 'ogv'];
var videotag_DEFAULT_POSTER_OPTIONS = {
  format: 'jpg',
  resource_type: 'video'
};
/**
 * Creates an HTML (DOM) Video tag using Cloudinary as the source.
 * @constructor VideoTag
 * @extends HtmlTag
 * @param {string} [publicId]
 * @param {Object} [options]
 */

var videotag_VideoTag =
/*#__PURE__*/
function (_HtmlTag) {
  videotag_inherits(VideoTag, _HtmlTag);

  function VideoTag(publicId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    videotag_classCallCheck(this, VideoTag);

    options = defaults({}, options, DEFAULT_VIDEO_PARAMS);
    return videotag_possibleConstructorReturn(this, videotag_getPrototypeOf(VideoTag).call(this, "video", publicId.replace(/\.(mp4|ogv|webm)$/, ''), options));
  }
  /**
   * Set the transformation to apply on each source
   * @function VideoTag#setSourceTransformation
   * @param {Object} an object with pairs of source type and source transformation
   * @returns {VideoTag} Returns this instance for chaining purposes.
   */


  videotag_createClass(VideoTag, [{
    key: "setSourceTransformation",
    value: function setSourceTransformation(value) {
      this.transformation().sourceTransformation(value);
      return this;
    }
    /**
     * Set the source types to include in the video tag
     * @function VideoTag#setSourceTypes
     * @param {Array<string>} an array of source types
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setSourceTypes",
    value: function setSourceTypes(value) {
      this.transformation().sourceTypes(value);
      return this;
    }
    /**
     * Set the poster to be used in the video tag
     * @function VideoTag#setPoster
     * @param {string|Object} value
     * - string: a URL to use for the poster
     * - Object: transformation parameters to apply to the poster. May optionally include a public_id to use instead of the video public_id.
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setPoster",
    value: function setPoster(value) {
      this.transformation().poster(value);
      return this;
    }
    /**
     * Set the content to use as fallback in the video tag
     * @function VideoTag#setFallbackContent
     * @param {string} value - the content to use, in HTML format
     * @returns {VideoTag} Returns this instance for chaining purposes.
     */

  }, {
    key: "setFallbackContent",
    value: function setFallbackContent(value) {
      this.transformation().fallbackContent(value);
      return this;
    }
  }, {
    key: "content",
    value: function content() {
      var _this = this;

      var sourceTypes = this.transformation().getValue('source_types');
      var sourceTransformation = this.transformation().getValue('source_transformation');
      var fallback = this.transformation().getValue('fallback_content');
      var sources = this.getOption('sources');
      var innerTags = [];

      if (isArray_root_isArray_default()(sources) && !isEmpty(sources)) {
        innerTags = sources.map(function (source) {
          var src = url_url(_this.publicId, defaults({}, source.transformations || {}, {
            resource_type: 'video',
            format: source.type
          }), _this.getOptions());
          return _this.createSourceTag(src, source.type, source.codecs);
        });
      } else {
        if (isEmpty(sourceTypes)) {
          sourceTypes = videotag_DEFAULT_VIDEO_SOURCE_TYPES;
        }

        if (isArray_root_isArray_default()(sourceTypes)) {
          innerTags = sourceTypes.map(function (srcType) {
            var src = url_url(_this.publicId, defaults({}, sourceTransformation[srcType] || {}, {
              resource_type: 'video',
              format: srcType
            }), _this.getOptions());
            return _this.createSourceTag(src, srcType);
          });
        }
      }

      return innerTags.join('') + fallback;
    }
  }, {
    key: "attributes",
    value: function attributes() {
      var sourceTypes = this.getOption('source_types');
      var poster = this.getOption('poster');

      if (poster === undefined) {
        poster = {};
      }

      if (isPlainObject_root_isPlainObject_default()(poster)) {
        var defaultOptions = poster.public_id != null ? DEFAULT_IMAGE_PARAMS : videotag_DEFAULT_POSTER_OPTIONS;
        poster = url_url(poster.public_id || this.publicId, defaults({}, poster, defaultOptions, this.getOptions()));
      }

      var attr = videotag_get(videotag_getPrototypeOf(VideoTag.prototype), "attributes", this).call(this) || {};
      attr = omit(attr, VIDEO_TAG_PARAMS);
      var sources = this.getOption('sources'); // In case of empty sourceTypes - fallback to default source types is used.

      var hasSourceTags = !isEmpty(sources) || isEmpty(sourceTypes) || isArray_root_isArray_default()(sourceTypes);

      if (!hasSourceTags) {
        attr["src"] = url_url(this.publicId, this.getOptions(), {
          resource_type: 'video',
          format: sourceTypes
        });
      }

      if (poster != null) {
        attr["poster"] = poster;
      }

      return attr;
    }
  }, {
    key: "createSourceTag",
    value: function createSourceTag(src, sourceType) {
      var codecs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var mimeType = null;

      if (!isEmpty(sourceType)) {
        var videoType = sourceType === 'ogv' ? 'ogg' : sourceType;
        mimeType = 'video/' + videoType;

        if (!isEmpty(codecs)) {
          var codecsStr = isArray_root_isArray_default()(codecs) ? codecs.join(', ') : codecs;
          mimeType += '; codecs=' + codecsStr;
        }
      }

      return "<source " + this.htmlAttrs({
        src: src,
        type: mimeType
      }) + ">";
    }
  }]);

  return VideoTag;
}(htmltag);

/* harmony default export */ var videotag = (videotag_VideoTag);
// CONCATENATED MODULE: ./src/tags/clienthintsmetatag.js
function clienthintsmetatag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clienthintsmetatag_typeof = function _typeof(obj) { return typeof obj; }; } else { clienthintsmetatag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clienthintsmetatag_typeof(obj); }

function clienthintsmetatag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function clienthintsmetatag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function clienthintsmetatag_createClass(Constructor, protoProps, staticProps) { if (protoProps) clienthintsmetatag_defineProperties(Constructor.prototype, protoProps); if (staticProps) clienthintsmetatag_defineProperties(Constructor, staticProps); return Constructor; }

function clienthintsmetatag_possibleConstructorReturn(self, call) { if (call && (clienthintsmetatag_typeof(call) === "object" || typeof call === "function")) { return call; } return clienthintsmetatag_assertThisInitialized(self); }

function clienthintsmetatag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function clienthintsmetatag_getPrototypeOf(o) { clienthintsmetatag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return clienthintsmetatag_getPrototypeOf(o); }

function clienthintsmetatag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) clienthintsmetatag_setPrototypeOf(subClass, superClass); }

function clienthintsmetatag_setPrototypeOf(o, p) { clienthintsmetatag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return clienthintsmetatag_setPrototypeOf(o, p); }

/**
 * Image Tag
 * Depends on 'tags/htmltag', 'cloudinary'
 */


/**
 * Creates an HTML (DOM) Meta tag that enables Client-Hints for the HTML page. <br/>
 *  See
 *  <a href="https://cloudinary.com/documentation/responsive_images#automating_responsive_images_with_client_hints"
 *  target="_new">Automating responsive images with Client Hints</a> for more details.
 * @constructor ClientHintsMetaTag
 * @extends HtmlTag
 * @param {object} options
 * @example
 * tag = new ClientHintsMetaTag()
 * //returns: <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width">
 */

var clienthintsmetatag_ClientHintsMetaTag =
/*#__PURE__*/
function (_HtmlTag) {
  clienthintsmetatag_inherits(ClientHintsMetaTag, _HtmlTag);

  function ClientHintsMetaTag(options) {
    clienthintsmetatag_classCallCheck(this, ClientHintsMetaTag);

    return clienthintsmetatag_possibleConstructorReturn(this, clienthintsmetatag_getPrototypeOf(ClientHintsMetaTag).call(this, 'meta', void 0, assign_root_assign_default()({
      "http-equiv": "Accept-CH",
      content: "DPR, Viewport-Width, Width"
    }, options)));
  }
  /** @override */


  clienthintsmetatag_createClass(ClientHintsMetaTag, [{
    key: "closeTag",
    value: function closeTag() {
      return "";
    }
  }]);

  return ClientHintsMetaTag;
}(htmltag);

;
/* harmony default export */ var clienthintsmetatag = (clienthintsmetatag_ClientHintsMetaTag);
// CONCATENATED MODULE: ./src/cloudinary.js
function cloudinary_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cloudinary_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cloudinary_createClass(Constructor, protoProps, staticProps) { if (protoProps) cloudinary_defineProperties(Constructor.prototype, protoProps); if (staticProps) cloudinary_defineProperties(Constructor, staticProps); return Constructor; }

var applyBreakpoints, closestAbove, defaultBreakpoints, cloudinary_findContainerWidth, cloudinary_maxWidth, updateDpr;











defaultBreakpoints = function defaultBreakpoints(width) {
  var steps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return steps * Math.ceil(width / steps);
};

closestAbove = function closestAbove(list, value) {
  var i;
  i = list.length - 2;

  while (i >= 0 && list[i] >= value) {
    i--;
  }

  return list[i + 1];
};

applyBreakpoints = function applyBreakpoints(tag, width, steps, options) {
  var ref, ref1, ref2, responsive_use_breakpoints;
  responsive_use_breakpoints = (ref = (ref1 = (ref2 = options['responsive_use_breakpoints']) != null ? ref2 : options['responsive_use_stoppoints']) != null ? ref1 : this.config('responsive_use_breakpoints')) != null ? ref : this.config('responsive_use_stoppoints');

  if (!responsive_use_breakpoints || responsive_use_breakpoints === 'resize' && !options.resizing) {
    return width;
  } else {
    return this.calc_breakpoint(tag, width, steps);
  }
};

cloudinary_findContainerWidth = function findContainerWidth(element) {
  var containerWidth, style;
  containerWidth = 0;

  while ((element = element != null ? element.parentNode : void 0) instanceof Element && !containerWidth) {
    style = window.getComputedStyle(element);

    if (!/^inline/.test(style.display)) {
      containerWidth = lodash_width(element);
    }
  }

  return containerWidth;
};

updateDpr = function updateDpr(dataSrc, roundDpr) {
  return dataSrc.replace(/\bdpr_(1\.0|auto)\b/g, 'dpr_' + this.device_pixel_ratio(roundDpr));
};

cloudinary_maxWidth = function maxWidth(requiredWidth, tag) {
  var imageWidth;
  imageWidth = lodash_getData(tag, 'width') || 0;

  if (requiredWidth > imageWidth) {
    imageWidth = requiredWidth;
    lodash_setData(tag, 'width', requiredWidth);
  }

  return imageWidth;
};

var cloudinary_Cloudinary =
/*#__PURE__*/
function () {
  /**
   * Creates a new Cloudinary instance.
   * @class Cloudinary
   * @classdesc Main class for accessing Cloudinary functionality.
   * @param {Object} options - A {@link Configuration} object for globally configuring Cloudinary account settings.
   * @example<br/>
   *  var cl = new cloudinary.Cloudinary( { cloud_name: "mycloud"});<br/>
   *  var imgTag = cl.image("myPicID");
   * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters" target="_blank">
   *  Available configuration options</a>
   */
  function Cloudinary(options) {
    cloudinary_classCallCheck(this, Cloudinary);

    var configuration;
    this.devicePixelRatioCache = {};
    this.responsiveConfig = {};
    this.responsiveResizeInitialized = false;
    configuration = new src_configuration(options); // Provided for backward compatibility

    this.config = function (newConfig, newValue) {
      return configuration.config(newConfig, newValue);
    };
    /**
     * Use \<meta\> tags in the document to configure this `cloudinary` instance.
     * @return This {Cloudinary} instance for chaining.
     */


    this.fromDocument = function () {
      configuration.fromDocument();
      return this;
    };
    /**
     * Use environment variables to configure this `cloudinary` instance.
     * @return This {Cloudinary} instance for chaining.
     */


    this.fromEnvironment = function () {
      configuration.fromEnvironment();
      return this;
    };
    /**
     * Initializes the configuration of this `cloudinary` instance.
     *  This is a convenience method that invokes both {@link Configuration#fromEnvironment|fromEnvironment()}
     *  (Node.js environment only) and {@link Configuration#fromDocument|fromDocument()}.
     *  It first tries to retrieve the configuration from the environment variable.
     *  If not available, it tries from the document meta tags.
     * @function Cloudinary#init
     * @see Configuration#init
     * @return This {Cloudinary} instance for chaining.
     */


    this.init = function () {
      configuration.init();
      return this;
    };
  }
  /**
   * Convenience constructor
   * @param {Object} options
   * @return {Cloudinary}
   * @example cl = cloudinary.Cloudinary.new( { cloud_name: "mycloud"})
   */


  cloudinary_createClass(Cloudinary, [{
    key: "url",

    /**
     * Generates a URL for any asset in your Media library.
     * @function Cloudinary#url
     * @param {string} publicId - The public ID of the media asset.
     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
     * @param {type} [options.type='upload'] - The asset's storage type.
     *  For details on all fetch types, see
     * <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
     *  target="_blank">Fetch types</a>.
     * @param {resourceType} [options.resource_type='image'] - The type of asset. Possible values:<br/>
     *  - `image`<br/>
     *  - `video`<br/>
     *  - `raw`
     * @return {string} The media asset URL.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     */
    value: function url(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return url_url(publicId, options, this.config());
    }
    /**
     * Generates a video asset URL.
     * @function Cloudinary#video_url
     * @param {string} publicId - The public ID of the video.
     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
     * @param {type} [options.type='upload'] - The asset's storage type.
     *  For details on all fetch types, see
     *  <a href="https://cloudinary.com/documentation/image_transformations#fetching_images_from_remote_locations"
     *  target="_blank">Fetch types</a>.
     * @return {string} The video URL.
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference"
     *  target="_blank">Available video transformations</a>
     */

  }, {
    key: "video_url",
    value: function video_url(publicId, options) {
      options = assign_root_assign_default()({
        resource_type: 'video'
      }, options);
      return this.url(publicId, options);
    }
    /**
     * Generates a URL for an image intended to be used as a thumbnail for the specified video.
     *  Identical to {@link Cloudinary#url|url}, except that the `resource_type` is `video`
     *  and the default `format` is `jpg`.
     * @function Cloudinary#video_thumbnail_url
     * @param {string} publicId -  The unique identifier of the video from which you want to generate a thumbnail image.
     * @param {Object} [options] - The image {@link Transformation} parameters to apply to the thumbnail.
     * In addition to standard image transformations, you can also use the `start_offset` transformation parameter
     * to instruct Cloudinary to generate the thumbnail from a frame other than the middle frame of the video.
     * For details, see
     * <a href="https://cloudinary.com/documentation/video_manipulation_and_delivery#generating_video_thumbnails"
     * target="_blank">Generating video thumbnails</a> in the Cloudinary documentation.
     * @param {type} [options.type='upload'] - The asset's storage type.
     * @return {string} The URL of the video thumbnail image.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     */

  }, {
    key: "video_thumbnail_url",
    value: function video_thumbnail_url(publicId, options) {
      options = assign_root_assign_default()({}, DEFAULT_POSTER_OPTIONS, options);
      return this.url(publicId, options);
    }
    /**
     * Generates a string representation of the specified transformation options.
     * @function Cloudinary#transformation_string
     * @param {Object} options - The {@link Transformation} options.
     * @returns {string} The transformation string.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     */

  }, {
    key: "transformation_string",
    value: function transformation_string(options) {
      return new src_transformation(options).serialize();
    }
    /**
     * Generates an image tag.
     * @function Cloudinary#image
     * @param {string} publicId - The public ID of the image.
     * @param {Object} options - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag DOM element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "image",
    value: function image(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var client_hints, img, ref;
      img = this.imageTag(publicId, options);
      client_hints = (ref = options.client_hints != null ? options.client_hints : this.config('client_hints')) != null ? ref : false;

      if (options.src == null && !client_hints) {
        // src must be removed before creating the DOM element to avoid loading the image
        img.setAttr("src", '');
      }

      img = img.toDOM();

      if (!client_hints) {
        // cache the image src
        lodash_setData(img, 'src-cache', this.url(publicId, options)); // set image src taking responsiveness in account

        this.cloudinary_update(img, options);
      }

      return img;
    }
    /**
     * Creates a new ImageTag instance using the configuration defined for this `cloudinary` instance.
     * @function Cloudinary#imageTag
     * @param {string} publicId - The public ID of the image.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {ImageTag} An ImageTag instance that is attached (chained) to this Cloudinary instance.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "imageTag",
    value: function imageTag(publicId, options) {
      var tag;
      tag = new imagetag(publicId, this.config());
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Creates a new PictureTag instance, configured using this `cloudinary` instance.
     * @function Cloudinary#PictureTag
     * @param {string} publicId - the public ID of the resource
     * @param {Object} options - additional options to pass to the new ImageTag instance
     * @return {PictureTag} A PictureTag that is attached (chained) to this Cloudinary instance
     */

  }, {
    key: "pictureTag",
    value: function pictureTag(publicId, options) {
      var tag;
      tag = new picturetag(publicId, this.config());
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Creates a new SourceTag instance, configured using this `cloudinary` instance.
     * @function Cloudinary#SourceTag
     * @param {string} publicId - the public ID of the resource.
     * @param {Object} options - additional options to pass to the new instance.
     * @return {SourceTag} A SourceTag that is attached (chained) to this Cloudinary instance
     */

  }, {
    key: "sourceTag",
    value: function sourceTag(publicId, options) {
      var tag;
      tag = new sourcetag(publicId, this.config());
      tag.transformation().fromOptions(options);
      return tag;
    }
    /**
     * Generates a video thumbnail URL from the specified remote video and includes it in an image tag.
     * @function Cloudinary#video_thumbnail
     * @param {string} publicId - The unique identifier of the video from the relevant video site.
     *  Additionally, either append the image extension type to the identifier value or set
     *  the image delivery format in the 'options' parameter using the 'format' transformation option.
     *  For example, a YouTube video might have the identifier: 'o-urnlaJpOA.jpg'.
     * @param {Object} [options] - The {@link Transformation} parameters to apply.
     * @return {HTMLImageElement} An HTML image tag element
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "video_thumbnail",
    value: function video_thumbnail(publicId, options) {
      return this.image(publicId, merge_root_merge_default()({}, DEFAULT_POSTER_OPTIONS, options));
    }
    /**
     * Fetches a facebook profile image and delivers it in an image tag element.
     * @function Cloudinary#facebook_profile_image
     * @param {string} publicId - The Facebook numeric ID. Additionally, either append the image extension type
     *  to the ID or set the image delivery format in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "facebook_profile_image",
    value: function facebook_profile_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'facebook'
      }, options));
    }
    /**
     * Fetches a Twitter profile image by ID and delivers it in an image tag element.
     * @function Cloudinary#twitter_profile_image
     * @param {string} publicId - The Twitter numeric ID. Additionally, either append the image extension type
     *  to the ID or set the image delivery format in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "twitter_profile_image",
    value: function twitter_profile_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'twitter'
      }, options));
    }
    /**
     * Fetches a Twitter profile image by name and delivers it in an image tag element.
     * @function Cloudinary#twitter_name_profile_image
     * @param {string} publicId - The Twitter screen name. Additionally, either append the image extension type
     *  to the screen name or set the image delivery format in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "twitter_name_profile_image",
    value: function twitter_name_profile_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'twitter_name'
      }, options));
    }
    /**
     * Fetches a Gravatar profile image and delivers it in an image tag element.
     * @function Cloudinary#gravatar_image
     * @param {string} publicId - The calculated hash for the Gravatar email address.
     *  Additionally, either append the image extension type to the screen name or set the image delivery format
     *  in the 'options' parameter using the 'format' transformation option.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "gravatar_image",
    value: function gravatar_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'gravatar'
      }, options));
    }
    /**
     * Fetches an image from a remote URL and delivers it in an image tag element.
     * @function Cloudinary#fetch_image
     * @param {string} publicId - The full URL of the image to fetch, including the extension.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLImageElement} An image tag element.
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "fetch_image",
    value: function fetch_image(publicId, options) {
      return this.image(publicId, assign_root_assign_default()({
        type: 'fetch'
      }, options));
    }
    /**
     * Generates a video tag.
     * @function Cloudinary#video
     * @param {string} publicId - The public ID of the video.
     * @param {Object} [options] - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {HTMLVideoElement} A video tag DOM element.
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "video",
    value: function video(publicId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.videoTag(publicId, options).toHtml();
    }
    /**
     * Creates a new VideoTag instance using the configuration defined for this `cloudinary` instance.
     * @function Cloudinary#videoTag
     * @param {string} publicId - The public ID of the video.
     * @param {Object} options - The {@link Transformation} parameters, {@link Configuration} parameters,
     *  and standard HTML &lt;img&gt; tag attributes to apply to the image tag.
     * @return {VideoTag} A VideoTag that is attached (chained) to this `cloudinary` instance.
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     * @see <a href="https://cloudinary.com/documentation/solution_overview#configuration_parameters"
     *  target="_blank">Available configuration options</a>
     */

  }, {
    key: "videoTag",
    value: function videoTag(publicId, options) {
      options = defaults({}, options, this.config());
      return new videotag(publicId, options);
    }
    /**
     * Generates a sprite PNG image that contains all images with the specified tag and the corresponding css file.
     * @function Cloudinary#sprite_css
     * @param {string} publicId - The tag on which to base the sprite image.
     * @param {Object} [options] - The {@link Transformation} parameters to include in the URL.
     * @return {string} The URL of the generated CSS file. The sprite image has the same URL, but with a PNG extension.
     * @see <a href="https://cloudinary.com/documentation/sprite_generation" target="_blank">
     *  Sprite generation</a>
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     */

  }, {
    key: "sprite_css",
    value: function sprite_css(publicId, options) {
      options = assign_root_assign_default()({
        type: 'sprite'
      }, options);

      if (!publicId.match(/.css$/)) {
        options.format = 'css';
      }

      return this.url(publicId, options);
    }
    /**
     * Initializes responsive image behavior for all image tags with the 'cld-responsive'
     *  (or other defined {@link Cloudinary#responsive|responsive} class).<br/>
     *  This method should be invoked after the page has loaded.<br/>
     *  <b>Note</b>: Calls {@link Cloudinary#cloudinary_update|cloudinary_update} to modify image tags.
     * @function Cloudinary#responsive
     * @param {Object} options
     * @param {String} [options.responsive_class='cld-responsive'] - An alternative class
     *  to locate the relevant &lt;img&gt; tags.
     * @param {number} [options.responsive_debounce=100] - The debounce interval in milliseconds.
     * @param {boolean} [bootstrap=true] If true, processes the &lt;img&gt; tags by calling
     *  {@link Cloudinary#cloudinary_update|cloudinary_update}. When false, the tags are processed
     *  only after a resize event.
     * @see {@link Cloudinary#cloudinary_update|cloudinary_update} for additional configuration parameters
     * @see <a href="https://cloudinary.com/documentation/responsive_images#automating_responsive_images_with_javascript"
     *  target="_blank">Automating responsive images with JavaScript</a>
     */

  }, {
    key: "responsive",
    value: function responsive(options) {
      var _this = this;

      var bootstrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var ref, ref1, ref2, responsiveClass, responsiveResize, timeout;
      this.responsiveConfig = merge_root_merge_default()(this.responsiveConfig || {}, options);
      responsiveClass = (ref = this.responsiveConfig['responsive_class']) != null ? ref : this.config('responsive_class');

      if (bootstrap) {
        this.cloudinary_update("img.".concat(responsiveClass, ", img.cld-hidpi"), this.responsiveConfig);
      }

      responsiveResize = (ref1 = (ref2 = this.responsiveConfig['responsive_resize']) != null ? ref2 : this.config('responsive_resize')) != null ? ref1 : true;

      if (responsiveResize && !this.responsiveResizeInitialized) {
        this.responsiveConfig.resizing = this.responsiveResizeInitialized = true;
        timeout = null;
        return window.addEventListener('resize', function () {
          var debounce, ref3, ref4, reset, run, wait, waitFunc;
          debounce = (ref3 = (ref4 = _this.responsiveConfig['responsive_debounce']) != null ? ref4 : _this.config('responsive_debounce')) != null ? ref3 : 100;

          reset = function reset() {
            if (timeout) {
              clearTimeout(timeout);
              return timeout = null;
            }
          };

          run = function run() {
            return _this.cloudinary_update("img.".concat(responsiveClass), _this.responsiveConfig);
          };

          waitFunc = function waitFunc() {
            reset();
            return run();
          };

          wait = function wait() {
            reset();
            return timeout = setTimeout(waitFunc, debounce);
          };

          if (debounce) {
            return wait();
          } else {
            return run();
          }
        });
      }
    }
    /**
     * @function Cloudinary#calc_breakpoint
     * @private
     * @ignore
     */

  }, {
    key: "calc_breakpoint",
    value: function calc_breakpoint(element, width, steps) {
      var breakpoints = lodash_getData(element, 'breakpoints') || lodash_getData(element, 'stoppoints') || this.config('breakpoints') || this.config('stoppoints') || defaultBreakpoints;

      if (isFunction_root_isFunction_(breakpoints)) {
        return breakpoints(width, steps);
      } else {
        if (isString_root_isString_default()(breakpoints)) {
          breakpoints = breakpoints.split(',').map(function (point) {
            return parseInt(point);
          }).sort(function (a, b) {
            return a - b;
          });
        }

        return closestAbove(breakpoints, width);
      }
    }
    /**
     * @function Cloudinary#calc_stoppoint
     * @deprecated Use {@link calc_breakpoint} instead.
     * @private
     * @ignore
     */

  }, {
    key: "calc_stoppoint",
    value: function calc_stoppoint(element, width, steps) {
      return this.calc_breakpoint(element, width, steps);
    }
    /**
     * @function Cloudinary#device_pixel_ratio
     * @private
     */

  }, {
    key: "device_pixel_ratio",
    value: function device_pixel_ratio(roundDpr) {
      roundDpr = roundDpr == null ? true : roundDpr;
      var dpr = (typeof window !== "undefined" && window !== null ? window.devicePixelRatio : void 0) || 1;

      if (roundDpr) {
        dpr = Math.ceil(dpr);
      }

      if (dpr <= 0 || dpr === 0 / 0) {
        dpr = 1;
      }

      var dprString = dpr.toString();

      if (dprString.match(/^\d+$/)) {
        dprString += '.0';
      }

      return dprString;
    }
    /**
    * Applies responsiveness to all <code>&lt;img&gt;</code> tags under each relevant node
    *  (regardless of whether the tag contains the {@link Cloudinary#responsive|responsive} class).
    * @param {Element[]} nodes The parent nodes where you want to search for &lt;img&gt; tags.
    * @param {Object} [options] The {@link Cloudinary#cloudinary_update|cloudinary_update} options to apply.
    * @see <a href="https://cloudinary.com/documentation/image_transformation_reference"
    *  target="_blank">Available image transformations</a>
    * @function Cloudinary#processImageTags
    */

  }, {
    key: "processImageTags",
    value: function processImageTags(nodes, options) {
      if (isEmpty(nodes)) {
        // similar to `$.fn.cloudinary`
        return this;
      }

      options = defaults({}, options || {}, this.config());
      var images = nodes.filter(function (node) {
        return /^img$/i.test(node.tagName);
      }).map(function (node) {
        var imgOptions = assign_root_assign_default()({
          width: node.getAttribute('width'),
          height: node.getAttribute('height'),
          src: node.getAttribute('src')
        }, options);
        var publicId = imgOptions['source'] || imgOptions['src'];
        delete imgOptions['source'];
        delete imgOptions['src'];
        var attr = new src_transformation(imgOptions).toHtmlAttributes();
        lodash_setData(node, 'src-cache', url_url(publicId, imgOptions));
        node.setAttribute('width', attr.width);
        node.setAttribute('height', attr.height);
        return node;
      });
      this.cloudinary_update(images, options);
      return this;
    }
    /**
    * Updates the dpr (for `dpr_auto`) and responsive (for `w_auto`) fields according to
    *  the current container size and the device pixel ratio.<br/>
    *  <b>Note</b>:`w_auto` is updated only for images marked with the `cld-responsive`
    *  (or other defined {@link Cloudinary#responsive|responsive}) class.
    * @function Cloudinary#cloudinary_update
    * @param {(Array|string|NodeList)} elements - The HTML image elements to modify.
    * @param {Object} options
    * @param {boolean|string} [options.responsive_use_breakpoints=true]
    * Possible values:<br/>
    *  - `true`: Always use breakpoints for width.<br/>
    *  - `resize`: Use exact width on first render and breakpoints on resize.<br/>
    *  - `false`: Always use exact width.
    * @param {boolean} [options.responsive] - If `true`, enable responsive on all specified elements.
    *  Alternatively, you can define specific HTML elements to modify by adding the `cld-responsive`
    *  (or other custom-defined {@link Cloudinary#responsive|responsive_class}) class to those elements.
    * @param {boolean} [options.responsive_preserve_height] - If `true`, original css height is preserved.
    *  Should be used only if the transformation supports different aspect ratios.
    */

  }, {
    key: "cloudinary_update",
    value: function cloudinary_update(elements, options) {
      var _this2 = this;

      var containerWidth, dataSrc, match, ref4, requiredWidth;

      if (elements === null) {
        return this;
      }

      if (options == null) {
        options = {};
      }

      var responsive = options.responsive != null ? options.responsive : this.config('responsive');

      elements = function () {
        switch (false) {
          case !isArray_root_isArray_default()(elements):
            return elements;

          case elements.constructor.name !== "NodeList":
            return elements;

          case !isString_root_isString_default()(elements):
            return document.querySelectorAll(elements);

          default:
            return [elements];
        }
      }();

      var responsiveClass;

      if (this.responsiveConfig && this.responsiveConfig.responsive_class != null) {
        responsiveClass = this.responsiveConfig.responsive_class;
      } else if (options.responsive_class != null) {
        responsiveClass = options.responsive_class;
      } else {
        responsiveClass = this.config('responsive_class');
      }

      var roundDpr = options.round_dpr != null ? options.round_dpr : this.config('round_dpr');
      elements.forEach(function (tag) {
        if (/img/i.test(tag.tagName)) {
          var setUrl = true;

          if (responsive) {
            lodash_addClass(tag, responsiveClass);
          }

          dataSrc = lodash_getData(tag, 'src-cache') || lodash_getData(tag, 'src');

          if (!isEmpty(dataSrc)) {
            // Update dpr according to the device's devicePixelRatio
            dataSrc = updateDpr.call(_this2, dataSrc, roundDpr);

            if (htmltag.isResponsive(tag, responsiveClass)) {
              containerWidth = cloudinary_findContainerWidth(tag);

              if (containerWidth !== 0) {
                switch (false) {
                  case !/w_auto:breakpoints/.test(dataSrc):
                    requiredWidth = cloudinary_maxWidth(containerWidth, tag);
                    dataSrc = dataSrc.replace(/w_auto:breakpoints([_0-9]*)(:[0-9]+)?/, "w_auto:breakpoints$1:".concat(requiredWidth));
                    break;

                  case !(match = /w_auto(:(\d+))?/.exec(dataSrc)):
                    requiredWidth = applyBreakpoints.call(_this2, tag, containerWidth, match[2], options);
                    requiredWidth = cloudinary_maxWidth(requiredWidth, tag);
                    dataSrc = dataSrc.replace(/w_auto[^,\/]*/g, "w_".concat(requiredWidth));
                }

                lodash_removeAttribute(tag, 'width');

                if (!options.responsive_preserve_height) {
                  lodash_removeAttribute(tag, 'height');
                }
              } else {
                // Container doesn't know the size yet - usually because the image is hidden or outside the DOM.
                setUrl = false;
              }
            }

            if (setUrl) {
              lodash_setAttribute(tag, 'src', dataSrc);
            }
          }
        }
      });
      return this;
    }
    /**
     * Returns a {@link Transformation} object, initialized with the specified options, for chaining purposes.
     * @function Cloudinary#transformation
     * @param {Object} options The {@link Transformation} options to apply.
     * @return {Transformation}
     * @see Transformation
     * @see <a href="https://cloudinary.com/documentation/image_transformation_reference" target="_blank">
     *  Available image transformations</a>
     * @see <a href="https://cloudinary.com/documentation/video_transformation_reference" target="_blank">
     *  Available video transformations</a>
     */

  }, {
    key: "transformation",
    value: function transformation(options) {
      return src_transformation["new"](this.config()).fromOptions(options).setParent(this);
    }
  }], [{
    key: "new",
    value: function _new(options) {
      return new this(options);
    }
  }]);

  return Cloudinary;
}();

assign_root_assign_default()(cloudinary_Cloudinary, constants_namespaceObject);
/* harmony default export */ var cloudinary = (cloudinary_Cloudinary);
// CONCATENATED MODULE: ./src/namespace/cloudinary-core.js
/* concated harmony reexport ClientHintsMetaTag */__webpack_require__.d(__webpack_exports__, "ClientHintsMetaTag", function() { return clienthintsmetatag; });
/* concated harmony reexport Cloudinary */__webpack_require__.d(__webpack_exports__, "Cloudinary", function() { return cloudinary; });
/* concated harmony reexport Condition */__webpack_require__.d(__webpack_exports__, "Condition", function() { return condition; });
/* concated harmony reexport Configuration */__webpack_require__.d(__webpack_exports__, "Configuration", function() { return src_configuration; });
/* concated harmony reexport crc32 */__webpack_require__.d(__webpack_exports__, "crc32", function() { return src_crc32; });
/* concated harmony reexport FetchLayer */__webpack_require__.d(__webpack_exports__, "FetchLayer", function() { return fetchlayer; });
/* concated harmony reexport HtmlTag */__webpack_require__.d(__webpack_exports__, "HtmlTag", function() { return htmltag; });
/* concated harmony reexport ImageTag */__webpack_require__.d(__webpack_exports__, "ImageTag", function() { return imagetag; });
/* concated harmony reexport Layer */__webpack_require__.d(__webpack_exports__, "Layer", function() { return layer_layer; });
/* concated harmony reexport PictureTag */__webpack_require__.d(__webpack_exports__, "PictureTag", function() { return picturetag; });
/* concated harmony reexport SubtitlesLayer */__webpack_require__.d(__webpack_exports__, "SubtitlesLayer", function() { return subtitleslayer; });
/* concated harmony reexport TextLayer */__webpack_require__.d(__webpack_exports__, "TextLayer", function() { return textlayer; });
/* concated harmony reexport Transformation */__webpack_require__.d(__webpack_exports__, "Transformation", function() { return src_transformation; });
/* concated harmony reexport utf8_encode */__webpack_require__.d(__webpack_exports__, "utf8_encode", function() { return src_utf8_encode; });
/* concated harmony reexport Util */__webpack_require__.d(__webpack_exports__, "Util", function() { return lodash_namespaceObject; });
/* concated harmony reexport VideoTag */__webpack_require__.d(__webpack_exports__, "VideoTag", function() { return videotag; });
/**
 * Creates the namespace for Cloudinary
 */
















/* harmony default export */ var cloudinary_core = __webpack_exports__["default"] = ({
  ClientHintsMetaTag: clienthintsmetatag,
  Cloudinary: cloudinary,
  Condition: condition,
  Configuration: src_configuration,
  crc32: src_crc32,
  FetchLayer: fetchlayer,
  HtmlTag: htmltag,
  ImageTag: imagetag,
  Layer: layer_layer,
  PictureTag: picturetag,
  SubtitlesLayer: subtitleslayer,
  TextLayer: textlayer,
  Transformation: src_transformation,
  utf8_encode: src_utf8_encode,
  Util: lodash_namespaceObject,
  VideoTag: videotag
});


/***/ }),

/***/ "lodash/assign":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_assign__;

/***/ }),

/***/ "lodash/cloneDeep":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_cloneDeep__;

/***/ }),

/***/ "lodash/compact":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_compact__;

/***/ }),

/***/ "lodash/difference":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_difference__;

/***/ }),

/***/ "lodash/functions":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_functions__;

/***/ }),

/***/ "lodash/identity":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_identity__;

/***/ }),

/***/ "lodash/includes":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_includes__;

/***/ }),

/***/ "lodash/isArray":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isArray__;

/***/ }),

/***/ "lodash/isElement":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isElement__;

/***/ }),

/***/ "lodash/isFunction":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isFunction__;

/***/ }),

/***/ "lodash/isPlainObject":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isPlainObject__;

/***/ }),

/***/ "lodash/isString":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isString__;

/***/ }),

/***/ "lodash/merge":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_merge__;

/***/ }),

/***/ "lodash/trim":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_trim__;

/***/ })

/******/ });
});
//# sourceMappingURL=cloudinary-core.js.map