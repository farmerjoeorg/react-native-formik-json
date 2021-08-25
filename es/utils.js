var _excluded = ["onChange"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import _ from 'lodash';
import when from '@flipbyte/when-condition';

var fieldSubmitCount = _.memoize(function (name, submitCount, isValidating) {
  return isValidating ? submitCount - 1 : submitCount;
});

export var getError = function getError(name, _ref) {
  var errors = _ref.errors,
      touched = _ref.touched,
      isValidating = _ref.isValidating,
      submitCount = _ref.submitCount;

  var error = _.get(errors, name);

  var isTouched = _.get(touched, name);

  var fsc = fieldSubmitCount(name, submitCount, isValidating);
  return !_.isEmpty(error) && (isTouched || submitCount > fsc) ? error : false;
};
export var changeHandler = function changeHandler(handler, formikProps, _ref2, data) {
  var onChange = _ref2.onChange,
      fieldConfig = _objectWithoutPropertiesLoose(_ref2, _excluded);

  handler(data);
  _.isFunction(onChange) && onChange(formikProps, fieldConfig, data);
};
export var setFieldValueWrapper = function setFieldValueWrapper(setFieldValue, name) {
  return function (value) {
    return setFieldValue(name, value);
  };
};
export var joinNames = function joinNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _.join(_.filter(args, function (arg) {
    return _.isString(arg) && arg || _.isInteger(arg);
  }), '.');
};
export var prepareValidationSchema = function prepareValidationSchema(_ref3, result) {
  var elements = _ref3.elements;

  if (result === void 0) {
    result = {};
  }

  _.forEach(elements, function (element, index) {
    var name = element.name,
        type = element.type,
        validation = element.validation,
        prefixNameToElement = element.prefixNameToElement,
        renderer = element.renderer;

    if (type !== 'field') {
      var schema = prepareValidationSchema(element, {});

      if (prefixNameToElement) {
        if (!_.isEmpty(schema)) {
          if (name) {
            result[name] = [['object', schema]];
          } else {
            result = _extends({}, result, schema);
          }
        }
      } else if (renderer === 'editable-grid') {
        if (!_.isEmpty(schema)) {
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
export var match = function match(condition, values) {
  return condition ? when(condition, values) : true;
};