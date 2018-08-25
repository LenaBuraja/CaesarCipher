import CaesarCipher from '../lib/caesar-cipher';
import assert from 'assert';

describe('CaesarCipher', () => {
	[{
		testCase: 'Correct work with English text',
		sourceText: 'meSSage',
		shift: 5,
		expectedResult: 'rjXXflj',
	},
	{
		testCase: 'Correct work with Russian text',
		sourceText: 'сОобщЕние',
		shift: 6,
		expectedResult: 'чФфзяЛуол',
	},
	{
		testCase: 'Not set value shift',
		sourceText: 'сОобщЕние',
		shift: null,
		expectedResult: undefined,
	},
	{
		testCase: 'In the text a space',
		sourceText: 'сОоб щЕние',
		shift: 6,
		expectedResult: undefined,
	},
	{
		testCase: 'In the text a space',
		sourceText: 'meS Sage',
		shift: 5,
		expectedResult: undefined,
	},
	{
		testCase: 'An invalid character was entered',
		sourceText: 'сОоб2щЕние',
		shift: 6,
		expectedResult: undefined,
	},
	{
		testCase: 'An invalid character was entered',
		sourceText: 'meS_Sage',
		shift: 6,
		expectedResult: undefined,
	},
	{
		testCase: 'Characters from different alphabets',
		sourceText: 'meSЛage',
		shift: 6,
		expectedResult: undefined,
	},
	{
		testCase: 'Characters from different alphabets',
		sourceText: 'сОобQщЕние',
		shift: 6,
		expectedResult: undefined,
	}].forEach(({ testCase, sourceText, shift, expectedResult }) => {
		it(testCase, () => {
			try {
				const cipher = new CaesarCipher(shift);
				if (cipher.shift === null) {
					assert.strictEqual(cipher.shift, null, 'test: invalid shift');
				} else {
					const resultEncrypt = cipher.encrypt(sourceText);
					assert.strictEqual(resultEncrypt, expectedResult, 'test: invalid encryption result');
					if (resultEncrypt !== undefined) {
						const resultDecrypt = cipher.decrypt(resultEncrypt);
					assert.strictEqual(resultDecrypt, sourceText, 'test: invalid decryption result');
					}
				}
			}
			catch(e) {
				console.log(e.message);
			}
		});
	});
})
