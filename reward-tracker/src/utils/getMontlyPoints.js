import { calculatePoints } from "./rewardCalculator";
import config from "../config/config.json";
/**
     * Calculates the monthly points earned based on the given transactions.
     *
     * @param {Array} transactions - The array of transactions.
     * @returns {Object} - An object containing the monthly points earned.
     */
export const getMonthlyPoints = (transactions) => {
    // Initialize an empty object to store the monthly points
    const monthlyPoints = {};
    const {monthsLimit} = config;
    // Calculate the date three months ago
    const cutoffMonth = new Date();
    cutoffMonth.setMonth(cutoffMonth.getMonth() - monthsLimit);

    // Iterate through each transaction
    transactions.forEach(({ transactionDate, transactionAmount }) => {
        const date = new Date(transactionDate);

        // Check if the transaction date is within the last three months
        if (date >= cutoffMonth) {
            // Get the month name
            const month = date.toLocaleString('default', { month: 'long' });

            // Calculate the points for the transaction
            const points = calculatePoints(transactionAmount);

            // Add the points to the corresponding month in the monthlyPoints object
            if (monthlyPoints[month]) {
                monthlyPoints[month] += points;
            } else {
                monthlyPoints[month] = points;
            }
        }
    });

    console.log(transactions, monthlyPoints);
    return monthlyPoints;
}
