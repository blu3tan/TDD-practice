// A capitalize function that takes a string and returns it with the first character capitalized.

import capitalize from '../capitalize';

it('Receive a string, returns string with first letter capitalized', () => {
	const word = 'word';
	const result = capitalize(word);

	expect(result).toBe('Word');
});
