const plainAlphabet = [...' .,?!abcdefghijklmnopqrstuvwxyz'];

export default function caesarCipher(message = 'sample', shift = 2) {
	let cipher = generateCipherAlphabet(shift);
	let encryptedMessage = '';
	let iterableMessage = [...message.toLowerCase()];
	iterableMessage.forEach((letter) => {
		encryptedMessage += cipher[letter];
	});
	return encryptedMessage.toUpperCase();
}

function generateCipherAlphabet(shift) {
	let cipheredAlphabet = {};
	plainAlphabet.forEach((letter) => {
		let index = (plainAlphabet.indexOf(letter) + shift) % 31;
		cipheredAlphabet[letter] = plainAlphabet[index];
	});
	return cipheredAlphabet;
}
