/** Problem:
 * Write a JavaScript function to extract a specified number of characters from a string.
 *
 * Test Data : console.log(extractString('Hello JavaScript!', 5));
 * Output: 'Hello'
 */

/** Solution:
 * Function Definition: The solution begins with the declaration of a JavaScript function called extractString. This function takes two parameters: str, which represents the input string, and number, which is the number of characters to extract from the beginning of the string.
 * Input Validation: Inside the function, an if statement checks whether the types of str and number are 'string' and 'number', respectively. Additionally, it checks whether the specified number is greater than or equal to 0. If any of these conditions are not met, the function returns the message 'Invalid input.'.
 * String Extraction: If the inputs are valid, the function uses the slice() method to extract the specified number of characters from the beginning of the input string str. The slice() method takes two arguments: the starting index (which is 0 for the beginning of the string) and the ending index (which is number).
 * Return: The extracted characters are returned as the output of the function.
 */

/**
 * Function to extract a specific number of characters from a string
 * @param {string} str - The input string.
 * @param {number} number - The number of characters to extract.
 * @returns {string} - The extracted characters are returned as the output of the function.
 */
function extractString(str, number) {
  if (typeof str !== 'string' || typeof number !== 'number' || number < 0) {
    return 'Invalid input.';
  }
  return str.slice(0, number);
}

console.log(extractString('Hello JavaScript!', 5));
