function adjacentElementsProduct(nums) {
  //  write code here.
  let temp = 1;
  let max = 0;
  for(let i = 0; i < nums.length; i++) {
      temp = nums[i] * nums[i + 1];
      if(max < temp) {
        max = temp;
      }
  }
  return max;
}



/**
* Test Suite
*/
describe('adjacentElementsProduct()', () => {
  it('returns largest product of adjacent values', () => {
      // arrange
      const nums = [3, 6, -2, -5, 7, 3];

      // act
      const result = adjacentElementsProduct(nums);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe(21);
  });
});
