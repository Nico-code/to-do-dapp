import QuiniMarket from '../../build/contracts/QuiniMarket.json';
import wallet from './wallet';
const QuiniMarketContractABI = {
  async getConstractInstance() {
    if (window.QuiniMarketInstance) {
      return window.QuiniMarketInstance;
    } else {
      // Get contract instance
      // Get Network ID where contract is deployed
      // This will get you the contract address
      const networkId = await window.web3.eth.net.getId();
      const contractNetwork = QuiniMarket.networks[networkId];
      const QuiniMarketInstance = new window.web3.eth.Contract(
        QuiniMarket.abi,
        contractNetwork.address,
      );
      window.QuiniMarketInstance = QuiniMarketInstance
      return window.QuiniMarketInstance;
    }
  },
  async getPrice() {
    const QuiniMarketInstance = await this.getConstractInstance();
    return QuiniMarketInstance.methods.getPrice().call();
  },
  async getLiquidity() {
    const QuiniMarketInstance = await this.getConstractInstance();
    return QuiniMarketInstance.methods.getBalanceAvailable().call();
  },
  async buy(ether) {
    const QuiniMarketInstance = await this.getConstractInstance();
    return QuiniMarketInstance.methods.buy().send({
      from: wallet.address,
      value: ether
    });
  }
}
export default QuiniMarketContractABI;
