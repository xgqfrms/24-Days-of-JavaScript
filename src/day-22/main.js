function extractMatrixColumn(matrix, column) {
  //  write code here.
}



/**
* Test Suite
*/
describe('extractMatrixColumn()', () => {
  it('returns largest positive integer possible for digit count', () => {
      // arrange
      const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
      const column = 2;

      // act
      const result = extractMatrixColumn(matrix, column);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toEqual([1, 0, 3]);
  });
});
