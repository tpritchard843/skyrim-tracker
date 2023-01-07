import { booksData } from '/data/books.js'

const bookContainer = document.getElementById('book-container')


//takes in our generated booksArray and renders them to the page as HTML
function renderBooks(books){

    for (let book of books){

        const bookDiv = document.createElement("div")
        bookDiv.innerHTML += `<p class="book-title">${book.title}</p>`

        bookContainer.append(bookDiv)

    }

    console.log(booksData)
   }


window.addEventListener('DOMContentLoaded', renderBooks(booksData))
