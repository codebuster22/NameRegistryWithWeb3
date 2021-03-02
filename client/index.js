// step 1

const NameRegistryJson = require('../build/contracts/NameRegistry.json');
const NameRegistryAbi = NameRegistryJson.abi;

const Web3 = require('web3');

const web3 = new Web3("http://127.0.0.1:7545");


// Step 2
let defaultAccount;

web3.eth.getAccounts()
    .then(
        accounts => defaultAccount=accounts[0]
        );
// Step 3
const NameRegistryAddress = "0xC9602b27DF4463f4dD5D3394134Da8cD57c6909c"

const NameRegistryContract = new web3.eth.Contract(NameRegistryAbi, NameRegistryAddress);

// // step 4
// let users;

NameRegistryContract
.methods.addUser("Mihir").send({
    from: "0x924c98fFfbF83b720790321884f54d0aa87eC0Ec",
    gas: "3000000",
    gasPrice: "1000000"
})
.then(console.log);

NameRegistryContract
.methods
.getUserByaddress("0xeAB93da2D43d0c1E423f8f6bE15C3f790150c758")
.call().then(console.log);

NameRegistryContract
.methods.getMyDetails().call().then(console.log);