/* You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4] */

function sortArray(array) {
	var odd = array
		.filter((el) => {
			return el % 2 == 1;
		})
		.sort((a, b) => {
			return b - a;
		});
	array.map((el, index) => {
		if (el % 2 == 1) {
			array.splice(index, 1, odd.pop());
		}
	});
	return array;
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));

//Or even without splice
function sortArray2(array) {
	const odd = array.filter((el) => el % 2).sort((a, b) => b - a);
	return array.map((el) => (el % 2 ? odd.pop() : el));
}
console.log(sortArray2([5, 3, 2, 8, 1, 4]));
