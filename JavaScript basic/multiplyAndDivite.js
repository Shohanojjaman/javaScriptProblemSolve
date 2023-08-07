function calculate(a, b, cb) {
  return cb(a, b);
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
console.log(`The result is: ${calculate(12, 10, multiplication)}`);
console.log(`The result is: ${calculate(12, 10, division)}`);
