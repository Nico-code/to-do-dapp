import { createStore } from "vuex";
import user from './user/index'

export const store = createStore({
  modules:{
    user,
  }
})
