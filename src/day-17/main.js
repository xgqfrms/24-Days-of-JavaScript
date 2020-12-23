function differentSymbolsNaive(str) {
  //  write code here.
  const map = new Map();
  const arr = Array.from(str);
  for (const item of arr) {
    if(!map.has(item)) {
      map.set(item, item);
    }
  }
  return [...map].length;
  // return [...map.keys()].length;
}



/**
* Test Suite
*/
describe('differentSymbolsNaive()', () => {
  it('returns count of unique characters', () => {
      // arrange
      const str = 'cabca';

      // act
      const result = differentSymbolsNaive(str);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe(3);
  });
});
