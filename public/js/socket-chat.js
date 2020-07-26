var socket = io();

var params = new URLSearchParams( window.location.search);

if( !params.has('nombre') || !params.has('sala') ){
    window.location = 'index.html';
    throw new Error('El nombre es necesario');
}

var usuario = {
    nombre: params.get('nombre'),
    sala  : params.get('sala')
};
socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, function( resp ) {
        console.log('Usuarios conectados', resp);
    })
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
/* socket.emit('crearMensaje', {
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
}); */

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});
//cuando una persona entra y sale
socket.on('listaPersonas', function(personas) {

    

});

socket.on('mensajePrivado', function(mensaje) {
    console.log('mensaje privado', mensaje);
});