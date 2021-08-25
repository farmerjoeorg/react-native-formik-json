import React, { Component } from 'react';
import { Field } from 'formik';
export var CONTAINER = 'container';
export var FIELD = 'field';

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

export var fields = new Registry();
export var registerField = fields.register.bind(fields);
export var containers = new Registry();
export var registerContainer = containers.register.bind(containers);
export default Registry;