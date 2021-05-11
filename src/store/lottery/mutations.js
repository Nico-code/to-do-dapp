export default {
  setTicketCost(state, ticketCost) {
    state.lottery = {
      ...state,
      ticketCost,
    }
  },
  setLotteryPrize(state, prize) {
    state.lottery = {
      ...state,
      prize
    }
  },
  setLastWinningTicket(state, winningTicket) {
    state.lottery = {
      ...state,
      winningTicket
    }
  },
}
