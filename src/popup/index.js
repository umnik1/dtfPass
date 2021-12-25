import Vue from "vue";
import AppComponent from "./App/App.vue";

Vue.component("app-component", AppComponent);

// 局部引入Card
// import { Card } from "element-ui";
// Vue.use(Card);

// 全部引入
import ElementUI from "element-ui";
// 注意官方文档这个引入路径有问题，正确引入如下：
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import axios from "axios";
// import VueAxios from 'vue-axios';
// Vue.use(axios);
Vue.prototype.$http = axios;

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
