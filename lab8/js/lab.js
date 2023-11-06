// lab.js - Learning about anon functions and callbacks
// Author: Andres Limeta
// Date: Nov 5, 2023 

// initialize array
var numArray = [1, 74, 25, 99, 30];
// prints out initial array 
console.log("initial array: " + numArray);

function calculation(x) {
  var results = Math.sqrt (x);
  return results;
} 

// debug check if function works
/*
console.log(calculation(4));
console.log(calculation(25));
*/

// prints out sqrt of array 
console.log( "Square root of the array is: " + numArray.map(calculation));


// prints out eaxh array element + 12
console.log("Adds 12 to each element in the array: " + numArray.map(function(x){ return x+12;}));



// puts id "output" onto variable arrayOutput and prints out console results 
var arrayOutput = document.getElementById("output");
arrayOutput.innerHTML = "initial array:  " + numArray;


// puts id "output2" onto variable arrayOutput2 and prints out console results 
var arrayOutput2 = document.getElementById("output2");
arrayOutput2.innerHTML = "Square root of the array is: " + numArray.map(calculation); 


// puts id "output3" onto variable arrayOutput3 and prints out console results 
var arrayOutput3 = document.getElementById("output3");
arrayOutput3.innerHTML = "Adds 12 to each element in the array:  " + numArray.map(function(x){ return x+12;}); 

