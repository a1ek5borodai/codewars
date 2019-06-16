/* Number of people in the bus
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop. */
var arrays = [[10, 0], [3, 5], [5, 8]];

function number(busStops) {
	let wentIn = 0;
	let wentOut = 0;
	busStops.flat(1).forEach((el, ind) => {
		ind % 2 == 0 ? (wentIn += el) : (wentOut += el);
	});
	return wentIn - wentOut;
}

console.log(number(arrays));

//2nd solution without flat for codewars tester

function number2(busStops) {
	let wentIn = 0;
	let wentOut = 0;
	const flatten = busStops.reduce((acc, val) => acc.concat(val));
	flatten.forEach((el, ind) => {
		ind % 2 == 0 ? (wentIn += el) : (wentOut += el);
	});
	return wentIn - wentOut;
}

console.log(number2(arrays));

//Just with reduce and destructuring, 0 is the initial value of acc
function number3(busStops) {
	return busStops.reduce((acc, [wentIn, wentOut]) => acc + wentIn - wentOut, 0);
}
console.log(number3(arrays));
