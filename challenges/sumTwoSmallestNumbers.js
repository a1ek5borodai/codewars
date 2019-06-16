/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

var arr = [19, 5, 42, 2, 77];
var arr2 = [19, -5, 42, 2, 77];
var arr3 = [19.3, 5.65, 42, 2.1, 77.9];

//With array method
function sumTwoSmallestNumbers(numbers) {
	numbers = numbers.sort((a, b) => {
		return a - b;
	});
	return numbers[0] + numbers[1];
}
console.log(sumTwoSmallestNumbers(arr));
console.log(sumTwoSmallestNumbers(arr2));
console.log(sumTwoSmallestNumbers(arr3));

//With quick sort algorithm
function sumTwoSmallestNumbers2(numbers) {
	const qsort = array => {
		if (array.length < 2) {
			return array;
		}
		const pivot = array[0];
		const valuesLessPivot = array.slice(1).filter(value => value <= pivot);
		const valuesMorePivot = array.slice(1).filter(value => value > pivot);
		return [...qsort(valuesLessPivot), pivot, ...qsort(valuesMorePivot)];
	};
	numbers = qsort(numbers);
	return numbers[0] + numbers[1];
}
console.log(sumTwoSmallestNumbers2(arr));
console.log(sumTwoSmallestNumbers2(arr2));
console.log(sumTwoSmallestNumbers2(arr3));
