var mysql = require('mysql')
const config  = require('./config')
var dbconn = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.database
})

dbconn.connect(function(err){
    if(err){
        console.log('Database connection error!');
    }else{
        console.log('Database connection succesfull !')
    }
})

dbconn.query('SELECT * FROM usuarios', (err, records) => {
    if(err) throw err;
    console.log('Query succesfully execute!')
    console.log(records)
    
})

dbconn.end((err) =>{
    if(err){
        console.log('Somethingg happened')
    }
})