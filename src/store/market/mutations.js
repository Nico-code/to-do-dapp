export default {
  setPrice(state, price) {
    state.lottery = {
      ...state,
      price,
    }
  },
  setLiquidity(state, liquidity) {
    state.lottery = {
      ...state,
      liquidity
    }
  }
}
