"use strict";

var _registry = require("../registry");

var _Form = _interopRequireDefault(require("./Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _registry.registerContainer)('form', _Form["default"]);