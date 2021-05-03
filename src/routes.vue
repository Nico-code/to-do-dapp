<script>
// @ts-check
import { createWebHistory, createRouter } from "vue-router";
import lottery from "./views/lottery.vue";
import futbol from "./views/futbol.vue";

const routes = [
    {
			path: "/",
			name: "Lottery",
			component: lottery,
    },
    {
			path: "/lottery",
			name: "Lottery",
			component: lottery,
    },
    {
			path: "/futbol",
			name: "Futbol",
			component: futbol,
    }
  ]

export default routes;
</script>
