/* console.log('hola mundo') */
require('dotenv').config();

const express = require('express')
const app = express()

/* app.get('/', function (req, res) {
    res.send('Actualizando process')
}) */

/* app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en puerto ', process.env.PORT);
}); */

const Server = require('./models/server');

const server = new Server();

server.listen(); 
