import jwt_decode from 'jwt-decode'
import { store } from '../store'

export const isLogin = (to, from, next) => {
  let token = sessionStorage.getItem('token')
  store.dispatch('user/saveUser')
  if (token) {
      next()
  } else {
      next('/login')
  }
}

export const isAdmin = (to, from, next) => {
  let token = sessionStorage.getItem('token')
  store.dispatch('user/saveUser')
  if (token) {
    let userDecode = jwt_decode(token)
    if (userDecode.role === 'admin') {
      next()
    } else {
      next('/'+userDecode.role)
    }
  } else {
    next('/'+userDecode.role)
  }
}
