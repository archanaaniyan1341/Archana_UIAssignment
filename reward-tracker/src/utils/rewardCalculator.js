import config from "../config/config.json"
/**
 * Calculates reward points based on the transaction amount
 * @param {number} amount
 * @returns {number} The calculated reward points
 */
export const calculatePoints = (amount) => {
    const {standardRewardThreshold,bonusRewardThreshold,standardPoints,bonusPoints} = config;
    let points = 0;
    switch (true) {
        case (amount > bonusRewardThreshold):
            points += (amount - bonusRewardThreshold) * bonusPoints;
            points += (bonusRewardThreshold - standardRewardThreshold)*standardPoints;
            break;
        case (amount > standardRewardThreshold && amount < bonusRewardThreshold):
            points += (amount - standardRewardThreshold)*standardPoints;
            break;
        default:
            points = 0;
            break;
    }
    return points;
}