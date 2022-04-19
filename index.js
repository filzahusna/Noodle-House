const burger = document.getElementById('burger');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (burger) {
    burger.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}