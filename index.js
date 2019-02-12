require('dotenv').config();
var BigNumber = require('bignumber.js');
const Web3 = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.API_URL));

var balance = web3.eth.getBalance(process.env.ACCOUNT, function (error, result) {
    if (!error) {
	console.log('Account Balance:', web3.utils.fromWei(new BigNumber(result).toString(), 'ether'));
    } else {
      console.error(error);
    }
  });

// add .toString() to BigNumber due to error

let block = web3.eth.getBlock(7211516, function(error, result){
  if(!error)
      console.log(JSON.stringify(result));
  else
      console.error(error);
})



// CREATE - generates an account object
// https://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html

// let newAcc = web3.eth.accounts.create();
// console.log(newAcc);

// web3.eth.getProtocolVersion().then(console.log)
console.log("protocol version:", web3.eth.getProtocolVersion().then(console.log));

