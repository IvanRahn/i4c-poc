"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n    border-bottom: 3px solid ", ";\n    display: inline-block;\n    color: ", ";\n    text-align: center;\n    text-decoration: none;\t\n    ", "\n    margin: 8px 8px;\n    /* height: 32px; */\n    padding-bottom: 8px;\n    font-size: 1em;\n    :hover {\n        color: blue;\n    }\n    "], ["\n    border-bottom: 3px solid ", ";\n    display: inline-block;\n    color: ", ";\n    text-align: center;\n    text-decoration: none;\t\n    ", "\n    margin: 8px 8px;\n    /* height: 32px; */\n    padding-bottom: 8px;\n    font-size: 1em;\n    :hover {\n        color: blue;\n    }\n    "]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Link = require("./Link");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonLink = (0, _styledComponents2.default)(_Link2.default)(_templateObject, function (props) {
    return props.color || "black";
}, function (props) {
    return props.color || "black";
}, function (props) {
    return props.auto ? "" : "width: 128px;";
});

// function StyledLink({className, section, text, location, color, to, auto}) {

//         return (
//         <ButtonLink 
//             className={className}
//             auto={auto} 
//             to={`${to}`} 
//             color={color}
//             location={location}
//             section={section}
//             >
//                 {text}
//         </ButtonLink>
//         )
//     }

exports.default = ButtonLink;

//# sourceMappingURL=InternalLink.js.map