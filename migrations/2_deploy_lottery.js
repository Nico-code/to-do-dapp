const Lottery = artifacts.require("Lottery");

module.exports = function (deployer) {
  const initialTicketValue = 250000000000000000;
  deployer.deploy(Lottery, initialTicketValue);
};
