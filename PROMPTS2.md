## 第一次prompt，让ChatGPT 生产合约代码
```
实现一个简易版的 Uniswap V2 合约，要求包含以下功能：

Swap：实现 swap 函数，允许用户交换两种 ERC-20 Token（例如 MockERC20 和 MockUSDC）之间的流动性。
Add Liquidity：实现 addLiquidity 函数，允许用户将两种 Token 添加到交易池中。
Remove Liquidity：实现 removeLiquidity 函数，允许用户从交易池中移除流动性。
使用 Hardhat 框架实现合约，提供测试用例，并能够在 Ethereum Sepolia 测试链上部署和运行。测试中使用 MockERC20 和 MockUSDC 作为测试用的 ERC-20 代币。

测试用例需包含以下内容：

调用 swap 函数。
调用 addLiquidity 函数。
调用 removeLiquidity 函数。
测试用例需要验证：

每次交易、添加和移除流动性后，用户的余额变化。
流动池中的余额变化。
```

ChatGPT 给出了合约代码，测试代码和部署代码，但是是js版本，我希望是ts版本，所以让ChatGPT 帮忙改成ts版本。

## 修改为ts版本
```
上面的代码中js 替换成typsscript 实现
```

ChatGPT 给出了ts版本的代码，但实际运行有一些报错。继续让GPT辅助解决了。

## 部署合约
部署遇到错误，需要sepolia 链infura 的api key。 注册后填入。部署成功。

