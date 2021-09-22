const Queue = require('./Queue')

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue('John')
queue.enqueue('Wick')
queue.enqueue('Dog')

console.log('toString', queue.toString())
console.log('size', queue.size())

queue.dequeue()
console.log('toString', queue.toString())
