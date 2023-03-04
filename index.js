
const express = require('express');
const path = require('path');
require('dotenv').config();

//DB config
const { dbConnection } = require('./database/config').dbConnection();

//App de Express
const app = express();

// Lectura y parseo del Body
app.use(express.json());

//Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

//Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

//Mis Rutas
app.use('/api/login', require('./routes/auth'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/mensajes', require('./routes/mensajes'));
app.use('/api/productos', require('./routes/productos'));
app.use('/api/recetas', require('./routes/recetas'));
app.use('/api/prescripciones', require('./routes/prescripciones'));
app.use('/api/roles', require('./routes/roles'));
app.use('/api/notificaciones', require('./routes/notificaciones'));
app.use('/api/farmacias', require('./routes/farmacias'));
app.use('/api/administradores', require('./routes/administradores'));
app.use('/api/pacientes', require('./routes/pacientes'));
app.use('/api/lotes', require('./routes/lotes'));
app.use('/api/cuerpos', require('./routes/cuerpos'));


const port = process.env.PORT || 3001;

server.listen( port , (err)=> {
    if(err)throw new Error(err);
})