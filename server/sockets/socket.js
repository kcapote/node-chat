const { io } = require('../server');
const { Usuarios } = require('../classes/usuario');

const usuarios = new Usuarios();


io.on('connection', (client) => {

    //console.log('Usuario conectado');

    client.on('entrarChat', (usuario, callback) => {

        if (!usuario.nombre) {
            return callback({
                error: true,
                mensaje: 'El nombre es necesario'
            });
        }

        let personas = usuarios.agregarPersona(client.id, usuario.nombre);

        callback(personas)


    });


});