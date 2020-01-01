import { circleArea, squareArea } from './CalcArea.js'
import Book from './Book.js'

console.log(circleArea(2))
console.log(squareArea(2))

let b = new Book('算法', 100)
b.printTitle()