import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './vuex'

import './utils'
import './styles/element-ui.scss'

var v = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  data:{}
})
