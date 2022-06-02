require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/6hGoIubfQzfAIn8_z3bGuOiGfYoJ55mn",
      accounts: [
        "9eddd8a8e52ddb9eaf67dfb16df085d0037e8ddcf3831ddffb36bd745c022c04",
      ],
    },
  },
};


