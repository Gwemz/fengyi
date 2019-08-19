import Vue from 'vue'
import App from './App.vue'
import router from './router'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import 'babel-polyfill'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/markdown.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.use(preview)
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'data/logo.png',
  loading: 'data/logo.png',
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: [ 'scroll' ]
})
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

