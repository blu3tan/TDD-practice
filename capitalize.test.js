import capitalize from './capitalize';

it('Receive a string, returns string with first letter capitalized', () => {
	const word = 'word';
	const result = capitalize(word);

	expect(result).toBe('Word');
});
