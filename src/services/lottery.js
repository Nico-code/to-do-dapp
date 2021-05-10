import Lottery from '../../build/contracts/Lottery.json';
import wallet from './wallet';
const LotteryContractABI = {
  async getConstractInstance() {
    if (window.lotteryInstance) {
      return window.lotteryInstance;
    } else {
      // Get contract instance
      // Get Network ID where contract is deployed
      // This will get you the contract address
      const networkId = await window.web3.eth.net.getId();
      const contractNetwork = Lottery.networks[networkId];
      const lotteryInstance = new window.web3.eth.Contract(
        Lottery.abi,
        contractNetwork.address,
      );
      window.lotteryInstance = lotteryInstance
      return window.lotteryInstance;
    }
  },
  async getTicketCost() {
    const lotteryInstance = await this.getConstractInstance();
    return lotteryInstance.methods.ticketCost().call();
  },
  async setTicketCost(cost) {
    const lotteryInstance = await this.getConstractInstance();
    const costGWei = window.web3.utils.toWei(cost, 'ether');
    return lotteryInstance.methods.setTicketCost(costGWei).send({
      from: wallet.address,
    });
  },
  async buyTicket(ticket) {
    const ticketCost = await this.getTicketCost();
    const lotteryInstance = await this.getConstractInstance();
    console.log('Buying ticket with cost: ', ticketCost);
    return lotteryInstance.methods.buyTicket(ticket).send({
      from: wallet.address,
      value: ticketCost
    });
  },
  async getWinningTicket() {
    const lotteryInstance = await this.getConstractInstance();
    return lotteryInstance.methods.winningTicket().call();
  },
  async getLotteryPrize() {
    const lotteryInstance = await this.getConstractInstance();
    return lotteryInstance.methods.prize().call();
  },
  async setWinningTicket(ticket) {
    const lotteryInstance = await this.getConstractInstance();
    return lotteryInstance.methods.setWinningTicket(ticket).send({
      from: wallet.address,
    });
  }
}
export default LotteryContractABI;
