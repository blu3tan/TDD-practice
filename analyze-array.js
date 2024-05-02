export default function analyzeArray(array) {
	let result = {};
	result['average'] = findAverage(array);
	result['min'] = Math.min(...array);
	result['max'] = Math.max(...array);
	result['length'] = array.length;

	return result;
}

function findAverage(array) {
	return Math.floor(array.reduce((a, b) => a + b) / array.length);
}
