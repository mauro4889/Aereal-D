let inicio = document.getElementById('inicio');
let nosotros = document.getElementById('sobreNosotros');
let contacto = document.getElementById('contacto');
let mgBosque = document.getElementById('mgBosque');
let mgMar = document.getElementById('mgMar');
let mgEventos = document.getElementById('mgEventos');
let contadorBosque = document.getElementById('contadorBosque');
let contadorMar = document.getElementById('contadorMar');
let contadorEventos = document.getElementById('contadorEvento');
let valorBosque = 0;
let valorMar = 0;
let valorEvento = 0;
let valor = { bosque: 0, mar: 0, evento: 0 };

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

/* PAGINA ACTUAL */

let urlActual = window.location.pathname
console.log(urlActual.pathname);

const paginaActual = (pagina) => {
    if (pagina == "/index.html") {
        inicio.classList.toggle('actual');
    }
}

/*FIN PAGINA ACTUAL */

/*CONTADOR MG */

mgBosque.addEventListener('click', () => {
    valorBosque = valor.bosque + 1;
    valor.bosque = valorBosque;
    contadorBosque.textContent = valorBosque;
    localStorage.setItem('contador', JSON.stringify(valor))
})



mgMar.addEventListener('click', () => {
    valorMar = valor.mar + 1;
    valor.mar = valorMar;
    contadorMar.textContent = valorMar;
    localStorage.setItem('contador', JSON.stringify(valor))
})

mgEventos.addEventListener('click', () => {
    valorEvento = valor.evento + 1;
    valor.evento = valorEvento;
    contadorEventos.textContent = valorEvento;
    localStorage.setItem('contador', JSON.stringify(valor))
})




window.addEventListener('DOMContentLoaded', (e) => {
    paginaActual(urlActual);
    let valorData = JSON.parse(localStorage.getItem('contador'));
    valor.bosque = valorData.bosque;
    valor.mar = valorData.mar;
    valor.evento = valorData.evento;
    contadorBosque.textContent = valor.bosque;
    contadorMar.textContent = valor.mar;
    contadorEventos.textContent = valor.evento;
})