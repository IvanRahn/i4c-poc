'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\nwidth: auto;\nmargin: 0 auto;\nbackground: none;\ncolor: inherit;\nborder: none;\nmargin-top: auto;\n:hover {\n    cursor: pointer;\n}\n::after {\n    content: "";\n    display: block;\n    border-left: 1px solid black;\n    border-bottom: 1px solid black;\n    transform: rotate(-45deg);\n    height: 12px;\n    width: 12px;\n    margin: 8px auto;\n    left: 49.5%;\n}\n'], ['\nwidth: auto;\nmargin: 0 auto;\nbackground: none;\ncolor: inherit;\nborder: none;\nmargin-top: auto;\n:hover {\n    cursor: pointer;\n}\n::after {\n    content: "";\n    display: block;\n    border-left: 1px solid black;\n    border-bottom: 1px solid black;\n    transform: rotate(-45deg);\n    height: 12px;\n    width: 12px;\n    margin: 8px auto;\n    left: 49.5%;\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject);

var ScrollButton = function ScrollButton(_ref) {
    var target = _ref.target,
        text = _ref.text;


    var scrollAndGa = function scrollAndGa(event) {
        var element = document.getElementById(target);
        element.scrollIntoView(true, { behavior: "smooth", block: "end", inline: "nearest" });
    };

    return _react2.default.createElement(
        Button,
        { onClick: scrollAndGa },
        text
    );
};

exports.default = ScrollButton;

//# sourceMappingURL=ScrollButton.js.map