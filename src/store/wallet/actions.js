export default {
  setWallet: ({ commit, dispatch }, { address }) => {
    commit('setWallet', address);
    dispatch('lottery/setTicketCost', {}, { root: true });
    dispatch('lottery/setLotteryPrize', {}, { root: true });
    dispatch('lottery/setLastWinningTicket', {}, { root: true });
    dispatch('market/setPrice', {}, { root: true });
    dispatch('market/setLiquidity', {}, { root: true });
    dispatch('collectable/setTotalSupply', {}, { root: true });
  },
}
