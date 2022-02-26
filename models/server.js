const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../dbConfig')
class Server {
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.movies = '/api/movies';
        this.middlewares();
        this.initDB();
        this.routes();
    }
    async initDB(){
        await dbConnection();
    }
    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
    }
    routes() {
        this.app.use( this.movies, require('../routes/movies'));
    }
    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running on port :', this.port );
        });
    }
}
module.exports = Server;
