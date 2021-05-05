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
  next();
}
