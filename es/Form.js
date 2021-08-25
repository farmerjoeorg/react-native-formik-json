var _excluded = ["onUpdate", "schema"],
    _excluded2 = ["schema", "onUpdate", "initialValues"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import _ from 'lodash';
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import messages from './messages';
import Element from './Element';
import { SchemaProvider } from './withFormConfig';
import { prepareValidationSchema } from './utils';
import Rules from '@flipbyte/yup-schema';

var FormikForm = function FormikForm(_ref) {
  var onUpdate = _ref.onUpdate,
      schema = _ref.schema,
      formik = _objectWithoutPropertiesLoose(_ref, _excluded);

  // on form value(s) change
  useEffect(function () {
    if (typeof onUpdate === 'function') {
      onUpdate(formik);
    }
  }, [formik.values]);
  return /*#__PURE__*/React.createElement(Element, {
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
    var validationSchema = prepareValidationSchema(this.props.schema);
    this.validationSchema = !_.isEmpty(validationSchema) ? new Rules([['object', validationSchema]]).toYup() : null;
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

    return /*#__PURE__*/React.createElement(SchemaProvider, {
      value: this.getContextValue()
    }, /*#__PURE__*/React.createElement(Formik, _extends({}, formProps, {
      ref: formProps.innerRef,
      render: function render(props) {
        return /*#__PURE__*/React.createElement(FormikForm, _extends({
          onUpdate: onUpdate,
          schema: schema
        }, props));
      }
    })));
  };

  return Form;
}(React.Component);

export default React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Form, _extends({
    innerRef: ref
  }, props));
});