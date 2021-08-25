var _excluded = ["config", "error", "validationSchema", "formik"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { Field } from 'formik';
import { match } from './utils';
import Rules from '@flipbyte/yup-schema';
import FieldTemplate from './FieldTemplate';
import withFormConfig from './withFormConfig';
import { containers, fields, FIELD } from './registry';

var renderElement = function renderElement(props) {
  var _props$config = props.config,
      type = _props$config.type,
      renderer = _props$config.renderer;
  var registry = type === FIELD ? fields : containers;
  var Renderer = typeof renderer === 'string' ? registry.get(renderer) : renderer;
  return /*#__PURE__*/React.createElement(Renderer, props);
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
      Template = _config$template === void 0 ? FieldTemplate : _config$template;
  var values = formik.values;
  return match(showWhen, values) && (type === FIELD ? /*#__PURE__*/React.createElement(Field, {
    name: name,
    render: function render(_ref2) {
      var value = _ref2.field.value;
      return /*#__PURE__*/React.createElement(Template, _extends({
        disabled: !match(enabledWhen, values)
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

export default withFormConfig(ElementRenderer);