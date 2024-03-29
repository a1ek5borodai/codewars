/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge. 
Don't forget the space after the closing parentheses! */
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
	return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}
console.log(createPhoneNumber(num));

function createPhoneNumber2(numbers) {
	numbers = numbers.join('');
	return `(${numbers.substring(0, 3)}) ${numbers.substring(
		3,
		6
	)}-${numbers.substring(6)}`;
}
console.log(createPhoneNumber2(num));
