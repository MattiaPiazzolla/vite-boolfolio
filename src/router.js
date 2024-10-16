import { createRouter, createWebHashHistory } from "vue-router";

import PageHome from "./pages/PageHome.vue";
import PageProjects from "./pages/PageProjects.vue";
import PageProject from "./pages/PageProject.vue";

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
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: PageProject,
        }
    ]   
})

export { router };