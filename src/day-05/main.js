function reverseAString(str) {
  //  write code here.
  let result = [];
  const arr = str.split(``);
  for (let i = 0; i < arr.length; i++) {
    // result.push(arr[arr.length - 1 - i]);
    result.push(arr[i]);
  }
  // return result.join(``);
  return result.reverse().join(``);
}



/**
* Test Suite
*/
describe('reverseAString()', () => {
  it('returns original string reversed', () => {
      // arrange
      const str = 'hello';

      // act
      const result = reverseAString(str);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe('olleh');
  });
});
