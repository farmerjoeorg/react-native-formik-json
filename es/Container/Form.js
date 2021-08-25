var _excluded = ["name"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import Element from '../Element';
import { joinNames } from '../utils';
import PropTypes from 'prop-types';

var Form = function Form(_ref) {
  var config = _ref.config,
      formik = _ref.formik;
  var name = config.name,
      elements = config.elements,
      _config$htmlClass = config.htmlClass,
      htmlClass = _config$htmlClass === void 0 ? 'form-horizontal' : _config$htmlClass,
      _config$prefixNameToE = config.prefixNameToElement,
      prefixNameToElement = _config$prefixNameToE === void 0 ? false : _config$prefixNameToE;
  var handleSubmit = formik.handleSubmit,
      handleReset = formik.handleReset;
  return /*#__PURE__*/React.createElement(View, null, _.map(elements, function (_ref2, key) {
    var elementName = _ref2.name,
        rest = _objectWithoutPropertiesLoose(_ref2, _excluded);

    var element = _.assign({}, rest);

    element.name = prefixNameToElement ? joinNames(name, elementName) : elementName;
    return /*#__PURE__*/React.createElement(Element, {
      key: key,
      config: element
    });
  }));
};

Form.propTypes = process.env.NODE_ENV !== "production" ? {
  config: PropTypes.shape({
    name: PropTypes.string,
    htmlClass: PropTypes.string,
    elements: PropTypes.object.isRequired,
    prefixNameToElement: PropTypes.bool
  })
} : {};
export default Form;