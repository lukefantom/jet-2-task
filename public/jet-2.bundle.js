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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n\n/* ----------------Modal Counter----------------*/\n\nvar modalCounter = document.getElementById(\"modal-counter\");\n/* ----------------Manage modals----------------*/\n\nvar manageModals = function manageModals() {\n  // Create a random id to locate each modal\n  var id = Math.floor(Math.random() * 100); // Select container and modal template from DOM\n\n  var container = document.getElementById(\"modal-container\");\n  var template = document.getElementById(\"template\"); // Clone the modal template & append with unique id\n\n  var modal = template.cloneNode(true);\n  modal.id = id;\n  modal.classList.remove(\"overlay--hidden\"); //  Select continue/cancel button from DOM\n  //  Append with unique id & add event listener\n\n  var continueButton = modal.querySelector(\"#continue\");\n  continueButton.id = id;\n  continueButton.addEventListener(\"click\", removeModal);\n  var cancelButton = modal.querySelector(\"#cancel\");\n  cancelButton.id = id;\n  cancelButton.addEventListener(\"click\", removeModal); // Append overlay container with new modal\n\n  container.appendChild(modal); // Count the number of modals on page & update modal count text\n\n  var numberOfModals = document.getElementsByClassName(\"modal\").length - 1;\n  modalCounter.innerText = \"Modal Count: \".concat(numberOfModals);\n};\n/* ----------------Remove modal function----------------*/\n\n\nvar removeModal = function removeModal(event) {\n  var id = event.target.id;\n  var modal = document.getElementById(id);\n  modal.remove(); // Decrement the count every time a modal is removed\n\n  var numberOfModals = document.getElementsByClassName(\"modal\").length - 1;\n  modalCounter.innerText = \"Modal Count: \".concat(numberOfModals);\n};\n/* ----------------Add modal button----------------*/\n\n\nvar addModalButton = document.getElementById(\"add-modal\");\naddModalButton.addEventListener(\"click\", manageModals);\n\n//# sourceURL=webpack://jet-2/./src/index.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://jet-2/./src/styles/main.scss?");

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
/******/ 			// no module.id needed
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