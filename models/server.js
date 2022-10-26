const express = require('express');
var cors = require('cors');



class Server {



    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //rutas de la aplicacion
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json())


        //DIrectorio Publico.
        this.app.use(express.static('public'));

    }


    routes() {

        //middleware de acceso a la ruta user

        this.app.use(this.userPath, require('../routes/user'));


        /* this.app.get('/api', (req, res) => {
            res.json({
                msg: 'get Api'
            });
        });

        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'get put'
            });
        });

        this.app.post('/api', (req, res) => {
            res.json({
                msg: 'get post'
            });
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'get delete'
            });
        }); */
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto ', this.port);
        });
    }
}

module.exports = Server