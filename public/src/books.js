function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  for(let i=0; i<accounts.length; i++){
    for(let j=0; j<book.borrows.length; j++){
      if(accounts[i].id === book.borrows[j].id){
        const returnedStatus = book.borrows[j].returned;
        result.push({...accounts[i], returned: returnedStatus});
      }
    }
  }
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
