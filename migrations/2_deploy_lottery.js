const Lottery = artifacts.require("Lottery");

module.exports = function (deployer) {
  const initialTicketValue = 10;
  deployer.deploy(Lottery, initialTicketValue);
};
