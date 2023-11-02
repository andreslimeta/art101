// lab.js - Learning about Functions
// Author: Andres Limeta
// Date: Nov 1, 2023 

//function that sorts user-inputed name
function getName(){
  
  let userName= prompt("Enter your name","John Smith");

  var nameArray = userName.split().sort();
  var nameString = nameArray.join();
  
  return nameString;

}
// stores the sorted name
var nameSorted = getName();

// puts id "output" onto variable nameOutput and prints out the sorted name 
var nameOutput = document.getElementById("output");
nameOutput.textContent = "Sorting things is fun. Here's your name sorted " + nameSorted;


