'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\nflex-direction: column;\ntext-align: center;\nwidth: 100%;\npadding: 0;\nh1 {\n    margin-top: auto;\n}\n:last-of-type(button) {\n    margin-top: auto;\n}\n'], ['\nflex-direction: column;\ntext-align: center;\nwidth: 100%;\npadding: 0;\nh1 {\n    margin-top: auto;\n}\n:last-of-type(button) {\n    margin-top: auto;\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding: 52px 24px;\n'], ['\n    padding: 52px 24px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _modules = require('../modules');

var _InternalLink = require('./InternalLink');

var _InternalLink2 = _interopRequireDefault(_InternalLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImpactSectionWrapper = (0, _styledComponents2.default)(_modules.SectionWrapper)(_templateObject);
var Div = _styledComponents2.default.div(_templateObject2);

var CenteredContent = function (_Component) {
    _inherits(CenteredContent, _Component);

    function CenteredContent() {
        _classCallCheck(this, CenteredContent);

        return _possibleConstructorReturn(this, (CenteredContent.__proto__ || Object.getPrototypeOf(CenteredContent)).apply(this, arguments));
    }

    _createClass(CenteredContent, [{
        key: 'render',
        value: function render() {
            var color = this.props.color;


            return _react2.default.createElement(
                ImpactSectionWrapper,
                { 'aria-live': 'polite', color: color, height: 'auto' },
                _react2.default.createElement(
                    Div,
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Ready to invest for this cause?'
                    ),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'All of this works for ajdkjsahksahsa'
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'we slkdja dsk d jkas oq  nmsd nsdk jd a opdpoqdwdowdqpodk kdksad masmdnnm ,sand'
                    )
                ),
                _react2.default.createElement(
                    Div,
                    null,
                    _react2.default.createElement(_InternalLink2.default, { text: 'Join', color: 'green' })
                )
            );
        }
    }]);

    return CenteredContent;
}(_react.Component);

exports.default = CenteredContent;

//# sourceMappingURL=CenteredContent.js.map