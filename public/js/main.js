const addFieldBtn = document.querySelector('.add-field-btn');
const fieldForm = document.querySelector('.field-form');
const closeBookForm = document.querySelector('.btn-close');
const addBookForm = document.querySelector('.add-book-form');
const addBookBtn = document.querySelector('.add-book-btn');

addFieldBtn.addEventListener('click', () => {
    fieldForm.classList.toggle('field-form-vis');
})

addBookBtn.addEventListener('click', () => {
    addBookForm.style.visibility = 'visible';
})

closeBookForm.addEventListener('click', () => {
    addBookForm.style.visibility = 'hidden';
})

const displayFieldForm = () => {
    addBookForm.style.visibility = 'hidden';
}