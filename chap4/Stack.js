class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  /**
   * 添加元素，一次只能添加一个
   * @param {*} element 
   */

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  /**
   * 栈的大小
   */
  size() {
    return this.count
  }

  /**
   * 栈是否为空
   */
  isEmpty() {
    return this.count === 0
  }

  /**
   * 从栈中弹出元素
   */
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  /**
   * 查看栈顶元素
   */
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this,items[this.count - 1]
  }

  /**
   * 清空栈
   */
  clear() {
    this.count = 0
    this.items = {}
  }

  /**
   * 转换为字符串输出
   */
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let index = 1; index < this.count; index++) {
      objString = `${objString},${this.items[index]}`      
    }
    return objString
  }
}