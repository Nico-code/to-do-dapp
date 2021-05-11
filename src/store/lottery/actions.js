import lotteryService from '../../services/lottery';

export default {
  setTicketCost: async ({ commit, dispatch }, {}) => {
    const cost = await lotteryService.getTicketCost();
    commit('setTicketCost', cost)
  },
  setLotteryPrize: async ({ commit, dispatch }, {}) => {
    const prize = await lotteryService.getLotteryPrize();
    commit('setLotteryPrize', prize)
  },
  setLastWinningTicket: async ({ commit, dispatch }, {}) => {
    const winningTicket = await lotteryService.getWinningTicket();
    commit('setLastWinningTicket', winningTicket)
  },
}
