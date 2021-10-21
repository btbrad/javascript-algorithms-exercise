import { bubbleSort } from './bubbleSort'
import { selectionSort } from './selectionSort'

const array = [5, 4, 3, 2, 1]
console.log(bubbleSort(array).join(','))
console.log(selectionSort(array).join(','))
