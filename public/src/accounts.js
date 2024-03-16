function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => account1.name.last > account2.name.last? 1: -1);
}

function getTotalNumberOfBorrows(account, books) {
  let totalBooksBorrowed = 0;
  for(let i=0; i<books.length; i++){
    for(let j=0; j<books[i].borrows.length; j++){
      if(books[i].borrows[j].id === account.id){
        totalBooksBorrowed++;
      }
    }
  }
  return totalBooksBorrowed;
}

//helper function to get author
function getAuthorDetails(book, authors){
  return authors.find((author) => author.id === book.authorId)
}

function getBooksPossessedByAccount(account, books, authors) {
  const listOfBorrowedBooks = [];
  
  for(let i=0; i<books.length; i++){
    for(let j=0; j<books[i].borrows.length; j++){
      if(books[i].borrows[j].id === account.id && !books[i].borrows[j].returned)
        listOfBorrowedBooks.push(books[i]);
    }
  }
  let result = listOfBorrowedBooks.map((book) => {
    return { ...book, author: getAuthorDetails(book, authors) };
  });
  
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
