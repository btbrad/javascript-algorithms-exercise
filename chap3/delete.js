let numbers = [0,1,2,3,4,5,6,7,8,9]
console.log(numbers)
numbers.pop()
console.log(numbers)
numbers.splice(3,2)
console.log('splice', numbers)
/**
 * @param 添加、删除的开始索引
 * @param 要删除元素的个数
 * @param 第三个往后，是要添加到数组里的值
 */
numbers.splice(3,0,'a','b')
console.log('splice添加', numbers)


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