"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Chart = /*#__PURE__*/function (_React$Component) {
  _inherits(Chart, _React$Component);

  var _super = _createSuper(Chart);

  function Chart(props) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _super.call(this, props);
    _this.state = {
      count: _this.props.data
    };
    _this.instance;
    _this.options = {
      chart: {
        type: "column"
      },
      title: {
        text: "Performance"
      },
      subtitle: {
        text: "Sunday Match"
      },
      xAxis: {
        categories: ["Kick", "Up Block", "Back", "Pass", "Drill"],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: "Number of times"
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: "Alex",
        data: _this.state.count,
        animation: false
      }]
    };
    return _this;
  }

  _createClass(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount(prevProps) {
      this.instance = Highcharts.chart("container", this.options);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.data !== this.props.data) {
        this.setState({
          count: this.props.data
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        id: "container"
      }));
    }
  }]);

  return Chart;
}(React.Component);

var AdminPanel = /*#__PURE__*/function (_React$Component2) {
  _inherits(AdminPanel, _React$Component2);

  var _super2 = _createSuper(AdminPanel);

  function AdminPanel(props) {
    var _this2;

    _classCallCheck(this, AdminPanel);

    _this2 = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this2), "mySubscriber", function (msg, data) {
      _this2.setState({
        count: data
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "token", PubSub.subscribe("gestures", _this2.mySubscriber));

    _this2.state = {
      count: [0, 0, 0, 0, 0],
      kicks: 0,
      upBlocks: 0,
      backPasses: 0,
      passes: 0,
      drills: 0
    };
    _this2.token = null;
    return _this2;
  }

  _createClass(AdminPanel, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Dashboard"), /*#__PURE__*/React.createElement("div", {
        className: "dashboard"
      }, /*#__PURE__*/React.createElement("div", {
        className: "dashboard__item dashboard__item--full"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card"
      }, /*#__PURE__*/React.createElement("figure", {
        className: "highcharts-figure"
      }, /*#__PURE__*/React.createElement(Chart, {
        data: Object.values(this.state.count),
        key: Object.values(this.state.count)
      })))), /*#__PURE__*/React.createElement("div", {
        className: "dashboard__item dashboard__item--col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card text-center "
      }, /*#__PURE__*/React.createElement("span", null, "Kicks"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), this.state.count['kick'])), /*#__PURE__*/React.createElement("div", {
        className: "dashboard__item dashboard__item--col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card text-center "
      }, /*#__PURE__*/React.createElement("span", null, "Up Blocks"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), this.state.count['up'])), /*#__PURE__*/React.createElement("div", {
        className: "dashboard__item dashboard__item--col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card text-center "
      }, /*#__PURE__*/React.createElement("span", null, "Back passes"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), this.state.count['back'])), /*#__PURE__*/React.createElement("div", {
        className: "dashboard__item dashboard__item--col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card text-center "
      }, /*#__PURE__*/React.createElement("span", null, "Passes"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), this.state.count['pass'])), /*#__PURE__*/React.createElement("div", {
        className: "dashboard__item dashboard__item--col"
      }, /*#__PURE__*/React.createElement("div", {
        className: "card text-center "
      }, /*#__PURE__*/React.createElement("span", null, "Drills"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), this.state.count['drill']))));
    }
  }]);

  return AdminPanel;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(AdminPanel, null), document.getElementById("adminMain"));