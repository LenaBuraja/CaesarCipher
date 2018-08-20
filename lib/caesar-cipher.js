export default class classCaesarCipher {

	classCaesarCipher(numberChift) {
		this.shift = numberChift;	
	}

	encrypt(inputText) {
		let result = '';
		for (let i = 0; i < inputText.length; i++) {
			let index = inputText.charCodeAt(i);
			let newIndex = this.correctIndex(index, true);
			//console.log(newIndex);
			let charR = String.fromCharCode(newIndex);
			//console.log(charR);
			result += charR;
		}
		return result;
	}

	decrypt(inputText) {
		let result = '';
		for (let i = 0; i < inputText.length; i++) {
			let index = inputText.charCodeAt(i);
			//console.log(index);
			result += String.fromCharCode(this.correctIndex(index, false));
		}
		return result;
	}

	setShift(numberChift) {
		this.shift = numberChift;
	}

	correctIndex(index, isEncrypt) {
		console.log(index);
		let upperBound = 0;
		let bottomBound = 1;
		if(index >= 65 && index <= 90) {
			upperBound = 90;
			bottomBound = 65;
			//console.log()
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
		index += (isEncrypt) ? this.shift : - this.shift;
		let returnIndex;
		if (isEncrypt) {
			returnIndex = (index > upperBound) ? (bottomBound + upperBound - index) : index;
		} else {
			returnIndex = (index < bottomBound) ? (upperBound + bottomBound - index) : index;
		}
		//console.log(returnIndex + ' ');
		return returnIndex;
	}

}
