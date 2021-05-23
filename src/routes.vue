<script>
// @ts-check
import lotteries from "./views/lotteries.vue";
import market from "./views/market.vue";
import collectable from "./views/collectable.vue";

const routes = [
    {
			path: "/",
			component: lotteries,
    },
    {
			path: "/market",
			component: market,
    },
    {
			path: "/collectable",
			component: collectable,
    },
  ]

export default routes;
</script>
