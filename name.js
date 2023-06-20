// Gets user input
var name = prompt("What is your name?");
var num = prompt("What is your real age? ");

// Uses user input to print out information
println("Hello " + name+ "!");
println(num + "?! That's my real age!");

// Prints out the variable type
println("Name is a " + typeof name);
println("Num is a " + typeof num );

var customerName = prompt("Please enter your name", "<name goes here>");

if (customerName!= null) {

    document.getElementById("welcome").innerHTML =

    "Hello " + customerName + "! How are you today?";}

    var r = confirm("Are you sure you want to send a payment?");

if (r == true) {

    x = "Payment sent!";

} else {

    x = "Payment cancelled!";

}