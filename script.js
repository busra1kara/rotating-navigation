const menuIcon = document.querySelector('.menu-icon');
const menuCancelIcon = document.querySelector('.cancel-icon');
const main = document.querySelector('.main');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menuIcon.style.display = 'none';
    menuCancelIcon.style.display = 'block';
    main.classList.add('active');
    menu.classList.add('show-menu');
});

menuCancelIcon.addEventListener('click', () => {
    menuCancelIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    main.classList.remove('active');
    menu.classList.remove('show-menu');
});