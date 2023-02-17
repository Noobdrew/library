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

addBookBtn.addEventListener('click', addBook)
function addBook(e) {
    form.classList.add('form-active')
    overlay.classList.add('active')
}

overlay.addEventListener('click', removeOverlay)
function removeOverlay(e) {
    overlay.classList.remove('active')
    form.classList.remove('form-active')
}

readBtnArr.forEach(element => {
    element.addEventListener('click', toggleRead)
});
function toggleRead(e) {
    e.target.classList.toggle('read')
}

cardsArr.forEach(element => {
   element.addEventListener('click', removeBook)
});

function removeBook(e) {
    
   if(e.target.classList.contains('remove')){
    this.classList.add('remove-card')
   }
    for (const card of cards) {
        if (card.classList.contains('remove-card')) {
            card.remove()
        }
    }
}