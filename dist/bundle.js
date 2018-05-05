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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeChangeHandler = routeChangeHandler;
exports.changeUrl = changeUrl;

var _login = __webpack_require__(8);

var _login2 = _interopRequireDefault(_login);

var _messenger = __webpack_require__(10);

var _messenger2 = _interopRequireDefault(_messenger);

var _pageNotFound = __webpack_require__(14);

var _pageNotFound2 = _interopRequireDefault(_pageNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routeChangeHandler() {
  var pathName = window.location.pathname.slice(1);
  switch (pathName) {
    case "":
    case "login":
      new _login2.default().setupComponent();
      break;
    case "messenger":
      new _messenger2.default().setupComponent();
      break;
    default:
      new _pageNotFound2.default().setupComponent();
  }
}

function changeUrl(routeParam) {
  window.location.pathname = routeParam;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var users = exports.users = [{
  id: "0",
  userName: "macjej",
  password: "test",
  name: "Maciej",
  surname: "Rajtar",
  friends: ["1", "2"],
  auth: null
}, {
  id: "1",
  userName: "john1234",
  name: "John",
  password: "test",
  surname: "Cena",
  friends: ["0", "2"],
  auth: null
}, {
  id: "2",
  userName: "test1234",
  password: "test",
  name: "Test",
  surname: "Test2",
  friends: ["0", "1"],
  auth: null
}];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _router = __webpack_require__(0);

var _header = __webpack_require__(15);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_setupPageWrapper();
_setupHeader();
_setupContent();
_setupRouter();

function _setupPageWrapper() {
  var pageWrapper = document.createElement("div");
  pageWrapper.setAttribute("id", "page-wrapper");
  document.body.appendChild(pageWrapper);
}

function _setupHeader() {
  var pageWrapper = document.getElementById("page-wrapper");
  var header = document.createElement("div");
  header.setAttribute("id", "page-header");
  header.setAttribute("class", "page-header");
  header.innerHTML = _header2.default;
  pageWrapper.appendChild(header);
}

function _setupContent() {
  var pageWrapper = document.getElementById("page-wrapper");
  var content = document.createElement("div");
  content.setAttribute("id", "page-content");
  content.setAttribute("class", "page-content");
  pageWrapper.appendChild(content);
}

function _setupRouter() {
  (0, _router.routeChangeHandler)();
}

/*
  TODO:
  USERS MANAGEMENT, - DONE
  BETTER REDIRECTS (IT STARTS WITH 404), - DONE
  LOAD TEMPLATES IN JS FILE, - DONE
  RESEARCH USAGE OF "TEMPLATE" TAG - DONE
  BACKEND,
  ADD GUEST ACCOUNT ?,
  ADD DEFAULT BOT,
*/

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  background: #677077;\n  color: #f2b632; }\n\n.page-wrapper {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  align-items: center; }\n\n.page-header {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 40px;\n  background: #f2b632;\n  padding: 10px; }\n  .page-header .item {\n    font-size: 18px;\n    color: #677077;\n    font-family: \"Lato\";\n    padding: 4px;\n    border-bottom: 2px solid #f2b632;\n    cursor: pointer;\n    text-decoration: none; }\n    .page-header .item:hover {\n      border-bottom: 2px solid #252839; }\n\n.page-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: calc(100vh - 60px); }\n  .page-content .login-page {\n    display: flex;\n    background: #252839;\n    padding: 20px;\n    flex-direction: column;\n    border: 5px solid #f2b632; }\n    .page-content .login-page .field {\n      padding: 4px;\n      text-align: center;\n      font-size: 18px;\n      font-weight: bold; }\n      .page-content .login-page .field input {\n        display: block;\n        margin-top: 10px;\n        border: 0px;\n        padding: 4px;\n        font-size: 16px;\n        border: 2px solid #f2b632; }\n      .page-content .login-page .field button {\n        border: 2px solid #f2b632;\n        background: white;\n        padding: 4px 10px;\n        cursor: pointer;\n        transition: 0.5s; }\n        .page-content .login-page .field button:hover {\n          background: #f2b632;\n          transition: 0.5s;\n          border: 2px solid white; }\n  .page-content .messenger-page {\n    max-width: 1200px;\n    width: 100%;\n    height: calc(100vh - 60px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column; }\n    .page-content .messenger-page .messenger-container {\n      flex-direction: row;\n      width: 100%;\n      height: 100%;\n      flex-wrap: nowrap;\n      display: flex; }\n      .page-content .messenger-page .messenger-container .messages {\n        background: #b5b5b7;\n        display: flex;\n        flex: 1;\n        height: 100%;\n        flex-direction: column;\n        padding: 10px;\n        box-sizing: border-box;\n        overflow-y: scroll; }\n        .page-content .messenger-page .messenger-container .messages .message {\n          background: #252839;\n          display: inline-block;\n          padding: 4px 10px;\n          max-width: 200px;\n          min-width: 150px;\n          margin: 4px 0px;\n          border-radius: 8px; }\n          .page-content .messenger-page .messenger-container .messages .message.message-yours {\n            align-self: flex-end;\n            text-align: right; }\n          .page-content .messenger-page .messenger-container .messages .message .date {\n            font-size: 11px;\n            text-align: right;\n            color: white; }\n      .page-content .messenger-page .messenger-container .friends-container {\n        height: 100%;\n        background: #252839;\n        max-width: 300px;\n        flex: 1; }\n        .page-content .messenger-page .messenger-container .friends-container .friend {\n          width: 100%;\n          height: 70px;\n          color: white;\n          padding: 10px;\n          display: flex;\n          flex-direction: row;\n          box-sizing: border-box;\n          border-bottom: 5px solid #677077;\n          cursor: pointer; }\n          .page-content .messenger-page .messenger-container .friends-container .friend .friend-initials {\n            display: flex;\n            justify-content: center;\n            border-radius: 50%;\n            height: 40px;\n            width: 40px;\n            background: white;\n            text-align: center;\n            color: darkblue;\n            padding-top: 11px;\n            box-sizing: border-box;\n            font-weight: bold; }\n          .page-content .messenger-page .messenger-container .friends-container .friend .frient-message-name-container {\n            display: flex;\n            flex-direction: column;\n            padding-left: 10px; }\n    .page-content .messenger-page .message-bar {\n      display: flex;\n      width: 100%;\n      align-self: flex-end;\n      padding: 10px;\n      background: #f2b632;\n      box-sizing: border-box; }\n      .page-content .messenger-page .message-bar input {\n        width: 100%;\n        padding: 2px;\n        font-size: 16px;\n        text-align: right; }\n      .page-content .messenger-page .message-bar button {\n        border: 2px solid #677077;\n        background: white;\n        padding: 4px 10px;\n        cursor: pointer;\n        transition: 0.5s;\n        margin-left: 10px; }\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _login = __webpack_require__(9);

var _login2 = _interopRequireDefault(_login);

var _router = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = function () {
  function Login() {
    _classCallCheck(this, Login);
  }

  _createClass(Login, [{
    key: "setupComponent",
    value: function setupComponent() {
      this._loadTemplate();
    }
  }, {
    key: "_loadTemplate",
    value: function _loadTemplate() {
      var pageWrapper = document.getElementById("page-content");
      pageWrapper.innerHTML = "";
      var loginPage = document.createElement("div");
      loginPage.setAttribute("class", "login-page");
      loginPage.setAttribute("id", "login-page");
      loginPage.innerHTML = "<div class='field'>" + "Login:" + "<input type='text' id='login-input'>" + "</div>" + "<div class='field'>" + "Password:" + "<input type='password' id='password-input'>" + "</div>" + "<div class='field'>" + "<button id='login-button' class='button'>" + "Login" + "</button>" + "</div>";

      document.addEventListener("click", function (e) {
        if (e.target && e.target.id == "login-button") {
          this._handleLogin();
        }
      }.bind(this));
      pageWrapper.appendChild(loginPage);
    }
  }, {
    key: "_handleLogin",
    value: function _handleLogin() {
      var login = document.getElementById("login-input").value;
      var password = document.getElementById("password-input").value;
      var checkLogin = (0, _login2.default)(login, password);
      if (checkLogin) {
        (0, _router.changeUrl)("messenger");
      }
    }
  }]);

  return Login;
}();

exports.default = Login;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkLogin;

var _users = __webpack_require__(1);

function checkLogin(login, password) {
  var req = new XMLHttpRequest();
  req.open("POST", "http://188.116.53.247:3000", true);
  var loginObject = {
    type: "login",
    login: login,
    password: password
  };
  /* eslint-disable */
  console.log("send");
  console.log(loginObject);
  /* eslint-enable */
  req.send(JSON.stringify(loginObject));
  var user = _users.users.find(function (user) {
    return user.userName === login && user.password === password;
  });
  if (user) {
    var auth = generateAuth(user); //WILL BE DONE ON BACKEND
    localStorage.setItem("whatsDownAuth", auth);
    localStorage.setItem("whatsDownUserId", user.id);
    localStorage.setItem("whatsDownUserName", user.userName);
    localStorage.setItem("whatsDownUserFriends", user.friends);
    // debugger;
    return user.id;
  }
  return false;
}

function generateAuth(user) {
  //WILL BE DONE BACKEND
  var chars = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890".split("");
  var auth = "";
  for (var i = 0; i < 20; i++) {
    auth += chars[Math.floor(Math.random() * 36)];
  }
  user.auth = auth;
  return auth;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _friends = __webpack_require__(11);

var _friends2 = _interopRequireDefault(_friends);

var _messages = __webpack_require__(12);

var _messages2 = _interopRequireDefault(_messages);

var _router = __webpack_require__(0);

var _users = __webpack_require__(1);

var _messages3 = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userId = localStorage.getItem("whatsDownUserId");
var friendId = null;
var messagesComponent = null;
var friendsComponent = null;

var Messenger = function () {
  function Messenger() {
    _classCallCheck(this, Messenger);
  }

  _createClass(Messenger, [{
    key: "setupComponent",
    value: function setupComponent() {
      if (!localStorage.getItem("whatsDownAuth")) {
        (0, _router.changeUrl)("login");
      }
      this._loadTemplate();
      this._setupFriendsComponent();
      this._setupMessagesComponent();
      this._displayLastMessages();
    }
  }, {
    key: "_setupFriendsComponent",
    value: function _setupFriendsComponent() {
      var userFriends = JSON.parse("[" + localStorage.getItem("whatsDownUserFriends") + "]");
      var mappedFriends = userFriends.map(function (friend) {
        return friend.toString();
      });
      var friendsListIds = mappedFriends.filter(function (friend) {
        return _users.users.find(function (user) {
          return user.id === friend;
        });
      });
      var friends = _users.users.filter(function (friend) {
        return friendsListIds.some(function (friendId) {
          return friendId === friend.id;
        });
      });
      friendsComponent = new _friends2.default(friends);
      friendId = friends[0].id;

      friendsComponent.setupComponent();

      var friendsElement = document.getElementById("friends");
      friendsElement.addEventListener("click", function (e) {
        if (e.target && e.target.id) {
          this._onFriendClick(e.target.id);
        }
      }.bind(this));
    }
  }, {
    key: "_setupMessagesComponent",
    value: function _setupMessagesComponent() {
      messagesComponent = new _messages2.default(_messages3.messages.find(function (message) {
        return message.userIds.includes(userId);
      }));
      messagesComponent.setupComponent();
    }
  }, {
    key: "_displayLastMessages",
    value: function _displayLastMessages() {
      var messages = _messages3.messages.filter(function (message) {
        return message.userIds.includes(userId);
      });
      messages.map(function (messageObj) {
        var messagesLength = messageObj.messages.length;
        var friendId = messageObj.userIds.find(function (id) {
          return id !== userId;
        });
        friendsComponent.updateLastMessage(messageObj.messages[messagesLength - 1], friendId);
      });
    }
  }, {
    key: "_loadTemplate",
    value: function _loadTemplate() {
      var pageWrapper = document.getElementById("page-content");
      var messangerPage = document.createElement("div");
      messangerPage.setAttribute("id", "messenger-page");
      messangerPage.setAttribute("class", "messenger-page");
      messangerPage.innerHTML = "<div class='messenger-container'>" + "<div class='friends-container' id='friends-container'></div>" + "<div class='messages' id='messages'></div>" + "</div>" + "<div class='message-bar'>" + "<input type='text' id='message-input'>" + "<button id='send-button'>" + "Send" + "</button>" + "</div>";

      document.addEventListener("keydown", function (e) {
        if (e.target && e.target.id == "message-input") {
          this._onKeyPress(e);
        }
      }.bind(this));

      document.addEventListener("click", function (e) {
        if (e.target && e.target.id == "send-button") {
          this._onSend();
        }
      }.bind(this));
      pageWrapper.appendChild(messangerPage);
    }
  }, {
    key: "_onSend",
    value: function _onSend() {
      var message = { message: document.getElementById("message-input").value };
      if (message) {
        message["ownerId"] = userId;
        message["date"] = new Date();
        _messages3.messages.push(message);
        document.getElementById("message-input").value = null;
        messagesComponent._addMessage(message);
        friendsComponent.updateLastMessage(message, friendId);
      }
    }
  }, {
    key: "_onKeyPress",
    value: function _onKeyPress(event) {
      if (event.code === "Enter") {
        this._onSend();
      }
    }
  }, {
    key: "_onFriendClick",
    value: function _onFriendClick(friend) {
      var clickedFriendId = friend.slice(friend.indexOf("-") + 1);
      if (clickedFriendId !== friendId) {
        messagesComponent = new _messages2.default(_messages3.messages.find(function (message) {
          return message.userIds.includes(clickedFriendId);
        }));
        messagesComponent.setupComponent();
        friendId = clickedFriendId;
      }
    }
  }]);

  return Messenger;
}();

exports.default = Messenger;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userId = localStorage.getItem("whatsDownUserId");

var Friends = function () {
  function Friends(data) {
    _classCallCheck(this, Friends);

    this.friendsList = data;
  }

  _createClass(Friends, [{
    key: "setupComponent",
    value: function setupComponent() {
      this._loadTemplate();
      this._loadFriends();
    }
  }, {
    key: "_loadTemplate",
    value: function _loadTemplate() {
      var friendsContainer = document.getElementById("friends-container");
      var friends = "<div class='friends' id='friends'>" + "</div>";
      friendsContainer.innerHTML = friends;
    }
  }, {
    key: "_loadFriends",
    value: function _loadFriends() {
      var _this = this;

      var friendsElement = document.getElementById("friends");
      this.friendsList.map(function (friend) {
        return _this._loadFriend(friend, friendsElement);
      });
    }
  }, {
    key: "_loadFriend",
    value: function _loadFriend(friend, friendsElement) {
      var friendContainer = document.createElement("div");
      friendContainer.setAttribute("class", "friend");
      friendContainer.setAttribute("id", "friend-" + friend.id);

      var friendInitialsElement = document.createElement("div");
      friendInitialsElement.setAttribute("class", "friend-initials");
      var friendInitials = friend.name.charAt(0) + friend.surname.charAt(0);
      friendInitialsElement.innerHTML = friendInitials;
      friendContainer.appendChild(friendInitialsElement);

      var messageNameContainer = document.createElement("div");
      messageNameContainer.setAttribute("class", "friend-message-name-container");

      var friendMessage = document.createElement("div");
      friendMessage.setAttribute("class", "friend-recent-message");

      var friendName = document.createElement("div");
      friendName.setAttribute("class", "friend-name");
      friendName.innerHTML = friend.name + " " + friend.surname;
      messageNameContainer.appendChild(friendName);
      messageNameContainer.appendChild(friendMessage);

      friendContainer.appendChild(messageNameContainer);
      friendsElement.appendChild(friendContainer);
    }
  }, {
    key: "updateLastMessage",
    value: function updateLastMessage(message, friendId) {
      var messageElement = document.querySelector("#friend-" + (friendId || message.ownerId) + " .friend-message-name-container .friend-recent-message");
      if (!messageElement) {
        messageElement = document.querySelector("#friend-" + userId + " .friend-message-name-container .friend-recent-message");
      }
      var dateElement = document.createElement("div");
      dateElement.setAttribute("class", "friend-recent-message-date");
      dateElement.innerHTML = message.date;
      messageElement.innerHTML = message.message;
      messageElement.appendChild(dateElement);
    }
  }]);

  return Friends;
}();

exports.default = Friends;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userId = null;

var Messages = function () {
  function Messages(data) {
    _classCallCheck(this, Messages);

    this.messagesArray = data.messages;
  }

  _createClass(Messages, [{
    key: "setupComponent",
    value: function setupComponent() {
      this._loadTemplate();
      userId = localStorage.getItem("whatsDownUserId");
      this._loadMessages();
    }
  }, {
    key: "_loadTemplate",
    value: function _loadTemplate() {
      var pageWrapper = document.getElementById("messages");
      pageWrapper.innerHTML = "";
    }
  }, {
    key: "_loadMessages",
    value: function _loadMessages() {
      var _this = this;

      this.messagesArray.map(function (message) {
        _this._addMessage(message);
      });
    }
  }, {
    key: "_addMessage",
    value: function _addMessage(message) {
      var messagesContainer = document.getElementById("messages");
      var messageElement = document.createElement("div");
      var isUserMessageOwner = message.ownerId === userId;
      isUserMessageOwner ? messageElement.setAttribute("class", "message message-yours") : messageElement.setAttribute("class", "message");
      var formattedDate = this._formatDate(message.date) || "";
      messageElement.innerHTML = message.message + "<div class='date'>" + formattedDate + "</div>";
      messagesContainer.appendChild(messageElement);
    }
  }, {
    key: "_formatDate",
    value: function _formatDate(time) {
      var date = new Date(time);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      return (hours < 10 ? "0" : "") + hours + ":\n            " + ((minutes < 10 ? "0" : "") + minutes);
    }
  }]);

  return Messages;
}();

exports.default = Messages;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var messages = exports.messages = [{
  userIds: ["0", "1"],
  messages: [{
    message: "Siema",
    ownerId: "0",
    date: "2018-03-25T12:00:00Z"
  }, {
    message: "Cześć",
    ownerId: "1",
    date: "2018-03-25T12:01:00Z"
  }, {
    message: "Mam pytanie",
    ownerId: "0",
    date: "2018-03-25T12:01:10Z"
  }, {
    message: "widziałeś jabłka tanie gdzieś?",
    ownerId: "0",
    date: "2018-03-25T12:01:40Z"
  }, {
    message: "No pytam",
    ownerId: "0",
    date: "2018-03-25T12:02:30Z"
  }, {
    message: "Nie",
    ownerId: "1",
    date: "2018-03-25T12:02:50Z"
  }]
}, {
  userIds: ["0", "2"],
  messages: [{
    message: "Witaj",
    ownerId: "2",
    date: "2018-03-25T12:00:00Z"
  }, {
    message: "Halo",
    ownerId: "2",
    date: "2018-03-25T12:01:00Z"
  }, {
    message: "Hej",
    ownerId: "0",
    date: "2018-03-25T12:01:10Z"
  }, {
    message: "Sorry, jadłem",
    ownerId: "0",
    date: "2018-03-25T12:01:40Z"
  }, {
    message: "Okej",
    ownerId: "2",
    date: "2018-03-25T12:02:30Z"
  }, {
    message: "Co tam?",
    ownerId: "2",
    date: "2018-03-25T12:02:50Z"
  }]
}];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Messenger = function () {
  function Messenger() {
    _classCallCheck(this, Messenger);
  }

  _createClass(Messenger, [{
    key: "setupComponent",
    value: function setupComponent() {
      this._loadTemplate();
    }
  }, {
    key: "_loadTemplate",
    value: function _loadTemplate() {
      var pageWrapper = document.getElementById("page-content");
      var pageNotFound = "<h1>" + "404 :<" + "</h1>";
      pageWrapper.innerHTML = pageNotFound;
    }
  }]);

  return Messenger;
}();

exports.default = Messenger;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<a href=\"login\" class=\"item\">\n  Login\n</a>";

/***/ })
/******/ ]);