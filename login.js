function login(){
    correo = document.getElementById('loginCorreo').value;
    clave = document.getElementById('loginClave').value;

    var usuario = localStorage.getItem(correo);
    
    if(usuario != null){
        if(usuario.clave == clave){
            // Login exitoso
            alert('Bienvenido señor ' + usuario.name);
        }
    }
}   