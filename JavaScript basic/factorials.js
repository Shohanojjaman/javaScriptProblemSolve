function getFactorial(number) {
  if (typeof number !== 'number') {
    return 'Please Provide me a number.';
  }
  if (number === 1) {
    return number;
  }
  return number * getFactorial(number - 1);
}
console.log(getFactorial(6));
