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
/* FIN CONTADOR */

window.addEventListener('DOMContentLoaded', (e) => {
    let valorData = JSON.parse(localStorage.getItem('contador'));
    valor.bosque = valorData.bosque;
    valor.mar = valorData.mar;
    valor.evento = valorData.evento;
    contadorBosque.textContent = valor.bosque;
    contadorMar.textContent = valor.mar;
    contadorEventos.textContent = valor.evento;
})