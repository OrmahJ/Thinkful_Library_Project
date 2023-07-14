const getTotalBooksCount= (books)=> books.length


const getTotalAccountsCount = (accounts) => accounts.length

function getBooksBorrowedCount(books){
  let borrowed = 0;
books.forEach((book)=>(!book.borrows[0].returned) ? borrowed += 1: borrowed += 0)
return borrowed
}


function getMostCommonGenres(books) {
  
 const genreCount = books.reduce((genres, book) => {
  const correctGenre = genres.find((genre) => book.genre === genre.name);
  (!correctGenre) ? genres.push({name: book.genre, count: 1}) : correctGenre.count++;
  return genres;
 }, [])
 return mostFive(genreCount)
  
}

function getMostPopularBooks(books) {
 const popBooks = [];
 const popularity = books.reduce((result, book)=>{
 popBooks.push({name: book.title, count: book.borrows.length})},
 [])
 
return mostFive(popBooks)
}

function getMostPopularAuthors(books, authors) {
 const authorsByPop = [];
 authors.forEach((author)=>{
  let authorCount = {name: `${author.name.first} ${author.name.last}`, count: 0}
  books.forEach((book)=>{
    if (book.authorId === author.id){
    authorCount.count += book.borrows.length;
  }
 })
authorsByPop.push(authorCount)
})
return mostFive(authorsByPop)
}


function mostFive (array){
  //sorts array given from highest count to lowest and creates an array of the top five
  const newArray = [];
  array.sort((varA, varB)=> (varA.count > varB.count) ? -1 : 1)
  array.forEach((item)=>{
    if (newArray.length < 5){
      newArray.push(item)
    }
  })
  return newArray
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
