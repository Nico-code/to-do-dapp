const Lottery = artifacts.require("Lottery");

module.exports = async function (deployer, network, accounts) {

  const initialTicketCost = '10000000'
  await deployer.deploy(Lottery, initialTicketCost);
};
