<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            Quini Market
          </h3>
        </div>
        <div class="card-body">
          <h4>Buy $quini </h4>
          <div class="form-group">
            <label>Pay Ether</label>
            <input class="form-control" :disabled="!wallet" v-model="wei" type="text" placeholder="wei" />
            <label>Receive $quini</label>
            <input class="form-control" disabled v-model="tokens" type="text" placeholder="$quini" />
            <button class="btn btn-danger" :disabled="!wallet" @click="buy"> Swap </button>
          </div>
          <label>Price: {{ market.price }} </label>
          <br/>
          <label>Liquidity: {{ market.liquidity }} </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import quiniMarketService from '../services/market';
export default {
  name: 'Market',
  data() {
    return {
      wei: 10,
    }
  },
  methods: {
    ...mapActions('market', ['setPrice', 'setLiquidity']),
    async buy() {
      try {
        await quiniMarketService.buy(this.wei)
        await this.updateInfo();
      } catch(e) {
        console.log('Error swaping tokens');
        console.log(e);
      }
    },
    async updateInfo() {
      await Promise.all([
        this.setPrice({}, {}),
        this.setLiquidity({}, {})
      ])
    }
  },
  mounted() {
    this.updateInfo();
  },
  computed: {
    ...mapState('wallet', ['wallet']),
    ...mapState('market', ['market']),
    tokens() {
      return (this.market.price * this.wei) || 0;
    }
  }
}
</script>

