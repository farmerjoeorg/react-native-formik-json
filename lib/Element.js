"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _formik = require("formik");

var _react = _interopRequireWildcard(require("react"));

var _Renderer = _interopRequireDefault(require("./Renderer"));

var _registry = require("./registry");

var _utils = require("./utils");

var _shallowequal = _interopRequireDefault(require("shallowequal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

    if (!this.state.hasLoadedConfig && configSource && _lodash["default"].isFunction(configSource)) {
      configSource(formik, this.props.config).then(this.loadConfigAfter)["catch"](function (err) {});
    }
  } // Experimental - needs thorough testing
  ;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !(0, _shallowequal["default"])(this.state, nextState) || !(0, _shallowequal["default"])(this.props.formik, nextProps.formik);
  };

  _proto.loadConfigAfter = function loadConfigAfter(config) {
    this.setState({
      hasLoadedConfig: true,
      loadedConfig: _lodash["default"].assign({}, this.props.config, config)
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

    if (dataSource && _lodash["default"].isFunction(dataSource)) {
      if (formik.initialValues !== this.props.formik.initialValues && this.state.hasLoadedData) {
        dataSource(formik, nextProps.config).then(this.loadDataAfter)["catch"](function (err) {});
      }

      if (this.state.hasMounted && !this.state.hasLoadedData) {
        dataSource(formik, nextProps.config).then(this.loadDataAfter)["catch"](function (err) {});
      }
    }

    if (type === _registry.FIELD) {
      this.setState({
        value: _lodash["default"].get(formik.values, name),
        error: (0, _utils.getError)(name, formik)
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
    return this.state.hasMounted && /*#__PURE__*/_react["default"].createElement(_Renderer["default"], rendererProps);
  };

  return Element;
}(_react.Component);

var _default = (0, _formik.connect)(Element);

exports["default"] = _default;
module.exports = exports.default;