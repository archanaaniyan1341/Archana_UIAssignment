import config from "../config/config.json"
/**
 * Calculates reward points based on the transaction amount
 * @param {number} amount
 * @returns {number} The calculated reward points
 */
export const calculatePoints = (amount) => {
    // Destructure the reward thresholds and points from the config object
    const { standardRewardThreshold, bonusRewardThreshold, standardPoints, bonusPoints } = config;

    // Initialize the points variable
    let points = 0;

    // Calculate the reward points based on the transaction amount
    switch (true) {
        case (amount > bonusRewardThreshold):
            // Calculate points for transactions above the bonus reward threshold
            points += (amount - bonusRewardThreshold) * bonusPoints;
            points += (bonusRewardThreshold - standardRewardThreshold) * standardPoints;
            break;
        case (amount > standardRewardThreshold && amount < bonusRewardThreshold):
            // Calculate points for transactions between the standard and bonus reward thresholds
            points += (amount - standardRewardThreshold) * standardPoints;
            break;
        default:
            // No points for transactions below the standard reward threshold
            points = 0;
            break;
    }

    // Return the calculated reward points
    return points;
}