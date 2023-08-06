/*
Problem:
Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

const date = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = days[date.getDay()];
let hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds();

var prepend = hour >= 12 ? ' PM ' : ' AM ';
hour = hour >= 12 ? hour - 12 : hour;

if (hour === Number('00')) {
  hour = 12 + prepend;
} else if (hour >= 12) {
  hour - 12 + prepend;
} else {
  hour + prepend;
}
let todayTime = hour + ' : ' + minute + ' : ' + second;
console.log('Today is :', day);
console.log('Current Time is :', todayTime);
