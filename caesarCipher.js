const plainAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];

export default function caesarCipher(message = 'sample', shift = 2) {
	let cipher = generateCipherAlphabet(shift);
	let encryptedMessage = '';
	let iterableMessage = [...message];
	iterableMessage.forEach((letter) => {
		encryptedMessage += cipher[letter];
	});
	return encryptedMessage;
}

function generateCipherAlphabet(shift) {
	let cipheredAlphabet = {};
	plainAlphabet.forEach((letter) => {
		let index = (plainAlphabet.indexOf(letter) + shift) % 26;
		cipheredAlphabet[letter] = plainAlphabet[index];
	});
	return cipheredAlphabet;
}
