"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    text-align: center;\n    font-size: 11px;\n    a {\n        align-self: flex-end;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    text-align: center;\n    font-size: 11px;\n    a {\n        align-self: flex-end;\n    }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    list-style-type: none;\n    display: flex;\n    flex-wrap: wrap;\n    \n"], ["\n    list-style-type: none;\n    display: flex;\n    flex-wrap: wrap;\n    \n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterStyling = _styledComponents2.default.footer(_templateObject);

var UnorderedListStyling = _styledComponents2.default.ul(_templateObject2);

// "JOIN US" button style : 
// align-self: flex-end;

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                FooterStyling,
                null,
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "h1",
                        null,
                        "ABOUT US"
                    ),
                    _react2.default.createElement(
                        UnorderedListStyling,
                        null,
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "What is I4C", href: "#" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Who is I4C", href: "#" }),
                            " "
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "h1",
                        null,
                        "HOW IT WORKS"
                    ),
                    _react2.default.createElement(
                        UnorderedListStyling,
                        null,
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Your account and benefits", href: "#" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "How does I4C operate?", href: "#" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Causes we care about", href: "#" }),
                            " "
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "h1",
                        null,
                        "OUR IMPACT"
                    ),
                    _react2.default.createElement(
                        UnorderedListStyling,
                        null,
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Cuases Name", href: "#" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Cuases Name", href: "#" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Cuases Name", href: "#" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Cuases Name", href: "#" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Cuases Name", href: "#" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Cuases Name", href: "#" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Cuases Name", href: "#" }),
                            " "
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "h1",
                        null,
                        "MORE INFORMATION"
                    ),
                    _react2.default.createElement(
                        UnorderedListStyling,
                        null,
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Legal Stuff", href: "#" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Privacy Policy", href: "#" }),
                            " "
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            " ",
                            _react2.default.createElement(_index.InternalLink, { text: "Contact Us", href: "#" }),
                            " "
                        )
                    )
                ),
                _react2.default.createElement(_index.InternalLink, { text: "JOIN US", color: "green", href: "#" })
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

//# sourceMappingURL=Footer.js.map