var _excluded = ["children"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { View, Text } from 'react-native';

var Label = function Label(_ref) {
  var children = _ref.children,
      attributes = _objectWithoutPropertiesLoose(_ref, _excluded);

  if (children) {
    return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, children));
  }

  return null;
};

export default React.memo(Label);