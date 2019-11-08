const mysql = require('mysql')

/**
 * User Controller
 */
class User {
    builder() {
        this.dB = new Client({
            host: 'localhost',
            user: 'dbuser',
            password: 's3kreee7',
            database: 'my_db'
        });
        this.conexion()
            .then(() => {
                console.log("Conectado");
            })
            .catch(error => {
                console.log("ERROR al conectar con la base de datos");
            });

    }

    async conexion() {
        await this.dB.connect();
    }

    async getUser(username, password) {
        let query = "SELECT * from Users where User = '" + username + "' AND Password = '" + password + "';"
        this.dB.query(query, function (err, rows, fields) {
            if (err) {                
                return false;
            } else {                
                return true;
            }
        })
        this.dB.end();        
    }
}