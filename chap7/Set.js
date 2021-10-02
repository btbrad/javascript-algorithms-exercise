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

  // 并集
  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach((value) => unionSet.add(value))
    otherSet.values().forEach((value) => unionSet.add(value))
    return unionSet
  }

  // 交集
  intersection(otherSet) {
    const intersection = new Set()
    const values = this.values()
    const otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues
    if (biggerSet.length < smallerSet.length) {
      biggerSet = otherValues
      smallerSet = values
    }
    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersection.add(value)
      }
    })
    return intersection
  }

  // 差集
  difference(otherSet) {
    const differenceSet = new Set()
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  // 子集
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSubset = true
    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }
}
