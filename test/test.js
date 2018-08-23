import CaesarCipher from '../lib/caesar-cipher';
import assert from 'assert';

describe('CaesarCipher', () => {
	[{
		testCase: 'correct work with English text',
		sourceText: 'meSSage',
		shift: 5,
		expectedResult: 'rjXXflj',
	},
	{
		testCase: 'correct work with Russian text',
		sourceText: 'сОобщЕние',
		shift: 6,
		expectedResult: 'чФфзяЛуол',
	},
	{
		testCase: 'not set value shift',
		sourceText: 'сОобщЕние',
		shift: null,
		expectedResult: 'чФфзяЛуол',
	},
	{
		testCase: 'in the text a space',
		sourceText: 'сОоб щЕние',
		shift: 6,
		expectedResult: 'чФфзяЛуол',
	},
	{
		testCase: 'in the text a space',
		sourceText: 'meS Sage',
		shift: 5,
		expectedResult: 'rjXXflj',
	}].forEach(({ testCase, sourceText, shift, expectedResult }) => {
		it(testCase, () => {
			const cipher = new CaesarCipher(shift);
			assert.notStrictEqual(cipher.shift, null, 'test: invalid shift');
			const resultEncrypt = cipher.encrypt(sourceText);
			assert.strictEqual(resultEncrypt, expectedResult, 'test: invalid encryption result');
			const resultDecrypt = cipher.encrypt(resultEncrypt);
			assert.strictEqual(resultDecrypt, sourceText, 'test: invalid decryption result');
		});
	});
})
