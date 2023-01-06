import { booksData } from '/data/books.js'

const bookContainer = document.getElementById('book-container')


//takes in our generated booksArray and renders them to the page as HTML
function renderBooks(books){
    let booksList = ``

    for (let book of books){
        booksList +=
        `
        <div>
            <p class="book-title">${book.title}</p>
        </div>
        `
        bookContainer.innerHTML = booksList
        console.log(booksList)
    }

    console.log(booksData)
   }


window.addEventListener('DOMContentLoaded', renderBooks(booksData))
