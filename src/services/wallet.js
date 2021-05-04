import Web3 from "web3";

const Wallet = {
  async connect() {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
    return false;
  },
}
export default Wallet;
