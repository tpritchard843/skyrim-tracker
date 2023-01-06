import { booksData } from '/data/books.js'

const bookContainer = document.getElementById('book-container')

function getBooksArray(books) {
    const booksArray = []
    for (let book of books){
        booksArray.push(book)
    }
    //books.forEach(function(book) {
        //booksArray.push(book)
    //})
    return booksArray
}

function renderBooks(books){
    let booksList = ``
    const skyrimBooks = getBooksArray(books)

    for (let book of skyrimBooks) {
        booksList += `
        <div>
            <p class="book-title>${book.title}</p>
        </div>
        `
    }
    bookContainer.innerHTML = booksList
}

renderBooks(booksData)
