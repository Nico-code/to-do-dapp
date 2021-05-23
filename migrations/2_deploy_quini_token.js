const QuiniToken = artifacts.require("QuiniToken");
const QuiniMarket = artifacts.require("QuiniMarket");

module.exports = async function (deployer, network, accounts) {

  const initialSupply = '21000000'

  // First deploy quini token
  await deployer.deploy(QuiniToken, initialSupply);

  // Then deploy a market to buy the quini token
  await deployer.deploy(QuiniMarket, QuiniToken.address);

  // Now, get the quini token instance
  const tokenInstance = await QuiniToken.deployed();
  // And approve spending for Quini Market in behalf of the deployer address
  await tokenInstance.approve(QuiniMarket.address, initialSupply);
};
