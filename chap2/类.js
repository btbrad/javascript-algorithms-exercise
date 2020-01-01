// function Book(title, pages, isbn) {
//   this.title = title
//   this.pages = pages
//   this.isbn = isbn
// }
// Book.prototype.printTitle = function() {
//   console.log(this.title)
// }

// let book1 = new Book('简爱', '123', 'ISO-234234242')
// book1.printTitle()

class Book {
  constructor(title, pages, isbn) {
    this.title = title
    this.pages = pages
    this.isbn = isbn
  }
  printTitle() {
    console.log(this.title)
  }
}

let book2 = new Book('算法', '345', 'ISBN-232543465344')
book2.printTitle()

class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn)
    this.technology = technology
  }
  printTechnology() {
    console.log(this.technology)
  }
}

let javaBook = new ITBook('Java算法', '435', 'ISBN-34636363', 'Java')
javaBook.printTitle()
javaBook.printTechnology()