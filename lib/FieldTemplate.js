"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Label = _interopRequireDefault(require("./Field/Label"));

var _ErrorMessage = _interopRequireDefault(require("./Field/ErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(disabled) {
  return disabled ? {
    pointerEvents: 'none',
    opacity: 0.6
  } : {};
};

var FieldTemplate = function FieldTemplate(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      name = _ref.name,
      label = _ref.label,
      _ref$labelClass = _ref.labelClass,
      labelClass = _ref$labelClass === void 0 ? '' : _ref$labelClass,
      _ref$formGroupClass = _ref.formGroupClass,
      formGroupClass = _ref$formGroupClass === void 0 ? 'form-group' : _ref$formGroupClass,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, label && /*#__PURE__*/_react["default"].createElement(_Label["default"], {
    htmlFor: name,
    className: labelClass
  }, label), children);
};

var _default = FieldTemplate;
exports["default"] = _default;
module.exports = exports.default;