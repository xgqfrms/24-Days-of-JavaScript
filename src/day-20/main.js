function domainType(domains) {
  //  write code here.
  const map = new Map([
    ["org", "organization"],
    ["com", "commercial"],
    ["net", "network"],
    ["info", "information"],
  ]);
  const result = [];
  for (const domain of domains) {
    const arr = domain.split(`.`);
    const key = arr[arr.length - 1];
    if(map.has(key)) {
      result.push(map.get(key));
    }
  }
  return result;
}



/**
* Test Suite
*/
describe('domainType()', () => {
  it('returns list of domain types', () => {
      // arrange
      const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];

      // act
      const result = domainType(domains);

      // log
      console.log("result: ", result);

      // assert
      expect(result).toEqual(["organization", "commercial", "network", "information"]);
  });
});
