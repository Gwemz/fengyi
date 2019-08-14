import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import About from '@/pages/about/about'
import Detail from '@/pages/detail/detail'

Vue.use(Router);

export default new Router({
    mode:'history',
    base: '/fengyi',
    routes: [{
        path:'/',
        name:'Home',
        component:Home,
        meta:{
            title: '奉壹杂记'
        }
    },{
        path:'/about',
        name:'About',
        component: About,
        meta:{
            title: '关于奉壹杂记'
        }
    },{
        path:'/detail/:id',
        name:'Detail',
        component: Detail,
        meta:{
            title: '文章详情'
        }
    }],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})