"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 100%;\n    margin: 0 auto;\n    align-items: center; \n    padding: 52px 24px;\n    background-color: ", ";\n    height: ", ";\n    @media only screen and (min-width: 500px) {\n    height: ", ";\n    }\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 100%;\n    margin: 0 auto;\n    align-items: center; \n    padding: 52px 24px;\n    background-color: ", ";\n    height: ", ";\n    @media only screen and (min-width: 500px) {\n    height: ", ";\n    }\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SectionWrapper = _styledComponents2.default.section(_templateObject, function (props) {
    return props.color;
}, function (props) {
    return props.height || "auto";
}, function (props) {
    return props.height || "100vh";
});

exports.default = SectionWrapper;

//# sourceMappingURL=SectionWrapper.js.map