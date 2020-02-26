let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// function isEven(x) {
//   return x % 2 === 0
// }

const isEven = x => x%2 === 0

/**
 *  every
 */

const res = numbers.every(item=>isEven(item))
console.log('every', res)

/**
 * some
 */
const res1 = numbers.some(isEven)
console.log('some', res1)

/**
 * forEach
 */
numbers.forEach(item => {
  console.log('forEach', isEven(item))
})

/**
 * map
 */
const mapRes = numbers.map(isEven)
console.log('map', mapRes)

/**
 * filter
 */
const evenNumbers = numbers.filter(isEven)
console.log('filter', evenNumbers)

/**
 * reduce
 */
const sum = numbers.reduce((previousValue,currentValue)=>previousValue+currentValue)
console.log('reduce', sum)

/**
 * for...of
 */
for (const n of numbers) {
  console.log('for..of..', isEven(n))
}

/**
 * 
 */