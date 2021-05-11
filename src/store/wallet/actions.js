export default {
  setWallet: ({ commit, dispatch }, { address }) => {
    commit('setWallet', address);
    dispatch('lottery/setTicketCost', {}, { root: true });
    dispatch('lottery/setLotteryPrize', {}, { root: true });
    dispatch('lottery/setLastWinningTicket', {}, { root: true });
  },
}
