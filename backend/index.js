const express = require('express');
const jwt = require('jsonwebtoken');
let middleware = require('./middleware');

const PORT = 3000;
const app = express();

app.use(express.json())

app.get('/', function(req, res){
    res.send("Welcome to the API");
})

const userRouter = require('./routes/user_router');
app.use(userRouter);

app.get('/user/data', middleware.verifyToken)

app.listen(PORT, ()=> {
    console.log("El api esta corriendo: http://localhost:3000");
})










