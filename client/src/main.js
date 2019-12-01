import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"

import VueRouter from 'vue-router'
import router from './routes'

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


sync(store, router)
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
