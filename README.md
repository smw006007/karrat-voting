# karrat-voting

Strategy that uses `getVotes()` to determine effective voting power for KARRAT token holders.

## Description

This strategy uses ERC20Votes' `getVotes()` to reflect each wallet's on-chain voting power. It automatically includes self-held balances and delegated tokens, avoiding any double counting.

## Author

your-github-handle

## Example

- User holds 10,000 KARRAT tokens → `getVotes` = 10,000 if not delegated.
- User delegates their tokens → `getVotes` = 0, and delegate receives their power.
- Delegate wallet → `getVotes` = own balance + all delegated votes.
