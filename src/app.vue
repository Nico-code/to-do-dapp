<template>
  <nav class="navbar navbar-expand-lg navbar-light header fw-bold" id="nav">
    <div>
      <a href="#" class="nav fontFamily text-back">CriptoBets</a>
    </div>
    <div class="div-navbar-collapse">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-end" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link class="mr-3 text-back fontFamily text-bold" to="/">Home</router-link> <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view @userLogin="userLogged" />
</template>

<script>
import routes from './routes.vue'
import { mapActions, mapState} from 'vuex'
// @ts-check
export default {
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
    userLogged(data){
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
