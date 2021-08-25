import React from 'react';
import { View } from 'react-native';
import Label from './Field/Label';
import ErrorMessage from './Field/ErrorMessage';

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
  return /*#__PURE__*/React.createElement(View, null, label && /*#__PURE__*/React.createElement(Label, {
    htmlFor: name,
    className: labelClass
  }, label), children);
};

export default FieldTemplate;