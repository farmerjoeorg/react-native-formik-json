"use strict";

exports.__esModule = true;
exports["default"] = exports.SchemaProvider = void 0;

var _messages = _interopRequireDefault(require("./messages"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SchemaContext = _react["default"].createContext({});

var SchemaProvider = function SchemaProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(SchemaContext.Provider, {
    value: value
  }, children);
};

exports.SchemaProvider = SchemaProvider;

var withFormConfig = function withFormConfig(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement(SchemaContext.Consumer, null, function (config) {
      return /*#__PURE__*/_react["default"].createElement(WrappedComponent, _extends({}, props, config));
    });
  };
};

var _default = withFormConfig;
exports["default"] = _default;