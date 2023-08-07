/*
Problem:
Write a JavaScript program to calculate the days left before Christmas.
*/

const today = new Date();

function nextChristmas(date) {
  let christmasYear = date.getFullYear();

  if (date.getMonth() == 11 && date.getDate() >= 25) {
    christmasYear++;
  }
  let christmasDate = new Date(christmasYear, 11, 25);
  let daysMilliseconds = 24 * 60 * 60 * 1000;

  let nextChristmas = Math.ceil((christmasDate.getTime() - date.getTime()) / daysMilliseconds);
  return nextChristmas;
}

console.log(`There are  ${nextChristmas(today)}  days remaining until Christmas.`);
