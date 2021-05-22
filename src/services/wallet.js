const Wallet = {
  address: '',
  async connect() {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const walletAddress = accounts[0];
      this.address = walletAddress;
      return walletAddress;
    }
    return false;
  },
  async isConnected() {
    if(window.web3) {
      const accounts = await web3.eth.getAccounts();
      if(accounts[0]){
        return true;
      }
    }
    return false;
  },
}
export default Wallet;
