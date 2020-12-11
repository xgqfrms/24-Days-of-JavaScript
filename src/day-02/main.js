function depositProfit(deposit, rate, threshold) {
  //  write code here.
  // deposit, rate, threshold
  // 存款，利率，门槛
  let years = 0;
  while(deposit < threshold) {
    deposit *= (100 + rate) / 100;
    years += 1;
  }
  return years;
}



/**
* Test Suite
*/
describe('depositProfit()', () => {
  it('returns number of years it will take to hit threshold based off of deposit & rate', () => {
      // arrange
      const deposit = 100;
      const rate = 20;
      const threshold = 170;

      // act
      const result = depositProfit(deposit, rate, threshold)

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe(3);
  });
});
