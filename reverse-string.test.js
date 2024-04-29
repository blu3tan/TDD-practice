import reverseString from './reverse-string';

it('Receive a string, return the same string reversed', () => {
	const word = 'word';
	const result = reverseString(word);

	expect(result).toBe('drow');
});
