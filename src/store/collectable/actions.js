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
  setMintFee: async({ commit, dispatch }) => {
    const fee = await collectableService.getMintFee();
    commit('setMintFee', fee);
  },
  setTxFee: async({ commit, dispatch }) => {
    const fee = await collectableService.getTxFee();
    commit('setTxFee', fee);
  },
  setNFTS: async ({ commit }, { totalSupply }) => {
    const nfts = [];
    for (let i = 0; i < totalSupply; i++) {
      const id = await collectableService.getTokenIdByIndex(i);
      const uri = await collectableService.getTokenURIById(id);
      nfts.push({ id, uri });
    }
    commit('setNFTS', nfts);
  },
}
