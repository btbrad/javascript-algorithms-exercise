import Dictionary from './Dictionary'
import HashTable from './HashTable'

const dic = new Dictionary()
dic.set('Harry', 'harry@email.com')
dic.set('John', 'john@email.com')
dic.set('Jack', 'jack@email.com')

console.log(dic.hasKey('Harry'))
console.log(dic.keys())
console.log(dic.values())

dic.forEach((key, value) => {
  console.log(`${key}'s email is ${value}'`)
})

console.log('-__________________________')
const hash = new HashTable()
hash.put('John', 'john@email.com')
hash.put('Adam', 'adam@email.com')
hash.put('Spencer', 'spencer@email.com')
console.log(hash.hashCode('John'))
console.log(hash.hashCode('Adam'))
console.log(hash.hashCode('Spencer'))
console.log(hash.get('Adam'))
