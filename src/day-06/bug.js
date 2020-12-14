function sortByLength(strs) {
  //  write code here.
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    // ["aa"]
    let temp = strs[i];
    for (var j = result.length; j > 0; j--) {
      const item = result[j - 1];
      if(temp >= item) {
        result.push(temp);
        break;
      } else {
        // continue;
        // 复制 max
        result[j] = result[j - 1];
      }
    }
    result[j] = temp;
    // insert order
    // swap order
  }
  return result;
  // const map = new Map();
  // for(const item of strs) {
  //   if(!map.has(item)) {
  //     // map.set(item.length, item);
  //     map.set(item, item.length);
  //   }
  // }
  // const entries = [[]];
  // sort order bug
  // ["abc", "", "aaa", "a", "zz"].sort();
  // (5) ["", "a", "aaa", "abc", "zz"]
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
