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
            var today = new Date();
            // const thresholdDate = today.setMonth(today.getMonth() - 3);
            // if(transactionDate > thresholdDate){
            const points = calculatePoints(transactionAmount);
            if (monthlyPoints[month]) {
                monthlyPoints[month] += points;
            } else {
                monthlyPoints[month] = points;
            }
            // }
        });
        return monthlyPoints;
    }

    const monthlyPoints = getMonthlyPoints(customer.transactions);
    const totalPoints = Object.values(monthlyPoints).reduce((a, b) => a + b, 0);

    return (
        <div className="customer-card">
            <h2>{customer.name}</h2>
            <h3>ID: {customer.customerId}</h3>
            {Object.entries(monthlyPoints)
                .map(([month, points], index) => (
                    <p key={index}>{month} : {points}</p>
                ))}
            <p><b>Total Points: {totalPoints}</b></p>
        </div>
    )
    }

export default CustomerMonthlyPoints;