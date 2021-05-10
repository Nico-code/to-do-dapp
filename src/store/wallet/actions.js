export default {
  setWallet: ({ commit, dispatch }, { address }) => {
    commit('setWallet', address)
  },
}
