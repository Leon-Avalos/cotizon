/**CODIGO PARA LA VENTANA DE SIGN-IN */
/**VARIABLES QUE SE VAN A USAR PARA LA TOMA DE DATOS */
var btnAbrirPopup = document.getElementById('sign-in'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
/**SE CREA FUNCION PARA EL BOTON ABRIR POPUP */
btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('active');/**pone al ovelay en modo activo */
    popup.classList.add('active');/**pone el popup en modo activo*/
});
/**SE CREA LA FUNCION PARA EL BOTON CERRAR */
btnCerrarPopup.addEventListener('click', function () {
    overlay.classList.remove('active'); /**quita el modo activo de overlay */
    popup.classList.remove('active');/**quita el modo activo del popup */
});

/**CODIGO PARA LA VENTANA DE SIGN-UP */
/**VARIABLES QUE SE VAN A USAR PARA LA TOMA DE DATOS */
var btnAbrirPopupSignUp = document.getElementById('sign-up'),
    overlaySignUp = document.getElementById('overlay-sign-up'),
    popupSignUp = document.getElementById('popup-sign-up'),
    btnCerrarPopupSignUp = document.getElementById('btn-cerrar-popup-sign-up');
/**SE CREA FUNCION PARA EL BOTON ABRIR POPUP */
btnAbrirPopupSignUp.addEventListener('click', function () {
    overlaySignUp.classList.add('active');/**pone al ovelay en modo activo */
    popupSignUp.classList.add('active');/**pone el popup en modo activo*/
});
/**SE CREA LA FUNCION PARA EL BOTON CERRAR */
btnCerrarPopupSignUp.addEventListener('click', function () {
    overlaySignUp.classList.remove('active'); /**quita el modo activo de overlay */
    popupSignUp.classList.remove('active');/**quita el modo activo del popup */
});