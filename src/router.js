import { createRouter, createWebHashHistory } from "vue-router";

import PageProjects from "./pages/PageProjects.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: PageProjects,
        }
    ]   
})

export {router};