"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _reactGa = require("react-ga");

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRouterDom.withRouter)(function (_ref) {
    var className = _ref.className,
        section = _ref.section,
        text = _ref.text,
        location = _ref.location,
        children = _ref.children,
        to = _ref.to;

    var analytics = function analytics() {
        _reactGa2.default.event({
            category: 'ButtonLink',
            action: "Section: " + section + ", Button: " + text + ", Page: " + location.pathname
        });
    };
    return _react2.default.createElement(
        _reactRouterDom.Link,
        { className: className,
            onClick: analytics,
            to: "" + to
        },
        text || children
    );
});

//# sourceMappingURL=Link.js.map