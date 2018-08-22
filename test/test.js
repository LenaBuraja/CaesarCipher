import CaesarCipher from '../lib/caesar-cipher';

describe('CaesarCipher', function() {
	const text1 = 'meSSage';
	const result1 = 'rjXXflj';
	const text2 = 'сОобщЕние';
	const result2 = 'чФфзяЛуол';
	const cipher = new CaesarCipher(5);
	const a1 = cipher.encrypt(text1);
	it(`encript ${text1}`, function() {
		if(a1!==result1){
			throw new Error(`Expected ${result1}, but got ${a1}`);
		}
	});
	const r1 = cipher.decrypt(a1);
	it(`decript ${a1}`, function() {
		if(r1!==text1){
			throw new Error(`Expected ${r1}, but got ${text1}`);
		}
	});
	cipher.shift = 6;
	const a2 = cipher.encrypt(text2);
	it(`encript ${text2}`, function() {
		if(a2!==result2){
			throw new Error(`Expected ${result2}, but got ${a2}`);
		}
	});
	const r2 = cipher.decrypt(a2);
	it(`decript ${r2}`, function() {
		if(r2!==text2){
			throw new Error(`Expected ${r2}, but got ${text2}`);
		}
	});
});
