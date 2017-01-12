// var numb3rs = "Charles Epps";
// // for (i = 0; i < numb3rs.length; i++)
// for (var letter in numb3rs) {
// 	console.log(numb3rs[letter]);
// }

// var tvShow = "Dick Van Dyke";
// for (var letter in tvShow) {
// 	console.log(tvShow[letter])
// }

//TODO
var food = "banana"
var vowelCount = 0;
for (var letter in food) {
	if (food[letter].toLowerCase() === "a" ||food[letter].toLowerCase() ===  "e" ||food[letter].toLowerCase() ===  "i" ||food[letter].toLowerCase() ===  "o" ||food[letter].toLowerCase() ===  "u") {
		vowelCount++
	}
}
console.log("There are " + vowelCount + " vowels in " + food)







