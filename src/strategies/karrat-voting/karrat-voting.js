import { multicall } from '@snapshot-labs/snapshot.js/src/utils';
import { BigNumber } from 'ethers';

export const author = 'your-github-handle';
export const version = '0.1.0';

const abi = [
  'function getVotes(address account) view returns (uint256)'
];

export async function strategy(
  space,
  network,
  provider,
  addresses,
  options,
  snapshot
) {
  const response = await multicall(
    network,
    provider,
    abi,
    addresses.map((address) => [
      options.address,
      'getVotes',
      [address]
    ]),
    { blockTag: snapshot }
  );

  const result = {};
  addresses.forEach((address, i) => {
    const votes = BigNumber.from(response[i]);
    result[address] = votes.toString();
  });

  return result;
}