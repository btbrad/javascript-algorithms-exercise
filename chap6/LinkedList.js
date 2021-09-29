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
        // for (let i = 0; i < index; i++) {
        //   previous = current
        //   current = current.next
        // }
        previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }

  // 循环迭代链表直到目标位置
  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head
      for (let i = 0; i <= index; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  // 在任意位置插入元素
  insert(element, index) {
    if (index >= 0 && index < this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  // 返回一个元素的位置
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  // 从链表中移除元素
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 链表元素个数
  size() {
    return this.count
  }

  // 链表是否为空
  isEmpty() {
    return this.size() === 0
  }

  // 获取head
  getHead() {
    return this.head
  }
  // 把链表转换为字符串
  toString() {
    if (this.head === null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current !== null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}
