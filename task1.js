class Book {
    constructor(title, author, isbn) {
      let _title = title;  
      let _author = author;  
      let _isbn = isbn;  
      let _isBorrowed = false;
  
      this.getTitle = () => _title;
      this.getAuthor = () => _author;
      this.getIsbn = () => _isbn;
      this.isBorrowed = () => _isBorrowed;
  
      this.borrow = () => {
        if (!_isBorrowed) {
          _isBorrowed = true;
          return true;
        }
        return false;
      };
  
      this.returnBook = () => {
        if (_isBorrowed) {
          _isBorrowed = false;
          return true;
        }
        return false;
      };
    }
  
    description() {
      return `Title: ${this.getTitle()}, Author: ${this.getAuthor()}, ISBN: ${this.getIsbn()}`;
    }
  }
  
  class Novel extends Book {
    constructor(title, author, isbn, genre) {
      super(title, author, isbn);
      let _genre = genre;
  
      this.getGenre = () => _genre;
    }
  
    description() {
      return `Novel - ${super.description()}, Genre: ${this.getGenre()}`;
    }
  }
  
  class Magazine extends Book {
    constructor(title, author, isbn, issue) {
      super(title, author, isbn);
      let _issue = issue;
  
      this.getIssue = () => _issue;
    }
  
    description() {
      return `Magazine - ${super.description()}, Issue: ${this.getIssue()}`;
    }
  }
  
  class ResearchPaper extends Book {
    constructor(title, author, isbn, field) {
      super(title, author, isbn);
      let _field = field;
  
      this.getField = () => _field;
    }
  
    description() {
      return `Research Paper - ${super.description()}, Field: ${this.getField()}`;
    }
  }
  
  class User {
    constructor(name, userId) {
      let _name = name;
      let _userId = userId;
      let _borrowedBooks = [];
  
      this.getName = () => _name;
      this.getUserId = () => _userId;
  
      this.borrowBook = (book) => {
        if (book.borrow()) {
          _borrowedBooks.push(book);
          return true;
        }
        return false;
      };
  
      this.returnBook = (book) => {
        const index = _borrowedBooks.indexOf(book);
        if (index !== -1 && book.returnBook()) {
          _borrowedBooks.splice(index, 1);
          return true;
        }
        return false;
      };
  
      this.hasBorrowedBook = (bookTitle) => {
        return _borrowedBooks.some(book => book.getTitle() === bookTitle);
      };
  
      this.getBorrowedBooks = () => _borrowedBooks.map(book => book.description());
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
      this.users = {};
    }
  
    addBook(book) {
      this.books.push(book);
      console.log(`Book added: ${book.description()}`);
    }
  
    addUser(user) {
      if (!this.users[user.getUserId()]) {
        this.users[user.getUserId()] = user;
        console.log(`User added: ${user.getName()}`);
      } else {
        console.log("User already exists.");
      }
    }
  
    borrowBook(userId, bookTitle) {
      const user = this.users[userId];
      if (!user) {
        console.log("User not found.");
        return;
      }
  
      const book = this.books.find(b => b.getTitle() === bookTitle && !b.isBorrowed());
      if (!book) {
        console.log(`Book '${bookTitle}' is not available.`);
        return;
      }
  
      if (user.borrowBook(book)) {
        console.log(`${user.getName()} borrowed '${bookTitle}'`);
      } else {
        console.log(`Failed to borrow '${bookTitle}'.`);
      }
    }
  
    returnBook(userId, bookTitle) {
      const user = this.users[userId];
      if (!user) {
        console.log("User not found.");
        return;
      }
  
      const book = this.books.find(b => b.getTitle() === bookTitle && user.hasBorrowedBook(bookTitle));
      if (book && user.returnBook(book)) {
        console.log(`${user.getName()} returned '${bookTitle}'`);
      } else {
        console.log(`${user.getName()} does not have '${bookTitle}' to return.`);
      }
    }
  
    listBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        const status = book.isBorrowed() ? "Borrowed" : "Available";
        console.log(`${book.description()} - Status: ${status}`); 
      });
    }
  }
  
  // Sample usage
  const library = new Library();
  
  // Adding books
  const book1 = new Novel("Diary of Kene", "Kenechukwu", "1111", "Drama");
  const book2 = new Magazine("Yam Farming Monthly", "Agro Experts", "2222", "September 2024");
  const book3 = new ResearchPaper("ICT Innovations", "Tom Tech", "3333", "Information Technology");
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  // Adding users
  const user1 = new User("Jane", "JANE");
  const user2 = new User("Tom", "tom");
  
  library.addUser(user1);
  library.addUser(user2);
  
  // Borrowing books
  library.borrowBook("JANE", "Yam Farming Monthly");
  library.borrowBook("tom", "ICT Innovations");
  
  // Listing all books
  library.listBooks();
  
  // Returning books
  library.returnBook("tom", "ICT Innovations");
  library.listBooks();

  