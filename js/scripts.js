let inicio = document.getElementById('inicio');
let nosotros = document.getElementById('sobreNosotros');
let contacto = document.getElementById('contacto');
let urlActual = window.location.pathname
let logo = document.getElementById('logo');
let line_1 = document.querySelector('.line-1');
let line_2 = document.querySelector('.line-2');
let line_3 = document.querySelector('.line-3');
let nav_menu = document.querySelector('.nav_menu');
let btnEnviar = document.getElementById('btnEnviar');
let enviar = document.getElementById('enviar');


/* MENU HAMBURGUESA */
document.querySelector('.btn_menu').addEventListener('click', animateBars);
function animateBars() {
    line_1.classList.toggle('active_line-1');
    line_2.classList.toggle('active_line-2');
    line_3.classList.toggle('active_line-3');
    nav_menu.classList.toggle('active_nav')
}
/* FIN MENU */

/* PAGINA ACTUAL */
const paginaActual = (pagina) => {
    if (pagina == "/index.html") {
        inicio.classList.toggle('actual');
    } else if ( pagina == "/nosotros.html"){
        nosotros.classList.toggle('actual')
    } else if (pagina == "/contacto.html"){
        contacto.classList.toggle('actual')
    }
}

window.addEventListener('DOMContentLoaded', ()=>{
    paginaActual(urlActual);
})
/* FIN PAGINA ACTUAL */

/* REEDIRECCION LOGO */
logo.addEventListener('click', ()=>{
    window.location.href = "/index.html"
})
/* FIN REEDIRECCION */


