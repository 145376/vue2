import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
// 按需引入echarts
import * as echarts from "echarts";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import {
  Button,
  Select,
  Menu,
  MenuItem,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Empty,
  Table,
  TableColumn,
  Pagination
} from "element-ui";

Vue.use(Button);
Vue.use(Select);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Empty);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
]);

Vue.prototype.$chart = echarts;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
