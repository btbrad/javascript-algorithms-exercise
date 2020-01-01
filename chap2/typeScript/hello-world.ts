let myName = 'bt'
myName = '10'

/**
 * 接口的第一种用法
 */

interface Person {
  name: string
  age: number
}

function printName(person: Person) {
  console.log(person.name)
}

const mike = {name: 'mike', age: 20}
const jane = {name: 'jane', age: 30, phone:'1234567899911'}

printName(mike)
printName(jane)

/**
 * 接口第二种用法
 */
interface Comparable {
  compareTo(b): number
}

class myObj implements Comparable {
  age: number
  compareTo(b): number {
    if (this.age === b.age) {
      return 0
    }
    return this.age > b.age ? 1 : -1
  }
}

/**
 * 泛型
 */
interface ComparableTwo<T> {
  compareTo(b:T): number
}

class myObjTwo implements ComparableTwo<myObjTwo> {
  age: number
  compareTo(b:myObjTwo): number {
    if (this.age === b.age) {
      return 0
    }
    return this.age > b.age ? 1 : -1
  }
}
