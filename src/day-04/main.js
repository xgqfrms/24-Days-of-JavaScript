function centuryFromYear(year) {
  //  write code here.
  // let rest = (year % 100 === 0) ? 0 : 1;
  // let century = Math.floor(year / 100) + rest;
  let century = Math.ceil(year / 100);
  return century;
}



/**
* Test Suite
*/
describe('centuryFromYear()', () => {
  it('returns current century', () => {
      // arrange
      const year = 1905;

      // act
      const result = centuryFromYear(year);

      // log
      console.log("result 1: ", result);

      // assert
      expect(result).toBe(20);
  });

  it('returns current century for edge case of start of century', () => {
      // arrange
      const year = 1700;

      // act
      const result = centuryFromYear(year);

      // log
      console.log("result 2: ", result);

      // assert
      expect(result).toBe(17);
  });
});
