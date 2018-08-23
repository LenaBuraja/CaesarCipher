import CaesarCipher from './lib/caesar-cipher';

const cipher = new CaesarCipher(5);
const a1 = cipher.encrypt('m1eSSa ge');
console.log(a1);
console.log(cipher.decrypt(a1));
cipher.shift = null;
const a2 = cipher.encrypt('сОобщЕние');
console.log(a2);
console.log(cipher.decrypt(a2));
