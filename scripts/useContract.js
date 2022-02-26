const { utils } = require("ethers")
const { ethers } = require("hardhat")
const { flippedMaycContractAddress } = require('../config.js')

async function main() {
  const Contract = await ethers.getContractFactory('FlippedMAYC')
  const contract = await Contract.attach(flippedMaycContractAddress)
  console.log("contract function setBaseURI: ", contract.setBaseURI)

  let txn = await contract.setBaseURI('ipfs://QmP4BpzyDQcvK79DPGu8Gpvks81wofCYngRPXpeW3nND5u/')
  await txn.wait()
  console.log("base URI set")

  txn = await contract.reserve(5)
  await txn.wait()
  console.log("5 NFTs reserved")

  txn = await contract.mint(2, { value: utils.parseEther('0.05')})
  await txn.wait()
  console.log("minted 2 NFTs")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
