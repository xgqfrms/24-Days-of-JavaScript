function countVowelConsonant(str) {
  // write code here
  // 元音辅音
  // const arr = str.split(``);
  const arr = Array.from(str);
  const vowels = [`a`, `e`, `i`, `o`, `u`];
  let count = 0;
  for (const item of arr) {
    if(vowels.includes(item)) {
      count += 1;
    } else {
      count += 2;
    }
  }
  return count;
}



/**
* Test Suite
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';

        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(8);
    });
});
