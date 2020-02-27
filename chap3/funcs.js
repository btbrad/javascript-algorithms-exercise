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
 *  @@iterator
 */
let iterator = numbers[Symbol.iterator]()
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
for (const n of iterator) {
  console.log('iterator', n)
}

/**
 * entries
 */
let aEntries = numbers.entries() 
for (const n of aEntries) {
  console.log('entries', n)
}

/**
 * keys
 */
const aKeys = numbers.keys()
for (const n of aKeys) {
  console.log(aKeys.next())
  console.log('aKeys', n)
}

/**
 * from
 */
let numbers2 = Array.from(numbers)
console.log('from', numbers2)
let evens = Array.from(numbers, x => x % 2 == 0)
console.log('from', evens)

/**
 * Array.of
 */
let numbers3 = Array.of(1, 2, 3, 4, 5)
console.log('Array.of', numbers3)

/**
 * fill
 */
let numbersCopy = Array.of(1, 2, 3, 4, 5, 6)
// console.log(numbersCopy.fill(0))
// console.log(numbersCopy.fill(0, 2))
console.log(numbersCopy.fill(0, 2, 4))

/**
 * copyWithin
 */
let copyArray = [1, 2, 3, 4, 5, 6]
copyArray.copyWithin(0, 4)
console.log('copyWithin', copyArray)
copyArray = [1, 2, 3, 4, 5, 6]
copyArray.copyWithin(2,4,5)
console.log(copyArray)

/**
 * reverse
 */
console.log('reverse', numbers.reverse())

/**
 * sort
 */
console.log('sort', numbers.sort())
console.log('sort', numbers.sort((a, b) => a - b))
console.log('sort', numbers.sort((a, b)=>{
  if (a > b) {
    return 1
  }
  if (a < b) {
    return -1
  }
  if (a === b) {
    return 0
  }
}))

let persons = [
  {name: 'John', age: 20},
  {name: 'Mike', age: 23},
  {name: 'William', age: 30}
]

const compareFunction = (a, b) => {
  if (a.age < b.age) {
    return -1
  }
  if (a.age > b.age) {
    return 1
  }
  if (a.age === b.age) {
    return 0
  }
}
console.log(persons.sort(compareFunction).map(p => `${p.name}(${p.age})`).join(','))

/**
 * indexOf 和 lastIndexOf
 */
console.log('indexOf', numbers.indexOf(10))
console.log('indexOf', numbers.indexOf(100))

let numbers22 = Array.from(numbers)
numbers22.push(10)
console.log('lastIndexOf', numbers22.lastIndexOf(10))
console.log('lastIndexOf', numbers22.lastIndexOf(100))

/**
 * find  findIndex
 */
function find13(num) {
  return num % 13 === 0
}
console.log('find', numbers.find(num => find13(num)))
console.log('findIndex', numbers.findIndex(num => find13(num)))

/**
 * includes
 */
console.log('includes', numbers.includes(13))
console.log('includes', numbers.includes(130))
console.log('includes', numbers.includes(7,4))

/**
 * toString join
 */
console.log('toString', numbers.toString())
console.log('join', numbers.join('--').split('--').join())