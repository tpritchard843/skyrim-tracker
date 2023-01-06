import { booksData } from '/data/books.js'

const bookContainer = document.getElementById('book-container')

//function to iterate over our booksData array and return us an array of Books as objects
function getBooksArray(books) {
    const booksArray = []
    for (let book of books){
        booksArray.push(book)
    }
    
    return booksArray
}


//takes in our generated booksArray and renders them to the page as HTML
function renderBooks(books){
    let booksList = ``
    const skyrimBooks = getBooksArray(books)

    for (let book of skyrimBooks) {
        booksList +=
        `
        <div>
            <p class="book-title>${book.title}</p>
        </div>
        `
   }
    bookContainer.innerHTML = booksList

    console.log(skyrimBooks)
    console.log(booksList)
}

renderBooks(booksData)
