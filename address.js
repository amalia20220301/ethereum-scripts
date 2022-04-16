import dotenv from 'dotenv'
dotenv.config()

import bip39 from 'bip39'
import Hdkey from 'hdkey';
import {publicToAddress} from "ethereumjs-util";

const seed = bip39.mnemonicToSeedSync(process.env.WORDS)
const hdKey = Hdkey.fromMasterSeed(Buffer.from(seed),"hex")
const derived = hdKey.derive("m/44'/60'/0'/0/0")
console.log('----------------')
console.log('pubkey', derived.publicKey)
const address = "0x" + publicToAddress(derived.publicKey, true).toString("hex");
console.log('address',address)
console.log('----------------')

