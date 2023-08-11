/** Problem
 * Write a JavaScript function that hides email addresses to prevent unauthorized access.
 *
 * Test Data: console.log(protectEmail('extrauser@gmail.com'));
 * Output: extra...@gmail.com
 */

/** Solution
 * `Function Definition:` The solution begins with the declaration of a JavaScript function named `protectEmail`. This function takes a single parameter `userEmail`, representing the email address that needs to be protected.
 * `Input Validation:` Inside the function, an if statement checks whether the type of `userEmail` is 'string'. If the input is not a 'string', the function returns the message 'Provide me a string.'.
 * `String Splitting:` The input email address is split into an array called `slitted` using the `split('@')` method. This array is expected to contain the `username` as the first element and the domain as the second element.
 * `Username and Domain Extraction:` The `username` and `domain` parts are extracted from the slitted array and stored in the variables `emailUserName` and `emailHostAddress`, respectively.
 * `Username Shortening:` The length of the visible portion of the `username` is calculated by dividing the length of `emailUserName` by 2 and then rounding it. This will result in half of the characters being visible.
 * `Modified Email Formation:` The function constructs the modified email address by using the `slice()` method on `emailUserName`. It takes the first half characters, then adds '...@', and finally appends `emailHostAddress`.
 */

/**
 * This function for hide email addresses to protect from unauthorized user.
 * @param {string} userEmail - The email address that needs to be protected.
 * @returns {string} - constructs and returns the modified email address.
 */
function protectEmail(userEmail) {
  if (typeof userEmail !== 'string' || !userEmail.includes('@')) {
    return 'Invalid input. Enter a email';
  }
  let slitted = userEmail.split('@');
  let emailUserName = slitted[0];
  let emailHostAddress = slitted[1];
  let half = Math.round(emailUserName.length / 2);
  return emailUserName.slice(0, half) + '...@' + emailHostAddress;
}
console.log(protectEmail('shohanojjamanemon@gmail.com'));
