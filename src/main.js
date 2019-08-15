import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'babel-polyfill'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/markdown.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

router.beforeEach((to,from,next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()  //执行后续代码操作
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

