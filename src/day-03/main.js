function chunkyMonkey(values, size) {
  //  write code here.
  const left = [];
  const right = [];
  for(let i = 0; i < values.length; i++) {
    if(i < size) {
      left.push(values[i]);
    } else {
      right.push(values[i]);
    }
  }
  return [left, right];
}



/**
* Test Suite
*/
describe('chunkyMonkey()', () => {
  it('returns largest positive integer possible for digit count', () => {
      // arrange
      const values = ["a", "b", "c", "d"];
      const size = 2;

      // act
      const result = chunkyMonkey(values, size);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toEqual([["a", "b"], ["c", "d"]]);
  });
});
