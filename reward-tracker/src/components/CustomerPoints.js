import React, { useEffect, useState, memo } from 'react';
import { fetchTransactionData } from '../services/api';
import { calculatePoints } from '../utils/rewardCalculator';
import CustomerMonthlyPoints from './CustomerMonthlyPoints';
import LoadingSpinner from './LoadingSpinner';

/**
 * Displays reward point for each customer
 */

const CustomerPoints = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTransactionData = async () => {
            try {
                const data = await fetchTransactionData();
                setCustomers(data);
            } catch (error) {
                setError('Failed to load data')
            } finally {
                setLoading(false);
            }
        }
        getTransactionData();
    }, [])

    if (loading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <h1>Customer Reward Points</h1>
            {customers.map((customer) => (
                <CustomerMonthlyPoints key={customer.customerId} customer={customer} />
            ))}
        </div>
    )
};

export default memo(CustomerPoints);