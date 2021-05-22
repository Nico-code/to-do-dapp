import marketService from '../../services/market';

export default {
  setPrice: async ({ commit, dispatch }, {}) => {
    const cost = await marketService.getPrice();
    commit('setPrice', cost)
  },
  setLiquidity: async ({ commit, dispatch }, {}) => {
    const prize = await marketService.getLiquidity();
    commit('setLiquidity', prize)
  }
}
