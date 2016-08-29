/*

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

// Your code here.
function range(start, end, step) {
  var tempArray = [];
  
  if (step == undefined) {
    step = 1;
  }
  
  for(var i = 0; i <= Math.ceil(Math.abs(start-end)/Math.abs(step)); i++) {
    tempArray[i] = start + (step * i);
  }
  
  return tempArray;
  
};

function sum(numArray) {
  var arraySum = 0;
  
  for(var i = 0; i < numArray.length; i++) {
    arraySum += numArray[i];
  }
  
  return arraySum;
};