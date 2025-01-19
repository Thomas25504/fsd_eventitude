import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/pages/Home.vue";
import Login from "../views/pages/Login.vue";
import Events from "../views/pages/NewEvent.vue";
import NotFound from "../views/pages/NotFound.vue";
import NewEvent from "../views/pages/NewEvent.vue";
import Profile from "../views/pages/Profile.vue";

const ifAuthenticated = (to, from, next) => {
    const loggedIn = localStorage.getItem("session_token");
    if(loggedIn){
        next();
        return;
    }
    next("/profile");
}

const routes = [
    {path: "/", component: Home},
    {path: "/events", component: NewEvent, beforeEnter: ifAuthenticated},
    {path: "/profile", component: Profile},
    {path: "/:pathMatch(.*)*", component: NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router;