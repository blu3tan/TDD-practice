// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.

import caesarCipher from '../caesarCipher';

describe('caesar cipher test', () => {
	it('get message, get shift factor, return message ciphered', () => {
		let message = 'veritasium';
		let shift = 5;
		const result = caesarCipher(message, shift);
		expect(result).toBe(' JWNYFXNZR');
	});

	it('is case insensitive', () => {
		let message = 'Probability';
		let shift = 5;
		const result = caesarCipher(message, shift);
		expect(result).toBe('UWTGFGNQNY?');
	});

	it('encrypts basic punctuation and spaces', () => {
		let message = 'This is... a test';
		let shift = 5;
		const result = caesarCipher(message, shift);
		expect(result).toBe('YMNXANXBBBAFAYJXY');
	});
});
