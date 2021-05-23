import { createStore } from "vuex";
import wallet from './wallet';
import lottery from './lottery';
import collectable from './collectable';
import market from './market';
export const store = createStore({
  modules: {
    wallet,
    lottery,
    market,
    collectable
  }
})
