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
let nombreDeUsuario = document.getElementById('inpNombre');
    

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
    console.log(urlActual)
})
/* FIN PAGINA ACTUAL */

/* REEDIRECCION LOGO */
logo.addEventListener('click', ()=>{
    window.location.href = "/index.html"
})
/* FIN REEDIRECCION */

/* VALIDACION FORMULARIO */
const validación = (e) => {
    let direcciónEmail = document.getElementById('inpEmail');
    let asunto = document.getElementById('inpAsunto');
    let textoContacto = document.getElementById('textoContacto');
    if (nombreDeUsuario.value === "") {
      alert("Por favor, escribe tu nombre de usuario.");
      nombreDeUsuario.focus();
      return false;
    }
    if (direcciónEmail.value === "") {
      alert("Por favor, escribe tu correo electrónico");
      direcciónEmail.focus();
      return false;
    }
    if (asunto.value === "") {
        alert("Por favor, escribe en asunto");
        asunto.focus();
        return false;
    }
    if (textoContacto.value === "") {
        alert("Por favor, escribe lo que te interesa saber");
        textoContacto.focus();
        return false;
    }
    nombreDeUsuario.value="";
    direcciónEmail.value="";
    asunto.value=""
    textoContacto.value="";
    window.alert("Su mensaje se mando correctamente")
    return true;
  }

enviar.addEventListener('submit',(e)=> {
    e.preventDefault();
    validación(e);
    
});
