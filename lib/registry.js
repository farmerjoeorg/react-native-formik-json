"use strict";

exports.__esModule = true;
exports["default"] = exports.registerContainer = exports.containers = exports.registerField = exports.fields = exports.FIELD = exports.CONTAINER = void 0;

var _react = _interopRequireWildcard(require("react"));

var _formik = require("formik");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CONTAINER = 'container';
exports.CONTAINER = CONTAINER;
var FIELD = 'field';
exports.FIELD = FIELD;

var Registry = /*#__PURE__*/function () {
  function Registry() {
    this.mapping = {};
  }

  var _proto = Registry.prototype;

  _proto.get = function get(name) {
    var o = this.mapping[name];
    if (o == null) throw new Error('No object registered for: ' + name);
    return o;
  };

  _proto.register = function register(name, o) {
    this.mapping[name] = o;
  };

  return Registry;
}();

var fields = new Registry();
exports.fields = fields;
var registerField = fields.register.bind(fields);
exports.registerField = registerField;
var containers = new Registry();
exports.containers = containers;
var registerContainer = containers.register.bind(containers);
exports.registerContainer = registerContainer;
var _default = Registry;
exports["default"] = _default;