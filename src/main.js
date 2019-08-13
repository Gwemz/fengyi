import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'babel-polyfill'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
