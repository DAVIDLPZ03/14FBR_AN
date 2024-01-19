// Cuenta regresiva para el aniversario (fecha de ejemplo)
var anniversaryDate = new Date('2024-02-14T00:00:00').getTime();

var countdown = setInterval(function() {
    var now = new Date().getTime();
    var distance = anniversaryDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = '¡Feliz Aniversario!';
    }
}, 1000);

// Manejo de mensajes interactivos
function agregarMensaje() {
    var mensajeInput = document.getElementById('messageInput');
    var mensajeContainer = document.getElementById('mensajeContainer');
    var mensaje = mensajeInput.value;

    if (mensaje.trim() !== '') {
        var nuevoMensaje = document.createElement('p');
        nuevoMensaje.textContent = mensaje;
        mensajeContainer.appendChild(nuevoMensaje);

        // Limpiar el cuadro de texto después de agregar el mensaje
        mensajeInput.value = '';
    }
}
