"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\ncolor: white;\ndisplay: flex;\nflex-wrap: wrap;\n/* align-content: center; */\njustify-content:center;\nwidth: 100%;\nmargin: 0 auto;\npadding: 0 0 128px;\ncounter-reset: my-awesome-counter;\nlist-style: none;\n@media only screen and (min-width: 500px) {\n\n}\n    li {\n        /* margin: 0 0 0.5rem 0; */\n        counter-increment: my-awesome-counter;\n        position: relative;\n        width: 100%;\n        @media only screen and (min-width: 500px) {\n            width: auto;\n            margin: 0 24px;\n        }\n\n        /* padding: 32px; */\n        ::before {\n            position: absolute;\n            top: 200px;\n            background: transparent;\n            border-radius: 50%;\n            text-align: center;\n            content: counter(my-awesome-counter);\n            border-style: solid;\n            --size: 40px;\n            width: var(--size);\n            height: var(--size);\n            font-size: 2rem;\n            vertical-align: middle;\n            /* left: 16px; */\n            font-weight: bold;\n            margin: auto;\n            @media only screen and (min-width: 500px) {\n            left: calc(-1 * var(--size) - 12px);\n            top: 250px;\n            }\n        }\n    }\n"], ["\ncolor: white;\ndisplay: flex;\nflex-wrap: wrap;\n/* align-content: center; */\njustify-content:center;\nwidth: 100%;\nmargin: 0 auto;\npadding: 0 0 128px;\ncounter-reset: my-awesome-counter;\nlist-style: none;\n@media only screen and (min-width: 500px) {\n\n}\n    li {\n        /* margin: 0 0 0.5rem 0; */\n        counter-increment: my-awesome-counter;\n        position: relative;\n        width: 100%;\n        @media only screen and (min-width: 500px) {\n            width: auto;\n            margin: 0 24px;\n        }\n\n        /* padding: 32px; */\n        ::before {\n            position: absolute;\n            top: 200px;\n            background: transparent;\n            border-radius: 50%;\n            text-align: center;\n            content: counter(my-awesome-counter);\n            border-style: solid;\n            --size: 40px;\n            width: var(--size);\n            height: var(--size);\n            font-size: 2rem;\n            vertical-align: middle;\n            /* left: 16px; */\n            font-weight: bold;\n            margin: auto;\n            @media only screen and (min-width: 500px) {\n            left: calc(-1 * var(--size) - 12px);\n            top: 250px;\n            }\n        }\n    }\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrdList = _styledComponents2.default.ol(_templateObject);
var List = function List(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        OrdList,
        null,
        children
    );
};

exports.default = List;

//# sourceMappingURL=OrdList.js.map