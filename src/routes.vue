<script>
// @ts-check
import { createWebHistory, createRouter } from "vue-router";
import lotteries from "./views/lotteries.vue";
import futbol from "./views/futbol.vue";

const routes = [
    {
			path: "/",
			name: "Lottery",
			component: lotteries,
    },
    {
			path: "/lotteries",
			name: "lotteries",
			component: lotteries,
    },
    {
			path: "/futbol",
			name: "Futbol",
			component: futbol,
    }
  ]

export default routes;
</script>
