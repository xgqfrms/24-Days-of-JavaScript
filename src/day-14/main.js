function arrayMaximalAdjacentDifference(nums) {
  //  write code here.
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    const temp = Math.abs(nums[i + 1] - nums[i]);
    if(temp > max) {
      max = temp;
    }
  }
  return max;
  // nums.sort((a, b) => a - b > 0 ? 1 : -1);
  // const max = nums[nums.length - 1];
  // const min = nums[0];
  // return Math.abs(max - min);
  // return Math.abs(Math.max(nums) - Math.min(nums));
}



/**
* Test Suite
*/
describe('arrayMaximalAdjacentDifference()', () => {
  it('returns largest difference between adjacent values', () => {
      // arrange
      const nums = [2, 4, 1, 0];

      // act
      const result = arrayMaximalAdjacentDifference(nums);

      // log
      console.log("result 1: ", result);

      // assert
      expect(result).toBe(3);
  });

  it('returns largest difference between adjacent values example 2', () => {
      // arrange
      const nums = [2, 9, 1, 0];

      // act
      const result = arrayMaximalAdjacentDifference(nums);

      // log
      console.log("result 2: ", result);

      // assert
      expect(result).toBe(8);
  });
});
