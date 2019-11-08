i = 0;
function registrarMensaje() {
    nombre = document.getElementById('nombreContacto').value;
    correo = document.getElementById('correoContacto').value;
    mensaje = document.getElementById('mensajeContacto').value;

    var mensaje = {
        msjNombre: nombre,
        msjCorreo: correo,
        msj: mensaje,
        id: i, // incremental number to reach any message
        status: 0 // 0 means unanswered - 1 means answered 
    };

    localStorage.setItem(mensaje.id, JSON.stringify(mensaje));

    i++;

    limpiarCamposContacto();

    console.log('retrievedObject: ', JSON.parse(localStorage.getItem('0')));

}

function limpiarCamposContacto() {
    document.getElementById('nombreContacto').value = '';
    document.getElementById('correoContacto').value = '';
    document.getElementById('mensajeContacto').value = '';
}