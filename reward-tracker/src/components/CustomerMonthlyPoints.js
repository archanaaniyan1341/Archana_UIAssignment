import React from "react";
import { calculatePoints } from "../utils/rewardCalculator";

/**
 * Component to display the reward points for a customer by month
 * @param {Object} props 
 * @param {Object} props.customer 
 */
const CustomerMonthlyPoints = ({ customer }) => {
    const getMonthlyPoints = (transactions) => {
        const monthlyPoints = {};
        transactions.forEach(({ transactionDate, transactionAmount }) => {
            const month = new Date(transactionDate).toLocaleString('default', { month: 'long' });
            const points = calculatePoints(transactionAmount);
            if (monthlyPoints[month]) {
                monthlyPoints[month] += points;
            } else {
                monthlyPoints[month] = points;
            }
        });
        return monthlyPoints;
    }

    const monthlyPoints = getMonthlyPoints(customer.transactions);
    const totalPoints = Object.values(monthlyPoints).reduce((a, b) => a + b, 0);

    return (
        <div>
            <h2>{customer.name}</h2>
            <ul>
                {Object.entries(monthlyPoints).map(([month, points]) => (
                    <li key={month}>{month}:{points}points</li>
                ))}
            </ul>
            <p>Total Points: {totalPoints}</p>
        </div>
    )
}

export default CustomerMonthlyPoints;