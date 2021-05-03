<template>
  <Layout>
    <Lottery />
  </Layout>
</template>

<script>
import Lottery from './views/lottery.vue'

import routes from './routes.vue'
import Layout from './components/Layout.vue';

// @ts-check
export default {
  components: { Layout, Lottery },
  data() {
    return {
      routes: routes,
      listRoutes: [],
      userType: "",
    };
  },
  methods: {},
  computed: {},
  created() {},
};
</script>
