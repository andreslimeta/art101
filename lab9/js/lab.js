// lab.js - Learning about anon functions and callbacks

//Requirements: jQuery must be loaded for this script to work

// Author: Andres Limeta
// Date: Nov 7, 2023 

//Buttons for challenge, problem, and results
$("#challenge").append("<br><button id='challenge-button'>change style</button>");
$("#problems").append("<br><button id='problem-button'>change style</button>");
$("#reflection").append("<br><button id='reflection-button'>change syle</button>");
$("#results").append("<br><button id='results-button'>change syle</button>");


// add click listener to challenge button
$("#challenge-button").click(function(){
    // adds or subtracts the "special" class to challenge section 
    $("#challenge").toggleClass("special");
});

// add click listener to problem button
$("#problem-button").click(function(){
    // adds or subtracts the "special" class to problem section 
    $("#problems").toggleClass("special");
});

// add click listener to reflection button
$("#reflection-button").click(function(){
    // adds or subtracts the "special" class to reflection section 
    $("#reflection").toggleClass("special");
});

// add click listener to results button
$("#results-button").click(function(){
    // adds or subtracts the "special" class to results section 
    $("#results").toggleClass("special");
});
