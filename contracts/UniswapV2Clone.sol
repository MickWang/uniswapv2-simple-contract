// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract UniswapV2Clone {
    address public tokenA;
    address public tokenB;
    
    uint256 public reserveA;
    uint256 public reserveB;
    
    constructor(address _tokenA, address _tokenB) {
        tokenA = _tokenA;
        tokenB = _tokenB;
    }

    // Add liquidity function
    function addLiquidity(uint256 amountA, uint256 amountB) external {
        require(IERC20(tokenA).transferFrom(msg.sender, address(this), amountA), "Transfer failed");
        require(IERC20(tokenB).transferFrom(msg.sender, address(this), amountB), "Transfer failed");

        reserveA += amountA;
        reserveB += amountB;
    }

    // Remove liquidity function
    function removeLiquidity(uint256 amountA, uint256 amountB) external {
        require(reserveA >= amountA && reserveB >= amountB, "Not enough liquidity");
        
        reserveA -= amountA;
        reserveB -= amountB;

        require(IERC20(tokenA).transfer(msg.sender, amountA), "Transfer failed");
        require(IERC20(tokenB).transfer(msg.sender, amountB), "Transfer failed");
    }

    // Swap function
    function swap(uint256 amountIn, address inputToken) external {
        require(inputToken == tokenA || inputToken == tokenB, "Invalid token");

        uint256 amountOut;
        if(inputToken == tokenA) {
            amountOut = (amountIn * reserveB) / reserveA;
            require(IERC20(tokenA).transferFrom(msg.sender, address(this), amountIn), "Transfer failed");
            require(IERC20(tokenB).transfer(msg.sender, amountOut), "Transfer failed");

            reserveA += amountIn;
            reserveB -= amountOut;
        } else {
            amountOut = (amountIn * reserveA) / reserveB;
            require(IERC20(tokenB).transferFrom(msg.sender, address(this), amountIn), "Transfer failed");
            require(IERC20(tokenA).transfer(msg.sender, amountOut), "Transfer failed");

            reserveB += amountIn;
            reserveA -= amountOut;
        }
    }
}
