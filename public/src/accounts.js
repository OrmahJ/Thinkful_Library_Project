const findAccountById = (accounts, id) =>
accounts.find((account) => account.id === id);

const sortAccountsByLastName = (accounts) =>
accounts.sort((varA, varB) => varA.name.last < varB.name.last ? -1 : 1)

const getTotalNumberOfBorrows =(account, books)=>{
  let number = 0;
  for (let item in books){
    const book = books[item];
    const borrow = book.borrows;
    borrow.forEach((borrow)=> (borrow.id === account.id)? number +=1: number +=0)
  }
return number
}

function getBooksPossessedByAccount(account, books, authors){
const accountBooks = [];
books.forEach((book) => {
  if (book.borrows.find((borrow) => (borrow.id === account.id && borrow.returned === false))){
    accountBooks.push(book);
  }
})
accountBooks.forEach(book=>{
  book['author'] = authors.find((author)=>author.id === book.authorId)
})
return accountBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
