// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract QuiniCollectable is ERC721Enumerable, ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  mapping (uint256 => uint256) public collectablePrice;

  uint256 private _fee;

  constructor() ERC721("QuiniCollectable", "QC") {}

  function fee() public view virtual returns (uint256) {
    return _fee;
  }

  function mintCollectable(address account, string memory _tokenURI)
    public
    onlyOwner
    returns (uint256)
  {

    uint256 newItemId = _tokenIds.current();
    _safeMint(account, _tokenIds.current());
    _setTokenURI(newItemId, _tokenURI);
    _tokenIds.increment();

    return newItemId;
  }

  function allowBuy(uint256 _tokenId, uint256 _price) external {
    require(msg.sender == ownerOf(_tokenId), 'Not owner of this token');
    require(_price > 0, 'Price zero');
    collectablePrice[_tokenId] = _price;
  }

  function disallowBuy(uint256 _tokenId) external {
    require(msg.sender == ownerOf(_tokenId), 'Not owner of this token');
    collectablePrice[_tokenId] = 0;
  }

  function buy(uint256 _tokenId) external payable {
    uint256 price = collectablePrice[_tokenId];
    require(price > 0, 'This token is not for sale');
    require(msg.value == price, 'Incorrect value');

    address seller = ownerOf(_tokenId);
    _transfer(seller, msg.sender, _tokenId);
    collectablePrice[_tokenId] = 0; // not for sale anymore
    payable(seller).transfer(msg.value - msg.value * this.fee()); // send the ETH to the seller
  }

  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  function tokenURI(uint256 tokenId)
    public
    view
    override(ERC721, ERC721URIStorage)
    returns (string memory)
  {
    return super.tokenURI(tokenId);
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721Enumerable)
    returns (bool)
  {
      return super.supportsInterface(interfaceId);
  }

  function _beforeTokenTransfer(address from, address to, uint256 tokenId)
    internal
    override(ERC721, ERC721Enumerable)
  {
    super._beforeTokenTransfer(from, to, tokenId);
  }

}
