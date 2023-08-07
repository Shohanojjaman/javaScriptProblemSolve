/*
Problem:
Write a JavaScript exercise to get the filename extension.
*/

function fileExtension(fileName) {
  if (typeof fileName !== 'string') {
    return 'Please Provide a valid file.';
  }
  let fileNameArray = fileName.split('.');
  let extension = fileNameArray.length - 1;
  return `.${fileNameArray[extension]}`;
}
console.log(fileExtension(230));
