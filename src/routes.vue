<script>
// @ts-check
import lotteries from "./views/lotteries.vue";
import market from "./views/market.vue";

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
			path: "/market",
			name: "market",
			component: market,
    }
  ]

export default routes;
</script>
