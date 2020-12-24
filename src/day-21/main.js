function sumOfTwo(nums1, nums2, value) {
  //  write code here.
  let result = false;
  // let len = nums1.length < nums2.length ? nums1.length : nums2.length;
  for (const item1 of nums1) {
    for (const item2 of nums2) {
      const temp = item1 + item2;
      if(temp === value) {
        result = true;
        break;
      }
    }
  }
  return result;
}



/**
* Test Suite
*/
describe('sumOfTwo()', () => {
  it('returns true if a value can be found that by adding one number from each list', () => {
      // arrange
      const nums1 = [1, 2, 3];
      const nums2 = [10, 20, 30, 40];
      const value = 42;

      // act
      const result = sumOfTwo(nums1, nums2, value);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe(true);
  });
});
