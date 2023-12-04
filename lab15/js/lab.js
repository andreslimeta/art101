
/*
   lab.js - This AJAX to get info from an external source (Pokemon API).

   Requirements: jQuery must be loaded for this script to work.

   Author: Andres Limeta
   Date: December 3, 2023
*/

const pokemonEndpoint = "https://pokeapi.co/api/v2/pokemon/";

$("#activate").click(function(){
   var userInput = document.getElementById("input").value; 
   const pokemonUrl = pokemonEndpoint + userInput;


// Using the core $.ajax() method
$.ajax({
   // The URL for the request (from the api docs)
   url: pokemonUrl,
   type: "GET",
   // The type of data we expect back
   dataType : "json",
   // What do we do when the api call is successful
   //   all the action goes in here
   success: function(data) {
       // do stuff
       console.log(data);

       // Extract relevant info from Pokemon data
       const pokemonName = data.name
       const pokemonType = data.types.map(typeObj => typeObj.type.name);
       const pokemonAbilities = data.abilities.map(ability => ability.ability.name);

       //print pokemon into into output div
      $("#output").append(`
      <p>Name: ${pokemonName}</p>
      <p>Type(s): ${pokemonType.join(', ')}</p>
      <p>Abilities: ${pokemonAbilities.join(', ')}</p>`);
   },
   // What we do if the api call fails
   error: function (jqXHR, textStatus, errorThrown) { 
       // do stuff
       console.log("This Pokemon does not exist.")
       console.log("Error:", textStatus, errorThrown);
       
   }
})

})




