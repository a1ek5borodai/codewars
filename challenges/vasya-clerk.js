/* The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50) */
function tickets(peopleInLine) {
	if (peopleInLine[0] > 25) return 'NO';
	var $25 = 0;
	var $50 = 0;
	var noChange = peopleInLine
		.map(el => {
			switch (el) {
				case 25:
					$25++;
					break;
				case 50:
					$50++;
					if ($25 > 0) {
						$25--;
					} else return 'NO';
					break;
				case 100:
					if ($25 >= 1 && $50 >= 1) {
						$25--;
						$50--;
						break;
					} else if ($25 >= 3) {
						$25 += -3;
						break;
					} else return 'NO';
			}
		})
		.includes('NO');
	return noChange == true ? 'NO' : 'YES';
}
arr = [25, 25, 50, 50, 100];
console.log(tickets(arr));

//Better solution

function tickets2(peopleInLine) {
	let $25 = 0;
	let $50 = 0;
	for (let i = 0; i < peopleInLine.length; i++) {
		switch (peopleInLine[i]) {
			case 25:
				$25++;
				break;
			case 50:
				$50++;
				$25--;
				break;
			case 100:
				if ($50 >= 1 && $25 >= 1) {
					$25--;
					$50--;
					break;
				} else {
					$25 -= 3;
					break;
				}
		}
		if ($25 < 0) return 'NO';
	}
	return 'YES';
}

arr2 = [25, 25, 50, 50, 100];
console.log(tickets2(arr2));
