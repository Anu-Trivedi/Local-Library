function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedCount = 0;
  for(let i=0; i<books.length; i++)
    if(!books[i].borrows[0].returned)
      borrowedCount += 1;
  return borrowedCount;
}

//helper function to return top 5
function topFive(array){
  let result = array.sort((itemA, itemB) => (itemA.count < itemB.count ? 1: -1)).slice(0,5);
  return result;
}

function getMostCommonGenres(books) {
  //An array to hold all genres [{name:"genre-name", count: countofgenres}]
  let listOfCommonGenres = [];
  
  for(let book of books){
    const genreDetails = listOfCommonGenres.find((genreItem) => genreItem.name === book.genre);
    
    if(genreDetails)
      genreDetails.count++;
    else
      listOfCommonGenres.push({name: book.genre, count: 1});
  }
  return topFive(listOfCommonGenres);
}

function getMostPopularBooks(books) {
  const listOfPopularBooks = [];
  
  for(let book of books){
    const popularBookDetails = listOfPopularBooks.find((popularBook) => popularBook.name === book.title);
    
    if(popularBookDetails)
      popularBookDetails.count++;
    else
      listOfPopularBooks.push({name: book.title, count: book.borrows.length});
  }
  return topFive(listOfPopularBooks);
}

function getMostPopularAuthors(books, authors) {
  const listOfPopularAuthors = [];
  
  for(let author of authors){
    const fullName = `${author.name.first} ${author.name.last}`;
    let countOfCheckOuts = 0;
    
    for(let book of books){
      if(book.authorId === author.id){
         countOfCheckOuts += book.borrows.length;
      }
    }
    
    listOfPopularAuthors.push({name: fullName, count: countOfCheckOuts})
  }
  
  return topFive(listOfPopularAuthors);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
