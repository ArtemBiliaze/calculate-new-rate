/**
 * 
 * @param {number} playerWinRate 
 * @param {number} playerLosRate 
 * @returns {number}
 */

const winRateCalc = (playerWinRate, playerLosRate) => {
    const diff = playerWinRate - playerLosRate;
  if (
    Number.isNaN(diff) ||
    playerWinRate < 0 ||
    playerLosRate < 0 ||
    typeof playerLosRate !== 'number'  || typeof playerWinRate !== "number"
  ) {
    return NaN;
  }
  if (playerWinRate === 0) return playerLosRate;
  if (playerLosRate === 0) return playerWinRate;
    if (diff >= 0 && diff <= 2) {
      playerWinRate += 2;
    } else if (diff > 2 &&diff < 20) {
      playerWinRate += 1;
    } else if (playerWinRate < playerLosRate) {
    playerWinRate = playerWinRate + (Math.abs(diff) + 5) / 3;
  } 
  return Number(playerWinRate.toFixed(1));
};
console.log(winRateCalc(10, 5));
console.log(winRateCalc(2, 1));
console.log(winRateCalc(30, 10));
console.log(winRateCalc(10, 30));
console.log(winRateCalc(0, 20));
console.log(winRateCalc(10, 0));
console.log(winRateCalc(10, ''));
console.log(winRateCalc(10, undefined));
console.log(winRateCalc(10, null));

