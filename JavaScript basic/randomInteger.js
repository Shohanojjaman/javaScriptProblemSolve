/*
 Problem:
 Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
 */

function randomInteger(inputNumber) {
  let random = Math.round(Math.random() * 10);
  if (random === inputNumber) {
    return 'Good Work';
  } else {
    return 'Not matched';
  }
}
console.log(randomInteger(4));
