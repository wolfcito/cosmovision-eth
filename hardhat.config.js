require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: process.env.NODE_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
}
