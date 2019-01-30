"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\noverflow: hidden;\npadding: 0 0 32px;\nmargin: 48px auto 0;\nwidth: 250px;\nborder-style: solid;\nborder-radius: 10px;\nmargin: 0px 40px;\n"], ["\noverflow: hidden;\npadding: 0 0 32px;\nmargin: 48px auto 0;\nwidth: 250px;\nborder-style: solid;\nborder-radius: 10px;\nmargin: 0px 40px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\npadding: 2px 16px;\n"], ["\npadding: 2px 16px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\nheight: auto; \nwidth: auto; \nmax-width: 250px; \nmax-height: 250px;\n"], ["\nheight: auto; \nwidth: auto; \nmax-width: 250px; \nmax-height: 250px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardWrapper = _styledComponents2.default.div(_templateObject);
var DivContainer = _styledComponents2.default.div(_templateObject2);

var ImageContainer = _styledComponents2.default.img(_templateObject3);

var MoreI4cCard = function (_Component) {
    _inherits(MoreI4cCard, _Component);

    function MoreI4cCard() {
        _classCallCheck(this, MoreI4cCard);

        return _possibleConstructorReturn(this, (MoreI4cCard.__proto__ || Object.getPrototypeOf(MoreI4cCard)).apply(this, arguments));
    }

    _createClass(MoreI4cCard, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                CardHeading = _props.CardHeading,
                CardText = _props.CardText,
                CardImage = _props.CardImage;


            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    CardWrapper,
                    null,
                    _react2.default.createElement(ImageContainer, { src: CardImage }),
                    _react2.default.createElement(
                        DivContainer,
                        null,
                        _react2.default.createElement(
                            "h3",
                            null,
                            CardHeading
                        ),
                        _react2.default.createElement(
                            "p",
                            null,
                            CardText
                        )
                    )
                )
            );
        }
    }]);

    return MoreI4cCard;
}(_react.Component);

exports.default = MoreI4cCard;

//# sourceMappingURL=MoreI4cCard.js.map