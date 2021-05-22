const QuiniToken = artifacts.require("QuiniToken");
const QuiniMarket = artifacts.require("QuiniMarket");

module.exports = async function (deployer, network, accounts) {

  const initialSupply = '21000000'

  await deployer.deploy(QuiniToken, initialSupply);
  // console.log('Quini Token Address: ', quiniToken.address);

  await deployer.deploy(QuiniMarket, QuiniToken.address);

  // console.log('Quini Market Address: ', quiniMarket.address);

  const tokenInstance = await QuiniToken.deployed();

  await tokenInstance.approve(QuiniMarket.address, initialSupply);

};
