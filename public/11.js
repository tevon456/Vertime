(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./resources/js/src/components/pages/EmployeeOverview.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/pages/EmployeeOverview.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements_FlexView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/FlexView */ "./resources/js/src/components/elements/FlexView.js");
/* harmony import */ var _ui_inputs_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/inputs/Form */ "./resources/js/src/components/ui/inputs/Form.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_surfaces_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/surfaces/Badge */ "./resources/js/src/components/ui/surfaces/Badge.js");
/* harmony import */ var _ui_content_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/content/Container */ "./resources/js/src/components/ui/content/Container.js");
/* harmony import */ var _ui_content_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../ui/content/Icon */ "./resources/js/src/components/ui/content/Icon.js");
/* harmony import */ var _ui_content_Line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/content/Line */ "./resources/js/src/components/ui/content/Line.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ui_surfaces_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/surfaces/Modal */ "./resources/js/src/components/ui/surfaces/Modal.js");
/* harmony import */ var _elements_OverviewRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elements/OverviewRoute */ "./resources/js/src/components/elements/OverviewRoute.js");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../elements/Page */ "./resources/js/src/components/elements/Page.js");
/* harmony import */ var _ui_content_WhiteSpace__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/content/WhiteSpace */ "./resources/js/src/components/ui/content/WhiteSpace.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border-collapse: collapse;\n    width: 100%;\n\n    th,\n    td {\n        text-align: left;\n        padding: 8px;\n        min-width: 160px;\n    }\n\n    .head-row {\n        background: var(--accent-color-darker);\n        color: var(--white);\n    }\n\n    .fixed-col {\n        position: sticky;\n        left: -1px;\n        border-right: 2px solid white;\n        border-left: 2px solid white;\n        background: #e6ecea;\n        z-index: 2;\n    }\n\n    .fixed-col-th {\n        background: var(--accent-color-dark);\n    }\n\n    tr {\n        background-color: #e6ecea;\n        border-bottom: 1px solid #fff;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
















var StyledTable = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].table(_templateObject());
var data = [{
  client: "Kingston",
  date: "11/23/19",
  title: "hghfhyfyf",
  manager: "6cec5c3e-ffd9-467c-a336-66f6e6a94292"
}, {
  client: "Spanish",
  date: "11/23/19",
  title: "fgdfg54",
  manager: "fgssea94292"
}, {
  client: "Spanish",
  date: "11/23/19",
  title: "fgdfg54",
  manager: "fgssea94292"
}, {
  client: "Spanish",
  date: "11/23/19",
  title: "fgdfg54",
  manager: "fgssea94292"
}, {
  client: "Spanish",
  date: "11/23/19",
  title: "fgdfg54",
  manager: "fgssea94292"
}];

var Employee =
/*#__PURE__*/
function (_Component) {
  _inherits(Employee, _Component);

  function Employee(props) {
    var _this;

    _classCallCheck(this, Employee);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Employee).call(this, props));
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

  _createClass(Employee, [{
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
            modalTitle: "Log Time",
            content: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
              className: "grid-center"
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_inputs_Form__WEBPACK_IMPORTED_MODULE_1__["LogTimeForm"], null))
          });
          break;

        case 2:
          this.setState({
            modalIsOpen: true,
            modalTitle: "Add Unit",
            content: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elements_OverviewRoute__WEBPACK_IMPORTED_MODULE_10__["OverviewContext"].Consumer, null, function (overview) {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
                className: "grid-center"
              }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_inputs_Form__WEBPACK_IMPORTED_MODULE_1__["UnitForm"], {
                closeModal: _this2.closeModal,
                data: overview.state.userProperties
              }));
            })
          });
          break;

        default:
          this.setState({
            modalIsOpen: true,
            modalTitle: "Modal",
            content: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
              className: "grid-center"
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
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

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elements_OverviewRoute__WEBPACK_IMPORTED_MODULE_10__["OverviewContext"].Consumer, null, function (context) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          "aria-label": "You can go ahead and log your times",
          "data-balloon-pos": "right",
          "data-balloon-length": "medium"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_surfaces_Badge__WEBPACK_IMPORTED_MODULE_3__["default"], null, "?")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "margin-bottom--xxs"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_content_Container__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ButtonBar, {
          isLoading: context.state.isLoading,
          data: [context.state.userProperties, context.state.userUnits],
          openModal: _this3.openModal
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "margin-bottom--sm"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_content_Line__WEBPACK_IMPORTED_MODULE_6__["Line"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            overflowX: "auto"
          }
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledTable, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
          className: "head-row"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
          className: "fixed-col fixed-col-th"
        }, "Date"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Client"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Manager"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Work title"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "Comment"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "From"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", null, "To")), data.map(function (x) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
            className: "fixed-col"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
            "aria-label": "edit entry ".concat(x.date),
            "data-balloon-pos": "right",
            "data-balloon-length": "small",
            className: "btn btn--primary btn--sm"
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_content_Icon__WEBPACK_IMPORTED_MODULE_5__["IconEdit"], {
            strokeWidth: 3
          })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_content_WhiteSpace__WEBPACK_IMPORTED_MODULE_12__["default"], {
            amount: 3
          }), x.date), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, x.client), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, x.manager), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, x.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
            "aria-label": x.title,
            "data-balloon-pos": "up",
            "data-balloon-length": "medium"
          }, "ssfsf", " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, x.client), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", null, x.client));
        })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "margin-bottom--md"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_8___default.a, {
          isOpen: _this3.state.modalIsOpen,
          onRequestClose: _this3.closeModal,
          blur: true,
          contentLabel: "Modal",
          className: "modal-content",
          overlayClassName: "modal-overlay"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_surfaces_Modal__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
          modalTitle: _this3.state.modalTitle,
          closeModal: _this3.closeModal,
          blur: true
        }), _this3.state.content, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "margin-bottom--lg"
        }))));
      });
    }
  }]);

  return Employee;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function ButtonBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_0__["FlexRow"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elements_FlexView__WEBPACK_IMPORTED_MODULE_0__["FlexItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      return props.openModal(1);
    },
    className: "btn btn--primary btn--md"
  }, "Log Time")));
}

/* harmony default export */ __webpack_exports__["default"] = (Employee);

/***/ })

}]);