//https://eth-rinkeby.alchemyapi.io/v2/QKRQy-gDC0LxyWVJuuFyC174UV_wTSHl
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/QKRQy-gDC0LxyWVJuuFyC174UV_wTSHl',
      accounts: ['aed9d01544ddacf7848f656af25173e4914861914fac7e2b451e9dd9132938fd']
    }
  }
}