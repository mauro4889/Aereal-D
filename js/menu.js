document.querySelector('.btn_menu').addEventListener('click', animateBars);

let line_1 = document.querySelector('.line-1');
let line_2 = document.querySelector('.line-2');
let line_3 = document.querySelector('.line-3');
let nav_menu = document.querySelector('.nav_menu');

function animateBars() {
    line_1.classList.toggle('active_line-1');
    line_2.classList.toggle('active_line-2');
    line_3.classList.toggle('active_line-3');
    nav_menu.classList.toggle('active_nav')
}