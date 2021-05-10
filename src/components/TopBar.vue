<template>
  <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle">
          <button type="button" class="navbar-toggler">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <!-- <a class="navbar-brand" href="javascript:;">Paper Dashboard 2</a> -->
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navigation">
        <ul class="navbar-nav">
          <li class="nav-item cursor-pointer" v-if="!wallet">
            <a class="nav-link btn-magnify" @click="connect">
              <i class="fas fa-wallet"></i>
              <p style="margin-left: 10px;">
                <span class="d-md-block">Connect</span>
              </p>
            </a>
          </li>
          <li class="nav-item" v-else>
            <a class="nav-link btn-magnify">
              <i class="fas fa-wallet"></i>
              <p style="margin-left: 10px;">
                <span class="d-md-block">{{ wallet }}</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import walletService from '../services/wallet';

export default {
  name: 'TopBar',
  methods: {
    ...mapActions('wallet', ['setWallet']),
    async connect() {
      const address = await walletService.connect();
      this.setWallet({ address });
    },
  },
  computed: {
    ...mapState('wallet', ['wallet']),
  },
  mounted() {

  }
}
</script>
