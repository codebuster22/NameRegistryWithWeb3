const username = document.getElementById("username");
const username_from_events = document.getElementById("username_from_events")
const username_from_filter_events = document.getElementById("username_from_filter_events");
const usernameInput = document.getElementById("input_username");
const usernameFetch = document.getElementById("username_fetch");
const addressInput = document.getElementById("input_address");
const signUpBtn = document.getElementById("button_signup");

const web3 = new Web3("ws://127.0.0.1:7545");
const NameRegistryContract = new web3.eth.Contract(NameRegistryAbi, NameRegistryAddress);

let usernameValue;
let addressValue;
let defaultAccount;

web3.eth.getAccounts().then(
    accounts=>defaultAccount=accounts[0]
);

NameRegistryContract.defaultAccount = defaultAccount;

// Events
NameRegistryContract
    .events.NewUser()
    .on("data",(event)=>{
        console.log("From Events",event);
        username_from_events.innerHTML = event.returnValues.user_name;
    });

// Events with Indexed
NameRegistryContract
    .events.NewUser({
        filter: {user_address: ["0x924c98fFfbF83b720790321884f54d0aa87eC0Ec","0x2989fB650d19A1923BC23980F750857Ff4487CB0"]}
    })
    .on("data",(event)=>{
        console.log("From Filter Events",event);
        username_from_filter_events.innerHTML = event.returnValues.user_name;
    });

NameRegistryContract
    .methods.getMyDetails().call().then(data=>username.innerHTML = data[2]).catch(e=>console.warn(e));

const handleUsernameChange = (event) => {
    const value = event.target.value;
    console.log(value);
    usernameValue = value;
}

const handleAddressChange = (event) => {
    const value = event.target.value;
    console.log(value);
    addressValue = value;
}

const handleSignUpClick = () => {
    signUp(usernameValue, addressValue);
}

usernameInput.addEventListener("change",handleUsernameChange);
addressInput.addEventListener("change",handleAddressChange);
signUpBtn.addEventListener("click",handleSignUpClick);


const signUp = (username, address) => {
    const options = {
        from: address,
        gas: "3000000",
        gasPrice: "1000000"
    };

    NameRegistryContract
    .methods.addUser(username).send(options)
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
    .getUserByaddress(address)
    .call().then(
        (data)=>{
            usernameFetch.innerHTML = data[2];
        }
    )
    .catch(e=>console.warn(e));
        
    NameRegistryContract
    .methods.getMyDetails().call().then(console.log).catch(e=>console.warn(e));
}