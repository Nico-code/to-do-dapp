import { createStore } from "vuex";
import wallet from './wallet';
import lottery from './lottery';
export const store = createStore({
  modules: {
    wallet,
    lottery
  }
})
