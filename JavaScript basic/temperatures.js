/*
Problem:
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C 
*/

function celsiusToFahrenheit(c) {
  let result = (c * 9) / 5 + 32;
  return result;
}
function fahrenheitToCelsius(f) {
  let result = (5 / 9) * (f - 32);
  return result;
}

console.log(`60°C is ${celsiusToFahrenheit(60)}°F`);
console.log(`45°F is ${fahrenheitToCelsius(45)}°C`);
