let numbers = [0,1,2,3,4,5,6,7,8,9]
console.log(numbers)
numbers.pop()
console.log(numbers)

/**
 * 删除第一个元素
 */



Array.prototype.removeFirstElement = function () {
  for(let i = 0; i<this.length; i++) {
    this[i] = this[i+1]
  }
  let newArr = []
  for(let i = 0; i<this.length;i++) {
    if (this[i] !== undefined) {
      newArr.push(this[i])
    } 
  }
  return newArr
}
numbers = numbers.removeFirstElement()
console.log(numbers)

numbers.shift()
console.log(numbers)