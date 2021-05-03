export default{
  setUser(state, users){
    state.users = users
  },

  deleteUser(state){
    state.users = {}
  },

  setErrorUsersApi(state, errorUsersAPI){
    state.errorUsersAPI = errorUsersAPI
  }
}