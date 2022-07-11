let inicio = document.getElementById('inicio');
let nosotros = document.getElementById('sobreNosotros');
let contacto = document.getElementById('contacto');

let urlActual = window.location.pathname
console.log(urlActual);

const paginaActual = (pagina) => {
    if (pagina == "/index.html") {
        inicio.classList.toggle('actual');
    } else if ( pagina == "/nosotros.html"){
        nosotros.classList.toggle('actual')
    }
}

window.addEventListener('DOMContentLoaded', ()=>{
    paginaActual(urlActual);
})