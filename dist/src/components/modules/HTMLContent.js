"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n   a {\n    border-bottom: 3px solid ", ";\n    display: inline;\n    color: ", ";\n    text-align: center;\n    text-decoration: none;\t\n    ", "\n    margin: 8px 8px;\n    font-size: 1em;\n    :hover {\n        color: blue;\n    }\n  }\n"], ["\n   a {\n    border-bottom: 3px solid ", ";\n    display: inline;\n    color: ", ";\n    text-align: center;\n    text-decoration: none;\t\n    ", "\n    margin: 8px 8px;\n    font-size: 1em;\n    :hover {\n        color: blue;\n    }\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactGa = require("react-ga");

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = _styledComponents2.default.div(_templateObject, function (props) {
  return props.color || "black";
}, function (props) {
  return props.color || "black";
}, function (props) {
  return props.auto ? "" : "width: 128px;";
});

var HTMLContent = function (_Component) {
  _inherits(HTMLContent, _Component);

  function HTMLContent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HTMLContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTMLContent.__proto__ || Object.getPrototypeOf(HTMLContent)).call.apply(_ref, [this].concat(args))), _this), _this.contentClickHandler = function (e) {
      var targetLink = e.target.closest('a');
      console.log('​HTMLContent -> contentClickHandler -> targetLink', targetLink.innerHTML);
      var location = _this.props.location;

      var text = targetLink.innerHTML;
      _reactGa2.default.event({
        category: 'ButtonLink',
        action: "Section: \"CMS content\", Button: " + text + ", Page: " + location.pathname
      });
      var history = _this.props.history;

      if (!targetLink) return;
      if (targetLink.href.match(/localhost/)) {
        e.preventDefault();
        history.push(e.target.getAttribute("href"));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HTMLContent, [{
    key: "render",
    value: function render() {

      return _react2.default.createElement(Div, {
        onClick: this.contentClickHandler,
        dangerouslySetInnerHTML: { __html: this.props.content }
      });
    }
  }]);

  return HTMLContent;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(HTMLContent);

//# sourceMappingURL=HTMLContent.js.map