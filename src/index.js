"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-12-10
 * @modified
 *
 * @description
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @time O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

// ✅ 🚀 good O(2*n)
function fibonacci(num, memo) {
  memo = memo || {};
  if (memo[num]) {
    return memo[num];
  }
  if (num <= 1) {
    return 1;
  }
  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

// ❌ 💩 bad O(2^n), 卡死了
function fib(n) {
  // 1, 1, 2, 3, 5, 8...n, (n - 1) + (n - 2)
  if(n <= 2) {
    return 1;
  } else {
    // n >= 3
    return fib(n - 1) + fib(n - 2);
  }
}

function fm(num, memo) {
  memo = memo || {};
  if (memo[num]) {
    return memo[num];
  }
  if (num <= 2) {
    return 1;
  }
  // RangeError: Maximum call stack size exceeded ？？？
  return memo[num] = fm(num - 1, memo) + fm(num - 2, memo);
}

function f(num) {
  let n1 = 0;
  let n2 = 1;
  while (num) {
    // ES6 swap
    [
      n1,
      n2,
    ] = [
      n2,
      (n1 + n2),
    ];
    // const temp = n1 + n2;
    // n1 = n2;
    // n2 = temp;
    num -= 1;
  }
  return n2;
}


function sumOddFibonacciNumbers(num) {
  //  write code here.
  let result = 0;
  for (let i = 0; i <= num; i++) {
    const temp = f(i);
    // const temp = fibonacci(i);
    // const temp = fib(i);
    if(temp <= num && (temp % 2) !== 0) {
      // odd
      result += temp;
      // log(`temp =`, temp)；
    }
  }
  return result;
}


// function sumOddFibonacciNumbers(num) {
//   let num1 = 0;
//   let num2 = 1;
//   let oddFibonacciSum = 1;
//   while (true) {
//     let nextFib = num1 + num2;
//     num1 = num2;
//     num2 = nextFib;
//     if (nextFib > num) {
//       break;
//     }
//     if (nextFib % 2 === 1) {
//       oddFibonacciSum += nextFib;
//     }
//   }
//   return oddFibonacciSum;
// }

// sumOddFibonacciNumbers(4000000);
// 4613732


const test1 = sumOddFibonacciNumbers(10);
// 10
const test2 = sumOddFibonacciNumbers(1000);
// 1785
// const test3 = sumOddFibonacciNumbers(4000000);
// 4613732

log(`\ntest =`,  test1, test1 === 10 ? `✅` : `❌`);
log(`\ntest =`,  test2, test2 === 1785 ? `✅` : `❌`);
// log(`\ntest =`,  test3, test3 === 4613732 ? `✅` : `❌`);

// RangeError: Maximum call stack size exceeded ？？？
