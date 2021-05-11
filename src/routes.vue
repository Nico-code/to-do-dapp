<script>
// @ts-check
import lotteries from "./views/lotteries.vue";

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
    }
  ]

export default routes;
</script>
