(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/src/components/pages/LandLordProperty.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/pages/LandLordProperty.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_surfaces_Badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ui/surfaces/Badge */ "./resources/js/src/components/ui/surfaces/Badge.js");
/* harmony import */ var _ui_content_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/content/Container */ "./resources/js/src/components/ui/content/Container.js");
/* harmony import */ var _elements_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../elements/Head */ "./resources/js/src/components/elements/Head.js");
/* harmony import */ var _elements_OverviewRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/OverviewRoute */ "./resources/js/src/components/elements/OverviewRoute.js");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/Page */ "./resources/js/src/components/elements/Page.js");
/* harmony import */ var _ui_content_Tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/content/Tables */ "./resources/js/src/components/ui/content/Tables.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








function Property(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_elements_OverviewRoute__WEBPACK_IMPORTED_MODULE_3__["OverviewContext"].Consumer, null, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_elements_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Properties"
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      "data-tooltip": "A table with all properties, can be expanded for more details."
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ui_surfaces_Badge__WEBPACK_IMPORTED_MODULE_0__["default"], null, "?")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "margin-bottom--xxs"
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ui_content_Container__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ui_content_Tables__WEBPACK_IMPORTED_MODULE_5__["PropertyTable"], {
      data: context.state.userProperties,
      loading: props.isLoading,
      refresh: props.refresh
    })));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Property);

/***/ }),

/***/ "./resources/js/src/components/ui/content/Tables.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/ui/content/Tables.js ***!
  \**********************************************************/
/*! exports provided: PropertyTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTable", function() { return PropertyTable; });
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_FlexView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/FlexView */ "./resources/js/src/components/elements/FlexView.js");
/* harmony import */ var _content_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/Icon */ "./resources/js/src/components/ui/content/Icon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navigation_CustomLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/CustomLink */ "./resources/js/src/components/ui/navigation/CustomLink.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _surfaces_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../surfaces/Modal */ "./resources/js/src/components/ui/surfaces/Modal.js");
/* harmony import */ var _inputs_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../inputs/Form */ "./resources/js/src/components/ui/inputs/Form.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js");
/* harmony import */ var _content_WhiteSpace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../content/WhiteSpace */ "./resources/js/src/components/ui/content/WhiteSpace.js");
/* harmony import */ var _helper_apiHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helper/apiHelper */ "./resources/js/src/helper/apiHelper.js");
/* harmony import */ var _helper_notificationHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helper/notificationHelper */ "./resources/js/src/helper/notificationHelper.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid var(--light-grey) !important;\n    background: var(--primary-color) !important;\n\n    .-sort-desc {\n        box-shadow: none !important;\n        &:before {\n            content: \"\u25BC\";\n            float: right;\n        }\n    }\n\n    .-sort-asc {\n        box-shadow: none !important;\n        &:before {\n            content: \"\u25B2\";\n            float: right;\n        }\n    }\n\n    .ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover {\n        background: #3498db57 !important;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var StyledTable = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["default"])(react_table__WEBPACK_IMPORTED_MODULE_8__["default"])(_templateObject());
var columns = [{
  expander: true,
  Header: function Header() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", null, "More");
  },
  width: 65,
  Expander: function Expander(_ref) {
    var isExpanded = _ref.isExpanded,
        rest = _objectWithoutProperties(_ref, ["isExpanded"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      title: "click"
    }, isExpanded ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_content_Icon__WEBPACK_IMPORTED_MODULE_2__["IconX"], {
      title: "collapse"
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_content_Icon__WEBPACK_IMPORTED_MODULE_2__["IconMoreVertical"], {
      title: "expand"
    }));
  },
  style: {
    cursor: "pointer",
    padding: "var(--space-xs) var(--space-sm)",
    textAlign: "center",
    userSelect: "none"
  }
}, {
  Header: "Title",
  accessor: "property_title",
  filterable: true,
  resizable: true
}, {
  Header: "Street",
  accessor: "street",
  resizable: true
}, {
  Header: "Units",
  accessor: "units_count",
  maxWidth: 100
}];
var columns_small = [{
  expander: true,
  Header: function Header() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("strong", null, "More");
  },
  width: 65,
  Expander: function Expander(_ref2) {
    var isExpanded = _ref2.isExpanded,
        rest = _objectWithoutProperties(_ref2, ["isExpanded"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      title: "click"
    }, isExpanded ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_content_Icon__WEBPACK_IMPORTED_MODULE_2__["IconX"], {
      title: "collapse"
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_content_Icon__WEBPACK_IMPORTED_MODULE_2__["IconMoreVertical"], {
      title: "expand"
    }));
  },
  style: {
    cursor: "pointer",
    padding: "var(--space-xs) var(--space-sm)",
    textAlign: "center",
    userSelect: "none",
    maxWidth: 20
  }
}, {
  Header: "Title",
  accessor: "property_title",
  filterable: true,
  resizable: true,
  maxWidth: 230
}];
function PropertyTable(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTable, {
    data: props.data,
    noDataText: "No Properties as yet",
    columns: window.screen.width > 425 ? columns : columns_small,
    defaultPageSize: 7,
    className: "-highlight margin-top--md",
    SubComponent: function SubComponent(row) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TableMore, {
        refresh: props.refresh,
        data: row.original
      });
    }
  });
}
react_modal__WEBPACK_IMPORTED_MODULE_5___default.a.setAppElement("#modal");

var TableMore =
/*#__PURE__*/
function (_Component) {
  _inherits(TableMore, _Component);

  function TableMore(props) {
    var _this;

    _classCallCheck(this, TableMore);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableMore).call(this, props));
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

  _createClass(TableMore, [{
    key: "openModal",
    value: function openModal(id, data) {
      this.renderContent(id, data);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        modalIsOpen: false
      });
      this.props.refresh();
    }
  }, {
    key: "renderContent",
    value: function renderContent(key, data) {
      var _this2 = this;

      switch (key) {
        case 1:
          this.setState({
            modalIsOpen: true,
            modalTitle: "Edit",
            content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              className: "margin-top--lg margin-bottom--lg"
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_inputs_Form__WEBPACK_IMPORTED_MODULE_7__["PropertyForm"], {
              closeModal: this.closeModal,
              data: this.props.data,
              update: data
            }))
          });
          break;

        case 2:
          this.setState({
            modalIsOpen: true,
            modalTitle: "Delete",
            content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              style: {
                padding: "20px"
              }
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Are you sure you want to delete this property?", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), "You will loose:"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "This Property"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "All ", data.units_count, " Units belonging to this property"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "All Unit images"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, "Any other related data")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              style: {
                display: "flex",
                justifyContent: "space-around"
              }
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
              className: "btn btn--bordered btn--full-width",
              onClick: this.closeModal
            }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              style: {
                margin: "var(--space-xs)"
              }
            }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
              onClick: function onClick() {
                _this2["delete"](data.uuid);
              },
              className: "btn btn--danger btn--full-width"
            }, "Yes, Delete")))
          });
          break;

        default:
          this.setState({
            modalIsOpen: true,
            modalTitle: "Modal",
            content: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
              className: "margin-top--lg margin-bottom--lg"
            }, "Pass an id to the openModal()")
          });
          break;
      }
    }
  }, {
    key: "delete",
    value: function _delete(data) {
      var _this3 = this;

      Object(_helper_apiHelper__WEBPACK_IMPORTED_MODULE_10__["deleteProperty"])(data).then(function () {
        _this3.closeModal();

        _helper_notificationHelper__WEBPACK_IMPORTED_MODULE_11__["default"].success("property deleted");
      })["catch"](function (error) {
        if (error.response) {
          console.log(error);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: "2px calc(var(--space-md) + 0.2em)",
          background: "var(--black)",
          color: "white"
        }
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "text--md margin-bottom--none margin-top--md text--bold"
      }, this.props.data.street), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "text--rg margin-top--none"
      }, this.props.data.city, ", ", this.props.data.state, " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_navigation_CustomLink__WEBPACK_IMPORTED_MODULE_4__["ExternalLink"], {
        to: "https://www.google.com/maps/search/".concat(this.props.data.street, ",").concat(this.props.data.city, ",").concat(this.props.data.state)
      }, "View on map")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "text--rg margin-top--none"
      }, this.props.data.property_description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "text--rg margin-top--none"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", null, "units"), ":", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_content_WhiteSpace__WEBPACK_IMPORTED_MODULE_9__["default"], null), " ", this.props.data.units_count)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_1__["FlexRow"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_1__["FlexItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        title: "Update details of this property",
        className: "btn btn--secondary btn--sm",
        onClick: function onClick() {
          return _this4.openModal(1, _this4.props.data);
        }
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_1__["FlexItem"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
        title: "Delete property ".concat(this.props.data.property_title),
        onClick: function onClick() {
          return _this4.openModal(2, _this4.props.data);
        },
        className: "btn btn--secondary btn--sm"
      }, "Delete"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_5___default.a, {
        isOpen: this.state.modalIsOpen,
        onRequestClose: this.closeModal,
        contentLabel: "Modal",
        className: "modal-content",
        overlayClassName: "modal-overlay"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_surfaces_Modal__WEBPACK_IMPORTED_MODULE_6__["ModalHeader"], {
        modalTitle: this.state.modalTitle,
        closeModal: this.closeModal
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "grid-center"
      }, this.state.content), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "margin-bottom--lg"
      })));
    }
  }]);

  return TableMore;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

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