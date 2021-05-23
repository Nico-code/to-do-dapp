export default {
  setTotalSupply(state, totalSupply) {
    state.collectable = {
      ...state.collectable,
      totalSupply
    }
  },
  setNFTS(state, nfts) {
    state.collectable = {
      ...state.collectable,
      nfts
    }
  }
}
