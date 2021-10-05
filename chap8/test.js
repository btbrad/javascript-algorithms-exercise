import Dictionary from './Dictionary'

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
