// 斐波拉契数列
// F0 = 0 F1 = 1 Fn = Fn-1 + Fn-2
// 0 1 1 2 3 5 8 13 21 34 ...

/**
 * @returns {Number} Fn
 * @param {Number} n 
 */

function fib(n) {
    if (n == 0) return 0
    if (n == 1) return 1
    return fib(n-1) + fib(n-2)
}

console.log(fib(6))