/* You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption */
function longestConsec(strarr, k) {
	var n = strarr.length,
		longestStr = '',
		currentStr = '';
	if ((n = 0 || k > n || k <= 0)) return longestStr;
	for (var i = 0; i < strarr.length; i++) {
		currentStr = strarr.slice(i, k + i).join('');
		if (currentStr.length > longestStr.length) {
			longestStr = currentStr;
		}
	}
	return longestStr;
}

console.log(
	longestConsec(
		['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'],
		2
	)
);
