/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body, html {\\r\\n\\tmargin: 0 auto;\\r\\n\\toverflow: hidden;\\r\\n}\\r\\n\\r\\n#guiControls {\\r\\n\\tposition: absolute;\\r\\n\\twidth: 100vw;\\r\\n\\theight: 125px;\\r\\n\\tbackground-color: rgba(168, 168, 168, 0.7);\\r\\n\\tbottom: 0;\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tflex-direction: row;\\r\\n\\r\\n}\\r\\n\\r\\n#guiControls>div {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-grow: 1;\\r\\n\\tjustify-content: flex-start;\\r\\n\\talign-items: baseline;\\r\\n\\tflex-direction: column;\\r\\n\\theight: 100%;\\r\\n\\t/* background-color: green; */\\r\\n\\t/* outline: 1px dashed purple; */\\r\\n}\\r\\n\\r\\n.inputDesc {\\r\\n\\tpadding: 10px;\\r\\n\\tfloat: left;\\r\\n\\tfont-size: 20px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n\\tmargin: 15px;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n    margin: 11px;\\r\\n    float: left;\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://test/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://test/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/three/examples/jsm/libs/stats.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/three/examples/jsm/libs/stats.module.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Stats = function () {\n\n\tvar mode = 0;\n\n\tvar container = document.createElement( 'div' );\n\tcontainer.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';\n\tcontainer.addEventListener( 'click', function ( event ) {\n\n\t\tevent.preventDefault();\n\t\tshowPanel( ++ mode % container.children.length );\n\n\t}, false );\n\n\t//\n\n\tfunction addPanel( panel ) {\n\n\t\tcontainer.appendChild( panel.dom );\n\t\treturn panel;\n\n\t}\n\n\tfunction showPanel( id ) {\n\n\t\tfor ( var i = 0; i < container.children.length; i ++ ) {\n\n\t\t\tcontainer.children[ i ].style.display = i === id ? 'block' : 'none';\n\n\t\t}\n\n\t\tmode = id;\n\n\t}\n\n\t//\n\n\tvar beginTime = ( performance || Date ).now(), prevTime = beginTime, frames = 0;\n\n\tvar fpsPanel = addPanel( new Stats.Panel( 'FPS', '#0ff', '#002' ) );\n\tvar msPanel = addPanel( new Stats.Panel( 'MS', '#0f0', '#020' ) );\n\n\tif ( self.performance && self.performance.memory ) {\n\n\t\tvar memPanel = addPanel( new Stats.Panel( 'MB', '#f08', '#201' ) );\n\n\t}\n\n\tshowPanel( 0 );\n\n\treturn {\n\n\t\tREVISION: 16,\n\n\t\tdom: container,\n\n\t\taddPanel: addPanel,\n\t\tshowPanel: showPanel,\n\n\t\tbegin: function () {\n\n\t\t\tbeginTime = ( performance || Date ).now();\n\n\t\t},\n\n\t\tend: function () {\n\n\t\t\tframes ++;\n\n\t\t\tvar time = ( performance || Date ).now();\n\n\t\t\tmsPanel.update( time - beginTime, 200 );\n\n\t\t\tif ( time >= prevTime + 1000 ) {\n\n\t\t\t\tfpsPanel.update( ( frames * 1000 ) / ( time - prevTime ), 100 );\n\n\t\t\t\tprevTime = time;\n\t\t\t\tframes = 0;\n\n\t\t\t\tif ( memPanel ) {\n\n\t\t\t\t\tvar memory = performance.memory;\n\t\t\t\t\tmemPanel.update( memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576 );\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\treturn time;\n\n\t\t},\n\n\t\tupdate: function () {\n\n\t\t\tbeginTime = this.end();\n\n\t\t},\n\n\t\t// Backwards Compatibility\n\n\t\tdomElement: container,\n\t\tsetMode: showPanel\n\n\t};\n\n};\n\nStats.Panel = function ( name, fg, bg ) {\n\n\tvar min = Infinity, max = 0, round = Math.round;\n\tvar PR = round( window.devicePixelRatio || 1 );\n\n\tvar WIDTH = 80 * PR, HEIGHT = 48 * PR,\n\t\tTEXT_X = 3 * PR, TEXT_Y = 2 * PR,\n\t\tGRAPH_X = 3 * PR, GRAPH_Y = 15 * PR,\n\t\tGRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;\n\n\tvar canvas = document.createElement( 'canvas' );\n\tcanvas.width = WIDTH;\n\tcanvas.height = HEIGHT;\n\tcanvas.style.cssText = 'width:80px;height:48px';\n\n\tvar context = canvas.getContext( '2d' );\n\tcontext.font = 'bold ' + ( 9 * PR ) + 'px Helvetica,Arial,sans-serif';\n\tcontext.textBaseline = 'top';\n\n\tcontext.fillStyle = bg;\n\tcontext.fillRect( 0, 0, WIDTH, HEIGHT );\n\n\tcontext.fillStyle = fg;\n\tcontext.fillText( name, TEXT_X, TEXT_Y );\n\tcontext.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );\n\n\tcontext.fillStyle = bg;\n\tcontext.globalAlpha = 0.9;\n\tcontext.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );\n\n\treturn {\n\n\t\tdom: canvas,\n\n\t\tupdate: function ( value, maxValue ) {\n\n\t\t\tmin = Math.min( min, value );\n\t\t\tmax = Math.max( max, value );\n\n\t\t\tcontext.fillStyle = bg;\n\t\t\tcontext.globalAlpha = 1;\n\t\t\tcontext.fillRect( 0, 0, WIDTH, GRAPH_Y );\n\t\t\tcontext.fillStyle = fg;\n\t\t\tcontext.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );\n\n\t\t\tcontext.drawImage( canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT );\n\n\t\t\tcontext.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT );\n\n\t\t\tcontext.fillStyle = bg;\n\t\t\tcontext.globalAlpha = 0.9;\n\t\t\tcontext.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round( ( 1 - ( value / maxValue ) ) * GRAPH_HEIGHT ) );\n\n\t\t}\n\n\t};\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stats);\n\n\n//# sourceURL=webpack://test/./node_modules/three/examples/jsm/libs/stats.module.js?");

/***/ }),

/***/ "./src/components/Camera.js":
/*!**********************************!*\
  !*** ./src/components/Camera.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Camera)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Camera {\r\n\tconstructor(renderer) {\r\n\t\tconst width = renderer.domElement.width;\r\n\t\tconst height = renderer.domElement.height;\r\n\r\n\t\tthis.threeCamera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, width / height, 0.1, 10000);\r\n\t\tthis.threeCamera.position.set(15, 10, 15);\r\n\t\tthis.threeCamera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0))\r\n\r\n\t\tthis.updateSize(renderer);\r\n\r\n\t\twindow.addEventListener('resize', () => this.updateSize(renderer), false);\r\n\t}\r\n\r\n\tupdateSize(renderer) {\r\n\r\n\t\tthis.threeCamera.aspect = renderer.domElement.width / renderer.domElement.height;\r\n\t\tthis.threeCamera.updateProjectionMatrix();\r\n\t}\r\n\r\n}\n\n//# sourceURL=webpack://test/./src/components/Camera.js?");

/***/ }),

/***/ "./src/components/Fields/Enemy.js":
/*!****************************************!*\
  !*** ./src/components/Fields/Enemy.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Enemy)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Enemy {\r\n\r\n\tconstructor(scene) {\r\n\t\tthis.scene = scene;\r\n\t\tthis.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(0.5, 0.5, 0.5);\r\n\t\tthis.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n\t\t\t// color: 0xfc0303,\r\n\t\t\tmap: new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader().load(\"materials/enemy.jpg\")\r\n\t\t})\r\n\r\n\t\tthis.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material);\r\n\t\tthis.scene.add(this.mesh)\r\n\t}\r\n}\n\n//# sourceURL=webpack://test/./src/components/Fields/Enemy.js?");

/***/ }),

/***/ "./src/components/Fields/Light.js":
/*!****************************************!*\
  !*** ./src/components/Fields/Light.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Light)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Light {\r\n\r\n\tconstructor(scene) {\r\n\t\tthis.scene = scene;\r\n\t\tthis.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(0.2, 0.2, 0.2);\r\n\t\tthis.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n\t\t\tcolor: 0xf2ff09,\r\n\t\t\t// transparent: true,\r\n\t\t\t// opacity: 0.5,\r\n\t\t\twireframe: true,\r\n\t\t})\r\n\r\n\t\t// 0xfce803 - yellow\r\n\t\t// ffff00 - more yellow\r\n\t\tthis.light = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 10)\r\n\t\tthis.light.intensity = 0.3\r\n\r\n\t\tthis.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material);\r\n\t\tthis.light.castShadow = false;\r\n\r\n\t\tthis.mesh.add(this.light)\r\n\t\tthis.scene.add(this.mesh)\r\n\t}\r\n\r\n\tupdateLightPos() {\r\n\t\t// Set light position in the center\r\n\t\t//@ts-ignore\r\n\t\tthis.light.position.set(this.mesh.position)\r\n\t}\r\n\r\n\tupdateLight() {\r\n\t\tthis.light.intensity += 0.01;\r\n\r\n\t\tif (this.light.intensity >= 2) {\r\n\t\t\tthis.light.intensity = 0;\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack://test/./src/components/Fields/Light.js?");

/***/ }),

/***/ "./src/components/Fields/Plane.js":
/*!****************************************!*\
  !*** ./src/components/Fields/Plane.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Plane)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Plane {\r\n\r\n\tconstructor(scene) {\r\n\t\tthis.scene = scene;\r\n\t\tthis.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(10, 10);\r\n\t\tthis.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n\t\t\t// color: 0xa74e50,\r\n\t\t\tside: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,\r\n\t\t\tmap: new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader().load(\"materials/floor.png\")\r\n\t\t});\r\n\r\n\t\tthis.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material);\r\n\t\tthis.mesh.material.map.wrapS = three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;\r\n\t\tthis.mesh.material.map.wrapT = three__WEBPACK_IMPORTED_MODULE_0__.RepeatWrapping;\r\n\t\tthis.mesh.material.map.repeat.set(5, 5);\r\n\t\tthis.mesh.receiveShadow = true;\r\n\r\n\t\tthis.scene.add(this.mesh)\r\n\t}\r\n}\n\n//# sourceURL=webpack://test/./src/components/Fields/Plane.js?");

/***/ }),

/***/ "./src/components/Fields/Treasure.js":
/*!*******************************************!*\
  !*** ./src/components/Fields/Treasure.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Treasure)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Treasure {\r\n\r\n\tconstructor(scene) {\r\n\t\tthis.scene = scene;\r\n\t\tthis.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(0.5, 0.5, 0.5);\r\n\t\tthis.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n\t\t\t// color: 0x2c83c9,\r\n\t\t\tmap: new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader().load(\"materials/treasure.jpg\")\r\n\t\t})\r\n\r\n\t\tthis.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material);\r\n\t\tthis.scene.add(this.mesh)\r\n\t}\r\n}\n\n//# sourceURL=webpack://test/./src/components/Fields/Treasure.js?");

/***/ }),

/***/ "./src/components/Fields/Wall.js":
/*!***************************************!*\
  !*** ./src/components/Fields/Wall.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wall)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Wall {\r\n\r\n\tconstructor(scene) {\r\n\t\tthis.scene = scene;\r\n\t\tthis.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1);\r\n\t\tthis.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n\t\t\t// color: 0x00ff00,\r\n\t\t\tmap: new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader().load(\"materials/wall.jpg\")\r\n\t\t})\r\n\r\n\t\tthis.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material);\r\n\t\tthis.mesh.castShadow = true;\r\n\t\tthis.scene.add(this.mesh)\r\n\t}\r\n}\n\n//# sourceURL=webpack://test/./src/components/Fields/Wall.js?");

/***/ }),

/***/ "./src/components/GameLoader.js":
/*!**************************************!*\
  !*** ./src/components/GameLoader.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameLoader)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Fields_Enemy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fields/Enemy.js */ \"./src/components/Fields/Enemy.js\");\n/* harmony import */ var _Fields_Wall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fields/Wall.js */ \"./src/components/Fields/Wall.js\");\n/* harmony import */ var _Fields_Treasure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields/Treasure.js */ \"./src/components/Fields/Treasure.js\");\n/* harmony import */ var _Fields_Light_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fields/Light.js */ \"./src/components/Fields/Light.js\");\n/* harmony import */ var _Fields_Plane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fields/Plane.js */ \"./src/components/Fields/Plane.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Player */ \"./src/components/Player.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass GameLoader {\r\n\tconstructor(scene) {\r\n\t\tthis.scene = scene;\r\n\t\tthis.gameData = null;\r\n\t\tthis.player = undefined\r\n\t\t// this.camera = camera\r\n\t}\r\n\r\n\tgetGameData() {\r\n\t\t// Gets saved game data from server\r\n\t\treturn $.ajax({\r\n\t\t\tmethod: \"GET\",\r\n\t\t\turl: \"http://localhost:5000/load\",\r\n\t\t\tcontentType: \"json\",\r\n\t\t})\r\n\t}\r\n\r\n\tcreateLevelBasics(createGrid = false, createAxes = false) {\r\n\t\tconsole.log(\"Level basics creation\");\r\n\t\tthis.planeRotation = Math.PI / 2\r\n\r\n\t\t// Creates:\r\n\t\t// - floor\r\n\t\tthis.floor = new _Fields_Plane_js__WEBPACK_IMPORTED_MODULE_4__.default(this.scene)\r\n\t\tthis.floor.mesh.position.set(5, 0, 5);\r\n\t\tthis.floor.mesh.rotation.set(this.planeRotation, 0, 0)\r\n\r\n\t\t// - ambient light\r\n\t\tthis.ambientLight = new three__WEBPACK_IMPORTED_MODULE_6__.AmbientLight(0x404040)\r\n\t\tthis.scene.add(this.ambientLight);\r\n\r\n\r\n\t\t// - helpers (grid, axes)\r\n\t\tif (createGrid) {\r\n\t\t\tthis.grid = new three__WEBPACK_IMPORTED_MODULE_6__.GridHelper(10, 10)\r\n\t\t\tthis.grid.position.set(5, 0, 5)\r\n\t\t\tthis.scene.add(this.grid)\r\n\t\t}\r\n\t\tif (createAxes) {\r\n\t\t\tthis.axes = new three__WEBPACK_IMPORTED_MODULE_6__.AxesHelper(1000)\r\n\t\t\tthis.scene.add(this.axes)\r\n\t\t}\r\n\t}\r\n\r\n\tcreateLevelLayout() {\r\n\t\tconsole.log(\"Level content creation, whole game data: \");\r\n\t\tconsole.log(this.gameData);\r\n\t\t// Creates all level blocks based on data from server (/load)\r\n\r\n\t\tthis.walls = []\r\n\t\tthis.enemies = []\r\n\t\tthis.lights = []\r\n\t\tthis.treasures = []\r\n\r\n\t\t// Generate player location\r\n\t\t// let avFields = []\r\n\t\t// for (let x = 0; x < 10; x += 1) {\r\n\t\t// \tfor (let z = 0; z < 10; z++) {\r\n\t\t// \t\tif (x == 0 || x == 9 || z == 0 || z == 9)\r\n\t\t// \t\t\tavFields.push(JSON.stringify([x, z]))\r\n\t\t// \t}\r\n\t\t// }\r\n\r\n\t\tfor (let i = 0; i < this.gameData.size; i++) {\r\n\t\t\tlet currGameObject = this.gameData.fieldList[i]\r\n\r\n\t\t\tswitch (currGameObject.type) {\r\n\t\t\t\tcase \"wall\":\r\n\t\t\t\t\tlet wall = new _Fields_Wall_js__WEBPACK_IMPORTED_MODULE_1__.default(this.scene);\r\n\t\t\t\t\twall.mesh.position.set(currGameObject.x + 0.5, currGameObject.y + 0.5, currGameObject.z + 0.5)\r\n\t\t\t\t\tthis.walls.push(wall)\r\n\r\n\t\t\t\t\t// let fieldFromGameObj = [currGameObject.x, currGameObject.z]\r\n\t\t\t\t\t// let index = avFields.indexOf(JSON.stringify(fieldFromGameObj))\r\n\r\n\t\t\t\t\t// if (index > -1) {\r\n\t\t\t\t\t// \tavFields.splice(index, 1)\r\n\t\t\t\t\t// }\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase \"enemy\":\r\n\t\t\t\t\tlet enemy = new _Fields_Enemy_js__WEBPACK_IMPORTED_MODULE_0__.default(this.scene);\r\n\t\t\t\t\tenemy.mesh.position.set(currGameObject.x + 0.5, currGameObject.y + 0.5, currGameObject.z + 0.5)\r\n\t\t\t\t\tthis.enemies.push(enemy)\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase \"treasure\":\r\n\t\t\t\t\tlet treasure = new _Fields_Treasure_js__WEBPACK_IMPORTED_MODULE_2__.default(this.scene);\r\n\t\t\t\t\ttreasure.mesh.position.set(currGameObject.x + 0.5, currGameObject.y + 0.5, currGameObject.z + 0.5)\r\n\t\t\t\t\tthis.treasures.push(treasure)\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tcase \"light\":\r\n\t\t\t\t\tlet light = new _Fields_Light_js__WEBPACK_IMPORTED_MODULE_3__.default(this.scene);\r\n\t\t\t\t\tlight.mesh.position.set(currGameObject.x + 0.5, currGameObject.y + 0.9, currGameObject.z + 0.5)\r\n\t\t\t\t\tthis.lights.push(light)\r\n\t\t\t\t\tbreak;\r\n\r\n\t\t\t\tdefault:\r\n\t\t\t\t\tconsole.log(\"No filter specified\");\r\n\t\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// if (avFields.length > 0) {\r\n\t\t// \tthis.playerPosition = JSON.parse(avFields[0])\r\n\t\t// } else {\r\n\t\t// \t// alert(\"Nie można dodać gracza - brak miejsca na krawędzi mapy!\");\r\n\t\t// \tconsole.log(\"Nie można dodać gracza\");\r\n\t\t// }\r\n\r\n\t}\r\n\r\n\taddPlayer() {\r\n\t\t$.ajax({\r\n\t\t\tmethod: \"GET\",\r\n\t\t\turl: \"http://localhost:5000/newPlayer\",\r\n\t\t\tcontentType: \"json\",\r\n\t\t}).done((data) => {\r\n\t\t\tif (data != \"Brak możliwości dodania gracza\") {\r\n\t\t\t\tthis.player = JSON.parse(data)\r\n\t\t\t\tconsole.log(this.player);\r\n\t\t\t} else {\r\n\t\t\t\talert(data);\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n}\n\n//# sourceURL=webpack://test/./src/components/GameLoader.js?");

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./src/components/Renderer.js\");\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera */ \"./src/components/Camera.js\");\n/* harmony import */ var _GameLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameLoader */ \"./src/components/GameLoader.js\");\n/* harmony import */ var three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/libs/stats.module.js */ \"./node_modules/three/examples/jsm/libs/stats.module.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Main {\r\n\tconstructor(container) {\r\n\t\tthis.container = container;\r\n\t\tthis.scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();\r\n\t\tthis.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_0__.default(this.scene, this.container);\r\n\r\n\t\tthis.camera = new _Camera__WEBPACK_IMPORTED_MODULE_1__.default(this.renderer.threeRenderer);\r\n\t\tlet boardCenterVect = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(5, 0, 5);\r\n\r\n\t\t// OrbitControls\r\n\t\t// this.controls = new OrbitControls(this.camera.threeCamera, this.renderer.threeRenderer.domElement);\r\n\t\t// this.controls.target = boardCenterVect\r\n\t\t// this.camera.threeCamera.rotation.y += 90\r\n\r\n\t\tthis.camera.threeCamera.position.set(5, 10, 7);\r\n\t\tthis.camera.threeCamera.lookAt(boardCenterVect)\r\n\r\n\t\t// Stats\r\n\t\tthis.stats = new three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_4__.default()\r\n\t\tthis.stats.showPanel(0)\r\n\t\tdocument.body.appendChild(this.stats.dom)\r\n\r\n\t\tthis.game = new _GameLoader__WEBPACK_IMPORTED_MODULE_2__.default(this.scene);\r\n\t\tthis.game.getGameData().done((data) => {\r\n\t\t\t// Render a level\r\n\t\t\tthis.game.gameData = JSON.parse(data);\r\n\t\t\tthis.game.createLevelBasics(true, true)\r\n\t\t\tthis.game.createLevelLayout();\r\n\t\t\tthis.game.addPlayer();\r\n\r\n\t\t})\r\n\r\n\t\tthis.render();\r\n\t}\r\n\r\n\trender() {\r\n\t\tthis.stats.begin()\r\n\r\n\t\tthis.renderer.render(this.scene, this.camera.threeCamera);\r\n\r\n\t\tthis.stats.end();\r\n\r\n\t\trequestAnimationFrame(this.render.bind(this));\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://test/./src/components/Main.js?");

/***/ }),

/***/ "./src/components/Player.js":
/*!**********************************!*\
  !*** ./src/components/Player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Player {\r\n\r\n\tconstructor(scene) {\r\n\t\tthis.scene = scene;\r\n\t\tthis.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(0.5, 0.5, 0.5)\r\n\t\tthis.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ color: 0x21ff15 })\r\n\t\tthis.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material)\r\n\t\tthis.scene.add(this.mesh);\r\n\t}\r\n}\n\n//# sourceURL=webpack://test/./src/components/Player.js?");

/***/ }),

/***/ "./src/components/Renderer.js":
/*!************************************!*\
  !*** ./src/components/Renderer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Renderer)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Renderer {\r\n\tconstructor(scene, container) {\r\n\t\tthis.scene = scene;\r\n\t\tthis.container = container;\r\n\t\tthis.threeRenderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });\r\n\t\tthis.threeRenderer.setClearColor(0xffffff);\r\n\t\tthis.threeRenderer.shadowMap.enabled = true;\r\n\t\tthis.threeRenderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_0__.PCFSoftShadowMap;\r\n\t\tthis.container.appendChild(this.threeRenderer.domElement);\r\n\t\tthis.updateSize();\r\n\r\n\t\tdocument.addEventListener('DOMContentLoaded', () => this.updateSize(), false);\r\n\t\twindow.addEventListener('resize', () => this.updateSize(), false);\r\n\t}\r\n\r\n\tupdateSize() {\r\n\t\tthis.threeRenderer.setSize(window.innerWidth, window.innerHeight);\r\n\t}\r\n\r\n\trender(scene, camera) {\r\n\t\tthis.threeRenderer.render(scene, camera);\r\n\t}\r\n}\n\n//# sourceURL=webpack://test/./src/components/Renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Main */ \"./src/components/Main.js\");\n\r\n\r\n\r\nfunction init() {\r\n\t//div\r\n\tconst container = document.getElementById('root');\r\n\t//main class object\r\n\tnew _components_Main__WEBPACK_IMPORTED_MODULE_1__.default(container);\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;