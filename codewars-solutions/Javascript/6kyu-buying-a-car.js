// Codewars: Buying a car
// 6 kyu: https://www.codewars.com/kata/554a44516729e4d80b000012

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  
  if (startPriceOld >= startPriceNew) {
    return [0, Math.round(startPriceOld - startPriceNew)];
  }

  let month = 0;
  let savings = 0;

  while (true) {
    month++;

    if (month % 2 === 0) {
      percentLossByMonth += 0.5;
    }

    startPriceOld *= (1 - percentLossByMonth / 100);
    startPriceNew *= (1 - percentLossByMonth / 100);
    savings += savingperMonth;

    if (startPriceOld + savings >= startPriceNew) {
      return [month, Math.round(startPriceOld + savings - startPriceNew)];
    }
  }
}