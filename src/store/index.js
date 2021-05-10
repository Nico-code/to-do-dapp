import { createStore } from "vuex";
import wallet from './wallet';
export const store = createStore({
  modules: {
    wallet
  }
})
