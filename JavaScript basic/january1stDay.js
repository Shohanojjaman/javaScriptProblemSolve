/*
 Problem:
 Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
 */

for (let i = 2014; i <= 2050; i++) {
  const date = new Date(i.toString());
  let day = date.getDay();
  if (day === 0) {
    console.log('1st January is being a Sunday  ' + date.getFullYear());
  }
}
