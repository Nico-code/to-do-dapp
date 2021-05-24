<template>
  <div class="row">
    <div class="col-sm-4">
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
    <div class="col-sm-4">
      <div class="card">
        <div class="content">
          <div class="row">
            <div class="col-sm-5">
              <div class="icon-big icon-warning text-center">
                <i class="fas fa-percent"></i>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="numbers">
                <p>TX Fee</p>
                {{ collectable.txFee }} %
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
    <div class="col-sm-4">
      <div class="card">
        <div class="content">
          <div class="row">
            <div class="col-sm-5">
              <div class="icon-big icon-warning text-center">
                <i class="fab fa-ethereum"></i>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="numbers">
                <p>Mint Fee</p>
                {{ collectable.mintFee }} wei
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
  <div class="row" v-if="collectable.nfts.length">
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
                  ID: {{ nft.id }}
                </h5>
                <div> URI: {{ nft.uri }} </div>
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
            Create your own NFT!
          </h3>
          <span>
            Minting an NFT has a fixed cost of {{collectable.mintFee}} wei
          </span>
        </div>
        <div class="card-body">
          <h5> Insert NFT Metadata URI </h5>
          <div class="form-group">
            <input class="form-control" :disabled="!wallet" v-model="nftURI" type="text" placeholder="https://jsonplaceholder.typicode.com/todos/1" />
            <button class="btn btn-danger" :disabled="!wallet" @click="mint"> Mint </button>
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
            Admin
          </h3>
        </div>
        <div class="card-body">
          <h4> Mint an NFT </h4>
          <div class="form-group">
            <input class="form-control" :disabled="!wallet" v-model="adminNftURI" type="text" placeholder="https://jsonplaceholder.typicode.com/todos/1" />
            <button class="btn btn-danger" :disabled="!wallet" @click="mint"> Mint </button>
          </div>
        </div>
        <div class="card-body">
          <h4> Set TX Fee </h4>
          <div class="form-group">
            <input class="form-control" :disabled="!wallet" v-model="newTxFee" type="text" placeholder="25%" />
            <button class="btn btn-danger" :disabled="!wallet" @click="saveTxFee"> Save </button>
          </div>
        </div>
        <div class="card-body">
          <h4> Set Mint Fee (wei) </h4>
          <div class="form-group">
            <input class="form-control" :disabled="!wallet" v-model="newMintFee" type="text" placeholder="500 wei" />
            <button class="btn btn-danger" :disabled="!wallet" @click="saveMintFee"> Save </button>
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
      nftURI: 'https://jsonplaceholder.typicode.com/todos/1',
      adminNftURI: 'https://jsonplaceholder.typicode.com/todos/1',
      newTxFee: 10,
      newMintFee: 500,
    }
  },
  methods: {
    ...mapActions('collectable', ['setTotalSupply', 'setNFTS', 'setTxFee', 'setMintFee']),
    async buy(collectableId) {
      try {
        await collectableService.buy(collectableId)
      } catch(e) {
        console.log('Error swaping tokens');
        console.log(e);
      }
    },
    async adminMint(){
      await collectableService.adminMint(this.adminNftURI);
      await this.updateInfo();
    },
    async mint(){
      await collectableService.mint(this.nftURI);
      await this.updateInfo();
    },
    async saveTxFee(){
      await collectableService.setTxFee(this.newTxFee);
      await this.updateInfo();
    },
    async saveMintFee(){
      await collectableService.setMintFee(this.newMintFee);
      await this.updateInfo();
    },
    async updateInfo() {
      await Promise.all([
        this.setTotalSupply({}),
        this.setNFTS({}),
        this.setTxFee({}),
        this.setMintFee({}),
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

