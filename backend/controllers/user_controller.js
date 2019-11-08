const mysql = require('mysql')

/**
 * User Controller
 */
class User {
    builder() {
        /**
         * Credentials of our database
         */
        this.dB = new Client({
            host: 'localhost',
            user: 'root',
            password: '123456789',
            database: 'cotizaon',
            port: 3306
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

    /**
     * This method determinies if the username and password sent are real
     * @param {*} username username sent by the front
     * @param {*} password password sent by the front
     */
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