/** Problem:
 *  Write a JavaScript function to convert a string into abbreviated form.
 *
 * Test Data: console.log(abbrev_name("Robin Singh"));
 * Output: "Robin S."
 */

/** Solution
 * `Function Definition:` The solution begins with the declaration of a JavaScript function named `stringAbbreviation`. This function takes a single parameter `str`, representing the input string that will be processed.
 * `Input Validation:` Inside the function, an if statement checks whether the type of `str` is 'string'. If the input is not a string, the function returns the message 'Please provide me a string'.
 * `String Splitting:` The input string is trimmed and then split into an array called `splitName` using the space character ' ' as the delimiter. This array is expected to contain the first name as the first element and the last name (if present) as the second element.
 * `Abbreviation Formation:` Another if statement checks if the `splitName` array has more than one element (i.e., both first and last name are assumed to be present). If this condition is met, the function constructs the abbreviation by combining the first name, a space, the first letter of the last name (obtained using `slice(0, 1)`), and a period '.'
 * `Handling Single Names:` If the `splitName` array has only one element (i.e., only the first name is present), the function returns the first name as it is.
 */

/**
 * This function convert a string in abbreviated form
 * @param {string} str - The input string that will be processed.
 * @returns {string}
 */
function stringAbbreviation(str) {
  if (typeof str !== 'string') {
    return 'Please provide me a string';
  }
  let splitName = str.trim().split(' ');
  if (splitName.length > 1) {
    return splitName[0] + ' ' + splitName[1].slice(0, 1) + '.';
  } else {
    return splitName.toString();
  }
}

console.log(stringAbbreviation('Shohanojjaman Emon'));
