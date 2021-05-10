<template>
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
        <div class="content">
          <div class="row">
            <div class="col-xs-5">
              <div class="icon-big icon-warning text-center">
                <i class="ti-server"></i>
              </div>
            </div>
            <div class="col-xs-7">
              <div class="numbers">
                <p>Lottery Prize</p>
                Ether {{ winningPrize }}
              </div>
            </div>
          </div>
          <div class="footer">
            <hr>
            <div class="stats">
              <i class="ti-reload"></i> Updated now
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <div class="content">
          <div class="row">
            <div class="col-xs-5">
              <div class="icon-big icon-warning text-center">
                <i class="ti-server"></i>
              </div>
            </div>
            <div class="col-xs-7">
              <div class="numbers">
                <p>Last winning ticket</p>
                <p> {{ lastWinningTicket }} </p>
              </div>
            </div>
          </div>
          <div class="footer">
            <hr>
            <div class="stats">
              <i class="ti-reload"></i> Updated now
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <div class="content">
          <div class="row">
            <div class="col-xs-5">
              <div class="icon-big icon-success text-center">
                <i class="ti-wallet"></i>
              </div>
            </div>
            <div class="col-xs-7">
              <div class="numbers">
                <p>Ticket Cost</p>
                Ether {{ ticketCost }}
              </div>
            </div>
          </div>
          <div class="footer">
            <hr>
            <div class="stats">
              <i class="ti-calendar"></i> Last day
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
              Tickets
            </h4>
          </div>
          <div class="card-body">
            <div class="form-group"> Last winning ticket: {{ lastWinningTicket }} </div>
            <div class="form-group">
              <input class="form-control" :disabled="!wallet" v-model="myTicket" type="text" placeholder="Write a ticket number" />
              <button class="btn btn-success" :disabled="!wallet" @click="buyTicket"> Buy </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">
              Admin Commands
            </h4>
          </div>
          <div class="card-body">
            <div class="form-group">
              <button class="btn btn-success" :disabled="!wallet" @click="getTicketCost"> Get ticket cost </button>
            </div>
            <div class="form-group">
              <button class="btn btn-success" :disabled="!wallet" @click="getWinningTicket"> Get last winning ticket </button>
            </div>
            <div class="form-group">
              <button class="btn btn-success" :disabled="!wallet" @click="getLotteryPrize"> Get lottery prize </button>
            </div>
            <div class="form-group">
              <label>Set ticket cost (in Ether)</label>
              <input class="form-control" :disabled="!wallet" v-model="newTicketCost" type="text" placeholder="cost" />
              <button class="btn btn-danger" :disabled="!wallet" @click="setTicketCost"> Save </button>
            </div>
            <div class="form-group">
              <label>Set winning ticket</label>
              <input class="form-control" :disabled="!wallet" v-model="winningTicket" type="text" placeholder="ticket" />
              <button class="btn btn-danger" :disabled="!wallet" @click="setWinningTicket"> Save </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Loterias</h4>
          </div>
          <div class="card-body">
            <ul class="list-unstyled team-members">
              <li v-for="(lottery, i) in lotteries" :key="lottery._id">
                <div class="row">
                  <div class="col-md-1 col-1">
                    <div class="avatar">
                      <img :src="`https://picsum.photos/300?random=${i+1}`" alt="Circle Image" class="img-circle img-no-padding img-responsive">
                    </div>
                  </div>
                  <div class="col-md-10 col-10">
                    {{ lottery.name }}
                    <br />
                    <span :class="lottery.stateClass"><small>{{ lottery.state }}</small></span>
                  </div>
                  <div class="col-md-1 col-1 text-right">
                    <button class="btn btn-sm btn-outline-success btn-round btn-icon"><i class="fas fa-coins"></i></button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import lotteryService from '../services/lottery';
export default {
  data() {
    return {
      lotteries: [
        {
          _id: 1,
          name: 'Quiniela de la Ciudad',
          state: 'Offline',
          stateClass: 'text-muted'
        },
        {
          _id: 2,
          name: 'Tombola de Entre Rios',
          state: 'Available',
          stateClass: 'text-success'
        },
        {
          _id: 3,
          name: 'Quiniela de Santa Fe',
          state: 'Busy',
          stateClass: 'text-danger'
        },
      ],
      newTicketCost: 0,
      ticketCost: 0,
      winningPrize: 0,
      tickets: [],
      myTicket: '',
      winningTicket: '',
      lastWinningTicket: '',
    }
  },
  methods: {
    async getTicketCost() {
      const weiCost = await lotteryService.getTicketCost();
      this.ticketCost = window.web3.utils.fromWei(weiCost, 'ether');
    },
    async getLotteryPrize() {
      const lotteryPriceWei = await lotteryService.getLotteryPrize();
      this.winningPrize = window.web3.utils.fromWei(lotteryPriceWei, 'ether');
    },
    async buyTicket() {
      try {
        console.log('Calling buy ticket');
        await lotteryService.buyTicket(this.myTicket)
        window.alert(`Ticket ${this.myTicket} bought successfully`);
        this.myTicket = '';
      } catch(e) {
        console.log('Error buying ticket');
        console.log(e);
      }
    },
    async setWinningTicket() {
      try {
        console.log('Calling set winning ticket');
        await lotteryService.setWinningTicket(this.winningTicket);
        window.alert(`Winning ticket set successfully`);
        this.myTicket = '';
        this.winningTicket = '';
      } catch(e) {
        console.log('Error setting winning ticket');
        console.log(e);
      }
    },
    async setTicketCost() {
      try {
        console.log('Setting ticket price');
        await lotteryService.setTicketCost(this.newTicketCost);
      } catch(e) {
        console.log('Error setting ticket price');
        console.log(e);
      }
    },
    async getWinningTicket() {
      this.lastWinningTicket = await lotteryService.getWinningTicket();
    },
  },
  computed: {
    ...mapState('wallet', ['wallet'])
  }
}
</script>

