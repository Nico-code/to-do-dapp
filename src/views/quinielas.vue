<template>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Quinielas</h4>
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
export default {
  name: 'quinielas',
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
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

