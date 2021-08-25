"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

var _messages = _interopRequireDefault(require("./messages"));

var _Element = _interopRequireDefault(require("./Element"));

var _withFormConfig = require("./withFormConfig");

var _utils = require("./utils");

var _yupSchema = _interopRequireDefault(require("@flipbyte/yup-schema"));

var _excluded = ["onUpdate", "schema"],
    _excluded2 = ["schema", "onUpdate", "initialValues"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormikForm = function FormikForm(_ref) {
  var onUpdate = _ref.onUpdate,
      schema = _ref.schema,
      formik = _objectWithoutPropertiesLoose(_ref, _excluded);

  // on form value(s) change
  (0, _react.useEffect)(function () {
    if (typeof onUpdate === 'function') {
      onUpdate(formik);
    }
  }, [formik.values]);
  return /*#__PURE__*/_react["default"].createElement(_Element["default"], {
    config: schema
  });
};

var Form = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Form, _React$Component);

  function Form(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.initValidationSchema();

    return _this;
  }

  var _proto = Form.prototype;

  _proto.initValidationSchema = function initValidationSchema() {
    var validationSchema = (0, _utils.prepareValidationSchema)(this.props.schema);
    this.validationSchema = !_lodash["default"].isEmpty(validationSchema) ? new _yupSchema["default"]([['object', validationSchema]]).toYup() : null;
  };

  _proto.getContextValue = function getContextValue() {
    return {
      validationSchema: this.validationSchema,
      schema: this.props.schema
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        schema = _this$props.schema,
        _this$props$onUpdate = _this$props.onUpdate,
        onUpdate = _this$props$onUpdate === void 0 ? function () {} : _this$props$onUpdate,
        _this$props$initialVa = _this$props.initialValues,
        initialValues = _this$props$initialVa === void 0 ? {} : _this$props$initialVa,
        rest = _objectWithoutPropertiesLoose(_this$props, _excluded2);

    var formProps = _extends({}, rest, {
      initialValues: initialValues
    });

    if (null !== this.validationSchema) {
      formProps.validationSchema = this.validationSchema;
    }

    return /*#__PURE__*/_react["default"].createElement(_withFormConfig.SchemaProvider, {
      value: this.getContextValue()
    }, /*#__PURE__*/_react["default"].createElement(_formik.Formik, _extends({}, formProps, {
      ref: formProps.innerRef,
      render: function render(props) {
        return /*#__PURE__*/_react["default"].createElement(FormikForm, _extends({
          onUpdate: onUpdate,
          schema: schema
        }, props));
      }
    })));
  };

  return Form;
}(_react["default"].Component);

var _default = _react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(Form, _extends({
    innerRef: ref
  }, props));
});

exports["default"] = _default;
module.exports = exports.default;