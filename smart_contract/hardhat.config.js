
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Co7QQJtlOqC_So0s-mQTtajRh2ZR7Rr4',
      accounts: ['974d2c3bad0748d038e98be77bc4337867741cc84c3178d1c8e3c5e077148181']
    },
  },
};