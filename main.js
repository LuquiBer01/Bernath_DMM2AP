$(document).ready(function () {
    $('[data-fancybox]').fancybox({
        loop: true,
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
    });
});

function enviarCorreo() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value;

    var destinatario = "lucas.bernath@davinci.com";
    var asunto = "Nuevo formulario de contacto en Entrenarte";
    var mensaje = "Nombre: " + nombre + "\nApellido: " + apellido + "\nEmail: " + email + "\n\nComentario:\n" + comentario;

    var correo = "mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(mensaje);

    window.location.href = correo;
}