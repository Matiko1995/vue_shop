"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

require("./plugins/element.js");

require("./assets/font/iconfont.css");

require("./assets/css/global.css");

var _vueTableWithTreeGrid = _interopRequireDefault(require("vue-table-with-tree-grid"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 导入字体图标
// 导入全局样式表
// 配置请求根路径
_axios["default"].defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'; // 配置请求头字段 axios request请求拦截器，优先调用这个回调函数，对请求做  {预处理}
//  config是请求的对象

_axios["default"].interceptors.request.use(function (config) {
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token'); // 必须return config

  return config;
});

_vue["default"].prototype.$http = _axios["default"]; // 挂载到运行对象

_vue["default"].config.productionTip = false;

_vue["default"].component('tree-table', _vueTableWithTreeGrid["default"]);

new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');