# rewardCalculator Utility

This utility is used to calculate the reward points for a transaction.

## Functions

The utility consists of one main function:

### calculatePoints

This function calculates the reward points for a transaction based on the transaction amount.

#### Parameters

- `amount`: A number representing the transaction amount.

#### Returns

- A number representing the calculated reward points.

## Usage

Here's an example of how to use the `calculatePoints` function:

```javascript
import { calculatePoints } from './rewardCalculator';

const transactionAmount = 120;
const points = calculatePoints(transactionAmount);

console.log(points); // Outputs the calculated reward points