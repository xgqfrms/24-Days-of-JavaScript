function insertDashes(str) {
  // write code here
  const arr = str.split(` `);
  // for (const {item, i} of arr) {
  //   Array.from(item).join(`-`);
  // }
  return arr.reduce((acc, item, i) => {
    if(i === arr.length - 1) {
      acc += Array.from(item).join(`-`);
    } else {
      acc += Array.from(item).join(`-`);
      acc += ` `;
    }
    return acc;
  }, ``);
}



/**
* Test Suite
*/
describe('insertDashes()', () => {
  it('insert dashes in between chars', () => {
      // arrange
      const value = "aba caba";

      // act
      const result = insertDashes(value);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toBe("a-b-a c-a-b-a");
  });
});
