/**
 * Formats date for display
 * @param {number} stamp
 * @return {Date}
 */
export const formatTime = (stamp) => new Date(stamp * 1000).toDateString();
