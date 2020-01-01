export default class Book {
  constructor(title, price) {
    this.title = title
    this.price = price
  }
  printTitle() {
    console.log(`书名:${this.title} 价格:${this.price}`)
  }
}