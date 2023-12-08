
/*
   lab.js - This AJAX to get info from an external source .

   Requirements: jQuery must be loaded for this script to work.

   Author: Andres Limeta
   Date: December 5, 2023
*/

const endpoint = "https://xkcd.com/info.0.json";


// Using the core $.ajax() method
$.ajax({
    url: endpoint,
   // Whether this is a POST or GET request
   type: "GET",
   // The type of data we expect back
   dataType : "json",
   // What do we do when the api call is successful
   //   all the action goes in here
   success: function(comicObj) {
       // do stuff
       console.log(comicObj); 
       // get comic title
       $("#output").append("<p>" + comicObj.safe_title+ "</p>");
       // get comic image
       $("#output").append("<img id = 'img' src = " + comicObj.img + " alt= "+ comicObj.alt +">");
   },
   // What we do if the api call fails
   error: function (jqXHR, textStatus, errorThrown) { 
       // do stuff
       console.log("Error:", textStatus, errorThrown);
   }
})

