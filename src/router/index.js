import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginLayout from '@/layouts/LoginLayout.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import News from '@/views/news/Index.vue'
import CreateNews from '@/views/news/Create.vue'
import Home from '@/components/Home.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        // component: () => import("@/views/news/Index.vue")
        component: LoginLayout,
        children: [
            {
                path: '/',
                component: Login
            }
        ]
    },
    {
        path: '/',
        name: 'root',
        // component: () => import("@/views/news/Index.vue")
        component: AppLayout,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: '/news',
                name: 'news.index',
                // component: () => import("@/views/news/Index.vue")
                component: News
            },
            {
                path: '/create-news',
                name: 'news.create',
                component: CreateNews
            },
            /*{
                path: '/edit/:id',
                name: 'news.edit',
                component: ()=> import("../views/news/Edit.vue")
            } */
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
    linkExactActiveClass: 'active'
});

export default router;