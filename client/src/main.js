import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"

import VueRouter from 'vue-router'
import Routes from './routes'

import axios from "axios"
import moment from 'moment'

Vue.use(axios);
Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm')
  }
});

Vue.use(BootstrapVue);

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
