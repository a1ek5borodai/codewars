/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string) */

//Smarty
function alphabetPosition(text) {
	return [...text]
		.map(el => parseInt(el, 36) - 9)
		.filter(value => value > 0)
		.join(' ');
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

//Straightforward
function alphabetPosition2(text) {
	text = text.toLowerCase();
	let result = [];
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (var i = 0; i < text.length; i++) {
		if (alphabet.indexOf(text[i]) !== -1) {
			result.push(alphabet.indexOf(text[i]) + 1);
		}
	}
	return result.join(' ');
}
console.log(alphabetPosition2("The sunset sets at twelve o' clock."));
