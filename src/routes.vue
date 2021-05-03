<script>
// @ts-check
import { createWebHistory, createRouter } from "vue-router";
import VueRouterMultiguard from 'vue-router-multiguard'
import home from "./views/home.vue";

import { isLogin, isAdmin } from './services/middlewares'


const routes =[
    {
			path: "/",
			name: "Home",
			component: home,
    }
  ]

export default routes;
</script>
