const addBookBtn = document.querySelector('#addBook')
const form = document.querySelector('#form')
const overlay = document.querySelector('.overlay')
const readBtn = document.querySelectorAll('.readBtn')
const readBtnArr = Array.from(readBtn)
const removeBtn = document.querySelectorAll('.remove')
const removeBtnArr = Array.from(removeBtn)
const cards = document.getElementsByClassName('card')
const cardsArr = Array.from(cards)
const container = document.querySelector('.container')

//add boock popup toggle
addBookBtn.addEventListener('click', addBook)
function addBook(e) {
    form.classList.add('form-active')
    overlay.classList.add('active')
}

//toggle overlay 
overlay.addEventListener('click', removeOverlay)
function removeOverlay(e) {
    overlay.classList.remove('active')
    form.classList.remove('form-active')
}

//toggle read button
readBtnArr.forEach(element => {
    element.addEventListener('click', toggleRead)
});
function toggleRead(e) {
    e.target.classList.toggle('read')
}

//remove books
cardsArr.forEach(element => {
    element.addEventListener('click', removeBook)
});
function removeBook(e) {
    if (e.target.classList.contains('remove')) {
        this.classList.add('remove-card')
    }
    for (const card of cards) {
        if (card.classList.contains('remove-card')) {
            card.remove()
        }
    }
}

const library = []

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

