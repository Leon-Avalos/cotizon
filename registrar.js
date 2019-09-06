function registrarUsuario() {
    var nombre = document.getElementById('regNombre').value;
    var correo = document.getElementById('regCorreo').value;
    var clave = document.getElementById('regPass').value;
    var confirmar_clave = document.getElementById('regPass2').value;

    if (nombre != '' && correo != '') {
        if (!(clave === confirmar_clave)) {
            alert('Las claves ingresadas no coinciden.')
        } else {
            var usuario = {
                name: nombre,
                email: correo,
                password: clave
            };

            localStorage.setItem(usuario.correo, JSON.stringify(usuario));
            alert('Ha sido registrado exitosamente.')
            console.log('retrievedObject: ', JSON.parse(localStorage.getItem(usuario.correo)));
            limpiarCampos();
        }        
    } else {
        alert('Por favor no deje campos en vacío.')
    }
}

function limpiarCampos() {
    document.getElementById('regNombre').value = '';
    document.getElementById('regCorreo').value = ''
    document.getElementById('regPass').value = ''
    document.getElementById('regPass2').value = ''
}
