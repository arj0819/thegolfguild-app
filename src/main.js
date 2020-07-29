import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';
import lodash from 'lodash';
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueAxios, axios);
Vue.component('apexchart', VueApexCharts);

Vue.prototype.moment = moment
Vue.prototype.$lodash = lodash

Vue.config.productionTip = false;

Vue.filter('percent', function (value) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
  });
  return formatter.format(value);
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
