"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

var _utils = require("./utils");

var _yupSchema = _interopRequireDefault(require("@flipbyte/yup-schema"));

var _FieldTemplate = _interopRequireDefault(require("./FieldTemplate"));

var _withFormConfig = _interopRequireDefault(require("./withFormConfig"));

var _registry = require("./registry");

var _excluded = ["config", "error", "validationSchema", "formik"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderElement = function renderElement(props) {
  var _props$config = props.config,
      type = _props$config.type,
      renderer = _props$config.renderer;
  var registry = type === _registry.FIELD ? _registry.fields : _registry.containers;
  var Renderer = typeof renderer === 'string' ? registry.get(renderer) : renderer;
  return /*#__PURE__*/_react["default"].createElement(Renderer, props);
};

var ElementRenderer = function ElementRenderer(_ref) {
  var config = _ref.config,
      error = _ref.error,
      validationSchema = _ref.validationSchema,
      formik = _ref.formik,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var type = config.type,
      name = config.name,
      showWhen = config.showWhen,
      enabledWhen = config.enabledWhen,
      _config$template = config.template,
      Template = _config$template === void 0 ? _FieldTemplate["default"] : _config$template;
  var values = formik.values;
  return (0, _utils.match)(showWhen, values) && (type === _registry.FIELD ? /*#__PURE__*/_react["default"].createElement(_formik.Field, {
    name: name,
    render: function render(_ref2) {
      var value = _ref2.field.value;
      return /*#__PURE__*/_react["default"].createElement(Template, _extends({
        disabled: !(0, _utils.match)(enabledWhen, values)
      }, config), renderElement({
        config: config,
        formik: formik,
        value: value,
        error: error
      }));
    }
  }) : renderElement({
    config: config,
    formik: formik
  }));
};

var _default = (0, _withFormConfig["default"])(ElementRenderer);

exports["default"] = _default;
module.exports = exports.default;