import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // 部署 MockERC20 和 MockUSDC
  const MockERC20 = await ethers.getContractFactory("MockERC20");
  const tokenA = await MockERC20.deploy("MockERC20", "MOCKA");
  const tokenA_address = await tokenA.getAddress();

  const MockUSDC = await ethers.getContractFactory("MockUSDC");
  const tokenB = await MockUSDC.deploy();
  const tokenB_address = await tokenB.getAddress();

  // 部署 UniswapV2Clone 合约
  const UniswapV2Clone = await ethers.getContractFactory("UniswapV2Clone");
  const uniswap = await UniswapV2Clone.deploy(tokenA_address, tokenB_address);
  const uniswap_address = await uniswap.getAddress();

  console.log("UniswapV2Clone contract deployed to:", uniswap_address);
  console.log("TokenA contract deployed to:", tokenA_address);
  console.log("TokenB contract deployed to:", tokenB_address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
