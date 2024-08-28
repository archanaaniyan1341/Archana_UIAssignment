# Customer Reward Points Application

The React Application  calculates and display reward points for customers based on their purchase history over the last three months. It includes features such as interactive user interface that displays custoer details, monthly reward points and total reward points

## Overview

The application takes a list of customers and their transactions and calculates the reward points earned by each customer per month and in total.

## Features

- Display a list of customers and their transactions
- Calculate the reward points based on predefined threshold
- Display the reward points earned by each customer per month
- Display the total reward points earned by each customer
- Responsive design

## Installation

1. Clone the repository: `git clone https://github.com/archanaaniyan1341/UIAssignment`
``` Server setup
1. Navigate to the project directory: `cd server`
2. Start the server : ` node server.js`

``

``` Frontend Setup

1. Navigate to the project directory: `cd reward-tracker`
2. Install the dependencies: `npm install`
3. Start the application: `npm start`
``
## Project Structure

- `src/`: This directory contains all the source code for the application.
  - `components/`: This directory contains all the React components.
  - `config/`: This directory contains configuration files
  - `styles/`: This directory contains css files specific to components
  - `tests`: This directory contains unit tests
  - `utils/`: This directory contains utility functions, such as the reward points calculator.
- `public/`: This directory contains static files, such as the index.html file.
- `.env`: This file contains environment variables.

```php
.
├── public/
│  
├── src/
│   ├── components/
│   ├── config/
│   ├── services/
│   ├── styles/
│   ├── tests/
│   ├── utils/
|   ├── App.css
|   ├── App.js
|   ├── index.css
|   ├── index.js
├── .env
├── .gitignore
├── package.json
└── README.md

```

## Configuration

The application uses environment variables to configure certain aspects, such as the API URL for fetching transaction data. These variables are defined in the `.env` file.
Apart from env the application also provides config.json to configure the threshold and point values used for rewards calculation.

## Error Handling

The application has basic error handling in place. If an error occurs while fetching transaction data, the error will be logged to the console.

## Testing

Unit Tests: The application includes unit tests for critical components and business logic. The tests are written using Jest and React Testing Library

To run the tests, use the command `npm test`.

## Contributing

Contributions are welcome. Please submit a pull request or create an issue to discuss the changes you want to make.

## License

This project is licensed under the MIT License.