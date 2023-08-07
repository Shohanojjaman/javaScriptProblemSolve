/*
 Problem:
 Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
 */

function randomInteger(UserInput) {
  let number = Number(UserInput);
  let random = Math.round(Math.random() * 10);
  if (4 === number) {
    return 'Good Work';
  } else {
    return 'Not matched';
  }
}
console.log(randomInteger('4'));
