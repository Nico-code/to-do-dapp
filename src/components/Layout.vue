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
import Footer from './Footer';
import TopBar from './TopBar';
import SideBar from './SideBar';
export default {
	name: "Layout",
  components: {
    Footer,
    TopBar,
    SideBar,
  },
}
</script>
