import dotenv from 'dotenv'
dotenv.config()

import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_MAINNET_ENDPOINT))
const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY_0)
console.log('----------------')
console.log(account)
console.log('----------------')


