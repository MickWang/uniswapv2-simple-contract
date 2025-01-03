import { ethers } from "hardhat";
import { config } from "dotenv";

// 加载 .env 配置文件
config();

async function main() {
  // 获取部署合约的 signer（一般是账户）
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);


  const mockERC20Address = "0x822B2A2e3C526fFF1bA650e4E1Ad9d88A5ACfdd4";
  const mockUSDCAddress = "0xDCD5D0793bd594321c691991575F48A09DE00eab";

  // 获取现有的 MockERC20 和 MockUSDC 合约
  const MockERC20 = await ethers.getContractAt("MockERC20", mockERC20Address);
  const MockUSDC = await ethers.getContractAt("MockUSDC", mockUSDCAddress);

  // 指定目标地址和 mint 数量
  const recipientAddress = "0x4f460A65Ee62F76CB5C91595E3F652340B3f02A0";  // 替换成实际目标地址
  const amountMockERC20 = ethers.utils.parseUnits("1000", 18);  // mint 1000 MockERC20
  const amountMockUSDC = ethers.utils.parseUnits("1000", 6);   // mint 1000 MockUSDC (6 decimals for USDC)

  // Mint MockERC20 代币
  await mintToken(MockERC20, recipientAddress, amountMockERC20);

  // Mint MockUSDC 代币
  await mintToken(MockUSDC, recipientAddress, amountMockUSDC);
}

// mint 代币的通用函数
async function mintToken(tokenContract: any, recipient: string, amount: any) {
  console.log(`Minting ${amount} tokens to ${recipient}...`);
  const tx = await tokenContract.mint(recipient, amount);
  await tx.wait();
  console.log(`${amount} tokens minted to ${recipient}`);
}

// 执行主函数
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
