<template>
  <div class="wrapper">
    <div class="sidebar" data-color="black" data-active-color="danger">
      <div class="logo">
        <a href="https://www.creative-tim.com" class="simple-text logo-mini">
          <div class="logo-image-small">
            <!-- <img src="../assets/img/logo-small.png"> -->
          </div>
        </a>
        <a href="/" class="simple-text logo-normal">
          Crypto Bets
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="active ">
            <a href="/bets">
              <i class="fas fa-ticket-alt"></i>
              <p>Lottery</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "Layout",
  data() {
    return {}
  },
  mounted() {},
	methods:{
		connect() {}
	}
}
</script>
