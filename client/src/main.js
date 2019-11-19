import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"

import VueRouter from 'vue-router'
import Routes from './routes'

import {sync} from "vuex-router-sync"
import axios from "axios"
import moment from 'moment'
import store from "@/store/store"

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
sync(store, router)
new Vue({
  render: h => h(App),
  store,
  router: router
}).$mount('#app')
