"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\nwidth: 100%;\nheight: 60px;\ndisplay: flex;\nflex-direction: row-reverse;\nalign-items: center;\njustify-content: space-around;\npadding: 8px;\nborder-bottom: 2px solid grey;\nbox-shadow: 0px 1px #888818;\nposition: absolute;\nbackground-color: white;\nz-index: 1;\ntop: 0;\n @media only screen and (min-width: 500px) {\n    justify-content: space-between;\n    flex-direction: row;\n    height: 110px;\n }\n svg {\n     width: 40px;\n     height: 40px;\n     margin-top: auto;\n     @media only screen and (max-width: 500px) {\n        display: none;\n     }\n }\n"], ["\nwidth: 100%;\nheight: 60px;\ndisplay: flex;\nflex-direction: row-reverse;\nalign-items: center;\njustify-content: space-around;\npadding: 8px;\nborder-bottom: 2px solid grey;\nbox-shadow: 0px 1px #888818;\nposition: absolute;\nbackground-color: white;\nz-index: 1;\ntop: 0;\n @media only screen and (min-width: 500px) {\n    justify-content: space-between;\n    flex-direction: row;\n    height: 110px;\n }\n svg {\n     width: 40px;\n     height: 40px;\n     margin-top: auto;\n     @media only screen and (max-width: 500px) {\n        display: none;\n     }\n }\n"]),
    _templateObject2 = _taggedTemplateLiteral([" \n    display: block;\n    width: auto;\n    border-top: 2px solid;\n    border-bottom: 2px solid;\n    @media only screen and (min-width: 500px) {\n        display: none;\n    \n    }\n"], [" \n    display: block;\n    width: auto;\n    border-top: 2px solid;\n    border-bottom: 2px solid;\n    @media only screen and (min-width: 500px) {\n        display: none;\n    \n    }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n    height: 110px;\n    align-items: center;\n    margin: 0px;\n    display: flex;\n    position: fixed;\n    top: 0px;\n    width: auto;\n    list-style: none;\n    transition: left 1s ease;\n    top: 50px;\n    flex-direction: column;\n    \n    @media only screen and (max-width: 499px) {\n        left: -200px;\n    }\n    @media only screen and (min-width: 500px) {\n        /* transition: all 0s ease-in-out; */\n        top: 0px;\n        flex-direction: row;\n        right: 0px;\n        li:nth-last-child(2) {\n            margin-left: 50px;\n            display: flex;\n       \n   }\n}\n"], ["\n    height: 110px;\n    align-items: center;\n    margin: 0px;\n    display: flex;\n    position: fixed;\n    top: 0px;\n    width: auto;\n    list-style: none;\n    transition: left 1s ease;\n    top: 50px;\n    flex-direction: column;\n    \n    @media only screen and (max-width: 499px) {\n        left: -200px;\n    }\n    @media only screen and (min-width: 500px) {\n        /* transition: all 0s ease-in-out; */\n        top: 0px;\n        flex-direction: row;\n        right: 0px;\n        li:nth-last-child(2) {\n            margin-left: 50px;\n            display: flex;\n       \n   }\n}\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n    display: none;\n    @media only screen and (max-width: 499px) {\n    :checked + ul {\n        left: 200px;\n        }\n        \n    };\n"], ["\n    display: none;\n    @media only screen and (max-width: 499px) {\n    :checked + ul {\n        left: 200px;\n        }\n        \n    };\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\ndisplay: block;\n      width: auto;\n      border-top: 2px solid;\n      border-bottom: 2px solid;\n      height: auto;\n      padding-bottom: 0;\n      @media only screen and (min-width: 500px) {\n          display: none;\n      }\n"], ["\ndisplay: block;\n      width: auto;\n      border-top: 2px solid;\n      border-bottom: 2px solid;\n      height: auto;\n      padding-bottom: 0;\n      @media only screen and (min-width: 500px) {\n          display: none;\n      }\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\nheight: 58px;\nwidth: 60px;\nbackground-image: url(", ");\nbackground-position: center;\nbackground-size: contain;\nbackground-repeat: no-repeat;\nborder-bottom: 0px;\n @media only screen and (min-width: 500px) {\n    background-image: url(", ");\n    width: 240px;\n    height: 80px;\n    background-color: black;\n    margin-left: 64px;\n }\n"], ["\nheight: 58px;\nwidth: 60px;\nbackground-image: url(", ");\nbackground-position: center;\nbackground-size: contain;\nbackground-repeat: no-repeat;\nborder-bottom: 0px;\n @media only screen and (min-width: 500px) {\n    background-image: url(", ");\n    width: 240px;\n    height: 80px;\n    background-color: black;\n    margin-left: 64px;\n }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("./index");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _I4C = require("./../../img/I4C.png");

var _I4C2 = _interopRequireDefault(_I4C);

var _I4C_Square = require("./../../img/I4C_Square.png");

var _I4C_Square2 = _interopRequireDefault(_I4C_Square);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents2.default.nav(_templateObject);

var MenuButton = _styledComponents2.default.span(_templateObject2);
var NavUl = _styledComponents2.default.ul(_templateObject3);
var NavCheckbox = _styledComponents2.default.input(_templateObject4);
var LoginLink = (0, _styledComponents2.default)(_index.InternalLink)(_templateObject5);
var Logo = (0, _styledComponents2.default)(_index.InternalLink)(_templateObject6, _I4C_Square2.default, _I4C2.default);

var NavBar = function (_Component) {
    _inherits(NavBar, _Component);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                Nav,
                { "aria-live": "polite" },
                _react2.default.createElement(LoginLink, {
                    text: "LOGIN",
                    to: "#",
                    section: "nav",
                    location: "homepage",
                    color: "green",
                    auto: "auto" }),
                _react2.default.createElement(Logo, { to: "/", color: "grey" }),
                _react2.default.createElement(
                    "label",
                    { htmlFor: "nav-checkbox" },
                    _react2.default.createElement(
                        MenuButton,
                        null,
                        "MENU"
                    )
                ),
                _react2.default.createElement(NavCheckbox, { type: "checkbox", id: "nav-checkbox" }),
                _react2.default.createElement(
                    NavUl,
                    null,
                    _react2.default.createElement(
                        "li",
                        null,
                        " ",
                        _react2.default.createElement(_index.InternalLink, { text: "ABOUT US", to: "/board-page", section: "nav", location: "homepage" })
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        " ",
                        _react2.default.createElement(_index.InternalLink, { text: "HOW IT WORKS", to: "#", section: "nav", location: "homepage" }),
                        " "
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        " ",
                        _react2.default.createElement(_index.InternalLink, { text: "OUR IMPACT", to: "#", section: "nav", location: "homepage" }),
                        " "
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        " ",
                        _react2.default.createElement(_index.InternalLink, { text: "CONTACT US", to: "#", section: "nav", location: "homepage" }),
                        " "
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        " ",
                        _react2.default.createElement(_index.InternalLink, { text: "Login", to: "#", section: "nav", location: "homepage" }),
                        " ",
                        _react2.default.createElement(
                            "svg",
                            { viewBox: "-20 -20 100 100" },
                            _react2.default.createElement("path", { d: "m30.5 24.1c0.1-2.8-2.2-9.8-2.2-9.8 0.7 0.1 5.2 6.8 4.7 9.6 4.3-1 7.3-5.1 6.7-9.5l-0.1-0.6c-1-7.4-9.3-12.2-9.7-12.4l-0.9-0.5-0.8 0.7c-0.3 0.2-5.7 5.5-6.3 11.8-0.1 0.8-0.1 1.7 0 2.5l0.1 0.6c0.1 0.7 0.3 1.3 0.5 1.9-5.9-3.5-13.6-2.4-14-2.3l-1.1 0.2-0.1 1.1c0 0.4-0.5 8.6 3.5 14.4 0.5 0.8 1.1 1.5 1.8 2.1l0.5 0.5c2.8 2.6 6.5 3.3 9.7 2.2 0.3-0.1 0.7-0.3 0.9-0.6l0.1-0.1c0.7-0.6 1-1.5 0.8-2.5-0.4-2.7-6.8-7.3-6.8-7.3 0.6-0.3 8 2.8 9 5.4 0 0.1 0 0.1 0.1 0.2 0.2 0.7 0.3 1.5 0.3 2.3l-0.2 13.4h-2.3c-4.4 0.4-8.7 1.4-12.8 3.1-1 0.4-2 1-3.2 1.7 0.1 0.1 0.2 0.1 0.2 0.2 0.5 0.4 0.9 0.8 1.3 1.1 1.1 0.8 2.3 1.5 3.5 2.1 4.3 2.3 9.2 3.7 14.6 3.7 5.3 0 10.4-1.4 14.8-3.8 1.9-0.9 3.7-2 5.4-3.6l0.1-0.1c-3.2-2-6.6-3.1-10.1-3.8-1.9-0.4-3.9-0.4-5.8-0.7l-2.8 0.1 0.1-7.4c1.1 2.4 3.3 4.3 6.1 4.8l0.6 0.1c0.8 0.2 1.7 0.2 2.5 0.2 6.3-0.1 12-5.1 12.3-5.3l0.8-0.7-0.4-1c-0.2-0.4-4.3-9.1-11.6-10.6l-0.6-0.1c-2.7-0.6-5.5 0.3-7.4 2 3.1 0.9 7.3 4.1 7.4 4.7 0 0-6.4-2.8-9.3-2.3 0 0 0 0.1-0.1 0.1l0.2-7.8z" })
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        null,
                        " ",
                        _react2.default.createElement(_index.InternalLink, { text: "JOIN", to: "#", section: "nav", location: "homepage" }),
                        " "
                    )
                )
            );
        }
    }]);

    return NavBar;
}(_react.Component);

exports.default = NavBar;

//# sourceMappingURL=NavBar.js.map