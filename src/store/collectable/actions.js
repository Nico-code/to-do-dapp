import collectableService from '../../services/collectable';

export default {
  buy: async ({ commit, dispatch }, { id }) => {
    await collectableService.buy(id);
  },
  setTotalSupply: async({ commit, dispatch }) => {
    const totalSupply = await collectableService.getTotalSupply();
    commit('setTotalSupply', totalSupply);
    dispatch('setNFTS', { totalSupply });
  },
  setNFTS: async ({ commit }, { totalSupply }) => {
    const nfts = [];
    for (let i = 0; i < totalSupply; i++) {
      const nft = await collectableService.getTokenByIndex(i);
      nfts.push(nft);
    }
    commit('setNFTS', nfts);
  }
}
