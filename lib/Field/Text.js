"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _utils = require("../utils");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Text = function Text(_ref) {
  var config = _ref.config,
      formik = _ref.formik,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      error = _ref.error;
  var name = config.name,
      type = config.type,
      attributes = config.attributes,
      fieldType = config.fieldType,
      defaultValue = config.defaultValue,
      icon = config.icon,
      _config$fieldClass = config.fieldClass,
      fieldClass = _config$fieldClass === void 0 ? 'form-control' : _config$fieldClass,
      _config$inputGroupCla = config.inputGroupClass,
      inputGroupClass = _config$inputGroupCla === void 0 ? 'input-group' : _config$inputGroupCla;
  var handleChange = formik.handleChange,
      handleBlur = formik.handleBlur;
  var isInputGroup = icon ? true : false;
  var errorStyle = error ? {
    borderColor: 'red'
  } : {};
  return /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, {
    style: _extends({
      height: 30,
      borderWidth: 1,
      borderColor: '#000'
    }, errorStyle),
    value: value,
    onChangeText: function onChangeText(text) {
      console.log('value changes', text);

      _utils.changeHandler.bind(_this, handleChange(name), formik, config)(text);
    }
  });
};

var _default = _react["default"].memo(Text);

exports["default"] = _default;
module.exports = exports.default;