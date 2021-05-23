// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Lottery
 * @dev
 */
contract Lottery is Ownable {

  mapping (string => address payable[]) tickets;
  string[] public selectedTickets;

  string public winningTicket;

  uint public ticketCost;

  uint public prize;

  constructor(uint _ticketCost) {
    ticketCost = _ticketCost;
    prize = 0;
  }

  function setWinningTicket(string memory _winningTicket) public onlyOwner returns (bool result){
    // Set winning ticket
    winningTicket = _winningTicket;
    // No winners for this ticket
    if (tickets[winningTicket].length < 1) {
      resetLottery();
      return true;
    }
    // Get amount of prize for each player
    uint individualPrize = prize / tickets[winningTicket].length;

    // Send payments to winners
    for (uint i = 0; i< tickets[winningTicket].length; i++) {
      tickets[winningTicket][i].transfer(individualPrize);
    }
    resetLottery();
    return true;
  }

  function setTicketCost(uint _ticketCost) public onlyOwner returns (bool result) {
    ticketCost = _ticketCost;
    return true;
  }

  function buyTicket(string memory ticketNumber) public payable returns (bool result) {
    require(msg.value >= ticketCost, 'Insufficient funds');
    // https://stackoverflow.com/questions/66799537
    // After solidity 0.8 msg.sender is not payable, so first cast/map it
    tickets[ticketNumber].push(payable(msg.sender));
    selectedTickets.push(ticketNumber);
    prize += ticketCost;
    return true;
  }

  function resetLottery() public onlyOwner {
    for (uint i = 0; i<selectedTickets.length; i++) {
      delete tickets[selectedTickets[i]];
    }
    delete selectedTickets;
    prize = 0;
  }

  function withdraw() public onlyOwner {
    address payable adminAddress = payable(msg.sender);
    adminAddress.transfer(address(this).balance);
  }

}
