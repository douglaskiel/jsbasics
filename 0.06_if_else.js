//if/else

var elevatorUp = true;
var elevatorDown = true;
var elevatorOpen = true;
var elevatorBroken = true;
var elevatorStuckAndWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true){
	console.log("Going up");
}else{
	console.log("Going down");
}

if (elevatorBroken === true){
	console.log("You ain't goin' anywhere");
}else{
	console.log("You may pass go and collect $200.")
}

if (elevatorStuckAndWeAreOnIt){
	console.log("Well, Crap!! 'REALLY!'");
} else {
	console.log("I'm going to the Bathroom.")
}

//--------------------------------------------------------
//--------------------------------------------------------
// ------------Challenges: If/Else Statements ----------
//--------------------------------------------------------
//--------------------------------------------------------

/*-----------------------------------------------------------*/
//CHALLENGE: Bronze

//WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND LOGICAL OPERATORS.
//Come up with a simple example

//Challenge: Silver
//Create a simple login console message.
// create 2 variables 1 for your users firstName, 2 for the boolean condition
// If login is true then print "You're Logged In!"
//Else if login is false then print "Please Sign In"


//CHALLEGE: Gold
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

var isLoggedin = true;
var firstName = "Doug";
var password = true;
var notPassword = false;

if (login){
	console.log("Welcome! " + firstName);
}else{
	console.log("Sorry, try again.")
}




