var _this = this;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { TextInput } from 'react-native';
import { changeHandler } from '../utils';

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
  return /*#__PURE__*/React.createElement(TextInput, {
    style: _extends({
      height: 30,
      borderWidth: 1,
      borderColor: '#000'
    }, errorStyle),
    value: value,
    onChangeText: function onChangeText(text) {
      console.log('value changes', text);
      changeHandler.bind(_this, handleChange(name), formik, config)(text);
    }
  });
};

export default React.memo(Text);