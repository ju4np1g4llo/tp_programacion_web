import * as Vue from 'vue';

import * as  VueRouter from 'vue-router';


import App from "@/App";
import homePage from "@/views/home-page";

const routes = [
    {path: '/home-page', name: "HomePage", component: homePage},
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});


const app = Vue.createApp(App);
app.use(router);
app.mount('#app');


