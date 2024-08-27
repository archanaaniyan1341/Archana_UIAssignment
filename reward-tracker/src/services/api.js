/**
 * Fetches transaction data from the local server.
 * @returns {Promise<Array>}
 */

export const fetchTransactionData = async () => {
    try {
        const response = await fetch("http://localhost:3000/transactions");
        if (!response.ok) {
            throw new Error('Failed to fetch transaction data')
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching transaction data:', error)
    }
}