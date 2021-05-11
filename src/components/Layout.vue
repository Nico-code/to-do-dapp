<template>
  <div class="wrapper">
    <div class="sidebar" data-color="black" data-active-color="danger">
      <SideBar />
    </div>
    <div class="main-panel">
       <!-- Navbar -->
      <TopBar />
      <!-- End Navbar -->

      <!-- Main Content -->
      <div class="content">
        <slot></slot>
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from './footer.vue';
import TopBar from './topbar.vue';
import SideBar from './sidebar.vue';
export default {
	name: "Layout",
  components: {
    Footer,
    TopBar,
    SideBar,
  },
}
</script>
