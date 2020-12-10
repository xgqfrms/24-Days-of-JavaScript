function candies(children, candy) {
  //  write code here.
  const result = (Math.floor(candy / children) * children);
  console.log(`result`, result)
  return result;
}



/**
* Test Suite
*/
describe('candies()', () => {
  it('returns amount of total equal candy to be eaten', () => {
      // arrange
      const children = 3;
      const candy = 10;

      // act
      const result = candies(children, candy);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe(9);
  });
});


