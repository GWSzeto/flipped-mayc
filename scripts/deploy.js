async function main() {
  const NFT = await ethers.getContractFactory("FlippedMAYC")
  const contract = await NFT.deploy()
  await contract.deployed()
  console.log("Contact deployed to address: ", contract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
