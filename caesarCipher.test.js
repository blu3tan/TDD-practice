import caesarCipher from './caesarCipher';

describe('caesar cipher test', () => {
	const plainAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];
	let message = 'sample';
	let shift = 2;
	const result = caesarCipher(message, shift);

	it('message, shift factor, return message ciphered', () => {
		expect(result).toBe('ucorng');
	});
});
