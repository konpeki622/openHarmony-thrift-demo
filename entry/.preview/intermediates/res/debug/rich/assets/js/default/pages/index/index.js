/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "D:\\thriftEtsAdapter\\entry\\src\\main\\js\\default\\pages\\index\\index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/json.js!./lib/style.js!D:\\thriftEtsAdapter\\entry\\src\\main\\js\\default\\pages\\index\\index.css":
/*!********************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!D:/thriftEtsAdapter/entry/src/main/js/default/pages/index/index.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100%",
    "height": "100%"
  },
  ".text": {
    "fontSize": "42px"
  },
  ".button": {
    "width": "240px",
    "height": "60px",
    "backgroundColor": "#007dff",
    "fontSize": "30px",
    "textColor": "#FFFFFF",
    "marginTop": "20px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!D:\\thriftEtsAdapter\\entry\\src\\main\\js\\default\\pages\\index\\index.hml":
/*!***********************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!D:/thriftEtsAdapter/entry/src/main/js/default/pages/index/index.hml ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:2",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:4",
        "className": "text",
        "value": function () {return decodeURI('id:%20') + (this.user.uid||'null') + decodeURI(',%20name:%20') + (this.user.name||'null')}
      },
      "type": "text",
      "classList": [
        "text"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:7",
        "className": "text",
        "value": "Click button to create a user"
      },
      "type": "text",
      "classList": [
        "text"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:11",
        "className": "button",
        "type": "capsule",
        "value": "create"
      },
      "type": "button",
      "classList": [
        "button"
      ],
      "events": {
        "click": "create"
      }
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\lmy\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\lmy\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:\\thriftEtsAdapter\\entry\\src\\main\\js\\default\\pages\\index\\index.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=C:/Users/lmy/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/lmy/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:/thriftEtsAdapter/entry/src/main/js/default/pages/index/index.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _ohosNet = _interopRequireDefault(requireModule("@ohos.net.http"));

var _default = {
  data: {
    user: {}
  },
  create: function create() {
    var _this = this;

    try {
      var thrift = __webpack_require__(/*! thrift */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\browser.js");

      var TJSONProtocol = __webpack_require__(/*! thrift/lib/nodejs/lib/thrift/json_protocol */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\json_protocol.js");

      var TAccountService = __webpack_require__(/*! ../../../thrift/TAccountService.js */ "D:\\thriftEtsAdapter\\entry\\src\\main\\js\\thrift\\TAccountService.js");

      var host = 'https://7185-139-159-170-4.ngrok.io';
      var connection = thrift.createOhosConnection(_ohosNet["default"].createHttp, host, 80, {
        protocol: TJSONProtocol,
        header: {
          'Content-Type': 'application/json'
        },
        createHttp: _ohosNet["default"].createHttp
      }),
          client = thrift.createOhosClient(TAccountService, connection);
      var account = {
        uid: 1,
        name: 'hello'
      };
      console.info('requesting...');
      client.createAccount(account).then(function () {
        var _this2 = this;

        (0, _newArrowCheck2["default"])(this, _this);
        console.info('client createAccount:', account.uid);
        client.getAccount(account.uid).then(function (resp) {
          (0, _newArrowCheck2["default"])(this, _this2);
          console.info("client getAccount: uid=".concat(resp.uid, ", name=").concat(resp.name));
          this.user = resp;
        }.bind(this))["catch"](function (e) {
          (0, _newArrowCheck2["default"])(this, _this2);
          console.info(e);
        }.bind(this));
      }.bind(this))["catch"](function (e) {
        (0, _newArrowCheck2["default"])(this, _this);
        console.info(e);
      }.bind(this));
    } catch (e) {
      console.info(e);
    }
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/newArrowCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/newArrowCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");

var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");

var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var R = (typeof Reflect === "undefined" ? "undefined" : (0, _typeof2["default"])(Reflect)) === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;

if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}

module.exports = EventEmitter; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + (0, _typeof2["default"])(listener));
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function get() {
    return defaultMaxListeners;
  },
  set: function set(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }

    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {
  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }

  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];

  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  var doError = type === 'error';
  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    var er;
    if (args.length > 0) er = args[0];

    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    } // At least give some kind of context to the user


    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];
  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      ReflectApply(listeners[i], this, args);
    }
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  checkListener(listener);
  events = target._events;

  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    } // Check for listener leak


    m = _getMaxListeners(target);

    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true; // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax

      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0) return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  checkListener(listener);
  events = this._events;
  if (events === undefined) return this;
  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (events === undefined) return this; // not listening for removeListener, no need to emit

  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (events === undefined) return [];
  var evlistener = events[type];
  if (evlistener === undefined) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) {
    copy[i] = arr[i];
  }

  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) {
    list[index] = list[index + 1];
  }

  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? void 0 : global : self);

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || void 0 && (void 0).setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || void 0 && (void 0).clearImmediate;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

module.exports = function isBuffer(arg) {
  return arg && (0, _typeof2["default"])(arg) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
  var keys = Object.keys(obj);
  var descriptors = {};

  for (var i = 0; i < keys.length; i++) {
    descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
  }

  return descriptors;
};

var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  } // Allow for deprecating things in the process of starting up.


  if (typeof process === 'undefined') {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return (0, _typeof2["default"])(arg) === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return (0, _typeof2["default"])(arg) === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (0, _typeof2["default"])(arg) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];

    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }

    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};

exports.promisify.custom = kCustomPromisifiedSymbol;

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }

  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  } // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.


  function callbackified() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();

    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }

    var self = this;

    var cb = function cb() {
      return maybeCb.apply(self, arguments);
    }; // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)


    original.apply(this, args).then(function (ret) {
      process.nextTick(cb, null, ret);
    }, function (rej) {
      process.nextTick(callbackifyOnRejected, rej, cb);
    });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
  return callbackified;
}

exports.callbackify = callbackify;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thriftEtsAdapter\\entry\\node_modules\\node-int64\\Int64.js":
/*!******************************************************************!*\
  !*** D:/thriftEtsAdapter/entry/node_modules/node-int64/Int64.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

//     Int64.js
//
//     Copyright (c) 2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

/**
 * Support for handling 64-bit int numbers in Javascript (node.js)
 *
 * JS Numbers are IEEE-754 binary double-precision floats, which limits the
 * range of values that can be represented with integer precision to:
 *
 * 2^^53 <= N <= 2^53
 *
 * Int64 objects wrap a node Buffer that holds the 8-bytes of int64 data.  These
 * objects operate directly on the buffer which means that if they are created
 * using an existing buffer then setting the value will modify the Buffer, and
 * vice-versa.
 *
 * Internal Representation
 *
 * The internal buffer format is Big Endian.  I.e. the most-significant byte is
 * at buffer[0], the least-significant at buffer[7].  For the purposes of
 * converting to/from JS native numbers, the value is assumed to be a signed
 * integer stored in 2's complement form.
 *
 * For details about IEEE-754 see:
 * http://en.wikipedia.org/wiki/Double_precision_floating-point_format
 */
// Useful masks and values for bit twiddling
var MASK31 = 0x7fffffff,
    VAL31 = 0x80000000;
var MASK32 = 0xffffffff,
    VAL32 = 0x100000000; // Map for converting hex octets to strings

var _HEX = [];

for (var i = 0; i < 256; i++) {
  _HEX[i] = (i > 0xF ? '' : '0') + i.toString(16);
} //
// Int64
//

/**
 * Constructor accepts any of the following argument types:
 *
 * new Int64(buffer[, offset=0]) - Existing Buffer with byte offset
 * new Int64(Uint8Array[, offset=0]) - Existing Uint8Array with a byte offset
 * new Int64(string)             - Hex string (throws if n is outside int64 range)
 * new Int64(number)             - Number (throws if n is outside int64 range)
 * new Int64(hi, lo)             - Raw bits as two 32-bit values
 */


var Int64 = module.exports = function (a1, a2) {
  if (a1 instanceof Buffer) {
    this.buffer = a1;
    this.offset = a2 || 0;
  } else if (Object.prototype.toString.call(a1) == '[object Uint8Array]') {
    // Under Browserify, Buffers can extend Uint8Arrays rather than an
    // instance of Buffer. We could assume the passed in Uint8Array is actually
    // a buffer but that won't handle the case where a raw Uint8Array is passed
    // in. We construct a new Buffer just in case.
    this.buffer = new Buffer(a1);
    this.offset = a2 || 0;
  } else {
    this.buffer = this.buffer || new Buffer(8);
    this.offset = 0;
    this.setValue.apply(this, arguments);
  }
}; // Max integer value that JS can accurately represent


Int64.MAX_INT = Math.pow(2, 53); // Min integer value that JS can accurately represent

Int64.MIN_INT = -Math.pow(2, 53);
Int64.prototype = {
  constructor: Int64,

  /**
   * Do in-place 2's compliment.  See
   * http://en.wikipedia.org/wiki/Two's_complement
   */
  _2scomp: function _2scomp() {
    var b = this.buffer,
        o = this.offset,
        carry = 1;

    for (var i = o + 7; i >= o; i--) {
      var v = (b[i] ^ 0xff) + carry;
      b[i] = v & 0xff;
      carry = v >> 8;
    }
  },

  /**
   * Set the value. Takes any of the following arguments:
   *
   * setValue(string) - A hexidecimal string
   * setValue(number) - Number (throws if n is outside int64 range)
   * setValue(hi, lo) - Raw bits as two 32-bit values
   */
  setValue: function setValue(hi, lo) {
    var negate = false;

    if (arguments.length == 1) {
      if (typeof hi == 'number') {
        // Simplify bitfield retrieval by using abs() value.  We restore sign
        // later
        negate = hi < 0;
        hi = Math.abs(hi);
        lo = hi % VAL32;
        hi = hi / VAL32;
        if (hi > VAL32) throw new RangeError(hi + ' is outside Int64 range');
        hi = hi | 0;
      } else if (typeof hi == 'string') {
        hi = (hi + '').replace(/^0x/, '');
        lo = hi.substr(-8);
        hi = hi.length > 8 ? hi.substr(0, hi.length - 8) : '';
        hi = parseInt(hi, 16);
        lo = parseInt(lo, 16);
      } else {
        throw new Error(hi + ' must be a Number or String');
      }
    } // Technically we should throw if hi or lo is outside int32 range here, but
    // it's not worth the effort. Anything past the 32'nd bit is ignored.
    // Copy bytes to buffer


    var b = this.buffer,
        o = this.offset;

    for (var i = 7; i >= 0; i--) {
      b[o + i] = lo & 0xff;
      lo = i == 4 ? hi : lo >>> 8;
    } // Restore sign of passed argument


    if (negate) this._2scomp();
  },

  /**
   * Convert to a native JS number.
   *
   * WARNING: Do not expect this value to be accurate to integer precision for
   * large (positive or negative) numbers!
   *
   * @param allowImprecise If true, no check is performed to verify the
   * returned value is accurate to integer precision.  If false, imprecise
   * numbers (very large positive or negative numbers) will be forced to +/-
   * Infinity.
   */
  toNumber: function toNumber(allowImprecise) {
    var b = this.buffer,
        o = this.offset; // Running sum of octets, doing a 2's complement

    var negate = b[o] & 0x80,
        x = 0,
        carry = 1;

    for (var i = 7, m = 1; i >= 0; i--, m *= 256) {
      var v = b[o + i]; // 2's complement for negative numbers

      if (negate) {
        v = (v ^ 0xff) + carry;
        carry = v >> 8;
        v = v & 0xff;
      }

      x += v * m;
    } // Return Infinity if we've lost integer precision


    if (!allowImprecise && x >= Int64.MAX_INT) {
      return negate ? -Infinity : Infinity;
    }

    return negate ? -x : x;
  },

  /**
   * Convert to a JS Number. Returns +/-Infinity for values that can't be
   * represented to integer precision.
   */
  valueOf: function valueOf() {
    return this.toNumber(false);
  },

  /**
   * Return string value
   *
   * @param radix Just like Number#toString()'s radix
   */
  toString: function toString(radix) {
    return this.valueOf().toString(radix || 10);
  },

  /**
   * Return a string showing the buffer octets, with MSB on the left.
   *
   * @param sep separator string. default is '' (empty string)
   */
  toOctetString: function toOctetString(sep) {
    var out = new Array(8);
    var b = this.buffer,
        o = this.offset;

    for (var i = 0; i < 8; i++) {
      out[i] = _HEX[b[o + i]];
    }

    return out.join(sep || '');
  },

  /**
   * Returns the int64's 8 bytes in a buffer.
   *
   * @param {bool} [rawBuffer=false]  If no offset and this is true, return the internal buffer.  Should only be used if
   *                                  you're discarding the Int64 afterwards, as it breaks encapsulation.
   */
  toBuffer: function toBuffer(rawBuffer) {
    if (rawBuffer && this.offset === 0) return this.buffer;
    var out = new Buffer(8);
    this.buffer.copy(out, 0, this.offset, this.offset + 8);
    return out;
  },

  /**
   * Copy 8 bytes of int64 into target buffer at target offset.
   *
   * @param {Buffer} targetBuffer       Buffer to copy into.
   * @param {number} [targetOffset=0]   Offset into target buffer.
   */
  copy: function copy(targetBuffer, targetOffset) {
    this.buffer.copy(targetBuffer, targetOffset || 0, this.offset, this.offset + 8);
  },

  /**
   * Returns a number indicating whether this comes before or after or is the
   * same as the other in sort order.
   *
   * @param {Int64} other  Other Int64 to compare.
   */
  compare: function compare(other) {
    // If sign bits differ ...
    if ((this.buffer[this.offset] & 0x80) != (other.buffer[other.offset] & 0x80)) {
      return other.buffer[other.offset] - this.buffer[this.offset];
    } // otherwise, compare bytes lexicographically


    for (var i = 0; i < 8; i++) {
      if (this.buffer[this.offset + i] !== other.buffer[other.offset + i]) {
        return this.buffer[this.offset + i] - other.buffer[other.offset + i];
      }
    }

    return 0;
  },

  /**
   * Returns a boolean indicating if this integer is equal to other.
   *
   * @param {Int64} other  Other Int64 to compare.
   */
  equals: function equals(other) {
    return this.compare(other) === 0;
  },

  /**
   * Pretty output in console.log
   */
  inspect: function inspect() {
    return '[Int64 value:' + this + ' octets:' + this.toOctetString(' ') + ']';
  }
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thriftEtsAdapter\\entry\\src\\main\\js\\default\\pages\\index\\index.hml?entry":
/*!*********************************************************************************!*\
  !*** D:/thriftEtsAdapter/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !./lib/json.js!./lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!D:\\thriftEtsAdapter\\entry\\src\\main\\js\\default\\pages\\index\\index.hml")
var $app_style$ = __webpack_require__(/*! !./lib/json.js!./lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!D:\\thriftEtsAdapter\\entry\\src\\main\\js\\default\\pages\\index\\index.css")
var $app_script$ = __webpack_require__(/*! !./lib/script.js!./node_modules/babel-loader?presets[]=C:/Users/lmy/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/lmy/AppData/Local/Huawei/Sdk/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\lmy\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\lmy\\AppData\\Local\\Huawei\\Sdk\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!D:\\thriftEtsAdapter\\entry\\src\\main\\js\\default\\pages\\index\\index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "D:\\thriftEtsAdapter\\entry\\src\\main\\js\\thrift\\TAccountService.js":
/*!***********************************************************************!*\
  !*** D:/thriftEtsAdapter/entry/src/main/js/thrift/TAccountService.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

//
// Autogenerated by Thrift Compiler (0.15.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = __webpack_require__(/*! thrift */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\browser.js");

var Thrift = thrift.Thrift;

var Int64 = __webpack_require__(/*! node-int64 */ "D:\\thriftEtsAdapter\\entry\\node_modules\\node-int64\\Int64.js");

var ttypes = __webpack_require__(/*! ./account_types */ "D:\\thriftEtsAdapter\\entry\\src\\main\\js\\thrift\\account_types.js"); //HELPER FUNCTIONS AND STRUCTURES


var TAccountService_createAccount_args = /*#__PURE__*/function () {
  function TAccountService_createAccount_args(args) {
    (0, _classCallCheck2["default"])(this, TAccountService_createAccount_args);
    this.tAccountRpcDTO = null;

    if (args) {
      if (args.tAccountRpcDTO !== undefined && args.tAccountRpcDTO !== null) {
        this.tAccountRpcDTO = new ttypes.TAccountRpcDTO(args.tAccountRpcDTO);
      }
    }
  }

  (0, _createClass2["default"])(TAccountService_createAccount_args, [{
    key: "read",
    value: function read(input) {
      input.readStructBegin();

      while (true) {
        var ret = input.readFieldBegin();
        var ftype = ret.ftype;
        var fid = ret.fid;

        if (ftype == Thrift.Type.STOP) {
          break;
        }

        switch (fid) {
          case 1:
            if (ftype == Thrift.Type.STRUCT) {
              this.tAccountRpcDTO = new ttypes.TAccountRpcDTO();
              this.tAccountRpcDTO.read(input);
            } else {
              input.skip(ftype);
            }

            break;

          case 0:
            input.skip(ftype);
            break;

          default:
            input.skip(ftype);
        }

        input.readFieldEnd();
      }

      input.readStructEnd();
      return;
    }
  }, {
    key: "write",
    value: function write(output) {
      output.writeStructBegin('TAccountService_createAccount_args');

      if (this.tAccountRpcDTO !== null && this.tAccountRpcDTO !== undefined) {
        output.writeFieldBegin('tAccountRpcDTO', Thrift.Type.STRUCT, 1);
        this.tAccountRpcDTO.write(output);
        output.writeFieldEnd();
      }

      output.writeFieldStop();
      output.writeStructEnd();
      return;
    }
  }]);
  return TAccountService_createAccount_args;
}();

var TAccountService_createAccount_result = /*#__PURE__*/function () {
  function TAccountService_createAccount_result(args) {
    (0, _classCallCheck2["default"])(this, TAccountService_createAccount_result);
  }

  (0, _createClass2["default"])(TAccountService_createAccount_result, [{
    key: "read",
    value: function read(input) {
      input.readStructBegin();

      while (true) {
        var ret = input.readFieldBegin();
        var ftype = ret.ftype;

        if (ftype == Thrift.Type.STOP) {
          break;
        }

        input.skip(ftype);
        input.readFieldEnd();
      }

      input.readStructEnd();
      return;
    }
  }, {
    key: "write",
    value: function write(output) {
      output.writeStructBegin('TAccountService_createAccount_result');
      output.writeFieldStop();
      output.writeStructEnd();
      return;
    }
  }]);
  return TAccountService_createAccount_result;
}();

var TAccountService_getAccount_args = /*#__PURE__*/function () {
  function TAccountService_getAccount_args(args) {
    (0, _classCallCheck2["default"])(this, TAccountService_getAccount_args);
    this.uid = null;

    if (args) {
      if (args.uid !== undefined && args.uid !== null) {
        this.uid = args.uid;
      }
    }
  }

  (0, _createClass2["default"])(TAccountService_getAccount_args, [{
    key: "read",
    value: function read(input) {
      input.readStructBegin();

      while (true) {
        var ret = input.readFieldBegin();
        var ftype = ret.ftype;
        var fid = ret.fid;

        if (ftype == Thrift.Type.STOP) {
          break;
        }

        switch (fid) {
          case 1:
            if (ftype == Thrift.Type.I64) {
              this.uid = input.readI64();
            } else {
              input.skip(ftype);
            }

            break;

          case 0:
            input.skip(ftype);
            break;

          default:
            input.skip(ftype);
        }

        input.readFieldEnd();
      }

      input.readStructEnd();
      return;
    }
  }, {
    key: "write",
    value: function write(output) {
      output.writeStructBegin('TAccountService_getAccount_args');

      if (this.uid !== null && this.uid !== undefined) {
        output.writeFieldBegin('uid', Thrift.Type.I64, 1);
        output.writeI64(this.uid);
        output.writeFieldEnd();
      }

      output.writeFieldStop();
      output.writeStructEnd();
      return;
    }
  }]);
  return TAccountService_getAccount_args;
}();

var TAccountService_getAccount_result = /*#__PURE__*/function () {
  function TAccountService_getAccount_result(args) {
    (0, _classCallCheck2["default"])(this, TAccountService_getAccount_result);
    this.success = null;

    if (args) {
      if (args.success !== undefined && args.success !== null) {
        this.success = new ttypes.TAccountRpcDTO(args.success);
      }
    }
  }

  (0, _createClass2["default"])(TAccountService_getAccount_result, [{
    key: "read",
    value: function read(input) {
      input.readStructBegin();

      while (true) {
        var ret = input.readFieldBegin();
        var ftype = ret.ftype;
        var fid = ret.fid;

        if (ftype == Thrift.Type.STOP) {
          break;
        }

        switch (fid) {
          case 0:
            if (ftype == Thrift.Type.STRUCT) {
              this.success = new ttypes.TAccountRpcDTO();
              this.success.read(input);
            } else {
              input.skip(ftype);
            }

            break;

          case 0:
            input.skip(ftype);
            break;

          default:
            input.skip(ftype);
        }

        input.readFieldEnd();
      }

      input.readStructEnd();
      return;
    }
  }, {
    key: "write",
    value: function write(output) {
      output.writeStructBegin('TAccountService_getAccount_result');

      if (this.success !== null && this.success !== undefined) {
        output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
        this.success.write(output);
        output.writeFieldEnd();
      }

      output.writeFieldStop();
      output.writeStructEnd();
      return;
    }
  }]);
  return TAccountService_getAccount_result;
}();

var TAccountServiceClient = exports.Client = /*#__PURE__*/function () {
  function TAccountServiceClient(output, pClass) {
    (0, _classCallCheck2["default"])(this, TAccountServiceClient);
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
  }

  (0, _createClass2["default"])(TAccountServiceClient, [{
    key: "seqid",
    value: function seqid() {
      return this._seqid;
    }
  }, {
    key: "new_seqid",
    value: function new_seqid() {
      return this._seqid += 1;
    }
  }, {
    key: "createAccount",
    value: function createAccount(tAccountRpcDTO) {
      var _this = this;

      this._seqid = this.new_seqid();
      var self = this;
      return new Promise(function (resolve, reject) {
        var _this2 = this;

        (0, _newArrowCheck2["default"])(this, _this);

        self._reqs[self.seqid()] = function (error, result) {
          (0, _newArrowCheck2["default"])(this, _this2);
          return error ? reject(error) : resolve(result);
        }.bind(this);

        self.send_createAccount(tAccountRpcDTO);
      }.bind(this));
    }
  }, {
    key: "send_createAccount",
    value: function send_createAccount(tAccountRpcDTO) {
      var output = new this.pClass(this.output);
      var params = {
        tAccountRpcDTO: tAccountRpcDTO
      };
      var args = new TAccountService_createAccount_args(params);

      try {
        output.writeMessageBegin('createAccount', Thrift.MessageType.CALL, this.seqid());
        args.write(output);
        output.writeMessageEnd();
        return this.output.flush();
      } catch (e) {
        delete this._reqs[this.seqid()];

        if (typeof output.reset === 'function') {
          output.reset();
        }

        throw e;
      }
    }
  }, {
    key: "recv_createAccount",
    value: function recv_createAccount(input, mtype, rseqid) {
      var callback = this._reqs[rseqid] || function () {};

      delete this._reqs[rseqid];

      if (mtype == Thrift.MessageType.EXCEPTION) {
        var x = new Thrift.TApplicationException();
        x.read(input);
        input.readMessageEnd();
        return callback(x);
      }

      var result = new TAccountService_createAccount_result();
      result.read(input);
      input.readMessageEnd();
      callback(null);
    }
  }, {
    key: "getAccount",
    value: function getAccount(uid) {
      var _this3 = this;

      this._seqid = this.new_seqid();
      var self = this;
      return new Promise(function (resolve, reject) {
        var _this4 = this;

        (0, _newArrowCheck2["default"])(this, _this3);

        self._reqs[self.seqid()] = function (error, result) {
          (0, _newArrowCheck2["default"])(this, _this4);
          return error ? reject(error) : resolve(result);
        }.bind(this);

        self.send_getAccount(uid);
      }.bind(this));
    }
  }, {
    key: "send_getAccount",
    value: function send_getAccount(uid) {
      var output = new this.pClass(this.output);
      var params = {
        uid: uid
      };
      var args = new TAccountService_getAccount_args(params);

      try {
        output.writeMessageBegin('getAccount', Thrift.MessageType.CALL, this.seqid());
        args.write(output);
        output.writeMessageEnd();
        return this.output.flush();
      } catch (e) {
        delete this._reqs[this.seqid()];

        if (typeof output.reset === 'function') {
          output.reset();
        }

        throw e;
      }
    }
  }, {
    key: "recv_getAccount",
    value: function recv_getAccount(input, mtype, rseqid) {
      var callback = this._reqs[rseqid] || function () {};

      delete this._reqs[rseqid];

      if (mtype == Thrift.MessageType.EXCEPTION) {
        var x = new Thrift.TApplicationException();
        x.read(input);
        input.readMessageEnd();
        return callback(x);
      }

      var result = new TAccountService_getAccount_result();
      result.read(input);
      input.readMessageEnd();

      if (null !== result.success) {
        return callback(null, result.success);
      }

      return callback('getAccount failed: unknown result');
    }
  }]);
  return TAccountServiceClient;
}();

var TAccountServiceProcessor = exports.Processor = /*#__PURE__*/function () {
  function TAccountServiceProcessor(handler) {
    (0, _classCallCheck2["default"])(this, TAccountServiceProcessor);
    this._handler = handler;
  }

  (0, _createClass2["default"])(TAccountServiceProcessor, [{
    key: "process",
    value: function process(input, output) {
      var r = input.readMessageBegin();

      if (this['process_' + r.fname]) {
        return this['process_' + r.fname].call(this, r.rseqid, input, output);
      } else {
        input.skip(Thrift.Type.STRUCT);
        input.readMessageEnd();
        var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
        output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
        x.write(output);
        output.writeMessageEnd();
        output.flush();
      }
    }
  }, {
    key: "process_createAccount",
    value: function process_createAccount(seqid, input, output) {
      var _this5 = this;

      var args = new TAccountService_createAccount_args();
      args.read(input);
      input.readMessageEnd();

      if (this._handler.createAccount.length === 1) {
        Promise.resolve(this._handler.createAccount.bind(this._handler)(args.tAccountRpcDTO)).then(function (result) {
          (0, _newArrowCheck2["default"])(this, _this5);
          var result_obj = new TAccountService_createAccount_result({
            success: result
          });
          output.writeMessageBegin("createAccount", Thrift.MessageType.REPLY, seqid);
          result_obj.write(output);
          output.writeMessageEnd();
          output.flush();
        }.bind(this))["catch"](function (err) {
          (0, _newArrowCheck2["default"])(this, _this5);
          var result;
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("createAccount", Thrift.MessageType.EXCEPTION, seqid);
          result.write(output);
          output.writeMessageEnd();
          output.flush();
        }.bind(this));
      } else {
        this._handler.createAccount(args.tAccountRpcDTO, function (err, result) {
          (0, _newArrowCheck2["default"])(this, _this5);
          var result_obj;

          if (err === null || typeof err === 'undefined') {
            result_obj = new TAccountService_createAccount_result(err !== null || typeof err === 'undefined' ? err : {
              success: result
            });
            output.writeMessageBegin("createAccount", Thrift.MessageType.REPLY, seqid);
          } else {
            result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
            output.writeMessageBegin("createAccount", Thrift.MessageType.EXCEPTION, seqid);
          }

          result_obj.write(output);
          output.writeMessageEnd();
          output.flush();
        }.bind(this));
      }
    }
  }, {
    key: "process_getAccount",
    value: function process_getAccount(seqid, input, output) {
      var _this6 = this;

      var args = new TAccountService_getAccount_args();
      args.read(input);
      input.readMessageEnd();

      if (this._handler.getAccount.length === 1) {
        Promise.resolve(this._handler.getAccount.bind(this._handler)(args.uid)).then(function (result) {
          (0, _newArrowCheck2["default"])(this, _this6);
          var result_obj = new TAccountService_getAccount_result({
            success: result
          });
          output.writeMessageBegin("getAccount", Thrift.MessageType.REPLY, seqid);
          result_obj.write(output);
          output.writeMessageEnd();
          output.flush();
        }.bind(this))["catch"](function (err) {
          (0, _newArrowCheck2["default"])(this, _this6);
          var result;
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getAccount", Thrift.MessageType.EXCEPTION, seqid);
          result.write(output);
          output.writeMessageEnd();
          output.flush();
        }.bind(this));
      } else {
        this._handler.getAccount(args.uid, function (err, result) {
          (0, _newArrowCheck2["default"])(this, _this6);
          var result_obj;

          if (err === null || typeof err === 'undefined') {
            result_obj = new TAccountService_getAccount_result(err !== null || typeof err === 'undefined' ? err : {
              success: result
            });
            output.writeMessageBegin("getAccount", Thrift.MessageType.REPLY, seqid);
          } else {
            result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
            output.writeMessageBegin("getAccount", Thrift.MessageType.EXCEPTION, seqid);
          }

          result_obj.write(output);
          output.writeMessageEnd();
          output.flush();
        }.bind(this));
      }
    }
  }]);
  return TAccountServiceProcessor;
}();

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thriftEtsAdapter\\entry\\src\\main\\js\\thrift\\account_types.js":
/*!*********************************************************************!*\
  !*** D:/thriftEtsAdapter/entry/src/main/js/thrift/account_types.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

//
// Autogenerated by Thrift Compiler (0.15.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = __webpack_require__(/*! thrift */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\browser.js");

var Thrift = thrift.Thrift;

var Int64 = __webpack_require__(/*! node-int64 */ "D:\\thriftEtsAdapter\\entry\\node_modules\\node-int64\\Int64.js");

var ttypes = module.exports = {};

var TAccountRpcDTO = module.exports.TAccountRpcDTO = /*#__PURE__*/function () {
  function _class(args) {
    (0, _classCallCheck2["default"])(this, _class);
    this.uid = null;
    this.name = null;

    if (args) {
      if (args.uid !== undefined && args.uid !== null) {
        this.uid = args.uid;
      }

      if (args.name !== undefined && args.name !== null) {
        this.name = args.name;
      }
    }
  }

  (0, _createClass2["default"])(_class, [{
    key: "read",
    value: function read(input) {
      input.readStructBegin();

      while (true) {
        var ret = input.readFieldBegin();
        var ftype = ret.ftype;
        var fid = ret.fid;

        if (ftype == Thrift.Type.STOP) {
          break;
        }

        switch (fid) {
          case 1:
            if (ftype == Thrift.Type.I64) {
              this.uid = input.readI64();
            } else {
              input.skip(ftype);
            }

            break;

          case 2:
            if (ftype == Thrift.Type.STRING) {
              this.name = input.readString();
            } else {
              input.skip(ftype);
            }

            break;

          default:
            input.skip(ftype);
        }

        input.readFieldEnd();
      }

      input.readStructEnd();
      return;
    }
  }, {
    key: "write",
    value: function write(output) {
      output.writeStructBegin('TAccountRpcDTO');

      if (this.uid !== null && this.uid !== undefined) {
        output.writeFieldBegin('uid', Thrift.Type.I64, 1);
        output.writeI64(this.uid);
        output.writeFieldEnd();
      }

      if (this.name !== null && this.name !== undefined) {
        output.writeFieldBegin('name', Thrift.Type.STRING, 2);
        output.writeString(this.name);
        output.writeFieldEnd();
      }

      output.writeFieldStop();
      output.writeStructEnd();
      return;
    }
  }]);
  return _class;
}();

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\binary.js":
/*!*************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/binary.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var POW_8 = Math.pow(2, 8);
var POW_16 = Math.pow(2, 16);
var POW_24 = Math.pow(2, 24);
var POW_32 = Math.pow(2, 32);
var POW_40 = Math.pow(2, 40);
var POW_48 = Math.pow(2, 48);
var POW_52 = Math.pow(2, 52);
var POW_1022 = Math.pow(2, 1022);

exports.readByte = function (b) {
  return b > 127 ? b - 256 : b;
};

exports.readI16 = function (buff, off) {
  off = off || 0;
  var v = buff[off + 1];
  v += buff[off] << 8;

  if (buff[off] & 128) {
    v -= POW_16;
  }

  return v;
};

exports.readI32 = function (buff, off) {
  off = off || 0;
  var v = buff[off + 3];
  v += buff[off + 2] << 8;
  v += buff[off + 1] << 16;
  v += buff[off] * POW_24;

  if (buff[off] & 0x80) {
    v -= POW_32;
  }

  return v;
};

exports.writeI16 = function (buff, v) {
  buff[1] = v & 0xff;
  v >>= 8;
  buff[0] = v & 0xff;
  return buff;
};

exports.writeI32 = function (buff, v) {
  buff[3] = v & 0xff;
  v >>= 8;
  buff[2] = v & 0xff;
  v >>= 8;
  buff[1] = v & 0xff;
  v >>= 8;
  buff[0] = v & 0xff;
  return buff;
};

exports.readDouble = function (buff, off) {
  off = off || 0;
  var signed = buff[off] & 0x80;
  var e = (buff[off + 1] & 0xF0) >> 4;
  e += (buff[off] & 0x7F) << 4;
  var m = buff[off + 7];
  m += buff[off + 6] << 8;
  m += buff[off + 5] << 16;
  m += buff[off + 4] * POW_24;
  m += buff[off + 3] * POW_32;
  m += buff[off + 2] * POW_40;
  m += (buff[off + 1] & 0x0F) * POW_48;

  switch (e) {
    case 0:
      e = -1022;
      break;

    case 2047:
      return m ? NaN : signed ? -Infinity : Infinity;

    default:
      m += POW_52;
      e -= 1023;
  }

  if (signed) {
    m *= -1;
  }

  return m * Math.pow(2, e - 52);
};
/*
 * Based on code from the jspack module:
 * http://code.google.com/p/jspack/
 */


exports.writeDouble = function (buff, v) {
  var m, e, c;
  buff[0] = v < 0 ? 0x80 : 0x00;
  v = Math.abs(v);

  if (v !== v) {
    // NaN, use QNaN IEEE format
    m = 2251799813685248;
    e = 2047;
  } else if (v === Infinity) {
    m = 0;
    e = 2047;
  } else {
    e = Math.floor(Math.log(v) / Math.LN2);
    c = Math.pow(2, -e);

    if (v * c < 1) {
      e--;
      c *= 2;
    }

    if (e + 1023 >= 2047) {
      // Overflow
      m = 0;
      e = 2047;
    } else if (e + 1023 >= 1) {
      // Normalized - term order matters, as Math.pow(2, 52-e) and v*Math.pow(2, 52) can overflow
      m = (v * c - 1) * POW_52;
      e += 1023;
    } else {
      // Denormalized - also catches the '0' case, somewhat by chance
      m = v * POW_1022 * POW_52;
      e = 0;
    }
  }

  buff[1] = e << 4 & 0xf0;
  buff[0] |= e >> 4 & 0x7f;
  buff[7] = m & 0xff;
  m = Math.floor(m / POW_8);
  buff[6] = m & 0xff;
  m = Math.floor(m / POW_8);
  buff[5] = m & 0xff;
  m = Math.floor(m / POW_8);
  buff[4] = m & 0xff;
  m >>= 8;
  buff[3] = m & 0xff;
  m >>= 8;
  buff[2] = m & 0xff;
  m >>= 8;
  buff[1] |= m & 0x0f;
  return buff;
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\binary_protocol.js":
/*!**********************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/binary_protocol.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var log = __webpack_require__(/*! ./log */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\log.js");

var binary = __webpack_require__(/*! ./binary */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\binary.js");

var Int64 = __webpack_require__(/*! node-int64 */ "D:\\thrift\\node_modules\\node-int64\\Int64.js");

var Thrift = __webpack_require__(/*! ./thrift */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\thrift.js");

var Type = Thrift.Type;
module.exports = TBinaryProtocol; // JavaScript supports only numeric doubles, therefore even hex values are always signed.
// The largest integer value which can be represented in JavaScript is +/-2^53.
// Bitwise operations convert numbers to 32 bit integers but perform sign extension
// upon assigning values back to variables.

var VERSION_MASK = -65536,
    // 0xffff0000
VERSION_1 = -2147418112,
    // 0x80010000
TYPE_MASK = 0x000000ff;
TBinaryProtocol.VERSION_MASK = VERSION_MASK;
TBinaryProtocol.VERSION_1 = VERSION_1;
TBinaryProtocol.TYPE_MASK = TYPE_MASK;

function TBinaryProtocol(trans, strictRead, strictWrite) {
  this.trans = trans;
  this.strictRead = strictRead !== undefined ? strictRead : false;
  this.strictWrite = strictWrite !== undefined ? strictWrite : true;
  this._seqid = null;
}

;

TBinaryProtocol.prototype.flush = function () {
  return this.trans.flush();
};

TBinaryProtocol.prototype.writeMessageBegin = function (name, type, seqid) {
  if (this.strictWrite) {
    this.writeI32(VERSION_1 | type);
    this.writeString(name);
    this.writeI32(seqid);
  } else {
    this.writeString(name);
    this.writeByte(type);
    this.writeI32(seqid);
  } // Record client seqid to find callback again


  if (this._seqid !== null) {
    log.warning('SeqId already set', {
      'name': name
    });
  } else {
    this._seqid = seqid;
    this.trans.setCurrSeqId(seqid);
  }
};

TBinaryProtocol.prototype.writeMessageEnd = function () {
  if (this._seqid !== null) {
    this._seqid = null;
  } else {
    log.warning('No seqid to unset');
  }
};

TBinaryProtocol.prototype.writeStructBegin = function (name) {};

TBinaryProtocol.prototype.writeStructEnd = function () {};

TBinaryProtocol.prototype.writeFieldBegin = function (name, type, id) {
  this.writeByte(type);
  this.writeI16(id);
};

TBinaryProtocol.prototype.writeFieldEnd = function () {};

TBinaryProtocol.prototype.writeFieldStop = function () {
  this.writeByte(Type.STOP);
};

TBinaryProtocol.prototype.writeMapBegin = function (ktype, vtype, size) {
  this.writeByte(ktype);
  this.writeByte(vtype);
  this.writeI32(size);
};

TBinaryProtocol.prototype.writeMapEnd = function () {};

TBinaryProtocol.prototype.writeListBegin = function (etype, size) {
  this.writeByte(etype);
  this.writeI32(size);
};

TBinaryProtocol.prototype.writeListEnd = function () {};

TBinaryProtocol.prototype.writeSetBegin = function (etype, size) {
  this.writeByte(etype);
  this.writeI32(size);
};

TBinaryProtocol.prototype.writeSetEnd = function () {};

TBinaryProtocol.prototype.writeBool = function (bool) {
  if (bool) {
    this.writeByte(1);
  } else {
    this.writeByte(0);
  }
};

TBinaryProtocol.prototype.writeByte = function (b) {
  this.trans.write(new Buffer([b]));
};

TBinaryProtocol.prototype.writeI16 = function (i16) {
  this.trans.write(binary.writeI16(new Buffer(2), i16));
};

TBinaryProtocol.prototype.writeI32 = function (i32) {
  this.trans.write(binary.writeI32(new Buffer(4), i32));
};

TBinaryProtocol.prototype.writeI64 = function (i64) {
  if (i64.buffer) {
    this.trans.write(i64.buffer);
  } else {
    this.trans.write(new Int64(i64).buffer);
  }
};

TBinaryProtocol.prototype.writeDouble = function (dub) {
  this.trans.write(binary.writeDouble(new Buffer(8), dub));
};

TBinaryProtocol.prototype.writeStringOrBinary = function (name, encoding, arg) {
  if (typeof arg === 'string') {
    this.writeI32(Buffer.byteLength(arg, encoding));
    this.trans.write(new Buffer(arg, encoding));
  } else if (arg instanceof Buffer || Object.prototype.toString.call(arg) == '[object Uint8Array]') {
    // Buffers in Node.js under Browserify may extend UInt8Array instead of
    // defining a new object. We detect them here so we can write them
    // correctly
    this.writeI32(arg.length);
    this.trans.write(arg);
  } else {
    throw new Error(name + ' called without a string/Buffer argument: ' + arg);
  }
};

TBinaryProtocol.prototype.writeString = function (arg) {
  this.writeStringOrBinary('writeString', 'utf8', arg);
};

TBinaryProtocol.prototype.writeBinary = function (arg) {
  this.writeStringOrBinary('writeBinary', 'binary', arg);
};

TBinaryProtocol.prototype.readMessageBegin = function () {
  var sz = this.readI32();
  var type, name, seqid;

  if (sz < 0) {
    var version = sz & VERSION_MASK;

    if (version != VERSION_1) {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.BAD_VERSION, "Bad version in readMessageBegin: " + sz);
    }

    type = sz & TYPE_MASK;
    name = this.readString();
    seqid = this.readI32();
  } else {
    if (this.strictRead) {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.BAD_VERSION, "No protocol version header");
    }

    name = this.trans.read(sz);
    type = this.readByte();
    seqid = this.readI32();
  }

  return {
    fname: name,
    mtype: type,
    rseqid: seqid
  };
};

TBinaryProtocol.prototype.readMessageEnd = function () {};

TBinaryProtocol.prototype.readStructBegin = function () {
  return {
    fname: ''
  };
};

TBinaryProtocol.prototype.readStructEnd = function () {};

TBinaryProtocol.prototype.readFieldBegin = function () {
  var type = this.readByte();

  if (type == Type.STOP) {
    return {
      fname: null,
      ftype: type,
      fid: 0
    };
  }

  var id = this.readI16();
  return {
    fname: null,
    ftype: type,
    fid: id
  };
};

TBinaryProtocol.prototype.readFieldEnd = function () {};

TBinaryProtocol.prototype.readMapBegin = function () {
  var ktype = this.readByte();
  var vtype = this.readByte();
  var size = this.readI32();
  return {
    ktype: ktype,
    vtype: vtype,
    size: size
  };
};

TBinaryProtocol.prototype.readMapEnd = function () {};

TBinaryProtocol.prototype.readListBegin = function () {
  var etype = this.readByte();
  var size = this.readI32();
  return {
    etype: etype,
    size: size
  };
};

TBinaryProtocol.prototype.readListEnd = function () {};

TBinaryProtocol.prototype.readSetBegin = function () {
  var etype = this.readByte();
  var size = this.readI32();
  return {
    etype: etype,
    size: size
  };
};

TBinaryProtocol.prototype.readSetEnd = function () {};

TBinaryProtocol.prototype.readBool = function () {
  var b = this.readByte();

  if (b === 0) {
    return false;
  }

  return true;
};

TBinaryProtocol.prototype.readByte = function () {
  return this.trans.readByte();
};

TBinaryProtocol.prototype.readI16 = function () {
  return this.trans.readI16();
};

TBinaryProtocol.prototype.readI32 = function () {
  return this.trans.readI32();
};

TBinaryProtocol.prototype.readI64 = function () {
  var buff = this.trans.read(8);
  return new Int64(buff);
};

TBinaryProtocol.prototype.readDouble = function () {
  return this.trans.readDouble();
};

TBinaryProtocol.prototype.readBinary = function () {
  var len = this.readI32();

  if (len === 0) {
    return new Buffer(0);
  }

  if (len < 0) {
    throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.NEGATIVE_SIZE, "Negative binary size");
  }

  return this.trans.read(len);
};

TBinaryProtocol.prototype.readString = function () {
  var len = this.readI32();

  if (len === 0) {
    return "";
  }

  if (len < 0) {
    throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.NEGATIVE_SIZE, "Negative string size");
  }

  return this.trans.readString(len);
};

TBinaryProtocol.prototype.getTransport = function () {
  return this.trans;
};

TBinaryProtocol.prototype.skip = function (type) {
  switch (type) {
    case Type.BOOL:
      this.readBool();
      break;

    case Type.BYTE:
      this.readByte();
      break;

    case Type.I16:
      this.readI16();
      break;

    case Type.I32:
      this.readI32();
      break;

    case Type.I64:
      this.readI64();
      break;

    case Type.DOUBLE:
      this.readDouble();
      break;

    case Type.STRING:
      this.readString();
      break;

    case Type.STRUCT:
      this.readStructBegin();

      while (true) {
        var r = this.readFieldBegin();

        if (r.ftype === Type.STOP) {
          break;
        }

        this.skip(r.ftype);
        this.readFieldEnd();
      }

      this.readStructEnd();
      break;

    case Type.MAP:
      var mapBegin = this.readMapBegin();

      for (var i = 0; i < mapBegin.size; ++i) {
        this.skip(mapBegin.ktype);
        this.skip(mapBegin.vtype);
      }

      this.readMapEnd();
      break;

    case Type.SET:
      var setBegin = this.readSetBegin();

      for (var i2 = 0; i2 < setBegin.size; ++i2) {
        this.skip(setBegin.etype);
      }

      this.readSetEnd();
      break;

    case Type.LIST:
      var listBegin = this.readListBegin();

      for (var i3 = 0; i3 < listBegin.size; ++i3) {
        this.skip(listBegin.etype);
      }

      this.readListEnd();
      break;

    default:
      throw new Error("Invalid type: " + type);
  }
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\browser.js":
/*!**************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
exports.Thrift = __webpack_require__(/*! ./thrift */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\thrift.js");

var wsConnection = __webpack_require__(/*! ./ws_connection */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\ws_connection.js");

exports.WSConnection = wsConnection.WSConnection;
exports.createWSConnection = wsConnection.createWSConnection;
exports.createWSClient = wsConnection.createWSClient;

var xhrConnection = __webpack_require__(/*! ./xhr_connection */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\xhr_connection.js");

exports.XHRConnection = xhrConnection.XHRConnection;
exports.createXHRConnection = xhrConnection.createXHRConnection;
exports.createXHRClient = xhrConnection.createXHRClient;

var ohosConnection = __webpack_require__(/*! ./ohos_connection */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\ohos_connection.js");

exports.OhosConnection = ohosConnection.OhosConnection;
exports.createOhosConnection = ohosConnection.createOhosConnection;
exports.createOhosClient = ohosConnection.createOhosClient;
exports.Int64 = __webpack_require__(/*! node-int64 */ "D:\\thrift\\node_modules\\node-int64\\Int64.js");
exports.Q = __webpack_require__(/*! q */ "D:\\thrift\\node_modules\\q\\q.js");

var mpxProtocol = __webpack_require__(/*! ./multiplexed_protocol */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\multiplexed_protocol.js");

exports.Multiplexer = mpxProtocol.Multiplexer;
/*
 * Export transport and protocol so they can be used outside of a
 * cassandra/server context
 */

exports.TBufferedTransport = __webpack_require__(/*! ./buffered_transport */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\buffered_transport.js");
exports.TFramedTransport = __webpack_require__(/*! ./framed_transport */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\framed_transport.js");
exports.TWebSocketTransport = __webpack_require__(/*! ./ws_transport */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\ws_transport.js");
exports.Protocol = __webpack_require__(/*! ./json_protocol */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\json_protocol.js");
exports.TJSONProtocol = __webpack_require__(/*! ./json_protocol */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\json_protocol.js");
exports.TBinaryProtocol = __webpack_require__(/*! ./binary_protocol */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\binary_protocol.js");
exports.TCompactProtocol = __webpack_require__(/*! ./compact_protocol */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\compact_protocol.js");

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\buffered_transport.js":
/*!*************************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/buffered_transport.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var binary = __webpack_require__(/*! ./binary */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\binary.js");

var InputBufferUnderrunError = __webpack_require__(/*! ./input_buffer_underrun_error */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\input_buffer_underrun_error.js");

var THeaderTransport = __webpack_require__(/*! ./header_transport */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\header_transport.js");

module.exports = TBufferedTransport;

function TBufferedTransport(buffer, callback) {
  this.defaultReadBufferSize = 1024;
  this.writeBufferSize = 512; // Soft Limit

  this.inBuf = new Buffer(this.defaultReadBufferSize);
  this.readCursor = 0;
  this.writeCursor = 0; // for input buffer

  this.outBuffers = [];
  this.outCount = 0;
  this.onFlush = callback;
}

;
TBufferedTransport.prototype = new THeaderTransport();

TBufferedTransport.prototype.reset = function () {
  this.inBuf = new Buffer(this.defaultReadBufferSize);
  this.readCursor = 0;
  this.writeCursor = 0;
  this.outBuffers = [];
  this.outCount = 0;
};

TBufferedTransport.receiver = function (callback, seqid) {
  var reader = new TBufferedTransport();
  return function (data) {
    if (reader.writeCursor + data.length > reader.inBuf.length) {
      var buf = new Buffer(reader.writeCursor + data.length);
      reader.inBuf.copy(buf, 0, 0, reader.writeCursor);
      reader.inBuf = buf;
    }

    data.copy(reader.inBuf, reader.writeCursor, 0);
    reader.writeCursor += data.length;
    callback(reader, seqid);
  };
};

TBufferedTransport.prototype.commitPosition = function () {
  var unreadSize = this.writeCursor - this.readCursor;
  var bufSize = unreadSize * 2 > this.defaultReadBufferSize ? unreadSize * 2 : this.defaultReadBufferSize;
  var buf = new Buffer(bufSize);

  if (unreadSize > 0) {
    this.inBuf.copy(buf, 0, this.readCursor, this.writeCursor);
  }

  this.readCursor = 0;
  this.writeCursor = unreadSize;
  this.inBuf = buf;
};

TBufferedTransport.prototype.rollbackPosition = function () {
  this.readCursor = 0;
}; // TODO: Implement open/close support


TBufferedTransport.prototype.isOpen = function () {
  return true;
};

TBufferedTransport.prototype.open = function () {};

TBufferedTransport.prototype.close = function () {}; // Set the seqid of the message in the client
// So that callbacks can be found


TBufferedTransport.prototype.setCurrSeqId = function (seqid) {
  this._seqid = seqid;
};

TBufferedTransport.prototype.ensureAvailable = function (len) {
  if (this.readCursor + len > this.writeCursor) {
    throw new InputBufferUnderrunError();
  }
};

TBufferedTransport.prototype.read = function (len) {
  this.ensureAvailable(len);
  var buf = new Buffer(len);
  this.inBuf.copy(buf, 0, this.readCursor, this.readCursor + len);
  this.readCursor += len;
  return buf;
};

TBufferedTransport.prototype.readByte = function () {
  this.ensureAvailable(1);
  return binary.readByte(this.inBuf[this.readCursor++]);
};

TBufferedTransport.prototype.readI16 = function () {
  this.ensureAvailable(2);
  var i16 = binary.readI16(this.inBuf, this.readCursor);
  this.readCursor += 2;
  return i16;
};

TBufferedTransport.prototype.readI32 = function () {
  this.ensureAvailable(4);
  var i32 = binary.readI32(this.inBuf, this.readCursor);
  this.readCursor += 4;
  return i32;
};

TBufferedTransport.prototype.readDouble = function () {
  this.ensureAvailable(8);
  var d = binary.readDouble(this.inBuf, this.readCursor);
  this.readCursor += 8;
  return d;
};

TBufferedTransport.prototype.readString = function (len) {
  this.ensureAvailable(len);
  var str = this.inBuf.toString('utf8', this.readCursor, this.readCursor + len);
  this.readCursor += len;
  return str;
};

TBufferedTransport.prototype.borrow = function () {
  var obj = {
    buf: this.inBuf,
    readIndex: this.readCursor,
    writeIndex: this.writeCursor
  };
  return obj;
};

TBufferedTransport.prototype.consume = function (bytesConsumed) {
  this.readCursor += bytesConsumed;
};

TBufferedTransport.prototype.write = function (buf) {
  if (typeof buf === "string") {
    buf = new Buffer(buf, 'utf8');
  }

  this.outBuffers.push(buf);
  this.outCount += buf.length;
};

TBufferedTransport.prototype.flush = function () {
  // If the seqid of the callback is available pass it to the onFlush
  // Then remove the current seqid
  var seqid = this._seqid;
  this._seqid = null;

  if (this.outCount < 1) {
    return;
  }

  var msg = new Buffer(this.outCount),
      pos = 0;
  this.outBuffers.forEach(function (buf) {
    buf.copy(msg, pos, 0);
    pos += buf.length;
  });

  if (this.onFlush) {
    // Passing seqid through this call to get it to the connection
    this.onFlush(msg, seqid);
  }

  this.outBuffers = [];
  this.outCount = 0;
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\compact_protocol.js":
/*!***********************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/compact_protocol.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var log = __webpack_require__(/*! ./log */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\log.js");

var Int64 = __webpack_require__(/*! node-int64 */ "D:\\thrift\\node_modules\\node-int64\\Int64.js");

var Thrift = __webpack_require__(/*! ./thrift */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\thrift.js");

var Type = Thrift.Type;
module.exports = TCompactProtocol;
var POW_8 = Math.pow(2, 8);
var POW_24 = Math.pow(2, 24);
var POW_32 = Math.pow(2, 32);
var POW_40 = Math.pow(2, 40);
var POW_48 = Math.pow(2, 48);
var POW_52 = Math.pow(2, 52);
var POW_1022 = Math.pow(2, 1022);
/**
 * Constructor Function for the Compact Protocol.
 * @constructor
 * @param {object} [trans] - The underlying transport to read/write.
 * @classdesc The Apache Thrift Protocol layer performs serialization
 *     of base types, the compact protocol serializes data in binary
 *     form with minimal space used for scalar values.
 */

function TCompactProtocol(trans) {
  this.trans = trans;
  this.lastField_ = [];
  this.lastFieldId_ = 0;
  this.string_limit_ = 0;
  this.string_buf_ = null;
  this.string_buf_size_ = 0;
  this.container_limit_ = 0;
  this.booleanField_ = {
    name: null,
    hasBoolValue: false
  };
  this.boolValue_ = {
    hasBoolValue: false,
    boolValue: false
  };
}

; //
// Compact Protocol Constants
//

/**
  * Compact Protocol ID number.
  * @readonly
  * @const {number} PROTOCOL_ID
  */

TCompactProtocol.PROTOCOL_ID = -126; //1000 0010

/**
  * Compact Protocol version number.
  * @readonly
  * @const {number} VERSION_N
  */

TCompactProtocol.VERSION_N = 1;
/**
  * Compact Protocol version mask for combining protocol version and message type in one byte.
  * @readonly
  * @const {number} VERSION_MASK
  */

TCompactProtocol.VERSION_MASK = 0x1f; //0001 1111

/**
  * Compact Protocol message type mask for combining protocol version and message type in one byte.
  * @readonly
  * @const {number} TYPE_MASK
  */

TCompactProtocol.TYPE_MASK = -32; //1110 0000

/**
  * Compact Protocol message type bits for ensuring message type bit size.
  * @readonly
  * @const {number} TYPE_BITS
  */

TCompactProtocol.TYPE_BITS = 7; //0000 0111

/**
  * Compact Protocol message type shift amount for combining protocol version and message type in one byte.
  * @readonly
  * @const {number} TYPE_SHIFT_AMOUNT
  */

TCompactProtocol.TYPE_SHIFT_AMOUNT = 5;
/**
 * Compact Protocol type IDs used to keep type data within one nibble.
 * @readonly
 * @property {number}  CT_STOP          - End of a set of fields.
 * @property {number}  CT_BOOLEAN_TRUE  - Flag for Boolean field with true value (packed field and value).
 * @property {number}  CT_BOOLEAN_FALSE - Flag for Boolean field with false value (packed field and value).
 * @property {number}  CT_BYTE          - Signed 8 bit integer.
 * @property {number}  CT_I16           - Signed 16 bit integer.
 * @property {number}  CT_I32           - Signed 32 bit integer.
 * @property {number}  CT_I64           - Signed 64 bit integer (2^53 max in JavaScript).
 * @property {number}  CT_DOUBLE        - 64 bit IEEE 854 floating point.
 * @property {number}  CT_BINARY        - Array of bytes (used for strings also).
 * @property {number}  CT_LIST          - A collection type (unordered).
 * @property {number}  CT_SET           - A collection type (unordered and without repeated values).
 * @property {number}  CT_MAP           - A collection type (map/associative-array/dictionary).
 * @property {number}  CT_STRUCT        - A multifield type.
 */

TCompactProtocol.Types = {
  CT_STOP: 0x00,
  CT_BOOLEAN_TRUE: 0x01,
  CT_BOOLEAN_FALSE: 0x02,
  CT_BYTE: 0x03,
  CT_I16: 0x04,
  CT_I32: 0x05,
  CT_I64: 0x06,
  CT_DOUBLE: 0x07,
  CT_BINARY: 0x08,
  CT_LIST: 0x09,
  CT_SET: 0x0A,
  CT_MAP: 0x0B,
  CT_STRUCT: 0x0C
};
/**
 * Array mapping Compact type IDs to standard Thrift type IDs.
 * @readonly
 */

TCompactProtocol.TTypeToCType = [TCompactProtocol.Types.CT_STOP, // T_STOP
0, // unused
TCompactProtocol.Types.CT_BOOLEAN_TRUE, // T_BOOL
TCompactProtocol.Types.CT_BYTE, // T_BYTE
TCompactProtocol.Types.CT_DOUBLE, // T_DOUBLE
0, // unused
TCompactProtocol.Types.CT_I16, // T_I16
0, // unused
TCompactProtocol.Types.CT_I32, // T_I32
0, // unused
TCompactProtocol.Types.CT_I64, // T_I64
TCompactProtocol.Types.CT_BINARY, // T_STRING
TCompactProtocol.Types.CT_STRUCT, // T_STRUCT
TCompactProtocol.Types.CT_MAP, // T_MAP
TCompactProtocol.Types.CT_SET, // T_SET
TCompactProtocol.Types.CT_LIST // T_LIST
]; //
// Compact Protocol Utilities
//

/**
 * Returns the underlying transport layer.
 * @return {object} The underlying transport layer.
 */

TCompactProtocol.prototype.getTransport = function () {
  return this.trans;
};
/**
 * Lookup a Compact Protocol Type value for a given Thrift Type value.
 * N.B. Used only internally.
 * @param {number} ttype - Thrift type value
 * @returns {number} Compact protocol type value
 */


TCompactProtocol.prototype.getCompactType = function (ttype) {
  return TCompactProtocol.TTypeToCType[ttype];
};
/**
 * Lookup a Thrift Type value for a given Compact Protocol Type value.
 * N.B. Used only internally.
 * @param {number} type - Compact Protocol type value
 * @returns {number} Thrift Type value
 */


TCompactProtocol.prototype.getTType = function (type) {
  switch (type) {
    case Type.STOP:
      return Type.STOP;

    case TCompactProtocol.Types.CT_BOOLEAN_FALSE:
    case TCompactProtocol.Types.CT_BOOLEAN_TRUE:
      return Type.BOOL;

    case TCompactProtocol.Types.CT_BYTE:
      return Type.BYTE;

    case TCompactProtocol.Types.CT_I16:
      return Type.I16;

    case TCompactProtocol.Types.CT_I32:
      return Type.I32;

    case TCompactProtocol.Types.CT_I64:
      return Type.I64;

    case TCompactProtocol.Types.CT_DOUBLE:
      return Type.DOUBLE;

    case TCompactProtocol.Types.CT_BINARY:
      return Type.STRING;

    case TCompactProtocol.Types.CT_LIST:
      return Type.LIST;

    case TCompactProtocol.Types.CT_SET:
      return Type.SET;

    case TCompactProtocol.Types.CT_MAP:
      return Type.MAP;

    case TCompactProtocol.Types.CT_STRUCT:
      return Type.STRUCT;

    default:
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.INVALID_DATA, "Unknown type: " + type);
  }

  return Type.STOP;
}; //
// Compact Protocol write operations
//

/**
 * Send any buffered bytes to the end point.
 */


TCompactProtocol.prototype.flush = function () {
  return this.trans.flush();
};
/**
 * Writes an RPC message header
 * @param {string} name - The method name for the message.
 * @param {number} type - The type of message (CALL, REPLY, EXCEPTION, ONEWAY).
 * @param {number} seqid - The call sequence number (if any).
 */


TCompactProtocol.prototype.writeMessageBegin = function (name, type, seqid) {
  this.writeByte(TCompactProtocol.PROTOCOL_ID);
  this.writeByte(TCompactProtocol.VERSION_N & TCompactProtocol.VERSION_MASK | type << TCompactProtocol.TYPE_SHIFT_AMOUNT & TCompactProtocol.TYPE_MASK);
  this.writeVarint32(seqid);
  this.writeString(name); // Record client seqid to find callback again

  if (this._seqid) {
    log.warning('SeqId already set', {
      'name': name
    });
  } else {
    this._seqid = seqid;
    this.trans.setCurrSeqId(seqid);
  }
};

TCompactProtocol.prototype.writeMessageEnd = function () {};

TCompactProtocol.prototype.writeStructBegin = function (name) {
  this.lastField_.push(this.lastFieldId_);
  this.lastFieldId_ = 0;
};

TCompactProtocol.prototype.writeStructEnd = function () {
  this.lastFieldId_ = this.lastField_.pop();
};
/**
 * Writes a struct field header
 * @param {string} name - The field name (not written with the compact protocol).
 * @param {number} type - The field data type (a normal Thrift field Type).
 * @param {number} id - The IDL field Id.
 */


TCompactProtocol.prototype.writeFieldBegin = function (name, type, id) {
  if (type != Type.BOOL) {
    return this.writeFieldBeginInternal(name, type, id, -1);
  }

  this.booleanField_.name = name;
  this.booleanField_.fieldType = type;
  this.booleanField_.fieldId = id;
};

TCompactProtocol.prototype.writeFieldEnd = function () {};

TCompactProtocol.prototype.writeFieldStop = function () {
  this.writeByte(TCompactProtocol.Types.CT_STOP);
};
/**
 * Writes a map collection header
 * @param {number} keyType - The Thrift type of the map keys.
 * @param {number} valType - The Thrift type of the map values.
 * @param {number} size - The number of k/v pairs in the map.
 */


TCompactProtocol.prototype.writeMapBegin = function (keyType, valType, size) {
  if (size === 0) {
    this.writeByte(0);
  } else {
    this.writeVarint32(size);
    this.writeByte(this.getCompactType(keyType) << 4 | this.getCompactType(valType));
  }
};

TCompactProtocol.prototype.writeMapEnd = function () {};
/**
 * Writes a list collection header
 * @param {number} elemType - The Thrift type of the list elements.
 * @param {number} size - The number of elements in the list.
 */


TCompactProtocol.prototype.writeListBegin = function (elemType, size) {
  this.writeCollectionBegin(elemType, size);
};

TCompactProtocol.prototype.writeListEnd = function () {};
/**
 * Writes a set collection header
 * @param {number} elemType - The Thrift type of the set elements.
 * @param {number} size - The number of elements in the set.
 */


TCompactProtocol.prototype.writeSetBegin = function (elemType, size) {
  this.writeCollectionBegin(elemType, size);
};

TCompactProtocol.prototype.writeSetEnd = function () {};

TCompactProtocol.prototype.writeBool = function (value) {
  if (this.booleanField_.name !== null) {
    // we haven't written the field header yet
    this.writeFieldBeginInternal(this.booleanField_.name, this.booleanField_.fieldType, this.booleanField_.fieldId, value ? TCompactProtocol.Types.CT_BOOLEAN_TRUE : TCompactProtocol.Types.CT_BOOLEAN_FALSE);
    this.booleanField_.name = null;
  } else {
    // we're not part of a field, so just write the value
    this.writeByte(value ? TCompactProtocol.Types.CT_BOOLEAN_TRUE : TCompactProtocol.Types.CT_BOOLEAN_FALSE);
  }
};

TCompactProtocol.prototype.writeByte = function (b) {
  this.trans.write(new Buffer([b]));
};

TCompactProtocol.prototype.writeI16 = function (i16) {
  this.writeVarint32(this.i32ToZigzag(i16));
};

TCompactProtocol.prototype.writeI32 = function (i32) {
  this.writeVarint32(this.i32ToZigzag(i32));
};

TCompactProtocol.prototype.writeI64 = function (i64) {
  this.writeVarint64(this.i64ToZigzag(i64));
}; // Little-endian, unlike TBinaryProtocol


TCompactProtocol.prototype.writeDouble = function (v) {
  var buff = new Buffer(8);
  var m, e, c;
  buff[7] = v < 0 ? 0x80 : 0x00;
  v = Math.abs(v);

  if (v !== v) {
    // NaN, use QNaN IEEE format
    m = 2251799813685248;
    e = 2047;
  } else if (v === Infinity) {
    m = 0;
    e = 2047;
  } else {
    e = Math.floor(Math.log(v) / Math.LN2);
    c = Math.pow(2, -e);

    if (v * c < 1) {
      e--;
      c *= 2;
    }

    if (e + 1023 >= 2047) {
      // Overflow
      m = 0;
      e = 2047;
    } else if (e + 1023 >= 1) {
      // Normalized - term order matters, as Math.pow(2, 52-e) and v*Math.pow(2, 52) can overflow
      m = (v * c - 1) * POW_52;
      e += 1023;
    } else {
      // Denormalized - also catches the '0' case, somewhat by chance
      m = v * POW_1022 * POW_52;
      e = 0;
    }
  }

  buff[6] = e << 4 & 0xf0;
  buff[7] |= e >> 4 & 0x7f;
  buff[0] = m & 0xff;
  m = Math.floor(m / POW_8);
  buff[1] = m & 0xff;
  m = Math.floor(m / POW_8);
  buff[2] = m & 0xff;
  m = Math.floor(m / POW_8);
  buff[3] = m & 0xff;
  m >>= 8;
  buff[4] = m & 0xff;
  m >>= 8;
  buff[5] = m & 0xff;
  m >>= 8;
  buff[6] |= m & 0x0f;
  this.trans.write(buff);
};

TCompactProtocol.prototype.writeStringOrBinary = function (name, encoding, arg) {
  if (typeof arg === 'string') {
    this.writeVarint32(Buffer.byteLength(arg, encoding));
    this.trans.write(new Buffer(arg, encoding));
  } else if (arg instanceof Buffer || Object.prototype.toString.call(arg) == '[object Uint8Array]') {
    // Buffers in Node.js under Browserify may extend UInt8Array instead of
    // defining a new object. We detect them here so we can write them
    // correctly
    this.writeVarint32(arg.length);
    this.trans.write(arg);
  } else {
    throw new Error(name + ' called without a string/Buffer argument: ' + arg);
  }
};

TCompactProtocol.prototype.writeString = function (arg) {
  this.writeStringOrBinary('writeString', 'utf8', arg);
};

TCompactProtocol.prototype.writeBinary = function (arg) {
  this.writeStringOrBinary('writeBinary', 'binary', arg);
}; //
// Compact Protocol internal write methods
//


TCompactProtocol.prototype.writeFieldBeginInternal = function (name, fieldType, fieldId, typeOverride) {
  //If there's a type override, use that.
  var typeToWrite = typeOverride == -1 ? this.getCompactType(fieldType) : typeOverride; //Check if we can delta encode the field id

  if (fieldId > this.lastFieldId_ && fieldId - this.lastFieldId_ <= 15) {
    //Include the type delta with the field ID
    this.writeByte(fieldId - this.lastFieldId_ << 4 | typeToWrite);
  } else {
    //Write separate type and ID values
    this.writeByte(typeToWrite);
    this.writeI16(fieldId);
  }

  this.lastFieldId_ = fieldId;
};

TCompactProtocol.prototype.writeCollectionBegin = function (elemType, size) {
  if (size <= 14) {
    //Combine size and type in one byte if possible
    this.writeByte(size << 4 | this.getCompactType(elemType));
  } else {
    this.writeByte(0xf0 | this.getCompactType(elemType));
    this.writeVarint32(size);
  }
};
/**
 * Write an i32 as a varint. Results in 1-5 bytes on the wire.
 */


TCompactProtocol.prototype.writeVarint32 = function (n) {
  var buf = new Buffer(5);
  var wsize = 0;

  while (true) {
    if ((n & ~0x7F) === 0) {
      buf[wsize++] = n;
      break;
    } else {
      buf[wsize++] = n & 0x7F | 0x80;
      n = n >>> 7;
    }
  }

  var wbuf = new Buffer(wsize);
  buf.copy(wbuf, 0, 0, wsize);
  this.trans.write(wbuf);
};
/**
 * Write an i64 as a varint. Results in 1-10 bytes on the wire.
 * N.B. node-int64 is always big endian
 */


TCompactProtocol.prototype.writeVarint64 = function (n) {
  if (typeof n === "number") {
    n = new Int64(n);
  }

  if (!(n instanceof Int64)) {
    throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.INVALID_DATA, "Expected Int64 or Number, found: " + n);
  }

  var buf = new Buffer(10);
  var wsize = 0;
  var hi = n.buffer.readUInt32BE(0, true);
  var lo = n.buffer.readUInt32BE(4, true);
  var mask = 0;

  while (true) {
    if ((lo & ~0x7F) === 0 && hi === 0) {
      buf[wsize++] = lo;
      break;
    } else {
      buf[wsize++] = lo & 0x7F | 0x80;
      mask = hi << 25;
      lo = lo >>> 7;
      hi = hi >>> 7;
      lo = lo | mask;
    }
  }

  var wbuf = new Buffer(wsize);
  buf.copy(wbuf, 0, 0, wsize);
  this.trans.write(wbuf);
};
/**
 * Convert l into a zigzag long. This allows negative numbers to be
 * represented compactly as a varint.
 */


TCompactProtocol.prototype.i64ToZigzag = function (l) {
  if (typeof l === 'string') {
    l = new Int64(parseInt(l, 10));
  } else if (typeof l === 'number') {
    l = new Int64(l);
  }

  if (!(l instanceof Int64)) {
    throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.INVALID_DATA, "Expected Int64 or Number, found: " + l);
  }

  var hi = l.buffer.readUInt32BE(0, true);
  var lo = l.buffer.readUInt32BE(4, true);
  var sign = hi >>> 31;
  hi = (hi << 1 | lo >>> 31) ^ (!!sign ? 0xFFFFFFFF : 0);
  lo = lo << 1 ^ (!!sign ? 0xFFFFFFFF : 0);
  return new Int64(hi, lo);
};
/**
 * Convert n into a zigzag int. This allows negative numbers to be
 * represented compactly as a varint.
 */


TCompactProtocol.prototype.i32ToZigzag = function (n) {
  return n << 1 ^ (n & 0x80000000 ? 0xFFFFFFFF : 0);
}; //
// Compact Protocol read operations
//


TCompactProtocol.prototype.readMessageBegin = function () {
  //Read protocol ID
  var protocolId = this.trans.readByte();

  if (protocolId != TCompactProtocol.PROTOCOL_ID) {
    throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.BAD_VERSION, "Bad protocol identifier " + protocolId);
  } //Read Version and Type


  var versionAndType = this.trans.readByte();
  var version = versionAndType & TCompactProtocol.VERSION_MASK;

  if (version != TCompactProtocol.VERSION_N) {
    throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.BAD_VERSION, "Bad protocol version " + version);
  }

  var type = versionAndType >> TCompactProtocol.TYPE_SHIFT_AMOUNT & TCompactProtocol.TYPE_BITS; //Read SeqId

  var seqid = this.readVarint32(); //Read name

  var name = this.readString();
  return {
    fname: name,
    mtype: type,
    rseqid: seqid
  };
};

TCompactProtocol.prototype.readMessageEnd = function () {};

TCompactProtocol.prototype.readStructBegin = function () {
  this.lastField_.push(this.lastFieldId_);
  this.lastFieldId_ = 0;
  return {
    fname: ''
  };
};

TCompactProtocol.prototype.readStructEnd = function () {
  this.lastFieldId_ = this.lastField_.pop();
};

TCompactProtocol.prototype.readFieldBegin = function () {
  var fieldId = 0;
  var b = this.trans.readByte(b);
  var type = b & 0x0f;

  if (type == TCompactProtocol.Types.CT_STOP) {
    return {
      fname: null,
      ftype: Thrift.Type.STOP,
      fid: 0
    };
  } //Mask off the 4 MSB of the type header to check for field id delta.


  var modifier = (b & 0x000000f0) >>> 4;

  if (modifier === 0) {
    //If not a delta read the field id.
    fieldId = this.readI16();
  } else {
    //Recover the field id from the delta
    fieldId = this.lastFieldId_ + modifier;
  }

  var fieldType = this.getTType(type); //Boolean are encoded with the type

  if (type == TCompactProtocol.Types.CT_BOOLEAN_TRUE || type == TCompactProtocol.Types.CT_BOOLEAN_FALSE) {
    this.boolValue_.hasBoolValue = true;
    this.boolValue_.boolValue = type == TCompactProtocol.Types.CT_BOOLEAN_TRUE ? true : false;
  } //Save the new field for the next delta computation.


  this.lastFieldId_ = fieldId;
  return {
    fname: null,
    ftype: fieldType,
    fid: fieldId
  };
};

TCompactProtocol.prototype.readFieldEnd = function () {};

TCompactProtocol.prototype.readMapBegin = function () {
  var msize = this.readVarint32();

  if (msize < 0) {
    throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.NEGATIVE_SIZE, "Negative map size");
  }

  var kvType = 0;

  if (msize !== 0) {
    kvType = this.trans.readByte();
  }

  var keyType = this.getTType((kvType & 0xf0) >>> 4);
  var valType = this.getTType(kvType & 0xf);
  return {
    ktype: keyType,
    vtype: valType,
    size: msize
  };
};

TCompactProtocol.prototype.readMapEnd = function () {};

TCompactProtocol.prototype.readListBegin = function () {
  var size_and_type = this.trans.readByte();
  var lsize = size_and_type >>> 4 & 0x0000000f;

  if (lsize == 15) {
    lsize = this.readVarint32();
  }

  if (lsize < 0) {
    throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.NEGATIVE_SIZE, "Negative list size");
  }

  var elemType = this.getTType(size_and_type & 0x0000000f);
  return {
    etype: elemType,
    size: lsize
  };
};

TCompactProtocol.prototype.readListEnd = function () {};

TCompactProtocol.prototype.readSetBegin = function () {
  return this.readListBegin();
};

TCompactProtocol.prototype.readSetEnd = function () {};

TCompactProtocol.prototype.readBool = function () {
  var value = false;
  var rsize = 0;

  if (this.boolValue_.hasBoolValue === true) {
    value = this.boolValue_.boolValue;
    this.boolValue_.hasBoolValue = false;
  } else {
    var res = this.trans.readByte();
    rsize = res.rsize;
    value = res.value == TCompactProtocol.Types.CT_BOOLEAN_TRUE;
  }

  return value;
};

TCompactProtocol.prototype.readByte = function () {
  return this.trans.readByte();
};

TCompactProtocol.prototype.readI16 = function () {
  return this.readI32();
};

TCompactProtocol.prototype.readI32 = function () {
  return this.zigzagToI32(this.readVarint32());
};

TCompactProtocol.prototype.readI64 = function () {
  return this.zigzagToI64(this.readVarint64());
}; // Little-endian, unlike TBinaryProtocol


TCompactProtocol.prototype.readDouble = function () {
  var buff = this.trans.read(8);
  var off = 0;
  var signed = buff[off + 7] & 0x80;
  var e = (buff[off + 6] & 0xF0) >> 4;
  e += (buff[off + 7] & 0x7F) << 4;
  var m = buff[off];
  m += buff[off + 1] << 8;
  m += buff[off + 2] << 16;
  m += buff[off + 3] * POW_24;
  m += buff[off + 4] * POW_32;
  m += buff[off + 5] * POW_40;
  m += (buff[off + 6] & 0x0F) * POW_48;

  switch (e) {
    case 0:
      e = -1022;
      break;

    case 2047:
      return m ? NaN : signed ? -Infinity : Infinity;

    default:
      m += POW_52;
      e -= 1023;
  }

  if (signed) {
    m *= -1;
  }

  return m * Math.pow(2, e - 52);
};

TCompactProtocol.prototype.readBinary = function () {
  var size = this.readVarint32();

  if (size === 0) {
    return new Buffer(0);
  }

  if (size < 0) {
    throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.NEGATIVE_SIZE, "Negative binary size");
  }

  return this.trans.read(size);
};

TCompactProtocol.prototype.readString = function () {
  var size = this.readVarint32(); // Catch empty string case

  if (size === 0) {
    return "";
  } // Catch error cases


  if (size < 0) {
    throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.NEGATIVE_SIZE, "Negative string size");
  }

  return this.trans.readString(size);
}; //
// Compact Protocol internal read operations
//

/**
 * Read an i32 from the wire as a varint. The MSB of each byte is set
 * if there is another byte to follow. This can read up to 5 bytes.
 */


TCompactProtocol.prototype.readVarint32 = function () {
  return this.readVarint64().toNumber();
};
/**
 * Read an i64 from the wire as a proper varint. The MSB of each byte is set
 * if there is another byte to follow. This can read up to 10 bytes.
 */


TCompactProtocol.prototype.readVarint64 = function () {
  var rsize = 0;
  var lo = 0;
  var hi = 0;
  var shift = 0;

  while (true) {
    var b = this.trans.readByte();
    rsize++;

    if (shift <= 25) {
      lo = lo | (b & 0x7f) << shift;
    } else if (25 < shift && shift < 32) {
      lo = lo | (b & 0x7f) << shift;
      hi = hi | (b & 0x7f) >>> 32 - shift;
    } else {
      hi = hi | (b & 0x7f) << shift - 32;
    }

    shift += 7;

    if (!(b & 0x80)) {
      break;
    }

    if (rsize >= 10) {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.INVALID_DATA, "Variable-length int over 10 bytes.");
    }
  }

  return new Int64(hi, lo);
};
/**
 * Convert from zigzag int to int.
 */


TCompactProtocol.prototype.zigzagToI32 = function (n) {
  return n >>> 1 ^ -1 * (n & 1);
};
/**
 * Convert from zigzag long to long.
 */


TCompactProtocol.prototype.zigzagToI64 = function (n) {
  var hi = n.buffer.readUInt32BE(0, true);
  var lo = n.buffer.readUInt32BE(4, true);
  var neg = new Int64(hi & 0, lo & 1);

  neg._2scomp();

  var hi_neg = neg.buffer.readUInt32BE(0, true);
  var lo_neg = neg.buffer.readUInt32BE(4, true);
  var hi_lo = hi << 31;
  hi = hi >>> 1 ^ hi_neg;
  lo = (lo >>> 1 | hi_lo) ^ lo_neg;
  return new Int64(hi, lo);
};

TCompactProtocol.prototype.skip = function (type) {
  switch (type) {
    case Type.BOOL:
      this.readBool();
      break;

    case Type.BYTE:
      this.readByte();
      break;

    case Type.I16:
      this.readI16();
      break;

    case Type.I32:
      this.readI32();
      break;

    case Type.I64:
      this.readI64();
      break;

    case Type.DOUBLE:
      this.readDouble();
      break;

    case Type.STRING:
      this.readString();
      break;

    case Type.STRUCT:
      this.readStructBegin();

      while (true) {
        var r = this.readFieldBegin();

        if (r.ftype === Type.STOP) {
          break;
        }

        this.skip(r.ftype);
        this.readFieldEnd();
      }

      this.readStructEnd();
      break;

    case Type.MAP:
      var mapBegin = this.readMapBegin();

      for (var i = 0; i < mapBegin.size; ++i) {
        this.skip(mapBegin.ktype);
        this.skip(mapBegin.vtype);
      }

      this.readMapEnd();
      break;

    case Type.SET:
      var setBegin = this.readSetBegin();

      for (var i2 = 0; i2 < setBegin.size; ++i2) {
        this.skip(setBegin.etype);
      }

      this.readSetEnd();
      break;

    case Type.LIST:
      var listBegin = this.readListBegin();

      for (var i3 = 0; i3 < listBegin.size; ++i3) {
        this.skip(listBegin.etype);
      }

      this.readListEnd();
      break;

    default:
      throw new Error("Invalid type: " + type);
  }
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\create_client.js":
/*!********************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/create_client.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
module.exports = createClient;
/**
 * Creates a new client object for the specified Thrift service.
 * @param {object} ServiceClient - The module containing the generated service client
 * @param {Connection} Connection - The connection to use.
 * @returns {object} The client object.
 */

function createClient(ServiceClient, connection) {
  // TODO validate required options and throw otherwise
  if (ServiceClient.Client) {
    ServiceClient = ServiceClient.Client;
  } // TODO detangle these initialization calls
  // creating "client" requires
  //   - new service client instance
  //
  // New service client instance requires
  //   - new transport instance
  //   - protocol class reference
  //
  // New transport instance requires
  //   - Buffer to use (or none)
  //   - Callback to call on flush
  // Wrap the write method


  var writeCb = function writeCb(buf, seqid) {
    connection.write(buf, seqid);
  };

  var transport = new connection.transport(undefined, writeCb);
  var client = new ServiceClient(transport, connection.protocol);
  transport.client = client;
  connection.client = client;
  return client;
}

;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\framed_transport.js":
/*!***********************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/framed_transport.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var binary = __webpack_require__(/*! ./binary */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\binary.js");

var InputBufferUnderrunError = __webpack_require__(/*! ./input_buffer_underrun_error */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\input_buffer_underrun_error.js");

var THeaderTransport = __webpack_require__(/*! ./header_transport */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\header_transport.js");

module.exports = TFramedTransport;

function TFramedTransport(buffer, callback) {
  this.inBuf = buffer || new Buffer(0);
  this.outBuffers = [];
  this.outCount = 0;
  this.readPos = 0;
  this.onFlush = callback;
}

;
TFramedTransport.prototype = new THeaderTransport();

TFramedTransport.receiver = function (callback, seqid) {
  var residual = null;
  return function (data) {
    // Prepend any residual data from our previous read
    if (residual) {
      data = Buffer.concat([residual, data]);
      residual = null;
    } // framed transport


    while (data.length) {
      if (data.length < 4) {
        // Not enough bytes to continue, save and resume on next packet
        residual = data;
        return;
      }

      var frameSize = binary.readI32(data, 0);

      if (data.length < 4 + frameSize) {
        // Not enough bytes to continue, save and resume on next packet
        residual = data;
        return;
      }

      var frame = data.slice(4, 4 + frameSize);
      residual = data.slice(4 + frameSize);
      callback(new TFramedTransport(frame), seqid);
      data = residual;
      residual = null;
    }
  };
};

TFramedTransport.prototype.commitPosition = function () {}, TFramedTransport.prototype.rollbackPosition = function () {}, // TODO: Implement open/close support
TFramedTransport.prototype.isOpen = function () {
  return true;
};

TFramedTransport.prototype.open = function () {};

TFramedTransport.prototype.close = function () {}; // Set the seqid of the message in the client
// So that callbacks can be found


TFramedTransport.prototype.setCurrSeqId = function (seqid) {
  this._seqid = seqid;
};

TFramedTransport.prototype.ensureAvailable = function (len) {
  if (this.readPos + len > this.inBuf.length) {
    throw new InputBufferUnderrunError();
  }
};

TFramedTransport.prototype.read = function (len) {
  // this function will be used for each frames.
  this.ensureAvailable(len);
  var end = this.readPos + len;

  if (this.inBuf.length < end) {
    throw new Error('read(' + len + ') failed - not enough data');
  }

  var buf = this.inBuf.slice(this.readPos, end);
  this.readPos = end;
  return buf;
};

TFramedTransport.prototype.readByte = function () {
  this.ensureAvailable(1);
  return binary.readByte(this.inBuf[this.readPos++]);
};

TFramedTransport.prototype.readI16 = function () {
  this.ensureAvailable(2);
  var i16 = binary.readI16(this.inBuf, this.readPos);
  this.readPos += 2;
  return i16;
};

TFramedTransport.prototype.readI32 = function () {
  this.ensureAvailable(4);
  var i32 = binary.readI32(this.inBuf, this.readPos);
  this.readPos += 4;
  return i32;
};

TFramedTransport.prototype.readDouble = function () {
  this.ensureAvailable(8);
  var d = binary.readDouble(this.inBuf, this.readPos);
  this.readPos += 8;
  return d;
};

TFramedTransport.prototype.readString = function (len) {
  this.ensureAvailable(len);
  var str = this.inBuf.toString('utf8', this.readPos, this.readPos + len);
  this.readPos += len;
  return str;
};

TFramedTransport.prototype.borrow = function () {
  return {
    buf: this.inBuf,
    readIndex: this.readPos,
    writeIndex: this.inBuf.length
  };
};

TFramedTransport.prototype.consume = function (bytesConsumed) {
  this.readPos += bytesConsumed;
};

TFramedTransport.prototype.write = function (buf, encoding) {
  if (typeof buf === "string") {
    buf = new Buffer(buf, encoding || 'utf8');
  }

  this.outBuffers.push(buf);
  this.outCount += buf.length;
};

TFramedTransport.prototype.flush = function () {
  // If the seqid of the callback is available pass it to the onFlush
  // Then remove the current seqid
  var seqid = this._seqid;
  this._seqid = null;
  var out = new Buffer(this.outCount),
      pos = 0;
  this.outBuffers.forEach(function (buf) {
    buf.copy(out, pos, 0);
    pos += buf.length;
  });

  if (this.onFlush) {
    // TODO: optimize this better, allocate one buffer instead of both:
    var msg = new Buffer(out.length + 4);
    binary.writeI32(msg, out.length);
    out.copy(msg, 4, 0, out.length);

    if (this.onFlush) {
      // Passing seqid through this call to get it to the connection
      this.onFlush(msg, seqid);
    }
  }

  this.outBuffers = [];
  this.outCount = 0;
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\header_transport.js":
/*!***********************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/header_transport.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var TCompactProtocol = __webpack_require__(/*! ./compact_protocol */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\compact_protocol.js");

var TBinaryProtocol = __webpack_require__(/*! ./binary_protocol */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\binary_protocol.js");

var InputBufferUnderrunError = __webpack_require__(/*! ./input_buffer_underrun_error */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\input_buffer_underrun_error.js");

function THeaderTransportError(message) {
  Error.call(this);

  if (Error.captureStackTrace !== undefined) {
    Error.captureStackTrace(this, this.constructor);
  }

  this.name = this.constructor.name;
  this.message = message;
}

util.inherits(THeaderTransportError, Error);
module.exports = THeaderTransport; // from HeaderFormat.md

var COMPACT_PROTOCOL_OFFSET = 0;
var COMPACT_PROTOCOL_VERSION_OFFSET = 1;
var FRAME_SIZE_OFFSET = 0;
var HEADER_MAGIC_OFFSET = 32 / 8;
var FLAGS_OFFSET = 48 / 8;
var SEQID_OFFSET = 64 / 8;
var HEADER_SIZE_OFFSET = 96 / 8;
var HEADER_START_OFFSET = 112 / 8;
var HEADER_MAGIC = 0x0FFF;
var TINFO_HEADER_KEY_VALUE_TYPE = 0x01;
var MAX_FRAME_SIZE = 0x3FFFFFFF; // A helper class for reading/writing varints. Uses
// TCompactProtocol under the hood

function VarintHelper(readBuffer) {
  var TBufferedTransport = __webpack_require__(/*! ./buffered_transport */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\buffered_transport.js");

  this.outputBuffer = null;

  var _this = this;

  this.transport = new TBufferedTransport(null, function (output) {
    _this.outputBuffer = output;
  });
  this.transport.inBuf = readBuffer || Buffer.alloc(0);
  this.transport.writeCursor = this.transport.inBuf.length;
  this.protocol = new TCompactProtocol(this.transport);
}

;

VarintHelper.prototype.readVarint32 = function () {
  return this.protocol.readVarint32();
};

VarintHelper.prototype.writeVarint32 = function (i) {
  this.protocol.writeVarint32(i);
};

VarintHelper.prototype.readString = function () {
  return this.protocol.readString();
};

VarintHelper.prototype.writeString = function (str) {
  this.protocol.writeString(str);
};

VarintHelper.prototype.getOutCount = function () {
  return this.transport.outCount;
};

VarintHelper.prototype.write = function (str) {
  this.transport.write(str);
};

VarintHelper.prototype.toBuffer = function () {
  this.transport.flush();
  return this.outputBuffer;
}; // from lib/cpp/src/thrift/protocol/TProtocolTypes.h


THeaderTransport.SubprotocolId = {
  BINARY: 0,
  JSON: 1,
  COMPACT: 2
};
/**
  An abstract transport used as a prototype for other transports
  to enable reading/writing theaders. This should NOT be used as a standalone transport
  The methods in this transport are called by THeaderProtocol, which will call readHeaders/writeHeaders
  in the read/writeMessageBegin methods and parse/write headers to/from a request
  prior to reading/writing.

  The reason this is not a standalone transport type is because different transport types
  have their own individual static receiver methods that are called prior to instantiation.
  There doesn't seem to be a way for THeaderTransport to know which receiver method to use
  without reworking the server API.

  For reading headers from a request, the parsed headers can be retrieved via
  getReadHeader. Similarly, you can set headers to be written on the client via
  setWriteHeader.
 */

function THeaderTransport() {
  this.maxFrameSize = MAX_FRAME_SIZE;
  this.protocolId = THeaderTransport.SubprotocolId.BINARY;
  this.rheaders = {};
  this.wheaders = {};
  this.inBuf = Buffer.alloc(0);
  this.outCount = 0;
  this.flags = null;
  this.seqid = 0;
  this.shouldWriteHeaders = true;
}

;

var validateHeaders = function validateHeaders(key, value) {
  if (typeof key !== 'string' || typeof value !== 'string') {
    throw new THeaderTransportError('Header key and values must be strings');
  }
};

var validateProtocolId = function validateProtocolId(protocolId) {
  var protocols = Object.keys(THeaderTransport.SubprotocolId);

  for (var i = 0; i < protocols.length; i++) {
    if (protocolId === THeaderTransport.SubprotocolId[protocols[i]]) return true;
  }

  throw new Error(protocolId + ' is not a valid protocol id');
};

THeaderTransport.prototype.setSeqId = function (seqid) {
  this.seqid = seqid;
};

THeaderTransport.prototype.getSeqId = function (seqid) {
  return this.seqid;
};

THeaderTransport.prototype.setFlags = function (flags) {
  this.flags = flags;
};

THeaderTransport.prototype.getReadHeaders = function () {
  return this.rheaders;
};

THeaderTransport.prototype.setReadHeader = function (key, value) {
  validateHeaders(key, value);
  this.rheaders[key] = value;
};

THeaderTransport.prototype.clearReadHeaders = function () {
  this.rheaders = {};
};

THeaderTransport.prototype.getWriteHeaders = function () {
  return this.wheaders;
};

THeaderTransport.prototype.setWriteHeader = function (key, value) {
  validateHeaders(key, value);
  this.wheaders[key] = value;
};

THeaderTransport.prototype.clearWriteHeaders = function () {
  this.wheaders = {};
};

THeaderTransport.prototype.setMaxFrameSize = function (frameSize) {
  this.maxFrameSize = frameSize;
};

THeaderTransport.prototype.setProtocolId = function (protocolId) {
  validateProtocolId(protocolId);
  this.protocolId = protocolId;
};

THeaderTransport.prototype.getProtocolId = function () {
  return this.protocolId;
};

var isUnframedBinary = function isUnframedBinary(readBuffer) {
  var version = readBuffer.readInt32BE();
  return (version & TBinaryProtocol.VERSION_MASK) === TBinaryProtocol.VERSION_1;
};

var isUnframedCompact = function isUnframedCompact(readBuffer) {
  var protocolId = readBuffer.readInt8(COMPACT_PROTOCOL_OFFSET);
  var version = readBuffer.readInt8(COMPACT_PROTOCOL_VERSION_OFFSET);
  return protocolId === TCompactProtocol.PROTOCOL_ID && (version & TCompactProtocol.VERSION_MASK) === TCompactProtocol.VERSION_N;
};

THeaderTransport.prototype.readHeaders = function () {
  var readBuffer = this.inBuf;
  var isUnframed = false;

  if (isUnframedBinary(readBuffer)) {
    this.setProtocolId(THeaderTransport.SubprotocolId.BINARY);
    isUnframed = true;
  }

  if (isUnframedCompact(readBuffer)) {
    this.setProtocolId(THeaderTransport.SubprotocolId.COMPACT);
    isUnframed = true;
  }

  if (isUnframed) {
    this.shouldWriteHeaders = false;
    return;
  }

  var frameSize = readBuffer.readInt32BE(FRAME_SIZE_OFFSET);

  if (frameSize > this.maxFrameSize) {
    throw new THeaderTransportError('Frame exceeds maximum frame size');
  }

  var headerMagic = readBuffer.readInt16BE(HEADER_MAGIC_OFFSET);
  this.shouldWriteHeaders = headerMagic === HEADER_MAGIC;

  if (!this.shouldWriteHeaders) {
    return;
  }

  this.setFlags(readBuffer.readInt16BE(FLAGS_OFFSET));
  this.setSeqId(readBuffer.readInt32BE(SEQID_OFFSET));
  var headerSize = readBuffer.readInt16BE(HEADER_SIZE_OFFSET) * 4;
  var endOfHeaders = HEADER_START_OFFSET + headerSize;

  if (endOfHeaders > readBuffer.length) {
    throw new THeaderTransportError('Header size is greater than frame size');
  }

  var headerBuffer = Buffer.alloc(headerSize);
  readBuffer.copy(headerBuffer, 0, HEADER_START_OFFSET, endOfHeaders);
  var varintHelper = new VarintHelper(headerBuffer);
  this.setProtocolId(varintHelper.readVarint32());
  var transformCount = varintHelper.readVarint32();

  if (transformCount > 0) {
    throw new THeaderTransportError('Transforms are not yet supported');
  }

  while (true) {
    try {
      var headerType = varintHelper.readVarint32();

      if (headerType !== TINFO_HEADER_KEY_VALUE_TYPE) {
        break;
      }

      var numberOfHeaders = varintHelper.readVarint32();

      for (var i = 0; i < numberOfHeaders; i++) {
        var key = varintHelper.readString();
        var value = varintHelper.readString();
        this.setReadHeader(key, value);
      }
    } catch (e) {
      if (e instanceof InputBufferUnderrunError) {
        break;
      }

      throw e;
    }
  } // moves the read cursor past the headers


  this.read(endOfHeaders);
  return this.getReadHeaders();
};

THeaderTransport.prototype.writeHeaders = function () {
  // only write headers on the server if the client contained headers
  if (!this.shouldWriteHeaders) {
    return;
  }

  var headers = this.getWriteHeaders();
  var varintWriter = new VarintHelper();
  varintWriter.writeVarint32(this.protocolId);
  varintWriter.writeVarint32(0); // transforms not supported
  // writing info header key values

  var headerKeys = Object.keys(headers);

  if (headerKeys.length > 0) {
    varintWriter.writeVarint32(TINFO_HEADER_KEY_VALUE_TYPE);
    varintWriter.writeVarint32(headerKeys.length);

    for (var i = 0; i < headerKeys.length; i++) {
      var key = headerKeys[i];
      var value = headers[key];
      varintWriter.writeString(key);
      varintWriter.writeString(value);
    }
  }

  var headerSizeWithoutPadding = varintWriter.getOutCount();
  var paddingNeeded = (4 - headerSizeWithoutPadding % 4) % 4;
  var headerSize = Buffer.alloc(2);
  headerSize.writeInt16BE(Math.floor((headerSizeWithoutPadding + paddingNeeded) / 4));
  var paddingBuffer = Buffer.alloc(paddingNeeded);
  paddingBuffer.fill(0x00);
  varintWriter.write(paddingBuffer);
  var headerContentBuffer = varintWriter.toBuffer();
  var frameSize = Buffer.alloc(4);
  frameSize.writeInt32BE(10 + this.outCount + headerContentBuffer.length);
  var headerMagic = Buffer.alloc(2);
  headerMagic.writeInt16BE(HEADER_MAGIC); // flags are not yet supported, so write a zero

  var flags = Buffer.alloc(2);
  flags.writeInt16BE(0);
  var seqid = Buffer.alloc(4);
  seqid.writeInt32BE(this.getSeqId());
  var headerBuffer = Buffer.concat([frameSize, headerMagic, flags, seqid, headerSize, headerContentBuffer]);
  this.outBuffers.unshift(headerBuffer);
  this.outCount += headerBuffer.length;
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\input_buffer_underrun_error.js":
/*!**********************************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/input_buffer_underrun_error.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

module.exports = InputBufferUnderrunError;

function InputBufferUnderrunError(message) {
  Error.call(this);

  if (Error.captureStackTrace !== undefined) {
    Error.captureStackTrace(this, this.constructor);
  }

  this.name = this.constructor.name;
  this.message = message;
}

;
util.inherits(InputBufferUnderrunError, Error);

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\int64_util.js":
/*!*****************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/int64_util.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var Int64 = __webpack_require__(/*! node-int64 */ "D:\\thrift\\node_modules\\node-int64\\Int64.js");

var Int64Util = module.exports = {};
var POW2_24 = Math.pow(2, 24);
var POW2_31 = Math.pow(2, 31);
var POW2_32 = Math.pow(2, 32);
var POW10_11 = Math.pow(10, 11);

Int64Util.toDecimalString = function (i64) {
  var b = i64.buffer;
  var o = i64.offset;

  if (!b[o] && !(b[o + 1] & 0xe0) || !~b[o] && !~(b[o + 1] & 0xe0)) {
    // The magnitude is small enough.
    return i64.toString();
  } else {
    var negative = b[o] & 0x80;

    if (negative) {
      // 2's complement
      var incremented = false;
      var buffer = new Buffer(8);

      for (var i = 7; i >= 0; --i) {
        buffer[i] = ~b[o + i] + (incremented ? 0 : 1) & 0xff;
        incremented |= b[o + i];
      }

      b = buffer;
    }

    var high2 = b[o + 1] + (b[o] << 8); // Lesser 11 digits with exceeding values but is under 53 bits capacity.

    var low = b[o + 7] + (b[o + 6] << 8) + (b[o + 5] << 16) + b[o + 4] * POW2_24 // Bit shift renders 32th bit as sign, so use multiplication
    + (b[o + 3] + (b[o + 2] << 8)) * POW2_32 + high2 * 74976710656; // The literal is 2^48 % 10^11
    // 12th digit and greater.

    var high = Math.floor(low / POW10_11) + high2 * 2814; // The literal is 2^48 / 10^11
    // Make it exactly 11 with leading zeros.

    low = ('00000000000' + String(low % POW10_11)).slice(-11);
    return (negative ? '-' : '') + String(high) + low;
  }
};

Int64Util.fromDecimalString = function (text) {
  var negative = text.charAt(0) === '-';

  if (text.length < (negative ? 17 : 16)) {
    // The magnitude is smaller than 2^53.
    return new Int64(+text);
  } else if (text.length > (negative ? 20 : 19)) {
    throw new RangeError('Too many digits for Int64: ' + text);
  } else {
    // Most significant (up to 5) digits
    var high5 = +text.slice(negative ? 1 : 0, -15);
    var low = +text.slice(-15) + high5 * 2764472320; // The literal is 10^15 % 2^32

    var high = Math.floor(low / POW2_32) + high5 * 232830; // The literal is 10^15 / 2^&32

    low = low % POW2_32;

    if (high >= POW2_31 && !(negative && high == POW2_31 && low == 0) // Allow minimum Int64
    ) {
        throw new RangeError('The magnitude is too large for Int64.');
      }

    if (negative) {
      // 2's complement
      high = ~high;

      if (low === 0) {
        high = high + 1 & 0xffffffff;
      } else {
        low = ~low + 1;
      }

      high = 0x80000000 | high;
    }

    return new Int64(high, low);
  }
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\json_parse.js":
/*!*****************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/json_parse.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Imported from Douglas Crockford's reference implementation with minimum modification
 * to handle Int64.
 *
 * https://github.com/douglascrockford/JSON-js/blob/c98948ae1944a28e2e8ebc3717894e580aeaaa05/json_parse.js
 *
 * Original license header:
 *
 * json_parse.js
 * 2015-05-02
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*jslint for */

/*property
    at, b, call, charAt, f, fromCharCode, hasOwnProperty, message, n, name,
    prototype, push, r, t, text
*/
var Int64 = __webpack_require__(/*! node-int64 */ "D:\\thrift\\node_modules\\node-int64\\Int64.js");

var Int64Util = __webpack_require__(/*! ./int64_util */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\int64_util.js");

var json_parse = module.exports = function () {
  "use strict"; // This is a function that can parse a JSON text, producing a JavaScript
  // data structure. It is a simple, recursive descent parser. It does not use
  // eval or regular expressions, so it can be used as a model for implementing
  // a JSON parser in other languages.
  // We are defining the function inside of another function to avoid creating
  // global variables.

  var at,
      // The index of the current character
  ch,
      // The current character
  escapee = {
    '"': '"',
    '\\': '\\',
    '/': '/',
    b: '\b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t'
  },
      text,
      error = function error(m) {
    // Call error when something is wrong.
    throw new SyntaxError(m);
  },
      next = function next(c) {
    // If a c parameter is provided, verify that it matches the current character.
    if (c && c !== ch) {
      error("Expected '" + c + "' instead of '" + ch + "'");
    } // Get the next character. When there are no more characters,
    // return the empty string.


    ch = text.charAt(at);
    at += 1;
    return ch;
  },
      number = function number() {
    // Parse a number value.
    var number,
        string = '';

    if (ch === '-') {
      string = '-';
      next('-');
    }

    while (ch >= '0' && ch <= '9') {
      string += ch;
      next();
    }

    if (ch === '.') {
      string += '.';

      while (next() && ch >= '0' && ch <= '9') {
        string += ch;
      }
    }

    if (ch === 'e' || ch === 'E') {
      string += ch;
      next();

      if (ch === '-' || ch === '+') {
        string += ch;
        next();
      }

      while (ch >= '0' && ch <= '9') {
        string += ch;
        next();
      }
    }

    number = +string;

    if (!isFinite(number)) {
      error("Bad number");
    } else if (number >= Int64.MAX_INT || number <= Int64.MIN_INT) {
      // Return raw string for further process in TJSONProtocol
      return string;
    } else {
      return number;
    }
  },
      string = function string() {
    // Parse a string value.
    var hex,
        i,
        string = '',
        uffff; // When parsing for string values, we must look for " and \ characters.

    if (ch === '"') {
      while (next()) {
        if (ch === '"') {
          next();
          return string;
        }

        if (ch === '\\') {
          next();

          if (ch === 'u') {
            uffff = 0;

            for (i = 0; i < 4; i += 1) {
              hex = parseInt(next(), 16);

              if (!isFinite(hex)) {
                break;
              }

              uffff = uffff * 16 + hex;
            }

            string += String.fromCharCode(uffff);
          } else if (typeof escapee[ch] === 'string') {
            string += escapee[ch];
          } else {
            break;
          }
        } else {
          string += ch;
        }
      }
    }

    error("Bad string");
  },
      white = function white() {
    // Skip whitespace.
    while (ch && ch <= ' ') {
      next();
    }
  },
      word = function word() {
    // true, false, or null.
    switch (ch) {
      case 't':
        next('t');
        next('r');
        next('u');
        next('e');
        return true;

      case 'f':
        next('f');
        next('a');
        next('l');
        next('s');
        next('e');
        return false;

      case 'n':
        next('n');
        next('u');
        next('l');
        next('l');
        return null;
    }

    error("Unexpected '" + ch + "'");
  },
      value,
      // Place holder for the value function.
  array = function array() {
    // Parse an array value.
    var array = [];

    if (ch === '[') {
      next('[');
      white();

      if (ch === ']') {
        next(']');
        return array; // empty array
      }

      while (ch) {
        array.push(value());
        white();

        if (ch === ']') {
          next(']');
          return array;
        }

        next(',');
        white();
      }
    }

    error("Bad array");
  },
      object = function object() {
    // Parse an object value.
    var key,
        object = {};

    if (ch === '{') {
      next('{');
      white();

      if (ch === '}') {
        next('}');
        return object; // empty object
      }

      while (ch) {
        key = string();
        white();
        next(':');

        if (Object.hasOwnProperty.call(object, key)) {
          error('Duplicate key "' + key + '"');
        }

        object[key] = value();
        white();

        if (ch === '}') {
          next('}');
          return object;
        }

        next(',');
        white();
      }
    }

    error("Bad object");
  };

  value = function value() {
    // Parse a JSON value. It could be an object, an array, a string, a number,
    // or a word.
    white();

    switch (ch) {
      case '{':
        return object();

      case '[':
        return array();

      case '"':
        return string();

      case '-':
        return number();

      default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
  }; // Return the json_parse function. It will have access to all of the above
  // functions and variables.


  return function (source) {
    var result;
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();

    if (ch) {
      error("Syntax error");
    }

    return result;
  };
}();

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\json_protocol.js":
/*!********************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/json_protocol.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var Int64 = __webpack_require__(/*! node-int64 */ "D:\\thrift\\node_modules\\node-int64\\Int64.js");

var Thrift = __webpack_require__(/*! ./thrift */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\thrift.js");

var Type = Thrift.Type;

var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var Int64Util = __webpack_require__(/*! ./int64_util */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\int64_util.js");

var json_parse = __webpack_require__(/*! ./json_parse */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\json_parse.js");

var InputBufferUnderrunError = __webpack_require__(/*! ./input_buffer_underrun_error */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\input_buffer_underrun_error.js");

module.exports = TJSONProtocol;
/**
 * Initializes a Thrift JSON protocol instance.
 * @constructor
 * @param {Thrift.Transport} trans - The transport to serialize to/from.
 * @classdesc Apache Thrift Protocols perform serialization which enables cross
 * language RPC. The Protocol type is the JavaScript browser implementation
 * of the Apache Thrift TJSONProtocol.
 * @example
 *     var protocol  = new Thrift.Protocol(transport);
 */

function TJSONProtocol(trans) {
  this.tstack = [];
  this.tpos = [];
  this.trans = trans;
}

;
/**
 * Thrift IDL type Id to string mapping.
 * @readonly
 * @see {@link Thrift.Type}
 */

TJSONProtocol.Type = {};
TJSONProtocol.Type[Type.BOOL] = '"tf"';
TJSONProtocol.Type[Type.BYTE] = '"i8"';
TJSONProtocol.Type[Type.I16] = '"i16"';
TJSONProtocol.Type[Type.I32] = '"i32"';
TJSONProtocol.Type[Type.I64] = '"i64"';
TJSONProtocol.Type[Type.DOUBLE] = '"dbl"';
TJSONProtocol.Type[Type.STRUCT] = '"rec"';
TJSONProtocol.Type[Type.STRING] = '"str"';
TJSONProtocol.Type[Type.MAP] = '"map"';
TJSONProtocol.Type[Type.LIST] = '"lst"';
TJSONProtocol.Type[Type.SET] = '"set"';
/**
 * Thrift IDL type string to Id mapping.
 * @readonly
 * @see {@link Thrift.Type}
 */

TJSONProtocol.RType = {};
TJSONProtocol.RType.tf = Type.BOOL;
TJSONProtocol.RType.i8 = Type.BYTE;
TJSONProtocol.RType.i16 = Type.I16;
TJSONProtocol.RType.i32 = Type.I32;
TJSONProtocol.RType.i64 = Type.I64;
TJSONProtocol.RType.dbl = Type.DOUBLE;
TJSONProtocol.RType.rec = Type.STRUCT;
TJSONProtocol.RType.str = Type.STRING;
TJSONProtocol.RType.map = Type.MAP;
TJSONProtocol.RType.lst = Type.LIST;
TJSONProtocol.RType.set = Type.SET;
/**
 * The TJSONProtocol version number.
 * @readonly
 * @const {number} Version
 * @memberof Thrift.Protocol
 */

TJSONProtocol.Version = 1;

TJSONProtocol.prototype.flush = function () {
  this.writeToTransportIfStackIsFlushable();
  return this.trans.flush();
};

TJSONProtocol.prototype.writeToTransportIfStackIsFlushable = function () {
  if (this.tstack.length === 1) {
    this.trans.write(this.tstack.pop());
  }
};
/**
 * Serializes the beginning of a Thrift RPC message.
 * @param {string} name - The service method to call.
 * @param {Thrift.MessageType} messageType - The type of method call.
 * @param {number} seqid - The sequence number of this call (always 0 in Apache Thrift).
 */


TJSONProtocol.prototype.writeMessageBegin = function (name, messageType, seqid) {
  this.tstack.push([TJSONProtocol.Version, '"' + name + '"', messageType, seqid]);
};
/**
 * Serializes the end of a Thrift RPC message.
 */


TJSONProtocol.prototype.writeMessageEnd = function () {
  var obj = this.tstack.pop();
  this.wobj = this.tstack.pop();
  this.wobj.push(obj);
  this.wbuf = '[' + this.wobj.join(',') + ']'; // we assume there is nothing more to come so we write

  this.trans.write(this.wbuf);
};
/**
 * Serializes the beginning of a struct.
 * @param {string} name - The name of the struct.
 */


TJSONProtocol.prototype.writeStructBegin = function (name) {
  this.tpos.push(this.tstack.length);
  this.tstack.push({});
};
/**
 * Serializes the end of a struct.
 */


TJSONProtocol.prototype.writeStructEnd = function () {
  var p = this.tpos.pop();
  var struct = this.tstack[p];
  var str = '{';
  var first = true;

  for (var key in struct) {
    if (first) {
      first = false;
    } else {
      str += ',';
    }

    str += key + ':' + struct[key];
  }

  str += '}';
  this.tstack[p] = str;
  this.writeToTransportIfStackIsFlushable();
};
/**
 * Serializes the beginning of a struct field.
 * @param {string} name - The name of the field.
 * @param {Thrift.Protocol.Type} fieldType - The data type of the field.
 * @param {number} fieldId - The field's unique identifier.
 */


TJSONProtocol.prototype.writeFieldBegin = function (name, fieldType, fieldId) {
  this.tpos.push(this.tstack.length);
  this.tstack.push({
    'fieldId': '"' + fieldId + '"',
    'fieldType': TJSONProtocol.Type[fieldType]
  });
};
/**
 * Serializes the end of a field.
 */


TJSONProtocol.prototype.writeFieldEnd = function () {
  var value = this.tstack.pop();
  var fieldInfo = this.tstack.pop();

  if (':' + value === ":[object Object]") {
    this.tstack[this.tstack.length - 1][fieldInfo.fieldId] = '{' + fieldInfo.fieldType + ':' + JSON.stringify(value) + '}';
  } else {
    this.tstack[this.tstack.length - 1][fieldInfo.fieldId] = '{' + fieldInfo.fieldType + ':' + value + '}';
  }

  this.tpos.pop();
  this.writeToTransportIfStackIsFlushable();
};
/**
 * Serializes the end of the set of fields for a struct.
 */


TJSONProtocol.prototype.writeFieldStop = function () {};
/**
 * Serializes the beginning of a map collection.
 * @param {Thrift.Type} keyType - The data type of the key.
 * @param {Thrift.Type} valType - The data type of the value.
 * @param {number} [size] - The number of elements in the map (ignored).
 */


TJSONProtocol.prototype.writeMapBegin = function (keyType, valType, size) {
  //size is invalid, we'll set it on end.
  this.tpos.push(this.tstack.length);
  this.tstack.push([TJSONProtocol.Type[keyType], TJSONProtocol.Type[valType], 0]);
};
/**
 * Serializes the end of a map.
 */


TJSONProtocol.prototype.writeMapEnd = function () {
  var p = this.tpos.pop();

  if (p == this.tstack.length) {
    return;
  }

  if ((this.tstack.length - p - 1) % 2 !== 0) {
    this.tstack.push('');
  }

  var size = (this.tstack.length - p - 1) / 2;
  this.tstack[p][this.tstack[p].length - 1] = size;
  var map = '}';
  var first = true;

  while (this.tstack.length > p + 1) {
    var v = this.tstack.pop();
    var k = this.tstack.pop();

    if (first) {
      first = false;
    } else {
      map = ',' + map;
    }

    if (!isNaN(k)) {
      k = '"' + k + '"';
    } //json "keys" need to be strings


    map = k + ':' + v + map;
  }

  map = '{' + map;
  this.tstack[p].push(map);
  this.tstack[p] = '[' + this.tstack[p].join(',') + ']';
  this.writeToTransportIfStackIsFlushable();
};
/**
 * Serializes the beginning of a list collection.
 * @param {Thrift.Type} elemType - The data type of the elements.
 * @param {number} size - The number of elements in the list.
 */


TJSONProtocol.prototype.writeListBegin = function (elemType, size) {
  this.tpos.push(this.tstack.length);
  this.tstack.push([TJSONProtocol.Type[elemType], size]);
};
/**
 * Serializes the end of a list.
 */


TJSONProtocol.prototype.writeListEnd = function () {
  var p = this.tpos.pop();

  while (this.tstack.length > p + 1) {
    var tmpVal = this.tstack[p + 1];
    this.tstack.splice(p + 1, 1);
    this.tstack[p].push(tmpVal);
  }

  this.tstack[p] = '[' + this.tstack[p].join(',') + ']';
  this.writeToTransportIfStackIsFlushable();
};
/**
 * Serializes the beginning of a set collection.
 * @param {Thrift.Type} elemType - The data type of the elements.
 * @param {number} size - The number of elements in the list.
 */


TJSONProtocol.prototype.writeSetBegin = function (elemType, size) {
  this.tpos.push(this.tstack.length);
  this.tstack.push([TJSONProtocol.Type[elemType], size]);
};
/**
 * Serializes the end of a set.
 */


TJSONProtocol.prototype.writeSetEnd = function () {
  var p = this.tpos.pop();

  while (this.tstack.length > p + 1) {
    var tmpVal = this.tstack[p + 1];
    this.tstack.splice(p + 1, 1);
    this.tstack[p].push(tmpVal);
  }

  this.tstack[p] = '[' + this.tstack[p].join(',') + ']';
  this.writeToTransportIfStackIsFlushable();
};
/** Serializes a boolean */


TJSONProtocol.prototype.writeBool = function (bool) {
  this.tstack.push(bool ? 1 : 0);
};
/** Serializes a number */


TJSONProtocol.prototype.writeByte = function (_byte) {
  this.tstack.push(_byte);
};
/** Serializes a number */


TJSONProtocol.prototype.writeI16 = function (i16) {
  this.tstack.push(i16);
};
/** Serializes a number */


TJSONProtocol.prototype.writeI32 = function (i32) {
  this.tstack.push(i32);
};
/** Serializes a number */


TJSONProtocol.prototype.writeI64 = function (i64) {
  if (i64 instanceof Int64) {
    this.tstack.push(Int64Util.toDecimalString(i64));
  } else {
    this.tstack.push(i64);
  }
};
/** Serializes a number */


TJSONProtocol.prototype.writeDouble = function (dub) {
  this.tstack.push(dub);
};
/** Serializes a string */


TJSONProtocol.prototype.writeString = function (arg) {
  // We do not encode uri components for wire transfer:
  if (arg === null) {
    this.tstack.push(null);
  } else {
    if (typeof arg === 'string') {
      var str = arg;
    } else if (arg instanceof Buffer) {
      var str = arg.toString('utf8');
    } else {
      throw new Error('writeString called without a string/Buffer argument: ' + arg);
    } // concat may be slower than building a byte buffer


    var escapedString = '';

    for (var i = 0; i < str.length; i++) {
      var ch = str.charAt(i); // a single double quote: "

      if (ch === '\"') {
        escapedString += '\\\"'; // write out as: \"
      } else if (ch === '\\') {
        // a single backslash: \
        escapedString += '\\\\'; // write out as: \\

        /* Currently escaped forward slashes break TJSONProtocol.
         * As it stands, we can simply pass forward slashes into
         * our strings across the wire without being escaped.
         * I think this is the protocol's bug, not thrift.js
         * } else if(ch === '/') {   // a single forward slash: /
         *  escapedString += '\\/';  // write out as \/
         * }
         */
      } else if (ch === '\b') {
        // a single backspace: invisible
        escapedString += '\\b'; // write out as: \b"
      } else if (ch === '\f') {
        // a single formfeed: invisible
        escapedString += '\\f'; // write out as: \f"
      } else if (ch === '\n') {
        // a single newline: invisible
        escapedString += '\\n'; // write out as: \n"
      } else if (ch === '\r') {
        // a single return: invisible
        escapedString += '\\r'; // write out as: \r"
      } else if (ch === '\t') {
        // a single tab: invisible
        escapedString += '\\t'; // write out as: \t"
      } else {
        escapedString += ch; // Else it need not be escaped
      }
    }

    this.tstack.push('"' + escapedString + '"');
  }
};
/** Serializes a string */


TJSONProtocol.prototype.writeBinary = function (arg) {
  if (typeof arg === 'string') {
    var buf = new Buffer(arg, 'binary');
  } else if (arg instanceof Buffer || Object.prototype.toString.call(arg) == '[object Uint8Array]') {
    var buf = arg;
  } else {
    throw new Error('writeBinary called without a string/Buffer argument: ' + arg);
  }

  this.tstack.push('"' + buf.toString('base64') + '"');
};
/**
 * @class
 * @name AnonReadMessageBeginReturn
 * @property {string} fname - The name of the service method.
 * @property {Thrift.MessageType} mtype - The type of message call.
 * @property {number} rseqid - The sequence number of the message (0 in Thrift RPC).
 */

/**
 * Deserializes the beginning of a message.
 * @returns {AnonReadMessageBeginReturn}
 */


TJSONProtocol.prototype.readMessageBegin = function () {
  this.rstack = [];
  this.rpos = []; //Borrow the inbound transport buffer and ensure data is present/consistent

  var transBuf = this.trans.borrow();

  if (transBuf.readIndex >= transBuf.writeIndex) {
    throw new InputBufferUnderrunError();
  }

  var cursor = transBuf.readIndex;

  if (transBuf.buf[cursor] !== 0x5B) {
    //[
    throw new Error("Malformed JSON input, no opening bracket");
  } //Parse a single message (there may be several in the buffer)
  //  TODO: Handle characters using multiple code units


  cursor++;
  var openBracketCount = 1;
  var inString = false;

  for (; cursor < transBuf.writeIndex; cursor++) {
    var chr = transBuf.buf[cursor]; //we use hexa charcode here because data[i] returns an int and not a char

    if (inString) {
      if (chr === 0x22) {
        //"
        inString = false;
      } else if (chr === 0x5C) {
        //\
        //escaped character, skip
        cursor += 1;
      }
    } else {
      if (chr === 0x5B) {
        //[
        openBracketCount += 1;
      } else if (chr === 0x5D) {
        //]
        openBracketCount -= 1;

        if (openBracketCount === 0) {
          //end of json message detected
          break;
        }
      } else if (chr === 0x22) {
        //"
        inString = true;
      }
    }
  }

  if (openBracketCount !== 0) {
    // Missing closing bracket. Can be buffer underrun.
    throw new InputBufferUnderrunError();
  } //Reconstitute the JSON object and conume the necessary bytes


  this.robj = json_parse(transBuf.buf.slice(transBuf.readIndex, cursor + 1).toString());
  this.trans.consume(cursor + 1 - transBuf.readIndex); //Verify the protocol version

  var version = this.robj.shift();

  if (version != TJSONProtocol.Version) {
    throw new Error('Wrong thrift protocol version: ' + version);
  } //Objectify the thrift message {name/type/sequence-number} for return
  // and then save the JSON object in rstack


  var r = {};
  r.fname = this.robj.shift();
  r.mtype = this.robj.shift();
  r.rseqid = this.robj.shift();
  this.rstack.push(this.robj.shift());
  return r;
};
/** Deserializes the end of a message. */


TJSONProtocol.prototype.readMessageEnd = function () {};
/**
 * Deserializes the beginning of a struct.
 * @param {string} [name] - The name of the struct (ignored)
 * @returns {object} - An object with an empty string fname property
 */


TJSONProtocol.prototype.readStructBegin = function () {
  var r = {};
  r.fname = ''; //incase this is an array of structs

  if (this.rstack[this.rstack.length - 1] instanceof Array) {
    this.rstack.push(this.rstack[this.rstack.length - 1].shift());
  }

  return r;
};
/** Deserializes the end of a struct. */


TJSONProtocol.prototype.readStructEnd = function () {
  this.rstack.pop();
};
/**
 * @class
 * @name AnonReadFieldBeginReturn
 * @property {string} fname - The name of the field (always '').
 * @property {Thrift.Type} ftype - The data type of the field.
 * @property {number} fid - The unique identifier of the field.
 */

/**
 * Deserializes the beginning of a field.
 * @returns {AnonReadFieldBeginReturn}
 */


TJSONProtocol.prototype.readFieldBegin = function () {
  var r = {};
  var fid = -1;
  var ftype = Type.STOP; //get a fieldId

  for (var f in this.rstack[this.rstack.length - 1]) {
    if (f === null) {
      continue;
    }

    fid = parseInt(f, 10);
    this.rpos.push(this.rstack.length);
    var field = this.rstack[this.rstack.length - 1][fid]; //remove so we don't see it again

    delete this.rstack[this.rstack.length - 1][fid];
    this.rstack.push(field);
    break;
  }

  if (fid != -1) {
    //should only be 1 of these but this is the only
    //way to match a key
    for (var i in this.rstack[this.rstack.length - 1]) {
      if (TJSONProtocol.RType[i] === null) {
        continue;
      }

      ftype = TJSONProtocol.RType[i];
      this.rstack[this.rstack.length - 1] = this.rstack[this.rstack.length - 1][i];
    }
  }

  r.fname = '';
  r.ftype = ftype;
  r.fid = fid;
  return r;
};
/** Deserializes the end of a field. */


TJSONProtocol.prototype.readFieldEnd = function () {
  var pos = this.rpos.pop(); //get back to the right place in the stack

  while (this.rstack.length > pos) {
    this.rstack.pop();
  }
};
/**
 * @class
 * @name AnonReadMapBeginReturn
 * @property {Thrift.Type} ktype - The data type of the key.
 * @property {Thrift.Type} vtype - The data type of the value.
 * @property {number} size - The number of elements in the map.
 */

/**
 * Deserializes the beginning of a map.
 * @returns {AnonReadMapBeginReturn}
 */


TJSONProtocol.prototype.readMapBegin = function () {
  var map = this.rstack.pop();
  var first = map.shift();

  if (first instanceof Array) {
    this.rstack.push(map);
    map = first;
    first = map.shift();
  }

  var r = {};
  r.ktype = TJSONProtocol.RType[first];
  r.vtype = TJSONProtocol.RType[map.shift()];
  r.size = map.shift();
  this.rpos.push(this.rstack.length);
  this.rstack.push(map.shift());
  return r;
};
/** Deserializes the end of a map. */


TJSONProtocol.prototype.readMapEnd = function () {
  this.readFieldEnd();
};
/**
 * @class
 * @name AnonReadColBeginReturn
 * @property {Thrift.Type} etype - The data type of the element.
 * @property {number} size - The number of elements in the collection.
 */

/**
 * Deserializes the beginning of a list.
 * @returns {AnonReadColBeginReturn}
 */


TJSONProtocol.prototype.readListBegin = function () {
  var list = this.rstack[this.rstack.length - 1];
  var r = {};
  r.etype = TJSONProtocol.RType[list.shift()];
  r.size = list.shift();
  this.rpos.push(this.rstack.length);
  this.rstack.push(list.shift());
  return r;
};
/** Deserializes the end of a list. */


TJSONProtocol.prototype.readListEnd = function () {
  var pos = this.rpos.pop() - 2;
  var st = this.rstack;
  st.pop();

  if (st instanceof Array && st.length > pos && st[pos].length > 0) {
    st.push(st[pos].shift());
  }
};
/**
 * Deserializes the beginning of a set.
 * @returns {AnonReadColBeginReturn}
 */


TJSONProtocol.prototype.readSetBegin = function () {
  return this.readListBegin();
};
/** Deserializes the end of a set. */


TJSONProtocol.prototype.readSetEnd = function () {
  return this.readListEnd();
};

TJSONProtocol.prototype.readBool = function () {
  return this.readValue() == '1';
};

TJSONProtocol.prototype.readByte = function () {
  return this.readI32();
};

TJSONProtocol.prototype.readI16 = function () {
  return this.readI32();
};

TJSONProtocol.prototype.readI32 = function (f) {
  return +this.readValue();
};
/** Returns the next value found in the protocol buffer */


TJSONProtocol.prototype.readValue = function (f) {
  if (f === undefined) {
    f = this.rstack[this.rstack.length - 1];
  }

  var r = {};

  if (f instanceof Array) {
    if (f.length === 0) {
      r.value = undefined;
    } else {
      r.value = f.shift();
    }
  } else if (!(f instanceof Int64) && f instanceof Object) {
    for (var i in f) {
      if (i === null) {
        continue;
      }

      this.rstack.push(f[i]);
      delete f[i];
      r.value = i;
      break;
    }
  } else {
    r.value = f;
    this.rstack.pop();
  }

  return r.value;
};

TJSONProtocol.prototype.readI64 = function () {
  var n = this.readValue();

  if (typeof n === 'string') {
    // Assuming no one is sending in 1.11111e+33 format
    return Int64Util.fromDecimalString(n);
  } else {
    return new Int64(n);
  }
};

TJSONProtocol.prototype.readDouble = function () {
  return this.readI32();
};

TJSONProtocol.prototype.readBinary = function () {
  return new Buffer(this.readValue(), 'base64');
};

TJSONProtocol.prototype.readString = function () {
  return this.readValue();
};
/**
 * Returns the underlying transport.
 * @readonly
 * @returns {Thrift.Transport} The underlying transport.
 */


TJSONProtocol.prototype.getTransport = function () {
  return this.trans;
};
/**
 * Method to arbitrarily skip over data
 */


TJSONProtocol.prototype.skip = function (type) {
  switch (type) {
    case Type.BOOL:
      this.readBool();
      break;

    case Type.BYTE:
      this.readByte();
      break;

    case Type.I16:
      this.readI16();
      break;

    case Type.I32:
      this.readI32();
      break;

    case Type.I64:
      this.readI64();
      break;

    case Type.DOUBLE:
      this.readDouble();
      break;

    case Type.STRING:
      this.readString();
      break;

    case Type.STRUCT:
      this.readStructBegin();

      while (true) {
        var r = this.readFieldBegin();

        if (r.ftype === Type.STOP) {
          break;
        }

        this.skip(r.ftype);
        this.readFieldEnd();
      }

      this.readStructEnd();
      break;

    case Type.MAP:
      var mapBegin = this.readMapBegin();

      for (var i = 0; i < mapBegin.size; ++i) {
        this.skip(mapBegin.ktype);
        this.skip(mapBegin.vtype);
      }

      this.readMapEnd();
      break;

    case Type.SET:
      var setBegin = this.readSetBegin();

      for (var i2 = 0; i2 < setBegin.size; ++i2) {
        this.skip(setBegin.etype);
      }

      this.readSetEnd();
      break;

    case Type.LIST:
      var listBegin = this.readListBegin();

      for (var i3 = 0; i3 < listBegin.size; ++i3) {
        this.skip(listBegin.etype);
      }

      this.readListEnd();
      break;

    default:
      throw new Error("Invalid type: " + type);
  }
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\log.js":
/*!**********************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/log.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var disabled = function disabled() {};

var logFunc = console.log;
var logLevel = 'error'; // default level

function factory(level) {
  return function () {
    // better use spread syntax, but due to compatibility,
    // use legacy method here.
    var args = ['thrift: [' + level + '] '].concat(Array.from(arguments));
    return logFunc(util.format.apply(null, args));
  };
}

var trace = disabled;
var debug = disabled;
var error = disabled;
var warning = disabled;
var info = disabled;

exports.setLogFunc = function (func) {
  logFunc = func;
};

var setLogLevel = exports.setLogLevel = function (level) {
  trace = debug = error = warning = info = disabled;
  logLevel = level;

  switch (logLevel) {
    case 'trace':
      trace = factory('TRACE');

    case 'debug':
      debug = factory('DEBUG');

    case 'error':
      error = factory('ERROR');

    case 'warning':
      warning = factory('WARN');

    case 'info':
      info = factory('INFO');
  }
}; // set default


setLogLevel(logLevel);

exports.getLogLevel = function () {
  return logLevel;
};

exports.trace = function () {
  return trace.apply(null, arguments);
};

exports.debug = function () {
  return debug.apply(null, arguments);
};

exports.error = function () {
  return error.apply(null, arguments);
};

exports.warning = function () {
  return warning.apply(null, arguments);
};

exports.info = function () {
  return info.apply(null, arguments);
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\multiplexed_protocol.js":
/*!***************************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/multiplexed_protocol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var Thrift = __webpack_require__(/*! ./thrift */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\thrift.js");

exports.Multiplexer = Multiplexer;

function Wrapper(serviceName, protocol, connection) {
  function MultiplexProtocol(trans, strictRead, strictWrite) {
    protocol.call(this, trans, strictRead, strictWrite);
  }

  ;
  util.inherits(MultiplexProtocol, protocol);

  MultiplexProtocol.prototype.writeMessageBegin = function (name, type, seqid) {
    if (type == Thrift.MessageType.CALL || type == Thrift.MessageType.ONEWAY) {
      connection.seqId2Service[seqid] = serviceName;
      MultiplexProtocol.super_.prototype.writeMessageBegin.call(this, serviceName + ":" + name, type, seqid);
    } else {
      MultiplexProtocol.super_.prototype.writeMessageBegin.call(this, name, type, seqid);
    }
  };

  return MultiplexProtocol;
}

;

function Multiplexer() {
  this.seqid = 0;
}

;

Multiplexer.prototype.createClient = function (serviceName, ServiceClient, connection) {
  if (ServiceClient.Client) {
    ServiceClient = ServiceClient.Client;
  }

  var writeCb = function writeCb(buf, seqid) {
    connection.write(buf, seqid);
  };

  var transport = new connection.transport(undefined, writeCb);
  var protocolWrapper = new Wrapper(serviceName, connection.protocol, connection);
  var client = new ServiceClient(transport, protocolWrapper);
  var self = this;

  client.new_seqid = function () {
    self.seqid += 1;
    return self.seqid;
  };

  if ((0, _typeof2["default"])(connection.client) !== 'object') {
    connection.client = {};
  }

  connection.client[serviceName] = client;
  return client;
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\ohos_connection.js":
/*!**********************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/ohos_connection.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, Buffer) {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;

var thrift = __webpack_require__(/*! ./thrift */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\thrift.js");

var TBufferedTransport = __webpack_require__(/*! ./buffered_transport */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\buffered_transport.js");

var TBinaryProtocol = __webpack_require__(/*! ./binary_protocol */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\binary_protocol.js");

var InputBufferUnderrunError = __webpack_require__(/*! ./input_buffer_underrun_error */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\input_buffer_underrun_error.js");

var createClient = __webpack_require__(/*! ./create_client */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\create_client.js");
/**
 * Initializes a Thrift OhosConnection instance (use createOhosConnection() rather than
 *    instantiating directly).
 * @constructor
 * @param {ConnectOptions} options - The configuration options to use.
 * @throws {error} Exceptions other than InputBufferUnderrunError are rethrown
 * @event {error} The "error" event is fired when a Node.js error event occurs during
 *     request or response processing, in which case the node error is passed on. An 'error'
 *     event may also be fired when the connection can not map a response back to the
 *     appropriate client (an internal error), generating a TApplicationException.
 * @classdesc OhosConnection objects provide Thrift end point transport
 *     semantics implemented over the JS API http.request() method.
 * @see {@link createOhosConnection}
 */


var OhosConnection = exports.OhosConnection = function (options) {
  //Initialize the emitter base object
  EventEmitter.call(this); //Set configuration

  var self = this;
  this.options = options || {};
  this.host = this.options.host;
  this.port = this.options.port;
  this.url = this.port === 80 ? this.host.replace(/\/$/, '') : this.host.replace(/\/$/, '') + ':' + this.port;
  this.transport = this.options.transport || TBufferedTransport;
  this.protocol = this.options.protocol || TBinaryProtocol;
  this.createHttp = this.options.createHttp; //Prepare Node.js options

  this.requestOptions = {
    method: 'POST',
    header: this.options.header || {},
    readTimeout: this.options.readTimeout || 60000,
    connectTimeout: this.options.connectTimeout || 60000
  };

  for (var attrname in this.options.requestOptions) {
    this.requestOptions[attrname] = this.options.requestOptions[attrname];
  }
  /*jshint -W069 */


  if (!this.requestOptions.header['Connection']) {
    this.requestOptions.header['Connection'] = 'keep-alive';
  }
  /*jshint +W069 */
  //The sequence map is used to map seqIDs back to the
  //  calling client in multiplexed scenarios


  this.seqId2Service = {};

  function decodeCallback(transport_with_data) {
    var proto = new self.protocol(transport_with_data);

    try {
      while (true) {
        var header = proto.readMessageBegin();
        var dummy_seqid = header.rseqid * -1;
        var client = self.client; //The Multiplexed Protocol stores a hash of seqid to service names
        //  in seqId2Service. If the SeqId is found in the hash we need to
        //  lookup the appropriate client for this call.
        //  The client var is a single client object when not multiplexing,
        //  when using multiplexing it is a service name keyed hash of client
        //  objects.
        //NOTE: The 2 way interdependencies between protocols, transports,
        //  connections and clients in the Node.js implementation are irregular
        //  and make the implementation difficult to extend and maintain. We
        //  should bring this stuff inline with typical thrift I/O stack
        //  operation soon.
        //  --ra

        var service_name = self.seqId2Service[header.rseqid];

        if (service_name) {
          client = self.client[service_name];
          delete self.seqId2Service[header.rseqid];
        }
        /*jshint -W083 */


        client._reqs[dummy_seqid] = function (err, success) {
          transport_with_data.commitPosition();
          var clientCallback = client._reqs[header.rseqid];
          delete client._reqs[header.rseqid];

          if (clientCallback) {
            process.nextTick(function () {
              clientCallback(err, success);
            });
          }
        };
        /*jshint +W083 */


        if (client['recv_' + header.fname]) {
          client['recv_' + header.fname](proto, header.mtype, dummy_seqid);
        } else {
          delete client._reqs[dummy_seqid];
          self.emit("error", new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function"));
        }
      }
    } catch (e) {
      if (e instanceof InputBufferUnderrunError) {
        transport_with_data.rollbackPosition();
      } else {
        self.emit('error', e);
      }
    }
  } //Response handler
  //////////////////////////////////////////////////


  this.responseCallback = function (error, response) {
    var data = [];
    var dataLen = 0;

    if (error) {
      self.emit('error', error);
      return;
    }

    if (!response || response.responseCode !== 200) {
      self.emit('error', new THTTPException(response));
    } // when running in a Browser (e.g. Browserify), chunk
    // will be a string or an ArrayBuffer.


    if (typeof response.result == 'string' || Object.prototype.toString.call(response.result) == '[object Uint8Array]') {
      // Wrap ArrayBuffer/string in a Buffer so data[i].copy will work
      data.push(Buffer.from(response.result));
    }

    dataLen += response.result.length;
    var buf = Buffer.alloc(dataLen);

    for (var i = 0, len = data.length, pos = 0; i < len; i++) {
      data[i].copy(buf, pos);
      pos += data[i].length;
    } //Get the receiver function for the transport and
    //  call it with the buffer


    self.transport.receiver(decodeCallback)(buf);
  };
  /**
   * Writes Thrift message data to the connection
   * @param {Buffer} data - A Node.js Buffer containing the data to write
   * @returns {void} No return value.
   * @event {error} the 'error' event is raised upon request failure passing the
   *     Node.js error object to the listener.
   */


  this.write = function (data) {
    var http = self.createHttp();
    var opts = self.requestOptions;
    opts.header['Content-length'] = data.length;
    if (!opts.header['Content-Type']) opts.header['Content-Type'] = 'application/x-thrift'; // extraData not support array data currently

    opts.extraData = data.toString();
    http.request(self.url, opts, self.responseCallback);
  };
};

util.inherits(OhosConnection, EventEmitter);
/**
 * Creates a new OhosConnection object, used by Thrift clients to connect
 *    to Thrift HTTP based servers.
 * @param {Function} createHttp - Method to create RequestHttp of OpenHarmony JS API.
 * @param {string} host - The host name or IP to connect to.
 * @param {number} port - The TCP port to connect to.
 * @param {ConnectOptions} options - The configuration options to use.
 * @returns {OhosConnection} The connection object.
 * @see {@link ConnectOptions}
 */

exports.createOhosConnection = function (createHttp, host, port, options) {
  options.createHttp = createHttp;
  options.host = host;
  options.port = port || 80;
  return new OhosConnection(options);
};

exports.createOhosClient = createClient;

function THTTPException(response) {
  thrift.TApplicationException.call(this);

  if (Error.captureStackTrace !== undefined) {
    Error.captureStackTrace(this, this.constructor);
  }

  this.name = this.constructor.name;
  this.responseCode = response.responseCode;
  this.response = response;
  this.type = thrift.TApplicationExceptionType.PROTOCOL_ERROR;
  this.message = 'Received a response with a bad HTTP status code: ' + response.responseCode;
}

util.inherits(THTTPException, thrift.TApplicationException);

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\thrift.js":
/*!*************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/thrift.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var Type = exports.Type = {
  STOP: 0,
  VOID: 1,
  BOOL: 2,
  BYTE: 3,
  I08: 3,
  DOUBLE: 4,
  I16: 6,
  I32: 8,
  I64: 10,
  STRING: 11,
  UTF7: 11,
  STRUCT: 12,
  MAP: 13,
  SET: 14,
  LIST: 15,
  UTF8: 16,
  UTF16: 17
};
exports.MessageType = {
  CALL: 1,
  REPLY: 2,
  EXCEPTION: 3,
  ONEWAY: 4
};
exports.TException = TException;

function TException(message) {
  Error.call(this);

  if (Error.captureStackTrace !== undefined) {
    Error.captureStackTrace(this, this.constructor);
  }

  this.name = this.constructor.name;
  this.message = message;
}

;
util.inherits(TException, Error);
var TApplicationExceptionType = exports.TApplicationExceptionType = {
  UNKNOWN: 0,
  UNKNOWN_METHOD: 1,
  INVALID_MESSAGE_TYPE: 2,
  WRONG_METHOD_NAME: 3,
  BAD_SEQUENCE_ID: 4,
  MISSING_RESULT: 5,
  INTERNAL_ERROR: 6,
  PROTOCOL_ERROR: 7,
  INVALID_TRANSFORM: 8,
  INVALID_PROTOCOL: 9,
  UNSUPPORTED_CLIENT_TYPE: 10
};
exports.TApplicationException = TApplicationException;

function TApplicationException(type, message) {
  TException.call(this);

  if (Error.captureStackTrace !== undefined) {
    Error.captureStackTrace(this, this.constructor);
  }

  this.type = type || TApplicationExceptionType.UNKNOWN;
  this.name = this.constructor.name;
  this.message = message;
}

;
util.inherits(TApplicationException, TException);

TApplicationException.prototype.read = function (input) {
  var ftype;
  var ret = input.readStructBegin('TApplicationException');

  while (1) {
    ret = input.readFieldBegin();
    if (ret.ftype == Type.STOP) break;

    switch (ret.fid) {
      case 1:
        if (ret.ftype == Type.STRING) {
          ret = input.readString();
          this.message = ret;
        } else {
          ret = input.skip(ret.ftype);
        }

        break;

      case 2:
        if (ret.ftype == Type.I32) {
          ret = input.readI32();
          this.type = ret;
        } else {
          ret = input.skip(ret.ftype);
        }

        break;

      default:
        ret = input.skip(ret.ftype);
        break;
    }

    input.readFieldEnd();
  }

  input.readStructEnd();
};

TApplicationException.prototype.write = function (output) {
  output.writeStructBegin('TApplicationException');

  if (this.message) {
    output.writeFieldBegin('message', Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }

  if (this.code) {
    output.writeFieldBegin('type', Type.I32, 2);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }

  output.writeFieldStop();
  output.writeStructEnd();
};

var TProtocolExceptionType = exports.TProtocolExceptionType = {
  UNKNOWN: 0,
  INVALID_DATA: 1,
  NEGATIVE_SIZE: 2,
  SIZE_LIMIT: 3,
  BAD_VERSION: 4,
  NOT_IMPLEMENTED: 5,
  DEPTH_LIMIT: 6
};
exports.TProtocolException = TProtocolException;

function TProtocolException(type, message) {
  Error.call(this);

  if (Error.captureStackTrace !== undefined) {
    Error.captureStackTrace(this, this.constructor);
  }

  this.name = this.constructor.name;
  this.type = type;
  this.message = message;
}

;
util.inherits(TProtocolException, Error);

exports.objectLength = function (obj) {
  return Object.keys(obj).length;
};

exports.inherits = function (constructor, superConstructor) {
  util.inherits(constructor, superConstructor);
};

var _copyList, _copyMap;

_copyList = function copyList(lst, types) {
  if (!lst) {
    return lst;
  }

  var type;

  if (types.shift === undefined) {
    type = types;
  } else {
    type = types[0];
  }

  var Type = type;
  var len = lst.length,
      result = [],
      i,
      val;

  for (i = 0; i < len; i++) {
    val = lst[i];

    if (type === null) {
      result.push(val);
    } else if (type === _copyMap || type === _copyList) {
      result.push(type(val, types.slice(1)));
    } else {
      result.push(new Type(val));
    }
  }

  return result;
};

_copyMap = function copyMap(obj, types) {
  if (!obj) {
    return obj;
  }

  var type;

  if (types.shift === undefined) {
    type = types;
  } else {
    type = types[0];
  }

  var Type = type;
  var result = {},
      val;

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      val = obj[prop];

      if (type === null) {
        result[prop] = val;
      } else if (type === _copyMap || type === _copyList) {
        result[prop] = type(val, types.slice(1));
      } else {
        result[prop] = new Type(val);
      }
    }
  }

  return result;
};

module.exports.copyMap = _copyMap;
module.exports.copyList = _copyList;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\ws_connection.js":
/*!********************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/ws_connection.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var WebSocket = __webpack_require__(/*! isomorphic-ws */ "D:\\thrift\\node_modules\\isomorphic-ws\\browser.js");

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;

var thrift = __webpack_require__(/*! ./thrift */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\thrift.js");

var TBufferedTransport = __webpack_require__(/*! ./buffered_transport */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\buffered_transport.js");

var TJSONProtocol = __webpack_require__(/*! ./json_protocol */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\json_protocol.js");

var InputBufferUnderrunError = __webpack_require__(/*! ./input_buffer_underrun_error */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\input_buffer_underrun_error.js");

var createClient = __webpack_require__(/*! ./create_client */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\create_client.js");

var jsEnv = __webpack_require__(/*! browser-or-node */ "D:\\thrift\\node_modules\\browser-or-node\\lib\\index.js");

exports.WSConnection = WSConnection;
/**
 * @class
 * @name WSConnectOptions
 * @property {string} transport - The Thrift layered transport to use (TBufferedTransport, etc).
 * @property {string} protocol - The Thrift serialization protocol to use (TJSONProtocol, etc.).
 * @property {string} path - The URL path to connect to (e.g. "/", "/mySvc", "/thrift/quoteSvc", etc.).
 * @property {object} headers - A standard Node.js header hash, an object hash containing key/value
 *        pairs where the key is the header name string and the value is the header value string.
 * @property {boolean} secure - True causes the connection to use wss, otherwise ws is used.
 * @property {object} wsOptions - Options passed on to WebSocket.
 * @example
 *     //Use a secured websocket connection
 *     //  uses the buffered transport layer, uses the JSON protocol and directs RPC traffic
 *     //  to wss://thrift.example.com:9090/hello
 *     var thrift = require('thrift');
 *     var options = {
 *        transport: thrift.TBufferedTransport,
 *        protocol: thrift.TJSONProtocol,
 *        path: "/hello",
 *        secure: true
 *     };
 *     var con = thrift.createWSConnection("thrift.example.com", 9090, options);
 *     con.open()
 *     var client = thrift.createWSClient(myService, connection);
 *     client.myServiceFunction();
 *     con.close()
 */

/**
 * Initializes a Thrift WSConnection instance (use createWSConnection() rather than
 *    instantiating directly).
 * @constructor
 * @param {string} host - The host name or IP to connect to.
 * @param {number} port - The TCP port to connect to.
 * @param {WSConnectOptions} options - The configuration options to use.
 * @throws {error} Exceptions other than ttransport.InputBufferUnderrunError are rethrown
 * @event {error} The "error" event is fired when a Node.js error event occurs during
 *     request or response processing, in which case the node error is passed on. An "error"
 *     event may also be fired when the connection can not map a response back to the
 *     appropriate client (an internal error), generating a TApplicationException.
 * @classdesc WSConnection objects provide Thrift end point transport
 *     semantics implemented using Websockets.
 * @see {@link createWSConnection}
 */

function WSConnection(host, port, options) {
  //Initialize the emitter base object
  EventEmitter.call(this); //Set configuration

  this.options = options || {};
  this.host = host;
  this.port = port;
  this.secure = this.options.secure || false;
  this.transport = this.options.transport || TBufferedTransport;
  this.protocol = this.options.protocol || TJSONProtocol;
  this.path = this.options.path;
  this.send_pending = []; //The sequence map is used to map seqIDs back to the
  //  calling client in multiplexed scenarios

  this.seqId2Service = {}; //Prepare WebSocket options

  this.wsOptions = {
    host: this.host,
    port: this.port || 80,
    path: this.options.path || '/',
    headers: this.options.headers || {}
  };

  for (var attrname in this.options.wsOptions) {
    this.wsOptions[attrname] = this.options.wsOptions[attrname];
  }
}

;
util.inherits(WSConnection, EventEmitter);

WSConnection.prototype.__reset = function () {
  this.socket = null; //The web socket

  this.send_pending = []; //Buffers/Callback pairs waiting to be sent
};

WSConnection.prototype.__onOpen = function () {
  this.emit("open");

  if (this.send_pending.length > 0) {
    //If the user made calls before the connection was fully
    //open, send them now
    this.send_pending.forEach(function (data) {
      this.socket.send(data);
    }, this);
    this.send_pending = [];
  }
};

WSConnection.prototype.__onClose = function (evt) {
  this.emit("close");

  this.__reset();
};

WSConnection.prototype.__decodeCallback = function (transport_with_data) {
  var proto = new this.protocol(transport_with_data);

  try {
    while (true) {
      var header = proto.readMessageBegin();
      var dummy_seqid = header.rseqid * -1;
      var client = this.client; //The Multiplexed Protocol stores a hash of seqid to service names
      //  in seqId2Service. If the SeqId is found in the hash we need to
      //  lookup the appropriate client for this call.
      //  The client var is a single client object when not multiplexing,
      //  when using multiplexing it is a service name keyed hash of client
      //  objects.
      //NOTE: The 2 way interdependencies between protocols, transports,
      //  connections and clients in the Node.js implementation are irregular
      //  and make the implementation difficult to extend and maintain. We
      //  should bring this stuff inline with typical thrift I/O stack
      //  operation soon.
      //  --ra

      var service_name = this.seqId2Service[header.rseqid];

      if (service_name) {
        client = this.client[service_name];
        delete this.seqId2Service[header.rseqid];
      }
      /*jshint -W083 */


      client._reqs[dummy_seqid] = function (err, success) {
        transport_with_data.commitPosition();
        var clientCallback = client._reqs[header.rseqid];
        delete client._reqs[header.rseqid];

        if (clientCallback) {
          clientCallback(err, success);
        }
      };
      /*jshint +W083 */


      if (client['recv_' + header.fname]) {
        client['recv_' + header.fname](proto, header.mtype, dummy_seqid);
      } else {
        delete client._reqs[dummy_seqid];
        this.emit("error", new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function"));
      }
    }
  } catch (e) {
    if (e instanceof InputBufferUnderrunError) {
      transport_with_data.rollbackPosition();
    } else {
      throw e;
    }
  }
};

WSConnection.prototype.__onData = function (data) {
  if (Object.prototype.toString.call(data) === "[object ArrayBuffer]") {
    data = new Uint8Array(data);
  }

  var buf = new Buffer(data);
  this.transport.receiver(this.__decodeCallback.bind(this))(buf);
};

WSConnection.prototype.__onMessage = function (evt) {
  this.__onData(evt.data);
};

WSConnection.prototype.__onError = function (evt) {
  this.emit("error", evt);
  this.socket.close();
};
/**
 * Returns true if the transport is open
 * @readonly
 * @returns {boolean}
 */


WSConnection.prototype.isOpen = function () {
  return this.socket && this.socket.readyState === this.socket.OPEN;
};
/**
 * Opens the transport connection
 */


WSConnection.prototype.open = function () {
  //If OPEN/CONNECTING/CLOSING ignore additional opens
  if (this.socket && this.socket.readyState !== this.socket.CLOSED) {
    return;
  } //If there is no socket or the socket is closed:


  if (jsEnv.isBrowser) {
    this.socket = new WebSocket(this.uri());
  } else {
    this.socket = new WebSocket(this.uri(), "", this.wsOptions);
  }

  this.socket.binaryType = 'arraybuffer';
  this.socket.onopen = this.__onOpen.bind(this);
  this.socket.onmessage = this.__onMessage.bind(this);
  this.socket.onerror = this.__onError.bind(this);
  this.socket.onclose = this.__onClose.bind(this);
};
/**
 * Closes the transport connection
 */


WSConnection.prototype.close = function () {
  this.socket.close();
};
/**
 * Return URI for the connection
 * @returns {string} URI
 */


WSConnection.prototype.uri = function () {
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';
  var path = this.path || '/';
  var host = this.host; // avoid port if default for schema

  if (this.port && ('wss' === schema && this.port !== 443 || 'ws' === schema && this.port !== 80)) {
    port = ':' + this.port;
  }

  return schema + '://' + host + port + path;
};
/**
 * Writes Thrift message data to the connection
 * @param {Buffer} data - A Node.js Buffer containing the data to write
 * @returns {void} No return value.
 * @event {error} the "error" event is raised upon request failure passing the
 *     Node.js error object to the listener.
 */


WSConnection.prototype.write = function (data) {
  if (this.isOpen()) {
    //Send data and register a callback to invoke the client callback
    this.socket.send(data);
  } else {
    //Queue the send to go out __onOpen
    this.send_pending.push(data);
  }
};
/**
 * Creates a new WSConnection object, used by Thrift clients to connect
 *    to Thrift HTTP based servers.
 * @param {string} host - The host name or IP to connect to.
 * @param {number} port - The TCP port to connect to.
 * @param {WSConnectOptions} options - The configuration options to use.
 * @returns {WSConnection} The connection object.
 * @see {@link WSConnectOptions}
 */


exports.createWSConnection = function (host, port, options) {
  return new WSConnection(host, port, options);
};

exports.createWSClient = createClient;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\ws_transport.js":
/*!*******************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/ws_transport.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var log = __webpack_require__(/*! ./log */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\log.js");

module.exports = TWebSocketTransport;
/**
 * Constructor Function for the WebSocket transport.
 * @constructor
 * @param {string} [url] - The URL to connect to.
 * @classdesc The Apache Thrift Transport layer performs byte level I/O
 * between RPC clients and servers. The JavaScript TWebSocketTransport object
 * uses the WebSocket protocol. Target servers must implement WebSocket.
 * (see: node.js example server_http.js).
 * @example
 *   var transport = new Thrift.TWebSocketTransport("http://localhost:8585");
 */

function TWebSocketTransport(url) {
  this.__reset(url);
}

;

TWebSocketTransport.prototype.__reset = function (url) {
  this.url = url; //Where to connect

  this.socket = null; //The web socket

  this.callbacks = []; //Pending callbacks

  this.send_pending = []; //Buffers/Callback pairs waiting to be sent

  this.send_buf = ''; //Outbound data, immutable until sent

  this.recv_buf = ''; //Inbound data

  this.rb_wpos = 0; //Network write position in receive buffer

  this.rb_rpos = 0; //Client read position in receive buffer
};
/**
 * Sends the current WS request and registers callback. The async
 * parameter is ignored (WS flush is always async) and the callback
 * function parameter is required.
 * @param {object} async - Ignored.
 * @param {object} callback - The client completion callback.
 * @returns {undefined|string} Nothing (undefined)
 */


TWebSocketTransport.prototype.flush = function (async, callback) {
  var self = this;

  if (this.isOpen()) {
    //Send data and register a callback to invoke the client callback
    this.socket.send(this.send_buf);
    this.callbacks.push(function () {
      var clientCallback = callback;
      return function (msg) {
        self.setRecvBuffer(msg);
        clientCallback();
      };
    }());
  } else {
    //Queue the send to go out __onOpen
    this.send_pending.push({
      buf: this.send_buf,
      cb: callback
    });
  }
};

TWebSocketTransport.prototype.__onOpen = function () {
  var self = this;

  if (this.send_pending.length > 0) {
    //If the user made calls before the connection was fully
    //open, send them now
    this.send_pending.forEach(function (elem) {
      self.socket.send(elem.buf);
      self.callbacks.push(function () {
        var clientCallback = elem.cb;
        return function (msg) {
          self.setRecvBuffer(msg);
          clientCallback();
        };
      }());
    });
    this.send_pending = [];
  }
};

TWebSocketTransport.prototype.__onClose = function (evt) {
  this.__reset(this.url);
};

TWebSocketTransport.prototype.__onMessage = function (evt) {
  if (this.callbacks.length) {
    this.callbacks.shift()(evt.data);
  }
};

TWebSocketTransport.prototype.__onError = function (evt) {
  log.error('websocket: ' + evt.toString());
  this.socket.close();
};
/**
 * Sets the buffer to use when receiving server responses.
 * @param {string} buf - The buffer to receive server responses.
 */


TWebSocketTransport.prototype.setRecvBuffer = function (buf) {
  this.recv_buf = buf;
  this.recv_buf_sz = this.recv_buf.length;
  this.wpos = this.recv_buf.length;
  this.rpos = 0;
};
/**
 * Returns true if the transport is open
 * @readonly
 * @returns {boolean}
 */


TWebSocketTransport.prototype.isOpen = function () {
  return this.socket && this.socket.readyState == this.socket.OPEN;
};
/**
 * Opens the transport connection
 */


TWebSocketTransport.prototype.open = function () {
  //If OPEN/CONNECTING/CLOSING ignore additional opens
  if (this.socket && this.socket.readyState != this.socket.CLOSED) {
    return;
  } //If there is no socket or the socket is closed:


  this.socket = new WebSocket(this.url);
  this.socket.onopen = this.__onOpen.bind(this);
  this.socket.onmessage = this.__onMessage.bind(this);
  this.socket.onerror = this.__onError.bind(this);
  this.socket.onclose = this.__onClose.bind(this);
};
/**
 * Closes the transport connection
 */


TWebSocketTransport.prototype.close = function () {
  this.socket.close();
};
/**
 * Returns the specified number of characters from the response
 * buffer.
 * @param {number} len - The number of characters to return.
 * @returns {string} Characters sent by the server.
 */


TWebSocketTransport.prototype.read = function (len) {
  var avail = this.wpos - this.rpos;

  if (avail === 0) {
    return '';
  }

  var give = len;

  if (avail < len) {
    give = avail;
  }

  var ret = this.read_buf.substr(this.rpos, give);
  this.rpos += give; //clear buf when complete?

  return ret;
};
/**
 * Returns the entire response buffer.
 * @returns {string} Characters sent by the server.
 */


TWebSocketTransport.prototype.readAll = function () {
  return this.recv_buf;
};
/**
 * Sets the send buffer to buf.
 * @param {string} buf - The buffer to send.
 */


TWebSocketTransport.prototype.write = function (buf) {
  this.send_buf = buf;
};
/**
 * Returns the send buffer.
 * @readonly
 * @returns {string} The send buffer.
 */


TWebSocketTransport.prototype.getSendBuffer = function () {
  return this.send_buf;
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\xhr_connection.js":
/*!*********************************************************!*\
  !*** D:/thrift/lib/nodejs/lib/thrift/xhr_connection.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;

var thrift = __webpack_require__(/*! ./thrift */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\thrift.js");

var TBufferedTransport = __webpack_require__(/*! ./buffered_transport */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\buffered_transport.js");

var TJSONProtocol = __webpack_require__(/*! ./json_protocol */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\json_protocol.js");

var InputBufferUnderrunError = __webpack_require__(/*! ./input_buffer_underrun_error */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\input_buffer_underrun_error.js");

var createClient = __webpack_require__(/*! ./create_client */ "D:\\thrift\\lib\\nodejs\\lib\\thrift\\create_client.js");

exports.XHRConnection = XHRConnection;
/**
 * Constructor Function for the XHR Connection.
 * If you do not specify a host and port then XHRConnection will default to the
 * host and port of the page from which this javascript is served.
 * @constructor
 * @param {string} [url] - The URL to connect to.
 * @classdesc TXHRConnection objects provide Thrift end point transport
 *     semantics implemented using XHR.
 * @example
 *     var transport = new Thrift.TXHRConnection('localhost', 9099, {});
 */

function XHRConnection(host, port, options) {
  this.options = options || {};
  this.wpos = 0;
  this.rpos = 0;
  this.useCORS = options && options.useCORS;
  this.send_buf = '';
  this.recv_buf = '';
  this.transport = options.transport || TBufferedTransport;
  this.protocol = options.protocol || TJSONProtocol;
  this.headers = options.headers || {};
  host = host || window.location.host;
  port = port || window.location.port;
  var prefix = options.https ? 'https://' : 'http://';
  var path = options.path || '/';

  if (port === '') {
    port = undefined;
  }

  if (!port || port === 80 || port === '80') {
    this.url = prefix + host + path;
  } else {
    this.url = prefix + host + ':' + port + path;
  } //The sequence map is used to map seqIDs back to the
  //  calling client in multiplexed scenarios


  this.seqId2Service = {};
}

;
util.inherits(XHRConnection, EventEmitter);
/**
* Gets the browser specific XmlHttpRequest Object.
* @returns {object} the browser XHR interface object
*/

XHRConnection.prototype.getXmlHttpRequestObject = function () {
  try {
    return new XMLHttpRequest();
  } catch (e1) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP');
  } catch (e2) {}

  try {
    return new ActiveXObject('Microsoft.XMLHTTP');
  } catch (e3) {}

  throw "Your browser doesn't support XHR.";
};
/**
 * Sends the current XRH request if the transport was created with a URL
 * and the async parameter is false. If the transport was not created with
 * a URL, or the async parameter is True and no callback is provided, or
 * the URL is an empty string, the current send buffer is returned.
 * @param {object} async - If true the current send buffer is returned.
 * @param {object} callback - Optional async completion callback
 * @returns {undefined|string} Nothing or the current send buffer.
 * @throws {string} If XHR fails.
 */


XHRConnection.prototype.flush = function () {
  var self = this;

  if (this.url === undefined || this.url === '') {
    return this.send_buf;
  }

  var xreq = this.getXmlHttpRequestObject();

  if (xreq.overrideMimeType) {
    xreq.overrideMimeType('application/json');
  }

  xreq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      self.setRecvBuffer(this.responseText);
    }
  };

  xreq.open('POST', this.url, true);
  Object.keys(this.headers).forEach(function (headerKey) {
    xreq.setRequestHeader(headerKey, self.headers[headerKey]);
  });
  xreq.send(this.send_buf);
};
/**
 * Sets the buffer to provide the protocol when deserializing.
 * @param {string} buf - The buffer to supply the protocol.
 */


XHRConnection.prototype.setRecvBuffer = function (buf) {
  this.recv_buf = buf;
  this.recv_buf_sz = this.recv_buf.length;
  this.wpos = this.recv_buf.length;
  this.rpos = 0;

  if (Object.prototype.toString.call(buf) == "[object ArrayBuffer]") {
    var data = new Uint8Array(buf);
  }

  var thing = new Buffer(data || buf);
  this.transport.receiver(this.__decodeCallback.bind(this))(thing);
};

XHRConnection.prototype.__decodeCallback = function (transport_with_data) {
  var proto = new this.protocol(transport_with_data);

  try {
    while (true) {
      var header = proto.readMessageBegin();
      var dummy_seqid = header.rseqid * -1;
      var client = this.client; //The Multiplexed Protocol stores a hash of seqid to service names
      //  in seqId2Service. If the SeqId is found in the hash we need to
      //  lookup the appropriate client for this call.
      //  The client var is a single client object when not multiplexing,
      //  when using multiplexing it is a service name keyed hash of client
      //  objects.
      //NOTE: The 2 way interdependencies between protocols, transports,
      //  connections and clients in the Node.js implementation are irregular
      //  and make the implementation difficult to extend and maintain. We
      //  should bring this stuff inline with typical thrift I/O stack
      //  operation soon.
      //  --ra

      var service_name = this.seqId2Service[header.rseqid];

      if (service_name) {
        client = this.client[service_name];
        delete this.seqId2Service[header.rseqid];
      }
      /*jshint -W083 */


      client._reqs[dummy_seqid] = function (err, success) {
        transport_with_data.commitPosition();
        var clientCallback = client._reqs[header.rseqid];
        delete client._reqs[header.rseqid];

        if (clientCallback) {
          clientCallback(err, success);
        }
      };
      /*jshint +W083 */


      if (client['recv_' + header.fname]) {
        client['recv_' + header.fname](proto, header.mtype, dummy_seqid);
      } else {
        delete client._reqs[dummy_seqid];
        this.emit("error", new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function"));
      }
    }
  } catch (e) {
    if (e instanceof InputBufferUnderrunError) {
      transport_with_data.rollbackPosition();
    } else {
      throw e;
    }
  }
};
/**
 * Returns true if the transport is open, XHR always returns true.
 * @readonly
 * @returns {boolean} Always True.
 */


XHRConnection.prototype.isOpen = function () {
  return true;
};
/**
 * Opens the transport connection, with XHR this is a nop.
 */


XHRConnection.prototype.open = function () {};
/**
 * Closes the transport connection, with XHR this is a nop.
 */


XHRConnection.prototype.close = function () {};
/**
 * Returns the specified number of characters from the response
 * buffer.
 * @param {number} len - The number of characters to return.
 * @returns {string} Characters sent by the server.
 */


XHRConnection.prototype.read = function (len) {
  var avail = this.wpos - this.rpos;

  if (avail === 0) {
    return '';
  }

  var give = len;

  if (avail < len) {
    give = avail;
  }

  var ret = this.read_buf.substr(this.rpos, give);
  this.rpos += give; //clear buf when complete?

  return ret;
};
/**
 * Returns the entire response buffer.
 * @returns {string} Characters sent by the server.
 */


XHRConnection.prototype.readAll = function () {
  return this.recv_buf;
};
/**
 * Sets the send buffer to buf.
 * @param {string} buf - The buffer to send.
 */


XHRConnection.prototype.write = function (buf) {
  this.send_buf = buf;
  this.flush();
};
/**
 * Returns the send buffer.
 * @readonly
 * @returns {string} The send buffer.
 */


XHRConnection.prototype.getSendBuffer = function () {
  return this.send_buf;
};
/**
 * Creates a new TXHRTransport object, used by Thrift clients to connect
 *    to Thrift HTTP based servers.
 * @param {string} host - The host name or IP to connect to.
 * @param {number} port - The TCP port to connect to.
 * @param {XHRConnectOptions} options - The configuration options to use.
 * @returns {XHRConnection} The connection object.
 * @see {@link XHRConnectOptions}
 */


exports.createXHRConnection = function (host, port, options) {
  return new XHRConnection(host, port, options);
};

exports.createXHRClient = createClient;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thrift\\node_modules\\browser-or-node\\lib\\index.js":
/*!***********************************************************!*\
  !*** D:/thrift/node_modules/browser-or-node/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && (0, _typeof3["default"])(Symbol.iterator) === "symbol" ? function (obj) {
  return (0, _typeof3["default"])(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : (0, _typeof3["default"])(obj);
};
/* global window self */


var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
/* eslint-disable no-restricted-globals */

var isWebWorker = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope';
/* eslint-enable no-restricted-globals */

var isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
/**
 * @see https://github.com/jsdom/jsdom/releases/tag/12.0.0
 * @see https://github.com/jsdom/jsdom/issues/1537
 */

/* eslint-disable no-undef */

var isJsDom = function isJsDom() {
  return typeof window !== 'undefined' && window.name === 'nodejs' || navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom');
};

exports.isBrowser = isBrowser;
exports.isWebWorker = isWebWorker;
exports.isNode = isNode;
exports.isJsDom = isJsDom;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "D:\\thrift\\node_modules\\isomorphic-ws\\browser.js":
/*!*******************************************************!*\
  !*** D:/thrift/node_modules/isomorphic-ws/browser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/maxogden/websocket-stream/blob/48dc3ddf943e5ada668c31ccd94e9186f02fafbd/ws-fallback.js
var ws = null;

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket;
} else if (typeof MozWebSocket !== 'undefined') {
  ws = MozWebSocket;
} else if (typeof global !== 'undefined') {
  ws = global.WebSocket || global.MozWebSocket;
} else if (typeof window !== 'undefined') {
  ws = window.WebSocket || window.MozWebSocket;
} else if (typeof self !== 'undefined') {
  ws = self.WebSocket || self.MozWebSocket;
}

module.exports = ws;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "D:\\thrift\\node_modules\\node-int64\\Int64.js":
/*!**************************************************!*\
  !*** D:/thrift/node_modules/node-int64/Int64.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

//     Int64.js
//
//     Copyright (c) 2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

/**
 * Support for handling 64-bit int numbers in Javascript (node.js)
 *
 * JS Numbers are IEEE-754 binary double-precision floats, which limits the
 * range of values that can be represented with integer precision to:
 *
 * 2^^53 <= N <= 2^53
 *
 * Int64 objects wrap a node Buffer that holds the 8-bytes of int64 data.  These
 * objects operate directly on the buffer which means that if they are created
 * using an existing buffer then setting the value will modify the Buffer, and
 * vice-versa.
 *
 * Internal Representation
 *
 * The internal buffer format is Big Endian.  I.e. the most-significant byte is
 * at buffer[0], the least-significant at buffer[7].  For the purposes of
 * converting to/from JS native numbers, the value is assumed to be a signed
 * integer stored in 2's complement form.
 *
 * For details about IEEE-754 see:
 * http://en.wikipedia.org/wiki/Double_precision_floating-point_format
 */
// Useful masks and values for bit twiddling
var MASK31 = 0x7fffffff,
    VAL31 = 0x80000000;
var MASK32 = 0xffffffff,
    VAL32 = 0x100000000; // Map for converting hex octets to strings

var _HEX = [];

for (var i = 0; i < 256; i++) {
  _HEX[i] = (i > 0xF ? '' : '0') + i.toString(16);
} //
// Int64
//

/**
 * Constructor accepts any of the following argument types:
 *
 * new Int64(buffer[, offset=0]) - Existing Buffer with byte offset
 * new Int64(Uint8Array[, offset=0]) - Existing Uint8Array with a byte offset
 * new Int64(string)             - Hex string (throws if n is outside int64 range)
 * new Int64(number)             - Number (throws if n is outside int64 range)
 * new Int64(hi, lo)             - Raw bits as two 32-bit values
 */


var Int64 = module.exports = function (a1, a2) {
  if (a1 instanceof Buffer) {
    this.buffer = a1;
    this.offset = a2 || 0;
  } else if (Object.prototype.toString.call(a1) == '[object Uint8Array]') {
    // Under Browserify, Buffers can extend Uint8Arrays rather than an
    // instance of Buffer. We could assume the passed in Uint8Array is actually
    // a buffer but that won't handle the case where a raw Uint8Array is passed
    // in. We construct a new Buffer just in case.
    this.buffer = new Buffer(a1);
    this.offset = a2 || 0;
  } else {
    this.buffer = this.buffer || new Buffer(8);
    this.offset = 0;
    this.setValue.apply(this, arguments);
  }
}; // Max integer value that JS can accurately represent


Int64.MAX_INT = Math.pow(2, 53); // Min integer value that JS can accurately represent

Int64.MIN_INT = -Math.pow(2, 53);
Int64.prototype = {
  constructor: Int64,

  /**
   * Do in-place 2's compliment.  See
   * http://en.wikipedia.org/wiki/Two's_complement
   */
  _2scomp: function _2scomp() {
    var b = this.buffer,
        o = this.offset,
        carry = 1;

    for (var i = o + 7; i >= o; i--) {
      var v = (b[i] ^ 0xff) + carry;
      b[i] = v & 0xff;
      carry = v >> 8;
    }
  },

  /**
   * Set the value. Takes any of the following arguments:
   *
   * setValue(string) - A hexidecimal string
   * setValue(number) - Number (throws if n is outside int64 range)
   * setValue(hi, lo) - Raw bits as two 32-bit values
   */
  setValue: function setValue(hi, lo) {
    var negate = false;

    if (arguments.length == 1) {
      if (typeof hi == 'number') {
        // Simplify bitfield retrieval by using abs() value.  We restore sign
        // later
        negate = hi < 0;
        hi = Math.abs(hi);
        lo = hi % VAL32;
        hi = hi / VAL32;
        if (hi > VAL32) throw new RangeError(hi + ' is outside Int64 range');
        hi = hi | 0;
      } else if (typeof hi == 'string') {
        hi = (hi + '').replace(/^0x/, '');
        lo = hi.substr(-8);
        hi = hi.length > 8 ? hi.substr(0, hi.length - 8) : '';
        hi = parseInt(hi, 16);
        lo = parseInt(lo, 16);
      } else {
        throw new Error(hi + ' must be a Number or String');
      }
    } // Technically we should throw if hi or lo is outside int32 range here, but
    // it's not worth the effort. Anything past the 32'nd bit is ignored.
    // Copy bytes to buffer


    var b = this.buffer,
        o = this.offset;

    for (var i = 7; i >= 0; i--) {
      b[o + i] = lo & 0xff;
      lo = i == 4 ? hi : lo >>> 8;
    } // Restore sign of passed argument


    if (negate) this._2scomp();
  },

  /**
   * Convert to a native JS number.
   *
   * WARNING: Do not expect this value to be accurate to integer precision for
   * large (positive or negative) numbers!
   *
   * @param allowImprecise If true, no check is performed to verify the
   * returned value is accurate to integer precision.  If false, imprecise
   * numbers (very large positive or negative numbers) will be forced to +/-
   * Infinity.
   */
  toNumber: function toNumber(allowImprecise) {
    var b = this.buffer,
        o = this.offset; // Running sum of octets, doing a 2's complement

    var negate = b[o] & 0x80,
        x = 0,
        carry = 1;

    for (var i = 7, m = 1; i >= 0; i--, m *= 256) {
      var v = b[o + i]; // 2's complement for negative numbers

      if (negate) {
        v = (v ^ 0xff) + carry;
        carry = v >> 8;
        v = v & 0xff;
      }

      x += v * m;
    } // Return Infinity if we've lost integer precision


    if (!allowImprecise && x >= Int64.MAX_INT) {
      return negate ? -Infinity : Infinity;
    }

    return negate ? -x : x;
  },

  /**
   * Convert to a JS Number. Returns +/-Infinity for values that can't be
   * represented to integer precision.
   */
  valueOf: function valueOf() {
    return this.toNumber(false);
  },

  /**
   * Return string value
   *
   * @param radix Just like Number#toString()'s radix
   */
  toString: function toString(radix) {
    return this.valueOf().toString(radix || 10);
  },

  /**
   * Return a string showing the buffer octets, with MSB on the left.
   *
   * @param sep separator string. default is '' (empty string)
   */
  toOctetString: function toOctetString(sep) {
    var out = new Array(8);
    var b = this.buffer,
        o = this.offset;

    for (var i = 0; i < 8; i++) {
      out[i] = _HEX[b[o + i]];
    }

    return out.join(sep || '');
  },

  /**
   * Returns the int64's 8 bytes in a buffer.
   *
   * @param {bool} [rawBuffer=false]  If no offset and this is true, return the internal buffer.  Should only be used if
   *                                  you're discarding the Int64 afterwards, as it breaks encapsulation.
   */
  toBuffer: function toBuffer(rawBuffer) {
    if (rawBuffer && this.offset === 0) return this.buffer;
    var out = new Buffer(8);
    this.buffer.copy(out, 0, this.offset, this.offset + 8);
    return out;
  },

  /**
   * Copy 8 bytes of int64 into target buffer at target offset.
   *
   * @param {Buffer} targetBuffer       Buffer to copy into.
   * @param {number} [targetOffset=0]   Offset into target buffer.
   */
  copy: function copy(targetBuffer, targetOffset) {
    this.buffer.copy(targetBuffer, targetOffset || 0, this.offset, this.offset + 8);
  },

  /**
   * Returns a number indicating whether this comes before or after or is the
   * same as the other in sort order.
   *
   * @param {Int64} other  Other Int64 to compare.
   */
  compare: function compare(other) {
    // If sign bits differ ...
    if ((this.buffer[this.offset] & 0x80) != (other.buffer[other.offset] & 0x80)) {
      return other.buffer[other.offset] - this.buffer[this.offset];
    } // otherwise, compare bytes lexicographically


    for (var i = 0; i < 8; i++) {
      if (this.buffer[this.offset + i] !== other.buffer[other.offset + i]) {
        return this.buffer[this.offset + i] - other.buffer[other.offset + i];
      }
    }

    return 0;
  },

  /**
   * Returns a boolean indicating if this integer is equal to other.
   *
   * @param {Int64} other  Other Int64 to compare.
   */
  equals: function equals(other) {
    return this.compare(other) === 0;
  },

  /**
   * Pretty output in console.log
   */
  inspect: function inspect() {
    return '[Int64 value:' + this + ' octets:' + this.toOctetString(' ') + ']';
  }
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "D:\\thrift\\node_modules\\q\\q.js":
/*!*************************************!*\
  !*** D:/thrift/node_modules/q/q.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

// vim:ts=4:sts=4:sw=4:

/*!
 *
 * Copyright 2009-2017 Kris Kowal under the terms of the MIT
 * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function (definition) {
  "use strict"; // This file will function properly as a <script> tag, or a module
  // using CommonJS and NodeJS or RequireJS module formats.  In
  // Common/Node/RequireJS, the module exports the Q API and when
  // executed as a simple <script>, it creates a Q global instead.
  // Montage Require

  if (typeof bootstrap === "function") {
    bootstrap("promise", definition); // CommonJS
  } else if (( false ? undefined : (0, _typeof2["default"])(exports)) === "object" && ( false ? undefined : (0, _typeof2["default"])(module)) === "object") {
    module.exports = definition(); // RequireJS
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // SES (Secure EcmaScript)
  } else { var previousQ, global; }
})(function () {
  "use strict";

  var hasStacks = false;

  try {
    throw new Error();
  } catch (e) {
    hasStacks = !!e.stack;
  } // All code after this point will be filtered from stack traces reported
  // by Q.


  var qStartingLine = captureLine();
  var qFileName; // shims
  // used for fallback in "allResolved"

  var noop = function noop() {}; // Use the fastest possible means to execute a task in a future turn
  // of the event loop.


  var nextTick = function () {
    // linked list of tasks (single, with head node)
    var head = {
      task: void 0,
      next: null
    };
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false; // queue for late tasks, used by unhandled rejection tracking

    var laterQueue = [];

    function flush() {
      /* jshint loopfunc: true */
      var task, domain;

      while (head.next) {
        head = head.next;
        task = head.task;
        head.task = void 0;
        domain = head.domain;

        if (domain) {
          head.domain = void 0;
          domain.enter();
        }

        runSingle(task, domain);
      }

      while (laterQueue.length) {
        task = laterQueue.pop();
        runSingle(task);
      }

      flushing = false;
    } // runs a single function in the async queue


    function runSingle(task, domain) {
      try {
        task();
      } catch (e) {
        if (isNodeJS) {
          // In node, uncaught exceptions are considered fatal errors.
          // Re-throw them synchronously to interrupt flushing!
          // Ensure continuation if the uncaught exception is suppressed
          // listening "uncaughtException" events (as domains does).
          // Continue in next event to avoid tick recursion.
          if (domain) {
            domain.exit();
          }

          setTimeout(flush, 0);

          if (domain) {
            domain.enter();
          }

          throw e;
        } else {
          // In browsers, uncaught exceptions are not fatal.
          // Re-throw them asynchronously to avoid slow-downs.
          setTimeout(function () {
            throw e;
          }, 0);
        }
      }

      if (domain) {
        domain.exit();
      }
    }

    nextTick = function nextTick(task) {
      tail = tail.next = {
        task: task,
        domain: isNodeJS && process.domain,
        next: null
      };

      if (!flushing) {
        flushing = true;
        requestTick();
      }
    };

    if ((typeof process === "undefined" ? "undefined" : (0, _typeof2["default"])(process)) === "object" && process.toString() === "[object process]" && process.nextTick) {
      // Ensure Q is in a real Node environment, with a `process.nextTick`.
      // To see through fake Node environments:
      // * Mocha test runner - exposes a `process` global without a `nextTick`
      // * Browserify - exposes a `process.nexTick` function that uses
      //   `setTimeout`. In this case `setImmediate` is preferred because
      //    it is faster. Browserify's `process.toString()` yields
      //   "[object Object]", while in a real Node environment
      //   `process.toString()` yields "[object process]".
      isNodeJS = true;

      requestTick = function requestTick() {
        process.nextTick(flush);
      };
    } else if (typeof setImmediate === "function") {
      // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
      if (typeof window !== "undefined") {
        requestTick = setImmediate.bind(window, flush);
      } else {
        requestTick = function requestTick() {
          setImmediate(flush);
        };
      }
    } else if (typeof MessageChannel !== "undefined") {
      // modern browsers
      // http://www.nonblocking.io/2011/06/windownexttick.html
      var channel = new MessageChannel(); // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
      // working message ports the first time a page loads.

      channel.port1.onmessage = function () {
        requestTick = requestPortTick;
        channel.port1.onmessage = flush;
        flush();
      };

      var requestPortTick = function requestPortTick() {
        // Opera requires us to provide a message payload, regardless of
        // whether we use it.
        channel.port2.postMessage(0);
      };

      requestTick = function requestTick() {
        setTimeout(flush, 0);
        requestPortTick();
      };
    } else {
      // old browsers
      requestTick = function requestTick() {
        setTimeout(flush, 0);
      };
    } // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.


    nextTick.runAfter = function (task) {
      laterQueue.push(task);

      if (!flushing) {
        flushing = true;
        requestTick();
      }
    };

    return nextTick;
  }(); // Attempt to make generics safe in the face of downstream
  // modifications.
  // There is no situation where this is necessary.
  // If you need a security guarantee, these primordials need to be
  // deeply frozen anyway, and if you don’t need a security guarantee,
  // this is just plain paranoid.
  // However, this **might** have the nice side-effect of reducing the size of
  // the minified code by reducing x.call() to merely x()
  // See Mark Miller’s explanation of what this does.
  // http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming


  var call = Function.call;

  function uncurryThis(f) {
    return function () {
      return call.apply(f, arguments);
    };
  } // This is equivalent, but slower:
  // uncurryThis = Function_bind.bind(Function_bind.call);
  // http://jsperf.com/uncurrythis


  var array_slice = uncurryThis(Array.prototype.slice);
  var array_reduce = uncurryThis(Array.prototype.reduce || function (callback, basis) {
    var index = 0,
        length = this.length; // concerning the initial value, if one is not provided

    if (arguments.length === 1) {
      // seek to the first value in the array, accounting
      // for the possibility that is is a sparse array
      do {
        if (index in this) {
          basis = this[index++];
          break;
        }

        if (++index >= length) {
          throw new TypeError();
        }
      } while (1);
    } // reduce


    for (; index < length; index++) {
      // account for the possibility that the array is sparse
      if (index in this) {
        basis = callback(basis, this[index], index);
      }
    }

    return basis;
  });
  var array_indexOf = uncurryThis(Array.prototype.indexOf || function (value) {
    // not a very good shim, but good enough for our one use of it
    for (var i = 0; i < this.length; i++) {
      if (this[i] === value) {
        return i;
      }
    }

    return -1;
  });
  var array_map = uncurryThis(Array.prototype.map || function (callback, thisp) {
    var self = this;
    var collect = [];
    array_reduce(self, function (undefined, value, index) {
      collect.push(callback.call(thisp, value, index, self));
    }, void 0);
    return collect;
  });

  var object_create = Object.create || function (prototype) {
    function Type() {}

    Type.prototype = prototype;
    return new Type();
  };

  var object_defineProperty = Object.defineProperty || function (obj, prop, descriptor) {
    obj[prop] = descriptor.value;
    return obj;
  };

  var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

  var object_keys = Object.keys || function (object) {
    var keys = [];

    for (var key in object) {
      if (object_hasOwnProperty(object, key)) {
        keys.push(key);
      }
    }

    return keys;
  };

  var object_toString = uncurryThis(Object.prototype.toString);

  function isObject(value) {
    return value === Object(value);
  } // generator related shims
  // FIXME: Remove this function once ES6 generators are in SpiderMonkey.


  function isStopIteration(exception) {
    return object_toString(exception) === "[object StopIteration]" || exception instanceof QReturnValue;
  } // FIXME: Remove this helper and Q.return once ES6 generators are in
  // SpiderMonkey.


  var QReturnValue;

  if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
  } else {
    QReturnValue = function QReturnValue(value) {
      this.value = value;
    };
  } // long stack traces


  var STACK_JUMP_SEPARATOR = "From previous event:";

  function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks && promise.stack && (0, _typeof2["default"])(error) === "object" && error !== null && error.stack) {
      var stacks = [];

      for (var p = promise; !!p; p = p.source) {
        if (p.stack && (!error.__minimumStackCounter__ || error.__minimumStackCounter__ > p.stackCounter)) {
          object_defineProperty(error, "__minimumStackCounter__", {
            value: p.stackCounter,
            configurable: true
          });
          stacks.unshift(p.stack);
        }
      }

      stacks.unshift(error.stack);
      var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
      var stack = filterStackString(concatedStacks);
      object_defineProperty(error, "stack", {
        value: stack,
        configurable: true
      });
    }
  }

  function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];

    for (var i = 0; i < lines.length; ++i) {
      var line = lines[i];

      if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
        desiredLines.push(line);
      }
    }

    return desiredLines.join("\n");
  }

  function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 || stackLine.indexOf("(node.js:") !== -1;
  }

  function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);

    if (attempt1) {
      return [attempt1[1], Number(attempt1[2])];
    } // Anonymous functions: "at filename:lineNumber:columnNumber"


    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);

    if (attempt2) {
      return [attempt2[1], Number(attempt2[2])];
    } // Firefox style: "function@filename:lineNumber or @filename:lineNumber"


    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);

    if (attempt3) {
      return [attempt3[1], Number(attempt3[2])];
    }
  }

  function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
      return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];
    return fileName === qFileName && lineNumber >= qStartingLine && lineNumber <= qEndingLine;
  } // discover own file name and line number range for filtering stack
  // traces


  function captureLine() {
    if (!hasStacks) {
      return;
    }

    try {
      throw new Error();
    } catch (e) {
      var lines = e.stack.split("\n");
      var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
      var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);

      if (!fileNameAndLineNumber) {
        return;
      }

      qFileName = fileNameAndLineNumber[0];
      return fileNameAndLineNumber[1];
    }
  }

  function deprecate(callback, name, alternative) {
    return function () {
      if (typeof console !== "undefined" && typeof console.warn === "function") {
        console.warn(name + " is deprecated, use " + alternative + " instead.", new Error("").stack);
      }

      return callback.apply(callback, arguments);
    };
  } // end of shims
  // beginning of real work

  /**
   * Constructs a promise for an immediate reference, passes promises through, or
   * coerces promises from different systems.
   * @param value immediate reference or promise
   */


  function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
      return value;
    } // assimilate thenables


    if (isPromiseAlike(value)) {
      return coerce(value);
    } else {
      return fulfill(value);
    }
  }

  Q.resolve = Q;
  /**
   * Performs a task in a future turn of the event loop.
   * @param {Function} task
   */

  Q.nextTick = nextTick;
  /**
   * Controls whether or not long stack traces will be on
   */

  Q.longStackSupport = false;
  /**
   * The counter is used to determine the stopping point for building
   * long stack traces. In makeStackTraceLong we walk backwards through
   * the linked list of promises, only stacks which were created before
   * the rejection are concatenated.
   */

  var longStackCounter = 1; // enable long stacks if Q_DEBUG is set

  if ((typeof process === "undefined" ? "undefined" : (0, _typeof2["default"])(process)) === "object" && process && process.env && process.env.Q_DEBUG) {
    Q.longStackSupport = true;
  }
  /**
   * Constructs a {promise, resolve, reject} object.
   *
   * `resolve` is a callback to invoke with a more resolved value for the
   * promise. To fulfill the promise, invoke `resolve` with any value that is
   * not a thenable. To reject the promise, invoke `resolve` with a rejected
   * thenable, or invoke `reject` with the reason directly. To resolve the
   * promise to another thenable, thus putting it in the same state, invoke
   * `resolve` with that other thenable.
   */


  Q.defer = defer;

  function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [],
        progressListeners = [],
        resolvedPromise;
    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
      var args = array_slice(arguments);

      if (messages) {
        messages.push(args);

        if (op === "when" && operands[1]) {
          // progress operand
          progressListeners.push(operands[1]);
        }
      } else {
        Q.nextTick(function () {
          resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
        });
      }
    }; // XXX deprecated


    promise.valueOf = function () {
      if (messages) {
        return promise;
      }

      var nearerValue = nearer(resolvedPromise);

      if (isPromise(nearerValue)) {
        resolvedPromise = nearerValue; // shorten chain
      }

      return nearerValue;
    };

    promise.inspect = function () {
      if (!resolvedPromise) {
        return {
          state: "pending"
        };
      }

      return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
      try {
        throw new Error();
      } catch (e) {
        // NOTE: don't try to use `Error.captureStackTrace` or transfer the
        // accessor around; that causes memory leaks as per GH-111. Just
        // reify the stack trace as a string ASAP.
        //
        // At the same time, cut off the first line; it's always just
        // "[object Promise]\n", as per the `toString`.
        promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
        promise.stackCounter = longStackCounter++;
      }
    } // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.


    function become(newPromise) {
      resolvedPromise = newPromise;

      if (Q.longStackSupport && hasStacks) {
        // Only hold a reference to the new promise if long stacks
        // are enabled to reduce memory usage
        promise.source = newPromise;
      }

      array_reduce(messages, function (undefined, message) {
        Q.nextTick(function () {
          newPromise.promiseDispatch.apply(newPromise, message);
        });
      }, void 0);
      messages = void 0;
      progressListeners = void 0;
    }

    deferred.promise = promise;

    deferred.resolve = function (value) {
      if (resolvedPromise) {
        return;
      }

      become(Q(value));
    };

    deferred.fulfill = function (value) {
      if (resolvedPromise) {
        return;
      }

      become(fulfill(value));
    };

    deferred.reject = function (reason) {
      if (resolvedPromise) {
        return;
      }

      become(reject(reason));
    };

    deferred.notify = function (progress) {
      if (resolvedPromise) {
        return;
      }

      array_reduce(progressListeners, function (undefined, progressListener) {
        Q.nextTick(function () {
          progressListener(progress);
        });
      }, void 0);
    };

    return deferred;
  }
  /**
   * Creates a Node-style callback that will resolve or reject the deferred
   * promise.
   * @returns a nodeback
   */


  defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
      if (error) {
        self.reject(error);
      } else if (arguments.length > 2) {
        self.resolve(array_slice(arguments, 1));
      } else {
        self.resolve(value);
      }
    };
  };
  /**
   * @param resolver {Function} a function that returns nothing and accepts
   * the resolve, reject, and notify functions for a deferred.
   * @returns a promise that may be resolved with the given resolve and reject
   * functions, or rejected by a thrown exception in resolver
   */


  Q.Promise = promise; // ES6

  Q.promise = promise;

  function promise(resolver) {
    if (typeof resolver !== "function") {
      throw new TypeError("resolver must be a function.");
    }

    var deferred = defer();

    try {
      resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
      deferred.reject(reason);
    }

    return deferred.promise;
  }

  promise.race = race; // ES6

  promise.all = all; // ES6

  promise.reject = reject; // ES6

  promise.resolve = Q; // ES6
  // XXX experimental.  This method is a way to denote that a local value is
  // serializable and should be immediately dispatched to a remote upon request,
  // instead of passing a reference.

  Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
  };

  Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
  };
  /**
   * If two promises eventually fulfill to the same value, promises that value,
   * but otherwise rejects.
   * @param x {Any*}
   * @param y {Any*}
   * @returns {Any*} a promise for x and y if they are the same, but a rejection
   * otherwise.
   *
   */


  Q.join = function (x, y) {
    return Q(x).join(y);
  };

  Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
      if (x === y) {
        // TODO: "===" should be Object.is or equiv
        return x;
      } else {
        throw new Error("Q can't join: not the same: " + x + " " + y);
      }
    });
  };
  /**
   * Returns a promise for the first of an array of promises to become settled.
   * @param answers {Array[Any*]} promises to race
   * @returns {Any*} the first promise to be settled
   */


  Q.race = race;

  function race(answerPs) {
    return promise(function (resolve, reject) {
      // Switch to this once we can assume at least ES5
      // answerPs.forEach(function (answerP) {
      //     Q(answerP).then(resolve, reject);
      // });
      // Use this in the meantime
      for (var i = 0, len = answerPs.length; i < len; i++) {
        Q(answerPs[i]).then(resolve, reject);
      }
    });
  }

  Promise.prototype.race = function () {
    return this.then(Q.race);
  };
  /**
   * Constructs a Promise with a promise descriptor object and optional fallback
   * function.  The descriptor contains methods like when(rejected), get(name),
   * set(name, value), post(name, args), and delete(name), which all
   * return either a value, a promise for a value, or a rejection.  The fallback
   * accepts the operation name, a resolver, and any further arguments that would
   * have been forwarded to the appropriate method above had a method been
   * provided with the proper name.  The API makes no guarantees about the nature
   * of the returned object, apart from that it is usable whereever promises are
   * bought and sold.
   */


  Q.makePromise = Promise;

  function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
      fallback = function fallback(op) {
        return reject(new Error("Promise does not support operation: " + op));
      };
    }

    if (inspect === void 0) {
      inspect = function inspect() {
        return {
          state: "unknown"
        };
      };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
      var result;

      try {
        if (descriptor[op]) {
          result = descriptor[op].apply(promise, args);
        } else {
          result = fallback.call(promise, op, args);
        }
      } catch (exception) {
        result = reject(exception);
      }

      if (resolve) {
        resolve(result);
      }
    };

    promise.inspect = inspect; // XXX deprecated `valueOf` and `exception` support

    if (inspect) {
      var inspected = inspect();

      if (inspected.state === "rejected") {
        promise.exception = inspected.reason;
      }

      promise.valueOf = function () {
        var inspected = inspect();

        if (inspected.state === "pending" || inspected.state === "rejected") {
          return promise;
        }

        return inspected.value;
      };
    }

    return promise;
  }

  Promise.prototype.toString = function () {
    return "[object Promise]";
  };

  Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false; // ensure the untrusted promise makes at most a
    // single call to one of the callbacks

    function _fulfilled(value) {
      try {
        return typeof fulfilled === "function" ? fulfilled(value) : value;
      } catch (exception) {
        return reject(exception);
      }
    }

    function _rejected(exception) {
      if (typeof rejected === "function") {
        makeStackTraceLong(exception, self);

        try {
          return rejected(exception);
        } catch (newException) {
          return reject(newException);
        }
      }

      return reject(exception);
    }

    function _progressed(value) {
      return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
      self.promiseDispatch(function (value) {
        if (done) {
          return;
        }

        done = true;
        deferred.resolve(_fulfilled(value));
      }, "when", [function (exception) {
        if (done) {
          return;
        }

        done = true;
        deferred.resolve(_rejected(exception));
      }]);
    }); // Progress propagator need to be attached in the current tick.

    self.promiseDispatch(void 0, "when", [void 0, function (value) {
      var newValue;
      var threw = false;

      try {
        newValue = _progressed(value);
      } catch (e) {
        threw = true;

        if (Q.onerror) {
          Q.onerror(e);
        } else {
          throw e;
        }
      }

      if (!threw) {
        deferred.notify(newValue);
      }
    }]);
    return deferred.promise;
  };

  Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
  };
  /**
   * Works almost like "finally", but not called for rejections.
   * Original resolution value is passed through callback unaffected.
   * Callback may return a promise that will be awaited for.
   * @param {Function} callback
   * @returns {Q.Promise}
   * @example
   * doSomething()
   *   .then(...)
   *   .tap(console.log)
   *   .then(...);
   */


  Promise.prototype.tap = function (callback) {
    callback = Q(callback);
    return this.then(function (value) {
      return callback.fcall(value).thenResolve(value);
    });
  };
  /**
   * Registers an observer on a promise.
   *
   * Guarantees:
   *
   * 1. that fulfilled and rejected will be called only once.
   * 2. that either the fulfilled callback or the rejected callback will be
   *    called, but not both.
   * 3. that fulfilled and rejected will not be called in this turn.
   *
   * @param value      promise or immediate reference to observe
   * @param fulfilled  function to be called with the fulfilled value
   * @param rejected   function to be called with the rejection exception
   * @param progressed function to be called on any progress notifications
   * @return promise for the return value from the invoked callback
   */


  Q.when = when;

  function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
  }

  Promise.prototype.thenResolve = function (value) {
    return this.then(function () {
      return value;
    });
  };

  Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
  };

  Promise.prototype.thenReject = function (reason) {
    return this.then(function () {
      throw reason;
    });
  };

  Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
  };
  /**
   * If an object is not a promise, it is as "near" as possible.
   * If a promise is rejected, it is as "near" as possible too.
   * If it’s a fulfilled promise, the fulfillment value is nearer.
   * If it’s a deferred promise and the deferred has been resolved, the
   * resolution is "nearer".
   * @param object
   * @returns most resolved (nearest) form of the object
   */
  // XXX should we re-do this?


  Q.nearer = nearer;

  function nearer(value) {
    if (isPromise(value)) {
      var inspected = value.inspect();

      if (inspected.state === "fulfilled") {
        return inspected.value;
      }
    }

    return value;
  }
  /**
   * @returns whether the given object is a promise.
   * Otherwise it is a fulfilled value.
   */


  Q.isPromise = isPromise;

  function isPromise(object) {
    return object instanceof Promise;
  }

  Q.isPromiseAlike = isPromiseAlike;

  function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
  }
  /**
   * @returns whether the given object is a pending promise, meaning not
   * fulfilled or rejected.
   */


  Q.isPending = isPending;

  function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
  }

  Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
  };
  /**
   * @returns whether the given object is a value or fulfilled
   * promise.
   */


  Q.isFulfilled = isFulfilled;

  function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
  }

  Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
  };
  /**
   * @returns whether the given object is a rejected promise.
   */


  Q.isRejected = isRejected;

  function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
  }

  Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
  }; //// BEGIN UNHANDLED REJECTION TRACKING
  // This promise library consumes exceptions thrown in handlers so they can be
  // handled by a subsequent promise.  The exceptions get added to this array when
  // they are created, and removed when they are handled.  Note that in ES6 or
  // shimmed environments, this would naturally be a `Set`.


  var unhandledReasons = [];
  var unhandledRejections = [];
  var reportedUnhandledRejections = [];
  var trackUnhandledRejections = true;

  function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
      trackUnhandledRejections = true;
    }
  }

  function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
      return;
    }

    if ((typeof process === "undefined" ? "undefined" : (0, _typeof2["default"])(process)) === "object" && typeof process.emit === "function") {
      Q.nextTick.runAfter(function () {
        if (array_indexOf(unhandledRejections, promise) !== -1) {
          process.emit("unhandledRejection", reason, promise);
          reportedUnhandledRejections.push(promise);
        }
      });
    }

    unhandledRejections.push(promise);

    if (reason && typeof reason.stack !== "undefined") {
      unhandledReasons.push(reason.stack);
    } else {
      unhandledReasons.push("(no stack) " + reason);
    }
  }

  function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
      return;
    }

    var at = array_indexOf(unhandledRejections, promise);

    if (at !== -1) {
      if ((typeof process === "undefined" ? "undefined" : (0, _typeof2["default"])(process)) === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
          var atReport = array_indexOf(reportedUnhandledRejections, promise);

          if (atReport !== -1) {
            process.emit("rejectionHandled", unhandledReasons[at], promise);
            reportedUnhandledRejections.splice(atReport, 1);
          }
        });
      }

      unhandledRejections.splice(at, 1);
      unhandledReasons.splice(at, 1);
    }
  }

  Q.resetUnhandledRejections = resetUnhandledRejections;

  Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
  };

  Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
  };

  resetUnhandledRejections(); //// END UNHANDLED REJECTION TRACKING

  /**
   * Constructs a rejected promise.
   * @param reason value describing the failure
   */

  Q.reject = reject;

  function reject(reason) {
    var rejection = Promise({
      "when": function when(rejected) {
        // note that the error has been handled
        if (rejected) {
          untrackRejection(this);
        }

        return rejected ? rejected(reason) : this;
      }
    }, function fallback() {
      return this;
    }, function inspect() {
      return {
        state: "rejected",
        reason: reason
      };
    }); // Note that the reason has not been handled.

    trackRejection(rejection, reason);
    return rejection;
  }
  /**
   * Constructs a fulfilled promise for an immediate reference.
   * @param value immediate reference
   */


  Q.fulfill = fulfill;

  function fulfill(value) {
    return Promise({
      "when": function when() {
        return value;
      },
      "get": function get(name) {
        return value[name];
      },
      "set": function set(name, rhs) {
        value[name] = rhs;
      },
      "delete": function _delete(name) {
        delete value[name];
      },
      "post": function post(name, args) {
        // Mark Miller proposes that post with no name should apply a
        // promised function.
        if (name === null || name === void 0) {
          return value.apply(void 0, args);
        } else {
          return value[name].apply(value, args);
        }
      },
      "apply": function apply(thisp, args) {
        return value.apply(thisp, args);
      },
      "keys": function keys() {
        return object_keys(value);
      }
    }, void 0, function inspect() {
      return {
        state: "fulfilled",
        value: value
      };
    });
  }
  /**
   * Converts thenables to Q promises.
   * @param promise thenable promise
   * @returns a Q promise
   */


  function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
      try {
        promise.then(deferred.resolve, deferred.reject, deferred.notify);
      } catch (exception) {
        deferred.reject(exception);
      }
    });
    return deferred.promise;
  }
  /**
   * Annotates an object such that it will never be
   * transferred away from this process over any promise
   * communication channel.
   * @param object
   * @returns promise a wrapping of that object that
   * additionally responds to the "isDef" message
   * without a rejection.
   */


  Q.master = master;

  function master(object) {
    return Promise({
      "isDef": function isDef() {}
    }, function fallback(op, args) {
      return dispatch(object, op, args);
    }, function () {
      return Q(object).inspect();
    });
  }
  /**
   * Spreads the values of a promised array of arguments into the
   * fulfillment callback.
   * @param fulfilled callback that receives variadic arguments from the
   * promised array
   * @param rejected callback that receives the exception if the promise
   * is rejected.
   * @returns a promise for the return value or thrown exception of
   * either callback.
   */


  Q.spread = spread;

  function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
  }

  Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
      return fulfilled.apply(void 0, array);
    }, rejected);
  };
  /**
   * The async function is a decorator for generator functions, turning
   * them into asynchronous generators.  Although generators are only part
   * of the newest ECMAScript 6 drafts, this code does not cause syntax
   * errors in older engines.  This code should continue to work and will
   * in fact improve over time as the language improves.
   *
   * ES6 generators are currently part of V8 version 3.19 with the
   * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
   * for longer, but under an older Python-inspired form.  This function
   * works on both kinds of generators.
   *
   * Decorates a generator function such that:
   *  - it may yield promises
   *  - execution will continue when that promise is fulfilled
   *  - the value of the yield expression will be the fulfilled value
   *  - it returns a promise for the return value (when the generator
   *    stops iterating)
   *  - the decorated function returns a promise for the return value
   *    of the generator or the first rejected promise among those
   *    yielded.
   *  - if an error is thrown in the generator, it propagates through
   *    every following yield until it is caught, or until it escapes
   *    the generator function altogether, and is translated into a
   *    rejection for the promise returned by the decorated generator.
   */


  Q.async = async;

  function async(makeGenerator) {
    return function () {
      // when verb is "send", arg is a value
      // when verb is "throw", arg is an exception
      function continuer(verb, arg) {
        var result; // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
        // engine that has a deployed base of browsers that support generators.
        // However, SM's generators use the Python-inspired semantics of
        // outdated ES6 drafts.  We would like to support ES6, but we'd also
        // like to make it possible to use generators in deployed browsers, so
        // we also support Python-style generators.  At some point we can remove
        // this block.

        if (typeof StopIteration === "undefined") {
          // ES6 Generators
          try {
            result = generator[verb](arg);
          } catch (exception) {
            return reject(exception);
          }

          if (result.done) {
            return Q(result.value);
          } else {
            return when(result.value, callback, errback);
          }
        } else {
          // SpiderMonkey Generators
          // FIXME: Remove this case when SM does ES6 generators.
          try {
            result = generator[verb](arg);
          } catch (exception) {
            if (isStopIteration(exception)) {
              return Q(exception.value);
            } else {
              return reject(exception);
            }
          }

          return when(result, callback, errback);
        }
      }

      var generator = makeGenerator.apply(this, arguments);
      var callback = continuer.bind(continuer, "next");
      var errback = continuer.bind(continuer, "throw");
      return callback();
    };
  }
  /**
   * The spawn function is a small wrapper around async that immediately
   * calls the generator and also ends the promise chain, so that any
   * unhandled errors are thrown instead of forwarded to the error
   * handler. This is useful because it's extremely common to run
   * generators at the top-level to work with libraries.
   */


  Q.spawn = spawn;

  function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
  } // FIXME: Remove this interface once ES6 generators are in SpiderMonkey.

  /**
   * Throws a ReturnValue exception to stop an asynchronous generator.
   *
   * This interface is a stop-gap measure to support generator return
   * values in older Firefox/SpiderMonkey.  In browsers that support ES6
   * generators like Chromium 29, just use "return" in your generator
   * functions.
   *
   * @param value the return value for the surrounding generator
   * @throws ReturnValue exception with the value.
   * @example
   * // ES6 style
   * Q.async(function* () {
   *      var foo = yield getFooPromise();
   *      var bar = yield getBarPromise();
   *      return foo + bar;
   * })
   * // Older SpiderMonkey style
   * Q.async(function () {
   *      var foo = yield getFooPromise();
   *      var bar = yield getBarPromise();
   *      Q.return(foo + bar);
   * })
   */


  Q["return"] = _return;

  function _return(value) {
    throw new QReturnValue(value);
  }
  /**
   * The promised function decorator ensures that any promise arguments
   * are settled and passed as values (`this` is also settled and passed
   * as a value).  It will also ensure that the result of a function is
   * always a promise.
   *
   * @example
   * var add = Q.promised(function (a, b) {
   *     return a + b;
   * });
   * add(Q(a), Q(B));
   *
   * @param {function} callback The function to decorate
   * @returns {function} a function that has been decorated.
   */


  Q.promised = promised;

  function promised(callback) {
    return function () {
      return spread([this, all(arguments)], function (self, args) {
        return callback.apply(self, args);
      });
    };
  }
  /**
   * sends a message to a value in a future turn
   * @param object* the recipient
   * @param op the name of the message operation, e.g., "when",
   * @param args further arguments to be forwarded to the operation
   * @returns result {Promise} a promise for the result of the operation
   */


  Q.dispatch = dispatch;

  function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
  }

  Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
      self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
  };
  /**
   * Gets the value of a property in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of property to get
   * @return promise for the property value
   */


  Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
  };

  Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
  };
  /**
   * Sets the value of a property in a future turn.
   * @param object    promise or immediate reference for object object
   * @param name      name of property to set
   * @param value     new value of property
   * @return promise for the return value
   */


  Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
  };

  Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
  };
  /**
   * Deletes a property in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of property to delete
   * @return promise for the return value
   */


  Q.del = // XXX legacy
  Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
  };

  Promise.prototype.del = // XXX legacy
  Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
  };
  /**
   * Invokes a method in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of method to invoke
   * @param value     a value to post, typically an array of
   *                  invocation arguments for promises that
   *                  are ultimately backed with `resolve` values,
   *                  as opposed to those backed with URLs
   *                  wherein the posted value can be any
   *                  JSON serializable object.
   * @return promise for the return value
   */
  // bound locally because it is used by other methods


  Q.mapply = // XXX As proposed by "Redsandro"
  Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
  };

  Promise.prototype.mapply = // XXX As proposed by "Redsandro"
  Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
  };
  /**
   * Invokes a method in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of method to invoke
   * @param ...args   array of invocation arguments
   * @return promise for the return value
   */


  Q.send = // XXX Mark Miller's proposed parlance
  Q.mcall = // XXX As proposed by "Redsandro"
  Q.invoke = function (object, name
  /*...args*/
  ) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
  };

  Promise.prototype.send = // XXX Mark Miller's proposed parlance
  Promise.prototype.mcall = // XXX As proposed by "Redsandro"
  Promise.prototype.invoke = function (name
  /*...args*/
  ) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
  };
  /**
   * Applies the promised function in a future turn.
   * @param object    promise or immediate reference for target function
   * @param args      array of application arguments
   */


  Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
  };

  Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
  };
  /**
   * Calls the promised function in a future turn.
   * @param object    promise or immediate reference for target function
   * @param ...args   array of application arguments
   */


  Q["try"] = Q.fcall = function (object
  /* ...args*/
  ) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
  };

  Promise.prototype.fcall = function ()
  /*...args*/
  {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
  };
  /**
   * Binds the promised function, transforming return values into a fulfilled
   * promise and thrown errors into a rejected one.
   * @param object    promise or immediate reference for target function
   * @param ...args   array of application arguments
   */


  Q.fbind = function (object
  /*...args*/
  ) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
      return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
    };
  };

  Promise.prototype.fbind = function ()
  /*...args*/
  {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
      return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
    };
  };
  /**
   * Requests the names of the owned properties of a promised
   * object in a future turn.
   * @param object    promise or immediate reference for target object
   * @return promise for the keys of the eventually settled object
   */


  Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
  };

  Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
  };
  /**
   * Turns an array of promises into a promise for an array.  If any of
   * the promises gets rejected, the whole array is rejected immediately.
   * @param {Array*} an array (or promise for an array) of values (or
   * promises for values)
   * @returns a promise for an array of the corresponding values
   */
  // By Mark Miller
  // http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled


  Q.all = all;

  function all(promises) {
    return when(promises, function (promises) {
      var pendingCount = 0;
      var deferred = defer();
      array_reduce(promises, function (undefined, promise, index) {
        var snapshot;

        if (isPromise(promise) && (snapshot = promise.inspect()).state === "fulfilled") {
          promises[index] = snapshot.value;
        } else {
          ++pendingCount;
          when(promise, function (value) {
            promises[index] = value;

            if (--pendingCount === 0) {
              deferred.resolve(promises);
            }
          }, deferred.reject, function (progress) {
            deferred.notify({
              index: index,
              value: progress
            });
          });
        }
      }, void 0);

      if (pendingCount === 0) {
        deferred.resolve(promises);
      }

      return deferred.promise;
    });
  }

  Promise.prototype.all = function () {
    return all(this);
  };
  /**
   * Returns the first resolved promise of an array. Prior rejected promises are
   * ignored.  Rejects only if all promises are rejected.
   * @param {Array*} an array containing values or promises for values
   * @returns a promise fulfilled with the value of the first resolved promise,
   * or a rejected promise if all promises are rejected.
   */


  Q.any = any;

  function any(promises) {
    if (promises.length === 0) {
      return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
      var promise = promises[index];
      pendingCount++;
      when(promise, onFulfilled, onRejected, onProgress);

      function onFulfilled(result) {
        deferred.resolve(result);
      }

      function onRejected(err) {
        pendingCount--;

        if (pendingCount === 0) {
          var rejection = err || new Error("" + err);
          rejection.message = "Q can't get fulfillment value from any promise, all " + "promises were rejected. Last error message: " + rejection.message;
          deferred.reject(rejection);
        }
      }

      function onProgress(progress) {
        deferred.notify({
          index: index,
          value: progress
        });
      }
    }, undefined);
    return deferred.promise;
  }

  Promise.prototype.any = function () {
    return any(this);
  };
  /**
   * Waits for all promises to be settled, either fulfilled or
   * rejected.  This is distinct from `all` since that would stop
   * waiting at the first rejection.  The promise returned by
   * `allResolved` will never be rejected.
   * @param promises a promise for an array (or an array) of promises
   * (or values)
   * @return a promise for an array of promises
   */


  Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");

  function allResolved(promises) {
    return when(promises, function (promises) {
      promises = array_map(promises, Q);
      return when(all(array_map(promises, function (promise) {
        return when(promise, noop, noop);
      })), function () {
        return promises;
      });
    });
  }

  Promise.prototype.allResolved = function () {
    return allResolved(this);
  };
  /**
   * @see Promise#allSettled
   */


  Q.allSettled = allSettled;

  function allSettled(promises) {
    return Q(promises).allSettled();
  }
  /**
   * Turns an array of promises into a promise for an array of their states (as
   * returned by `inspect`) when they have all settled.
   * @param {Array[Any*]} values an array (or promise for an array) of values (or
   * promises for values)
   * @returns {Array[State]} an array of states for the respective values.
   */


  Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
      return all(array_map(promises, function (promise) {
        promise = Q(promise);

        function regardless() {
          return promise.inspect();
        }

        return promise.then(regardless, regardless);
      }));
    });
  };
  /**
   * Captures the failure of a promise, giving an oportunity to recover
   * with a callback.  If the given promise is fulfilled, the returned
   * promise is fulfilled.
   * @param {Any*} promise for something
   * @param {Function} callback to fulfill the returned promise if the
   * given promise is rejected
   * @returns a promise for the return value of the callback
   */


  Q.fail = // XXX legacy
  Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
  };

  Promise.prototype.fail = // XXX legacy
  Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
  };
  /**
   * Attaches a listener that can respond to progress notifications from a
   * promise's originating deferred. This listener receives the exact arguments
   * passed to ``deferred.notify``.
   * @param {Any*} promise for something
   * @param {Function} callback to receive any progress notifications
   * @returns the given promise, unchanged
   */


  Q.progress = progress;

  function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
  }

  Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
  };
  /**
   * Provides an opportunity to observe the settling of a promise,
   * regardless of whether the promise is fulfilled or rejected.  Forwards
   * the resolution to the returned promise when the callback is done.
   * The callback can return a promise to defer completion.
   * @param {Any*} promise
   * @param {Function} callback to observe the resolution of the given
   * promise, takes no arguments.
   * @returns a promise for the resolution of the given promise when
   * ``fin`` is done.
   */


  Q.fin = // XXX legacy
  Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
  };

  Promise.prototype.fin = // XXX legacy
  Promise.prototype["finally"] = function (callback) {
    if (!callback || typeof callback.apply !== "function") {
      throw new Error("Q can't apply finally callback");
    }

    callback = Q(callback);
    return this.then(function (value) {
      return callback.fcall().then(function () {
        return value;
      });
    }, function (reason) {
      // TODO attempt to recycle the rejection with "this".
      return callback.fcall().then(function () {
        throw reason;
      });
    });
  };
  /**
   * Terminates a chain of promises, forcing rejections to be
   * thrown as exceptions.
   * @param {Any*} promise at the end of a chain of promises
   * @returns nothing
   */


  Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
  };

  Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function onUnhandledError(error) {
      // forward to a future turn so that ``when``
      // does not catch it and turn it into a rejection.
      Q.nextTick(function () {
        makeStackTraceLong(error, promise);

        if (Q.onerror) {
          Q.onerror(error);
        } else {
          throw error;
        }
      });
    }; // Avoid unnecessary `nextTick`ing via an unnecessary `when`.


    var promise = fulfilled || rejected || progress ? this.then(fulfilled, rejected, progress) : this;

    if ((typeof process === "undefined" ? "undefined" : (0, _typeof2["default"])(process)) === "object" && process && process.domain) {
      onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
  };
  /**
   * Causes a promise to be rejected if it does not get fulfilled before
   * some milliseconds time out.
   * @param {Any*} promise
   * @param {Number} milliseconds timeout
   * @param {Any*} custom error message or Error object (optional)
   * @returns a promise for the resolution of the given promise if it is
   * fulfilled before the timeout, otherwise rejected.
   */


  Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
  };

  Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
      if (!error || "string" === typeof error) {
        error = new Error(error || "Timed out after " + ms + " ms");
        error.code = "ETIMEDOUT";
      }

      deferred.reject(error);
    }, ms);
    this.then(function (value) {
      clearTimeout(timeoutId);
      deferred.resolve(value);
    }, function (exception) {
      clearTimeout(timeoutId);
      deferred.reject(exception);
    }, deferred.notify);
    return deferred.promise;
  };
  /**
   * Returns a promise for the given value (or promised value), some
   * milliseconds after it resolved. Passes rejections immediately.
   * @param {Any*} promise
   * @param {Number} milliseconds
   * @returns a promise for the resolution of the given promise after milliseconds
   * time has elapsed since the resolution of the given promise.
   * If the given promise rejects, that is passed immediately.
   */


  Q.delay = function (object, timeout) {
    if (timeout === void 0) {
      timeout = object;
      object = void 0;
    }

    return Q(object).delay(timeout);
  };

  Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
      var deferred = defer();
      setTimeout(function () {
        deferred.resolve(value);
      }, timeout);
      return deferred.promise;
    });
  };
  /**
   * Passes a continuation to a Node function, which is called with the given
   * arguments provided as an array, and returns a promise.
   *
   *      Q.nfapply(FS.readFile, [__filename])
   *      .then(function (content) {
   *      })
   *
   */


  Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
  };

  Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * Passes a continuation to a Node function, which is called with the given
   * arguments provided individually, and returns a promise.
   * @example
   * Q.nfcall(FS.readFile, __filename)
   * .then(function (content) {
   * })
   *
   */


  Q.nfcall = function (callback
  /*...args*/
  ) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
  };

  Promise.prototype.nfcall = function ()
  /*...args*/
  {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * Wraps a NodeJS continuation passing function and returns an equivalent
   * version that returns a promise.
   * @example
   * Q.nfbind(FS.readFile, __filename)("utf-8")
   * .then(console.log)
   * .done()
   */


  Q.nfbind = Q.denodeify = function (callback
  /*...args*/
  ) {
    if (callback === undefined) {
      throw new Error("Q can't wrap an undefined function");
    }

    var baseArgs = array_slice(arguments, 1);
    return function () {
      var nodeArgs = baseArgs.concat(array_slice(arguments));
      var deferred = defer();
      nodeArgs.push(deferred.makeNodeResolver());
      Q(callback).fapply(nodeArgs).fail(deferred.reject);
      return deferred.promise;
    };
  };

  Promise.prototype.nfbind = Promise.prototype.denodeify = function ()
  /*...args*/
  {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
  };

  Q.nbind = function (callback, thisp
  /*...args*/
  ) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
      var nodeArgs = baseArgs.concat(array_slice(arguments));
      var deferred = defer();
      nodeArgs.push(deferred.makeNodeResolver());

      function bound() {
        return callback.apply(thisp, arguments);
      }

      Q(bound).fapply(nodeArgs).fail(deferred.reject);
      return deferred.promise;
    };
  };

  Promise.prototype.nbind = function ()
  /*thisp, ...args*/
  {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
  };
  /**
   * Calls a method of a Node-style object that accepts a Node-style
   * callback with a given array of arguments, plus a provided callback.
   * @param object an object that has the named method
   * @param {String} name name of the method of object
   * @param {Array} args arguments to pass to the method; the callback
   * will be provided by Q and appended to these arguments.
   * @returns a promise for the value or error
   */


  Q.nmapply = // XXX As proposed by "Redsandro"
  Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
  };

  Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
  Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * Calls a method of a Node-style object that accepts a Node-style
   * callback, forwarding the given variadic arguments, plus a provided
   * callback argument.
   * @param object an object that has the named method
   * @param {String} name name of the method of object
   * @param ...args arguments to pass to the method; the callback will
   * be provided by Q and appended to these arguments.
   * @returns a promise for the value or error
   */


  Q.nsend = // XXX Based on Mark Miller's proposed "send"
  Q.nmcall = // XXX Based on "Redsandro's" proposal
  Q.ninvoke = function (object, name
  /*...args*/
  ) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
  };

  Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
  Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
  Promise.prototype.ninvoke = function (name
  /*...args*/
  ) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * If a function would like to support both Node continuation-passing-style and
   * promise-returning-style, it can end its internal promise chain with
   * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
   * elects to use a nodeback, the result will be sent there.  If they do not
   * pass a nodeback, they will receive the result promise.
   * @param object a result (or a promise for a result)
   * @param {Function} nodeback a Node.js-style callback
   * @returns either the promise or nothing
   */


  Q.nodeify = nodeify;

  function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
  }

  Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
      this.then(function (value) {
        Q.nextTick(function () {
          nodeback(null, value);
        });
      }, function (error) {
        Q.nextTick(function () {
          nodeback(error);
        });
      });
    } else {
      return this;
    }
  };

  Q.noConflict = function () {
    throw new Error("Q.noConflict only works when Q is used as a global");
  }; // All code before this point will be filtered from stack traces.


  var qEndingLine = captureLine();
  return Q;
});

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! (webpack)/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=index.js.map