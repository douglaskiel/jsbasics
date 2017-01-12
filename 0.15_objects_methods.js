// OBJECT LETERALS WITH METHODS
// Functions inside of an object.
//when methods are involved you will need to add a comma after the last property

var player = {
	// Properties
	name 		: "",
	life		: 100,
	damage		: 0,
	hasAxe		: true

	// Methods
	challenge 	: function() {
		console.log(this.name + ": Would anyone like to fight");
	},

	counterchallenge : function() {
		console.log(this.name + ": Yes, I will destroy you")
	},
	attack : function() {
		console.log(this.name + " swings axe at " + )
	}
}

var melkor = Object.create(player);
melkor.name = "Melkor";

var miley = Object.create(player);
miley.name = "Miley";

console.log(melkor.name);
console.log(miley.name);

// Access methods
melkor.challenge();
miley.counterchallenge();
