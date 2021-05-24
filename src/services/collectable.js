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
  async getTxFee() {
    const QuiniCollectableInstance = await this.getConstractInstance();
    return QuiniCollectableInstance.methods.txFee().call();
  },
  async getMintFee() {
    const QuiniCollectableInstance = await this.getConstractInstance();
    return QuiniCollectableInstance.methods.mintFee().call();
  },
  async setTxFee(fee) {
    const QuiniCollectableInstance = await this.getConstractInstance();
    return QuiniCollectableInstance.methods.setTxFee(fee).send({ from: wallet.address, value: 0 });
  },
  async setMintFee(fee) {
    const QuiniCollectableInstance = await this.getConstractInstance();
    return QuiniCollectableInstance.methods.setMintFee(fee).send({ from: wallet.address, value: 0 });
  },
  async getTokenIdByIndex(index) {
    const QuiniCollectableInstance = await this.getConstractInstance();
    return QuiniCollectableInstance.methods.tokenByIndex(index).call();
  },
  async getTokenURIById(id) {
    const QuiniCollectableInstance = await this.getConstractInstance();
    return QuiniCollectableInstance.methods.tokenURI(id).call();
  },
  async adminMint(nftURI) {
    const QuiniCollectableInstance = await this.getConstractInstance();
    console.log('Sending: ', nftURI);
    return QuiniCollectableInstance.methods.adminMintCollectable(nftURI).send({ from: wallet.address, value: 0 });
  },

  async mint(nftURI) {
    const mintFee = await this.getMintFee();
    const QuiniCollectableInstance = await this.getConstractInstance();
    return QuiniCollectableInstance.methods.mintCollectable(nftURI).send({ from: wallet.address, value: mintFee });
  },
}
export default QuiniCollectableContractABI;
