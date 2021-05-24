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
  },
  setTxFee(state, txFee) {
    state.collectable = {
      ...state.collectable,
      txFee
    }
  },
  setMintFee(state, mintFee) {
    state.collectable = {
      ...state.collectable,
      mintFee
    }
  }
}
