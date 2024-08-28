import React from "react";
import { render, screen, waitFor } from '@testing-library/react'
import CustomerPoints from "../components/CustomerPoints";
import { fetchTransactionData } from "../services/api";

jest.mock('../services/api');

test('renders loading spinner initially', () => {
    fetchTransactionData.mockResolvedValue([]);
    render(<CustomerPoints />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});

test('renders customer data correctly', async () => {
    fetchTransactionData.mockResolvedValue([
        {
            customerId: 1,
            name: "Aswin",
            transactions: [{ transactionDate: '2024-01-15', transactionAmount: 120 }]
        }
    ])
    render(<CustomerPoints />);
    await waitFor(() => expect(screen.getByText(/Aswin/i)).toBeInTheDocument());
    let monthlyPoints = screen.getByText(/January : 90/i)
    expect(monthlyPoints).toBeInTheDocument();
    let idElement = screen.getByText(/ID: 1/i);
    expect(idElement).toBeInTheDocument();
});

test('renders error message when fetching data fails', async () => {
    fetchTransactionData.mockRejectedValue(new Error('Failed to fetch'));
    render(<CustomerPoints />);
    await waitFor(() => expect(screen.getByText(/Failed to load data/i)).toBeInTheDocument());
});