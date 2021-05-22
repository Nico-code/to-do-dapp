<template>
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
        <div class="content">
          <div class="row">
            <div class="col-sm-5">
              <div class="icon-big icon-warning text-center">
                <i class="fas fa-coins"></i>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="numbers">
                <p>Lottery Prize</p>
                {{ lottery.prize }}
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
                <i class="fas fa-award"></i>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="numbers">
                <p>Last winning ticket</p>
                {{ lottery.winningTicket }}
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
              <div class="icon-big icon-success text-center">
                <i class="fab fa-ethereum"></i>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="numbers">
                <p>Ticket Cost</p>
                {{ lottery.ticketCost }}
              </div>
            </div>
          </div>
          <div class="footer">
            <hr>
            <div class="stats">
              <i class="fas fa-sync"></i>
              Last day
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
          <div class="d-flex flex-wrap">
            <div class="card m-3  card-ticket" v-for="(ticket, i) in lotteryTickets" :key="`a-ticket-${i}`">
              <div class="card-header">
                <h5 class="card-title">
                  {{ ticket._id }}
                  <br/>
                  {{ ticket.name }}
                </h5>
              </div>
              <div class="form-group d-flex justify-content-center">
                <button class="btn btn-large btn-success" :disabled="!wallet" @click="() => buyTicket(ticket)"> Buy </button>
              </div>
            </div>
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
            <label>Set ticket cost (in Ether)</label>
            <input class="form-control" :disabled="!wallet" v-model="newTicketCost" type="text" placeholder="cost" />
            <button class="btn btn-danger" :disabled="!wallet" @click="setTicketCost"> Save </button>
          </div>
          <div class="form-group">
            <label>Set winning ticket</label>
            <input class="form-control" :disabled="!wallet" v-model="winningTicket" type="text" placeholder="ticket" />
            <button class="btn btn-danger" :disabled="!wallet" @click="setWinningTicket"> Save </button>
          </div>
          <div class="form-group">
            <label>Change Admin</label>
            <input class="form-control" :disabled="!wallet" v-model="winningTicket" type="text" placeholder="ticket" />
            <button class="btn btn-danger" :disabled="!wallet" @click="setWinningTicket"> Save </button>
          </div>
          <div class="form-group">
            <label>Contract balance (ether)</label>
            <span> {{ 'Ethereum padreee 0' }} </span>
            <button class="btn btn-danger" :disabled="!wallet" @click="setWinningTicket"> Get </button>
          </div>
          <div class="form-group">
            <label>Withdraw funds</label>
            <input class="form-control" :disabled="!wallet" v-model="winningTicket" type="text" placeholder="ticket" />
            <button class="btn btn-danger" :disabled="!wallet" @click="setWinningTicket"> Save </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import lotteryService from '../services/lottery';
export default {
  name: 'lotteries',
  data() {
    return {
      // Not so funny to write them by hand
      lotteryTickets: [
        { _id: "00", name: "Huevos" },
        { _id: "01", name: "Agua" },
        { _id: "02", name: "Niño" },
        { _id: "03", name: "San Cono" },
        { _id: "04", name: "La Cama" },
        { _id: "05", name: "Gato" },
        { _id: "06", name: "Perro" },
        { _id: "07", name: "Revolver" },
        { _id: "08", name: "Incendio" },
        { _id: "09", name: "Arroyo" },
        { _id: "10", name: "La leche" },
        { _id: "11", name: "Palito" },
        { _id: "12", name: "Soldado" },
        { _id: "13", name: "La yeta" },
        { _id: "14", name: "Borracho" },
        { _id: "15", name: "Niña bonita" },
        { _id: "16", name: "Anillo" },
        { _id: "17", name: "Desgracia" },
        { _id: "18", name: "Sangre" },
        { _id: "19", name: "Pescado" },
        { _id: "20", name: "La fiesta" },
        { _id: "21", name: "La mujer" },
        { _id: "22", name: "El loco" },
        { _id: "23", name: "Mariposa" },
        { _id: "24", name: "Caballo" },
        { _id: "25", name: "Gallina" },
        { _id: "26", name: "La misa" },
        { _id: "27", name: "El peine" },
        { _id: "28", name: "El cerro" },
        { _id: "29", name: "San Pedro" },
        { _id: "30", name: "Santa Rosa" },
        { _id: "31", name: "La luz" },
        { _id: "32", name: "Dinero" },
        { _id: "33", name: "Cristo" },
        { _id: "34", name: "Cabeza" },
        { _id: "35", name: "Pajarito" },
        { _id: "36", name: "Manteca" },
        { _id: "37", name: "Dentista" },
        { _id: "38", name: "Aceite" },
        { _id: "39", name: "Lluvia" },
        { _id: "40" , name: "Cura "} ,
        { _id: "41" , name: "Cucho "} ,
        { _id: "42" , name: "Zapatilla "} ,
        { _id: "43" , name: "Balcón "} ,
        { _id: "44" , name: "La cárcel "} ,
        { _id: "45" , name: "El vino "} ,
        { _id: "46" , name: "Tomates "} ,
        { _id: "47" , name: "Muerto "} ,
        { _id: "48" , name: "Muerto habla "} ,
        { _id: "49" , name: "La carne "} ,
        { _id: "50" , name: "El pan "} ,
        { _id: "51" , name: "Serrucho "} ,
        { _id: "52" , name: "Madre "} ,
        { _id: "53" , name: "El barco "} ,
        { _id: "54" , name: "La vaca "} ,
        { _id: "55" , name: "Los gallegos "} ,
        { _id: "56" , name: "La caída "} ,
        { _id: "57" , name: "Jorabajo "} ,
        { _id: "58" , name: "Ahogado "} ,
        { _id: "59" , name: "Planta "} ,
        { _id: "60" , name: "Virgen "} ,
        { _id: "61" , name: "Escopeta "} ,
        { _id: "62" , name: "Inundacion "} ,
        { _id: "63" , name: "Casamiento "} ,
        { _id: "64" , name: "Llanto "} ,
        { _id: "65" , name: "Cazador "} ,
        { _id: "66" , name: "Lombrices "} ,
        { _id: "67" , name: "Víbora "} ,
        { _id: "68" , name: "Sobrinos "} ,
        { _id: "69" , name: "Vicios "} ,
        { _id: "70" , name: "Muerto sueño "} ,
        { _id: "71" , name: "Excrementos "} ,
        { _id: "72" , name: "Sorpresa "} ,
        { _id: "73" , name: "Hospital "} ,
        { _id: "74" , name: "Negros "} ,
        { _id: "75" , name: "Payaso "} ,
        { _id: "76" , name: "Llamas "} ,
        { _id: "77" , name: "Las piernas "} ,
        { _id: "78" , name: "Ramera "} ,
        { _id: "79" , name: "Ladrón "} ,
        { _id: "80" , name: "La bocha "} ,
        { _id: "81" , name: "Flores "} ,
        { _id: "82" , name: "Pelea "} ,
        { _id: "83" , name: "Mal tiempo "} ,
        { _id: "84" , name: "Iglesia "} ,
        { _id: "85" , name: "Linterna "} ,
        { _id: "86" , name: "Humo "} ,
        { _id: "87" , name: "Piojos "} ,
        { _id: "88" , name: "El Papa "} ,
        { _id: "89" , name: "La rata "} ,
        { _id: "90" , name: "El miedo "} ,
        { _id: "91" , name: "Excusado "} ,
        { _id: "92" , name: "Médico "} ,
        { _id: "93" , name: "Enamorado "} ,
        { _id: "94" , name: "Cementerio "} ,
        { _id: "95" , name: "Anteojos "} ,
        { _id: "96" , name: "Marido "} ,
        { _id: "97" , name: "La mesa "} ,
        { _id: "98" , name: "Lavandera "} ,
        { _id: "99" , name: "Hermanos" }
        ],
      newTicketCost: 0,
      tickets: [],
      winningTicket: '',
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
    async buyTicket(_ticket) {
      try {
        console.log('Calling buy ticket');
        await lotteryService.buyTicket(_ticket)
        window.alert(`Ticket ${_ticket} bought successfully`);
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
    ...mapState('wallet', ['wallet']),
    ...mapState('lottery', ['lottery']),
  }
}
</script>

