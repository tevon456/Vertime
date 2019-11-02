(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/src/components/pages/Token.js":
/*!****************************************************!*\
  !*** ./resources/js/src/components/pages/Token.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_Routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../constants/Routes */ "./resources/js/src/constants/Routes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_apiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/apiHelper */ "./resources/js/src/helper/apiHelper.js");
/* harmony import */ var _ui_content_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/content/Container */ "./resources/js/src/components/ui/content/Container.js");
/* harmony import */ var _ui_navigation_CustomLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/navigation/CustomLink */ "./resources/js/src/components/ui/navigation/CustomLink.js");
/* harmony import */ var _elements_Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/Head */ "./resources/js/src/components/elements/Head.js");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/Page */ "./resources/js/src/components/elements/Page.js");
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! idb-keyval */ "./node_modules/idb-keyval/dist/idb-keyval.mjs");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Token =
/*#__PURE__*/
function (_Component) {
  _inherits(Token, _Component);

  function Token(props) {
    var _this;

    _classCallCheck(this, Token);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Token).call(this, props));
    _this.state = {
      content: {},
      option: null,
      isLoading: true
    };
    _this.setState = _this.setState.bind(_assertThisInitialized(_this));
    _this.TokenPageContent = _this.TokenPageContent.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Token, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.TokenPageContent();
    }
  }, {
    key: "TokenPageContent",
    value: function TokenPageContent() {
      var _this2 = this;

      //new object for content of page
      var content = {}; //Get the first pathname to determine

      var path = this.props.match.path.split("/")[1]; //Get token form param

      var token = this.props.match.params.token;

      if (path === "activate") {
        content.title = "Account activation";
        Object(_helper_apiHelper__WEBPACK_IMPORTED_MODULE_2__["activateAccount"])(token).then(function (res) {
          content.message = res.data.message;

          _this2.setState({
            content: content,
            option: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_navigation_CustomLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
              to: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]
            }, "Click here to login"),
            isLoading: false
          });
        })["catch"](function (error) {
          if (error.response) {
            content.message = error.response.data.message;

            _this2.setState({
              content: content,
              isLoading: false
            });
          }
        });
      } else {
        content.title = "Password reset";
        Object(_helper_apiHelper__WEBPACK_IMPORTED_MODULE_2__["findPassword"])(token).then(function (res) {
          content.message = "Password token valid";
          console.log(res.data);
          Object(idb_keyval__WEBPACK_IMPORTED_MODULE_7__["set"])("reset", res.data);

          _this2.setState({
            content: content,
            option: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_navigation_CustomLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
              to: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["PASSWORD_RESET"] + _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["UPDATE"] + "/".concat(res.data.token)
            }, "Click here to continue"),
            isLoading: false
          });
        })["catch"](function (error) {
          if (error.response) {
            content.message = error.response.data.message;

            _this2.setState({
              content: content,
              option: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_navigation_CustomLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                to: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["PASSWORD_RESET"]
              }, "Try resetting again"),
              isLoading: false
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var d = this.state;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
        padding: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elements_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "Token"
      }), d.isLoading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Loading...") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, d.content.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_content_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, d.content.message), d.option)));
    }
  }]);

  return Token;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Token);

/***/ })

}]);