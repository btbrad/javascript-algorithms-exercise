import Set from './Set'

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

const setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)

// console.log(set)
// console.log(set.size())
// console.log(set.values())
console.log(setA.union(setB))
console.log(setA.intersection(setB))
console.log(setA.difference(setB))
