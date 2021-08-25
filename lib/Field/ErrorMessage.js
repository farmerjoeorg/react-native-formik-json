"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _formik = require("formik");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ErrorMessage = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ErrorMessage, _React$Component);

  function ErrorMessage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ErrorMessage.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _this$props = this.props,
        name = _this$props.name,
        formik = _this$props.formik;
    var currentError = (0, _utils.getError)(name, formik);
    var nextError = (0, _utils.getError)(name, nextProps.formik);
    return currentError !== nextError;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        name = _this$props2.name,
        formik = _this$props2.formik;
    var error = (0, _utils.getError)(name, formik);
    return error && /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, error));
  };

  return ErrorMessage;
}(_react["default"].Component);

var _default = (0, _formik.connect)(ErrorMessage);

exports["default"] = _default;
module.exports = exports.default;