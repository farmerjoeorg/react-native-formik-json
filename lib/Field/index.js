"use strict";

var _registry = require("../registry");

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

['text', 'email', 'password', 'number', 'url', 'date'].map(function (type) {
  return (0, _registry.registerField)(type, _Text["default"]);
});