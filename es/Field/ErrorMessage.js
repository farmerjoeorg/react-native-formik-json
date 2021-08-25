function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'formik';
import { getError } from '../utils';

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
    var currentError = getError(name, formik);
    var nextError = getError(name, nextProps.formik);
    return currentError !== nextError;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        name = _this$props2.name,
        formik = _this$props2.formik;
    var error = getError(name, formik);
    return error && /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, error));
  };

  return ErrorMessage;
}(React.Component);

export default connect(ErrorMessage);