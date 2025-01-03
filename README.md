# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

## Deployment

```
npx hardhat run scripts/deploy.ts --network sepolia
```

```
Deploying contracts with the account: 0x4f460A65Ee62F76CB5C91595E3F652340B3f02A0

UniswapV2Clone contract deployed to: 0xD373af3f19C6B1a6aE6676c83f9cC19c50b97d78
TokenA contract deployed to: 0x822B2A2e3C526fFF1bA650e4E1Ad9d88A5ACfdd4
TokenB contract deployed to: 0xDCD5D0793bd594321c691991575F48A09DE00eab

```