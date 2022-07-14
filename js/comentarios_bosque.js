let btnComentario = document.getElementById('btnComentario');
let mostrarComentario = document.getElementById('mostrarComentario');
const templateCard = document.querySelector('#templateCard').content;
const fragment = document.createDocumentFragment();
let data=[];

let agregarComentario = ()=>{
    let nombreComentario = document.querySelector('#nombreComentario').value;
    let textoComentario = document.getElementById('textoGaleria').value
    templateCard.querySelector('h4').textContent = `De: ${nombreComentario}`;
    templateCard.querySelector('p').textContent = textoComentario;
    const clone = document.importNode(templateCard, true);
    fragment.appendChild(clone);
    mostrarComentario.appendChild(fragment);
}
/* AGREGAR COMENTARIO */
btnComentario.addEventListener('click', (e)=>{
    let nombreComentario = document.querySelector('#nombreComentario');
    let textoComentario = document.getElementById('textoGaleria');
    if (nombreComentario.value == ""){
        alert("Por favor, escribe tu nombre de usuario.");
        nombreComentario.focus();
        return false;
    }
    if (textoComentario.value == ""){
        alert("Por favor, escriba un comentario");
        textoComentario.focus();
        return false;
    } else {
        agregarComentario();
        data.push({nombre:nombreComentario.value, comentario:textoComentario.value});
        localStorage.setItem('comentarios_bosque', JSON.stringify(data));
        nombreComentario.value = "";
        textoComentario.value = "";
    };
    
})
/* FIN AGREGAR COMENTARIO */

/* CARGAR COMENTARIOS */
let cargarComentarios = (datos)=>{
    datos.forEach(el => {
    let nombreComentario = el.nombre;
    let textoComentario = el.comentario;
    templateCard.querySelector('h4').textContent = `De: ${nombreComentario}`;
    templateCard.querySelector('p').textContent = textoComentario;
    const clone = document.importNode(templateCard, true);
    fragment.appendChild(clone);
    mostrarComentario.appendChild(fragment);
    });
}
window.addEventListener('DOMContentLoaded', ()=>{
    let cargaData = JSON.parse(localStorage.getItem('comentarios_bosque'));
    cargarComentarios(cargaData);
    data = cargaData;
})