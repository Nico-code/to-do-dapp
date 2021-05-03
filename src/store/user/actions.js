import API from "../../services/api";
import _ from 'lodash'

export default{

  saveUser:({commit}) => {
    let stringUser = sessionStorage.getItem('user')
		let user = JSON.parse(stringUser)
    commit('setUser', user)
  },

  removeUser:({commit}) => {
    commit('deleteUser', {})
  },

  getUsers:( { commit } ) => {
    API.admins.getUsers()
      .then(res => commit('setUser', res.data) )
      .catch(error => commit('setErrorUsersApi', _.get(error, "response.data.errors.message", "Error please try later.") ) )
  },

  deleteUser:( { commit, dispatch }, id ) => {
    API.admins.deleteUser(id)
      .then(res => dispatch('getUsers') )
      .catch(error => commit('setErrorUsersApi', _.get(error, "response.data.errors.message", "Error please try later.") ) )
  },

  updateUser:( { commit, dispatch }, {userId, data} ) => {
    API.admins.updateUser(userId, data)
      .then(res => dispatch('getUsers') )
      .catch(error => commit('setErrorUsersApi', _.get(error, "response.data.errors.message", "Error please try later.") ) )
  },
}