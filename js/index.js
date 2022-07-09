let inicio = document.getElementById('inicio');
let nosotros = document.getElementById('sobreNosotros');
let contacto = document.getElementById('contacto');

/* MENU HAMBURGUESA */
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
/* FIN MENU HAMBURGUESA */

let urlActual = window.location.pathname
console.log(urlActual.pathname);

const paginaActual = (pagina) => {
    if (pagina == "/index.html") {
        inicio.classList.toggle('actual');
    }
}

window.addEventListener('DOMContentLoaded', (e) => {
    paginaActual(urlActual);
    checkPosition();
})