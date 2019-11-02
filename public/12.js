(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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
/* harmony import */ var _pages_ManagerOverview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/ManagerOverview */ "./resources/js/src/components/pages/ManagerOverview.js");
/* harmony import */ var _ui_navigation_SubNavigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../ui/navigation/SubNavigation */ "./resources/js/src/components/ui/navigation/SubNavigation.js");
/* harmony import */ var _pages_Test__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../pages/Test */ "./resources/js/src/components/pages/Test.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Property = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./../pages/LandLordProperty */ "./resources/js/src/components/pages/LandLordProperty.js"));
});
var Unit = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./../pages/LandLordUnit */ "./resources/js/src/components/pages/LandLordUnit.js"));
});
var Employee = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./../pages/EmployeeOverview */ "./resources/js/src/components/pages/EmployeeOverview.js"));
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
      userProperties: [],
      userUnits: [],
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
        _helper_authHelper__WEBPACK_IMPORTED_MODULE_5__["Authorization"].roleHasPermission(["create listing"]) ? this.getLandLordData() : null;
      }
    }
  }, {
    key: "getLandLordData",
    value: function getLandLordData() {
      var _this2 = this;

      Object(_helper_apiHelper__WEBPACK_IMPORTED_MODULE_3__["getUserProperties"])().then(function (res) {
        _this2.setState({
          isLoading: _this2.state.userProperties === undefined ? true : false,
          userProperties: res.data
        });
      });
      Object(_helper_apiHelper__WEBPACK_IMPORTED_MODULE_3__["getUserUnits"])().then(function (res) {
        _this2.setState({
          userUnits: res.data
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

  if (_helper_authHelper__WEBPACK_IMPORTED_MODULE_5__["Authorization"].roleHasPermission(["create listing", "edit listing"])) {
    linkmap = [{
      link: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["OVERVIEW"],
      name: "Overview",
      exact: true
    }, {
      link: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["OVERVIEW"] + _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["PROPERTY"],
      name: "My Properties",
      exact: true
    }, {
      link: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["OVERVIEW"] + _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["UNIT"],
      name: "My Units",
      exact: true
    }, {
      link: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["OVERVIEW"] + "/employee",
      name: "Employee View",
      exact: true
    }];
  } else {
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
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ui_navigation_SubNavigation__WEBPACK_IMPORTED_MODULE_10__["SubNav"], {
        linkmap: LinkMap()
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, _helper_authHelper__WEBPACK_IMPORTED_MODULE_5__["Authorization"].roleHasPermission(["create listing"]) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ManagerRoutes, {
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
    permission: ["create listing", "create property"],
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_ManagerOverview__WEBPACK_IMPORTED_MODULE_9__["default"], {
        refresh: props.refresh,
        user: props.user
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GuardRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
    path: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["OVERVIEW"] + _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["PROPERTY"],
    permission: ["delete property", "edit property"],
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Property, {
        refresh: props.refresh,
        user: props.user
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GuardRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
    path: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["OVERVIEW"] + _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["UNIT"],
    permission: ["edit listing", "delete listing"],
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Unit, {
        refresh: props.refresh,
        user: props.user
      });
    }
  }));
}

function EmployeeRoutes() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: _constants_Routes__WEBPACK_IMPORTED_MODULE_0__["OVERVIEW"],
    render: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_Test__WEBPACK_IMPORTED_MODULE_11__["default"], null);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (OverviewRoute);

/***/ }),

/***/ "./resources/js/src/components/pages/ManagerOverview.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/pages/ManagerOverview.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements_FlexView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/FlexView */ "./resources/js/src/components/elements/FlexView.js");
/* harmony import */ var _constants_Routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/Routes */ "./resources/js/src/constants/Routes.js");
/* harmony import */ var _ui_inputs_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/inputs/Form */ "./resources/js/src/components/ui/inputs/Form.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_surfaces_Badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/surfaces/Badge */ "./resources/js/src/components/ui/surfaces/Badge.js");
/* harmony import */ var _ui_surfaces_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/surfaces/Card */ "./resources/js/src/components/ui/surfaces/Card.js");
/* harmony import */ var _ui_content_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/content/Container */ "./resources/js/src/components/ui/content/Container.js");
/* harmony import */ var _ui_content_Line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/content/Line */ "./resources/js/src/components/ui/content/Line.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ui_surfaces_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/surfaces/Modal */ "./resources/js/src/components/ui/surfaces/Modal.js");
/* harmony import */ var _elements_OverviewRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/OverviewRoute */ "./resources/js/src/components/elements/OverviewRoute.js");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elements/Page */ "./resources/js/src/components/elements/Page.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















var Overview =
/*#__PURE__*/
function (_Component) {
  _inherits(Overview, _Component);

  function Overview(props) {
    var _this;

    _classCallCheck(this, Overview);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Overview).call(this, props));
    _this.state = {
      modalIsOpen: false,
      modalTitle: null,
      content: null
    };
    _this.setState = _this.setState.bind(_assertThisInitialized(_this));
    _this.openModal = _this.openModal.bind(_assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Overview, [{
    key: "openModal",
    value: function openModal(id) {
      this.renderContent(id);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.props.refresh();
      this.setState({
        modalIsOpen: false
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent(key) {
      var _this2 = this;

      switch (key) {
        case 1:
          this.setState({
            modalIsOpen: true,
            modalTitle: "Add Property",
            content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              className: "grid-center"
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui_inputs_Form__WEBPACK_IMPORTED_MODULE_2__["PropertyForm"], {
              closeModal: this.closeModal
            }))
          });
          break;

        case 2:
          this.setState({
            modalIsOpen: true,
            modalTitle: "Add Unit",
            content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_OverviewRoute__WEBPACK_IMPORTED_MODULE_11__["OverviewContext"].Consumer, null, function (overview) {
              return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
                className: "grid-center"
              }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui_inputs_Form__WEBPACK_IMPORTED_MODULE_2__["UnitForm"], {
                closeModal: _this2.closeModal,
                data: overview.state.userProperties
              }));
            })
          });
          break;

        case 3:
          this.setState({
            modalIsOpen: true,
            modalTitle: "Limit reached for now",
            content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              className: "grid-center"
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              style: {
                maxWidth: "350px"
              }
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
              className: "margin-top--md text--accent-light text--center"
            }, "You've reached your limit"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
              className: "text--center"
            }, "Currently you get to list ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", null, "1 property"), " ", "and ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", null, "3 units"), ".")))
          });
          break;

        case 4:
          this.setState({
            modalIsOpen: true,
            modalTitle: "Getting Started",
            content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("iframe", {
              width: "100%",
              height: "500px",
              src: "https://www.youtube.com/embed/eKDxaqtfvlA"
            }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              className: "grid-center"
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
              style: {
                maxWidth: "400px"
              },
              className: "text--center margin-top--sm"
            }, "Our quick start guide to get you up and running with Enproperty.")))
          });
          break;

        default:
          this.setState({
            modalIsOpen: true,
            modalTitle: "Modal",
            content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              className: "grid-center"
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
              className: "margin-top--lg margin-bottom--lg"
            }, "Default"))
          });
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_OverviewRoute__WEBPACK_IMPORTED_MODULE_11__["OverviewContext"].Consumer, null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
          "aria-label": "overview is where you add units and properties",
          "data-balloon-pos": "right",
          "data-balloon-length": "medium"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui_surfaces_Badge__WEBPACK_IMPORTED_MODULE_4__["default"], null, "?")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "margin-bottom--xxs"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui_content_Container__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ButtonBar, {
          isLoading: context.state.isLoading,
          data: [context.state.userProperties, context.state.userUnits],
          openModal: _this3.openModal
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "margin-bottom--sm"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui_content_Line__WEBPACK_IMPORTED_MODULE_7__["Line"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "margin-bottom--md"
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Stats, {
          data: [context.state.userProperties, context.state.userUnits]
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_9___default.a, {
          isOpen: _this3.state.modalIsOpen,
          onRequestClose: _this3.closeModal,
          contentLabel: "Modal",
          className: "modal-content",
          overlayClassName: "modal-overlay"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui_surfaces_Modal__WEBPACK_IMPORTED_MODULE_10__["ModalHeader"], {
          modalTitle: _this3.state.modalTitle,
          closeModal: _this3.closeModal,
          blur: context.state.userProperties.length == 1 ? true : false
        }), _this3.state.content, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "margin-bottom--lg"
        }))));
      });
    }
  }]);

  return Overview;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

function Stats(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_0__["FlexRow"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_0__["FlexItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui_surfaces_Card__WEBPACK_IMPORTED_MODULE_5__["BaseCard"], {
    width: 200
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      fontSize: "5em"
    },
    className: "text--accent-light text--bold text--center"
  }, props.data[0].length), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    className: "text--md"
  }, "Total Properties")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "btns"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: _constants_Routes__WEBPACK_IMPORTED_MODULE_1__["OVERVIEW"] + _constants_Routes__WEBPACK_IMPORTED_MODULE_1__["PROPERTY"],
    className: "btn btn--secondary btn--full-width ",
    tabIndex: "0"
  }, "view")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_0__["FlexItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ui_surfaces_Card__WEBPACK_IMPORTED_MODULE_5__["BaseCard"], {
    width: 200
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      fontSize: "5em"
    },
    className: "text--accent-light text--bold text--center"
  }, props.data[1].length), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    className: "text--md"
  }, "Total Units")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "btns"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: _constants_Routes__WEBPACK_IMPORTED_MODULE_1__["OVERVIEW"] + _constants_Routes__WEBPACK_IMPORTED_MODULE_1__["UNIT"],
    className: "btn text--sm btn--secondary btn--full-width ",
    tabIndex: "0"
  }, "view")))));
}

function ButtonBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_0__["FlexRow"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_0__["FlexItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: props.data[0].length == 1 ? function () {
      return props.openModal(3);
    } : function () {
      return props.openModal(1);
    },
    disabled: props.isLoading,
    className: "btn btn--primary btn--md"
  }, "Add Property")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_0__["FlexItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: props.data[1].length >= 3 ? function () {
      return props.openModal(3);
    } : function () {
      return props.openModal(2);
    },
    className: "btn btn--secondary btn--md",
    disabled: props.isloading || props.data[0].length == 0
  }, "Add Unit")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_0__["FlexItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      return props.openModal(4);
    },
    className: "btn btn--secondary btn--md"
  }, "Starting Guide")));
}

/* harmony default export */ __webpack_exports__["default"] = (Overview);

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

/***/ }),

/***/ "./resources/js/src/components/ui/surfaces/Badge.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/ui/surfaces/Badge.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        color: var(--primary-color-2);\n        background: ", ";\n        border-radius: var(--radius);\n        padding: 2px 8px;\n        margin: 2px;\n        cursor: default;\n        display: inline-block;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/**
 * Text badge that renders children
 */

function Badge(props) {
  var BadgeStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject(), props.background || "var(--secondary-color)");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BadgeStyle, null, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./resources/js/src/components/ui/surfaces/Blur.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/ui/surfaces/Blur.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Blur =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Blur, _React$Component);

  function Blur(props) {
    var _this;

    _classCallCheck(this, Blur);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Blur).call(this, props));
    _this.state = {};
    _this.setState = _this.setState.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Blur, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementById("body").classList.add("noscroll");
      document.getElementById("root").classList.add("blur");
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.getElementById("body").classList.remove("noscroll");
      document.getElementById("root").classList.remove("blur");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  }]);

  return Blur;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Blur);

/***/ }),

/***/ "./resources/js/src/components/ui/surfaces/Modal.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/ui/surfaces/Modal.js ***!
  \**********************************************************/
/*! exports provided: ModalHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return ModalHeader; });
/* harmony import */ var _Blur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blur */ "./resources/js/src/components/ui/surfaces/Blur.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Used as the header for modals
 *
 * @param {function} closeModal - This should be the function that closes the modal
 * @param {string} modalTitle - Title displayed at  the top of a modal
 * @param {boolean} blur - blur the background of the modal, default true
 *
 * @example
 *     <ModalHeader
 *      modalTitle={`I'm a modal`}
 *      closeModal={this.closeModal}
 *      blur={false}
 *     />
 *
 */

function ModalHeader(props) {
  var _ref;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.blur === false ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Blur__WEBPACK_IMPORTED_MODULE_0__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: (_ref = {
      display: "flex",
      justifyContent: "space-between",
      position: "sticky",
      top: "0px"
    }, _defineProperty(_ref, "position", "sticky"), _defineProperty(_ref, "background", "var(--primary-color-2)"), _defineProperty(_ref, "borderBottom", "1px solid var(--light-grey)"), _defineProperty(_ref, "padding", "8px"), _defineProperty(_ref, "zIndex", 1), _defineProperty(_ref, "marginTop", "0px"), _ref)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text--rg text--bold",
    style: {
      display: "inline-flex",
      lineHeight: 2
    }
  }, props.modalTitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn--bordered btn--sm",
    onClick: props.closeModal
  }, "Close")));
}

/***/ })

}]);