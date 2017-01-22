function hello(){
	console.log("Hello World");
}

// hello();

// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")

// making a function with greeting
// HOW DOES THIS APPLY TO THE BROWSER?!!  (parameters and arguments:)
function greeting(name){
	return "안영 " + name;
}

var addGreeting = greeting("Brandon and Brie") + ", what's up!";

console.log(addGreeting);
// adding numbers to functions
function printNumber(){
	console.log(1);
}

printNumber();

function sumNum(num1, num2){
	
	console.log(num2 + num1)
}

sumNum(4, 6);
function mulNum(num1, num2){
	
	console.log(num2 * num1);
}

mulNum(19384, 218);
function subNum(num1, num2){
	
	console.log(num2 - num1);
}

subNum(20, 17);
console.log("******************************************************");
function calculatePriceIndiana(quantity, price){
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = totalTax + quantity * price;

	return totalPrice;
}

console.log(calculatePriceIndiana(10, 15))


