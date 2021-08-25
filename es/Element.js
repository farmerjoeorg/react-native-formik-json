function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import _ from 'lodash';
import { connect } from 'formik';
import React, { Component } from 'react';
import ElementRenderer from './Renderer';
import { FIELD } from './registry';
import { getError } from './utils';
import shallowequal from 'shallowequal';

var Element = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Element, _Component);

  function Element(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    var _this$props = _this.props,
        config = _this$props.config,
        update = _this$props.update,
        formik = _this$props.formik;
    _this.state = {
      hasLoadedConfig: false,
      hasLoadedData: config.dataSource ? false : true,
      hasMounted: update !== false,
      submitCountToValidate: formik.submitCount || 0,
      value: undefined,
      error: false
    };
    _this.loadDataAfter = _this.loadDataAfter.bind(_assertThisInitialized(_this));
    _this.loadConfigAfter = _this.loadConfigAfter.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Element.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props2 = this.props,
        configSource = _this$props2.config.configSource,
        formik = _this$props2.formik;

    if (!this.state.hasLoadedConfig && configSource && _.isFunction(configSource)) {
      configSource(formik, this.props.config).then(this.loadConfigAfter)["catch"](function (err) {});
    }
  } // Experimental - needs thorough testing
  ;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !shallowequal(this.state, nextState) || !shallowequal(this.props.formik, nextProps.formik);
  };

  _proto.loadConfigAfter = function loadConfigAfter(config) {
    this.setState({
      hasLoadedConfig: true,
      loadedConfig: _.assign({}, this.props.config, config)
    });
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var update = nextProps.update,
        _nextProps$config = nextProps.config,
        name = _nextProps$config.name,
        dataSource = _nextProps$config.dataSource,
        type = _nextProps$config.type,
        formik = nextProps.formik;

    if (!this.state.hasMounted) {
      var canUpdate = update !== false || formik.isValidating === true; // if( false === canUpdate ) {
      //     return false;
      // }

      this.setState({
        hasMounted: canUpdate
      });
    }

    if (dataSource && _.isFunction(dataSource)) {
      if (formik.initialValues !== this.props.formik.initialValues && this.state.hasLoadedData) {
        dataSource(formik, nextProps.config).then(this.loadDataAfter)["catch"](function (err) {});
      }

      if (this.state.hasMounted && !this.state.hasLoadedData) {
        dataSource(formik, nextProps.config).then(this.loadDataAfter)["catch"](function (err) {});
      }
    }

    if (type === FIELD) {
      this.setState({
        value: _.get(formik.values, name),
        error: getError(name, formik)
      });
    }
  };

  _proto.loadDataAfter = function loadDataAfter(value) {
    this.setState({
      hasLoadedData: true
    });
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        initialConfig = _this$props3.config,
        formik = _this$props3.formik;
    var _this$state = this.state,
        loadedConfig = _this$state.loadedConfig,
        submitCountToValidate = _this$state.submitCountToValidate,
        value = _this$state.value,
        error = _this$state.error;
    var config = loadedConfig || initialConfig;
    var rendererProps = {
      config: config,
      submitCountToValidate: submitCountToValidate,
      value: value,
      error: error,
      formik: formik
    };
    return this.state.hasMounted && /*#__PURE__*/React.createElement(ElementRenderer, rendererProps);
  };

  return Element;
}(Component);

export default connect(Element);