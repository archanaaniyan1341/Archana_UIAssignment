# Header Component
This is a React component that displays the header for the application.

Usage
Here's an example of how to use the Header component:

```javascript

import Header from './Header';

<Header />

```
# LoadingSpinner
This is a React component that is to be rendered in case of async api calls while the data is being fetched  

Usage
Here's an example of how to use the LoadingSpinner component:

```javascript

import LoadingSpinner from './LoadingSpinner';

<LoadingSpinner />

```

# CustomerPoints Component

The customer points component fetches the customer information and transactions by invoking apis and pass the data as props to Customer Monthly Points component


# CustomerMonthlyPoints Component

This is a React component that displays the reward points for a customer by month.

## Props

The component takes the following props:

- `customer`: An object representing a customer. It should have the following properties:
  - `customerId`: A string representing the customer's ID.
  - `name`: A string representing the customer's name.
  - `transactions`: An array of objects representing the customer's transactions. Each transaction should have the following properties:
    - `transactionDate`: A string or Date object representing the date of the transaction.
    - `transactionAmount`: A number representing the amount of the transaction.

## Usage

Here's an example of how to use the `CustomerMonthlyPoints` component:

```javascript
import CustomerMonthlyPoints from './CustomerMonthlyPoints';

const customer = {
    customerId: '123',
    name: 'John Doe',
    transactions: [
        { transactionDate: '2022-01-01', transactionAmount: 120 },
        { transactionDate: '2022-02-01', transactionAmount: 130 },
        { transactionDate: '2022-03-01', transactionAmount: 140 }
    ]
};

<CustomerMonthlyPoints customer={customer} />

```

# CustomerTotalPoints Component

This is a React component that displays the total reward points for a customer.

## Props

The component takes the following props:

- `monthlyPoints`: An object where each key is a month and the corresponding value is the number of points earned in that month.

## Usage

Here's an example of how to use the `CustomerTotalPoints` component:

```javascript
import CustomerTotalPoints from './CustomerTotalPoints';

const monthlyPoints = {
    'January': 120,
    'February': 130,
    'March': 140
};

<CustomerTotalPoints monthlyPoints={monthlyPoints} />