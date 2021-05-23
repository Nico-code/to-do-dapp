export default {
  setTicketCost(state, ticketCost) {
    state.lottery = {
      ...state.lottery,
      ticketCost,
    }
  },
  setLotteryPrize(state, prize) {
    state.lottery = {
      ...state.lottery,
      prize
    }
  },
  setLastWinningTicket(state, winningTicket) {
    state.lottery = {
      ...state.lottery,
      winningTicket
    }
  },
}
