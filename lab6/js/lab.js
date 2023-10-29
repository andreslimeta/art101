// index.js - Learning about arrays and objects
// Author: Andres Limeta
// Date: Oct 28, 2023 

var myTransport = ["car", "bus", "bike"];

var myMainRide = {
  make: "Jeep",
  model: "Grand Cherokee", 
  color: "Grey",
  year: 2004, 
  age: function() {
      return 2023 - this.year;
  }
}
// output
document.write("The ways I get around: "+ myTransport + "<br>");

document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");