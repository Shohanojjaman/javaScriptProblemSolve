/** Problem:
 *  Write a JavaScript function to split a string and convert it into an array of words.
 *
 * Test Data:
 * console.log(arrayString('Hello World! Hello JavaScript'));
 * Output: [ "Hello", "World!", "Hello", "JavaScript" ]
 */

/** Solution:
 * `Function Definition:` TThe solution starts with the declaration of a JavaScript function named 'getArrayFromString'. This function takes a single parameter 'str', which represents the input string that will be processed.
 * `Input Validation:` Inside the function, there's an if statement that checks the data type of the input 'str' using the 'typeof' operator. If the data type is not equal to 'string', it means the input is not a string. In this case, the function immediately returns a message 'Please provide me a string'.
 * `String Splitting:` If the input is indeed a string, the function proceeds to the next step. It uses the split() method to break the input string into an array of substrings. The space character ' ' is used as the delimiter to split the string.
 * `Return:` The resulting array of substrings (words) is returned by the function
 */

/**
 * Function to split a string and convert it into an array of words.
 * @param {string} str - User Inputted a String.
 * @returns {array}
 */
function getArrayFromString(str) {
  if (typeof str !== 'string') {
    return 'Please provide me a string';
  }
  return str.split(' ');
}
console.log(getArrayFromString('Hello World! Hello JavaScript'));
getArrayFromString();
