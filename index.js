import CaesarCipher from './lib/caesar-cipher';

const cipher = new CaesarCipher(6);
const a1 = cipher.encrypt('сОобщЕние');
if (a1 !== undefined) {
	console.log(a1);
	const d1 = cipher.decrypt(a1);
	if (d1 !== undefined) console.log(d1);
}
cipher.shift = null;
const a2 = cipher.encrypt('сОоб щЕние');
if (a2 !== undefined) {
	console.log(a2);
	const d2 = cipher.decrypt(a2);
	if (d2 !== undefined) console.log(d2);
} 
