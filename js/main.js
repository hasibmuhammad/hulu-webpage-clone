const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

// Open Modal Function
const openModal = () => {
    modal.style.display = 'block';
}

// Close Modal Function
const closeModal = () => {
    modal.style.display = 'none';
}

// Outside Click Function
const outsideClick =(e) => {
    if( e.target === modal ) {
        closeModal();
    }
}

// Escape Button Clsoe Modal Function
const escCloseModal = (e) => {
    if( e.keyCode === 27 ) {
        closeModal();
    }
}

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
window.addEventListener('keydown', escCloseModal);