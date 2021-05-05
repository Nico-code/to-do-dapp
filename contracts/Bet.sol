// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract FutbolBet {

  uint internal minimumBet = 1000000000000; // 1 Eth


  // User has to send the the chosen winer && make a payment
  function placeBet(uint8 _chosenWinner) public payable {
    //bet must be above a certain minimum
    require(msg.value >= minimumBet, "Bet amount must be >= minimum bet");

    // Create a map with address -> _chosenWinner ?

  }

  // Admin set the winner until an oracle is implemented
  // @TODO add isOwner modified
  function setWinner() public {}

  // Users has to manually claim their price
  function claimPrice() public {}

}
