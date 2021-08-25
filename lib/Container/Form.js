"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Element = _interopRequireDefault(require("../Element"));

var _utils = require("../utils");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["name"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, _lodash["default"].map(elements, function (_ref2, key) {
    var elementName = _ref2.name,
        rest = _objectWithoutPropertiesLoose(_ref2, _excluded);

    var element = _lodash["default"].assign({}, rest);

    element.name = prefixNameToElement ? (0, _utils.joinNames)(name, elementName) : elementName;
    return /*#__PURE__*/_react["default"].createElement(_Element["default"], {
      key: key,
      config: element
    });
  }));
};

Form.propTypes = process.env.NODE_ENV !== "production" ? {
  config: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    htmlClass: _propTypes["default"].string,
    elements: _propTypes["default"].object.isRequired,
    prefixNameToElement: _propTypes["default"].bool
  })
} : {};
var _default = Form;
exports["default"] = _default;
module.exports = exports.default;