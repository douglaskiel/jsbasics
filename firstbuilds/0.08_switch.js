// switch cases

/*switch casesswitch(expression) {
	case n:
	code block
	break;
	case n:
	code block
	break;
	default:
		default code block
}
*/

var marginOfClotSuperBowlWins = 17;
var result

switch (marginOfClotSuperBowlWins) {
	case 3:
		result = "cool, that will be a good game";
		break;
	case 7:
		result = "I like it. Just lcose enough";
		break;
	case 10:
		result = "That's what I'm talking about";
		break;
	case 17:
		result = "Sweet, we're awesome";
		break;
	default:
		result = "mmmhm getting there"	
}
console.log("switch Result:" + result)