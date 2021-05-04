<template>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">FUTBOL MI PANA</h4>
          </div>
          <div class="card-body">
            <ul class="list-unstyled team-members">
              <li v-for="game in games" :key="game._id">
                <div class="row">
                  <div class="col-md-1 col-1">
                    <div class="avatar">
                      <img src="https://picsum.photos/200" alt="Circle Image" class="img-circle img-no-padding img-responsive">
                    </div>
                  </div>
                  <div class="col-md-10 col-10">
                    {{ game.name }}
                    <br />
                    <span :class="game.stateClass"><small>{{ game.state }}</small></span>
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
  data() {
    return {
      games: [
        {
          _id: 1,
          name: 'Newells VS Central',
          state: 'Offline',
          stateClass: 'text-muted'
        },
        {
          _id: 2,
          name: 'Boquita VS River',
          state: 'Available',
          stateClass: 'text-success'
        },
        {
          _id: 3,
          name: 'Chacarita VS Racing Campeón',
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

