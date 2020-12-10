function sumOddFibonacciNumbers(num) {
  //  write code here.
  // ✅ 🚀
  function fibonacci(num, memo) {
    // cached
    memo = memo || {};
    if (memo[num]) {
      return memo[num];
    }
    if (num <= 2) {
      return 1;
    }
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }
  // ❌ 💩
  function fib(n) {
    // 1, 1, 2, 3, 5, 8...n, (n - 1) + (n - 2)
    if(n <= 2) {
      return 1;
    } else {
      // n >= 3
      return fib(n - 1) + fib(n - 2);
    }
  }
  let result = 0;
  for (let i = 1; i <= num; i++) {
    const temp = fibonacci(i);
    // const temp = fib(i);
    if((temp % 2) !== 0 && temp <= num) {
      result += temp;
    }
  }
  return result;
}



/**
* Test Suite
*/
describe('sumOddFibonacciNumbers()', () => {
  it('returns sum of all odd Fibonnci numbers', () => {
      // arrange
      const num = 10;

      // act
      const result = sumOddFibonacciNumbers(num);

      // log
      console.log("result 1: ", result);

      // assert
      expect(result).toBe(10);
  });

  it('returns sum of all odd Fibonnci numbers 2nd example', () => {
      // arrange
      const num = 1000;

      // act
      const result = sumOddFibonacciNumbers(num);

      // log
      console.log("result 2: ", result);

      // assert
      expect(result).toBe(1785);
  });
});
