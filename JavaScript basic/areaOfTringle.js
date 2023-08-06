/*
Problem:
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
*/

function areaOfTriangle(a, b, c) {
  let halfPerimeter = (a + b + c) / 2;
  let area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
  return area.toFixed(4);
}
console.log(areaOfTriangle(5, 6, 7));
