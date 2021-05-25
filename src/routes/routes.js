import { createWebHistory, createRouter } from "vue-router";

import Welcome from '../components/welcome/welcome.vue'
import Main from '../components/main.vue';


const router = createRouter({
	history : createWebHistory(),
	routes: [
		{ path: '/', name: 'welcome', component: Welcome, },
		{ path: '/main', name: 'main', component: Main }
	]
});


export default router
