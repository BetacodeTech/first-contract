
// Using web3js
require('dotenv').config();
const API_URL = process.env.API_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

// Get contract from compile artifacts
const contract = require("../artifacts/contracts/Counter.sol/Counter.json");

// Print contract ABI
// console.log(JSON.stringify(contract.abi));

// In order to interact with our contract we need to create an instance of it in our code
const contractAddress = process.env.CONTRACT_ADDRESS;
const counterContract = new web3.eth.Contract(contract.abi, contractAddress);

async function readCounterValue() {
    const counter = await counterContract.methods.getCount().call();
    console.log("The counter is: " + counter);
}
readCounterValue();