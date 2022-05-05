// Import ethers from Hardhat package
const {ethers} = require("hardhat");

async function main() {

    /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so nftContract here is a factory for instances of our GameItem contract.
    */
    const nftcontract = await ethers.getContractFactory("NftLearning");

    // here we deploy the contract
    const deployedNFTContract = await nftcontract.deploy();

    // print the address of the deployed contract
    console.log("NFT Contract Address: ", deployedNFTContract.address);

}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch(err => {
        console.log(err);
        process.exit(1);
    });


//0xfe1aaFd7AC5E2CA4e9101ffB124917DDE69dED13 contract address for rinkeby
