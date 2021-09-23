const Queue = require('./Queue')

function hotPotato(elementsList, num) {
  const queue = new Queue()
  const eliminatedList = []

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminatedList.push(queue.dequeue())
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  }
}

const names = ['Neymar', 'Harzad', 'Gotze', 'Salah', 'Xaqiri']
const result = hotPotato(names, 7)
result.eliminated.forEach(function (name) {
  console.log(`${name}在击鼓传花游戏中被淘汰`)
})
console.log(result)
console.log(`胜利者： ${result.winner}`)
