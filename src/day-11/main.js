function avoidObstacles(nums) {
  // const largestNum = nums.sort((a, b) => a - b)[nums.length - 1];
  const largestNum = nums.sort((a, b) => a - b > 0 ? -1 : 1)[0];
  for (let i = 1; i <= largestNum + 1; i++) {
    if (nums.every((value) => value % i !== 0)) {
      // break;
      return i;
    }
  }
}



/**
* Test Suite
*/
describe('avoidObstacles()', () => {
  it('returns minimal number of jumps in between numbers', () => {
      // arrange
      const nums = [5, 3, 6, 9, 7];

      // act
      const result = avoidObstacles(nums);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe(4);
  });
});
