// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./QuiniToken.sol";

contract QuiniMarket {
  QuiniToken private token;
  address private supplyOwner;

  constructor(
       QuiniToken _token
    ) {
        token = _token;
        supplyOwner = msg.sender;
    }

  function buy() public payable {
    require(msg.value > 0, "You need to send some ether");

    uint buyPrice = getPrice();
    uint tokens = msg.value * buyPrice;
    uint marketBalance = getBalanceAvailable();
    require(marketBalance >= tokens, 'Not enough balance in contract account');

    token.transferFrom(supplyOwner, msg.sender, tokens);
  }

  function getPrice() public view returns (uint256) {
    uint marketBalance = getBalanceAvailable();
    uint totalSupply = token.totalSupply();
    return totalSupply / marketBalance;
  }

  function getBalanceAvailable() public view returns(uint256) {
      return token.balanceOf(supplyOwner);
  }

}
