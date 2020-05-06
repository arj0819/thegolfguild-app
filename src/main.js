import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';
import lodash from 'lodash';

Vue.use(VueAxios, axios);

Vue.prototype.moment = moment
Vue.prototype.$lodash = lodash

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
