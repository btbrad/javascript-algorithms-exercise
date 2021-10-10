import { factorialIterator, factorial } from './factorial'
import { fibonacciIterator, fibonacci, fibonacciMemoization } from './fibonacci'

console.time('fa1')
console.log(factorialIterator(20))
console.timeEnd('fa1')

console.time('fa2')
console.log(factorial(20))
console.timeEnd('fa2')

console.log('----------------------------')

console.time('f3')
const result1 = fibonacciIterator(20)
console.log(result1)
console.timeEnd('f3')

console.time('f1')
const result2 = fibonacci(20)
console.log(result2)
console.timeEnd('f1')

console.time('f2')
const result3 = fibonacciMemoization(20)
console.log(result3)
console.timeEnd('f2')
