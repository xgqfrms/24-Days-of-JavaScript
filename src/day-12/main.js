function validTime(str) {
  //  write code here.
  const nums = str.replace(`:`, ``).split(``).map(item => parseInt(item));
  const [a, b, c, d] = nums;
  // 23:59
  let result = true;
  if(a > 2) {
    result = false;
  }
  if(b > 3) {
    result = false;
  }
  if(c > 5) {
    result = false;
  }
  // if(d > 9) {
  //   result = false;
  // }
  return result;
}



/**
* Test Suite
*/
describe('validTime()', () => {
  it('returns true for valid time', () => {
      // arrange
      const str = '13:58';

      // act
      const result = validTime(str);

      // log
      console.log("result 1: ", result);

      // assert
      expect(result).toBe(true);
  });

  it('returns false when invalid hours', () => {
      // arrange
      const str = '25:51';

      // act
      const result = validTime(str);

      // log
      console.log("result 1: ", result);

      // assert
      expect(result).toBe(false);
  });

  it('returns false when invalid minutes', () => {
      // arrange
      const str = '02:76';

      // act
      const result = validTime(str);

      // log
      console.log("result 1: ", result);

      // assert
      expect(result).toBe(false);
  });
});
