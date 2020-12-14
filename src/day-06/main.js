function sortByLength(strs) {
  //  write code here.
  const len = strs.length;
  // ["abc", "", "aaa", "a", "zz"]
  for (let i = 0; i < len.length; i++) {
    let temp = strs[i];
    for (var j = len; j > 0; j--) {
      if(temp ) {

      }
      // strs[j] = strs[j - 1];
    }
    strs[j] = temp;
  }
  return strs;
}



/**
* Test Suite
*/
describe('sortByLength()', () => {
  it('sorts the strings from shortest to longest', () => {
      // arrange
      const strs = ["abc", "", "aaa", "a", "zz"];

      // act
      const result = sortByLength(strs);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
  });
});
