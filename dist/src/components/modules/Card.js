"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\noverflow: hidden;\n/* padding: 0 0 32px; */\nmargin: 48px auto 0;\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;\n@media only screen and (min-width: 500px) {\n    width: 250px;\n}\n"], ["\noverflow: hidden;\n/* padding: 0 0 32px; */\nmargin: 48px auto 0;\nwidth: 100%;\ndisplay: flex;\nflex-direction: column;\n@media only screen and (min-width: 500px) {\n    width: 250px;\n}\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\npadding: 2px 16px;\n"], ["\npadding: 2px 16px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\nheight: 200px; \nwidth: 200px; \n/* max-width: 250px;  */\n/* max-height: 250px; */\nborder-radius: 100%;\nalign-self: flex-end;\n@media only screen and (min-width: 500px) {\n    align-self: inherit;\n}\n"], ["\nheight: 200px; \nwidth: 200px; \n/* max-width: 250px;  */\n/* max-height: 250px; */\nborder-radius: 100%;\nalign-self: flex-end;\n@media only screen and (min-width: 500px) {\n    align-self: inherit;\n}\n"]);

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

var CardWrapper = _styledComponents2.default.div(_templateObject);
var DivContainer = _styledComponents2.default.div(_templateObject2);

var ImageContainer = _styledComponents2.default.img(_templateObject3);

var VolunteerCard = function (_Component) {
    _inherits(VolunteerCard, _Component);

    function VolunteerCard() {
        _classCallCheck(this, VolunteerCard);

        return _possibleConstructorReturn(this, (VolunteerCard.__proto__ || Object.getPrototypeOf(VolunteerCard)).apply(this, arguments));
    }

    _createClass(VolunteerCard, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                CardHeading = _props.CardHeading,
                CardText = _props.CardText,
                CardImage = _props.CardImage;


            return (
                // <div>
                _react2.default.createElement(
                    CardWrapper,
                    { display: this.props.display },
                    _react2.default.createElement(ImageContainer, { src: CardImage }),
                    _react2.default.createElement(
                        "h3",
                        null,
                        CardHeading
                    ),
                    _react2.default.createElement(_index.HTMLContent, { content: CardText })
                )
                // </div>

            );
        }
    }]);

    return VolunteerCard;
}(_react.Component);

exports.default = VolunteerCard;

//# sourceMappingURL=Card.js.map