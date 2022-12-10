
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/RhRCo7r4qCtlOQTtQQJmja0s-_2ZR7So',
      accounts: ['974d38e98be71cc84c7433d2c30748d0ba4818143178677c8e78d3c5e0771bc1']
    },
  },
};