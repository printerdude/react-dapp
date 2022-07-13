// require("@nomicfoundation/hardhat-toolbox");
// mirgrate to @nomicfoundation/hardhat-chai-matchers using https://hardhat.org/migrate-from-waffle
require('@nomicfoundation/hardhat-chai-matchers');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.9',
	paths: {
		artifacts: './src/artifacts',
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
	},
};
