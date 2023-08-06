/*
Problem:
Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const date = new Date();
let dd = date.getDate(),
  mm = date.getMonth() + 1,
  yyyy = date.getFullYear();

dd = dd.toString().padStart(2, '0');
mm = mm.toString().padStart(2, '0');
console.log('Today is: ' + mm + '-' + dd + '-' + yyyy);
console.log('Today is: ' + mm + '/' + dd + '/' + yyyy);
console.log('Today is: ' + dd + '-' + mm + '-' + yyyy);
console.log('Today is: ' + dd + '/' + mm + '/' + yyyy);
