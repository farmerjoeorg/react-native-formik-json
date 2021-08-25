"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Label = function Label(_ref) {
  var children = _ref.children,
      attributes = _objectWithoutPropertiesLoose(_ref, _excluded);

  if (children) {
    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, children));
  }

  return null;
};

var _default = _react["default"].memo(Label);

exports["default"] = _default;
module.exports = exports.default;