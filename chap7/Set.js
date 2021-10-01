export default class Set {
  constructor() {
    this.items = {}
  }

  // 检验某个元素是否存在
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  // 向集合中添加元素
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  clear() {
    this.items = {}
  }

  size() {
    if (typeof Object.keys === 'function') {
      return Object.keys(this.items).length
    }
    let count = 0
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key)) {
        count++
      }
    }
    return count
  }

  values() {
    if (typeof Object.values === 'function') {
      return Object.values(this.items)
    }
    let values = []
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key)
      }
    }
    return values
  }
}
