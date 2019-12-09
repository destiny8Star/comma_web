import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: "hash", // 配置路由模式
    // mode: "history", // 配置路由模式
    routes: [
        {path: '/', name: 'home', component: Home},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        {
            path: '/productSystem',
            name: 'productSystem',
            component: () => import(/* webpackChunkName: "productSystem" */ './views/productSystem.vue')
        },

        /**
         * 关于我们
         */
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: () => import(/* webpackChunkName: "aboutUs" */ './views/aboutUs/index.vue')
        },

        /**
         * 产品体系
         */
        {
            path: '/product',
            name: 'product',
            component: () => import(/* webpackChunkName: "product" */ './views/product/index.vue')
        },

        /**
         * 加盟合作
         */
        {
            path: '/joinIn',
            name: 'joinIn',
            component: () => import(/* webpackChunkName: "joinIn" */ './views/joinIn/index.vue')
        },
        {
            path: '/recruitment',
            name: 'recruitment',
            component: () => import(/* webpackChunkName: "recruitment" */ './views/joinIn/recruitment.vue')
        },

        /**
         * 新闻资讯
         */
        {
            path: '/news',
            name: 'news',
            component: () => import(/* webpackChunkName: "news" */ './views/news/index.vue')
        },
        {
            path: '/newDetail',
            name: 'newDetail',
            component: () => import(/* webpackChunkName: "newDetail" */ './views/news/newDetail.vue')
        },

    ]
})
