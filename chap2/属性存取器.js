class Person {
  constructor(name) {
    this._name = name
  }
  get name() {
    return this._name
  }
  set name(value) {
    this._name = value
  }
}

let child = new Person('Mike')
console.log(child.name)
child.name = 'John'
console.log(child.name)
child._name = 'Eden'
console.log(child.name)