import { createRouter, createWebHistory } from "vue-router";
import listPage from "../nursing/pages/list-page.component.vue"
import page404 from '../public/pages/404.component.vue'
import home from '../public/pages/home.component.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/nursing/examiner-performance-overview', component: listPage },
        { path: '/:pathMatch(.*)*', component: page404 }
    ]
});

export default router;