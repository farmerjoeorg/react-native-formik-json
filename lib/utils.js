"use strict";

exports.__esModule = true;
exports.match = exports.prepareValidationSchema = exports.joinNames = exports.setFieldValueWrapper = exports.changeHandler = exports.getError = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _whenCondition = _interopRequireDefault(require("@flipbyte/when-condition"));

var _excluded = ["onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var fieldSubmitCount = _lodash["default"].memoize(function (name, submitCount, isValidating) {
  return isValidating ? submitCount - 1 : submitCount;
});

var getError = function getError(name, _ref) {
  var errors = _ref.errors,
      touched = _ref.touched,
      isValidating = _ref.isValidating,
      submitCount = _ref.submitCount;

  var error = _lodash["default"].get(errors, name);

  var isTouched = _lodash["default"].get(touched, name);

  var fsc = fieldSubmitCount(name, submitCount, isValidating);
  return !_lodash["default"].isEmpty(error) && (isTouched || submitCount > fsc) ? error : false;
};

exports.getError = getError;

var changeHandler = function changeHandler(handler, formikProps, _ref2, data) {
  var onChange = _ref2.onChange,
      fieldConfig = _objectWithoutPropertiesLoose(_ref2, _excluded);

  handler(data);
  _lodash["default"].isFunction(onChange) && onChange(formikProps, fieldConfig, data);
};

exports.changeHandler = changeHandler;

var setFieldValueWrapper = function setFieldValueWrapper(setFieldValue, name) {
  return function (value) {
    return setFieldValue(name, value);
  };
};

exports.setFieldValueWrapper = setFieldValueWrapper;

var joinNames = function joinNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _lodash["default"].join(_lodash["default"].filter(args, function (arg) {
    return _lodash["default"].isString(arg) && arg || _lodash["default"].isInteger(arg);
  }), '.');
};

exports.joinNames = joinNames;

var prepareValidationSchema = function prepareValidationSchema(_ref3, result) {
  var elements = _ref3.elements;

  if (result === void 0) {
    result = {};
  }

  _lodash["default"].forEach(elements, function (element, index) {
    var name = element.name,
        type = element.type,
        validation = element.validation,
        prefixNameToElement = element.prefixNameToElement,
        renderer = element.renderer;

    if (type !== 'field') {
      var schema = prepareValidationSchema(element, {});

      if (prefixNameToElement) {
        if (!_lodash["default"].isEmpty(schema)) {
          if (name) {
            result[name] = [['object', schema]];
          } else {
            result = _extends({}, result, schema);
          }
        }
      } else if (renderer === 'editable-grid') {
        if (!_lodash["default"].isEmpty(schema)) {
          result[name] = [['array', [['object', schema]]]];
        }
      } else {
        result = _extends({}, result, schema);
      }
    } else {
      if (validation) {
        result[name] = validation;
      }
    }
  });

  return result;
};

exports.prepareValidationSchema = prepareValidationSchema;

var match = function match(condition, values) {
  return condition ? (0, _whenCondition["default"])(condition, values) : true;
};

exports.match = match;