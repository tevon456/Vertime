(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./resources/js/src/components/pages/Test.js":
/*!***************************************************!*\
  !*** ./resources/js/src/components/pages/Test.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/content/Avatar */ "./resources/js/src/components/ui/content/Avatar.js");
/* harmony import */ var _ui_surfaces_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/surfaces/Card */ "./resources/js/src/components/ui/surfaces/Card.js");
/* harmony import */ var _ui_content_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/content/Container */ "./resources/js/src/components/ui/content/Container.js");
/* harmony import */ var _ui_navigation_CustomLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../ui/navigation/CustomLink */ "./resources/js/src/components/ui/navigation/CustomLink.js");
/* harmony import */ var _ui_inputs_DropdownButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/inputs/DropdownButton */ "./resources/js/src/components/ui/inputs/DropdownButton.js");
/* harmony import */ var _constants_Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../constants/Routes */ "./resources/js/src/constants/Routes.js");
/* harmony import */ var _ui_content_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/content/Icon */ "./resources/js/src/components/ui/content/Icon.js");
/* harmony import */ var _ui_content_Note__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/content/Note */ "./resources/js/src/components/ui/content/Note.js");
/* harmony import */ var _elements_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements/Page */ "./resources/js/src/components/elements/Page.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ui_inputs_Toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/inputs/Toggle */ "./resources/js/src/components/ui/inputs/Toggle.js");
/* harmony import */ var _helper_notificationHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../helper/notificationHelper */ "./resources/js/src/helper/notificationHelper.js");













function Test() {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_elements_Page__WEBPACK_IMPORTED_MODULE_8__["default"], {
    padding: true
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "Design System"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_surfaces_Card__WEBPACK_IMPORTED_MODULE_1__["BaseCard"], {
    imageSrc: "https://source.unsplash.com/q73G6DdhtAM/312x312"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "34unit Ave, Kingston 7"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "Appartment")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "btns "
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_inputs_DropdownButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: "Data",
    className: "btn btn--primary btn--md ",
    background: "#0A8754",
    x: "-36%",
    y: "22px",
    width: "170px",
    onClick: function onClick() {
      return _helper_notificationHelper__WEBPACK_IMPORTED_MODULE_11__["default"].info("hello world");
    }
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, "Schedule"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, "Draft"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, "Delete")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_inputs_Toggle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "#05C46E",
    switchOff: function switchOff() {
      return _helper_notificationHelper__WEBPACK_IMPORTED_MODULE_11__["default"].info("off");
    }
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_inputs_Toggle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "var(--blue)",
    switchOff: function switchOff() {
      return _helper_notificationHelper__WEBPACK_IMPORTED_MODULE_11__["default"].info("off");
    }
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_inputs_Toggle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "#C7EF00",
    switchOff: function switchOff() {
      return _helper_notificationHelper__WEBPACK_IMPORTED_MODULE_11__["default"].success("Check your email to complete registration");
    }
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_inputs_Toggle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    switchOn: function switchOn() {
      return _helper_notificationHelper__WEBPACK_IMPORTED_MODULE_11__["default"].success("on");
    }
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Note__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "danger"
  }, "Something dangerous"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Note__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "warning"
  }, "Youve been warned"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Note__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "info"
  }, "Just so you know"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "Avatar"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Avatars are used to represent users by showing a user defined picture."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "size: "), " \"small\" | \"medium\" | \"large\" | \"huge\""), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "src: "), " a url pointing to the image"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "alt: "), " a description of avatar image content for accessibility"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: "https://source.unsplash.com/r0eATOYBxJ4/80x80",
    first_name: "mike",
    last_name: "will",
    size: "small"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: "https://source.unsplash.com/r0eATOYBxJ4/80x80",
    first_name: "mike",
    last_name: "will",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    id: "second-element-introduction",
    src: "https://source.unsplash.com/r0eATOYBxJ4/80x80",
    first_name: "mike",
    last_name: "will",
    size: "large"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    verified: true,
    first_name: "mike",
    last_name: "will",
    src: "https://source.unsplash.com/r0eATOYBxJ4/80x80",
    size: "huge"
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "AvatarGroup"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Wrapper component for creating a group of nested avatars."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["AvatarGroup"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: "https://source.unsplash.com/r0eATOYBxJ4/70x70",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: "https://source.unsplash.com/3-nx5glV7jo/70x70",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: "https://source.unsplash.com/owqMrL136aA/70x70",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: "https://source.unsplash.com/RPUD-n9V6E0/80x80",
    size: "medium"
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["AvatarGroup"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Abe",
    last_name: "Sill",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Bike",
    last_name: "Dill",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Cike",
    last_name: "Hill",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Dike",
    last_name: "Rill",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Ebe",
    last_name: "Will",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Fike",
    last_name: "Will",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Gike",
    last_name: "Oill",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Hike",
    last_name: "Will",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Ike",
    last_name: "Yill",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Jike",
    last_name: "Qill",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Kike",
    last_name: "Will",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Like",
    last_name: "Will",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Mike",
    last_name: "Will",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    first_name: "Nike",
    last_name: "Will",
    size: "medium"
  }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "Button"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Buttons use default html button tag and are styled using css not styled components"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "default class : "), " \"btn\""), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "type class : "), " \"btn--primary\" | \"btn--secondary\" | \"btn--blue\""), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "size class : "), " \"btn--sm\" | \"btn--md\" | \"btn--lg\" | \"btn--full-width\""), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Types"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "btns"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--primary btn--sm "
  }, "primary"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--secondary btn--sm"
  }, "secondary"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--blue btn--sm "
  }, "blue"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--danger btn--sm "
  }, "danger"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--bordered btn--sm"
  }, "bordered")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Sizes"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "btns"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--secondary btn--sm"
  }, "small")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "btns"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--secondary btn--md"
  }, "medium")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "btns"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--secondary btn--lg"
  }, "large")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "btns"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--secondary btn--full-width "
  }, "I'm full width")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Disabled state"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "btns"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--secondary btn--full-width",
    disabled: true
  }, "I'm Disabled")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Icon Buttons"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "btns"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--secondary btn--md"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Icon__WEBPACK_IMPORTED_MODULE_6__["IconTrash"], null)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--bordered btn--md"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Icon__WEBPACK_IMPORTED_MODULE_6__["IconTrash"], null)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "Card"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "step3"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_surfaces_Card__WEBPACK_IMPORTED_MODULE_1__["CardWrapper"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_surfaces_Card__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: "https://source.unsplash.com/nWdhpUrXxYY/70x70",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
    style: {
      transform: "translateY(9px)",
      position: "absolute",
      padding: "4px"
    }
  }, "by ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_navigation_CustomLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: _constants_Routes__WEBPACK_IMPORTED_MODULE_5__["HOME"]
  }, "Tev Davis")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_surfaces_Card__WEBPACK_IMPORTED_MODULE_1__["BaseCard"], {
    imageSrc: "https://source.unsplash.com/q73G6DdhtAM/312x312"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "34unit Ave, Kingston 7"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "Appartment")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "btns"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--primary btn--sm "
  }, "view"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--secondary btn--sm"
  }, "save"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_surfaces_Card__WEBPACK_IMPORTED_MODULE_1__["BaseCard"], {
    imageSrc: "https://source.unsplash.com/q73G6DdhtAM/312x312"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--bordered btn--sm"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Icon__WEBPACK_IMPORTED_MODULE_6__["IconTrash"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "34unit Ave, Kingston 7"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_surfaces_Card__WEBPACK_IMPORTED_MODULE_1__["BaseCard"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["AvatarGroup"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: "https://source.unsplash.com/r0eATOYBxJ4/70x70",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: "https://source.unsplash.com/3-nx5glV7jo/70x70",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: "https://source.unsplash.com/owqMrL136aA/70x70",
    size: "medium"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Avatar__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
    src: "https://source.unsplash.com/RPUD-n9V6E0/70x70",
    size: "medium"
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "Applicants"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "30 new"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "btns"
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    className: "btn btn--primary btn--full-width "
  }, "view")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "Colors"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Colors utilized throughout the application. All colors meet the WCAG 2.0 guidelines for contrast accessibility."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "info: "), "shading is done using a pure custom css color finction I built"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Colors"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    style: {
      background: "var(--red)",
      padding: "8px",
      color: "var(--primary-color-2)"
    }
  }, "--red"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    style: {
      background: "var(--orange)",
      padding: "8px",
      color: "var(--primary-color-2)"
    }
  }, "--orange"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    style: {
      background: "var(--yellow)",
      padding: "8px",
      color: "var(--secondary-color)"
    }
  }, "--yellow"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    style: {
      background: "var(--green)",
      padding: "8px",
      color: "var(--primary-color-2)"
    }
  }, "--green"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    style: {
      background: "var(--blue)",
      padding: "8px",
      color: "var(--primary-color-2)"
    }
  }, "--blue"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Accent"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    style: {
      background: "var(--accent-color-dark)",
      padding: "8px",
      color: "var(--primary-color-2)"
    }
  }, "--accent-color-dark"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    style: {
      background: "var(--accent-color)",
      padding: "8px",
      color: "var(--primary-color-2)"
    }
  }, "--accent-color"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    style: {
      background: "var(--accent-color-light)",
      padding: "8px",
      color: "var(--primary-color-2)"
    }
  }, "--accent-color-light"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    style: {
      background: "var(--accent-color-lighter)",
      padding: "8px",
      color: "var(--primary-color-2)"
    }
  }, "--accent-color-lighter")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "Typography"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "Typography system and fonts"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_ui_content_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "primary font: "), " \"Karla\""), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b", null, "secondary font: "), " \"Bitter\""), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", null, "H1"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "H2"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", null, "H3"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", null, "H4"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", null, "H5"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h6", null, "H6"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", null, "A paragraph (from the Ancient Greek paragraphos, \"to write beside\" or \"written beside\") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.")));
}

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./resources/js/src/components/ui/inputs/DropdownButton.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/components/ui/inputs/DropdownButton.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _surfaces_Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../surfaces/Dropdown */ "./resources/js/src/components/ui/surfaces/Dropdown.js");
/* harmony import */ var _content_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/Icon */ "./resources/js/src/components/ui/content/Icon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n\n    > button {\n        border-radius: var(--radius) 0px 0px var(--radius);\n    }\n    .drop-section {\n        border-radius: 0px var(--radius) var(--radius) 0px;\n        max-width: 30%;\n    }\n    .seperation {\n        border-left: 1px solid transparent;\n        display: inline;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var StyledDropdownButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());

function DropdownButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledDropdownButton, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      return props.onClick();
    },
    style: {
      background: props.background,
      color: props.color || "var(--primary-color-2)",
      cursor: "pointer"
    },
    className: props.className
  }, props.text), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "seperation"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Drop, {
    className: props.className,
    background: props.background,
    x: props.x,
    color: props.color,
    y: props.y,
    width: props.width
  }, props.children));
}

function Drop(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_surfaces_Dropdown__WEBPACK_IMPORTED_MODULE_0__["DropDown"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_surfaces_Dropdown__WEBPACK_IMPORTED_MODULE_0__["DropDownMenu"], {
    x: props.x,
    y: props.y,
    width: props.width,
    tabIndex: "0"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      cursor: "pointer",
      background: props.background,
      color: props.color || "var(--primary-color-2)"
    },
    id: props.id,
    onKeyDown: function onKeyDown() {
      return Object(_surfaces_Dropdown__WEBPACK_IMPORTED_MODULE_0__["openDropDown"])(props.id);
    },
    tabIndex: "0",
    className: props.className + " drop-section"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_content_Icon__WEBPACK_IMPORTED_MODULE_1__["IconChevronDown"], {
    strokeWidth: 4
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (DropdownButton);

/***/ }),

/***/ "./resources/js/src/components/ui/inputs/Toggle.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/ui/inputs/Toggle.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: block;\n    line-height: 2;\n    width: 60px;\n    height: 30px;\n    margin: var(--space-xxs);\n    margin-left: 0px;\n\n    input {\n        opacity: 0;\n        width: 0;\n    }\n\n    .slider {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        -webkit-transition: 0.4s;\n        transition: 0.4s;\n    }\n\n    .slider:before {\n        position: absolute;\n        box-shadow: 0px 2px 4px rgba(60, 60, 60, 0.73),\n            0px 2px 4px rgba(71, 63, 79, 0.08);\n        content: \"\";\n        height: 22px;\n        width: 22px;\n        left: 6px;\n        bottom: 4px;\n        background-color: var(--white);\n        background-image: linear-gradient(#fff, #fff);\n        -webkit-transition: 0.5s;\n        transition: 0.5s;\n        transition-timing-function: cubic-bezier(0.27, 0.88, 0.27, 0.88);\n    }\n\n    & input:checked + .slider {\n        background-color: var(--accent-color-light);\n        ", "\n    }\n\n    & input:not(:checked) + .slider {\n        background-color: #909090;\n    }\n\n    & input:checked + .slider:before {\n        -webkit-transform: translateX(26px);\n        -ms-transform: translateX(26px);\n        transform: translateX(26px);\n    }\n\n    .slider.round {\n        border-radius: 50px;\n    }\n\n    .slider.round:before {\n        border-radius: 50px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Toggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle(props) {
    var _this;

    _classCallCheck(this, Toggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toggle).call(this, props));
    _this.state = {
      checked: _this.props.on ? true : false
    };
    _this.mainCall = _this.mainCall.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Toggle, [{
    key: "toggle",
    value: function toggle() {
      var _this2 = this;

      this.setState(function () {
        return {
          checked: !_this2.state.checked
        };
      });
    }
  }, {
    key: "noFunction",
    value: function noFunction() {
      console.log("No function passed to this toggle for execution");
    }
  }, {
    key: "mainCall",
    value: function mainCall() {
      if (this.props.switchOn && this.state.checked == false) {
        this.props.switchOn();
      } else if (this.props.switchOff && this.state.checked == true) {
        this.props.switchOff();
      } else {
        this.noFunction;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledToggle, {
        color: this.props.color
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        onClick: this.toggle.bind(this),
        onChange: this.mainCall,
        checked: this.state.checked
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "slider round"
      }));
    }
  }]);

  return Toggle;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var StyledToggle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label(_templateObject(), function (_ref) {
  var color = _ref.color;
  return color && "\n    background: ".concat(color || "var(--accent-color-light)", ";\n  ");
});
/* harmony default export */ __webpack_exports__["default"] = (Toggle);

/***/ })

}]);