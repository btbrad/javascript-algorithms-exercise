function resetParameterFunction (x, y, ...a) {
  return (x+y) * a.length
}

console.log(resetParameterFunction(1, 2, 'hello', true, 7))

function resetParameterFunction2 (x,y) {
  return (x+y)* Array.prototype.slice.apply(arguments, [2]).length
}

console.log(resetParameterFunction2(1, 2, 'hello', true, 7))

let obj = {name:'bt', age: '23'}
let arr = [1,2,3]

// console.log(...obj)
console.log(...arr)
/**
 * 展开运算符只能用于数组
 */
