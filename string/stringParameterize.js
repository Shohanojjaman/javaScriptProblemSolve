/** Problem
 * Write a JavaScript function to parameterize a string.
 *
 * Test Data: console.log(stringParameterize('Hello World hello JavaScript'));
 * OutPut: Hello-World-hello-JavaScript
 */

/** Solution
 * `Function Definition:` The solution starts with the declaration of a JavaScript function named `stringParameterize`. This function takes a single parameter `str`, which represents the input string to be parameterized.
 * `Input Validation:` Inside the function, an if statement checks whether the type of `str` is 'string'. If the input is not a string, the function returns the message 'Provide me a string.'.
 * `String Splitting:` The input string is split into an array called `splitted` using the space character `' '` as the delimiter. This array is expected to contain separate words.
 * `Array Joining`: The `join('-')` method is applied to the `splitted` array to concatenate its elements using hyphens as the separator. This effectively combines the words and replaces spaces with hyphens.
 * `Lowercasing:` The resulting hyphen-separated string is then converted to lowercase using the `toLowerCase()` method. This ensures that the parameterized string is all in lowercase.
 * `Return Value:` The fully parameterized and lowercase string is the return value of the function.
 */

/**
 * This function for parameterize a string.
 * @param {string} str - the input string to be parameterized.
 * @returns {string} The fully parameterized and lowercase string.
 */
function stringParameterize(str) {
  if (typeof str !== 'string') {
    return 'Provide me a string.';
  }

  let splitted = str.split(' ');
  return splitted.join('-').toLowerCase();
}
console.log(stringParameterize('Hello World hello JavaScript'));
