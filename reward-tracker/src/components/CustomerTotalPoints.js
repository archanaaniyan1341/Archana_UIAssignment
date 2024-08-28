import React from 'react';

const CustomerTotalPoints = ({ monthlyPoints }) => {
    const totalPoints = Object.values(monthlyPoints).reduce((a, b) => a + b, 0);

    return (
        <p><b>Total Points: {totalPoints}</b></p>
    );
}

export default CustomerTotalPoints;