<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="content">
          <div class="row">
            <div class="col-sm-5">
              <div class="icon-big icon-warning text-center">
                <i class="fas fa-gifts"></i>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="numbers">
                <p>Total NFTs</p>
                {{ collectable.totalSupply }}
              </div>
            </div>
          </div>
          <div class="footer">
            <hr>
            <div class="stats">
              <i class="fas fa-sync"></i> Updated now
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">
            NFTs:
          </h4>
        </div>
        <div class="card-body">
          <div class="d-flex flex-wrap">
            <div class="card m-3  card-ticket" v-for="(nft, i) in collectable.nfts" :key="`a-nft-${i}`">
              <div class="card-header">
                <h5 class="card-title">
                  {{ nft }}
                </h5>
              </div>
              <div class="form-group d-flex justify-content-center">
                <button class="btn btn-large btn-success" :disabled="!wallet" @click="() => buy(i)"> Buy </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            Mint NFT
          </h3>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input class="form-control" :disabled="!wallet" v-model="nftURI" type="text" placeholder="https://jsonplaceholder.typicode.com/todos/1" />
            <button class="btn btn-danger" :disabled="!wallet" @click="mint"> Mint </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import collectableService from '../services/collectable';
export default {
  name: 'Collectables',
  data() {
    return {
      nftURI: 'https://jsonplaceholder.typicode.com/todos/1'
    }
  },
  methods: {
    ...mapActions('collectable', ['setTotalSupply', 'setNFTS']),
    async buy(collectableId) {
      try {
        await collectableService.buy(collectableId)
      } catch(e) {
        console.log('Error swaping tokens');
        console.log(e);
      }
    },
    async mint(){
      await collectableService.mint(this.nftURI)
      await this.updateInfo();
    },
    async updateInfo() {
      await Promise.all([
        this.setTotalSupply({}),
        this.setNFTS({})
      ])
    }
  },
  mounted() {
    this.updateInfo();
  },
  computed: {
    ...mapState('wallet', ['wallet']),
    ...mapState('collectable', ['collectable']),
  }
}
</script>

