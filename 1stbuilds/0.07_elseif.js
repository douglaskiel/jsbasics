var age = 26

if (age >= 21 && age < 25) {
	console.log("You can drink");
} else if (age >= 18 && age < 21) {
	console.log("You can vote, but you can't drink.");
} else if (age >= 25) {
	console.log("You can rent a car")
}


//CHALLENGE: BRONZE
//expand upon our a simple login.
// create 2 variables 1 for your users username, 2 for the boolean condition then another to check if the user is an admin
// If login is true then print "You're Logged In!"
// If login is true and the user is a admin, print "This is the dashboard for your employee records you have master control"
// If Login is true and the user is a manager, print "This is the dashboard for your employee records, you can only read but not create users"
// If login is true and the user is a employee, print "clock in and clockout please" 
//Else if login is false then print "Please Sign In"


//CHALLENGE: SILVER
/*
Create an if statement that has several conditions.
 Pretend that we will play four total games next year against the patriots.
 Deal with the Patriots record versus our record In other words, if our record was better, 
 talk some smack. If not, you should still talk some smack, but in 
 a different way. If the records were the same, talk some smack. 
 
 */

/*CHALLENGE: GOLD

1. Write a program that prompts your users in the browser to enter a
number from 1 to 5 about how optimistic they are about the Colts next year.
2. Have a different response for each number.

*HINT*
 you have to build this in relp.it 
Research prompt*/

// Operator  Meaning
//    ==     Equality
//    ===    Strict equality
//    !=     Inequality
//    !==    Strict Inequality
//    >      Greater than
//    >=     Greater than or equal
//    <      Less than
//    <=     Less than or equal
//    &&     and
//    ||     or
 
var firstName = "Doug"
var admin = false
var manager = false
var employee = true
var loggedout = false


if (admin && !manager && !employee) {
	console.log("You are Logged in! " + firstName);
} else if (manager && !admin && !employee) {
	console.log("You must have higher access")
} else if (employee && !admin && !manager) {
	console.log("You are not permitted beyond this point")
} else {
	console.log("Sorry, try again.")
}

console.log("******************************************************");
console.log("Silver CHALLENGE");

var teamOne = "Colts";
var teamTwo = "Patriots";
var teamThree = "Texans";
var teamFour = "Packers";


if (teamOne > teamTwo) {
	console.log("Yay!! WE DID IT!!");
} else if (teamTwo > teamOne) {
	console.log("Hey, what the Hell happened!");
} else if (teamThree >= teamTwo) {
	console.log("Well that sucks, but we can still beat them.");
} else if (teamFour >= teamThree) {
	console.log("That was stupid");
} else 



