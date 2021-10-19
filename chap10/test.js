import BinarySearchTree from './BinarySearchTree'

const searchTree = new BinarySearchTree()
searchTree.insert(11)
searchTree.insert(7)
searchTree.insert(15)
searchTree.insert(9)
searchTree.insert(18)

console.log(searchTree)

searchTree.inOrderTraverse((k) => console.log(k))
searchTree.preOrderTraverse((k) => console.log(k))
searchTree.postOrderTraverse((k) => console.log(k))
console.log(searchTree.min())
console.log(searchTree.max())
