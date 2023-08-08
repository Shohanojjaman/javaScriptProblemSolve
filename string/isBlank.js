/** Problem:
 * Write a JavaScript function to check whether a string is blank or not.

 * Test Data:
 * console.log(isBlank(''));  Output: True
 * console.log(isBlank('Hello World!'));  Output: False

 */

/** Solution
 * Function Definition: The solution begins with the declaration of a JavaScript arrow function named isBlank. This function takes a single parameter str, which represents the input string to be checked for blankness.
 * Whitespace Trimming: Inside the function, the trim() method is applied to the input string str. The trim() method removes any leading and trailing whitespace characters (such as spaces, tabs, and line breaks) from the string. This step is crucial to identify whether the string is entirely composed of whitespace.
 * Comparison: The length of the trimmed string is then compared to 0 using the equality operator (===). The length property of a string indicates the number of characters in the string. If the length is 0, it means the string is empty or consists solely of whitespace characters.
 *Return Value: The result of the comparison, which will be either true or false, is the return value of the arrow function isBlank.
 */

/**
 *
 * @param {string} str - User Input a String.
 * @returns {boolean} - The result of the comparison, which will be either true or false
 */
const isBlank = (str) => str.trim().length === 0;
console.log(isBlank('Hello World!'));
