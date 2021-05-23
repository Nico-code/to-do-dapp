import marketService from '../../services/market';

export default {
  setPrice: async ({ commit, dispatch }, {}) => {
    const price = await marketService.getPrice();
    commit('setPrice', price)
  },
  setLiquidity: async ({ commit, dispatch }, {}) => {
    const liquidity = await marketService.getLiquidity();
    commit('setLiquidity', liquidity)
  }
}
