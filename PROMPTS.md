# Frontend
Create a simplified Uniswap V2 frontend application with the following specifications:

Technical Requirements:
1. Wallet Integration:
   - Implement MetaMask connection
   - Implement WalletConnect protocol
   - Display wallet address and connection status
   - Add disconnect functionality

2. Token Swap Interface:
   - Create a swap page between MockERC20 and MockUSDC tokens
   - Include token selection dropdowns
   - Display token balances
   - Show estimated output amount
   - Store transaction details in localStorage with:
     * Transaction hash
     * Input/output token amounts
     * Timestamp
     * Wallet address

3. Liquidity Pool Interface:
   - Create an "Add Liquidity" page for MockERC20/MockUSDC pair
   - Display current pool statistics
   - Show user's token balances
   - Include input fields for both tokens
   - Display estimated LP tokens to be received
   - Store liquidity addition records in localStorage with:
     * Transaction hash
     * Token amounts
     * Timestamp
     * LP tokens received
     * Wallet address

4. Transaction History Page:
   - Create a unified transaction history view
   - Display both swap and liquidity addition transactions
   - Implement filtering by transaction type
   - Show transaction details:
     * Transaction type (Swap/Liquidity)
     * Token amounts
     * Transaction hash
     * Timestamp
   - Sort transactions by date (newest first)
   - Add pagination or infinite scroll for large lists

UI/UX Requirements:
- Implement responsive design
- Include loading states for transactions
- Display error messages clearly
- Add confirmation modals for transactions
- Implement token price updates in real-time

Data Storage Format:
- Use consistent localStorage structure for both transaction types
- Implement data validation before storage
- Handle storage limits appropriately