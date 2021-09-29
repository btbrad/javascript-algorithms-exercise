import { defaultEquals } from '../util'
import { Node } from '../modules/linked-list-modules'

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  // 向链表尾部添加一个新元素
  push(element) {
    const node = new Node(element)
    if (this.head === null || this.head === undefined) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== null && current.next !== undefined) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  // 从链表中移除元素
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
        // 移除第一项
        this.head = current.next
      } else {
        let previous = null
        for (let i = 0; i < index; i++) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }
}
