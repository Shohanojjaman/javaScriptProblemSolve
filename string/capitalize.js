/** Problem
 * Write a JavaScript function to capitalize the first letter of a string
 *
 * Test Data: console.log(capitalize('js string exercises'));
 * Output: Js string exercises
 */

/** Solution
 * `Function Definition:` The solution starts with the declaration of a JavaScript function named `capitalize`. This function takes a single parameter `str`, which represents the input string to be capitalized.
 * `Input Validation:` Inside the function, an if statement checks whether the type of `str` is 'string'. If the input is not a string, the function returns the message 'Please provide me a string.'.
 * `Extracting First Letter:` The first letter of the input string is obtained using the `charAt(0)` method and stored in the variable firstLetter.
 * `Converting First Letter to Uppercase:` The `toUpperCase()` method is applied to the `firstLetter` to convert it to uppercase. The result is stored in the variable `firstLetterUpperCase`.
 * `Customizing Text:` The `replace()` method is used to replace the first character of the input string with the uppercase first letter. The result is stored in the variable `customizeText`.
 * 
`Return Value:` The modified string with the first letter capitalized is the return value of the function.
 */

/**
 * This function for capitalize the first letter of a string.
 * @param {string} str - The input string to be capitalized.
 * @returns {String} The modified string with the first letter capitalized.
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    return 'Please provide me a string.';
  }
  let firstLetter = str.charAt(0);
  let firstLetterUpperCase = firstLetter.toUpperCase();
  let customizeText = str.replace(str[0], firstLetterUpperCase);
  return customizeText;
}

console.log(capitalize('js string exercises'));
