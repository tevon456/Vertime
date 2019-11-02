(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/src/components/elements/OverviewRoute.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/elements/OverviewRoute.js ***!
  \***************************************************************/
/*! exports provided: OverviewContext, OverviewProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewContext", function() { return OverviewContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewProvider", function() { return OverviewProvider; });
/* harmony import */ var _constants_Routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/Routes */ "./resources/js/src/constants/Routes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helper_apiHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/apiHelper */ "./resources/js/src/helper/apiHelper.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../App */ "./resources/js/src/App.js");
/* harmony import */ var _helper_authHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/authHelper */ "./resources/js/src/helper/authHelper.js");
/* harmony import */ var _ui_content_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/content/Error */ "./resources/js/src/components/ui/content/Error.js");
/* harmony import */ var _GuardRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GuardRoute */ "./resources/js/src/components/elements/GuardRoute.js");
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../pages/NotFound */ "./resources/js/src/components/pages/NotFound.js");
/* harmony import */ var _ui_navigation_SubNavigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../ui/navigation/SubNavigation */ "./resources/js/src/components/ui/navigation/SubNavigation.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Employee = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./../pages/EmployeeOverview */ "./resources/js/src/components/pages/EmployeeOverview.js"));
});
var OverviewContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var OverviewProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(OverviewProvider, _Component);

  function OverviewProvider(props) {
    var _this;

    _classCallCheck(this, OverviewProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OverviewProvider).call(this, props));
    _this.state = {
      managerQueue: [],
      userTimesheets: [],
      clients: [],
      isLoading: true
    };
    _this.getData = _this.getData.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OverviewProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: "getData",
    value: function getData() {
      {
        _helper_authHelper__WEBPACK_IMPORTED_MODULE_5__["Authorization"].roleHasPermission(["approve timesheet"]) ? this.getManagerData() : this.getEmployeeData();
      }
    }
  }, {
    key: "getManagerData",
    value: function getManagerData() {}
  }, {
    key: "getEmployeeData",
    value: function getEmployeeData() {
      var _this2 = this;

      Object(_helper_apiHelper__WEBPACK_IMPORTED_MODULE_3__["getClients"])().then(function (res) {
        _this2.setState({
          clients: res.data
        });
      });
      Object(_helper_apiHelper__WEBPACK_IMPORTED_MODULE_3__["getUserTimesheets"])().then(function (res) {
        _this2.setState({
          userTimesheets: res.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OverviewContext.Provider, {
        value: {
          state: this.state,
          getData: this.getData
        }
      }, this.props.children);
    }
  }]);

  return OverviewProvider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function LinkMap() {
  var linkmap = {};

  if (_helper_authHelper__WEBPACK_IMPORTED_MODULE_5__["Authorization"].roleHasPermission(["approve timesheet"])) {
    linkmap = [{
      link: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["OVERVIEW"],
      name: "Overview",
      exact: true
    }];
  } else if (_helper_authHelper__WEBPACK_IMPORTED_MODULE_5__["Authorization"].roleHasPermission(["create timesheet"])) {
    linkmap = [{
      link: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["OVERVIEW"],
      name: "Time log",
      exact: true
    }];
  }

  return linkmap;
}

function OverviewRoute() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_content_Error__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["AppContext"].Consumer, null, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OverviewProvider, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(OverviewContext.Consumer, null, function (overview) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "margin-top--xl"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_navigation_SubNavigation__WEBPACK_IMPORTED_MODULE_9__["SubNav"], {
        linkmap: LinkMap()
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, _helper_authHelper__WEBPACK_IMPORTED_MODULE_5__["Authorization"].roleHasPermission(["approve timesheet"]) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ManagerRoutes, {
        refresh: overview.getData,
        user: context.state.user
      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmployeeRoutes, {
        refresh: overview.getData,
        user: context.state.user
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        component: _pages_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"]
      })));
    }));
  }));
}

function ManagerRoutes(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GuardRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
    exact: true,
    path: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["OVERVIEW"],
    permission: ["approve timesheet"],
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    }
  }));
}

function EmployeeRoutes(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GuardRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
    path: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["OVERVIEW"],
    permission: ["create timesheet"],
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Employee, {
        refresh: props.refresh,
        user: props.user
      });
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (OverviewRoute);

/***/ }),

/***/ "./resources/js/src/components/ui/navigation/SubNavigation.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/ui/navigation/SubNavigation.js ***!
  \********************************************************************/
/*! exports provided: SubNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNav", function() { return SubNav; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        border-bottom: 1px solid var(--light-grey);\n        margin-bottom: -3em;\n        display: flex;\n        justify-content: center;\n\n        > a {\n            padding: 6px 10px;\n            text-decoration: none;\n            color: var(--secondary-color);\n        }\n\n        > a:hover {\n            color: var(--grey);\n        }\n\n        .sub {\n            border-bottom: 4px solid var(--accent-color-light);\n        }\n        .sub:hover {\n            color: var(--secondary-color);\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function SubNav(props) {
  var StyledSubNav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSubNav, {
    className: "margin-top--sm margin-bottom--lg"
  }, props.linkmap.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["NavLink"], {
      key: link.link,
      tabIndex: "0",
      activeClassName: "sub",
      exact: link.exact,
      to: link.link
    }, link.name);
  }));
}

/***/ })

}]);