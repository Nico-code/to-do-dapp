// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract QuiniToken is ERC20 {
  constructor(uint256 supply) ERC20("Quini", "QUINI") {
    _mint(msg.sender, supply);
  }
}
