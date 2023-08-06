const date = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = days[date.getDay()];
let hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds();

if (hour > 12) {
  hour = hour - 12 + ' PM';
}

let todayTime = hour + ' : ' + minute + ' : ' + second;
console.log('Today is :', day);
console.log('Current Time is :', todayTime);
