<template>
  <Layout />
</template>

<script>
import routes from './routes.vue'
import { mapActions, mapState} from 'vuex'
import Layout from './components/Layout.vue';
// @ts-check
export default {
  components: { Layout },
  data() {
    return {
      routes: routes,
      listRoutes:[],
      userType: "",
    };
  },
  methods:{
    ...mapActions('user', ['removeUser']),
    Logout(){
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
      this.removeUser()
      this.$router.push('/')
      this.userType = ""

    },
    userLogged(data) {
      this.userType = data.userType
    }
  },
  computed:{
    ...mapState('user',['user'])
  },
  created(){
    let userString = sessionStorage.getItem('user')
    if(userString){
      let user = JSON.parse(userString)
      this.userType = user.role
    }
  },
  updated(){
  }

};
</script>
