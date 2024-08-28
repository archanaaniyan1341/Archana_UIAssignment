import React from 'react';

/**
 *  This component displays the total points for a customer
 */
const CustomerTotalPoints = ({ monthlyPoints }) => {
    // Calculate the total points by summing up the values in the monthlyPoints object
    const totalPoints = Object.values(monthlyPoints).reduce((a, b) => a + b, 0);

    return (
        <p><b>Total Points: {totalPoints}</b></p>
    );
}

export default CustomerTotalPoints;