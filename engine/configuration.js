/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/*
       ___  ___    _  _  ___  _____   __  __             _         _
 _ _  |_  )|   \  | \| || __||_   _| |  \/  | __ _  _ _ | |__ ___ | |_
| ' \  / / | |) | | .` || _|   | |   | |\/| |/ _` || '_|| / // -_)|  _|
|_||_|/___||___/  |_|\_||_|    |_|   |_|  |_|\__,_||_|  |_\_\\___| \__|

Update values accordingly
*/

/*

*/

import SimpleCrypto from "simple-crypto-js"
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const hhraw = "f7c7e9b4b1bfc178cfadf13ee1707889ab412c5df6a4889468c0b3423c8ba417";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(hhraw)
export const cipherHH = simpleCrypto.encrypt(hhraw)

/*
MARKET AND NFT CONTRACTS
*/
export var hhresell = "0x9b7DbDb86a2606Bd25Cc028461EEd26906EfbC7D";
export var hhnftcol = "0xF9e12E07Da4b306Eed0Dc34e621927f50FE8AAE2";

/*
NETWORK RPC ADDRESSES, Choose one then
change the value of "hhrpc" below.
*/
var mumbai = 'https://matic-mumbai.chainstacklabs.com';
var goerli = 'https://rpc.ankr.com/eth_goerli';
var rinkeby = 'https://rpc.ankr.com/eth_rinkeby';
var bsctest = 'https://rpc-us.dogechain.dog';
var hardhat = 'http://node.a3b.io:8545';

/*
CHANGE THIS TO YOUR PREFERRED TESTNET
*/
var hhrpc = bsctest;
/*
Global Parameters
*/
export var mainnet = hhrpc

/*
DON'T FORGET TO SAVE!
*/
