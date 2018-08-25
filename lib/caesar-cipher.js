export default class CaesarCipher {

	constructor(numberShift) {
		this._shift = numberShift;
	}

	get shift() {
		return this._shift;
	}

	set shift(newShift) {
		if (Number.isInteger(newShift) && newShift > 0) {
			throw new Error('Shift can not be null');
		} else {
			this._shift = newShift;
		}
	}

	encrypt(inputText) {
		if (this._shift == null) {
			throw new Error('Shift can not be null');
		}
		let result = '';
		for (let i = 0; i < inputText.length; i++) {
			let index = inputText.charCodeAt(i);
				if (index == 32) {
					throw new Error('In text have space');
				} else {
					result += String.fromCharCode(this.correctIndex(index, true));
				}
			}
		return result;
	}

	decrypt(inputText) {
		let result = '';
		for (let i = 0; i < inputText.length; i++) {
			let index = inputText.charCodeAt(i);
				if (index == 32) {
					throw new Error('In text have space');
				} else {
					result += String.fromCharCode(this.correctIndex(index, false));
				}
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
			if (upperBound == 0 || bottomBound == 1) throw new Error('An invalid character was entered');		
		index += (isEncrypt) ? this._shift : (0 - this._shift);
		let returnIndex;
		if (isEncrypt) {
			returnIndex = (index > upperBound) ? (bottomBound + upperBound - index) : index;
		} else {
			returnIndex = (index < bottomBound) ? (upperBound + bottomBound - index) : index;
		}
		return returnIndex;
	}
}
