let nombreDeUsuario = document.getElementById('inpNombre');


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