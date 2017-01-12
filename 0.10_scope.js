// Scopes

var name = "Abby"

// "var" calls things with in the scope that is located,
//but when I call something "without var" it becomes global.
function greetings(){
	var name = "Doug";
	random = "bread"; // this is hoisting
	return "Hello " + name;
}

// How can I get Abby and Doug into the greeting keeping Abby  
// in the globe arena, or can I?

console.log(greetings());
console.log(name);
console.log(random);