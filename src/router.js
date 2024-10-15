import { createRouter, createWebHashHistory } from "vue-router";

import PageHome from "./pages/PageHome.vue";
import PageProjects from "./pages/PageProjects.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: PageHome,
        },
        {
            path: '/projects',  
            name: 'projects',   
            component: PageProjects,
        }
    ]   
})

export { router };