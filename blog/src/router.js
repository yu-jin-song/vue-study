import { createWebHistory, createRouter } from "vue-router";
import Main from './components/MainHome.vue';
import List from './components/PostList.vue';
import Detail from './components/PostDetail.vue';

const routes = [  
    {
        path: "/list",
        component: List,
        props: true
    },
    {
        path: "/",
        component: Main
    },
    {
        path: "/detail/:id",
        component: Detail
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 