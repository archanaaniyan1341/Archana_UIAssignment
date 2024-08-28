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

``` javascript
import { calculatePoints } from './rewardCalculator';

const transactionAmount = 120;
const points = calculatePoints(transactionAmount);

console.log(points); // Outputs the calculated reward points

```

# getMonthlyPoints Utility

This utility is used to calculate the monthly reward points for a customer.

## Functions

The utility consists of one main function:

### getMonthlyPoints

This function calculates the monthly reward points for a customer based on their transactions.

#### Parameters

- `transactions`: An array of objects representing the customer's transactions. Each transaction should have the following properties:
  - `transactionDate`: A string or Date object representing the date of the transaction.
  - `transactionAmount`: A number representing the amount of the transaction.

#### Returns

- An object where each key is a month and the corresponding value is the number of points earned in that month.

### Usage

Here's an example of how to use the `getMonthlyPoints` function:

```javascript

import { getMonthlyPoints } from './getMonthlyPoints';

const transactions = [
    { transactionDate: '2022-01-01', transactionAmount: 120 },
    { transactionDate: '2022-02-01', transactionAmount: 130 },
    { transactionDate: '2022-03-01', transactionAmount: 140 }
];

const monthlyPoints = getMonthlyPoints(transactions);

console.log(monthlyPoints); // Outputs the monthly points

``