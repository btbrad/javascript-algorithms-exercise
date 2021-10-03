/**
 * ES2015的Set类支持向构造函数传入一个数组来初始化集合的运算，
 * 那么我们对Set集合使用扩展运算符会将它的值转化为一个数组
 */

const setA = new Set([1, 2, 3])
const setB = new Set([3, 4, 5])

// 交集
const unionAB = new Set([...setA, ...setB])
console.log(unionAB)

// 差集
const difference = new Set([...setA].filter((v) => !setB.has(v)))
console.log(difference)
