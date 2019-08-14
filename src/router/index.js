import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import About from '@/pages/about/about'
import Detail from '@/pages/detail/detail'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [{
        path:'/',
        name:'Home',
        component:Home
    },{
        path:'/about',
        name:'About',
        component: About
    },{
        path:'/detail/:id',
        name:'Detail',
        component: Detail
    }],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})