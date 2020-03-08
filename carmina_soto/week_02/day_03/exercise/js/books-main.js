//
// ## The Book List
//
// Keep track of which books you read and which books you want to read!
//
// - Create a webpage with an h1 of "My Book List".
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Copy this array of books:
// ```javascript
// var books = [
//   {title: 'The Design of EveryDay Things',
//    author: 'Don Norman',
//    alreadyRead: false
//   },
//   {title: 'The Most Human Human',
//   author: 'Brian Christian',
//   alreadyRead: true
//   }];
// ```
// - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// - Bonus: Use a ul and li to display the books.
// - Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// - Bonus: Change the style of the book depending on whether you have read it or not.

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

const ulTag = document.createElement('ul');
for(let i = 0; i < books.length; i++){
  const book = books[i];
  const bookInfo = `${book.title} by ${book.author}`;
  const li = document.createElement('li');
  li.innerHTML = bookInfo;
  if (book.alreadyRead){
    li.className = 'read';
  }
  ulTag.appendChild(li);
};
document.body.appendChild(ulTag);
