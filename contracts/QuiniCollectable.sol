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

  uint256 private _txFee;

  uint256 private _mintFee;

  constructor() ERC721("QuiniCollectable", "QC") {}

  function txFee() public view virtual returns (uint256) {
    return _txFee;
  }

  function mintFee() public view virtual returns (uint256) {
    return _mintFee;
  }

  function setMintFee(uint _newFee) public onlyOwner returns(bool) {
    _mintFee = _newFee;
    return true;
  }

  function setTxFee(uint _newFee) public onlyOwner returns(bool) {
    _txFee = _newFee;
    return true;
  }

  function adminMintCollectable(string memory _tokenURI)
    public
    onlyOwner
    returns (uint256)
  {
    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();
    _safeMint(msg.sender, _tokenIds.current());
    _setTokenURI(newItemId, _tokenURI);

    return newItemId;
  }

  function mintCollectable(string memory _tokenURI)
    public
    payable
    returns (uint256)
  {
    require(msg.value >= _mintFee, 'Insuficient funds');

    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();
    _safeMint(msg.sender, _tokenIds.current());
    _setTokenURI(newItemId, _tokenURI);

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
    payable(seller).transfer(msg.value - msg.value * this.txFee()); // send the ETH to the seller
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

  function withdraw() public onlyOwner {
    address payable adminAddress = payable(msg.sender);
    adminAddress.transfer(address(this).balance);
  }

}
