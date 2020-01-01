let name = 'zs'
// let name = 'ls' // SyntaxError: Identifier 'name' has already been declared

var age = '23'
var age = '35' // no error

const jsFramework = {
  name: 'Angular'
}

jsFramework.name = 'vue'

// jsFramework = {
//   name: 'react'
// }
// TypeError: Assignment to constant variable.

console.log(jsFramework)