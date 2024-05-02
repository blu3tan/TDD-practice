import analyzeArray from './analyze-array';

describe('Analyze array function', () => {
	it('gets an array of numbers, returns object', () => {
		let testArray = [7, 15, 3, 31, 5, 1];
		let result = analyzeArray(testArray);
		expect(result).toStrictEqual({
			average: 10,
			min: 1,
			max: 31,
			length: 6,
		});
	});
});
