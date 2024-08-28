import React from "react";
import CustomerTotalPoints from "./CustomerTotalPoints";
import { getMonthlyPoints } from "../utils/getMontlyPoints";

/**
 * Component to display the reward points for a customer by month
 * @param {Object} props 
 * @param {Object} props.customer 
 */
const CustomerMonthlyPoints = ({ customer }) => {
    
    // Calculate the monthly points for the customer based on their transactions
    const monthlyPoints = getMonthlyPoints(customer.transactions);

    return (
        <div className="customer-card">
            <h2>{customer.name}</h2>
            <h3>ID: {customer.customerId}</h3>
            {Object.entries(monthlyPoints)
                .map(([month, points], index) => (
                    <p key={index}>{month} : {points}</p>
                ))}
            <CustomerTotalPoints monthlyPoints={monthlyPoints} />
        </div>
    )
}

export default CustomerMonthlyPoints;