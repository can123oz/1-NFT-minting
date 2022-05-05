//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;


// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NftLearning is ERC721 {

    constructor() ERC721("LearningNFTs","CanEth") {
        //minting an NFT to yourself..
        _mint(msg.sender, 1);
    }

}