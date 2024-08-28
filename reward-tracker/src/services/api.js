/**
 * Fetches transaction data from the local server.
 * @returns {Promise<Array>}
 */

const TRANSACTION_URL = process.env.REACT_APP_TRANSACTION_API_URL;

export const fetchTransactionData = async () => {
    try {
        const response = await fetch(TRANSACTION_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch transaction data')
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching transaction data:', error)
    }
}