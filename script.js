const addBookBtn = document.querySelector('#addBook')
const form = document.querySelector('#form')
const overlay = document.querySelector('.overlay')
let readBtn = document.querySelectorAll('.readBtn')
let readBtnArr = Array.from(readBtn)
let removeBtn = document.querySelectorAll('.remove')
let removeBtnArr = Array.from(removeBtn)
let cards = document.getElementsByClassName('card')
let cardsArr = Array.from(cards)
const container = document.querySelector('.container')

//boock popup toggle
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
    e.target.classList.toggle('true')
    if (e.target.classList.contains('true')) {
        library[parseInt(e.target.dataset.index)].read = true
    } else {
        library[parseInt(e.target.dataset.index)].read = false
    }
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
            delete library[parseInt(card.dataset.index)]

        }
    }
}


const library = []
const submit = document.getElementById('submit')
let bookCount = 0
let title = document.querySelector('#title')
let author = document.querySelector('#authour')
let pages = document.querySelector('#pages')
let readCheck = document.querySelector('#read')


class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}
//store books into library array 
function storeBook(e) {
    if (title.value && author.value == '') {
        return
    }
    e.preventDefault();
    library[bookCount] = new Book(title.value, author.value, pages.value, readCheck.checked)
    
    //create card
    createCard()
    bookCount++
    removePopup()
    getDomElements()
   


}

submit.addEventListener('click', storeBook)

//create card function
function createCard() {
    const element = document.createElement('div')
    element.classList.add('card')
    element.dataset.index = bookCount
    element.innerHTML = `
    <div class="title">${title.value}</div>
    <div class="authour">${author.value}</div>
    <div class="pages">${pages.value}</div>
    <button class="not-read readBtn ${readCheck.checked}" data-index='${bookCount}'></button>
    <button class="remove">Remove book</button>
    </div>`

    document.querySelector('.container').appendChild(element)
}

//select all new created dom elements
function getDomElements() {
    readBtn = document.querySelectorAll('.readBtn')
    readBtnArr = Array.from(readBtn)
    removeBtn = document.querySelectorAll('.remove')
    removeBtnArr = Array.from(removeBtn)
    cards = document.getElementsByClassName('card')
    cardsArr = Array.from(cards)
    readBtnArr.forEach(element => {
        element.addEventListener('click', toggleRead)
    });
    cardsArr.forEach(element => {
        element.addEventListener('click', removeBook)
    });
}

function removePopup() {
    title.value = ''
    author.value = ''
    pages.value = ''
    readCheck.checked = false
    overlay.classList.remove('active')
    form.classList.remove('form-active')
}