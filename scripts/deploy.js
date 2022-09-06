// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat')
const fs = require('fs')

async function main() {
  const minimumDonation = hre.ethers.utils.parseEther('0.06')

  const ColeccionCosmovision = await hre.ethers.getContractFactory(
    'ColeccionCosmovision',
  )
  const contract = await ColeccionCosmovision.deploy(minimumDonation)

  await contract.deployed()

  console.log(`Minimum Donation Amount: ${minimumDonation}`)
  console.log(`ColeccionCosmovision was deployed to ${contract.address}`)

  const config = `export const abiAddress="${contract.address}"`
  const data = JSON.stringify(config)
  fs.writeFileSync('./frontend/config.js', JSON.parse(data))

  fs.copyFile(
    './artifacts/contracts/ColeccionCosmovision.sol/ColeccionCosmovision.json',
    './frontend/utils/abi/ColeccionCosmovision.json',
    (err) => {
      if (err) {
        console.log('Error Occurred:', err)
      }
    },
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
