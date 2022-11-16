const { io } = require("../index");
const { comprobarJWT } = require("../helpers/jwt");
const {
  usuarioConectado,
  usuarioDesconectado,
  saveMessage,
} = require("../controllers/socket");

//Mensajes de Sockets
io.on("connection", (client) => {
  console.log("Cliente Conectado");

  const [validate, uid] = comprobarJWT(client.handshake.headers["x-token"]);

  //Verificar autentificación
  if (!validate) {
    return client.disconnect();
  }

  //Cliente autentificado
  usuarioConectado(uid);

  // Ingresar al usuario a una sala específica
  // sala global, client.id, 636eb1109b6df9306caff229
  client.join(uid);

  // Escuchar del cliente el mensaje-personal
  client.on('mensaje-personal', async (payload) => {
    //TODO: Grabar mensaje
    await saveMessage(payload);

    io.to(payload.para).emit('mensaje-personal', payload);
  });

  console.log("Cliente Autenticado");

  client.on("disconnect", () => {
    console.log("Cliente Desconectado");
    usuarioDesconectado(uid);
  });

  //TAREA
  client.on("emitir-mensaje", (payload) => {
    client.broadcast.emit("nuevo-mensaje", payload);
  });

  /*client.on('mensaje',(payload) => {
        console.log('Mensaje', payload);

        io.emit('mensaje', {admin: 'Nuevo mensaje'});
    });*/
});
