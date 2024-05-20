const menuToggle = document.querySelector('.menu-toggle');
const menuLateral = document.querySelector('.menu-lateral');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuLateral.classList.toggle('active');
});