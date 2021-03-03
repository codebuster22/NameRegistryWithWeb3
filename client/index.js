// step 1
const web3 = new Web3("http://127.0.0.1:7545");


// Step 2
let defaultAccount;

web3.eth.getAccounts()
    .then(
        accounts => defaultAccount=accounts[0]
        );
// Step 3
const NameRegistryAddress = "0x09Ac25a595dF43291b166112cF48E73CC7B1db50"

const NameRegistryContract = new web3.eth.Contract(NameRegistryAbi, NameRegistryAddress);

// // step 4
// let users;

NameRegistryContract
.methods.addUser("Mihir").send({
    from: "0xeAB93da2D43d0c1E423f8f6bE15C3f790150c758",
    gas: "3000000",
    gasPrice: "1"
})
.on("receipt",
        function (receipt) {
            console.log(receipt);
        }
)
.on("error",
        function (error, receipt) {
            console.log({error, receipt});
        }
)

NameRegistryContract
.methods
.getUserByaddress("0xeAB93da2D43d0c1E423f8f6bE15C3f790150c758")
.call().then(console.log);

NameRegistryContract
.methods.getMyDetails().call().then(console.log);