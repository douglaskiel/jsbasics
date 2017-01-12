//indexing 0123456

// DRY = Don't Repeat yourself
// WET = Write Everything
var name = "Douglas Kiel";
console.log(name.length);
console.log(name[0], name[1], name[2], name[3], name[4], name[5] ,name[6], name[7], name[8], name[9], name[10], name[11]);
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);
// console.log(name[6]);
// console.log(name[7]);
// console.log(name[8]);
// console.log(name[9]);
// console.log(name[10]);
// console.log(name[11]);
// console.log(name[12]);
// console.log(name[13]);
// console.log(name[14]);

// LCV = loop control variable
var lcv = 0;
while (lcv < 4){
	console.log(name.toUpperCase());
	lcv += 1; //THIS IS CRITICAL!!!! NO VAR LEADS TO INFINITY!
}
console.log("******************************************************");
var me = 0
while(me < 10) {
	console.log(me);
	me++; //++ is equal to count += 1
}
console.log("******************************************************");

var num = 10 // lcv, but we named it num
// code block is everything between curly braces
while(num > 0) {
	console,log(num);
	num -= 1; //num--
}
console.log("******************************************************");
var evenCount = 0;
while (evenCount < 20) {
	if (evenCount % 2 === 0) {
		console.log(evenCount + " is even");
	} else {
		console.log(evenCount +" is odd");
	}
	evenCount++;
}
console.log("******************************************************");

var countFive = 0;
while (countFive <= 50) {
	if (countFive % 5 == 0) {
		console.log(evenCount + " is even");
	
}







