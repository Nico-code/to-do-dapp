export default {
  setPrice(state, price) {
    state.market = {
      ...state.market,
      price,
    }
  },
  setLiquidity(state, liquidity) {
    state.market = {
      ...state.market,
      liquidity
    }
  }
}
