
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


const port = process.env.PORT || 3000;

server.listen( port , (err)=> {
    if(err)throw new Error(err);
})