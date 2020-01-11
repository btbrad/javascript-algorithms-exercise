let numbers = [0,1,2,3,4,5,6,7,8,9]
numbers[numbers.length] = 10
console.log(numbers)
numbers.push(11)
console.log(numbers)
numbers.push(12, 13)
console.log(numbers)

Array.prototype.insertFirstPosition = function(item) {
  for(let i = this.length; i >= 0; i--){
    this[i] = this[i-1]
  }
  this[0] = item
}
numbers.insertFirstPosition(-1)
console.log(numbers)
numbers.unshift(-2)
console.log(numbers)
numbers.unshift(-3, -4)
console.log(numbers)