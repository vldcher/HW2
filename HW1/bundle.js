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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseClass = function () {
    function BaseClass(id, name, hourRate) {
        _classCallCheck(this, BaseClass);

        this.id = id;
        this.name = name;
        this.hourRate = hourRate;
    }

    _createClass(BaseClass, [{
        key: 'getSalary',
        value: function getSalary() {
            return this.calcSalary();
        }
    }, {
        key: 'calcSalary',
        value: function calcSalary() {
            var salary = 20.8 * 8 * this.hourRate;
            return salary;
        }
    }]);

    return BaseClass;
}();

var WageEmployee = function (_BaseClass) {
    _inherits(WageEmployee, _BaseClass);

    function WageEmployee() {
        _classCallCheck(this, WageEmployee);

        return _possibleConstructorReturn(this, (WageEmployee.__proto__ || Object.getPrototypeOf(WageEmployee)).apply(this, arguments));
    }

    _createClass(WageEmployee, [{
        key: 'calcSalary',
        value: function calcSalary() {
            var salary = 20.8 * 8 * this.hourRate / 2;
            return salary;
        }
    }]);

    return WageEmployee;
}(BaseClass);

var FixedRateEmployee = function (_BaseClass2) {
    _inherits(FixedRateEmployee, _BaseClass2);

    function FixedRateEmployee() {
        _classCallCheck(this, FixedRateEmployee);

        return _possibleConstructorReturn(this, (FixedRateEmployee.__proto__ || Object.getPrototypeOf(FixedRateEmployee)).apply(this, arguments));
    }

    _createClass(FixedRateEmployee, [{
        key: 'calcSalary',
        value: function calcSalary() {
            var salary = 20.8 * 8 * this.hourRate / 3;
            return salary;
        }
    }]);

    return FixedRateEmployee;
}(BaseClass);

var firstEmployee = new BaseClass(1, 'Jack', 40);

var firstEmployeeSalary = firstEmployee.getSalary();
console.log(firstEmployeeSalary);

/***/ })
/******/ ]);