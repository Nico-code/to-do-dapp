import QuiniCollectable from '../../build/contracts/QuiniCollectable.json';
import wallet from './wallet';
const QuiniCollectableContractABI = {
  async getConstractInstance() {
    if (window.QuiniCollectableInstance) {
      return window.QuiniCollectableInstance;
    } else {
      // Get contract instance
      // Get Network ID where contract is deployed
      // This will get you the contract address
      const networkId = await window.web3.eth.net.getId();
      const contractNetwork = QuiniCollectable.networks[networkId];
      const QuiniCollectableInstance = new window.web3.eth.Contract(
        QuiniCollectable.abi,
        contractNetwork.address,
      );
      window.QuiniCollectableInstance = QuiniCollectableInstance
      return window.QuiniCollectableInstance;
    }
  },
  async buy(id, ether) {
    const QuiniCollectableInstance = await this.getConstractInstance();
    return QuiniCollectableInstance.methods.buy(id).send({
      from: wallet.address,
      value: ether
    });
  },
  async getTotalSupply() {
    const QuiniCollectableInstance = await this.getConstractInstance();
    return QuiniCollectableInstance.methods.totalSupply().call();
  },
  async getTokenByIndex(index) {
    const QuiniCollectableInstance = await this.getConstractInstance();
    return QuiniCollectableInstance.methods.tokenByIndex(index).call();
  },
  async mint(nftURI) {
    const QuiniCollectableInstance = await this.getConstractInstance();
    return QuiniCollectableInstance.methods.mintCollectable(wallet.address, nftURI).send({ from: wallet.address, value: 0 });
  },
}
export default QuiniCollectableContractABI;
