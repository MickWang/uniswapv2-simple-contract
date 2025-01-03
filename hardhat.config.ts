import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
// import "@nomiclabs/hardhat-waffle";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from "dotenv";

dotenv.config();
console.log(process.env.PRIVATE_KEY);
const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
};

export default config;
