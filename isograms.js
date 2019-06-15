/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case */

let a = 'Dermatoglyphics';
let b = 'aba';
let c = 'moOse';

function isIsogram(string) {
	const stringToCharArray = string.toLowerCase().split('');
	let arrayToObject = {};
	stringToCharArray.forEach(element => {
		let char = element;
		arrayToObject[char] = true;
	});
	arrayToObject = Object.keys(arrayToObject);
	return arrayToObject.length == stringToCharArray.length ? true : false;
}
console.log(isIsogram(a));
console.log(isIsogram(b));
console.log(isIsogram(c));
