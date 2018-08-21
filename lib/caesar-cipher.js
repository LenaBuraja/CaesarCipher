export default class CaesarCipher {

	constructor(numberShift) {
		this.shift = numberShift;
	}

	encrypt(inputText) {
		let result = '';
		for (let i = 0; i < inputText.length; i++) {
			let index = inputText.charCodeAt(i);
			result += String.fromCharCode(this.correctIndex(index, true));
		}
		return result;
	}

	decrypt(inputText) {
		let result = '';
		for (let i = 0; i < inputText.length; i++) {
			let index = inputText.charCodeAt(i);
			result += String.fromCharCode(this.correctIndex(index, false));
		}
		return result;
	}

	correctIndex(index, isEncrypt) {
		let upperBound = 0;
		let bottomBound = 1;
		if(index >= 65 && index <= 90) {
			upperBound = 90;
			bottomBound = 65;
		}
		if (index >= 97 && index <= 122) {
			upperBound = 122;
			bottomBound = 97;
		}
		if (index >= 1040 && index <= 1071) {
			upperBound = 1071;
			bottomBound = 1040;
		}
		if (index >= 1072 && index <= 1103) {
			upperBound = 1103;
			bottomBound = 1072;
		}
		index += (isEncrypt) ? this.shift : (0 - this.shift);
		let returnIndex;
		if (isEncrypt) {
			returnIndex = (index > upperBound) ? (bottomBound + upperBound - index) : index;
		} else {
			returnIndex = (index < bottomBound) ? (upperBound + bottomBound - index) : index;
		}
		return returnIndex;
	}

}
