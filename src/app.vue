<template>
  <Layout>
    <router-view> </router-view>
  </Layout>
</template>

<script>
import routes from './routes.vue'
import Layout from './components/layout.vue';

// @ts-check
export default {
  components: { Layout },
  data() {
    return {
      routes: routes,
      listRoutes: [],
      userType: "",
    };
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>
