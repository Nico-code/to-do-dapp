<script>
// @ts-check
import lotteries from "./views/lotteries.vue";
import market from "./views/market.vue";

const routes = [
    {
			path: "/",
			component: lotteries,
    },
    {
			path: "/market",
			component: market,
    }
  ]

export default routes;
</script>
