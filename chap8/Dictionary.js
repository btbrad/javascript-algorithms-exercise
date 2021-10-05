import { defaultToString } from '../util'

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}

export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  // 检测一个键是否存在于字典中
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null
  }

  // 在字典中设置键和值
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }

  // 移除一个值
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }

  // 检索一个值
  get(key) {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  // 返回所有valuePair对象
  keyValues() {
    if (typeof Object.value === 'function') {
      return Object.values(this.table)
    }
    const valuePairs = []
    for (const k in this.table) {
      if (this.hasKey(k)) {
        valuePairs.push(this.table[k])
      }
    }
    return valuePairs
  }

  // 返回所有键名
  keys() {
    if (typeof Array.prototype.map === 'function') {
      return this.keyValues().map((valuePair) => valuePair.key)
    }
    const keys = []
    const valuePairs = this.keyValues()
    for (let i = 0; i < array.length; i++) {
      keys.push(valuePairs[i].key)
    }
    return keys
  }

  // 返回所有值
  values() {
    return this.keyValues().map((valuePair) => valuePair.value)
  }

  // 迭代键值对
  forEach(callbackFn) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }

  // 字典中值的个数
  size() {
    return Object.keys(this.table).length
  }

  // 检验字典是否为空
  isEmpty() {
    return this.size() === 0
  }

  // 清空字典
  clear() {
    this.table = {}
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()}`
    for (let i = 0; i < array.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`
    }
    return objString
  }
}
