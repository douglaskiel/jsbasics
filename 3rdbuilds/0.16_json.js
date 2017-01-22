// JSON is an actonym for JavaScript Object Notation
// nested Arrays or box in a box arrays =
var names =[["Doug", "Brandon", "Brie", "Lindsey"], ["Paul", "James", "Abby", "Jona"]]
// console.log(names[1][2]);
var items = [
	{
		"id": 1, 
		"name": "Blue Door",
		"price": 17.50,
		"tags": ["home", "Blue", "vinyl"]
	},

	{
		"id": 2,
		"name": "Gray Door",
		"price": 250.00,
		"tags": ["home", "gray", "wood"]
	},

	{
		"id": 3,
		"name": "Yellow Door",
		"price": 70.00,
		"tags": ["home", "yellow", "plastic"]
	}

];

console.log(items[1].name);

// i = lcv or loop control variable
for (var lcv = 0; lcv < items.length; lcv++) {
	console.log(items[lcv].tags);
}

