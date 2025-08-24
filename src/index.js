/**
 * 
 * @param {number} playerWinRate 
 * @param {number} playerLosRate 
 * @returns {number}
 */

const winRateCalc = (playerWinRate, playerLosRate) => {
  let baseRate = playerWinRate;
  let newWinrate = playerWinRate;
  if (
    Number.isNaN(playerWinRate - playerLosRate) ||
    playerWinRate < 0 ||
    playerLosRate < 0 || typeof (playerLosRate + playerWinRate) !== 'number' 
  ) {
    return "Enter valid data, pleace!";
  } 
    if (playerWinRate === 0)  return playerLosRate;
    if (playerLosRate === 0)  return playerWinRate;
    if (playerWinRate >= playerLosRate) {
      if (
        playerWinRate - playerLosRate >= 0 &&
        playerWinRate - playerLosRate <= 2
      ) {
        newWinrate += 2;
      }
     else  if ( playerWinRate - playerLosRate > 2 
        && playerWinRate - playerLosRate < 20) {
        newWinrate += 1;
      }
    } else  {
      newWinrate = baseRate + (playerLosRate - baseRate + 5) / 3;
    }
  return parseFloat(newWinrate.toFixed(1));
};
