import CaesarCipher from './lib/caesar-cipher';

console.log('helen dura');
const cipher = new CaesarCipher(5);
const a1 = cipher.encrypt('meSSage');
console.log(a1);
console.log(cipher.decrypt(a1));
cipher.setShift = 6;
const a2 = cipher.encrypt('meSSage');
console.log(a2);
console.log(cipher.decrypt(a2));
