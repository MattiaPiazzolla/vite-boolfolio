import { createRouter, createWebHistory } from "vue-router";

import PageHome from "./pages/PageHome.vue";
import PageProjects from "./pages/PageProjects.vue";
import PageProject from "./pages/PageProject.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import PageContacts from "./pages/PageContacts.vue";

const router = createRouter({
    history: createWebHistory(),
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
            path: '/contact',
            name: 'contact',
            component: PageContacts,
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: PageProject,
        },
        {
            path: '/:pathMatch(.*)*', 
            name: 'not-found',
            component: PageNotFound,
        }
    ]   
})

export { router };