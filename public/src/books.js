function findAuthorById(authors, id) {
  return authors.find((author)=> author.id=== id)
}

function findBookById(books, id) {
  return books.find((book)=>book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter((book)=>book.borrows.some((borrow) => (!borrow.returned)));
  const returnedBooks = books.filter((book)=> book.borrows.every((borrow)=> borrow.returned));
 
  const partedBooks = [[...borrowedBooks], [...returnedBooks]]
  return partedBooks
}


function getBorrowersForBook({borrows}, accounts) {
const borrowers = borrows.map(({id, returned})=>{
  const account = accounts.find((account)=>account.id === id);
  return {returned, ...account}
})
const topTen = [];
borrowers.forEach((borrower)=>{
  if (topTen.length < 10){
    topTen.push(borrower)
  }
})
return topTen
}
  




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
