/* eslint-disable */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/love.png */ "./src/assets/love.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/liked.png */ "./src/assets/liked.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.logo {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: contain;\r\n  width: 121px;\r\n  height: 57px;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n}\r\n\r\nul li {\r\n  margin-right: 30px;\r\n}\r\n\r\nheader ul li a {\r\n  color: black;\r\n}\r\n\r\nfooter {\r\n  bottom: 14px;\r\n  right: 15px;\r\n  left: 15px;\r\n  border: 2px solid #000;\r\n  padding: 1em 2em;\r\n  margin: 50px 25px;\r\n}\r\n\r\nfooter span {\r\n  font-size: 18px;\r\n}\r\n\r\n.shows-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 50px;\r\n  gap: 30px;\r\n}\r\n\r\n.show {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 6px;\r\n}\r\n\r\n.title {\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.show-img {\r\n  min-width: 300px;\r\n}\r\n\r\n.info-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.like-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5em;\r\n}\r\n\r\n.like-icon {\r\n  display: block;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  height: 30px;\r\n  width: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.like-icon:active {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.comment-btn {\r\n  padding: 3px 5px;\r\n  font-size: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #000;\r\n  border-radius: 5px;\r\n}\r\n\r\n.comment-btn:active {\r\n  background-color: #ff5757;\r\n  color: #fff;\r\n}\r\n\r\n.popup-container {\r\n  display: none;\r\n  position: fixed;\r\n  inset: 0;\r\n  overflow-y: scroll;\r\n\r\n  /* background: #6470d7; */\r\n\r\n  background-color: #000;\r\n\r\n  /* mix-blend-mode: multiply;\r\n  backdrop-filter: blur(10px); */\r\n}\r\n\r\n.popup {\r\n  min-height: 100px;\r\n\r\n  /* background: #fff; */\r\n  background-color: #000;\r\n  max-width: 100%;\r\n  border: 1px solid #dfe1e6;\r\n  border-radius: 16px;\r\n  margin: 30px;\r\n  padding: 16px;\r\n  box-shadow: 0 48px 48px rgba(37, 47, 137, 0.08);\r\n  text-align: center;\r\n  position: relative;\r\n  color: #fff;\r\n}\r\n\r\n.original-img {\r\n  object-fit: cover;\r\n  width: 700px;\r\n  max-width: 100%;\r\n  max-height: 600px;\r\n}\r\n\r\n.close-popup-btn {\r\n  position: absolute;\r\n  top: 16px;\r\n  right: 10%;\r\n  font-size: 50px;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup .details {\r\n  text-align: center;\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n}\r\n\r\nh1 {\r\n  margin: 16px;\r\n  font-size: 38px;\r\n}\r\n\r\n.popup .details ul {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  margin: 18px auto;\r\n}\r\n\r\n.comments li span:nth-child(2) {\r\n  color: #ff0;\r\n}\r\n\r\n.popup .details ul li span:nth-child(1) {\r\n  font-weight: 500;\r\n}\r\n\r\n.popup .details ul li span:nth-child(2) {\r\n  font-weight: 400;\r\n}\r\n\r\n.popup .details .excerpt {\r\n  text-align: start;\r\n}\r\n\r\n.popup h4 {\r\n  font-size: 21px;\r\n  font-weight: 400;\r\n  margin-top: 30px;\r\n}\r\n\r\n.popup .comments ul {\r\n  display: block;\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  text-align: start;\r\n  margin-top: 12px;\r\n}\r\n\r\n.comments ul li {\r\n  margin-top: 5px;\r\n}\r\n\r\n#add-comment {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  text-align: start;\r\n}\r\n\r\n#add-comment input {\r\n  margin-top: 21px;\r\n  padding: 6px;\r\n}\r\n\r\n#add-comment textarea {\r\n  margin: 14px 0;\r\n  padding: 6px;\r\n}\r\n\r\n#add-comment button {\r\n  color: #000;\r\n  background-color: #fff;\r\n  min-width: 120px;\r\n  min-height: 26px;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,yDAAyC;EACzC,wBAAwB;EACxB,YAAY;EACZ,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,UAAU;EACV,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,yDAAyC;EACzC,wBAAwB;EACxB,4BAA4B;EAC5B,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,yDAA0C;AAC5C;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,kBAAkB;;EAElB,yBAAyB;;EAEzB,sBAAsB;;EAEtB;gCAC8B;AAChC;;AAEA;EACE,iBAAiB;;EAEjB,sBAAsB;EACtB,sBAAsB;EACtB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,+CAA+C;EAC/C,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;AACjB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100&display=swap\");\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.logo {\r\n  background-image: url(../assets/logo.png);\r\n  background-size: contain;\r\n  width: 121px;\r\n  height: 57px;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n}\r\n\r\nul li {\r\n  margin-right: 30px;\r\n}\r\n\r\nheader ul li a {\r\n  color: black;\r\n}\r\n\r\nfooter {\r\n  bottom: 14px;\r\n  right: 15px;\r\n  left: 15px;\r\n  border: 2px solid #000;\r\n  padding: 1em 2em;\r\n  margin: 50px 25px;\r\n}\r\n\r\nfooter span {\r\n  font-size: 18px;\r\n}\r\n\r\n.shows-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 50px;\r\n  gap: 30px;\r\n}\r\n\r\n.show {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 6px;\r\n}\r\n\r\n.title {\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.show-img {\r\n  min-width: 300px;\r\n}\r\n\r\n.info-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.like-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5em;\r\n}\r\n\r\n.like-icon {\r\n  display: block;\r\n  background-image: url(../assets/love.png);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  height: 30px;\r\n  width: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.like-icon:active {\r\n  background-image: url(../assets/liked.png);\r\n}\r\n\r\n.comment-btn {\r\n  padding: 3px 5px;\r\n  font-size: 16px;\r\n  background-color: #fff;\r\n  border: 1px solid #000;\r\n  border-radius: 5px;\r\n}\r\n\r\n.comment-btn:active {\r\n  background-color: #ff5757;\r\n  color: #fff;\r\n}\r\n\r\n.popup-container {\r\n  display: none;\r\n  position: fixed;\r\n  inset: 0;\r\n  overflow-y: scroll;\r\n\r\n  /* background: #6470d7; */\r\n\r\n  background-color: #000;\r\n\r\n  /* mix-blend-mode: multiply;\r\n  backdrop-filter: blur(10px); */\r\n}\r\n\r\n.popup {\r\n  min-height: 100px;\r\n\r\n  /* background: #fff; */\r\n  background-color: #000;\r\n  max-width: 100%;\r\n  border: 1px solid #dfe1e6;\r\n  border-radius: 16px;\r\n  margin: 30px;\r\n  padding: 16px;\r\n  box-shadow: 0 48px 48px rgba(37, 47, 137, 0.08);\r\n  text-align: center;\r\n  position: relative;\r\n  color: #fff;\r\n}\r\n\r\n.original-img {\r\n  object-fit: cover;\r\n  width: 700px;\r\n  max-width: 100%;\r\n  max-height: 600px;\r\n}\r\n\r\n.close-popup-btn {\r\n  position: absolute;\r\n  top: 16px;\r\n  right: 10%;\r\n  font-size: 50px;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup .details {\r\n  text-align: center;\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n}\r\n\r\nh1 {\r\n  margin: 16px;\r\n  font-size: 38px;\r\n}\r\n\r\n.popup .details ul {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  margin: 18px auto;\r\n}\r\n\r\n.comments li span:nth-child(2) {\r\n  color: #ff0;\r\n}\r\n\r\n.popup .details ul li span:nth-child(1) {\r\n  font-weight: 500;\r\n}\r\n\r\n.popup .details ul li span:nth-child(2) {\r\n  font-weight: 400;\r\n}\r\n\r\n.popup .details .excerpt {\r\n  text-align: start;\r\n}\r\n\r\n.popup h4 {\r\n  font-size: 21px;\r\n  font-weight: 400;\r\n  margin-top: 30px;\r\n}\r\n\r\n.popup .comments ul {\r\n  display: block;\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  text-align: start;\r\n  margin-top: 12px;\r\n}\r\n\r\n.comments ul li {\r\n  margin-top: 5px;\r\n}\r\n\r\n#add-comment {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  text-align: start;\r\n}\r\n\r\n#add-comment input {\r\n  margin-top: 21px;\r\n  padding: 6px;\r\n}\r\n\r\n#add-comment textarea {\r\n  margin: 14px 0;\r\n  padding: 6px;\r\n}\r\n\r\n#add-comment button {\r\n  color: #000;\r\n  background-color: #fff;\r\n  min-width: 120px;\r\n  min-height: 26px;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsCounter.js */ "./src/modules/commentsCounter.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (showId, name, comment) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cS3EqkNOcFMRSZQU2K7t/comments';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: showId,
      username: name,
      comment,
    }),
  });

  (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});


/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (id) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cS3EqkNOcFMRSZQU2K7t/likes/';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
});

/***/ }),

/***/ "./src/modules/addShow.js":
/*!********************************!*\
  !*** ./src/modules/addShow.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((id, title, image) => {
  const showContainer = document.querySelector('.shows-wrapper');
  const showDiv = document.createElement('div');
  showDiv.className = 'show';
  showDiv.setAttribute('id', id);
  const showImg = document.createElement('img');
  showImg.setAttribute('src', image);
  showImg.setAttribute('alt', title);
  showImg.className = 'show-img';
  showDiv.appendChild(showImg);
  const infoWrapper = document.createElement('div');
  infoWrapper.className = 'info-wrapper';
  const showTitle = document.createElement('span');
  showTitle.className = 'title';
  showTitle.textContent = title;
  infoWrapper.appendChild(showTitle);
  const likeContainer = document.createElement('div');
  likeContainer.className = 'like-container';
  const likeIcon = document.createElement('i');
  likeIcon.className = 'like-icon';
  likeContainer.appendChild(likeIcon);
  const likesNumber = document.createElement('span');
  likesNumber.className = 'like-number';
  likesNumber.textContent = 'loading...';
  likeContainer.appendChild(likesNumber);
  infoWrapper.appendChild(likeContainer);
  showDiv.appendChild(infoWrapper);
  const commentBtn = document.createElement('button');
  commentBtn.className = 'comment-btn';
  commentBtn.textContent = 'Comment';
  showDiv.appendChild(commentBtn);
  showContainer.appendChild(showDiv);
});


/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addShow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addShow.js */ "./src/modules/addShow.js");
/* harmony import */ var _getShows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getShows.js */ "./src/modules/getShows.js");
/* harmony import */ var _displayPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayPopup.js */ "./src/modules/displayPopup.js");
/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayLikes.js */ "./src/modules/displayLikes.js");
/* harmony import */ var _addLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addLike.js */ "./src/modules/addLike.js");
/* harmony import */ var _itemsCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./itemsCounter.js */ "./src/modules/itemsCounter.js");
/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addComment.js */ "./src/modules/addComment.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");









const title = document.querySelector('.shows-count');

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const loadShows = async () => {
  let shows = [];
  shows = await (0,_getShows_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  shuffle(shows);
  shows = shows.filter((each, index) => index < 250);
  shows.forEach((each) => {
    (0,_addShow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(each.id, each.name, each.image.medium);
  });
};

// Displaying pop-up when comment btn is clicked
const showsWrapper = document.querySelector('.shows-wrapper');
showsWrapper.addEventListener('click', async (e) => {
  const element = e.target;
  if (element.classList.contains('comment-btn')) {
    (0,_displayPopup_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  }
});

// Hidding pop-up when the close btn is clicked
const popupContainer = document.querySelector('.popup-container');
popupContainer.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('fa-xmark')) {
    popupContainer.style.display = 'none';
    document.querySelector('#body').style.overflow = 'visible';
  }
});

showsWrapper.addEventListener('click', async (e) => {
  const element = e.target;
  if (element.classList.contains('like-icon')) {
    await (0,_addLike_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element.parentElement.parentElement.parentElement.id);
    let likes = '';
    likes = await (0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
      element.parentElement.parentElement.parentElement.id,
    );
    element.nextSibling.innerHTML = `${likes} Likes`;
  }
});

window.onload = loadShows().then(() => {
  title.textContent = `Tv Shows(${(0,_itemsCounter_js__WEBPACK_IMPORTED_MODULE_5__["default"])()})`;
});

// add comment
popupContainer.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('submit-comment')) {
    const name = document.querySelector('#name').value;
    const comment = document.querySelector('#comment').value;
    const showId = element.id;

    if (name === '' || comment === '') return;
    const date = new Date().toISOString().substring(0, 10);

    (0,_addComment_js__WEBPACK_IMPORTED_MODULE_6__["default"])(showId, name, comment);

    const ul = document.querySelector('.comments-list');
    ul.innerHTML += `
    <li class="item">
      <span>${date} ${name}:</span> <span>${comment}</span>
    </li>
  `;
    document.querySelector('#name').value = '';
    document.querySelector('#comment').value = '';
  }
});

// Display Likes on each item on the Homepage

document.addEventListener('DOMContentLoaded', async () => {
  let showsLikes = [];
  showsLikes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const loadedShowsBtn = document.querySelectorAll('.like-number');
  showsLikes.forEach((eachObj) => {
    loadedShowsBtn.forEach((eachElement) => {
      if (eachObj.item_id === eachElement.parentElement.parentElement.parentElement.id) {
        eachElement.textContent = `${eachObj.likes} Likes`;
      }
    });
  });
});

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (document.querySelector('.comments-count').innerHTML = document.querySelectorAll('.item').length);
  return document.querySelectorAll('.item').length;
});


/***/ }),

/***/ "./src/modules/displayLikes.js":
/*!*************************************!*\
  !*** ./src/modules/displayLikes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (id) => {
  let likes = [];
  likes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const likesFilter = likes.filter((each) => each.item_id === id);
  return likesFilter[0].likes;
});


/***/ }),

/***/ "./src/modules/displayPopup.js":
/*!*************************************!*\
  !*** ./src/modules/displayPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getShow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getShow.js */ "./src/modules/getShow.js");
/* harmony import */ var _getShowComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getShowComments.js */ "./src/modules/getShowComments.js");
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentsCounter.js */ "./src/modules/commentsCounter.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((element) => {
  const showId = Number(element.parentElement.id);
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.style.display = 'block';
  document.querySelector('#body').style.overflow = 'hidden';

  const loadShow = async () => {
    let show = {};
    show = await (0,_getShow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(showId);
    // pupulate he popup with data
    popupContainer.innerHTML = `
      <div class="popup">
      <img
        class="original-img"
        alt=""
        src="${show.image.original}"
      />
      <span class="close-popup-btn">
        <i class="fa-solid fa-xmark"></i>
      </span>
  
      <!-- details -->
      <div class="details">
        <h1>${show.name}</h1>
        <ul>
          <li><span>Type: </span><span>${show.type}</span></li>
          <li><span>Rating: </span><span>${show.rating.average}</span></li>
          <li><span>Run time: </span><span>${show.runtime} min</span></li>
          <li><span>Language: </span><span>${show.language}</span></li>
        </ul>
        <div class="excerpt">
        ${show.summary}
        </div>
      </div>
      <!-- comments -->
      <div class="comments">
        <h4>Comments(<span class="comments-count">0</span>)</h4>
        <ul class="comments-list"></ul>
        <h4>Add Comment</h4>
        <form id="add-comment">
          <input type="text" id="name" placeholder="Your name" />
          <br />
          <textarea id="comment" cols="36" rows="10" placeholder="Your insights"></textarea>
          <br>
          <button class="submit-comment" id=${showId} type="button">Comment</button>
        </form>
      </div>
    </div>
      `;

    // Displaying comments
    const showComments = await (0,_getShowComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(showId); // show comments array
    const ul = document.querySelector('.comments-list');
    showComments.forEach((showComment) => {
      ul.innerHTML += `
          <li class="item">
            <span>${showComment.creation_date} ${showComment.username}:</span> <span>${showComment.comment}</span>
          </li>
        `;
    });

    (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  };

  loadShow();
});


/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
  const link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cS3EqkNOcFMRSZQU2K7t/likes/';
  return (await fetch(link)).json();
});

/***/ }),

/***/ "./src/modules/getShow.js":
/*!********************************!*\
  !*** ./src/modules/getShow.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (id) => {
  const link = `https://api.tvmaze.com/shows/${id}`;
  return (await fetch(link)).json();
});

/***/ }),

/***/ "./src/modules/getShowComments.js":
/*!****************************************!*\
  !*** ./src/modules/getShowComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (showId) => {
  const link = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cS3EqkNOcFMRSZQU2K7t/comments?item_id=${
    showId}`;
  return (await fetch(link)).json();
});


/***/ }),

/***/ "./src/modules/getShows.js":
/*!*********************************!*\
  !*** ./src/modules/getShows.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {
  const link = 'https://api.tvmaze.com/shows';
  return (await fetch(link)).json();
});

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => document.querySelectorAll('.show').length);

/***/ }),

/***/ "./src/assets/liked.png":
/*!******************************!*\
  !*** ./src/assets/liked.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "438b86749e09e60e3eca.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3e494fd6fe26b7962e5.png";

/***/ }),

/***/ "./src/assets/love.png":
/*!*****************************!*\
  !*** ./src/assets/love.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0781e9b86b2d541b5494.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app.js */ "./src/modules/app.js");



})();

/******/ })()
;
//# sourceMappingURL=bundleab8bdc60b540e3554801.js.map