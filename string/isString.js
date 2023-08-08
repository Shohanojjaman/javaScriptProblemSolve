/** Problem:
 
 * Write a JavaScript function to check whether an 'input' is a string or not.

 * Test Data:
 * console.log(isString('Hello World!'));
 * console.log(isString(404));

 */

/** Solution Steps:
 * I have created an arrow function which validate the user input.
 * The function takes an 'srt' parameter.
 * It uses the 'typeof' operator to determine the data type of the 'srt'.
 * If the data type is 'string', the function returns true, indicating that the input is a string.
 * Otherwise, the function returns false, indicating that the input is not a string.
 */

/**
 * This function validate user inputted string and return true or false.
 * @param {string} str - User Input a String.
 * @returns {boolean} Validate the user input string true or false.
 */
const isString = (str) => typeof str === 'string';

console.log(isString('Hello World'));
