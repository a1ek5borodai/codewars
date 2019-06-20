/* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'. 
*/

function list(names) {
	let reversedArrayOfNames = [];
	for (let value of names) {
		reversedArrayOfNames.unshift(value.name);
	}
	let lastTwoNames = `${reversedArrayOfNames[1]} & ${reversedArrayOfNames[0]}`;
	switch (reversedArrayOfNames.length) {
		case 0:
			return '';
		case 1:
			return reversedArrayOfNames[0];
		case 2:
			return lastTwoNames;
		default:
			return `${reversedArrayOfNames
				.slice(2)
				.reverse()
				.join(', ')}, ${lastTwoNames}`;
	}
}
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));

//Or with reduce
function list2(names) {
	return names.reduce((prev, current, index, array) => {
		if (index == 0) {
			return current.name;
		} else if (index == array.length - 1) {
			return prev + ' & ' + current.name;
		} else {
			return prev + ', ' + current.name;
		}
	}, '');
}
console.log(list2([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
