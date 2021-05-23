const QuiniCollectable = artifacts.require("QuiniCollectable");

const Lottery = artifacts.require("Lottery");

module.exports = async function (deployer, network, accounts) {

  // First deploy quini token
  await deployer.deploy(QuiniCollectable);
};
