/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
}


body {
    height: 100vh;
    margin: 0;
    box-sizing: border-box;
}

.container {
    display: grid;
    grid-template-columns: minmax(150px, 250px) 3fr;
    grid-template-rows: 1fr auto;
    height: 100%;

}

.todo-adder, .project-adder {
    background-color: #5b21b6;
    padding: 0.5rem;
    color: white;
    font-weight: 550;
}

.todo-adder {
    grid-column: 1/2;
    grid-row: 1/2;
    
    display: flex;
    flex-direction: column;
    align-items: center;
}

form.todo-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

form.todo-form > div { /*select all divs under the form*/
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.todo-form .radio-option {
    display: flex;
    gap: 0.4rem;
    font-weight: 500;
}

.todo-form input[type="text"], textarea, input[type="date"], select {
    border-radius: 5px;
    border: none;
    padding: 0.2rem;
}

form button {
    border-radius: 1rem;
    border: solid white 0.1rem;
    background-color: #5b21b6;
    color: white;
    padding: 0.1rem;
}

.form-title {
    font-size: 1.2rem;
}

.project-adder {
    grid-column: 1/2;
    grid-row: 2/3;
}

#project-container {
    grid-column: 2/3;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    gap: 1rem; /*might want to remove later*/
    padding: 0.5rem;
    background-color: #ddd6fe;
    overflow: auto;
    
}
.project {
    background-color: #ede9fe;
    border-radius: 10px;
    padding: 1rem;

}

.project-title {
    font-size: 1.2rem;
    font-weight: 600;
}

.fa-solid.fa-trash.project-delete {
    margin-left: 0.5rem;
}

.todo-card-container {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    overflow: auto;
    padding: 1rem;
    flex-wrap: wrap;

}

.todo-card {
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    overflow: auto;
    height: 15rem;
    max-width: 15rem;
    min-width: 15rem;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    gap: 0.1rem;
}

.fa-solid.fa-trash.todo-delete {
    margin-top: auto;
    align-self: flex-end;
    font-size: 1.1rem;
    padding-top: 0.5rem;
}

.todo-card-title {
    font-weight: 600;
    font-size: 1rem;
}

.todo-description-title {
    font-weight: 600;
}

.todo-description {
    overflow: auto;
}

.todo-card-date, .card-priority {
    color: grey;
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,kCAAkC;IAClC,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C,4BAA4B;IAC5B,YAAY;;AAEhB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,uBAAuB,iCAAiC;IACpD,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,0BAA0B;IAC1B,yBAAyB;IACzB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS,EAAE,6BAA6B;IACxC,eAAe;IACf,yBAAyB;IACzB,cAAc;;AAElB;AACA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;;AAEjB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;IACT,cAAc;IACd,aAAa;IACb,eAAe;;AAEnB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,WAAW;AACf","sourcesContent":[":root {\n    margin: 0;\n    padding: 0;\n    font-family: \"Poppins\", sans-serif;\n    font-size: 16px;\n}\n\n\nbody {\n    height: 100vh;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: minmax(150px, 250px) 3fr;\n    grid-template-rows: 1fr auto;\n    height: 100%;\n\n}\n\n.todo-adder, .project-adder {\n    background-color: #5b21b6;\n    padding: 0.5rem;\n    color: white;\n    font-weight: 550;\n}\n\n.todo-adder {\n    grid-column: 1/2;\n    grid-row: 1/2;\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nform.todo-form {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\nform.todo-form > div { /*select all divs under the form*/\n    display: flex;\n    flex-direction: column;\n    gap: 0.2rem;\n}\n\n.todo-form .radio-option {\n    display: flex;\n    gap: 0.4rem;\n    font-weight: 500;\n}\n\n.todo-form input[type=\"text\"], textarea, input[type=\"date\"], select {\n    border-radius: 5px;\n    border: none;\n    padding: 0.2rem;\n}\n\nform button {\n    border-radius: 1rem;\n    border: solid white 0.1rem;\n    background-color: #5b21b6;\n    color: white;\n    padding: 0.1rem;\n}\n\n.form-title {\n    font-size: 1.2rem;\n}\n\n.project-adder {\n    grid-column: 1/2;\n    grid-row: 2/3;\n}\n\n#project-container {\n    grid-column: 2/3;\n    grid-row: 1/3;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem; /*might want to remove later*/\n    padding: 0.5rem;\n    background-color: #ddd6fe;\n    overflow: auto;\n    \n}\n.project {\n    background-color: #ede9fe;\n    border-radius: 10px;\n    padding: 1rem;\n\n}\n\n.project-title {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.fa-solid.fa-trash.project-delete {\n    margin-left: 0.5rem;\n}\n\n.todo-card-container {\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    gap: 1rem;\n    overflow: auto;\n    padding: 1rem;\n    flex-wrap: wrap;\n\n}\n\n.todo-card {\n    background-color: white;\n    padding: 1rem;\n    border-radius: 10px;\n    overflow: auto;\n    height: 15rem;\n    max-width: 15rem;\n    min-width: 15rem;\n    display: flex;\n    flex-direction: column;\n    font-size: 0.8rem;\n    gap: 0.1rem;\n}\n\n.fa-solid.fa-trash.todo-delete {\n    margin-top: auto;\n    align-self: flex-end;\n    font-size: 1.1rem;\n    padding-top: 0.5rem;\n}\n\n.todo-card-title {\n    font-weight: 600;\n    font-size: 1rem;\n}\n\n.todo-description-title {\n    font-weight: 600;\n}\n\n.todo-description {\n    overflow: auto;\n}\n\n.todo-card-date, .card-priority {\n    color: grey;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projectmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectmanager */ "./src/projectmanager.js");
/* harmony import */ var _userinterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userinterface */ "./src/userinterface.js");




class Controller {

        constructor() {
            this.projectManager = new _projectmanager__WEBPACK_IMPORTED_MODULE_1__["default"]();
        }

        setAddProjectButtion() {
            addProjectBtn = document.querySelector("#project-add-btn");
            projectTitleInput = document.querySelector("#project-form-title");

            addProjectBtn.addEventListener('submit', (e) => {
                e.preventDefault();
                let newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](projectTitleInput.textContent);
                (0,_userinterface__WEBPACK_IMPORTED_MODULE_2__.createProjectInterface)(newProject, this.projectManager);
            })
        }
}




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    title;//String 
    todoList; //array of Todo objects

    constructor(title) {
        this.title = title; //sets title of project 
        this.todoList = []; //initalize as empty array
    }

    /**
     *  Adds todo object to the instance's todoList array
     * @param {A Todo object} todoObject 
     */
    addTodo(todoObject) {
        this.todoList.push(todoObject); 
    }

    /**
     * deletes a todo object in the instance's todolist given an index
     * @param {integer number > -1 and < todoList.length} index 
     */

    deleteTodo(index) {
        this.todoList.splice(index, 1);
    }
    /**
     * returns a todo object from the instance's todolist given an index
     * @param {integer number > -1 and < todoList.length} index 
     */
    getTodo(index){
        return this.todoList[index];
    }

    getNumberOfTodos() {
        return this.todoList.length;
    }
}

/***/ }),

/***/ "./src/projectmanager.js":
/*!*******************************!*\
  !*** ./src/projectmanager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectManager)
/* harmony export */ });
class ProjectManager {

    projectList; //array that contains only project objects

    constructor() {
        this.projectList = []; //instantiate an empty array
    }
    /**
     * 
     * @param {an instance of project} project 
     */
    addProject(project) {
        this.projectList.push(project);
    }
    /**
     * deletes a project given an index
     * @param {integer number > -1 and < projectList.length} index 
     */
    deleteProject(index) {
        this.projectList.splice(index, 1);
    }
    /**
     *  returns a project object given an index
     * @param {integer number > -1 and < projectList.length} index 
     * @returns 
     */
    getProject(index) {
        return this.projectList[index];
    }

    getNumberOfProjects() {
        return this.projectList.length;
    }
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {

    title;  //string
    description; //string
    dueDate; //string format date
    priority; //string, can only be high, medium, low or null

    /**
     * 
     * @param {string} title - the title of the todo object
     * @param {string} description - description of the todo object
     * @param {string} dueDate - string repersentation of a date, must be in format YYYY-MM-DD
     * @param {string} priority - string value that can only be low, medium, high 
     */
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description; 
        /*const date = new Date(); (a way to enforce YYYY-MM-DD format)
        const dateString = date.toISOString().slice(0, 10); */
        this.dueDate = dueDate; //
        this.priority = priority;
    }
    toString() {
        return `Title: ${this.title}, Description: ${this.description}, Due date: ${this.dueDate}, Priority: ${this.priority}`
    }

    //setters and getters not needed, access the variables directly

}

/***/ }),

/***/ "./src/userinterface.js":
/*!******************************!*\
  !*** ./src/userinterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectInterface: () => (/* binding */ createProjectInterface),
/* harmony export */   createTodoInterface: () => (/* binding */ createTodoInterface)
/* harmony export */ });

/**
 * Creates a project interface given a project object and inserts into a given ProjectManager object
 * @param {a Project object} projectObj 
 * @param {projectManager} the ProjectManager object dependency
 */
function createProjectInterface(projectObj, projectManager) {
    projectManager.addProject(projectObj); 
    createProjectOption(projectObj, projectManager.getNumberOfProjects() - 1)
    let projectContainer = document.querySelector("#project-container"); 
    let project = document.createElement("div");
    project.classList.add("project");
    project.setAttribute("data-index", projectManager.getNumberOfProjects() - 1);
    let projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    console.log(projectObj.title);
    projectTitle.textContent = projectObj.title;
    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute('class', 'fa-solid fa-trash project-delete');
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("todo-card-container");

     deleteIcon.addEventListener('click', () => { //Delete feature
        project.remove(); //remove the project from the dom 
        projectManager.deleteProject(Number(project.getAttribute("data-index")));
        deleteProjectOption(project.getAttribute("data-index"));
        updateProjectIndices(); //update the indexes
    });

    projectTitle.appendChild(deleteIcon);
    project.appendChild(projectTitle);
    project.appendChild(cardContainer);
    projectContainer.appendChild(project);
};

/**
 * Helper function: Update the data-index of each project dom element and option element from 0 to # of projects - 1
 */
function updateProjectIndices() {
    let projectList = document.querySelectorAll(".project");
    let projectOptionList = document.querySelectorAll("option");
    for(let i = 0; i < projectList.length; i++) {
        projectList[i].setAttribute("data-index", i);
        projectOptionList[i].setAttribute("data-index", i);
    }
};
/**
 * Helper function which creates an option dom element from a project obj
 * @param {*} projectObj 
 * @param {*} projectManager 
 */
function createProjectOption(projectObj, dataindex) {
    let projectSelector = document.querySelector("#projects");
    let newOption = document.createElement("option");
    newOption.setAttribute("value", projectObj.title)
    newOption.setAttribute("data-index", dataindex);
    newOption.textContent = projectObj.title;
    projectSelector.appendChild(newOption);
};

/**
 * Helper function that deletes an option dom element given a dataindex
 * @param {} dataindex
 */
function deleteProjectOption(dataindex) {
    let optionToDelete = document.querySelector(`option[data-index="${dataindex}"]`);
    console.log(optionToDelete);
    optionToDelete.remove();
};

function createTodoInterface(todoObj, projectIndex, projectManager) {
    projectManager.getProject(projectIndex).addTodo(todoObj); //add to the appropriate project

    let todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
    todoCard.setAttribute("data-index", projectManager.getProject(projectIndex).getNumberOfTodos() - 1)

    let cardTitle = document.createElement("div");
    cardTitle.classList.add("todo-card-title");
    cardTitle.textContent = todoObj.title;
    
    let cardDate = document.createElement("div");
    cardDate.classList.add("todo-card-date");
    cardDate.textContent = todoObj.dueDate;

    let cardPriority = document.createElement("div");
    cardPriority.classList.add("card-priority");
    cardPriority.textContent = `Priority: ${todoObj.priority}`

    let cardDescTitle = document.createElement("div");
    cardDescTitle.classList.add("todo-description-title");
    cardDescTitle.textContent = "Description";

    let cardDesc = document.createElement("div");
    cardDesc.classList.add("todo-description");
    cardDesc.textContent = todoObj.description;

    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute('class', 'fa-solid fa-trash todo-delete');

    deleteIcon.addEventListener('click', () => {
        let project = todoCard.closest(".project") //get its project dom element
        todoCard.remove(); //remove the card from the dom
        console.log(project);
        //delete the todo from the corresponding project object rep.
        projectManager.getProject(Number(project.getAttribute("data-index"))).deleteTodo(Number(todoCard.getAttribute("data-index")));
        updateTodoIndices(Number(project.getAttribute("data-index")));

    })

    let todoContainer = document.querySelector(`.project[data-index="${projectIndex}"] .todo-card-container`);

    todoCard.appendChild(cardTitle);
    todoCard.appendChild(cardDate);
    todoCard.appendChild(cardPriority);
    todoCard.appendChild(cardDescTitle);
    todoCard.appendChild(cardDesc);
    todoCard.appendChild(deleteIcon);
    todoContainer.appendChild(todoCard);
    
}

/**
 * Updates the data-index attributes of todo-cards under a particular project dom element given its dataindex
 * @param {*} projectIndex 
 */
function updateTodoIndices(projectIndex) {
    
    let todoCards = document.querySelectorAll(`.project[data-index="${projectIndex}"] .todo-card`);
    let i = 0;
    todoCards.forEach((card) => {
        card.setAttribute("data-index", i);
        i++;
    })
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _userinterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userinterface */ "./src/userinterface.js");
/* harmony import */ var _projectmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectmanager */ "./src/projectmanager.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller */ "./src/controller.js");







let newProjectManager = new _projectmanager__WEBPACK_IMPORTED_MODULE_2__["default"]();
let newProject = new _project__WEBPACK_IMPORTED_MODULE_3__["default"]("NO way")
let newProject2 = new _project__WEBPACK_IMPORTED_MODULE_3__["default"]("Hey dude");
let newProject3 = new _project__WEBPACK_IMPORTED_MODULE_3__["default"]("Hehe");
(0,_userinterface__WEBPACK_IMPORTED_MODULE_1__.createProjectInterface)(newProject, newProjectManager)
;(0,_userinterface__WEBPACK_IMPORTED_MODULE_1__.createProjectInterface)(newProject2, newProjectManager)
;(0,_userinterface__WEBPACK_IMPORTED_MODULE_1__.createProjectInterface)(newProject3, newProjectManager)

let aTodo = new _todo__WEBPACK_IMPORTED_MODULE_4__["default"]("Title", "Here is a crazy description", "2004/04/23", "high");
let aTodo2 = new _todo__WEBPACK_IMPORTED_MODULE_4__["default"]("2nd todo", "Here is a crazy description", "2004/04/23", "high");
(0,_userinterface__WEBPACK_IMPORTED_MODULE_1__.createTodoInterface)(aTodo, 0, newProjectManager);
(0,_userinterface__WEBPACK_IMPORTED_MODULE_1__.createTodoInterface)(aTodo2, 0, newProjectManager);
(0,_userinterface__WEBPACK_IMPORTED_MODULE_1__.createTodoInterface)(aTodo, 0, newProjectManager);
(0,_userinterface__WEBPACK_IMPORTED_MODULE_1__.createTodoInterface)(aTodo2, 0, newProjectManager);
(0,_userinterface__WEBPACK_IMPORTED_MODULE_1__.createTodoInterface)(aTodo, 1, newProjectManager);
(0,_userinterface__WEBPACK_IMPORTED_MODULE_1__.createTodoInterface)(aTodo, 1, newProjectManager);
(0,_userinterface__WEBPACK_IMPORTED_MODULE_1__.createTodoInterface)(aTodo, 2, newProjectManager);

aController = new Controller();
aController.setAddProjectButtion();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ29DO0FBQ1Y7QUFDZDtBQUNOO0FBQzRCO0FBQ2hCO0FBQ3RDLDRCQUE0Qix1REFBYztBQUMxQyxxQkFBcUIsZ0RBQU87QUFDNUIsc0JBQXNCLGdEQUFPO0FBQzdCLHNCQUFzQixnREFBTztBQUM3QixzRUFBc0I7QUFDdEIsdUVBQXNCO0FBQ3RCLHVFQUFzQjs7QUFFdEIsZ0JBQWdCLDZDQUFJO0FBQ3BCLGlCQUFpQiw2Q0FBSTtBQUNyQixtRUFBbUI7QUFDbkIsbUVBQW1CO0FBQ25CLG1FQUFtQjtBQUNuQixtRUFBbUI7QUFDbkIsbUVBQW1CO0FBQ25CLG1FQUFtQjtBQUNuQixtRUFBbUI7O0FBRW5CO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RtYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91c2VyaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMjUwcHgpIDNmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcblxufVxuXG4udG9kby1hZGRlciwgLnByb2plY3QtYWRkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YjIxYjY7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTUwO1xufVxuXG4udG9kby1hZGRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5mb3JtLnRvZG8tZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuZm9ybS50b2RvLWZvcm0gPiBkaXYgeyAvKnNlbGVjdCBhbGwgZGl2cyB1bmRlciB0aGUgZm9ybSovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC4ycmVtO1xufVxuXG4udG9kby1mb3JtIC5yYWRpby1vcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRvZG8tZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSwgdGV4dGFyZWEsIGlucHV0W3R5cGU9XCJkYXRlXCJdLCBzZWxlY3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMC4ycmVtO1xufVxuXG5mb3JtIGJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDAuMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWIyMWI2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjFyZW07XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnByb2plY3QtYWRkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDIvMztcbn1cblxuI3Byb2plY3QtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGdyaWQtcm93OiAxLzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTsgLyptaWdodCB3YW50IHRvIHJlbW92ZSBsYXRlciovXG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ2ZmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgXG59XG4ucHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZTlmZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG5cbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mYS1zb2xpZC5mYS10cmFzaC5wcm9qZWN0LWRlbGV0ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLnRvZG8tY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGdhcDogMXJlbTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxufVxuXG4udG9kby1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiAxNXJlbTtcbiAgICBtYXgtd2lkdGg6IDE1cmVtO1xuICAgIG1pbi13aWR0aDogMTVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGdhcDogMC4xcmVtO1xufVxuXG4uZmEtc29saWQuZmEtdHJhc2gudG9kby1kZWxldGUge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbn1cblxuLnRvZG8tY2FyZC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi50b2RvLWRlc2NyaXB0aW9uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udG9kby1kZXNjcmlwdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50b2RvLWNhcmQtZGF0ZSwgLmNhcmQtcHJpb3JpdHkge1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLDRCQUE0QjtJQUM1QixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUEsdUJBQXVCLGlDQUFpQztJQUNwRCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTLEVBQUUsNkJBQTZCO0lBQ3hDLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsY0FBYzs7QUFFbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMjUwcHgpIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4udG9kby1hZGRlciwgLnByb2plY3QtYWRkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWIyMWI2O1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuXFxuLnRvZG8tYWRkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybS50b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbmZvcm0udG9kby1mb3JtID4gZGl2IHsgLypzZWxlY3QgYWxsIGRpdnMgdW5kZXIgdGhlIGZvcm0qL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnRvZG8tZm9ybSAucmFkaW8tb3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi50b2RvLWZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCB0ZXh0YXJlYSwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLCBzZWxlY3Qge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGUgMC4xcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWIyMWI2O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnByb2plY3QtYWRkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07IC8qbWlnaHQgd2FudCB0byByZW1vdmUgbGF0ZXIqL1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ2ZmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBcXG59XFxuLnByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlOWZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZmEtc29saWQuZmEtdHJhc2gucHJvamVjdC1kZWxldGUge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1jYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG5cXG59XFxuXFxuLnRvZG8tY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgbWF4LXdpZHRoOiAxNXJlbTtcXG4gICAgbWluLXdpZHRoOiAxNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGdhcDogMC4xcmVtO1xcbn1cXG5cXG4uZmEtc29saWQuZmEtdHJhc2gudG9kby1kZWxldGUge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcblxcbi50b2RvLWNhcmQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRvZG8tY2FyZC1kYXRlLCAuY2FyZC1wcmlvcml0eSB7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0bWFuYWdlclwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEludGVyZmFjZSB9IGZyb20gXCIuL3VzZXJpbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG5cbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RNYW5hZ2VyID0gbmV3IFByb2plY3RNYW5hZ2VyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRBZGRQcm9qZWN0QnV0dGlvbigpIHtcbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtYWRkLWJ0blwiKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm0tdGl0bGVcIik7XG5cbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0VGl0bGVJbnB1dC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdEludGVyZmFjZShuZXdQcm9qZWN0LCB0aGlzLnByb2plY3RNYW5hZ2VyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbn1cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICB0aXRsZTsvL1N0cmluZyBcbiAgICB0b2RvTGlzdDsgLy9hcnJheSBvZiBUb2RvIG9iamVjdHNcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTsgLy9zZXRzIHRpdGxlIG9mIHByb2plY3QgXG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSBbXTsgLy9pbml0YWxpemUgYXMgZW1wdHkgYXJyYXlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQWRkcyB0b2RvIG9iamVjdCB0byB0aGUgaW5zdGFuY2UncyB0b2RvTGlzdCBhcnJheVxuICAgICAqIEBwYXJhbSB7QSBUb2RvIG9iamVjdH0gdG9kb09iamVjdCBcbiAgICAgKi9cbiAgICBhZGRUb2RvKHRvZG9PYmplY3QpIHtcbiAgICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKHRvZG9PYmplY3QpOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBkZWxldGVzIGEgdG9kbyBvYmplY3QgaW4gdGhlIGluc3RhbmNlJ3MgdG9kb2xpc3QgZ2l2ZW4gYW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge2ludGVnZXIgbnVtYmVyID4gLTEgYW5kIDwgdG9kb0xpc3QubGVuZ3RofSBpbmRleCBcbiAgICAgKi9cblxuICAgIGRlbGV0ZVRvZG8oaW5kZXgpIHtcbiAgICAgICAgdGhpcy50b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGEgdG9kbyBvYmplY3QgZnJvbSB0aGUgaW5zdGFuY2UncyB0b2RvbGlzdCBnaXZlbiBhbiBpbmRleFxuICAgICAqIEBwYXJhbSB7aW50ZWdlciBudW1iZXIgPiAtMSBhbmQgPCB0b2RvTGlzdC5sZW5ndGh9IGluZGV4IFxuICAgICAqL1xuICAgIGdldFRvZG8oaW5kZXgpe1xuICAgICAgICByZXR1cm4gdGhpcy50b2RvTGlzdFtpbmRleF07XG4gICAgfVxuXG4gICAgZ2V0TnVtYmVyT2ZUb2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb0xpc3QubGVuZ3RoO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TWFuYWdlciB7XG5cbiAgICBwcm9qZWN0TGlzdDsgLy9hcnJheSB0aGF0IGNvbnRhaW5zIG9ubHkgcHJvamVjdCBvYmplY3RzXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IFtdOyAvL2luc3RhbnRpYXRlIGFuIGVtcHR5IGFycmF5XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7YW4gaW5zdGFuY2Ugb2YgcHJvamVjdH0gcHJvamVjdCBcbiAgICAgKi9cbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBkZWxldGVzIGEgcHJvamVjdCBnaXZlbiBhbiBpbmRleFxuICAgICAqIEBwYXJhbSB7aW50ZWdlciBudW1iZXIgPiAtMSBhbmQgPCBwcm9qZWN0TGlzdC5sZW5ndGh9IGluZGV4IFxuICAgICAqL1xuICAgIGRlbGV0ZVByb2plY3QoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiAgcmV0dXJucyBhIHByb2plY3Qgb2JqZWN0IGdpdmVuIGFuIGluZGV4XG4gICAgICogQHBhcmFtIHtpbnRlZ2VyIG51bWJlciA+IC0xIGFuZCA8IHByb2plY3RMaXN0Lmxlbmd0aH0gaW5kZXggXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgZ2V0UHJvamVjdChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0TGlzdFtpbmRleF07XG4gICAgfVxuXG4gICAgZ2V0TnVtYmVyT2ZQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdExpc3QubGVuZ3RoO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcblxuICAgIHRpdGxlOyAgLy9zdHJpbmdcbiAgICBkZXNjcmlwdGlvbjsgLy9zdHJpbmdcbiAgICBkdWVEYXRlOyAvL3N0cmluZyBmb3JtYXQgZGF0ZVxuICAgIHByaW9yaXR5OyAvL3N0cmluZywgY2FuIG9ubHkgYmUgaGlnaCwgbWVkaXVtLCBsb3cgb3IgbnVsbFxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIC0gdGhlIHRpdGxlIG9mIHRoZSB0b2RvIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAtIGRlc2NyaXB0aW9uIG9mIHRoZSB0b2RvIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkdWVEYXRlIC0gc3RyaW5nIHJlcGVyc2VudGF0aW9uIG9mIGEgZGF0ZSwgbXVzdCBiZSBpbiBmb3JtYXQgWVlZWS1NTS1ERFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmlvcml0eSAtIHN0cmluZyB2YWx1ZSB0aGF0IGNhbiBvbmx5IGJlIGxvdywgbWVkaXVtLCBoaWdoIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IFxuICAgICAgICAvKmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpOyAoYSB3YXkgdG8gZW5mb3JjZSBZWVlZLU1NLUREIGZvcm1hdClcbiAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7ICovXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7IC8vXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgVGl0bGU6ICR7dGhpcy50aXRsZX0sIERlc2NyaXB0aW9uOiAke3RoaXMuZGVzY3JpcHRpb259LCBEdWUgZGF0ZTogJHt0aGlzLmR1ZURhdGV9LCBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWBcbiAgICB9XG5cbiAgICAvL3NldHRlcnMgYW5kIGdldHRlcnMgbm90IG5lZWRlZCwgYWNjZXNzIHRoZSB2YXJpYWJsZXMgZGlyZWN0bHlcblxufSIsIlxuLyoqXG4gKiBDcmVhdGVzIGEgcHJvamVjdCBpbnRlcmZhY2UgZ2l2ZW4gYSBwcm9qZWN0IG9iamVjdCBhbmQgaW5zZXJ0cyBpbnRvIGEgZ2l2ZW4gUHJvamVjdE1hbmFnZXIgb2JqZWN0XG4gKiBAcGFyYW0ge2EgUHJvamVjdCBvYmplY3R9IHByb2plY3RPYmogXG4gKiBAcGFyYW0ge3Byb2plY3RNYW5hZ2VyfSB0aGUgUHJvamVjdE1hbmFnZXIgb2JqZWN0IGRlcGVuZGVuY3lcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJbnRlcmZhY2UocHJvamVjdE9iaiwgcHJvamVjdE1hbmFnZXIpIHtcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3RPYmopOyBcbiAgICBjcmVhdGVQcm9qZWN0T3B0aW9uKHByb2plY3RPYmosIHByb2plY3RNYW5hZ2VyLmdldE51bWJlck9mUHJvamVjdHMoKSAtIDEpXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpOyBcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgcHJvamVjdE1hbmFnZXIuZ2V0TnVtYmVyT2ZQcm9qZWN0cygpIC0gMSk7XG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RPYmoudGl0bGUpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RPYmoudGl0bGU7XG4gICAgbGV0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtdHJhc2ggcHJvamVjdC1kZWxldGUnKTtcbiAgICBsZXQgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jYXJkLWNvbnRhaW5lclwiKTtcblxuICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyAvL0RlbGV0ZSBmZWF0dXJlXG4gICAgICAgIHByb2plY3QucmVtb3ZlKCk7IC8vcmVtb3ZlIHRoZSBwcm9qZWN0IGZyb20gdGhlIGRvbSBcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuZGVsZXRlUHJvamVjdChOdW1iZXIocHJvamVjdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKSk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RPcHRpb24ocHJvamVjdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdEluZGljZXMoKTsgLy91cGRhdGUgdGhlIGluZGV4ZXNcbiAgICB9KTtcblxuICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb246IFVwZGF0ZSB0aGUgZGF0YS1pbmRleCBvZiBlYWNoIHByb2plY3QgZG9tIGVsZW1lbnQgYW5kIG9wdGlvbiBlbGVtZW50IGZyb20gMCB0byAjIG9mIHByb2plY3RzIC0gMVxuICovXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0SW5kaWNlcygpIHtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgbGV0IHByb2plY3RPcHRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvamVjdExpc3RbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbkxpc3RbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpKTtcbiAgICB9XG59O1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhbiBvcHRpb24gZG9tIGVsZW1lbnQgZnJvbSBhIHByb2plY3Qgb2JqXG4gKiBAcGFyYW0geyp9IHByb2plY3RPYmogXG4gKiBAcGFyYW0geyp9IHByb2plY3RNYW5hZ2VyIFxuICovXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0T3B0aW9uKHByb2plY3RPYmosIGRhdGFpbmRleCkge1xuICAgIGxldCBwcm9qZWN0U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICAgIGxldCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9qZWN0T2JqLnRpdGxlKVxuICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGRhdGFpbmRleCk7XG4gICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdE9iai50aXRsZTtcbiAgICBwcm9qZWN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgZGVsZXRlcyBhbiBvcHRpb24gZG9tIGVsZW1lbnQgZ2l2ZW4gYSBkYXRhaW5kZXhcbiAqIEBwYXJhbSB7fSBkYXRhaW5kZXhcbiAqL1xuZnVuY3Rpb24gZGVsZXRlUHJvamVjdE9wdGlvbihkYXRhaW5kZXgpIHtcbiAgICBsZXQgb3B0aW9uVG9EZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBvcHRpb25bZGF0YS1pbmRleD1cIiR7ZGF0YWluZGV4fVwiXWApO1xuICAgIGNvbnNvbGUubG9nKG9wdGlvblRvRGVsZXRlKTtcbiAgICBvcHRpb25Ub0RlbGV0ZS5yZW1vdmUoKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvSW50ZXJmYWNlKHRvZG9PYmosIHByb2plY3RJbmRleCwgcHJvamVjdE1hbmFnZXIpIHtcbiAgICBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KHByb2plY3RJbmRleCkuYWRkVG9kbyh0b2RvT2JqKTsgLy9hZGQgdG8gdGhlIGFwcHJvcHJpYXRlIHByb2plY3RcblxuICAgIGxldCB0b2RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZChcInRvZG8tY2FyZFwiKTtcbiAgICB0b2RvQ2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QocHJvamVjdEluZGV4KS5nZXROdW1iZXJPZlRvZG9zKCkgLSAxKVxuXG4gICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNhcmQtdGl0bGVcIik7XG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdG9kb09iai50aXRsZTtcbiAgICBcbiAgICBsZXQgY2FyZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmREYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNhcmQtZGF0ZVwiKTtcbiAgICBjYXJkRGF0ZS50ZXh0Q29udGVudCA9IHRvZG9PYmouZHVlRGF0ZTtcblxuICAgIGxldCBjYXJkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1wcmlvcml0eVwiKTtcbiAgICBjYXJkUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dG9kb09iai5wcmlvcml0eX1gXG5cbiAgICBsZXQgY2FyZERlc2NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZERlc2NUaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvbi10aXRsZVwiKTtcbiAgICBjYXJkRGVzY1RpdGxlLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXG4gICAgbGV0IGNhcmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkRGVzYy5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvblwiKTtcbiAgICBjYXJkRGVzYy50ZXh0Q29udGVudCA9IHRvZG9PYmouZGVzY3JpcHRpb247XG5cbiAgICBsZXQgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS10cmFzaCB0b2RvLWRlbGV0ZScpO1xuXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3QgPSB0b2RvQ2FyZC5jbG9zZXN0KFwiLnByb2plY3RcIikgLy9nZXQgaXRzIHByb2plY3QgZG9tIGVsZW1lbnRcbiAgICAgICAgdG9kb0NhcmQucmVtb3ZlKCk7IC8vcmVtb3ZlIHRoZSBjYXJkIGZyb20gdGhlIGRvbVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgLy9kZWxldGUgdGhlIHRvZG8gZnJvbSB0aGUgY29ycmVzcG9uZGluZyBwcm9qZWN0IG9iamVjdCByZXAuXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QoTnVtYmVyKHByb2plY3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSkpLmRlbGV0ZVRvZG8oTnVtYmVyKHRvZG9DYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpKTtcbiAgICAgICAgdXBkYXRlVG9kb0luZGljZXMoTnVtYmVyKHByb2plY3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSkpO1xuXG4gICAgfSlcblxuICAgIGxldCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RbZGF0YS1pbmRleD1cIiR7cHJvamVjdEluZGV4fVwiXSAudG9kby1jYXJkLWNvbnRhaW5lcmApO1xuXG4gICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChjYXJkRGF0ZSk7XG4gICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFByaW9yaXR5KTtcbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzY1RpdGxlKTtcbiAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzYyk7XG4gICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ2FyZCk7XG4gICAgXG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgZGF0YS1pbmRleCBhdHRyaWJ1dGVzIG9mIHRvZG8tY2FyZHMgdW5kZXIgYSBwYXJ0aWN1bGFyIHByb2plY3QgZG9tIGVsZW1lbnQgZ2l2ZW4gaXRzIGRhdGFpbmRleFxuICogQHBhcmFtIHsqfSBwcm9qZWN0SW5kZXggXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVRvZG9JbmRpY2VzKHByb2plY3RJbmRleCkge1xuICAgIFxuICAgIGxldCB0b2RvQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucHJvamVjdFtkYXRhLWluZGV4PVwiJHtwcm9qZWN0SW5kZXh9XCJdIC50b2RvLWNhcmRgKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgdG9kb0NhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpO1xuICAgICAgICBpKys7XG4gICAgfSlcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEludGVyZmFjZSB9IGZyb20gJy4vdXNlcmludGVyZmFjZSdcbmltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3RtYW5hZ2VyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgY3JlYXRlVG9kb0ludGVyZmFjZSB9IGZyb20gJy4vdXNlcmludGVyZmFjZSc7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xubGV0IG5ld1Byb2plY3RNYW5hZ2VyID0gbmV3IFByb2plY3RNYW5hZ2VyKCk7XG5sZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiTk8gd2F5XCIpXG5sZXQgbmV3UHJvamVjdDIgPSBuZXcgUHJvamVjdChcIkhleSBkdWRlXCIpO1xubGV0IG5ld1Byb2plY3QzID0gbmV3IFByb2plY3QoXCJIZWhlXCIpO1xuY3JlYXRlUHJvamVjdEludGVyZmFjZShuZXdQcm9qZWN0LCBuZXdQcm9qZWN0TWFuYWdlcilcbmNyZWF0ZVByb2plY3RJbnRlcmZhY2UobmV3UHJvamVjdDIsIG5ld1Byb2plY3RNYW5hZ2VyKVxuY3JlYXRlUHJvamVjdEludGVyZmFjZShuZXdQcm9qZWN0MywgbmV3UHJvamVjdE1hbmFnZXIpXG5cbmxldCBhVG9kbyA9IG5ldyBUb2RvKFwiVGl0bGVcIiwgXCJIZXJlIGlzIGEgY3JhenkgZGVzY3JpcHRpb25cIiwgXCIyMDA0LzA0LzIzXCIsIFwiaGlnaFwiKTtcbmxldCBhVG9kbzIgPSBuZXcgVG9kbyhcIjJuZCB0b2RvXCIsIFwiSGVyZSBpcyBhIGNyYXp5IGRlc2NyaXB0aW9uXCIsIFwiMjAwNC8wNC8yM1wiLCBcImhpZ2hcIik7XG5jcmVhdGVUb2RvSW50ZXJmYWNlKGFUb2RvLCAwLCBuZXdQcm9qZWN0TWFuYWdlcik7XG5jcmVhdGVUb2RvSW50ZXJmYWNlKGFUb2RvMiwgMCwgbmV3UHJvamVjdE1hbmFnZXIpO1xuY3JlYXRlVG9kb0ludGVyZmFjZShhVG9kbywgMCwgbmV3UHJvamVjdE1hbmFnZXIpO1xuY3JlYXRlVG9kb0ludGVyZmFjZShhVG9kbzIsIDAsIG5ld1Byb2plY3RNYW5hZ2VyKTtcbmNyZWF0ZVRvZG9JbnRlcmZhY2UoYVRvZG8sIDEsIG5ld1Byb2plY3RNYW5hZ2VyKTtcbmNyZWF0ZVRvZG9JbnRlcmZhY2UoYVRvZG8sIDEsIG5ld1Byb2plY3RNYW5hZ2VyKTtcbmNyZWF0ZVRvZG9JbnRlcmZhY2UoYVRvZG8sIDIsIG5ld1Byb2plY3RNYW5hZ2VyKTtcblxuYUNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuYUNvbnRyb2xsZXIuc2V0QWRkUHJvamVjdEJ1dHRpb24oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==