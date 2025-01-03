import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";

describe("UniswapV2Clone", function () {
  let TokenA: Contract, TokenB: Contract, uniswap: Contract;
  let owner: any, addr1: any;
  let tokenA_address: string, tokenB_address: string, uniswap_address: string;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();

    // 部署 Mock ERC20 代币
    const MockERC20 = await ethers.getContractFactory("MockERC20");
    TokenA = await MockERC20.deploy("MockERC20", "MOCKA");
    tokenA_address = await TokenA.getAddress();

    const MockUSDC = await ethers.getContractFactory("MockUSDC");
    TokenB = await MockUSDC.deploy();
    tokenB_address = await TokenB.getAddress();

    // 部署 UniswapV2Clone 合约
    const UniswapV2Clone = await ethers.getContractFactory("UniswapV2Clone");
    uniswap = await UniswapV2Clone.deploy(tokenA_address, tokenB_address);
    uniswap_address = await uniswap.getAddress();

    // 给 addr1 分配一些 Token
    await TokenA.transfer(addr1.address, 1000);
    await TokenB.transfer(addr1.address, 1000);
  });

  it("should add liquidity correctly", async function () {
    await TokenA.connect(addr1).approve(uniswap_address, 500);
    await TokenB.connect(addr1).approve(uniswap_address, 500);

    await uniswap.connect(addr1).addLiquidity(500, 500);

    expect(await uniswap.reserveA()).to.equal(500);
    expect(await uniswap.reserveB()).to.equal(500);
  });

  it("should swap tokens correctly", async function () {
    await TokenA.connect(addr1).approve(uniswap_address, 1000);
    await TokenB.connect(addr1).approve(uniswap_address, 1000);
    await uniswap.connect(addr1).addLiquidity(500, 500);

    await uniswap.connect(addr1).swap(100, tokenA_address); // Swap 100 of token A

    expect(await TokenA.balanceOf(addr1.address)).to.equal(400);
    expect(await TokenB.balanceOf(addr1.address)).to.equal(600);
  });

  it("should remove liquidity correctly", async function () {
    await TokenA.connect(addr1).approve(uniswap_address, 500);
    await TokenB.connect(addr1).approve(uniswap_address, 500);
    await uniswap.connect(addr1).addLiquidity(500, 500);

    await uniswap.connect(addr1).removeLiquidity(250, 250);

    expect(await uniswap.reserveA()).to.equal(250);
    expect(await uniswap.reserveB()).to.equal(250);
  });
});
